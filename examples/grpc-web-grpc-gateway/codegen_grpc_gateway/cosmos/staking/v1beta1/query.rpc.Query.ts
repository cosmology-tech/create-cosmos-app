import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Validator, ValidatorSDKType, DelegationResponse, DelegationResponseSDKType, UnbondingDelegation, UnbondingDelegationSDKType, RedelegationResponse, RedelegationResponseSDKType, HistoricalInfo, HistoricalInfoSDKType, Pool, PoolSDKType, Params, ParamsSDKType } from "./staking";
import * as fm from "../../../grpc-gateway";
import { QueryValidatorsRequest, QueryValidatorsRequestSDKType, QueryValidatorsResponse, QueryValidatorsResponseSDKType, QueryValidatorRequest, QueryValidatorRequestSDKType, QueryValidatorResponse, QueryValidatorResponseSDKType, QueryValidatorDelegationsRequest, QueryValidatorDelegationsRequestSDKType, QueryValidatorDelegationsResponse, QueryValidatorDelegationsResponseSDKType, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsRequestSDKType, QueryValidatorUnbondingDelegationsResponse, QueryValidatorUnbondingDelegationsResponseSDKType, QueryDelegationRequest, QueryDelegationRequestSDKType, QueryDelegationResponse, QueryDelegationResponseSDKType, QueryUnbondingDelegationRequest, QueryUnbondingDelegationRequestSDKType, QueryUnbondingDelegationResponse, QueryUnbondingDelegationResponseSDKType, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsRequestSDKType, QueryDelegatorDelegationsResponse, QueryDelegatorDelegationsResponseSDKType, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsRequestSDKType, QueryDelegatorUnbondingDelegationsResponse, QueryDelegatorUnbondingDelegationsResponseSDKType, QueryRedelegationsRequest, QueryRedelegationsRequestSDKType, QueryRedelegationsResponse, QueryRedelegationsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsRequestSDKType, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorValidatorRequest, QueryDelegatorValidatorRequestSDKType, QueryDelegatorValidatorResponse, QueryDelegatorValidatorResponseSDKType, QueryHistoricalInfoRequest, QueryHistoricalInfoRequestSDKType, QueryHistoricalInfoResponse, QueryHistoricalInfoResponseSDKType, QueryPoolRequest, QueryPoolRequestSDKType, QueryPoolResponse, QueryPoolResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export class Query {
  /** Validators queries all validators that match the given status. */
  static validators(request: QueryValidatorsRequest, initRequest?: fm.InitReq): Promise<QueryValidatorsResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/validators?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Validator queries validator info for given validator address. */
  static validator(request: QueryValidatorRequest, initRequest?: fm.InitReq): Promise<QueryValidatorResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${request["validator_addr"]}?${fm.renderURLSearchParams({
      ...request
    }, ["validator_addr"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** ValidatorDelegations queries delegate info for given validator. */
  static validatorDelegations(request: QueryValidatorDelegationsRequest, initRequest?: fm.InitReq): Promise<QueryValidatorDelegationsResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${request["validator_addr"]}/delegations?${fm.renderURLSearchParams({
      ...request
    }, ["validator_addr"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
  static validatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest, initRequest?: fm.InitReq): Promise<QueryValidatorUnbondingDelegationsResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${request["validator_addr"]}/unbonding_delegations?${fm.renderURLSearchParams({
      ...request
    }, ["validator_addr"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Delegation queries delegate info for given validator delegator pair. */
  static delegation(request: QueryDelegationRequest, initRequest?: fm.InitReq): Promise<QueryDelegationResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${request["validator_addr"]}/delegations/{delegator_addr}?${fm.renderURLSearchParams({
      ...request
    }, ["validator_addr"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * UnbondingDelegation queries unbonding info for given validator delegator
   * pair.
   */
  static unbondingDelegation(request: QueryUnbondingDelegationRequest, initRequest?: fm.InitReq): Promise<QueryUnbondingDelegationResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${request["validator_addr"]}/delegations/{delegator_addr}/unbonding_delegation?${fm.renderURLSearchParams({
      ...request
    }, ["validator_addr"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** DelegatorDelegations queries all delegations of a given delegator address. */
  static delegatorDelegations(request: QueryDelegatorDelegationsRequest, initRequest?: fm.InitReq): Promise<QueryDelegatorDelegationsResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/delegations/${request["delegator_addr"]}?${fm.renderURLSearchParams({
      ...request
    }, ["delegator_addr"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * DelegatorUnbondingDelegations queries all unbonding delegations of a given
   * delegator address.
   */
  static delegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest, initRequest?: fm.InitReq): Promise<QueryDelegatorUnbondingDelegationsResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${request["delegator_addr"]}/unbonding_delegations?${fm.renderURLSearchParams({
      ...request
    }, ["delegator_addr"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Redelegations queries redelegations of given address. */
  static redelegations(request: QueryRedelegationsRequest, initRequest?: fm.InitReq): Promise<QueryRedelegationsResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${request["delegator_addr"]}/redelegations?${fm.renderURLSearchParams({
      ...request
    }, ["delegator_addr"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * DelegatorValidators queries all validators info for given delegator
   * address.
   */
  static delegatorValidators(request: QueryDelegatorValidatorsRequest, initRequest?: fm.InitReq): Promise<QueryDelegatorValidatorsResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${request["delegator_addr"]}/validators?${fm.renderURLSearchParams({
      ...request
    }, ["delegator_addr"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * DelegatorValidator queries validator info for given delegator validator
   * pair.
   */
  static delegatorValidator(request: QueryDelegatorValidatorRequest, initRequest?: fm.InitReq): Promise<QueryDelegatorValidatorResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${request["delegator_addr"]}/validators/{validator_addr}?${fm.renderURLSearchParams({
      ...request
    }, ["delegator_addr"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** HistoricalInfo queries the historical info for given height. */
  static historicalInfo(request: QueryHistoricalInfoRequest, initRequest?: fm.InitReq): Promise<QueryHistoricalInfoResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/historical_info/${request["height"]}?${fm.renderURLSearchParams({
      ...request
    }, ["height"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Pool queries the pool info. */
  static pool(request: QueryPoolRequest, initRequest?: fm.InitReq): Promise<QueryPoolResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/pool?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Parameters queries the staking parameters. */
  static params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/cosmos/staking/v1beta1/params?${fm.renderURLSearchParams({
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
  /** Validators queries all validators that match the given status. */
  async validators(req: QueryValidatorsRequest, headers?: HeadersInit): Promise<QueryValidatorsResponse> {
    return Query.validators(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Validator queries validator info for given validator address. */
  async validator(req: QueryValidatorRequest, headers?: HeadersInit): Promise<QueryValidatorResponse> {
    return Query.validator(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** ValidatorDelegations queries delegate info for given validator. */
  async validatorDelegations(req: QueryValidatorDelegationsRequest, headers?: HeadersInit): Promise<QueryValidatorDelegationsResponse> {
    return Query.validatorDelegations(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
  async validatorUnbondingDelegations(req: QueryValidatorUnbondingDelegationsRequest, headers?: HeadersInit): Promise<QueryValidatorUnbondingDelegationsResponse> {
    return Query.validatorUnbondingDelegations(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Delegation queries delegate info for given validator delegator pair. */
  async delegation(req: QueryDelegationRequest, headers?: HeadersInit): Promise<QueryDelegationResponse> {
    return Query.delegation(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * UnbondingDelegation queries unbonding info for given validator delegator
   * pair.
   */
  async unbondingDelegation(req: QueryUnbondingDelegationRequest, headers?: HeadersInit): Promise<QueryUnbondingDelegationResponse> {
    return Query.unbondingDelegation(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** DelegatorDelegations queries all delegations of a given delegator address. */
  async delegatorDelegations(req: QueryDelegatorDelegationsRequest, headers?: HeadersInit): Promise<QueryDelegatorDelegationsResponse> {
    return Query.delegatorDelegations(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * DelegatorUnbondingDelegations queries all unbonding delegations of a given
   * delegator address.
   */
  async delegatorUnbondingDelegations(req: QueryDelegatorUnbondingDelegationsRequest, headers?: HeadersInit): Promise<QueryDelegatorUnbondingDelegationsResponse> {
    return Query.delegatorUnbondingDelegations(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Redelegations queries redelegations of given address. */
  async redelegations(req: QueryRedelegationsRequest, headers?: HeadersInit): Promise<QueryRedelegationsResponse> {
    return Query.redelegations(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * DelegatorValidators queries all validators info for given delegator
   * address.
   */
  async delegatorValidators(req: QueryDelegatorValidatorsRequest, headers?: HeadersInit): Promise<QueryDelegatorValidatorsResponse> {
    return Query.delegatorValidators(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * DelegatorValidator queries validator info for given delegator validator
   * pair.
   */
  async delegatorValidator(req: QueryDelegatorValidatorRequest, headers?: HeadersInit): Promise<QueryDelegatorValidatorResponse> {
    return Query.delegatorValidator(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** HistoricalInfo queries the historical info for given height. */
  async historicalInfo(req: QueryHistoricalInfoRequest, headers?: HeadersInit): Promise<QueryHistoricalInfoResponse> {
    return Query.historicalInfo(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Pool queries the pool info. */
  async pool(req: QueryPoolRequest, headers?: HeadersInit): Promise<QueryPoolResponse> {
    return Query.pool(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Parameters queries the staking parameters. */
  async params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.params(req, {
      headers,
      pathPrefix: this.url
    });
  }
}