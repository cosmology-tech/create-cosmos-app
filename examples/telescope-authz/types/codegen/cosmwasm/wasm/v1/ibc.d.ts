import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** MsgIBCSend */
export interface MsgIBCSend {
    /** the channel by which the packet will be sent */
    channel: string;
    /**
     * Timeout height relative to the current block height.
     * The timeout is disabled when set to 0.
     */
    timeoutHeight: bigint;
    /**
     * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
     * The timeout is disabled when set to 0.
     */
    timeoutTimestamp: bigint;
    /**
     * Data is the payload to transfer. We must not make assumption what format or
     * content is in here.
     */
    data: Uint8Array;
}
export interface MsgIBCSendProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgIBCSend";
    value: Uint8Array;
}
/** MsgIBCSend */
export interface MsgIBCSendAmino {
    /** the channel by which the packet will be sent */
    channel?: string;
    /**
     * Timeout height relative to the current block height.
     * The timeout is disabled when set to 0.
     */
    timeout_height?: string;
    /**
     * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
     * The timeout is disabled when set to 0.
     */
    timeout_timestamp?: string;
    /**
     * Data is the payload to transfer. We must not make assumption what format or
     * content is in here.
     */
    data?: string;
}
export interface MsgIBCSendAminoMsg {
    type: "wasm/MsgIBCSend";
    value: MsgIBCSendAmino;
}
/** MsgIBCSend */
export interface MsgIBCSendSDKType {
    channel: string;
    timeout_height: bigint;
    timeout_timestamp: bigint;
    data: Uint8Array;
}
/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannel {
    channel: string;
}
export interface MsgIBCCloseChannelProtoMsg {
    typeUrl: "/cosmwasm.wasm.v1.MsgIBCCloseChannel";
    value: Uint8Array;
}
/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannelAmino {
    channel?: string;
}
export interface MsgIBCCloseChannelAminoMsg {
    type: "wasm/MsgIBCCloseChannel";
    value: MsgIBCCloseChannelAmino;
}
/** MsgIBCCloseChannel port and channel need to be owned by the contract */
export interface MsgIBCCloseChannelSDKType {
    channel: string;
}
export declare const MsgIBCSend: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgIBCSend;
    isSDK(o: any): o is MsgIBCSendSDKType;
    isAmino(o: any): o is MsgIBCSendAmino;
    encode(message: MsgIBCSend, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgIBCSend;
    fromJSON(object: any): MsgIBCSend;
    toJSON(message: MsgIBCSend): unknown;
    fromPartial(object: DeepPartial<MsgIBCSend>): MsgIBCSend;
    fromSDK(object: MsgIBCSendSDKType): MsgIBCSend;
    toSDK(message: MsgIBCSend): MsgIBCSendSDKType;
    fromAmino(object: MsgIBCSendAmino): MsgIBCSend;
    toAmino(message: MsgIBCSend): MsgIBCSendAmino;
    fromAminoMsg(object: MsgIBCSendAminoMsg): MsgIBCSend;
    toAminoMsg(message: MsgIBCSend): MsgIBCSendAminoMsg;
    fromProtoMsg(message: MsgIBCSendProtoMsg): MsgIBCSend;
    toProto(message: MsgIBCSend): Uint8Array;
    toProtoMsg(message: MsgIBCSend): MsgIBCSendProtoMsg;
};
export declare const MsgIBCCloseChannel: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgIBCCloseChannel;
    isSDK(o: any): o is MsgIBCCloseChannelSDKType;
    isAmino(o: any): o is MsgIBCCloseChannelAmino;
    encode(message: MsgIBCCloseChannel, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgIBCCloseChannel;
    fromJSON(object: any): MsgIBCCloseChannel;
    toJSON(message: MsgIBCCloseChannel): unknown;
    fromPartial(object: DeepPartial<MsgIBCCloseChannel>): MsgIBCCloseChannel;
    fromSDK(object: MsgIBCCloseChannelSDKType): MsgIBCCloseChannel;
    toSDK(message: MsgIBCCloseChannel): MsgIBCCloseChannelSDKType;
    fromAmino(object: MsgIBCCloseChannelAmino): MsgIBCCloseChannel;
    toAmino(message: MsgIBCCloseChannel): MsgIBCCloseChannelAmino;
    fromAminoMsg(object: MsgIBCCloseChannelAminoMsg): MsgIBCCloseChannel;
    toAminoMsg(message: MsgIBCCloseChannel): MsgIBCCloseChannelAminoMsg;
    fromProtoMsg(message: MsgIBCCloseChannelProtoMsg): MsgIBCCloseChannel;
    toProto(message: MsgIBCCloseChannel): Uint8Array;
    toProtoMsg(message: MsgIBCCloseChannel): MsgIBCCloseChannelProtoMsg;
};
