import { DeliverTxResponse, StdFee, TxRpc } from "../../../../types";
import { MsgCreateStableswapPool, MsgStableSwapAdjustScalingFactors } from "./tx";
export interface Msg {
    createStableswapPool(signerAddress: string, message: MsgCreateStableswapPool, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    stableSwapAdjustScalingFactors(signerAddress: string, message: MsgStableSwapAdjustScalingFactors, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    createStableswapPool: (signerAddress: string, message: MsgCreateStableswapPool, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    stableSwapAdjustScalingFactors: (signerAddress: string, message: MsgStableSwapAdjustScalingFactors, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => MsgClientImpl;
