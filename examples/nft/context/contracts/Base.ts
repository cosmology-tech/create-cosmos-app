import {
  CosmWasmClient,
  SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate';

export interface IContractConstructor {
  address: string | undefined;
  cosmWasmClient: CosmWasmClient | undefined;
  signingCosmWasmClient: SigningCosmWasmClient | undefined;
}

export class Base {
  protected address: string | undefined = undefined;
  protected cosmWasmClient: CosmWasmClient | undefined = undefined;
  protected signingCosmWasmClient: SigningCosmWasmClient | undefined =
    undefined;

  constructor({
    address,
    cosmWasmClient,
    signingCosmWasmClient,
  }: IContractConstructor) {
    this.address = address;
    this.cosmWasmClient = cosmWasmClient;
    this.signingCosmWasmClient = signingCosmWasmClient;
  }

  protected noSigningOrAddressError =
    "signingCosmWasmClient or address doesn't exist";

  protected noCosmWasmClientError = 'cosmWasmClient not connected';

  protected noAddressError = "address doesn't exist";
}
