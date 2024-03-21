import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/**
 * EpochInfo is a struct that describes the data going into
 * a timer defined by the x/epochs module.
 */
export interface EpochInfo {
    /** identifier is a unique reference to this particular timer. */
    identifier: string;
    /**
     * start_time is the time at which the timer first ever ticks.
     * If start_time is in the future, the epoch will not begin until the start
     * time.
     */
    startTime: Date | undefined;
    /**
     * duration is the time in between epoch ticks.
     * In order for intended behavior to be met, duration should
     * be greater than the chains expected block time.
     * Duration must be non-zero.
     */
    duration: Duration | undefined;
    /**
     * current_epoch is the current epoch number, or in other words,
     * how many times has the timer 'ticked'.
     * The first tick (current_epoch=1) is defined as
     * the first block whose blocktime is greater than the EpochInfo start_time.
     */
    currentEpoch: bigint;
    /**
     * current_epoch_start_time describes the start time of the current timer
     * interval. The interval is (current_epoch_start_time,
     * current_epoch_start_time + duration] When the timer ticks, this is set to
     * current_epoch_start_time = last_epoch_start_time + duration only one timer
     * tick for a given identifier can occur per block.
     *
     * NOTE! The current_epoch_start_time may diverge significantly from the
     * wall-clock time the epoch began at. Wall-clock time of epoch start may be
     * >> current_epoch_start_time. Suppose current_epoch_start_time = 10,
     * duration = 5. Suppose the chain goes offline at t=14, and comes back online
     * at t=30, and produces blocks at every successive time. (t=31, 32, etc.)
     * * The t=30 block will start the epoch for (10, 15]
     * * The t=31 block will start the epoch for (15, 20]
     * * The t=32 block will start the epoch for (20, 25]
     * * The t=33 block will start the epoch for (25, 30]
     * * The t=34 block will start the epoch for (30, 35]
     * * The **t=36** block will start the epoch for (35, 40]
     */
    currentEpochStartTime: Date | undefined;
    /**
     * epoch_counting_started is a boolean, that indicates whether this
     * epoch timer has began yet.
     */
    epochCountingStarted: boolean;
    /**
     * current_epoch_start_height is the block height at which the current epoch
     * started. (The block height at which the timer last ticked)
     */
    currentEpochStartHeight: bigint;
}
export interface EpochInfoProtoMsg {
    typeUrl: "/osmosis.epochs.v1beta1.EpochInfo";
    value: Uint8Array;
}
/**
 * EpochInfo is a struct that describes the data going into
 * a timer defined by the x/epochs module.
 */
export interface EpochInfoAmino {
    /** identifier is a unique reference to this particular timer. */
    identifier?: string;
    /**
     * start_time is the time at which the timer first ever ticks.
     * If start_time is in the future, the epoch will not begin until the start
     * time.
     */
    start_time?: string | undefined;
    /**
     * duration is the time in between epoch ticks.
     * In order for intended behavior to be met, duration should
     * be greater than the chains expected block time.
     * Duration must be non-zero.
     */
    duration?: DurationAmino | undefined;
    /**
     * current_epoch is the current epoch number, or in other words,
     * how many times has the timer 'ticked'.
     * The first tick (current_epoch=1) is defined as
     * the first block whose blocktime is greater than the EpochInfo start_time.
     */
    current_epoch?: string;
    /**
     * current_epoch_start_time describes the start time of the current timer
     * interval. The interval is (current_epoch_start_time,
     * current_epoch_start_time + duration] When the timer ticks, this is set to
     * current_epoch_start_time = last_epoch_start_time + duration only one timer
     * tick for a given identifier can occur per block.
     *
     * NOTE! The current_epoch_start_time may diverge significantly from the
     * wall-clock time the epoch began at. Wall-clock time of epoch start may be
     * >> current_epoch_start_time. Suppose current_epoch_start_time = 10,
     * duration = 5. Suppose the chain goes offline at t=14, and comes back online
     * at t=30, and produces blocks at every successive time. (t=31, 32, etc.)
     * * The t=30 block will start the epoch for (10, 15]
     * * The t=31 block will start the epoch for (15, 20]
     * * The t=32 block will start the epoch for (20, 25]
     * * The t=33 block will start the epoch for (25, 30]
     * * The t=34 block will start the epoch for (30, 35]
     * * The **t=36** block will start the epoch for (35, 40]
     */
    current_epoch_start_time?: string | undefined;
    /**
     * epoch_counting_started is a boolean, that indicates whether this
     * epoch timer has began yet.
     */
    epoch_counting_started?: boolean;
    /**
     * current_epoch_start_height is the block height at which the current epoch
     * started. (The block height at which the timer last ticked)
     */
    current_epoch_start_height?: string;
}
export interface EpochInfoAminoMsg {
    type: "osmosis/epochs/epoch-info";
    value: EpochInfoAmino;
}
/**
 * EpochInfo is a struct that describes the data going into
 * a timer defined by the x/epochs module.
 */
export interface EpochInfoSDKType {
    identifier: string;
    start_time: Date | undefined;
    duration: DurationSDKType | undefined;
    current_epoch: bigint;
    current_epoch_start_time: Date | undefined;
    epoch_counting_started: boolean;
    current_epoch_start_height: bigint;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
    epochs: EpochInfo[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/osmosis.epochs.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateAmino {
    epochs?: EpochInfoAmino[];
}
export interface GenesisStateAminoMsg {
    type: "osmosis/epochs/genesis-state";
    value: GenesisStateAmino;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateSDKType {
    epochs: EpochInfoSDKType[];
}
export declare const EpochInfo: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is EpochInfo;
    isSDK(o: any): o is EpochInfoSDKType;
    isAmino(o: any): o is EpochInfoAmino;
    encode(message: EpochInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): EpochInfo;
    fromJSON(object: any): EpochInfo;
    toJSON(message: EpochInfo): unknown;
    fromPartial(object: DeepPartial<EpochInfo>): EpochInfo;
    fromSDK(object: EpochInfoSDKType): EpochInfo;
    toSDK(message: EpochInfo): EpochInfoSDKType;
    fromAmino(object: EpochInfoAmino): EpochInfo;
    toAmino(message: EpochInfo): EpochInfoAmino;
    fromAminoMsg(object: EpochInfoAminoMsg): EpochInfo;
    toAminoMsg(message: EpochInfo): EpochInfoAminoMsg;
    fromProtoMsg(message: EpochInfoProtoMsg): EpochInfo;
    toProto(message: EpochInfo): Uint8Array;
    toProtoMsg(message: EpochInfo): EpochInfoProtoMsg;
};
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
