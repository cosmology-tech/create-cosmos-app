import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { DenomAuthorityMetadata, DenomAuthorityMetadataAmino, DenomAuthorityMetadataSDKType } from "./authorityMetadata";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisState {
    /** params defines the paramaters of the module. */
    params: Params | undefined;
    factoryDenoms: GenesisDenom[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisStateAmino {
    /** params defines the paramaters of the module. */
    params?: ParamsAmino | undefined;
    factory_denoms?: GenesisDenomAmino[];
}
export interface GenesisStateAminoMsg {
    type: "osmosis/tokenfactory/genesis-state";
    value: GenesisStateAmino;
}
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType | undefined;
    factory_denoms: GenesisDenomSDKType[];
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenom {
    denom: string;
    authorityMetadata: DenomAuthorityMetadata | undefined;
}
export interface GenesisDenomProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.GenesisDenom";
    value: Uint8Array;
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenomAmino {
    denom?: string;
    authority_metadata?: DenomAuthorityMetadataAmino | undefined;
}
export interface GenesisDenomAminoMsg {
    type: "osmosis/tokenfactory/genesis-denom";
    value: GenesisDenomAmino;
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenomSDKType {
    denom: string;
    authority_metadata: DenomAuthorityMetadataSDKType | undefined;
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
export declare const GenesisDenom: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GenesisDenom;
    isSDK(o: any): o is GenesisDenomSDKType;
    isAmino(o: any): o is GenesisDenomAmino;
    encode(message: GenesisDenom, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisDenom;
    fromJSON(object: any): GenesisDenom;
    toJSON(message: GenesisDenom): unknown;
    fromPartial(object: DeepPartial<GenesisDenom>): GenesisDenom;
    fromSDK(object: GenesisDenomSDKType): GenesisDenom;
    toSDK(message: GenesisDenom): GenesisDenomSDKType;
    fromAmino(object: GenesisDenomAmino): GenesisDenom;
    toAmino(message: GenesisDenom): GenesisDenomAmino;
    fromAminoMsg(object: GenesisDenomAminoMsg): GenesisDenom;
    toAminoMsg(message: GenesisDenom): GenesisDenomAminoMsg;
    fromProtoMsg(message: GenesisDenomProtoMsg): GenesisDenom;
    toProto(message: GenesisDenom): Uint8Array;
    toProtoMsg(message: GenesisDenom): GenesisDenomProtoMsg;
};
