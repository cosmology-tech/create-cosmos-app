import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Gauge, GaugeAmino, GaugeSDKType } from "./gauge";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/**
 * GenesisState defines the incentives module's various parameters when first
 * initialized
 */
export interface GenesisState {
    /** params are all the parameters of the module */
    params: Params | undefined;
    /** gauges are all gauges that should exist at genesis */
    gauges: Gauge[];
    /**
     * lockable_durations are all lockup durations that gauges can be locked for
     * in order to recieve incentives
     */
    lockableDurations: Duration[];
    /**
     * last_gauge_id is what the gauge number will increment from when creating
     * the next gauge after genesis
     */
    lastGaugeId: bigint;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/osmosis.incentives.GenesisState";
    value: Uint8Array;
}
/**
 * GenesisState defines the incentives module's various parameters when first
 * initialized
 */
export interface GenesisStateAmino {
    /** params are all the parameters of the module */
    params?: ParamsAmino | undefined;
    /** gauges are all gauges that should exist at genesis */
    gauges?: GaugeAmino[];
    /**
     * lockable_durations are all lockup durations that gauges can be locked for
     * in order to recieve incentives
     */
    lockable_durations?: DurationAmino[];
    /**
     * last_gauge_id is what the gauge number will increment from when creating
     * the next gauge after genesis
     */
    last_gauge_id?: string;
}
export interface GenesisStateAminoMsg {
    type: "osmosis/incentives/genesis-state";
    value: GenesisStateAmino;
}
/**
 * GenesisState defines the incentives module's various parameters when first
 * initialized
 */
export interface GenesisStateSDKType {
    params: ParamsSDKType | undefined;
    gauges: GaugeSDKType[];
    lockable_durations: DurationSDKType[];
    last_gauge_id: bigint;
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
