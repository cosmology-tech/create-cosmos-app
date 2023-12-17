import { DeliverTxResponse, StdFee, TxRpc } from "../../../../types";
import { MsgCreateStableswapPool, MsgStableSwapAdjustScalingFactors } from "./tx";
export interface Msg {
  createStableswapPool(signerAddress: string, message: MsgCreateStableswapPool, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  stableSwapAdjustScalingFactors(signerAddress: string, message: MsgStableSwapAdjustScalingFactors, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateStableswapPool */
  createStableswapPool = async (signerAddress: string, message: MsgCreateStableswapPool, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateStableswapPool.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* StableSwapAdjustScalingFactors */
  stableSwapAdjustScalingFactors = async (signerAddress: string, message: MsgStableSwapAdjustScalingFactors, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgStableSwapAdjustScalingFactors.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};