import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateClient, MsgCreateClientResponse, MsgCreateClientResponseSDKType, MsgUpdateClient, MsgUpdateClientResponse, MsgUpdateClientResponseSDKType, MsgUpgradeClient, MsgUpgradeClientResponse, MsgUpgradeClientResponseSDKType, MsgSubmitMisbehaviour, MsgSubmitMisbehaviourResponse, MsgSubmitMisbehaviourResponseSDKType } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  createClient(request: MsgCreateClient): Promise<MsgCreateClientResponseSDKType>;
  /*CreateClient defines a rpc handler method for MsgCreateClient.*/

  updateClient(request: MsgUpdateClient): Promise<MsgUpdateClientResponseSDKType>;
  /*UpdateClient defines a rpc handler method for MsgUpdateClient.*/

  upgradeClient(request: MsgUpgradeClient): Promise<MsgUpgradeClientResponseSDKType>;
  /*UpgradeClient defines a rpc handler method for MsgUpgradeClient.*/

  submitMisbehaviour(request: MsgSubmitMisbehaviour): Promise<MsgSubmitMisbehaviourResponseSDKType>;
  /*SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour.*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createClient = this.createClient.bind(this);
    this.updateClient = this.updateClient.bind(this);
    this.upgradeClient = this.upgradeClient.bind(this);
    this.submitMisbehaviour = this.submitMisbehaviour.bind(this);
  }

  createClient(request: MsgCreateClient): Promise<MsgCreateClientResponseSDKType> {
    const data = MsgCreateClient.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "CreateClient", data);
    return promise.then(data => MsgCreateClientResponse.decode(new _m0.Reader(data)));
  }

  updateClient(request: MsgUpdateClient): Promise<MsgUpdateClientResponseSDKType> {
    const data = MsgUpdateClient.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpdateClient", data);
    return promise.then(data => MsgUpdateClientResponse.decode(new _m0.Reader(data)));
  }

  upgradeClient(request: MsgUpgradeClient): Promise<MsgUpgradeClientResponseSDKType> {
    const data = MsgUpgradeClient.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpgradeClient", data);
    return promise.then(data => MsgUpgradeClientResponse.decode(new _m0.Reader(data)));
  }

  submitMisbehaviour(request: MsgSubmitMisbehaviour): Promise<MsgSubmitMisbehaviourResponseSDKType> {
    const data = MsgSubmitMisbehaviour.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "SubmitMisbehaviour", data);
    return promise.then(data => MsgSubmitMisbehaviourResponse.decode(new _m0.Reader(data)));
  }

}