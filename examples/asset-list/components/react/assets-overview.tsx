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
import { isOsmosisAsset } from './osmosis-assets';
import { chainName } from '../../config';
import { useOsmosisClient, useRequest } from '../../hooks';
import { useChain } from '@cosmos-kit/react';
import { Coin } from '@cosmjs/amino';
import { QueryAllBalancesRequest } from 'osmojs/types/codegen/cosmos/bank/v1beta1/query';
import {
  baseUnitsToDollarValue,
  convertGammTokenToDollarValue,
  osmoDenomToSymbol,
} from '../../utils';
import BigNumber from 'bignumber.js';

// TODO: no assets to deposit or withdraw

interface IProps {
  assets: PrettyAsset[];
  prices: PriceHash | undefined;
  balances: Coin[] | undefined;
  updateBalances: (arg: QueryAllBalancesRequest) => Promise<void>;
  isGettingBalances: boolean;
}

const AssetsOverview: React.FC<IProps> = ({
  assets,
  prices,
  isGettingBalances,
  updateBalances,
  balances,
}) => {
  const [transferType, setTransferType] = useState<TransferValues>();
  const { address } = useChain(chainName);
  const osmosisClient = useOsmosisClient(chainName);
  const isMounted = useRef(false);

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
    if (!address || !prices) return;
    getLockedCoins.request({ owner: address });
    getDelegations.request({ delegatorAddr: address });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, prices]);

  useEffect(() => {
    if (isMounted.current) return;
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
          const symbol = osmoDenomToSymbol(coin!.denom);
          return baseUnitsToDollarValue(prices, symbol, coin!.amount);
        })
        .reduce((total, cur) => total.plus(cur), new BigNumber(0));
      return totalDelegation.toString();
    }
    return '0';
  }, [getDelegations.data, prices]);

  const bondedTotal = useMemo(() => {
    if (getPoolsByIds.data && prices && getLockedCoins.data) {
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
  }, [getLockedCoins.data, getPoolsByIds.data, prices]);

  const assetsBalanceTotal = useMemo(() => {
    if (balances && prices) {
      const totalBalance = balances
        .filter(({ denom }) => !denom.startsWith('gamm') && prices[denom])
        .map(({ denom, amount }) => {
          const symbol = osmoDenomToSymbol(denom);
          const dollarValue = baseUnitsToDollarValue(prices, symbol, amount);
          return dollarValue;
        })
        .reduce((total, cur) => total.plus(cur), new BigNumber(0));
      return totalBalance.toString();
    }
    return '0';
  }, [balances, prices]);

  const poolLiquidityTotal = useMemo(() => {
    if (getPoolsByIds.data && balances && prices) {
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
  }, [balances, getPoolsByIds.data, prices]);

  const total = useMemo(() => {
    return [assetsBalanceTotal, poolLiquidityTotal, bondedTotal, stakedTotal]
      .reduce((total, cur) => total.plus(cur), new BigNumber(0))
      .decimalPlaces(2)
      .toString();
  }, [assetsBalanceTotal, poolLiquidityTotal, bondedTotal, stakedTotal]);

  const transferableAssets = useMemo(
    () => assets.filter((asset) => !isOsmosisAsset(asset)),
    [assets]
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
            Total on Osmosis
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
          <NormalButton
            type="outline"
            text={Transfer.Withdraw}
            size={{ h: '48px', w: '160px' }}
            onClick={() => {
              setTransferType(Transfer.Withdraw);
              modalControl.onOpen();
            }}
          />
          <NormalButton
            type="solid"
            text="Deposit"
            size={{ h: '48px', w: '160px' }}
            onClick={() => {
              setTransferType(Transfer.Deposit);
              modalControl.onOpen();
            }}
          />
        </HStack>
      </Flex>

      {prices && transferType && (
        <DropdownTransferModal
          prices={prices}
          assets={transferableAssets}
          transferType={transferType}
          modalControl={modalControl}
          updateBalances={updateBalances}
        />
      )}
    </Box>
  );
};

export default AssetsOverview;
