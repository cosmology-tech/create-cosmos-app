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

export interface Any {
  typeUrl: string;
  value: Uint8Array;
}

export enum BondStatus {
  BOND_STATUS_UNSPECIFIED = 0,
  BOND_STATUS_UNBONDED = 1,
  BOND_STATUS_UNBONDING = 2,
  BOND_STATUS_BONDED = 3,
  UNRECOGNIZED = -1,
}

export interface Description {
  moniker: string;
  identity: string;
  website: string;
  securityContact: string;
  details: string;
}

export interface CommissionRates {
  rate: string;
  maxRate: string;
  maxChangeRate: string;
}

export interface Commission {
  commissionRates?: CommissionRates | undefined;
  updateTime?: Date | undefined;
}

export interface Validator {
  operatorAddress: string;
  consensusPubkey?: Any | undefined;
  jailed: boolean;
  status: BondStatus;
  tokens: string;
  delegatorShares: string;
  description?: Description | undefined;
  unbondingHeight: Long;
  unbondingTime?: Date | undefined;
  commission?: Commission | undefined;
  minSelfDelegation: string;
}

export interface MyValidator {
  details: string | undefined;
  name: string | undefined;
  address: string;
  staked: number;
  reward: number;
}

export interface Delegation {
  delegatorAddress: string;
  validatorAddress: string;
  shares: string;
}

export interface Coin {
  denom: string;
  amount: string;
}

export interface DelegationResponse {
  delegation?: Delegation | undefined;
  balance?: Coin | undefined;
}

export interface DecCoin {
  denom: string;
  amount: string;
}

export interface Reward {
  validatorAddress: string;
  reward: DecCoin[];
}

export interface DelegationTotalRewards {
  rewards: Reward[];
  total: DecCoin[];
}
