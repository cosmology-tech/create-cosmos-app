import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Input, InputAmino, InputSDKType, Output, OutputAmino, OutputSDKType } from "./bank";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSend {
    fromAddress: string;
    toAddress: string;
    amount: Coin[];
}
export interface MsgSendProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.MsgSend";
    value: Uint8Array;
}
/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSendAmino {
    from_address?: string;
    to_address?: string;
    amount?: CoinAmino[];
}
export interface MsgSendAminoMsg {
    type: "cosmos-sdk/MsgSend";
    value: MsgSendAmino;
}
/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSendSDKType {
    from_address: string;
    to_address: string;
    amount: CoinSDKType[];
}
/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponse {
}
export interface MsgSendResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.MsgSendResponse";
    value: Uint8Array;
}
/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponseAmino {
}
export interface MsgSendResponseAminoMsg {
    type: "cosmos-sdk/MsgSendResponse";
    value: MsgSendResponseAmino;
}
/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponseSDKType {
}
/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSend {
    inputs: Input[];
    outputs: Output[];
}
export interface MsgMultiSendProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.MsgMultiSend";
    value: Uint8Array;
}
/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSendAmino {
    inputs?: InputAmino[];
    outputs?: OutputAmino[];
}
export interface MsgMultiSendAminoMsg {
    type: "cosmos-sdk/MsgMultiSend";
    value: MsgMultiSendAmino;
}
/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSendSDKType {
    inputs: InputSDKType[];
    outputs: OutputSDKType[];
}
/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export interface MsgMultiSendResponse {
}
export interface MsgMultiSendResponseProtoMsg {
    typeUrl: "/cosmos.bank.v1beta1.MsgMultiSendResponse";
    value: Uint8Array;
}
/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export interface MsgMultiSendResponseAmino {
}
export interface MsgMultiSendResponseAminoMsg {
    type: "cosmos-sdk/MsgMultiSendResponse";
    value: MsgMultiSendResponseAmino;
}
/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export interface MsgMultiSendResponseSDKType {
}
export declare const MsgSend: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSend;
    isSDK(o: any): o is MsgSendSDKType;
    isAmino(o: any): o is MsgSendAmino;
    encode(message: MsgSend, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSend;
    fromJSON(object: any): MsgSend;
    toJSON(message: MsgSend): unknown;
    fromPartial(object: DeepPartial<MsgSend>): MsgSend;
    fromSDK(object: MsgSendSDKType): MsgSend;
    toSDK(message: MsgSend): MsgSendSDKType;
    fromAmino(object: MsgSendAmino): MsgSend;
    toAmino(message: MsgSend): MsgSendAmino;
    fromAminoMsg(object: MsgSendAminoMsg): MsgSend;
    toAminoMsg(message: MsgSend): MsgSendAminoMsg;
    fromProtoMsg(message: MsgSendProtoMsg): MsgSend;
    toProto(message: MsgSend): Uint8Array;
    toProtoMsg(message: MsgSend): MsgSendProtoMsg;
};
export declare const MsgSendResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSendResponse;
    isSDK(o: any): o is MsgSendResponseSDKType;
    isAmino(o: any): o is MsgSendResponseAmino;
    encode(_: MsgSendResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSendResponse;
    fromJSON(_: any): MsgSendResponse;
    toJSON(_: MsgSendResponse): unknown;
    fromPartial(_: DeepPartial<MsgSendResponse>): MsgSendResponse;
    fromSDK(_: MsgSendResponseSDKType): MsgSendResponse;
    toSDK(_: MsgSendResponse): MsgSendResponseSDKType;
    fromAmino(_: MsgSendResponseAmino): MsgSendResponse;
    toAmino(_: MsgSendResponse): MsgSendResponseAmino;
    fromAminoMsg(object: MsgSendResponseAminoMsg): MsgSendResponse;
    toAminoMsg(message: MsgSendResponse): MsgSendResponseAminoMsg;
    fromProtoMsg(message: MsgSendResponseProtoMsg): MsgSendResponse;
    toProto(message: MsgSendResponse): Uint8Array;
    toProtoMsg(message: MsgSendResponse): MsgSendResponseProtoMsg;
};
export declare const MsgMultiSend: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgMultiSend;
    isSDK(o: any): o is MsgMultiSendSDKType;
    isAmino(o: any): o is MsgMultiSendAmino;
    encode(message: MsgMultiSend, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgMultiSend;
    fromJSON(object: any): MsgMultiSend;
    toJSON(message: MsgMultiSend): unknown;
    fromPartial(object: DeepPartial<MsgMultiSend>): MsgMultiSend;
    fromSDK(object: MsgMultiSendSDKType): MsgMultiSend;
    toSDK(message: MsgMultiSend): MsgMultiSendSDKType;
    fromAmino(object: MsgMultiSendAmino): MsgMultiSend;
    toAmino(message: MsgMultiSend): MsgMultiSendAmino;
    fromAminoMsg(object: MsgMultiSendAminoMsg): MsgMultiSend;
    toAminoMsg(message: MsgMultiSend): MsgMultiSendAminoMsg;
    fromProtoMsg(message: MsgMultiSendProtoMsg): MsgMultiSend;
    toProto(message: MsgMultiSend): Uint8Array;
    toProtoMsg(message: MsgMultiSend): MsgMultiSendProtoMsg;
};
export declare const MsgMultiSendResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgMultiSendResponse;
    isSDK(o: any): o is MsgMultiSendResponseSDKType;
    isAmino(o: any): o is MsgMultiSendResponseAmino;
    encode(_: MsgMultiSendResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgMultiSendResponse;
    fromJSON(_: any): MsgMultiSendResponse;
    toJSON(_: MsgMultiSendResponse): unknown;
    fromPartial(_: DeepPartial<MsgMultiSendResponse>): MsgMultiSendResponse;
    fromSDK(_: MsgMultiSendResponseSDKType): MsgMultiSendResponse;
    toSDK(_: MsgMultiSendResponse): MsgMultiSendResponseSDKType;
    fromAmino(_: MsgMultiSendResponseAmino): MsgMultiSendResponse;
    toAmino(_: MsgMultiSendResponse): MsgMultiSendResponseAmino;
    fromAminoMsg(object: MsgMultiSendResponseAminoMsg): MsgMultiSendResponse;
    toAminoMsg(message: MsgMultiSendResponse): MsgMultiSendResponseAminoMsg;
    fromProtoMsg(message: MsgMultiSendResponseProtoMsg): MsgMultiSendResponse;
    toProto(message: MsgMultiSendResponse): Uint8Array;
    toProtoMsg(message: MsgMultiSendResponse): MsgMultiSendResponseProtoMsg;
};
