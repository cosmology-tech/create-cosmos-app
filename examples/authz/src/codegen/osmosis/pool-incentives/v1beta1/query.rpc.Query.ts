//@ts-nocheck
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { DistrInfo, DistrInfoSDKType, Params, ParamsSDKType } from "./incentives";
import { Gauge, GaugeSDKType } from "../../incentives/gauge";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryGaugeIdsRequest, QueryGaugeIdsRequestSDKType, QueryGaugeIdsResponse, QueryGaugeIdsResponseSDKType, QueryDistrInfoRequest, QueryDistrInfoRequestSDKType, QueryDistrInfoResponse, QueryDistrInfoResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsRequestSDKType, QueryLockableDurationsResponse, QueryLockableDurationsResponseSDKType, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsRequestSDKType, QueryIncentivizedPoolsResponse, QueryIncentivizedPoolsResponseSDKType, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesRequestSDKType, QueryExternalIncentiveGaugesResponse, QueryExternalIncentiveGaugesResponseSDKType } from "./query";
export interface Query {
  /** GaugeIds takes the pool id and returns the matching gauge ids and durations */
  gaugeIds(request: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponse>;
  /** DistrInfo returns the pool's matching gauge ids and weights. */
  distrInfo(request?: QueryDistrInfoRequest): Promise<QueryDistrInfoResponse>;
  /** Params returns pool incentives params. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** LockableDurations returns lock durations for pools. */
  lockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse>;
  /** IncentivizedPools returns currently incentivized pools */
  incentivizedPools(request?: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponse>;
  /** ExternalIncentiveGauges returns external incentive gauges. */
  externalIncentiveGauges(request?: QueryExternalIncentiveGaugesRequest): Promise<QueryExternalIncentiveGaugesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* GaugeIds takes the pool id and returns the matching gauge ids and durations */
  gaugeIds = async (request: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponse> => {
    const data = QueryGaugeIdsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "GaugeIds", data);
    return promise.then(data => QueryGaugeIdsResponse.decode(new BinaryReader(data)));
  };
  /* DistrInfo returns the pool's matching gauge ids and weights. */
  distrInfo = async (request: QueryDistrInfoRequest = {}): Promise<QueryDistrInfoResponse> => {
    const data = QueryDistrInfoRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "DistrInfo", data);
    return promise.then(data => QueryDistrInfoResponse.decode(new BinaryReader(data)));
  };
  /* Params returns pool incentives params. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* LockableDurations returns lock durations for pools. */
  lockableDurations = async (request: QueryLockableDurationsRequest = {}): Promise<QueryLockableDurationsResponse> => {
    const data = QueryLockableDurationsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "LockableDurations", data);
    return promise.then(data => QueryLockableDurationsResponse.decode(new BinaryReader(data)));
  };
  /* IncentivizedPools returns currently incentivized pools */
  incentivizedPools = async (request: QueryIncentivizedPoolsRequest = {}): Promise<QueryIncentivizedPoolsResponse> => {
    const data = QueryIncentivizedPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "IncentivizedPools", data);
    return promise.then(data => QueryIncentivizedPoolsResponse.decode(new BinaryReader(data)));
  };
  /* ExternalIncentiveGauges returns external incentive gauges. */
  externalIncentiveGauges = async (request: QueryExternalIncentiveGaugesRequest = {}): Promise<QueryExternalIncentiveGaugesResponse> => {
    const data = QueryExternalIncentiveGaugesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "ExternalIncentiveGauges", data);
    return promise.then(data => QueryExternalIncentiveGaugesResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    gaugeIds(request: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponse> {
      return queryService.gaugeIds(request);
    },
    distrInfo(request?: QueryDistrInfoRequest): Promise<QueryDistrInfoResponse> {
      return queryService.distrInfo(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    lockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse> {
      return queryService.lockableDurations(request);
    },
    incentivizedPools(request?: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponse> {
      return queryService.incentivizedPools(request);
    },
    externalIncentiveGauges(request?: QueryExternalIncentiveGaugesRequest): Promise<QueryExternalIncentiveGaugesResponse> {
      return queryService.externalIncentiveGauges(request);
    }
  };
};