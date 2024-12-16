import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsSDKType, ValidatorOutstandingRewards, ValidatorOutstandingRewardsSDKType, ValidatorAccumulatedCommission, ValidatorAccumulatedCommissionSDKType, ValidatorSlashEvent, ValidatorSlashEventSDKType, DelegationDelegatorReward, DelegationDelegatorRewardSDKType } from "./distribution";
import { DecCoin, DecCoinSDKType } from "../../base/v1beta1/coin";
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsRequestSDKType, QueryValidatorOutstandingRewardsResponse, QueryValidatorOutstandingRewardsResponseSDKType, QueryValidatorCommissionRequest, QueryValidatorCommissionRequestSDKType, QueryValidatorCommissionResponse, QueryValidatorCommissionResponseSDKType, QueryValidatorSlashesRequest, QueryValidatorSlashesRequestSDKType, QueryValidatorSlashesResponse, QueryValidatorSlashesResponseSDKType, QueryDelegationRewardsRequest, QueryDelegationRewardsRequestSDKType, QueryDelegationRewardsResponse, QueryDelegationRewardsResponseSDKType, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsRequestSDKType, QueryDelegationTotalRewardsResponse, QueryDelegationTotalRewardsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsRequestSDKType, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressRequestSDKType, QueryDelegatorWithdrawAddressResponse, QueryDelegatorWithdrawAddressResponseSDKType, QueryCommunityPoolRequest, QueryCommunityPoolRequestSDKType, QueryCommunityPoolResponse, QueryCommunityPoolResponseSDKType, ReactiveQueryParamsRequest, ReactiveQueryValidatorOutstandingRewardsRequest, ReactiveQueryValidatorCommissionRequest, ReactiveQueryValidatorSlashesRequest, ReactiveQueryDelegationRewardsRequest, ReactiveQueryDelegationTotalRewardsRequest, ReactiveQueryDelegatorValidatorsRequest, ReactiveQueryDelegatorWithdrawAddressRequest, ReactiveQueryCommunityPoolRequest } from "./query";
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
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.validatorOutstandingRewards = this.validatorOutstandingRewards.bind(this);
    this.validatorCommission = this.validatorCommission.bind(this);
    this.validatorSlashes = this.validatorSlashes.bind(this);
    this.delegationRewards = this.delegationRewards.bind(this);
    this.delegationTotalRewards = this.delegationTotalRewards.bind(this);
    this.delegatorValidators = this.delegatorValidators.bind(this);
    this.delegatorWithdrawAddress = this.delegatorWithdrawAddress.bind(this);
    this.communityPool = this.communityPool.bind(this);
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  validatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse> {
    const data = QueryValidatorOutstandingRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorOutstandingRewards", data);
    return promise.then(data => QueryValidatorOutstandingRewardsResponse.decode(new BinaryReader(data)));
  }
  validatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse> {
    const data = QueryValidatorCommissionRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorCommission", data);
    return promise.then(data => QueryValidatorCommissionResponse.decode(new BinaryReader(data)));
  }
  validatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse> {
    const data = QueryValidatorSlashesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorSlashes", data);
    return promise.then(data => QueryValidatorSlashesResponse.decode(new BinaryReader(data)));
  }
  delegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse> {
    const data = QueryDelegationRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationRewards", data);
    return promise.then(data => QueryDelegationRewardsResponse.decode(new BinaryReader(data)));
  }
  delegationTotalRewards(request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse> {
    const data = QueryDelegationTotalRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationTotalRewards", data);
    return promise.then(data => QueryDelegationTotalRewardsResponse.decode(new BinaryReader(data)));
  }
  delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorValidators", data);
    return promise.then(data => QueryDelegatorValidatorsResponse.decode(new BinaryReader(data)));
  }
  delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse> {
    const data = QueryDelegatorWithdrawAddressRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorWithdrawAddress", data);
    return promise.then(data => QueryDelegatorWithdrawAddressResponse.decode(new BinaryReader(data)));
  }
  communityPool(request: QueryCommunityPoolRequest = {}): Promise<QueryCommunityPoolResponse> {
    const data = QueryCommunityPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "CommunityPool", data);
    return promise.then(data => QueryCommunityPoolResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    validatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse> {
      return queryService.validatorOutstandingRewards(request);
    },
    validatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse> {
      return queryService.validatorCommission(request);
    },
    validatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse> {
      return queryService.validatorSlashes(request);
    },
    delegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse> {
      return queryService.delegationRewards(request);
    },
    delegationTotalRewards(request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse> {
      return queryService.delegationTotalRewards(request);
    },
    delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> {
      return queryService.delegatorValidators(request);
    },
    delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse> {
      return queryService.delegatorWithdrawAddress(request);
    },
    communityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse> {
      return queryService.communityPool(request);
    }
  };
};
export interface UseParamsQuery<TData> extends VueQueryParams<QueryParamsResponse, TData> {
  request?: ReactiveQueryParamsRequest;
}
export interface UseValidatorOutstandingRewardsQuery<TData> extends VueQueryParams<QueryValidatorOutstandingRewardsResponse, TData> {
  request: ReactiveQueryValidatorOutstandingRewardsRequest;
}
export interface UseValidatorCommissionQuery<TData> extends VueQueryParams<QueryValidatorCommissionResponse, TData> {
  request: ReactiveQueryValidatorCommissionRequest;
}
export interface UseValidatorSlashesQuery<TData> extends VueQueryParams<QueryValidatorSlashesResponse, TData> {
  request: ReactiveQueryValidatorSlashesRequest;
}
export interface UseDelegationRewardsQuery<TData> extends VueQueryParams<QueryDelegationRewardsResponse, TData> {
  request: ReactiveQueryDelegationRewardsRequest;
}
export interface UseDelegationTotalRewardsQuery<TData> extends VueQueryParams<QueryDelegationTotalRewardsResponse, TData> {
  request: ReactiveQueryDelegationTotalRewardsRequest;
}
export interface UseDelegatorValidatorsQuery<TData> extends VueQueryParams<QueryDelegatorValidatorsResponse, TData> {
  request: ReactiveQueryDelegatorValidatorsRequest;
}
export interface UseDelegatorWithdrawAddressQuery<TData> extends VueQueryParams<QueryDelegatorWithdrawAddressResponse, TData> {
  request: ReactiveQueryDelegatorWithdrawAddressRequest;
}
export interface UseCommunityPoolQuery<TData> extends VueQueryParams<QueryCommunityPoolResponse, TData> {
  request?: ReactiveQueryCommunityPoolRequest;
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
  const useValidatorOutstandingRewards = <TData = QueryValidatorOutstandingRewardsResponse,>({
    request,
    options
  }: UseValidatorOutstandingRewardsQuery<TData>) => {
    const queryKey = ["validatorOutstandingRewardsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryValidatorOutstandingRewardsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.validatorOutstandingRewards(params);
      },
      ...options
    });
  };
  const useValidatorCommission = <TData = QueryValidatorCommissionResponse,>({
    request,
    options
  }: UseValidatorCommissionQuery<TData>) => {
    const queryKey = ["validatorCommissionQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryValidatorCommissionResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.validatorCommission(params);
      },
      ...options
    });
  };
  const useValidatorSlashes = <TData = QueryValidatorSlashesResponse,>({
    request,
    options
  }: UseValidatorSlashesQuery<TData>) => {
    const queryKey = ["validatorSlashesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryValidatorSlashesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.validatorSlashes(params);
      },
      ...options
    });
  };
  const useDelegationRewards = <TData = QueryDelegationRewardsResponse,>({
    request,
    options
  }: UseDelegationRewardsQuery<TData>) => {
    const queryKey = ["delegationRewardsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDelegationRewardsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.delegationRewards(params);
      },
      ...options
    });
  };
  const useDelegationTotalRewards = <TData = QueryDelegationTotalRewardsResponse,>({
    request,
    options
  }: UseDelegationTotalRewardsQuery<TData>) => {
    const queryKey = ["delegationTotalRewardsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDelegationTotalRewardsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.delegationTotalRewards(params);
      },
      ...options
    });
  };
  const useDelegatorValidators = <TData = QueryDelegatorValidatorsResponse,>({
    request,
    options
  }: UseDelegatorValidatorsQuery<TData>) => {
    const queryKey = ["delegatorValidatorsQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDelegatorValidatorsResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.delegatorValidators(params);
      },
      ...options
    });
  };
  const useDelegatorWithdrawAddress = <TData = QueryDelegatorWithdrawAddressResponse,>({
    request,
    options
  }: UseDelegatorWithdrawAddressQuery<TData>) => {
    const queryKey = ["delegatorWithdrawAddressQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryDelegatorWithdrawAddressResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.delegatorWithdrawAddress(params);
      },
      ...options
    });
  };
  const useCommunityPool = <TData = QueryCommunityPoolResponse,>({
    request,
    options
  }: UseCommunityPoolQuery<TData>) => {
    const queryKey = ["communityPoolQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<QueryCommunityPoolResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.communityPool(params);
      },
      ...options
    });
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