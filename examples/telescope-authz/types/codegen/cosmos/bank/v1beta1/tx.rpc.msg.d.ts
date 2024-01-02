import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { MsgSend, MsgMultiSend } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
    /** Send defines a method for sending coins from one account to another account. */
    send(signerAddress: string, message: MsgSend, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** MultiSend defines a method for sending coins from some accounts to other accounts. */
    multiSend(signerAddress: string, message: MsgMultiSend, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    send: (signerAddress: string, message: MsgSend, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    multiSend: (signerAddress: string, message: MsgMultiSend, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => MsgClientImpl;
