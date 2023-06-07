import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsSDKType, ValidatorOutstandingRewards, ValidatorOutstandingRewardsSDKType, ValidatorAccumulatedCommission, ValidatorAccumulatedCommissionSDKType, ValidatorSlashEvent, ValidatorSlashEventSDKType, DelegationDelegatorReward, DelegationDelegatorRewardSDKType } from "./distribution";
import { DecCoin, DecCoinSDKType } from "../../base/v1beta1/coin";
import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsRequestSDKType, QueryValidatorOutstandingRewardsResponse, QueryValidatorOutstandingRewardsResponseSDKType, QueryValidatorCommissionRequest, QueryValidatorCommissionRequestSDKType, QueryValidatorCommissionResponse, QueryValidatorCommissionResponseSDKType, QueryValidatorSlashesRequest, QueryValidatorSlashesRequestSDKType, QueryValidatorSlashesResponse, QueryValidatorSlashesResponseSDKType, QueryDelegationRewardsRequest, QueryDelegationRewardsRequestSDKType, QueryDelegationRewardsResponse, QueryDelegationRewardsResponseSDKType, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsRequestSDKType, QueryDelegationTotalRewardsResponse, QueryDelegationTotalRewardsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsRequestSDKType, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressRequestSDKType, QueryDelegatorWithdrawAddressResponse, QueryDelegatorWithdrawAddressResponseSDKType, QueryCommunityPoolRequest, QueryCommunityPoolRequestSDKType, QueryCommunityPoolResponse, QueryCommunityPoolResponseSDKType } from "./query";
export class Query {
  /** Params queries params of the distribution module. */
  static params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/cosmos/distribution/v1beta1/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** ValidatorOutstandingRewards queries rewards of a validator address. */
  static validatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest, initRequest?: fm.InitReq): Promise<QueryValidatorOutstandingRewardsResponse> {
    return fm.fetchReq(`/cosmos/distribution/v1beta1/validators/${request["validator_address"]}/outstanding_rewards?${fm.renderURLSearchParams({
      ...request
    }, ["validator_address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** ValidatorCommission queries accumulated commission for a validator. */
  static validatorCommission(request: QueryValidatorCommissionRequest, initRequest?: fm.InitReq): Promise<QueryValidatorCommissionResponse> {
    return fm.fetchReq(`/cosmos/distribution/v1beta1/validators/${request["validator_address"]}/commission?${fm.renderURLSearchParams({
      ...request
    }, ["validator_address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** ValidatorSlashes queries slash events of a validator. */
  static validatorSlashes(request: QueryValidatorSlashesRequest, initRequest?: fm.InitReq): Promise<QueryValidatorSlashesResponse> {
    return fm.fetchReq(`/cosmos/distribution/v1beta1/validators/${request["validator_address"]}/slashes?${fm.renderURLSearchParams({
      ...request
    }, ["validator_address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** DelegationRewards queries the total rewards accrued by a delegation. */
  static delegationRewards(request: QueryDelegationRewardsRequest, initRequest?: fm.InitReq): Promise<QueryDelegationRewardsResponse> {
    return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${request["delegator_address"]}/rewards/{validator_address}?${fm.renderURLSearchParams({
      ...request
    }, ["delegator_address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * DelegationTotalRewards queries the total rewards accrued by a each
   * validator.
   */
  static delegationTotalRewards(request: QueryDelegationTotalRewardsRequest, initRequest?: fm.InitReq): Promise<QueryDelegationTotalRewardsResponse> {
    return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${request["delegator_address"]}/rewards?${fm.renderURLSearchParams({
      ...request
    }, ["delegator_address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** DelegatorValidators queries the validators of a delegator. */
  static delegatorValidators(request: QueryDelegatorValidatorsRequest, initRequest?: fm.InitReq): Promise<QueryDelegatorValidatorsResponse> {
    return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${request["delegator_address"]}/validators?${fm.renderURLSearchParams({
      ...request
    }, ["delegator_address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
  static delegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest, initRequest?: fm.InitReq): Promise<QueryDelegatorWithdrawAddressResponse> {
    return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${request["delegator_address"]}/withdraw_address?${fm.renderURLSearchParams({
      ...request
    }, ["delegator_address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** CommunityPool queries the community pool coins. */
  static communityPool(request: QueryCommunityPoolRequest, initRequest?: fm.InitReq): Promise<QueryCommunityPoolResponse> {
    return fm.fetchReq(`/cosmos/distribution/v1beta1/community_pool?${fm.renderURLSearchParams({
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
  /** Params queries params of the distribution module. */
  async params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.params(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** ValidatorOutstandingRewards queries rewards of a validator address. */
  async validatorOutstandingRewards(req: QueryValidatorOutstandingRewardsRequest, headers?: HeadersInit): Promise<QueryValidatorOutstandingRewardsResponse> {
    return Query.validatorOutstandingRewards(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** ValidatorCommission queries accumulated commission for a validator. */
  async validatorCommission(req: QueryValidatorCommissionRequest, headers?: HeadersInit): Promise<QueryValidatorCommissionResponse> {
    return Query.validatorCommission(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** ValidatorSlashes queries slash events of a validator. */
  async validatorSlashes(req: QueryValidatorSlashesRequest, headers?: HeadersInit): Promise<QueryValidatorSlashesResponse> {
    return Query.validatorSlashes(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** DelegationRewards queries the total rewards accrued by a delegation. */
  async delegationRewards(req: QueryDelegationRewardsRequest, headers?: HeadersInit): Promise<QueryDelegationRewardsResponse> {
    return Query.delegationRewards(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * DelegationTotalRewards queries the total rewards accrued by a each
   * validator.
   */
  async delegationTotalRewards(req: QueryDelegationTotalRewardsRequest, headers?: HeadersInit): Promise<QueryDelegationTotalRewardsResponse> {
    return Query.delegationTotalRewards(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** DelegatorValidators queries the validators of a delegator. */
  async delegatorValidators(req: QueryDelegatorValidatorsRequest, headers?: HeadersInit): Promise<QueryDelegatorValidatorsResponse> {
    return Query.delegatorValidators(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
  async delegatorWithdrawAddress(req: QueryDelegatorWithdrawAddressRequest, headers?: HeadersInit): Promise<QueryDelegatorWithdrawAddressResponse> {
    return Query.delegatorWithdrawAddress(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** CommunityPool queries the community pool coins. */
  async communityPool(req: QueryCommunityPoolRequest, headers?: HeadersInit): Promise<QueryCommunityPoolResponse> {
    return Query.communityPool(req, {
      headers,
      pathPrefix: this.url
    });
  }
}