import { SwapDataType } from '@cosmology-ui/react';
import { MouseEventHandler, ReactNode } from 'react';
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

export interface SwapToken {
  selectedToken?: AssetOption;
  tokenLoading: boolean;
  dropdownLoading: boolean;
}

export interface InputData {
  amountValue: string;
  fiatValue: string;
  invalid: boolean;
  invalidText?: string;
  isInputLoading?: boolean;
  denom: string;
}

export type AssetOption = {
  name: string;
  label: string;
  value: string;
  symbol: string;
  icon?: {
    png?: string;
    jpeg?: string;
    svg?: string;
  };
  denom: string;
  totalAmount: string;
  totalValue: string;
  amountValue: string;
  fiatValue: string;
};

export enum Result {
  Success = 0,
  Failed = 1,
}
