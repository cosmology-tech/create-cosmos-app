import { DenomUnit } from '@chain-registry/types';
import { Duration } from 'osmo-query/dist/codegen/google/protobuf/duration';
import { Gauge } from 'osmo-query/dist/codegen/osmosis/incentives/gauge';
import { SuperfluidAsset } from 'osmo-query/dist/codegen/osmosis/superfluid/superfluid';
import { Coin } from 'osmo-query/dist/codegen/cosmos/base/v1beta1/coin';
import { Pool } from 'osmo-query/dist/codegen/osmosis/gamm/pool-models/balancer/balancerPool';

export type CoinDenom = DenomUnit['denom'];

export type Exponent = DenomUnit['exponent'];

export type CoinSymbol = string;

export interface PriceHash {
  [key: CoinDenom]: number;
}

export type CoinGeckoToken = string;

export interface CoinGeckoUSD {
  usd: number;
}

export type CoinGeckoUSDResponse = Record<CoinGeckoToken, CoinGeckoUSD>;

export interface CoinValue {
  amount: string;
  denom: CoinDenom;
  displayAmount: string;
  value: string;
  symbol: CoinSymbol;
}

export type CoinBalance = Coin & { displayValue: string | number };

export interface PoolAssetPretty {
  symbol: any;
  denom: string;
  amount: string;
  ratio: string;
  info: any;
}

export interface PoolTokenImage {
  token: CoinSymbol;
  images: {
    png: string;
    svg: string;
  };
}

export interface PoolPretty extends Pool {
  nickname: string;
  images: PoolTokenImage[] | null;
  poolAssetsPretty: PoolAssetPretty[];
}

export interface CalcPoolAprsParams {
  activeGauges: Gauge[];
  pool: Pool;
  prices: PriceHash;
  superfluidPools: SuperfluidAsset[];
  aprSuperfluid: string | number;
  lockupDurations: Duration[];
  volume7d: string | number;
  swapFee: string | number;
  lockup?: string;
  includeNonPerpetual?: boolean;
}

export interface Trade {
  sell: Coin;
  buy: Coin;
}

export interface PrettyPair {
  poolId: string;
  poolAddress: string;
  baseName: string;
  baseSymbol: string;
  baseAddress: string;
  quoteName: string;
  quoteSymbol: string;
  quoteAddress: string;
}
