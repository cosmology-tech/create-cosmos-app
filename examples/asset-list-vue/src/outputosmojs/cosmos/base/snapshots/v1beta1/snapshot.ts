import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "cosmos.base.snapshots.v1beta1";
/** Snapshot contains Tendermint state sync snapshot info. */
export interface Snapshot {
  height: bigint;
  format: number;
  chunks: number;
  hash: Uint8Array;
  metadata: Metadata;
}
export interface SnapshotProtoMsg {
  typeUrl: "/cosmos.base.snapshots.v1beta1.Snapshot";
  value: Uint8Array;
}
/** Snapshot contains Tendermint state sync snapshot info. */
export interface SnapshotSDKType {
  height: bigint;
  format: number;
  chunks: number;
  hash: Uint8Array;
  metadata: MetadataSDKType;
}
/** Metadata contains SDK-specific snapshot metadata. */
export interface Metadata {
  /** SHA-256 chunk hashes */
  chunkHashes: Uint8Array[];
}
export interface MetadataProtoMsg {
  typeUrl: "/cosmos.base.snapshots.v1beta1.Metadata";
  value: Uint8Array;
}
/** Metadata contains SDK-specific snapshot metadata. */
export interface MetadataSDKType {
  chunk_hashes: Uint8Array[];
}
/** SnapshotItem is an item contained in a rootmulti.Store snapshot. */
export interface SnapshotItem {
  store?: SnapshotStoreItem;
  iavl?: SnapshotIAVLItem;
  extension?: SnapshotExtensionMeta;
  extensionPayload?: SnapshotExtensionPayload;
  kv?: SnapshotKVItem;
  schema?: SnapshotSchema;
}
export interface SnapshotItemProtoMsg {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotItem";
  value: Uint8Array;
}
/** SnapshotItem is an item contained in a rootmulti.Store snapshot. */
export interface SnapshotItemSDKType {
  store?: SnapshotStoreItemSDKType;
  iavl?: SnapshotIAVLItemSDKType;
  extension?: SnapshotExtensionMetaSDKType;
  extension_payload?: SnapshotExtensionPayloadSDKType;
  kv?: SnapshotKVItemSDKType;
  schema?: SnapshotSchemaSDKType;
}
/** SnapshotStoreItem contains metadata about a snapshotted store. */
export interface SnapshotStoreItem {
  name: string;
}
export interface SnapshotStoreItemProtoMsg {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotStoreItem";
  value: Uint8Array;
}
/** SnapshotStoreItem contains metadata about a snapshotted store. */
export interface SnapshotStoreItemSDKType {
  name: string;
}
/** SnapshotIAVLItem is an exported IAVL node. */
export interface SnapshotIAVLItem {
  key: Uint8Array;
  value: Uint8Array;
  /** version is block height */
  version: bigint;
  /** height is depth of the tree. */
  height: number;
}
export interface SnapshotIAVLItemProtoMsg {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotIAVLItem";
  value: Uint8Array;
}
/** SnapshotIAVLItem is an exported IAVL node. */
export interface SnapshotIAVLItemSDKType {
  key: Uint8Array;
  value: Uint8Array;
  version: bigint;
  height: number;
}
/** SnapshotExtensionMeta contains metadata about an external snapshotter. */
export interface SnapshotExtensionMeta {
  name: string;
  format: number;
}
export interface SnapshotExtensionMetaProtoMsg {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta";
  value: Uint8Array;
}
/** SnapshotExtensionMeta contains metadata about an external snapshotter. */
export interface SnapshotExtensionMetaSDKType {
  name: string;
  format: number;
}
/** SnapshotExtensionPayload contains payloads of an external snapshotter. */
export interface SnapshotExtensionPayload {
  payload: Uint8Array;
}
export interface SnapshotExtensionPayloadProtoMsg {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload";
  value: Uint8Array;
}
/** SnapshotExtensionPayload contains payloads of an external snapshotter. */
export interface SnapshotExtensionPayloadSDKType {
  payload: Uint8Array;
}
/** SnapshotKVItem is an exported Key/Value Pair */
export interface SnapshotKVItem {
  key: Uint8Array;
  value: Uint8Array;
}
export interface SnapshotKVItemProtoMsg {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotKVItem";
  value: Uint8Array;
}
/** SnapshotKVItem is an exported Key/Value Pair */
export interface SnapshotKVItemSDKType {
  key: Uint8Array;
  value: Uint8Array;
}
/** SnapshotSchema is an exported schema of smt store */
export interface SnapshotSchema {
  keys: Uint8Array[];
}
export interface SnapshotSchemaProtoMsg {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotSchema";
  value: Uint8Array;
}
/** SnapshotSchema is an exported schema of smt store */
export interface SnapshotSchemaSDKType {
  keys: Uint8Array[];
}
function createBaseSnapshot(): Snapshot {
  return {
    height: BigInt(0),
    format: 0,
    chunks: 0,
    hash: new Uint8Array(),
    metadata: Metadata.fromPartial({})
  };
}
export const Snapshot = {
  typeUrl: "/cosmos.base.snapshots.v1beta1.Snapshot",
  encode(message: Snapshot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks);
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Snapshot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.uint64();
          break;
        case 2:
          message.format = reader.uint32();
          break;
        case 3:
          message.chunks = reader.uint32();
          break;
        case 4:
          message.hash = reader.bytes();
          break;
        case 5:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Snapshot {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      format: isSet(object.format) ? Number(object.format) : 0,
      chunks: isSet(object.chunks) ? Number(object.chunks) : 0,
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined
    };
  },
  toJSON(message: Snapshot): JsonSafe<Snapshot> {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.format !== undefined && (obj.format = Math.round(message.format));
    message.chunks !== undefined && (obj.chunks = Math.round(message.chunks));
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Snapshot>): Snapshot {
    const message = createBaseSnapshot();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.format = object.format ?? 0;
    message.chunks = object.chunks ?? 0;
    message.hash = object.hash ?? new Uint8Array();
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Metadata.fromPartial(object.metadata) : undefined;
    return message;
  },
  fromSDK(object: SnapshotSDKType): Snapshot {
    return {
      height: object?.height,
      format: object?.format,
      chunks: object?.chunks,
      hash: object?.hash,
      metadata: object.metadata ? Metadata.fromSDK(object.metadata) : undefined
    };
  },
  fromSDKJSON(object: any): SnapshotSDKType {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      format: isSet(object.format) ? Number(object.format) : 0,
      chunks: isSet(object.chunks) ? Number(object.chunks) : 0,
      hash: isSet(object.hash) ? bytesFromBase64(object.hash) : new Uint8Array(),
      metadata: isSet(object.metadata) ? Metadata.fromSDKJSON(object.metadata) : undefined
    };
  },
  toSDK(message: Snapshot): SnapshotSDKType {
    const obj: any = {};
    obj.height = message.height;
    obj.format = message.format;
    obj.chunks = message.chunks;
    obj.hash = message.hash;
    message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toSDK(message.metadata) : undefined);
    return obj;
  },
  fromAmino(object: SnapshotAmino): Snapshot {
    const message = createBaseSnapshot();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = object.format;
    }
    if (object.chunks !== undefined && object.chunks !== null) {
      message.chunks = object.chunks;
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromAmino(object.metadata);
    }
    return message;
  },
  toAmino(message: Snapshot): SnapshotAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.format = message.format === 0 ? undefined : message.format;
    obj.chunks = message.chunks === 0 ? undefined : message.chunks;
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: SnapshotAminoMsg): Snapshot {
    return Snapshot.fromAmino(object.value);
  },
  toAminoMsg(message: Snapshot): SnapshotAminoMsg {
    return {
      type: "cosmos-sdk/Snapshot",
      value: Snapshot.toAmino(message)
    };
  },
  fromProtoMsg(message: SnapshotProtoMsg): Snapshot {
    return Snapshot.decode(message.value);
  },
  toProto(message: Snapshot): Uint8Array {
    return Snapshot.encode(message).finish();
  },
  toProtoMsg(message: Snapshot): SnapshotProtoMsg {
    return {
      typeUrl: "/cosmos.base.snapshots.v1beta1.Snapshot",
      value: Snapshot.encode(message).finish()
    };
  }
};
function createBaseMetadata(): Metadata {
  return {
    chunkHashes: []
  };
}
export const Metadata = {
  typeUrl: "/cosmos.base.snapshots.v1beta1.Metadata",
  encode(message: Metadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.chunkHashes) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chunkHashes.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Metadata {
    return {
      chunkHashes: Array.isArray(object?.chunkHashes) ? object.chunkHashes.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  toJSON(message: Metadata): JsonSafe<Metadata> {
    const obj: any = {};
    if (message.chunkHashes) {
      obj.chunkHashes = message.chunkHashes.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.chunkHashes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Metadata>): Metadata {
    const message = createBaseMetadata();
    message.chunkHashes = object.chunkHashes?.map(e => e) || [];
    return message;
  },
  fromSDK(object: MetadataSDKType): Metadata {
    return {
      chunkHashes: Array.isArray(object?.chunk_hashes) ? object.chunk_hashes.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): MetadataSDKType {
    return {
      chunk_hashes: Array.isArray(object?.chunk_hashes) ? object.chunk_hashes.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  toSDK(message: Metadata): MetadataSDKType {
    const obj: any = {};
    if (message.chunkHashes) {
      obj.chunk_hashes = message.chunkHashes.map(e => e);
    } else {
      obj.chunk_hashes = [];
    }
    return obj;
  },
  fromAmino(object: MetadataAmino): Metadata {
    const message = createBaseMetadata();
    message.chunkHashes = object.chunk_hashes?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: Metadata): MetadataAmino {
    const obj: any = {};
    if (message.chunkHashes) {
      obj.chunk_hashes = message.chunkHashes.map(e => base64FromBytes(e));
    } else {
      obj.chunk_hashes = message.chunkHashes;
    }
    return obj;
  },
  fromAminoMsg(object: MetadataAminoMsg): Metadata {
    return Metadata.fromAmino(object.value);
  },
  toAminoMsg(message: Metadata): MetadataAminoMsg {
    return {
      type: "cosmos-sdk/Metadata",
      value: Metadata.toAmino(message)
    };
  },
  fromProtoMsg(message: MetadataProtoMsg): Metadata {
    return Metadata.decode(message.value);
  },
  toProto(message: Metadata): Uint8Array {
    return Metadata.encode(message).finish();
  },
  toProtoMsg(message: Metadata): MetadataProtoMsg {
    return {
      typeUrl: "/cosmos.base.snapshots.v1beta1.Metadata",
      value: Metadata.encode(message).finish()
    };
  }
};
function createBaseSnapshotItem(): SnapshotItem {
  return {
    store: undefined,
    iavl: undefined,
    extension: undefined,
    extensionPayload: undefined,
    kv: undefined,
    schema: undefined
  };
}
export const SnapshotItem = {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotItem",
  encode(message: SnapshotItem, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.store !== undefined) {
      SnapshotStoreItem.encode(message.store, writer.uint32(10).fork()).ldelim();
    }
    if (message.iavl !== undefined) {
      SnapshotIAVLItem.encode(message.iavl, writer.uint32(18).fork()).ldelim();
    }
    if (message.extension !== undefined) {
      SnapshotExtensionMeta.encode(message.extension, writer.uint32(26).fork()).ldelim();
    }
    if (message.extensionPayload !== undefined) {
      SnapshotExtensionPayload.encode(message.extensionPayload, writer.uint32(34).fork()).ldelim();
    }
    if (message.kv !== undefined) {
      SnapshotKVItem.encode(message.kv, writer.uint32(42).fork()).ldelim();
    }
    if (message.schema !== undefined) {
      SnapshotSchema.encode(message.schema, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SnapshotItem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.store = SnapshotStoreItem.decode(reader, reader.uint32());
          break;
        case 2:
          message.iavl = SnapshotIAVLItem.decode(reader, reader.uint32());
          break;
        case 3:
          message.extension = SnapshotExtensionMeta.decode(reader, reader.uint32());
          break;
        case 4:
          message.extensionPayload = SnapshotExtensionPayload.decode(reader, reader.uint32());
          break;
        case 5:
          message.kv = SnapshotKVItem.decode(reader, reader.uint32());
          break;
        case 6:
          message.schema = SnapshotSchema.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SnapshotItem {
    return {
      store: isSet(object.store) ? SnapshotStoreItem.fromJSON(object.store) : undefined,
      iavl: isSet(object.iavl) ? SnapshotIAVLItem.fromJSON(object.iavl) : undefined,
      extension: isSet(object.extension) ? SnapshotExtensionMeta.fromJSON(object.extension) : undefined,
      extensionPayload: isSet(object.extensionPayload) ? SnapshotExtensionPayload.fromJSON(object.extensionPayload) : undefined,
      kv: isSet(object.kv) ? SnapshotKVItem.fromJSON(object.kv) : undefined,
      schema: isSet(object.schema) ? SnapshotSchema.fromJSON(object.schema) : undefined
    };
  },
  toJSON(message: SnapshotItem): JsonSafe<SnapshotItem> {
    const obj: any = {};
    message.store !== undefined && (obj.store = message.store ? SnapshotStoreItem.toJSON(message.store) : undefined);
    message.iavl !== undefined && (obj.iavl = message.iavl ? SnapshotIAVLItem.toJSON(message.iavl) : undefined);
    message.extension !== undefined && (obj.extension = message.extension ? SnapshotExtensionMeta.toJSON(message.extension) : undefined);
    message.extensionPayload !== undefined && (obj.extensionPayload = message.extensionPayload ? SnapshotExtensionPayload.toJSON(message.extensionPayload) : undefined);
    message.kv !== undefined && (obj.kv = message.kv ? SnapshotKVItem.toJSON(message.kv) : undefined);
    message.schema !== undefined && (obj.schema = message.schema ? SnapshotSchema.toJSON(message.schema) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<SnapshotItem>): SnapshotItem {
    const message = createBaseSnapshotItem();
    message.store = object.store !== undefined && object.store !== null ? SnapshotStoreItem.fromPartial(object.store) : undefined;
    message.iavl = object.iavl !== undefined && object.iavl !== null ? SnapshotIAVLItem.fromPartial(object.iavl) : undefined;
    message.extension = object.extension !== undefined && object.extension !== null ? SnapshotExtensionMeta.fromPartial(object.extension) : undefined;
    message.extensionPayload = object.extensionPayload !== undefined && object.extensionPayload !== null ? SnapshotExtensionPayload.fromPartial(object.extensionPayload) : undefined;
    message.kv = object.kv !== undefined && object.kv !== null ? SnapshotKVItem.fromPartial(object.kv) : undefined;
    message.schema = object.schema !== undefined && object.schema !== null ? SnapshotSchema.fromPartial(object.schema) : undefined;
    return message;
  },
  fromSDK(object: SnapshotItemSDKType): SnapshotItem {
    return {
      store: object.store ? SnapshotStoreItem.fromSDK(object.store) : undefined,
      iavl: object.iavl ? SnapshotIAVLItem.fromSDK(object.iavl) : undefined,
      extension: object.extension ? SnapshotExtensionMeta.fromSDK(object.extension) : undefined,
      extensionPayload: object.extension_payload ? SnapshotExtensionPayload.fromSDK(object.extension_payload) : undefined,
      kv: object.kv ? SnapshotKVItem.fromSDK(object.kv) : undefined,
      schema: object.schema ? SnapshotSchema.fromSDK(object.schema) : undefined
    };
  },
  fromSDKJSON(object: any): SnapshotItemSDKType {
    return {
      store: isSet(object.store) ? SnapshotStoreItem.fromSDKJSON(object.store) : undefined,
      iavl: isSet(object.iavl) ? SnapshotIAVLItem.fromSDKJSON(object.iavl) : undefined,
      extension: isSet(object.extension) ? SnapshotExtensionMeta.fromSDKJSON(object.extension) : undefined,
      extension_payload: isSet(object.extension_payload) ? SnapshotExtensionPayload.fromSDKJSON(object.extension_payload) : undefined,
      kv: isSet(object.kv) ? SnapshotKVItem.fromSDKJSON(object.kv) : undefined,
      schema: isSet(object.schema) ? SnapshotSchema.fromSDKJSON(object.schema) : undefined
    };
  },
  toSDK(message: SnapshotItem): SnapshotItemSDKType {
    const obj: any = {};
    message.store !== undefined && (obj.store = message.store ? SnapshotStoreItem.toSDK(message.store) : undefined);
    message.iavl !== undefined && (obj.iavl = message.iavl ? SnapshotIAVLItem.toSDK(message.iavl) : undefined);
    message.extension !== undefined && (obj.extension = message.extension ? SnapshotExtensionMeta.toSDK(message.extension) : undefined);
    message.extensionPayload !== undefined && (obj.extension_payload = message.extensionPayload ? SnapshotExtensionPayload.toSDK(message.extensionPayload) : undefined);
    message.kv !== undefined && (obj.kv = message.kv ? SnapshotKVItem.toSDK(message.kv) : undefined);
    message.schema !== undefined && (obj.schema = message.schema ? SnapshotSchema.toSDK(message.schema) : undefined);
    return obj;
  },
  fromAmino(object: SnapshotItemAmino): SnapshotItem {
    const message = createBaseSnapshotItem();
    if (object.store !== undefined && object.store !== null) {
      message.store = SnapshotStoreItem.fromAmino(object.store);
    }
    if (object.iavl !== undefined && object.iavl !== null) {
      message.iavl = SnapshotIAVLItem.fromAmino(object.iavl);
    }
    if (object.extension !== undefined && object.extension !== null) {
      message.extension = SnapshotExtensionMeta.fromAmino(object.extension);
    }
    if (object.extension_payload !== undefined && object.extension_payload !== null) {
      message.extensionPayload = SnapshotExtensionPayload.fromAmino(object.extension_payload);
    }
    if (object.kv !== undefined && object.kv !== null) {
      message.kv = SnapshotKVItem.fromAmino(object.kv);
    }
    if (object.schema !== undefined && object.schema !== null) {
      message.schema = SnapshotSchema.fromAmino(object.schema);
    }
    return message;
  },
  toAmino(message: SnapshotItem): SnapshotItemAmino {
    const obj: any = {};
    obj.store = message.store ? SnapshotStoreItem.toAmino(message.store) : undefined;
    obj.iavl = message.iavl ? SnapshotIAVLItem.toAmino(message.iavl) : undefined;
    obj.extension = message.extension ? SnapshotExtensionMeta.toAmino(message.extension) : undefined;
    obj.extension_payload = message.extensionPayload ? SnapshotExtensionPayload.toAmino(message.extensionPayload) : undefined;
    obj.kv = message.kv ? SnapshotKVItem.toAmino(message.kv) : undefined;
    obj.schema = message.schema ? SnapshotSchema.toAmino(message.schema) : undefined;
    return obj;
  },
  fromAminoMsg(object: SnapshotItemAminoMsg): SnapshotItem {
    return SnapshotItem.fromAmino(object.value);
  },
  toAminoMsg(message: SnapshotItem): SnapshotItemAminoMsg {
    return {
      type: "cosmos-sdk/SnapshotItem",
      value: SnapshotItem.toAmino(message)
    };
  },
  fromProtoMsg(message: SnapshotItemProtoMsg): SnapshotItem {
    return SnapshotItem.decode(message.value);
  },
  toProto(message: SnapshotItem): Uint8Array {
    return SnapshotItem.encode(message).finish();
  },
  toProtoMsg(message: SnapshotItem): SnapshotItemProtoMsg {
    return {
      typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotItem",
      value: SnapshotItem.encode(message).finish()
    };
  }
};
function createBaseSnapshotStoreItem(): SnapshotStoreItem {
  return {
    name: ""
  };
}
export const SnapshotStoreItem = {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotStoreItem",
  encode(message: SnapshotStoreItem, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SnapshotStoreItem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotStoreItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SnapshotStoreItem {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toJSON(message: SnapshotStoreItem): JsonSafe<SnapshotStoreItem> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: DeepPartial<SnapshotStoreItem>): SnapshotStoreItem {
    const message = createBaseSnapshotStoreItem();
    message.name = object.name ?? "";
    return message;
  },
  fromSDK(object: SnapshotStoreItemSDKType): SnapshotStoreItem {
    return {
      name: object?.name
    };
  },
  fromSDKJSON(object: any): SnapshotStoreItemSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toSDK(message: SnapshotStoreItem): SnapshotStoreItemSDKType {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  },
  fromAmino(object: SnapshotStoreItemAmino): SnapshotStoreItem {
    const message = createBaseSnapshotStoreItem();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: SnapshotStoreItem): SnapshotStoreItemAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: SnapshotStoreItemAminoMsg): SnapshotStoreItem {
    return SnapshotStoreItem.fromAmino(object.value);
  },
  toAminoMsg(message: SnapshotStoreItem): SnapshotStoreItemAminoMsg {
    return {
      type: "cosmos-sdk/SnapshotStoreItem",
      value: SnapshotStoreItem.toAmino(message)
    };
  },
  fromProtoMsg(message: SnapshotStoreItemProtoMsg): SnapshotStoreItem {
    return SnapshotStoreItem.decode(message.value);
  },
  toProto(message: SnapshotStoreItem): Uint8Array {
    return SnapshotStoreItem.encode(message).finish();
  },
  toProtoMsg(message: SnapshotStoreItem): SnapshotStoreItemProtoMsg {
    return {
      typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotStoreItem",
      value: SnapshotStoreItem.encode(message).finish()
    };
  }
};
function createBaseSnapshotIAVLItem(): SnapshotIAVLItem {
  return {
    key: new Uint8Array(),
    value: new Uint8Array(),
    version: BigInt(0),
    height: 0
  };
}
export const SnapshotIAVLItem = {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotIAVLItem",
  encode(message: SnapshotIAVLItem, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    if (message.version !== BigInt(0)) {
      writer.uint32(24).int64(message.version);
    }
    if (message.height !== 0) {
      writer.uint32(32).int32(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SnapshotIAVLItem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotIAVLItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        case 3:
          message.version = reader.int64();
          break;
        case 4:
          message.height = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SnapshotIAVLItem {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
      version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt(0),
      height: isSet(object.height) ? Number(object.height) : 0
    };
  },
  toJSON(message: SnapshotIAVLItem): JsonSafe<SnapshotIAVLItem> {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    message.version !== undefined && (obj.version = (message.version || BigInt(0)).toString());
    message.height !== undefined && (obj.height = Math.round(message.height));
    return obj;
  },
  fromPartial(object: DeepPartial<SnapshotIAVLItem>): SnapshotIAVLItem {
    const message = createBaseSnapshotIAVLItem();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    message.version = object.version !== undefined && object.version !== null ? BigInt(object.version.toString()) : BigInt(0);
    message.height = object.height ?? 0;
    return message;
  },
  fromSDK(object: SnapshotIAVLItemSDKType): SnapshotIAVLItem {
    return {
      key: object?.key,
      value: object?.value,
      version: object?.version,
      height: object?.height
    };
  },
  fromSDKJSON(object: any): SnapshotIAVLItemSDKType {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array(),
      version: isSet(object.version) ? BigInt(object.version.toString()) : BigInt(0),
      height: isSet(object.height) ? Number(object.height) : 0
    };
  },
  toSDK(message: SnapshotIAVLItem): SnapshotIAVLItemSDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    obj.version = message.version;
    obj.height = message.height;
    return obj;
  },
  fromAmino(object: SnapshotIAVLItemAmino): SnapshotIAVLItem {
    const message = createBaseSnapshotIAVLItem();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version);
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    }
    return message;
  },
  toAmino(message: SnapshotIAVLItem): SnapshotIAVLItemAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    obj.version = message.version !== BigInt(0) ? message.version?.toString() : undefined;
    obj.height = message.height === 0 ? undefined : message.height;
    return obj;
  },
  fromAminoMsg(object: SnapshotIAVLItemAminoMsg): SnapshotIAVLItem {
    return SnapshotIAVLItem.fromAmino(object.value);
  },
  toAminoMsg(message: SnapshotIAVLItem): SnapshotIAVLItemAminoMsg {
    return {
      type: "cosmos-sdk/SnapshotIAVLItem",
      value: SnapshotIAVLItem.toAmino(message)
    };
  },
  fromProtoMsg(message: SnapshotIAVLItemProtoMsg): SnapshotIAVLItem {
    return SnapshotIAVLItem.decode(message.value);
  },
  toProto(message: SnapshotIAVLItem): Uint8Array {
    return SnapshotIAVLItem.encode(message).finish();
  },
  toProtoMsg(message: SnapshotIAVLItem): SnapshotIAVLItemProtoMsg {
    return {
      typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotIAVLItem",
      value: SnapshotIAVLItem.encode(message).finish()
    };
  }
};
function createBaseSnapshotExtensionMeta(): SnapshotExtensionMeta {
  return {
    name: "",
    format: 0
  };
}
export const SnapshotExtensionMeta = {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta",
  encode(message: SnapshotExtensionMeta, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SnapshotExtensionMeta {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotExtensionMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.format = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SnapshotExtensionMeta {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      format: isSet(object.format) ? Number(object.format) : 0
    };
  },
  toJSON(message: SnapshotExtensionMeta): JsonSafe<SnapshotExtensionMeta> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.format !== undefined && (obj.format = Math.round(message.format));
    return obj;
  },
  fromPartial(object: DeepPartial<SnapshotExtensionMeta>): SnapshotExtensionMeta {
    const message = createBaseSnapshotExtensionMeta();
    message.name = object.name ?? "";
    message.format = object.format ?? 0;
    return message;
  },
  fromSDK(object: SnapshotExtensionMetaSDKType): SnapshotExtensionMeta {
    return {
      name: object?.name,
      format: object?.format
    };
  },
  fromSDKJSON(object: any): SnapshotExtensionMetaSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      format: isSet(object.format) ? Number(object.format) : 0
    };
  },
  toSDK(message: SnapshotExtensionMeta): SnapshotExtensionMetaSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.format = message.format;
    return obj;
  },
  fromAmino(object: SnapshotExtensionMetaAmino): SnapshotExtensionMeta {
    const message = createBaseSnapshotExtensionMeta();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = object.format;
    }
    return message;
  },
  toAmino(message: SnapshotExtensionMeta): SnapshotExtensionMetaAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.format = message.format === 0 ? undefined : message.format;
    return obj;
  },
  fromAminoMsg(object: SnapshotExtensionMetaAminoMsg): SnapshotExtensionMeta {
    return SnapshotExtensionMeta.fromAmino(object.value);
  },
  toAminoMsg(message: SnapshotExtensionMeta): SnapshotExtensionMetaAminoMsg {
    return {
      type: "cosmos-sdk/SnapshotExtensionMeta",
      value: SnapshotExtensionMeta.toAmino(message)
    };
  },
  fromProtoMsg(message: SnapshotExtensionMetaProtoMsg): SnapshotExtensionMeta {
    return SnapshotExtensionMeta.decode(message.value);
  },
  toProto(message: SnapshotExtensionMeta): Uint8Array {
    return SnapshotExtensionMeta.encode(message).finish();
  },
  toProtoMsg(message: SnapshotExtensionMeta): SnapshotExtensionMetaProtoMsg {
    return {
      typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionMeta",
      value: SnapshotExtensionMeta.encode(message).finish()
    };
  }
};
function createBaseSnapshotExtensionPayload(): SnapshotExtensionPayload {
  return {
    payload: new Uint8Array()
  };
}
export const SnapshotExtensionPayload = {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload",
  encode(message: SnapshotExtensionPayload, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.payload.length !== 0) {
      writer.uint32(10).bytes(message.payload);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SnapshotExtensionPayload {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotExtensionPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SnapshotExtensionPayload {
    return {
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array()
    };
  },
  toJSON(message: SnapshotExtensionPayload): JsonSafe<SnapshotExtensionPayload> {
    const obj: any = {};
    message.payload !== undefined && (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<SnapshotExtensionPayload>): SnapshotExtensionPayload {
    const message = createBaseSnapshotExtensionPayload();
    message.payload = object.payload ?? new Uint8Array();
    return message;
  },
  fromSDK(object: SnapshotExtensionPayloadSDKType): SnapshotExtensionPayload {
    return {
      payload: object?.payload
    };
  },
  fromSDKJSON(object: any): SnapshotExtensionPayloadSDKType {
    return {
      payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array()
    };
  },
  toSDK(message: SnapshotExtensionPayload): SnapshotExtensionPayloadSDKType {
    const obj: any = {};
    obj.payload = message.payload;
    return obj;
  },
  fromAmino(object: SnapshotExtensionPayloadAmino): SnapshotExtensionPayload {
    const message = createBaseSnapshotExtensionPayload();
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = bytesFromBase64(object.payload);
    }
    return message;
  },
  toAmino(message: SnapshotExtensionPayload): SnapshotExtensionPayloadAmino {
    const obj: any = {};
    obj.payload = message.payload ? base64FromBytes(message.payload) : undefined;
    return obj;
  },
  fromAminoMsg(object: SnapshotExtensionPayloadAminoMsg): SnapshotExtensionPayload {
    return SnapshotExtensionPayload.fromAmino(object.value);
  },
  toAminoMsg(message: SnapshotExtensionPayload): SnapshotExtensionPayloadAminoMsg {
    return {
      type: "cosmos-sdk/SnapshotExtensionPayload",
      value: SnapshotExtensionPayload.toAmino(message)
    };
  },
  fromProtoMsg(message: SnapshotExtensionPayloadProtoMsg): SnapshotExtensionPayload {
    return SnapshotExtensionPayload.decode(message.value);
  },
  toProto(message: SnapshotExtensionPayload): Uint8Array {
    return SnapshotExtensionPayload.encode(message).finish();
  },
  toProtoMsg(message: SnapshotExtensionPayload): SnapshotExtensionPayloadProtoMsg {
    return {
      typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotExtensionPayload",
      value: SnapshotExtensionPayload.encode(message).finish()
    };
  }
};
function createBaseSnapshotKVItem(): SnapshotKVItem {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
export const SnapshotKVItem = {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotKVItem",
  encode(message: SnapshotKVItem, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SnapshotKVItem {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotKVItem();
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
  fromJSON(object: any): SnapshotKVItem {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  toJSON(message: SnapshotKVItem): JsonSafe<SnapshotKVItem> {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<SnapshotKVItem>): SnapshotKVItem {
    const message = createBaseSnapshotKVItem();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromSDK(object: SnapshotKVItemSDKType): SnapshotKVItem {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  fromSDKJSON(object: any): SnapshotKVItemSDKType {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  toSDK(message: SnapshotKVItem): SnapshotKVItemSDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: SnapshotKVItemAmino): SnapshotKVItem {
    const message = createBaseSnapshotKVItem();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    return message;
  },
  toAmino(message: SnapshotKVItem): SnapshotKVItemAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: SnapshotKVItemAminoMsg): SnapshotKVItem {
    return SnapshotKVItem.fromAmino(object.value);
  },
  toAminoMsg(message: SnapshotKVItem): SnapshotKVItemAminoMsg {
    return {
      type: "cosmos-sdk/SnapshotKVItem",
      value: SnapshotKVItem.toAmino(message)
    };
  },
  fromProtoMsg(message: SnapshotKVItemProtoMsg): SnapshotKVItem {
    return SnapshotKVItem.decode(message.value);
  },
  toProto(message: SnapshotKVItem): Uint8Array {
    return SnapshotKVItem.encode(message).finish();
  },
  toProtoMsg(message: SnapshotKVItem): SnapshotKVItemProtoMsg {
    return {
      typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotKVItem",
      value: SnapshotKVItem.encode(message).finish()
    };
  }
};
function createBaseSnapshotSchema(): SnapshotSchema {
  return {
    keys: []
  };
}
export const SnapshotSchema = {
  typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotSchema",
  encode(message: SnapshotSchema, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.keys) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SnapshotSchema {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSnapshotSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keys.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SnapshotSchema {
    return {
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  toJSON(message: SnapshotSchema): JsonSafe<SnapshotSchema> {
    const obj: any = {};
    if (message.keys) {
      obj.keys = message.keys.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.keys = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<SnapshotSchema>): SnapshotSchema {
    const message = createBaseSnapshotSchema();
    message.keys = object.keys?.map(e => e) || [];
    return message;
  },
  fromSDK(object: SnapshotSchemaSDKType): SnapshotSchema {
    return {
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): SnapshotSchemaSDKType {
    return {
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => bytesFromBase64(e)) : []
    };
  },
  toSDK(message: SnapshotSchema): SnapshotSchemaSDKType {
    const obj: any = {};
    if (message.keys) {
      obj.keys = message.keys.map(e => e);
    } else {
      obj.keys = [];
    }
    return obj;
  },
  fromAmino(object: SnapshotSchemaAmino): SnapshotSchema {
    const message = createBaseSnapshotSchema();
    message.keys = object.keys?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: SnapshotSchema): SnapshotSchemaAmino {
    const obj: any = {};
    if (message.keys) {
      obj.keys = message.keys.map(e => base64FromBytes(e));
    } else {
      obj.keys = message.keys;
    }
    return obj;
  },
  fromAminoMsg(object: SnapshotSchemaAminoMsg): SnapshotSchema {
    return SnapshotSchema.fromAmino(object.value);
  },
  toAminoMsg(message: SnapshotSchema): SnapshotSchemaAminoMsg {
    return {
      type: "cosmos-sdk/SnapshotSchema",
      value: SnapshotSchema.toAmino(message)
    };
  },
  fromProtoMsg(message: SnapshotSchemaProtoMsg): SnapshotSchema {
    return SnapshotSchema.decode(message.value);
  },
  toProto(message: SnapshotSchema): Uint8Array {
    return SnapshotSchema.encode(message).finish();
  },
  toProtoMsg(message: SnapshotSchema): SnapshotSchemaProtoMsg {
    return {
      typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotSchema",
      value: SnapshotSchema.encode(message).finish()
    };
  }
};