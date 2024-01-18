import { DeliverTxResponse, StdFee, TxRpc } from "../../../../types";
import { MsgCreateClient, MsgUpdateClient, MsgUpgradeClient, MsgSubmitMisbehaviour } from "./tx";
/** Msg defines the ibc/client Msg service. */
export interface Msg {
    /** CreateClient defines a rpc handler method for MsgCreateClient. */
    createClient(signerAddress: string, message: MsgCreateClient, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** UpdateClient defines a rpc handler method for MsgUpdateClient. */
    updateClient(signerAddress: string, message: MsgUpdateClient, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** UpgradeClient defines a rpc handler method for MsgUpgradeClient. */
    upgradeClient(signerAddress: string, message: MsgUpgradeClient, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /** SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour. */
    submitMisbehaviour(signerAddress: string, message: MsgSubmitMisbehaviour, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    createClient: (signerAddress: string, message: MsgCreateClient, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    updateClient: (signerAddress: string, message: MsgUpdateClient, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    upgradeClient: (signerAddress: string, message: MsgUpgradeClient, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    submitMisbehaviour: (signerAddress: string, message: MsgSubmitMisbehaviour, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => MsgClientImpl;
