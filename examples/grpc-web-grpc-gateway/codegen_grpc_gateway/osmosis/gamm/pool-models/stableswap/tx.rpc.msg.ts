import { PoolParams, PoolParamsSDKType } from "./stableswap_pool";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import * as fm from "../../../../grpc-gateway";
import { MsgCreateStableswapPool, MsgCreateStableswapPoolSDKType, MsgCreateStableswapPoolResponse, MsgCreateStableswapPoolResponseSDKType, MsgStableSwapAdjustScalingFactors, MsgStableSwapAdjustScalingFactorsSDKType, MsgStableSwapAdjustScalingFactorsResponse, MsgStableSwapAdjustScalingFactorsResponseSDKType } from "./tx";
export class Msg {
  static createStableswapPool(request: MsgCreateStableswapPool, initRequest?: fm.InitReq): Promise<MsgCreateStableswapPoolResponse> {
    return fm.fetchReq(`/osmosis.gamm.poolmodels.stableswap.v1beta1/createStableswapPool`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static stableSwapAdjustScalingFactors(request: MsgStableSwapAdjustScalingFactors, initRequest?: fm.InitReq): Promise<MsgStableSwapAdjustScalingFactorsResponse> {
    return fm.fetchReq(`/osmosis.gamm.poolmodels.stableswap.v1beta1/stableSwapAdjustScalingFactors`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}