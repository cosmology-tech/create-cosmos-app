import { Gauge } from 'osmojs/types/codegen/osmosis/incentives/gauge';
import { MouseEventHandler, ReactNode } from 'react';
import { IconType } from 'react-icons';
import { calcPoolAprs } from '../utils';

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
