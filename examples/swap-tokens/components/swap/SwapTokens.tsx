import BigNumber from 'bignumber.js';
import { useEffect, useMemo, useState } from 'react';
import { Box, Center, Divider, Text } from '@chakra-ui/react';
import { coin } from '@cosmjs/amino';
import { useChain } from '@cosmos-kit/react';
import { FEES, osmosis } from 'osmo-query';

import {
  getInputData,
  getSwapDetails,
  getTokensWithRoutes,
  noDecimals,
  truncDecimals,
} from '@/utils';
import { defaultChainName } from '@/config';
import { useSwapData, useTx } from '@/hooks';
import { LoadingMode, SwapOptionType, SwapView } from './swap-ui';

const slippages = ['1%', '2.5%', '3%', '5%'];

const { swapExactAmountIn } = osmosis.gamm.v1beta1.MessageComposer.withTypeUrl;

export const SwapTokens = () => {
  const [fromToken, setFromToken] = useState<SwapOptionType>();
  const [toToken, setToToken] = useState<SwapOptionType>();
  const [inputAmount, setInputAmount] = useState('');
  const [slippage, setSlippage] = useState(slippages[0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadingMode, setLoadingMode] = useState(LoadingMode.INITIAL);

  const { data, isLoading, refetch } = useSwapData();
  const { address } = useChain(defaultChainName);
  const { tx } = useTx(defaultChainName);

  useEffect(() => {
    setLoadingMode(LoadingMode.INITIAL);
  }, [address]);

  const inputData = useMemo(() => {
    return getInputData({
      prices: data?.prices,
      toToken,
      fromToken,
      inputAmount,
    });
  }, [data?.prices, fromToken, inputAmount, toToken]);

  const handleInputChange = (value: string) => {
    if (!fromToken) return;

    const val = new BigNumber(value);
    const inputMaxAmount = fromToken?.displayAmount || '0';
    const isValueNumericAndPositive = !isNaN(Number(value)) && val.gt(0);

    const inputAmount = !isValueNumericAndPositive
      ? '0'
      : val.gt(inputMaxAmount)
      ? inputMaxAmount
      : value;

    setInputAmount(inputAmount);
  };

  const handleSwapSwitch = () => {
    if (!fromToken || !toToken) return;
    setFromToken(toToken);
    setToToken(fromToken);
    setInputAmount(inputData?.toToken.outputAmount || '0');
  };

  useEffect(() => {
    if (!data?.assetOptions) return;
    const assets = data.assetOptions;
    setFromToken((prev) =>
      prev ? assets.find(({ denom }) => denom === prev.denom) : assets[0]
    );
    setToToken((prev) =>
      prev ? assets.find(({ denom }) => denom === prev.denom) : assets[1]
    );
    setInputAmount('');
  }, [data?.assetOptions]);

  const swapTokensWithRoutes = useMemo(() => {
    if (!fromToken || !toToken || !data?.pairs) return;
    return getTokensWithRoutes({
      fromToken,
      toToken,
      inputData,
      slippage,
      pairs: data?.pairs,
    });
  }, [fromToken, toToken, inputData, data?.pairs, slippage]);

  const swapDetails = useMemo(() => {
    if (!swapTokensWithRoutes || !toToken || !data?.pools) return;
    return getSwapDetails({
      toToken,
      inputData,
      swapTokensWithRoutes,
      pools: data?.pools,
    });
  }, [data?.pools, inputData, swapTokensWithRoutes, toToken]);

  const handleSubmit = async () => {
    if (!address || !swapTokensWithRoutes) return;
    setIsSubmitting(true);

    const { tokenIn, tokenOut, routes } = swapTokensWithRoutes;
    const msg = swapExactAmountIn({
      sender: address,
      routes,
      tokenIn: coin(noDecimals(tokenIn.amount), tokenIn.denom),
      tokenOutMinAmount: noDecimals(tokenOut.amount),
    });
    const fee = FEES.osmosis.swapExactAmountIn('low');

    await tx([msg], {
      fee,
      onSuccess: () => {
        refetch();
        setLoadingMode(LoadingMode.AFTER_SWAP);
      },
    });

    setIsSubmitting(false);
  };

  const tokenPrice = useMemo(() => {
    if (!fromToken || !toToken || !data?.prices)
      return {
        priceRate: '0',
        dollarValue: '0',
      };

    const priceRate = new BigNumber(data.prices[fromToken.denom])
      .div(data.prices[toToken.denom])
      .decimalPlaces(6)
      .toString();

    const fromTokenPrice = truncDecimals(
      data.prices[fromToken.denom].toString(),
      4
    );

    return {
      priceRate,
      dollarValue: fromTokenPrice,
    };
  }, [data?.prices, fromToken, toToken]);

  const isAmountEmpty = new BigNumber(
    inputData.fromToken.inputAmount
  ).isEqualTo(0);

  const isAmountOverMaximum = new BigNumber(inputData.fromToken.inputAmount).gt(
    fromToken?.displayAmount || 0
  );

  const hasRoute =
    swapTokensWithRoutes?.routes && swapTokensWithRoutes.routes?.length > 0;

  const btnText =
    !hasRoute && !isLoading
      ? 'No route for this trade'
      : isAmountOverMaximum
      ? 'Insufficient balance'
      : '';

  const isSubmitBtnDisabled =
    !hasRoute ||
    isLoading ||
    isSubmitting ||
    isAmountEmpty ||
    isAmountOverMaximum;

  const dropdownData = useMemo(() => {
    if (!data?.assetOptions) return [];
    return data.assetOptions.filter(
      ({ symbol }) => symbol !== fromToken?.symbol && symbol !== toToken?.symbol
    );
  }, [data?.assetOptions, fromToken?.symbol, toToken?.symbol]);

  return (
    <Box>
      <Divider mb="60px" />
      {address ? (
        <Box width="500px" mx="auto" mb="60px">
          <SwapView
            toToken={toToken}
            fromToken={fromToken}
            dropdownData={dropdownData}
            inputData={inputData}
            onAmountInputChange={handleInputChange}
            onFromDropdownChange={setFromToken}
            onToDropdownChange={setToToken}
            onSwapSwitch={handleSwapSwitch}
            onSwapSubmit={handleSubmit}
            slippageConfig={{
              slippages,
              selectedSlippage: slippage,
              setSelectedSlippage: setSlippage,
            }}
            tokenPrice={tokenPrice}
            swapDetails={swapDetails}
            submitButtonConfig={{
              disabled: isSubmitBtnDisabled,
              loading: isSubmitting,
              btnText,
            }}
            loadingConfig={{ mode: loadingMode, isLoading }}
          />
        </Box>
      ) : (
        <Center w="100%" h="200px" mb="60px">
          <Text fontSize="20px" color="gray.800">
            Please connect the wallet
          </Text>
        </Center>
      )}
      <Divider mb="60px" />
    </Box>
  );
};
