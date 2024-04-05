//@ts-nocheck
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Validator, ValidatorSDKType, DelegationResponse, DelegationResponseSDKType, UnbondingDelegation, UnbondingDelegationSDKType, RedelegationResponse, RedelegationResponseSDKType, HistoricalInfo, HistoricalInfoSDKType, Pool, PoolSDKType, Params, ParamsSDKType } from "./staking";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryValidatorsRequest, QueryValidatorsRequestSDKType, QueryValidatorsResponse, QueryValidatorsResponseSDKType, QueryValidatorRequest, QueryValidatorRequestSDKType, QueryValidatorResponse, QueryValidatorResponseSDKType, QueryValidatorDelegationsRequest, QueryValidatorDelegationsRequestSDKType, QueryValidatorDelegationsResponse, QueryValidatorDelegationsResponseSDKType, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsRequestSDKType, QueryValidatorUnbondingDelegationsResponse, QueryValidatorUnbondingDelegationsResponseSDKType, QueryDelegationRequest, QueryDelegationRequestSDKType, QueryDelegationResponse, QueryDelegationResponseSDKType, QueryUnbondingDelegationRequest, QueryUnbondingDelegationRequestSDKType, QueryUnbondingDelegationResponse, QueryUnbondingDelegationResponseSDKType, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsRequestSDKType, QueryDelegatorDelegationsResponse, QueryDelegatorDelegationsResponseSDKType, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsRequestSDKType, QueryDelegatorUnbondingDelegationsResponse, QueryDelegatorUnbondingDelegationsResponseSDKType, QueryRedelegationsRequest, QueryRedelegationsRequestSDKType, QueryRedelegationsResponse, QueryRedelegationsResponseSDKType, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsRequestSDKType, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorsResponseSDKType, QueryDelegatorValidatorRequest, QueryDelegatorValidatorRequestSDKType, QueryDelegatorValidatorResponse, QueryDelegatorValidatorResponseSDKType, QueryHistoricalInfoRequest, QueryHistoricalInfoRequestSDKType, QueryHistoricalInfoResponse, QueryHistoricalInfoResponseSDKType, QueryPoolRequest, QueryPoolRequestSDKType, QueryPoolResponse, QueryPoolResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Validators queries all validators that match the given status. */
  validators = async (params: QueryValidatorsRequest): Promise<QueryValidatorsResponseSDKType> => {
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
    return await this.req.get<QueryValidatorsResponseSDKType>(endpoint, options);
  };
  /* Validator queries validator info for given validator address. */
  validator = async (params: QueryValidatorRequest): Promise<QueryValidatorResponseSDKType> => {
    const endpoint = `cosmos/staking/v1beta1/validators/${params.validatorAddr}`;
    return await this.req.get<QueryValidatorResponseSDKType>(endpoint);
  };
  /* ValidatorDelegations queries delegate info for given validator. */
  validatorDelegations = async (params: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/staking/v1beta1/validators/${params.validatorAddr}/delegations`;
    return await this.req.get<QueryValidatorDelegationsResponseSDKType>(endpoint, options);
  };
  /* ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
  validatorUnbondingDelegations = async (params: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/staking/v1beta1/validators/${params.validatorAddr}/unbonding_delegations`;
    return await this.req.get<QueryValidatorUnbondingDelegationsResponseSDKType>(endpoint, options);
  };
  /* Delegation queries delegate info for given validator delegator pair. */
  delegation = async (params: QueryDelegationRequest): Promise<QueryDelegationResponseSDKType> => {
    const endpoint = `cosmos/staking/v1beta1/validators/${params.validatorAddr}/delegations/${params.delegatorAddr}`;
    return await this.req.get<QueryDelegationResponseSDKType>(endpoint);
  };
  /* UnbondingDelegation queries unbonding info for given validator delegator
   pair. */
  unbondingDelegation = async (params: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponseSDKType> => {
    const endpoint = `cosmos/staking/v1beta1/validators/${params.validatorAddr}/delegations/${params.delegatorAddr}/unbonding_delegation`;
    return await this.req.get<QueryUnbondingDelegationResponseSDKType>(endpoint);
  };
  /* DelegatorDelegations queries all delegations of a given delegator address. */
  delegatorDelegations = async (params: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/staking/v1beta1/delegations/${params.delegatorAddr}`;
    return await this.req.get<QueryDelegatorDelegationsResponseSDKType>(endpoint, options);
  };
  /* DelegatorUnbondingDelegations queries all unbonding delegations of a given
   delegator address. */
  delegatorUnbondingDelegations = async (params: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/staking/v1beta1/delegators/${params.delegatorAddr}/unbonding_delegations`;
    return await this.req.get<QueryDelegatorUnbondingDelegationsResponseSDKType>(endpoint, options);
  };
  /* Redelegations queries redelegations of given address. */
  redelegations = async (params: QueryRedelegationsRequest): Promise<QueryRedelegationsResponseSDKType> => {
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
    return await this.req.get<QueryRedelegationsResponseSDKType>(endpoint, options);
  };
  /* DelegatorValidators queries all validators info for given delegator
   address. */
  delegatorValidators = async (params: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/staking/v1beta1/delegators/${params.delegatorAddr}/validators`;
    return await this.req.get<QueryDelegatorValidatorsResponseSDKType>(endpoint, options);
  };
  /* DelegatorValidator queries validator info for given delegator validator
   pair. */
  delegatorValidator = async (params: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponseSDKType> => {
    const endpoint = `cosmos/staking/v1beta1/delegators/${params.delegatorAddr}/validators/${params.validatorAddr}`;
    return await this.req.get<QueryDelegatorValidatorResponseSDKType>(endpoint);
  };
  /* HistoricalInfo queries the historical info for given height. */
  historicalInfo = async (params: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponseSDKType> => {
    const endpoint = `cosmos/staking/v1beta1/historical_info/${params.height}`;
    return await this.req.get<QueryHistoricalInfoResponseSDKType>(endpoint);
  };
  /* Pool queries the pool info. */
  pool = async (_params: QueryPoolRequest = {}): Promise<QueryPoolResponseSDKType> => {
    const endpoint = `cosmos/staking/v1beta1/pool`;
    return await this.req.get<QueryPoolResponseSDKType>(endpoint);
  };
  /* Parameters queries the staking parameters. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const endpoint = `cosmos/staking/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  };
}