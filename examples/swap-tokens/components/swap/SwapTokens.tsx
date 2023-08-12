import BigNumber from 'bignumber.js';
import Long from 'long';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Center, Divider, Text } from '@chakra-ui/react';

import { Asset } from '@chain-registry/types';
import { coin } from '@cosmjs/amino';
import { useChain, useManager } from '@cosmos-kit/react';
import { FEES, osmosis } from 'osmojs';
import { Coin } from 'osmojs/dist/codegen/cosmos/base/v1beta1/coin';
import { Pool } from 'osmojs/dist/codegen/osmosis/gamm/pool-models/balancer/balancerPool';

import { TransactionResult } from '../types';
import { CoinDenom, PriceHash } from '../../utils/types';
import {
  baseUnitsToDisplayUnits,
  baseUnitsToDollarValue,
  calcAmountWithSlippage,
  calcPriceImpactGivenIn,
  calcPriceImpactGivenOut,
  getChainName,
  getExponentByDenom,
  getOsmoAssetByDenom,
  getPriceHash,
  getRoutesForTrade,
  isEmptyArray,
  makePoolPairs,
  noDecimals,
  osmoDenomToSymbol,
  osmosisAssets,
  truncDecimals,
} from '../../utils';
import { defaultChainName } from '../../config';
import { useTransactionToast, useRpcClient } from '../../hooks';
import {
  LoadingConfig,
  LoadingMode,
  SwapOptionType,
  SwapView,
} from './swap-ui';

const slippages = ['1%', '2.5%', '3%', '5%'];

const { swapExactAmountIn } = osmosis.gamm.v1beta1.MessageComposer.withTypeUrl;

interface FetchedData {
  pools: Pool[];
  prices: PriceHash;
  balances: Coin[];
}

export const SwapTokens = () => {
  const [fromToken, setFromToken] = useState<SwapOptionType>();
  const [toToken, setToToken] = useState<SwapOptionType>();
  const [inputAmount, setInputAmount] = useState<string>('');
  const [selectedSlippage, setSelectedSlippage] = useState<string>(
    slippages[0]
  );
  const [fetchedData, setFetchedData] = useState<FetchedData>({
    pools: [],
    prices: {},
    balances: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadingConfig, setLoadingConfig] = useState<LoadingConfig>({
    mode: LoadingMode.INITIAL,
    isLoading: false,
  });

  const { address, getSigningStargateClient, connect } =
    useChain(defaultChainName);

  const { getChainRecord } = useManager();
  const { showToast } = useTransactionToast();
  const { getRpcClient } = useRpcClient(defaultChainName);

  const getPrettyChainName = useCallback(
    (ibcDenom: CoinDenom) => {
      const chainName = getChainName(ibcDenom);
      const chainRecord = getChainRecord(chainName);
      return chainRecord.chain.pretty_name;
    },
    [getChainRecord]
  );

  const inputData = useMemo(() => {
    if (!fromToken || !toToken)
      return {
        fromToken: {
          inputAmount: '0',
          inputValue: '0',
        },
        toToken: {
          outputAmount: '0',
          outputValue: '0',
        },
      };

    const dollarValue = new BigNumber(inputAmount || '0').multipliedBy(
      fetchedData.prices[fromToken.denom]
    );

    const toTokenAmount = dollarValue.div(fetchedData.prices[toToken.denom]);

    return {
      fromToken: {
        inputAmount: parseFloat(inputAmount || '0').toString(),
        inputValue: dollarValue.decimalPlaces(2).toString(),
      },
      toToken: {
        outputAmount: toTokenAmount.decimalPlaces(6).toString(),
        outputValue: dollarValue.decimalPlaces(2).toString(),
      },
    };
  }, [fetchedData.prices, fromToken, inputAmount, toToken]);

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

  const handleFromDropdownChange = (option: SwapOptionType) =>
    setFromToken(option);

  const handleToDropdownChange = (option: SwapOptionType) => setToToken(option);

  const handleSwapSwitch = () => {
    if (!fromToken || !toToken) return;
    setFromToken(toToken);
    setToToken(fromToken);
    setInputAmount(inputData?.toToken.outputAmount || '0');
  };

  const pairs = useMemo(() => {
    const pools = fetchedData.pools;
    const prices = fetchedData.prices;
    if (isEmptyArray(pools) || isEmptyArray(Object.keys(prices))) return [];
    return makePoolPairs(pools, prices);
  }, [fetchedData.pools, fetchedData.prices]);

  const swapTokenDenoms = useMemo(() => {
    if (isEmptyArray(pairs)) return [];
    return [
      ...new Set(
        pairs.map((pair) => [pair.baseAddress, pair.quoteAddress]).flat()
      ),
    ];
  }, [pairs]);

  const assetOptions = useMemo(() => {
    const balances = fetchedData.balances;
    const prices = fetchedData.prices;
    return swapTokenDenoms
      .map((denom) => {
        const asset = getOsmoAssetByDenom(denom);
        const symbol = asset.symbol;
        const coin = balances.find(({ denom }) => denom === asset.base);
        const displayAmount = coin
          ? baseUnitsToDisplayUnits(symbol, coin.amount)
          : '0';
        const dollarValue = coin
          ? baseUnitsToDollarValue(prices, symbol, coin.amount)
          : '0';
        const prettyChainName = getPrettyChainName(denom);

        return {
          symbol,
          value: asset.base,
          icon: asset.logo_URIs,
          denom: asset.base,
          amount: coin?.amount || '0',
          displayAmount,
          dollarValue,
          chainName: prettyChainName,
        } as SwapOptionType;
      })
      .sort((a, b) => (new BigNumber(a.dollarValue).lt(b.dollarValue) ? 1 : -1))
      .map((asset) => ({
        ...asset,
        dollarValue: '$' + truncDecimals(asset.dollarValue, 2),
      }));
  }, [
    fetchedData.balances,
    fetchedData.prices,
    getPrettyChainName,
    swapTokenDenoms,
  ]);

  const getBalances = useCallback(async () => {
    if (!address) return [];

    try {
      const client = await getRpcClient();
      return await client.cosmos.bank.v1beta1
        .allBalances({
          address,
          pagination: {
            key: new Uint8Array(),
            offset: BigInt(0),
            limit: BigInt(1000),
            countTotal: false,
            reverse: false,
          },
        })
        .then(({ balances }) =>
          balances.filter((coin) => !coin.denom.startsWith('gamm'))
        );
    } catch (error) {
      console.error(error);
      return [];
    }
  }, [address, getRpcClient]);

  const updateBalances = async () => {
    setLoadingConfig({ mode: LoadingMode.AFTER_SWAP, isLoading: true });
    const balances = await getBalances();
    setFetchedData((prev) => ({ ...prev, balances }));
    setLoadingConfig((prev) => ({ ...prev, isLoading: false }));
  };

  useEffect(() => {
    (async () => {
      if (!address) return;
      setLoadingConfig((prev) => ({ ...prev, isLoading: true }));
      try {
        const client = await getRpcClient();

        const [prices, balances, { pools: poolsData }] = await Promise.all([
          getPriceHash(),
          getBalances(),
          client.osmosis.gamm.v1beta1.pools({
            pagination: {
              key: new Uint8Array(),
              offset: BigInt(0),
              limit: BigInt(2000),
              countTotal: false,
              reverse: false,
            },
          }) as Promise<{ pools: Pool[] }>,
        ]);

        const pools = poolsData
          .filter(({ $typeUrl }) => !$typeUrl?.includes('stableswap'))
          .filter(({ poolAssets }) =>
            poolAssets.every(
              ({ token }) =>
                prices[token!.denom] &&
                osmosisAssets.find((asset) => asset.base === token!.denom)
            )
          );

        setFetchedData({
          pools,
          prices,
          balances,
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingConfig((prev) => ({ ...prev, isLoading: false }));
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  useEffect(() => {
    if (isEmptyArray(assetOptions)) return;

    setFromToken((prev) =>
      prev
        ? assetOptions.find((option) => option.denom === prev.denom)
        : assetOptions[0]
    );

    setToToken((prev) =>
      prev
        ? assetOptions.find((option) => option.denom === prev.denom)
        : assetOptions[1]
    );

    setInputAmount('');
  }, [assetOptions]);

  const swapTokensWithRoutes = useMemo(() => {
    if (!fromToken || !toToken) return;

    const tokenInAmount = new BigNumber(inputData.fromToken.inputAmount)
      .shiftedBy(getExponentByDenom(fromToken.denom))
      .toString();

    const tokenOutAmount = new BigNumber(inputData.toToken.outputAmount)
      .shiftedBy(getExponentByDenom(toToken.denom))
      .toString();

    const tokenOutAmountAfterSlippage = calcAmountWithSlippage(
      tokenOutAmount,
      selectedSlippage.split('%')[0]
    );

    const tokenIn = {
      denom: fromToken.denom,
      amount: tokenInAmount,
    };

    const tokenOut = {
      denom: toToken.denom,
      amount: tokenOutAmountAfterSlippage,
    };

    const routes = getRoutesForTrade({
      trade: {
        sell: {
          denom: tokenIn.denom,
          amount: tokenInAmount,
        },
        buy: {
          denom: tokenOut.denom,
          amount: tokenOutAmount,
        },
      },
      pairs,
    });

    return {
      tokenIn,
      tokenOut,
      routes,
    };
  }, [fromToken, toToken, inputData, pairs, selectedSlippage]);

  const swapDetails = useMemo(() => {
    if (!swapTokensWithRoutes || !toToken) return;
    const { tokenIn, tokenOut, routes } = swapTokensWithRoutes;
    if (routes.length === 0) return;
    const pools = fetchedData.pools;
    const tokenOutSymbol = toToken.symbol;

    let swapFee = '';
    let priceImpact = '';
    if (new BigNumber(tokenIn.amount).isEqualTo(0)) {
      priceImpact = '0';
    } else if (routes.length === 1) {
      const pool = pools.find((pool) => pool.id === routes[0].poolId)!;
      priceImpact = calcPriceImpactGivenIn(tokenIn, tokenOut.denom, pool);
      swapFee = new BigNumber(pool.poolParams?.swapFee || 0)
        .shiftedBy(-18)
        .toString();
    } else {
      const tokenInRoute = routes.find(
        (route) => route.tokenOutDenom !== tokenOut.denom
      )!;
      const tokenOutRoute = routes.find(
        (route) => route.tokenOutDenom === tokenOut.denom
      )!;

      const tokenInPool = pools.find(
        (pool) => pool.id === tokenInRoute.poolId
      )!;
      const tokenOutPool = pools.find(
        (pool) => pool.id === tokenOutRoute.poolId
      )!;

      swapFee = new BigNumber(tokenInPool.poolParams?.swapFee || 0)
        .shiftedBy(-18)
        .toString();

      const priceImpactIn = calcPriceImpactGivenIn(
        tokenIn,
        tokenInRoute.tokenOutDenom,
        tokenInPool
      );
      const priceImpactOut = calcPriceImpactGivenOut(
        tokenOut,
        tokenInRoute.tokenOutDenom,
        tokenOutPool
      );
      priceImpact = new BigNumber(priceImpactIn)
        .plus(priceImpactOut)
        .toString();
    }

    const swapFeeValue = new BigNumber(inputData.fromToken.inputValue)
      .multipliedBy(swapFee)
      .decimalPlaces(2, BigNumber.ROUND_DOWN);

    let swapRoutes = [];
    if (routes.length === 1) {
      swapRoutes = routes.map((route) => {
        const baseAsset = getOsmoAssetByDenom(tokenIn.denom);
        const quoteAsset = getOsmoAssetByDenom(tokenOut.denom);
        return {
          poolId: route.poolId.toString(),
          swapFee: new BigNumber(swapFee).shiftedBy(2).toString() + '%',
          baseLogo: baseAsset.logo_URIs,
          baseSymbol: baseAsset.symbol,
          quoteLogo: quoteAsset.logo_URIs,
          quoteSymbol: quoteAsset.symbol,
        };
      });
    } else {
      let swapFees: BigNumber[] = [];
      swapRoutes = routes
        .map((route) => {
          const pool = pools.find((pool) => pool.id === route.poolId);
          let baseAsset: Asset;
          let quoteAsset: Asset;
          if (route.tokenOutDenom !== tokenOut.denom) {
            baseAsset = getOsmoAssetByDenom(tokenIn.denom);
            quoteAsset = getOsmoAssetByDenom(route.tokenOutDenom);
          } else {
            const tokenInDenom = pool?.poolAssets.find(
              ({ token }) => token!.denom !== tokenOut.denom
            )?.token?.denom!;
            baseAsset = getOsmoAssetByDenom(tokenInDenom);
            quoteAsset = getOsmoAssetByDenom(tokenOut.denom);
          }
          const fee = new BigNumber(pool?.poolParams?.swapFee || 0).shiftedBy(
            -16
          );
          swapFees.push(fee);
          return {
            poolId: route.poolId.toString(),
            swapFee: fee,
            baseLogo: baseAsset.logo_URIs,
            baseSymbol: baseAsset.symbol,
            quoteLogo: quoteAsset.logo_URIs,
            quoteSymbol: quoteAsset.symbol,
          };
        })
        .map((route) => {
          const totalFee = swapFees.reduce(
            (total, cur) => total.plus(cur),
            new BigNumber(0)
          );
          const highestFee = swapFees.sort((a, b) => (a.lt(b) ? 1 : -1))[0];
          const feeRatio = highestFee.div(totalFee);
          return {
            ...route,
            swapFee: route.swapFee.multipliedBy(feeRatio).toString() + '%',
          };
        });
    }

    return {
      priceImpact: new BigNumber(priceImpact).shiftedBy(2).gt(0.001)
        ? new BigNumber(priceImpact).decimalPlaces(5).shiftedBy(2) + '%'
        : '< 0.001%',
      swapFee: {
        percentage: new BigNumber(swapFee).shiftedBy(2).toString() + '%',
        value: swapFeeValue.gt(0.01) ? '$' + swapFeeValue : '< $0.01',
      },
      expectedOutput: inputData.toToken.outputAmount,
      minimumReceived: truncDecimals(
        baseUnitsToDisplayUnits(tokenOutSymbol, tokenOut.amount),
        6
      ),
      route: {
        tokenIn: {
          logoUrl: getOsmoAssetByDenom(tokenIn.denom).logo_URIs,
          symbol: osmoDenomToSymbol(tokenIn.denom),
        },
        tokenOut: {
          logoUrl: getOsmoAssetByDenom(tokenOut.denom).logo_URIs,
          symbol: osmoDenomToSymbol(tokenOut.denom),
        },
        routes: swapRoutes,
      },
    };
  }, [fetchedData.pools, inputData, swapTokensWithRoutes, toToken]);

  const handleSubmit = async () => {
    if (!address || !swapTokensWithRoutes) return;
    setIsSubmitting(true);
    const stargateClient = await getSigningStargateClient();
    if (!stargateClient) {
      console.error('stargateClient undefined or address undefined.');
      setIsSubmitting(false);
      return;
    }

    const { tokenIn, tokenOut, routes } = swapTokensWithRoutes;
    const msg = swapExactAmountIn({
      sender: address,
      routes,
      tokenIn: coin(noDecimals(tokenIn.amount), tokenIn.denom),
      tokenOutMinAmount: noDecimals(tokenOut.amount),
    });
    const fee = FEES.osmosis.swapExactAmountIn('low');

    try {
      const res = await stargateClient.signAndBroadcast(address, [msg], fee);
      showToast(res.code);
      updateBalances();
    } catch (error) {
      console.log(error);
      showToast(TransactionResult.Failed, error);
    } finally {
      setIsSubmitting(false);
      stargateClient.disconnect();
    }
  };

  const tokenPrice = useMemo(() => {
    if (!fromToken || !toToken)
      return {
        priceRate: '0',
        dollarValue: '0',
      };

    const priceRate = new BigNumber(fetchedData.prices[fromToken.denom])
      .div(fetchedData.prices[toToken.denom])
      .decimalPlaces(6)
      .toString();

    const fromTokenPrice = truncDecimals(
      fetchedData.prices[fromToken.denom].toString(),
      4
    );

    return {
      priceRate,
      dollarValue: fromTokenPrice,
    };
  }, [fetchedData.prices, fromToken, toToken]);

  const isAmountEmpty = new BigNumber(
    inputData.fromToken.inputAmount
  ).isEqualTo(0);
  const isAmountOverMaximum = new BigNumber(inputData.fromToken.inputAmount).gt(
    fromToken?.displayAmount || 0
  );
  const hasRoute =
    swapTokensWithRoutes?.routes && swapTokensWithRoutes.routes?.length > 0;

  const btnText =
    !hasRoute && !loadingConfig.isLoading
      ? 'No route for this trade'
      : isAmountOverMaximum
      ? 'Insufficient balance'
      : '';

  const dropdownData = useMemo(() => {
    return assetOptions.filter(
      ({ symbol }) => symbol !== fromToken?.symbol && symbol !== toToken?.symbol
    );
  }, [assetOptions, fromToken?.symbol, toToken?.symbol]);

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
            onFromDropdownChange={handleFromDropdownChange}
            onToDropdownChange={handleToDropdownChange}
            onSwapSwitch={handleSwapSwitch}
            onSwapSubmit={handleSubmit}
            slippageConfig={{
              slippages,
              selectedSlippage,
              setSelectedSlippage,
            }}
            tokenPrice={tokenPrice}
            swapDetails={swapDetails}
            submitButtonConfig={{
              disabled:
                !hasRoute ||
                isSubmitting ||
                isAmountEmpty ||
                isAmountOverMaximum ||
                loadingConfig.isLoading,
              loading: isSubmitting,
              btnText,
            }}
            loadingConfig={loadingConfig}
          />
        </Box>
      ) : (
        <Center w="100%" h="200px" mb="60px">
          <Text fontSize="20px">
            <span
              style={{ color: '#7751cc', cursor: 'pointer', fontWeight: '500' }}
              onClick={connect}
            >
              Connect the wallet&nbsp;
            </span>
            to do the swap
          </Text>
        </Center>
      )}
      <Divider mb="60px" />
    </Box>
  );
};
