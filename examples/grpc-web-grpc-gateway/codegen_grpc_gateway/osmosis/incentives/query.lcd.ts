import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Gauge, GaugeSDKType } from "./gauge";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsRequestSDKType, ModuleToDistributeCoinsResponse, ModuleToDistributeCoinsResponseSDKType, GaugeByIDRequest, GaugeByIDRequestSDKType, GaugeByIDResponse, GaugeByIDResponseSDKType, GaugesRequest, GaugesRequestSDKType, GaugesResponse, GaugesResponseSDKType, ActiveGaugesRequest, ActiveGaugesRequestSDKType, ActiveGaugesResponse, ActiveGaugesResponseSDKType, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomRequestSDKType, ActiveGaugesPerDenomResponse, ActiveGaugesPerDenomResponseSDKType, UpcomingGaugesRequest, UpcomingGaugesRequestSDKType, UpcomingGaugesResponse, UpcomingGaugesResponseSDKType, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomRequestSDKType, UpcomingGaugesPerDenomResponse, UpcomingGaugesPerDenomResponseSDKType, RewardsEstRequest, RewardsEstRequestSDKType, RewardsEstResponse, RewardsEstResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsRequestSDKType, QueryLockableDurationsResponse, QueryLockableDurationsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.moduleToDistributeCoins = this.moduleToDistributeCoins.bind(this);
    this.gaugeByID = this.gaugeByID.bind(this);
    this.gauges = this.gauges.bind(this);
    this.activeGauges = this.activeGauges.bind(this);
    this.activeGaugesPerDenom = this.activeGaugesPerDenom.bind(this);
    this.upcomingGauges = this.upcomingGauges.bind(this);
    this.upcomingGaugesPerDenom = this.upcomingGaugesPerDenom.bind(this);
    this.rewardsEst = this.rewardsEst.bind(this);
    this.lockableDurations = this.lockableDurations.bind(this);
  }
  /* ModuleToDistributeCoins returns coins that are going to be distributed */
  async moduleToDistributeCoins(_params: ModuleToDistributeCoinsRequest = {}): Promise<ModuleToDistributeCoinsResponseSDKType> {
    const endpoint = `osmosis/incentives/v1beta1/module_to_distribute_coins`;
    return await this.req.get<ModuleToDistributeCoinsResponseSDKType>(endpoint);
  }
  /* GaugeByID returns gauges by their respective ID */
  async gaugeByID(params: GaugeByIDRequest): Promise<GaugeByIDResponseSDKType> {
    const endpoint = `osmosis/incentives/v1beta1/gauge_by_id/${params.id}`;
    return await this.req.get<GaugeByIDResponseSDKType>(endpoint);
  }
  /* Gauges returns both upcoming and active gauges */
  async gauges(params: GaugesRequest = {
    pagination: undefined
  }): Promise<GaugesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `osmosis/incentives/v1beta1/gauges`;
    return await this.req.get<GaugesResponseSDKType>(endpoint, options);
  }
  /* ActiveGauges returns active gauges */
  async activeGauges(params: ActiveGaugesRequest = {
    pagination: undefined
  }): Promise<ActiveGaugesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `osmosis/incentives/v1beta1/active_gauges`;
    return await this.req.get<ActiveGaugesResponseSDKType>(endpoint, options);
  }
  /* ActiveGaugesPerDenom returns active gauges by denom */
  async activeGaugesPerDenom(params: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponseSDKType> {
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
  }
  /* Returns scheduled gauges that have not yet occured */
  async upcomingGauges(params: UpcomingGaugesRequest = {
    pagination: undefined
  }): Promise<UpcomingGaugesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `osmosis/incentives/v1beta1/upcoming_gauges`;
    return await this.req.get<UpcomingGaugesResponseSDKType>(endpoint, options);
  }
  /* UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
   by denom */
  async upcomingGaugesPerDenom(params: UpcomingGaugesPerDenomRequest): Promise<UpcomingGaugesPerDenomResponseSDKType> {
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
  }
  /* RewardsEst returns an estimate of the rewards from now until a specified
   time in the future The querier either provides an address or a set of locks
   for which they want to find the associated rewards */
  async rewardsEst(params: RewardsEstRequest): Promise<RewardsEstResponseSDKType> {
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
  }
  /* LockableDurations returns lockable durations that are valid to distribute
   incentives for */
  async lockableDurations(_params: QueryLockableDurationsRequest = {}): Promise<QueryLockableDurationsResponseSDKType> {
    const endpoint = `osmosis/incentives/v1beta1/lockable_durations`;
    return await this.req.get<QueryLockableDurationsResponseSDKType>(endpoint);
  }
}