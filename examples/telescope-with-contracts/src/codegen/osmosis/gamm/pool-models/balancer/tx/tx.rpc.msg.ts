import { Rpc } from "../../../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateBalancerPool, MsgCreateBalancerPoolResponse } from "./tx";
export interface Msg {
  createBalancerPool(request: MsgCreateBalancerPool): Promise<MsgCreateBalancerPoolResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createBalancerPool = this.createBalancerPool.bind(this);
  }
  createBalancerPool(request: MsgCreateBalancerPool): Promise<MsgCreateBalancerPoolResponse> {
    const data = MsgCreateBalancerPool.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.poolmodels.balancer.v1beta1.Msg", "CreateBalancerPool", data);
    return promise.then(data => MsgCreateBalancerPoolResponse.decode(new _m0.Reader(data)));
  }
}