import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 */
export interface Capability {
    index: bigint;
}
export interface CapabilityProtoMsg {
    typeUrl: "/cosmos.capability.v1beta1.Capability";
    value: Uint8Array;
}
/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 */
export interface CapabilityAmino {
    index?: string;
}
export interface CapabilityAminoMsg {
    type: "cosmos-sdk/Capability";
    value: CapabilityAmino;
}
/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 */
export interface CapabilitySDKType {
    index: bigint;
}
/**
 * Owner defines a single capability owner. An owner is defined by the name of
 * capability and the module name.
 */
export interface Owner {
    module: string;
    name: string;
}
export interface OwnerProtoMsg {
    typeUrl: "/cosmos.capability.v1beta1.Owner";
    value: Uint8Array;
}
/**
 * Owner defines a single capability owner. An owner is defined by the name of
 * capability and the module name.
 */
export interface OwnerAmino {
    module?: string;
    name?: string;
}
export interface OwnerAminoMsg {
    type: "cosmos-sdk/Owner";
    value: OwnerAmino;
}
/**
 * Owner defines a single capability owner. An owner is defined by the name of
 * capability and the module name.
 */
export interface OwnerSDKType {
    module: string;
    name: string;
}
/**
 * CapabilityOwners defines a set of owners of a single Capability. The set of
 * owners must be unique.
 */
export interface CapabilityOwners {
    owners: Owner[];
}
export interface CapabilityOwnersProtoMsg {
    typeUrl: "/cosmos.capability.v1beta1.CapabilityOwners";
    value: Uint8Array;
}
/**
 * CapabilityOwners defines a set of owners of a single Capability. The set of
 * owners must be unique.
 */
export interface CapabilityOwnersAmino {
    owners?: OwnerAmino[];
}
export interface CapabilityOwnersAminoMsg {
    type: "cosmos-sdk/CapabilityOwners";
    value: CapabilityOwnersAmino;
}
/**
 * CapabilityOwners defines a set of owners of a single Capability. The set of
 * owners must be unique.
 */
export interface CapabilityOwnersSDKType {
    owners: OwnerSDKType[];
}
export declare const Capability: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Capability;
    isSDK(o: any): o is CapabilitySDKType;
    isAmino(o: any): o is CapabilityAmino;
    encode(message: Capability, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Capability;
    fromJSON(object: any): Capability;
    toJSON(message: Capability): unknown;
    fromPartial(object: DeepPartial<Capability>): Capability;
    fromSDK(object: CapabilitySDKType): Capability;
    toSDK(message: Capability): CapabilitySDKType;
    fromAmino(object: CapabilityAmino): Capability;
    toAmino(message: Capability): CapabilityAmino;
    fromAminoMsg(object: CapabilityAminoMsg): Capability;
    toAminoMsg(message: Capability): CapabilityAminoMsg;
    fromProtoMsg(message: CapabilityProtoMsg): Capability;
    toProto(message: Capability): Uint8Array;
    toProtoMsg(message: Capability): CapabilityProtoMsg;
};
export declare const Owner: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Owner;
    isSDK(o: any): o is OwnerSDKType;
    isAmino(o: any): o is OwnerAmino;
    encode(message: Owner, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Owner;
    fromJSON(object: any): Owner;
    toJSON(message: Owner): unknown;
    fromPartial(object: DeepPartial<Owner>): Owner;
    fromSDK(object: OwnerSDKType): Owner;
    toSDK(message: Owner): OwnerSDKType;
    fromAmino(object: OwnerAmino): Owner;
    toAmino(message: Owner): OwnerAmino;
    fromAminoMsg(object: OwnerAminoMsg): Owner;
    toAminoMsg(message: Owner): OwnerAminoMsg;
    fromProtoMsg(message: OwnerProtoMsg): Owner;
    toProto(message: Owner): Uint8Array;
    toProtoMsg(message: Owner): OwnerProtoMsg;
};
export declare const CapabilityOwners: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is CapabilityOwners;
    isSDK(o: any): o is CapabilityOwnersSDKType;
    isAmino(o: any): o is CapabilityOwnersAmino;
    encode(message: CapabilityOwners, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CapabilityOwners;
    fromJSON(object: any): CapabilityOwners;
    toJSON(message: CapabilityOwners): unknown;
    fromPartial(object: DeepPartial<CapabilityOwners>): CapabilityOwners;
    fromSDK(object: CapabilityOwnersSDKType): CapabilityOwners;
    toSDK(message: CapabilityOwners): CapabilityOwnersSDKType;
    fromAmino(object: CapabilityOwnersAmino): CapabilityOwners;
    toAmino(message: CapabilityOwners): CapabilityOwnersAmino;
    fromAminoMsg(object: CapabilityOwnersAminoMsg): CapabilityOwners;
    toAminoMsg(message: CapabilityOwners): CapabilityOwnersAminoMsg;
    fromProtoMsg(message: CapabilityOwnersProtoMsg): CapabilityOwners;
    toProto(message: CapabilityOwners): Uint8Array;
    toProtoMsg(message: CapabilityOwners): CapabilityOwnersProtoMsg;
};
