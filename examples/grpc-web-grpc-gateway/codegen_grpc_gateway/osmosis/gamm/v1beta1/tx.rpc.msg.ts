import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as fm from "../../../grpc-gateway";
import { MsgJoinPool, MsgJoinPoolSDKType, MsgJoinPoolResponse, MsgJoinPoolResponseSDKType, MsgExitPool, MsgExitPoolSDKType, MsgExitPoolResponse, MsgExitPoolResponseSDKType, MsgSwapExactAmountIn, MsgSwapExactAmountInSDKType, MsgSwapExactAmountInResponse, MsgSwapExactAmountInResponseSDKType, MsgSwapExactAmountOut, MsgSwapExactAmountOutSDKType, MsgSwapExactAmountOutResponse, MsgSwapExactAmountOutResponseSDKType, MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInSDKType, MsgJoinSwapExternAmountInResponse, MsgJoinSwapExternAmountInResponseSDKType, MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutSDKType, MsgJoinSwapShareAmountOutResponse, MsgJoinSwapShareAmountOutResponseSDKType, MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutSDKType, MsgExitSwapExternAmountOutResponse, MsgExitSwapExternAmountOutResponseSDKType, MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInSDKType, MsgExitSwapShareAmountInResponse, MsgExitSwapShareAmountInResponseSDKType } from "./tx";
export class Msg {
  static joinPool(request: MsgJoinPool, initRequest?: fm.InitReq): Promise<MsgJoinPoolResponse> {
    return fm.fetchReq(`/osmosis.gamm.v1beta1/joinPool`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static exitPool(request: MsgExitPool, initRequest?: fm.InitReq): Promise<MsgExitPoolResponse> {
    return fm.fetchReq(`/osmosis.gamm.v1beta1/exitPool`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static swapExactAmountIn(request: MsgSwapExactAmountIn, initRequest?: fm.InitReq): Promise<MsgSwapExactAmountInResponse> {
    return fm.fetchReq(`/osmosis.gamm.v1beta1/swapExactAmountIn`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static swapExactAmountOut(request: MsgSwapExactAmountOut, initRequest?: fm.InitReq): Promise<MsgSwapExactAmountOutResponse> {
    return fm.fetchReq(`/osmosis.gamm.v1beta1/swapExactAmountOut`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static joinSwapExternAmountIn(request: MsgJoinSwapExternAmountIn, initRequest?: fm.InitReq): Promise<MsgJoinSwapExternAmountInResponse> {
    return fm.fetchReq(`/osmosis.gamm.v1beta1/joinSwapExternAmountIn`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static joinSwapShareAmountOut(request: MsgJoinSwapShareAmountOut, initRequest?: fm.InitReq): Promise<MsgJoinSwapShareAmountOutResponse> {
    return fm.fetchReq(`/osmosis.gamm.v1beta1/joinSwapShareAmountOut`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static exitSwapExternAmountOut(request: MsgExitSwapExternAmountOut, initRequest?: fm.InitReq): Promise<MsgExitSwapExternAmountOutResponse> {
    return fm.fetchReq(`/osmosis.gamm.v1beta1/exitSwapExternAmountOut`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static exitSwapShareAmountIn(request: MsgExitSwapShareAmountIn, initRequest?: fm.InitReq): Promise<MsgExitSwapShareAmountInResponse> {
    return fm.fetchReq(`/osmosis.gamm.v1beta1/exitSwapShareAmountIn`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}