import { Params, ParamsSDKType } from "./params";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { RouteStatistics, RouteStatisticsSDKType, TokenPairArbRoutes, TokenPairArbRoutesSDKType, PoolWeights, PoolWeightsSDKType, BaseDenom, BaseDenomSDKType } from "./protorev";
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryGetProtoRevNumberOfTradesRequest, QueryGetProtoRevNumberOfTradesRequestSDKType, QueryGetProtoRevNumberOfTradesResponse, QueryGetProtoRevNumberOfTradesResponseSDKType, QueryGetProtoRevProfitsByDenomRequest, QueryGetProtoRevProfitsByDenomRequestSDKType, QueryGetProtoRevProfitsByDenomResponse, QueryGetProtoRevProfitsByDenomResponseSDKType, QueryGetProtoRevAllProfitsRequest, QueryGetProtoRevAllProfitsRequestSDKType, QueryGetProtoRevAllProfitsResponse, QueryGetProtoRevAllProfitsResponseSDKType, QueryGetProtoRevStatisticsByRouteRequest, QueryGetProtoRevStatisticsByRouteRequestSDKType, QueryGetProtoRevStatisticsByRouteResponse, QueryGetProtoRevStatisticsByRouteResponseSDKType, QueryGetProtoRevAllRouteStatisticsRequest, QueryGetProtoRevAllRouteStatisticsRequestSDKType, QueryGetProtoRevAllRouteStatisticsResponse, QueryGetProtoRevAllRouteStatisticsResponseSDKType, QueryGetProtoRevTokenPairArbRoutesRequest, QueryGetProtoRevTokenPairArbRoutesRequestSDKType, QueryGetProtoRevTokenPairArbRoutesResponse, QueryGetProtoRevTokenPairArbRoutesResponseSDKType, QueryGetProtoRevAdminAccountRequest, QueryGetProtoRevAdminAccountRequestSDKType, QueryGetProtoRevAdminAccountResponse, QueryGetProtoRevAdminAccountResponseSDKType, QueryGetProtoRevDeveloperAccountRequest, QueryGetProtoRevDeveloperAccountRequestSDKType, QueryGetProtoRevDeveloperAccountResponse, QueryGetProtoRevDeveloperAccountResponseSDKType, QueryGetProtoRevPoolWeightsRequest, QueryGetProtoRevPoolWeightsRequestSDKType, QueryGetProtoRevPoolWeightsResponse, QueryGetProtoRevPoolWeightsResponseSDKType, QueryGetProtoRevMaxPoolPointsPerTxRequest, QueryGetProtoRevMaxPoolPointsPerTxRequestSDKType, QueryGetProtoRevMaxPoolPointsPerTxResponse, QueryGetProtoRevMaxPoolPointsPerTxResponseSDKType, QueryGetProtoRevMaxPoolPointsPerBlockRequest, QueryGetProtoRevMaxPoolPointsPerBlockRequestSDKType, QueryGetProtoRevMaxPoolPointsPerBlockResponse, QueryGetProtoRevMaxPoolPointsPerBlockResponseSDKType, QueryGetProtoRevBaseDenomsRequest, QueryGetProtoRevBaseDenomsRequestSDKType, QueryGetProtoRevBaseDenomsResponse, QueryGetProtoRevBaseDenomsResponseSDKType, QueryGetProtoRevEnabledRequest, QueryGetProtoRevEnabledRequestSDKType, QueryGetProtoRevEnabledResponse, QueryGetProtoRevEnabledResponseSDKType } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * GetProtoRevNumberOfTrades queries the number of arbitrage trades the module
   * has executed
   */
  getProtoRevNumberOfTrades(request?: QueryGetProtoRevNumberOfTradesRequest): Promise<QueryGetProtoRevNumberOfTradesResponse>;
  /** GetProtoRevProfitsByDenom queries the profits of the module by denom */
  getProtoRevProfitsByDenom(request: QueryGetProtoRevProfitsByDenomRequest): Promise<QueryGetProtoRevProfitsByDenomResponse>;
  /** GetProtoRevAllProfits queries all of the profits from the module */
  getProtoRevAllProfits(request?: QueryGetProtoRevAllProfitsRequest): Promise<QueryGetProtoRevAllProfitsResponse>;
  /**
   * GetProtoRevStatisticsByRoute queries the number of arbitrages and profits
   * that have been executed for a given route
   */
  getProtoRevStatisticsByRoute(request: QueryGetProtoRevStatisticsByRouteRequest): Promise<QueryGetProtoRevStatisticsByRouteResponse>;
  /**
   * GetProtoRevAllRouteStatistics queries all of routes that the module has
   * arbitraged against and the number of trades and profits that have been
   * accumulated for each route
   */
  getProtoRevAllRouteStatistics(request?: QueryGetProtoRevAllRouteStatisticsRequest): Promise<QueryGetProtoRevAllRouteStatisticsResponse>;
  /**
   * GetProtoRevTokenPairArbRoutes queries all of the hot routes that the module
   * is currently arbitraging
   */
  getProtoRevTokenPairArbRoutes(request?: QueryGetProtoRevTokenPairArbRoutesRequest): Promise<QueryGetProtoRevTokenPairArbRoutesResponse>;
  /** GetProtoRevAdminAccount queries the admin account of the module */
  getProtoRevAdminAccount(request?: QueryGetProtoRevAdminAccountRequest): Promise<QueryGetProtoRevAdminAccountResponse>;
  /** GetProtoRevDeveloperAccount queries the developer account of the module */
  getProtoRevDeveloperAccount(request?: QueryGetProtoRevDeveloperAccountRequest): Promise<QueryGetProtoRevDeveloperAccountResponse>;
  /**
   * GetProtoRevPoolWeights queries the weights of each pool type currently
   * being used by the module
   */
  getProtoRevPoolWeights(request?: QueryGetProtoRevPoolWeightsRequest): Promise<QueryGetProtoRevPoolWeightsResponse>;
  /**
   * GetProtoRevMaxPoolPointsPerTx queries the maximum number of pool points
   * that can be consumed per transaction
   */
  getProtoRevMaxPoolPointsPerTx(request?: QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<QueryGetProtoRevMaxPoolPointsPerTxResponse>;
  /**
   * GetProtoRevMaxPoolPointsPerBlock queries the maximum number of pool points
   * that can consumed per block
   */
  getProtoRevMaxPoolPointsPerBlock(request?: QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<QueryGetProtoRevMaxPoolPointsPerBlockResponse>;
  /**
   * GetProtoRevBaseDenoms queries the base denoms that the module is currently
   * utilizing for arbitrage
   */
  getProtoRevBaseDenoms(request?: QueryGetProtoRevBaseDenomsRequest): Promise<QueryGetProtoRevBaseDenomsResponse>;
  /** GetProtoRevEnabled queries whether the module is enabled or not */
  getProtoRevEnabled(request?: QueryGetProtoRevEnabledRequest): Promise<QueryGetProtoRevEnabledResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.getProtoRevNumberOfTrades = this.getProtoRevNumberOfTrades.bind(this);
    this.getProtoRevProfitsByDenom = this.getProtoRevProfitsByDenom.bind(this);
    this.getProtoRevAllProfits = this.getProtoRevAllProfits.bind(this);
    this.getProtoRevStatisticsByRoute = this.getProtoRevStatisticsByRoute.bind(this);
    this.getProtoRevAllRouteStatistics = this.getProtoRevAllRouteStatistics.bind(this);
    this.getProtoRevTokenPairArbRoutes = this.getProtoRevTokenPairArbRoutes.bind(this);
    this.getProtoRevAdminAccount = this.getProtoRevAdminAccount.bind(this);
    this.getProtoRevDeveloperAccount = this.getProtoRevDeveloperAccount.bind(this);
    this.getProtoRevPoolWeights = this.getProtoRevPoolWeights.bind(this);
    this.getProtoRevMaxPoolPointsPerTx = this.getProtoRevMaxPoolPointsPerTx.bind(this);
    this.getProtoRevMaxPoolPointsPerBlock = this.getProtoRevMaxPoolPointsPerBlock.bind(this);
    this.getProtoRevBaseDenoms = this.getProtoRevBaseDenoms.bind(this);
    this.getProtoRevEnabled = this.getProtoRevEnabled.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  getProtoRevNumberOfTrades(request: QueryGetProtoRevNumberOfTradesRequest = {}): Promise<QueryGetProtoRevNumberOfTradesResponse> {
    const data = QueryGetProtoRevNumberOfTradesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevNumberOfTrades", data);
    return promise.then(data => QueryGetProtoRevNumberOfTradesResponse.decode(new BinaryReader(data)));
  }
  getProtoRevProfitsByDenom(request: QueryGetProtoRevProfitsByDenomRequest): Promise<QueryGetProtoRevProfitsByDenomResponse> {
    const data = QueryGetProtoRevProfitsByDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevProfitsByDenom", data);
    return promise.then(data => QueryGetProtoRevProfitsByDenomResponse.decode(new BinaryReader(data)));
  }
  getProtoRevAllProfits(request: QueryGetProtoRevAllProfitsRequest = {}): Promise<QueryGetProtoRevAllProfitsResponse> {
    const data = QueryGetProtoRevAllProfitsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevAllProfits", data);
    return promise.then(data => QueryGetProtoRevAllProfitsResponse.decode(new BinaryReader(data)));
  }
  getProtoRevStatisticsByRoute(request: QueryGetProtoRevStatisticsByRouteRequest): Promise<QueryGetProtoRevStatisticsByRouteResponse> {
    const data = QueryGetProtoRevStatisticsByRouteRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevStatisticsByRoute", data);
    return promise.then(data => QueryGetProtoRevStatisticsByRouteResponse.decode(new BinaryReader(data)));
  }
  getProtoRevAllRouteStatistics(request: QueryGetProtoRevAllRouteStatisticsRequest = {}): Promise<QueryGetProtoRevAllRouteStatisticsResponse> {
    const data = QueryGetProtoRevAllRouteStatisticsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevAllRouteStatistics", data);
    return promise.then(data => QueryGetProtoRevAllRouteStatisticsResponse.decode(new BinaryReader(data)));
  }
  getProtoRevTokenPairArbRoutes(request: QueryGetProtoRevTokenPairArbRoutesRequest = {}): Promise<QueryGetProtoRevTokenPairArbRoutesResponse> {
    const data = QueryGetProtoRevTokenPairArbRoutesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevTokenPairArbRoutes", data);
    return promise.then(data => QueryGetProtoRevTokenPairArbRoutesResponse.decode(new BinaryReader(data)));
  }
  getProtoRevAdminAccount(request: QueryGetProtoRevAdminAccountRequest = {}): Promise<QueryGetProtoRevAdminAccountResponse> {
    const data = QueryGetProtoRevAdminAccountRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevAdminAccount", data);
    return promise.then(data => QueryGetProtoRevAdminAccountResponse.decode(new BinaryReader(data)));
  }
  getProtoRevDeveloperAccount(request: QueryGetProtoRevDeveloperAccountRequest = {}): Promise<QueryGetProtoRevDeveloperAccountResponse> {
    const data = QueryGetProtoRevDeveloperAccountRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevDeveloperAccount", data);
    return promise.then(data => QueryGetProtoRevDeveloperAccountResponse.decode(new BinaryReader(data)));
  }
  getProtoRevPoolWeights(request: QueryGetProtoRevPoolWeightsRequest = {}): Promise<QueryGetProtoRevPoolWeightsResponse> {
    const data = QueryGetProtoRevPoolWeightsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevPoolWeights", data);
    return promise.then(data => QueryGetProtoRevPoolWeightsResponse.decode(new BinaryReader(data)));
  }
  getProtoRevMaxPoolPointsPerTx(request: QueryGetProtoRevMaxPoolPointsPerTxRequest = {}): Promise<QueryGetProtoRevMaxPoolPointsPerTxResponse> {
    const data = QueryGetProtoRevMaxPoolPointsPerTxRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevMaxPoolPointsPerTx", data);
    return promise.then(data => QueryGetProtoRevMaxPoolPointsPerTxResponse.decode(new BinaryReader(data)));
  }
  getProtoRevMaxPoolPointsPerBlock(request: QueryGetProtoRevMaxPoolPointsPerBlockRequest = {}): Promise<QueryGetProtoRevMaxPoolPointsPerBlockResponse> {
    const data = QueryGetProtoRevMaxPoolPointsPerBlockRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevMaxPoolPointsPerBlock", data);
    return promise.then(data => QueryGetProtoRevMaxPoolPointsPerBlockResponse.decode(new BinaryReader(data)));
  }
  getProtoRevBaseDenoms(request: QueryGetProtoRevBaseDenomsRequest = {}): Promise<QueryGetProtoRevBaseDenomsResponse> {
    const data = QueryGetProtoRevBaseDenomsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevBaseDenoms", data);
    return promise.then(data => QueryGetProtoRevBaseDenomsResponse.decode(new BinaryReader(data)));
  }
  getProtoRevEnabled(request: QueryGetProtoRevEnabledRequest = {}): Promise<QueryGetProtoRevEnabledResponse> {
    const data = QueryGetProtoRevEnabledRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.protorev.v1beta1.Query", "GetProtoRevEnabled", data);
    return promise.then(data => QueryGetProtoRevEnabledResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    getProtoRevNumberOfTrades(request?: QueryGetProtoRevNumberOfTradesRequest): Promise<QueryGetProtoRevNumberOfTradesResponse> {
      return queryService.getProtoRevNumberOfTrades(request);
    },
    getProtoRevProfitsByDenom(request: QueryGetProtoRevProfitsByDenomRequest): Promise<QueryGetProtoRevProfitsByDenomResponse> {
      return queryService.getProtoRevProfitsByDenom(request);
    },
    getProtoRevAllProfits(request?: QueryGetProtoRevAllProfitsRequest): Promise<QueryGetProtoRevAllProfitsResponse> {
      return queryService.getProtoRevAllProfits(request);
    },
    getProtoRevStatisticsByRoute(request: QueryGetProtoRevStatisticsByRouteRequest): Promise<QueryGetProtoRevStatisticsByRouteResponse> {
      return queryService.getProtoRevStatisticsByRoute(request);
    },
    getProtoRevAllRouteStatistics(request?: QueryGetProtoRevAllRouteStatisticsRequest): Promise<QueryGetProtoRevAllRouteStatisticsResponse> {
      return queryService.getProtoRevAllRouteStatistics(request);
    },
    getProtoRevTokenPairArbRoutes(request?: QueryGetProtoRevTokenPairArbRoutesRequest): Promise<QueryGetProtoRevTokenPairArbRoutesResponse> {
      return queryService.getProtoRevTokenPairArbRoutes(request);
    },
    getProtoRevAdminAccount(request?: QueryGetProtoRevAdminAccountRequest): Promise<QueryGetProtoRevAdminAccountResponse> {
      return queryService.getProtoRevAdminAccount(request);
    },
    getProtoRevDeveloperAccount(request?: QueryGetProtoRevDeveloperAccountRequest): Promise<QueryGetProtoRevDeveloperAccountResponse> {
      return queryService.getProtoRevDeveloperAccount(request);
    },
    getProtoRevPoolWeights(request?: QueryGetProtoRevPoolWeightsRequest): Promise<QueryGetProtoRevPoolWeightsResponse> {
      return queryService.getProtoRevPoolWeights(request);
    },
    getProtoRevMaxPoolPointsPerTx(request?: QueryGetProtoRevMaxPoolPointsPerTxRequest): Promise<QueryGetProtoRevMaxPoolPointsPerTxResponse> {
      return queryService.getProtoRevMaxPoolPointsPerTx(request);
    },
    getProtoRevMaxPoolPointsPerBlock(request?: QueryGetProtoRevMaxPoolPointsPerBlockRequest): Promise<QueryGetProtoRevMaxPoolPointsPerBlockResponse> {
      return queryService.getProtoRevMaxPoolPointsPerBlock(request);
    },
    getProtoRevBaseDenoms(request?: QueryGetProtoRevBaseDenomsRequest): Promise<QueryGetProtoRevBaseDenomsResponse> {
      return queryService.getProtoRevBaseDenoms(request);
    },
    getProtoRevEnabled(request?: QueryGetProtoRevEnabledRequest): Promise<QueryGetProtoRevEnabledResponse> {
      return queryService.getProtoRevEnabled(request);
    }
  };
};