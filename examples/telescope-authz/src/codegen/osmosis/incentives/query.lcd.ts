import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Gauge, GaugeSDKType } from "./gauge";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsRequestSDKType, ModuleToDistributeCoinsResponse, ModuleToDistributeCoinsResponseSDKType, GaugeByIDRequest, GaugeByIDRequestSDKType, GaugeByIDResponse, GaugeByIDResponseSDKType, GaugesRequest, GaugesRequestSDKType, GaugesResponse, GaugesResponseSDKType, ActiveGaugesRequest, ActiveGaugesRequestSDKType, ActiveGaugesResponse, ActiveGaugesResponseSDKType, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomRequestSDKType, ActiveGaugesPerDenomResponse, ActiveGaugesPerDenomResponseSDKType, UpcomingGaugesRequest, UpcomingGaugesRequestSDKType, UpcomingGaugesResponse, UpcomingGaugesResponseSDKType, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomRequestSDKType, UpcomingGaugesPerDenomResponse, UpcomingGaugesPerDenomResponseSDKType, RewardsEstRequest, RewardsEstRequestSDKType, RewardsEstResponse, RewardsEstResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsRequestSDKType, QueryLockableDurationsResponse, QueryLockableDurationsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* ModuleToDistributeCoins returns coins that are going to be distributed */
  moduleToDistributeCoins = async (_params: ModuleToDistributeCoinsRequest = {}): Promise<ModuleToDistributeCoinsResponseSDKType> => {
    const endpoint = `osmosis/incentives/v1beta1/module_to_distribute_coins`;
    return await this.req.get<ModuleToDistributeCoinsResponseSDKType>(endpoint);
  };
  /* GaugeByID returns gauges by their respective ID */
  gaugeByID = async (params: GaugeByIDRequest): Promise<GaugeByIDResponseSDKType> => {
    const endpoint = `osmosis/incentives/v1beta1/gauge_by_id/${params.id}`;
    return await this.req.get<GaugeByIDResponseSDKType>(endpoint);
  };
  /* Gauges returns both upcoming and active gauges */
  gauges = async (params: GaugesRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<GaugesResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `osmosis/incentives/v1beta1/gauges`;
    return await this.req.get<GaugesResponseSDKType>(endpoint, options);
  };
  /* ActiveGauges returns active gauges */
  activeGauges = async (params: ActiveGaugesRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<ActiveGaugesResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `osmosis/incentives/v1beta1/active_gauges`;
    return await this.req.get<ActiveGaugesResponseSDKType>(endpoint, options);
  };
  /* ActiveGaugesPerDenom returns active gauges by denom */
  activeGaugesPerDenom = async (params: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `osmosis/incentives/v1beta1/active_gauges_per_denom`;
    return await this.req.get<ActiveGaugesPerDenomResponseSDKType>(endpoint, options);
  };
  /* Returns scheduled gauges that have not yet occured */
  upcomingGauges = async (params: UpcomingGaugesRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<UpcomingGaugesResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `osmosis/incentives/v1beta1/upcoming_gauges`;
    return await this.req.get<UpcomingGaugesResponseSDKType>(endpoint, options);
  };
  /* UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
   by denom */
  upcomingGaugesPerDenom = async (params: UpcomingGaugesPerDenomRequest): Promise<UpcomingGaugesPerDenomResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `osmosis/incentives/v1beta1/upcoming_gauges_per_denom`;
    return await this.req.get<UpcomingGaugesPerDenomResponseSDKType>(endpoint, options);
  };
  /* RewardsEst returns an estimate of the rewards from now until a specified
   time in the future The querier either provides an address or a set of locks
   for which they want to find the associated rewards */
  rewardsEst = async (params: RewardsEstRequest): Promise<RewardsEstResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.lockIds !== "undefined") {
      options.params.lock_ids = params.lockIds;
    }
    if (typeof params?.endEpoch !== "undefined") {
      options.params.end_epoch = params.endEpoch;
    }
    const endpoint = `osmosis/incentives/v1beta1/rewards_est/${params.owner}`;
    return await this.req.get<RewardsEstResponseSDKType>(endpoint, options);
  };
  /* LockableDurations returns lockable durations that are valid to distribute
   incentives for */
  lockableDurations = async (_params: QueryLockableDurationsRequest = {}): Promise<QueryLockableDurationsResponseSDKType> => {
    const endpoint = `osmosis/incentives/v1beta1/lockable_durations`;
    return await this.req.get<QueryLockableDurationsResponseSDKType>(endpoint);
  };
}