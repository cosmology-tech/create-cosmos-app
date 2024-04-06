import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 */
export interface DenomTrace {
    /**
     * path defines the chain of port/channel identifiers used for tracing the
     * source of the fungible token.
     */
    path: string;
    /** base denomination of the relayed fungible token. */
    baseDenom: string;
}
export interface DenomTraceProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.DenomTrace";
    value: Uint8Array;
}
/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 */
export interface DenomTraceAmino {
    /**
     * path defines the chain of port/channel identifiers used for tracing the
     * source of the fungible token.
     */
    path?: string;
    /** base denomination of the relayed fungible token. */
    base_denom?: string;
}
export interface DenomTraceAminoMsg {
    type: "cosmos-sdk/DenomTrace";
    value: DenomTraceAmino;
}
/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 */
export interface DenomTraceSDKType {
    path: string;
    base_denom: string;
}
/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 */
export interface Params {
    /**
     * send_enabled enables or disables all cross-chain token transfers from this
     * chain.
     */
    sendEnabled: boolean;
    /**
     * receive_enabled enables or disables all cross-chain token transfers to this
     * chain.
     */
    receiveEnabled: boolean;
}
export interface ParamsProtoMsg {
    typeUrl: "/ibc.applications.transfer.v1.Params";
    value: Uint8Array;
}
/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 */
export interface ParamsAmino {
    /**
     * send_enabled enables or disables all cross-chain token transfers from this
     * chain.
     */
    send_enabled?: boolean;
    /**
     * receive_enabled enables or disables all cross-chain token transfers to this
     * chain.
     */
    receive_enabled?: boolean;
}
export interface ParamsAminoMsg {
    type: "cosmos-sdk/Params";
    value: ParamsAmino;
}
/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 */
export interface ParamsSDKType {
    send_enabled: boolean;
    receive_enabled: boolean;
}
export declare const DenomTrace: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is DenomTrace;
    isSDK(o: any): o is DenomTraceSDKType;
    isAmino(o: any): o is DenomTraceAmino;
    encode(message: DenomTrace, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DenomTrace;
    fromJSON(object: any): DenomTrace;
    toJSON(message: DenomTrace): unknown;
    fromPartial(object: DeepPartial<DenomTrace>): DenomTrace;
    fromSDK(object: DenomTraceSDKType): DenomTrace;
    toSDK(message: DenomTrace): DenomTraceSDKType;
    fromAmino(object: DenomTraceAmino): DenomTrace;
    toAmino(message: DenomTrace): DenomTraceAmino;
    fromAminoMsg(object: DenomTraceAminoMsg): DenomTrace;
    toAminoMsg(message: DenomTrace): DenomTraceAminoMsg;
    fromProtoMsg(message: DenomTraceProtoMsg): DenomTrace;
    toProto(message: DenomTrace): Uint8Array;
    toProtoMsg(message: DenomTrace): DenomTraceProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Params;
    isSDK(o: any): o is ParamsSDKType;
    isAmino(o: any): o is ParamsAmino;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
    fromSDK(object: ParamsSDKType): Params;
    toSDK(message: Params): ParamsSDKType;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    toAminoMsg(message: Params): ParamsAminoMsg;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
