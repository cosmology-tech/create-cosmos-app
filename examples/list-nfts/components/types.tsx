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

export enum TxResult {
  Success = 0,
  Failed = 1,
}

export enum SaleType {
  FIXED_PRICE = 'fixed_price',
  AUCTION = 'auction',
}

// *Collection Types*
export interface Collections {
  collections: {
    collections: Collection[];
    total: number;
  };
}

export interface Collection {
  collectionAddr: string;
  name: string;
  description: string;
  tokensCount: number;
  createdBy: CreatedBy;
  floorPrice: number;
}

interface CreatedBy {
  addr: string;
  name?: {
    name: string;
  };
}

// *Token Types*
export interface Tokens {
  tokens: {
    total: number;
    tokens: Token[];
  };
}

export interface Token {
  collectionAddr: string;
  name: string;
  price?: Price;
  priceExpiresAt?: string;
  saleType?: string;
  tokenId: string;
  highestCollectionBid: string;
  description: string;
  forSale: boolean;
  imageUrl: string;
  rarityOrder: number;
  traits: Trait[];
  id: string;
  lastSale: LastSale;
  highestCollectionBidEvent: {
    bidder: {
      addr: string;
    };
  };
}

interface LastSale {
  eventName: string;
  price: Price;
}

export interface Trait {
  name: string;
  value: string;
  rarityPercent: number;
}

interface Price {
  denom: string;
  amount: string;
}

// *Name Types*
export interface Names {
  names: {
    names: Name[];
  };
}

interface Name {
  name: string;
  records: Record[];
}

interface Record {
  id: string;
  recordName: string;
  recordValue: string;
  verified: boolean;
  createdAt: string;
  updatedAt: string;
  name: string;
  contractAddr: string;
}

// *Event Types*
export interface Events {
  events: {
    edges: Edge[];
  };
}

interface Edge {
  node: Node;
}

interface Node {
  eventName: string;
  price?: Price;
  data: Data;
  action?: string;
  id: string;
}

interface Data {
  seller?: string;
  collection?: string;
  starsUsdRatio?: string;
  buyer?: string;
  price?: string;
  tokenId: string;
  priceUsd?: string;
  saleType?: string;
  expires?: string;
  bidPrice?: string;
  bidPriceUsd?: string;
  bidder?: string;
  recipient?: string;
  sender?: string;
  spender?: string;
  minter?: string;
  networkFee?: string;
  sellerAmount?: string;
  mintPrice?: string;
}

// *Contract Types*

export interface Contract {
  contract: {
    contractInfo: ContractInfo;
  };
}

interface ContractInfo {
  start_trading_time: string;
  royalty_info: Royaltyinfo;
  description: string;
  image: string;
  creator: string;
  explicit_content: boolean;
  external_link?: any;
}

interface Royaltyinfo {
  payment_address: string;
  share: string;
}
