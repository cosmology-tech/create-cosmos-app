//@ts-nocheck
import { PoolParams, PoolParamsSDKType, PoolAsset, PoolAssetSDKType } from "../balancerPool";
import { MsgCreateBalancerPool, MsgCreateBalancerPoolSDKType } from "./tx";
export const AminoConverter = {
  "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
    aminoType: "osmosis/gamm/poolmodels/balancer/create-balancer-pool",
    toAmino: MsgCreateBalancerPool.toAmino,
    fromAmino: MsgCreateBalancerPool.fromAmino
  }
};