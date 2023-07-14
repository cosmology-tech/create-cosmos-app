import { contracts } from 'stargazejs';
import {
  WhitelistClient,
  WhitelistQueryClient,
} from 'stargazejs/types/codegen/Whitelist.client';
import { WhitelistMessageComposer } from 'stargazejs/types/codegen/Whitelist.message-composer';
import { Base, IContractConstructor } from './Base';

export class Whitelist extends Base {
  constructor({
    address,
    cosmWasmClient,
    signingCosmWasmClient,
  }: IContractConstructor) {
    super({ address, cosmWasmClient, signingCosmWasmClient });
  }

  public signingClient(contractAddr: string): WhitelistClient {
    if (!this.signingCosmWasmClient || !this.address)
      throw new Error(this.noSigningOrAddressError);
    const { WhitelistClient } = contracts.Whitelist;
    return new WhitelistClient(
      this.signingCosmWasmClient,
      this.address,
      contractAddr
    );
  }

  public queryClient(contractAddr: string): WhitelistQueryClient {
    if (!this.cosmWasmClient) throw new Error(this.noCosmWasmClientError);
    const { WhitelistQueryClient } = contracts.Whitelist;
    return new WhitelistQueryClient(this.cosmWasmClient, contractAddr);
  }

  public messageComposer(contractAddr: string): WhitelistMessageComposer {
    if (!this.address) throw new Error(this.noAddressError);
    const { WhitelistMessageComposer } = contracts.Whitelist;
    return new WhitelistMessageComposer(this.address, contractAddr);
  }
}
