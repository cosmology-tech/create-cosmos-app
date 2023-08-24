import {
  ConfigResponse as VendingMinterConfigResponse,
  MintCountResponse,
  MintableNumTokensResponse,
  MintPriceResponse,
} from 'stargaze-query/types/codegen/VendingMinter.types';
import { ConfigResponse as WhitelistConfigResponse } from 'stargaze-query/types/codegen/Whitelist.types';
import {
  ContractInfoResponse,
  CollectionInfoResponse,
} from 'stargaze-query/types/codegen/SG721Base.types';

export type Rename<T, K extends keyof T, R extends PropertyKey> = Omit<T, K> & {
  [P in R]: T[K];
};

export type Minter = VendingMinterConfigResponse &
  Rename<MintableNumTokensResponse, 'count', 'remaining_tokens'> &
  Rename<Omit<MintCountResponse, 'address'>, 'count', 'user_minted'> & {
    current_price: MintPriceResponse['current_price'];
  };

export type SG721 = CollectionInfoResponse & ContractInfoResponse;

export type Whitelist = WhitelistConfigResponse;
