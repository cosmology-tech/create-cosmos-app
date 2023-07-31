import type {
  CoinDenom,
  Exponent,
  CoinSymbol,
  PriceHash,
  CoinGeckoToken,
  CoinGeckoUSD,
  CoinGeckoUSDResponse,
  CoinValue,
  CoinBalance,
  PoolAssetPretty,
  PoolTokenImage,
  PoolPretty,
  CalcPoolAprsParams,
  Trade,
  PrettyPair,
} from "@osmonauts/math/dist/types";

export interface Scenario {
  token: CoinBalance;
  ratio: string;
  symbol: string;
  amount: string;
  enoughCoinsExist: boolean;
  totalDollarValue?: string;
}

export interface Scenarios {
  [key: string]: Scenario[];
}

export {
  CoinDenom,
  Exponent,
  CoinSymbol,
  PriceHash,
  CoinGeckoToken,
  CoinGeckoUSD,
  CoinGeckoUSDResponse,
  CoinValue,
  CoinBalance,
  PoolAssetPretty,
  PoolTokenImage,
  PoolPretty,
  CalcPoolAprsParams,
  Trade,
  PrettyPair,
};
