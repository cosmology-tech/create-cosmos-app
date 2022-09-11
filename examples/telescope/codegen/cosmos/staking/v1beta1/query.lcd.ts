import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Validator, DelegationResponse, UnbondingDelegation, RedelegationResponse, HistoricalInfo, Pool, Params } from "./staking";
import { LCDClient } from "@osmonauts/lcd";
import { setPaginationParams } from "@osmonauts/helpers";
import { QueryValidatorsRequest, QueryValidatorsResponse, QueryValidatorRequest, QueryValidatorResponse, QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse, QueryDelegationRequest, QueryDelegationResponse, QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, QueryRedelegationsRequest, QueryRedelegationsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse, QueryHistoricalInfoRequest, QueryHistoricalInfoResponse, QueryPoolRequest, QueryPoolResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
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

  /* Validators queries all validators that match the given status. */
  async validators(params: QueryValidatorsRequest): Promise<QueryValidatorsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.status !== "undefined") {
      options.params.status = params.status;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/staking/v1beta1/validators`;
    return await this.request<QueryValidatorsResponse>(endpoint, options);
  }

  /* Validator queries validator info for given validator address. */
  async validator(params: QueryValidatorRequest): Promise<QueryValidatorResponse> {
    const endpoint = `cosmos/staking/v1beta1/validators/${params.validatorAddr}`;
    return await this.request<QueryValidatorResponse>(endpoint);
  }

  /* ValidatorDelegations queries delegate info for given validator. */
  async validatorDelegations(params: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/staking/v1beta1/validators/${params.validatorAddr}/delegations`;
    return await this.request<QueryValidatorDelegationsResponse>(endpoint, options);
  }

  /* ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
  async validatorUnbondingDelegations(params: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/staking/v1beta1/validators/${params.validatorAddr}/unbonding_delegations`;
    return await this.request<QueryValidatorUnbondingDelegationsResponse>(endpoint, options);
  }

  /* Delegation queries delegate info for given validator delegator pair. */
  async delegation(params: QueryDelegationRequest): Promise<QueryDelegationResponse> {
    const endpoint = `cosmos/staking/v1beta1/validators/${params.validatorAddr}delegations/${params.delegatorAddr}`;
    return await this.request<QueryDelegationResponse>(endpoint);
  }

  /* UnbondingDelegation queries unbonding info for given validator delegator
  pair. */
  async unbondingDelegation(params: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse> {
    const endpoint = `cosmos/staking/v1beta1/validators/${params.validatorAddr}/delegations/${params.delegatorAddr}/unbonding_delegation`;
    return await this.request<QueryUnbondingDelegationResponse>(endpoint);
  }

  /* DelegatorDelegations queries all delegations of a given delegator address. */
  async delegatorDelegations(params: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/staking/v1beta1/delegations/${params.delegatorAddr}`;
    return await this.request<QueryDelegatorDelegationsResponse>(endpoint, options);
  }

  /* DelegatorUnbondingDelegations queries all unbonding delegations of a given
  delegator address. */
  async delegatorUnbondingDelegations(params: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/staking/v1beta1/delegators/${params.delegatorAddr}/unbonding_delegations`;
    return await this.request<QueryDelegatorUnbondingDelegationsResponse>(endpoint, options);
  }

  /* Redelegations queries redelegations of given address. */
  async redelegations(params: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.srcValidatorAddr !== "undefined") {
      options.params.src_validator_addr = params.srcValidatorAddr;
    }

    if (typeof params?.dstValidatorAddr !== "undefined") {
      options.params.dst_validator_addr = params.dstValidatorAddr;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/staking/v1beta1/delegators/${params.delegatorAddr}/redelegations`;
    return await this.request<QueryRedelegationsResponse>(endpoint, options);
  }

  /* DelegatorValidators queries all validators info for given delegator
  address. */
  async delegatorValidators(params: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/staking/v1beta1/delegators/${params.delegatorAddr}/validators`;
    return await this.request<QueryDelegatorValidatorsResponse>(endpoint, options);
  }

  /* DelegatorValidator queries validator info for given delegator validator
  pair. */
  async delegatorValidator(params: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse> {
    const endpoint = `cosmos/staking/v1beta1/delegators/${params.delegatorAddr}validators/${params.validatorAddr}`;
    return await this.request<QueryDelegatorValidatorResponse>(endpoint);
  }

  /* HistoricalInfo queries the historical info for given height. */
  async historicalInfo(params: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse> {
    const endpoint = `cosmos/staking/v1beta1/historical_info/${params.height}`;
    return await this.request<QueryHistoricalInfoResponse>(endpoint);
  }

  /* Pool queries the pool info. */
  async pool(_params: QueryPoolRequest = {}): Promise<QueryPoolResponse> {
    const endpoint = `cosmos/staking/v1beta1/pool`;
    return await this.request<QueryPoolResponse>(endpoint);
  }

  /* Parameters queries the staking parameters. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `cosmos/staking/v1beta1/params`;
    return await this.request<QueryParamsResponse>(endpoint);
  }

}