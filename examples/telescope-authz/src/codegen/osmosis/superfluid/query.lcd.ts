import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { SuperfluidAssetType, SuperfluidAssetTypeSDKType, SuperfluidAsset, SuperfluidAssetSDKType, OsmoEquivalentMultiplierRecord, OsmoEquivalentMultiplierRecordSDKType, SuperfluidDelegationRecord, SuperfluidDelegationRecordSDKType } from "./superfluid";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock, SyntheticLockSDKType } from "../lockup/lock";
import { DelegationResponse, DelegationResponseSDKType } from "../../cosmos/staking/v1beta1/staking";
import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, AssetTypeRequest, AssetTypeRequestSDKType, AssetTypeResponse, AssetTypeResponseSDKType, AllAssetsRequest, AllAssetsRequestSDKType, AllAssetsResponse, AllAssetsResponseSDKType, AssetMultiplierRequest, AssetMultiplierRequestSDKType, AssetMultiplierResponse, AssetMultiplierResponseSDKType, AllIntermediaryAccountsRequest, AllIntermediaryAccountsRequestSDKType, AllIntermediaryAccountsResponse, AllIntermediaryAccountsResponseSDKType, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountRequestSDKType, ConnectedIntermediaryAccountResponse, ConnectedIntermediaryAccountResponseSDKType, QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomRequestSDKType, QueryTotalDelegationByValidatorForDenomResponse, QueryTotalDelegationByValidatorForDenomResponseSDKType, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsRequestSDKType, TotalSuperfluidDelegationsResponse, TotalSuperfluidDelegationsResponseSDKType, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountRequestSDKType, SuperfluidDelegationAmountResponse, SuperfluidDelegationAmountResponseSDKType, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorRequestSDKType, SuperfluidDelegationsByDelegatorResponse, SuperfluidDelegationsByDelegatorResponseSDKType, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorRequestSDKType, SuperfluidUndelegationsByDelegatorResponse, SuperfluidUndelegationsByDelegatorResponseSDKType, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomRequestSDKType, SuperfluidDelegationsByValidatorDenomResponse, SuperfluidDelegationsByValidatorDenomResponseSDKType, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType, QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorRequestSDKType, QueryTotalDelegationByDelegatorResponse, QueryTotalDelegationByDelegatorResponseSDKType, QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistRequestSDKType, QueryUnpoolWhitelistResponse, QueryUnpoolWhitelistResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Params returns the total set of superfluid parameters. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const endpoint = `osmosis/superfluid/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  };
  /* Returns superfluid asset type, whether if it's a native asset or an lp
   share. */
  assetType = async (params: AssetTypeRequest): Promise<AssetTypeResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `osmosis/superfluid/v1beta1/asset_type`;
    return await this.req.get<AssetTypeResponseSDKType>(endpoint, options);
  };
  /* Returns all registered superfluid assets. */
  allAssets = async (_params: AllAssetsRequest = {}): Promise<AllAssetsResponseSDKType> => {
    const endpoint = `osmosis/superfluid/v1beta1/all_assets`;
    return await this.req.get<AllAssetsResponseSDKType>(endpoint);
  };
  /* Returns the osmo equivalent multiplier used in the most recent epoch. */
  assetMultiplier = async (params: AssetMultiplierRequest): Promise<AssetMultiplierResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `osmosis/superfluid/v1beta1/asset_multiplier`;
    return await this.req.get<AssetMultiplierResponseSDKType>(endpoint, options);
  };
  /* Returns all superfluid intermediary accounts. */
  allIntermediaryAccounts = async (params: AllIntermediaryAccountsRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<AllIntermediaryAccountsResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `osmosis/superfluid/v1beta1/all_intermediary_accounts`;
    return await this.req.get<AllIntermediaryAccountsResponseSDKType>(endpoint, options);
  };
  /* Returns intermediary account connected to a superfluid staked lock by id */
  connectedIntermediaryAccount = async (params: ConnectedIntermediaryAccountRequest): Promise<ConnectedIntermediaryAccountResponseSDKType> => {
    const endpoint = `osmosis/superfluid/v1beta1/connected_intermediary_account/${params.lockId}`;
    return await this.req.get<ConnectedIntermediaryAccountResponseSDKType>(endpoint);
  };
  /* Returns the total amount of osmo superfluidly staked.
   Response is denominated in uosmo. */
  totalSuperfluidDelegations = async (_params: TotalSuperfluidDelegationsRequest = {}): Promise<TotalSuperfluidDelegationsResponseSDKType> => {
    const endpoint = `osmosis/superfluid/v1beta1/all_superfluid_delegations`;
    return await this.req.get<TotalSuperfluidDelegationsResponseSDKType>(endpoint);
  };
  /* Returns the coins superfluid delegated for the delegator, validator, denom
   triplet */
  superfluidDelegationAmount = async (params: SuperfluidDelegationAmountRequest): Promise<SuperfluidDelegationAmountResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.delegatorAddress !== "undefined") {
      options.params.delegator_address = params.delegatorAddress;
    }
    if (typeof params?.validatorAddress !== "undefined") {
      options.params.validator_address = params.validatorAddress;
    }
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `osmosis/superfluid/v1beta1/superfluid_delegation_amount`;
    return await this.req.get<SuperfluidDelegationAmountResponseSDKType>(endpoint, options);
  };
  /* Returns all the delegated superfluid poistions for a specific delegator. */
  superfluidDelegationsByDelegator = async (params: SuperfluidDelegationsByDelegatorRequest): Promise<SuperfluidDelegationsByDelegatorResponseSDKType> => {
    const endpoint = `osmosis/superfluid/v1beta1/superfluid_delegations/${params.delegatorAddress}`;
    return await this.req.get<SuperfluidDelegationsByDelegatorResponseSDKType>(endpoint);
  };
  /* Returns all the undelegating superfluid poistions for a specific delegator. */
  superfluidUndelegationsByDelegator = async (params: SuperfluidUndelegationsByDelegatorRequest): Promise<SuperfluidUndelegationsByDelegatorResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `osmosis/superfluid/v1beta1/superfluid_undelegations_by_delegator/${params.delegatorAddress}`;
    return await this.req.get<SuperfluidUndelegationsByDelegatorResponseSDKType>(endpoint, options);
  };
  /* Returns all the superfluid positions of a specific denom delegated to one
   validator */
  superfluidDelegationsByValidatorDenom = async (params: SuperfluidDelegationsByValidatorDenomRequest): Promise<SuperfluidDelegationsByValidatorDenomResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.validatorAddress !== "undefined") {
      options.params.validator_address = params.validatorAddress;
    }
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `osmosis/superfluid/v1beta1/superfluid_delegations_by_validator_denom`;
    return await this.req.get<SuperfluidDelegationsByValidatorDenomResponseSDKType>(endpoint, options);
  };
  /* Returns the amount of a specific denom delegated to a specific validator
   This is labeled an estimate, because the way it calculates the amount can
   lead rounding errors from the true delegated amount */
  estimateSuperfluidDelegatedAmountByValidatorDenom = async (params: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.validatorAddress !== "undefined") {
      options.params.validator_address = params.validatorAddress;
    }
    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }
    const endpoint = `osmosis/superfluid/v1beta1/estimate_superfluid_delegation_amount_by_validator_denom`;
    return await this.req.get<EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType>(endpoint, options);
  };
  /* Returns the specified delegations for a specific delegator */
  totalDelegationByDelegator = async (params: QueryTotalDelegationByDelegatorRequest): Promise<QueryTotalDelegationByDelegatorResponseSDKType> => {
    const endpoint = `osmosis/superfluid/v1beta1/total_delegation_by_delegator/${params.delegatorAddress}`;
    return await this.req.get<QueryTotalDelegationByDelegatorResponseSDKType>(endpoint);
  };
  /* Returns a list of whitelisted pool ids to unpool. */
  unpoolWhitelist = async (_params: QueryUnpoolWhitelistRequest = {}): Promise<QueryUnpoolWhitelistResponseSDKType> => {
    const endpoint = `osmosis/superfluid/v1beta1/unpool_whitelist`;
    return await this.req.get<QueryUnpoolWhitelistResponseSDKType>(endpoint);
  };
}