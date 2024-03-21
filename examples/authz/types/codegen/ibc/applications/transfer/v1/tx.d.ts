import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Height, HeightAmino, HeightSDKType } from "../../../core/client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface MsgTransfer {
    /** the port on which the packet will be sent */
    sourcePort: string;
    /** the channel by which the packet will be sent */
    sourceChannel: string;
    /** the tokens to be transferred */
    token: Coin | undefined;
    /** the sender address */
    sender: string;
    /** the recipient address on the destination chain */
    receiver: string;
    /**
     * Timeout height relative to the current block height.
     * The timeout is disabled when set to 0.
     */
    timeoutHeight: Height | undefined;
    /**
     * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
     * The timeout is disabled when set to 0.
     */
    timeoutTimestamp: bigint;
}
export interface MsgTransferProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.MsgTransfer";
    value: Uint8Array;
}
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface MsgTransferAmino {
    /** the port on which the packet will be sent */
    source_port?: string;
    /** the channel by which the packet will be sent */
    source_channel?: string;
    /** the tokens to be transferred */
    token?: CoinAmino | undefined;
    /** the sender address */
    sender?: string;
    /** the recipient address on the destination chain */
    receiver?: string;
    /**
     * Timeout height relative to the current block height.
     * The timeout is disabled when set to 0.
     */
    timeout_height?: HeightAmino | undefined;
    /**
     * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
     * The timeout is disabled when set to 0.
     */
    timeout_timestamp?: string;
}
export interface MsgTransferAminoMsg {
    type: "cosmos-sdk/MsgTransfer";
    value: MsgTransferAmino;
}
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface MsgTransferSDKType {
    source_port: string;
    source_channel: string;
    token: CoinSDKType | undefined;
    sender: string;
    receiver: string;
    timeout_height: HeightSDKType | undefined;
    timeout_timestamp: bigint;
}
/** MsgTransferResponse defines the Msg/Transfer response type. */
export interface MsgTransferResponse {
}
export interface MsgTransferResponseProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.MsgTransferResponse";
    value: Uint8Array;
}
/** MsgTransferResponse defines the Msg/Transfer response type. */
export interface MsgTransferResponseAmino {
}
export interface MsgTransferResponseAminoMsg {
    type: "cosmos-sdk/MsgTransferResponse";
    value: MsgTransferResponseAmino;
}
/** MsgTransferResponse defines the Msg/Transfer response type. */
export interface MsgTransferResponseSDKType {
}
export declare const MsgTransfer: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgTransfer;
    isSDK(o: any): o is MsgTransferSDKType;
    isAmino(o: any): o is MsgTransferAmino;
    encode(message: MsgTransfer, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgTransfer;
    fromJSON(object: any): MsgTransfer;
    toJSON(message: MsgTransfer): unknown;
    fromPartial(object: DeepPartial<MsgTransfer>): MsgTransfer;
    fromSDK(object: MsgTransferSDKType): MsgTransfer;
    toSDK(message: MsgTransfer): MsgTransferSDKType;
    fromAmino(object: MsgTransferAmino): MsgTransfer;
    toAmino(message: MsgTransfer): MsgTransferAmino;
    fromAminoMsg(object: MsgTransferAminoMsg): MsgTransfer;
    toAminoMsg(message: MsgTransfer): MsgTransferAminoMsg;
    fromProtoMsg(message: MsgTransferProtoMsg): MsgTransfer;
    toProto(message: MsgTransfer): Uint8Array;
    toProtoMsg(message: MsgTransfer): MsgTransferProtoMsg;
};
export declare const MsgTransferResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgTransferResponse;
    isSDK(o: any): o is MsgTransferResponseSDKType;
    isAmino(o: any): o is MsgTransferResponseAmino;
    encode(_: MsgTransferResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgTransferResponse;
    fromJSON(_: any): MsgTransferResponse;
    toJSON(_: MsgTransferResponse): unknown;
    fromPartial(_: DeepPartial<MsgTransferResponse>): MsgTransferResponse;
    fromSDK(_: MsgTransferResponseSDKType): MsgTransferResponse;
    toSDK(_: MsgTransferResponse): MsgTransferResponseSDKType;
    fromAmino(_: MsgTransferResponseAmino): MsgTransferResponse;
    toAmino(_: MsgTransferResponse): MsgTransferResponseAmino;
    fromAminoMsg(object: MsgTransferResponseAminoMsg): MsgTransferResponse;
    toAminoMsg(message: MsgTransferResponse): MsgTransferResponseAminoMsg;
    fromProtoMsg(message: MsgTransferResponseProtoMsg): MsgTransferResponse;
    toProto(message: MsgTransferResponse): Uint8Array;
    toProtoMsg(message: MsgTransferResponse): MsgTransferResponseProtoMsg;
};
