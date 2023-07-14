import { contracts } from 'stargazejs';
import {
  Sg721UpdatableClient,
  Sg721UpdatableQueryClient,
} from 'stargazejs/types/codegen/Sg721Updatable.client';
import { Sg721UpdatableMessageComposer } from 'stargazejs/types/codegen/Sg721Updatable.message-composer';
import { ContractBase, IContractConstructor } from './Base';

export class Sg721Updatable extends ContractBase<Sg721UpdatableClient, Sg721UpdatableQueryClient, Sg721UpdatableMessageComposer> {
  constructor({
    address,
    cosmWasmClient,
    signingCosmWasmClient,
  }: IContractConstructor) {
    super( address, cosmWasmClient, signingCosmWasmClient, contracts.Sg721Updatable.Sg721UpdatableClient, contracts.Sg721Updatable.Sg721UpdatableQueryClient, contracts.Sg721Updatable.Sg721UpdatableMessageComposer);
  }
}

