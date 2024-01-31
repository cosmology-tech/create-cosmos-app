import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
    /**
     * CreateVestingAccount defines a method that enables creating a vesting
     * account.
     */
    createVestingAccount(signerAddress: string, message: MsgCreateVestingAccount, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /**
     * CreatePermanentLockedAccount defines a method that enables creating a permanent
     * locked account.
     */
    createPermanentLockedAccount(signerAddress: string, message: MsgCreatePermanentLockedAccount, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /**
     * CreatePeriodicVestingAccount defines a method that enables creating a
     * periodic vesting account.
     */
    createPeriodicVestingAccount(signerAddress: string, message: MsgCreatePeriodicVestingAccount, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    createVestingAccount: (signerAddress: string, message: MsgCreateVestingAccount, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    createPermanentLockedAccount: (signerAddress: string, message: MsgCreatePermanentLockedAccount, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    createPeriodicVestingAccount: (signerAddress: string, message: MsgCreatePeriodicVestingAccount, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => MsgClientImpl;
