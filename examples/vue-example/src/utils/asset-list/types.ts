import { DenomUnit } from '@chain-registry/types';

export const Transfer = {
  Deposit: 'Deposit',
  Withdraw: 'Withdraw',
} as const;

export type Exponent = DenomUnit['exponent'];
export type CoinDenom = DenomUnit['denom'];
export type CoinSymbol = string;

export interface PriceHash {
  [key: CoinDenom]: number;
}