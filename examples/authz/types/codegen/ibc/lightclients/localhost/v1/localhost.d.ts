import { Height, HeightAmino, HeightSDKType } from "../../../core/client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * ClientState defines a loopback (localhost) client. It requires (read-only)
 * access to keys outside the client prefix.
 */
export interface ClientState {
    /** self chain ID */
    chainId: string;
    /** self latest block height */
    height: Height | undefined;
}
export interface ClientStateProtoMsg {
    typeUrl: "/ibc.lightclients.localhost.v1.ClientState";
    value: Uint8Array;
}
/**
 * ClientState defines a loopback (localhost) client. It requires (read-only)
 * access to keys outside the client prefix.
 */
export interface ClientStateAmino {
    /** self chain ID */
    chain_id?: string;
    /** self latest block height */
    height?: HeightAmino | undefined;
}
export interface ClientStateAminoMsg {
    type: "cosmos-sdk/ClientState";
    value: ClientStateAmino;
}
/**
 * ClientState defines a loopback (localhost) client. It requires (read-only)
 * access to keys outside the client prefix.
 */
export interface ClientStateSDKType {
    chain_id: string;
    height: HeightSDKType | undefined;
}
export declare const ClientState: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ClientState;
    isSDK(o: any): o is ClientStateSDKType;
    isAmino(o: any): o is ClientStateAmino;
    encode(message: ClientState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ClientState;
    fromJSON(object: any): ClientState;
    toJSON(message: ClientState): unknown;
    fromPartial(object: DeepPartial<ClientState>): ClientState;
    fromSDK(object: ClientStateSDKType): ClientState;
    toSDK(message: ClientState): ClientStateSDKType;
    fromAmino(object: ClientStateAmino): ClientState;
    toAmino(message: ClientState): ClientStateAmino;
    fromAminoMsg(object: ClientStateAminoMsg): ClientState;
    toAminoMsg(message: ClientState): ClientStateAminoMsg;
    fromProtoMsg(message: ClientStateProtoMsg): ClientState;
    toProto(message: ClientState): Uint8Array;
    toProtoMsg(message: ClientState): ClientStateProtoMsg;
};
