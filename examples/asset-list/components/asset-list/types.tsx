import { AvailableItem } from '@interchain-ui/react';

export type Unpacked<T> = T extends (infer U)[] ? U : T;

export type PrettyAsset = {
  logoUrl: string | undefined;
  symbol: string;
  prettyChainName: string;
  displayAmount: string;
  dollarValue: string;
  amount: string;
  denom: string;
};

export type Token = {
  price: number;
  denom: string;
  symbol: string;
  liquidity: number;
  volume_24h: number;
  volume_24h_change: number;
  name: string;
  price_24h_change: number;
  price_7d_change: number;
  exponent: number;
  display: string;
};

export type PriceHash = {
  [key: string]: number;
};

export const Transfer = {
  Deposit: 'Deposit',
  Withdraw: 'Withdraw',
} as const;

export type TransferValues = typeof Transfer[keyof typeof Transfer];

export type TransferInfo = {
  type: TransferValues;
  sourceChainName: string;
  destChainName: string;
  token: AvailableItem;
};

export type AssetOption = {
  value: string;
  icon: { png: string | undefined };
};

export type PrettyAssetOption = PrettyAsset & AssetOption;
