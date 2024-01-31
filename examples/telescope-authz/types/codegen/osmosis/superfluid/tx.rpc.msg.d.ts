import { DeliverTxResponse, StdFee, TxRpc } from "../../types";
import { MsgSuperfluidDelegate, MsgSuperfluidUndelegate, MsgSuperfluidUnbondLock, MsgLockAndSuperfluidDelegate, MsgUnPoolWhitelistedPool } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    /** Execute superfluid delegation for a lockup */
    superfluidDelegate(signerAddress: string, message: MsgSuperfluidDelegate, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** Execute superfluid undelegation for a lockup */
    superfluidUndelegate(signerAddress: string, message: MsgSuperfluidUndelegate, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /**
     * For a given lock that is being superfluidly undelegated,
     * also unbond the underlying lock.
     */
    superfluidUnbondLock(signerAddress: string, message: MsgSuperfluidUnbondLock, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** Execute lockup lock and superfluid delegation in a single msg */
    lockAndSuperfluidDelegate(signerAddress: string, message: MsgLockAndSuperfluidDelegate, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    unPoolWhitelistedPool(signerAddress: string, message: MsgUnPoolWhitelistedPool, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    superfluidDelegate: (signerAddress: string, message: MsgSuperfluidDelegate, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    superfluidUndelegate: (signerAddress: string, message: MsgSuperfluidUndelegate, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    superfluidUnbondLock: (signerAddress: string, message: MsgSuperfluidUnbondLock, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    lockAndSuperfluidDelegate: (signerAddress: string, message: MsgLockAndSuperfluidDelegate, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    unPoolWhitelistedPool: (signerAddress: string, message: MsgUnPoolWhitelistedPool, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => MsgClientImpl;
