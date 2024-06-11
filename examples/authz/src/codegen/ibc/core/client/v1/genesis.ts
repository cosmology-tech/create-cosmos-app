//@ts-nocheck
import { IdentifiedClientState, IdentifiedClientStateAmino, IdentifiedClientStateSDKType, ClientConsensusStates, ClientConsensusStatesAmino, ClientConsensusStatesSDKType, Params, ParamsAmino, ParamsSDKType } from "./client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "ibc.core.client.v1";
/** GenesisState defines the ibc client submodule's genesis state. */
export interface GenesisState {
  /** client states with their corresponding identifiers */
  clients: IdentifiedClientState[];
  /** consensus states from each client */
  clientsConsensus: ClientConsensusStates[];
  /** metadata from each client */
  clientsMetadata: IdentifiedGenesisMetadata[];
  params: Params;
  /** create localhost on initialization */
  createLocalhost: boolean;
  /** the sequence for the next generated client identifier */
  nextClientSequence: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/ibc.core.client.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the ibc client submodule's genesis state. */
export interface GenesisStateAmino {
  /** client states with their corresponding identifiers */
  clients?: IdentifiedClientStateAmino[];
  /** consensus states from each client */
  clients_consensus?: ClientConsensusStatesAmino[];
  /** metadata from each client */
  clients_metadata?: IdentifiedGenesisMetadataAmino[];
  params?: ParamsAmino;
  /** create localhost on initialization */
  create_localhost?: boolean;
  /** the sequence for the next generated client identifier */
  next_client_sequence?: string;
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the ibc client submodule's genesis state. */
export interface GenesisStateSDKType {
  clients: IdentifiedClientStateSDKType[];
  clients_consensus: ClientConsensusStatesSDKType[];
  clients_metadata: IdentifiedGenesisMetadataSDKType[];
  params: ParamsSDKType;
  create_localhost: boolean;
  next_client_sequence: bigint;
}
/**
 * GenesisMetadata defines the genesis type for metadata that clients may return
 * with ExportMetadata
 */
export interface GenesisMetadata {
  /** store key of metadata without clientID-prefix */
  key: Uint8Array;
  /** metadata value */
  value: Uint8Array;
}
export interface GenesisMetadataProtoMsg {
  typeUrl: "/ibc.core.client.v1.GenesisMetadata";
  value: Uint8Array;
}
/**
 * GenesisMetadata defines the genesis type for metadata that clients may return
 * with ExportMetadata
 */
export interface GenesisMetadataAmino {
  /** store key of metadata without clientID-prefix */
  key?: string;
  /** metadata value */
  value?: string;
}
export interface GenesisMetadataAminoMsg {
  type: "cosmos-sdk/GenesisMetadata";
  value: GenesisMetadataAmino;
}
/**
 * GenesisMetadata defines the genesis type for metadata that clients may return
 * with ExportMetadata
 */
export interface GenesisMetadataSDKType {
  key: Uint8Array;
  value: Uint8Array;
}
/**
 * IdentifiedGenesisMetadata has the client metadata with the corresponding
 * client id.
 */
export interface IdentifiedGenesisMetadata {
  clientId: string;
  clientMetadata: GenesisMetadata[];
}
export interface IdentifiedGenesisMetadataProtoMsg {
  typeUrl: "/ibc.core.client.v1.IdentifiedGenesisMetadata";
  value: Uint8Array;
}
/**
 * IdentifiedGenesisMetadata has the client metadata with the corresponding
 * client id.
 */
export interface IdentifiedGenesisMetadataAmino {
  client_id?: string;
  client_metadata?: GenesisMetadataAmino[];
}
export interface IdentifiedGenesisMetadataAminoMsg {
  type: "cosmos-sdk/IdentifiedGenesisMetadata";
  value: IdentifiedGenesisMetadataAmino;
}
/**
 * IdentifiedGenesisMetadata has the client metadata with the corresponding
 * client id.
 */
export interface IdentifiedGenesisMetadataSDKType {
  client_id: string;
  client_metadata: GenesisMetadataSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    clients: [],
    clientsConsensus: [],
    clientsMetadata: [],
    params: Params.fromPartial({}),
    createLocalhost: false,
    nextClientSequence: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/ibc.core.client.v1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.clients) && (!o.clients.length || IdentifiedClientState.is(o.clients[0])) && Array.isArray(o.clientsConsensus) && (!o.clientsConsensus.length || ClientConsensusStates.is(o.clientsConsensus[0])) && Array.isArray(o.clientsMetadata) && (!o.clientsMetadata.length || IdentifiedGenesisMetadata.is(o.clientsMetadata[0])) && Params.is(o.params) && typeof o.createLocalhost === "boolean" && typeof o.nextClientSequence === "bigint");
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.clients) && (!o.clients.length || IdentifiedClientState.isSDK(o.clients[0])) && Array.isArray(o.clients_consensus) && (!o.clients_consensus.length || ClientConsensusStates.isSDK(o.clients_consensus[0])) && Array.isArray(o.clients_metadata) && (!o.clients_metadata.length || IdentifiedGenesisMetadata.isSDK(o.clients_metadata[0])) && Params.isSDK(o.params) && typeof o.create_localhost === "boolean" && typeof o.next_client_sequence === "bigint");
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.clients) && (!o.clients.length || IdentifiedClientState.isAmino(o.clients[0])) && Array.isArray(o.clients_consensus) && (!o.clients_consensus.length || ClientConsensusStates.isAmino(o.clients_consensus[0])) && Array.isArray(o.clients_metadata) && (!o.clients_metadata.length || IdentifiedGenesisMetadata.isAmino(o.clients_metadata[0])) && Params.isAmino(o.params) && typeof o.create_localhost === "boolean" && typeof o.next_client_sequence === "bigint");
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.clients) {
      IdentifiedClientState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.clientsConsensus) {
      ClientConsensusStates.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.clientsMetadata) {
      IdentifiedGenesisMetadata.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    if (message.createLocalhost !== undefined) {
      writer.uint32(40).bool(message.createLocalhost);
    }
    if (message.nextClientSequence !== undefined) {
      writer.uint32(48).uint64(message.nextClientSequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clients.push(IdentifiedClientState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.clientsConsensus.push(ClientConsensusStates.decode(reader, reader.uint32()));
          break;
        case 3:
          message.clientsMetadata.push(IdentifiedGenesisMetadata.decode(reader, reader.uint32()));
          break;
        case 4:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 5:
          message.createLocalhost = reader.bool();
          break;
        case 6:
          message.nextClientSequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (Array.isArray(object?.clients)) obj.clients = object.clients.map((e: any) => IdentifiedClientState.fromJSON(e));
    if (Array.isArray(object?.clientsConsensus)) obj.clientsConsensus = object.clientsConsensus.map((e: any) => ClientConsensusStates.fromJSON(e));
    if (Array.isArray(object?.clientsMetadata)) obj.clientsMetadata = object.clientsMetadata.map((e: any) => IdentifiedGenesisMetadata.fromJSON(e));
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (isSet(object.createLocalhost)) obj.createLocalhost = Boolean(object.createLocalhost);
    if (isSet(object.nextClientSequence)) obj.nextClientSequence = BigInt(object.nextClientSequence.toString());
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.clients) {
      obj.clients = message.clients.map(e => e ? IdentifiedClientState.toJSON(e) : undefined);
    } else {
      obj.clients = [];
    }
    if (message.clientsConsensus) {
      obj.clientsConsensus = message.clientsConsensus.map(e => e ? ClientConsensusStates.toJSON(e) : undefined);
    } else {
      obj.clientsConsensus = [];
    }
    if (message.clientsMetadata) {
      obj.clientsMetadata = message.clientsMetadata.map(e => e ? IdentifiedGenesisMetadata.toJSON(e) : undefined);
    } else {
      obj.clientsMetadata = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.createLocalhost !== undefined && (obj.createLocalhost = message.createLocalhost);
    message.nextClientSequence !== undefined && (obj.nextClientSequence = (message.nextClientSequence || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.clients = object.clients?.map(e => IdentifiedClientState.fromPartial(e)) || [];
    message.clientsConsensus = object.clientsConsensus?.map(e => ClientConsensusStates.fromPartial(e)) || [];
    message.clientsMetadata = object.clientsMetadata?.map(e => IdentifiedGenesisMetadata.fromPartial(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.createLocalhost = object.createLocalhost ?? false;
    if (object.nextClientSequence !== undefined && object.nextClientSequence !== null) {
      message.nextClientSequence = BigInt(object.nextClientSequence.toString());
    }
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      clients: Array.isArray(object?.clients) ? object.clients.map((e: any) => IdentifiedClientState.fromSDK(e)) : [],
      clientsConsensus: Array.isArray(object?.clients_consensus) ? object.clients_consensus.map((e: any) => ClientConsensusStates.fromSDK(e)) : [],
      clientsMetadata: Array.isArray(object?.clients_metadata) ? object.clients_metadata.map((e: any) => IdentifiedGenesisMetadata.fromSDK(e)) : [],
      params: object.params ? Params.fromSDK(object.params) : undefined,
      createLocalhost: object?.create_localhost,
      nextClientSequence: object?.next_client_sequence
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    if (message.clients) {
      obj.clients = message.clients.map(e => e ? IdentifiedClientState.toSDK(e) : undefined);
    } else {
      obj.clients = [];
    }
    if (message.clientsConsensus) {
      obj.clients_consensus = message.clientsConsensus.map(e => e ? ClientConsensusStates.toSDK(e) : undefined);
    } else {
      obj.clients_consensus = [];
    }
    if (message.clientsMetadata) {
      obj.clients_metadata = message.clientsMetadata.map(e => e ? IdentifiedGenesisMetadata.toSDK(e) : undefined);
    } else {
      obj.clients_metadata = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    obj.create_localhost = message.createLocalhost;
    obj.next_client_sequence = message.nextClientSequence;
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.clients = object.clients?.map(e => IdentifiedClientState.fromAmino(e)) || [];
    message.clientsConsensus = object.clients_consensus?.map(e => ClientConsensusStates.fromAmino(e)) || [];
    message.clientsMetadata = object.clients_metadata?.map(e => IdentifiedGenesisMetadata.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.create_localhost !== undefined && object.create_localhost !== null) {
      message.createLocalhost = object.create_localhost;
    }
    if (object.next_client_sequence !== undefined && object.next_client_sequence !== null) {
      message.nextClientSequence = BigInt(object.next_client_sequence);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.clients) {
      obj.clients = message.clients.map(e => e ? IdentifiedClientState.toAmino(e) : undefined);
    } else {
      obj.clients = message.clients;
    }
    if (message.clientsConsensus) {
      obj.clients_consensus = message.clientsConsensus.map(e => e ? ClientConsensusStates.toAmino(e) : undefined);
    } else {
      obj.clients_consensus = message.clientsConsensus;
    }
    if (message.clientsMetadata) {
      obj.clients_metadata = message.clientsMetadata.map(e => e ? IdentifiedGenesisMetadata.toAmino(e) : undefined);
    } else {
      obj.clients_metadata = message.clientsMetadata;
    }
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.create_localhost = message.createLocalhost === false ? undefined : message.createLocalhost;
    obj.next_client_sequence = message.nextClientSequence !== BigInt(0) ? message.nextClientSequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);
function createBaseGenesisMetadata(): GenesisMetadata {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
export const GenesisMetadata = {
  typeUrl: "/ibc.core.client.v1.GenesisMetadata",
  aminoType: "cosmos-sdk/GenesisMetadata",
  is(o: any): o is GenesisMetadata {
    return o && (o.$typeUrl === GenesisMetadata.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string"));
  },
  isSDK(o: any): o is GenesisMetadataSDKType {
    return o && (o.$typeUrl === GenesisMetadata.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string"));
  },
  isAmino(o: any): o is GenesisMetadataAmino {
    return o && (o.$typeUrl === GenesisMetadata.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string"));
  },
  encode(message: GenesisMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisMetadata {
    const obj = createBaseGenesisMetadata();
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    if (isSet(object.value)) obj.value = bytesFromBase64(object.value);
    return obj;
  },
  toJSON(message: GenesisMetadata): JsonSafe<GenesisMetadata> {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisMetadata>): GenesisMetadata {
    const message = createBaseGenesisMetadata();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromSDK(object: GenesisMetadataSDKType): GenesisMetadata {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  toSDK(message: GenesisMetadata): GenesisMetadataSDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: GenesisMetadataAmino): GenesisMetadata {
    const message = createBaseGenesisMetadata();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message: GenesisMetadata): GenesisMetadataAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisMetadataAminoMsg): GenesisMetadata {
    return GenesisMetadata.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisMetadata): GenesisMetadataAminoMsg {
    return {
      type: "cosmos-sdk/GenesisMetadata",
      value: GenesisMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisMetadataProtoMsg): GenesisMetadata {
    return GenesisMetadata.decode(message.value);
  },
  toProto(message: GenesisMetadata): Uint8Array {
    return GenesisMetadata.encode(message).finish();
  },
  toProtoMsg(message: GenesisMetadata): GenesisMetadataProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.GenesisMetadata",
      value: GenesisMetadata.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisMetadata.typeUrl, GenesisMetadata);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisMetadata.aminoType, GenesisMetadata.typeUrl);
function createBaseIdentifiedGenesisMetadata(): IdentifiedGenesisMetadata {
  return {
    clientId: "",
    clientMetadata: []
  };
}
export const IdentifiedGenesisMetadata = {
  typeUrl: "/ibc.core.client.v1.IdentifiedGenesisMetadata",
  aminoType: "cosmos-sdk/IdentifiedGenesisMetadata",
  is(o: any): o is IdentifiedGenesisMetadata {
    return o && (o.$typeUrl === IdentifiedGenesisMetadata.typeUrl || typeof o.clientId === "string" && Array.isArray(o.clientMetadata) && (!o.clientMetadata.length || GenesisMetadata.is(o.clientMetadata[0])));
  },
  isSDK(o: any): o is IdentifiedGenesisMetadataSDKType {
    return o && (o.$typeUrl === IdentifiedGenesisMetadata.typeUrl || typeof o.client_id === "string" && Array.isArray(o.client_metadata) && (!o.client_metadata.length || GenesisMetadata.isSDK(o.client_metadata[0])));
  },
  isAmino(o: any): o is IdentifiedGenesisMetadataAmino {
    return o && (o.$typeUrl === IdentifiedGenesisMetadata.typeUrl || typeof o.client_id === "string" && Array.isArray(o.client_metadata) && (!o.client_metadata.length || GenesisMetadata.isAmino(o.client_metadata[0])));
  },
  encode(message: IdentifiedGenesisMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== undefined) {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.clientMetadata) {
      GenesisMetadata.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IdentifiedGenesisMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedGenesisMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientMetadata.push(GenesisMetadata.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IdentifiedGenesisMetadata {
    const obj = createBaseIdentifiedGenesisMetadata();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (Array.isArray(object?.clientMetadata)) obj.clientMetadata = object.clientMetadata.map((e: any) => GenesisMetadata.fromJSON(e));
    return obj;
  },
  toJSON(message: IdentifiedGenesisMetadata): JsonSafe<IdentifiedGenesisMetadata> {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    if (message.clientMetadata) {
      obj.clientMetadata = message.clientMetadata.map(e => e ? GenesisMetadata.toJSON(e) : undefined);
    } else {
      obj.clientMetadata = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<IdentifiedGenesisMetadata>): IdentifiedGenesisMetadata {
    const message = createBaseIdentifiedGenesisMetadata();
    message.clientId = object.clientId ?? "";
    message.clientMetadata = object.clientMetadata?.map(e => GenesisMetadata.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: IdentifiedGenesisMetadataSDKType): IdentifiedGenesisMetadata {
    return {
      clientId: object?.client_id,
      clientMetadata: Array.isArray(object?.client_metadata) ? object.client_metadata.map((e: any) => GenesisMetadata.fromSDK(e)) : []
    };
  },
  toSDK(message: IdentifiedGenesisMetadata): IdentifiedGenesisMetadataSDKType {
    const obj: any = {};
    obj.client_id = message.clientId;
    if (message.clientMetadata) {
      obj.client_metadata = message.clientMetadata.map(e => e ? GenesisMetadata.toSDK(e) : undefined);
    } else {
      obj.client_metadata = [];
    }
    return obj;
  },
  fromAmino(object: IdentifiedGenesisMetadataAmino): IdentifiedGenesisMetadata {
    const message = createBaseIdentifiedGenesisMetadata();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    message.clientMetadata = object.client_metadata?.map(e => GenesisMetadata.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: IdentifiedGenesisMetadata): IdentifiedGenesisMetadataAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    if (message.clientMetadata) {
      obj.client_metadata = message.clientMetadata.map(e => e ? GenesisMetadata.toAmino(e) : undefined);
    } else {
      obj.client_metadata = message.clientMetadata;
    }
    return obj;
  },
  fromAminoMsg(object: IdentifiedGenesisMetadataAminoMsg): IdentifiedGenesisMetadata {
    return IdentifiedGenesisMetadata.fromAmino(object.value);
  },
  toAminoMsg(message: IdentifiedGenesisMetadata): IdentifiedGenesisMetadataAminoMsg {
    return {
      type: "cosmos-sdk/IdentifiedGenesisMetadata",
      value: IdentifiedGenesisMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message: IdentifiedGenesisMetadataProtoMsg): IdentifiedGenesisMetadata {
    return IdentifiedGenesisMetadata.decode(message.value);
  },
  toProto(message: IdentifiedGenesisMetadata): Uint8Array {
    return IdentifiedGenesisMetadata.encode(message).finish();
  },
  toProtoMsg(message: IdentifiedGenesisMetadata): IdentifiedGenesisMetadataProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.IdentifiedGenesisMetadata",
      value: IdentifiedGenesisMetadata.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(IdentifiedGenesisMetadata.typeUrl, IdentifiedGenesisMetadata);
GlobalDecoderRegistry.registerAminoProtoMapping(IdentifiedGenesisMetadata.aminoType, IdentifiedGenesisMetadata.typeUrl);