import { Gauge } from 'osmojs/dist/codegen/osmosis/incentives/gauge';
import { calcPoolAprs } from '../utils';

export enum TransactionResult {
  Success = 0,
  Failed = 1,
}

export type Peroid = '1' | '7' | '14';

export type PoolApr = {
  [K in Peroid]: ReturnType<typeof calcPoolAprs>;
};

export type ExtraPoolProperties = {
  fees7D: number;
  volume24H: number;
  volume7d: number;
  liquidity: string | number;
  myLiquidity?: string | number;
  bonded?: string | number;
  apr: PoolApr;
};

export type GaugeQueryResult = {
  poolId: number;
  gauges: Gauge[];
};

export type Fee = {
  pool_id: string;
  volume_24h: number;
  volume_7d: number;
  fees_spent_24h: number;
  fees_spent_7d: number;
  fees_percentage: string;
};
