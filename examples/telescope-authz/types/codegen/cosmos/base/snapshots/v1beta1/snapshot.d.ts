import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/** Snapshot contains Tendermint state sync snapshot info. */
export interface Snapshot {
    height: bigint;
    format: number;
    chunks: number;
    hash: Uint8Array;
    metadata: Metadata | undefined;
}
export interface SnapshotProtoMsg {
    typeUrl: "/cosmos.base.snapshots.v1beta1.Snapshot";
    value: Uint8Array;
}
/** Snapshot contains Tendermint state sync snapshot info. */
export interface SnapshotAmino {
    height?: string;
    format?: number;
    chunks?: number;
    hash?: string;
    metadata?: MetadataAmino | undefined;
}
export interface SnapshotAminoMsg {
    type: "cosmos-sdk/Snapshot";
    value: SnapshotAmino;
}
/** Snapshot contains Tendermint state sync snapshot info. */
export interface SnapshotSDKType {
    height: bigint;
    format: number;
    chunks: number;
    hash: Uint8Array;
    metadata: MetadataSDKType | undefined;
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
export interface MetadataAmino {
    /** SHA-256 chunk hashes */
    chunk_hashes?: string[];
}
export interface MetadataAminoMsg {
    type: "cosmos-sdk/Metadata";
    value: MetadataAmino;
}
/** Metadata contains SDK-specific snapshot metadata. */
export interface MetadataSDKType {
    chunk_hashes: Uint8Array[];
}
/** SnapshotItem is an item contained in a rootmulti.Store snapshot. */
export interface SnapshotItem {
    store?: SnapshotStoreItem | undefined;
    iavl?: SnapshotIAVLItem | undefined;
    extension?: SnapshotExtensionMeta | undefined;
    extensionPayload?: SnapshotExtensionPayload | undefined;
    kv?: SnapshotKVItem | undefined;
    schema?: SnapshotSchema | undefined;
}
export interface SnapshotItemProtoMsg {
    typeUrl: "/cosmos.base.snapshots.v1beta1.SnapshotItem";
    value: Uint8Array;
}
/** SnapshotItem is an item contained in a rootmulti.Store snapshot. */
export interface SnapshotItemAmino {
    store?: SnapshotStoreItemAmino | undefined;
    iavl?: SnapshotIAVLItemAmino | undefined;
    extension?: SnapshotExtensionMetaAmino | undefined;
    extension_payload?: SnapshotExtensionPayloadAmino | undefined;
    kv?: SnapshotKVItemAmino | undefined;
    schema?: SnapshotSchemaAmino | undefined;
}
export interface SnapshotItemAminoMsg {
    type: "cosmos-sdk/SnapshotItem";
    value: SnapshotItemAmino;
}
/** SnapshotItem is an item contained in a rootmulti.Store snapshot. */
export interface SnapshotItemSDKType {
    store?: SnapshotStoreItemSDKType | undefined;
    iavl?: SnapshotIAVLItemSDKType | undefined;
    extension?: SnapshotExtensionMetaSDKType | undefined;
    extension_payload?: SnapshotExtensionPayloadSDKType | undefined;
    kv?: SnapshotKVItemSDKType | undefined;
    schema?: SnapshotSchemaSDKType | undefined;
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
export interface SnapshotStoreItemAmino {
    name?: string;
}
export interface SnapshotStoreItemAminoMsg {
    type: "cosmos-sdk/SnapshotStoreItem";
    value: SnapshotStoreItemAmino;
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
export interface SnapshotIAVLItemAmino {
    key?: string;
    value?: string;
    /** version is block height */
    version?: string;
    /** height is depth of the tree. */
    height?: number;
}
export interface SnapshotIAVLItemAminoMsg {
    type: "cosmos-sdk/SnapshotIAVLItem";
    value: SnapshotIAVLItemAmino;
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
export interface SnapshotExtensionMetaAmino {
    name?: string;
    format?: number;
}
export interface SnapshotExtensionMetaAminoMsg {
    type: "cosmos-sdk/SnapshotExtensionMeta";
    value: SnapshotExtensionMetaAmino;
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
export interface SnapshotExtensionPayloadAmino {
    payload?: string;
}
export interface SnapshotExtensionPayloadAminoMsg {
    type: "cosmos-sdk/SnapshotExtensionPayload";
    value: SnapshotExtensionPayloadAmino;
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
export interface SnapshotKVItemAmino {
    key?: string;
    value?: string;
}
export interface SnapshotKVItemAminoMsg {
    type: "cosmos-sdk/SnapshotKVItem";
    value: SnapshotKVItemAmino;
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
export interface SnapshotSchemaAmino {
    keys?: string[];
}
export interface SnapshotSchemaAminoMsg {
    type: "cosmos-sdk/SnapshotSchema";
    value: SnapshotSchemaAmino;
}
/** SnapshotSchema is an exported schema of smt store */
export interface SnapshotSchemaSDKType {
    keys: Uint8Array[];
}
export declare const Snapshot: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Snapshot;
    isSDK(o: any): o is SnapshotSDKType;
    isAmino(o: any): o is SnapshotAmino;
    encode(message: Snapshot, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Snapshot;
    fromJSON(object: any): Snapshot;
    toJSON(message: Snapshot): unknown;
    fromPartial(object: DeepPartial<Snapshot>): Snapshot;
    fromSDK(object: SnapshotSDKType): Snapshot;
    toSDK(message: Snapshot): SnapshotSDKType;
    fromAmino(object: SnapshotAmino): Snapshot;
    toAmino(message: Snapshot): SnapshotAmino;
    fromAminoMsg(object: SnapshotAminoMsg): Snapshot;
    toAminoMsg(message: Snapshot): SnapshotAminoMsg;
    fromProtoMsg(message: SnapshotProtoMsg): Snapshot;
    toProto(message: Snapshot): Uint8Array;
    toProtoMsg(message: Snapshot): SnapshotProtoMsg;
};
export declare const Metadata: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Metadata;
    isSDK(o: any): o is MetadataSDKType;
    isAmino(o: any): o is MetadataAmino;
    encode(message: Metadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Metadata;
    fromJSON(object: any): Metadata;
    toJSON(message: Metadata): unknown;
    fromPartial(object: DeepPartial<Metadata>): Metadata;
    fromSDK(object: MetadataSDKType): Metadata;
    toSDK(message: Metadata): MetadataSDKType;
    fromAmino(object: MetadataAmino): Metadata;
    toAmino(message: Metadata): MetadataAmino;
    fromAminoMsg(object: MetadataAminoMsg): Metadata;
    toAminoMsg(message: Metadata): MetadataAminoMsg;
    fromProtoMsg(message: MetadataProtoMsg): Metadata;
    toProto(message: Metadata): Uint8Array;
    toProtoMsg(message: Metadata): MetadataProtoMsg;
};
export declare const SnapshotItem: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is SnapshotItem;
    isSDK(o: any): o is SnapshotItemSDKType;
    isAmino(o: any): o is SnapshotItemAmino;
    encode(message: SnapshotItem, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SnapshotItem;
    fromJSON(object: any): SnapshotItem;
    toJSON(message: SnapshotItem): unknown;
    fromPartial(object: DeepPartial<SnapshotItem>): SnapshotItem;
    fromSDK(object: SnapshotItemSDKType): SnapshotItem;
    toSDK(message: SnapshotItem): SnapshotItemSDKType;
    fromAmino(object: SnapshotItemAmino): SnapshotItem;
    toAmino(message: SnapshotItem): SnapshotItemAmino;
    fromAminoMsg(object: SnapshotItemAminoMsg): SnapshotItem;
    toAminoMsg(message: SnapshotItem): SnapshotItemAminoMsg;
    fromProtoMsg(message: SnapshotItemProtoMsg): SnapshotItem;
    toProto(message: SnapshotItem): Uint8Array;
    toProtoMsg(message: SnapshotItem): SnapshotItemProtoMsg;
};
export declare const SnapshotStoreItem: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is SnapshotStoreItem;
    isSDK(o: any): o is SnapshotStoreItemSDKType;
    isAmino(o: any): o is SnapshotStoreItemAmino;
    encode(message: SnapshotStoreItem, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SnapshotStoreItem;
    fromJSON(object: any): SnapshotStoreItem;
    toJSON(message: SnapshotStoreItem): unknown;
    fromPartial(object: DeepPartial<SnapshotStoreItem>): SnapshotStoreItem;
    fromSDK(object: SnapshotStoreItemSDKType): SnapshotStoreItem;
    toSDK(message: SnapshotStoreItem): SnapshotStoreItemSDKType;
    fromAmino(object: SnapshotStoreItemAmino): SnapshotStoreItem;
    toAmino(message: SnapshotStoreItem): SnapshotStoreItemAmino;
    fromAminoMsg(object: SnapshotStoreItemAminoMsg): SnapshotStoreItem;
    toAminoMsg(message: SnapshotStoreItem): SnapshotStoreItemAminoMsg;
    fromProtoMsg(message: SnapshotStoreItemProtoMsg): SnapshotStoreItem;
    toProto(message: SnapshotStoreItem): Uint8Array;
    toProtoMsg(message: SnapshotStoreItem): SnapshotStoreItemProtoMsg;
};
export declare const SnapshotIAVLItem: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is SnapshotIAVLItem;
    isSDK(o: any): o is SnapshotIAVLItemSDKType;
    isAmino(o: any): o is SnapshotIAVLItemAmino;
    encode(message: SnapshotIAVLItem, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SnapshotIAVLItem;
    fromJSON(object: any): SnapshotIAVLItem;
    toJSON(message: SnapshotIAVLItem): unknown;
    fromPartial(object: DeepPartial<SnapshotIAVLItem>): SnapshotIAVLItem;
    fromSDK(object: SnapshotIAVLItemSDKType): SnapshotIAVLItem;
    toSDK(message: SnapshotIAVLItem): SnapshotIAVLItemSDKType;
    fromAmino(object: SnapshotIAVLItemAmino): SnapshotIAVLItem;
    toAmino(message: SnapshotIAVLItem): SnapshotIAVLItemAmino;
    fromAminoMsg(object: SnapshotIAVLItemAminoMsg): SnapshotIAVLItem;
    toAminoMsg(message: SnapshotIAVLItem): SnapshotIAVLItemAminoMsg;
    fromProtoMsg(message: SnapshotIAVLItemProtoMsg): SnapshotIAVLItem;
    toProto(message: SnapshotIAVLItem): Uint8Array;
    toProtoMsg(message: SnapshotIAVLItem): SnapshotIAVLItemProtoMsg;
};
export declare const SnapshotExtensionMeta: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is SnapshotExtensionMeta;
    isSDK(o: any): o is SnapshotExtensionMetaSDKType;
    isAmino(o: any): o is SnapshotExtensionMetaAmino;
    encode(message: SnapshotExtensionMeta, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SnapshotExtensionMeta;
    fromJSON(object: any): SnapshotExtensionMeta;
    toJSON(message: SnapshotExtensionMeta): unknown;
    fromPartial(object: DeepPartial<SnapshotExtensionMeta>): SnapshotExtensionMeta;
    fromSDK(object: SnapshotExtensionMetaSDKType): SnapshotExtensionMeta;
    toSDK(message: SnapshotExtensionMeta): SnapshotExtensionMetaSDKType;
    fromAmino(object: SnapshotExtensionMetaAmino): SnapshotExtensionMeta;
    toAmino(message: SnapshotExtensionMeta): SnapshotExtensionMetaAmino;
    fromAminoMsg(object: SnapshotExtensionMetaAminoMsg): SnapshotExtensionMeta;
    toAminoMsg(message: SnapshotExtensionMeta): SnapshotExtensionMetaAminoMsg;
    fromProtoMsg(message: SnapshotExtensionMetaProtoMsg): SnapshotExtensionMeta;
    toProto(message: SnapshotExtensionMeta): Uint8Array;
    toProtoMsg(message: SnapshotExtensionMeta): SnapshotExtensionMetaProtoMsg;
};
export declare const SnapshotExtensionPayload: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is SnapshotExtensionPayload;
    isSDK(o: any): o is SnapshotExtensionPayloadSDKType;
    isAmino(o: any): o is SnapshotExtensionPayloadAmino;
    encode(message: SnapshotExtensionPayload, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SnapshotExtensionPayload;
    fromJSON(object: any): SnapshotExtensionPayload;
    toJSON(message: SnapshotExtensionPayload): unknown;
    fromPartial(object: DeepPartial<SnapshotExtensionPayload>): SnapshotExtensionPayload;
    fromSDK(object: SnapshotExtensionPayloadSDKType): SnapshotExtensionPayload;
    toSDK(message: SnapshotExtensionPayload): SnapshotExtensionPayloadSDKType;
    fromAmino(object: SnapshotExtensionPayloadAmino): SnapshotExtensionPayload;
    toAmino(message: SnapshotExtensionPayload): SnapshotExtensionPayloadAmino;
    fromAminoMsg(object: SnapshotExtensionPayloadAminoMsg): SnapshotExtensionPayload;
    toAminoMsg(message: SnapshotExtensionPayload): SnapshotExtensionPayloadAminoMsg;
    fromProtoMsg(message: SnapshotExtensionPayloadProtoMsg): SnapshotExtensionPayload;
    toProto(message: SnapshotExtensionPayload): Uint8Array;
    toProtoMsg(message: SnapshotExtensionPayload): SnapshotExtensionPayloadProtoMsg;
};
export declare const SnapshotKVItem: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is SnapshotKVItem;
    isSDK(o: any): o is SnapshotKVItemSDKType;
    isAmino(o: any): o is SnapshotKVItemAmino;
    encode(message: SnapshotKVItem, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SnapshotKVItem;
    fromJSON(object: any): SnapshotKVItem;
    toJSON(message: SnapshotKVItem): unknown;
    fromPartial(object: DeepPartial<SnapshotKVItem>): SnapshotKVItem;
    fromSDK(object: SnapshotKVItemSDKType): SnapshotKVItem;
    toSDK(message: SnapshotKVItem): SnapshotKVItemSDKType;
    fromAmino(object: SnapshotKVItemAmino): SnapshotKVItem;
    toAmino(message: SnapshotKVItem): SnapshotKVItemAmino;
    fromAminoMsg(object: SnapshotKVItemAminoMsg): SnapshotKVItem;
    toAminoMsg(message: SnapshotKVItem): SnapshotKVItemAminoMsg;
    fromProtoMsg(message: SnapshotKVItemProtoMsg): SnapshotKVItem;
    toProto(message: SnapshotKVItem): Uint8Array;
    toProtoMsg(message: SnapshotKVItem): SnapshotKVItemProtoMsg;
};
export declare const SnapshotSchema: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is SnapshotSchema;
    isSDK(o: any): o is SnapshotSchemaSDKType;
    isAmino(o: any): o is SnapshotSchemaAmino;
    encode(message: SnapshotSchema, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SnapshotSchema;
    fromJSON(object: any): SnapshotSchema;
    toJSON(message: SnapshotSchema): unknown;
    fromPartial(object: DeepPartial<SnapshotSchema>): SnapshotSchema;
    fromSDK(object: SnapshotSchemaSDKType): SnapshotSchema;
    toSDK(message: SnapshotSchema): SnapshotSchemaSDKType;
    fromAmino(object: SnapshotSchemaAmino): SnapshotSchema;
    toAmino(message: SnapshotSchema): SnapshotSchemaAmino;
    fromAminoMsg(object: SnapshotSchemaAminoMsg): SnapshotSchema;
    toAminoMsg(message: SnapshotSchema): SnapshotSchemaAminoMsg;
    fromProtoMsg(message: SnapshotSchemaProtoMsg): SnapshotSchema;
    toProto(message: SnapshotSchema): Uint8Array;
    toProtoMsg(message: SnapshotSchema): SnapshotSchemaProtoMsg;
};
