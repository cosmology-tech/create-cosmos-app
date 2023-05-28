import { MouseEventHandler, ReactNode } from 'react';
import { IconType } from 'react-icons';
import {
  ConfigResponse as VendingMinterConfigResponse,
  MintCountResponse,
  MintableNumTokensResponse,
  MintPriceResponse,
} from 'stargazejs/types/codegen/VendingMinter.types';
import { ConfigResponse as WhitelistConfigResponse } from 'stargazejs/types/codegen/Whitelist.types';
import {
  ContractInfoResponse,
  CollectionInfoResponse,
} from 'stargazejs/types/codegen/SG721Base.types';

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

export enum TransactionResult {
  Success = 0,
  Failed = 1,
}
