import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */
export interface PoolParams {
    swapFee: string;
    exitFee: string;
}
export interface PoolParamsProtoMsg {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.PoolParams";
    value: Uint8Array;
}
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */
export interface PoolParamsAmino {
    swap_fee?: string;
    exit_fee?: string;
}
export interface PoolParamsAminoMsg {
    type: "osmosis/gamm/pool-params";
    value: PoolParamsAmino;
}
/**
 * PoolParams defined the parameters that will be managed by the pool
 * governance in the future. This params are not managed by the chain
 * governance. Instead they will be managed by the token holders of the pool.
 * The pool's token holders are specified in future_pool_governor.
 */
export interface PoolParamsSDKType {
    swap_fee: string;
    exit_fee: string;
}
/** Pool is the stableswap Pool struct */
export interface Pool {
    $typeUrl?: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool";
    address: string;
    id: bigint;
    poolParams: PoolParams | undefined;
    /**
     * This string specifies who will govern the pool in the future.
     * Valid forms of this are:
     * {token name},{duration}
     * {duration}
     * where {token name} if specified is the token which determines the
     * governor, and if not specified is the LP token for this pool.duration is
     * a time specified as 0w,1w,2w, etc. which specifies how long the token
     * would need to be locked up to count in governance. 0w means no lockup.
     */
    futurePoolGovernor: string;
    /** sum of all LP shares */
    totalShares: Coin | undefined;
    /** assets in the pool */
    poolLiquidity: Coin[];
    /** for calculation amognst assets with different precisions */
    scalingFactors: bigint[];
    /** scaling_factor_controller is the address can adjust pool scaling factors */
    scalingFactorController: string;
}
export interface PoolProtoMsg {
    typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool";
    value: Uint8Array;
}
/** Pool is the stableswap Pool struct */
export interface PoolAmino {
    address?: string;
    id?: string;
    pool_params?: PoolParamsAmino | undefined;
    /**
     * This string specifies who will govern the pool in the future.
     * Valid forms of this are:
     * {token name},{duration}
     * {duration}
     * where {token name} if specified is the token which determines the
     * governor, and if not specified is the LP token for this pool.duration is
     * a time specified as 0w,1w,2w, etc. which specifies how long the token
     * would need to be locked up to count in governance. 0w means no lockup.
     */
    future_pool_governor?: string;
    /** sum of all LP shares */
    total_shares?: CoinAmino | undefined;
    /** assets in the pool */
    pool_liquidity?: CoinAmino[];
    /** for calculation amognst assets with different precisions */
    scaling_factors?: string[];
    /** scaling_factor_controller is the address can adjust pool scaling factors */
    scaling_factor_controller?: string;
}
export interface PoolAminoMsg {
    type: "osmosis/gamm/pool";
    value: PoolAmino;
}
/** Pool is the stableswap Pool struct */
export interface PoolSDKType {
    $typeUrl?: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool";
    address: string;
    id: bigint;
    pool_params: PoolParamsSDKType | undefined;
    future_pool_governor: string;
    total_shares: CoinSDKType | undefined;
    pool_liquidity: CoinSDKType[];
    scaling_factors: bigint[];
    scaling_factor_controller: string;
}
export declare const PoolParams: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is PoolParams;
    isSDK(o: any): o is PoolParamsSDKType;
    isAmino(o: any): o is PoolParamsAmino;
    encode(message: PoolParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PoolParams;
    fromJSON(object: any): PoolParams;
    toJSON(message: PoolParams): unknown;
    fromPartial(object: DeepPartial<PoolParams>): PoolParams;
    fromSDK(object: PoolParamsSDKType): PoolParams;
    toSDK(message: PoolParams): PoolParamsSDKType;
    fromAmino(object: PoolParamsAmino): PoolParams;
    toAmino(message: PoolParams): PoolParamsAmino;
    fromAminoMsg(object: PoolParamsAminoMsg): PoolParams;
    toAminoMsg(message: PoolParams): PoolParamsAminoMsg;
    fromProtoMsg(message: PoolParamsProtoMsg): PoolParams;
    toProto(message: PoolParams): Uint8Array;
    toProtoMsg(message: PoolParams): PoolParamsProtoMsg;
};
export declare const Pool: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Pool;
    isSDK(o: any): o is PoolSDKType;
    isAmino(o: any): o is PoolAmino;
    encode(message: Pool, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Pool;
    fromJSON(object: any): Pool;
    toJSON(message: Pool): unknown;
    fromPartial(object: DeepPartial<Pool>): Pool;
    fromSDK(object: PoolSDKType): Pool;
    toSDK(message: Pool): PoolSDKType;
    fromAmino(object: PoolAmino): Pool;
    toAmino(message: Pool): PoolAmino;
    fromAminoMsg(object: PoolAminoMsg): Pool;
    toAminoMsg(message: Pool): PoolAminoMsg;
    fromProtoMsg(message: PoolProtoMsg): Pool;
    toProto(message: Pool): Uint8Array;
    toProtoMsg(message: Pool): PoolProtoMsg;
};
