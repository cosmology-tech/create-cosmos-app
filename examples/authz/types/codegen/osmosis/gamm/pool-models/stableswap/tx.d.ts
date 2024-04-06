import { PoolParams, PoolParamsAmino, PoolParamsSDKType } from "./stableswap_pool";
import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/** ===================== MsgCreatePool */
export interface MsgCreateStableswapPool {
    sender: string;
    poolParams?: PoolParams | undefined;
    initialPoolLiquidity: Coin[];
    scalingFactors: bigint[];
    futurePoolGovernor: string;
    scalingFactorController: string;
}
export interface MsgCreateStableswapPoolProtoMsg {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool";
    value: Uint8Array;
}
/** ===================== MsgCreatePool */
export interface MsgCreateStableswapPoolAmino {
    sender?: string;
    pool_params?: PoolParamsAmino | undefined;
    initial_pool_liquidity?: CoinAmino[];
    scaling_factors?: string[];
    future_pool_governor?: string;
    scaling_factor_controller?: string;
}
export interface MsgCreateStableswapPoolAminoMsg {
    type: "osmosis/gamm/create-stableswap-pool";
    value: MsgCreateStableswapPoolAmino;
}
/** ===================== MsgCreatePool */
export interface MsgCreateStableswapPoolSDKType {
    sender: string;
    pool_params?: PoolParamsSDKType | undefined;
    initial_pool_liquidity: CoinSDKType[];
    scaling_factors: bigint[];
    future_pool_governor: string;
    scaling_factor_controller: string;
}
/** Returns a poolID with custom poolName. */
export interface MsgCreateStableswapPoolResponse {
    poolId: bigint;
}
export interface MsgCreateStableswapPoolResponseProtoMsg {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPoolResponse";
    value: Uint8Array;
}
/** Returns a poolID with custom poolName. */
export interface MsgCreateStableswapPoolResponseAmino {
    pool_id?: string;
}
export interface MsgCreateStableswapPoolResponseAminoMsg {
    type: "osmosis/gamm/create-stableswap-pool-response";
    value: MsgCreateStableswapPoolResponseAmino;
}
/** Returns a poolID with custom poolName. */
export interface MsgCreateStableswapPoolResponseSDKType {
    pool_id: bigint;
}
/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 */
export interface MsgStableSwapAdjustScalingFactors {
    sender: string;
    poolId: bigint;
    scalingFactors: bigint[];
}
export interface MsgStableSwapAdjustScalingFactorsProtoMsg {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors";
    value: Uint8Array;
}
/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 */
export interface MsgStableSwapAdjustScalingFactorsAmino {
    sender?: string;
    pool_id?: string;
    scaling_factors?: string[];
}
export interface MsgStableSwapAdjustScalingFactorsAminoMsg {
    type: "osmosis/gamm/stable-swap-adjust-scaling-factors";
    value: MsgStableSwapAdjustScalingFactorsAmino;
}
/**
 * Sender must be the pool's scaling_factor_governor in order for the tx to
 * succeed. Adjusts stableswap scaling factors.
 */
export interface MsgStableSwapAdjustScalingFactorsSDKType {
    sender: string;
    pool_id: bigint;
    scaling_factors: bigint[];
}
export interface MsgStableSwapAdjustScalingFactorsResponse {
}
export interface MsgStableSwapAdjustScalingFactorsResponseProtoMsg {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactorsResponse";
    value: Uint8Array;
}
export interface MsgStableSwapAdjustScalingFactorsResponseAmino {
}
export interface MsgStableSwapAdjustScalingFactorsResponseAminoMsg {
    type: "osmosis/gamm/stable-swap-adjust-scaling-factors-response";
    value: MsgStableSwapAdjustScalingFactorsResponseAmino;
}
export interface MsgStableSwapAdjustScalingFactorsResponseSDKType {
}
export declare const MsgCreateStableswapPool: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCreateStableswapPool;
    isSDK(o: any): o is MsgCreateStableswapPoolSDKType;
    isAmino(o: any): o is MsgCreateStableswapPoolAmino;
    encode(message: MsgCreateStableswapPool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateStableswapPool;
    fromJSON(object: any): MsgCreateStableswapPool;
    toJSON(message: MsgCreateStableswapPool): unknown;
    fromPartial(object: DeepPartial<MsgCreateStableswapPool>): MsgCreateStableswapPool;
    fromSDK(object: MsgCreateStableswapPoolSDKType): MsgCreateStableswapPool;
    toSDK(message: MsgCreateStableswapPool): MsgCreateStableswapPoolSDKType;
    fromAmino(object: MsgCreateStableswapPoolAmino): MsgCreateStableswapPool;
    toAmino(message: MsgCreateStableswapPool): MsgCreateStableswapPoolAmino;
    fromAminoMsg(object: MsgCreateStableswapPoolAminoMsg): MsgCreateStableswapPool;
    toAminoMsg(message: MsgCreateStableswapPool): MsgCreateStableswapPoolAminoMsg;
    fromProtoMsg(message: MsgCreateStableswapPoolProtoMsg): MsgCreateStableswapPool;
    toProto(message: MsgCreateStableswapPool): Uint8Array;
    toProtoMsg(message: MsgCreateStableswapPool): MsgCreateStableswapPoolProtoMsg;
};
export declare const MsgCreateStableswapPoolResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgCreateStableswapPoolResponse;
    isSDK(o: any): o is MsgCreateStableswapPoolResponseSDKType;
    isAmino(o: any): o is MsgCreateStableswapPoolResponseAmino;
    encode(message: MsgCreateStableswapPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateStableswapPoolResponse;
    fromJSON(object: any): MsgCreateStableswapPoolResponse;
    toJSON(message: MsgCreateStableswapPoolResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateStableswapPoolResponse>): MsgCreateStableswapPoolResponse;
    fromSDK(object: MsgCreateStableswapPoolResponseSDKType): MsgCreateStableswapPoolResponse;
    toSDK(message: MsgCreateStableswapPoolResponse): MsgCreateStableswapPoolResponseSDKType;
    fromAmino(object: MsgCreateStableswapPoolResponseAmino): MsgCreateStableswapPoolResponse;
    toAmino(message: MsgCreateStableswapPoolResponse): MsgCreateStableswapPoolResponseAmino;
    fromAminoMsg(object: MsgCreateStableswapPoolResponseAminoMsg): MsgCreateStableswapPoolResponse;
    toAminoMsg(message: MsgCreateStableswapPoolResponse): MsgCreateStableswapPoolResponseAminoMsg;
    fromProtoMsg(message: MsgCreateStableswapPoolResponseProtoMsg): MsgCreateStableswapPoolResponse;
    toProto(message: MsgCreateStableswapPoolResponse): Uint8Array;
    toProtoMsg(message: MsgCreateStableswapPoolResponse): MsgCreateStableswapPoolResponseProtoMsg;
};
export declare const MsgStableSwapAdjustScalingFactors: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgStableSwapAdjustScalingFactors;
    isSDK(o: any): o is MsgStableSwapAdjustScalingFactorsSDKType;
    isAmino(o: any): o is MsgStableSwapAdjustScalingFactorsAmino;
    encode(message: MsgStableSwapAdjustScalingFactors, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgStableSwapAdjustScalingFactors;
    fromJSON(object: any): MsgStableSwapAdjustScalingFactors;
    toJSON(message: MsgStableSwapAdjustScalingFactors): unknown;
    fromPartial(object: DeepPartial<MsgStableSwapAdjustScalingFactors>): MsgStableSwapAdjustScalingFactors;
    fromSDK(object: MsgStableSwapAdjustScalingFactorsSDKType): MsgStableSwapAdjustScalingFactors;
    toSDK(message: MsgStableSwapAdjustScalingFactors): MsgStableSwapAdjustScalingFactorsSDKType;
    fromAmino(object: MsgStableSwapAdjustScalingFactorsAmino): MsgStableSwapAdjustScalingFactors;
    toAmino(message: MsgStableSwapAdjustScalingFactors): MsgStableSwapAdjustScalingFactorsAmino;
    fromAminoMsg(object: MsgStableSwapAdjustScalingFactorsAminoMsg): MsgStableSwapAdjustScalingFactors;
    toAminoMsg(message: MsgStableSwapAdjustScalingFactors): MsgStableSwapAdjustScalingFactorsAminoMsg;
    fromProtoMsg(message: MsgStableSwapAdjustScalingFactorsProtoMsg): MsgStableSwapAdjustScalingFactors;
    toProto(message: MsgStableSwapAdjustScalingFactors): Uint8Array;
    toProtoMsg(message: MsgStableSwapAdjustScalingFactors): MsgStableSwapAdjustScalingFactorsProtoMsg;
};
export declare const MsgStableSwapAdjustScalingFactorsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MsgStableSwapAdjustScalingFactorsResponse;
    isSDK(o: any): o is MsgStableSwapAdjustScalingFactorsResponseSDKType;
    isAmino(o: any): o is MsgStableSwapAdjustScalingFactorsResponseAmino;
    encode(_: MsgStableSwapAdjustScalingFactorsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MsgStableSwapAdjustScalingFactorsResponse;
    fromJSON(_: any): MsgStableSwapAdjustScalingFactorsResponse;
    toJSON(_: MsgStableSwapAdjustScalingFactorsResponse): unknown;
    fromPartial(_: DeepPartial<MsgStableSwapAdjustScalingFactorsResponse>): MsgStableSwapAdjustScalingFactorsResponse;
    fromSDK(_: MsgStableSwapAdjustScalingFactorsResponseSDKType): MsgStableSwapAdjustScalingFactorsResponse;
    toSDK(_: MsgStableSwapAdjustScalingFactorsResponse): MsgStableSwapAdjustScalingFactorsResponseSDKType;
    fromAmino(_: MsgStableSwapAdjustScalingFactorsResponseAmino): MsgStableSwapAdjustScalingFactorsResponse;
    toAmino(_: MsgStableSwapAdjustScalingFactorsResponse): MsgStableSwapAdjustScalingFactorsResponseAmino;
    fromAminoMsg(object: MsgStableSwapAdjustScalingFactorsResponseAminoMsg): MsgStableSwapAdjustScalingFactorsResponse;
    toAminoMsg(message: MsgStableSwapAdjustScalingFactorsResponse): MsgStableSwapAdjustScalingFactorsResponseAminoMsg;
    fromProtoMsg(message: MsgStableSwapAdjustScalingFactorsResponseProtoMsg): MsgStableSwapAdjustScalingFactorsResponse;
    toProto(message: MsgStableSwapAdjustScalingFactorsResponse): Uint8Array;
    toProtoMsg(message: MsgStableSwapAdjustScalingFactorsResponse): MsgStableSwapAdjustScalingFactorsResponseProtoMsg;
};
