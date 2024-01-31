import { DeliverTxResponse, StdFee, TxRpc } from "../../../../../types";
import { MsgCreateBalancerPool } from "./tx";
export interface Msg {
    createBalancerPool(signerAddress: string, message: MsgCreateBalancerPool, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    createBalancerPool: (signerAddress: string, message: MsgCreateBalancerPool, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => MsgClientImpl;
