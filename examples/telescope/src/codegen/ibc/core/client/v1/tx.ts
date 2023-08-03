import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
/** MsgCreateClient defines a message to create an IBC client */
export interface MsgCreateClient {
  /** light client state */
  clientState: Any;
  /**
   * consensus state associated with the client that corresponds to a given
   * height.
   */
  consensusState: Any;
  /** signer address */
  signer: string;
}
/** MsgCreateClient defines a message to create an IBC client */
export interface MsgCreateClientSDKType {
  client_state: AnySDKType;
  consensus_state: AnySDKType;
  signer: string;
}
/** MsgCreateClientResponse defines the Msg/CreateClient response type. */
export interface MsgCreateClientResponse {}
/** MsgCreateClientResponse defines the Msg/CreateClient response type. */
export interface MsgCreateClientResponseSDKType {}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given header.
 */
export interface MsgUpdateClient {
  /** client unique identifier */
  clientId: string;
  /** header to update the light client */
  header: Any;
  /** signer address */
  signer: string;
}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given header.
 */
export interface MsgUpdateClientSDKType {
  client_id: string;
  header: AnySDKType;
  signer: string;
}
/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export interface MsgUpdateClientResponse {}
/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export interface MsgUpdateClientResponseSDKType {}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 */
export interface MsgUpgradeClient {
  /** client unique identifier */
  clientId: string;
  /** upgraded client state */
  clientState: Any;
  /**
   * upgraded consensus state, only contains enough information to serve as a
   * basis of trust in update logic
   */
  consensusState: Any;
  /** proof that old chain committed to new client */
  proofUpgradeClient: Uint8Array;
  /** proof that old chain committed to new consensus state */
  proofUpgradeConsensusState: Uint8Array;
  /** signer address */
  signer: string;
}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 */
export interface MsgUpgradeClientSDKType {
  client_id: string;
  client_state: AnySDKType;
  consensus_state: AnySDKType;
  proof_upgrade_client: Uint8Array;
  proof_upgrade_consensus_state: Uint8Array;
  signer: string;
}
/** MsgUpgradeClientResponse defines the Msg/UpgradeClient response type. */
export interface MsgUpgradeClientResponse {}
/** MsgUpgradeClientResponse defines the Msg/UpgradeClient response type. */
export interface MsgUpgradeClientResponseSDKType {}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 */
export interface MsgSubmitMisbehaviour {
  /** client unique identifier */
  clientId: string;
  /** misbehaviour used for freezing the light client */
  misbehaviour: Any;
  /** signer address */
  signer: string;
}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 */
export interface MsgSubmitMisbehaviourSDKType {
  client_id: string;
  misbehaviour: AnySDKType;
  signer: string;
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 */
export interface MsgSubmitMisbehaviourResponse {}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 */
export interface MsgSubmitMisbehaviourResponseSDKType {}
function createBaseMsgCreateClient(): MsgCreateClient {
  return {
    clientState: Any.fromPartial({}),
    consensusState: Any.fromPartial({}),
    signer: ""
  };
}
export const MsgCreateClient = {
  encode(message: MsgCreateClient, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClient {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.consensusState = Any.decode(reader, reader.uint32());
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
  fromJSON(object: any): MsgCreateClient {
    return {
      clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined,
      consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgCreateClient): unknown {
    const obj: any = {};
    message.clientState !== undefined && (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
    message.consensusState !== undefined && (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateClient>): MsgCreateClient {
    const message = createBaseMsgCreateClient();
    message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
    message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? Any.fromPartial(object.consensusState) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }
};
function createBaseMsgCreateClientResponse(): MsgCreateClientResponse {
  return {};
}
export const MsgCreateClientResponse = {
  encode(_: MsgCreateClientResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateClientResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClientResponse();
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
  fromJSON(_: any): MsgCreateClientResponse {
    return {};
  },
  toJSON(_: MsgCreateClientResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCreateClientResponse>): MsgCreateClientResponse {
    const message = createBaseMsgCreateClientResponse();
    return message;
  }
};
function createBaseMsgUpdateClient(): MsgUpdateClient {
  return {
    clientId: "",
    header: Any.fromPartial({}),
    signer: ""
  };
}
export const MsgUpdateClient = {
  encode(message: MsgUpdateClient, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.header !== undefined) {
      Any.encode(message.header, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClient {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.header = Any.decode(reader, reader.uint32());
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
  fromJSON(object: any): MsgUpdateClient {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      header: isSet(object.header) ? Any.fromJSON(object.header) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgUpdateClient): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.header !== undefined && (obj.header = message.header ? Any.toJSON(message.header) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateClient>): MsgUpdateClient {
    const message = createBaseMsgUpdateClient();
    message.clientId = object.clientId ?? "";
    message.header = object.header !== undefined && object.header !== null ? Any.fromPartial(object.header) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }
};
function createBaseMsgUpdateClientResponse(): MsgUpdateClientResponse {
  return {};
}
export const MsgUpdateClientResponse = {
  encode(_: MsgUpdateClientResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClientResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClientResponse();
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
  fromJSON(_: any): MsgUpdateClientResponse {
    return {};
  },
  toJSON(_: MsgUpdateClientResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateClientResponse>): MsgUpdateClientResponse {
    const message = createBaseMsgUpdateClientResponse();
    return message;
  }
};
function createBaseMsgUpgradeClient(): MsgUpgradeClient {
  return {
    clientId: "",
    clientState: Any.fromPartial({}),
    consensusState: Any.fromPartial({}),
    proofUpgradeClient: new Uint8Array(),
    proofUpgradeConsensusState: new Uint8Array(),
    signer: ""
  };
}
export const MsgUpgradeClient = {
  encode(message: MsgUpgradeClient, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
    }
    if (message.proofUpgradeClient.length !== 0) {
      writer.uint32(34).bytes(message.proofUpgradeClient);
    }
    if (message.proofUpgradeConsensusState.length !== 0) {
      writer.uint32(42).bytes(message.proofUpgradeConsensusState);
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpgradeClient {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradeClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.proofUpgradeClient = reader.bytes();
          break;
        case 5:
          message.proofUpgradeConsensusState = reader.bytes();
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
  fromJSON(object: any): MsgUpgradeClient {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined,
      consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : undefined,
      proofUpgradeClient: isSet(object.proofUpgradeClient) ? bytesFromBase64(object.proofUpgradeClient) : new Uint8Array(),
      proofUpgradeConsensusState: isSet(object.proofUpgradeConsensusState) ? bytesFromBase64(object.proofUpgradeConsensusState) : new Uint8Array(),
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgUpgradeClient): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.clientState !== undefined && (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
    message.consensusState !== undefined && (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : undefined);
    message.proofUpgradeClient !== undefined && (obj.proofUpgradeClient = base64FromBytes(message.proofUpgradeClient !== undefined ? message.proofUpgradeClient : new Uint8Array()));
    message.proofUpgradeConsensusState !== undefined && (obj.proofUpgradeConsensusState = base64FromBytes(message.proofUpgradeConsensusState !== undefined ? message.proofUpgradeConsensusState : new Uint8Array()));
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: Partial<MsgUpgradeClient>): MsgUpgradeClient {
    const message = createBaseMsgUpgradeClient();
    message.clientId = object.clientId ?? "";
    message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
    message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? Any.fromPartial(object.consensusState) : undefined;
    message.proofUpgradeClient = object.proofUpgradeClient ?? new Uint8Array();
    message.proofUpgradeConsensusState = object.proofUpgradeConsensusState ?? new Uint8Array();
    message.signer = object.signer ?? "";
    return message;
  }
};
function createBaseMsgUpgradeClientResponse(): MsgUpgradeClientResponse {
  return {};
}
export const MsgUpgradeClientResponse = {
  encode(_: MsgUpgradeClientResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpgradeClientResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradeClientResponse();
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
  fromJSON(_: any): MsgUpgradeClientResponse {
    return {};
  },
  toJSON(_: MsgUpgradeClientResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpgradeClientResponse>): MsgUpgradeClientResponse {
    const message = createBaseMsgUpgradeClientResponse();
    return message;
  }
};
function createBaseMsgSubmitMisbehaviour(): MsgSubmitMisbehaviour {
  return {
    clientId: "",
    misbehaviour: Any.fromPartial({}),
    signer: ""
  };
}
export const MsgSubmitMisbehaviour = {
  encode(message: MsgSubmitMisbehaviour, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.misbehaviour !== undefined) {
      Any.encode(message.misbehaviour, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitMisbehaviour {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitMisbehaviour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.misbehaviour = Any.decode(reader, reader.uint32());
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
  fromJSON(object: any): MsgSubmitMisbehaviour {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      misbehaviour: isSet(object.misbehaviour) ? Any.fromJSON(object.misbehaviour) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgSubmitMisbehaviour): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.misbehaviour !== undefined && (obj.misbehaviour = message.misbehaviour ? Any.toJSON(message.misbehaviour) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: Partial<MsgSubmitMisbehaviour>): MsgSubmitMisbehaviour {
    const message = createBaseMsgSubmitMisbehaviour();
    message.clientId = object.clientId ?? "";
    message.misbehaviour = object.misbehaviour !== undefined && object.misbehaviour !== null ? Any.fromPartial(object.misbehaviour) : undefined;
    message.signer = object.signer ?? "";
    return message;
  }
};
function createBaseMsgSubmitMisbehaviourResponse(): MsgSubmitMisbehaviourResponse {
  return {};
}
export const MsgSubmitMisbehaviourResponse = {
  encode(_: MsgSubmitMisbehaviourResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitMisbehaviourResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitMisbehaviourResponse();
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
  fromJSON(_: any): MsgSubmitMisbehaviourResponse {
    return {};
  },
  toJSON(_: MsgSubmitMisbehaviourResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSubmitMisbehaviourResponse>): MsgSubmitMisbehaviourResponse {
    const message = createBaseMsgSubmitMisbehaviourResponse();
    return message;
  }
};