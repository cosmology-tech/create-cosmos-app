import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */
export interface MsgSubmitEvidence {
    submitter: string;
    evidence?: Any | undefined;
}
export interface MsgSubmitEvidenceProtoMsg {
    typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence";
    value: Uint8Array;
}
export type MsgSubmitEvidenceEncoded = Omit<MsgSubmitEvidence, "evidence"> & {
    evidence?: AnyProtoMsg | undefined;
};
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */
export interface MsgSubmitEvidenceAmino {
    submitter?: string;
    evidence?: AnyAmino | undefined;
}
export interface MsgSubmitEvidenceAminoMsg {
    type: "cosmos-sdk/MsgSubmitEvidence";
    value: MsgSubmitEvidenceAmino;
}
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */
export interface MsgSubmitEvidenceSDKType {
    submitter: string;
    evidence?: AnySDKType | undefined;
}
/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */
export interface MsgSubmitEvidenceResponse {
    /** hash defines the hash of the evidence. */
    hash: Uint8Array;
}
export interface MsgSubmitEvidenceResponseProtoMsg {
    typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse";
    value: Uint8Array;
}
/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */
export interface MsgSubmitEvidenceResponseAmino {
    /** hash defines the hash of the evidence. */
    hash?: string;
}
export interface MsgSubmitEvidenceResponseAminoMsg {
    type: "cosmos-sdk/MsgSubmitEvidenceResponse";
    value: MsgSubmitEvidenceResponseAmino;
}
/** MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type. */
export interface MsgSubmitEvidenceResponseSDKType {
    hash: Uint8Array;
}
export declare const MsgSubmitEvidence: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSubmitEvidence;
    isSDK(o: any): o is MsgSubmitEvidenceSDKType;
    isAmino(o: any): o is MsgSubmitEvidenceAmino;
    encode(message: MsgSubmitEvidence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitEvidence;
    fromJSON(object: any): MsgSubmitEvidence;
    toJSON(message: MsgSubmitEvidence): unknown;
    fromPartial(object: DeepPartial<MsgSubmitEvidence>): MsgSubmitEvidence;
    fromSDK(object: MsgSubmitEvidenceSDKType): MsgSubmitEvidence;
    toSDK(message: MsgSubmitEvidence): MsgSubmitEvidenceSDKType;
    fromAmino(object: MsgSubmitEvidenceAmino): MsgSubmitEvidence;
    toAmino(message: MsgSubmitEvidence): MsgSubmitEvidenceAmino;
    fromAminoMsg(object: MsgSubmitEvidenceAminoMsg): MsgSubmitEvidence;
    toAminoMsg(message: MsgSubmitEvidence): MsgSubmitEvidenceAminoMsg;
    fromProtoMsg(message: MsgSubmitEvidenceProtoMsg): MsgSubmitEvidence;
    toProto(message: MsgSubmitEvidence): Uint8Array;
    toProtoMsg(message: MsgSubmitEvidence): MsgSubmitEvidenceProtoMsg;
};
export declare const MsgSubmitEvidenceResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgSubmitEvidenceResponse;
    isSDK(o: any): o is MsgSubmitEvidenceResponseSDKType;
    isAmino(o: any): o is MsgSubmitEvidenceResponseAmino;
    encode(message: MsgSubmitEvidenceResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitEvidenceResponse;
    fromJSON(object: any): MsgSubmitEvidenceResponse;
    toJSON(message: MsgSubmitEvidenceResponse): unknown;
    fromPartial(object: DeepPartial<MsgSubmitEvidenceResponse>): MsgSubmitEvidenceResponse;
    fromSDK(object: MsgSubmitEvidenceResponseSDKType): MsgSubmitEvidenceResponse;
    toSDK(message: MsgSubmitEvidenceResponse): MsgSubmitEvidenceResponseSDKType;
    fromAmino(object: MsgSubmitEvidenceResponseAmino): MsgSubmitEvidenceResponse;
    toAmino(message: MsgSubmitEvidenceResponse): MsgSubmitEvidenceResponseAmino;
    fromAminoMsg(object: MsgSubmitEvidenceResponseAminoMsg): MsgSubmitEvidenceResponse;
    toAminoMsg(message: MsgSubmitEvidenceResponse): MsgSubmitEvidenceResponseAminoMsg;
    fromProtoMsg(message: MsgSubmitEvidenceResponseProtoMsg): MsgSubmitEvidenceResponse;
    toProto(message: MsgSubmitEvidenceResponse): Uint8Array;
    toProtoMsg(message: MsgSubmitEvidenceResponse): MsgSubmitEvidenceResponseProtoMsg;
};
