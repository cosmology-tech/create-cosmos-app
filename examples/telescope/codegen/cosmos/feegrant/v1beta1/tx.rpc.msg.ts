import { Any } from "../../../google/protobuf/any";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgGrantAllowance, MsgGrantAllowanceResponse, MsgRevokeAllowance, MsgRevokeAllowanceResponse } from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  grantAllowance(request: MsgGrantAllowance): Promise<MsgGrantAllowanceResponse>;
  /*GrantAllowance grants fee allowance to the grantee on the granter's
  account with the provided expiration time.*/

  revokeAllowance(request: MsgRevokeAllowance): Promise<MsgRevokeAllowanceResponse>;
  /*RevokeAllowance revokes any fee allowance of granter's account that
  has been granted to the grantee.*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.grantAllowance = this.grantAllowance.bind(this);
    this.revokeAllowance = this.revokeAllowance.bind(this);
  }

  grantAllowance(request: MsgGrantAllowance): Promise<MsgGrantAllowanceResponse> {
    const data = MsgGrantAllowance.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "GrantAllowance", data);
    return promise.then(data => MsgGrantAllowanceResponse.decode(new _m0.Reader(data)));
  }

  revokeAllowance(request: MsgRevokeAllowance): Promise<MsgRevokeAllowanceResponse> {
    const data = MsgRevokeAllowance.encode(request).finish();
    const promise = this.rpc.request("cosmos.feegrant.v1beta1.Msg", "RevokeAllowance", data);
    return promise.then(data => MsgRevokeAllowanceResponse.decode(new _m0.Reader(data)));
  }

}