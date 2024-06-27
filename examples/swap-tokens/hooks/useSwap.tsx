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
import { defaultChainName, Osmosis } from '@/config';
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
      .shiftedBy(
        getExponentByDenom(
          [{ assets: Osmosis.Assets, chain_name: 'osmosis' }],
          token.denom
        ) as Exponent
      )
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

// What pairs looks like:
// [
//   {
//     "poolId": "1",
//     "poolAddress": "osmo1mw0ac6rwlp5r8wapwk3zs6g29h8fcscxqakdzw9emkne6c8wjp9q0t3v8t",
//     "baseName": "atom",
//     "baseSymbol": "ATOM",
//     "baseAddress": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "3",
//     "poolAddress": "osmo1c9gj5nwxhuh2gz7wwg4r8e8tw8v7ggy9lh2hu7kkdgh0t450754qh9cpvd",
//     "baseName": "akt",
//     "baseSymbol": "AKT",
//     "baseAddress": "ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "4",
//     "poolAddress": "osmo1lzwv0glchfcw0fpwzdwfdsepmvluv6z6eh4qunxdml33sj06q3yq7xwtde",
//     "baseName": "akt",
//     "baseSymbol": "AKT",
//     "baseAddress": "ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4",
//     "quoteName": "atom",
//     "quoteSymbol": "ATOM",
//     "quoteAddress": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
//   },
//   {
//     "poolId": "9",
//     "poolAddress": "osmo19fm8jtzyw8ujsnsqm5rznudn8fhhkykjh4ra8rvx9lsfslw2pc2sp36h3r",
//     "baseName": "cro",
//     "baseSymbol": "CRO",
//     "baseAddress": "ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "10",
//     "poolAddress": "osmo1krp38zzc3zz5as9ndqkyskhkzv6x9e30ckcq5g4lcsu5wpwcqy0sa3dea2",
//     "baseName": "atom",
//     "baseSymbol": "ATOM",
//     "baseAddress": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
//     "quoteName": "cro",
//     "quoteSymbol": "CRO",
//     "quoteAddress": "ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1"
//   },
//   {
//     "poolId": "481",
//     "poolAddress": "osmo1y3ptmx57hvu7au6s9r3fxq00856896unkdyqaump7vedag248l0qc03asg",
//     "baseName": "eur",
//     "baseSymbol": "EEUR",
//     "baseAddress": "ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "497",
//     "poolAddress": "osmo1h7yfu7x4qsv2urnkl4kzydgxegdfyjdry5ee4xzj98jwz0uh07rqdkmprr",
//     "baseName": "juno",
//     "baseSymbol": "JUNO",
//     "baseAddress": "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "498",
//     "poolAddress": "osmo1tusadtwjnzzyakm94t5gjqr4dlkdcp63hctlql6xvslvkf7kkdws5lfyxc",
//     "baseName": "atom",
//     "baseSymbol": "ATOM",
//     "baseAddress": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
//     "quoteName": "juno",
//     "quoteSymbol": "JUNO",
//     "quoteAddress": "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED"
//   },
//   {
//     "poolId": "560",
//     "poolAddress": "osmo10d8ddsydag5xrnl2kacmkjtdxddstvz4jvraqqpf6ss2n7fy6lkqw4sx2f",
//     "baseName": "ust",
//     "baseSymbol": "USTC",
//     "baseAddress": "ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "571",
//     "poolAddress": "osmo1y6gvkz0qu93h7zgkrrhr6fqye5ny9ddpm9az2l5kjr0mmw9n48mqpmcnnv",
//     "baseName": "bcna",
//     "baseSymbol": "BCNA",
//     "baseAddress": "ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "572",
//     "poolAddress": "osmo108scuudnnhe70xuwa2etuyxffexexak6rflvsczj9n4fhrz92ajs9zudge",
//     "baseName": "atom",
//     "baseSymbol": "ATOM",
//     "baseAddress": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
//     "quoteName": "bcna",
//     "quoteSymbol": "BCNA",
//     "quoteAddress": "ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5"
//   },
//   {
//     "poolId": "584",
//     "poolAddress": "osmo1l265e7cug3tk3eugex8hpq2adk5drdecxzp6lsytn6dls6jpjkssvp9zqe",
//     "baseName": "scrt",
//     "baseSymbol": "SCRT",
//     "baseAddress": "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "585",
//     "poolAddress": "osmo1amh63u7vgtrak5rmetdjrl67jhl6rate05r792ywyxzp5jt6eq7sx5uphr",
//     "baseName": "scrt",
//     "baseSymbol": "SCRT",
//     "baseAddress": "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A",
//     "quoteName": "atom",
//     "quoteSymbol": "ATOM",
//     "quoteAddress": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
//   },
//   {
//     "poolId": "586",
//     "poolAddress": "osmo18lw3t03dmyv6975kzjgacezvaafflz5aepmqrqqc8y494gwwwpmq9vm7p8",
//     "baseName": "med",
//     "baseSymbol": "MED",
//     "baseAddress": "ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "587",
//     "poolAddress": "osmo1y3g6lwd5p72z5uxgm4z6wy7asyg53wg83np7mg3cz2wnf9zhl69q8shlnd",
//     "baseName": "atom",
//     "baseSymbol": "ATOM",
//     "baseAddress": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
//     "quoteName": "med",
//     "quoteSymbol": "MED",
//     "quoteAddress": "ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB"
//   },
//   {
//     "poolId": "604",
//     "poolAddress": "osmo1thscstwxp87g0ygh7le3h92f9ff4sel9y9d2eysa25p43yf43rysk7jp93",
//     "baseName": "stars",
//     "baseSymbol": "STARS",
//     "baseAddress": "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "611",
//     "poolAddress": "osmo1ejaswj8lcyh0zgnes8zt45e0w7tqm4mrxr74sfwgpdh72shp58ms4fdqsk",
//     "baseName": "atom",
//     "baseSymbol": "ATOM",
//     "baseAddress": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
//     "quoteName": "stars",
//     "quoteSymbol": "STARS",
//     "quoteAddress": "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4"
//   },
//   {
//     "poolId": "678",
//     "poolAddress": "osmo10venxtvdglryxkdmvjr8wa6n3ugja40rewddlxtg0pr30vmkf47sllgslg",
//     "baseName": "usdc",
//     "baseSymbol": "USDC",
//     "baseAddress": "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "681",
//     "poolAddress": "osmo1u66wkjthdjxnavklpef7yzasdrvvqhckmhkqsw8uwlad3uaktr3qvny8k4",
//     "baseName": "fet",
//     "baseSymbol": "FET",
//     "baseAddress": "ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "722",
//     "poolAddress": "osmo102ryca72c5ktx2ruzt8ag6mvtczdqeuvm82l09vd5uq597e7hn7sqgw28l",
//     "baseName": "evmos",
//     "baseSymbol": "EVMOS",
//     "baseAddress": "ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "725",
//     "poolAddress": "osmo1uxqg4sr2yqvamc96n4kwkgna6nmmgtypfdn2gjhvwgymuunq3qlswyrdhg",
//     "baseName": "INJ",
//     "baseSymbol": "INJ",
//     "baseAddress": "ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "796",
//     "poolAddress": "osmo1rmhusclghxyvyxr9kq4nuum9pvsgplfpuvq0x5d0ufaaxrwkefqsardn6n",
//     "baseName": "cudos",
//     "baseSymbol": "CUDOS",
//     "baseAddress": "ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "803",
//     "poolAddress": "osmo1tg2k5rxex7zhzh3rcvmy6a2yfvw8446ezk7utz8j80vmkrpjve2qljc6hk",
//     "baseName": "atom",
//     "baseSymbol": "ATOM",
//     "baseAddress": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
//     "quoteName": "statom",
//     "quoteSymbol": "stATOM",
//     "quoteAddress": "ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901"
//   },
//   {
//     "poolId": "806",
//     "poolAddress": "osmo1x0ptme5tp8r2qw8gsypg3qftfwfpt2hdk4jyvp7gryywmg5l9fsqvhs8fk",
//     "baseName": "strd",
//     "baseSymbol": "STRD",
//     "baseAddress": "ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "808",
//     "poolAddress": "osmo16cr2suh8wxyd3rdj24s7qe4kr2lnjxmm0495j07tl06jclnwfa2qqs58qg",
//     "baseName": "seasy",
//     "baseSymbol": "SEASY",
//     "baseAddress": "ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "812",
//     "poolAddress": "osmo1ag2w5l8av9msvzhks4vyd920r9lzaesekes6yg3vykp9fch5n22sk6er50",
//     "baseName": "axl",
//     "baseSymbol": "AXL",
//     "baseAddress": "ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "832",
//     "poolAddress": "osmo1q7ul5yz2ma5mjj8vkf5njjz859wk4u90ley2emfx8th4xyx6fg7se0z4hn",
//     "baseName": "jkl",
//     "baseSymbol": "JKL",
//     "baseAddress": "ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "907",
//     "poolAddress": "osmo1752ysawy2adr7td9an30a8pkk8ngrvcq3tan08lvnar3s7f82y5s4dt8fs",
//     "baseName": "mars",
//     "baseSymbol": "MARS",
//     "baseAddress": "ibc/573FCD90FACEE750F55A8864EF7D38265F07E5A9273FA0E8DAFD39951332B580",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "960",
//     "poolAddress": "osmo1wpmkhdwjermkp3u6cg6zdjw4vwvd0awjc63m7e86fptra9cjqw0qcp6vtj",
//     "baseName": "whale",
//     "baseSymbol": "WHALE",
//     "baseAddress": "ibc/EDD6F0D66BCD49C1084FB2C35353B4ACD7B9191117CE63671B61320548F7C89D",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "972",
//     "poolAddress": "osmo10fczpczlj82fm8ce6cnun3j46gganul9dtxj506ldpxnekszjyuq4snyk4",
//     "baseName": "regen",
//     "baseSymbol": "REGEN",
//     "baseAddress": "ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076",
//     "quoteName": "nct",
//     "quoteSymbol": "NCT",
//     "quoteAddress": "ibc/A76EB6ECF4E3E2D4A23C526FD1B48FDD42F171B206C9D2758EF778A7826ADD68"
//   },
//   {
//     "poolId": "1041",
//     "poolAddress": "osmo1v5dnjxx2a9dm9v7vnza3wphakrz9tnfhtcm5at0chflmsnkfl40qxx7fjn",
//     "baseName": "usdc",
//     "baseSymbol": "USDC",
//     "baseAddress": "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858",
//     "quoteName": "nls",
//     "quoteSymbol": "NLS",
//     "quoteAddress": "ibc/D9AFCECDD361D38302AA66EB3BAC23B95234832C51D12489DC451FA2B7C72782"
//   }
// ]
