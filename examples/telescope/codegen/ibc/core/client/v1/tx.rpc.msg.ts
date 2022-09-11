import { Any } from "../../../../google/protobuf/any";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateClient, MsgCreateClientResponse, MsgUpdateClient, MsgUpdateClientResponse, MsgUpgradeClient, MsgUpgradeClientResponse, MsgSubmitMisbehaviour, MsgSubmitMisbehaviourResponse } from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  createClient(request: MsgCreateClient): Promise<MsgCreateClientResponse>;
  /*CreateClient defines a rpc handler method for MsgCreateClient.*/

  updateClient(request: MsgUpdateClient): Promise<MsgUpdateClientResponse>;
  /*UpdateClient defines a rpc handler method for MsgUpdateClient.*/

  upgradeClient(request: MsgUpgradeClient): Promise<MsgUpgradeClientResponse>;
  /*UpgradeClient defines a rpc handler method for MsgUpgradeClient.*/

  submitMisbehaviour(request: MsgSubmitMisbehaviour): Promise<MsgSubmitMisbehaviourResponse>;
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

  createClient(request: MsgCreateClient): Promise<MsgCreateClientResponse> {
    const data = MsgCreateClient.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "CreateClient", data);
    return promise.then(data => MsgCreateClientResponse.decode(new _m0.Reader(data)));
  }

  updateClient(request: MsgUpdateClient): Promise<MsgUpdateClientResponse> {
    const data = MsgUpdateClient.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpdateClient", data);
    return promise.then(data => MsgUpdateClientResponse.decode(new _m0.Reader(data)));
  }

  upgradeClient(request: MsgUpgradeClient): Promise<MsgUpgradeClientResponse> {
    const data = MsgUpgradeClient.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpgradeClient", data);
    return promise.then(data => MsgUpgradeClientResponse.decode(new _m0.Reader(data)));
  }

  submitMisbehaviour(request: MsgSubmitMisbehaviour): Promise<MsgSubmitMisbehaviourResponse> {
    const data = MsgSubmitMisbehaviour.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Msg", "SubmitMisbehaviour", data);
    return promise.then(data => MsgSubmitMisbehaviourResponse.decode(new _m0.Reader(data)));
  }

}