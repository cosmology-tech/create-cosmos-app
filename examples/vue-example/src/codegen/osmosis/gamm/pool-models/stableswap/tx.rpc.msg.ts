import { PoolParams, PoolParamsSDKType } from "./stableswap_pool";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Rpc } from "../../../../helpers";
import { BinaryReader } from "../../../../binary";
import { MsgCreateStableswapPool, MsgCreateStableswapPoolSDKType, MsgCreateStableswapPoolResponse, MsgCreateStableswapPoolResponseSDKType, MsgStableSwapAdjustScalingFactors, MsgStableSwapAdjustScalingFactorsSDKType, MsgStableSwapAdjustScalingFactorsResponse, MsgStableSwapAdjustScalingFactorsResponseSDKType } from "./tx";
export interface Msg {
  createStableswapPool(request: MsgCreateStableswapPool): Promise<MsgCreateStableswapPoolResponse>;
  stableSwapAdjustScalingFactors(request: MsgStableSwapAdjustScalingFactors): Promise<MsgStableSwapAdjustScalingFactorsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createStableswapPool = this.createStableswapPool.bind(this);
    this.stableSwapAdjustScalingFactors = this.stableSwapAdjustScalingFactors.bind(this);
  }
  createStableswapPool(request: MsgCreateStableswapPool): Promise<MsgCreateStableswapPoolResponse> {
    const data = MsgCreateStableswapPool.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.poolmodels.stableswap.v1beta1.Msg", "CreateStableswapPool", data);
    return promise.then(data => MsgCreateStableswapPoolResponse.decode(new BinaryReader(data)));
  }
  stableSwapAdjustScalingFactors(request: MsgStableSwapAdjustScalingFactors): Promise<MsgStableSwapAdjustScalingFactorsResponse> {
    const data = MsgStableSwapAdjustScalingFactors.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.poolmodels.stableswap.v1beta1.Msg", "StableSwapAdjustScalingFactors", data);
    return promise.then(data => MsgStableSwapAdjustScalingFactorsResponse.decode(new BinaryReader(data)));
  }
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};