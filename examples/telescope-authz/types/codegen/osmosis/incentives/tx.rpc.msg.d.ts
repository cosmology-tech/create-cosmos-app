import { DeliverTxResponse, StdFee, TxRpc } from "../../types";
import { MsgCreateGauge, MsgAddToGauge } from "./tx";
export interface Msg {
    createGauge(signerAddress: string, message: MsgCreateGauge, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    addToGauge(signerAddress: string, message: MsgAddToGauge, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    createGauge: (signerAddress: string, message: MsgCreateGauge, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    addToGauge: (signerAddress: string, message: MsgAddToGauge, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => MsgClientImpl;
