import { Channel, ChannelAmino, ChannelSDKType, Packet, PacketAmino, PacketSDKType } from "./channel";
import { Height, HeightAmino, HeightSDKType } from "../../client/v1/client";
import { Long, isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "ibc.core.channel.v1";
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInit {
  portId: string;
  channel?: Channel;
  signer: string;
}
export interface MsgChannelOpenInitProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit";
  value: Uint8Array;
}
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInitAmino {
  port_id: string;
  channel?: ChannelAmino;
  signer: string;
}
export interface MsgChannelOpenInitAminoMsg {
  type: "cosmos-sdk/MsgChannelOpenInit";
  value: MsgChannelOpenInitAmino;
}
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInitSDKType {
  port_id: string;
  channel?: ChannelSDKType;
  signer: string;
}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponse {}
export interface MsgChannelOpenInitResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse";
  value: Uint8Array;
}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponseAmino {}
export interface MsgChannelOpenInitResponseAminoMsg {
  type: "cosmos-sdk/MsgChannelOpenInitResponse";
  value: MsgChannelOpenInitResponseAmino;
}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponseSDKType {}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B.
 */
export interface MsgChannelOpenTry {
  portId: string;
  /**
   * in the case of crossing hello's, when both chains call OpenInit, we need
   * the channel identifier of the previous channel in state INIT
   */
  previousChannelId: string;
  channel?: Channel;
  counterpartyVersion: string;
  proofInit: Uint8Array;
  proofHeight?: Height;
  signer: string;
}
export interface MsgChannelOpenTryProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry";
  value: Uint8Array;
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B.
 */
export interface MsgChannelOpenTryAmino {
  port_id: string;
  /**
   * in the case of crossing hello's, when both chains call OpenInit, we need
   * the channel identifier of the previous channel in state INIT
   */
  previous_channel_id: string;
  channel?: ChannelAmino;
  counterparty_version: string;
  proof_init: Uint8Array;
  proof_height?: HeightAmino;
  signer: string;
}
export interface MsgChannelOpenTryAminoMsg {
  type: "cosmos-sdk/MsgChannelOpenTry";
  value: MsgChannelOpenTryAmino;
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B.
 */
export interface MsgChannelOpenTrySDKType {
  port_id: string;
  previous_channel_id: string;
  channel?: ChannelSDKType;
  counterparty_version: string;
  proof_init: Uint8Array;
  proof_height?: HeightSDKType;
  signer: string;
}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponse {}
export interface MsgChannelOpenTryResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse";
  value: Uint8Array;
}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponseAmino {}
export interface MsgChannelOpenTryResponseAminoMsg {
  type: "cosmos-sdk/MsgChannelOpenTryResponse";
  value: MsgChannelOpenTryResponseAmino;
}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponseSDKType {}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 */
export interface MsgChannelOpenAck {
  portId: string;
  channelId: string;
  counterpartyChannelId: string;
  counterpartyVersion: string;
  proofTry: Uint8Array;
  proofHeight?: Height;
  signer: string;
}
export interface MsgChannelOpenAckProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck";
  value: Uint8Array;
}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 */
export interface MsgChannelOpenAckAmino {
  port_id: string;
  channel_id: string;
  counterparty_channel_id: string;
  counterparty_version: string;
  proof_try: Uint8Array;
  proof_height?: HeightAmino;
  signer: string;
}
export interface MsgChannelOpenAckAminoMsg {
  type: "cosmos-sdk/MsgChannelOpenAck";
  value: MsgChannelOpenAckAmino;
}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 */
export interface MsgChannelOpenAckSDKType {
  port_id: string;
  channel_id: string;
  counterparty_channel_id: string;
  counterparty_version: string;
  proof_try: Uint8Array;
  proof_height?: HeightSDKType;
  signer: string;
}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponse {}
export interface MsgChannelOpenAckResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse";
  value: Uint8Array;
}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponseAmino {}
export interface MsgChannelOpenAckResponseAminoMsg {
  type: "cosmos-sdk/MsgChannelOpenAckResponse";
  value: MsgChannelOpenAckResponseAmino;
}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponseSDKType {}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirm {
  portId: string;
  channelId: string;
  proofAck: Uint8Array;
  proofHeight?: Height;
  signer: string;
}
export interface MsgChannelOpenConfirmProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm";
  value: Uint8Array;
}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirmAmino {
  port_id: string;
  channel_id: string;
  proof_ack: Uint8Array;
  proof_height?: HeightAmino;
  signer: string;
}
export interface MsgChannelOpenConfirmAminoMsg {
  type: "cosmos-sdk/MsgChannelOpenConfirm";
  value: MsgChannelOpenConfirmAmino;
}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirmSDKType {
  port_id: string;
  channel_id: string;
  proof_ack: Uint8Array;
  proof_height?: HeightSDKType;
  signer: string;
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponse {}
export interface MsgChannelOpenConfirmResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse";
  value: Uint8Array;
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponseAmino {}
export interface MsgChannelOpenConfirmResponseAminoMsg {
  type: "cosmos-sdk/MsgChannelOpenConfirmResponse";
  value: MsgChannelOpenConfirmResponseAmino;
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponseSDKType {}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export interface MsgChannelCloseInit {
  portId: string;
  channelId: string;
  signer: string;
}
export interface MsgChannelCloseInitProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit";
  value: Uint8Array;
}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export interface MsgChannelCloseInitAmino {
  port_id: string;
  channel_id: string;
  signer: string;
}
export interface MsgChannelCloseInitAminoMsg {
  type: "cosmos-sdk/MsgChannelCloseInit";
  value: MsgChannelCloseInitAmino;
}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export interface MsgChannelCloseInitSDKType {
  port_id: string;
  channel_id: string;
  signer: string;
}
/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponse {}
export interface MsgChannelCloseInitResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse";
  value: Uint8Array;
}
/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponseAmino {}
export interface MsgChannelCloseInitResponseAminoMsg {
  type: "cosmos-sdk/MsgChannelCloseInitResponse";
  value: MsgChannelCloseInitResponseAmino;
}
/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponseSDKType {}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirm {
  portId: string;
  channelId: string;
  proofInit: Uint8Array;
  proofHeight?: Height;
  signer: string;
}
export interface MsgChannelCloseConfirmProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm";
  value: Uint8Array;
}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirmAmino {
  port_id: string;
  channel_id: string;
  proof_init: Uint8Array;
  proof_height?: HeightAmino;
  signer: string;
}
export interface MsgChannelCloseConfirmAminoMsg {
  type: "cosmos-sdk/MsgChannelCloseConfirm";
  value: MsgChannelCloseConfirmAmino;
}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirmSDKType {
  port_id: string;
  channel_id: string;
  proof_init: Uint8Array;
  proof_height?: HeightSDKType;
  signer: string;
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponse {}
export interface MsgChannelCloseConfirmResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse";
  value: Uint8Array;
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponseAmino {}
export interface MsgChannelCloseConfirmResponseAminoMsg {
  type: "cosmos-sdk/MsgChannelCloseConfirmResponse";
  value: MsgChannelCloseConfirmResponseAmino;
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponseSDKType {}
/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacket {
  packet?: Packet;
  proofCommitment: Uint8Array;
  proofHeight?: Height;
  signer: string;
}
export interface MsgRecvPacketProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgRecvPacket";
  value: Uint8Array;
}
/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacketAmino {
  packet?: PacketAmino;
  proof_commitment: Uint8Array;
  proof_height?: HeightAmino;
  signer: string;
}
export interface MsgRecvPacketAminoMsg {
  type: "cosmos-sdk/MsgRecvPacket";
  value: MsgRecvPacketAmino;
}
/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacketSDKType {
  packet?: PacketSDKType;
  proof_commitment: Uint8Array;
  proof_height?: HeightSDKType;
  signer: string;
}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponse {}
export interface MsgRecvPacketResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse";
  value: Uint8Array;
}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponseAmino {}
export interface MsgRecvPacketResponseAminoMsg {
  type: "cosmos-sdk/MsgRecvPacketResponse";
  value: MsgRecvPacketResponseAmino;
}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponseSDKType {}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeout {
  packet?: Packet;
  proofUnreceived: Uint8Array;
  proofHeight?: Height;
  nextSequenceRecv: Long;
  signer: string;
}
export interface MsgTimeoutProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgTimeout";
  value: Uint8Array;
}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeoutAmino {
  packet?: PacketAmino;
  proof_unreceived: Uint8Array;
  proof_height?: HeightAmino;
  next_sequence_recv: string;
  signer: string;
}
export interface MsgTimeoutAminoMsg {
  type: "cosmos-sdk/MsgTimeout";
  value: MsgTimeoutAmino;
}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeoutSDKType {
  packet?: PacketSDKType;
  proof_unreceived: Uint8Array;
  proof_height?: HeightSDKType;
  next_sequence_recv: Long;
  signer: string;
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponse {}
export interface MsgTimeoutResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse";
  value: Uint8Array;
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponseAmino {}
export interface MsgTimeoutResponseAminoMsg {
  type: "cosmos-sdk/MsgTimeoutResponse";
  value: MsgTimeoutResponseAmino;
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponseSDKType {}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnClose {
  packet?: Packet;
  proofUnreceived: Uint8Array;
  proofClose: Uint8Array;
  proofHeight?: Height;
  nextSequenceRecv: Long;
  signer: string;
}
export interface MsgTimeoutOnCloseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose";
  value: Uint8Array;
}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnCloseAmino {
  packet?: PacketAmino;
  proof_unreceived: Uint8Array;
  proof_close: Uint8Array;
  proof_height?: HeightAmino;
  next_sequence_recv: string;
  signer: string;
}
export interface MsgTimeoutOnCloseAminoMsg {
  type: "cosmos-sdk/MsgTimeoutOnClose";
  value: MsgTimeoutOnCloseAmino;
}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnCloseSDKType {
  packet?: PacketSDKType;
  proof_unreceived: Uint8Array;
  proof_close: Uint8Array;
  proof_height?: HeightSDKType;
  next_sequence_recv: Long;
  signer: string;
}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponse {}
export interface MsgTimeoutOnCloseResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse";
  value: Uint8Array;
}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponseAmino {}
export interface MsgTimeoutOnCloseResponseAminoMsg {
  type: "cosmos-sdk/MsgTimeoutOnCloseResponse";
  value: MsgTimeoutOnCloseResponseAmino;
}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponseSDKType {}
/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgement {
  packet?: Packet;
  acknowledgement: Uint8Array;
  proofAcked: Uint8Array;
  proofHeight?: Height;
  signer: string;
}
export interface MsgAcknowledgementProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement";
  value: Uint8Array;
}
/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgementAmino {
  packet?: PacketAmino;
  acknowledgement: Uint8Array;
  proof_acked: Uint8Array;
  proof_height?: HeightAmino;
  signer: string;
}
export interface MsgAcknowledgementAminoMsg {
  type: "cosmos-sdk/MsgAcknowledgement";
  value: MsgAcknowledgementAmino;
}
/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgementSDKType {
  packet?: PacketSDKType;
  acknowledgement: Uint8Array;
  proof_acked: Uint8Array;
  proof_height?: HeightSDKType;
  signer: string;
}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponse {}
export interface MsgAcknowledgementResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse";
  value: Uint8Array;
}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponseAmino {}
export interface MsgAcknowledgementResponseAminoMsg {
  type: "cosmos-sdk/MsgAcknowledgementResponse";
  value: MsgAcknowledgementResponseAmino;
}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponseSDKType {}
function createBaseMsgChannelOpenInit(): MsgChannelOpenInit {
  return {
    portId: "",
    channel: undefined,
    signer: ""
  };
}
export const MsgChannelOpenInit = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
  aminoType: "cosmos-sdk/MsgChannelOpenInit",
  encode(message: MsgChannelOpenInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenInit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channel = Channel.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelOpenInit {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channel: isSet(object.channel) ? Channel.fromJSON(object.channel) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgChannelOpenInit): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channel !== undefined && (obj.channel = message.channel ? Channel.toJSON(message.channel) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgChannelOpenInit>): MsgChannelOpenInit {
    const message = createBaseMsgChannelOpenInit();
    message.portId = object.portId ?? "";
    message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgChannelOpenInitSDKType): MsgChannelOpenInit {
    return {
      portId: object?.port_id,
      channel: object.channel ? Channel.fromSDK(object.channel) : undefined,
      signer: object?.signer
    };
  },
  toSDK(message: MsgChannelOpenInit): MsgChannelOpenInitSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    message.channel !== undefined && (obj.channel = message.channel ? Channel.toSDK(message.channel) : undefined);
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgChannelOpenInitAmino): MsgChannelOpenInit {
    return {
      portId: object.port_id,
      channel: object?.channel ? Channel.fromAmino(object.channel) : undefined,
      signer: object.signer
    };
  },
  toAmino(message: MsgChannelOpenInit): MsgChannelOpenInitAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel = message.channel ? Channel.toAmino(message.channel) : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelOpenInitAminoMsg): MsgChannelOpenInit {
    return MsgChannelOpenInit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelOpenInit): MsgChannelOpenInitAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelOpenInit",
      value: MsgChannelOpenInit.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelOpenInitProtoMsg): MsgChannelOpenInit {
    return MsgChannelOpenInit.decode(message.value);
  },
  toProto(message: MsgChannelOpenInit): Uint8Array {
    return MsgChannelOpenInit.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelOpenInit): MsgChannelOpenInitProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
      value: MsgChannelOpenInit.encode(message).finish()
    };
  }
};
function createBaseMsgChannelOpenInitResponse(): MsgChannelOpenInitResponse {
  return {};
}
export const MsgChannelOpenInitResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse",
  aminoType: "cosmos-sdk/MsgChannelOpenInitResponse",
  encode(_: MsgChannelOpenInitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenInitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenInitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgChannelOpenInitResponse {
    return {};
  },
  toJSON(_: MsgChannelOpenInitResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgChannelOpenInitResponse>): MsgChannelOpenInitResponse {
    const message = createBaseMsgChannelOpenInitResponse();
    return message;
  },
  fromSDK(_: MsgChannelOpenInitResponseSDKType): MsgChannelOpenInitResponse {
    return {};
  },
  toSDK(_: MsgChannelOpenInitResponse): MsgChannelOpenInitResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgChannelOpenInitResponseAmino): MsgChannelOpenInitResponse {
    return {};
  },
  toAmino(_: MsgChannelOpenInitResponse): MsgChannelOpenInitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChannelOpenInitResponseAminoMsg): MsgChannelOpenInitResponse {
    return MsgChannelOpenInitResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelOpenInitResponse): MsgChannelOpenInitResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelOpenInitResponse",
      value: MsgChannelOpenInitResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelOpenInitResponseProtoMsg): MsgChannelOpenInitResponse {
    return MsgChannelOpenInitResponse.decode(message.value);
  },
  toProto(message: MsgChannelOpenInitResponse): Uint8Array {
    return MsgChannelOpenInitResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelOpenInitResponse): MsgChannelOpenInitResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse",
      value: MsgChannelOpenInitResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChannelOpenTry(): MsgChannelOpenTry {
  return {
    portId: "",
    previousChannelId: "",
    channel: undefined,
    counterpartyVersion: "",
    proofInit: new Uint8Array(),
    proofHeight: undefined,
    signer: ""
  };
}
export const MsgChannelOpenTry = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
  aminoType: "cosmos-sdk/MsgChannelOpenTry",
  encode(message: MsgChannelOpenTry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.previousChannelId !== "") {
      writer.uint32(18).string(message.previousChannelId);
    }
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(26).fork()).ldelim();
    }
    if (message.counterpartyVersion !== "") {
      writer.uint32(34).string(message.counterpartyVersion);
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(42).bytes(message.proofInit);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenTry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenTry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.previousChannelId = reader.string();
          break;
        case 3:
          message.channel = Channel.decode(reader, reader.uint32());
          break;
        case 4:
          message.counterpartyVersion = reader.string();
          break;
        case 5:
          message.proofInit = reader.bytes();
          break;
        case 6:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelOpenTry {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      previousChannelId: isSet(object.previousChannelId) ? String(object.previousChannelId) : "",
      channel: isSet(object.channel) ? Channel.fromJSON(object.channel) : undefined,
      counterpartyVersion: isSet(object.counterpartyVersion) ? String(object.counterpartyVersion) : "",
      proofInit: isSet(object.proofInit) ? bytesFromBase64(object.proofInit) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgChannelOpenTry): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.previousChannelId !== undefined && (obj.previousChannelId = message.previousChannelId);
    message.channel !== undefined && (obj.channel = message.channel ? Channel.toJSON(message.channel) : undefined);
    message.counterpartyVersion !== undefined && (obj.counterpartyVersion = message.counterpartyVersion);
    message.proofInit !== undefined && (obj.proofInit = base64FromBytes(message.proofInit !== undefined ? message.proofInit : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgChannelOpenTry>): MsgChannelOpenTry {
    const message = createBaseMsgChannelOpenTry();
    message.portId = object.portId ?? "";
    message.previousChannelId = object.previousChannelId ?? "";
    message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : undefined;
    message.counterpartyVersion = object.counterpartyVersion ?? "";
    message.proofInit = object.proofInit ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgChannelOpenTrySDKType): MsgChannelOpenTry {
    return {
      portId: object?.port_id,
      previousChannelId: object?.previous_channel_id,
      channel: object.channel ? Channel.fromSDK(object.channel) : undefined,
      counterpartyVersion: object?.counterparty_version,
      proofInit: object?.proof_init,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined,
      signer: object?.signer
    };
  },
  toSDK(message: MsgChannelOpenTry): MsgChannelOpenTrySDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.previous_channel_id = message.previousChannelId;
    message.channel !== undefined && (obj.channel = message.channel ? Channel.toSDK(message.channel) : undefined);
    obj.counterparty_version = message.counterpartyVersion;
    obj.proof_init = message.proofInit;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgChannelOpenTryAmino): MsgChannelOpenTry {
    return {
      portId: object.port_id,
      previousChannelId: object.previous_channel_id,
      channel: object?.channel ? Channel.fromAmino(object.channel) : undefined,
      counterpartyVersion: object.counterparty_version,
      proofInit: object.proof_init,
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined,
      signer: object.signer
    };
  },
  toAmino(message: MsgChannelOpenTry): MsgChannelOpenTryAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.previous_channel_id = message.previousChannelId;
    obj.channel = message.channel ? Channel.toAmino(message.channel) : undefined;
    obj.counterparty_version = message.counterpartyVersion;
    obj.proof_init = message.proofInit;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelOpenTryAminoMsg): MsgChannelOpenTry {
    return MsgChannelOpenTry.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelOpenTry): MsgChannelOpenTryAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelOpenTry",
      value: MsgChannelOpenTry.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelOpenTryProtoMsg): MsgChannelOpenTry {
    return MsgChannelOpenTry.decode(message.value);
  },
  toProto(message: MsgChannelOpenTry): Uint8Array {
    return MsgChannelOpenTry.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelOpenTry): MsgChannelOpenTryProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
      value: MsgChannelOpenTry.encode(message).finish()
    };
  }
};
function createBaseMsgChannelOpenTryResponse(): MsgChannelOpenTryResponse {
  return {};
}
export const MsgChannelOpenTryResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse",
  aminoType: "cosmos-sdk/MsgChannelOpenTryResponse",
  encode(_: MsgChannelOpenTryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenTryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenTryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgChannelOpenTryResponse {
    return {};
  },
  toJSON(_: MsgChannelOpenTryResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgChannelOpenTryResponse>): MsgChannelOpenTryResponse {
    const message = createBaseMsgChannelOpenTryResponse();
    return message;
  },
  fromSDK(_: MsgChannelOpenTryResponseSDKType): MsgChannelOpenTryResponse {
    return {};
  },
  toSDK(_: MsgChannelOpenTryResponse): MsgChannelOpenTryResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgChannelOpenTryResponseAmino): MsgChannelOpenTryResponse {
    return {};
  },
  toAmino(_: MsgChannelOpenTryResponse): MsgChannelOpenTryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChannelOpenTryResponseAminoMsg): MsgChannelOpenTryResponse {
    return MsgChannelOpenTryResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelOpenTryResponse): MsgChannelOpenTryResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelOpenTryResponse",
      value: MsgChannelOpenTryResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelOpenTryResponseProtoMsg): MsgChannelOpenTryResponse {
    return MsgChannelOpenTryResponse.decode(message.value);
  },
  toProto(message: MsgChannelOpenTryResponse): Uint8Array {
    return MsgChannelOpenTryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelOpenTryResponse): MsgChannelOpenTryResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse",
      value: MsgChannelOpenTryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChannelOpenAck(): MsgChannelOpenAck {
  return {
    portId: "",
    channelId: "",
    counterpartyChannelId: "",
    counterpartyVersion: "",
    proofTry: new Uint8Array(),
    proofHeight: undefined,
    signer: ""
  };
}
export const MsgChannelOpenAck = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
  aminoType: "cosmos-sdk/MsgChannelOpenAck",
  encode(message: MsgChannelOpenAck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.counterpartyChannelId !== "") {
      writer.uint32(26).string(message.counterpartyChannelId);
    }
    if (message.counterpartyVersion !== "") {
      writer.uint32(34).string(message.counterpartyVersion);
    }
    if (message.proofTry.length !== 0) {
      writer.uint32(42).bytes(message.proofTry);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(58).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenAck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.counterpartyChannelId = reader.string();
          break;
        case 4:
          message.counterpartyVersion = reader.string();
          break;
        case 5:
          message.proofTry = reader.bytes();
          break;
        case 6:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelOpenAck {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      counterpartyChannelId: isSet(object.counterpartyChannelId) ? String(object.counterpartyChannelId) : "",
      counterpartyVersion: isSet(object.counterpartyVersion) ? String(object.counterpartyVersion) : "",
      proofTry: isSet(object.proofTry) ? bytesFromBase64(object.proofTry) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgChannelOpenAck): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.counterpartyChannelId !== undefined && (obj.counterpartyChannelId = message.counterpartyChannelId);
    message.counterpartyVersion !== undefined && (obj.counterpartyVersion = message.counterpartyVersion);
    message.proofTry !== undefined && (obj.proofTry = base64FromBytes(message.proofTry !== undefined ? message.proofTry : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgChannelOpenAck>): MsgChannelOpenAck {
    const message = createBaseMsgChannelOpenAck();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.counterpartyChannelId = object.counterpartyChannelId ?? "";
    message.counterpartyVersion = object.counterpartyVersion ?? "";
    message.proofTry = object.proofTry ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgChannelOpenAckSDKType): MsgChannelOpenAck {
    return {
      portId: object?.port_id,
      channelId: object?.channel_id,
      counterpartyChannelId: object?.counterparty_channel_id,
      counterpartyVersion: object?.counterparty_version,
      proofTry: object?.proof_try,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined,
      signer: object?.signer
    };
  },
  toSDK(message: MsgChannelOpenAck): MsgChannelOpenAckSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.counterparty_channel_id = message.counterpartyChannelId;
    obj.counterparty_version = message.counterpartyVersion;
    obj.proof_try = message.proofTry;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgChannelOpenAckAmino): MsgChannelOpenAck {
    return {
      portId: object.port_id,
      channelId: object.channel_id,
      counterpartyChannelId: object.counterparty_channel_id,
      counterpartyVersion: object.counterparty_version,
      proofTry: object.proof_try,
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined,
      signer: object.signer
    };
  },
  toAmino(message: MsgChannelOpenAck): MsgChannelOpenAckAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.counterparty_channel_id = message.counterpartyChannelId;
    obj.counterparty_version = message.counterpartyVersion;
    obj.proof_try = message.proofTry;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelOpenAckAminoMsg): MsgChannelOpenAck {
    return MsgChannelOpenAck.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelOpenAck): MsgChannelOpenAckAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelOpenAck",
      value: MsgChannelOpenAck.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelOpenAckProtoMsg): MsgChannelOpenAck {
    return MsgChannelOpenAck.decode(message.value);
  },
  toProto(message: MsgChannelOpenAck): Uint8Array {
    return MsgChannelOpenAck.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelOpenAck): MsgChannelOpenAckProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
      value: MsgChannelOpenAck.encode(message).finish()
    };
  }
};
function createBaseMsgChannelOpenAckResponse(): MsgChannelOpenAckResponse {
  return {};
}
export const MsgChannelOpenAckResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse",
  aminoType: "cosmos-sdk/MsgChannelOpenAckResponse",
  encode(_: MsgChannelOpenAckResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenAckResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenAckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgChannelOpenAckResponse {
    return {};
  },
  toJSON(_: MsgChannelOpenAckResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgChannelOpenAckResponse>): MsgChannelOpenAckResponse {
    const message = createBaseMsgChannelOpenAckResponse();
    return message;
  },
  fromSDK(_: MsgChannelOpenAckResponseSDKType): MsgChannelOpenAckResponse {
    return {};
  },
  toSDK(_: MsgChannelOpenAckResponse): MsgChannelOpenAckResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgChannelOpenAckResponseAmino): MsgChannelOpenAckResponse {
    return {};
  },
  toAmino(_: MsgChannelOpenAckResponse): MsgChannelOpenAckResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChannelOpenAckResponseAminoMsg): MsgChannelOpenAckResponse {
    return MsgChannelOpenAckResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelOpenAckResponse): MsgChannelOpenAckResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelOpenAckResponse",
      value: MsgChannelOpenAckResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelOpenAckResponseProtoMsg): MsgChannelOpenAckResponse {
    return MsgChannelOpenAckResponse.decode(message.value);
  },
  toProto(message: MsgChannelOpenAckResponse): Uint8Array {
    return MsgChannelOpenAckResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelOpenAckResponse): MsgChannelOpenAckResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse",
      value: MsgChannelOpenAckResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChannelOpenConfirm(): MsgChannelOpenConfirm {
  return {
    portId: "",
    channelId: "",
    proofAck: new Uint8Array(),
    proofHeight: undefined,
    signer: ""
  };
}
export const MsgChannelOpenConfirm = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
  aminoType: "cosmos-sdk/MsgChannelOpenConfirm",
  encode(message: MsgChannelOpenConfirm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.proofAck.length !== 0) {
      writer.uint32(26).bytes(message.proofAck);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenConfirm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.proofAck = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelOpenConfirm {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      proofAck: isSet(object.proofAck) ? bytesFromBase64(object.proofAck) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgChannelOpenConfirm): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.proofAck !== undefined && (obj.proofAck = base64FromBytes(message.proofAck !== undefined ? message.proofAck : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgChannelOpenConfirm>): MsgChannelOpenConfirm {
    const message = createBaseMsgChannelOpenConfirm();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.proofAck = object.proofAck ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgChannelOpenConfirmSDKType): MsgChannelOpenConfirm {
    return {
      portId: object?.port_id,
      channelId: object?.channel_id,
      proofAck: object?.proof_ack,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined,
      signer: object?.signer
    };
  },
  toSDK(message: MsgChannelOpenConfirm): MsgChannelOpenConfirmSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.proof_ack = message.proofAck;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgChannelOpenConfirmAmino): MsgChannelOpenConfirm {
    return {
      portId: object.port_id,
      channelId: object.channel_id,
      proofAck: object.proof_ack,
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined,
      signer: object.signer
    };
  },
  toAmino(message: MsgChannelOpenConfirm): MsgChannelOpenConfirmAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.proof_ack = message.proofAck;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelOpenConfirmAminoMsg): MsgChannelOpenConfirm {
    return MsgChannelOpenConfirm.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelOpenConfirm): MsgChannelOpenConfirmAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelOpenConfirm",
      value: MsgChannelOpenConfirm.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelOpenConfirmProtoMsg): MsgChannelOpenConfirm {
    return MsgChannelOpenConfirm.decode(message.value);
  },
  toProto(message: MsgChannelOpenConfirm): Uint8Array {
    return MsgChannelOpenConfirm.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelOpenConfirm): MsgChannelOpenConfirmProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
      value: MsgChannelOpenConfirm.encode(message).finish()
    };
  }
};
function createBaseMsgChannelOpenConfirmResponse(): MsgChannelOpenConfirmResponse {
  return {};
}
export const MsgChannelOpenConfirmResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse",
  aminoType: "cosmos-sdk/MsgChannelOpenConfirmResponse",
  encode(_: MsgChannelOpenConfirmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelOpenConfirmResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelOpenConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgChannelOpenConfirmResponse {
    return {};
  },
  toJSON(_: MsgChannelOpenConfirmResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgChannelOpenConfirmResponse>): MsgChannelOpenConfirmResponse {
    const message = createBaseMsgChannelOpenConfirmResponse();
    return message;
  },
  fromSDK(_: MsgChannelOpenConfirmResponseSDKType): MsgChannelOpenConfirmResponse {
    return {};
  },
  toSDK(_: MsgChannelOpenConfirmResponse): MsgChannelOpenConfirmResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgChannelOpenConfirmResponseAmino): MsgChannelOpenConfirmResponse {
    return {};
  },
  toAmino(_: MsgChannelOpenConfirmResponse): MsgChannelOpenConfirmResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChannelOpenConfirmResponseAminoMsg): MsgChannelOpenConfirmResponse {
    return MsgChannelOpenConfirmResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelOpenConfirmResponse): MsgChannelOpenConfirmResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelOpenConfirmResponse",
      value: MsgChannelOpenConfirmResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelOpenConfirmResponseProtoMsg): MsgChannelOpenConfirmResponse {
    return MsgChannelOpenConfirmResponse.decode(message.value);
  },
  toProto(message: MsgChannelOpenConfirmResponse): Uint8Array {
    return MsgChannelOpenConfirmResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelOpenConfirmResponse): MsgChannelOpenConfirmResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse",
      value: MsgChannelOpenConfirmResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChannelCloseInit(): MsgChannelCloseInit {
  return {
    portId: "",
    channelId: "",
    signer: ""
  };
}
export const MsgChannelCloseInit = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
  aminoType: "cosmos-sdk/MsgChannelCloseInit",
  encode(message: MsgChannelCloseInit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseInit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelCloseInit {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgChannelCloseInit): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgChannelCloseInit>): MsgChannelCloseInit {
    const message = createBaseMsgChannelCloseInit();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgChannelCloseInitSDKType): MsgChannelCloseInit {
    return {
      portId: object?.port_id,
      channelId: object?.channel_id,
      signer: object?.signer
    };
  },
  toSDK(message: MsgChannelCloseInit): MsgChannelCloseInitSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgChannelCloseInitAmino): MsgChannelCloseInit {
    return {
      portId: object.port_id,
      channelId: object.channel_id,
      signer: object.signer
    };
  },
  toAmino(message: MsgChannelCloseInit): MsgChannelCloseInitAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelCloseInitAminoMsg): MsgChannelCloseInit {
    return MsgChannelCloseInit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelCloseInit): MsgChannelCloseInitAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelCloseInit",
      value: MsgChannelCloseInit.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelCloseInitProtoMsg): MsgChannelCloseInit {
    return MsgChannelCloseInit.decode(message.value);
  },
  toProto(message: MsgChannelCloseInit): Uint8Array {
    return MsgChannelCloseInit.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelCloseInit): MsgChannelCloseInitProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
      value: MsgChannelCloseInit.encode(message).finish()
    };
  }
};
function createBaseMsgChannelCloseInitResponse(): MsgChannelCloseInitResponse {
  return {};
}
export const MsgChannelCloseInitResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse",
  aminoType: "cosmos-sdk/MsgChannelCloseInitResponse",
  encode(_: MsgChannelCloseInitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseInitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseInitResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgChannelCloseInitResponse {
    return {};
  },
  toJSON(_: MsgChannelCloseInitResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgChannelCloseInitResponse>): MsgChannelCloseInitResponse {
    const message = createBaseMsgChannelCloseInitResponse();
    return message;
  },
  fromSDK(_: MsgChannelCloseInitResponseSDKType): MsgChannelCloseInitResponse {
    return {};
  },
  toSDK(_: MsgChannelCloseInitResponse): MsgChannelCloseInitResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgChannelCloseInitResponseAmino): MsgChannelCloseInitResponse {
    return {};
  },
  toAmino(_: MsgChannelCloseInitResponse): MsgChannelCloseInitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChannelCloseInitResponseAminoMsg): MsgChannelCloseInitResponse {
    return MsgChannelCloseInitResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelCloseInitResponse): MsgChannelCloseInitResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelCloseInitResponse",
      value: MsgChannelCloseInitResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelCloseInitResponseProtoMsg): MsgChannelCloseInitResponse {
    return MsgChannelCloseInitResponse.decode(message.value);
  },
  toProto(message: MsgChannelCloseInitResponse): Uint8Array {
    return MsgChannelCloseInitResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelCloseInitResponse): MsgChannelCloseInitResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse",
      value: MsgChannelCloseInitResponse.encode(message).finish()
    };
  }
};
function createBaseMsgChannelCloseConfirm(): MsgChannelCloseConfirm {
  return {
    portId: "",
    channelId: "",
    proofInit: new Uint8Array(),
    proofHeight: undefined,
    signer: ""
  };
}
export const MsgChannelCloseConfirm = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
  aminoType: "cosmos-sdk/MsgChannelCloseConfirm",
  encode(message: MsgChannelCloseConfirm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(26).bytes(message.proofInit);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseConfirm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        case 3:
          message.proofInit = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgChannelCloseConfirm {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      proofInit: isSet(object.proofInit) ? bytesFromBase64(object.proofInit) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgChannelCloseConfirm): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.proofInit !== undefined && (obj.proofInit = base64FromBytes(message.proofInit !== undefined ? message.proofInit : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgChannelCloseConfirm>): MsgChannelCloseConfirm {
    const message = createBaseMsgChannelCloseConfirm();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    message.proofInit = object.proofInit ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgChannelCloseConfirmSDKType): MsgChannelCloseConfirm {
    return {
      portId: object?.port_id,
      channelId: object?.channel_id,
      proofInit: object?.proof_init,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined,
      signer: object?.signer
    };
  },
  toSDK(message: MsgChannelCloseConfirm): MsgChannelCloseConfirmSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.proof_init = message.proofInit;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgChannelCloseConfirmAmino): MsgChannelCloseConfirm {
    return {
      portId: object.port_id,
      channelId: object.channel_id,
      proofInit: object.proof_init,
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined,
      signer: object.signer
    };
  },
  toAmino(message: MsgChannelCloseConfirm): MsgChannelCloseConfirmAmino {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    obj.proof_init = message.proofInit;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgChannelCloseConfirmAminoMsg): MsgChannelCloseConfirm {
    return MsgChannelCloseConfirm.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelCloseConfirm): MsgChannelCloseConfirmAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelCloseConfirm",
      value: MsgChannelCloseConfirm.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelCloseConfirmProtoMsg): MsgChannelCloseConfirm {
    return MsgChannelCloseConfirm.decode(message.value);
  },
  toProto(message: MsgChannelCloseConfirm): Uint8Array {
    return MsgChannelCloseConfirm.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelCloseConfirm): MsgChannelCloseConfirmProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
      value: MsgChannelCloseConfirm.encode(message).finish()
    };
  }
};
function createBaseMsgChannelCloseConfirmResponse(): MsgChannelCloseConfirmResponse {
  return {};
}
export const MsgChannelCloseConfirmResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse",
  aminoType: "cosmos-sdk/MsgChannelCloseConfirmResponse",
  encode(_: MsgChannelCloseConfirmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChannelCloseConfirmResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChannelCloseConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgChannelCloseConfirmResponse {
    return {};
  },
  toJSON(_: MsgChannelCloseConfirmResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgChannelCloseConfirmResponse>): MsgChannelCloseConfirmResponse {
    const message = createBaseMsgChannelCloseConfirmResponse();
    return message;
  },
  fromSDK(_: MsgChannelCloseConfirmResponseSDKType): MsgChannelCloseConfirmResponse {
    return {};
  },
  toSDK(_: MsgChannelCloseConfirmResponse): MsgChannelCloseConfirmResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgChannelCloseConfirmResponseAmino): MsgChannelCloseConfirmResponse {
    return {};
  },
  toAmino(_: MsgChannelCloseConfirmResponse): MsgChannelCloseConfirmResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgChannelCloseConfirmResponseAminoMsg): MsgChannelCloseConfirmResponse {
    return MsgChannelCloseConfirmResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgChannelCloseConfirmResponse): MsgChannelCloseConfirmResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgChannelCloseConfirmResponse",
      value: MsgChannelCloseConfirmResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgChannelCloseConfirmResponseProtoMsg): MsgChannelCloseConfirmResponse {
    return MsgChannelCloseConfirmResponse.decode(message.value);
  },
  toProto(message: MsgChannelCloseConfirmResponse): Uint8Array {
    return MsgChannelCloseConfirmResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgChannelCloseConfirmResponse): MsgChannelCloseConfirmResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse",
      value: MsgChannelCloseConfirmResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRecvPacket(): MsgRecvPacket {
  return {
    packet: undefined,
    proofCommitment: new Uint8Array(),
    proofHeight: undefined,
    signer: ""
  };
}
export const MsgRecvPacket = {
  typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
  aminoType: "cosmos-sdk/MsgRecvPacket",
  encode(message: MsgRecvPacket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofCommitment.length !== 0) {
      writer.uint32(18).bytes(message.proofCommitment);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecvPacket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecvPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofCommitment = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRecvPacket {
    return {
      packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
      proofCommitment: isSet(object.proofCommitment) ? bytesFromBase64(object.proofCommitment) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgRecvPacket): unknown {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.proofCommitment !== undefined && (obj.proofCommitment = base64FromBytes(message.proofCommitment !== undefined ? message.proofCommitment : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgRecvPacket>): MsgRecvPacket {
    const message = createBaseMsgRecvPacket();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
    message.proofCommitment = object.proofCommitment ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgRecvPacketSDKType): MsgRecvPacket {
    return {
      packet: object.packet ? Packet.fromSDK(object.packet) : undefined,
      proofCommitment: object?.proof_commitment,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined,
      signer: object?.signer
    };
  },
  toSDK(message: MsgRecvPacket): MsgRecvPacketSDKType {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toSDK(message.packet) : undefined);
    obj.proof_commitment = message.proofCommitment;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgRecvPacketAmino): MsgRecvPacket {
    return {
      packet: object?.packet ? Packet.fromAmino(object.packet) : undefined,
      proofCommitment: object.proof_commitment,
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined,
      signer: object.signer
    };
  },
  toAmino(message: MsgRecvPacket): MsgRecvPacketAmino {
    const obj: any = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
    obj.proof_commitment = message.proofCommitment;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgRecvPacketAminoMsg): MsgRecvPacket {
    return MsgRecvPacket.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRecvPacket): MsgRecvPacketAminoMsg {
    return {
      type: "cosmos-sdk/MsgRecvPacket",
      value: MsgRecvPacket.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRecvPacketProtoMsg): MsgRecvPacket {
    return MsgRecvPacket.decode(message.value);
  },
  toProto(message: MsgRecvPacket): Uint8Array {
    return MsgRecvPacket.encode(message).finish();
  },
  toProtoMsg(message: MsgRecvPacket): MsgRecvPacketProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
      value: MsgRecvPacket.encode(message).finish()
    };
  }
};
function createBaseMsgRecvPacketResponse(): MsgRecvPacketResponse {
  return {};
}
export const MsgRecvPacketResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse",
  aminoType: "cosmos-sdk/MsgRecvPacketResponse",
  encode(_: MsgRecvPacketResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRecvPacketResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecvPacketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRecvPacketResponse {
    return {};
  },
  toJSON(_: MsgRecvPacketResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgRecvPacketResponse>): MsgRecvPacketResponse {
    const message = createBaseMsgRecvPacketResponse();
    return message;
  },
  fromSDK(_: MsgRecvPacketResponseSDKType): MsgRecvPacketResponse {
    return {};
  },
  toSDK(_: MsgRecvPacketResponse): MsgRecvPacketResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgRecvPacketResponseAmino): MsgRecvPacketResponse {
    return {};
  },
  toAmino(_: MsgRecvPacketResponse): MsgRecvPacketResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRecvPacketResponseAminoMsg): MsgRecvPacketResponse {
    return MsgRecvPacketResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRecvPacketResponse): MsgRecvPacketResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRecvPacketResponse",
      value: MsgRecvPacketResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRecvPacketResponseProtoMsg): MsgRecvPacketResponse {
    return MsgRecvPacketResponse.decode(message.value);
  },
  toProto(message: MsgRecvPacketResponse): Uint8Array {
    return MsgRecvPacketResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRecvPacketResponse): MsgRecvPacketResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse",
      value: MsgRecvPacketResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTimeout(): MsgTimeout {
  return {
    packet: undefined,
    proofUnreceived: new Uint8Array(),
    proofHeight: undefined,
    nextSequenceRecv: Long.UZERO,
    signer: ""
  };
}
export const MsgTimeout = {
  typeUrl: "/ibc.core.channel.v1.MsgTimeout",
  aminoType: "cosmos-sdk/MsgTimeout",
  encode(message: MsgTimeout, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofUnreceived.length !== 0) {
      writer.uint32(18).bytes(message.proofUnreceived);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (!message.nextSequenceRecv.isZero()) {
      writer.uint32(32).uint64(message.nextSequenceRecv);
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeout {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofUnreceived = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.nextSequenceRecv = (reader.uint64() as Long);
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTimeout {
    return {
      packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
      proofUnreceived: isSet(object.proofUnreceived) ? bytesFromBase64(object.proofUnreceived) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      nextSequenceRecv: isSet(object.nextSequenceRecv) ? Long.fromValue(object.nextSequenceRecv) : Long.UZERO,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgTimeout): unknown {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.proofUnreceived !== undefined && (obj.proofUnreceived = base64FromBytes(message.proofUnreceived !== undefined ? message.proofUnreceived : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.nextSequenceRecv !== undefined && (obj.nextSequenceRecv = (message.nextSequenceRecv || Long.UZERO).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgTimeout>): MsgTimeout {
    const message = createBaseMsgTimeout();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
    message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.nextSequenceRecv = object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null ? Long.fromValue(object.nextSequenceRecv) : Long.UZERO;
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgTimeoutSDKType): MsgTimeout {
    return {
      packet: object.packet ? Packet.fromSDK(object.packet) : undefined,
      proofUnreceived: object?.proof_unreceived,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined,
      nextSequenceRecv: object?.next_sequence_recv,
      signer: object?.signer
    };
  },
  toSDK(message: MsgTimeout): MsgTimeoutSDKType {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toSDK(message.packet) : undefined);
    obj.proof_unreceived = message.proofUnreceived;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    obj.next_sequence_recv = message.nextSequenceRecv;
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgTimeoutAmino): MsgTimeout {
    return {
      packet: object?.packet ? Packet.fromAmino(object.packet) : undefined,
      proofUnreceived: object.proof_unreceived,
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined,
      nextSequenceRecv: Long.fromString(object.next_sequence_recv),
      signer: object.signer
    };
  },
  toAmino(message: MsgTimeout): MsgTimeoutAmino {
    const obj: any = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
    obj.proof_unreceived = message.proofUnreceived;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.next_sequence_recv = message.nextSequenceRecv ? message.nextSequenceRecv.toString() : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgTimeoutAminoMsg): MsgTimeout {
    return MsgTimeout.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTimeout): MsgTimeoutAminoMsg {
    return {
      type: "cosmos-sdk/MsgTimeout",
      value: MsgTimeout.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTimeoutProtoMsg): MsgTimeout {
    return MsgTimeout.decode(message.value);
  },
  toProto(message: MsgTimeout): Uint8Array {
    return MsgTimeout.encode(message).finish();
  },
  toProtoMsg(message: MsgTimeout): MsgTimeoutProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgTimeout",
      value: MsgTimeout.encode(message).finish()
    };
  }
};
function createBaseMsgTimeoutResponse(): MsgTimeoutResponse {
  return {};
}
export const MsgTimeoutResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse",
  aminoType: "cosmos-sdk/MsgTimeoutResponse",
  encode(_: MsgTimeoutResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgTimeoutResponse {
    return {};
  },
  toJSON(_: MsgTimeoutResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgTimeoutResponse>): MsgTimeoutResponse {
    const message = createBaseMsgTimeoutResponse();
    return message;
  },
  fromSDK(_: MsgTimeoutResponseSDKType): MsgTimeoutResponse {
    return {};
  },
  toSDK(_: MsgTimeoutResponse): MsgTimeoutResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgTimeoutResponseAmino): MsgTimeoutResponse {
    return {};
  },
  toAmino(_: MsgTimeoutResponse): MsgTimeoutResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTimeoutResponseAminoMsg): MsgTimeoutResponse {
    return MsgTimeoutResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTimeoutResponse): MsgTimeoutResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgTimeoutResponse",
      value: MsgTimeoutResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTimeoutResponseProtoMsg): MsgTimeoutResponse {
    return MsgTimeoutResponse.decode(message.value);
  },
  toProto(message: MsgTimeoutResponse): Uint8Array {
    return MsgTimeoutResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTimeoutResponse): MsgTimeoutResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse",
      value: MsgTimeoutResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTimeoutOnClose(): MsgTimeoutOnClose {
  return {
    packet: undefined,
    proofUnreceived: new Uint8Array(),
    proofClose: new Uint8Array(),
    proofHeight: undefined,
    nextSequenceRecv: Long.UZERO,
    signer: ""
  };
}
export const MsgTimeoutOnClose = {
  typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
  aminoType: "cosmos-sdk/MsgTimeoutOnClose",
  encode(message: MsgTimeoutOnClose, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofUnreceived.length !== 0) {
      writer.uint32(18).bytes(message.proofUnreceived);
    }
    if (message.proofClose.length !== 0) {
      writer.uint32(26).bytes(message.proofClose);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (!message.nextSequenceRecv.isZero()) {
      writer.uint32(40).uint64(message.nextSequenceRecv);
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutOnClose {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutOnClose();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofUnreceived = reader.bytes();
          break;
        case 3:
          message.proofClose = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.nextSequenceRecv = (reader.uint64() as Long);
          break;
        case 6:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTimeoutOnClose {
    return {
      packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
      proofUnreceived: isSet(object.proofUnreceived) ? bytesFromBase64(object.proofUnreceived) : new Uint8Array(),
      proofClose: isSet(object.proofClose) ? bytesFromBase64(object.proofClose) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      nextSequenceRecv: isSet(object.nextSequenceRecv) ? Long.fromValue(object.nextSequenceRecv) : Long.UZERO,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgTimeoutOnClose): unknown {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.proofUnreceived !== undefined && (obj.proofUnreceived = base64FromBytes(message.proofUnreceived !== undefined ? message.proofUnreceived : new Uint8Array()));
    message.proofClose !== undefined && (obj.proofClose = base64FromBytes(message.proofClose !== undefined ? message.proofClose : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.nextSequenceRecv !== undefined && (obj.nextSequenceRecv = (message.nextSequenceRecv || Long.UZERO).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgTimeoutOnClose>): MsgTimeoutOnClose {
    const message = createBaseMsgTimeoutOnClose();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
    message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
    message.proofClose = object.proofClose ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.nextSequenceRecv = object.nextSequenceRecv !== undefined && object.nextSequenceRecv !== null ? Long.fromValue(object.nextSequenceRecv) : Long.UZERO;
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgTimeoutOnCloseSDKType): MsgTimeoutOnClose {
    return {
      packet: object.packet ? Packet.fromSDK(object.packet) : undefined,
      proofUnreceived: object?.proof_unreceived,
      proofClose: object?.proof_close,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined,
      nextSequenceRecv: object?.next_sequence_recv,
      signer: object?.signer
    };
  },
  toSDK(message: MsgTimeoutOnClose): MsgTimeoutOnCloseSDKType {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toSDK(message.packet) : undefined);
    obj.proof_unreceived = message.proofUnreceived;
    obj.proof_close = message.proofClose;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    obj.next_sequence_recv = message.nextSequenceRecv;
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgTimeoutOnCloseAmino): MsgTimeoutOnClose {
    return {
      packet: object?.packet ? Packet.fromAmino(object.packet) : undefined,
      proofUnreceived: object.proof_unreceived,
      proofClose: object.proof_close,
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined,
      nextSequenceRecv: Long.fromString(object.next_sequence_recv),
      signer: object.signer
    };
  },
  toAmino(message: MsgTimeoutOnClose): MsgTimeoutOnCloseAmino {
    const obj: any = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
    obj.proof_unreceived = message.proofUnreceived;
    obj.proof_close = message.proofClose;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.next_sequence_recv = message.nextSequenceRecv ? message.nextSequenceRecv.toString() : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgTimeoutOnCloseAminoMsg): MsgTimeoutOnClose {
    return MsgTimeoutOnClose.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTimeoutOnClose): MsgTimeoutOnCloseAminoMsg {
    return {
      type: "cosmos-sdk/MsgTimeoutOnClose",
      value: MsgTimeoutOnClose.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTimeoutOnCloseProtoMsg): MsgTimeoutOnClose {
    return MsgTimeoutOnClose.decode(message.value);
  },
  toProto(message: MsgTimeoutOnClose): Uint8Array {
    return MsgTimeoutOnClose.encode(message).finish();
  },
  toProtoMsg(message: MsgTimeoutOnClose): MsgTimeoutOnCloseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
      value: MsgTimeoutOnClose.encode(message).finish()
    };
  }
};
function createBaseMsgTimeoutOnCloseResponse(): MsgTimeoutOnCloseResponse {
  return {};
}
export const MsgTimeoutOnCloseResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse",
  aminoType: "cosmos-sdk/MsgTimeoutOnCloseResponse",
  encode(_: MsgTimeoutOnCloseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTimeoutOnCloseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutOnCloseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgTimeoutOnCloseResponse {
    return {};
  },
  toJSON(_: MsgTimeoutOnCloseResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgTimeoutOnCloseResponse>): MsgTimeoutOnCloseResponse {
    const message = createBaseMsgTimeoutOnCloseResponse();
    return message;
  },
  fromSDK(_: MsgTimeoutOnCloseResponseSDKType): MsgTimeoutOnCloseResponse {
    return {};
  },
  toSDK(_: MsgTimeoutOnCloseResponse): MsgTimeoutOnCloseResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgTimeoutOnCloseResponseAmino): MsgTimeoutOnCloseResponse {
    return {};
  },
  toAmino(_: MsgTimeoutOnCloseResponse): MsgTimeoutOnCloseResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTimeoutOnCloseResponseAminoMsg): MsgTimeoutOnCloseResponse {
    return MsgTimeoutOnCloseResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTimeoutOnCloseResponse): MsgTimeoutOnCloseResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgTimeoutOnCloseResponse",
      value: MsgTimeoutOnCloseResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTimeoutOnCloseResponseProtoMsg): MsgTimeoutOnCloseResponse {
    return MsgTimeoutOnCloseResponse.decode(message.value);
  },
  toProto(message: MsgTimeoutOnCloseResponse): Uint8Array {
    return MsgTimeoutOnCloseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTimeoutOnCloseResponse): MsgTimeoutOnCloseResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse",
      value: MsgTimeoutOnCloseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAcknowledgement(): MsgAcknowledgement {
  return {
    packet: undefined,
    acknowledgement: new Uint8Array(),
    proofAcked: new Uint8Array(),
    proofHeight: undefined,
    signer: ""
  };
}
export const MsgAcknowledgement = {
  typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
  aminoType: "cosmos-sdk/MsgAcknowledgement",
  encode(message: MsgAcknowledgement, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }
    if (message.proofAcked.length !== 0) {
      writer.uint32(26).bytes(message.proofAcked);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcknowledgement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.acknowledgement = reader.bytes();
          break;
        case 3:
          message.proofAcked = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAcknowledgement {
    return {
      packet: isSet(object.packet) ? Packet.fromJSON(object.packet) : undefined,
      acknowledgement: isSet(object.acknowledgement) ? bytesFromBase64(object.acknowledgement) : new Uint8Array(),
      proofAcked: isSet(object.proofAcked) ? bytesFromBase64(object.proofAcked) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgAcknowledgement): unknown {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.acknowledgement !== undefined && (obj.acknowledgement = base64FromBytes(message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array()));
    message.proofAcked !== undefined && (obj.proofAcked = base64FromBytes(message.proofAcked !== undefined ? message.proofAcked : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgAcknowledgement>): MsgAcknowledgement {
    const message = createBaseMsgAcknowledgement();
    message.packet = object.packet !== undefined && object.packet !== null ? Packet.fromPartial(object.packet) : undefined;
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    message.proofAcked = object.proofAcked ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgAcknowledgementSDKType): MsgAcknowledgement {
    return {
      packet: object.packet ? Packet.fromSDK(object.packet) : undefined,
      acknowledgement: object?.acknowledgement,
      proofAcked: object?.proof_acked,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined,
      signer: object?.signer
    };
  },
  toSDK(message: MsgAcknowledgement): MsgAcknowledgementSDKType {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toSDK(message.packet) : undefined);
    obj.acknowledgement = message.acknowledgement;
    obj.proof_acked = message.proofAcked;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgAcknowledgementAmino): MsgAcknowledgement {
    return {
      packet: object?.packet ? Packet.fromAmino(object.packet) : undefined,
      acknowledgement: object.acknowledgement,
      proofAcked: object.proof_acked,
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined,
      signer: object.signer
    };
  },
  toAmino(message: MsgAcknowledgement): MsgAcknowledgementAmino {
    const obj: any = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
    obj.acknowledgement = message.acknowledgement;
    obj.proof_acked = message.proofAcked;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgAcknowledgementAminoMsg): MsgAcknowledgement {
    return MsgAcknowledgement.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAcknowledgement): MsgAcknowledgementAminoMsg {
    return {
      type: "cosmos-sdk/MsgAcknowledgement",
      value: MsgAcknowledgement.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAcknowledgementProtoMsg): MsgAcknowledgement {
    return MsgAcknowledgement.decode(message.value);
  },
  toProto(message: MsgAcknowledgement): Uint8Array {
    return MsgAcknowledgement.encode(message).finish();
  },
  toProtoMsg(message: MsgAcknowledgement): MsgAcknowledgementProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
      value: MsgAcknowledgement.encode(message).finish()
    };
  }
};
function createBaseMsgAcknowledgementResponse(): MsgAcknowledgementResponse {
  return {};
}
export const MsgAcknowledgementResponse = {
  typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse",
  aminoType: "cosmos-sdk/MsgAcknowledgementResponse",
  encode(_: MsgAcknowledgementResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAcknowledgementResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgAcknowledgementResponse {
    return {};
  },
  toJSON(_: MsgAcknowledgementResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgAcknowledgementResponse>): MsgAcknowledgementResponse {
    const message = createBaseMsgAcknowledgementResponse();
    return message;
  },
  fromSDK(_: MsgAcknowledgementResponseSDKType): MsgAcknowledgementResponse {
    return {};
  },
  toSDK(_: MsgAcknowledgementResponse): MsgAcknowledgementResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgAcknowledgementResponseAmino): MsgAcknowledgementResponse {
    return {};
  },
  toAmino(_: MsgAcknowledgementResponse): MsgAcknowledgementResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAcknowledgementResponseAminoMsg): MsgAcknowledgementResponse {
    return MsgAcknowledgementResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAcknowledgementResponse): MsgAcknowledgementResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgAcknowledgementResponse",
      value: MsgAcknowledgementResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAcknowledgementResponseProtoMsg): MsgAcknowledgementResponse {
    return MsgAcknowledgementResponse.decode(message.value);
  },
  toProto(message: MsgAcknowledgementResponse): Uint8Array {
    return MsgAcknowledgementResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAcknowledgementResponse): MsgAcknowledgementResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse",
      value: MsgAcknowledgementResponse.encode(message).finish()
    };
  }
};