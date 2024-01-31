import { Plan, PlanAmino, PlanSDKType } from "./upgrade";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgrade {
    /** authority is the address of the governance account. */
    authority: string;
    /** plan is the upgrade plan. */
    plan: Plan | undefined;
}
export interface MsgSoftwareUpgradeProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade";
    value: Uint8Array;
}
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeAmino {
    /** authority is the address of the governance account. */
    authority?: string;
    /** plan is the upgrade plan. */
    plan?: PlanAmino | undefined;
}
export interface MsgSoftwareUpgradeAminoMsg {
    type: "cosmos-sdk/MsgSoftwareUpgrade";
    value: MsgSoftwareUpgradeAmino;
}
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeSDKType {
    authority: string;
    plan: PlanSDKType | undefined;
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeResponse {
}
export interface MsgSoftwareUpgradeResponseProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse";
    value: Uint8Array;
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeResponseAmino {
}
export interface MsgSoftwareUpgradeResponseAminoMsg {
    type: "cosmos-sdk/MsgSoftwareUpgradeResponse";
    value: MsgSoftwareUpgradeResponseAmino;
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeResponseSDKType {
}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgrade {
    /** authority is the address of the governance account. */
    authority: string;
}
export interface MsgCancelUpgradeProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade";
    value: Uint8Array;
}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeAmino {
    /** authority is the address of the governance account. */
    authority?: string;
}
export interface MsgCancelUpgradeAminoMsg {
    type: "cosmos-sdk/MsgCancelUpgrade";
    value: MsgCancelUpgradeAmino;
}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeSDKType {
    authority: string;
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeResponse {
}
export interface MsgCancelUpgradeResponseProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse";
    value: Uint8Array;
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeResponseAmino {
}
export interface MsgCancelUpgradeResponseAminoMsg {
    type: "cosmos-sdk/MsgCancelUpgradeResponse";
    value: MsgCancelUpgradeResponseAmino;
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeResponseSDKType {
}
export declare const MsgSoftwareUpgrade: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSoftwareUpgrade;
    isSDK(o: any): o is MsgSoftwareUpgradeSDKType;
    isAmino(o: any): o is MsgSoftwareUpgradeAmino;
    encode(message: MsgSoftwareUpgrade, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSoftwareUpgrade;
    fromJSON(object: any): MsgSoftwareUpgrade;
    toJSON(message: MsgSoftwareUpgrade): unknown;
    fromPartial(object: DeepPartial<MsgSoftwareUpgrade>): MsgSoftwareUpgrade;
    fromSDK(object: MsgSoftwareUpgradeSDKType): MsgSoftwareUpgrade;
    toSDK(message: MsgSoftwareUpgrade): MsgSoftwareUpgradeSDKType;
    fromAmino(object: MsgSoftwareUpgradeAmino): MsgSoftwareUpgrade;
    toAmino(message: MsgSoftwareUpgrade): MsgSoftwareUpgradeAmino;
    fromAminoMsg(object: MsgSoftwareUpgradeAminoMsg): MsgSoftwareUpgrade;
    toAminoMsg(message: MsgSoftwareUpgrade): MsgSoftwareUpgradeAminoMsg;
    fromProtoMsg(message: MsgSoftwareUpgradeProtoMsg): MsgSoftwareUpgrade;
    toProto(message: MsgSoftwareUpgrade): Uint8Array;
    toProtoMsg(message: MsgSoftwareUpgrade): MsgSoftwareUpgradeProtoMsg;
};
export declare const MsgSoftwareUpgradeResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSoftwareUpgradeResponse;
    isSDK(o: any): o is MsgSoftwareUpgradeResponseSDKType;
    isAmino(o: any): o is MsgSoftwareUpgradeResponseAmino;
    encode(_: MsgSoftwareUpgradeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSoftwareUpgradeResponse;
    fromJSON(_: any): MsgSoftwareUpgradeResponse;
    toJSON(_: MsgSoftwareUpgradeResponse): unknown;
    fromPartial(_: DeepPartial<MsgSoftwareUpgradeResponse>): MsgSoftwareUpgradeResponse;
    fromSDK(_: MsgSoftwareUpgradeResponseSDKType): MsgSoftwareUpgradeResponse;
    toSDK(_: MsgSoftwareUpgradeResponse): MsgSoftwareUpgradeResponseSDKType;
    fromAmino(_: MsgSoftwareUpgradeResponseAmino): MsgSoftwareUpgradeResponse;
    toAmino(_: MsgSoftwareUpgradeResponse): MsgSoftwareUpgradeResponseAmino;
    fromAminoMsg(object: MsgSoftwareUpgradeResponseAminoMsg): MsgSoftwareUpgradeResponse;
    toAminoMsg(message: MsgSoftwareUpgradeResponse): MsgSoftwareUpgradeResponseAminoMsg;
    fromProtoMsg(message: MsgSoftwareUpgradeResponseProtoMsg): MsgSoftwareUpgradeResponse;
    toProto(message: MsgSoftwareUpgradeResponse): Uint8Array;
    toProtoMsg(message: MsgSoftwareUpgradeResponse): MsgSoftwareUpgradeResponseProtoMsg;
};
export declare const MsgCancelUpgrade: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCancelUpgrade;
    isSDK(o: any): o is MsgCancelUpgradeSDKType;
    isAmino(o: any): o is MsgCancelUpgradeAmino;
    encode(message: MsgCancelUpgrade, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelUpgrade;
    fromJSON(object: any): MsgCancelUpgrade;
    toJSON(message: MsgCancelUpgrade): unknown;
    fromPartial(object: DeepPartial<MsgCancelUpgrade>): MsgCancelUpgrade;
    fromSDK(object: MsgCancelUpgradeSDKType): MsgCancelUpgrade;
    toSDK(message: MsgCancelUpgrade): MsgCancelUpgradeSDKType;
    fromAmino(object: MsgCancelUpgradeAmino): MsgCancelUpgrade;
    toAmino(message: MsgCancelUpgrade): MsgCancelUpgradeAmino;
    fromAminoMsg(object: MsgCancelUpgradeAminoMsg): MsgCancelUpgrade;
    toAminoMsg(message: MsgCancelUpgrade): MsgCancelUpgradeAminoMsg;
    fromProtoMsg(message: MsgCancelUpgradeProtoMsg): MsgCancelUpgrade;
    toProto(message: MsgCancelUpgrade): Uint8Array;
    toProtoMsg(message: MsgCancelUpgrade): MsgCancelUpgradeProtoMsg;
};
export declare const MsgCancelUpgradeResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCancelUpgradeResponse;
    isSDK(o: any): o is MsgCancelUpgradeResponseSDKType;
    isAmino(o: any): o is MsgCancelUpgradeResponseAmino;
    encode(_: MsgCancelUpgradeResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelUpgradeResponse;
    fromJSON(_: any): MsgCancelUpgradeResponse;
    toJSON(_: MsgCancelUpgradeResponse): unknown;
    fromPartial(_: DeepPartial<MsgCancelUpgradeResponse>): MsgCancelUpgradeResponse;
    fromSDK(_: MsgCancelUpgradeResponseSDKType): MsgCancelUpgradeResponse;
    toSDK(_: MsgCancelUpgradeResponse): MsgCancelUpgradeResponseSDKType;
    fromAmino(_: MsgCancelUpgradeResponseAmino): MsgCancelUpgradeResponse;
    toAmino(_: MsgCancelUpgradeResponse): MsgCancelUpgradeResponseAmino;
    fromAminoMsg(object: MsgCancelUpgradeResponseAminoMsg): MsgCancelUpgradeResponse;
    toAminoMsg(message: MsgCancelUpgradeResponse): MsgCancelUpgradeResponseAminoMsg;
    fromProtoMsg(message: MsgCancelUpgradeResponseProtoMsg): MsgCancelUpgradeResponse;
    toProto(message: MsgCancelUpgradeResponse): Uint8Array;
    toProtoMsg(message: MsgCancelUpgradeResponse): MsgCancelUpgradeResponseProtoMsg;
};
