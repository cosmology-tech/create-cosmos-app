import { Vote, VoteAmino, VoteSDKType, LightBlock, LightBlockAmino, LightBlockSDKType } from "./types";
import { Validator, ValidatorAmino, ValidatorSDKType } from "./validator";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
export interface Evidence {
    duplicateVoteEvidence?: DuplicateVoteEvidence | undefined;
    lightClientAttackEvidence?: LightClientAttackEvidence | undefined;
}
export interface EvidenceProtoMsg {
    typeUrl: "/tendermint.types.Evidence";
    value: Uint8Array;
}
export interface EvidenceAmino {
    duplicate_vote_evidence?: DuplicateVoteEvidenceAmino | undefined;
    light_client_attack_evidence?: LightClientAttackEvidenceAmino | undefined;
}
export interface EvidenceAminoMsg {
    type: "/tendermint.types.Evidence";
    value: EvidenceAmino;
}
export interface EvidenceSDKType {
    duplicate_vote_evidence?: DuplicateVoteEvidenceSDKType | undefined;
    light_client_attack_evidence?: LightClientAttackEvidenceSDKType | undefined;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidence {
    voteA?: Vote | undefined;
    voteB?: Vote | undefined;
    totalVotingPower: bigint;
    validatorPower: bigint;
    timestamp: Date | undefined;
}
export interface DuplicateVoteEvidenceProtoMsg {
    typeUrl: "/tendermint.types.DuplicateVoteEvidence";
    value: Uint8Array;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidenceAmino {
    vote_a?: VoteAmino | undefined;
    vote_b?: VoteAmino | undefined;
    total_voting_power?: string;
    validator_power?: string;
    timestamp?: string | undefined;
}
export interface DuplicateVoteEvidenceAminoMsg {
    type: "/tendermint.types.DuplicateVoteEvidence";
    value: DuplicateVoteEvidenceAmino;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidenceSDKType {
    vote_a?: VoteSDKType | undefined;
    vote_b?: VoteSDKType | undefined;
    total_voting_power: bigint;
    validator_power: bigint;
    timestamp: Date | undefined;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidence {
    conflictingBlock?: LightBlock | undefined;
    commonHeight: bigint;
    byzantineValidators: Validator[];
    totalVotingPower: bigint;
    timestamp: Date | undefined;
}
export interface LightClientAttackEvidenceProtoMsg {
    typeUrl: "/tendermint.types.LightClientAttackEvidence";
    value: Uint8Array;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidenceAmino {
    conflicting_block?: LightBlockAmino | undefined;
    common_height?: string;
    byzantine_validators?: ValidatorAmino[];
    total_voting_power?: string;
    timestamp?: string | undefined;
}
export interface LightClientAttackEvidenceAminoMsg {
    type: "/tendermint.types.LightClientAttackEvidence";
    value: LightClientAttackEvidenceAmino;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidenceSDKType {
    conflicting_block?: LightBlockSDKType | undefined;
    common_height: bigint;
    byzantine_validators: ValidatorSDKType[];
    total_voting_power: bigint;
    timestamp: Date | undefined;
}
export interface EvidenceList {
    evidence: Evidence[];
}
export interface EvidenceListProtoMsg {
    typeUrl: "/tendermint.types.EvidenceList";
    value: Uint8Array;
}
export interface EvidenceListAmino {
    evidence?: EvidenceAmino[];
}
export interface EvidenceListAminoMsg {
    type: "/tendermint.types.EvidenceList";
    value: EvidenceListAmino;
}
export interface EvidenceListSDKType {
    evidence: EvidenceSDKType[];
}
export declare const Evidence: {
    typeUrl: string;
    is(o: any): o is Evidence;
    isSDK(o: any): o is EvidenceSDKType;
    isAmino(o: any): o is EvidenceAmino;
    encode(message: Evidence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Evidence;
    fromJSON(object: any): Evidence;
    toJSON(message: Evidence): unknown;
    fromPartial(object: DeepPartial<Evidence>): Evidence;
    fromSDK(object: EvidenceSDKType): Evidence;
    toSDK(message: Evidence): EvidenceSDKType;
    fromAmino(object: EvidenceAmino): Evidence;
    toAmino(message: Evidence): EvidenceAmino;
    fromAminoMsg(object: EvidenceAminoMsg): Evidence;
    fromProtoMsg(message: EvidenceProtoMsg): Evidence;
    toProto(message: Evidence): Uint8Array;
    toProtoMsg(message: Evidence): EvidenceProtoMsg;
};
export declare const DuplicateVoteEvidence: {
    typeUrl: string;
    is(o: any): o is DuplicateVoteEvidence;
    isSDK(o: any): o is DuplicateVoteEvidenceSDKType;
    isAmino(o: any): o is DuplicateVoteEvidenceAmino;
    encode(message: DuplicateVoteEvidence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DuplicateVoteEvidence;
    fromJSON(object: any): DuplicateVoteEvidence;
    toJSON(message: DuplicateVoteEvidence): unknown;
    fromPartial(object: DeepPartial<DuplicateVoteEvidence>): DuplicateVoteEvidence;
    fromSDK(object: DuplicateVoteEvidenceSDKType): DuplicateVoteEvidence;
    toSDK(message: DuplicateVoteEvidence): DuplicateVoteEvidenceSDKType;
    fromAmino(object: DuplicateVoteEvidenceAmino): DuplicateVoteEvidence;
    toAmino(message: DuplicateVoteEvidence): DuplicateVoteEvidenceAmino;
    fromAminoMsg(object: DuplicateVoteEvidenceAminoMsg): DuplicateVoteEvidence;
    fromProtoMsg(message: DuplicateVoteEvidenceProtoMsg): DuplicateVoteEvidence;
    toProto(message: DuplicateVoteEvidence): Uint8Array;
    toProtoMsg(message: DuplicateVoteEvidence): DuplicateVoteEvidenceProtoMsg;
};
export declare const LightClientAttackEvidence: {
    typeUrl: string;
    is(o: any): o is LightClientAttackEvidence;
    isSDK(o: any): o is LightClientAttackEvidenceSDKType;
    isAmino(o: any): o is LightClientAttackEvidenceAmino;
    encode(message: LightClientAttackEvidence, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LightClientAttackEvidence;
    fromJSON(object: any): LightClientAttackEvidence;
    toJSON(message: LightClientAttackEvidence): unknown;
    fromPartial(object: DeepPartial<LightClientAttackEvidence>): LightClientAttackEvidence;
    fromSDK(object: LightClientAttackEvidenceSDKType): LightClientAttackEvidence;
    toSDK(message: LightClientAttackEvidence): LightClientAttackEvidenceSDKType;
    fromAmino(object: LightClientAttackEvidenceAmino): LightClientAttackEvidence;
    toAmino(message: LightClientAttackEvidence): LightClientAttackEvidenceAmino;
    fromAminoMsg(object: LightClientAttackEvidenceAminoMsg): LightClientAttackEvidence;
    fromProtoMsg(message: LightClientAttackEvidenceProtoMsg): LightClientAttackEvidence;
    toProto(message: LightClientAttackEvidence): Uint8Array;
    toProtoMsg(message: LightClientAttackEvidence): LightClientAttackEvidenceProtoMsg;
};
export declare const EvidenceList: {
    typeUrl: string;
    is(o: any): o is EvidenceList;
    isSDK(o: any): o is EvidenceListSDKType;
    isAmino(o: any): o is EvidenceListAmino;
    encode(message: EvidenceList, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EvidenceList;
    fromJSON(object: any): EvidenceList;
    toJSON(message: EvidenceList): unknown;
    fromPartial(object: DeepPartial<EvidenceList>): EvidenceList;
    fromSDK(object: EvidenceListSDKType): EvidenceList;
    toSDK(message: EvidenceList): EvidenceListSDKType;
    fromAmino(object: EvidenceListAmino): EvidenceList;
    toAmino(message: EvidenceList): EvidenceListAmino;
    fromAminoMsg(object: EvidenceListAminoMsg): EvidenceList;
    fromProtoMsg(message: EvidenceListProtoMsg): EvidenceList;
    toProto(message: EvidenceList): Uint8Array;
    toProtoMsg(message: EvidenceList): EvidenceListProtoMsg;
};
