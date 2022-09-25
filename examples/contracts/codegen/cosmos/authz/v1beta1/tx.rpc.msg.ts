import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgGrant, MsgGrantResponse, MsgGrantResponseSDKType, MsgExec, MsgExecResponse, MsgExecResponseSDKType, MsgRevoke, MsgRevokeResponse, MsgRevokeResponseSDKType } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  grant(request: MsgGrant): Promise<MsgGrantResponseSDKType>;
  /*Grant grants the provided authorization to the grantee on the granter's
  account with the provided expiration time. If there is already a grant
  for the given (granter, grantee, Authorization) triple, then the grant
  will be overwritten.*/

  exec(request: MsgExec): Promise<MsgExecResponseSDKType>;
  /*Exec attempts to execute the provided messages using
  authorizations granted to the grantee. Each message should have only
  one signer corresponding to the granter of the authorization.*/

  revoke(request: MsgRevoke): Promise<MsgRevokeResponseSDKType>;
  /*Revoke revokes any authorization corresponding to the provided method name on the
  granter's account that has been granted to the grantee.*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.grant = this.grant.bind(this);
    this.exec = this.exec.bind(this);
    this.revoke = this.revoke.bind(this);
  }

  grant(request: MsgGrant): Promise<MsgGrantResponseSDKType> {
    const data = MsgGrant.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Grant", data);
    return promise.then(data => MsgGrantResponse.decode(new _m0.Reader(data)));
  }

  exec(request: MsgExec): Promise<MsgExecResponseSDKType> {
    const data = MsgExec.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Exec", data);
    return promise.then(data => MsgExecResponse.decode(new _m0.Reader(data)));
  }

  revoke(request: MsgRevoke): Promise<MsgRevokeResponseSDKType> {
    const data = MsgRevoke.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Revoke", data);
    return promise.then(data => MsgRevokeResponse.decode(new _m0.Reader(data)));
  }

}