import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfo {
    address: string;
    /** Height at which validator was first a candidate OR was unjailed */
    startHeight: bigint;
    /**
     * Index which is incremented each time the validator was a bonded
     * in a block and may have signed a precommit or not. This in conjunction with the
     * `SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`.
     */
    indexOffset: bigint;
    /** Timestamp until which the validator is jailed due to liveness downtime. */
    jailedUntil: Date | undefined;
    /**
     * Whether or not a validator has been tombstoned (killed out of validator set). It is set
     * once the validator commits an equivocation or for any other configured misbehiavor.
     */
    tombstoned: boolean;
    /**
     * A counter kept to avoid unnecessary array reads.
     * Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.
     */
    missedBlocksCounter: bigint;
}
export interface ValidatorSigningInfoProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo";
    value: Uint8Array;
}
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfoAmino {
    address?: string;
    /** Height at which validator was first a candidate OR was unjailed */
    start_height?: string;
    /**
     * Index which is incremented each time the validator was a bonded
     * in a block and may have signed a precommit or not. This in conjunction with the
     * `SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`.
     */
    index_offset?: string;
    /** Timestamp until which the validator is jailed due to liveness downtime. */
    jailed_until?: string | undefined;
    /**
     * Whether or not a validator has been tombstoned (killed out of validator set). It is set
     * once the validator commits an equivocation or for any other configured misbehiavor.
     */
    tombstoned?: boolean;
    /**
     * A counter kept to avoid unnecessary array reads.
     * Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.
     */
    missed_blocks_counter?: string;
}
export interface ValidatorSigningInfoAminoMsg {
    type: "cosmos-sdk/ValidatorSigningInfo";
    value: ValidatorSigningInfoAmino;
}
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfoSDKType {
    address: string;
    start_height: bigint;
    index_offset: bigint;
    jailed_until: Date | undefined;
    tombstoned: boolean;
    missed_blocks_counter: bigint;
}
/** Params represents the parameters used for by the slashing module. */
export interface Params {
    signedBlocksWindow: bigint;
    minSignedPerWindow: Uint8Array;
    downtimeJailDuration: Duration | undefined;
    slashFractionDoubleSign: Uint8Array;
    slashFractionDowntime: Uint8Array;
}
export interface ParamsProtoMsg {
    typeUrl: "/cosmos.slashing.v1beta1.Params";
    value: Uint8Array;
}
/** Params represents the parameters used for by the slashing module. */
export interface ParamsAmino {
    signed_blocks_window?: string;
    min_signed_per_window?: string;
    downtime_jail_duration?: DurationAmino | undefined;
    slash_fraction_double_sign?: string;
    slash_fraction_downtime?: string;
}
export interface ParamsAminoMsg {
    type: "cosmos-sdk/Params";
    value: ParamsAmino;
}
/** Params represents the parameters used for by the slashing module. */
export interface ParamsSDKType {
    signed_blocks_window: bigint;
    min_signed_per_window: Uint8Array;
    downtime_jail_duration: DurationSDKType | undefined;
    slash_fraction_double_sign: Uint8Array;
    slash_fraction_downtime: Uint8Array;
}
export declare const ValidatorSigningInfo: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ValidatorSigningInfo;
    isSDK(o: any): o is ValidatorSigningInfoSDKType;
    isAmino(o: any): o is ValidatorSigningInfoAmino;
    encode(message: ValidatorSigningInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSigningInfo;
    fromJSON(object: any): ValidatorSigningInfo;
    toJSON(message: ValidatorSigningInfo): unknown;
    fromPartial(object: DeepPartial<ValidatorSigningInfo>): ValidatorSigningInfo;
    fromSDK(object: ValidatorSigningInfoSDKType): ValidatorSigningInfo;
    toSDK(message: ValidatorSigningInfo): ValidatorSigningInfoSDKType;
    fromAmino(object: ValidatorSigningInfoAmino): ValidatorSigningInfo;
    toAmino(message: ValidatorSigningInfo): ValidatorSigningInfoAmino;
    fromAminoMsg(object: ValidatorSigningInfoAminoMsg): ValidatorSigningInfo;
    toAminoMsg(message: ValidatorSigningInfo): ValidatorSigningInfoAminoMsg;
    fromProtoMsg(message: ValidatorSigningInfoProtoMsg): ValidatorSigningInfo;
    toProto(message: ValidatorSigningInfo): Uint8Array;
    toProtoMsg(message: ValidatorSigningInfo): ValidatorSigningInfoProtoMsg;
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
