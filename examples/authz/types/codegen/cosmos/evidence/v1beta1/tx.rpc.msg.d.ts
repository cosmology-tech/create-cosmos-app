import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { MsgSubmitEvidence } from "./tx";
/** Msg defines the evidence Msg service. */
export interface Msg {
    /**
     * SubmitEvidence submits an arbitrary Evidence of misbehavior such as equivocation or
     * counterfactual signing.
     */
    submitEvidence(signerAddress: string, message: MsgSubmitEvidence, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    submitEvidence: (signerAddress: string, message: MsgSubmitEvidence, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => MsgClientImpl;
