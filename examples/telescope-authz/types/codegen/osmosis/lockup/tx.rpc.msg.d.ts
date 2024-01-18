import { DeliverTxResponse, StdFee, TxRpc } from "../../types";
import { MsgLockTokens, MsgBeginUnlockingAll, MsgBeginUnlocking, MsgExtendLockup, MsgForceUnlock } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    /** LockTokens lock tokens */
    lockTokens(signerAddress: string, message: MsgLockTokens, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** BeginUnlockingAll begin unlocking all tokens */
    beginUnlockingAll(signerAddress: string, message: MsgBeginUnlockingAll, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** MsgBeginUnlocking begins unlocking tokens by lock ID */
    beginUnlocking(signerAddress: string, message: MsgBeginUnlocking, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** MsgEditLockup edits the existing lockups by lock ID */
    extendLockup(signerAddress: string, message: MsgExtendLockup, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    forceUnlock(signerAddress: string, message: MsgForceUnlock, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    lockTokens: (signerAddress: string, message: MsgLockTokens, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    beginUnlockingAll: (signerAddress: string, message: MsgBeginUnlockingAll, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    beginUnlocking: (signerAddress: string, message: MsgBeginUnlocking, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    extendLockup: (signerAddress: string, message: MsgExtendLockup, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    forceUnlock: (signerAddress: string, message: MsgForceUnlock, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => MsgClientImpl;
