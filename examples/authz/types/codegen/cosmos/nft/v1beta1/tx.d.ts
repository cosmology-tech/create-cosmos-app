import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** MsgSend represents a message to send a nft from one account to another account. */
export interface MsgSend {
    /** class_id defines the unique identifier of the nft classification, similar to the contract address of ERC721 */
    classId: string;
    /** id defines the unique identification of nft */
    id: string;
    /** sender is the address of the owner of nft */
    sender: string;
    /** receiver is the receiver address of nft */
    receiver: string;
}
export interface MsgSendProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.MsgSend";
    value: Uint8Array;
}
/** MsgSend represents a message to send a nft from one account to another account. */
export interface MsgSendAmino {
    /** class_id defines the unique identifier of the nft classification, similar to the contract address of ERC721 */
    class_id?: string;
    /** id defines the unique identification of nft */
    id?: string;
    /** sender is the address of the owner of nft */
    sender?: string;
    /** receiver is the receiver address of nft */
    receiver?: string;
}
export interface MsgSendAminoMsg {
    type: "cosmos-sdk/MsgNFTSend";
    value: MsgSendAmino;
}
/** MsgSend represents a message to send a nft from one account to another account. */
export interface MsgSendSDKType {
    class_id: string;
    id: string;
    sender: string;
    receiver: string;
}
/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponse {
}
export interface MsgSendResponseProtoMsg {
    typeUrl: "/cosmos.nft.v1beta1.MsgSendResponse";
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
