import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { MsgVerifyInvariant } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
    /** VerifyInvariant defines a method to verify a particular invariance. */
    verifyInvariant(signerAddress: string, message: MsgVerifyInvariant, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    verifyInvariant: (signerAddress: string, message: MsgVerifyInvariant, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => MsgClientImpl;
