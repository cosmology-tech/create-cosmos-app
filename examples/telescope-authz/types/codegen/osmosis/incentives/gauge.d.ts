import { QueryCondition, QueryConditionAmino, QueryConditionSDKType } from "../lockup/lock";
import { Coin, CoinAmino, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/**
 * Gauge is an object that stores and distributes yields to recipients who
 * satisfy certain conditions. Currently gauges support conditions around the
 * duration for which a given denom is locked.
 */
export interface Gauge {
    /** id is the unique ID of a Gauge */
    id: bigint;
    /**
     * is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge
     * Non-perpetual gauges distribute their tokens equally per epoch while the
     * gauge is in the active period. Perpetual gauges distribute all their tokens
     * at a single time and only distribute their tokens again once the gauge is
     * refilled, Intended for use with incentives that get refilled daily.
     */
    isPerpetual: boolean;
    /**
     * distribute_to is where the gauge rewards are distributed to.
     * This is queried via lock duration or by timestamp
     */
    distributeTo: QueryCondition | undefined;
    /**
     * coins is the total amount of coins that have been in the gauge
     * Can distribute multiple coin denoms
     */
    coins: Coin[];
    /** start_time is the distribution start time */
    startTime: Date | undefined;
    /**
     * num_epochs_paid_over is the number of total epochs distribution will be
     * completed over
     */
    numEpochsPaidOver: bigint;
    /**
     * filled_epochs is the number of epochs distribution has been completed on
     * already
     */
    filledEpochs: bigint;
    /** distributed_coins are coins that have been distributed already */
    distributedCoins: Coin[];
}
export interface GaugeProtoMsg {
    typeUrl: "/osmosis.incentives.Gauge";
    value: Uint8Array;
}
/**
 * Gauge is an object that stores and distributes yields to recipients who
 * satisfy certain conditions. Currently gauges support conditions around the
 * duration for which a given denom is locked.
 */
export interface GaugeAmino {
    /** id is the unique ID of a Gauge */
    id?: string;
    /**
     * is_perpetual is a flag to show if it's a perpetual or non-perpetual gauge
     * Non-perpetual gauges distribute their tokens equally per epoch while the
     * gauge is in the active period. Perpetual gauges distribute all their tokens
     * at a single time and only distribute their tokens again once the gauge is
     * refilled, Intended for use with incentives that get refilled daily.
     */
    is_perpetual?: boolean;
    /**
     * distribute_to is where the gauge rewards are distributed to.
     * This is queried via lock duration or by timestamp
     */
    distribute_to?: QueryConditionAmino | undefined;
    /**
     * coins is the total amount of coins that have been in the gauge
     * Can distribute multiple coin denoms
     */
    coins?: CoinAmino[];
    /** start_time is the distribution start time */
    start_time?: string | undefined;
    /**
     * num_epochs_paid_over is the number of total epochs distribution will be
     * completed over
     */
    num_epochs_paid_over?: string;
    /**
     * filled_epochs is the number of epochs distribution has been completed on
     * already
     */
    filled_epochs?: string;
    /** distributed_coins are coins that have been distributed already */
    distributed_coins?: CoinAmino[];
}
export interface GaugeAminoMsg {
    type: "osmosis/incentives/gauge";
    value: GaugeAmino;
}
/**
 * Gauge is an object that stores and distributes yields to recipients who
 * satisfy certain conditions. Currently gauges support conditions around the
 * duration for which a given denom is locked.
 */
export interface GaugeSDKType {
    id: bigint;
    is_perpetual: boolean;
    distribute_to: QueryConditionSDKType | undefined;
    coins: CoinSDKType[];
    start_time: Date | undefined;
    num_epochs_paid_over: bigint;
    filled_epochs: bigint;
    distributed_coins: CoinSDKType[];
}
export interface LockableDurationsInfo {
    /** List of incentivised durations that gauges will pay out to */
    lockableDurations: Duration[];
}
export interface LockableDurationsInfoProtoMsg {
    typeUrl: "/osmosis.incentives.LockableDurationsInfo";
    value: Uint8Array;
}
export interface LockableDurationsInfoAmino {
    /** List of incentivised durations that gauges will pay out to */
    lockable_durations?: DurationAmino[];
}
export interface LockableDurationsInfoAminoMsg {
    type: "osmosis/incentives/lockable-durations-info";
    value: LockableDurationsInfoAmino;
}
export interface LockableDurationsInfoSDKType {
    lockable_durations: DurationSDKType[];
}
export declare const Gauge: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Gauge;
    isSDK(o: any): o is GaugeSDKType;
    isAmino(o: any): o is GaugeAmino;
    encode(message: Gauge, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Gauge;
    fromJSON(object: any): Gauge;
    toJSON(message: Gauge): unknown;
    fromPartial(object: DeepPartial<Gauge>): Gauge;
    fromSDK(object: GaugeSDKType): Gauge;
    toSDK(message: Gauge): GaugeSDKType;
    fromAmino(object: GaugeAmino): Gauge;
    toAmino(message: Gauge): GaugeAmino;
    fromAminoMsg(object: GaugeAminoMsg): Gauge;
    toAminoMsg(message: Gauge): GaugeAminoMsg;
    fromProtoMsg(message: GaugeProtoMsg): Gauge;
    toProto(message: Gauge): Uint8Array;
    toProtoMsg(message: Gauge): GaugeProtoMsg;
};
export declare const LockableDurationsInfo: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is LockableDurationsInfo;
    isSDK(o: any): o is LockableDurationsInfoSDKType;
    isAmino(o: any): o is LockableDurationsInfoAmino;
    encode(message: LockableDurationsInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LockableDurationsInfo;
    fromJSON(object: any): LockableDurationsInfo;
    toJSON(message: LockableDurationsInfo): unknown;
    fromPartial(object: DeepPartial<LockableDurationsInfo>): LockableDurationsInfo;
    fromSDK(object: LockableDurationsInfoSDKType): LockableDurationsInfo;
    toSDK(message: LockableDurationsInfo): LockableDurationsInfoSDKType;
    fromAmino(object: LockableDurationsInfoAmino): LockableDurationsInfo;
    toAmino(message: LockableDurationsInfo): LockableDurationsInfoAmino;
    fromAminoMsg(object: LockableDurationsInfoAminoMsg): LockableDurationsInfo;
    toAminoMsg(message: LockableDurationsInfo): LockableDurationsInfoAminoMsg;
    fromProtoMsg(message: LockableDurationsInfoProtoMsg): LockableDurationsInfo;
    toProto(message: LockableDurationsInfo): Uint8Array;
    toProtoMsg(message: LockableDurationsInfo): LockableDurationsInfoProtoMsg;
};
