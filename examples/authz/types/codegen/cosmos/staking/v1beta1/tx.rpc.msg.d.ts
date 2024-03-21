import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { MsgCreateValidator, MsgEditValidator, MsgDelegate, MsgBeginRedelegate, MsgUndelegate } from "./tx";
/** Msg defines the staking Msg service. */
export interface Msg {
    /** CreateValidator defines a method for creating a new validator. */
    createValidator(signerAddress: string, message: MsgCreateValidator, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** EditValidator defines a method for editing an existing validator. */
    editValidator(signerAddress: string, message: MsgEditValidator, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /**
     * Delegate defines a method for performing a delegation of coins
     * from a delegator to a validator.
     */
    delegate(signerAddress: string, message: MsgDelegate, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /**
     * BeginRedelegate defines a method for performing a redelegation
     * of coins from a delegator and source validator to a destination validator.
     */
    beginRedelegate(signerAddress: string, message: MsgBeginRedelegate, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /**
     * Undelegate defines a method for performing an undelegation from a
     * delegate and a validator.
     */
    undelegate(signerAddress: string, message: MsgUndelegate, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    createValidator: (signerAddress: string, message: MsgCreateValidator, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    editValidator: (signerAddress: string, message: MsgEditValidator, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    delegate: (signerAddress: string, message: MsgDelegate, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    beginRedelegate: (signerAddress: string, message: MsgBeginRedelegate, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    undelegate: (signerAddress: string, message: MsgUndelegate, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => MsgClientImpl;
