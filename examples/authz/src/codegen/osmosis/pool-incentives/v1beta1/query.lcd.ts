//@ts-nocheck
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { DistrInfo, DistrInfoSDKType, Params, ParamsSDKType } from "./incentives";
import { Gauge, GaugeSDKType } from "../../incentives/gauge";
import { LCDClient } from "@cosmology/lcd";
import { QueryGaugeIdsRequest, QueryGaugeIdsRequestSDKType, QueryGaugeIdsResponse, QueryGaugeIdsResponseSDKType, QueryDistrInfoRequest, QueryDistrInfoRequestSDKType, QueryDistrInfoResponse, QueryDistrInfoResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsRequestSDKType, QueryLockableDurationsResponse, QueryLockableDurationsResponseSDKType, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsRequestSDKType, QueryIncentivizedPoolsResponse, QueryIncentivizedPoolsResponseSDKType, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesRequestSDKType, QueryExternalIncentiveGaugesResponse, QueryExternalIncentiveGaugesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* GaugeIds takes the pool id and returns the matching gauge ids and durations */
  gaugeIds = async (params: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponseSDKType> => {
    const endpoint = `osmosis/pool-incentives/v1beta1/gauge-ids/${params.poolId}`;
    return await this.req.get<QueryGaugeIdsResponseSDKType>(endpoint);
  };
  /* DistrInfo returns the pool's matching gauge ids and weights. */
  distrInfo = async (_params: QueryDistrInfoRequest = {}): Promise<QueryDistrInfoResponseSDKType> => {
    const endpoint = `osmosis/pool-incentives/v1beta1/distr_info`;
    return await this.req.get<QueryDistrInfoResponseSDKType>(endpoint);
  };
  /* Params returns pool incentives params. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const endpoint = `osmosis/pool-incentives/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  };
  /* LockableDurations returns lock durations for pools. */
  lockableDurations = async (_params: QueryLockableDurationsRequest = {}): Promise<QueryLockableDurationsResponseSDKType> => {
    const endpoint = `osmosis/pool-incentives/v1beta1/lockable_durations`;
    return await this.req.get<QueryLockableDurationsResponseSDKType>(endpoint);
  };
  /* IncentivizedPools returns currently incentivized pools */
  incentivizedPools = async (_params: QueryIncentivizedPoolsRequest = {}): Promise<QueryIncentivizedPoolsResponseSDKType> => {
    const endpoint = `osmosis/pool-incentives/v1beta1/incentivized_pools`;
    return await this.req.get<QueryIncentivizedPoolsResponseSDKType>(endpoint);
  };
  /* ExternalIncentiveGauges returns external incentive gauges. */
  externalIncentiveGauges = async (_params: QueryExternalIncentiveGaugesRequest = {}): Promise<QueryExternalIncentiveGaugesResponseSDKType> => {
    const endpoint = `osmosis/pool-incentives/v1beta1/external_incentive_gauges`;
    return await this.req.get<QueryExternalIncentiveGaugesResponseSDKType>(endpoint);
  };
}