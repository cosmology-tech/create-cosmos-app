import { MouseEventHandler, ReactNode, RefObject } from 'react';
import { IconType } from 'react-icons';

export interface ChooseChainInfo {
  chainName: string;
  chainRoute?: string;
  label: string;
  value: string;
  icon?: string;
  disabled?: boolean;
}

export enum WalletStatus {
  NotInit = 'NotInit',
  Loading = 'Loading',
  Loaded = 'Loaded',
  NotExist = 'NotExist',
  Rejected = 'Rejected',
}

export interface ConnectWalletType {
  buttonText?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  icon?: IconType;
  onClickConnectBtn?: MouseEventHandler<HTMLButtonElement>;
}

export interface ConnectedUserCardType {
  walletIcon?: string;
  username?: string;
  icon?: ReactNode;
}

export interface FeatureProps {
  title: string;
  text: string;
  href: string;
}

export interface ChainCardProps {
  prettyName: string;
  icon?: string;
}

export type CopyAddressType = {
  address?: string;
  walletIcon?: string;
  isLoading?: boolean;
  maxDisplayLength?: number;
  isRound?: boolean;
  size?: string;
};

export interface ChangeChainDropdownType {
  data: ChainOption[];
  selectedItem?: ChainOption;
  onChange: handleSelectChainDropdown;
  chainDropdownLoading?: boolean;
}

export interface ChangeChainMenuType {
  data: ChainOption[];
  value?: ChainOption;
  onClose?: () => void;
  onChange: handleSelectChainDropdown;
  innerRef?: RefObject<HTMLInputElement>;
}

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

export type TransferValues = (typeof Transfer)[keyof typeof Transfer];

export enum TransactionResult {
  Success = 0,
  Failed = 1,
}

export type TransferInfo = {
  type: TransferValues;
  sourceChainName: string;
  destChainName: string;
  token: PrettyAsset;
};

export type AssetOption = {
  value: string;
  icon: { png: string | undefined };
};

export type PrettyAssetOption = PrettyAsset & AssetOption;

export interface OptionBase {
  variant?: string;
  colorScheme?: string;
  isFixed?: boolean;
  isDisabled?: boolean;
}

export interface ChainOption extends OptionBase {
  isDisabled?: boolean;
  label: string;
  value: string;
  icon?: string;
  chainName: string;
  chainRoute?: string;
}

export type handleSelectChainDropdown = (value: ChainOption | null) => void;
