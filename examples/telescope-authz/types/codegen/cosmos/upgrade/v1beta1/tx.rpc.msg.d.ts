import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { MsgSoftwareUpgrade, MsgCancelUpgrade } from "./tx";
/** Msg defines the upgrade Msg service. */
export interface Msg {
    /**
     * SoftwareUpgrade is a governance operation for initiating a software upgrade.
     *
     * Since: cosmos-sdk 0.46
     */
    softwareUpgrade(signerAddress: string, message: MsgSoftwareUpgrade, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /**
     * CancelUpgrade is a governance operation for cancelling a previously
     * approvid software upgrade.
     *
     * Since: cosmos-sdk 0.46
     */
    cancelUpgrade(signerAddress: string, message: MsgCancelUpgrade, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    softwareUpgrade: (signerAddress: string, message: MsgSoftwareUpgrade, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    cancelUpgrade: (signerAddress: string, message: MsgCancelUpgrade, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => MsgClientImpl;
