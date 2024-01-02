import { Channel, ChannelAmino, ChannelSDKType, Packet, PacketAmino, PacketSDKType } from "./channel";
import { Height, HeightAmino, HeightSDKType } from "../../client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInit {
    portId: string;
    channel: Channel | undefined;
    signer: string;
}
export interface MsgChannelOpenInitProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit";
    value: Uint8Array;
}
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInitAmino {
    port_id?: string;
    channel?: ChannelAmino | undefined;
    signer?: string;
}
export interface MsgChannelOpenInitAminoMsg {
    type: "cosmos-sdk/MsgChannelOpenInit";
    value: MsgChannelOpenInitAmino;
}
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInitSDKType {
    port_id: string;
    channel: ChannelSDKType | undefined;
    signer: string;
}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponse {
}
export interface MsgChannelOpenInitResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse";
    value: Uint8Array;
}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponseAmino {
}
export interface MsgChannelOpenInitResponseAminoMsg {
    type: "cosmos-sdk/MsgChannelOpenInitResponse";
    value: MsgChannelOpenInitResponseAmino;
}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponseSDKType {
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B.
 */
export interface MsgChannelOpenTry {
    portId: string;
    /**
     * in the case of crossing hello's, when both chains call OpenInit, we need
     * the channel identifier of the previous channel in state INIT
     */
    previousChannelId: string;
    channel: Channel | undefined;
    counterpartyVersion: string;
    proofInit: Uint8Array;
    proofHeight: Height | undefined;
    signer: string;
}
export interface MsgChannelOpenTryProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry";
    value: Uint8Array;
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B.
 */
export interface MsgChannelOpenTryAmino {
    port_id?: string;
    /**
     * in the case of crossing hello's, when both chains call OpenInit, we need
     * the channel identifier of the previous channel in state INIT
     */
    previous_channel_id?: string;
    channel?: ChannelAmino | undefined;
    counterparty_version?: string;
    proof_init?: string;
    proof_height?: HeightAmino | undefined;
    signer?: string;
}
export interface MsgChannelOpenTryAminoMsg {
    type: "cosmos-sdk/MsgChannelOpenTry";
    value: MsgChannelOpenTryAmino;
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B.
 */
export interface MsgChannelOpenTrySDKType {
    port_id: string;
    previous_channel_id: string;
    channel: ChannelSDKType | undefined;
    counterparty_version: string;
    proof_init: Uint8Array;
    proof_height: HeightSDKType | undefined;
    signer: string;
}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponse {
}
export interface MsgChannelOpenTryResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse";
    value: Uint8Array;
}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponseAmino {
}
export interface MsgChannelOpenTryResponseAminoMsg {
    type: "cosmos-sdk/MsgChannelOpenTryResponse";
    value: MsgChannelOpenTryResponseAmino;
}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponseSDKType {
}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 */
export interface MsgChannelOpenAck {
    portId: string;
    channelId: string;
    counterpartyChannelId: string;
    counterpartyVersion: string;
    proofTry: Uint8Array;
    proofHeight: Height | undefined;
    signer: string;
}
export interface MsgChannelOpenAckProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck";
    value: Uint8Array;
}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 */
export interface MsgChannelOpenAckAmino {
    port_id?: string;
    channel_id?: string;
    counterparty_channel_id?: string;
    counterparty_version?: string;
    proof_try?: string;
    proof_height?: HeightAmino | undefined;
    signer?: string;
}
export interface MsgChannelOpenAckAminoMsg {
    type: "cosmos-sdk/MsgChannelOpenAck";
    value: MsgChannelOpenAckAmino;
}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 */
export interface MsgChannelOpenAckSDKType {
    port_id: string;
    channel_id: string;
    counterparty_channel_id: string;
    counterparty_version: string;
    proof_try: Uint8Array;
    proof_height: HeightSDKType | undefined;
    signer: string;
}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponse {
}
export interface MsgChannelOpenAckResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse";
    value: Uint8Array;
}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponseAmino {
}
export interface MsgChannelOpenAckResponseAminoMsg {
    type: "cosmos-sdk/MsgChannelOpenAckResponse";
    value: MsgChannelOpenAckResponseAmino;
}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponseSDKType {
}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirm {
    portId: string;
    channelId: string;
    proofAck: Uint8Array;
    proofHeight: Height | undefined;
    signer: string;
}
export interface MsgChannelOpenConfirmProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm";
    value: Uint8Array;
}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirmAmino {
    port_id?: string;
    channel_id?: string;
    proof_ack?: string;
    proof_height?: HeightAmino | undefined;
    signer?: string;
}
export interface MsgChannelOpenConfirmAminoMsg {
    type: "cosmos-sdk/MsgChannelOpenConfirm";
    value: MsgChannelOpenConfirmAmino;
}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirmSDKType {
    port_id: string;
    channel_id: string;
    proof_ack: Uint8Array;
    proof_height: HeightSDKType | undefined;
    signer: string;
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponse {
}
export interface MsgChannelOpenConfirmResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse";
    value: Uint8Array;
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponseAmino {
}
export interface MsgChannelOpenConfirmResponseAminoMsg {
    type: "cosmos-sdk/MsgChannelOpenConfirmResponse";
    value: MsgChannelOpenConfirmResponseAmino;
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponseSDKType {
}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export interface MsgChannelCloseInit {
    portId: string;
    channelId: string;
    signer: string;
}
export interface MsgChannelCloseInitProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit";
    value: Uint8Array;
}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export interface MsgChannelCloseInitAmino {
    port_id?: string;
    channel_id?: string;
    signer?: string;
}
export interface MsgChannelCloseInitAminoMsg {
    type: "cosmos-sdk/MsgChannelCloseInit";
    value: MsgChannelCloseInitAmino;
}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export interface MsgChannelCloseInitSDKType {
    port_id: string;
    channel_id: string;
    signer: string;
}
/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponse {
}
export interface MsgChannelCloseInitResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse";
    value: Uint8Array;
}
/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponseAmino {
}
export interface MsgChannelCloseInitResponseAminoMsg {
    type: "cosmos-sdk/MsgChannelCloseInitResponse";
    value: MsgChannelCloseInitResponseAmino;
}
/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponseSDKType {
}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirm {
    portId: string;
    channelId: string;
    proofInit: Uint8Array;
    proofHeight: Height | undefined;
    signer: string;
}
export interface MsgChannelCloseConfirmProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm";
    value: Uint8Array;
}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirmAmino {
    port_id?: string;
    channel_id?: string;
    proof_init?: string;
    proof_height?: HeightAmino | undefined;
    signer?: string;
}
export interface MsgChannelCloseConfirmAminoMsg {
    type: "cosmos-sdk/MsgChannelCloseConfirm";
    value: MsgChannelCloseConfirmAmino;
}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirmSDKType {
    port_id: string;
    channel_id: string;
    proof_init: Uint8Array;
    proof_height: HeightSDKType | undefined;
    signer: string;
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponse {
}
export interface MsgChannelCloseConfirmResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse";
    value: Uint8Array;
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponseAmino {
}
export interface MsgChannelCloseConfirmResponseAminoMsg {
    type: "cosmos-sdk/MsgChannelCloseConfirmResponse";
    value: MsgChannelCloseConfirmResponseAmino;
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponseSDKType {
}
/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacket {
    packet: Packet | undefined;
    proofCommitment: Uint8Array;
    proofHeight: Height | undefined;
    signer: string;
}
export interface MsgRecvPacketProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgRecvPacket";
    value: Uint8Array;
}
/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacketAmino {
    packet?: PacketAmino | undefined;
    proof_commitment?: string;
    proof_height?: HeightAmino | undefined;
    signer?: string;
}
export interface MsgRecvPacketAminoMsg {
    type: "cosmos-sdk/MsgRecvPacket";
    value: MsgRecvPacketAmino;
}
/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacketSDKType {
    packet: PacketSDKType | undefined;
    proof_commitment: Uint8Array;
    proof_height: HeightSDKType | undefined;
    signer: string;
}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponse {
}
export interface MsgRecvPacketResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse";
    value: Uint8Array;
}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponseAmino {
}
export interface MsgRecvPacketResponseAminoMsg {
    type: "cosmos-sdk/MsgRecvPacketResponse";
    value: MsgRecvPacketResponseAmino;
}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponseSDKType {
}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeout {
    packet: Packet | undefined;
    proofUnreceived: Uint8Array;
    proofHeight: Height | undefined;
    nextSequenceRecv: bigint;
    signer: string;
}
export interface MsgTimeoutProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgTimeout";
    value: Uint8Array;
}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeoutAmino {
    packet?: PacketAmino | undefined;
    proof_unreceived?: string;
    proof_height?: HeightAmino | undefined;
    next_sequence_recv?: string;
    signer?: string;
}
export interface MsgTimeoutAminoMsg {
    type: "cosmos-sdk/MsgTimeout";
    value: MsgTimeoutAmino;
}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeoutSDKType {
    packet: PacketSDKType | undefined;
    proof_unreceived: Uint8Array;
    proof_height: HeightSDKType | undefined;
    next_sequence_recv: bigint;
    signer: string;
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponse {
}
export interface MsgTimeoutResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse";
    value: Uint8Array;
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponseAmino {
}
export interface MsgTimeoutResponseAminoMsg {
    type: "cosmos-sdk/MsgTimeoutResponse";
    value: MsgTimeoutResponseAmino;
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponseSDKType {
}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnClose {
    packet: Packet | undefined;
    proofUnreceived: Uint8Array;
    proofClose: Uint8Array;
    proofHeight: Height | undefined;
    nextSequenceRecv: bigint;
    signer: string;
}
export interface MsgTimeoutOnCloseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose";
    value: Uint8Array;
}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnCloseAmino {
    packet?: PacketAmino | undefined;
    proof_unreceived?: string;
    proof_close?: string;
    proof_height?: HeightAmino | undefined;
    next_sequence_recv?: string;
    signer?: string;
}
export interface MsgTimeoutOnCloseAminoMsg {
    type: "cosmos-sdk/MsgTimeoutOnClose";
    value: MsgTimeoutOnCloseAmino;
}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnCloseSDKType {
    packet: PacketSDKType | undefined;
    proof_unreceived: Uint8Array;
    proof_close: Uint8Array;
    proof_height: HeightSDKType | undefined;
    next_sequence_recv: bigint;
    signer: string;
}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponse {
}
export interface MsgTimeoutOnCloseResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse";
    value: Uint8Array;
}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponseAmino {
}
export interface MsgTimeoutOnCloseResponseAminoMsg {
    type: "cosmos-sdk/MsgTimeoutOnCloseResponse";
    value: MsgTimeoutOnCloseResponseAmino;
}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponseSDKType {
}
/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgement {
    packet: Packet | undefined;
    acknowledgement: Uint8Array;
    proofAcked: Uint8Array;
    proofHeight: Height | undefined;
    signer: string;
}
export interface MsgAcknowledgementProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement";
    value: Uint8Array;
}
/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgementAmino {
    packet?: PacketAmino | undefined;
    acknowledgement?: string;
    proof_acked?: string;
    proof_height?: HeightAmino | undefined;
    signer?: string;
}
export interface MsgAcknowledgementAminoMsg {
    type: "cosmos-sdk/MsgAcknowledgement";
    value: MsgAcknowledgementAmino;
}
/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgementSDKType {
    packet: PacketSDKType | undefined;
    acknowledgement: Uint8Array;
    proof_acked: Uint8Array;
    proof_height: HeightSDKType | undefined;
    signer: string;
}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponse {
}
export interface MsgAcknowledgementResponseProtoMsg {
    typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse";
    value: Uint8Array;
}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponseAmino {
}
export interface MsgAcknowledgementResponseAminoMsg {
    type: "cosmos-sdk/MsgAcknowledgementResponse";
    value: MsgAcknowledgementResponseAmino;
}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponseSDKType {
}
export declare const MsgChannelOpenInit: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelOpenInit;
    isSDK(o: any): o is MsgChannelOpenInitSDKType;
    isAmino(o: any): o is MsgChannelOpenInitAmino;
    encode(message: MsgChannelOpenInit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenInit;
    fromJSON(object: any): MsgChannelOpenInit;
    toJSON(message: MsgChannelOpenInit): unknown;
    fromPartial(object: DeepPartial<MsgChannelOpenInit>): MsgChannelOpenInit;
    fromSDK(object: MsgChannelOpenInitSDKType): MsgChannelOpenInit;
    toSDK(message: MsgChannelOpenInit): MsgChannelOpenInitSDKType;
    fromAmino(object: MsgChannelOpenInitAmino): MsgChannelOpenInit;
    toAmino(message: MsgChannelOpenInit): MsgChannelOpenInitAmino;
    fromAminoMsg(object: MsgChannelOpenInitAminoMsg): MsgChannelOpenInit;
    toAminoMsg(message: MsgChannelOpenInit): MsgChannelOpenInitAminoMsg;
    fromProtoMsg(message: MsgChannelOpenInitProtoMsg): MsgChannelOpenInit;
    toProto(message: MsgChannelOpenInit): Uint8Array;
    toProtoMsg(message: MsgChannelOpenInit): MsgChannelOpenInitProtoMsg;
};
export declare const MsgChannelOpenInitResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelOpenInitResponse;
    isSDK(o: any): o is MsgChannelOpenInitResponseSDKType;
    isAmino(o: any): o is MsgChannelOpenInitResponseAmino;
    encode(_: MsgChannelOpenInitResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenInitResponse;
    fromJSON(_: any): MsgChannelOpenInitResponse;
    toJSON(_: MsgChannelOpenInitResponse): unknown;
    fromPartial(_: DeepPartial<MsgChannelOpenInitResponse>): MsgChannelOpenInitResponse;
    fromSDK(_: MsgChannelOpenInitResponseSDKType): MsgChannelOpenInitResponse;
    toSDK(_: MsgChannelOpenInitResponse): MsgChannelOpenInitResponseSDKType;
    fromAmino(_: MsgChannelOpenInitResponseAmino): MsgChannelOpenInitResponse;
    toAmino(_: MsgChannelOpenInitResponse): MsgChannelOpenInitResponseAmino;
    fromAminoMsg(object: MsgChannelOpenInitResponseAminoMsg): MsgChannelOpenInitResponse;
    toAminoMsg(message: MsgChannelOpenInitResponse): MsgChannelOpenInitResponseAminoMsg;
    fromProtoMsg(message: MsgChannelOpenInitResponseProtoMsg): MsgChannelOpenInitResponse;
    toProto(message: MsgChannelOpenInitResponse): Uint8Array;
    toProtoMsg(message: MsgChannelOpenInitResponse): MsgChannelOpenInitResponseProtoMsg;
};
export declare const MsgChannelOpenTry: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelOpenTry;
    isSDK(o: any): o is MsgChannelOpenTrySDKType;
    isAmino(o: any): o is MsgChannelOpenTryAmino;
    encode(message: MsgChannelOpenTry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenTry;
    fromJSON(object: any): MsgChannelOpenTry;
    toJSON(message: MsgChannelOpenTry): unknown;
    fromPartial(object: DeepPartial<MsgChannelOpenTry>): MsgChannelOpenTry;
    fromSDK(object: MsgChannelOpenTrySDKType): MsgChannelOpenTry;
    toSDK(message: MsgChannelOpenTry): MsgChannelOpenTrySDKType;
    fromAmino(object: MsgChannelOpenTryAmino): MsgChannelOpenTry;
    toAmino(message: MsgChannelOpenTry): MsgChannelOpenTryAmino;
    fromAminoMsg(object: MsgChannelOpenTryAminoMsg): MsgChannelOpenTry;
    toAminoMsg(message: MsgChannelOpenTry): MsgChannelOpenTryAminoMsg;
    fromProtoMsg(message: MsgChannelOpenTryProtoMsg): MsgChannelOpenTry;
    toProto(message: MsgChannelOpenTry): Uint8Array;
    toProtoMsg(message: MsgChannelOpenTry): MsgChannelOpenTryProtoMsg;
};
export declare const MsgChannelOpenTryResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelOpenTryResponse;
    isSDK(o: any): o is MsgChannelOpenTryResponseSDKType;
    isAmino(o: any): o is MsgChannelOpenTryResponseAmino;
    encode(_: MsgChannelOpenTryResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenTryResponse;
    fromJSON(_: any): MsgChannelOpenTryResponse;
    toJSON(_: MsgChannelOpenTryResponse): unknown;
    fromPartial(_: DeepPartial<MsgChannelOpenTryResponse>): MsgChannelOpenTryResponse;
    fromSDK(_: MsgChannelOpenTryResponseSDKType): MsgChannelOpenTryResponse;
    toSDK(_: MsgChannelOpenTryResponse): MsgChannelOpenTryResponseSDKType;
    fromAmino(_: MsgChannelOpenTryResponseAmino): MsgChannelOpenTryResponse;
    toAmino(_: MsgChannelOpenTryResponse): MsgChannelOpenTryResponseAmino;
    fromAminoMsg(object: MsgChannelOpenTryResponseAminoMsg): MsgChannelOpenTryResponse;
    toAminoMsg(message: MsgChannelOpenTryResponse): MsgChannelOpenTryResponseAminoMsg;
    fromProtoMsg(message: MsgChannelOpenTryResponseProtoMsg): MsgChannelOpenTryResponse;
    toProto(message: MsgChannelOpenTryResponse): Uint8Array;
    toProtoMsg(message: MsgChannelOpenTryResponse): MsgChannelOpenTryResponseProtoMsg;
};
export declare const MsgChannelOpenAck: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelOpenAck;
    isSDK(o: any): o is MsgChannelOpenAckSDKType;
    isAmino(o: any): o is MsgChannelOpenAckAmino;
    encode(message: MsgChannelOpenAck, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenAck;
    fromJSON(object: any): MsgChannelOpenAck;
    toJSON(message: MsgChannelOpenAck): unknown;
    fromPartial(object: DeepPartial<MsgChannelOpenAck>): MsgChannelOpenAck;
    fromSDK(object: MsgChannelOpenAckSDKType): MsgChannelOpenAck;
    toSDK(message: MsgChannelOpenAck): MsgChannelOpenAckSDKType;
    fromAmino(object: MsgChannelOpenAckAmino): MsgChannelOpenAck;
    toAmino(message: MsgChannelOpenAck): MsgChannelOpenAckAmino;
    fromAminoMsg(object: MsgChannelOpenAckAminoMsg): MsgChannelOpenAck;
    toAminoMsg(message: MsgChannelOpenAck): MsgChannelOpenAckAminoMsg;
    fromProtoMsg(message: MsgChannelOpenAckProtoMsg): MsgChannelOpenAck;
    toProto(message: MsgChannelOpenAck): Uint8Array;
    toProtoMsg(message: MsgChannelOpenAck): MsgChannelOpenAckProtoMsg;
};
export declare const MsgChannelOpenAckResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelOpenAckResponse;
    isSDK(o: any): o is MsgChannelOpenAckResponseSDKType;
    isAmino(o: any): o is MsgChannelOpenAckResponseAmino;
    encode(_: MsgChannelOpenAckResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenAckResponse;
    fromJSON(_: any): MsgChannelOpenAckResponse;
    toJSON(_: MsgChannelOpenAckResponse): unknown;
    fromPartial(_: DeepPartial<MsgChannelOpenAckResponse>): MsgChannelOpenAckResponse;
    fromSDK(_: MsgChannelOpenAckResponseSDKType): MsgChannelOpenAckResponse;
    toSDK(_: MsgChannelOpenAckResponse): MsgChannelOpenAckResponseSDKType;
    fromAmino(_: MsgChannelOpenAckResponseAmino): MsgChannelOpenAckResponse;
    toAmino(_: MsgChannelOpenAckResponse): MsgChannelOpenAckResponseAmino;
    fromAminoMsg(object: MsgChannelOpenAckResponseAminoMsg): MsgChannelOpenAckResponse;
    toAminoMsg(message: MsgChannelOpenAckResponse): MsgChannelOpenAckResponseAminoMsg;
    fromProtoMsg(message: MsgChannelOpenAckResponseProtoMsg): MsgChannelOpenAckResponse;
    toProto(message: MsgChannelOpenAckResponse): Uint8Array;
    toProtoMsg(message: MsgChannelOpenAckResponse): MsgChannelOpenAckResponseProtoMsg;
};
export declare const MsgChannelOpenConfirm: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelOpenConfirm;
    isSDK(o: any): o is MsgChannelOpenConfirmSDKType;
    isAmino(o: any): o is MsgChannelOpenConfirmAmino;
    encode(message: MsgChannelOpenConfirm, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenConfirm;
    fromJSON(object: any): MsgChannelOpenConfirm;
    toJSON(message: MsgChannelOpenConfirm): unknown;
    fromPartial(object: DeepPartial<MsgChannelOpenConfirm>): MsgChannelOpenConfirm;
    fromSDK(object: MsgChannelOpenConfirmSDKType): MsgChannelOpenConfirm;
    toSDK(message: MsgChannelOpenConfirm): MsgChannelOpenConfirmSDKType;
    fromAmino(object: MsgChannelOpenConfirmAmino): MsgChannelOpenConfirm;
    toAmino(message: MsgChannelOpenConfirm): MsgChannelOpenConfirmAmino;
    fromAminoMsg(object: MsgChannelOpenConfirmAminoMsg): MsgChannelOpenConfirm;
    toAminoMsg(message: MsgChannelOpenConfirm): MsgChannelOpenConfirmAminoMsg;
    fromProtoMsg(message: MsgChannelOpenConfirmProtoMsg): MsgChannelOpenConfirm;
    toProto(message: MsgChannelOpenConfirm): Uint8Array;
    toProtoMsg(message: MsgChannelOpenConfirm): MsgChannelOpenConfirmProtoMsg;
};
export declare const MsgChannelOpenConfirmResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelOpenConfirmResponse;
    isSDK(o: any): o is MsgChannelOpenConfirmResponseSDKType;
    isAmino(o: any): o is MsgChannelOpenConfirmResponseAmino;
    encode(_: MsgChannelOpenConfirmResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelOpenConfirmResponse;
    fromJSON(_: any): MsgChannelOpenConfirmResponse;
    toJSON(_: MsgChannelOpenConfirmResponse): unknown;
    fromPartial(_: DeepPartial<MsgChannelOpenConfirmResponse>): MsgChannelOpenConfirmResponse;
    fromSDK(_: MsgChannelOpenConfirmResponseSDKType): MsgChannelOpenConfirmResponse;
    toSDK(_: MsgChannelOpenConfirmResponse): MsgChannelOpenConfirmResponseSDKType;
    fromAmino(_: MsgChannelOpenConfirmResponseAmino): MsgChannelOpenConfirmResponse;
    toAmino(_: MsgChannelOpenConfirmResponse): MsgChannelOpenConfirmResponseAmino;
    fromAminoMsg(object: MsgChannelOpenConfirmResponseAminoMsg): MsgChannelOpenConfirmResponse;
    toAminoMsg(message: MsgChannelOpenConfirmResponse): MsgChannelOpenConfirmResponseAminoMsg;
    fromProtoMsg(message: MsgChannelOpenConfirmResponseProtoMsg): MsgChannelOpenConfirmResponse;
    toProto(message: MsgChannelOpenConfirmResponse): Uint8Array;
    toProtoMsg(message: MsgChannelOpenConfirmResponse): MsgChannelOpenConfirmResponseProtoMsg;
};
export declare const MsgChannelCloseInit: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelCloseInit;
    isSDK(o: any): o is MsgChannelCloseInitSDKType;
    isAmino(o: any): o is MsgChannelCloseInitAmino;
    encode(message: MsgChannelCloseInit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelCloseInit;
    fromJSON(object: any): MsgChannelCloseInit;
    toJSON(message: MsgChannelCloseInit): unknown;
    fromPartial(object: DeepPartial<MsgChannelCloseInit>): MsgChannelCloseInit;
    fromSDK(object: MsgChannelCloseInitSDKType): MsgChannelCloseInit;
    toSDK(message: MsgChannelCloseInit): MsgChannelCloseInitSDKType;
    fromAmino(object: MsgChannelCloseInitAmino): MsgChannelCloseInit;
    toAmino(message: MsgChannelCloseInit): MsgChannelCloseInitAmino;
    fromAminoMsg(object: MsgChannelCloseInitAminoMsg): MsgChannelCloseInit;
    toAminoMsg(message: MsgChannelCloseInit): MsgChannelCloseInitAminoMsg;
    fromProtoMsg(message: MsgChannelCloseInitProtoMsg): MsgChannelCloseInit;
    toProto(message: MsgChannelCloseInit): Uint8Array;
    toProtoMsg(message: MsgChannelCloseInit): MsgChannelCloseInitProtoMsg;
};
export declare const MsgChannelCloseInitResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelCloseInitResponse;
    isSDK(o: any): o is MsgChannelCloseInitResponseSDKType;
    isAmino(o: any): o is MsgChannelCloseInitResponseAmino;
    encode(_: MsgChannelCloseInitResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelCloseInitResponse;
    fromJSON(_: any): MsgChannelCloseInitResponse;
    toJSON(_: MsgChannelCloseInitResponse): unknown;
    fromPartial(_: DeepPartial<MsgChannelCloseInitResponse>): MsgChannelCloseInitResponse;
    fromSDK(_: MsgChannelCloseInitResponseSDKType): MsgChannelCloseInitResponse;
    toSDK(_: MsgChannelCloseInitResponse): MsgChannelCloseInitResponseSDKType;
    fromAmino(_: MsgChannelCloseInitResponseAmino): MsgChannelCloseInitResponse;
    toAmino(_: MsgChannelCloseInitResponse): MsgChannelCloseInitResponseAmino;
    fromAminoMsg(object: MsgChannelCloseInitResponseAminoMsg): MsgChannelCloseInitResponse;
    toAminoMsg(message: MsgChannelCloseInitResponse): MsgChannelCloseInitResponseAminoMsg;
    fromProtoMsg(message: MsgChannelCloseInitResponseProtoMsg): MsgChannelCloseInitResponse;
    toProto(message: MsgChannelCloseInitResponse): Uint8Array;
    toProtoMsg(message: MsgChannelCloseInitResponse): MsgChannelCloseInitResponseProtoMsg;
};
export declare const MsgChannelCloseConfirm: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelCloseConfirm;
    isSDK(o: any): o is MsgChannelCloseConfirmSDKType;
    isAmino(o: any): o is MsgChannelCloseConfirmAmino;
    encode(message: MsgChannelCloseConfirm, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelCloseConfirm;
    fromJSON(object: any): MsgChannelCloseConfirm;
    toJSON(message: MsgChannelCloseConfirm): unknown;
    fromPartial(object: DeepPartial<MsgChannelCloseConfirm>): MsgChannelCloseConfirm;
    fromSDK(object: MsgChannelCloseConfirmSDKType): MsgChannelCloseConfirm;
    toSDK(message: MsgChannelCloseConfirm): MsgChannelCloseConfirmSDKType;
    fromAmino(object: MsgChannelCloseConfirmAmino): MsgChannelCloseConfirm;
    toAmino(message: MsgChannelCloseConfirm): MsgChannelCloseConfirmAmino;
    fromAminoMsg(object: MsgChannelCloseConfirmAminoMsg): MsgChannelCloseConfirm;
    toAminoMsg(message: MsgChannelCloseConfirm): MsgChannelCloseConfirmAminoMsg;
    fromProtoMsg(message: MsgChannelCloseConfirmProtoMsg): MsgChannelCloseConfirm;
    toProto(message: MsgChannelCloseConfirm): Uint8Array;
    toProtoMsg(message: MsgChannelCloseConfirm): MsgChannelCloseConfirmProtoMsg;
};
export declare const MsgChannelCloseConfirmResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgChannelCloseConfirmResponse;
    isSDK(o: any): o is MsgChannelCloseConfirmResponseSDKType;
    isAmino(o: any): o is MsgChannelCloseConfirmResponseAmino;
    encode(_: MsgChannelCloseConfirmResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgChannelCloseConfirmResponse;
    fromJSON(_: any): MsgChannelCloseConfirmResponse;
    toJSON(_: MsgChannelCloseConfirmResponse): unknown;
    fromPartial(_: DeepPartial<MsgChannelCloseConfirmResponse>): MsgChannelCloseConfirmResponse;
    fromSDK(_: MsgChannelCloseConfirmResponseSDKType): MsgChannelCloseConfirmResponse;
    toSDK(_: MsgChannelCloseConfirmResponse): MsgChannelCloseConfirmResponseSDKType;
    fromAmino(_: MsgChannelCloseConfirmResponseAmino): MsgChannelCloseConfirmResponse;
    toAmino(_: MsgChannelCloseConfirmResponse): MsgChannelCloseConfirmResponseAmino;
    fromAminoMsg(object: MsgChannelCloseConfirmResponseAminoMsg): MsgChannelCloseConfirmResponse;
    toAminoMsg(message: MsgChannelCloseConfirmResponse): MsgChannelCloseConfirmResponseAminoMsg;
    fromProtoMsg(message: MsgChannelCloseConfirmResponseProtoMsg): MsgChannelCloseConfirmResponse;
    toProto(message: MsgChannelCloseConfirmResponse): Uint8Array;
    toProtoMsg(message: MsgChannelCloseConfirmResponse): MsgChannelCloseConfirmResponseProtoMsg;
};
export declare const MsgRecvPacket: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgRecvPacket;
    isSDK(o: any): o is MsgRecvPacketSDKType;
    isAmino(o: any): o is MsgRecvPacketAmino;
    encode(message: MsgRecvPacket, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRecvPacket;
    fromJSON(object: any): MsgRecvPacket;
    toJSON(message: MsgRecvPacket): unknown;
    fromPartial(object: DeepPartial<MsgRecvPacket>): MsgRecvPacket;
    fromSDK(object: MsgRecvPacketSDKType): MsgRecvPacket;
    toSDK(message: MsgRecvPacket): MsgRecvPacketSDKType;
    fromAmino(object: MsgRecvPacketAmino): MsgRecvPacket;
    toAmino(message: MsgRecvPacket): MsgRecvPacketAmino;
    fromAminoMsg(object: MsgRecvPacketAminoMsg): MsgRecvPacket;
    toAminoMsg(message: MsgRecvPacket): MsgRecvPacketAminoMsg;
    fromProtoMsg(message: MsgRecvPacketProtoMsg): MsgRecvPacket;
    toProto(message: MsgRecvPacket): Uint8Array;
    toProtoMsg(message: MsgRecvPacket): MsgRecvPacketProtoMsg;
};
export declare const MsgRecvPacketResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgRecvPacketResponse;
    isSDK(o: any): o is MsgRecvPacketResponseSDKType;
    isAmino(o: any): o is MsgRecvPacketResponseAmino;
    encode(_: MsgRecvPacketResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgRecvPacketResponse;
    fromJSON(_: any): MsgRecvPacketResponse;
    toJSON(_: MsgRecvPacketResponse): unknown;
    fromPartial(_: DeepPartial<MsgRecvPacketResponse>): MsgRecvPacketResponse;
    fromSDK(_: MsgRecvPacketResponseSDKType): MsgRecvPacketResponse;
    toSDK(_: MsgRecvPacketResponse): MsgRecvPacketResponseSDKType;
    fromAmino(_: MsgRecvPacketResponseAmino): MsgRecvPacketResponse;
    toAmino(_: MsgRecvPacketResponse): MsgRecvPacketResponseAmino;
    fromAminoMsg(object: MsgRecvPacketResponseAminoMsg): MsgRecvPacketResponse;
    toAminoMsg(message: MsgRecvPacketResponse): MsgRecvPacketResponseAminoMsg;
    fromProtoMsg(message: MsgRecvPacketResponseProtoMsg): MsgRecvPacketResponse;
    toProto(message: MsgRecvPacketResponse): Uint8Array;
    toProtoMsg(message: MsgRecvPacketResponse): MsgRecvPacketResponseProtoMsg;
};
export declare const MsgTimeout: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgTimeout;
    isSDK(o: any): o is MsgTimeoutSDKType;
    isAmino(o: any): o is MsgTimeoutAmino;
    encode(message: MsgTimeout, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgTimeout;
    fromJSON(object: any): MsgTimeout;
    toJSON(message: MsgTimeout): unknown;
    fromPartial(object: DeepPartial<MsgTimeout>): MsgTimeout;
    fromSDK(object: MsgTimeoutSDKType): MsgTimeout;
    toSDK(message: MsgTimeout): MsgTimeoutSDKType;
    fromAmino(object: MsgTimeoutAmino): MsgTimeout;
    toAmino(message: MsgTimeout): MsgTimeoutAmino;
    fromAminoMsg(object: MsgTimeoutAminoMsg): MsgTimeout;
    toAminoMsg(message: MsgTimeout): MsgTimeoutAminoMsg;
    fromProtoMsg(message: MsgTimeoutProtoMsg): MsgTimeout;
    toProto(message: MsgTimeout): Uint8Array;
    toProtoMsg(message: MsgTimeout): MsgTimeoutProtoMsg;
};
export declare const MsgTimeoutResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgTimeoutResponse;
    isSDK(o: any): o is MsgTimeoutResponseSDKType;
    isAmino(o: any): o is MsgTimeoutResponseAmino;
    encode(_: MsgTimeoutResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgTimeoutResponse;
    fromJSON(_: any): MsgTimeoutResponse;
    toJSON(_: MsgTimeoutResponse): unknown;
    fromPartial(_: DeepPartial<MsgTimeoutResponse>): MsgTimeoutResponse;
    fromSDK(_: MsgTimeoutResponseSDKType): MsgTimeoutResponse;
    toSDK(_: MsgTimeoutResponse): MsgTimeoutResponseSDKType;
    fromAmino(_: MsgTimeoutResponseAmino): MsgTimeoutResponse;
    toAmino(_: MsgTimeoutResponse): MsgTimeoutResponseAmino;
    fromAminoMsg(object: MsgTimeoutResponseAminoMsg): MsgTimeoutResponse;
    toAminoMsg(message: MsgTimeoutResponse): MsgTimeoutResponseAminoMsg;
    fromProtoMsg(message: MsgTimeoutResponseProtoMsg): MsgTimeoutResponse;
    toProto(message: MsgTimeoutResponse): Uint8Array;
    toProtoMsg(message: MsgTimeoutResponse): MsgTimeoutResponseProtoMsg;
};
export declare const MsgTimeoutOnClose: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgTimeoutOnClose;
    isSDK(o: any): o is MsgTimeoutOnCloseSDKType;
    isAmino(o: any): o is MsgTimeoutOnCloseAmino;
    encode(message: MsgTimeoutOnClose, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgTimeoutOnClose;
    fromJSON(object: any): MsgTimeoutOnClose;
    toJSON(message: MsgTimeoutOnClose): unknown;
    fromPartial(object: DeepPartial<MsgTimeoutOnClose>): MsgTimeoutOnClose;
    fromSDK(object: MsgTimeoutOnCloseSDKType): MsgTimeoutOnClose;
    toSDK(message: MsgTimeoutOnClose): MsgTimeoutOnCloseSDKType;
    fromAmino(object: MsgTimeoutOnCloseAmino): MsgTimeoutOnClose;
    toAmino(message: MsgTimeoutOnClose): MsgTimeoutOnCloseAmino;
    fromAminoMsg(object: MsgTimeoutOnCloseAminoMsg): MsgTimeoutOnClose;
    toAminoMsg(message: MsgTimeoutOnClose): MsgTimeoutOnCloseAminoMsg;
    fromProtoMsg(message: MsgTimeoutOnCloseProtoMsg): MsgTimeoutOnClose;
    toProto(message: MsgTimeoutOnClose): Uint8Array;
    toProtoMsg(message: MsgTimeoutOnClose): MsgTimeoutOnCloseProtoMsg;
};
export declare const MsgTimeoutOnCloseResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgTimeoutOnCloseResponse;
    isSDK(o: any): o is MsgTimeoutOnCloseResponseSDKType;
    isAmino(o: any): o is MsgTimeoutOnCloseResponseAmino;
    encode(_: MsgTimeoutOnCloseResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgTimeoutOnCloseResponse;
    fromJSON(_: any): MsgTimeoutOnCloseResponse;
    toJSON(_: MsgTimeoutOnCloseResponse): unknown;
    fromPartial(_: DeepPartial<MsgTimeoutOnCloseResponse>): MsgTimeoutOnCloseResponse;
    fromSDK(_: MsgTimeoutOnCloseResponseSDKType): MsgTimeoutOnCloseResponse;
    toSDK(_: MsgTimeoutOnCloseResponse): MsgTimeoutOnCloseResponseSDKType;
    fromAmino(_: MsgTimeoutOnCloseResponseAmino): MsgTimeoutOnCloseResponse;
    toAmino(_: MsgTimeoutOnCloseResponse): MsgTimeoutOnCloseResponseAmino;
    fromAminoMsg(object: MsgTimeoutOnCloseResponseAminoMsg): MsgTimeoutOnCloseResponse;
    toAminoMsg(message: MsgTimeoutOnCloseResponse): MsgTimeoutOnCloseResponseAminoMsg;
    fromProtoMsg(message: MsgTimeoutOnCloseResponseProtoMsg): MsgTimeoutOnCloseResponse;
    toProto(message: MsgTimeoutOnCloseResponse): Uint8Array;
    toProtoMsg(message: MsgTimeoutOnCloseResponse): MsgTimeoutOnCloseResponseProtoMsg;
};
export declare const MsgAcknowledgement: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgAcknowledgement;
    isSDK(o: any): o is MsgAcknowledgementSDKType;
    isAmino(o: any): o is MsgAcknowledgementAmino;
    encode(message: MsgAcknowledgement, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAcknowledgement;
    fromJSON(object: any): MsgAcknowledgement;
    toJSON(message: MsgAcknowledgement): unknown;
    fromPartial(object: DeepPartial<MsgAcknowledgement>): MsgAcknowledgement;
    fromSDK(object: MsgAcknowledgementSDKType): MsgAcknowledgement;
    toSDK(message: MsgAcknowledgement): MsgAcknowledgementSDKType;
    fromAmino(object: MsgAcknowledgementAmino): MsgAcknowledgement;
    toAmino(message: MsgAcknowledgement): MsgAcknowledgementAmino;
    fromAminoMsg(object: MsgAcknowledgementAminoMsg): MsgAcknowledgement;
    toAminoMsg(message: MsgAcknowledgement): MsgAcknowledgementAminoMsg;
    fromProtoMsg(message: MsgAcknowledgementProtoMsg): MsgAcknowledgement;
    toProto(message: MsgAcknowledgement): Uint8Array;
    toProtoMsg(message: MsgAcknowledgement): MsgAcknowledgementProtoMsg;
};
export declare const MsgAcknowledgementResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgAcknowledgementResponse;
    isSDK(o: any): o is MsgAcknowledgementResponseSDKType;
    isAmino(o: any): o is MsgAcknowledgementResponseAmino;
    encode(_: MsgAcknowledgementResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgAcknowledgementResponse;
    fromJSON(_: any): MsgAcknowledgementResponse;
    toJSON(_: MsgAcknowledgementResponse): unknown;
    fromPartial(_: DeepPartial<MsgAcknowledgementResponse>): MsgAcknowledgementResponse;
    fromSDK(_: MsgAcknowledgementResponseSDKType): MsgAcknowledgementResponse;
    toSDK(_: MsgAcknowledgementResponse): MsgAcknowledgementResponseSDKType;
    fromAmino(_: MsgAcknowledgementResponseAmino): MsgAcknowledgementResponse;
    toAmino(_: MsgAcknowledgementResponse): MsgAcknowledgementResponseAmino;
    fromAminoMsg(object: MsgAcknowledgementResponseAminoMsg): MsgAcknowledgementResponse;
    toAminoMsg(message: MsgAcknowledgementResponse): MsgAcknowledgementResponseAminoMsg;
    fromProtoMsg(message: MsgAcknowledgementResponseProtoMsg): MsgAcknowledgementResponse;
    toProto(message: MsgAcknowledgementResponse): Uint8Array;
    toProtoMsg(message: MsgAcknowledgementResponse): MsgAcknowledgementResponseProtoMsg;
};
