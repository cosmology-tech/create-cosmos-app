import { FeeToken, FeeTokenAmino, FeeTokenSDKType } from "./feetoken";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * UpdateFeeTokenProposal is a gov Content type for adding a new whitelisted fee
 * token. It must specify a denom along with gamm pool ID to use as a spot price
 * calculator. It can be used to add a new denom to the whitelist It can also be
 * used to update the Pool to associate with the denom. If Pool ID is set to 0,
 * it will remove the denom from the whitelisted set.
 */
export interface UpdateFeeTokenProposal {
    $typeUrl?: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal";
    title: string;
    description: string;
    feetoken: FeeToken | undefined;
}
export interface UpdateFeeTokenProposalProtoMsg {
    typeUrl: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal";
    value: Uint8Array;
}
/**
 * UpdateFeeTokenProposal is a gov Content type for adding a new whitelisted fee
 * token. It must specify a denom along with gamm pool ID to use as a spot price
 * calculator. It can be used to add a new denom to the whitelist It can also be
 * used to update the Pool to associate with the denom. If Pool ID is set to 0,
 * it will remove the denom from the whitelisted set.
 */
export interface UpdateFeeTokenProposalAmino {
    title?: string;
    description?: string;
    feetoken?: FeeTokenAmino | undefined;
}
export interface UpdateFeeTokenProposalAminoMsg {
    type: "osmosis/txfees/update-fee-token-proposal";
    value: UpdateFeeTokenProposalAmino;
}
/**
 * UpdateFeeTokenProposal is a gov Content type for adding a new whitelisted fee
 * token. It must specify a denom along with gamm pool ID to use as a spot price
 * calculator. It can be used to add a new denom to the whitelist It can also be
 * used to update the Pool to associate with the denom. If Pool ID is set to 0,
 * it will remove the denom from the whitelisted set.
 */
export interface UpdateFeeTokenProposalSDKType {
    $typeUrl?: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal";
    title: string;
    description: string;
    feetoken: FeeTokenSDKType | undefined;
}
export declare const UpdateFeeTokenProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is UpdateFeeTokenProposal;
    isSDK(o: any): o is UpdateFeeTokenProposalSDKType;
    isAmino(o: any): o is UpdateFeeTokenProposalAmino;
    encode(message: UpdateFeeTokenProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UpdateFeeTokenProposal;
    fromJSON(object: any): UpdateFeeTokenProposal;
    toJSON(message: UpdateFeeTokenProposal): unknown;
    fromPartial(object: DeepPartial<UpdateFeeTokenProposal>): UpdateFeeTokenProposal;
    fromSDK(object: UpdateFeeTokenProposalSDKType): UpdateFeeTokenProposal;
    toSDK(message: UpdateFeeTokenProposal): UpdateFeeTokenProposalSDKType;
    fromAmino(object: UpdateFeeTokenProposalAmino): UpdateFeeTokenProposal;
    toAmino(message: UpdateFeeTokenProposal): UpdateFeeTokenProposalAmino;
    fromAminoMsg(object: UpdateFeeTokenProposalAminoMsg): UpdateFeeTokenProposal;
    toAminoMsg(message: UpdateFeeTokenProposal): UpdateFeeTokenProposalAminoMsg;
    fromProtoMsg(message: UpdateFeeTokenProposalProtoMsg): UpdateFeeTokenProposal;
    toProto(message: UpdateFeeTokenProposal): Uint8Array;
    toProtoMsg(message: UpdateFeeTokenProposal): UpdateFeeTokenProposalProtoMsg;
};
