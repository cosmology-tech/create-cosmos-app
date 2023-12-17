import { TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { MsgCreateGauge, MsgCreateGaugeResponse, MsgAddToGauge, MsgAddToGaugeResponse } from "./tx";
export interface Msg {
  createGauge(request: MsgCreateGauge): Promise<MsgCreateGaugeResponse>;
  addToGauge(request: MsgAddToGauge): Promise<MsgAddToGaugeResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateGauge */
  createGauge = async (request: MsgCreateGauge): Promise<MsgCreateGaugeResponse> => {
    const data = MsgCreateGauge.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Msg", "CreateGauge", data);
    return promise.then(data => MsgCreateGaugeResponse.decode(new BinaryReader(data)));
  };
  /* AddToGauge */
  addToGauge = async (request: MsgAddToGauge): Promise<MsgAddToGaugeResponse> => {
    const data = MsgAddToGauge.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Msg", "AddToGauge", data);
    return promise.then(data => MsgAddToGaugeResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};