import { Counterparty, CounterpartySDKType, Version, VersionSDKType } from "./connection";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightSDKType } from "../../client/v1/client";
import { MsgConnectionOpenInit, MsgConnectionOpenInitSDKType, MsgConnectionOpenTry, MsgConnectionOpenTrySDKType, MsgConnectionOpenAck, MsgConnectionOpenAckSDKType, MsgConnectionOpenConfirm, MsgConnectionOpenConfirmSDKType } from "./tx";
export const AminoConverter = {
  "/ibc.core.connection.v1.MsgConnectionOpenInit": {
    aminoType: "cosmos-sdk/MsgConnectionOpenInit",
    toAmino: MsgConnectionOpenInit.toAmino,
    fromAmino: MsgConnectionOpenInit.fromAmino
  },
  "/ibc.core.connection.v1.MsgConnectionOpenTry": {
    aminoType: "cosmos-sdk/MsgConnectionOpenTry",
    toAmino: MsgConnectionOpenTry.toAmino,
    fromAmino: MsgConnectionOpenTry.fromAmino
  },
  "/ibc.core.connection.v1.MsgConnectionOpenAck": {
    aminoType: "cosmos-sdk/MsgConnectionOpenAck",
    toAmino: MsgConnectionOpenAck.toAmino,
    fromAmino: MsgConnectionOpenAck.fromAmino
  },
  "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
    aminoType: "cosmos-sdk/MsgConnectionOpenConfirm",
    toAmino: MsgConnectionOpenConfirm.toAmino,
    fromAmino: MsgConnectionOpenConfirm.fromAmino
  }
};