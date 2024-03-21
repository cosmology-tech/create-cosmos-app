import { SuperfluidAsset, SuperfluidAssetAmino, SuperfluidAssetSDKType } from "../superfluid";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 */
export interface SetSuperfluidAssetsProposal {
    $typeUrl?: "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal";
    title: string;
    description: string;
    assets: SuperfluidAsset[];
}
export interface SetSuperfluidAssetsProposalProtoMsg {
    typeUrl: "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal";
    value: Uint8Array;
}
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 */
export interface SetSuperfluidAssetsProposalAmino {
    title?: string;
    description?: string;
    assets?: SuperfluidAssetAmino[];
}
export interface SetSuperfluidAssetsProposalAminoMsg {
    type: "osmosis/v1beta1/set-superfluid-assets-proposal";
    value: SetSuperfluidAssetsProposalAmino;
}
/**
 * SetSuperfluidAssetsProposal is a gov Content type to update the superfluid
 * assets
 */
export interface SetSuperfluidAssetsProposalSDKType {
    $typeUrl?: "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal";
    title: string;
    description: string;
    assets: SuperfluidAssetSDKType[];
}
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 */
export interface RemoveSuperfluidAssetsProposal {
    $typeUrl?: "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal";
    title: string;
    description: string;
    superfluidAssetDenoms: string[];
}
export interface RemoveSuperfluidAssetsProposalProtoMsg {
    typeUrl: "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal";
    value: Uint8Array;
}
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 */
export interface RemoveSuperfluidAssetsProposalAmino {
    title?: string;
    description?: string;
    superfluid_asset_denoms?: string[];
}
export interface RemoveSuperfluidAssetsProposalAminoMsg {
    type: "osmosis/v1beta1/remove-superfluid-assets-proposal";
    value: RemoveSuperfluidAssetsProposalAmino;
}
/**
 * RemoveSuperfluidAssetsProposal is a gov Content type to remove the superfluid
 * assets by denom
 */
export interface RemoveSuperfluidAssetsProposalSDKType {
    $typeUrl?: "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal";
    title: string;
    description: string;
    superfluid_asset_denoms: string[];
}
/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 */
export interface UpdateUnpoolWhiteListProposal {
    $typeUrl?: "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal";
    title: string;
    description: string;
    ids: bigint[];
    isOverwrite: boolean;
}
export interface UpdateUnpoolWhiteListProposalProtoMsg {
    typeUrl: "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal";
    value: Uint8Array;
}
/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 */
export interface UpdateUnpoolWhiteListProposalAmino {
    title?: string;
    description?: string;
    ids?: string[];
    is_overwrite?: boolean;
}
export interface UpdateUnpoolWhiteListProposalAminoMsg {
    type: "osmosis/v1beta1/update-unpool-white-list-proposal";
    value: UpdateUnpoolWhiteListProposalAmino;
}
/**
 * UpdateUnpoolWhiteListProposal is a gov Content type to update the
 * allowed list of pool ids.
 */
export interface UpdateUnpoolWhiteListProposalSDKType {
    $typeUrl?: "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal";
    title: string;
    description: string;
    ids: bigint[];
    is_overwrite: boolean;
}
export declare const SetSuperfluidAssetsProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is SetSuperfluidAssetsProposal;
    isSDK(o: any): o is SetSuperfluidAssetsProposalSDKType;
    isAmino(o: any): o is SetSuperfluidAssetsProposalAmino;
    encode(message: SetSuperfluidAssetsProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SetSuperfluidAssetsProposal;
    fromJSON(object: any): SetSuperfluidAssetsProposal;
    toJSON(message: SetSuperfluidAssetsProposal): unknown;
    fromPartial(object: DeepPartial<SetSuperfluidAssetsProposal>): SetSuperfluidAssetsProposal;
    fromSDK(object: SetSuperfluidAssetsProposalSDKType): SetSuperfluidAssetsProposal;
    toSDK(message: SetSuperfluidAssetsProposal): SetSuperfluidAssetsProposalSDKType;
    fromAmino(object: SetSuperfluidAssetsProposalAmino): SetSuperfluidAssetsProposal;
    toAmino(message: SetSuperfluidAssetsProposal): SetSuperfluidAssetsProposalAmino;
    fromAminoMsg(object: SetSuperfluidAssetsProposalAminoMsg): SetSuperfluidAssetsProposal;
    toAminoMsg(message: SetSuperfluidAssetsProposal): SetSuperfluidAssetsProposalAminoMsg;
    fromProtoMsg(message: SetSuperfluidAssetsProposalProtoMsg): SetSuperfluidAssetsProposal;
    toProto(message: SetSuperfluidAssetsProposal): Uint8Array;
    toProtoMsg(message: SetSuperfluidAssetsProposal): SetSuperfluidAssetsProposalProtoMsg;
};
export declare const RemoveSuperfluidAssetsProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is RemoveSuperfluidAssetsProposal;
    isSDK(o: any): o is RemoveSuperfluidAssetsProposalSDKType;
    isAmino(o: any): o is RemoveSuperfluidAssetsProposalAmino;
    encode(message: RemoveSuperfluidAssetsProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): RemoveSuperfluidAssetsProposal;
    fromJSON(object: any): RemoveSuperfluidAssetsProposal;
    toJSON(message: RemoveSuperfluidAssetsProposal): unknown;
    fromPartial(object: DeepPartial<RemoveSuperfluidAssetsProposal>): RemoveSuperfluidAssetsProposal;
    fromSDK(object: RemoveSuperfluidAssetsProposalSDKType): RemoveSuperfluidAssetsProposal;
    toSDK(message: RemoveSuperfluidAssetsProposal): RemoveSuperfluidAssetsProposalSDKType;
    fromAmino(object: RemoveSuperfluidAssetsProposalAmino): RemoveSuperfluidAssetsProposal;
    toAmino(message: RemoveSuperfluidAssetsProposal): RemoveSuperfluidAssetsProposalAmino;
    fromAminoMsg(object: RemoveSuperfluidAssetsProposalAminoMsg): RemoveSuperfluidAssetsProposal;
    toAminoMsg(message: RemoveSuperfluidAssetsProposal): RemoveSuperfluidAssetsProposalAminoMsg;
    fromProtoMsg(message: RemoveSuperfluidAssetsProposalProtoMsg): RemoveSuperfluidAssetsProposal;
    toProto(message: RemoveSuperfluidAssetsProposal): Uint8Array;
    toProtoMsg(message: RemoveSuperfluidAssetsProposal): RemoveSuperfluidAssetsProposalProtoMsg;
};
export declare const UpdateUnpoolWhiteListProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is UpdateUnpoolWhiteListProposal;
    isSDK(o: any): o is UpdateUnpoolWhiteListProposalSDKType;
    isAmino(o: any): o is UpdateUnpoolWhiteListProposalAmino;
    encode(message: UpdateUnpoolWhiteListProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UpdateUnpoolWhiteListProposal;
    fromJSON(object: any): UpdateUnpoolWhiteListProposal;
    toJSON(message: UpdateUnpoolWhiteListProposal): unknown;
    fromPartial(object: DeepPartial<UpdateUnpoolWhiteListProposal>): UpdateUnpoolWhiteListProposal;
    fromSDK(object: UpdateUnpoolWhiteListProposalSDKType): UpdateUnpoolWhiteListProposal;
    toSDK(message: UpdateUnpoolWhiteListProposal): UpdateUnpoolWhiteListProposalSDKType;
    fromAmino(object: UpdateUnpoolWhiteListProposalAmino): UpdateUnpoolWhiteListProposal;
    toAmino(message: UpdateUnpoolWhiteListProposal): UpdateUnpoolWhiteListProposalAmino;
    fromAminoMsg(object: UpdateUnpoolWhiteListProposalAminoMsg): UpdateUnpoolWhiteListProposal;
    toAminoMsg(message: UpdateUnpoolWhiteListProposal): UpdateUnpoolWhiteListProposalAminoMsg;
    fromProtoMsg(message: UpdateUnpoolWhiteListProposalProtoMsg): UpdateUnpoolWhiteListProposal;
    toProto(message: UpdateUnpoolWhiteListProposal): Uint8Array;
    toProtoMsg(message: UpdateUnpoolWhiteListProposal): UpdateUnpoolWhiteListProposalProtoMsg;
};
