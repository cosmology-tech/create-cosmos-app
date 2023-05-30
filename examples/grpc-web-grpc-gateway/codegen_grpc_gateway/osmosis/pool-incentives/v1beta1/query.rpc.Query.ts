import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { DistrInfo, DistrInfoSDKType, Params, ParamsSDKType } from "./incentives";
import { Gauge, GaugeSDKType } from "../../incentives/gauge";
import * as fm from "../../../grpc-gateway";
import { QueryGaugeIdsRequest, QueryGaugeIdsRequestSDKType, QueryGaugeIdsResponse, QueryGaugeIdsResponseSDKType, QueryDistrInfoRequest, QueryDistrInfoRequestSDKType, QueryDistrInfoResponse, QueryDistrInfoResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsRequestSDKType, QueryLockableDurationsResponse, QueryLockableDurationsResponseSDKType, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsRequestSDKType, QueryIncentivizedPoolsResponse, QueryIncentivizedPoolsResponseSDKType, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesRequestSDKType, QueryExternalIncentiveGaugesResponse, QueryExternalIncentiveGaugesResponseSDKType } from "./query";
export class Query {
  /** GaugeIds takes the pool id and returns the matching gauge ids and durations */
  static gaugeIds(request: QueryGaugeIdsRequest, initRequest?: fm.InitReq): Promise<QueryGaugeIdsResponse> {
    return fm.fetchReq(`/osmosis/pool-incentives/v1beta1/gauge-ids/${request["pool_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["pool_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** DistrInfo returns the pool's matching gauge ids and weights. */
  static distrInfo(request: QueryDistrInfoRequest, initRequest?: fm.InitReq): Promise<QueryDistrInfoResponse> {
    return fm.fetchReq(`/osmosis/pool-incentives/v1beta1/distr_info?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Params returns pool incentives params. */
  static params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/osmosis/pool-incentives/v1beta1/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** LockableDurations returns lock durations for pools. */
  static lockableDurations(request: QueryLockableDurationsRequest, initRequest?: fm.InitReq): Promise<QueryLockableDurationsResponse> {
    return fm.fetchReq(`/osmosis/pool-incentives/v1beta1/lockable_durations?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** IncentivizedPools returns currently incentivized pools */
  static incentivizedPools(request: QueryIncentivizedPoolsRequest, initRequest?: fm.InitReq): Promise<QueryIncentivizedPoolsResponse> {
    return fm.fetchReq(`/osmosis/pool-incentives/v1beta1/incentivized_pools?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** ExternalIncentiveGauges returns external incentive gauges. */
  static externalIncentiveGauges(request: QueryExternalIncentiveGaugesRequest, initRequest?: fm.InitReq): Promise<QueryExternalIncentiveGaugesResponse> {
    return fm.fetchReq(`/osmosis/pool-incentives/v1beta1/external_incentive_gauges?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
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
  /** GaugeIds takes the pool id and returns the matching gauge ids and durations */
  async gaugeIds(req: QueryGaugeIdsRequest, headers?: HeadersInit): Promise<QueryGaugeIdsResponse> {
    return Query.gaugeIds(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** DistrInfo returns the pool's matching gauge ids and weights. */
  async distrInfo(req: QueryDistrInfoRequest, headers?: HeadersInit): Promise<QueryDistrInfoResponse> {
    return Query.distrInfo(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Params returns pool incentives params. */
  async params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.params(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** LockableDurations returns lock durations for pools. */
  async lockableDurations(req: QueryLockableDurationsRequest, headers?: HeadersInit): Promise<QueryLockableDurationsResponse> {
    return Query.lockableDurations(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** IncentivizedPools returns currently incentivized pools */
  async incentivizedPools(req: QueryIncentivizedPoolsRequest, headers?: HeadersInit): Promise<QueryIncentivizedPoolsResponse> {
    return Query.incentivizedPools(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** ExternalIncentiveGauges returns external incentive gauges. */
  async externalIncentiveGauges(req: QueryExternalIncentiveGaugesRequest, headers?: HeadersInit): Promise<QueryExternalIncentiveGaugesResponse> {
    return Query.externalIncentiveGauges(req, {
      headers,
      pathPrefix: this.url
    });
  }
}