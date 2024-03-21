import { CapabilityOwners, CapabilityOwnersAmino, CapabilityOwnersSDKType } from "./capability";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwners {
    /** index is the index of the capability owner. */
    index: bigint;
    /** index_owners are the owners at the given index. */
    indexOwners: CapabilityOwners | undefined;
}
export interface GenesisOwnersProtoMsg {
    typeUrl: "/cosmos.capability.v1beta1.GenesisOwners";
    value: Uint8Array;
}
/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwnersAmino {
    /** index is the index of the capability owner. */
    index?: string;
    /** index_owners are the owners at the given index. */
    index_owners?: CapabilityOwnersAmino | undefined;
}
export interface GenesisOwnersAminoMsg {
    type: "cosmos-sdk/GenesisOwners";
    value: GenesisOwnersAmino;
}
/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwnersSDKType {
    index: bigint;
    index_owners: CapabilityOwnersSDKType | undefined;
}
/** GenesisState defines the capability module's genesis state. */
export interface GenesisState {
    /** index is the capability global index. */
    index: bigint;
    /**
     * owners represents a map from index to owners of the capability index
     * index key is string to allow amino marshalling.
     */
    owners: GenesisOwners[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/cosmos.capability.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the capability module's genesis state. */
export interface GenesisStateAmino {
    /** index is the capability global index. */
    index?: string;
    /**
     * owners represents a map from index to owners of the capability index
     * index key is string to allow amino marshalling.
     */
    owners?: GenesisOwnersAmino[];
}
export interface GenesisStateAminoMsg {
    type: "cosmos-sdk/GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the capability module's genesis state. */
export interface GenesisStateSDKType {
    index: bigint;
    owners: GenesisOwnersSDKType[];
}
export declare const GenesisOwners: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GenesisOwners;
    isSDK(o: any): o is GenesisOwnersSDKType;
    isAmino(o: any): o is GenesisOwnersAmino;
    encode(message: GenesisOwners, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisOwners;
    fromJSON(object: any): GenesisOwners;
    toJSON(message: GenesisOwners): unknown;
    fromPartial(object: DeepPartial<GenesisOwners>): GenesisOwners;
    fromSDK(object: GenesisOwnersSDKType): GenesisOwners;
    toSDK(message: GenesisOwners): GenesisOwnersSDKType;
    fromAmino(object: GenesisOwnersAmino): GenesisOwners;
    toAmino(message: GenesisOwners): GenesisOwnersAmino;
    fromAminoMsg(object: GenesisOwnersAminoMsg): GenesisOwners;
    toAminoMsg(message: GenesisOwners): GenesisOwnersAminoMsg;
    fromProtoMsg(message: GenesisOwnersProtoMsg): GenesisOwners;
    toProto(message: GenesisOwners): Uint8Array;
    toProtoMsg(message: GenesisOwners): GenesisOwnersProtoMsg;
};
export declare const GenesisState: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GenesisState;
    isSDK(o: any): o is GenesisStateSDKType;
    isAmino(o: any): o is GenesisStateAmino;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
    fromSDK(object: GenesisStateSDKType): GenesisState;
    toSDK(message: GenesisState): GenesisStateSDKType;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
