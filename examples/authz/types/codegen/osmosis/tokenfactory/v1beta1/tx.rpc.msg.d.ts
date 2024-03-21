import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata } from "./tx";
/** Msg defines the tokefactory module's gRPC message service. */
export interface Msg {
    createDenom(signerAddress: string, message: MsgCreateDenom, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    mint(signerAddress: string, message: MsgMint, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    burn(signerAddress: string, message: MsgBurn, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    changeAdmin(signerAddress: string, message: MsgChangeAdmin, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    setDenomMetadata(signerAddress: string, message: MsgSetDenomMetadata, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    createDenom: (signerAddress: string, message: MsgCreateDenom, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    mint: (signerAddress: string, message: MsgMint, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    burn: (signerAddress: string, message: MsgBurn, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    changeAdmin: (signerAddress: string, message: MsgChangeAdmin, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    setDenomMetadata: (signerAddress: string, message: MsgSetDenomMetadata, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => MsgClientImpl;
