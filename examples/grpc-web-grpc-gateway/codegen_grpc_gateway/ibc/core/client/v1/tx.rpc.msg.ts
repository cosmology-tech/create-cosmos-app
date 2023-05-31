import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import * as fm from "../../../../grpc-gateway";
import { MsgCreateClient, MsgCreateClientSDKType, MsgCreateClientResponse, MsgCreateClientResponseSDKType, MsgUpdateClient, MsgUpdateClientSDKType, MsgUpdateClientResponse, MsgUpdateClientResponseSDKType, MsgUpgradeClient, MsgUpgradeClientSDKType, MsgUpgradeClientResponse, MsgUpgradeClientResponseSDKType, MsgSubmitMisbehaviour, MsgSubmitMisbehaviourSDKType, MsgSubmitMisbehaviourResponse, MsgSubmitMisbehaviourResponseSDKType } from "./tx";
export class Msg {
  /** CreateClient defines a rpc handler method for MsgCreateClient. */
  static createClient(request: MsgCreateClient, initRequest?: fm.InitReq): Promise<MsgCreateClientResponse> {
    return fm.fetchReq(`/ibc.core.client.v1/createClient`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** UpdateClient defines a rpc handler method for MsgUpdateClient. */
  static updateClient(request: MsgUpdateClient, initRequest?: fm.InitReq): Promise<MsgUpdateClientResponse> {
    return fm.fetchReq(`/ibc.core.client.v1/updateClient`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** UpgradeClient defines a rpc handler method for MsgUpgradeClient. */
  static upgradeClient(request: MsgUpgradeClient, initRequest?: fm.InitReq): Promise<MsgUpgradeClientResponse> {
    return fm.fetchReq(`/ibc.core.client.v1/upgradeClient`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour. */
  static submitMisbehaviour(request: MsgSubmitMisbehaviour, initRequest?: fm.InitReq): Promise<MsgSubmitMisbehaviourResponse> {
    return fm.fetchReq(`/ibc.core.client.v1/submitMisbehaviour`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}