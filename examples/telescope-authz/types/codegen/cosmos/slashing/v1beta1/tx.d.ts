import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjail {
    validatorAddr: string;
}
export interface MsgUnjailProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail";
    value: Uint8Array;
}
/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjailAmino {
    validator_addr?: string;
}
export interface MsgUnjailAminoMsg {
    type: "cosmos-sdk/MsgUnjail";
    value: MsgUnjailAmino;
}
/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjailSDKType {
    validator_addr: string;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponse {
}
export interface MsgUnjailResponseProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse";
    value: Uint8Array;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponseAmino {
}
export interface MsgUnjailResponseAminoMsg {
    type: "cosmos-sdk/MsgUnjailResponse";
    value: MsgUnjailResponseAmino;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponseSDKType {
}
export declare const MsgUnjail: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUnjail;
    isSDK(o: any): o is MsgUnjailSDKType;
    isAmino(o: any): o is MsgUnjailAmino;
    encode(message: MsgUnjail, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUnjail;
    fromJSON(object: any): MsgUnjail;
    toJSON(message: MsgUnjail): unknown;
    fromPartial(object: DeepPartial<MsgUnjail>): MsgUnjail;
    fromSDK(object: MsgUnjailSDKType): MsgUnjail;
    toSDK(message: MsgUnjail): MsgUnjailSDKType;
    fromAmino(object: MsgUnjailAmino): MsgUnjail;
    toAmino(message: MsgUnjail): MsgUnjailAmino;
    fromAminoMsg(object: MsgUnjailAminoMsg): MsgUnjail;
    toAminoMsg(message: MsgUnjail): MsgUnjailAminoMsg;
    fromProtoMsg(message: MsgUnjailProtoMsg): MsgUnjail;
    toProto(message: MsgUnjail): Uint8Array;
    toProtoMsg(message: MsgUnjail): MsgUnjailProtoMsg;
};
export declare const MsgUnjailResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgUnjailResponse;
    isSDK(o: any): o is MsgUnjailResponseSDKType;
    isAmino(o: any): o is MsgUnjailResponseAmino;
    encode(_: MsgUnjailResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgUnjailResponse;
    fromJSON(_: any): MsgUnjailResponse;
    toJSON(_: MsgUnjailResponse): unknown;
    fromPartial(_: DeepPartial<MsgUnjailResponse>): MsgUnjailResponse;
    fromSDK(_: MsgUnjailResponseSDKType): MsgUnjailResponse;
    toSDK(_: MsgUnjailResponse): MsgUnjailResponseSDKType;
    fromAmino(_: MsgUnjailResponseAmino): MsgUnjailResponse;
    toAmino(_: MsgUnjailResponse): MsgUnjailResponseAmino;
    fromAminoMsg(object: MsgUnjailResponseAminoMsg): MsgUnjailResponse;
    toAminoMsg(message: MsgUnjailResponse): MsgUnjailResponseAminoMsg;
    fromProtoMsg(message: MsgUnjailResponseProtoMsg): MsgUnjailResponse;
    toProto(message: MsgUnjailResponse): Uint8Array;
    toProtoMsg(message: MsgUnjailResponse): MsgUnjailResponseProtoMsg;
};
