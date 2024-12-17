//@ts-nocheck
import { PoolParams, PoolParamsSDKType } from "./stableswap_pool";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { AminoMsg } from "@cosmjs/amino";
import { MsgCreateStableswapPool, MsgCreateStableswapPoolSDKType, MsgStableSwapAdjustScalingFactors, MsgStableSwapAdjustScalingFactorsSDKType } from "./tx";
export interface MsgCreateStableswapPoolAminoType extends AminoMsg {
  type: "osmosis/gamm/create-stableswap-pool";
  value: {
    sender: string;
    pool_params: {
      swap_fee: string;
      exit_fee: string;
    };
    initial_pool_liquidity: {
      denom: string;
      amount: string;
    }[];
    scaling_factors: string[];
    future_pool_governor: string;
    scaling_factor_controller: string;
  };
}
export interface MsgStableSwapAdjustScalingFactorsAminoType extends AminoMsg {
  type: "osmosis/gamm/stable-swap-adjust-scaling-factors";
  value: {
    sender: string;
    pool_id: string;
    scaling_factors: string[];
  };
}
export const AminoConverter = {
  "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
    aminoType: "osmosis/gamm/create-stableswap-pool",
    toAmino: ({
      sender,
      poolParams,
      initialPoolLiquidity,
      scalingFactors,
      futurePoolGovernor,
      scalingFactorController
    }: MsgCreateStableswapPool): MsgCreateStableswapPoolAminoType["value"] => {
      return {
        sender,
        pool_params: {
          swap_fee: poolParams.swapFee,
          exit_fee: poolParams.exitFee
        },
        initial_pool_liquidity: initialPoolLiquidity.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        scaling_factors: scalingFactors.map(el0 => el0.toString()),
        future_pool_governor: futurePoolGovernor,
        scaling_factor_controller: scalingFactorController
      };
    },
    fromAmino: ({
      sender,
      pool_params,
      initial_pool_liquidity,
      scaling_factors,
      future_pool_governor,
      scaling_factor_controller
    }: MsgCreateStableswapPoolAminoType["value"]): MsgCreateStableswapPool => {
      return {
        sender,
        poolParams: {
          swapFee: pool_params.swap_fee,
          exitFee: pool_params.exit_fee
        },
        initialPoolLiquidity: initial_pool_liquidity.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        scalingFactors: scaling_factors.map(el0 => BigInt(el0)),
        futurePoolGovernor: future_pool_governor,
        scalingFactorController: scaling_factor_controller
      };
    }
  },
  "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
    aminoType: "osmosis/gamm/stable-swap-adjust-scaling-factors",
    toAmino: ({
      sender,
      poolId,
      scalingFactors
    }: MsgStableSwapAdjustScalingFactors): MsgStableSwapAdjustScalingFactorsAminoType["value"] => {
      return {
        sender,
        pool_id: poolId.toString(),
        scaling_factors: scalingFactors.map(el0 => el0.toString())
      };
    },
    fromAmino: ({
      sender,
      pool_id,
      scaling_factors
    }: MsgStableSwapAdjustScalingFactorsAminoType["value"]): MsgStableSwapAdjustScalingFactors => {
      return {
        sender,
        poolId: BigInt(pool_id),
        scalingFactors: scaling_factors.map(el0 => BigInt(el0))
      };
    }
  }
};