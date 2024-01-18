import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { MsgGrantAllowance, MsgRevokeAllowance } from "./tx";
/** Msg defines the feegrant msg service. */
export interface Msg {
    /**
     * GrantAllowance grants fee allowance to the grantee on the granter's
     * account with the provided expiration time.
     */
    grantAllowance(signerAddress: string, message: MsgGrantAllowance, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
    /**
     * RevokeAllowance revokes any fee allowance of granter's account that
     * has been granted to the grantee.
     */
    revokeAllowance(signerAddress: string, message: MsgRevokeAllowance, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: TxRpc);
    grantAllowance: (signerAddress: string, message: MsgGrantAllowance, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
    revokeAllowance: (signerAddress: string, message: MsgRevokeAllowance, fee?: number | StdFee | "auto", memo?: string) => Promise<DeliverTxResponse>;
}
export declare const createClientImpl: (rpc: TxRpc) => MsgClientImpl;
