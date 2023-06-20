import { contracts } from 'stargazejs';
import {
  MarketplaceClient,
  MarketplaceQueryClient,
} from 'stargazejs/types/codegen/Marketplace.client';
import { MarketplaceMessageComposer } from 'stargazejs/types/codegen/Marketplace.message-composer';
import { BaseClient, IClientConstructor } from './Base';

export class Marketplace extends BaseClient {
  constructor({
    address,
    cosmWasmClient,
    signingCosmWasmClient,
  }: IClientConstructor) {
    super({ address, cosmWasmClient, signingCosmWasmClient });
  }

  public signingClient(contractAddr: string): MarketplaceClient {
    if (!this.signingCosmWasmClient || !this.address)
      throw new Error(this.noSigningOrAddressError);
    const { MarketplaceClient } = contracts.Marketplace;
    return new MarketplaceClient(
      this.signingCosmWasmClient,
      this.address,
      contractAddr
    );
  }

  public queryClient(contractAddr: string): MarketplaceQueryClient {
    if (!this.cosmWasmClient) throw new Error(this.noCosmWasmClientError);
    const { MarketplaceQueryClient } = contracts.Marketplace;
    return new MarketplaceQueryClient(this.cosmWasmClient, contractAddr);
  }

  public messageComposer(contractAddr: string): MarketplaceMessageComposer {
    if (!this.address) throw new Error(this.noAddressError);
    const { MarketplaceMessageComposer } = contracts.Marketplace;
    return new MarketplaceMessageComposer(this.address, contractAddr);
  }
}
