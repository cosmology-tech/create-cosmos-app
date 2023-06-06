import * as fm from "../../../grpc-gateway";
import { SimulateRequest, SimulateResponse, GetTxRequest, GetTxResponse, BroadcastTxRequest, BroadcastTxResponse, GetTxsEventRequest, GetTxsEventResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse } from "./service";
export class Service {
  /** Simulate simulates executing a transaction for estimating gas usage. */
  static simulate(request: SimulateRequest, initRequest?: fm.InitReq): Promise<SimulateResponse> {
    return fm.fetchReq(`/cosmos/tx/v1beta1/simulate`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** GetTx fetches a tx by hash. */
  static getTx(request: GetTxRequest, initRequest?: fm.InitReq): Promise<GetTxResponse> {
    return fm.fetchReq(`/cosmos/tx/v1beta1/txs/${request["hash"]}?${fm.renderURLSearchParams({
      ...request
    }, ["hash"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** BroadcastTx broadcast transaction. */
  static broadcastTx(request: BroadcastTxRequest, initRequest?: fm.InitReq): Promise<BroadcastTxResponse> {
    return fm.fetchReq(`/cosmos/tx/v1beta1/txs`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** GetTxsEvent fetches txs by event. */
  static getTxsEvent(request: GetTxsEventRequest, initRequest?: fm.InitReq): Promise<GetTxsEventResponse> {
    return fm.fetchReq(`/cosmos/tx/v1beta1/txs?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * GetBlockWithTxs fetches a block with decoded txs.
   * 
   * Since: cosmos-sdk 0.45.2
   */
  static getBlockWithTxs(request: GetBlockWithTxsRequest, initRequest?: fm.InitReq): Promise<GetBlockWithTxsResponse> {
    return fm.fetchReq(`/cosmos/tx/v1beta1/txs/block/${request["height"]}?${fm.renderURLSearchParams({
      ...request
    }, ["height"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class Querier {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  /** Simulate simulates executing a transaction for estimating gas usage. */
  async simulate(req: SimulateRequest, headers?: HeadersInit): Promise<SimulateResponse> {
    return Service.simulate(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GetTx fetches a tx by hash. */
  async getTx(req: GetTxRequest, headers?: HeadersInit): Promise<GetTxResponse> {
    return Service.getTx(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** BroadcastTx broadcast transaction. */
  async broadcastTx(req: BroadcastTxRequest, headers?: HeadersInit): Promise<BroadcastTxResponse> {
    return Service.broadcastTx(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GetTxsEvent fetches txs by event. */
  async getTxsEvent(req: GetTxsEventRequest, headers?: HeadersInit): Promise<GetTxsEventResponse> {
    return Service.getTxsEvent(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * GetBlockWithTxs fetches a block with decoded txs.
   * 
   * Since: cosmos-sdk 0.45.2
   */
  async getBlockWithTxs(req: GetBlockWithTxsRequest, headers?: HeadersInit): Promise<GetBlockWithTxsResponse> {
    return Service.getBlockWithTxs(req, {
      headers,
      pathPrefix: this.url
    });
  }
}