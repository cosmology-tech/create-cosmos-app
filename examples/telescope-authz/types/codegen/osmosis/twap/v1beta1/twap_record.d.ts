import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * A TWAP record should be indexed in state by pool_id, (asset pair), timestamp
 * The asset pair assets should be lexicographically sorted.
 * Technically (pool_id, asset_0_denom, asset_1_denom, height) do not need to
 * appear in the struct however we view this as the wrong performance tradeoff
 * given SDK today. Would rather we optimize for readability and correctness,
 * than an optimal state storage format. The system bottleneck is elsewhere for
 * now.
 */
export interface TwapRecord {
    poolId: bigint;
    /** Lexicographically smaller denom of the pair */
    asset0Denom: string;
    /** Lexicographically larger denom of the pair */
    asset1Denom: string;
    /** height this record corresponds to, for debugging purposes */
    height: bigint;
    /**
     * This field should only exist until we have a global registry in the state
     * machine, mapping prior block heights within {TIME RANGE} to times.
     */
    time: Date | undefined;
    /**
     * We store the last spot prices in the struct, so that we can interpolate
     * accumulator values for times between when accumulator records are stored.
     */
    p0LastSpotPrice: string;
    p1LastSpotPrice: string;
    p0ArithmeticTwapAccumulator: string;
    p1ArithmeticTwapAccumulator: string;
    /**
     * This field contains the time in which the last spot price error occured.
     * It is used to alert the caller if they are getting a potentially erroneous
     * TWAP, due to an unforeseen underlying error.
     */
    lastErrorTime: Date | undefined;
}
export interface TwapRecordProtoMsg {
    typeUrl: "/osmosis.twap.v1beta1.TwapRecord";
    value: Uint8Array;
}
/**
 * A TWAP record should be indexed in state by pool_id, (asset pair), timestamp
 * The asset pair assets should be lexicographically sorted.
 * Technically (pool_id, asset_0_denom, asset_1_denom, height) do not need to
 * appear in the struct however we view this as the wrong performance tradeoff
 * given SDK today. Would rather we optimize for readability and correctness,
 * than an optimal state storage format. The system bottleneck is elsewhere for
 * now.
 */
export interface TwapRecordAmino {
    pool_id?: string;
    /** Lexicographically smaller denom of the pair */
    asset0_denom?: string;
    /** Lexicographically larger denom of the pair */
    asset1_denom?: string;
    /** height this record corresponds to, for debugging purposes */
    height?: string;
    /**
     * This field should only exist until we have a global registry in the state
     * machine, mapping prior block heights within {TIME RANGE} to times.
     */
    time?: string | undefined;
    /**
     * We store the last spot prices in the struct, so that we can interpolate
     * accumulator values for times between when accumulator records are stored.
     */
    p0_last_spot_price?: string;
    p1_last_spot_price?: string;
    p0_arithmetic_twap_accumulator?: string;
    p1_arithmetic_twap_accumulator?: string;
    /**
     * This field contains the time in which the last spot price error occured.
     * It is used to alert the caller if they are getting a potentially erroneous
     * TWAP, due to an unforeseen underlying error.
     */
    last_error_time?: string | undefined;
}
export interface TwapRecordAminoMsg {
    type: "osmosis/twap/twap-record";
    value: TwapRecordAmino;
}
/**
 * A TWAP record should be indexed in state by pool_id, (asset pair), timestamp
 * The asset pair assets should be lexicographically sorted.
 * Technically (pool_id, asset_0_denom, asset_1_denom, height) do not need to
 * appear in the struct however we view this as the wrong performance tradeoff
 * given SDK today. Would rather we optimize for readability and correctness,
 * than an optimal state storage format. The system bottleneck is elsewhere for
 * now.
 */
export interface TwapRecordSDKType {
    pool_id: bigint;
    asset0_denom: string;
    asset1_denom: string;
    height: bigint;
    time: Date | undefined;
    p0_last_spot_price: string;
    p1_last_spot_price: string;
    p0_arithmetic_twap_accumulator: string;
    p1_arithmetic_twap_accumulator: string;
    last_error_time: Date | undefined;
}
export declare const TwapRecord: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is TwapRecord;
    isSDK(o: any): o is TwapRecordSDKType;
    isAmino(o: any): o is TwapRecordAmino;
    encode(message: TwapRecord, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TwapRecord;
    fromJSON(object: any): TwapRecord;
    toJSON(message: TwapRecord): unknown;
    fromPartial(object: DeepPartial<TwapRecord>): TwapRecord;
    fromSDK(object: TwapRecordSDKType): TwapRecord;
    toSDK(message: TwapRecord): TwapRecordSDKType;
    fromAmino(object: TwapRecordAmino): TwapRecord;
    toAmino(message: TwapRecord): TwapRecordAmino;
    fromAminoMsg(object: TwapRecordAminoMsg): TwapRecord;
    toAminoMsg(message: TwapRecord): TwapRecordAminoMsg;
    fromProtoMsg(message: TwapRecordProtoMsg): TwapRecord;
    toProto(message: TwapRecord): Uint8Array;
    toProtoMsg(message: TwapRecord): TwapRecordProtoMsg;
};
