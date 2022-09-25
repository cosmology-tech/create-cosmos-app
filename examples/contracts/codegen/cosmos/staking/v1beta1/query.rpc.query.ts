import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryValidatorsRequest, QueryValidatorsResponse, QueryValidatorsResponseSDKType, QueryValidatorRequest, QueryValidatorResponse, QueryValidatorResponseSDKType, QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse, QueryValidatorDelegationsResponseSDKType, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse, QueryValidatorUnbondingDelegationsResponseSDKType, QueryDelegationRequest, QueryDelegationResponse, QueryDelegationResponseSDKType, QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse, QueryUnbondingDelegationResponseSDKType, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, QueryDelegatorDelegationsResponseSDKType, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, QueryDelegatorUnbondingDelegationsResponseSDKType, QueryRedelegationsRequest, QueryRedelegationsResponse, QueryRedelegationsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse, QueryDelegatorValidatorResponseSDKType, QueryHistoricalInfoRequest, QueryHistoricalInfoResponse, QueryHistoricalInfoResponseSDKType, QueryPoolRequest, QueryPoolResponse, QueryPoolResponseSDKType, QueryParamsRequest, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
/** Query defines the RPC service */

export interface Query {
  validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponseSDKType>;
  /*Validators queries all validators that match the given status.*/

  validator(request: QueryValidatorRequest): Promise<QueryValidatorResponseSDKType>;
  /*Validator queries validator info for given validator address.*/

  validatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponseSDKType>;
  /*ValidatorDelegations queries delegate info for given validator.*/

  validatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponseSDKType>;
  /*ValidatorUnbondingDelegations queries unbonding delegations of a validator.*/

  delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponseSDKType>;
  /*Delegation queries delegate info for given validator delegator pair.*/

  unbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponseSDKType>;
  /*UnbondingDelegation queries unbonding info for given validator delegator
  pair.*/

  delegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponseSDKType>;
  /*DelegatorDelegations queries all delegations of a given delegator address.*/

  delegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponseSDKType>;
  /*DelegatorUnbondingDelegations queries all unbonding delegations of a given
  delegator address.*/

  redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponseSDKType>;
  /*Redelegations queries redelegations of given address.*/

  delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponseSDKType>;
  /*DelegatorValidators queries all validators info for given delegator
  address.*/

  delegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponseSDKType>;
  /*DelegatorValidator queries validator info for given delegator validator
  pair.*/

  historicalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponseSDKType>;
  /*HistoricalInfo queries the historical info for given height.*/

  pool(request?: QueryPoolRequest): Promise<QueryPoolResponseSDKType>;
  /*Pool queries the pool info.*/

  params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
  /*Parameters queries the staking parameters.*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.validators = this.validators.bind(this);
    this.validator = this.validator.bind(this);
    this.validatorDelegations = this.validatorDelegations.bind(this);
    this.validatorUnbondingDelegations = this.validatorUnbondingDelegations.bind(this);
    this.delegation = this.delegation.bind(this);
    this.unbondingDelegation = this.unbondingDelegation.bind(this);
    this.delegatorDelegations = this.delegatorDelegations.bind(this);
    this.delegatorUnbondingDelegations = this.delegatorUnbondingDelegations.bind(this);
    this.redelegations = this.redelegations.bind(this);
    this.delegatorValidators = this.delegatorValidators.bind(this);
    this.delegatorValidator = this.delegatorValidator.bind(this);
    this.historicalInfo = this.historicalInfo.bind(this);
    this.pool = this.pool.bind(this);
    this.params = this.params.bind(this);
  }

  validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponseSDKType> {
    const data = QueryValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validators", data);
    return promise.then(data => QueryValidatorsResponse.decode(new _m0.Reader(data)));
  }

  validator(request: QueryValidatorRequest): Promise<QueryValidatorResponseSDKType> {
    const data = QueryValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validator", data);
    return promise.then(data => QueryValidatorResponse.decode(new _m0.Reader(data)));
  }

  validatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponseSDKType> {
    const data = QueryValidatorDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorDelegations", data);
    return promise.then(data => QueryValidatorDelegationsResponse.decode(new _m0.Reader(data)));
  }

  validatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponseSDKType> {
    const data = QueryValidatorUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorUnbondingDelegations", data);
    return promise.then(data => QueryValidatorUnbondingDelegationsResponse.decode(new _m0.Reader(data)));
  }

  delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponseSDKType> {
    const data = QueryDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Delegation", data);
    return promise.then(data => QueryDelegationResponse.decode(new _m0.Reader(data)));
  }

  unbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponseSDKType> {
    const data = QueryUnbondingDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "UnbondingDelegation", data);
    return promise.then(data => QueryUnbondingDelegationResponse.decode(new _m0.Reader(data)));
  }

  delegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponseSDKType> {
    const data = QueryDelegatorDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorDelegations", data);
    return promise.then(data => QueryDelegatorDelegationsResponse.decode(new _m0.Reader(data)));
  }

  delegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponseSDKType> {
    const data = QueryDelegatorUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorUnbondingDelegations", data);
    return promise.then(data => QueryDelegatorUnbondingDelegationsResponse.decode(new _m0.Reader(data)));
  }

  redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponseSDKType> {
    const data = QueryRedelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Redelegations", data);
    return promise.then(data => QueryRedelegationsResponse.decode(new _m0.Reader(data)));
  }

  delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponseSDKType> {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidators", data);
    return promise.then(data => QueryDelegatorValidatorsResponse.decode(new _m0.Reader(data)));
  }

  delegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponseSDKType> {
    const data = QueryDelegatorValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidator", data);
    return promise.then(data => QueryDelegatorValidatorResponse.decode(new _m0.Reader(data)));
  }

  historicalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponseSDKType> {
    const data = QueryHistoricalInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "HistoricalInfo", data);
    return promise.then(data => QueryHistoricalInfoResponse.decode(new _m0.Reader(data)));
  }

  pool(request: QueryPoolRequest = {}): Promise<QueryPoolResponseSDKType> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Pool", data);
    return promise.then(data => QueryPoolResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponseSDKType> {
      return queryService.validators(request);
    },

    validator(request: QueryValidatorRequest): Promise<QueryValidatorResponseSDKType> {
      return queryService.validator(request);
    },

    validatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponseSDKType> {
      return queryService.validatorDelegations(request);
    },

    validatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponseSDKType> {
      return queryService.validatorUnbondingDelegations(request);
    },

    delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponseSDKType> {
      return queryService.delegation(request);
    },

    unbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponseSDKType> {
      return queryService.unbondingDelegation(request);
    },

    delegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponseSDKType> {
      return queryService.delegatorDelegations(request);
    },

    delegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponseSDKType> {
      return queryService.delegatorUnbondingDelegations(request);
    },

    redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponseSDKType> {
      return queryService.redelegations(request);
    },

    delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponseSDKType> {
      return queryService.delegatorValidators(request);
    },

    delegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponseSDKType> {
      return queryService.delegatorValidator(request);
    },

    historicalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponseSDKType> {
      return queryService.historicalInfo(request);
    },

    pool(request?: QueryPoolRequest): Promise<QueryPoolResponseSDKType> {
      return queryService.pool(request);
    },

    params(request?: QueryParamsRequest): Promise<QueryParamsResponseSDKType> {
      return queryService.params(request);
    }

  };
};