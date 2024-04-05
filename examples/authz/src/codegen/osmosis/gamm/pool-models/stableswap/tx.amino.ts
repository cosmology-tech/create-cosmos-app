//@ts-nocheck
import { PoolParams, PoolParamsSDKType } from "./stableswap_pool";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { MsgCreateStableswapPool, MsgCreateStableswapPoolSDKType, MsgStableSwapAdjustScalingFactors, MsgStableSwapAdjustScalingFactorsSDKType } from "./tx";
export const AminoConverter = {
  "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
    aminoType: "osmosis/gamm/create-stableswap-pool",
    toAmino: MsgCreateStableswapPool.toAmino,
    fromAmino: MsgCreateStableswapPool.fromAmino
  },
  "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
    aminoType: "osmosis/gamm/stable-swap-adjust-scaling-factors",
    toAmino: MsgStableSwapAdjustScalingFactors.toAmino,
    fromAmino: MsgStableSwapAdjustScalingFactors.fromAmino
  }
};