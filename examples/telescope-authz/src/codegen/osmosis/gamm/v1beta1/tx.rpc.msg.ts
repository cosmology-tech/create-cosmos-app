import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgJoinPool, MsgJoinPoolResponse, MsgExitPool, MsgExitPoolResponse, MsgSwapExactAmountIn, MsgSwapExactAmountInResponse, MsgSwapExactAmountOut, MsgSwapExactAmountOutResponse, MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInResponse, MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutResponse, MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutResponse, MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInResponse } from "./tx";
export interface Msg {
  joinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponse>;
  exitPool(request: MsgExitPool): Promise<MsgExitPoolResponse>;
  swapExactAmountIn(request: MsgSwapExactAmountIn): Promise<MsgSwapExactAmountInResponse>;
  swapExactAmountOut(request: MsgSwapExactAmountOut): Promise<MsgSwapExactAmountOutResponse>;
  joinSwapExternAmountIn(request: MsgJoinSwapExternAmountIn): Promise<MsgJoinSwapExternAmountInResponse>;
  joinSwapShareAmountOut(request: MsgJoinSwapShareAmountOut): Promise<MsgJoinSwapShareAmountOutResponse>;
  exitSwapExternAmountOut(request: MsgExitSwapExternAmountOut): Promise<MsgExitSwapExternAmountOutResponse>;
  exitSwapShareAmountIn(request: MsgExitSwapShareAmountIn): Promise<MsgExitSwapShareAmountInResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* JoinPool */
  joinPool = async (request: MsgJoinPool): Promise<MsgJoinPoolResponse> => {
    const data = MsgJoinPool.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "JoinPool", data);
    return promise.then(data => MsgJoinPoolResponse.decode(new BinaryReader(data)));
  };
  /* ExitPool */
  exitPool = async (request: MsgExitPool): Promise<MsgExitPoolResponse> => {
    const data = MsgExitPool.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "ExitPool", data);
    return promise.then(data => MsgExitPoolResponse.decode(new BinaryReader(data)));
  };
  /* SwapExactAmountIn */
  swapExactAmountIn = async (request: MsgSwapExactAmountIn): Promise<MsgSwapExactAmountInResponse> => {
    const data = MsgSwapExactAmountIn.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "SwapExactAmountIn", data);
    return promise.then(data => MsgSwapExactAmountInResponse.decode(new BinaryReader(data)));
  };
  /* SwapExactAmountOut */
  swapExactAmountOut = async (request: MsgSwapExactAmountOut): Promise<MsgSwapExactAmountOutResponse> => {
    const data = MsgSwapExactAmountOut.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "SwapExactAmountOut", data);
    return promise.then(data => MsgSwapExactAmountOutResponse.decode(new BinaryReader(data)));
  };
  /* JoinSwapExternAmountIn */
  joinSwapExternAmountIn = async (request: MsgJoinSwapExternAmountIn): Promise<MsgJoinSwapExternAmountInResponse> => {
    const data = MsgJoinSwapExternAmountIn.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "JoinSwapExternAmountIn", data);
    return promise.then(data => MsgJoinSwapExternAmountInResponse.decode(new BinaryReader(data)));
  };
  /* JoinSwapShareAmountOut */
  joinSwapShareAmountOut = async (request: MsgJoinSwapShareAmountOut): Promise<MsgJoinSwapShareAmountOutResponse> => {
    const data = MsgJoinSwapShareAmountOut.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "JoinSwapShareAmountOut", data);
    return promise.then(data => MsgJoinSwapShareAmountOutResponse.decode(new BinaryReader(data)));
  };
  /* ExitSwapExternAmountOut */
  exitSwapExternAmountOut = async (request: MsgExitSwapExternAmountOut): Promise<MsgExitSwapExternAmountOutResponse> => {
    const data = MsgExitSwapExternAmountOut.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "ExitSwapExternAmountOut", data);
    return promise.then(data => MsgExitSwapExternAmountOutResponse.decode(new BinaryReader(data)));
  };
  /* ExitSwapShareAmountIn */
  exitSwapShareAmountIn = async (request: MsgExitSwapShareAmountIn): Promise<MsgExitSwapShareAmountInResponse> => {
    const data = MsgExitSwapShareAmountIn.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Msg", "ExitSwapShareAmountIn", data);
    return promise.then(data => MsgExitSwapShareAmountInResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};