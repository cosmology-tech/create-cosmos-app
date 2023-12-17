import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { MsgGrant, MsgExec, MsgRevoke } from "./tx";
/** Msg defines the authz Msg service. */
export interface Msg {
    /**
     * Grant grants the provided authorization to the grantee on the granter's
     * account with the provided expiration time. If there is already a grant
     * for the given (granter, grantee, Authorization) triple, then the grant
     * will be overwritten.
     */
    grant(signerAddress: string, message: MsgGrant, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /**
     * Exec attempts to execute the provided messages using
     * authorizations granted to the grantee. Each message should have only
     * one signer corresponding to the granter of the authorization.
     */
    exec(signerAddress: string, message: MsgExec, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /**
     * Revoke revokes any authorization corresponding to the provided method name on the
     * granter's account that has been granted to the grantee.
     */
    revoke(signerAddress: string, message: MsgRevoke, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    grant: (signerAddress: string, message: MsgGrant, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    exec: (signerAddress: string, message: MsgExec, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    revoke: (signerAddress: string, message: MsgRevoke, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => MsgClientImpl;
