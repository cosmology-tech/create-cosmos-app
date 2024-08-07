import BigNumber from 'bignumber.js';
import { coin } from '@cosmjs/amino';
import { Coin } from '@cosmjs/stargate';
import { FEES, osmosis } from 'osmo-query';
import { useEffect, useState } from 'react';
import { useChain } from '@cosmos-kit/react';
import { Text } from '@interchain-ui/react';
import { toast } from '@interchain-ui/react';
import { Asset } from '@chain-registry/types';

import {
  CoinDenom,
  PrettyPair,
  PriceHash,
  Exponent,
} from '@osmonauts/math/dist/types';
import { SwapAmountInRoute } from 'osmo-query/dist/codegen/osmosis/poolmanager/v1beta1/swap_route';
import {
  getExponentByDenom,
  convertBaseUnitToDisplayUnit,
  convertBaseUnitToDollarValue,
} from '@chain-registry/utils';
import {
  makePoolPairs,
  getRoutesForTrade,
  calcPriceImpactGivenIn,
  calcPriceImpactGivenOut,
  calcAmountWithSlippage,
} from '@osmonauts/math';
import { Token, Slippages, TokenList, SwapInfoProps } from '@/components/swap';
import { Pools, usePools, usePrices, useBalances, useTx } from '@/hooks';
import { defaultChainName, Osmosis, osmosisAssetsList } from '@/config';
import { getLogo, integer } from '@/utils';

export type Swap = {
  to: Token;
  from: Token;
  slippage: number;
};

export function useSwap() {
  const { tx } = useTx(defaultChainName);
  const { address, isWalletConnected } = useChain(defaultChainName);

  const [to, setTo] = useState<Token>();
  // The selected To token.
  // to.amount is the balance of the To token in display units (atom, osmo...)

  const [from, setFrom] = useState<Token>();
  // The selected From token.
  // from.amount is the balance of the From token in display units (atom, osmo ...)

  const [amount, setAmount] = useState('0');
  // amount is the amount of From token to swap (user input)

  const [slippage, setSlippage] = useState(Slippages[0]);
  const [isSwapping, setIsSwapping] = useState(false);

  const balances = useBalances();
  const prices = usePrices();
  const pools = usePools(prices);

  const pairs = makePoolPairs(Osmosis.Assets, pools.freefloat.priced, prices); // see pairs data structure at file bottom
  const denoms = denomsInPairs(pairs);
  const tokens = newTokens(denoms, prices, balances.hash, from, to);

  const swap = newSwap(from!, to!, amount, prices, slippage);
  // swap.from.amount is the same as amount
  // sawp.to.amount is the amount of To token that user will get without slippage

  const routes = newRoutes(swap, pairs);
  const info = newSwapInfo(swap, pools, routes);
  const steps = newSwapSteps(swap, pools, routes);

  const isLoading =
    pools.query.isLoading || prices.query.isLoading || balances.query.isLoading;
  const isZeroAmount = new BigNumber(amount).lte(0);
  const isRoutesEmpty = routes.length === 0;
  const isInsufficientBalance = new BigNumber(amount).gt(from?.amount || '0');
  const isSwapDisabled =
    isLoading ||
    isSwapping ||
    isZeroAmount ||
    isRoutesEmpty ||
    isInsufficientBalance;

  useEffect(() => {
    isWalletConnected ? null : setAmount('0');
  }, [isWalletConnected]);

  useEffect(() => {
    if (tokens.length < 2) return;
    setFrom((prev) => (prev ? tokens.hash[prev.denom] : tokens[0]));
    setTo((prev) => (prev ? tokens.hash[prev.denom] : tokens[1]));
  }, [pools.query.data, prices.query.data, balances.query.data]);

  function onFlip() {
    if (from?.denom && to?.denom) {
      setFrom(to);
      setTo(from);
      setAmount(swap.to.amount || '0');
    }
  }

  function onAmountChange(amount: string) {
    if (/^0[0-9]*$/.test(amount)) return setAmount('0');
    if (/^0\.0*$/.test(amount)) return setAmount(amount);

    const num = new BigNumber(amount);
    const max = from?.amount || '0';
    const val =
      Number(amount) >= 0 && num.gte(0) ? (num.gt(max) ? max : amount) : '0';
    setAmount(val);
  }

  async function onSwap() {
    if (
      !address ||
      isLoading ||
      isZeroAmount ||
      isInsufficientBalance ||
      isRoutesEmpty
    )
      return;

    setIsSwapping(true);
    const msg = newSwapMessage(swap, address, routes);
    const fee = FEES.osmosis.swapExactAmountIn();
    const res = await tx([msg], { fee });
    setIsSwapping(false);

    if (res.error) {
      // will be simple as toast.error(res.errorMsg) when interchain-ui fixs the text overflow issue
      const error = (
        <Text fontSize="$sm" wordBreak="break-word" color="$red500">
          {res.errorMsg}
        </Text>
      );
      toast.error(error);
      console.log(res.response);
      console.log(res.error.message);
    } else if (res.isSuccess) {
      setAmount('0');
      toast.success('Swap successful');
      balances.query.refetch();
    }
  }

  return {
    to,
    setTo,
    from,
    setFrom,
    swap,
    info,
    pools,
    prices,
    tokens,
    balances,
    routes,
    steps,
    amount,
    slippage,
    setSlippage,
    onFlip,
    onSwap,
    onAmountChange,
    isLoading,
    isSwapping,
    isZeroAmount,
    isRoutesEmpty,
    isSwapDisabled,
    isWalletConnected,
    isInsufficientBalance,
  };
}

export function newSwap(
  from: Token,
  to: Token,
  amount = '0',
  prices: PriceHash = {},
  slippage = Slippages[0]
) {
  const swap: Swap = {
    to: { denom: '', symbol: '', amount: '0', value: '0', $value: '$0' },
    from: { denom: '', symbol: '', amount: '0', value: '0', $value: '$0' },
    slippage,
  };

  if (from && to && prices[from.denom] && prices[to.denom]) {
    swap.from.denom = from.denom;
    swap.from.symbol = from.symbol;
    swap.from.amount = amount;
    swap.from.value = new BigNumber(amount)
      .multipliedBy(prices[from.denom])
      .toString();
    swap.from.$value = `\$${new BigNumber(swap.from.value)
      .decimalPlaces(2)
      .toString()}`;
    swap.to.denom = to.denom;
    swap.to.symbol = to.symbol;
    swap.to.amount = new BigNumber(swap.from.value)
      .div(prices[to.denom])
      .decimalPlaces(6)
      .toString();
    swap.to.value = swap.from.value;
    swap.to.$value = `\$${new BigNumber(swap.to.value)
      .decimalPlaces(2)
      .toString()}`;
  }

  return swap;
}

export function newTokens(
  denoms: CoinDenom[] = [],
  prices: PriceHash = {},
  balances: Record<CoinDenom, Coin> = {},
  from?: Token,
  to?: Token
) {
  const tokens = denoms
    .map((denom) => {
      const asset = Osmosis.Assets.CoinDenomToAsset[denom];
      const logo = getLogo(asset);
      const balance = balances[asset.base];
      const value = balance
        ? convertBaseUnitToDollarValue(
            [{ assets: Osmosis.Assets, chain_name: 'osmosis' }],
            prices,
            asset.symbol,
            balance.amount
          )
        : '0';
      return {
        logo,
        asset,
        denom,
        value,
        price: prices[asset.base],
        chain: Osmosis.getChainByDenom(denom),
        symbol: asset.symbol,
        amount: balance
          ? convertBaseUnitToDisplayUnit(
              [{ assets: Osmosis.Assets, chain_name: 'osmosis' }],
              asset.symbol,
              balance.amount
            )
          : '0',
        $value: balance
          ? `\$${new BigNumber(value).decimalPlaces(2).toString()}`
          : '$0',
        balance: balances[asset.base],
      } as Token;
    })
    .sort((a, b) =>
      new BigNumber(a.value!).lt(b.value!) ? 1 : -1
    ) as TokenList;

  tokens.rest = tokens.filter(
    (token) => token.denom !== from?.denom && token.denom !== to?.denom
  );
  tokens.hash = tokens.reduce(
    (acc, token) => ({ ...acc, [token.denom]: token }),
    {}
  ) as Record<CoinDenom, Token>;

  return tokens;
}

export function newCoin(token: Token) {
  return {
    denom: token.denom,
    amount: new BigNumber(token.amount || '0')
      .shiftedBy(getExponentByDenom(osmosisAssetsList, token.denom) as Exponent)
      .toString(),
  };
}

export function newRoutes(swap: Swap, pairs: PrettyPair[]) {
  if (!swap.from.denom || !swap.to.denom) return [];
  const trade = {
    sell: newCoin(swap.from),
    buy: newCoin(swap.to),
  };
  return getRoutesForTrade(Osmosis.Assets, { trade, pairs });
}

export function denomsInPairs(pairs: PrettyPair[]) {
  return Array.from(
    new Set(pairs.map((pair) => [pair.baseAddress, pair.quoteAddress]).flat())
  );
}

export function calcPriceImpact(
  swap: Swap,
  pools: Pools,
  routes: SwapAmountInRoute[] = []
) {
  if (
    new BigNumber(swap.from.amount || '0').isEqualTo(0) ||
    routes.length === 0
  )
    return '0';

  const to = newCoin(swap.to);
  const from = newCoin(swap.from);

  if (routes.length === 1) {
    return calcPriceImpactGivenIn(
      from,
      to.denom,
      pools.map.get(routes[0].poolId)!
    );
  }

  const toRoute = routes.find((route) => route.tokenOutDenom === to.denom)!;
  const fromRoute = routes.find((route) => route.tokenOutDenom !== to.denom)!;
  return new BigNumber(
    calcPriceImpactGivenIn(
      from,
      fromRoute.tokenOutDenom,
      pools.map.get(fromRoute.poolId)!
    )
  )
    .plus(
      calcPriceImpactGivenOut(
        to,
        fromRoute.tokenOutDenom,
        pools.map.get(toRoute.poolId)!
      )
    )
    .toString();
}

export function calcSwapFee(pools: Pools, routes: SwapAmountInRoute[] = []) {
  if (routes.length === 0) return '0';
  return routes.reduce((total, route) => {
    const pool = pools.map.get(route.poolId)!;
    return new BigNumber(total).plus(pool.poolParams.swapFee).toString();
  }, '0');
}

export function newSwapInfo(
  swap: Swap,
  pools: Pools,
  routes: SwapAmountInRoute[] = []
) {
  if (routes.length === 0) return null;

  const to = newCoin(swap.to);

  const priceImpact = new BigNumber(calcPriceImpact(swap, pools, routes));
  const priceImpactPercent = priceImpact.decimalPlaces(5).shiftedBy(2);
  const priceImpactPercentString = priceImpactPercent.toString() + '%';
  const swapFee = calcSwapFee(pools, routes);
  const swapFeeValue = new BigNumber(swap.from.value || '0')
    .multipliedBy(swapFee)
    .decimalPlaces(2, BigNumber.ROUND_DOWN);
  const swapFeePercent = new BigNumber(swapFee).shiftedBy(2);
  const swapFeePercentString = swapFeePercent.toString() + '%';

  const info = {
    priceImpact: {
      number: priceImpact,
      percent: { number: priceImpactPercent, string: priceImpactPercentString },
      display: priceImpactPercent.gte(0.001)
        ? priceImpactPercentString
        : '< 0.001%',
    },
    swapFee: {
      value: swapFeeValue,
      $value: `\$${swapFeeValue.decimalPlaces(2).toString()}`,
      number: new BigNumber(swapFee),
      percent: { number: swapFeePercent, string: swapFeePercentString },
    },
    expectedOutput: new BigNumber(swap.to.amount!).decimalPlaces(6).toString(),
    minimumReceived: new BigNumber(
      convertBaseUnitToDisplayUnit(
        [{ assets: Osmosis.Assets, chain_name: 'osmosis' }],
        swap.to.symbol,
        calcAmountWithSlippage(to.amount, swap.slippage)
      )
    )
      .decimalPlaces(6)
      .toString(),
    display: {} as SwapInfoProps,
  };

  // Pad expectedOutput and minimumReceived to the same length
  const maxLength = Math.max(
    info.expectedOutput.length,
    info.minimumReceived.length
  );
  info.expectedOutput = info.expectedOutput.padEnd(maxLength, '0');
  info.minimumReceived = info.minimumReceived.padEnd(maxLength, '0');

  info.display = {
    priceImpact: info.priceImpact.display,
    swapFee: {
      value: `≈ ${swapFeeValue.gt(0.01) ? info.swapFee.$value : '< $0.01'}`,
      percent: swapFeePercentString,
    },
    expectedOutput: `≈ ${info.expectedOutput!} ${swap.to.symbol}`,
    minimumReceived: `${info.minimumReceived} ${swap.to.symbol}`,
  };

  return info;
}

export function newSwapSteps(
  swap: Swap,
  pools: Pools,
  routes: SwapAmountInRoute[] = []
) {
  return routes.map((route) => newSwapStep(swap, route, pools));
}

export function newSwapStep(
  swap: Swap,
  route: SwapAmountInRoute,
  pools: Pools
) {
  const token = (asset: Asset) => ({
    logo: getLogo(asset),
    denom: asset.base,
    symbol: asset.symbol,
  });

  const pool = pools.map.get(route.poolId)!;

  let base, quote;
  if (route.tokenOutDenom === swap.to.denom) {
    base =
      Osmosis.Assets.CoinDenomToAsset[
        pool.poolAssets.find(({ token }) => token.denom !== swap.to.denom)!
          .token.denom
      ];
    quote = Osmosis.Assets.CoinDenomToAsset[swap.to.denom];
  } else {
    base = Osmosis.Assets.CoinDenomToAsset[swap.from.denom];
    quote = Osmosis.Assets.CoinDenomToAsset[route.tokenOutDenom];
  }
  return {
    poolId: route.poolId.toString(),
    swapFee:
      new BigNumber(pool.poolParams.swapFee).shiftedBy(2).toString() + '%',
    base: token(base),
    quote: token(quote),
  };
}

function newSwapMessage(
  swap: Swap,
  sender: string,
  routes: SwapAmountInRoute[]
) {
  const { swapExactAmountIn } =
    osmosis.gamm.v1beta1.MessageComposer.withTypeUrl;
  return swapExactAmountIn({
    sender,
    routes,
    tokenIn: coin(integer(newCoin(swap.from).amount), swap.from.denom),
    tokenOutMinAmount: integer(
      calcAmountWithSlippage(newCoin(swap.to).amount, swap.slippage)
    ),
  });
}
