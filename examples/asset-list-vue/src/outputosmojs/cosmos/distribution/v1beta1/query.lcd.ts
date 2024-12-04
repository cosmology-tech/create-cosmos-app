import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsSDKType, ValidatorOutstandingRewards, ValidatorOutstandingRewardsSDKType, ValidatorAccumulatedCommission, ValidatorAccumulatedCommissionSDKType, ValidatorSlashEvent, ValidatorSlashEventSDKType, DelegationDelegatorReward, DelegationDelegatorRewardSDKType } from "./distribution";
import { DecCoin, DecCoinSDKType } from "../../base/v1beta1/coin";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsRequestSDKType, QueryValidatorOutstandingRewardsResponse, QueryValidatorOutstandingRewardsResponseSDKType, QueryValidatorCommissionRequest, QueryValidatorCommissionRequestSDKType, QueryValidatorCommissionResponse, QueryValidatorCommissionResponseSDKType, QueryValidatorSlashesRequest, QueryValidatorSlashesRequestSDKType, QueryValidatorSlashesResponse, QueryValidatorSlashesResponseSDKType, QueryDelegationRewardsRequest, QueryDelegationRewardsRequestSDKType, QueryDelegationRewardsResponse, QueryDelegationRewardsResponseSDKType, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsRequestSDKType, QueryDelegationTotalRewardsResponse, QueryDelegationTotalRewardsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsRequestSDKType, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressRequestSDKType, QueryDelegatorWithdrawAddressResponse, QueryDelegatorWithdrawAddressResponseSDKType, QueryCommunityPoolRequest, QueryCommunityPoolRequestSDKType, QueryCommunityPoolResponse, QueryCommunityPoolResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
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
  /* Params queries params of the distribution module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `cosmos/distribution/v1beta1/params`;
    return QueryParamsResponse.fromSDKJSON(await this.req.get<QueryParamsResponseSDKType>(endpoint));
  }
  /* ValidatorOutstandingRewards queries rewards of a validator address. */
  async validatorOutstandingRewards(params: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponseSDKType> {
    const endpoint = `cosmos/distribution/v1beta1/validators/${params.validatorAddress}/outstanding_rewards`;
    return QueryValidatorOutstandingRewardsResponse.fromSDKJSON(await this.req.get<QueryValidatorOutstandingRewardsResponseSDKType>(endpoint));
  }
  /* ValidatorCommission queries accumulated commission for a validator. */
  async validatorCommission(params: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponseSDKType> {
    const endpoint = `cosmos/distribution/v1beta1/validators/${params.validatorAddress}/commission`;
    return QueryValidatorCommissionResponse.fromSDKJSON(await this.req.get<QueryValidatorCommissionResponseSDKType>(endpoint));
  }
  /* ValidatorSlashes queries slash events of a validator. */
  async validatorSlashes(params: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.startingHeight !== "undefined") {
      options.params.starting_height = params.startingHeight;
    }
    if (typeof params?.endingHeight !== "undefined") {
      options.params.ending_height = params.endingHeight;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/distribution/v1beta1/validators/${params.validatorAddress}/slashes`;
    return QueryValidatorSlashesResponse.fromSDKJSON(await this.req.get<QueryValidatorSlashesResponseSDKType>(endpoint, options));
  }
  /* DelegationRewards queries the total rewards accrued by a delegation. */
  async delegationRewards(params: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponseSDKType> {
    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegatorAddress}/rewards/${params.validatorAddress}`;
    return QueryDelegationRewardsResponse.fromSDKJSON(await this.req.get<QueryDelegationRewardsResponseSDKType>(endpoint));
  }
  /* DelegationTotalRewards queries the total rewards accrued by a each
   validator. */
  async delegationTotalRewards(params: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponseSDKType> {
    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegatorAddress}/rewards`;
    return QueryDelegationTotalRewardsResponse.fromSDKJSON(await this.req.get<QueryDelegationTotalRewardsResponseSDKType>(endpoint));
  }
  /* DelegatorValidators queries the validators of a delegator. */
  async delegatorValidators(params: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponseSDKType> {
    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegatorAddress}/validators`;
    return QueryDelegatorValidatorsResponse.fromSDKJSON(await this.req.get<QueryDelegatorValidatorsResponseSDKType>(endpoint));
  }
  /* DelegatorWithdrawAddress queries withdraw address of a delegator. */
  async delegatorWithdrawAddress(params: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponseSDKType> {
    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegatorAddress}/withdraw_address`;
    return QueryDelegatorWithdrawAddressResponse.fromSDKJSON(await this.req.get<QueryDelegatorWithdrawAddressResponseSDKType>(endpoint));
  }
  /* CommunityPool queries the community pool coins. */
  async communityPool(_params: QueryCommunityPoolRequest = {}): Promise<QueryCommunityPoolResponseSDKType> {
    const endpoint = `cosmos/distribution/v1beta1/community_pool`;
    return QueryCommunityPoolResponse.fromSDKJSON(await this.req.get<QueryCommunityPoolResponseSDKType>(endpoint));
  }
}