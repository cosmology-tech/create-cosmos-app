import { DeliverTxResponse, StdFee, TxRpc } from "../../../../types";
import { MsgConnectionOpenInit, MsgConnectionOpenTry, MsgConnectionOpenAck, MsgConnectionOpenConfirm } from "./tx";
/** Msg defines the ibc/connection Msg service. */
export interface Msg {
    /** ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. */
    connectionOpenInit(signerAddress: string, message: MsgConnectionOpenInit, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. */
    connectionOpenTry(signerAddress: string, message: MsgConnectionOpenTry, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. */
    connectionOpenAck(signerAddress: string, message: MsgConnectionOpenAck, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /**
     * ConnectionOpenConfirm defines a rpc handler method for
     * MsgConnectionOpenConfirm.
     */
    connectionOpenConfirm(signerAddress: string, message: MsgConnectionOpenConfirm, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    connectionOpenInit: (signerAddress: string, message: MsgConnectionOpenInit, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    connectionOpenTry: (signerAddress: string, message: MsgConnectionOpenTry, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    connectionOpenAck: (signerAddress: string, message: MsgConnectionOpenAck, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    connectionOpenConfirm: (signerAddress: string, message: MsgConnectionOpenConfirm, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => MsgClientImpl;
