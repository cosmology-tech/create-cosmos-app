import { MouseEventHandler, ReactNode, RefObject } from 'react';
import { IconType } from 'react-icons';

export interface DataType extends OptionBase {
  isDisabled?: boolean;
  label: string;
  value: string;
  icon?: string;
  chainId: string;
  chainRoute?: string;
}

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
  Rejected = 'Rejected'
}

export interface ConnectWalletType {
  buttonText?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  icon?: IconType;
  onClickConnectBtn?: MouseEventHandler<HTMLButtonElement>;
}

export interface ConnectedUserCardType {
  username?: string;
  icon?: ReactNode;
  walletIcon?: string;
}

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

export interface FeatureProps {
  title: string;
  text: string;
  href: string;
}

export type CopyAddressType = {
  address?: string;
  walletIcon?: string;
  isLoading?: boolean;
  maxDisplayLength?: number;
  isRound?: boolean;
  size?: string;
};