import React from 'react';
import {
  Text,
  Flex,
  Box,
  Center,
  NumberInput,
  NumberInputField,
  CircularProgress,
  CircularProgressLabel,
  useMediaQuery,
  useColorModeValue,
} from '@chakra-ui/react';
import { Coin } from 'osmojs/types/codegen/cosmos/base/v1beta1/coin';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
  prettyPool,
  osmosisAssets,
  baseUnitsToDisplayUnits,
  calcMaxCoinsForPool,
  getSymbolForDenom,
} from '../../utils';
import { getLogoUrlFromDenom } from './pool-list';
import { ChainLogo } from './pool-card';
import { PoolPretty, PriceHash } from '../../utils/types';
import BigNumber from 'bignumber.js';
import { truncDecimals } from './pool-detail-modal';

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

export const TokenInput = ({
  token,
  allTokens,
  singleToken,
  setSingleToken,
  balances,
  poolData,
  prices,
  inputTokens,
  setInputTokens,
}: {
  token: PrettyAsset;
  allTokens: PrettyAsset[];
  singleToken: string | null;
  setSingleToken: (symbol: string | null) => void;
  balances: Coin[];
  poolData: PoolPretty;
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
    : '0';

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

  const titleColor = useColorModeValue('#697584', '#A7B4C2');
  const statColor = useColorModeValue('#2C3137', '#EEF2F8');
  const bgColor = useColorModeValue('#EEF2F8', '#1D2024');
  const borderColor = useColorModeValue('#D1D6DD', '#434B55');

  const syncInputTokens = (inputTokens: InputToken[], displayAmount: string) =>
    inputTokens.map((inputToken) => {
      if (inputToken.denom === token.denom) {
        return { ...inputToken, inputAmount: displayAmount };
      }
      return {
        ...inputToken,
        inputAmount: new BigNumber(displayAmount).gt(0)
          ? new BigNumber(displayAmountToValue(displayAmount))
              .dividedBy(prices[inputToken.denom])
              .decimalPlaces(2)
              .toString()
          : '',
      };
    });

  return (
    <Box>
      <Text
        mb="10px"
        fontSize="14px"
        color={titleColor}
        textAlign="right"
        lineHeight="shorter"
        opacity={isSingleAsset && !isSelected ? 0.3 : 1}
      >
        Available&nbsp;
        <span
          style={{
            fontWeight: '600',
            cursor: isSingleAsset && !isSelected ? 'initial' : 'pointer',
          }}
          onClick={() => {
            if (!isSingleAsset) {
              const maxCoins = calcMaxCoinsForPool(prices, poolData, balances);
              setInputTokens((prev: InputToken[]) =>
                prev.map((inputToken) => {
                  const coin = maxCoins.find(
                    ({ denom }) => denom === inputToken.denom
                  )!;
                  const symbol = getSymbolForDenom(coin.denom);
                  return {
                    ...inputToken,
                    inputAmount: baseUnitsToDisplayUnits(symbol, coin.amount),
                  };
                })
              );
              return;
            }
            if (!isSelected) return;
            setInputTokens((prev) => syncInputTokens(prev, availableBalance));
          }}
        >
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
              color={statColor}
              trackColor={bgColor}
            >
              <CircularProgressLabel>
                <Text fontWeight="600" fontSize="18px" color={statColor}>
                  {ratio}%
                </Text>
              </CircularProgressLabel>
            </CircularProgress>
            <Box ml="16px">
              <Text fontWeight="semibold" fontSize="14px" color={statColor}>
                {token.symbol}
              </Text>
              <Text fontSize="12px" color={titleColor}>
                {getChainNameForDenom(token.denom)}
              </Text>
            </Box>
          </Flex>
          {(isSingleAsset && isSelected) || (
            <Center
              boxSize="38px"
              bgColor={bgColor}
              borderRadius="4px"
              cursor="pointer"
              opacity={1}
              onClick={handleIconClick}
            >
              {isSingleAsset && !isSelected ? (
                <AddIcon boxSize={4} />
              ) : (
                <MinusIcon boxSize={4} />
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
            bgColor={bgColor}
            border={`1px solid ${borderColor}`}
            borderRight="none"
            borderTopLeftRadius="6px"
            borderBottomLeftRadius="6px"
          >
            <ChainLogo url={getLogoUrlFromDenom(token.denom)} width="38px" />
          </Center>

          <NumberInput
            h="68px"
            value={amount}
            bgColor={bgColor}
            border={`1px solid ${borderColor}`}
            borderTopRightRadius="6px"
            borderBottomRightRadius="6px"
            onChange={(val) => {
              setInputTokens((prev) => syncInputTokens(prev, val));
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
              color={statColor}
              disabled={isSingleAsset && !isSelected}
            />
          </NumberInput>

          <Center h="68px" position="absolute" right="21px" bottom={0}>
            <Flex alignItems="center">
              <Text
                fontWeight="semibold"
                lineHeight="shorter"
                fontSize="14px"
                color={statColor}
                mr="6px"
              >
                {token.symbol}
              </Text>
              {amount && !Number.isNaN(Number(amount)) && (
                <Text fontSize="12px" color={titleColor}>
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
