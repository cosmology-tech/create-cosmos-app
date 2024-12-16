import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Gauge, GaugeSDKType } from "./gauge";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsRequestSDKType, ModuleToDistributeCoinsResponse, ModuleToDistributeCoinsResponseSDKType, GaugeByIDRequest, GaugeByIDRequestSDKType, GaugeByIDResponse, GaugeByIDResponseSDKType, GaugesRequest, GaugesRequestSDKType, GaugesResponse, GaugesResponseSDKType, ActiveGaugesRequest, ActiveGaugesRequestSDKType, ActiveGaugesResponse, ActiveGaugesResponseSDKType, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomRequestSDKType, ActiveGaugesPerDenomResponse, ActiveGaugesPerDenomResponseSDKType, UpcomingGaugesRequest, UpcomingGaugesRequestSDKType, UpcomingGaugesResponse, UpcomingGaugesResponseSDKType, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomRequestSDKType, UpcomingGaugesPerDenomResponse, UpcomingGaugesPerDenomResponseSDKType, RewardsEstRequest, RewardsEstRequestSDKType, RewardsEstResponse, RewardsEstResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsRequestSDKType, QueryLockableDurationsResponse, QueryLockableDurationsResponseSDKType, ReactiveModuleToDistributeCoinsRequest, ReactiveGaugeByIDRequest, ReactiveGaugesRequest, ReactiveActiveGaugesRequest, ReactiveActiveGaugesPerDenomRequest, ReactiveUpcomingGaugesRequest, ReactiveUpcomingGaugesPerDenomRequest, ReactiveRewardsEstRequest, ReactiveQueryLockableDurationsRequest } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
  /** ModuleToDistributeCoins returns coins that are going to be distributed */
  moduleToDistributeCoins(request?: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponse>;
  /** GaugeByID returns gauges by their respective ID */
  gaugeByID(request: GaugeByIDRequest): Promise<GaugeByIDResponse>;
  /** Gauges returns both upcoming and active gauges */
  gauges(request?: GaugesRequest): Promise<GaugesResponse>;
  /** ActiveGauges returns active gauges */
  activeGauges(request?: ActiveGaugesRequest): Promise<ActiveGaugesResponse>;
  /** ActiveGaugesPerDenom returns active gauges by denom */
  activeGaugesPerDenom(request: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponse>;
  /** Returns scheduled gauges that have not yet occured */
  upcomingGauges(request?: UpcomingGaugesRequest): Promise<UpcomingGaugesResponse>;
  /**
   * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
   * by denom
   */
  upcomingGaugesPerDenom(request: UpcomingGaugesPerDenomRequest): Promise<UpcomingGaugesPerDenomResponse>;
  /**
   * RewardsEst returns an estimate of the rewards from now until a specified
   * time in the future The querier either provides an address or a set of locks
   * for which they want to find the associated rewards
   */
  rewardsEst(request: RewardsEstRequest): Promise<RewardsEstResponse>;
  /**
   * LockableDurations returns lockable durations that are valid to distribute
   * incentives for
   */
  lockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
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
  moduleToDistributeCoins(request: ModuleToDistributeCoinsRequest = {}): Promise<ModuleToDistributeCoinsResponse> {
    const data = ModuleToDistributeCoinsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "ModuleToDistributeCoins", data);
    return promise.then(data => ModuleToDistributeCoinsResponse.decode(new BinaryReader(data)));
  }
  gaugeByID(request: GaugeByIDRequest): Promise<GaugeByIDResponse> {
    const data = GaugeByIDRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "GaugeByID", data);
    return promise.then(data => GaugeByIDResponse.decode(new BinaryReader(data)));
  }
  gauges(request: GaugesRequest = {
    pagination: undefined
  }): Promise<GaugesResponse> {
    const data = GaugesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "Gauges", data);
    return promise.then(data => GaugesResponse.decode(new BinaryReader(data)));
  }
  activeGauges(request: ActiveGaugesRequest = {
    pagination: undefined
  }): Promise<ActiveGaugesResponse> {
    const data = ActiveGaugesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "ActiveGauges", data);
    return promise.then(data => ActiveGaugesResponse.decode(new BinaryReader(data)));
  }
  activeGaugesPerDenom(request: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponse> {
    const data = ActiveGaugesPerDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "ActiveGaugesPerDenom", data);
    return promise.then(data => ActiveGaugesPerDenomResponse.decode(new BinaryReader(data)));
  }
  upcomingGauges(request: UpcomingGaugesRequest = {
    pagination: undefined
  }): Promise<UpcomingGaugesResponse> {
    const data = UpcomingGaugesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "UpcomingGauges", data);
    return promise.then(data => UpcomingGaugesResponse.decode(new BinaryReader(data)));
  }
  upcomingGaugesPerDenom(request: UpcomingGaugesPerDenomRequest): Promise<UpcomingGaugesPerDenomResponse> {
    const data = UpcomingGaugesPerDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "UpcomingGaugesPerDenom", data);
    return promise.then(data => UpcomingGaugesPerDenomResponse.decode(new BinaryReader(data)));
  }
  rewardsEst(request: RewardsEstRequest): Promise<RewardsEstResponse> {
    const data = RewardsEstRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "RewardsEst", data);
    return promise.then(data => RewardsEstResponse.decode(new BinaryReader(data)));
  }
  lockableDurations(request: QueryLockableDurationsRequest = {}): Promise<QueryLockableDurationsResponse> {
    const data = QueryLockableDurationsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "LockableDurations", data);
    return promise.then(data => QueryLockableDurationsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    moduleToDistributeCoins(request?: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponse> {
      return queryService.moduleToDistributeCoins(request);
    },
    gaugeByID(request: GaugeByIDRequest): Promise<GaugeByIDResponse> {
      return queryService.gaugeByID(request);
    },
    gauges(request?: GaugesRequest): Promise<GaugesResponse> {
      return queryService.gauges(request);
    },
    activeGauges(request?: ActiveGaugesRequest): Promise<ActiveGaugesResponse> {
      return queryService.activeGauges(request);
    },
    activeGaugesPerDenom(request: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponse> {
      return queryService.activeGaugesPerDenom(request);
    },
    upcomingGauges(request?: UpcomingGaugesRequest): Promise<UpcomingGaugesResponse> {
      return queryService.upcomingGauges(request);
    },
    upcomingGaugesPerDenom(request: UpcomingGaugesPerDenomRequest): Promise<UpcomingGaugesPerDenomResponse> {
      return queryService.upcomingGaugesPerDenom(request);
    },
    rewardsEst(request: RewardsEstRequest): Promise<RewardsEstResponse> {
      return queryService.rewardsEst(request);
    },
    lockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse> {
      return queryService.lockableDurations(request);
    }
  };
};
export interface UseModuleToDistributeCoinsQuery<TData> extends VueQueryParams<ModuleToDistributeCoinsResponse, TData> {
  request?: ReactiveModuleToDistributeCoinsRequest;
}
export interface UseGaugeByIDQuery<TData> extends VueQueryParams<GaugeByIDResponse, TData> {
  request: ReactiveGaugeByIDRequest;
}
export interface UseGaugesQuery<TData> extends VueQueryParams<GaugesResponse, TData> {
  request?: ReactiveGaugesRequest;
}
export interface UseActiveGaugesQuery<TData> extends VueQueryParams<ActiveGaugesResponse, TData> {
  request?: ReactiveActiveGaugesRequest;
}
export interface UseActiveGaugesPerDenomQuery<TData> extends VueQueryParams<ActiveGaugesPerDenomResponse, TData> {
  request: ReactiveActiveGaugesPerDenomRequest;
}
export interface UseUpcomingGaugesQuery<TData> extends VueQueryParams<UpcomingGaugesResponse, TData> {
  request?: ReactiveUpcomingGaugesRequest;
}
export interface UseUpcomingGaugesPerDenomQuery<TData> extends VueQueryParams<UpcomingGaugesPerDenomResponse, TData> {
  request: ReactiveUpcomingGaugesPerDenomRequest;
}
export interface UseRewardsEstQuery<TData> extends VueQueryParams<RewardsEstResponse, TData> {
  request: ReactiveRewardsEstRequest;
}
export interface UseLockableDurationsQuery<TData> extends VueQueryParams<QueryLockableDurationsResponse, TData> {
  request?: ReactiveQueryLockableDurationsRequest;
}
export const useQueryService = (rpc: Ref<ProtobufRpcClient | undefined>): ComputedRef<QueryClientImpl | undefined> => {
  const _queryClients = new WeakMap();
  return computed(() => {
    if (rpc.value) {
      if (_queryClients.has(rpc.value)) {
        return _queryClients.get(rpc.value);
      }
      const queryService = new QueryClientImpl(rpc.value);
      _queryClients.set(rpc.value, queryService);
      return queryService;
    }
  });
};
export const createRpcQueryHooks = (rpc: Ref<ProtobufRpcClient | undefined>) => {
  const queryService = useQueryService(rpc);
  const useModuleToDistributeCoins = <TData = ModuleToDistributeCoinsResponse,>({
    request,
    options
  }: UseModuleToDistributeCoinsQuery<TData>) => {
    const queryKey = ["moduleToDistributeCoinsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<ModuleToDistributeCoinsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.moduleToDistributeCoins(params);
      },
      ...options
    });
  };
  const useGaugeByID = <TData = GaugeByIDResponse,>({
    request,
    options
  }: UseGaugeByIDQuery<TData>) => {
    const queryKey = ["gaugeByIDQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<GaugeByIDResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.gaugeByID(params);
      },
      ...options
    });
  };
  const useGauges = <TData = GaugesResponse,>({
    request,
    options
  }: UseGaugesQuery<TData>) => {
    const queryKey = ["gaugesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<GaugesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.gauges(params);
      },
      ...options
    });
  };
  const useActiveGauges = <TData = ActiveGaugesResponse,>({
    request,
    options
  }: UseActiveGaugesQuery<TData>) => {
    const queryKey = ["activeGaugesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<ActiveGaugesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.activeGauges(params);
      },
      ...options
    });
  };
  const useActiveGaugesPerDenom = <TData = ActiveGaugesPerDenomResponse,>({
    request,
    options
  }: UseActiveGaugesPerDenomQuery<TData>) => {
    const queryKey = ["activeGaugesPerDenomQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<ActiveGaugesPerDenomResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.activeGaugesPerDenom(params);
      },
      ...options
    });
  };
  const useUpcomingGauges = <TData = UpcomingGaugesResponse,>({
    request,
    options
  }: UseUpcomingGaugesQuery<TData>) => {
    const queryKey = ["upcomingGaugesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<UpcomingGaugesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.upcomingGauges(params);
      },
      ...options
    });
  };
  const useUpcomingGaugesPerDenom = <TData = UpcomingGaugesPerDenomResponse,>({
    request,
    options
  }: UseUpcomingGaugesPerDenomQuery<TData>) => {
    const queryKey = ["upcomingGaugesPerDenomQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<UpcomingGaugesPerDenomResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.upcomingGaugesPerDenom(params);
      },
      ...options
    });
  };
  const useRewardsEst = <TData = RewardsEstResponse,>({
    request,
    options
  }: UseRewardsEstQuery<TData>) => {
    const queryKey = ["rewardsEstQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<RewardsEstResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.rewardsEst(params);
      },
      ...options
    });
  };
  const useLockableDurations = <TData = QueryLockableDurationsResponse,>({
    request,
    options
  }: UseLockableDurationsQuery<TData>) => {
    const queryKey = ["lockableDurationsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryLockableDurationsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.lockableDurations(params);
      },
      ...options
    });
  };
  return {
    /** ModuleToDistributeCoins returns coins that are going to be distributed */useModuleToDistributeCoins,
    /** GaugeByID returns gauges by their respective ID */useGaugeByID,
    /** Gauges returns both upcoming and active gauges */useGauges,
    /** ActiveGauges returns active gauges */useActiveGauges,
    /** ActiveGaugesPerDenom returns active gauges by denom */useActiveGaugesPerDenom,
    /** Returns scheduled gauges that have not yet occured */useUpcomingGauges,
    /**
     * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
     * by denom
     */
    useUpcomingGaugesPerDenom,
    /**
     * RewardsEst returns an estimate of the rewards from now until a specified
     * time in the future The querier either provides an address or a set of locks
     * for which they want to find the associated rewards
     */
    useRewardsEst,
    /**
     * LockableDurations returns lockable durations that are valid to distribute
     * incentives for
     */
    useLockableDurations
  };
};