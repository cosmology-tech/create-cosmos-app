import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { MsgSetWithdrawAddress, MsgWithdrawDelegatorReward, MsgWithdrawValidatorCommission, MsgFundCommunityPool } from "./tx";
/** Msg defines the distribution Msg service. */
export interface Msg {
    /**
     * SetWithdrawAddress defines a method to change the withdraw address
     * for a delegator (or validator self-delegation).
     */
    setWithdrawAddress(signerAddress: string, message: MsgSetWithdrawAddress, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /**
     * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
     * from a single validator.
     */
    withdrawDelegatorReward(signerAddress: string, message: MsgWithdrawDelegatorReward, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /**
     * WithdrawValidatorCommission defines a method to withdraw the
     * full commission to the validator address.
     */
    withdrawValidatorCommission(signerAddress: string, message: MsgWithdrawValidatorCommission, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /**
     * FundCommunityPool defines a method to allow an account to directly
     * fund the community pool.
     */
    fundCommunityPool(signerAddress: string, message: MsgFundCommunityPool, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    setWithdrawAddress: (signerAddress: string, message: MsgSetWithdrawAddress, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    withdrawDelegatorReward: (signerAddress: string, message: MsgWithdrawDelegatorReward, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    withdrawValidatorCommission: (signerAddress: string, message: MsgWithdrawValidatorCommission, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    fundCommunityPool: (signerAddress: string, message: MsgFundCommunityPool, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => MsgClientImpl;
