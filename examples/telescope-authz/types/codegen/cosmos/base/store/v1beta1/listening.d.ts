import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 *
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPair {
    /** the store key for the KVStore this pair originates from */
    storeKey: string;
    /** true indicates a delete operation, false indicates a set operation */
    delete: boolean;
    key: Uint8Array;
    value: Uint8Array;
}
export interface StoreKVPairProtoMsg {
    typeUrl: "/cosmos.base.store.v1beta1.StoreKVPair";
    value: Uint8Array;
}
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 *
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPairAmino {
    /** the store key for the KVStore this pair originates from */
    store_key?: string;
    /** true indicates a delete operation, false indicates a set operation */
    delete?: boolean;
    key?: string;
    value?: string;
}
export interface StoreKVPairAminoMsg {
    type: "cosmos-sdk/StoreKVPair";
    value: StoreKVPairAmino;
}
/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 *
 * Since: cosmos-sdk 0.43
 */
export interface StoreKVPairSDKType {
    store_key: string;
    delete: boolean;
    key: Uint8Array;
    value: Uint8Array;
}
export declare const StoreKVPair: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is StoreKVPair;
    isSDK(o: any): o is StoreKVPairSDKType;
    isAmino(o: any): o is StoreKVPairAmino;
    encode(message: StoreKVPair, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): StoreKVPair;
    fromJSON(object: any): StoreKVPair;
    toJSON(message: StoreKVPair): unknown;
    fromPartial(object: DeepPartial<StoreKVPair>): StoreKVPair;
    fromSDK(object: StoreKVPairSDKType): StoreKVPair;
    toSDK(message: StoreKVPair): StoreKVPairSDKType;
    fromAmino(object: StoreKVPairAmino): StoreKVPair;
    toAmino(message: StoreKVPair): StoreKVPairAmino;
    fromAminoMsg(object: StoreKVPairAminoMsg): StoreKVPair;
    toAminoMsg(message: StoreKVPair): StoreKVPairAminoMsg;
    fromProtoMsg(message: StoreKVPairProtoMsg): StoreKVPair;
    toProto(message: StoreKVPair): Uint8Array;
    toProtoMsg(message: StoreKVPair): StoreKVPairProtoMsg;
};
