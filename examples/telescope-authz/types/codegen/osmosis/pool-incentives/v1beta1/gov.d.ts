import { DistrRecord, DistrRecordAmino, DistrRecordSDKType } from "./incentives";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * ReplacePoolIncentivesProposal is a gov Content type for updating the pool
 * incentives. If a ReplacePoolIncentivesProposal passes, the proposal’s records
 * override the existing DistrRecords set in the module. Each record has a
 * specified gauge id and weight, and the incentives are distributed to each
 * gauge according to weight/total_weight. The incentives are put in the fee
 * pool and it is allocated to gauges and community pool by the DistrRecords
 * configuration. Note that gaugeId=0 represents the community pool.
 */
export interface ReplacePoolIncentivesProposal {
    $typeUrl?: "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal";
    title: string;
    description: string;
    records: DistrRecord[];
}
export interface ReplacePoolIncentivesProposalProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal";
    value: Uint8Array;
}
/**
 * ReplacePoolIncentivesProposal is a gov Content type for updating the pool
 * incentives. If a ReplacePoolIncentivesProposal passes, the proposal’s records
 * override the existing DistrRecords set in the module. Each record has a
 * specified gauge id and weight, and the incentives are distributed to each
 * gauge according to weight/total_weight. The incentives are put in the fee
 * pool and it is allocated to gauges and community pool by the DistrRecords
 * configuration. Note that gaugeId=0 represents the community pool.
 */
export interface ReplacePoolIncentivesProposalAmino {
    title?: string;
    description?: string;
    records?: DistrRecordAmino[];
}
export interface ReplacePoolIncentivesProposalAminoMsg {
    type: "osmosis/poolincentives/replace-pool-incentives-proposal";
    value: ReplacePoolIncentivesProposalAmino;
}
/**
 * ReplacePoolIncentivesProposal is a gov Content type for updating the pool
 * incentives. If a ReplacePoolIncentivesProposal passes, the proposal’s records
 * override the existing DistrRecords set in the module. Each record has a
 * specified gauge id and weight, and the incentives are distributed to each
 * gauge according to weight/total_weight. The incentives are put in the fee
 * pool and it is allocated to gauges and community pool by the DistrRecords
 * configuration. Note that gaugeId=0 represents the community pool.
 */
export interface ReplacePoolIncentivesProposalSDKType {
    $typeUrl?: "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal";
    title: string;
    description: string;
    records: DistrRecordSDKType[];
}
/**
 * For example: if the existing DistrRecords were:
 * [(Gauge 0, 5), (Gauge 1, 6), (Gauge 2, 6)]
 * An UpdatePoolIncentivesProposal includes
 * [(Gauge 1, 0), (Gauge 2, 4), (Gauge 3, 10)]
 * This would delete Gauge 1, Edit Gauge 2, and Add Gauge 3
 * The result DistrRecords in state would be:
 * [(Gauge 0, 5), (Gauge 2, 4), (Gauge 3, 10)]
 */
export interface UpdatePoolIncentivesProposal {
    $typeUrl?: "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal";
    title: string;
    description: string;
    records: DistrRecord[];
}
export interface UpdatePoolIncentivesProposalProtoMsg {
    typeUrl: "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal";
    value: Uint8Array;
}
/**
 * For example: if the existing DistrRecords were:
 * [(Gauge 0, 5), (Gauge 1, 6), (Gauge 2, 6)]
 * An UpdatePoolIncentivesProposal includes
 * [(Gauge 1, 0), (Gauge 2, 4), (Gauge 3, 10)]
 * This would delete Gauge 1, Edit Gauge 2, and Add Gauge 3
 * The result DistrRecords in state would be:
 * [(Gauge 0, 5), (Gauge 2, 4), (Gauge 3, 10)]
 */
export interface UpdatePoolIncentivesProposalAmino {
    title?: string;
    description?: string;
    records?: DistrRecordAmino[];
}
export interface UpdatePoolIncentivesProposalAminoMsg {
    type: "osmosis/poolincentives/update-pool-incentives-proposal";
    value: UpdatePoolIncentivesProposalAmino;
}
/**
 * For example: if the existing DistrRecords were:
 * [(Gauge 0, 5), (Gauge 1, 6), (Gauge 2, 6)]
 * An UpdatePoolIncentivesProposal includes
 * [(Gauge 1, 0), (Gauge 2, 4), (Gauge 3, 10)]
 * This would delete Gauge 1, Edit Gauge 2, and Add Gauge 3
 * The result DistrRecords in state would be:
 * [(Gauge 0, 5), (Gauge 2, 4), (Gauge 3, 10)]
 */
export interface UpdatePoolIncentivesProposalSDKType {
    $typeUrl?: "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal";
    title: string;
    description: string;
    records: DistrRecordSDKType[];
}
export declare const ReplacePoolIncentivesProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ReplacePoolIncentivesProposal;
    isSDK(o: any): o is ReplacePoolIncentivesProposalSDKType;
    isAmino(o: any): o is ReplacePoolIncentivesProposalAmino;
    encode(message: ReplacePoolIncentivesProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ReplacePoolIncentivesProposal;
    fromJSON(object: any): ReplacePoolIncentivesProposal;
    toJSON(message: ReplacePoolIncentivesProposal): unknown;
    fromPartial(object: DeepPartial<ReplacePoolIncentivesProposal>): ReplacePoolIncentivesProposal;
    fromSDK(object: ReplacePoolIncentivesProposalSDKType): ReplacePoolIncentivesProposal;
    toSDK(message: ReplacePoolIncentivesProposal): ReplacePoolIncentivesProposalSDKType;
    fromAmino(object: ReplacePoolIncentivesProposalAmino): ReplacePoolIncentivesProposal;
    toAmino(message: ReplacePoolIncentivesProposal): ReplacePoolIncentivesProposalAmino;
    fromAminoMsg(object: ReplacePoolIncentivesProposalAminoMsg): ReplacePoolIncentivesProposal;
    toAminoMsg(message: ReplacePoolIncentivesProposal): ReplacePoolIncentivesProposalAminoMsg;
    fromProtoMsg(message: ReplacePoolIncentivesProposalProtoMsg): ReplacePoolIncentivesProposal;
    toProto(message: ReplacePoolIncentivesProposal): Uint8Array;
    toProtoMsg(message: ReplacePoolIncentivesProposal): ReplacePoolIncentivesProposalProtoMsg;
};
export declare const UpdatePoolIncentivesProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is UpdatePoolIncentivesProposal;
    isSDK(o: any): o is UpdatePoolIncentivesProposalSDKType;
    isAmino(o: any): o is UpdatePoolIncentivesProposalAmino;
    encode(message: UpdatePoolIncentivesProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): UpdatePoolIncentivesProposal;
    fromJSON(object: any): UpdatePoolIncentivesProposal;
    toJSON(message: UpdatePoolIncentivesProposal): unknown;
    fromPartial(object: DeepPartial<UpdatePoolIncentivesProposal>): UpdatePoolIncentivesProposal;
    fromSDK(object: UpdatePoolIncentivesProposalSDKType): UpdatePoolIncentivesProposal;
    toSDK(message: UpdatePoolIncentivesProposal): UpdatePoolIncentivesProposalSDKType;
    fromAmino(object: UpdatePoolIncentivesProposalAmino): UpdatePoolIncentivesProposal;
    toAmino(message: UpdatePoolIncentivesProposal): UpdatePoolIncentivesProposalAmino;
    fromAminoMsg(object: UpdatePoolIncentivesProposalAminoMsg): UpdatePoolIncentivesProposal;
    toAminoMsg(message: UpdatePoolIncentivesProposal): UpdatePoolIncentivesProposalAminoMsg;
    fromProtoMsg(message: UpdatePoolIncentivesProposalProtoMsg): UpdatePoolIncentivesProposal;
    toProto(message: UpdatePoolIncentivesProposal): Uint8Array;
    toProtoMsg(message: UpdatePoolIncentivesProposal): UpdatePoolIncentivesProposalProtoMsg;
};
