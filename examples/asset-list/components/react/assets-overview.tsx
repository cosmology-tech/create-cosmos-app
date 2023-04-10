import React, { useMemo, useState, useEffect, useRef } from 'react';
import {
  Box,
  Flex,
  HStack,
  Skeleton,
  Text,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { NormalButton } from './buttons';
import DropdownTransferModal from './dropdown-transfer-modal';
import { PrettyAsset, PriceHash, Transfer, TransferValues } from '../types';
import { useIbcAssets, useOsmosisClient, useRequest } from '../../hooks';
import { useChain } from '@cosmos-kit/react';
import { Coin } from '@cosmjs/amino';
import { QueryAllBalancesRequest } from 'osmojs/types/codegen/cosmos/bank/v1beta1/query';
import { convertGammTokenToDollarValue } from '../../utils';
import BigNumber from 'bignumber.js';
import { ChainName } from '@cosmos-kit/core';
import { chainName as osmoChainName } from '../../config';

interface IProps {
  assets: PrettyAsset[];
  prices: PriceHash | undefined;
  balances: Coin[] | undefined;
  updateBalances: (arg: QueryAllBalancesRequest) => Promise<void>;
  isGettingBalances: boolean;
  selectedChainName: ChainName;
}

const AssetsOverview: React.FC<IProps> = ({
  assets,
  prices,
  isGettingBalances,
  updateBalances,
  balances,
  selectedChainName,
}) => {
  const [transferType, setTransferType] = useState<TransferValues>();
  const { address, chain } = useChain(selectedChainName);
  const osmosisClient = useOsmosisClient(selectedChainName);

  const isMounted = useRef(false);
  const isOsmosisChain = selectedChainName === osmoChainName;

  const { calcCoinDollarValue, isNativeAsset } =
    useIbcAssets(selectedChainName);

  const getPoolsByIds = useRequest<typeof osmosisClient.getPoolsByIds>(
    osmosisClient.getPoolsByIds
  );
  const getLockedCoins = useRequest<typeof osmosisClient.getLockedCoins>(
    osmosisClient.getLockedCoins
  );
  const getDelegations = useRequest<typeof osmosisClient.getDelegations>(
    osmosisClient.getDelegations
  );

  const modalControl = useDisclosure();

  useEffect(() => {
    if (!address) return;
    getDelegations.request({ delegatorAddr: address });
    if (isOsmosisChain) getLockedCoins.request({ owner: address });

    return () => {
      getDelegations.cleanUpData();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  useEffect(() => {
    if (isMounted.current || !isOsmosisChain) return;
    if (getLockedCoins.data && balances && prices) {
      isMounted.current = true;
      const gammTokensFromBalance = balances
        .filter(({ denom }) => denom.startsWith('gamm'))
        .map(({ denom }) => denom);
      const gammTokensLocked = getLockedCoins.data.map(({ denom }) => denom);
      const uniqueGameTokens = [
        ...new Set([...gammTokensFromBalance, ...gammTokensLocked]),
      ];
      const poolIds = uniqueGameTokens.map((denom) => denom.split('/')[2]);
      getPoolsByIds.request(poolIds, prices);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [balances, getLockedCoins.data, prices]);

  const stakedTotal = useMemo(() => {
    if (getDelegations.data && prices) {
      const totalDelegation = getDelegations.data
        .map(({ balance }) => balance)
        .map((coin) => {
          if (!coin) return '0';
          return calcCoinDollarValue(prices, coin);
        })
        .reduce((total, cur) => total.plus(cur), new BigNumber(0));
      return totalDelegation.toString();
    }
    return '0';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getDelegations.data, prices]);

  const assetsBalanceTotal = useMemo(() => {
    if (balances && prices) {
      const totalBalance = balances
        .filter(({ denom }) => !denom.startsWith('gamm') && prices[denom])
        .map(({ denom, amount }) =>
          calcCoinDollarValue(prices, { denom, amount })
        )
        .reduce((total, cur) => total.plus(cur), new BigNumber(0));
      return totalBalance.toString();
    }
    return '0';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [balances, prices]);

  const bondedTotal = useMemo(() => {
    if (getPoolsByIds.data && prices && getLockedCoins.data && isOsmosisChain) {
      const totalBonded = getLockedCoins.data
        .map((coin) => {
          const poolData = getPoolsByIds.data!.find(
            (pool) => pool.id.low.toString() === coin.denom.split('/')[2]
          )!;
          return convertGammTokenToDollarValue(coin, poolData, prices);
        })
        .reduce((total, cur) => total.plus(cur), new BigNumber(0));
      return totalBonded.toString();
    }
    return '0';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getLockedCoins.data, getPoolsByIds.data, prices]);

  const poolLiquidityTotal = useMemo(() => {
    if (getPoolsByIds.data && balances && prices && isOsmosisChain) {
      const totalLiqudity = balances
        .filter(({ denom }) => denom.startsWith('gamm'))
        .map((coin) => {
          const poolData = getPoolsByIds.data!.find(
            (pool) => pool.id.low.toString() === coin.denom.split('/')[2]
          )!;
          return convertGammTokenToDollarValue(coin, poolData, prices);
        })
        .reduce((total, cur) => total.plus(cur), new BigNumber(0));
      return totalLiqudity.toString();
    }
    return '0';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [balances, getPoolsByIds.data, prices]);

  const total = useMemo(() => {
    return [assetsBalanceTotal, poolLiquidityTotal, bondedTotal, stakedTotal]
      .reduce((total, cur) => total.plus(cur), new BigNumber(0))
      .decimalPlaces(2)
      .toString();
  }, [assetsBalanceTotal, poolLiquidityTotal, bondedTotal, stakedTotal]);

  const transferableAssets = useMemo(
    () => assets.filter((asset) => !isNativeAsset(asset)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [assets]
  );

  const hasNonEmptyBalance = useMemo(
    () => transferableAssets.some((asset) => new BigNumber(asset.amount).gt(0)),
    [transferableAssets]
  );

  const isLoading =
    isGettingBalances ||
    getLockedCoins.loading ||
    getPoolsByIds.loading ||
    getDelegations.loading;

  return (
    <Box p="24px" bg="#F5F7FB" borderRadius="6px" mb="26px">
      <Flex justifyContent="space-between">
        <Box>
          <Text
            fontSize="14px"
            fontWeight="600"
            color="#697584"
            lineHeight="16px"
            mb="4px"
          >
            Total on {chain.pretty_name}
          </Text>
          {isLoading ? (
            <Skeleton w="80px" h="26px" mt="8px" />
          ) : (
            <Text
              fontSize="26px"
              fontWeight="600"
              color="#2C3137"
              lineHeight="30px"
            >
              <span style={{ fontSize: '14px', lineHeight: '16px' }}>$</span>
              {total}
            </Text>
          )}
        </Box>

        <HStack spacing="26px">
          {hasNonEmptyBalance && (
            <NormalButton
              type="outline"
              text={Transfer.Withdraw}
              size={{ h: '48px', w: '160px' }}
              onClick={() => {
                setTransferType(Transfer.Withdraw);
                modalControl.onOpen();
              }}
            />
          )}
          {transferableAssets.length > 0 && (
            <NormalButton
              type="solid"
              text="Deposit"
              size={{ h: '48px', w: '160px' }}
              onClick={() => {
                setTransferType(Transfer.Deposit);
                modalControl.onOpen();
              }}
            />
          )}
        </HStack>
      </Flex>

      {prices && transferType && (
        <DropdownTransferModal
          prices={prices}
          assets={transferableAssets}
          transferType={transferType}
          modalControl={modalControl}
          updateBalances={updateBalances}
          selectedChainName={selectedChainName}
        />
      )}
    </Box>
  );
};

export default AssetsOverview;
