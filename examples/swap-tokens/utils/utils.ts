import BigNumber from 'bignumber.js';
import { Asset as OsmosisAsset } from '@chain-registry/types';
import {
  assets as nativeAssets,
  asset_list as ibcAssets,
} from '@chain-registry/osmosis';
import {
  getAssetByDenom,
  getDenomByCoinGeckoId,
  getSymbolByChainDenom,
  getChainDenomBySymbol,
  getExponentByDenom as _getExponentByDenom,
  convertCoinGeckoPricesToDenomPriceMap,
  convertBaseUnitsToDollarValue,
  convertDollarValueToDenomUnits,
  convertBaseUnitsToDisplayUnits,
} from '@chain-registry/utils';

import {
  CoinGeckoToken,
  CoinDenom,
  Exponent,
  CoinSymbol,
  PriceHash,
  CoinGeckoUSDResponse,
} from './types';
import { osmosisAssets } from './assets';
import { defaultChainName } from '../config';

export const getOsmoAssetByDenom = (denom: CoinDenom): OsmosisAsset => {
  return getAssetByDenom(osmosisAssets, denom);
};

export const getDenomForCoinGeckoId = (
  coinGeckoId: CoinGeckoToken
): CoinDenom => {
  return getDenomByCoinGeckoId(osmosisAssets, coinGeckoId);
};

export const osmoDenomToSymbol = (denom: CoinDenom): CoinSymbol => {
  return getSymbolByChainDenom(osmosisAssets, denom);
};

export const symbolToOsmoDenom = (token: CoinSymbol): CoinDenom => {
  return getChainDenomBySymbol(osmosisAssets, token);
};

export const getExponentByDenom = (denom: CoinDenom): Exponent => {
  return _getExponentByDenom(osmosisAssets, denom);
};

export const convertGeckoPricesToDenomPriceHash = (
  prices: CoinGeckoUSDResponse
): PriceHash => {
  return convertCoinGeckoPricesToDenomPriceMap(osmosisAssets, prices);
};

export const noDecimals = (num: number | string) => {
  return new BigNumber(num).decimalPlaces(0, BigNumber.ROUND_DOWN).toString();
};

export const baseUnitsToDollarValue = (
  prices: PriceHash,
  symbol: string,
  amount: string | number
) => {
  return convertBaseUnitsToDollarValue(osmosisAssets, prices, symbol, amount);
};

export const dollarValueToDenomUnits = (
  prices: PriceHash,
  symbol: string,
  value: string | number
) => {
  return convertDollarValueToDenomUnits(osmosisAssets, prices, symbol, value);
};

export const baseUnitsToDisplayUnits = (
  symbol: string,
  amount: string | number
) => {
  return convertBaseUnitsToDisplayUnits(osmosisAssets, symbol, amount);
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
    return defaultChainName;
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
