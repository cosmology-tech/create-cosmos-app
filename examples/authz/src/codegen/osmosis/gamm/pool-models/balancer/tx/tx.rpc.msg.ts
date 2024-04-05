//@ts-nocheck
import { PoolParams, PoolParamsSDKType, PoolAsset, PoolAssetSDKType } from "../balancerPool";
import { DeliverTxResponse, StdFee, TxRpc } from "../../../../../types";
import { BinaryReader } from "../../../../../binary";
import { MsgCreateBalancerPool, MsgCreateBalancerPoolSDKType, MsgCreateBalancerPoolResponse, MsgCreateBalancerPoolResponseSDKType } from "./tx";
export interface Msg {
  createBalancerPool(signerAddress: string, message: MsgCreateBalancerPool, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateBalancerPool */
  createBalancerPool = async (signerAddress: string, message: MsgCreateBalancerPool, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateBalancerPool.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};