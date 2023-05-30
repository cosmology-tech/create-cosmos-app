import { Counterparty, CounterpartySDKType, Version, VersionSDKType } from "./connection";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightSDKType } from "../../client/v1/client";
import * as fm from "../../../../grpc-gateway";
import { MsgConnectionOpenInit, MsgConnectionOpenInitSDKType, MsgConnectionOpenInitResponse, MsgConnectionOpenInitResponseSDKType, MsgConnectionOpenTry, MsgConnectionOpenTrySDKType, MsgConnectionOpenTryResponse, MsgConnectionOpenTryResponseSDKType, MsgConnectionOpenAck, MsgConnectionOpenAckSDKType, MsgConnectionOpenAckResponse, MsgConnectionOpenAckResponseSDKType, MsgConnectionOpenConfirm, MsgConnectionOpenConfirmSDKType, MsgConnectionOpenConfirmResponse, MsgConnectionOpenConfirmResponseSDKType } from "./tx";
export class Msg {
  /** ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. */
  static connectionOpenInit(request: MsgConnectionOpenInit, initRequest?: fm.InitReq): Promise<MsgConnectionOpenInitResponse> {
    return fm.fetchReq(`/ibc.core.connection.v1/connectionOpenInit`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. */
  static connectionOpenTry(request: MsgConnectionOpenTry, initRequest?: fm.InitReq): Promise<MsgConnectionOpenTryResponse> {
    return fm.fetchReq(`/ibc.core.connection.v1/connectionOpenTry`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. */
  static connectionOpenAck(request: MsgConnectionOpenAck, initRequest?: fm.InitReq): Promise<MsgConnectionOpenAckResponse> {
    return fm.fetchReq(`/ibc.core.connection.v1/connectionOpenAck`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /**
   * ConnectionOpenConfirm defines a rpc handler method for
   * MsgConnectionOpenConfirm.
   */
  static connectionOpenConfirm(request: MsgConnectionOpenConfirm, initRequest?: fm.InitReq): Promise<MsgConnectionOpenConfirmResponse> {
    return fm.fetchReq(`/ibc.core.connection.v1/connectionOpenConfirm`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}