import { IdentifiedClientState, IdentifiedClientStateAmino, IdentifiedClientStateSDKType, ClientConsensusStates, ClientConsensusStatesAmino, ClientConsensusStatesSDKType, Params, ParamsAmino, ParamsSDKType } from "./client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/** GenesisState defines the ibc client submodule's genesis state. */
export interface GenesisState {
    /** client states with their corresponding identifiers */
    clients: IdentifiedClientState[];
    /** consensus states from each client */
    clientsConsensus: ClientConsensusStates[];
    /** metadata from each client */
    clientsMetadata: IdentifiedGenesisMetadata[];
    params: Params | undefined;
    /** create localhost on initialization */
    createLocalhost: boolean;
    /** the sequence for the next generated client identifier */
    nextClientSequence: bigint;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/ibc.core.client.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the ibc client submodule's genesis state. */
export interface GenesisStateAmino {
    /** client states with their corresponding identifiers */
    clients?: IdentifiedClientStateAmino[];
    /** consensus states from each client */
    clients_consensus?: ClientConsensusStatesAmino[];
    /** metadata from each client */
    clients_metadata?: IdentifiedGenesisMetadataAmino[];
    params?: ParamsAmino | undefined;
    /** create localhost on initialization */
    create_localhost?: boolean;
    /** the sequence for the next generated client identifier */
    next_client_sequence?: string;
}
export interface GenesisStateAminoMsg {
    type: "cosmos-sdk/GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the ibc client submodule's genesis state. */
export interface GenesisStateSDKType {
    clients: IdentifiedClientStateSDKType[];
    clients_consensus: ClientConsensusStatesSDKType[];
    clients_metadata: IdentifiedGenesisMetadataSDKType[];
    params: ParamsSDKType | undefined;
    create_localhost: boolean;
    next_client_sequence: bigint;
}
/**
 * GenesisMetadata defines the genesis type for metadata that clients may return
 * with ExportMetadata
 */
export interface GenesisMetadata {
    /** store key of metadata without clientID-prefix */
    key: Uint8Array;
    /** metadata value */
    value: Uint8Array;
}
export interface GenesisMetadataProtoMsg {
    typeUrl: "/ibc.core.client.v1.GenesisMetadata";
    value: Uint8Array;
}
/**
 * GenesisMetadata defines the genesis type for metadata that clients may return
 * with ExportMetadata
 */
export interface GenesisMetadataAmino {
    /** store key of metadata without clientID-prefix */
    key?: string;
    /** metadata value */
    value?: string;
}
export interface GenesisMetadataAminoMsg {
    type: "cosmos-sdk/GenesisMetadata";
    value: GenesisMetadataAmino;
}
/**
 * GenesisMetadata defines the genesis type for metadata that clients may return
 * with ExportMetadata
 */
export interface GenesisMetadataSDKType {
    key: Uint8Array;
    value: Uint8Array;
}
/**
 * IdentifiedGenesisMetadata has the client metadata with the corresponding
 * client id.
 */
export interface IdentifiedGenesisMetadata {
    clientId: string;
    clientMetadata: GenesisMetadata[];
}
export interface IdentifiedGenesisMetadataProtoMsg {
    typeUrl: "/ibc.core.client.v1.IdentifiedGenesisMetadata";
    value: Uint8Array;
}
/**
 * IdentifiedGenesisMetadata has the client metadata with the corresponding
 * client id.
 */
export interface IdentifiedGenesisMetadataAmino {
    client_id?: string;
    client_metadata?: GenesisMetadataAmino[];
}
export interface IdentifiedGenesisMetadataAminoMsg {
    type: "cosmos-sdk/IdentifiedGenesisMetadata";
    value: IdentifiedGenesisMetadataAmino;
}
/**
 * IdentifiedGenesisMetadata has the client metadata with the corresponding
 * client id.
 */
export interface IdentifiedGenesisMetadataSDKType {
    client_id: string;
    client_metadata: GenesisMetadataSDKType[];
}
export declare const GenesisState: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GenesisState;
    isSDK(o: any): o is GenesisStateSDKType;
    isAmino(o: any): o is GenesisStateAmino;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
    fromSDK(object: GenesisStateSDKType): GenesisState;
    toSDK(message: GenesisState): GenesisStateSDKType;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const GenesisMetadata: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GenesisMetadata;
    isSDK(o: any): o is GenesisMetadataSDKType;
    isAmino(o: any): o is GenesisMetadataAmino;
    encode(message: GenesisMetadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisMetadata;
    fromJSON(object: any): GenesisMetadata;
    toJSON(message: GenesisMetadata): unknown;
    fromPartial(object: DeepPartial<GenesisMetadata>): GenesisMetadata;
    fromSDK(object: GenesisMetadataSDKType): GenesisMetadata;
    toSDK(message: GenesisMetadata): GenesisMetadataSDKType;
    fromAmino(object: GenesisMetadataAmino): GenesisMetadata;
    toAmino(message: GenesisMetadata): GenesisMetadataAmino;
    fromAminoMsg(object: GenesisMetadataAminoMsg): GenesisMetadata;
    toAminoMsg(message: GenesisMetadata): GenesisMetadataAminoMsg;
    fromProtoMsg(message: GenesisMetadataProtoMsg): GenesisMetadata;
    toProto(message: GenesisMetadata): Uint8Array;
    toProtoMsg(message: GenesisMetadata): GenesisMetadataProtoMsg;
};
export declare const IdentifiedGenesisMetadata: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is IdentifiedGenesisMetadata;
    isSDK(o: any): o is IdentifiedGenesisMetadataSDKType;
    isAmino(o: any): o is IdentifiedGenesisMetadataAmino;
    encode(message: IdentifiedGenesisMetadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): IdentifiedGenesisMetadata;
    fromJSON(object: any): IdentifiedGenesisMetadata;
    toJSON(message: IdentifiedGenesisMetadata): unknown;
    fromPartial(object: DeepPartial<IdentifiedGenesisMetadata>): IdentifiedGenesisMetadata;
    fromSDK(object: IdentifiedGenesisMetadataSDKType): IdentifiedGenesisMetadata;
    toSDK(message: IdentifiedGenesisMetadata): IdentifiedGenesisMetadataSDKType;
    fromAmino(object: IdentifiedGenesisMetadataAmino): IdentifiedGenesisMetadata;
    toAmino(message: IdentifiedGenesisMetadata): IdentifiedGenesisMetadataAmino;
    fromAminoMsg(object: IdentifiedGenesisMetadataAminoMsg): IdentifiedGenesisMetadata;
    toAminoMsg(message: IdentifiedGenesisMetadata): IdentifiedGenesisMetadataAminoMsg;
    fromProtoMsg(message: IdentifiedGenesisMetadataProtoMsg): IdentifiedGenesisMetadata;
    toProto(message: IdentifiedGenesisMetadata): Uint8Array;
    toProtoMsg(message: IdentifiedGenesisMetadata): IdentifiedGenesisMetadataProtoMsg;
};
