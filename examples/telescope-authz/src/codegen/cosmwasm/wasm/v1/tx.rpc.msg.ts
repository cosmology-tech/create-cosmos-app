import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgStoreCode, MsgStoreCodeResponse, MsgInstantiateContract, MsgInstantiateContractResponse, MsgExecuteContract, MsgExecuteContractResponse, MsgMigrateContract, MsgMigrateContractResponse, MsgUpdateAdmin, MsgUpdateAdminResponse, MsgClearAdmin, MsgClearAdminResponse } from "./tx";
/** Msg defines the wasm Msg service. */
export interface Msg {
  /** StoreCode to submit Wasm code to the system */
  storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
  /** Instantiate creates a new smart contract instance for the given code id. */
  instantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse>;
  /** Execute submits the given message data to a smart contract */
  executeContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse>;
  /** Migrate runs a code upgrade/ downgrade for a smart contract */
  migrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponse>;
  /** UpdateAdmin sets a new   admin for a smart contract */
  updateAdmin(request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponse>;
  /** ClearAdmin removes any admin stored for a smart contract */
  clearAdmin(request: MsgClearAdmin): Promise<MsgClearAdminResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* StoreCode to submit Wasm code to the system */
  storeCode = async (request: MsgStoreCode): Promise<MsgStoreCodeResponse> => {
    const data = MsgStoreCode.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "StoreCode", data);
    return promise.then(data => MsgStoreCodeResponse.decode(new BinaryReader(data)));
  };
  /* Instantiate creates a new smart contract instance for the given code id. */
  instantiateContract = async (request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse> => {
    const data = MsgInstantiateContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "InstantiateContract", data);
    return promise.then(data => MsgInstantiateContractResponse.decode(new BinaryReader(data)));
  };
  /* Execute submits the given message data to a smart contract */
  executeContract = async (request: MsgExecuteContract): Promise<MsgExecuteContractResponse> => {
    const data = MsgExecuteContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "ExecuteContract", data);
    return promise.then(data => MsgExecuteContractResponse.decode(new BinaryReader(data)));
  };
  /* Migrate runs a code upgrade/ downgrade for a smart contract */
  migrateContract = async (request: MsgMigrateContract): Promise<MsgMigrateContractResponse> => {
    const data = MsgMigrateContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "MigrateContract", data);
    return promise.then(data => MsgMigrateContractResponse.decode(new BinaryReader(data)));
  };
  /* UpdateAdmin sets a new   admin for a smart contract */
  updateAdmin = async (request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponse> => {
    const data = MsgUpdateAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateAdmin", data);
    return promise.then(data => MsgUpdateAdminResponse.decode(new BinaryReader(data)));
  };
  /* ClearAdmin removes any admin stored for a smart contract */
  clearAdmin = async (request: MsgClearAdmin): Promise<MsgClearAdminResponse> => {
    const data = MsgClearAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "ClearAdmin", data);
    return promise.then(data => MsgClearAdminResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};