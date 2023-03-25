import { SwapDataType, SwapView } from '@cosmology-ui/react';
import { useCallback, useEffect, useState } from 'react';
import { Box, Center, Text, useToast } from '@chakra-ui/react';
import { AssetOption, InputData, Result, SwapToken } from '../types';
import { useChain } from '@cosmos-kit/react';
import { chainName } from '../../config';
import {
  baseUnitsToDisplayUnits,
  baseUnitsToDollarValue,
  calcPoolLiquidity,
  convertGeckoPricesToDenomPriceHash,
  getExponentByDenom,
  makePoolPairs,
  noDecimals,
  osmosisAssets,
} from '../../utils';
import { osmosis, FEES } from 'osmojs';
import { Coin } from 'osmojs/types/codegen/cosmos/base/v1beta1/coin';
import { Pool } from 'osmojs/types/codegen/osmosis/gamm/pool-models/balancer/balancerPool';
import { PrettyPair, PriceHash } from '../../utils/types';
import Long from 'long';
import { getPrices } from '@cosmology/core';
import BigNumber from 'bignumber.js';
import { calcAmountWithSlippage, getRoutesForTrade } from '../../utils/swap';
import { coin } from '@cosmjs/amino';

const slippages = ['1%', '2.5%', '3%', '5%'];

const getPriceHash = async () => {
  const geckoIds = [
    ...new Set(
      osmosisAssets.map((asset) => asset.coingecko_id).filter(Boolean)
    ),
  ] as string[];
  const prices = await getPrices(geckoIds);
  return convertGeckoPricesToDenomPriceHash(prices);
};

const truncDecimals = (val: string | number | undefined, decimals: number) => {
  return new BigNumber(val || 0).decimalPlaces(decimals).toString();
};

interface DataNeeded {
  balances: Coin[];
  pools: Pool[];
  pairs: PrettyPair[];
  prices: PriceHash;
  assetOptions: SwapDataType[];
  topActiveTokens: string[];
}

const { swapExactAmountIn } = osmosis.gamm.v1beta1.MessageComposer.withTypeUrl;

export const SwapTokens = () => {
  const [fromToken, setFromToken] = useState<SwapToken>({
    selectedToken: undefined,
    tokenLoading: true,
    dropdownLoading: true,
  });
  const [toToken, setToToken] = useState<SwapToken>({
    selectedToken: undefined,
    tokenLoading: true,
    dropdownLoading: true,
  });
  const [inputData, setInputData] = useState<InputData>({
    amountValue: '0',
    fiatValue: '$-',
    denom: '',
    invalid: false,
    invalidText: undefined,
    isInputLoading: true,
  });
  const [selectedSlippage, setSelectedSlippage] = useState<string>(
    slippages[0]
  );
  const [dataNeeded, setDataNeeded] = useState<DataNeeded>({
    pools: [],
    pairs: [],
    prices: {},
    balances: [],
    assetOptions: [],
    topActiveTokens: [],
  });
  const [priceValue, setPrice] = useState({
    loading: true,
    amountValue: '0',
    fiatValue: '$-',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { address, getRpcEndpoint, getSigningStargateClient, connect } =
    useChain(chainName);

  const toast = useToast();

  const showToast = (code: number) => {
    toast({
      title: `Transaction ${code === 0 ? 'successful' : 'failed'}`,
      status: code === 0 ? 'success' : 'error',
      duration: 5000,
      isClosable: true,
      position: 'top-right',
    });
  };

  const handleInputChange = (value: string) => {
    if (!fromToken.selectedToken || !toToken.selectedToken) return;

    const val = new BigNumber(value);
    const inputMaxAmount = fromToken.selectedToken?.amountValue || '0';
    const isValueNumericAndPositive = !isNaN(Number(value)) && val.gt(0);

    const inputAmount = !isValueNumericAndPositive
      ? '0'
      : val.gt(inputMaxAmount)
      ? inputMaxAmount
      : value;

    const dollarValue = new BigNumber(inputAmount).multipliedBy(
      dataNeeded.prices[inputData.denom]
    );

    const toTokenAmount = dollarValue.div(
      dataNeeded.prices[toToken.selectedToken.denom]
    );

    setInputData((prev) => ({
      ...prev,
      amountValue: parseFloat(inputAmount).toString(),
      fiatValue: '$' + dollarValue.decimalPlaces(2).toString(),
    }));
    setToToken({
      dropdownLoading: false,
      tokenLoading: false,
      selectedToken: {
        ...toToken.selectedToken,
        fiatValue: '$' + dollarValue.decimalPlaces(2).toString(),
        amountValue: toTokenAmount.decimalPlaces(6).toString(),
      },
    });
  };

  const handleFromDropdownChange = (option: AssetOption) => {
    const dollarValue = new BigNumber(inputData.amountValue || 0)
      .multipliedBy(dataNeeded.prices[option.denom])
      .toString();
    const fiatValue = '$' + truncDecimals(dollarValue, 2);

    if (option) {
      setInputData({
        ...inputData,
        fiatValue,
        amountValue: inputData.amountValue,
        denom: option.denom,
      });

      setFromToken((prev) => ({ ...prev, selectedToken: option }));

      if (toToken.selectedToken) {
        const amountValue = new BigNumber(dollarValue)
          .div(dataNeeded.prices[toToken.selectedToken.denom])
          .decimalPlaces(6)
          .toString();
        setToToken({
          tokenLoading: false,
          dropdownLoading: false,
          selectedToken: { ...toToken.selectedToken, amountValue, fiatValue },
        });
      }
    }
  };

  const handleToDropdownChange = (option: AssetOption) => {
    if (option && toToken.selectedToken) {
      const amountValue = new BigNumber(inputData.amountValue || 0)
        .multipliedBy(dataNeeded.prices[inputData.denom])
        .div(dataNeeded.prices[option.denom])
        .decimalPlaces(6)
        .toString();

      setToToken({
        dropdownLoading: false,
        tokenLoading: false,
        selectedToken: {
          ...option,
          amountValue,
          fiatValue: toToken.selectedToken.fiatValue,
        },
      });
    }
  };

  const handleSwapSwitch = useCallback(() => {
    if (
      !fromToken.selectedToken ||
      !toToken.selectedToken ||
      !inputData.amountValue
    )
      return;

    setFromToken({
      dropdownLoading: false,
      tokenLoading: false,
      selectedToken: {
        ...toToken.selectedToken,
        amountValue: truncDecimals(toToken.selectedToken.totalAmount, 6),
        fiatValue: truncDecimals(toToken.selectedToken.totalValue, 2),
      },
    });

    setToToken({
      dropdownLoading: false,
      tokenLoading: false,
      selectedToken: {
        ...fromToken.selectedToken,
        amountValue: inputData.amountValue,
        fiatValue: inputData.fiatValue,
      },
    });

    setInputData({
      isInputLoading: false,
      invalid: false,
      amountValue: toToken.selectedToken.amountValue,
      fiatValue: toToken.selectedToken.fiatValue,
      denom: toToken.selectedToken.denom,
    });
  }, [inputData, fromToken.selectedToken, toToken.selectedToken]);

  const getData = useCallback(async () => {
    if (!address) return;
    console.log('getting data...');

    let rpcEndpoint = await getRpcEndpoint();

    if (!rpcEndpoint) {
      console.log('no rpc endpoint — using a fallback');
      rpcEndpoint = `https://rpc.cosmos.directory/${chainName}`;
    }

    const client = await osmosis.ClientFactory.createRPCQueryClient({
      rpcEndpoint,
    });

    let pools: Pool[] = [];
    if (dataNeeded.pools.length > 0) {
      pools = dataNeeded.pools;
    } else {
      const { pools: encodedPools } = await client.osmosis.gamm.v1beta1.pools({
        pagination: {
          key: new Uint8Array(),
          offset: Long.fromNumber(0),
          limit: Long.fromNumber(1200),
          countTotal: false,
          reverse: false,
        },
      });
      pools = encodedPools
        .filter(({ typeUrl }) => !typeUrl.includes('stableswap'))
        .map(({ value }) => osmosis.gamm.v1beta1.Pool.decode(value))
        .filter(
          ({ poolAssets }) =>
            !poolAssets.some(({ token }) => token?.denom.startsWith('gamm'))
        );
    }

    let pairs: PrettyPair[] = [];
    if (dataNeeded.pairs.length > 0) {
      pairs = dataNeeded.pairs;
    } else {
      pairs = makePoolPairs(pools);
    }

    let prices: PriceHash = {};
    if (Object.keys(dataNeeded.prices).length > 0) {
      prices = dataNeeded.prices;
    } else {
      prices = await getPriceHash();
    }

    let topActiveTokens: string[] = [];
    if (dataNeeded.topActiveTokens.length > 0) {
      topActiveTokens = dataNeeded.topActiveTokens;
    } else {
      const tokenDenoms = pools
        .filter(
          ({ poolAssets }) =>
            !poolAssets.some(
              ({ token }) =>
                !osmosisAssets.find((asset) => asset.base === token?.denom) ||
                !getExponentByDenom(token!.denom) ||
                !prices[token!.denom]
            )
        )
        .map((pool) => ({
          ...pool,
          liquidity: calcPoolLiquidity(pool, prices),
        }))
        .sort((poolA, poolB) =>
          new BigNumber(poolA.liquidity).lt(poolB.liquidity) ? 1 : -1
        )
        .slice(0, 100)
        .map((pool) => pool.poolAssets.map((asset) => asset.token!.denom));

      topActiveTokens = [...new Set(tokenDenoms.flat())];
    }
    console.log('topActiveTokens', topActiveTokens.length);

    const balances = await client.cosmos.bank.v1beta1
      .allBalances({
        address,
      })
      .then(({ balances }) =>
        balances.filter((coin) => !coin.denom.startsWith('gamm'))
      );

    const assetOptions: AssetOption[] = osmosisAssets
      .filter((asset) => topActiveTokens.includes(asset.base))
      .map((asset) => {
        const symbol = asset.symbol;
        const coin = balances.find(({ denom }) => denom === asset.base);
        const displayAmount = coin
          ? baseUnitsToDisplayUnits(symbol, coin.amount)
          : '0';
        const dollarValue = coin
          ? baseUnitsToDollarValue(prices, symbol, coin.amount)
          : '0';

        return {
          name: asset.name,
          label: asset.name,
          value: asset.name,
          symbol,
          icon: {
            jpeg: asset.logo_URIs?.jpeg,
            png: asset.logo_URIs?.png,
            svg: asset.logo_URIs?.svg,
          },
          denom: asset.base,
          totalAmount: displayAmount,
          totalValue: dollarValue,
          amountValue: truncDecimals(displayAmount, 6),
          fiatValue: dollarValue,
        };
      })
      .sort((a, b) => (new BigNumber(a.fiatValue).lt(b.fiatValue) ? 1 : -1))
      .map((asset) => ({
        ...asset,
        fiatValue: '$' + truncDecimals(asset.fiatValue, 2),
      }));

    setFromToken((prev) => ({
      ...prev,
      dropdownLoading: false,
      tokenLoading: false,
      selectedToken: prev.selectedToken
        ? assetOptions.find(
            (option) => option.denom === prev.selectedToken?.denom
          )
        : assetOptions[0],
    }));
    setToToken((prev) => ({
      ...prev,
      dropdownLoading: false,
      tokenLoading: false,
      selectedToken: {
        ...(prev.selectedToken ? prev.selectedToken : assetOptions[1]),
        amountValue: '0',
        fiatValue: '$-',
      },
    }));
    setInputData((prev) => ({
      ...prev,
      isInputLoading: false,
      amountValue: '0',
      fiatValue: '$-',
      denom: prev.denom ? prev.denom : assetOptions[0].denom,
    }));

    setDataNeeded({
      pools,
      pairs,
      prices,
      balances,
      assetOptions,
      topActiveTokens,
    });

    console.log('get data done!');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, getRpcEndpoint]);

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    if (fromToken.selectedToken && toToken.selectedToken) {
      const fromTokenUnitValue = new BigNumber(
        dataNeeded.prices[fromToken.selectedToken.denom]
      )
        .div(dataNeeded.prices[toToken.selectedToken.denom])
        .decimalPlaces(6)
        .toString();
      const fromTokenPrice = truncDecimals(
        dataNeeded.prices[fromToken.selectedToken.denom],
        4
      );

      setPrice({
        loading: false,
        amountValue:
          `1 ${fromToken.selectedToken.symbol} ≈ ` + fromTokenUnitValue,
        fiatValue: '$' + fromTokenPrice,
      });
    }
  }, [dataNeeded.prices, fromToken.selectedToken, toToken.selectedToken]);

  const handleSubmit = async () => {
    if (!address || !toToken.selectedToken) return;

    setIsSubmitting(true);

    const stargateClient = await getSigningStargateClient();

    if (!stargateClient) {
      console.error('stargateClient undefined or address undefined.');
      setIsSubmitting(false);
      return;
    }

    const tokenInAmount = new BigNumber(inputData.amountValue)
      .shiftedBy(getExponentByDenom(inputData.denom))
      .toString();

    const tokenOutAmount = new BigNumber(toToken.selectedToken.amountValue)
      .shiftedBy(getExponentByDenom(toToken.selectedToken.denom))
      .toString();

    const tokenOutAmountWithSlippage = calcAmountWithSlippage(
      tokenOutAmount,
      selectedSlippage.split('%')[0]
    );

    const tokenIn = {
      denom: inputData.denom,
      amount: tokenInAmount,
    };

    const tokenOut = {
      denom: toToken.selectedToken.denom,
      amount: tokenOutAmountWithSlippage,
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
      pairs: dataNeeded.pairs,
    });

    if (routes.length === 0) {
      console.error('no routes found for swap');
      setIsSubmitting(false);
      return;
    }

    const msg = swapExactAmountIn({
      sender: address,
      routes,
      tokenIn: coin(noDecimals(tokenIn.amount), tokenIn.denom),
      tokenOutMinAmount: noDecimals(tokenOut.amount),
    });

    const fee = FEES.osmosis.swapExactAmountIn('low');

    try {
      const res = await stargateClient.signAndBroadcast(address, [msg], fee);
      console.log('res', res);
      stargateClient.disconnect();
      setIsSubmitting(false);
      showToast(res.code);

      setToToken((prev) => ({ ...prev, tokenLoading: true }));
      setFromToken((prev) => ({ ...prev, tokenLoading: true }));
      await getData();
      setToToken((prev) => ({ ...prev, tokenLoading: false }));
      setFromToken((prev) => ({ ...prev, tokenLoading: false }));
    } catch (error) {
      console.log(error);
      stargateClient.disconnect();
      setIsSubmitting(false);
      showToast(Result.Failed);
    }
  };

  const isAmountEmpty = new BigNumber(inputData.amountValue).isEqualTo(0);
  const isAmountOverMaximum = new BigNumber(inputData.amountValue).gt(
    fromToken.selectedToken?.amountValue || 0
  );

  return (
    <>
      {address ? (
        <Box width="500px" mx="auto" mb="60px">
          <SwapView
            dropdownData={dataNeeded.assetOptions.filter(
              ({ symbol }) =>
                symbol !== fromToken.selectedToken?.symbol &&
                symbol !== toToken.selectedToken?.symbol
            )}
            fromDropdownLoading={fromToken.dropdownLoading}
            fromInputLoading={fromToken.tokenLoading}
            fromToken={fromToken.selectedToken}
            toDropdownLoading={toToken.dropdownLoading}
            toInputLoading={toToken.tokenLoading}
            toToken={toToken.selectedToken}
            amountValue={inputData.amountValue}
            fiatValue={inputData.fiatValue}
            settingToken={selectedSlippage}
            tokenArray={slippages}
            priceValue={priceValue}
            submitDisabled={
              isSubmitting || isAmountEmpty || isAmountOverMaximum
            }
            onSelectSetting={setSelectedSlippage}
            onAmountInputChange={handleInputChange}
            onFromDropdownChange={handleFromDropdownChange}
            onToDropdownChange={handleToDropdownChange}
            onSwapSwitch={handleSwapSwitch}
            onSwapSubmit={handleSubmit}
            invalid={inputData.invalid}
            invalidText={inputData.invalidText}
            className="btn-disabled"
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
    </>
  );
};
