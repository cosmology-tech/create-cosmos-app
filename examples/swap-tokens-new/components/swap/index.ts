import { Coin } from '@cosmjs/stargate';
import { Asset, Chain } from '@chain-registry/types';
import { CoinDenom } from '@osmonauts/math/dist/types';

export * from './Swap';

export const Slippages = [1, 2.5, 3, 5];

export type Token = {
  logo?: string
  denom: string
  asset?: Asset
  chain?: Chain
  price?: number
  symbol: string
  amount?: string
  value?: string
  $value?: string
  balance?: Coin
}

export type TokenList = Token[] & {
  rest: Token[]
  hash: Record<CoinDenom, Token>
}