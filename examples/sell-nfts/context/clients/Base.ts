import {
  CosmWasmClient,
  SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate';

export interface IClientConstructor {
  address: string | undefined;
  cosmWasmClient: CosmWasmClient | undefined;
  signingCosmWasmClient: SigningCosmWasmClient | undefined;
}

export class BaseClient {
  protected address: string | undefined = undefined;
  protected cosmWasmClient: CosmWasmClient | undefined = undefined;
  protected signingCosmWasmClient: SigningCosmWasmClient | undefined =
    undefined;

  constructor({
    address,
    cosmWasmClient,
    signingCosmWasmClient,
  }: IClientConstructor) {
    this.address = address;
    this.cosmWasmClient = cosmWasmClient;
    this.signingCosmWasmClient = signingCosmWasmClient;
  }

  protected noSigningOrAddressError =
    "signingCosmWasmClient or address doesn't exist";

  protected noCosmWasmClientError = 'cosmWasmClient not connected';

  protected noAddressError = "address doesn't exist";
}
