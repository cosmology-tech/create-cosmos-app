import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Params, ValidatorOutstandingRewards, ValidatorAccumulatedCommission, ValidatorSlashEvent, DelegationDelegatorReward } from "./distribution";
import { DecCoin } from "../../base/v1beta1/coin";
import { LCDClient } from "@osmonauts/lcd";
import { setPaginationParams } from "@osmonauts/helpers";
import { QueryParamsRequest, QueryParamsResponse, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse, QueryValidatorCommissionRequest, QueryValidatorCommissionResponse, QueryValidatorSlashesRequest, QueryValidatorSlashesResponse, QueryDelegationRewardsRequest, QueryDelegationRewardsResponse, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryCommunityPoolRequest, QueryCommunityPoolResponse } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }

  /* Params queries params of the distribution module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `cosmos/distribution/v1beta1/params`;
    return await this.request<QueryParamsResponse>(endpoint);
  }

  /* ValidatorOutstandingRewards queries rewards of a validator address. */
  async validatorOutstandingRewards(params: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.validatorAddress !== "undefined") {
      options.params.validator_address = params.validatorAddress;
    }

    const endpoint = `cosmos/distribution/v1beta1/validators/${params.validatorAddress}/outstanding_rewards`;
    return await this.request<QueryValidatorOutstandingRewardsResponse>(endpoint, options);
  }

  /* ValidatorCommission queries accumulated commission for a validator. */
  async validatorCommission(params: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.validatorAddress !== "undefined") {
      options.params.validator_address = params.validatorAddress;
    }

    const endpoint = `cosmos/distribution/v1beta1/validators/${params.validatorAddress}/commission`;
    return await this.request<QueryValidatorCommissionResponse>(endpoint, options);
  }

  /* ValidatorSlashes queries slash events of a validator. */
  async validatorSlashes(params: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.validatorAddress !== "undefined") {
      options.params.validator_address = params.validatorAddress;
    }

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
    return await this.request<QueryValidatorSlashesResponse>(endpoint, options);
  }

  /* DelegationRewards queries the total rewards accrued by a delegation. */
  async delegationRewards(params: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.delegatorAddress !== "undefined") {
      options.params.delegator_address = params.delegatorAddress;
    }

    if (typeof params?.validatorAddress !== "undefined") {
      options.params.validator_address = params.validatorAddress;
    }

    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegatorAddress}rewards/${params.validatorAddress}`;
    return await this.request<QueryDelegationRewardsResponse>(endpoint, options);
  }

  /* DelegationTotalRewards queries the total rewards accrued by a each
  validator. */
  async delegationTotalRewards(params: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.delegatorAddress !== "undefined") {
      options.params.delegator_address = params.delegatorAddress;
    }

    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegatorAddress}/rewards`;
    return await this.request<QueryDelegationTotalRewardsResponse>(endpoint, options);
  }

  /* DelegatorValidators queries the validators of a delegator. */
  async delegatorValidators(params: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.delegatorAddress !== "undefined") {
      options.params.delegator_address = params.delegatorAddress;
    }

    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegatorAddress}/validators`;
    return await this.request<QueryDelegatorValidatorsResponse>(endpoint, options);
  }

  /* DelegatorWithdrawAddress queries withdraw address of a delegator. */
  async delegatorWithdrawAddress(params: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.delegatorAddress !== "undefined") {
      options.params.delegator_address = params.delegatorAddress;
    }

    const endpoint = `cosmos/distribution/v1beta1/delegators/${params.delegatorAddress}/withdraw_address`;
    return await this.request<QueryDelegatorWithdrawAddressResponse>(endpoint, options);
  }

  /* CommunityPool queries the community pool coins. */
  async communityPool(_params: QueryCommunityPoolRequest = {}): Promise<QueryCommunityPoolResponse> {
    const endpoint = `cosmos/distribution/v1beta1/community_pool`;
    return await this.request<QueryCommunityPoolResponse>(endpoint);
  }

}