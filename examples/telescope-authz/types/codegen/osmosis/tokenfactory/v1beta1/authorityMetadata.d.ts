import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 */
export interface DenomAuthorityMetadata {
    /** Can be empty for no admin, or a valid osmosis address */
    admin: string;
}
export interface DenomAuthorityMetadataProtoMsg {
    typeUrl: "/osmosis.tokenfactory.v1beta1.DenomAuthorityMetadata";
    value: Uint8Array;
}
/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 */
export interface DenomAuthorityMetadataAmino {
    /** Can be empty for no admin, or a valid osmosis address */
    admin?: string;
}
export interface DenomAuthorityMetadataAminoMsg {
    type: "osmosis/tokenfactory/denom-authority-metadata";
    value: DenomAuthorityMetadataAmino;
}
/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 */
export interface DenomAuthorityMetadataSDKType {
    admin: string;
}
export declare const DenomAuthorityMetadata: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is DenomAuthorityMetadata;
    isSDK(o: any): o is DenomAuthorityMetadataSDKType;
    isAmino(o: any): o is DenomAuthorityMetadataAmino;
    encode(message: DenomAuthorityMetadata, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DenomAuthorityMetadata;
    fromJSON(object: any): DenomAuthorityMetadata;
    toJSON(message: DenomAuthorityMetadata): unknown;
    fromPartial(object: DeepPartial<DenomAuthorityMetadata>): DenomAuthorityMetadata;
    fromSDK(object: DenomAuthorityMetadataSDKType): DenomAuthorityMetadata;
    toSDK(message: DenomAuthorityMetadata): DenomAuthorityMetadataSDKType;
    fromAmino(object: DenomAuthorityMetadataAmino): DenomAuthorityMetadata;
    toAmino(message: DenomAuthorityMetadata): DenomAuthorityMetadataAmino;
    fromAminoMsg(object: DenomAuthorityMetadataAminoMsg): DenomAuthorityMetadata;
    toAminoMsg(message: DenomAuthorityMetadata): DenomAuthorityMetadataAminoMsg;
    fromProtoMsg(message: DenomAuthorityMetadataProtoMsg): DenomAuthorityMetadata;
    toProto(message: DenomAuthorityMetadata): Uint8Array;
    toProtoMsg(message: DenomAuthorityMetadata): DenomAuthorityMetadataProtoMsg;
};
