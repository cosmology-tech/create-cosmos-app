import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore } from "../../../mobx";
import { QueryValidatorsRequest, QueryValidatorsResponse, QueryValidatorRequest, QueryValidatorResponse, QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse, QueryDelegationRequest, QueryDelegationResponse, QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, QueryRedelegationsRequest, QueryRedelegationsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse, QueryHistoricalInfoRequest, QueryHistoricalInfoResponse, QueryPoolRequest, QueryPoolResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Validators queries all validators that match the given status. */
  validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse>;
  /** Validator queries validator info for given validator address. */
  validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse>;
  /** ValidatorDelegations queries delegate info for given validator. */
  validatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse>;
  /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
  validatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponse>;
  /** Delegation queries delegate info for given validator delegator pair. */
  delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse>;
  /**
   * UnbondingDelegation queries unbonding info for given validator delegator
   * pair.
   */
  unbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse>;
  /** DelegatorDelegations queries all delegations of a given delegator address. */
  delegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse>;
  /**
   * DelegatorUnbondingDelegations queries all unbonding delegations of a given
   * delegator address.
   */
  delegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponse>;
  /** Redelegations queries redelegations of given address. */
  redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse>;
  /**
   * DelegatorValidators queries all validators info for given delegator
   * address.
   */
  delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
  /**
   * DelegatorValidator queries validator info for given delegator validator
   * pair.
   */
  delegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse>;
  /** HistoricalInfo queries the historical info for given height. */
  historicalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse>;
  /** Pool queries the pool info. */
  pool(request?: QueryPoolRequest): Promise<QueryPoolResponse>;
  /** Parameters queries the staking parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Validators queries all validators that match the given status. */
  validators = async (request: QueryValidatorsRequest): Promise<QueryValidatorsResponse> => {
    const data = QueryValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validators", data);
    return promise.then(data => QueryValidatorsResponse.decode(new BinaryReader(data)));
  };
  /* Validator queries validator info for given validator address. */
  validator = async (request: QueryValidatorRequest): Promise<QueryValidatorResponse> => {
    const data = QueryValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validator", data);
    return promise.then(data => QueryValidatorResponse.decode(new BinaryReader(data)));
  };
  /* ValidatorDelegations queries delegate info for given validator. */
  validatorDelegations = async (request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse> => {
    const data = QueryValidatorDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorDelegations", data);
    return promise.then(data => QueryValidatorDelegationsResponse.decode(new BinaryReader(data)));
  };
  /* ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
  validatorUnbondingDelegations = async (request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponse> => {
    const data = QueryValidatorUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorUnbondingDelegations", data);
    return promise.then(data => QueryValidatorUnbondingDelegationsResponse.decode(new BinaryReader(data)));
  };
  /* Delegation queries delegate info for given validator delegator pair. */
  delegation = async (request: QueryDelegationRequest): Promise<QueryDelegationResponse> => {
    const data = QueryDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Delegation", data);
    return promise.then(data => QueryDelegationResponse.decode(new BinaryReader(data)));
  };
  /* UnbondingDelegation queries unbonding info for given validator delegator
   pair. */
  unbondingDelegation = async (request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse> => {
    const data = QueryUnbondingDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "UnbondingDelegation", data);
    return promise.then(data => QueryUnbondingDelegationResponse.decode(new BinaryReader(data)));
  };
  /* DelegatorDelegations queries all delegations of a given delegator address. */
  delegatorDelegations = async (request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse> => {
    const data = QueryDelegatorDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorDelegations", data);
    return promise.then(data => QueryDelegatorDelegationsResponse.decode(new BinaryReader(data)));
  };
  /* DelegatorUnbondingDelegations queries all unbonding delegations of a given
   delegator address. */
  delegatorUnbondingDelegations = async (request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponse> => {
    const data = QueryDelegatorUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorUnbondingDelegations", data);
    return promise.then(data => QueryDelegatorUnbondingDelegationsResponse.decode(new BinaryReader(data)));
  };
  /* Redelegations queries redelegations of given address. */
  redelegations = async (request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse> => {
    const data = QueryRedelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Redelegations", data);
    return promise.then(data => QueryRedelegationsResponse.decode(new BinaryReader(data)));
  };
  /* DelegatorValidators queries all validators info for given delegator
   address. */
  delegatorValidators = async (request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> => {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidators", data);
    return promise.then(data => QueryDelegatorValidatorsResponse.decode(new BinaryReader(data)));
  };
  /* DelegatorValidator queries validator info for given delegator validator
   pair. */
  delegatorValidator = async (request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse> => {
    const data = QueryDelegatorValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidator", data);
    return promise.then(data => QueryDelegatorValidatorResponse.decode(new BinaryReader(data)));
  };
  /* HistoricalInfo queries the historical info for given height. */
  historicalInfo = async (request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse> => {
    const data = QueryHistoricalInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "HistoricalInfo", data);
    return promise.then(data => QueryHistoricalInfoResponse.decode(new BinaryReader(data)));
  };
  /* Pool queries the pool info. */
  pool = async (request: QueryPoolRequest = {}): Promise<QueryPoolResponse> => {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Pool", data);
    return promise.then(data => QueryPoolResponse.decode(new BinaryReader(data)));
  };
  /* Parameters queries the staking parameters. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse> {
      return queryService.validators(request);
    },
    validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse> {
      return queryService.validator(request);
    },
    validatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse> {
      return queryService.validatorDelegations(request);
    },
    validatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponse> {
      return queryService.validatorUnbondingDelegations(request);
    },
    delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse> {
      return queryService.delegation(request);
    },
    unbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse> {
      return queryService.unbondingDelegation(request);
    },
    delegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse> {
      return queryService.delegatorDelegations(request);
    },
    delegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponse> {
      return queryService.delegatorUnbondingDelegations(request);
    },
    redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse> {
      return queryService.redelegations(request);
    },
    delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> {
      return queryService.delegatorValidators(request);
    },
    delegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse> {
      return queryService.delegatorValidator(request);
    },
    historicalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse> {
      return queryService.historicalInfo(request);
    },
    pool(request?: QueryPoolRequest): Promise<QueryPoolResponse> {
      return queryService.pool(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};
export interface UseValidatorsQuery<TData> extends ReactQueryParams<QueryValidatorsResponse, TData> {
  request: QueryValidatorsRequest;
}
export interface UseValidatorQuery<TData> extends ReactQueryParams<QueryValidatorResponse, TData> {
  request: QueryValidatorRequest;
}
export interface UseValidatorDelegationsQuery<TData> extends ReactQueryParams<QueryValidatorDelegationsResponse, TData> {
  request: QueryValidatorDelegationsRequest;
}
export interface UseValidatorUnbondingDelegationsQuery<TData> extends ReactQueryParams<QueryValidatorUnbondingDelegationsResponse, TData> {
  request: QueryValidatorUnbondingDelegationsRequest;
}
export interface UseDelegationQuery<TData> extends ReactQueryParams<QueryDelegationResponse, TData> {
  request: QueryDelegationRequest;
}
export interface UseUnbondingDelegationQuery<TData> extends ReactQueryParams<QueryUnbondingDelegationResponse, TData> {
  request: QueryUnbondingDelegationRequest;
}
export interface UseDelegatorDelegationsQuery<TData> extends ReactQueryParams<QueryDelegatorDelegationsResponse, TData> {
  request: QueryDelegatorDelegationsRequest;
}
export interface UseDelegatorUnbondingDelegationsQuery<TData> extends ReactQueryParams<QueryDelegatorUnbondingDelegationsResponse, TData> {
  request: QueryDelegatorUnbondingDelegationsRequest;
}
export interface UseRedelegationsQuery<TData> extends ReactQueryParams<QueryRedelegationsResponse, TData> {
  request: QueryRedelegationsRequest;
}
export interface UseDelegatorValidatorsQuery<TData> extends ReactQueryParams<QueryDelegatorValidatorsResponse, TData> {
  request: QueryDelegatorValidatorsRequest;
}
export interface UseDelegatorValidatorQuery<TData> extends ReactQueryParams<QueryDelegatorValidatorResponse, TData> {
  request: QueryDelegatorValidatorRequest;
}
export interface UseHistoricalInfoQuery<TData> extends ReactQueryParams<QueryHistoricalInfoResponse, TData> {
  request: QueryHistoricalInfoRequest;
}
export interface UsePoolQuery<TData> extends ReactQueryParams<QueryPoolResponse, TData> {
  request?: QueryPoolRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
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
  const useValidators = <TData = QueryValidatorsResponse,>({
    request,
    options
  }: UseValidatorsQuery<TData>) => {
    return useQuery<QueryValidatorsResponse, Error, TData>(["validatorsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.validators(request);
    }, options);
  };
  const useValidator = <TData = QueryValidatorResponse,>({
    request,
    options
  }: UseValidatorQuery<TData>) => {
    return useQuery<QueryValidatorResponse, Error, TData>(["validatorQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.validator(request);
    }, options);
  };
  const useValidatorDelegations = <TData = QueryValidatorDelegationsResponse,>({
    request,
    options
  }: UseValidatorDelegationsQuery<TData>) => {
    return useQuery<QueryValidatorDelegationsResponse, Error, TData>(["validatorDelegationsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.validatorDelegations(request);
    }, options);
  };
  const useValidatorUnbondingDelegations = <TData = QueryValidatorUnbondingDelegationsResponse,>({
    request,
    options
  }: UseValidatorUnbondingDelegationsQuery<TData>) => {
    return useQuery<QueryValidatorUnbondingDelegationsResponse, Error, TData>(["validatorUnbondingDelegationsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.validatorUnbondingDelegations(request);
    }, options);
  };
  const useDelegation = <TData = QueryDelegationResponse,>({
    request,
    options
  }: UseDelegationQuery<TData>) => {
    return useQuery<QueryDelegationResponse, Error, TData>(["delegationQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.delegation(request);
    }, options);
  };
  const useUnbondingDelegation = <TData = QueryUnbondingDelegationResponse,>({
    request,
    options
  }: UseUnbondingDelegationQuery<TData>) => {
    return useQuery<QueryUnbondingDelegationResponse, Error, TData>(["unbondingDelegationQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.unbondingDelegation(request);
    }, options);
  };
  const useDelegatorDelegations = <TData = QueryDelegatorDelegationsResponse,>({
    request,
    options
  }: UseDelegatorDelegationsQuery<TData>) => {
    return useQuery<QueryDelegatorDelegationsResponse, Error, TData>(["delegatorDelegationsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.delegatorDelegations(request);
    }, options);
  };
  const useDelegatorUnbondingDelegations = <TData = QueryDelegatorUnbondingDelegationsResponse,>({
    request,
    options
  }: UseDelegatorUnbondingDelegationsQuery<TData>) => {
    return useQuery<QueryDelegatorUnbondingDelegationsResponse, Error, TData>(["delegatorUnbondingDelegationsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.delegatorUnbondingDelegations(request);
    }, options);
  };
  const useRedelegations = <TData = QueryRedelegationsResponse,>({
    request,
    options
  }: UseRedelegationsQuery<TData>) => {
    return useQuery<QueryRedelegationsResponse, Error, TData>(["redelegationsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.redelegations(request);
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
  const useDelegatorValidator = <TData = QueryDelegatorValidatorResponse,>({
    request,
    options
  }: UseDelegatorValidatorQuery<TData>) => {
    return useQuery<QueryDelegatorValidatorResponse, Error, TData>(["delegatorValidatorQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.delegatorValidator(request);
    }, options);
  };
  const useHistoricalInfo = <TData = QueryHistoricalInfoResponse,>({
    request,
    options
  }: UseHistoricalInfoQuery<TData>) => {
    return useQuery<QueryHistoricalInfoResponse, Error, TData>(["historicalInfoQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.historicalInfo(request);
    }, options);
  };
  const usePool = <TData = QueryPoolResponse,>({
    request,
    options
  }: UsePoolQuery<TData>) => {
    return useQuery<QueryPoolResponse, Error, TData>(["poolQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.pool(request);
    }, options);
  };
  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<QueryParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  return {
    /** Validators queries all validators that match the given status. */useValidators,
    /** Validator queries validator info for given validator address. */useValidator,
    /** ValidatorDelegations queries delegate info for given validator. */useValidatorDelegations,
    /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */useValidatorUnbondingDelegations,
    /** Delegation queries delegate info for given validator delegator pair. */useDelegation,
    /**
     * UnbondingDelegation queries unbonding info for given validator delegator
     * pair.
     */
    useUnbondingDelegation,
    /** DelegatorDelegations queries all delegations of a given delegator address. */useDelegatorDelegations,
    /**
     * DelegatorUnbondingDelegations queries all unbonding delegations of a given
     * delegator address.
     */
    useDelegatorUnbondingDelegations,
    /** Redelegations queries redelegations of given address. */useRedelegations,
    /**
     * DelegatorValidators queries all validators info for given delegator
     * address.
     */
    useDelegatorValidators,
    /**
     * DelegatorValidator queries validator info for given delegator validator
     * pair.
     */
    useDelegatorValidator,
    /** HistoricalInfo queries the historical info for given height. */useHistoricalInfo,
    /** Pool queries the pool info. */usePool,
    /** Parameters queries the staking parameters. */useParams
  };
};
export const createRpcQueryMobxStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryValidatorsStore {
    store = new QueryStore<QueryValidatorsRequest, QueryValidatorsResponse>(queryService?.validators);
    validators(request: QueryValidatorsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryValidatorStore {
    store = new QueryStore<QueryValidatorRequest, QueryValidatorResponse>(queryService?.validator);
    validator(request: QueryValidatorRequest) {
      return this.store.getData(request);
    }
  }
  class QueryValidatorDelegationsStore {
    store = new QueryStore<QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse>(queryService?.validatorDelegations);
    validatorDelegations(request: QueryValidatorDelegationsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryValidatorUnbondingDelegationsStore {
    store = new QueryStore<QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse>(queryService?.validatorUnbondingDelegations);
    validatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryDelegationStore {
    store = new QueryStore<QueryDelegationRequest, QueryDelegationResponse>(queryService?.delegation);
    delegation(request: QueryDelegationRequest) {
      return this.store.getData(request);
    }
  }
  class QueryUnbondingDelegationStore {
    store = new QueryStore<QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse>(queryService?.unbondingDelegation);
    unbondingDelegation(request: QueryUnbondingDelegationRequest) {
      return this.store.getData(request);
    }
  }
  class QueryDelegatorDelegationsStore {
    store = new QueryStore<QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse>(queryService?.delegatorDelegations);
    delegatorDelegations(request: QueryDelegatorDelegationsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryDelegatorUnbondingDelegationsStore {
    store = new QueryStore<QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse>(queryService?.delegatorUnbondingDelegations);
    delegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryRedelegationsStore {
    store = new QueryStore<QueryRedelegationsRequest, QueryRedelegationsResponse>(queryService?.redelegations);
    redelegations(request: QueryRedelegationsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryDelegatorValidatorsStore {
    store = new QueryStore<QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse>(queryService?.delegatorValidators);
    delegatorValidators(request: QueryDelegatorValidatorsRequest) {
      return this.store.getData(request);
    }
  }
  class QueryDelegatorValidatorStore {
    store = new QueryStore<QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse>(queryService?.delegatorValidator);
    delegatorValidator(request: QueryDelegatorValidatorRequest) {
      return this.store.getData(request);
    }
  }
  class QueryHistoricalInfoStore {
    store = new QueryStore<QueryHistoricalInfoRequest, QueryHistoricalInfoResponse>(queryService?.historicalInfo);
    historicalInfo(request: QueryHistoricalInfoRequest) {
      return this.store.getData(request);
    }
  }
  class QueryPoolStore {
    store = new QueryStore<QueryPoolRequest, QueryPoolResponse>(queryService?.pool);
    pool(request: QueryPoolRequest) {
      return this.store.getData(request);
    }
  }
  class QueryParamsStore {
    store = new QueryStore<QueryParamsRequest, QueryParamsResponse>(queryService?.params);
    params(request: QueryParamsRequest) {
      return this.store.getData(request);
    }
  }
  return {
    /** Validators queries all validators that match the given status. */QueryValidatorsStore,
    /** Validator queries validator info for given validator address. */QueryValidatorStore,
    /** ValidatorDelegations queries delegate info for given validator. */QueryValidatorDelegationsStore,
    /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */QueryValidatorUnbondingDelegationsStore,
    /** Delegation queries delegate info for given validator delegator pair. */QueryDelegationStore,
    /**
     * UnbondingDelegation queries unbonding info for given validator delegator
     * pair.
     */
    QueryUnbondingDelegationStore,
    /** DelegatorDelegations queries all delegations of a given delegator address. */QueryDelegatorDelegationsStore,
    /**
     * DelegatorUnbondingDelegations queries all unbonding delegations of a given
     * delegator address.
     */
    QueryDelegatorUnbondingDelegationsStore,
    /** Redelegations queries redelegations of given address. */QueryRedelegationsStore,
    /**
     * DelegatorValidators queries all validators info for given delegator
     * address.
     */
    QueryDelegatorValidatorsStore,
    /**
     * DelegatorValidator queries validator info for given delegator validator
     * pair.
     */
    QueryDelegatorValidatorStore,
    /** HistoricalInfo queries the historical info for given height. */QueryHistoricalInfoStore,
    /** Pool queries the pool info. */QueryPoolStore,
    /** Parameters queries the staking parameters. */QueryParamsStore
  };
};