import { AssetDenomUnit } from "@chain-registry/types";
import { Pool } from "osmojs/types/codegen/osmosis/gamm/pool-models/balancer/balancerPool";
import { Coin } from "osmojs/types/codegen/cosmos/base/v1beta1/coin";
import { SuperfluidAsset } from "osmojs/types/codegen/osmosis/superfluid/superfluid";
import { Gauge } from "osmojs/types/codegen/osmosis/incentives/gauge";
import { Duration } from "osmojs/types/codegen/google/protobuf/duration";

export type CoinDenom = AssetDenomUnit["denom"];

export type Exponent = AssetDenomUnit["exponent"];

export interface PriceHash {
  [key: CoinDenom]: number;
}

export interface CoinGeckoUSD {
  usd: number;
}

export type CoinSymbol = string;

export type CoinGeckoToken = string;

export type CoinGeckoUSDResponse = Record<CoinGeckoToken, CoinGeckoUSD>;

export interface CoinValue {
  amount: string;
  denom: CoinDenom;
  displayAmount: string;
  value: string;
  symbol: CoinSymbol;
}

export type CoinBalance = Coin & { displayValue: string | number };

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
