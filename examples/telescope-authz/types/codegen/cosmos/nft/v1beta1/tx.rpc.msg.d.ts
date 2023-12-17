import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { MsgSend } from "./tx";
/** Msg defines the nft Msg service. */
export interface Msg {
    /** Send defines a method to send a nft from one account to another account. */
    send(signerAddress: string, message: MsgSend, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    send: (signerAddress: string, message: MsgSend, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => MsgClientImpl;
