import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../mobx";
import { QueryParamsRequest, QueryParamsResponse, AssetTypeRequest, AssetTypeResponse, AllAssetsRequest, AllAssetsResponse, AssetMultiplierRequest, AssetMultiplierResponse, AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse, QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomResponse, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse, QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponse } from "./query";
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
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseAssetTypeQuery<TData> extends ReactQueryParams<AssetTypeResponse, TData> {
  request: AssetTypeRequest;
}
export interface UseAllAssetsQuery<TData> extends ReactQueryParams<AllAssetsResponse, TData> {
  request?: AllAssetsRequest;
}
export interface UseAssetMultiplierQuery<TData> extends ReactQueryParams<AssetMultiplierResponse, TData> {
  request: AssetMultiplierRequest;
}
export interface UseAllIntermediaryAccountsQuery<TData> extends ReactQueryParams<AllIntermediaryAccountsResponse, TData> {
  request?: AllIntermediaryAccountsRequest;
}
export interface UseConnectedIntermediaryAccountQuery<TData> extends ReactQueryParams<ConnectedIntermediaryAccountResponse, TData> {
  request: ConnectedIntermediaryAccountRequest;
}
export interface UseTotalDelegationByValidatorForDenomQuery<TData> extends ReactQueryParams<QueryTotalDelegationByValidatorForDenomResponse, TData> {
  request: QueryTotalDelegationByValidatorForDenomRequest;
}
export interface UseTotalSuperfluidDelegationsQuery<TData> extends ReactQueryParams<TotalSuperfluidDelegationsResponse, TData> {
  request?: TotalSuperfluidDelegationsRequest;
}
export interface UseSuperfluidDelegationAmountQuery<TData> extends ReactQueryParams<SuperfluidDelegationAmountResponse, TData> {
  request: SuperfluidDelegationAmountRequest;
}
export interface UseSuperfluidDelegationsByDelegatorQuery<TData> extends ReactQueryParams<SuperfluidDelegationsByDelegatorResponse, TData> {
  request: SuperfluidDelegationsByDelegatorRequest;
}
export interface UseSuperfluidUndelegationsByDelegatorQuery<TData> extends ReactQueryParams<SuperfluidUndelegationsByDelegatorResponse, TData> {
  request: SuperfluidUndelegationsByDelegatorRequest;
}
export interface UseSuperfluidDelegationsByValidatorDenomQuery<TData> extends ReactQueryParams<SuperfluidDelegationsByValidatorDenomResponse, TData> {
  request: SuperfluidDelegationsByValidatorDenomRequest;
}
export interface UseEstimateSuperfluidDelegatedAmountByValidatorDenomQuery<TData> extends ReactQueryParams<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, TData> {
  request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
}
export interface UseTotalDelegationByDelegatorQuery<TData> extends ReactQueryParams<QueryTotalDelegationByDelegatorResponse, TData> {
  request: QueryTotalDelegationByDelegatorRequest;
}
export interface UseUnpoolWhitelistQuery<TData> extends ReactQueryParams<QueryUnpoolWhitelistResponse, TData> {
  request?: QueryUnpoolWhitelistRequest;
}
const _queryClients: WeakMap<ProtobufRpcClient, QueryClientImpl> = new WeakMap();
const getQueryService = (rpc: ProtobufRpcClient | undefined): QueryClientImpl | undefined => {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  const queryService = new QueryClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<QueryParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  const useAssetType = <TData = AssetTypeResponse,>({
    request,
    options
  }: UseAssetTypeQuery<TData>) => {
    return useQuery<AssetTypeResponse, Error, TData>(["assetTypeQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.assetType(request);
    }, options);
  };
  const useAllAssets = <TData = AllAssetsResponse,>({
    request,
    options
  }: UseAllAssetsQuery<TData>) => {
    return useQuery<AllAssetsResponse, Error, TData>(["allAssetsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allAssets(request);
    }, options);
  };
  const useAssetMultiplier = <TData = AssetMultiplierResponse,>({
    request,
    options
  }: UseAssetMultiplierQuery<TData>) => {
    return useQuery<AssetMultiplierResponse, Error, TData>(["assetMultiplierQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.assetMultiplier(request);
    }, options);
  };
  const useAllIntermediaryAccounts = <TData = AllIntermediaryAccountsResponse,>({
    request,
    options
  }: UseAllIntermediaryAccountsQuery<TData>) => {
    return useQuery<AllIntermediaryAccountsResponse, Error, TData>(["allIntermediaryAccountsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allIntermediaryAccounts(request);
    }, options);
  };
  const useConnectedIntermediaryAccount = <TData = ConnectedIntermediaryAccountResponse,>({
    request,
    options
  }: UseConnectedIntermediaryAccountQuery<TData>) => {
    return useQuery<ConnectedIntermediaryAccountResponse, Error, TData>(["connectedIntermediaryAccountQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.connectedIntermediaryAccount(request);
    }, options);
  };
  const useTotalDelegationByValidatorForDenom = <TData = QueryTotalDelegationByValidatorForDenomResponse,>({
    request,
    options
  }: UseTotalDelegationByValidatorForDenomQuery<TData>) => {
    return useQuery<QueryTotalDelegationByValidatorForDenomResponse, Error, TData>(["totalDelegationByValidatorForDenomQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.totalDelegationByValidatorForDenom(request);
    }, options);
  };
  const useTotalSuperfluidDelegations = <TData = TotalSuperfluidDelegationsResponse,>({
    request,
    options
  }: UseTotalSuperfluidDelegationsQuery<TData>) => {
    return useQuery<TotalSuperfluidDelegationsResponse, Error, TData>(["totalSuperfluidDelegationsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.totalSuperfluidDelegations(request);
    }, options);
  };
  const useSuperfluidDelegationAmount = <TData = SuperfluidDelegationAmountResponse,>({
    request,
    options
  }: UseSuperfluidDelegationAmountQuery<TData>) => {
    return useQuery<SuperfluidDelegationAmountResponse, Error, TData>(["superfluidDelegationAmountQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.superfluidDelegationAmount(request);
    }, options);
  };
  const useSuperfluidDelegationsByDelegator = <TData = SuperfluidDelegationsByDelegatorResponse,>({
    request,
    options
  }: UseSuperfluidDelegationsByDelegatorQuery<TData>) => {
    return useQuery<SuperfluidDelegationsByDelegatorResponse, Error, TData>(["superfluidDelegationsByDelegatorQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.superfluidDelegationsByDelegator(request);
    }, options);
  };
  const useSuperfluidUndelegationsByDelegator = <TData = SuperfluidUndelegationsByDelegatorResponse,>({
    request,
    options
  }: UseSuperfluidUndelegationsByDelegatorQuery<TData>) => {
    return useQuery<SuperfluidUndelegationsByDelegatorResponse, Error, TData>(["superfluidUndelegationsByDelegatorQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.superfluidUndelegationsByDelegator(request);
    }, options);
  };
  const useSuperfluidDelegationsByValidatorDenom = <TData = SuperfluidDelegationsByValidatorDenomResponse,>({
    request,
    options
  }: UseSuperfluidDelegationsByValidatorDenomQuery<TData>) => {
    return useQuery<SuperfluidDelegationsByValidatorDenomResponse, Error, TData>(["superfluidDelegationsByValidatorDenomQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.superfluidDelegationsByValidatorDenom(request);
    }, options);
  };
  const useEstimateSuperfluidDelegatedAmountByValidatorDenom = <TData = EstimateSuperfluidDelegatedAmountByValidatorDenomResponse,>({
    request,
    options
  }: UseEstimateSuperfluidDelegatedAmountByValidatorDenomQuery<TData>) => {
    return useQuery<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, Error, TData>(["estimateSuperfluidDelegatedAmountByValidatorDenomQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.estimateSuperfluidDelegatedAmountByValidatorDenom(request);
    }, options);
  };
  const useTotalDelegationByDelegator = <TData = QueryTotalDelegationByDelegatorResponse,>({
    request,
    options
  }: UseTotalDelegationByDelegatorQuery<TData>) => {
    return useQuery<QueryTotalDelegationByDelegatorResponse, Error, TData>(["totalDelegationByDelegatorQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.totalDelegationByDelegator(request);
    }, options);
  };
  const useUnpoolWhitelist = <TData = QueryUnpoolWhitelistResponse,>({
    request,
    options
  }: UseUnpoolWhitelistQuery<TData>) => {
    return useQuery<QueryUnpoolWhitelistResponse, Error, TData>(["unpoolWhitelistQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.unpoolWhitelist(request);
    }, options);
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
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryParamsStore {
    store = new QueryStore<QueryParamsRequest, QueryParamsResponse>(queryService?.params);
    params(request: QueryParamsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryAssetTypeStore {
    store = new QueryStore<AssetTypeRequest, AssetTypeResponse>(queryService?.assetType);
    assetType(request: AssetTypeRequest) {
      return this.store.getData(request);
    }
  }
  class QueryAllAssetsStore {
    store = new QueryStore<AllAssetsRequest, AllAssetsResponse>(queryService?.allAssets);
    allAssets(request: AllAssetsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryAssetMultiplierStore {
    store = new QueryStore<AssetMultiplierRequest, AssetMultiplierResponse>(queryService?.assetMultiplier);
    assetMultiplier(request: AssetMultiplierRequest) {
      return this.store.getData(request);
    }
  }
  class QueryAllIntermediaryAccountsStore {
    store = new QueryStore<AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse>(queryService?.allIntermediaryAccounts);
    allIntermediaryAccounts(request: AllIntermediaryAccountsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryConnectedIntermediaryAccountStore {
    store = new QueryStore<ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse>(queryService?.connectedIntermediaryAccount);
    connectedIntermediaryAccount(request: ConnectedIntermediaryAccountRequest) {
      return this.store.getData(request);
    }
  }
  class QueryTotalDelegationByValidatorForDenomStore {
    store = new QueryStore<QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomResponse>(queryService?.totalDelegationByValidatorForDenom);
    totalDelegationByValidatorForDenom(request: QueryTotalDelegationByValidatorForDenomRequest) {
      return this.store.getData(request);
    }
  }
  class QueryTotalSuperfluidDelegationsStore {
    store = new QueryStore<TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse>(queryService?.totalSuperfluidDelegations);
    totalSuperfluidDelegations(request: TotalSuperfluidDelegationsRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySuperfluidDelegationAmountStore {
    store = new QueryStore<SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse>(queryService?.superfluidDelegationAmount);
    superfluidDelegationAmount(request: SuperfluidDelegationAmountRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySuperfluidDelegationsByDelegatorStore {
    store = new QueryStore<SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse>(queryService?.superfluidDelegationsByDelegator);
    superfluidDelegationsByDelegator(request: SuperfluidDelegationsByDelegatorRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySuperfluidUndelegationsByDelegatorStore {
    store = new QueryStore<SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse>(queryService?.superfluidUndelegationsByDelegator);
    superfluidUndelegationsByDelegator(request: SuperfluidUndelegationsByDelegatorRequest) {
      return this.store.getData(request);
    }
  }
  class QuerySuperfluidDelegationsByValidatorDenomStore {
    store = new QueryStore<SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse>(queryService?.superfluidDelegationsByValidatorDenom);
    superfluidDelegationsByValidatorDenom(request: SuperfluidDelegationsByValidatorDenomRequest) {
      return this.store.getData(request);
    }
  }
  class QueryEstimateSuperfluidDelegatedAmountByValidatorDenomStore {
    store = new QueryStore<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>(queryService?.estimateSuperfluidDelegatedAmountByValidatorDenom);
    estimateSuperfluidDelegatedAmountByValidatorDenom(request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest) {
      return this.store.getData(request);
    }
  }
  class QueryTotalDelegationByDelegatorStore {
    store = new QueryStore<QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse>(queryService?.totalDelegationByDelegator);
    totalDelegationByDelegator(request: QueryTotalDelegationByDelegatorRequest) {
      return this.store.getData(request);
    }
  }
  class QueryUnpoolWhitelistStore {
    store = new QueryStore<QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponse>(queryService?.unpoolWhitelist);
    unpoolWhitelist(request: QueryUnpoolWhitelistRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Params returns the total set of superfluid parameters. */QueryParamsStore,
    /**
     * Returns superfluid asset type, whether if it's a native asset or an lp
     * share.
     */
    QueryAssetTypeStore,
    /** Returns all registered superfluid assets. */QueryAllAssetsStore,
    /** Returns the osmo equivalent multiplier used in the most recent epoch. */QueryAssetMultiplierStore,
    /** Returns all superfluid intermediary accounts. */QueryAllIntermediaryAccountsStore,
    /** Returns intermediary account connected to a superfluid staked lock by id */QueryConnectedIntermediaryAccountStore,
    /** Returns the amount of delegations of specific denom for all validators */QueryTotalDelegationByValidatorForDenomStore,
    /**
     * Returns the total amount of osmo superfluidly staked.
     * Response is denominated in uosmo.
     */
    QueryTotalSuperfluidDelegationsStore,
    /**
     * Returns the coins superfluid delegated for the delegator, validator, denom
     * triplet
     */
    QuerySuperfluidDelegationAmountStore,
    /** Returns all the delegated superfluid poistions for a specific delegator. */QuerySuperfluidDelegationsByDelegatorStore,
    /** Returns all the undelegating superfluid poistions for a specific delegator. */QuerySuperfluidUndelegationsByDelegatorStore,
    /**
     * Returns all the superfluid positions of a specific denom delegated to one
     * validator
     */
    QuerySuperfluidDelegationsByValidatorDenomStore,
    /**
     * Returns the amount of a specific denom delegated to a specific validator
     * This is labeled an estimate, because the way it calculates the amount can
     * lead rounding errors from the true delegated amount
     */
    QueryEstimateSuperfluidDelegatedAmountByValidatorDenomStore,
    /** Returns the specified delegations for a specific delegator */QueryTotalDelegationByDelegatorStore,
    /** Returns a list of whitelisted pool ids to unpool. */QueryUnpoolWhitelistStore
  };
};