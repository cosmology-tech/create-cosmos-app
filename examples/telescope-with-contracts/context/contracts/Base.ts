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

export const noSigningErrorMessage = 'signingCosmWasmClient not connected';

export const noCosmWasmClientErrorMessage = 'cosmWasmClient not connected';

export const noAddressErrorMessage = "address doesn't exist";

export class ContractBase<TSign, TQuery, TMsgComposer> {
  constructor(
    protected address: string | undefined,
    protected cosmWasmClient: CosmWasmClient | undefined,
    protected signingCosmWasmClient: SigningCosmWasmClient | undefined,
    private TSign: new (
      client: SigningCosmWasmClient,
      sender: string,
      contractAddress: string
    ) => TSign,
    private TQuery: new (
      client: CosmWasmClient,
      contractAddress: string
    ) => TQuery,
    private TMsgComposer: new (
      sender: string,
      contractAddress: string
    ) => TMsgComposer
  ) {}

  public signingClient(contractAddr: string): TSign {
    if (!this.signingCosmWasmClient) throw new Error(noSigningErrorMessage);
    if (!this.address) throw new Error(noAddressErrorMessage);
    return new this.TSign(
      this.signingCosmWasmClient,
      this.address,
      contractAddr
    );
  }

  public queryClient(contractAddr: string): TQuery {
    if (!this.cosmWasmClient) throw new Error(noCosmWasmClientErrorMessage);
    return new this.TQuery(this.cosmWasmClient, contractAddr);
  }

  public messageComposer(contractAddr: string): TMsgComposer {
    if (!this.address) throw new Error(noAddressErrorMessage);
    return new this.TMsgComposer(this.address, contractAddr);
  }
}
