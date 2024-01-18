import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BasicAllowance, BasicAllowanceProtoMsg, BasicAllowanceSDKType, PeriodicAllowance, PeriodicAllowanceProtoMsg, PeriodicAllowanceSDKType, AllowedMsgAllowance, AllowedMsgAllowanceProtoMsg, AllowedMsgAllowanceSDKType } from "./feegrant";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowance {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
    /** allowance can be any of basic, periodic, allowed fee allowance. */
    allowance?: BasicAllowance | PeriodicAllowance | AllowedMsgAllowance | Any | undefined;
}
export interface MsgGrantAllowanceProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance";
    value: Uint8Array;
}
export type MsgGrantAllowanceEncoded = Omit<MsgGrantAllowance, "allowance"> & {
    /** allowance can be any of basic, periodic, allowed fee allowance. */ allowance?: BasicAllowanceProtoMsg | PeriodicAllowanceProtoMsg | AllowedMsgAllowanceProtoMsg | AnyProtoMsg | undefined;
};
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowanceAmino {
    /** granter is the address of the user granting an allowance of their funds. */
    granter?: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee?: string;
    /** allowance can be any of basic, periodic, allowed fee allowance. */
    allowance?: AnyAmino | undefined;
}
export interface MsgGrantAllowanceAminoMsg {
    type: "cosmos-sdk/MsgGrantAllowance";
    value: MsgGrantAllowanceAmino;
}
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowanceSDKType {
    granter: string;
    grantee: string;
    allowance?: BasicAllowanceSDKType | PeriodicAllowanceSDKType | AllowedMsgAllowanceSDKType | AnySDKType | undefined;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponse {
}
export interface MsgGrantAllowanceResponseProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse";
    value: Uint8Array;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponseAmino {
}
export interface MsgGrantAllowanceResponseAminoMsg {
    type: "cosmos-sdk/MsgGrantAllowanceResponse";
    value: MsgGrantAllowanceResponseAmino;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponseSDKType {
}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowance {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
}
export interface MsgRevokeAllowanceProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance";
    value: Uint8Array;
}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowanceAmino {
    /** granter is the address of the user granting an allowance of their funds. */
    granter?: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee?: string;
}
export interface MsgRevokeAllowanceAminoMsg {
    type: "cosmos-sdk/MsgRevokeAllowance";
    value: MsgRevokeAllowanceAmino;
}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowanceSDKType {
    granter: string;
    grantee: string;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponse {
}
export interface MsgRevokeAllowanceResponseProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse";
    value: Uint8Array;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponseAmino {
}
export interface MsgRevokeAllowanceResponseAminoMsg {
    type: "cosmos-sdk/MsgRevokeAllowanceResponse";
    value: MsgRevokeAllowanceResponseAmino;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponseSDKType {
}
export declare const MsgGrantAllowance: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgGrantAllowance;
    isSDK(o: any): o is MsgGrantAllowanceSDKType;
    isAmino(o: any): o is MsgGrantAllowanceAmino;
    encode(message: MsgGrantAllowance, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgGrantAllowance;
    fromJSON(object: any): MsgGrantAllowance;
    toJSON(message: MsgGrantAllowance): unknown;
    fromPartial(object: DeepPartial<MsgGrantAllowance>): MsgGrantAllowance;
    fromSDK(object: MsgGrantAllowanceSDKType): MsgGrantAllowance;
    toSDK(message: MsgGrantAllowance): MsgGrantAllowanceSDKType;
    fromAmino(object: MsgGrantAllowanceAmino): MsgGrantAllowance;
    toAmino(message: MsgGrantAllowance): MsgGrantAllowanceAmino;
    fromAminoMsg(object: MsgGrantAllowanceAminoMsg): MsgGrantAllowance;
    toAminoMsg(message: MsgGrantAllowance): MsgGrantAllowanceAminoMsg;
    fromProtoMsg(message: MsgGrantAllowanceProtoMsg): MsgGrantAllowance;
    toProto(message: MsgGrantAllowance): Uint8Array;
    toProtoMsg(message: MsgGrantAllowance): MsgGrantAllowanceProtoMsg;
};
export declare const MsgGrantAllowanceResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgGrantAllowanceResponse;
    isSDK(o: any): o is MsgGrantAllowanceResponseSDKType;
    isAmino(o: any): o is MsgGrantAllowanceResponseAmino;
    encode(_: MsgGrantAllowanceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgGrantAllowanceResponse;
    fromJSON(_: any): MsgGrantAllowanceResponse;
    toJSON(_: MsgGrantAllowanceResponse): unknown;
    fromPartial(_: DeepPartial<MsgGrantAllowanceResponse>): MsgGrantAllowanceResponse;
    fromSDK(_: MsgGrantAllowanceResponseSDKType): MsgGrantAllowanceResponse;
    toSDK(_: MsgGrantAllowanceResponse): MsgGrantAllowanceResponseSDKType;
    fromAmino(_: MsgGrantAllowanceResponseAmino): MsgGrantAllowanceResponse;
    toAmino(_: MsgGrantAllowanceResponse): MsgGrantAllowanceResponseAmino;
    fromAminoMsg(object: MsgGrantAllowanceResponseAminoMsg): MsgGrantAllowanceResponse;
    toAminoMsg(message: MsgGrantAllowanceResponse): MsgGrantAllowanceResponseAminoMsg;
    fromProtoMsg(message: MsgGrantAllowanceResponseProtoMsg): MsgGrantAllowanceResponse;
    toProto(message: MsgGrantAllowanceResponse): Uint8Array;
    toProtoMsg(message: MsgGrantAllowanceResponse): MsgGrantAllowanceResponseProtoMsg;
};
export declare const MsgRevokeAllowance: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgRevokeAllowance;
    isSDK(o: any): o is MsgRevokeAllowanceSDKType;
    isAmino(o: any): o is MsgRevokeAllowanceAmino;
    encode(message: MsgRevokeAllowance, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeAllowance;
    fromJSON(object: any): MsgRevokeAllowance;
    toJSON(message: MsgRevokeAllowance): unknown;
    fromPartial(object: DeepPartial<MsgRevokeAllowance>): MsgRevokeAllowance;
    fromSDK(object: MsgRevokeAllowanceSDKType): MsgRevokeAllowance;
    toSDK(message: MsgRevokeAllowance): MsgRevokeAllowanceSDKType;
    fromAmino(object: MsgRevokeAllowanceAmino): MsgRevokeAllowance;
    toAmino(message: MsgRevokeAllowance): MsgRevokeAllowanceAmino;
    fromAminoMsg(object: MsgRevokeAllowanceAminoMsg): MsgRevokeAllowance;
    toAminoMsg(message: MsgRevokeAllowance): MsgRevokeAllowanceAminoMsg;
    fromProtoMsg(message: MsgRevokeAllowanceProtoMsg): MsgRevokeAllowance;
    toProto(message: MsgRevokeAllowance): Uint8Array;
    toProtoMsg(message: MsgRevokeAllowance): MsgRevokeAllowanceProtoMsg;
};
export declare const MsgRevokeAllowanceResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgRevokeAllowanceResponse;
    isSDK(o: any): o is MsgRevokeAllowanceResponseSDKType;
    isAmino(o: any): o is MsgRevokeAllowanceResponseAmino;
    encode(_: MsgRevokeAllowanceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeAllowanceResponse;
    fromJSON(_: any): MsgRevokeAllowanceResponse;
    toJSON(_: MsgRevokeAllowanceResponse): unknown;
    fromPartial(_: DeepPartial<MsgRevokeAllowanceResponse>): MsgRevokeAllowanceResponse;
    fromSDK(_: MsgRevokeAllowanceResponseSDKType): MsgRevokeAllowanceResponse;
    toSDK(_: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponseSDKType;
    fromAmino(_: MsgRevokeAllowanceResponseAmino): MsgRevokeAllowanceResponse;
    toAmino(_: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponseAmino;
    fromAminoMsg(object: MsgRevokeAllowanceResponseAminoMsg): MsgRevokeAllowanceResponse;
    toAminoMsg(message: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponseAminoMsg;
    fromProtoMsg(message: MsgRevokeAllowanceResponseProtoMsg): MsgRevokeAllowanceResponse;
    toProto(message: MsgRevokeAllowanceResponse): Uint8Array;
    toProtoMsg(message: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponseProtoMsg;
};
