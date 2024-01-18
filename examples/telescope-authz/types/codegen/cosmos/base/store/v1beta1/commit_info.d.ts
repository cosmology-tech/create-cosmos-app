import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */
export interface CommitInfo {
    version: bigint;
    storeInfos: StoreInfo[];
}
export interface CommitInfoProtoMsg {
    typeUrl: "/cosmos.base.store.v1beta1.CommitInfo";
    value: Uint8Array;
}
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */
export interface CommitInfoAmino {
    version?: string;
    store_infos?: StoreInfoAmino[];
}
export interface CommitInfoAminoMsg {
    type: "cosmos-sdk/CommitInfo";
    value: CommitInfoAmino;
}
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */
export interface CommitInfoSDKType {
    version: bigint;
    store_infos: StoreInfoSDKType[];
}
/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */
export interface StoreInfo {
    name: string;
    commitId: CommitID | undefined;
}
export interface StoreInfoProtoMsg {
    typeUrl: "/cosmos.base.store.v1beta1.StoreInfo";
    value: Uint8Array;
}
/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */
export interface StoreInfoAmino {
    name?: string;
    commit_id?: CommitIDAmino | undefined;
}
export interface StoreInfoAminoMsg {
    type: "cosmos-sdk/StoreInfo";
    value: StoreInfoAmino;
}
/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */
export interface StoreInfoSDKType {
    name: string;
    commit_id: CommitIDSDKType | undefined;
}
/**
 * CommitID defines the committment information when a specific store is
 * committed.
 */
export interface CommitID {
    version: bigint;
    hash: Uint8Array;
}
export interface CommitIDProtoMsg {
    typeUrl: "/cosmos.base.store.v1beta1.CommitID";
    value: Uint8Array;
}
/**
 * CommitID defines the committment information when a specific store is
 * committed.
 */
export interface CommitIDAmino {
    version?: string;
    hash?: string;
}
export interface CommitIDAminoMsg {
    type: "cosmos-sdk/CommitID";
    value: CommitIDAmino;
}
/**
 * CommitID defines the committment information when a specific store is
 * committed.
 */
export interface CommitIDSDKType {
    version: bigint;
    hash: Uint8Array;
}
export declare const CommitInfo: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is CommitInfo;
    isSDK(o: any): o is CommitInfoSDKType;
    isAmino(o: any): o is CommitInfoAmino;
    encode(message: CommitInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CommitInfo;
    fromJSON(object: any): CommitInfo;
    toJSON(message: CommitInfo): unknown;
    fromPartial(object: DeepPartial<CommitInfo>): CommitInfo;
    fromSDK(object: CommitInfoSDKType): CommitInfo;
    toSDK(message: CommitInfo): CommitInfoSDKType;
    fromAmino(object: CommitInfoAmino): CommitInfo;
    toAmino(message: CommitInfo): CommitInfoAmino;
    fromAminoMsg(object: CommitInfoAminoMsg): CommitInfo;
    toAminoMsg(message: CommitInfo): CommitInfoAminoMsg;
    fromProtoMsg(message: CommitInfoProtoMsg): CommitInfo;
    toProto(message: CommitInfo): Uint8Array;
    toProtoMsg(message: CommitInfo): CommitInfoProtoMsg;
};
export declare const StoreInfo: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is StoreInfo;
    isSDK(o: any): o is StoreInfoSDKType;
    isAmino(o: any): o is StoreInfoAmino;
    encode(message: StoreInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): StoreInfo;
    fromJSON(object: any): StoreInfo;
    toJSON(message: StoreInfo): unknown;
    fromPartial(object: DeepPartial<StoreInfo>): StoreInfo;
    fromSDK(object: StoreInfoSDKType): StoreInfo;
    toSDK(message: StoreInfo): StoreInfoSDKType;
    fromAmino(object: StoreInfoAmino): StoreInfo;
    toAmino(message: StoreInfo): StoreInfoAmino;
    fromAminoMsg(object: StoreInfoAminoMsg): StoreInfo;
    toAminoMsg(message: StoreInfo): StoreInfoAminoMsg;
    fromProtoMsg(message: StoreInfoProtoMsg): StoreInfo;
    toProto(message: StoreInfo): Uint8Array;
    toProtoMsg(message: StoreInfo): StoreInfoProtoMsg;
};
export declare const CommitID: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is CommitID;
    isSDK(o: any): o is CommitIDSDKType;
    isAmino(o: any): o is CommitIDAmino;
    encode(message: CommitID, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CommitID;
    fromJSON(object: any): CommitID;
    toJSON(message: CommitID): unknown;
    fromPartial(object: DeepPartial<CommitID>): CommitID;
    fromSDK(object: CommitIDSDKType): CommitID;
    toSDK(message: CommitID): CommitIDSDKType;
    fromAmino(object: CommitIDAmino): CommitID;
    toAmino(message: CommitID): CommitIDAmino;
    fromAminoMsg(object: CommitIDAminoMsg): CommitID;
    toAminoMsg(message: CommitID): CommitIDAminoMsg;
    fromProtoMsg(message: CommitIDProtoMsg): CommitID;
    toProto(message: CommitID): Uint8Array;
    toProtoMsg(message: CommitID): CommitIDProtoMsg;
};
