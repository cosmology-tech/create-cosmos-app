import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Flex,
  Box,
  Center,
  NumberInput,
  NumberInputField,
  CircularProgress,
  CircularProgressLabel,
  useMediaQuery,
} from '@chakra-ui/react';
import { Pool } from './provide-liquidity';
import { useChain } from '@cosmos-kit/react';
import { osmosis } from 'osmojs';
import { Coin } from 'osmojs/types/codegen/cosmos/base/v1beta1/coin';
import { chainName } from '../../config/defaults';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { LargeButton } from './modal-components';
import {
  getSymbolForDenom,
  prettyPool,
  osmosisAssets,
  baseUnitsToDisplayUnits,
  getExponentByDenom,
  calcShareOutAmount,
  getOsmoDenomForSymbol,
  baseUnitsToDollarValue,
  convertDollarValueToCoins,
} from '../../utils';
import { getLogoUrlFromDenom } from './pool-list';
import { ChainLogo } from './pool-card';
import { PriceHash } from '../../utils/types';
import BigNumber from 'bignumber.js';
import { truncDecimals } from './pool-detail-modal';
import { TransactionResult } from '../types';
import { coin, coins as aminoCoins } from '@cosmjs/amino';
import { useTransactionToast } from './hooks';

type PrettyAsset = Pick<
  ReturnType<typeof prettyPool>,
  'poolAssetsPretty'
>['poolAssetsPretty'][number];

type InputToken = {
  denom: string;
  inputAmount: string;
};

const getChainNameForDenom = (denom: string) => {
  return osmosisAssets.find((asset) => asset.base === denom)?.name;
};

const TokenInput = ({
  token,
  allTokens,
  singleToken,
  setSingleToken,
  balances,
  prices,
  inputTokens,
  setInputTokens,
}: {
  token: PrettyAsset;
  allTokens: PrettyAsset[];
  singleToken: string | null;
  setSingleToken: (symbol: string | null) => void;
  balances: Coin[];
  prices: PriceHash;
  inputTokens: InputToken[];
  setInputTokens: (
    coins: InputToken[] | ((prev: InputToken[]) => InputToken[])
  ) => void;
}) => {
  const isSingleAsset = allTokens.some((token) => token.symbol === singleToken);
  const isSelected = token.symbol === singleToken;
  const singleAssetRatio = isSelected ? 100 : 0;
  const ratio = isSingleAsset ? singleAssetRatio : Number(token.ratio) * 100;

  const handleIconClick = () => {
    const otherSymbol = allTokens.find(
      ({ symbol }) => symbol !== token.symbol
    )!.symbol;
    setSingleToken(isSingleAsset ? null : otherSymbol);
  };

  const balance = balances.find((b) => b.denom === token.denom);

  const availableBalance = balance
    ? baseUnitsToDisplayUnits(token.symbol, balance.amount)
    : 0;

  const displayAmountToValue = (amount: string) => {
    return new BigNumber(amount || 0)
      .multipliedBy(prices[token.denom])
      .toString();
  };

  const amount = inputTokens.find(
    ({ denom }) => denom === token.denom
  )?.inputAmount;

  const [isMobile, isMiddleScreen] = useMediaQuery([
    '(max-width: 480px)',
    '(max-width: 800px)',
  ]);

  return (
    <Box>
      <Text
        mb="10px"
        fontSize="14px"
        color="#697584"
        textAlign="right"
        lineHeight="shorter"
        opacity={isSingleAsset && !isSelected ? 0.3 : 1}
      >
        Available&nbsp;
        <span style={{ fontWeight: '600' }}>
          {availableBalance} {token.symbol}
        </span>
      </Text>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        wrap={isMiddleScreen ? 'wrap' : 'nowrap'}
        gap="20px"
      >
        <Flex justifyContent="space-between" alignItems="center" width="100%">
          <Flex alignItems="center">
            <CircularProgress
              value={ratio}
              size="70px"
              thickness="6px"
              color="#2C3137"
            >
              <CircularProgressLabel>
                <Text fontWeight="600" fontSize="18px" color="#2C3137">
                  {ratio}%
                </Text>
              </CircularProgressLabel>
            </CircularProgress>
            <Box ml="16px">
              <Text fontWeight="semibold" fontSize="14px" color="#2C3137">
                {token.symbol}
              </Text>
              <Text fontSize="12px" color="#697584">
                {getChainNameForDenom(token.denom)}
              </Text>
            </Box>
          </Flex>
          {(isSingleAsset && isSelected) || (
            <Center
              boxSize="38px"
              bgColor="#EEF2F8"
              borderRadius="4px"
              cursor="pointer"
              opacity={1}
              // mr="20px"
              onClick={handleIconClick}
            >
              {isSingleAsset && !isSelected ? (
                <AddIcon boxSize={12} />
              ) : (
                <MinusIcon boxSize={12} />
              )}
            </Center>
          )}
        </Flex>

        <Flex
          h="68px"
          position="relative"
          opacity={isSingleAsset && !isSelected ? 0.3 : 1}
        >
          <Center
            w="68px"
            h="100%"
            bgColor="#EEF2F8"
            border="1px solid #D1D6DD"
            borderRight="none"
            borderTopLeftRadius="6px"
            borderBottomLeftRadius="6px"
          >
            <ChainLogo url={getLogoUrlFromDenom(token.denom)} width="38px" />
          </Center>

          <NumberInput
            h="68px"
            value={amount}
            step={0.1}
            bgColor="#EEF2F8"
            border="1px solid #D1D6DD"
            borderTopRightRadius="6px"
            borderBottomRightRadius="6px"
            onChange={(val) => {
              setInputTokens((prev: InputToken[]) =>
                prev.map((inputToken) => {
                  if (inputToken.denom === token.denom) {
                    return { ...inputToken, inputAmount: val };
                  }
                  return {
                    ...inputToken,
                    inputAmount: new BigNumber(val).gt(0)
                      ? new BigNumber(displayAmountToValue(val))
                          .dividedBy(prices[inputToken.denom])
                          .decimalPlaces(2)
                          .toString()
                      : '',
                  };
                })
              );
            }}
          >
            <NumberInputField
              border="none"
              borderRadius="0"
              h="100%"
              w={
                isMobile
                  ? '100%'
                  : {
                      sm: '100%',
                      md: isMiddleScreen ? '100%' : '240px',
                      lg: '420px',
                    }
              }
              borderTopRightRadius="6px"
              borderBottomRightRadius="6px"
              pl="18px"
              pr="120px"
              fontWeight="semibold"
              fontSize="18px"
              color="#2C3137"
              disabled={isSingleAsset && !isSelected}
            />
          </NumberInput>

          <Center h="68px" position="absolute" right="21px" bottom={0}>
            <Flex alignItems="center">
              <Text
                fontWeight="semibold"
                lineHeight="shorter"
                fontSize="14px"
                color="#2C3137"
                mr="6px"
              >
                {token.symbol}
              </Text>
              {amount && !Number.isNaN(Number(amount)) && (
                <Text fontSize="12px" color="#697584">
                  ≈ ${truncDecimals(displayAmountToValue(amount), 2)}
                </Text>
              )}
            </Flex>
          </Center>
        </Flex>
      </Flex>
    </Box>
  );
};

const { joinPool, joinSwapExternAmountIn } =
  osmosis.gamm.v1beta1.MessageComposer.withTypeUrl;

const AddLiquidityModal = ({
  isOpen,
  onClose,
  currentPool,
  balances,
  prices,
  updatePoolsData,
}: {
  isOpen: boolean;
  onClose: () => void;
  currentPool: Pool;
  balances: Coin[];
  prices: PriceHash;
  updatePoolsData: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [singleToken, setSingleToken] = useState<string | null>(null);
  const [inputTokens, setInputTokens] = useState<InputToken[]>(
    currentPool.poolAssets.map((asset) => ({
      denom: asset.token!.denom,
      inputAmount: '',
    }))
  );

  console.log('add liquidity run');

  const { showToast } = useTransactionToast();
  const [isMobile] = useMediaQuery('(max-width: 480px)');

  useEffect(() => {
    setInputTokens(
      currentPool.poolAssets.map((asset) => ({
        denom: asset.token!.denom,
        inputAmount: '',
      }))
    );
  }, [currentPool]);

  const { getSigningStargateClient, address } = useChain(chainName);

  const poolName = currentPool?.poolAssets.map(({ token }) =>
    getSymbolForDenom(token!.denom)
  );

  const pool = prettyPool(currentPool);

  const currentInputTokens = singleToken
    ? [
        inputTokens.find(
          ({ denom }) => denom === getOsmoDenomForSymbol(singleToken)
        )!,
      ]
    : inputTokens;

  const hasEmptyAmount = currentInputTokens.some((t) => !t.inputAmount);

  const hasZeroAmount = currentInputTokens.some((t) =>
    new BigNumber(t.inputAmount).lte(0)
  );

  const hasInsufficientAmount = currentInputTokens.some((t) => {
    const balance = balances.find((b) => b.denom === t.denom)?.amount || 0;
    const symbol = getSymbolForDenom(t.denom);
    return new BigNumber(t.inputAmount).gt(
      baseUnitsToDisplayUnits(symbol, balance)
    );
  });

  const btnText = hasEmptyAmount
    ? 'Amount is empty'
    : hasInsufficientAmount
    ? 'Insufficient amount'
    : hasZeroAmount
    ? 'Amount is Zero'
    : 'Add liquidity';

  const closeModal = () => {
    setInputTokens(
      currentPool.poolAssets.map((asset) => ({
        denom: asset.token!.denom,
        inputAmount: '',
      }))
    );
    setIsLoading(false);
    setSingleToken(null);
    onClose();
  };

  const handleClick = async () => {
    setIsLoading(true);

    const stargateClient = await getSigningStargateClient();

    if (!stargateClient || !address) {
      console.error('stargateClient undefined or address undefined.');
      return;
    }

    const allCoins = inputTokens.map(({ denom, inputAmount }) => ({
      denom,
      amount: new BigNumber(inputAmount)
        .shiftedBy(getExponentByDenom(denom))
        .toString(),
    }));

    let msg = [];

    if (singleToken) {
      const inputCoin = allCoins.find(
        (coin) => coin.denom === getOsmoDenomForSymbol(singleToken)
      )!;
      const coinSymbol = getSymbolForDenom(inputCoin.denom);
      const inputValue = baseUnitsToDollarValue(
        prices,
        coinSymbol,
        inputCoin.amount
      );
      const coinsNeeded = convertDollarValueToCoins(inputValue, pool, prices);
      const shareOutMinAmount = calcShareOutAmount(pool, coinsNeeded);
      const joinSwapExternAmountInMsg = joinSwapExternAmountIn({
        poolId: currentPool.id,
        sender: address,
        tokenIn: inputCoin,
        shareOutMinAmount,
      });
      msg.push(joinSwapExternAmountInMsg);
    } else {
      const shareOutAmount = calcShareOutAmount(pool, allCoins);
      const tokenInMaxs = allCoins.map((c: Coin) => {
        return coin(c.amount, c.denom);
      });
      const joinPoolMsg = joinPool({
        poolId: currentPool.id,
        sender: address,
        shareOutAmount,
        tokenInMaxs,
      });
      msg.push(joinPoolMsg);
    }

    const fee = {
      amount: aminoCoins(0, 'uosmo'),
      gas: '240000',
    };

    try {
      const res = await stargateClient.signAndBroadcast(address, msg, fee);
      console.log(res);
      stargateClient.disconnect();
      setIsLoading(false);
      showToast(res.code);
      closeModal();
      updatePoolsData();
    } catch (error) {
      console.log(error);
      stargateClient.disconnect();
      setIsLoading(false);
      showToast(TransactionResult.Failed);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      isCentered
      size={isMobile ? 'sm' : { sm: 'sm', md: 'xl', lg: '3xl' }}
    >
      <ModalOverlay bg="blackAlpha.800" />
      <ModalContent>
        <ModalHeader>
          <Text fontWeight="600" fontSize="20px" color="#2C3137">
            Add liquidity
          </Text>
          <Text fontWeight="400" fontSize="14px" color="#697584">
            {poolName?.join(' / ')}
          </Text>
        </ModalHeader>
        <ModalCloseButton color="#697584" />
        <ModalBody>
          {pool.poolAssetsPretty.map((token, i) => (
            <Box
              key={token.symbol}
              mb={i === pool.poolAssetsPretty.length - 1 ? 0 : '36px'}
            >
              <TokenInput
                singleToken={singleToken}
                setSingleToken={setSingleToken}
                allTokens={pool.poolAssetsPretty}
                token={token}
                balances={balances}
                prices={prices}
                inputTokens={inputTokens}
                setInputTokens={setInputTokens}
              />
            </Box>
          ))}
          <Center mt="44px" mb="24px">
            <LargeButton
              btnText={btnText}
              handleClick={handleClick}
              isLoading={isLoading}
              width="100%"
              disabled={
                hasEmptyAmount || hasInsufficientAmount || hasZeroAmount
              }
            />
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddLiquidityModal;
