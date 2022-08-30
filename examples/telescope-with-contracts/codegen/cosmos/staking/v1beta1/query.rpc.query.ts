import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Validator, DelegationResponse, UnbondingDelegation, RedelegationResponse, HistoricalInfo, Pool, Params } from "./staking";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryValidatorsRequest, QueryValidatorsResponse, QueryValidatorRequest, QueryValidatorResponse, QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse, QueryDelegationRequest, QueryDelegationResponse, QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, QueryRedelegationsRequest, QueryRedelegationsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse, QueryHistoricalInfoRequest, QueryHistoricalInfoResponse, QueryPoolRequest, QueryPoolResponse, QueryParamsRequest, QueryParamsResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse>;
  /*Validators queries all validators that match the given status.*/

  validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse>;
  /*Validator queries validator info for given validator address.*/

  validatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse>;
  /*ValidatorDelegations queries delegate info for given validator.*/

  validatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponse>;
  /*ValidatorUnbondingDelegations queries unbonding delegations of a validator.*/

  delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse>;
  /*Delegation queries delegate info for given validator delegator pair.*/

  unbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse>;
  /*UnbondingDelegation queries unbonding info for given validator delegator
  pair.*/

  delegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse>;
  /*DelegatorDelegations queries all delegations of a given delegator address.*/

  delegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponse>;
  /*DelegatorUnbondingDelegations queries all unbonding delegations of a given
  delegator address.*/

  redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse>;
  /*Redelegations queries redelegations of given address.*/

  delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
  /*DelegatorValidators queries all validators info for given delegator
  address.*/

  delegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse>;
  /*DelegatorValidator queries validator info for given delegator validator
  pair.*/

  historicalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse>;
  /*HistoricalInfo queries the historical info for given height.*/

  pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
  /*Pool queries the pool info.*/

  params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
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

  validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse> {
    const data = QueryValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validators", data);
    return promise.then(data => QueryValidatorsResponse.decode(new _m0.Reader(data)));
  }

  validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse> {
    const data = QueryValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validator", data);
    return promise.then(data => QueryValidatorResponse.decode(new _m0.Reader(data)));
  }

  validatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse> {
    const data = QueryValidatorDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorDelegations", data);
    return promise.then(data => QueryValidatorDelegationsResponse.decode(new _m0.Reader(data)));
  }

  validatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponse> {
    const data = QueryValidatorUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorUnbondingDelegations", data);
    return promise.then(data => QueryValidatorUnbondingDelegationsResponse.decode(new _m0.Reader(data)));
  }

  delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse> {
    const data = QueryDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Delegation", data);
    return promise.then(data => QueryDelegationResponse.decode(new _m0.Reader(data)));
  }

  unbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse> {
    const data = QueryUnbondingDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "UnbondingDelegation", data);
    return promise.then(data => QueryUnbondingDelegationResponse.decode(new _m0.Reader(data)));
  }

  delegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse> {
    const data = QueryDelegatorDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorDelegations", data);
    return promise.then(data => QueryDelegatorDelegationsResponse.decode(new _m0.Reader(data)));
  }

  delegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponse> {
    const data = QueryDelegatorUnbondingDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorUnbondingDelegations", data);
    return promise.then(data => QueryDelegatorUnbondingDelegationsResponse.decode(new _m0.Reader(data)));
  }

  redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse> {
    const data = QueryRedelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Redelegations", data);
    return promise.then(data => QueryRedelegationsResponse.decode(new _m0.Reader(data)));
  }

  delegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidators", data);
    return promise.then(data => QueryDelegatorValidatorsResponse.decode(new _m0.Reader(data)));
  }

  delegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse> {
    const data = QueryDelegatorValidatorRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidator", data);
    return promise.then(data => QueryDelegatorValidatorResponse.decode(new _m0.Reader(data)));
  }

  historicalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse> {
    const data = QueryHistoricalInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "HistoricalInfo", data);
    return promise.then(data => QueryHistoricalInfoResponse.decode(new _m0.Reader(data)));
  }

  pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Pool", data);
    return promise.then(data => QueryPoolResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

}