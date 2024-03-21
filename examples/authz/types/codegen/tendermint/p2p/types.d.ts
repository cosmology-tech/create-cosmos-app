import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
export interface ProtocolVersion {
    p2p: bigint;
    block: bigint;
    app: bigint;
}
export interface ProtocolVersionProtoMsg {
    typeUrl: "/tendermint.p2p.ProtocolVersion";
    value: Uint8Array;
}
export interface ProtocolVersionAmino {
    p2p?: string;
    block?: string;
    app?: string;
}
export interface ProtocolVersionAminoMsg {
    type: "/tendermint.p2p.ProtocolVersion";
    value: ProtocolVersionAmino;
}
export interface ProtocolVersionSDKType {
    p2p: bigint;
    block: bigint;
    app: bigint;
}
export interface NodeInfo {
    protocolVersion: ProtocolVersion | undefined;
    nodeId: string;
    listenAddr: string;
    network: string;
    version: string;
    channels: Uint8Array;
    moniker: string;
    other: NodeInfoOther | undefined;
}
export interface NodeInfoProtoMsg {
    typeUrl: "/tendermint.p2p.NodeInfo";
    value: Uint8Array;
}
export interface NodeInfoAmino {
    protocol_version?: ProtocolVersionAmino | undefined;
    node_id?: string;
    listen_addr?: string;
    network?: string;
    version?: string;
    channels?: string;
    moniker?: string;
    other?: NodeInfoOtherAmino | undefined;
}
export interface NodeInfoAminoMsg {
    type: "/tendermint.p2p.NodeInfo";
    value: NodeInfoAmino;
}
export interface NodeInfoSDKType {
    protocol_version: ProtocolVersionSDKType | undefined;
    node_id: string;
    listen_addr: string;
    network: string;
    version: string;
    channels: Uint8Array;
    moniker: string;
    other: NodeInfoOtherSDKType | undefined;
}
export interface NodeInfoOther {
    txIndex: string;
    rpcAddress: string;
}
export interface NodeInfoOtherProtoMsg {
    typeUrl: "/tendermint.p2p.NodeInfoOther";
    value: Uint8Array;
}
export interface NodeInfoOtherAmino {
    tx_index?: string;
    rpc_address?: string;
}
export interface NodeInfoOtherAminoMsg {
    type: "/tendermint.p2p.NodeInfoOther";
    value: NodeInfoOtherAmino;
}
export interface NodeInfoOtherSDKType {
    tx_index: string;
    rpc_address: string;
}
export interface PeerInfo {
    id: string;
    addressInfo: PeerAddressInfo[];
    lastConnected?: Date | undefined;
}
export interface PeerInfoProtoMsg {
    typeUrl: "/tendermint.p2p.PeerInfo";
    value: Uint8Array;
}
export interface PeerInfoAmino {
    id?: string;
    address_info?: PeerAddressInfoAmino[];
    last_connected?: string | undefined;
}
export interface PeerInfoAminoMsg {
    type: "/tendermint.p2p.PeerInfo";
    value: PeerInfoAmino;
}
export interface PeerInfoSDKType {
    id: string;
    address_info: PeerAddressInfoSDKType[];
    last_connected?: Date | undefined;
}
export interface PeerAddressInfo {
    address: string;
    lastDialSuccess?: Date | undefined;
    lastDialFailure?: Date | undefined;
    dialFailures: number;
}
export interface PeerAddressInfoProtoMsg {
    typeUrl: "/tendermint.p2p.PeerAddressInfo";
    value: Uint8Array;
}
export interface PeerAddressInfoAmino {
    address?: string;
    last_dial_success?: string | undefined;
    last_dial_failure?: string | undefined;
    dial_failures?: number;
}
export interface PeerAddressInfoAminoMsg {
    type: "/tendermint.p2p.PeerAddressInfo";
    value: PeerAddressInfoAmino;
}
export interface PeerAddressInfoSDKType {
    address: string;
    last_dial_success?: Date | undefined;
    last_dial_failure?: Date | undefined;
    dial_failures: number;
}
export declare const ProtocolVersion: {
    typeUrl: string;
    is(o: any): o is ProtocolVersion;
    isSDK(o: any): o is ProtocolVersionSDKType;
    isAmino(o: any): o is ProtocolVersionAmino;
    encode(message: ProtocolVersion, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ProtocolVersion;
    fromJSON(object: any): ProtocolVersion;
    toJSON(message: ProtocolVersion): unknown;
    fromPartial(object: DeepPartial<ProtocolVersion>): ProtocolVersion;
    fromSDK(object: ProtocolVersionSDKType): ProtocolVersion;
    toSDK(message: ProtocolVersion): ProtocolVersionSDKType;
    fromAmino(object: ProtocolVersionAmino): ProtocolVersion;
    toAmino(message: ProtocolVersion): ProtocolVersionAmino;
    fromAminoMsg(object: ProtocolVersionAminoMsg): ProtocolVersion;
    fromProtoMsg(message: ProtocolVersionProtoMsg): ProtocolVersion;
    toProto(message: ProtocolVersion): Uint8Array;
    toProtoMsg(message: ProtocolVersion): ProtocolVersionProtoMsg;
};
export declare const NodeInfo: {
    typeUrl: string;
    is(o: any): o is NodeInfo;
    isSDK(o: any): o is NodeInfoSDKType;
    isAmino(o: any): o is NodeInfoAmino;
    encode(message: NodeInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): NodeInfo;
    fromJSON(object: any): NodeInfo;
    toJSON(message: NodeInfo): unknown;
    fromPartial(object: DeepPartial<NodeInfo>): NodeInfo;
    fromSDK(object: NodeInfoSDKType): NodeInfo;
    toSDK(message: NodeInfo): NodeInfoSDKType;
    fromAmino(object: NodeInfoAmino): NodeInfo;
    toAmino(message: NodeInfo): NodeInfoAmino;
    fromAminoMsg(object: NodeInfoAminoMsg): NodeInfo;
    fromProtoMsg(message: NodeInfoProtoMsg): NodeInfo;
    toProto(message: NodeInfo): Uint8Array;
    toProtoMsg(message: NodeInfo): NodeInfoProtoMsg;
};
export declare const NodeInfoOther: {
    typeUrl: string;
    is(o: any): o is NodeInfoOther;
    isSDK(o: any): o is NodeInfoOtherSDKType;
    isAmino(o: any): o is NodeInfoOtherAmino;
    encode(message: NodeInfoOther, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): NodeInfoOther;
    fromJSON(object: any): NodeInfoOther;
    toJSON(message: NodeInfoOther): unknown;
    fromPartial(object: DeepPartial<NodeInfoOther>): NodeInfoOther;
    fromSDK(object: NodeInfoOtherSDKType): NodeInfoOther;
    toSDK(message: NodeInfoOther): NodeInfoOtherSDKType;
    fromAmino(object: NodeInfoOtherAmino): NodeInfoOther;
    toAmino(message: NodeInfoOther): NodeInfoOtherAmino;
    fromAminoMsg(object: NodeInfoOtherAminoMsg): NodeInfoOther;
    fromProtoMsg(message: NodeInfoOtherProtoMsg): NodeInfoOther;
    toProto(message: NodeInfoOther): Uint8Array;
    toProtoMsg(message: NodeInfoOther): NodeInfoOtherProtoMsg;
};
export declare const PeerInfo: {
    typeUrl: string;
    is(o: any): o is PeerInfo;
    isSDK(o: any): o is PeerInfoSDKType;
    isAmino(o: any): o is PeerInfoAmino;
    encode(message: PeerInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PeerInfo;
    fromJSON(object: any): PeerInfo;
    toJSON(message: PeerInfo): unknown;
    fromPartial(object: DeepPartial<PeerInfo>): PeerInfo;
    fromSDK(object: PeerInfoSDKType): PeerInfo;
    toSDK(message: PeerInfo): PeerInfoSDKType;
    fromAmino(object: PeerInfoAmino): PeerInfo;
    toAmino(message: PeerInfo): PeerInfoAmino;
    fromAminoMsg(object: PeerInfoAminoMsg): PeerInfo;
    fromProtoMsg(message: PeerInfoProtoMsg): PeerInfo;
    toProto(message: PeerInfo): Uint8Array;
    toProtoMsg(message: PeerInfo): PeerInfoProtoMsg;
};
export declare const PeerAddressInfo: {
    typeUrl: string;
    is(o: any): o is PeerAddressInfo;
    isSDK(o: any): o is PeerAddressInfoSDKType;
    isAmino(o: any): o is PeerAddressInfoAmino;
    encode(message: PeerAddressInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PeerAddressInfo;
    fromJSON(object: any): PeerAddressInfo;
    toJSON(message: PeerAddressInfo): unknown;
    fromPartial(object: DeepPartial<PeerAddressInfo>): PeerAddressInfo;
    fromSDK(object: PeerAddressInfoSDKType): PeerAddressInfo;
    toSDK(message: PeerAddressInfo): PeerAddressInfoSDKType;
    fromAmino(object: PeerAddressInfoAmino): PeerAddressInfo;
    toAmino(message: PeerAddressInfo): PeerAddressInfoAmino;
    fromAminoMsg(object: PeerAddressInfoAminoMsg): PeerAddressInfo;
    fromProtoMsg(message: PeerAddressInfoProtoMsg): PeerAddressInfo;
    toProto(message: PeerAddressInfo): Uint8Array;
    toProtoMsg(message: PeerAddressInfo): PeerAddressInfoProtoMsg;
};
