import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { SuperfluidAssetType, SuperfluidAssetTypeSDKType, SuperfluidAsset, SuperfluidAssetSDKType, OsmoEquivalentMultiplierRecord, OsmoEquivalentMultiplierRecordSDKType, SuperfluidDelegationRecord, SuperfluidDelegationRecordSDKType } from "./superfluid";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock, SyntheticLockSDKType } from "../lockup/lock";
import { DelegationResponse, DelegationResponseSDKType } from "../../cosmos/staking/v1beta1/staking";
import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, AssetTypeRequest, AssetTypeRequestSDKType, AssetTypeResponse, AssetTypeResponseSDKType, AllAssetsRequest, AllAssetsRequestSDKType, AllAssetsResponse, AllAssetsResponseSDKType, AssetMultiplierRequest, AssetMultiplierRequestSDKType, AssetMultiplierResponse, AssetMultiplierResponseSDKType, AllIntermediaryAccountsRequest, AllIntermediaryAccountsRequestSDKType, AllIntermediaryAccountsResponse, AllIntermediaryAccountsResponseSDKType, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountRequestSDKType, ConnectedIntermediaryAccountResponse, ConnectedIntermediaryAccountResponseSDKType, QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomRequestSDKType, QueryTotalDelegationByValidatorForDenomResponse, QueryTotalDelegationByValidatorForDenomResponseSDKType, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsRequestSDKType, TotalSuperfluidDelegationsResponse, TotalSuperfluidDelegationsResponseSDKType, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountRequestSDKType, SuperfluidDelegationAmountResponse, SuperfluidDelegationAmountResponseSDKType, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorRequestSDKType, SuperfluidDelegationsByDelegatorResponse, SuperfluidDelegationsByDelegatorResponseSDKType, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorRequestSDKType, SuperfluidUndelegationsByDelegatorResponse, SuperfluidUndelegationsByDelegatorResponseSDKType, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomRequestSDKType, SuperfluidDelegationsByValidatorDenomResponse, SuperfluidDelegationsByValidatorDenomResponseSDKType, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType, QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorRequestSDKType, QueryTotalDelegationByDelegatorResponse, QueryTotalDelegationByDelegatorResponseSDKType, QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistRequestSDKType, QueryUnpoolWhitelistResponse, QueryUnpoolWhitelistResponseSDKType, ReactiveQueryParamsRequest, ReactiveAssetTypeRequest, ReactiveAllAssetsRequest, ReactiveAssetMultiplierRequest, ReactiveAllIntermediaryAccountsRequest, ReactiveConnectedIntermediaryAccountRequest, ReactiveQueryTotalDelegationByValidatorForDenomRequest, ReactiveTotalSuperfluidDelegationsRequest, ReactiveSuperfluidDelegationAmountRequest, ReactiveSuperfluidDelegationsByDelegatorRequest, ReactiveSuperfluidUndelegationsByDelegatorRequest, ReactiveSuperfluidDelegationsByValidatorDenomRequest, ReactiveEstimateSuperfluidDelegatedAmountByValidatorDenomRequest, ReactiveQueryTotalDelegationByDelegatorRequest, ReactiveQueryUnpoolWhitelistRequest } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params returns the total set of superfluid parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * Returns superfluid asset type, whether if it's a native asset or an lp
   * share.
   */
  assetType(request: AssetTypeRequest): Promise<AssetTypeResponse>;
  /** Returns all registered superfluid assets. */
  allAssets(request?: AllAssetsRequest): Promise<AllAssetsResponse>;
  /** Returns the osmo equivalent multiplier used in the most recent epoch. */
  assetMultiplier(request: AssetMultiplierRequest): Promise<AssetMultiplierResponse>;
  /** Returns all superfluid intermediary accounts. */
  allIntermediaryAccounts(request?: AllIntermediaryAccountsRequest): Promise<AllIntermediaryAccountsResponse>;
  /** Returns intermediary account connected to a superfluid staked lock by id */
  connectedIntermediaryAccount(request: ConnectedIntermediaryAccountRequest): Promise<ConnectedIntermediaryAccountResponse>;
  /** Returns the amount of delegations of specific denom for all validators */
  totalDelegationByValidatorForDenom(request: QueryTotalDelegationByValidatorForDenomRequest): Promise<QueryTotalDelegationByValidatorForDenomResponse>;
  /**
   * Returns the total amount of osmo superfluidly staked.
   * Response is denominated in uosmo.
   */
  totalSuperfluidDelegations(request?: TotalSuperfluidDelegationsRequest): Promise<TotalSuperfluidDelegationsResponse>;
  /**
   * Returns the coins superfluid delegated for the delegator, validator, denom
   * triplet
   */
  superfluidDelegationAmount(request: SuperfluidDelegationAmountRequest): Promise<SuperfluidDelegationAmountResponse>;
  /** Returns all the delegated superfluid poistions for a specific delegator. */
  superfluidDelegationsByDelegator(request: SuperfluidDelegationsByDelegatorRequest): Promise<SuperfluidDelegationsByDelegatorResponse>;
  /** Returns all the undelegating superfluid poistions for a specific delegator. */
  superfluidUndelegationsByDelegator(request: SuperfluidUndelegationsByDelegatorRequest): Promise<SuperfluidUndelegationsByDelegatorResponse>;
  /**
   * Returns all the superfluid positions of a specific denom delegated to one
   * validator
   */
  superfluidDelegationsByValidatorDenom(request: SuperfluidDelegationsByValidatorDenomRequest): Promise<SuperfluidDelegationsByValidatorDenomResponse>;
  /**
   * Returns the amount of a specific denom delegated to a specific validator
   * This is labeled an estimate, because the way it calculates the amount can
   * lead rounding errors from the true delegated amount
   */
  estimateSuperfluidDelegatedAmountByValidatorDenom(request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
  /** Returns the specified delegations for a specific delegator */
  totalDelegationByDelegator(request: QueryTotalDelegationByDelegatorRequest): Promise<QueryTotalDelegationByDelegatorResponse>;
  /** Returns a list of whitelisted pool ids to unpool. */
  unpoolWhitelist(request?: QueryUnpoolWhitelistRequest): Promise<QueryUnpoolWhitelistResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.assetType = this.assetType.bind(this);
    this.allAssets = this.allAssets.bind(this);
    this.assetMultiplier = this.assetMultiplier.bind(this);
    this.allIntermediaryAccounts = this.allIntermediaryAccounts.bind(this);
    this.connectedIntermediaryAccount = this.connectedIntermediaryAccount.bind(this);
    this.totalDelegationByValidatorForDenom = this.totalDelegationByValidatorForDenom.bind(this);
    this.totalSuperfluidDelegations = this.totalSuperfluidDelegations.bind(this);
    this.superfluidDelegationAmount = this.superfluidDelegationAmount.bind(this);
    this.superfluidDelegationsByDelegator = this.superfluidDelegationsByDelegator.bind(this);
    this.superfluidUndelegationsByDelegator = this.superfluidUndelegationsByDelegator.bind(this);
    this.superfluidDelegationsByValidatorDenom = this.superfluidDelegationsByValidatorDenom.bind(this);
    this.estimateSuperfluidDelegatedAmountByValidatorDenom = this.estimateSuperfluidDelegatedAmountByValidatorDenom.bind(this);
    this.totalDelegationByDelegator = this.totalDelegationByDelegator.bind(this);
    this.unpoolWhitelist = this.unpoolWhitelist.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  assetType(request: AssetTypeRequest): Promise<AssetTypeResponse> {
    const data = AssetTypeRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "AssetType", data);
    return promise.then(data => AssetTypeResponse.decode(new BinaryReader(data)));
  }
  allAssets(request: AllAssetsRequest = {}): Promise<AllAssetsResponse> {
    const data = AllAssetsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "AllAssets", data);
    return promise.then(data => AllAssetsResponse.decode(new BinaryReader(data)));
  }
  assetMultiplier(request: AssetMultiplierRequest): Promise<AssetMultiplierResponse> {
    const data = AssetMultiplierRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "AssetMultiplier", data);
    return promise.then(data => AssetMultiplierResponse.decode(new BinaryReader(data)));
  }
  allIntermediaryAccounts(request: AllIntermediaryAccountsRequest = {
    pagination: undefined
  }): Promise<AllIntermediaryAccountsResponse> {
    const data = AllIntermediaryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "AllIntermediaryAccounts", data);
    return promise.then(data => AllIntermediaryAccountsResponse.decode(new BinaryReader(data)));
  }
  connectedIntermediaryAccount(request: ConnectedIntermediaryAccountRequest): Promise<ConnectedIntermediaryAccountResponse> {
    const data = ConnectedIntermediaryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "ConnectedIntermediaryAccount", data);
    return promise.then(data => ConnectedIntermediaryAccountResponse.decode(new BinaryReader(data)));
  }
  totalDelegationByValidatorForDenom(request: QueryTotalDelegationByValidatorForDenomRequest): Promise<QueryTotalDelegationByValidatorForDenomResponse> {
    const data = QueryTotalDelegationByValidatorForDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "TotalDelegationByValidatorForDenom", data);
    return promise.then(data => QueryTotalDelegationByValidatorForDenomResponse.decode(new BinaryReader(data)));
  }
  totalSuperfluidDelegations(request: TotalSuperfluidDelegationsRequest = {}): Promise<TotalSuperfluidDelegationsResponse> {
    const data = TotalSuperfluidDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "TotalSuperfluidDelegations", data);
    return promise.then(data => TotalSuperfluidDelegationsResponse.decode(new BinaryReader(data)));
  }
  superfluidDelegationAmount(request: SuperfluidDelegationAmountRequest): Promise<SuperfluidDelegationAmountResponse> {
    const data = SuperfluidDelegationAmountRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidDelegationAmount", data);
    return promise.then(data => SuperfluidDelegationAmountResponse.decode(new BinaryReader(data)));
  }
  superfluidDelegationsByDelegator(request: SuperfluidDelegationsByDelegatorRequest): Promise<SuperfluidDelegationsByDelegatorResponse> {
    const data = SuperfluidDelegationsByDelegatorRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidDelegationsByDelegator", data);
    return promise.then(data => SuperfluidDelegationsByDelegatorResponse.decode(new BinaryReader(data)));
  }
  superfluidUndelegationsByDelegator(request: SuperfluidUndelegationsByDelegatorRequest): Promise<SuperfluidUndelegationsByDelegatorResponse> {
    const data = SuperfluidUndelegationsByDelegatorRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidUndelegationsByDelegator", data);
    return promise.then(data => SuperfluidUndelegationsByDelegatorResponse.decode(new BinaryReader(data)));
  }
  superfluidDelegationsByValidatorDenom(request: SuperfluidDelegationsByValidatorDenomRequest): Promise<SuperfluidDelegationsByValidatorDenomResponse> {
    const data = SuperfluidDelegationsByValidatorDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidDelegationsByValidatorDenom", data);
    return promise.then(data => SuperfluidDelegationsByValidatorDenomResponse.decode(new BinaryReader(data)));
  }
  estimateSuperfluidDelegatedAmountByValidatorDenom(request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse> {
    const data = EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "EstimateSuperfluidDelegatedAmountByValidatorDenom", data);
    return promise.then(data => EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.decode(new BinaryReader(data)));
  }
  totalDelegationByDelegator(request: QueryTotalDelegationByDelegatorRequest): Promise<QueryTotalDelegationByDelegatorResponse> {
    const data = QueryTotalDelegationByDelegatorRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "TotalDelegationByDelegator", data);
    return promise.then(data => QueryTotalDelegationByDelegatorResponse.decode(new BinaryReader(data)));
  }
  unpoolWhitelist(request: QueryUnpoolWhitelistRequest = {}): Promise<QueryUnpoolWhitelistResponse> {
    const data = QueryUnpoolWhitelistRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "UnpoolWhitelist", data);
    return promise.then(data => QueryUnpoolWhitelistResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    assetType(request: AssetTypeRequest): Promise<AssetTypeResponse> {
      return queryService.assetType(request);
    },
    allAssets(request?: AllAssetsRequest): Promise<AllAssetsResponse> {
      return queryService.allAssets(request);
    },
    assetMultiplier(request: AssetMultiplierRequest): Promise<AssetMultiplierResponse> {
      return queryService.assetMultiplier(request);
    },
    allIntermediaryAccounts(request?: AllIntermediaryAccountsRequest): Promise<AllIntermediaryAccountsResponse> {
      return queryService.allIntermediaryAccounts(request);
    },
    connectedIntermediaryAccount(request: ConnectedIntermediaryAccountRequest): Promise<ConnectedIntermediaryAccountResponse> {
      return queryService.connectedIntermediaryAccount(request);
    },
    totalDelegationByValidatorForDenom(request: QueryTotalDelegationByValidatorForDenomRequest): Promise<QueryTotalDelegationByValidatorForDenomResponse> {
      return queryService.totalDelegationByValidatorForDenom(request);
    },
    totalSuperfluidDelegations(request?: TotalSuperfluidDelegationsRequest): Promise<TotalSuperfluidDelegationsResponse> {
      return queryService.totalSuperfluidDelegations(request);
    },
    superfluidDelegationAmount(request: SuperfluidDelegationAmountRequest): Promise<SuperfluidDelegationAmountResponse> {
      return queryService.superfluidDelegationAmount(request);
    },
    superfluidDelegationsByDelegator(request: SuperfluidDelegationsByDelegatorRequest): Promise<SuperfluidDelegationsByDelegatorResponse> {
      return queryService.superfluidDelegationsByDelegator(request);
    },
    superfluidUndelegationsByDelegator(request: SuperfluidUndelegationsByDelegatorRequest): Promise<SuperfluidUndelegationsByDelegatorResponse> {
      return queryService.superfluidUndelegationsByDelegator(request);
    },
    superfluidDelegationsByValidatorDenom(request: SuperfluidDelegationsByValidatorDenomRequest): Promise<SuperfluidDelegationsByValidatorDenomResponse> {
      return queryService.superfluidDelegationsByValidatorDenom(request);
    },
    estimateSuperfluidDelegatedAmountByValidatorDenom(request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse> {
      return queryService.estimateSuperfluidDelegatedAmountByValidatorDenom(request);
    },
    totalDelegationByDelegator(request: QueryTotalDelegationByDelegatorRequest): Promise<QueryTotalDelegationByDelegatorResponse> {
      return queryService.totalDelegationByDelegator(request);
    },
    unpoolWhitelist(request?: QueryUnpoolWhitelistRequest): Promise<QueryUnpoolWhitelistResponse> {
      return queryService.unpoolWhitelist(request);
    }
  };
};
export interface UseParamsQuery<TData> extends VueQueryParams<QueryParamsResponse, TData> {
  request?: ReactiveQueryParamsRequest;
}
export interface UseAssetTypeQuery<TData> extends VueQueryParams<AssetTypeResponse, TData> {
  request: ReactiveAssetTypeRequest;
}
export interface UseAllAssetsQuery<TData> extends VueQueryParams<AllAssetsResponse, TData> {
  request?: ReactiveAllAssetsRequest;
}
export interface UseAssetMultiplierQuery<TData> extends VueQueryParams<AssetMultiplierResponse, TData> {
  request: ReactiveAssetMultiplierRequest;
}
export interface UseAllIntermediaryAccountsQuery<TData> extends VueQueryParams<AllIntermediaryAccountsResponse, TData> {
  request?: ReactiveAllIntermediaryAccountsRequest;
}
export interface UseConnectedIntermediaryAccountQuery<TData> extends VueQueryParams<ConnectedIntermediaryAccountResponse, TData> {
  request: ReactiveConnectedIntermediaryAccountRequest;
}
export interface UseTotalDelegationByValidatorForDenomQuery<TData> extends VueQueryParams<QueryTotalDelegationByValidatorForDenomResponse, TData> {
  request: ReactiveQueryTotalDelegationByValidatorForDenomRequest;
}
export interface UseTotalSuperfluidDelegationsQuery<TData> extends VueQueryParams<TotalSuperfluidDelegationsResponse, TData> {
  request?: ReactiveTotalSuperfluidDelegationsRequest;
}
export interface UseSuperfluidDelegationAmountQuery<TData> extends VueQueryParams<SuperfluidDelegationAmountResponse, TData> {
  request: ReactiveSuperfluidDelegationAmountRequest;
}
export interface UseSuperfluidDelegationsByDelegatorQuery<TData> extends VueQueryParams<SuperfluidDelegationsByDelegatorResponse, TData> {
  request: ReactiveSuperfluidDelegationsByDelegatorRequest;
}
export interface UseSuperfluidUndelegationsByDelegatorQuery<TData> extends VueQueryParams<SuperfluidUndelegationsByDelegatorResponse, TData> {
  request: ReactiveSuperfluidUndelegationsByDelegatorRequest;
}
export interface UseSuperfluidDelegationsByValidatorDenomQuery<TData> extends VueQueryParams<SuperfluidDelegationsByValidatorDenomResponse, TData> {
  request: ReactiveSuperfluidDelegationsByValidatorDenomRequest;
}
export interface UseEstimateSuperfluidDelegatedAmountByValidatorDenomQuery<TData> extends VueQueryParams<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, TData> {
  request: ReactiveEstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
}
export interface UseTotalDelegationByDelegatorQuery<TData> extends VueQueryParams<QueryTotalDelegationByDelegatorResponse, TData> {
  request: ReactiveQueryTotalDelegationByDelegatorRequest;
}
export interface UseUnpoolWhitelistQuery<TData> extends VueQueryParams<QueryUnpoolWhitelistResponse, TData> {
  request?: ReactiveQueryUnpoolWhitelistRequest;
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
  const useAssetType = <TData = AssetTypeResponse,>({
    request,
    options
  }: UseAssetTypeQuery<TData>) => {
    const queryKey = ["assetTypeQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<AssetTypeResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.assetType(params);
      },
      ...options
    });
  };
  const useAllAssets = <TData = AllAssetsResponse,>({
    request,
    options
  }: UseAllAssetsQuery<TData>) => {
    const queryKey = ["allAssetsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<AllAssetsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.allAssets(params);
      },
      ...options
    });
  };
  const useAssetMultiplier = <TData = AssetMultiplierResponse,>({
    request,
    options
  }: UseAssetMultiplierQuery<TData>) => {
    const queryKey = ["assetMultiplierQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<AssetMultiplierResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.assetMultiplier(params);
      },
      ...options
    });
  };
  const useAllIntermediaryAccounts = <TData = AllIntermediaryAccountsResponse,>({
    request,
    options
  }: UseAllIntermediaryAccountsQuery<TData>) => {
    const queryKey = ["allIntermediaryAccountsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<AllIntermediaryAccountsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.allIntermediaryAccounts(params);
      },
      ...options
    });
  };
  const useConnectedIntermediaryAccount = <TData = ConnectedIntermediaryAccountResponse,>({
    request,
    options
  }: UseConnectedIntermediaryAccountQuery<TData>) => {
    const queryKey = ["connectedIntermediaryAccountQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<ConnectedIntermediaryAccountResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.connectedIntermediaryAccount(params);
      },
      ...options
    });
  };
  const useTotalDelegationByValidatorForDenom = <TData = QueryTotalDelegationByValidatorForDenomResponse,>({
    request,
    options
  }: UseTotalDelegationByValidatorForDenomQuery<TData>) => {
    const queryKey = ["totalDelegationByValidatorForDenomQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryTotalDelegationByValidatorForDenomResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.totalDelegationByValidatorForDenom(params);
      },
      ...options
    });
  };
  const useTotalSuperfluidDelegations = <TData = TotalSuperfluidDelegationsResponse,>({
    request,
    options
  }: UseTotalSuperfluidDelegationsQuery<TData>) => {
    const queryKey = ["totalSuperfluidDelegationsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<TotalSuperfluidDelegationsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.totalSuperfluidDelegations(params);
      },
      ...options
    });
  };
  const useSuperfluidDelegationAmount = <TData = SuperfluidDelegationAmountResponse,>({
    request,
    options
  }: UseSuperfluidDelegationAmountQuery<TData>) => {
    const queryKey = ["superfluidDelegationAmountQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<SuperfluidDelegationAmountResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.superfluidDelegationAmount(params);
      },
      ...options
    });
  };
  const useSuperfluidDelegationsByDelegator = <TData = SuperfluidDelegationsByDelegatorResponse,>({
    request,
    options
  }: UseSuperfluidDelegationsByDelegatorQuery<TData>) => {
    const queryKey = ["superfluidDelegationsByDelegatorQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<SuperfluidDelegationsByDelegatorResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.superfluidDelegationsByDelegator(params);
      },
      ...options
    });
  };
  const useSuperfluidUndelegationsByDelegator = <TData = SuperfluidUndelegationsByDelegatorResponse,>({
    request,
    options
  }: UseSuperfluidUndelegationsByDelegatorQuery<TData>) => {
    const queryKey = ["superfluidUndelegationsByDelegatorQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<SuperfluidUndelegationsByDelegatorResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.superfluidUndelegationsByDelegator(params);
      },
      ...options
    });
  };
  const useSuperfluidDelegationsByValidatorDenom = <TData = SuperfluidDelegationsByValidatorDenomResponse,>({
    request,
    options
  }: UseSuperfluidDelegationsByValidatorDenomQuery<TData>) => {
    const queryKey = ["superfluidDelegationsByValidatorDenomQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<SuperfluidDelegationsByValidatorDenomResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.superfluidDelegationsByValidatorDenom(params);
      },
      ...options
    });
  };
  const useEstimateSuperfluidDelegatedAmountByValidatorDenom = <TData = EstimateSuperfluidDelegatedAmountByValidatorDenomResponse,>({
    request,
    options
  }: UseEstimateSuperfluidDelegatedAmountByValidatorDenomQuery<TData>) => {
    const queryKey = ["estimateSuperfluidDelegatedAmountByValidatorDenomQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.estimateSuperfluidDelegatedAmountByValidatorDenom(params);
      },
      ...options
    });
  };
  const useTotalDelegationByDelegator = <TData = QueryTotalDelegationByDelegatorResponse,>({
    request,
    options
  }: UseTotalDelegationByDelegatorQuery<TData>) => {
    const queryKey = ["totalDelegationByDelegatorQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryTotalDelegationByDelegatorResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.totalDelegationByDelegator(params);
      },
      ...options
    });
  };
  const useUnpoolWhitelist = <TData = QueryUnpoolWhitelistResponse,>({
    request,
    options
  }: UseUnpoolWhitelistQuery<TData>) => {
    const queryKey = ["unpoolWhitelistQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryUnpoolWhitelistResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.unpoolWhitelist(params);
      },
      ...options
    });
  };
  return {
    /** Params returns the total set of superfluid parameters. */useParams,
    /**
     * Returns superfluid asset type, whether if it's a native asset or an lp
     * share.
     */
    useAssetType,
    /** Returns all registered superfluid assets. */useAllAssets,
    /** Returns the osmo equivalent multiplier used in the most recent epoch. */useAssetMultiplier,
    /** Returns all superfluid intermediary accounts. */useAllIntermediaryAccounts,
    /** Returns intermediary account connected to a superfluid staked lock by id */useConnectedIntermediaryAccount,
    /** Returns the amount of delegations of specific denom for all validators */useTotalDelegationByValidatorForDenom,
    /**
     * Returns the total amount of osmo superfluidly staked.
     * Response is denominated in uosmo.
     */
    useTotalSuperfluidDelegations,
    /**
     * Returns the coins superfluid delegated for the delegator, validator, denom
     * triplet
     */
    useSuperfluidDelegationAmount,
    /** Returns all the delegated superfluid poistions for a specific delegator. */useSuperfluidDelegationsByDelegator,
    /** Returns all the undelegating superfluid poistions for a specific delegator. */useSuperfluidUndelegationsByDelegator,
    /**
     * Returns all the superfluid positions of a specific denom delegated to one
     * validator
     */
    useSuperfluidDelegationsByValidatorDenom,
    /**
     * Returns the amount of a specific denom delegated to a specific validator
     * This is labeled an estimate, because the way it calculates the amount can
     * lead rounding errors from the true delegated amount
     */
    useEstimateSuperfluidDelegatedAmountByValidatorDenom,
    /** Returns the specified delegations for a specific delegator */useTotalDelegationByDelegator,
    /** Returns a list of whitelisted pool ids to unpool. */useUnpoolWhitelist
  };
};