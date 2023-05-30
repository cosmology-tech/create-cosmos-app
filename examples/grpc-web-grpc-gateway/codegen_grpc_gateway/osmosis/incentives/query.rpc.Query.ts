import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Gauge, GaugeSDKType } from "./gauge";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import * as fm from "../../grpc-gateway";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsRequestSDKType, ModuleToDistributeCoinsResponse, ModuleToDistributeCoinsResponseSDKType, GaugeByIDRequest, GaugeByIDRequestSDKType, GaugeByIDResponse, GaugeByIDResponseSDKType, GaugesRequest, GaugesRequestSDKType, GaugesResponse, GaugesResponseSDKType, ActiveGaugesRequest, ActiveGaugesRequestSDKType, ActiveGaugesResponse, ActiveGaugesResponseSDKType, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomRequestSDKType, ActiveGaugesPerDenomResponse, ActiveGaugesPerDenomResponseSDKType, UpcomingGaugesRequest, UpcomingGaugesRequestSDKType, UpcomingGaugesResponse, UpcomingGaugesResponseSDKType, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomRequestSDKType, UpcomingGaugesPerDenomResponse, UpcomingGaugesPerDenomResponseSDKType, RewardsEstRequest, RewardsEstRequestSDKType, RewardsEstResponse, RewardsEstResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsRequestSDKType, QueryLockableDurationsResponse, QueryLockableDurationsResponseSDKType } from "./query";
export class Query {
  /** ModuleToDistributeCoins returns coins that are going to be distributed */
  static moduleToDistributeCoins(request: ModuleToDistributeCoinsRequest, initRequest?: fm.InitReq): Promise<ModuleToDistributeCoinsResponse> {
    return fm.fetchReq(`/osmosis/incentives/v1beta1/module_to_distribute_coins?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** GaugeByID returns gauges by their respective ID */
  static gaugeByID(request: GaugeByIDRequest, initRequest?: fm.InitReq): Promise<GaugeByIDResponse> {
    return fm.fetchReq(`/osmosis/incentives/v1beta1/gauge_by_id/${request["id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Gauges returns both upcoming and active gauges */
  static gauges(request: GaugesRequest, initRequest?: fm.InitReq): Promise<GaugesResponse> {
    return fm.fetchReq(`/osmosis/incentives/v1beta1/gauges?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** ActiveGauges returns active gauges */
  static activeGauges(request: ActiveGaugesRequest, initRequest?: fm.InitReq): Promise<ActiveGaugesResponse> {
    return fm.fetchReq(`/osmosis/incentives/v1beta1/active_gauges?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** ActiveGaugesPerDenom returns active gauges by denom */
  static activeGaugesPerDenom(request: ActiveGaugesPerDenomRequest, initRequest?: fm.InitReq): Promise<ActiveGaugesPerDenomResponse> {
    return fm.fetchReq(`/osmosis/incentives/v1beta1/active_gauges_per_denom?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Returns scheduled gauges that have not yet occured */
  static upcomingGauges(request: UpcomingGaugesRequest, initRequest?: fm.InitReq): Promise<UpcomingGaugesResponse> {
    return fm.fetchReq(`/osmosis/incentives/v1beta1/upcoming_gauges?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
   * by denom
   */
  static upcomingGaugesPerDenom(request: UpcomingGaugesPerDenomRequest, initRequest?: fm.InitReq): Promise<UpcomingGaugesPerDenomResponse> {
    return fm.fetchReq(`/osmosis/incentives/v1beta1/upcoming_gauges_per_denom?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * RewardsEst returns an estimate of the rewards from now until a specified
   * time in the future The querier either provides an address or a set of locks
   * for which they want to find the associated rewards
   */
  static rewardsEst(request: RewardsEstRequest, initRequest?: fm.InitReq): Promise<RewardsEstResponse> {
    return fm.fetchReq(`/osmosis/incentives/v1beta1/rewards_est/${request["owner"]}?${fm.renderURLSearchParams({
      ...request
    }, ["owner"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * LockableDurations returns lockable durations that are valid to distribute
   * incentives for
   */
  static lockableDurations(request: QueryLockableDurationsRequest, initRequest?: fm.InitReq): Promise<QueryLockableDurationsResponse> {
    return fm.fetchReq(`/osmosis/incentives/v1beta1/lockable_durations?${fm.renderURLSearchParams({
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
  /** ModuleToDistributeCoins returns coins that are going to be distributed */
  async moduleToDistributeCoins(req: ModuleToDistributeCoinsRequest, headers?: HeadersInit): Promise<ModuleToDistributeCoinsResponse> {
    return Query.moduleToDistributeCoins(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** GaugeByID returns gauges by their respective ID */
  async gaugeByID(req: GaugeByIDRequest, headers?: HeadersInit): Promise<GaugeByIDResponse> {
    return Query.gaugeByID(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Gauges returns both upcoming and active gauges */
  async gauges(req: GaugesRequest, headers?: HeadersInit): Promise<GaugesResponse> {
    return Query.gauges(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** ActiveGauges returns active gauges */
  async activeGauges(req: ActiveGaugesRequest, headers?: HeadersInit): Promise<ActiveGaugesResponse> {
    return Query.activeGauges(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** ActiveGaugesPerDenom returns active gauges by denom */
  async activeGaugesPerDenom(req: ActiveGaugesPerDenomRequest, headers?: HeadersInit): Promise<ActiveGaugesPerDenomResponse> {
    return Query.activeGaugesPerDenom(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Returns scheduled gauges that have not yet occured */
  async upcomingGauges(req: UpcomingGaugesRequest, headers?: HeadersInit): Promise<UpcomingGaugesResponse> {
    return Query.upcomingGauges(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
   * by denom
   */
  async upcomingGaugesPerDenom(req: UpcomingGaugesPerDenomRequest, headers?: HeadersInit): Promise<UpcomingGaugesPerDenomResponse> {
    return Query.upcomingGaugesPerDenom(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * RewardsEst returns an estimate of the rewards from now until a specified
   * time in the future The querier either provides an address or a set of locks
   * for which they want to find the associated rewards
   */
  async rewardsEst(req: RewardsEstRequest, headers?: HeadersInit): Promise<RewardsEstResponse> {
    return Query.rewardsEst(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * LockableDurations returns lockable durations that are valid to distribute
   * incentives for
   */
  async lockableDurations(req: QueryLockableDurationsRequest, headers?: HeadersInit): Promise<QueryLockableDurationsResponse> {
    return Query.lockableDurations(req, {
      headers,
      pathPrefix: this.url
    });
  }
}