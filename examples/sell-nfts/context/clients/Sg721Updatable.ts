import { contracts } from 'stargazejs';
import {
  Sg721UpdatableClient,
  Sg721UpdatableQueryClient,
} from 'stargazejs/types/codegen/Sg721Updatable.client';
import { Sg721UpdatableMessageComposer } from 'stargazejs/types/codegen/Sg721Updatable.message-composer';
import { BaseClient, IClientConstructor } from './Base';

export class Sg721Updatable extends BaseClient {
  constructor({
    address,
    cosmWasmClient,
    signingCosmWasmClient,
  }: IClientConstructor) {
    super({ address, cosmWasmClient, signingCosmWasmClient });
  }

  public signingClient(contractAddr: string): Sg721UpdatableClient {
    if (!this.signingCosmWasmClient || !this.address)
      throw new Error(this.noSigningOrAddressError);
    const { Sg721UpdatableClient } = contracts.Sg721Updatable;
    return new Sg721UpdatableClient(
      this.signingCosmWasmClient,
      this.address,
      contractAddr
    );
  }

  public queryClient(contractAddr: string): Sg721UpdatableQueryClient {
    if (!this.cosmWasmClient) throw new Error(this.noCosmWasmClientError);
    const { Sg721UpdatableQueryClient } = contracts.Sg721Updatable;
    return new Sg721UpdatableQueryClient(this.cosmWasmClient, contractAddr);
  }

  public messageComposer(contractAddr: string): Sg721UpdatableMessageComposer {
    if (!this.address) throw new Error(this.noAddressError);
    const { Sg721UpdatableMessageComposer } = contracts.Sg721Updatable;
    return new Sg721UpdatableMessageComposer(this.address, contractAddr);
  }
}
