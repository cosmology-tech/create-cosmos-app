import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract, MsgMigrateContract, MsgUpdateAdmin, MsgClearAdmin } from "./tx";
/** Msg defines the wasm Msg service. */
export interface Msg {
    /** StoreCode to submit Wasm code to the system */
    storeCode(signerAddress: string, message: MsgStoreCode, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** Instantiate creates a new smart contract instance for the given code id. */
    instantiateContract(signerAddress: string, message: MsgInstantiateContract, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** Execute submits the given message data to a smart contract */
    executeContract(signerAddress: string, message: MsgExecuteContract, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** Migrate runs a code upgrade/ downgrade for a smart contract */
    migrateContract(signerAddress: string, message: MsgMigrateContract, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** UpdateAdmin sets a new   admin for a smart contract */
    updateAdmin(signerAddress: string, message: MsgUpdateAdmin, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** ClearAdmin removes any admin stored for a smart contract */
    clearAdmin(signerAddress: string, message: MsgClearAdmin, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    storeCode: (signerAddress: string, message: MsgStoreCode, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    instantiateContract: (signerAddress: string, message: MsgInstantiateContract, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    executeContract: (signerAddress: string, message: MsgExecuteContract, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    migrateContract: (signerAddress: string, message: MsgMigrateContract, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    updateAdmin: (signerAddress: string, message: MsgUpdateAdmin, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    clearAdmin: (signerAddress: string, message: MsgClearAdmin, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => MsgClientImpl;
