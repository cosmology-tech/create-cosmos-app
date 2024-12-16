import { Timestamp, TimestampSDKType } from "../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { PeriodLock, PeriodLockSDKType, SyntheticLock, SyntheticLockSDKType } from "./lock";
import { Params, ParamsSDKType } from "./params";
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { ModuleBalanceRequest, ModuleBalanceRequestSDKType, ModuleBalanceResponse, ModuleBalanceResponseSDKType, ModuleLockedAmountRequest, ModuleLockedAmountRequestSDKType, ModuleLockedAmountResponse, ModuleLockedAmountResponseSDKType, AccountUnlockableCoinsRequest, AccountUnlockableCoinsRequestSDKType, AccountUnlockableCoinsResponse, AccountUnlockableCoinsResponseSDKType, AccountUnlockingCoinsRequest, AccountUnlockingCoinsRequestSDKType, AccountUnlockingCoinsResponse, AccountUnlockingCoinsResponseSDKType, AccountLockedCoinsRequest, AccountLockedCoinsRequestSDKType, AccountLockedCoinsResponse, AccountLockedCoinsResponseSDKType, AccountLockedPastTimeRequest, AccountLockedPastTimeRequestSDKType, AccountLockedPastTimeResponse, AccountLockedPastTimeResponseSDKType, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyRequestSDKType, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountLockedPastTimeNotUnlockingOnlyResponseSDKType, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeRequestSDKType, AccountUnlockedBeforeTimeResponse, AccountUnlockedBeforeTimeResponseSDKType, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomRequestSDKType, AccountLockedPastTimeDenomResponse, AccountLockedPastTimeDenomResponseSDKType, LockedDenomRequest, LockedDenomRequestSDKType, LockedDenomResponse, LockedDenomResponseSDKType, LockedRequest, LockedRequestSDKType, LockedResponse, LockedResponseSDKType, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDRequestSDKType, SyntheticLockupsByLockupIDResponse, SyntheticLockupsByLockupIDResponseSDKType, AccountLockedLongerDurationRequest, AccountLockedLongerDurationRequestSDKType, AccountLockedLongerDurationResponse, AccountLockedLongerDurationResponseSDKType, AccountLockedDurationRequest, AccountLockedDurationRequestSDKType, AccountLockedDurationResponse, AccountLockedDurationResponseSDKType, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomRequestSDKType, AccountLockedLongerDurationDenomResponse, AccountLockedLongerDurationDenomResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, ReactiveModuleBalanceRequest, ReactiveModuleLockedAmountRequest, ReactiveAccountUnlockableCoinsRequest, ReactiveAccountUnlockingCoinsRequest, ReactiveAccountLockedCoinsRequest, ReactiveAccountLockedPastTimeRequest, ReactiveAccountLockedPastTimeNotUnlockingOnlyRequest, ReactiveAccountUnlockedBeforeTimeRequest, ReactiveAccountLockedPastTimeDenomRequest, ReactiveLockedDenomRequest, ReactiveLockedRequest, ReactiveSyntheticLockupsByLockupIDRequest, ReactiveAccountLockedLongerDurationRequest, ReactiveAccountLockedDurationRequest, ReactiveAccountLockedLongerDurationNotUnlockingOnlyRequest, ReactiveAccountLockedLongerDurationDenomRequest, ReactiveQueryParamsRequest } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Return full balance of the module */
  moduleBalance(request?: ModuleBalanceRequest): Promise<ModuleBalanceResponse>;
  /** Return locked balance of the module */
  moduleLockedAmount(request?: ModuleLockedAmountRequest): Promise<ModuleLockedAmountResponse>;
  /** Returns unlockable coins which are not withdrawn yet */
  accountUnlockableCoins(request: AccountUnlockableCoinsRequest): Promise<AccountUnlockableCoinsResponse>;
  /** Returns unlocking coins */
  accountUnlockingCoins(request: AccountUnlockingCoinsRequest): Promise<AccountUnlockingCoinsResponse>;
  /** Return a locked coins that can't be withdrawn */
  accountLockedCoins(request: AccountLockedCoinsRequest): Promise<AccountLockedCoinsResponse>;
  /** Returns locked records of an account with unlock time beyond timestamp */
  accountLockedPastTime(request: AccountLockedPastTimeRequest): Promise<AccountLockedPastTimeResponse>;
  /**
   * Returns locked records of an account with unlock time beyond timestamp
   * excluding tokens started unlocking
   */
  accountLockedPastTimeNotUnlockingOnly(request: AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse>;
  /** Returns unlocked records with unlock time before timestamp */
  accountUnlockedBeforeTime(request: AccountUnlockedBeforeTimeRequest): Promise<AccountUnlockedBeforeTimeResponse>;
  /** Returns lock records by address, timestamp, denom */
  accountLockedPastTimeDenom(request: AccountLockedPastTimeDenomRequest): Promise<AccountLockedPastTimeDenomResponse>;
  /** Returns total locked per denom with longer past given time */
  lockedDenom(request: LockedDenomRequest): Promise<LockedDenomResponse>;
  /** Returns lock record by id */
  lockedByID(request: LockedRequest): Promise<LockedResponse>;
  /** Returns synthetic lockups by native lockup id */
  syntheticLockupsByLockupID(request: SyntheticLockupsByLockupIDRequest): Promise<SyntheticLockupsByLockupIDResponse>;
  /** Returns account locked records with longer duration */
  accountLockedLongerDuration(request: AccountLockedLongerDurationRequest): Promise<AccountLockedLongerDurationResponse>;
  /** Returns account locked records with a specific duration */
  accountLockedDuration(request: AccountLockedDurationRequest): Promise<AccountLockedDurationResponse>;
  /**
   * Returns account locked records with longer duration excluding tokens
   * started unlocking
   */
  accountLockedLongerDurationNotUnlockingOnly(request: AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse>;
  /** Returns account's locked records for a denom with longer duration */
  accountLockedLongerDurationDenom(request: AccountLockedLongerDurationDenomRequest): Promise<AccountLockedLongerDurationDenomResponse>;
  /** Params returns lockup params. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.moduleBalance = this.moduleBalance.bind(this);
    this.moduleLockedAmount = this.moduleLockedAmount.bind(this);
    this.accountUnlockableCoins = this.accountUnlockableCoins.bind(this);
    this.accountUnlockingCoins = this.accountUnlockingCoins.bind(this);
    this.accountLockedCoins = this.accountLockedCoins.bind(this);
    this.accountLockedPastTime = this.accountLockedPastTime.bind(this);
    this.accountLockedPastTimeNotUnlockingOnly = this.accountLockedPastTimeNotUnlockingOnly.bind(this);
    this.accountUnlockedBeforeTime = this.accountUnlockedBeforeTime.bind(this);
    this.accountLockedPastTimeDenom = this.accountLockedPastTimeDenom.bind(this);
    this.lockedDenom = this.lockedDenom.bind(this);
    this.lockedByID = this.lockedByID.bind(this);
    this.syntheticLockupsByLockupID = this.syntheticLockupsByLockupID.bind(this);
    this.accountLockedLongerDuration = this.accountLockedLongerDuration.bind(this);
    this.accountLockedDuration = this.accountLockedDuration.bind(this);
    this.accountLockedLongerDurationNotUnlockingOnly = this.accountLockedLongerDurationNotUnlockingOnly.bind(this);
    this.accountLockedLongerDurationDenom = this.accountLockedLongerDurationDenom.bind(this);
    this.params = this.params.bind(this);
  }
  moduleBalance(request: ModuleBalanceRequest = {}): Promise<ModuleBalanceResponse> {
    const data = ModuleBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "ModuleBalance", data);
    return promise.then(data => ModuleBalanceResponse.decode(new BinaryReader(data)));
  }
  moduleLockedAmount(request: ModuleLockedAmountRequest = {}): Promise<ModuleLockedAmountResponse> {
    const data = ModuleLockedAmountRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "ModuleLockedAmount", data);
    return promise.then(data => ModuleLockedAmountResponse.decode(new BinaryReader(data)));
  }
  accountUnlockableCoins(request: AccountUnlockableCoinsRequest): Promise<AccountUnlockableCoinsResponse> {
    const data = AccountUnlockableCoinsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountUnlockableCoins", data);
    return promise.then(data => AccountUnlockableCoinsResponse.decode(new BinaryReader(data)));
  }
  accountUnlockingCoins(request: AccountUnlockingCoinsRequest): Promise<AccountUnlockingCoinsResponse> {
    const data = AccountUnlockingCoinsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountUnlockingCoins", data);
    return promise.then(data => AccountUnlockingCoinsResponse.decode(new BinaryReader(data)));
  }
  accountLockedCoins(request: AccountLockedCoinsRequest): Promise<AccountLockedCoinsResponse> {
    const data = AccountLockedCoinsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedCoins", data);
    return promise.then(data => AccountLockedCoinsResponse.decode(new BinaryReader(data)));
  }
  accountLockedPastTime(request: AccountLockedPastTimeRequest): Promise<AccountLockedPastTimeResponse> {
    const data = AccountLockedPastTimeRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedPastTime", data);
    return promise.then(data => AccountLockedPastTimeResponse.decode(new BinaryReader(data)));
  }
  accountLockedPastTimeNotUnlockingOnly(request: AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse> {
    const data = AccountLockedPastTimeNotUnlockingOnlyRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedPastTimeNotUnlockingOnly", data);
    return promise.then(data => AccountLockedPastTimeNotUnlockingOnlyResponse.decode(new BinaryReader(data)));
  }
  accountUnlockedBeforeTime(request: AccountUnlockedBeforeTimeRequest): Promise<AccountUnlockedBeforeTimeResponse> {
    const data = AccountUnlockedBeforeTimeRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountUnlockedBeforeTime", data);
    return promise.then(data => AccountUnlockedBeforeTimeResponse.decode(new BinaryReader(data)));
  }
  accountLockedPastTimeDenom(request: AccountLockedPastTimeDenomRequest): Promise<AccountLockedPastTimeDenomResponse> {
    const data = AccountLockedPastTimeDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedPastTimeDenom", data);
    return promise.then(data => AccountLockedPastTimeDenomResponse.decode(new BinaryReader(data)));
  }
  lockedDenom(request: LockedDenomRequest): Promise<LockedDenomResponse> {
    const data = LockedDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "LockedDenom", data);
    return promise.then(data => LockedDenomResponse.decode(new BinaryReader(data)));
  }
  lockedByID(request: LockedRequest): Promise<LockedResponse> {
    const data = LockedRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "LockedByID", data);
    return promise.then(data => LockedResponse.decode(new BinaryReader(data)));
  }
  syntheticLockupsByLockupID(request: SyntheticLockupsByLockupIDRequest): Promise<SyntheticLockupsByLockupIDResponse> {
    const data = SyntheticLockupsByLockupIDRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "SyntheticLockupsByLockupID", data);
    return promise.then(data => SyntheticLockupsByLockupIDResponse.decode(new BinaryReader(data)));
  }
  accountLockedLongerDuration(request: AccountLockedLongerDurationRequest): Promise<AccountLockedLongerDurationResponse> {
    const data = AccountLockedLongerDurationRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedLongerDuration", data);
    return promise.then(data => AccountLockedLongerDurationResponse.decode(new BinaryReader(data)));
  }
  accountLockedDuration(request: AccountLockedDurationRequest): Promise<AccountLockedDurationResponse> {
    const data = AccountLockedDurationRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedDuration", data);
    return promise.then(data => AccountLockedDurationResponse.decode(new BinaryReader(data)));
  }
  accountLockedLongerDurationNotUnlockingOnly(request: AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse> {
    const data = AccountLockedLongerDurationNotUnlockingOnlyRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedLongerDurationNotUnlockingOnly", data);
    return promise.then(data => AccountLockedLongerDurationNotUnlockingOnlyResponse.decode(new BinaryReader(data)));
  }
  accountLockedLongerDurationDenom(request: AccountLockedLongerDurationDenomRequest): Promise<AccountLockedLongerDurationDenomResponse> {
    const data = AccountLockedLongerDurationDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "AccountLockedLongerDurationDenom", data);
    return promise.then(data => AccountLockedLongerDurationDenomResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.lockup.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    moduleBalance(request?: ModuleBalanceRequest): Promise<ModuleBalanceResponse> {
      return queryService.moduleBalance(request);
    },
    moduleLockedAmount(request?: ModuleLockedAmountRequest): Promise<ModuleLockedAmountResponse> {
      return queryService.moduleLockedAmount(request);
    },
    accountUnlockableCoins(request: AccountUnlockableCoinsRequest): Promise<AccountUnlockableCoinsResponse> {
      return queryService.accountUnlockableCoins(request);
    },
    accountUnlockingCoins(request: AccountUnlockingCoinsRequest): Promise<AccountUnlockingCoinsResponse> {
      return queryService.accountUnlockingCoins(request);
    },
    accountLockedCoins(request: AccountLockedCoinsRequest): Promise<AccountLockedCoinsResponse> {
      return queryService.accountLockedCoins(request);
    },
    accountLockedPastTime(request: AccountLockedPastTimeRequest): Promise<AccountLockedPastTimeResponse> {
      return queryService.accountLockedPastTime(request);
    },
    accountLockedPastTimeNotUnlockingOnly(request: AccountLockedPastTimeNotUnlockingOnlyRequest): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse> {
      return queryService.accountLockedPastTimeNotUnlockingOnly(request);
    },
    accountUnlockedBeforeTime(request: AccountUnlockedBeforeTimeRequest): Promise<AccountUnlockedBeforeTimeResponse> {
      return queryService.accountUnlockedBeforeTime(request);
    },
    accountLockedPastTimeDenom(request: AccountLockedPastTimeDenomRequest): Promise<AccountLockedPastTimeDenomResponse> {
      return queryService.accountLockedPastTimeDenom(request);
    },
    lockedDenom(request: LockedDenomRequest): Promise<LockedDenomResponse> {
      return queryService.lockedDenom(request);
    },
    lockedByID(request: LockedRequest): Promise<LockedResponse> {
      return queryService.lockedByID(request);
    },
    syntheticLockupsByLockupID(request: SyntheticLockupsByLockupIDRequest): Promise<SyntheticLockupsByLockupIDResponse> {
      return queryService.syntheticLockupsByLockupID(request);
    },
    accountLockedLongerDuration(request: AccountLockedLongerDurationRequest): Promise<AccountLockedLongerDurationResponse> {
      return queryService.accountLockedLongerDuration(request);
    },
    accountLockedDuration(request: AccountLockedDurationRequest): Promise<AccountLockedDurationResponse> {
      return queryService.accountLockedDuration(request);
    },
    accountLockedLongerDurationNotUnlockingOnly(request: AccountLockedLongerDurationNotUnlockingOnlyRequest): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse> {
      return queryService.accountLockedLongerDurationNotUnlockingOnly(request);
    },
    accountLockedLongerDurationDenom(request: AccountLockedLongerDurationDenomRequest): Promise<AccountLockedLongerDurationDenomResponse> {
      return queryService.accountLockedLongerDurationDenom(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};
export interface UseModuleBalanceQuery<TData> extends VueQueryParams<ModuleBalanceResponse, TData> {
  request?: ReactiveModuleBalanceRequest;
}
export interface UseModuleLockedAmountQuery<TData> extends VueQueryParams<ModuleLockedAmountResponse, TData> {
  request?: ReactiveModuleLockedAmountRequest;
}
export interface UseAccountUnlockableCoinsQuery<TData> extends VueQueryParams<AccountUnlockableCoinsResponse, TData> {
  request: ReactiveAccountUnlockableCoinsRequest;
}
export interface UseAccountUnlockingCoinsQuery<TData> extends VueQueryParams<AccountUnlockingCoinsResponse, TData> {
  request: ReactiveAccountUnlockingCoinsRequest;
}
export interface UseAccountLockedCoinsQuery<TData> extends VueQueryParams<AccountLockedCoinsResponse, TData> {
  request: ReactiveAccountLockedCoinsRequest;
}
export interface UseAccountLockedPastTimeQuery<TData> extends VueQueryParams<AccountLockedPastTimeResponse, TData> {
  request: ReactiveAccountLockedPastTimeRequest;
}
export interface UseAccountLockedPastTimeNotUnlockingOnlyQuery<TData> extends VueQueryParams<AccountLockedPastTimeNotUnlockingOnlyResponse, TData> {
  request: ReactiveAccountLockedPastTimeNotUnlockingOnlyRequest;
}
export interface UseAccountUnlockedBeforeTimeQuery<TData> extends VueQueryParams<AccountUnlockedBeforeTimeResponse, TData> {
  request: ReactiveAccountUnlockedBeforeTimeRequest;
}
export interface UseAccountLockedPastTimeDenomQuery<TData> extends VueQueryParams<AccountLockedPastTimeDenomResponse, TData> {
  request: ReactiveAccountLockedPastTimeDenomRequest;
}
export interface UseLockedDenomQuery<TData> extends VueQueryParams<LockedDenomResponse, TData> {
  request: ReactiveLockedDenomRequest;
}
export interface UseLockedByIDQuery<TData> extends VueQueryParams<LockedResponse, TData> {
  request: ReactiveLockedRequest;
}
export interface UseSyntheticLockupsByLockupIDQuery<TData> extends VueQueryParams<SyntheticLockupsByLockupIDResponse, TData> {
  request: ReactiveSyntheticLockupsByLockupIDRequest;
}
export interface UseAccountLockedLongerDurationQuery<TData> extends VueQueryParams<AccountLockedLongerDurationResponse, TData> {
  request: ReactiveAccountLockedLongerDurationRequest;
}
export interface UseAccountLockedDurationQuery<TData> extends VueQueryParams<AccountLockedDurationResponse, TData> {
  request: ReactiveAccountLockedDurationRequest;
}
export interface UseAccountLockedLongerDurationNotUnlockingOnlyQuery<TData> extends VueQueryParams<AccountLockedLongerDurationNotUnlockingOnlyResponse, TData> {
  request: ReactiveAccountLockedLongerDurationNotUnlockingOnlyRequest;
}
export interface UseAccountLockedLongerDurationDenomQuery<TData> extends VueQueryParams<AccountLockedLongerDurationDenomResponse, TData> {
  request: ReactiveAccountLockedLongerDurationDenomRequest;
}
export interface UseParamsQuery<TData> extends VueQueryParams<QueryParamsResponse, TData> {
  request?: ReactiveQueryParamsRequest;
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
  const useModuleBalance = <TData = ModuleBalanceResponse,>({
    request,
    options
  }: UseModuleBalanceQuery<TData>) => {
    const queryKey = ["moduleBalanceQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<ModuleBalanceResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.moduleBalance(params);
      },
      ...options
    });
  };
  const useModuleLockedAmount = <TData = ModuleLockedAmountResponse,>({
    request,
    options
  }: UseModuleLockedAmountQuery<TData>) => {
    const queryKey = ["moduleLockedAmountQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<ModuleLockedAmountResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.moduleLockedAmount(params);
      },
      ...options
    });
  };
  const useAccountUnlockableCoins = <TData = AccountUnlockableCoinsResponse,>({
    request,
    options
  }: UseAccountUnlockableCoinsQuery<TData>) => {
    const queryKey = ["accountUnlockableCoinsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<AccountUnlockableCoinsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.accountUnlockableCoins(params);
      },
      ...options
    });
  };
  const useAccountUnlockingCoins = <TData = AccountUnlockingCoinsResponse,>({
    request,
    options
  }: UseAccountUnlockingCoinsQuery<TData>) => {
    const queryKey = ["accountUnlockingCoinsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<AccountUnlockingCoinsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.accountUnlockingCoins(params);
      },
      ...options
    });
  };
  const useAccountLockedCoins = <TData = AccountLockedCoinsResponse,>({
    request,
    options
  }: UseAccountLockedCoinsQuery<TData>) => {
    const queryKey = ["accountLockedCoinsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<AccountLockedCoinsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.accountLockedCoins(params);
      },
      ...options
    });
  };
  const useAccountLockedPastTime = <TData = AccountLockedPastTimeResponse,>({
    request,
    options
  }: UseAccountLockedPastTimeQuery<TData>) => {
    const queryKey = ["accountLockedPastTimeQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<AccountLockedPastTimeResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.accountLockedPastTime(params);
      },
      ...options
    });
  };
  const useAccountLockedPastTimeNotUnlockingOnly = <TData = AccountLockedPastTimeNotUnlockingOnlyResponse,>({
    request,
    options
  }: UseAccountLockedPastTimeNotUnlockingOnlyQuery<TData>) => {
    const queryKey = ["accountLockedPastTimeNotUnlockingOnlyQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<AccountLockedPastTimeNotUnlockingOnlyResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.accountLockedPastTimeNotUnlockingOnly(params);
      },
      ...options
    });
  };
  const useAccountUnlockedBeforeTime = <TData = AccountUnlockedBeforeTimeResponse,>({
    request,
    options
  }: UseAccountUnlockedBeforeTimeQuery<TData>) => {
    const queryKey = ["accountUnlockedBeforeTimeQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<AccountUnlockedBeforeTimeResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.accountUnlockedBeforeTime(params);
      },
      ...options
    });
  };
  const useAccountLockedPastTimeDenom = <TData = AccountLockedPastTimeDenomResponse,>({
    request,
    options
  }: UseAccountLockedPastTimeDenomQuery<TData>) => {
    const queryKey = ["accountLockedPastTimeDenomQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<AccountLockedPastTimeDenomResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.accountLockedPastTimeDenom(params);
      },
      ...options
    });
  };
  const useLockedDenom = <TData = LockedDenomResponse,>({
    request,
    options
  }: UseLockedDenomQuery<TData>) => {
    const queryKey = ["lockedDenomQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<LockedDenomResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.lockedDenom(params);
      },
      ...options
    });
  };
  const useLockedByID = <TData = LockedResponse,>({
    request,
    options
  }: UseLockedByIDQuery<TData>) => {
    const queryKey = ["lockedByIDQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<LockedResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.lockedByID(params);
      },
      ...options
    });
  };
  const useSyntheticLockupsByLockupID = <TData = SyntheticLockupsByLockupIDResponse,>({
    request,
    options
  }: UseSyntheticLockupsByLockupIDQuery<TData>) => {
    const queryKey = ["syntheticLockupsByLockupIDQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<SyntheticLockupsByLockupIDResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.syntheticLockupsByLockupID(params);
      },
      ...options
    });
  };
  const useAccountLockedLongerDuration = <TData = AccountLockedLongerDurationResponse,>({
    request,
    options
  }: UseAccountLockedLongerDurationQuery<TData>) => {
    const queryKey = ["accountLockedLongerDurationQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<AccountLockedLongerDurationResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.accountLockedLongerDuration(params);
      },
      ...options
    });
  };
  const useAccountLockedDuration = <TData = AccountLockedDurationResponse,>({
    request,
    options
  }: UseAccountLockedDurationQuery<TData>) => {
    const queryKey = ["accountLockedDurationQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<AccountLockedDurationResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.accountLockedDuration(params);
      },
      ...options
    });
  };
  const useAccountLockedLongerDurationNotUnlockingOnly = <TData = AccountLockedLongerDurationNotUnlockingOnlyResponse,>({
    request,
    options
  }: UseAccountLockedLongerDurationNotUnlockingOnlyQuery<TData>) => {
    const queryKey = ["accountLockedLongerDurationNotUnlockingOnlyQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<AccountLockedLongerDurationNotUnlockingOnlyResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.accountLockedLongerDurationNotUnlockingOnly(params);
      },
      ...options
    });
  };
  const useAccountLockedLongerDurationDenom = <TData = AccountLockedLongerDurationDenomResponse,>({
    request,
    options
  }: UseAccountLockedLongerDurationDenomQuery<TData>) => {
    const queryKey = ["accountLockedLongerDurationDenomQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<AccountLockedLongerDurationDenomResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.accountLockedLongerDurationDenom(params);
      },
      ...options
    });
  };
  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    const queryKey = ["paramsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryParamsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.params(params);
      },
      ...options
    });
  };
  return {
    /** Return full balance of the module */useModuleBalance,
    /** Return locked balance of the module */useModuleLockedAmount,
    /** Returns unlockable coins which are not withdrawn yet */useAccountUnlockableCoins,
    /** Returns unlocking coins */useAccountUnlockingCoins,
    /** Return a locked coins that can't be withdrawn */useAccountLockedCoins,
    /** Returns locked records of an account with unlock time beyond timestamp */useAccountLockedPastTime,
    /**
     * Returns locked records of an account with unlock time beyond timestamp
     * excluding tokens started unlocking
     */
    useAccountLockedPastTimeNotUnlockingOnly,
    /** Returns unlocked records with unlock time before timestamp */useAccountUnlockedBeforeTime,
    /** Returns lock records by address, timestamp, denom */useAccountLockedPastTimeDenom,
    /** Returns total locked per denom with longer past given time */useLockedDenom,
    /** Returns lock record by id */useLockedByID,
    /** Returns synthetic lockups by native lockup id */useSyntheticLockupsByLockupID,
    /** Returns account locked records with longer duration */useAccountLockedLongerDuration,
    /** Returns account locked records with a specific duration */useAccountLockedDuration,
    /**
     * Returns account locked records with longer duration excluding tokens
     * started unlocking
     */
    useAccountLockedLongerDurationNotUnlockingOnly,
    /** Returns account's locked records for a denom with longer duration */useAccountLockedLongerDurationDenom,
    /** Params returns lockup params. */useParams
  };
};