import { MouseEventHandler, ReactNode } from 'react'

export interface ChooseChainInfo {
  chainName: string
  chainRoute?: string
  label: string
  value: string
  icon?: string
  disabled?: boolean
}

export enum WalletStatus {
  NotInit = 'NotInit',
  Loading = 'Loading',
  Loaded = 'Loaded',
  NotExist = 'NotExist',
  Rejected = 'Rejected',
}

export interface ConnectWalletType {
  buttonText?: string
  isLoading?: boolean
  isDisabled?: boolean
  icon?: ReactNode
  onClickConnectBtn?: MouseEventHandler<HTMLButtonElement>
}

export interface ConnectedUserCardType {
  walletIcon?: string
  username?: string
  icon?: ReactNode
}

export interface FeatureProps {
  title: string
  text: string
  href: string
}

export interface ChainCardProps {
  prettyName: string
  icon?: string
}
