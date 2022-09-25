import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { SimulateRequest, SimulateResponse, SimulateResponseSDKType, GetTxRequest, GetTxResponse, GetTxResponseSDKType, BroadcastTxRequest, BroadcastTxResponse, BroadcastTxResponseSDKType, GetTxsEventRequest, GetTxsEventResponse, GetTxsEventResponseSDKType, GetBlockWithTxsRequest, GetBlockWithTxsResponse, GetBlockWithTxsResponseSDKType } from "./service";
/** Service defines the RPC service */

export interface Service {
  simulate(request: SimulateRequest): Promise<SimulateResponseSDKType>;
  /*Simulate simulates executing a transaction for estimating gas usage.*/

  getTx(request: GetTxRequest): Promise<GetTxResponseSDKType>;
  /*GetTx fetches a tx by hash.*/

  broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponseSDKType>;
  /*BroadcastTx broadcast transaction.*/

  getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponseSDKType>;
  /*GetTxsEvent fetches txs by event.*/

  getBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponseSDKType>;
  /*GetBlockWithTxs fetches a block with decoded txs.
  
  Since: cosmos-sdk 0.45.2*/

}
export class QueryClientImpl implements Service {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.simulate = this.simulate.bind(this);
    this.getTx = this.getTx.bind(this);
    this.broadcastTx = this.broadcastTx.bind(this);
    this.getTxsEvent = this.getTxsEvent.bind(this);
    this.getBlockWithTxs = this.getBlockWithTxs.bind(this);
  }

  simulate(request: SimulateRequest): Promise<SimulateResponseSDKType> {
    const data = SimulateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "Simulate", data);
    return promise.then(data => SimulateResponse.decode(new _m0.Reader(data)));
  }

  getTx(request: GetTxRequest): Promise<GetTxResponseSDKType> {
    const data = GetTxRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTx", data);
    return promise.then(data => GetTxResponse.decode(new _m0.Reader(data)));
  }

  broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponseSDKType> {
    const data = BroadcastTxRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "BroadcastTx", data);
    return promise.then(data => BroadcastTxResponse.decode(new _m0.Reader(data)));
  }

  getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponseSDKType> {
    const data = GetTxsEventRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetTxsEvent", data);
    return promise.then(data => GetTxsEventResponse.decode(new _m0.Reader(data)));
  }

  getBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponseSDKType> {
    const data = GetBlockWithTxsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.tx.v1beta1.Service", "GetBlockWithTxs", data);
    return promise.then(data => GetBlockWithTxsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    simulate(request: SimulateRequest): Promise<SimulateResponseSDKType> {
      return queryService.simulate(request);
    },

    getTx(request: GetTxRequest): Promise<GetTxResponseSDKType> {
      return queryService.getTx(request);
    },

    broadcastTx(request: BroadcastTxRequest): Promise<BroadcastTxResponseSDKType> {
      return queryService.broadcastTx(request);
    },

    getTxsEvent(request: GetTxsEventRequest): Promise<GetTxsEventResponseSDKType> {
      return queryService.getTxsEvent(request);
    },

    getBlockWithTxs(request: GetBlockWithTxsRequest): Promise<GetBlockWithTxsResponseSDKType> {
      return queryService.getBlockWithTxs(request);
    }

  };
};