//@ts-nocheck
import { Counterparty, CounterpartyAmino, CounterpartySDKType, Version, VersionAmino, VersionSDKType } from "./connection";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightAmino, HeightSDKType } from "../../client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "ibc.core.connection.v1";
/**
 * MsgConnectionOpenInit defines the msg sent by an account on Chain A to
 * initialize a connection with Chain B.
 */
export interface MsgConnectionOpenInit {
  clientId: string;
  counterparty: Counterparty;
  version?: Version;
  delayPeriod: bigint;
  signer: string;
}
export interface MsgConnectionOpenInitProtoMsg {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit";
  value: Uint8Array;
}
/**
 * MsgConnectionOpenInit defines the msg sent by an account on Chain A to
 * initialize a connection with Chain B.
 */
export interface MsgConnectionOpenInitAmino {
  client_id?: string;
  counterparty?: CounterpartyAmino;
  version?: VersionAmino;
  delay_period?: string;
  signer?: string;
}
export interface MsgConnectionOpenInitAminoMsg {
  type: "cosmos-sdk/MsgConnectionOpenInit";
  value: MsgConnectionOpenInitAmino;
}
/**
 * MsgConnectionOpenInit defines the msg sent by an account on Chain A to
 * initialize a connection with Chain B.
 */
export interface MsgConnectionOpenInitSDKType {
  client_id: string;
  counterparty: CounterpartySDKType;
  version?: VersionSDKType;
  delay_period: bigint;
  signer: string;
}
/**
 * MsgConnectionOpenInitResponse defines the Msg/ConnectionOpenInit response
 * type.
 */
export interface MsgConnectionOpenInitResponse {}
export interface MsgConnectionOpenInitResponseProtoMsg {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInitResponse";
  value: Uint8Array;
}
/**
 * MsgConnectionOpenInitResponse defines the Msg/ConnectionOpenInit response
 * type.
 */
export interface MsgConnectionOpenInitResponseAmino {}
export interface MsgConnectionOpenInitResponseAminoMsg {
  type: "cosmos-sdk/MsgConnectionOpenInitResponse";
  value: MsgConnectionOpenInitResponseAmino;
}
/**
 * MsgConnectionOpenInitResponse defines the Msg/ConnectionOpenInit response
 * type.
 */
export interface MsgConnectionOpenInitResponseSDKType {}
/**
 * MsgConnectionOpenTry defines a msg sent by a Relayer to try to open a
 * connection on Chain B.
 */
export interface MsgConnectionOpenTry {
  clientId: string;
  /**
   * in the case of crossing hello's, when both chains call OpenInit, we need
   * the connection identifier of the previous connection in state INIT
   */
  previousConnectionId: string;
  clientState?: Any;
  counterparty: Counterparty;
  delayPeriod: bigint;
  counterpartyVersions: Version[];
  proofHeight: Height;
  /**
   * proof of the initialization the connection on Chain A: `UNITIALIZED ->
   * INIT`
   */
  proofInit: Uint8Array;
  /** proof of client state included in message */
  proofClient: Uint8Array;
  /** proof of client consensus state */
  proofConsensus: Uint8Array;
  consensusHeight: Height;
  signer: string;
}
export interface MsgConnectionOpenTryProtoMsg {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry";
  value: Uint8Array;
}
/**
 * MsgConnectionOpenTry defines a msg sent by a Relayer to try to open a
 * connection on Chain B.
 */
export interface MsgConnectionOpenTryAmino {
  client_id?: string;
  /**
   * in the case of crossing hello's, when both chains call OpenInit, we need
   * the connection identifier of the previous connection in state INIT
   */
  previous_connection_id?: string;
  client_state?: AnyAmino;
  counterparty?: CounterpartyAmino;
  delay_period?: string;
  counterparty_versions?: VersionAmino[];
  proof_height?: HeightAmino;
  /**
   * proof of the initialization the connection on Chain A: `UNITIALIZED ->
   * INIT`
   */
  proof_init?: string;
  /** proof of client state included in message */
  proof_client?: string;
  /** proof of client consensus state */
  proof_consensus?: string;
  consensus_height?: HeightAmino;
  signer?: string;
}
export interface MsgConnectionOpenTryAminoMsg {
  type: "cosmos-sdk/MsgConnectionOpenTry";
  value: MsgConnectionOpenTryAmino;
}
/**
 * MsgConnectionOpenTry defines a msg sent by a Relayer to try to open a
 * connection on Chain B.
 */
export interface MsgConnectionOpenTrySDKType {
  client_id: string;
  previous_connection_id: string;
  client_state?: AnySDKType;
  counterparty: CounterpartySDKType;
  delay_period: bigint;
  counterparty_versions: VersionSDKType[];
  proof_height: HeightSDKType;
  proof_init: Uint8Array;
  proof_client: Uint8Array;
  proof_consensus: Uint8Array;
  consensus_height: HeightSDKType;
  signer: string;
}
/** MsgConnectionOpenTryResponse defines the Msg/ConnectionOpenTry response type. */
export interface MsgConnectionOpenTryResponse {}
export interface MsgConnectionOpenTryResponseProtoMsg {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTryResponse";
  value: Uint8Array;
}
/** MsgConnectionOpenTryResponse defines the Msg/ConnectionOpenTry response type. */
export interface MsgConnectionOpenTryResponseAmino {}
export interface MsgConnectionOpenTryResponseAminoMsg {
  type: "cosmos-sdk/MsgConnectionOpenTryResponse";
  value: MsgConnectionOpenTryResponseAmino;
}
/** MsgConnectionOpenTryResponse defines the Msg/ConnectionOpenTry response type. */
export interface MsgConnectionOpenTryResponseSDKType {}
/**
 * MsgConnectionOpenAck defines a msg sent by a Relayer to Chain A to
 * acknowledge the change of connection state to TRYOPEN on Chain B.
 */
export interface MsgConnectionOpenAck {
  connectionId: string;
  counterpartyConnectionId: string;
  version?: Version;
  clientState?: Any;
  proofHeight: Height;
  /**
   * proof of the initialization the connection on Chain B: `UNITIALIZED ->
   * TRYOPEN`
   */
  proofTry: Uint8Array;
  /** proof of client state included in message */
  proofClient: Uint8Array;
  /** proof of client consensus state */
  proofConsensus: Uint8Array;
  consensusHeight: Height;
  signer: string;
}
export interface MsgConnectionOpenAckProtoMsg {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck";
  value: Uint8Array;
}
/**
 * MsgConnectionOpenAck defines a msg sent by a Relayer to Chain A to
 * acknowledge the change of connection state to TRYOPEN on Chain B.
 */
export interface MsgConnectionOpenAckAmino {
  connection_id?: string;
  counterparty_connection_id?: string;
  version?: VersionAmino;
  client_state?: AnyAmino;
  proof_height?: HeightAmino;
  /**
   * proof of the initialization the connection on Chain B: `UNITIALIZED ->
   * TRYOPEN`
   */
  proof_try?: string;
  /** proof of client state included in message */
  proof_client?: string;
  /** proof of client consensus state */
  proof_consensus?: string;
  consensus_height?: HeightAmino;
  signer?: string;
}
export interface MsgConnectionOpenAckAminoMsg {
  type: "cosmos-sdk/MsgConnectionOpenAck";
  value: MsgConnectionOpenAckAmino;
}
/**
 * MsgConnectionOpenAck defines a msg sent by a Relayer to Chain A to
 * acknowledge the change of connection state to TRYOPEN on Chain B.
 */
export interface MsgConnectionOpenAckSDKType {
  connection_id: string;
  counterparty_connection_id: string;
  version?: VersionSDKType;
  client_state?: AnySDKType;
  proof_height: HeightSDKType;
  proof_try: Uint8Array;
  proof_client: Uint8Array;
  proof_consensus: Uint8Array;
  consensus_height: HeightSDKType;
  signer: string;
}
/** MsgConnectionOpenAckResponse defines the Msg/ConnectionOpenAck response type. */
export interface MsgConnectionOpenAckResponse {}
export interface MsgConnectionOpenAckResponseProtoMsg {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAckResponse";
  value: Uint8Array;
}
/** MsgConnectionOpenAckResponse defines the Msg/ConnectionOpenAck response type. */
export interface MsgConnectionOpenAckResponseAmino {}
export interface MsgConnectionOpenAckResponseAminoMsg {
  type: "cosmos-sdk/MsgConnectionOpenAckResponse";
  value: MsgConnectionOpenAckResponseAmino;
}
/** MsgConnectionOpenAckResponse defines the Msg/ConnectionOpenAck response type. */
export interface MsgConnectionOpenAckResponseSDKType {}
/**
 * MsgConnectionOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of connection state to OPEN on Chain A.
 */
export interface MsgConnectionOpenConfirm {
  connectionId: string;
  /** proof for the change of the connection state on Chain A: `INIT -> OPEN` */
  proofAck: Uint8Array;
  proofHeight: Height;
  signer: string;
}
export interface MsgConnectionOpenConfirmProtoMsg {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm";
  value: Uint8Array;
}
/**
 * MsgConnectionOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of connection state to OPEN on Chain A.
 */
export interface MsgConnectionOpenConfirmAmino {
  connection_id?: string;
  /** proof for the change of the connection state on Chain A: `INIT -> OPEN` */
  proof_ack?: string;
  proof_height?: HeightAmino;
  signer?: string;
}
export interface MsgConnectionOpenConfirmAminoMsg {
  type: "cosmos-sdk/MsgConnectionOpenConfirm";
  value: MsgConnectionOpenConfirmAmino;
}
/**
 * MsgConnectionOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of connection state to OPEN on Chain A.
 */
export interface MsgConnectionOpenConfirmSDKType {
  connection_id: string;
  proof_ack: Uint8Array;
  proof_height: HeightSDKType;
  signer: string;
}
/**
 * MsgConnectionOpenConfirmResponse defines the Msg/ConnectionOpenConfirm
 * response type.
 */
export interface MsgConnectionOpenConfirmResponse {}
export interface MsgConnectionOpenConfirmResponseProtoMsg {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirmResponse";
  value: Uint8Array;
}
/**
 * MsgConnectionOpenConfirmResponse defines the Msg/ConnectionOpenConfirm
 * response type.
 */
export interface MsgConnectionOpenConfirmResponseAmino {}
export interface MsgConnectionOpenConfirmResponseAminoMsg {
  type: "cosmos-sdk/MsgConnectionOpenConfirmResponse";
  value: MsgConnectionOpenConfirmResponseAmino;
}
/**
 * MsgConnectionOpenConfirmResponse defines the Msg/ConnectionOpenConfirm
 * response type.
 */
export interface MsgConnectionOpenConfirmResponseSDKType {}
function createBaseMsgConnectionOpenInit(): MsgConnectionOpenInit {
  return {
    clientId: "",
    counterparty: Counterparty.fromPartial({}),
    version: undefined,
    delayPeriod: BigInt(0),
    signer: ""
  };
}
export const MsgConnectionOpenInit = {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
  aminoType: "cosmos-sdk/MsgConnectionOpenInit",
  is(o: any): o is MsgConnectionOpenInit {
    return o && (o.$typeUrl === MsgConnectionOpenInit.typeUrl || typeof o.clientId === "string" && Counterparty.is(o.counterparty) && typeof o.delayPeriod === "bigint" && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgConnectionOpenInitSDKType {
    return o && (o.$typeUrl === MsgConnectionOpenInit.typeUrl || typeof o.client_id === "string" && Counterparty.isSDK(o.counterparty) && typeof o.delay_period === "bigint" && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgConnectionOpenInitAmino {
    return o && (o.$typeUrl === MsgConnectionOpenInit.typeUrl || typeof o.client_id === "string" && Counterparty.isAmino(o.counterparty) && typeof o.delay_period === "bigint" && typeof o.signer === "string");
  },
  encode(message: MsgConnectionOpenInit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== undefined) {
      writer.uint32(10).string(message.clientId);
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(18).fork()).ldelim();
    }
    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(26).fork()).ldelim();
    }
    if (message.delayPeriod !== undefined) {
      writer.uint32(32).uint64(message.delayPeriod);
    }
    if (message.signer !== undefined) {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConnectionOpenInit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenInit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 3:
          message.version = Version.decode(reader, reader.uint32());
          break;
        case 4:
          message.delayPeriod = reader.uint64();
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
  fromJSON(object: any): MsgConnectionOpenInit {
    const obj = createBaseMsgConnectionOpenInit();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.counterparty)) obj.counterparty = Counterparty.fromJSON(object.counterparty);
    if (isSet(object.version)) obj.version = Version.fromJSON(object.version);
    if (isSet(object.delayPeriod)) obj.delayPeriod = BigInt(object.delayPeriod.toString());
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgConnectionOpenInit): JsonSafe<MsgConnectionOpenInit> {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.counterparty !== undefined && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
    message.version !== undefined && (obj.version = message.version ? Version.toJSON(message.version) : undefined);
    message.delayPeriod !== undefined && (obj.delayPeriod = (message.delayPeriod || BigInt(0)).toString());
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgConnectionOpenInit>): MsgConnectionOpenInit {
    const message = createBaseMsgConnectionOpenInit();
    message.clientId = object.clientId ?? "";
    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = Counterparty.fromPartial(object.counterparty);
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = Version.fromPartial(object.version);
    }
    if (object.delayPeriod !== undefined && object.delayPeriod !== null) {
      message.delayPeriod = BigInt(object.delayPeriod.toString());
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgConnectionOpenInitSDKType): MsgConnectionOpenInit {
    return {
      clientId: object?.client_id,
      counterparty: object.counterparty ? Counterparty.fromSDK(object.counterparty) : undefined,
      version: object.version ? Version.fromSDK(object.version) : undefined,
      delayPeriod: object?.delay_period,
      signer: object?.signer
    };
  },
  toSDK(message: MsgConnectionOpenInit): MsgConnectionOpenInitSDKType {
    const obj: any = {};
    obj.client_id = message.clientId;
    message.counterparty !== undefined && (obj.counterparty = message.counterparty ? Counterparty.toSDK(message.counterparty) : undefined);
    message.version !== undefined && (obj.version = message.version ? Version.toSDK(message.version) : undefined);
    obj.delay_period = message.delayPeriod;
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgConnectionOpenInitAmino): MsgConnectionOpenInit {
    const message = createBaseMsgConnectionOpenInit();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = Counterparty.fromAmino(object.counterparty);
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = Version.fromAmino(object.version);
    }
    if (object.delay_period !== undefined && object.delay_period !== null) {
      message.delayPeriod = BigInt(object.delay_period);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgConnectionOpenInit): MsgConnectionOpenInitAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : undefined;
    obj.version = message.version ? Version.toAmino(message.version) : undefined;
    obj.delay_period = message.delayPeriod !== BigInt(0) ? message.delayPeriod.toString() : undefined;
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgConnectionOpenInitAminoMsg): MsgConnectionOpenInit {
    return MsgConnectionOpenInit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgConnectionOpenInit): MsgConnectionOpenInitAminoMsg {
    return {
      type: "cosmos-sdk/MsgConnectionOpenInit",
      value: MsgConnectionOpenInit.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgConnectionOpenInitProtoMsg): MsgConnectionOpenInit {
    return MsgConnectionOpenInit.decode(message.value);
  },
  toProto(message: MsgConnectionOpenInit): Uint8Array {
    return MsgConnectionOpenInit.encode(message).finish();
  },
  toProtoMsg(message: MsgConnectionOpenInit): MsgConnectionOpenInitProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
      value: MsgConnectionOpenInit.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgConnectionOpenInit.typeUrl, MsgConnectionOpenInit);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgConnectionOpenInit.aminoType, MsgConnectionOpenInit.typeUrl);
function createBaseMsgConnectionOpenInitResponse(): MsgConnectionOpenInitResponse {
  return {};
}
export const MsgConnectionOpenInitResponse = {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInitResponse",
  aminoType: "cosmos-sdk/MsgConnectionOpenInitResponse",
  is(o: any): o is MsgConnectionOpenInitResponse {
    return o && o.$typeUrl === MsgConnectionOpenInitResponse.typeUrl;
  },
  isSDK(o: any): o is MsgConnectionOpenInitResponseSDKType {
    return o && o.$typeUrl === MsgConnectionOpenInitResponse.typeUrl;
  },
  isAmino(o: any): o is MsgConnectionOpenInitResponseAmino {
    return o && o.$typeUrl === MsgConnectionOpenInitResponse.typeUrl;
  },
  encode(_: MsgConnectionOpenInitResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConnectionOpenInitResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenInitResponse();
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
  fromJSON(_: any): MsgConnectionOpenInitResponse {
    const obj = createBaseMsgConnectionOpenInitResponse();
    return obj;
  },
  toJSON(_: MsgConnectionOpenInitResponse): JsonSafe<MsgConnectionOpenInitResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgConnectionOpenInitResponse>): MsgConnectionOpenInitResponse {
    const message = createBaseMsgConnectionOpenInitResponse();
    return message;
  },
  fromSDK(_: MsgConnectionOpenInitResponseSDKType): MsgConnectionOpenInitResponse {
    return {};
  },
  toSDK(_: MsgConnectionOpenInitResponse): MsgConnectionOpenInitResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgConnectionOpenInitResponseAmino): MsgConnectionOpenInitResponse {
    const message = createBaseMsgConnectionOpenInitResponse();
    return message;
  },
  toAmino(_: MsgConnectionOpenInitResponse): MsgConnectionOpenInitResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConnectionOpenInitResponseAminoMsg): MsgConnectionOpenInitResponse {
    return MsgConnectionOpenInitResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgConnectionOpenInitResponse): MsgConnectionOpenInitResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgConnectionOpenInitResponse",
      value: MsgConnectionOpenInitResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgConnectionOpenInitResponseProtoMsg): MsgConnectionOpenInitResponse {
    return MsgConnectionOpenInitResponse.decode(message.value);
  },
  toProto(message: MsgConnectionOpenInitResponse): Uint8Array {
    return MsgConnectionOpenInitResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConnectionOpenInitResponse): MsgConnectionOpenInitResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInitResponse",
      value: MsgConnectionOpenInitResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgConnectionOpenInitResponse.typeUrl, MsgConnectionOpenInitResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgConnectionOpenInitResponse.aminoType, MsgConnectionOpenInitResponse.typeUrl);
function createBaseMsgConnectionOpenTry(): MsgConnectionOpenTry {
  return {
    clientId: "",
    previousConnectionId: "",
    clientState: undefined,
    counterparty: Counterparty.fromPartial({}),
    delayPeriod: BigInt(0),
    counterpartyVersions: [],
    proofHeight: Height.fromPartial({}),
    proofInit: new Uint8Array(),
    proofClient: new Uint8Array(),
    proofConsensus: new Uint8Array(),
    consensusHeight: Height.fromPartial({}),
    signer: ""
  };
}
export const MsgConnectionOpenTry = {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
  aminoType: "cosmos-sdk/MsgConnectionOpenTry",
  is(o: any): o is MsgConnectionOpenTry {
    return o && (o.$typeUrl === MsgConnectionOpenTry.typeUrl || typeof o.clientId === "string" && typeof o.previousConnectionId === "string" && Counterparty.is(o.counterparty) && typeof o.delayPeriod === "bigint" && Array.isArray(o.counterpartyVersions) && (!o.counterpartyVersions.length || Version.is(o.counterpartyVersions[0])) && Height.is(o.proofHeight) && (o.proofInit instanceof Uint8Array || typeof o.proofInit === "string") && (o.proofClient instanceof Uint8Array || typeof o.proofClient === "string") && (o.proofConsensus instanceof Uint8Array || typeof o.proofConsensus === "string") && Height.is(o.consensusHeight) && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgConnectionOpenTrySDKType {
    return o && (o.$typeUrl === MsgConnectionOpenTry.typeUrl || typeof o.client_id === "string" && typeof o.previous_connection_id === "string" && Counterparty.isSDK(o.counterparty) && typeof o.delay_period === "bigint" && Array.isArray(o.counterparty_versions) && (!o.counterparty_versions.length || Version.isSDK(o.counterparty_versions[0])) && Height.isSDK(o.proof_height) && (o.proof_init instanceof Uint8Array || typeof o.proof_init === "string") && (o.proof_client instanceof Uint8Array || typeof o.proof_client === "string") && (o.proof_consensus instanceof Uint8Array || typeof o.proof_consensus === "string") && Height.isSDK(o.consensus_height) && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgConnectionOpenTryAmino {
    return o && (o.$typeUrl === MsgConnectionOpenTry.typeUrl || typeof o.client_id === "string" && typeof o.previous_connection_id === "string" && Counterparty.isAmino(o.counterparty) && typeof o.delay_period === "bigint" && Array.isArray(o.counterparty_versions) && (!o.counterparty_versions.length || Version.isAmino(o.counterparty_versions[0])) && Height.isAmino(o.proof_height) && (o.proof_init instanceof Uint8Array || typeof o.proof_init === "string") && (o.proof_client instanceof Uint8Array || typeof o.proof_client === "string") && (o.proof_consensus instanceof Uint8Array || typeof o.proof_consensus === "string") && Height.isAmino(o.consensus_height) && typeof o.signer === "string");
  },
  encode(message: MsgConnectionOpenTry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== undefined) {
      writer.uint32(10).string(message.clientId);
    }
    if (message.previousConnectionId !== undefined) {
      writer.uint32(18).string(message.previousConnectionId);
    }
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(26).fork()).ldelim();
    }
    if (message.counterparty !== undefined) {
      Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
    }
    if (message.delayPeriod !== undefined) {
      writer.uint32(40).uint64(message.delayPeriod);
    }
    for (const v of message.counterpartyVersions) {
      Version.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(58).fork()).ldelim();
    }
    if (message.proofInit.length !== 0) {
      writer.uint32(66).bytes(message.proofInit);
    }
    if (message.proofClient.length !== 0) {
      writer.uint32(74).bytes(message.proofClient);
    }
    if (message.proofConsensus.length !== 0) {
      writer.uint32(82).bytes(message.proofConsensus);
    }
    if (message.consensusHeight !== undefined) {
      Height.encode(message.consensusHeight, writer.uint32(90).fork()).ldelim();
    }
    if (message.signer !== undefined) {
      writer.uint32(98).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConnectionOpenTry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenTry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.previousConnectionId = reader.string();
          break;
        case 3:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.counterparty = Counterparty.decode(reader, reader.uint32());
          break;
        case 5:
          message.delayPeriod = reader.uint64();
          break;
        case 6:
          message.counterpartyVersions.push(Version.decode(reader, reader.uint32()));
          break;
        case 7:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 8:
          message.proofInit = reader.bytes();
          break;
        case 9:
          message.proofClient = reader.bytes();
          break;
        case 10:
          message.proofConsensus = reader.bytes();
          break;
        case 11:
          message.consensusHeight = Height.decode(reader, reader.uint32());
          break;
        case 12:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgConnectionOpenTry {
    const obj = createBaseMsgConnectionOpenTry();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.previousConnectionId)) obj.previousConnectionId = String(object.previousConnectionId);
    if (isSet(object.clientState)) obj.clientState = Any.fromJSON(object.clientState);
    if (isSet(object.counterparty)) obj.counterparty = Counterparty.fromJSON(object.counterparty);
    if (isSet(object.delayPeriod)) obj.delayPeriod = BigInt(object.delayPeriod.toString());
    if (Array.isArray(object?.counterpartyVersions)) obj.counterpartyVersions = object.counterpartyVersions.map((e: any) => Version.fromJSON(e));
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.proofInit)) obj.proofInit = bytesFromBase64(object.proofInit);
    if (isSet(object.proofClient)) obj.proofClient = bytesFromBase64(object.proofClient);
    if (isSet(object.proofConsensus)) obj.proofConsensus = bytesFromBase64(object.proofConsensus);
    if (isSet(object.consensusHeight)) obj.consensusHeight = Height.fromJSON(object.consensusHeight);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgConnectionOpenTry): JsonSafe<MsgConnectionOpenTry> {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.previousConnectionId !== undefined && (obj.previousConnectionId = message.previousConnectionId);
    message.clientState !== undefined && (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
    message.counterparty !== undefined && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
    message.delayPeriod !== undefined && (obj.delayPeriod = (message.delayPeriod || BigInt(0)).toString());
    if (message.counterpartyVersions) {
      obj.counterpartyVersions = message.counterpartyVersions.map(e => e ? Version.toJSON(e) : undefined);
    } else {
      obj.counterpartyVersions = [];
    }
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.proofInit !== undefined && (obj.proofInit = base64FromBytes(message.proofInit !== undefined ? message.proofInit : new Uint8Array()));
    message.proofClient !== undefined && (obj.proofClient = base64FromBytes(message.proofClient !== undefined ? message.proofClient : new Uint8Array()));
    message.proofConsensus !== undefined && (obj.proofConsensus = base64FromBytes(message.proofConsensus !== undefined ? message.proofConsensus : new Uint8Array()));
    message.consensusHeight !== undefined && (obj.consensusHeight = message.consensusHeight ? Height.toJSON(message.consensusHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgConnectionOpenTry>): MsgConnectionOpenTry {
    const message = createBaseMsgConnectionOpenTry();
    message.clientId = object.clientId ?? "";
    message.previousConnectionId = object.previousConnectionId ?? "";
    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = Any.fromPartial(object.clientState);
    }
    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = Counterparty.fromPartial(object.counterparty);
    }
    if (object.delayPeriod !== undefined && object.delayPeriod !== null) {
      message.delayPeriod = BigInt(object.delayPeriod.toString());
    }
    message.counterpartyVersions = object.counterpartyVersions?.map(e => Version.fromPartial(e)) || [];
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    message.proofInit = object.proofInit ?? new Uint8Array();
    message.proofClient = object.proofClient ?? new Uint8Array();
    message.proofConsensus = object.proofConsensus ?? new Uint8Array();
    if (object.consensusHeight !== undefined && object.consensusHeight !== null) {
      message.consensusHeight = Height.fromPartial(object.consensusHeight);
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgConnectionOpenTrySDKType): MsgConnectionOpenTry {
    return {
      clientId: object?.client_id,
      previousConnectionId: object?.previous_connection_id,
      clientState: object.client_state ? Any.fromSDK(object.client_state) : undefined,
      counterparty: object.counterparty ? Counterparty.fromSDK(object.counterparty) : undefined,
      delayPeriod: object?.delay_period,
      counterpartyVersions: Array.isArray(object?.counterparty_versions) ? object.counterparty_versions.map((e: any) => Version.fromSDK(e)) : [],
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined,
      proofInit: object?.proof_init,
      proofClient: object?.proof_client,
      proofConsensus: object?.proof_consensus,
      consensusHeight: object.consensus_height ? Height.fromSDK(object.consensus_height) : undefined,
      signer: object?.signer
    };
  },
  toSDK(message: MsgConnectionOpenTry): MsgConnectionOpenTrySDKType {
    const obj: any = {};
    obj.client_id = message.clientId;
    obj.previous_connection_id = message.previousConnectionId;
    message.clientState !== undefined && (obj.client_state = message.clientState ? Any.toSDK(message.clientState) : undefined);
    message.counterparty !== undefined && (obj.counterparty = message.counterparty ? Counterparty.toSDK(message.counterparty) : undefined);
    obj.delay_period = message.delayPeriod;
    if (message.counterpartyVersions) {
      obj.counterparty_versions = message.counterpartyVersions.map(e => e ? Version.toSDK(e) : undefined);
    } else {
      obj.counterparty_versions = [];
    }
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    obj.proof_init = message.proofInit;
    obj.proof_client = message.proofClient;
    obj.proof_consensus = message.proofConsensus;
    message.consensusHeight !== undefined && (obj.consensus_height = message.consensusHeight ? Height.toSDK(message.consensusHeight) : undefined);
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgConnectionOpenTryAmino): MsgConnectionOpenTry {
    const message = createBaseMsgConnectionOpenTry();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.previous_connection_id !== undefined && object.previous_connection_id !== null) {
      message.previousConnectionId = object.previous_connection_id;
    }
    if (object.client_state !== undefined && object.client_state !== null) {
      message.clientState = Any.fromAmino(object.client_state);
    }
    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = Counterparty.fromAmino(object.counterparty);
    }
    if (object.delay_period !== undefined && object.delay_period !== null) {
      message.delayPeriod = BigInt(object.delay_period);
    }
    message.counterpartyVersions = object.counterparty_versions?.map(e => Version.fromAmino(e)) || [];
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.proof_init !== undefined && object.proof_init !== null) {
      message.proofInit = bytesFromBase64(object.proof_init);
    }
    if (object.proof_client !== undefined && object.proof_client !== null) {
      message.proofClient = bytesFromBase64(object.proof_client);
    }
    if (object.proof_consensus !== undefined && object.proof_consensus !== null) {
      message.proofConsensus = bytesFromBase64(object.proof_consensus);
    }
    if (object.consensus_height !== undefined && object.consensus_height !== null) {
      message.consensusHeight = Height.fromAmino(object.consensus_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgConnectionOpenTry): MsgConnectionOpenTryAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.previous_connection_id = message.previousConnectionId === "" ? undefined : message.previousConnectionId;
    obj.client_state = message.clientState ? Any.toAmino(message.clientState) : undefined;
    obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : undefined;
    obj.delay_period = message.delayPeriod !== BigInt(0) ? message.delayPeriod.toString() : undefined;
    if (message.counterpartyVersions) {
      obj.counterparty_versions = message.counterpartyVersions.map(e => e ? Version.toAmino(e) : undefined);
    } else {
      obj.counterparty_versions = message.counterpartyVersions;
    }
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.proof_init = message.proofInit ? base64FromBytes(message.proofInit) : undefined;
    obj.proof_client = message.proofClient ? base64FromBytes(message.proofClient) : undefined;
    obj.proof_consensus = message.proofConsensus ? base64FromBytes(message.proofConsensus) : undefined;
    obj.consensus_height = message.consensusHeight ? Height.toAmino(message.consensusHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgConnectionOpenTryAminoMsg): MsgConnectionOpenTry {
    return MsgConnectionOpenTry.fromAmino(object.value);
  },
  toAminoMsg(message: MsgConnectionOpenTry): MsgConnectionOpenTryAminoMsg {
    return {
      type: "cosmos-sdk/MsgConnectionOpenTry",
      value: MsgConnectionOpenTry.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgConnectionOpenTryProtoMsg): MsgConnectionOpenTry {
    return MsgConnectionOpenTry.decode(message.value);
  },
  toProto(message: MsgConnectionOpenTry): Uint8Array {
    return MsgConnectionOpenTry.encode(message).finish();
  },
  toProtoMsg(message: MsgConnectionOpenTry): MsgConnectionOpenTryProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
      value: MsgConnectionOpenTry.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgConnectionOpenTry.typeUrl, MsgConnectionOpenTry);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgConnectionOpenTry.aminoType, MsgConnectionOpenTry.typeUrl);
function createBaseMsgConnectionOpenTryResponse(): MsgConnectionOpenTryResponse {
  return {};
}
export const MsgConnectionOpenTryResponse = {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTryResponse",
  aminoType: "cosmos-sdk/MsgConnectionOpenTryResponse",
  is(o: any): o is MsgConnectionOpenTryResponse {
    return o && o.$typeUrl === MsgConnectionOpenTryResponse.typeUrl;
  },
  isSDK(o: any): o is MsgConnectionOpenTryResponseSDKType {
    return o && o.$typeUrl === MsgConnectionOpenTryResponse.typeUrl;
  },
  isAmino(o: any): o is MsgConnectionOpenTryResponseAmino {
    return o && o.$typeUrl === MsgConnectionOpenTryResponse.typeUrl;
  },
  encode(_: MsgConnectionOpenTryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConnectionOpenTryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenTryResponse();
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
  fromJSON(_: any): MsgConnectionOpenTryResponse {
    const obj = createBaseMsgConnectionOpenTryResponse();
    return obj;
  },
  toJSON(_: MsgConnectionOpenTryResponse): JsonSafe<MsgConnectionOpenTryResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgConnectionOpenTryResponse>): MsgConnectionOpenTryResponse {
    const message = createBaseMsgConnectionOpenTryResponse();
    return message;
  },
  fromSDK(_: MsgConnectionOpenTryResponseSDKType): MsgConnectionOpenTryResponse {
    return {};
  },
  toSDK(_: MsgConnectionOpenTryResponse): MsgConnectionOpenTryResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgConnectionOpenTryResponseAmino): MsgConnectionOpenTryResponse {
    const message = createBaseMsgConnectionOpenTryResponse();
    return message;
  },
  toAmino(_: MsgConnectionOpenTryResponse): MsgConnectionOpenTryResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConnectionOpenTryResponseAminoMsg): MsgConnectionOpenTryResponse {
    return MsgConnectionOpenTryResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgConnectionOpenTryResponse): MsgConnectionOpenTryResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgConnectionOpenTryResponse",
      value: MsgConnectionOpenTryResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgConnectionOpenTryResponseProtoMsg): MsgConnectionOpenTryResponse {
    return MsgConnectionOpenTryResponse.decode(message.value);
  },
  toProto(message: MsgConnectionOpenTryResponse): Uint8Array {
    return MsgConnectionOpenTryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConnectionOpenTryResponse): MsgConnectionOpenTryResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTryResponse",
      value: MsgConnectionOpenTryResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgConnectionOpenTryResponse.typeUrl, MsgConnectionOpenTryResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgConnectionOpenTryResponse.aminoType, MsgConnectionOpenTryResponse.typeUrl);
function createBaseMsgConnectionOpenAck(): MsgConnectionOpenAck {
  return {
    connectionId: "",
    counterpartyConnectionId: "",
    version: undefined,
    clientState: undefined,
    proofHeight: Height.fromPartial({}),
    proofTry: new Uint8Array(),
    proofClient: new Uint8Array(),
    proofConsensus: new Uint8Array(),
    consensusHeight: Height.fromPartial({}),
    signer: ""
  };
}
export const MsgConnectionOpenAck = {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
  aminoType: "cosmos-sdk/MsgConnectionOpenAck",
  is(o: any): o is MsgConnectionOpenAck {
    return o && (o.$typeUrl === MsgConnectionOpenAck.typeUrl || typeof o.connectionId === "string" && typeof o.counterpartyConnectionId === "string" && Height.is(o.proofHeight) && (o.proofTry instanceof Uint8Array || typeof o.proofTry === "string") && (o.proofClient instanceof Uint8Array || typeof o.proofClient === "string") && (o.proofConsensus instanceof Uint8Array || typeof o.proofConsensus === "string") && Height.is(o.consensusHeight) && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgConnectionOpenAckSDKType {
    return o && (o.$typeUrl === MsgConnectionOpenAck.typeUrl || typeof o.connection_id === "string" && typeof o.counterparty_connection_id === "string" && Height.isSDK(o.proof_height) && (o.proof_try instanceof Uint8Array || typeof o.proof_try === "string") && (o.proof_client instanceof Uint8Array || typeof o.proof_client === "string") && (o.proof_consensus instanceof Uint8Array || typeof o.proof_consensus === "string") && Height.isSDK(o.consensus_height) && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgConnectionOpenAckAmino {
    return o && (o.$typeUrl === MsgConnectionOpenAck.typeUrl || typeof o.connection_id === "string" && typeof o.counterparty_connection_id === "string" && Height.isAmino(o.proof_height) && (o.proof_try instanceof Uint8Array || typeof o.proof_try === "string") && (o.proof_client instanceof Uint8Array || typeof o.proof_client === "string") && (o.proof_consensus instanceof Uint8Array || typeof o.proof_consensus === "string") && Height.isAmino(o.consensus_height) && typeof o.signer === "string");
  },
  encode(message: MsgConnectionOpenAck, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connectionId !== undefined) {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.counterpartyConnectionId !== undefined) {
      writer.uint32(18).string(message.counterpartyConnectionId);
    }
    if (message.version !== undefined) {
      Version.encode(message.version, writer.uint32(26).fork()).ldelim();
    }
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(34).fork()).ldelim();
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(42).fork()).ldelim();
    }
    if (message.proofTry.length !== 0) {
      writer.uint32(50).bytes(message.proofTry);
    }
    if (message.proofClient.length !== 0) {
      writer.uint32(58).bytes(message.proofClient);
    }
    if (message.proofConsensus.length !== 0) {
      writer.uint32(66).bytes(message.proofConsensus);
    }
    if (message.consensusHeight !== undefined) {
      Height.encode(message.consensusHeight, writer.uint32(74).fork()).ldelim();
    }
    if (message.signer !== undefined) {
      writer.uint32(82).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConnectionOpenAck {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.counterpartyConnectionId = reader.string();
          break;
        case 3:
          message.version = Version.decode(reader, reader.uint32());
          break;
        case 4:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 5:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 6:
          message.proofTry = reader.bytes();
          break;
        case 7:
          message.proofClient = reader.bytes();
          break;
        case 8:
          message.proofConsensus = reader.bytes();
          break;
        case 9:
          message.consensusHeight = Height.decode(reader, reader.uint32());
          break;
        case 10:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgConnectionOpenAck {
    const obj = createBaseMsgConnectionOpenAck();
    if (isSet(object.connectionId)) obj.connectionId = String(object.connectionId);
    if (isSet(object.counterpartyConnectionId)) obj.counterpartyConnectionId = String(object.counterpartyConnectionId);
    if (isSet(object.version)) obj.version = Version.fromJSON(object.version);
    if (isSet(object.clientState)) obj.clientState = Any.fromJSON(object.clientState);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.proofTry)) obj.proofTry = bytesFromBase64(object.proofTry);
    if (isSet(object.proofClient)) obj.proofClient = bytesFromBase64(object.proofClient);
    if (isSet(object.proofConsensus)) obj.proofConsensus = bytesFromBase64(object.proofConsensus);
    if (isSet(object.consensusHeight)) obj.consensusHeight = Height.fromJSON(object.consensusHeight);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgConnectionOpenAck): JsonSafe<MsgConnectionOpenAck> {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.counterpartyConnectionId !== undefined && (obj.counterpartyConnectionId = message.counterpartyConnectionId);
    message.version !== undefined && (obj.version = message.version ? Version.toJSON(message.version) : undefined);
    message.clientState !== undefined && (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.proofTry !== undefined && (obj.proofTry = base64FromBytes(message.proofTry !== undefined ? message.proofTry : new Uint8Array()));
    message.proofClient !== undefined && (obj.proofClient = base64FromBytes(message.proofClient !== undefined ? message.proofClient : new Uint8Array()));
    message.proofConsensus !== undefined && (obj.proofConsensus = base64FromBytes(message.proofConsensus !== undefined ? message.proofConsensus : new Uint8Array()));
    message.consensusHeight !== undefined && (obj.consensusHeight = message.consensusHeight ? Height.toJSON(message.consensusHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgConnectionOpenAck>): MsgConnectionOpenAck {
    const message = createBaseMsgConnectionOpenAck();
    message.connectionId = object.connectionId ?? "";
    message.counterpartyConnectionId = object.counterpartyConnectionId ?? "";
    if (object.version !== undefined && object.version !== null) {
      message.version = Version.fromPartial(object.version);
    }
    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = Any.fromPartial(object.clientState);
    }
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    message.proofTry = object.proofTry ?? new Uint8Array();
    message.proofClient = object.proofClient ?? new Uint8Array();
    message.proofConsensus = object.proofConsensus ?? new Uint8Array();
    if (object.consensusHeight !== undefined && object.consensusHeight !== null) {
      message.consensusHeight = Height.fromPartial(object.consensusHeight);
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgConnectionOpenAckSDKType): MsgConnectionOpenAck {
    return {
      connectionId: object?.connection_id,
      counterpartyConnectionId: object?.counterparty_connection_id,
      version: object.version ? Version.fromSDK(object.version) : undefined,
      clientState: object.client_state ? Any.fromSDK(object.client_state) : undefined,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined,
      proofTry: object?.proof_try,
      proofClient: object?.proof_client,
      proofConsensus: object?.proof_consensus,
      consensusHeight: object.consensus_height ? Height.fromSDK(object.consensus_height) : undefined,
      signer: object?.signer
    };
  },
  toSDK(message: MsgConnectionOpenAck): MsgConnectionOpenAckSDKType {
    const obj: any = {};
    obj.connection_id = message.connectionId;
    obj.counterparty_connection_id = message.counterpartyConnectionId;
    message.version !== undefined && (obj.version = message.version ? Version.toSDK(message.version) : undefined);
    message.clientState !== undefined && (obj.client_state = message.clientState ? Any.toSDK(message.clientState) : undefined);
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    obj.proof_try = message.proofTry;
    obj.proof_client = message.proofClient;
    obj.proof_consensus = message.proofConsensus;
    message.consensusHeight !== undefined && (obj.consensus_height = message.consensusHeight ? Height.toSDK(message.consensusHeight) : undefined);
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgConnectionOpenAckAmino): MsgConnectionOpenAck {
    const message = createBaseMsgConnectionOpenAck();
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.counterparty_connection_id !== undefined && object.counterparty_connection_id !== null) {
      message.counterpartyConnectionId = object.counterparty_connection_id;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = Version.fromAmino(object.version);
    }
    if (object.client_state !== undefined && object.client_state !== null) {
      message.clientState = Any.fromAmino(object.client_state);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.proof_try !== undefined && object.proof_try !== null) {
      message.proofTry = bytesFromBase64(object.proof_try);
    }
    if (object.proof_client !== undefined && object.proof_client !== null) {
      message.proofClient = bytesFromBase64(object.proof_client);
    }
    if (object.proof_consensus !== undefined && object.proof_consensus !== null) {
      message.proofConsensus = bytesFromBase64(object.proof_consensus);
    }
    if (object.consensus_height !== undefined && object.consensus_height !== null) {
      message.consensusHeight = Height.fromAmino(object.consensus_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgConnectionOpenAck): MsgConnectionOpenAckAmino {
    const obj: any = {};
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    obj.counterparty_connection_id = message.counterpartyConnectionId === "" ? undefined : message.counterpartyConnectionId;
    obj.version = message.version ? Version.toAmino(message.version) : undefined;
    obj.client_state = message.clientState ? Any.toAmino(message.clientState) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.proof_try = message.proofTry ? base64FromBytes(message.proofTry) : undefined;
    obj.proof_client = message.proofClient ? base64FromBytes(message.proofClient) : undefined;
    obj.proof_consensus = message.proofConsensus ? base64FromBytes(message.proofConsensus) : undefined;
    obj.consensus_height = message.consensusHeight ? Height.toAmino(message.consensusHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgConnectionOpenAckAminoMsg): MsgConnectionOpenAck {
    return MsgConnectionOpenAck.fromAmino(object.value);
  },
  toAminoMsg(message: MsgConnectionOpenAck): MsgConnectionOpenAckAminoMsg {
    return {
      type: "cosmos-sdk/MsgConnectionOpenAck",
      value: MsgConnectionOpenAck.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgConnectionOpenAckProtoMsg): MsgConnectionOpenAck {
    return MsgConnectionOpenAck.decode(message.value);
  },
  toProto(message: MsgConnectionOpenAck): Uint8Array {
    return MsgConnectionOpenAck.encode(message).finish();
  },
  toProtoMsg(message: MsgConnectionOpenAck): MsgConnectionOpenAckProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
      value: MsgConnectionOpenAck.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgConnectionOpenAck.typeUrl, MsgConnectionOpenAck);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgConnectionOpenAck.aminoType, MsgConnectionOpenAck.typeUrl);
function createBaseMsgConnectionOpenAckResponse(): MsgConnectionOpenAckResponse {
  return {};
}
export const MsgConnectionOpenAckResponse = {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAckResponse",
  aminoType: "cosmos-sdk/MsgConnectionOpenAckResponse",
  is(o: any): o is MsgConnectionOpenAckResponse {
    return o && o.$typeUrl === MsgConnectionOpenAckResponse.typeUrl;
  },
  isSDK(o: any): o is MsgConnectionOpenAckResponseSDKType {
    return o && o.$typeUrl === MsgConnectionOpenAckResponse.typeUrl;
  },
  isAmino(o: any): o is MsgConnectionOpenAckResponseAmino {
    return o && o.$typeUrl === MsgConnectionOpenAckResponse.typeUrl;
  },
  encode(_: MsgConnectionOpenAckResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConnectionOpenAckResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenAckResponse();
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
  fromJSON(_: any): MsgConnectionOpenAckResponse {
    const obj = createBaseMsgConnectionOpenAckResponse();
    return obj;
  },
  toJSON(_: MsgConnectionOpenAckResponse): JsonSafe<MsgConnectionOpenAckResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgConnectionOpenAckResponse>): MsgConnectionOpenAckResponse {
    const message = createBaseMsgConnectionOpenAckResponse();
    return message;
  },
  fromSDK(_: MsgConnectionOpenAckResponseSDKType): MsgConnectionOpenAckResponse {
    return {};
  },
  toSDK(_: MsgConnectionOpenAckResponse): MsgConnectionOpenAckResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgConnectionOpenAckResponseAmino): MsgConnectionOpenAckResponse {
    const message = createBaseMsgConnectionOpenAckResponse();
    return message;
  },
  toAmino(_: MsgConnectionOpenAckResponse): MsgConnectionOpenAckResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConnectionOpenAckResponseAminoMsg): MsgConnectionOpenAckResponse {
    return MsgConnectionOpenAckResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgConnectionOpenAckResponse): MsgConnectionOpenAckResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgConnectionOpenAckResponse",
      value: MsgConnectionOpenAckResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgConnectionOpenAckResponseProtoMsg): MsgConnectionOpenAckResponse {
    return MsgConnectionOpenAckResponse.decode(message.value);
  },
  toProto(message: MsgConnectionOpenAckResponse): Uint8Array {
    return MsgConnectionOpenAckResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConnectionOpenAckResponse): MsgConnectionOpenAckResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAckResponse",
      value: MsgConnectionOpenAckResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgConnectionOpenAckResponse.typeUrl, MsgConnectionOpenAckResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgConnectionOpenAckResponse.aminoType, MsgConnectionOpenAckResponse.typeUrl);
function createBaseMsgConnectionOpenConfirm(): MsgConnectionOpenConfirm {
  return {
    connectionId: "",
    proofAck: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: ""
  };
}
export const MsgConnectionOpenConfirm = {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
  aminoType: "cosmos-sdk/MsgConnectionOpenConfirm",
  is(o: any): o is MsgConnectionOpenConfirm {
    return o && (o.$typeUrl === MsgConnectionOpenConfirm.typeUrl || typeof o.connectionId === "string" && (o.proofAck instanceof Uint8Array || typeof o.proofAck === "string") && Height.is(o.proofHeight) && typeof o.signer === "string");
  },
  isSDK(o: any): o is MsgConnectionOpenConfirmSDKType {
    return o && (o.$typeUrl === MsgConnectionOpenConfirm.typeUrl || typeof o.connection_id === "string" && (o.proof_ack instanceof Uint8Array || typeof o.proof_ack === "string") && Height.isSDK(o.proof_height) && typeof o.signer === "string");
  },
  isAmino(o: any): o is MsgConnectionOpenConfirmAmino {
    return o && (o.$typeUrl === MsgConnectionOpenConfirm.typeUrl || typeof o.connection_id === "string" && (o.proof_ack instanceof Uint8Array || typeof o.proof_ack === "string") && Height.isAmino(o.proof_height) && typeof o.signer === "string");
  },
  encode(message: MsgConnectionOpenConfirm, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.connectionId !== undefined) {
      writer.uint32(10).string(message.connectionId);
    }
    if (message.proofAck.length !== 0) {
      writer.uint32(18).bytes(message.proofAck);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== undefined) {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConnectionOpenConfirm {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connectionId = reader.string();
          break;
        case 2:
          message.proofAck = reader.bytes();
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
  fromJSON(object: any): MsgConnectionOpenConfirm {
    const obj = createBaseMsgConnectionOpenConfirm();
    if (isSet(object.connectionId)) obj.connectionId = String(object.connectionId);
    if (isSet(object.proofAck)) obj.proofAck = bytesFromBase64(object.proofAck);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgConnectionOpenConfirm): JsonSafe<MsgConnectionOpenConfirm> {
    const obj: any = {};
    message.connectionId !== undefined && (obj.connectionId = message.connectionId);
    message.proofAck !== undefined && (obj.proofAck = base64FromBytes(message.proofAck !== undefined ? message.proofAck : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgConnectionOpenConfirm>): MsgConnectionOpenConfirm {
    const message = createBaseMsgConnectionOpenConfirm();
    message.connectionId = object.connectionId ?? "";
    message.proofAck = object.proofAck ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromSDK(object: MsgConnectionOpenConfirmSDKType): MsgConnectionOpenConfirm {
    return {
      connectionId: object?.connection_id,
      proofAck: object?.proof_ack,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined,
      signer: object?.signer
    };
  },
  toSDK(message: MsgConnectionOpenConfirm): MsgConnectionOpenConfirmSDKType {
    const obj: any = {};
    obj.connection_id = message.connectionId;
    obj.proof_ack = message.proofAck;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    obj.signer = message.signer;
    return obj;
  },
  fromAmino(object: MsgConnectionOpenConfirmAmino): MsgConnectionOpenConfirm {
    const message = createBaseMsgConnectionOpenConfirm();
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connectionId = object.connection_id;
    }
    if (object.proof_ack !== undefined && object.proof_ack !== null) {
      message.proofAck = bytesFromBase64(object.proof_ack);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgConnectionOpenConfirm): MsgConnectionOpenConfirmAmino {
    const obj: any = {};
    obj.connection_id = message.connectionId === "" ? undefined : message.connectionId;
    obj.proof_ack = message.proofAck ? base64FromBytes(message.proofAck) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgConnectionOpenConfirmAminoMsg): MsgConnectionOpenConfirm {
    return MsgConnectionOpenConfirm.fromAmino(object.value);
  },
  toAminoMsg(message: MsgConnectionOpenConfirm): MsgConnectionOpenConfirmAminoMsg {
    return {
      type: "cosmos-sdk/MsgConnectionOpenConfirm",
      value: MsgConnectionOpenConfirm.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgConnectionOpenConfirmProtoMsg): MsgConnectionOpenConfirm {
    return MsgConnectionOpenConfirm.decode(message.value);
  },
  toProto(message: MsgConnectionOpenConfirm): Uint8Array {
    return MsgConnectionOpenConfirm.encode(message).finish();
  },
  toProtoMsg(message: MsgConnectionOpenConfirm): MsgConnectionOpenConfirmProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
      value: MsgConnectionOpenConfirm.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgConnectionOpenConfirm.typeUrl, MsgConnectionOpenConfirm);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgConnectionOpenConfirm.aminoType, MsgConnectionOpenConfirm.typeUrl);
function createBaseMsgConnectionOpenConfirmResponse(): MsgConnectionOpenConfirmResponse {
  return {};
}
export const MsgConnectionOpenConfirmResponse = {
  typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirmResponse",
  aminoType: "cosmos-sdk/MsgConnectionOpenConfirmResponse",
  is(o: any): o is MsgConnectionOpenConfirmResponse {
    return o && o.$typeUrl === MsgConnectionOpenConfirmResponse.typeUrl;
  },
  isSDK(o: any): o is MsgConnectionOpenConfirmResponseSDKType {
    return o && o.$typeUrl === MsgConnectionOpenConfirmResponse.typeUrl;
  },
  isAmino(o: any): o is MsgConnectionOpenConfirmResponseAmino {
    return o && o.$typeUrl === MsgConnectionOpenConfirmResponse.typeUrl;
  },
  encode(_: MsgConnectionOpenConfirmResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConnectionOpenConfirmResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConnectionOpenConfirmResponse();
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
  fromJSON(_: any): MsgConnectionOpenConfirmResponse {
    const obj = createBaseMsgConnectionOpenConfirmResponse();
    return obj;
  },
  toJSON(_: MsgConnectionOpenConfirmResponse): JsonSafe<MsgConnectionOpenConfirmResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgConnectionOpenConfirmResponse>): MsgConnectionOpenConfirmResponse {
    const message = createBaseMsgConnectionOpenConfirmResponse();
    return message;
  },
  fromSDK(_: MsgConnectionOpenConfirmResponseSDKType): MsgConnectionOpenConfirmResponse {
    return {};
  },
  toSDK(_: MsgConnectionOpenConfirmResponse): MsgConnectionOpenConfirmResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgConnectionOpenConfirmResponseAmino): MsgConnectionOpenConfirmResponse {
    const message = createBaseMsgConnectionOpenConfirmResponse();
    return message;
  },
  toAmino(_: MsgConnectionOpenConfirmResponse): MsgConnectionOpenConfirmResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgConnectionOpenConfirmResponseAminoMsg): MsgConnectionOpenConfirmResponse {
    return MsgConnectionOpenConfirmResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgConnectionOpenConfirmResponse): MsgConnectionOpenConfirmResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgConnectionOpenConfirmResponse",
      value: MsgConnectionOpenConfirmResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgConnectionOpenConfirmResponseProtoMsg): MsgConnectionOpenConfirmResponse {
    return MsgConnectionOpenConfirmResponse.decode(message.value);
  },
  toProto(message: MsgConnectionOpenConfirmResponse): Uint8Array {
    return MsgConnectionOpenConfirmResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgConnectionOpenConfirmResponse): MsgConnectionOpenConfirmResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirmResponse",
      value: MsgConnectionOpenConfirmResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgConnectionOpenConfirmResponse.typeUrl, MsgConnectionOpenConfirmResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgConnectionOpenConfirmResponse.aminoType, MsgConnectionOpenConfirmResponse.typeUrl);