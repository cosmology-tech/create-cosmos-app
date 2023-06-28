import { osmosisAssets } from './assets';
import {
  CoinGeckoToken,
  CoinDenom,
  Exponent,
  CoinSymbol,
  PriceHash,
  CoinGeckoUSDResponse,
} from './types';
import { Asset as OsmosisAsset } from '@chain-registry/types';
import BigNumber from 'bignumber.js';
import {
  assets as nativeAssets,
  asset_list as ibcAssets,
} from '@chain-registry/osmosis';
import { chainName } from '../config';

export const getOsmoAssetByDenom = (denom: CoinDenom): OsmosisAsset => {
  const asset = osmosisAssets.find((asset) => asset.base === denom);
  if (!asset) {
    throw new Error(`Asset not found: ${denom}`);
  }
  return asset;
};

export const getDenomForCoinGeckoId = (
  coinGeckoId: CoinGeckoToken
): CoinDenom => {
  return osmosisAssets.find((asset) => asset.coingecko_id === coinGeckoId).base;
};

export const osmoDenomToSymbol = (denom: CoinDenom): CoinSymbol => {
  const asset = getOsmoAssetByDenom(denom);
  const symbol = asset.symbol;
  if (!symbol) {
    return denom;
  }
  return symbol;
};

export const symbolToOsmoDenom = (token: CoinSymbol): CoinDenom => {
  const asset = osmosisAssets.find(({ symbol }) => symbol === token);
  const base = asset?.base;
  if (!base) {
    console.log(`cannot find base for token ${token}`);
    return null;
  }
  return base;
};

export const getExponentByDenom = (denom: CoinDenom): Exponent => {
  const asset = getOsmoAssetByDenom(denom);
  const unit = asset.denom_units.find(({ denom }) => denom === asset.display);
  return unit?.exponent || 0;
};

export const convertGeckoPricesToDenomPriceHash = (
  prices: CoinGeckoUSDResponse
): PriceHash => {
  return Object.keys(prices).reduce((res, geckoId) => {
    const denom = getDenomForCoinGeckoId(geckoId);
    res[denom] = prices[geckoId].usd;
    return res;
  }, {});
};

export const noDecimals = (num: number | string) => {
  return new BigNumber(num).decimalPlaces(0, BigNumber.ROUND_DOWN).toString();
};

export const baseUnitsToDollarValue = (
  prices: PriceHash,
  symbol: string,
  amount: string | number
) => {
  const denom = symbolToOsmoDenom(symbol);
  return new BigNumber(amount)
    .shiftedBy(-getExponentByDenom(denom))
    .multipliedBy(prices[denom])
    .toString();
};

export const dollarValueToDenomUnits = (
  prices: PriceHash,
  symbol: string,
  value: string | number
) => {
  const denom = symbolToOsmoDenom(symbol);
  return new BigNumber(value)
    .dividedBy(prices[denom])
    .shiftedBy(getExponentByDenom(denom))
    .toString();
};

export const baseUnitsToDisplayUnits = (
  symbol: string,
  amount: string | number
) => {
  const denom = symbolToOsmoDenom(symbol);
  return new BigNumber(amount).shiftedBy(-getExponentByDenom(denom)).toString();
};

export const getPriceHash = async () => {
  let prices = [];

  try {
    const response = await fetch(
      'https://api-osmosis.imperator.co/tokens/v2/all'
    );
    if (!response.ok) throw Error('Get price error');
    prices = await response.json();
  } catch (err) {
    console.error(err);
  }

  const priceHash: PriceHash = prices.reduce(
    (prev: any, cur: { denom: any; price: any }) => ({
      ...prev,
      [cur.denom]: cur.price,
    }),
    {}
  );

  return priceHash;
};

export const truncDecimals = (val: string | undefined, decimals: number) => {
  return new BigNumber(val || 0).decimalPlaces(decimals).toString();
};

export const getChainName = (ibcDenom: CoinDenom) => {
  if (nativeAssets.assets.find((asset) => asset.base === ibcDenom)) {
    return chainName;
  }
  const asset = ibcAssets.assets.find((asset) => asset.base === ibcDenom);
  const ibcChainName = asset?.traces?.[0].counterparty.chain_name;
  if (!ibcChainName) throw Error('chainName not found: ' + ibcDenom);
  return ibcChainName;
};

export const isEmptyArray = (arr: any[]) => arr.length === 0;

export const absDifferenceWithSign = (
  a: BigNumber,
  b: BigNumber
): [BigNumber, boolean] => {
  if (a.gte(b)) {
    return [a.minus(b), false];
  } else {
    return [b.minus(a), true];
  }
};

export const powApprox = (
  base: BigNumber,
  exp: BigNumber,
  precision: BigNumber
): BigNumber => {
  if (exp.isZero()) {
    return new BigNumber(0);
  }

  const a = exp;
  const [x, xneg] = absDifferenceWithSign(base, new BigNumber(1));
  let term = new BigNumber(1);
  let sum = new BigNumber(1);
  let negative = false;

  for (let i = 1; term.gte(precision); i++) {
    const bigK = new BigNumber(1).multipliedBy(new BigNumber(i.toString()));
    const [c, cneg] = absDifferenceWithSign(a, bigK.minus(1));
    term = term.multipliedBy(c.multipliedBy(x));
    term = term.div(bigK);

    if (term.isZero()) {
      break;
    }
    if (xneg) {
      negative = !negative;
    }

    if (cneg) {
      negative = !negative;
    }

    if (negative) {
      sum = sum.minus(term);
    } else {
      sum = sum.plus(term);
    }
  }
  return sum;
};

const powPrecision = new BigNumber('0.00000001');

export const pow = (base: BigNumber, exp: BigNumber): BigNumber => {
  if (!base.isPositive()) {
    throw new Error('base must be greater than 0');
  }

  if (base.gte(2)) {
    throw new Error('base must be lesser than two');
  }

  const integer = exp.decimalPlaces(0, BigNumber.ROUND_DOWN);
  const fractional = exp.minus(integer);

  const integerPow = base.pow(integer);

  if (fractional.isZero()) return integerPow;

  const fractionalPow = powApprox(base, fractional, powPrecision);

  return integerPow.multipliedBy(fractionalPow);
};
