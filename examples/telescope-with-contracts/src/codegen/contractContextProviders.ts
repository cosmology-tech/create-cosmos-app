import {
  CosmWasmClient,
  SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate';
import {
  ContractBase,
  IContractConstructor,
  EmptyClient,
  QueryClientProvider,
  SigningClientProvider,
  MessageComposerProvider,
} from './contractContextBase';
import { Sg721UpdatableQueryClient } from './Sg721Updatable.client';

import { MarketplaceClient } from './Marketplace.client';
import { MarketplaceMessageComposer } from './Marketplace.message-composer';

import { WhitelistClient, WhitelistQueryClient } from './Whitelist.client';
import { WhitelistMessageComposer } from './Whitelist.message-composer';

export class Sg721Updatable
  extends ContractBase<EmptyClient, Sg721UpdatableQueryClient, EmptyClient>
  implements QueryClientProvider<Sg721UpdatableQueryClient>
{
  constructor({
    address,
    cosmWasmClient,
    signingCosmWasmClient,
  }: IContractConstructor) {
    super(
      address,
      cosmWasmClient,
      signingCosmWasmClient,
      undefined,
      Sg721UpdatableQueryClient,
      undefined
    );
  }
}

export class Marketplace extends ContractBase<
  MarketplaceClient,
  EmptyClient,
  MarketplaceMessageComposer
> {
  constructor({
    address,
    cosmWasmClient,
    signingCosmWasmClient,
  }: IContractConstructor) {
    super(
      address,
      cosmWasmClient,
      signingCosmWasmClient,
      MarketplaceClient,
      undefined,
      MarketplaceMessageComposer
    );
  }
}

export class Whitelist extends ContractBase<
  WhitelistClient,
  WhitelistQueryClient,
  WhitelistMessageComposer
> {
  constructor({
    address,
    cosmWasmClient,
    signingCosmWasmClient,
  }: IContractConstructor) {
    super(
      address,
      cosmWasmClient,
      signingCosmWasmClient,
      WhitelistClient,
      WhitelistQueryClient,
      WhitelistMessageComposer
    );
  }
}

export interface IContractsContext {
  sg721Updatable: QueryClientProvider<Sg721UpdatableQueryClient>;
  marketplace: SigningClientProvider<MarketplaceClient> &
    MessageComposerProvider<MarketplaceMessageComposer>;
  whitelist: SigningClientProvider<WhitelistClient> &
    QueryClientProvider<WhitelistQueryClient> &
    MessageComposerProvider<WhitelistMessageComposer>;
}

export const getProviders = (
  address?: string,
  cosmWasmClient?: CosmWasmClient,
  signingCosmWasmClient?: SigningCosmWasmClient
) => ({
  sg721Updatable: new Sg721Updatable({
    address,
    cosmWasmClient,
    signingCosmWasmClient,
  }),
  marketplace: new Marketplace({
    address,
    cosmWasmClient,
    signingCosmWasmClient,
  }),
  whitelist: new Whitelist({
    address,
    cosmWasmClient,
    signingCosmWasmClient,
  }),
});

