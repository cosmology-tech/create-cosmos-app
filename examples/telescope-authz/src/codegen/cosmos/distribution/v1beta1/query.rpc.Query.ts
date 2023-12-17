import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { ReactQueryParams } from "../../../react-query";
import { ProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryParamsRequest, QueryParamsResponse, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse, QueryValidatorCommissionRequest, QueryValidatorCommissionResponse, QueryValidatorSlashesRequest, QueryValidatorSlashesResponse, QueryDelegationRewardsRequest, QueryDelegationRewardsResponse, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryCommunityPoolRequest, QueryCommunityPoolResponse } from "./query";
/** Query defines the gRPC querier service for distribution module. */
export interface Query {
  /** Params queries params of the distribution module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ValidatorOutstandingRewards queries rewards of a validator address. */
  validatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse>;
  /** ValidatorCommission queries accumulated commission for a validator. */
  validatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse>;
  /** ValidatorSlashes queries slash events of a validator. */
  validatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse>;
  /** DelegationRewards queries the total rewards accrued by a delegation. */
  delegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse>;
  /**
   * DelegationTotalRewards queries the total rewards accrued by a each
   * validator.
   */
  delegationTotalRewards(request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse>;
  /** DelegatorValidators queries the validators of a delegator. */
  delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
  /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
  delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse>;
  /** CommunityPool queries the community pool coins. */
  communityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Params queries params of the distribution module. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* ValidatorOutstandingRewards queries rewards of a validator address. */
  validatorOutstandingRewards = async (request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse> => {
    const data = QueryValidatorOutstandingRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorOutstandingRewards", data);
    return promise.then(data => QueryValidatorOutstandingRewardsResponse.decode(new BinaryReader(data)));
  };
  /* ValidatorCommission queries accumulated commission for a validator. */
  validatorCommission = async (request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse> => {
    const data = QueryValidatorCommissionRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorCommission", data);
    return promise.then(data => QueryValidatorCommissionResponse.decode(new BinaryReader(data)));
  };
  /* ValidatorSlashes queries slash events of a validator. */
  validatorSlashes = async (request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse> => {
    const data = QueryValidatorSlashesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorSlashes", data);
    return promise.then(data => QueryValidatorSlashesResponse.decode(new BinaryReader(data)));
  };
  /* DelegationRewards queries the total rewards accrued by a delegation. */
  delegationRewards = async (request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse> => {
    const data = QueryDelegationRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationRewards", data);
    return promise.then(data => QueryDelegationRewardsResponse.decode(new BinaryReader(data)));
  };
  /* DelegationTotalRewards queries the total rewards accrued by a each
   validator. */
  delegationTotalRewards = async (request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse> => {
    const data = QueryDelegationTotalRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationTotalRewards", data);
    return promise.then(data => QueryDelegationTotalRewardsResponse.decode(new BinaryReader(data)));
  };
  /* DelegatorValidators queries the validators of a delegator. */
  delegatorValidators = async (request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> => {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorValidators", data);
    return promise.then(data => QueryDelegatorValidatorsResponse.decode(new BinaryReader(data)));
  };
  /* DelegatorWithdrawAddress queries withdraw address of a delegator. */
  delegatorWithdrawAddress = async (request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse> => {
    const data = QueryDelegatorWithdrawAddressRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorWithdrawAddress", data);
    return promise.then(data => QueryDelegatorWithdrawAddressResponse.decode(new BinaryReader(data)));
  };
  /* CommunityPool queries the community pool coins. */
  communityPool = async (request: QueryCommunityPoolRequest = {}): Promise<QueryCommunityPoolResponse> => {
    const data = QueryCommunityPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "CommunityPool", data);
    return promise.then(data => QueryCommunityPoolResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new QueryClientImpl(rpc);
};
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseValidatorOutstandingRewardsQuery<TData> extends ReactQueryParams<QueryValidatorOutstandingRewardsResponse, TData> {
  request: QueryValidatorOutstandingRewardsRequest;
}
export interface UseValidatorCommissionQuery<TData> extends ReactQueryParams<QueryValidatorCommissionResponse, TData> {
  request: QueryValidatorCommissionRequest;
}
export interface UseValidatorSlashesQuery<TData> extends ReactQueryParams<QueryValidatorSlashesResponse, TData> {
  request: QueryValidatorSlashesRequest;
}
export interface UseDelegationRewardsQuery<TData> extends ReactQueryParams<QueryDelegationRewardsResponse, TData> {
  request: QueryDelegationRewardsRequest;
}
export interface UseDelegationTotalRewardsQuery<TData> extends ReactQueryParams<QueryDelegationTotalRewardsResponse, TData> {
  request: QueryDelegationTotalRewardsRequest;
}
export interface UseDelegatorValidatorsQuery<TData> extends ReactQueryParams<QueryDelegatorValidatorsResponse, TData> {
  request: QueryDelegatorValidatorsRequest;
}
export interface UseDelegatorWithdrawAddressQuery<TData> extends ReactQueryParams<QueryDelegatorWithdrawAddressResponse, TData> {
  request: QueryDelegatorWithdrawAddressRequest;
}
export interface UseCommunityPoolQuery<TData> extends ReactQueryParams<QueryCommunityPoolResponse, TData> {
  request?: QueryCommunityPoolRequest;
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
  const useValidatorOutstandingRewards = <TData = QueryValidatorOutstandingRewardsResponse,>({
    request,
    options
  }: UseValidatorOutstandingRewardsQuery<TData>) => {
    return useQuery<QueryValidatorOutstandingRewardsResponse, Error, TData>(["validatorOutstandingRewardsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.validatorOutstandingRewards(request);
    }, options);
  };
  const useValidatorCommission = <TData = QueryValidatorCommissionResponse,>({
    request,
    options
  }: UseValidatorCommissionQuery<TData>) => {
    return useQuery<QueryValidatorCommissionResponse, Error, TData>(["validatorCommissionQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.validatorCommission(request);
    }, options);
  };
  const useValidatorSlashes = <TData = QueryValidatorSlashesResponse,>({
    request,
    options
  }: UseValidatorSlashesQuery<TData>) => {
    return useQuery<QueryValidatorSlashesResponse, Error, TData>(["validatorSlashesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.validatorSlashes(request);
    }, options);
  };
  const useDelegationRewards = <TData = QueryDelegationRewardsResponse,>({
    request,
    options
  }: UseDelegationRewardsQuery<TData>) => {
    return useQuery<QueryDelegationRewardsResponse, Error, TData>(["delegationRewardsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.delegationRewards(request);
    }, options);
  };
  const useDelegationTotalRewards = <TData = QueryDelegationTotalRewardsResponse,>({
    request,
    options
  }: UseDelegationTotalRewardsQuery<TData>) => {
    return useQuery<QueryDelegationTotalRewardsResponse, Error, TData>(["delegationTotalRewardsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.delegationTotalRewards(request);
    }, options);
  };
  const useDelegatorValidators = <TData = QueryDelegatorValidatorsResponse,>({
    request,
    options
  }: UseDelegatorValidatorsQuery<TData>) => {
    return useQuery<QueryDelegatorValidatorsResponse, Error, TData>(["delegatorValidatorsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.delegatorValidators(request);
    }, options);
  };
  const useDelegatorWithdrawAddress = <TData = QueryDelegatorWithdrawAddressResponse,>({
    request,
    options
  }: UseDelegatorWithdrawAddressQuery<TData>) => {
    return useQuery<QueryDelegatorWithdrawAddressResponse, Error, TData>(["delegatorWithdrawAddressQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.delegatorWithdrawAddress(request);
    }, options);
  };
  const useCommunityPool = <TData = QueryCommunityPoolResponse,>({
    request,
    options
  }: UseCommunityPoolQuery<TData>) => {
    return useQuery<QueryCommunityPoolResponse, Error, TData>(["communityPoolQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.communityPool(request);
    }, options);
  };
  return {
    /** Params queries params of the distribution module. */useParams,
    /** ValidatorOutstandingRewards queries rewards of a validator address. */useValidatorOutstandingRewards,
    /** ValidatorCommission queries accumulated commission for a validator. */useValidatorCommission,
    /** ValidatorSlashes queries slash events of a validator. */useValidatorSlashes,
    /** DelegationRewards queries the total rewards accrued by a delegation. */useDelegationRewards,
    /**
     * DelegationTotalRewards queries the total rewards accrued by a each
     * validator.
     */
    useDelegationTotalRewards,
    /** DelegatorValidators queries the validators of a delegator. */useDelegatorValidators,
    /** DelegatorWithdrawAddress queries withdraw address of a delegator. */useDelegatorWithdrawAddress,
    /** CommunityPool queries the community pool coins. */useCommunityPool
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
  class QueryValidatorOutstandingRewardsStore {
    store = new QueryStore<QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse>(queryService?.validatorOutstandingRewards);
    validatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryValidatorCommissionStore {
    store = new QueryStore<QueryValidatorCommissionRequest, QueryValidatorCommissionResponse>(queryService?.validatorCommission);
    validatorCommission(request: QueryValidatorCommissionRequest) {
      return this.store.getData(request);
    }
  }
  class QueryValidatorSlashesStore {
    store = new QueryStore<QueryValidatorSlashesRequest, QueryValidatorSlashesResponse>(queryService?.validatorSlashes);
    validatorSlashes(request: QueryValidatorSlashesRequest) {
      return this.store.getData(request);
    }
  }
  class QueryDelegationRewardsStore {
    store = new QueryStore<QueryDelegationRewardsRequest, QueryDelegationRewardsResponse>(queryService?.delegationRewards);
    delegationRewards(request: QueryDelegationRewardsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryDelegationTotalRewardsStore {
    store = new QueryStore<QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse>(queryService?.delegationTotalRewards);
    delegationTotalRewards(request: QueryDelegationTotalRewardsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryDelegatorValidatorsStore {
    store = new QueryStore<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>(queryService?.delegatorValidators);
    delegatorValidators(request: QueryDelegatorValidatorsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryDelegatorWithdrawAddressStore {
    store = new QueryStore<QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse>(queryService?.delegatorWithdrawAddress);
    delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest) {
      return this.store.getData(request);
    }
  }
  class QueryCommunityPoolStore {
    store = new QueryStore<QueryCommunityPoolRequest, QueryCommunityPoolResponse>(queryService?.communityPool);
    communityPool(request: QueryCommunityPoolRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Params queries params of the distribution module. */QueryParamsStore,
    /** ValidatorOutstandingRewards queries rewards of a validator address. */QueryValidatorOutstandingRewardsStore,
    /** ValidatorCommission queries accumulated commission for a validator. */QueryValidatorCommissionStore,
    /** ValidatorSlashes queries slash events of a validator. */QueryValidatorSlashesStore,
    /** DelegationRewards queries the total rewards accrued by a delegation. */QueryDelegationRewardsStore,
    /**
     * DelegationTotalRewards queries the total rewards accrued by a each
     * validator.
     */
    QueryDelegationTotalRewardsStore,
    /** DelegatorValidators queries the validators of a delegator. */QueryDelegatorValidatorsStore,
    /** DelegatorWithdrawAddress queries withdraw address of a delegator. */QueryDelegatorWithdrawAddressStore,
    /** CommunityPool queries the community pool coins. */QueryCommunityPoolStore
  };
};