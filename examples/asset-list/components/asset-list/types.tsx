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
