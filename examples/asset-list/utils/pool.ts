import { Pool } from "osmojs/types/codegen/osmosis/gamm/pool-models/balancer/balancerPool";
import { Coin } from "osmojs/types/codegen/cosmos/base/v1beta1/coin";
import {
  PriceHash,
  CoinValue,
  PoolPretty,
  CoinBalance,
  PoolAssetPretty,
  PrettyPair,
} from "./types";
import BigNumber from "bignumber.js";
import { osmosisAssets } from "./assets";
import {
  baseUnitsToDisplayUnits,
  baseUnitsToDollarValue,
  dollarValueToDenomUnits,
  getExponentByDenom,
  osmoDenomToSymbol,
  noDecimals,
  getOsmoAssetByDenom,
} from "./utils";

export const calcPoolLiquidity = (pool: Pool, prices: PriceHash): string => {
  return pool.poolAssets
    .reduce((res, { token }) => {
      const liquidity = new BigNumber(token.amount)
        .shiftedBy(-getExponentByDenom(token.denom))
        .multipliedBy(prices[token.denom]);
      return res.plus(liquidity);
    }, new BigNumber(0))
    .toString();
};

export const getPoolByGammName = (pools: Pool[], gammId: string): Pool => {
  return pools.find(({ totalShares: { denom } }) => denom === gammId);
};

export const convertGammTokenToDollarValue = (
  coin: Coin,
  pool: Pool,
  prices: PriceHash
): string => {
  const { amount } = coin;
  const liquidity = calcPoolLiquidity(pool, prices);

  return new BigNumber(liquidity)
    .multipliedBy(amount)
    .dividedBy(pool.totalShares!.amount)
    .toString();
};

export const convertDollarValueToCoins = (
  value: string | number,
  pool: Pool,
  prices: PriceHash
): CoinValue[] => {
  const tokens = pool.poolAssets.map(({ token: { denom }, weight }) => {
    const ratio = new BigNumber(weight).dividedBy(pool.totalWeight);
    const valueByRatio = new BigNumber(value).multipliedBy(ratio);
    const displayAmount = valueByRatio.dividedBy(prices[denom]).toString();
    const amount = new BigNumber(displayAmount)
      .shiftedBy(getExponentByDenom(denom))
      .toString();
    const symbol = osmoDenomToSymbol(denom);

    return {
      denom,
      symbol,
      amount,
      displayAmount,
      value: valueByRatio.toString(),
    };
  });
  return tokens;
};

export const convertDollarValueToShares = (
  value: string | number,
  pool: Pool,
  prices: PriceHash
) => {
  const liquidity = calcPoolLiquidity(pool, prices);

  return new BigNumber(value)
    .multipliedBy(pool.totalShares.amount)
    .dividedBy(liquidity)
    .shiftedBy(-18)
    .toString();
};

const assetHashMap = osmosisAssets.reduce((res, asset) => {
  return { ...res, [asset.base]: asset };
}, {});

export const prettyPool = (
  pool: Pool,
  { includeDetails = false } = {}
): PoolPretty => {
  const totalWeight = new BigNumber(pool.totalWeight);
  const tokens = pool.poolAssets.map(({ token, weight }) => {
    const asset = assetHashMap?.[token.denom];
    const symbol = asset?.symbol ?? token.denom;
    const ratio = new BigNumber(weight).dividedBy(totalWeight).toString();
    const obj = {
      symbol,
      denom: token.denom,
      amount: token.amount,
      ratio,
      info: undefined,
    };
    if (includeDetails) {
      obj.info = asset;
    }
    return obj;
  });
  const value = {
    nickname: tokens.map((t) => t.symbol).join("/"),
    images: undefined,
  };
  if (includeDetails) {
    value.images = tokens
      .map((t) => {
        const imgs = t?.info?.logo_URIs;
        if (imgs) {
          return {
            token: t.symbol,
            images: imgs,
          };
        }
      })
      .filter(Boolean);
  }
  return {
    ...value,
    ...pool,
    poolAssetsPretty: tokens,
  };
};

export const calcCoinsNeededForValue = (
  prices: PriceHash,
  poolInfo: PoolPretty,
  value: string | number
) => {
  const val = new BigNumber(value);
  const coinsNeeded = poolInfo.poolAssetsPretty.map(
    ({ symbol, amount, denom, ratio }) => {
      const valueByRatio = val.multipliedBy(ratio).toString();
      const amountNeeded = dollarValueToDenomUnits(
        prices,
        symbol,
        valueByRatio
      );
      const unitRatio = new BigNumber(amountNeeded)
        .dividedBy(amount)
        .toString();

      return {
        denom: denom,
        symbol: symbol,
        amount: noDecimals(amountNeeded),
        shareTotalValue: valueByRatio,
        displayAmount: baseUnitsToDisplayUnits(symbol, amountNeeded),
        totalDollarValue: baseUnitsToDollarValue(prices, symbol, amount),
        unitRatio,
      };
    }
  );
  return coinsNeeded;
};

export const getCoinBalance = (
  prices: PriceHash,
  balances: Coin[],
  prettyAsset: PoolAssetPretty
): CoinBalance => {
  const coinBalance = balances.find((coin) => coin.denom == prettyAsset.denom);

  if (!coinBalance || !coinBalance.amount) {
    // console.log({ coinBalance });
    // throw new Error("not enough " + prettyAsset.symbol);
    return { ...coinBalance, displayValue: 0 };
  }

  const displayValue = baseUnitsToDollarValue(
    prices,
    prettyAsset.symbol,
    coinBalance.amount
  );

  return { ...coinBalance, displayValue };
};

export const calcMaxCoinsForPool = (
  prices: PriceHash,
  poolInfo: PoolPretty,
  balances: Coin[]
) => {
  const smallestTotalDollarValue = poolInfo.poolAssetsPretty
    .map((prettyAsset) => {
      const { displayValue } = getCoinBalance(prices, balances, prettyAsset);
      return new BigNumber(displayValue).dividedBy(prettyAsset.ratio);
    })
    .sort((a, b) => a.minus(b).toNumber())[0]
    .toString();

  const coinsNeeded = poolInfo.poolAssetsPretty.map((asset) => {
    const coinValue = new BigNumber(smallestTotalDollarValue)
      .multipliedBy(asset.ratio)
      .toString();
    const amount = dollarValueToDenomUnits(prices, asset.symbol, coinValue);

    return {
      denom: asset.denom,
      amount: noDecimals(amount),
    };
  });

  return coinsNeeded;
};

export const calcShareOutAmount = (
  poolInfo: Pool,
  coinsNeeded: Coin[]
): string => {
  return poolInfo.poolAssets
    .map(({ token }, i) => {
      const tokenInAmount = new BigNumber(coinsNeeded[i].amount);
      const totalShare = new BigNumber(poolInfo.totalShares.amount);
      const totalShareExp = totalShare.shiftedBy(-18);
      const poolAssetAmount = new BigNumber(token.amount);

      return tokenInAmount
        .multipliedBy(totalShareExp)
        .dividedBy(poolAssetAmount)
        .shiftedBy(18)
        .decimalPlaces(0, BigNumber.ROUND_HALF_UP)
        .toString();
    })
    .sort()[0];
};

export const makePoolPairs = (pools: Pool[]): PrettyPair[] => {
  return pools
    .filter(
      (pool) =>
        pool.poolAssets.length === 2 &&
        pool.poolAssets.every(({ token }) => !token.denom.startsWith("gamm"))
    )
    .map((pool) => {
      const assetA = pool.poolAssets[0].token;
      const assetAinfo = getOsmoAssetByDenom(assetA.denom);
      const assetB = pool.poolAssets[1].token;
      const assetBinfo = getOsmoAssetByDenom(assetB.denom);

      if (!assetAinfo || !assetBinfo) return;

      return {
        poolId: typeof pool.id === "string" ? pool.id : pool.id.low.toString(),
        poolAddress: pool.address,
        baseName: assetAinfo.display,
        baseSymbol: assetAinfo.symbol,
        baseAddress: assetAinfo.base,
        quoteName: assetBinfo.display,
        quoteSymbol: assetBinfo.symbol,
        quoteAddress: assetBinfo.base,
      };
    })
    .filter(Boolean);
};
