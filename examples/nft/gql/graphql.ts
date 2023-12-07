/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * Implement the DateTime<Utc> scalar
   *
   * The input/output is a string in RFC3339 format.
   */
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  /** A scalar that can represent any JSON Object value. */
  JSONObject: { input: any; output: any; }
  /**
   * ISO 8601 combined date and time without timezone.
   *
   * # Examples
   *
   * * `2015-07-01T08:59:60.123`,
   */
  NaiveDateTime: { input: any; output: any; }
};

export type AttributeFilter = {
  filters: Array<DataFilter>;
  operator?: InputMaybe<EventAttributeFilterOperator>;
};

export enum AuctionEndPreset {
  Next_1Hour = 'NEXT_1_HOUR',
  Next_6Hours = 'NEXT_6_HOURS',
  Next_7Days = 'NEXT_7_DAYS',
  Next_24Hours = 'NEXT_24_HOURS',
  Next_48Hours = 'NEXT_48_HOURS'
}

/** Sort */
export enum CollectionSortBy {
  MintedAtAsc = 'MINTED_AT_ASC',
  MintedAtDesc = 'MINTED_AT_DESC',
  TokensCountAsc = 'TOKENS_COUNT_ASC',
  TokensCountDesc = 'TOKENS_COUNT_DESC',
  Volume_7DDesc = 'VOLUME_7D_DESC',
  Volume_24HDesc = 'VOLUME_24H_DESC'
}

export type ContractDataFilter = {
  name: Scalars['String']['input'];
  operator?: InputMaybe<ContractDataFilterOperator>;
  type: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export enum ContractDataFilterOperator {
  Equal = 'EQUAL',
  Greater = 'GREATER',
  GreaterOrEqual = 'GREATER_OR_EQUAL',
  Lower = 'LOWER',
  LowerOrEqual = 'LOWER_OR_EQUAL'
}

/** Contract filter */
export type ContractFilter = {
  /** Contract type: example: 'crates.io:sg-721` */
  contractType: Scalars['String']['input'];
  events: Array<ContractFilterEvent>;
};

/** Event name and optional action */
export type ContractFilterEvent = {
  action?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export enum ContractSortBy {
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC'
}

export type DataFilter = {
  name: Scalars['String']['input'];
  operator?: InputMaybe<EventDataOperator>;
  value: Scalars['String']['input'];
};

export enum DateGranularity {
  Day = 'DAY',
  Hour = 'HOUR',
  Month = 'MONTH',
  Quarter = 'QUARTER',
  Week = 'WEEK',
  Year = 'YEAR'
}

export enum DatePreset {
  AllTime = 'ALL_TIME',
  Last_7Days = 'LAST_7_DAYS',
  Last_24Hours = 'LAST_24_HOURS',
  Last_30Days = 'LAST_30_DAYS',
  Last_90Days = 'LAST_90_DAYS',
  LastYear = 'LAST_YEAR'
}

export type DateRange = {
  endDate?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['String']['input']>;
};

export type Event = {
  __typename?: 'Event';
  /** Event action. Some event don't have any */
  action?: Maybe<Scalars['String']['output']>;
  /** Bid Price */
  bidPrice?: Maybe<Price>;
  /** Attribute bidder if any */
  bidder?: Maybe<Address>;
  blockEventIdx: Scalars['Int']['output'];
  blockHeight: Scalars['Int']['output'];
  blockMessageIdx: Scalars['Int']['output'];
  blockTxIdx: Scalars['Int']['output'];
  /** Attribute buyer if any */
  buyer?: Maybe<Address>;
  /** Contract Address */
  contractAddr: Scalars['String']['output'];
  /** Contract Attributes */
  contractInfo: Scalars['JSONObject']['output'];
  /** Contract Type */
  contractType: Scalars['String']['output'];
  /** Set the the block time, as UTC without timezone */
  createdAt: Scalars['DateTime']['output'];
  /** Event Attributes */
  data: Scalars['JSONObject']['output'];
  /** Event name */
  eventName: Scalars['String']['output'];
  /**
   * Is this event expired. An event can be expired but still valid on chain, for example a bid
   * might be expired but still valid on chain and STARS still be locked. User will have to
   * remove that bid to unlock those STARS, this event will then become invalid (is_valid set to
   * false)
   */
  expired: Scalars['Boolean']['output'];
  /** Internal UUID, might change between when the indexer is reran. */
  id: Scalars['ID']['output'];
  /** False if this event has been superseded by another event */
  isValid: Scalars['Boolean']['output'];
  /** Attribute operator if any */
  operator?: Maybe<Address>;
  /** Attribute owner if any */
  owner?: Maybe<Address>;
  /** Price */
  price?: Maybe<Price>;
  /** Attribute recipient if any */
  recipient?: Maybe<Address>;
  /** Attribute seller if any */
  seller?: Maybe<Address>;
  /** Attribute sender if any */
  sender?: Maybe<Address>;
  /** Transaction Hash */
  txHash?: Maybe<Scalars['String']['output']>;
};

/** What operator should be applied */
export enum EventAttributeFilterOperator {
  And = 'AND',
  Or = 'OR'
}

export type EventConnection = {
  __typename?: 'EventConnection';
  edges: Array<EventEdge>;
  pageInfo: PageInfo;
};

/** What operation should be evaluated */
export enum EventDataOperator {
  Equal = 'EQUAL',
  Greater = 'GREATER',
  GreaterOrEqual = 'GREATER_OR_EQUAL',
  Lower = 'LOWER',
  LowerOrEqual = 'LOWER_OR_EQUAL'
}

export type EventEdge = {
  __typename?: 'EventEdge';
  cursor: Scalars['String']['output'];
  node: Event;
};

export enum EventSortBy {
  BlockHeightAsc = 'BLOCK_HEIGHT_ASC',
  BlockHeightDesc = 'BLOCK_HEIGHT_DESC'
}

/** Ready to use filters to get specific kind of events */
export enum Filter {
  /** Any event related to airdrops */
  Airdrops = 'AIRDROPS',
  /** Any event related to asks */
  Asks = 'ASKS',
  /** Any event related to bids */
  Bids = 'BIDS',
  /** Any event related to collection bids */
  CollectionBids = 'COLLECTION_BIDS',
  /** Any filtered event related to a given name, use with `for_names` */
  FilteredNameEvents = 'FILTERED_NAME_EVENTS',
  /** Any event related to mints */
  Mints = 'MINTS',
  /** Any event related to name asks */
  NameAsks = 'NAME_ASKS',
  /** Any event related to name bids */
  NameBids = 'NAME_BIDS',
  /** Any event related to a given name, use with `for_names` */
  NameEvents = 'NAME_EVENTS',
  /** Any event related to name sales */
  NameSales = 'NAME_SALES',
  /** Any event related to received offer on owned names, use with `for_addresses` */
  ReceivedOffersOnOwnedNames = 'RECEIVED_OFFERS_ON_OWNED_NAMES',
  /** Any event related to received offer on owned NFT, use with `for_addresses` */
  ReceivedOffersOnOwnedNft = 'RECEIVED_OFFERS_ON_OWNED_NFT',
  /** Any event related to sales */
  Sales = 'SALES',
  /** Any event related to sent name offers, use with `for_addresses` */
  SentNameOffers = 'SENT_NAME_OFFERS',
  /** Any event related to a given NFT, use with `for_token` */
  TokenMetadatas = 'TOKEN_METADATAS'
}

export enum NameSortBy {
  MintedAtAsc = 'MINTED_AT_ASC',
  MintedAtDesc = 'MINTED_AT_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  OffersAsc = 'OFFERS_ASC',
  OffersDesc = 'OFFERS_DESC'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Price = {
  __typename?: 'Price';
  amount: Scalars['String']['output'];
  denom: Scalars['String']['output'];
  usd?: Maybe<PriceWithRate>;
};

export type PriceFilter = {
  max?: InputMaybe<Scalars['Decimal']['input']>;
  min?: InputMaybe<Scalars['Decimal']['input']>;
};

export type PriceWithRate = {
  __typename?: 'PriceWithRate';
  amount: Scalars['String']['output'];
  denom: Scalars['String']['output'];
  rate: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** Fetch a collection by its address */
  collection?: Maybe<Collection>;
  /** Fetch all traits available for a collection */
  collectionTraits: Array<Collection_Trait>;
  /** Fetch collections */
  collections: Collection_Node;
  /** Contract */
  contract?: Maybe<Contract>;
  /** Contracts */
  contracts: Contract_Node;
  events: EventConnection;
  /** Name by name */
  name?: Maybe<Name>;
  /** Names */
  names: Name_Node;
  /** Fetch collection addresses and count of tokens owned for an address */
  ownedCollections: Owned_Collections_Node;
  /** Fetch NFT sales */
  sales: Sales_Node;
  /** Fetch historical sales stats for Stargaze or for a specific collection */
  salesStats: Sales_Stats_Node;
  token?: Maybe<Token>;
  tokens: Token_Node;
};


export type QueryCollectionArgs = {
  collectionAddr: Scalars['String']['input'];
};


export type QueryCollectionTraitsArgs = {
  collectionAddr: Scalars['String']['input'];
};


export type QueryCollectionsArgs = {
  creatorAddr?: InputMaybe<Scalars['String']['input']>;
  isBlocked?: Scalars['Boolean']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<CollectionSortBy>;
  tokenOwnerAddr?: InputMaybe<Scalars['String']['input']>;
};


export type QueryContractArgs = {
  address: Scalars['String']['input'];
};


export type QueryContractsArgs = {
  contractTypes?: InputMaybe<Array<Scalars['String']['input']>>;
  dataFilters?: InputMaybe<Array<ContractDataFilter>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<ContractSortBy>;
};


export type QueryEventsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  attributeFilters?: InputMaybe<AttributeFilter>;
  before?: InputMaybe<Scalars['String']['input']>;
  contractFilters?: InputMaybe<Array<ContractFilter>>;
  dataFilters?: InputMaybe<Array<DataFilter>>;
  filter?: InputMaybe<Filter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forAddresses?: InputMaybe<Array<Scalars['String']['input']>>;
  forContractAddrs?: InputMaybe<Array<Scalars['String']['input']>>;
  forNames?: InputMaybe<Array<Scalars['String']['input']>>;
  forToken?: InputMaybe<TokenInput>;
  isValid?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<EventSortBy>;
};


export type QueryNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryNamesArgs = {
  associatedAddr?: InputMaybe<Scalars['String']['input']>;
  filterByRecords?: InputMaybe<Array<RecordFilter>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  ownerAddr?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<NameSortBy>;
};


export type QueryOwnedCollectionsArgs = {
  filterForSale?: InputMaybe<SaleType>;
  includeBlocked?: Scalars['Boolean']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  ownerAddr?: InputMaybe<Scalars['String']['input']>;
  sellerAddr?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySalesArgs = {
  datePresetFilter?: InputMaybe<DatePreset>;
  dateRangeFilter?: InputMaybe<DateRange>;
  filterByCollectionAddrs?: InputMaybe<Array<Scalars['String']['input']>>;
  filterBySaleType?: InputMaybe<Array<SalesSaleType>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<SalesSortBy>;
};


export type QuerySalesStatsArgs = {
  collectionAddr?: InputMaybe<Scalars['String']['input']>;
  datePresetFilter?: InputMaybe<DatePreset>;
  dateRangeFilter?: InputMaybe<DateRange>;
  granularity?: DateGranularity;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTokenArgs = {
  collectionAddr: Scalars['String']['input'];
  tokenId: Scalars['String']['input'];
};


export type QueryTokensArgs = {
  collectionAddr?: InputMaybe<Scalars['String']['input']>;
  filterAuctionEndByDate?: InputMaybe<DateRange>;
  filterAuctionEndByPreset?: InputMaybe<AuctionEndPreset>;
  filterByCollectionAddrs?: InputMaybe<Array<Scalars['String']['input']>>;
  filterByPrices?: InputMaybe<PriceFilter>;
  filterByTraits?: InputMaybe<Array<TraitFilter>>;
  filterForSale?: InputMaybe<SaleType>;
  includeBlocked?: Scalars['Boolean']['input'];
  includeBurned?: Scalars['Boolean']['input'];
  includeUnminted?: Scalars['Boolean']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  ownerAddr?: InputMaybe<Scalars['String']['input']>;
  sellerAddr?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<TokenSortBy>;
};

/** Filter on records, example: `name: twitter, value: fabienpenso` */
export type RecordFilter = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum SaleType {
  Any = 'ANY',
  Auction = 'AUCTION',
  Expired = 'EXPIRED',
  FixedPrice = 'FIXED_PRICE',
  Listed = 'LISTED',
  LiveAuction = 'LIVE_AUCTION',
  Unlisted = 'UNLISTED'
}

export enum SalesSaleType {
  Auction = 'AUCTION',
  CollectionOffer = 'COLLECTION_OFFER',
  FixedPrice = 'FIXED_PRICE',
  Offer = 'OFFER'
}

export enum SalesSortBy {
  RarityAsc = 'RARITY_ASC',
  RarityDesc = 'RARITY_DESC',
  SaleTimeAsc = 'SALE_TIME_ASC',
  SaleTimeDesc = 'SALE_TIME_DESC',
  StarsPriceAsc = 'STARS_PRICE_ASC',
  StarsPriceDesc = 'STARS_PRICE_DESC',
  TokenIdAsc = 'TOKEN_ID_ASC',
  TokenIdDesc = 'TOKEN_ID_DESC',
  UsdPriceAsc = 'USD_PRICE_ASC',
  UsdPriceDesc = 'USD_PRICE_DESC'
}

export type TokenInput = {
  collectionAddr: Scalars['String']['input'];
  tokenId: Scalars['String']['input'];
};

export enum TokenSortBy {
  AcquiredAsc = 'ACQUIRED_ASC',
  AcquiredDesc = 'ACQUIRED_DESC',
  CollectionAddrTokenIdAsc = 'COLLECTION_ADDR_TOKEN_ID_ASC',
  ListedAsc = 'LISTED_ASC',
  ListedDesc = 'LISTED_DESC',
  ListingType = 'LISTING_TYPE',
  LiveAuctionEndTimeAsc = 'LIVE_AUCTION_END_TIME_ASC',
  LiveAuctionEndTimeDesc = 'LIVE_AUCTION_END_TIME_DESC',
  LiveAuctionHighestBidAsc = 'LIVE_AUCTION_HIGHEST_BID_ASC',
  LiveAuctionHighestBidDesc = 'LIVE_AUCTION_HIGHEST_BID_DESC',
  LiveAuctionStartTimeAsc = 'LIVE_AUCTION_START_TIME_ASC',
  LiveAuctionStartTimeDesc = 'LIVE_AUCTION_START_TIME_DESC',
  MintedAsc = 'MINTED_ASC',
  MintedDesc = 'MINTED_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  RarityAsc = 'RARITY_ASC',
  RarityDesc = 'RARITY_DESC',
  TokenIdAsc = 'TOKEN_ID_ASC',
  TokenIdDesc = 'TOKEN_ID_DESC'
}

export type TraitFilter = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Address = {
  __typename?: 'address';
  addr: Scalars['String']['output'];
  /** the associated name, if any */
  name?: Maybe<Name>;
};

export type Collection = {
  __typename?: 'collection';
  /** Is this collection manually blocked */
  blocked: Scalars['Boolean']['output'];
  /** Collection address */
  collectionAddr: Scalars['String']['output'];
  /**
   * When was this collection created at.
   * @deprecated Field created_at is deprecated, use minted_at instead
   */
  createdAt: Scalars['DateTime']['output'];
  /** The address that created this collection */
  createdBy: Address;
  /** Creator address */
  createdByAddr: Scalars['String']['output'];
  /** Description */
  description: Scalars['String']['output'];
  /**
   * The floor price is the lowest price for any currently for sale item in the collection.
   * Returned as STARS.
   */
  floorPrice?: Maybe<Scalars['Int']['output']>;
  /** Internal UUID, might change between when the indexer is reran. */
  id: Scalars['ID']['output'];
  /** Main image */
  image: Scalars['String']['output'];
  imageObject?: Maybe<Image>;
  /** When was this collection minted on chain. UTC without timezone */
  mintedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Name */
  name: Scalars['String']['output'];
  /**
   * How many tokens this collection has for the given owner when called through
   * OwnedCollections
   */
  ownerTokensCount?: Maybe<Scalars['Int']['output']>;
  /** Owners for this collection */
  owners: Collection_Owners;
  ownersCount?: Maybe<Scalars['Int']['output']>;
  /** How many tokens this collection has */
  tokensCount?: Maybe<Scalars['Int']['output']>;
  /** Website */
  website?: Maybe<Scalars['String']['output']>;
};


export type CollectionOwnersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Collection_Node = {
  __typename?: 'collection_node';
  collections: Array<Collection>;
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type Collection_Owner = {
  __typename?: 'collection_owner';
  count: Scalars['Int']['output'];
  owner: Address;
};

export type Collection_Owners = {
  __typename?: 'collection_owners';
  owners: Array<Collection_Owner>;
  totalCount: Scalars['Int']['output'];
};

export type Collection_Token_Count = {
  __typename?: 'collection_token_count';
  collectionAddr: Scalars['String']['output'];
  tokenCount: Scalars['Int']['output'];
};

export type Collection_Trait = {
  __typename?: 'collection_trait';
  name: Scalars['String']['output'];
  values: Array<Collection_Trait_Value>;
};

export type Collection_Trait_Value = {
  __typename?: 'collection_trait_value';
  numTokens: Scalars['Int']['output'];
  numTokensForSale: Scalars['Int']['output'];
  rarityPercent?: Maybe<Scalars['Float']['output']>;
  value: Scalars['String']['output'];
};

export type Contract = {
  __typename?: 'contract';
  blockHeight: Scalars['Int']['output'];
  blocked: Scalars['Boolean']['output'];
  contractAddr: Scalars['String']['output'];
  contractCodeId?: Maybe<Scalars['String']['output']>;
  contractInfo: Scalars['JSONObject']['output'];
  contractLabel?: Maybe<Scalars['String']['output']>;
  contractType: Scalars['String']['output'];
  contractVersion?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['NaiveDateTime']['output'];
  lastErrorAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  updatedAt: Scalars['NaiveDateTime']['output'];
};

export type Contract_Node = {
  __typename?: 'contract_node';
  contracts: Array<Contract>;
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type Image = {
  __typename?: 'image';
  contentLength?: Maybe<Scalars['Int']['output']>;
  contentType?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type Name = {
  __typename?: 'name';
  askPrice?: Maybe<Price>;
  associatedAddr?: Maybe<Scalars['String']['output']>;
  contractAddr: Scalars['String']['output'];
  forSale: Scalars['Boolean']['output'];
  highestOffer?: Maybe<Scalars['Decimal']['output']>;
  highestOfferEvent?: Maybe<Event>;
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  mintedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  name: Scalars['String']['output'];
  ownerAddr: Scalars['String']['output'];
  records?: Maybe<Array<Name_Record>>;
};

export type Name_Node = {
  __typename?: 'name_node';
  limit: Scalars['Int']['output'];
  names: Array<Name>;
  offset: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type Name_Record = {
  __typename?: 'name_record';
  contractAddr: Scalars['String']['output'];
  createdAt: Scalars['NaiveDateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  recordName: Scalars['String']['output'];
  recordValue: Scalars['String']['output'];
  updatedAt: Scalars['NaiveDateTime']['output'];
  verified: Scalars['Boolean']['output'];
};

export type Owned_Collections_Node = {
  __typename?: 'owned_collections_node';
  collections: Array<Collection>;
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  /** @deprecated Field owned_collections_token_count is deprecated, use collections instead */
  ownedCollectionsTokenCount: Array<Collection_Token_Count>;
  total: Scalars['Int']['output'];
};

export type Sale = {
  __typename?: 'sale';
  /** Block Height */
  blockHeight: Scalars['Int']['output'];
  /** Buyer Address */
  buyer?: Maybe<Scalars['String']['output']>;
  /** Collection Address */
  collectionAddr: Scalars['String']['output'];
  /** Sale Time */
  createdAt: Scalars['NaiveDateTime']['output'];
  /** Rarity Order */
  rarityOrder?: Maybe<Scalars['Int']['output']>;
  /** Sale Price in STARS */
  salePriceStars: Scalars['Int']['output'];
  /** Sale Price in USD */
  salePriceUsd: Scalars['Decimal']['output'];
  /** Event Name */
  saleType: Scalars['String']['output'];
  /** Seller Address */
  seller?: Maybe<Scalars['String']['output']>;
  /** Token ID */
  tokenId: Scalars['String']['output'];
  /** Transaction Hash */
  txHash?: Maybe<Scalars['String']['output']>;
};

export type Sales_Node = {
  __typename?: 'sales_node';
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  sales: Array<Sale>;
  total: Scalars['Int']['output'];
};

export type Sales_Stats = {
  __typename?: 'sales_stats';
  /** Average sale price in STARS */
  avgPriceStars: Scalars['Decimal']['output'];
  /** Average sale price in USD */
  avgPriceUsd: Scalars['Decimal']['output'];
  /** Sales count */
  salesCount: Scalars['Int']['output'];
  timePeriod?: Maybe<Scalars['NaiveDateTime']['output']>;
  /** Volume in STARS */
  volumeStars: Scalars['Decimal']['output'];
  /** Volume in USD */
  volumeUsd: Scalars['Decimal']['output'];
};

export type Sales_Stats_Node = {
  __typename?: 'sales_stats_node';
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  salesStats: Array<Sales_Stats>;
  /** Total values for the selected time period */
  statsTotals: Sales_Stats_Totals;
  total: Scalars['Int']['output'];
};

export type Sales_Stats_Totals = {
  __typename?: 'sales_stats_totals';
  avgPriceStars: Scalars['Decimal']['output'];
  avgPriceUsd: Scalars['Decimal']['output'];
  salesCount: Scalars['Int']['output'];
  volumeStars: Scalars['Decimal']['output'];
  volumeUsd: Scalars['Decimal']['output'];
};

export type Token = {
  __typename?: 'token';
  animation?: Maybe<Image>;
  animationUrl?: Maybe<Scalars['String']['output']>;
  collectionAddr: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  forSale: Scalars['Boolean']['output'];
  /** The highest non-expired valid bid for this token */
  highestBid?: Maybe<Scalars['Decimal']['output']>;
  /** The highest non-expired valid bid for this token */
  highestBidEvent?: Maybe<Event>;
  /** The highest non-expired valid collection bid for the collection attached to this token */
  highestCollectionBid?: Maybe<Scalars['Decimal']['output']>;
  /** The highest non-expired valid collection bid for the collection attached to this token */
  highestCollectionBidEvent?: Maybe<Event>;
  highestLiveAuctionBidEvent?: Maybe<Event>;
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  /** The latest sale */
  lastSale?: Maybe<Event>;
  listedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  liveAuctionEndTime?: Maybe<Scalars['DateTime']['output']>;
  liveAuctionEvent?: Maybe<Event>;
  liveAuctionHighestBid?: Maybe<Price>;
  liveAuctionStartTime?: Maybe<Scalars['DateTime']['output']>;
  mintedAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** The address that owns this token */
  owner?: Maybe<Address>;
  ownerAddr?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Price>;
  priceExpiresAt?: Maybe<Scalars['NaiveDateTime']['output']>;
  rarityOrder?: Maybe<Scalars['Int']['output']>;
  rarityScore?: Maybe<Scalars['Decimal']['output']>;
  saleType?: Maybe<Scalars['String']['output']>;
  sellerAddr?: Maybe<Scalars['String']['output']>;
  tokenId: Scalars['String']['output'];
  traits?: Maybe<Array<Token_Trait>>;
};

export type Token_Node = {
  __typename?: 'token_node';
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  tokens: Array<Token>;
  total: Scalars['Int']['output'];
};

export type Token_Trait = {
  __typename?: 'token_trait';
  name: Scalars['String']['output'];
  rarity?: Maybe<Scalars['Float']['output']>;
  rarityPercent?: Maybe<Scalars['Float']['output']>;
  rarityScore?: Maybe<Scalars['Float']['output']>;
  value: Scalars['String']['output'];
};

export type MintTokensQueryVariables = Exact<{
  collectionAddr?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type MintTokensQuery = { __typename?: 'Query', tokens: { __typename?: 'token_node', tokens: Array<{ __typename?: 'token', tokenId: string, imageUrl?: string | null }> } };

export type MintCollectionsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<CollectionSortBy>;
}>;


export type MintCollectionsQuery = { __typename?: 'Query', collections: { __typename?: 'collection_node', collections: Array<{ __typename?: 'collection', collectionAddr: string, floorPrice?: number | null }> } };

export type CollectionsQueryVariables = Exact<{
  tokenOwnerAddr?: InputMaybe<Scalars['String']['input']>;
}>;


export type CollectionsQuery = { __typename?: 'Query', collections: { __typename?: 'collection_node', total: number, collections: Array<{ __typename?: 'collection', collectionAddr: string, name: string, description: string, tokensCount?: number | null, floorPrice?: number | null, createdBy: { __typename?: 'address', addr: string, name?: { __typename?: 'name', name: string, ownerAddr: string, associatedAddr?: string | null } | null } }> } };

export type CollectionImageQueryVariables = Exact<{
  collectionAddr: Scalars['String']['input'];
}>;


export type CollectionImageQuery = { __typename?: 'Query', collection?: { __typename?: 'collection', image: string } | null };

export type TokensQueryVariables = Exact<{
  ownerAddr?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<TokenSortBy>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type TokensQuery = { __typename?: 'Query', tokens: { __typename?: 'token_node', total: number, tokens: Array<{ __typename?: 'token', collectionAddr: string, name?: string | null, priceExpiresAt?: any | null, saleType?: string | null, tokenId: string, highestCollectionBid?: any | null, description?: string | null, forSale: boolean, imageUrl?: string | null, rarityOrder?: number | null, id: string, price?: { __typename?: 'Price', denom: string, amount: string } | null, traits?: Array<{ __typename?: 'token_trait', name: string, value: string, rarityPercent?: number | null }> | null, lastSale?: { __typename?: 'Event', eventName: string, price?: { __typename?: 'Price', denom: string, amount: string } | null } | null, highestCollectionBidEvent?: { __typename?: 'Event', bidder?: { __typename?: 'address', addr: string } | null } | null }> } };

export type NamesQueryVariables = Exact<{
  associatedAddr?: InputMaybe<Scalars['String']['input']>;
}>;


export type NamesQuery = { __typename?: 'Query', names: { __typename?: 'name_node', names: Array<{ __typename?: 'name', name: string, records?: Array<{ __typename?: 'name_record', id: string, recordName: string, recordValue: string, verified: boolean, createdAt: any, updatedAt: any, name: string, contractAddr: string }> | null }> } };

export type EventsQueryVariables = Exact<{
  forToken?: InputMaybe<TokenInput>;
  filter?: InputMaybe<Filter>;
  sortBy?: InputMaybe<EventSortBy>;
}>;


export type EventsQuery = { __typename?: 'Query', events: { __typename?: 'EventConnection', edges: Array<{ __typename?: 'EventEdge', node: { __typename?: 'Event', eventName: string, data: any, action?: string | null, id: string, price?: { __typename?: 'Price', denom: string, amount: string } | null } }> } };

export type ContractQueryVariables = Exact<{
  address: Scalars['String']['input'];
}>;


export type ContractQuery = { __typename?: 'Query', contract?: { __typename?: 'contract', contractInfo: any } | null };


export const MintTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MintTokens"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionAddr"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"collectionAddr"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionAddr"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}}]}}]}}]}}]} as unknown as DocumentNode<MintTokensQuery, MintTokensQueryVariables>;
export const MintCollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MintCollections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CollectionSortBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collectionAddr"}},{"kind":"Field","name":{"kind":"Name","value":"floorPrice"}}]}}]}}]}}]} as unknown as DocumentNode<MintCollectionsQuery, MintCollectionsQueryVariables>;
export const CollectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Collections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tokenOwnerAddr"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tokenOwnerAddr"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tokenOwnerAddr"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collectionAddr"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"tokensCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addr"}},{"kind":"Field","name":{"kind":"Name","value":"name"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"ownerAddr"}},{"kind":"Field","name":{"kind":"Name","value":"associatedAddr"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"floorPrice"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<CollectionsQuery, CollectionsQueryVariables>;
export const CollectionImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CollectionImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collectionAddr"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"collectionAddr"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collectionAddr"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<CollectionImageQuery, CollectionImageQueryVariables>;
export const TokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Tokens"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ownerAddr"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TokenSortBy"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"ownerAddr"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ownerAddr"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"tokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collectionAddr"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"denom"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"priceExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"saleType"}},{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"highestCollectionBid"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"forSale"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"rarityOrder"}},{"kind":"Field","name":{"kind":"Name","value":"traits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"rarityPercent"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastSale"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventName"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"denom"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"highestCollectionBidEvent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bidder"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addr"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<TokensQuery, TokensQueryVariables>;
export const NamesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Names"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"associatedAddr"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"names"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"associatedAddr"},"value":{"kind":"Variable","name":{"kind":"Name","value":"associatedAddr"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"names"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"recordName"}},{"kind":"Field","name":{"kind":"Name","value":"recordValue"}},{"kind":"Field","name":{"kind":"Name","value":"verified"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"contractAddr"}}]}}]}}]}}]}}]} as unknown as DocumentNode<NamesQuery, NamesQueryVariables>;
export const EventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Events"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"forToken"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TokenInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Filter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"EventSortBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"events"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"forToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"forToken"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventName"}},{"kind":"Field","name":{"kind":"Name","value":"price"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"denom"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<EventsQuery, EventsQueryVariables>;
export const ContractDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Contract"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"address"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contract"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"address"},"value":{"kind":"Variable","name":{"kind":"Name","value":"address"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contractInfo"}}]}}]}}]} as unknown as DocumentNode<ContractQuery, ContractQueryVariables>;