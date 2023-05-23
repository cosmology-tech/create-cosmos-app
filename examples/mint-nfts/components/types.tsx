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

export type Rename<T, K extends keyof T, R extends PropertyKey> = Omit<T, K> & {
  [P in R]: T[K];
};

export type Minter = VendingMinterConfigResponse &
  Rename<MintableNumTokensResponse, 'count', 'remaining_tokens'> &
  Rename<Omit<MintCountResponse, 'address'>, 'count', 'user_minted'> & {
    all_prices: MintPriceResponse;
  };

export type SG721 = CollectionInfoResponse & ContractInfoResponse;

export type Whitelist = WhitelistConfigResponse;

export enum TransactionResult {
  Success = 0,
  Failed = 1,
}

export type TData = {
  balanceAmount: string;
  starsPrice: number;
  collectionInfo: {
    minter: Minter;
    sg721: SG721;
    whitelist?: Whitelist;
  };
};

export type Collections = {
  collections: {
    collections: {
      collectionAddr: string;
      floorPrice: number;
    }[];
  };
};

export type Collection = {
  collection: {
    image: string;
  };
};

export type ContractsAddress = {
  minter: string;
  sg721: string;
};
