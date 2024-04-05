//@ts-nocheck
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsSDKType } from "./params";
import { SuperfluidAssetType, SuperfluidAssetTypeSDKType, SuperfluidAsset, SuperfluidAssetSDKType, OsmoEquivalentMultiplierRecord, OsmoEquivalentMultiplierRecordSDKType, SuperfluidDelegationRecord, SuperfluidDelegationRecordSDKType } from "./superfluid";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { SyntheticLock, SyntheticLockSDKType } from "../lockup/lock";
import { DelegationResponse, DelegationResponseSDKType } from "../../cosmos/staking/v1beta1/staking";
import { TxRpc } from "../../types";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, AssetTypeRequest, AssetTypeRequestSDKType, AssetTypeResponse, AssetTypeResponseSDKType, AllAssetsRequest, AllAssetsRequestSDKType, AllAssetsResponse, AllAssetsResponseSDKType, AssetMultiplierRequest, AssetMultiplierRequestSDKType, AssetMultiplierResponse, AssetMultiplierResponseSDKType, AllIntermediaryAccountsRequest, AllIntermediaryAccountsRequestSDKType, AllIntermediaryAccountsResponse, AllIntermediaryAccountsResponseSDKType, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountRequestSDKType, ConnectedIntermediaryAccountResponse, ConnectedIntermediaryAccountResponseSDKType, QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomRequestSDKType, QueryTotalDelegationByValidatorForDenomResponse, QueryTotalDelegationByValidatorForDenomResponseSDKType, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsRequestSDKType, TotalSuperfluidDelegationsResponse, TotalSuperfluidDelegationsResponseSDKType, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountRequestSDKType, SuperfluidDelegationAmountResponse, SuperfluidDelegationAmountResponseSDKType, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorRequestSDKType, SuperfluidDelegationsByDelegatorResponse, SuperfluidDelegationsByDelegatorResponseSDKType, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorRequestSDKType, SuperfluidUndelegationsByDelegatorResponse, SuperfluidUndelegationsByDelegatorResponseSDKType, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomRequestSDKType, SuperfluidDelegationsByValidatorDenomResponse, SuperfluidDelegationsByValidatorDenomResponseSDKType, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType, QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorRequestSDKType, QueryTotalDelegationByDelegatorResponse, QueryTotalDelegationByDelegatorResponseSDKType, QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistRequestSDKType, QueryUnpoolWhitelistResponse, QueryUnpoolWhitelistResponseSDKType } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params returns the total set of superfluid parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * Returns superfluid asset type, whether if it's a native asset or an lp
   * share.
   */
  assetType(request: AssetTypeRequest): Promise<AssetTypeResponse>;
  /** Returns all registered superfluid assets. */
  allAssets(request?: AllAssetsRequest): Promise<AllAssetsResponse>;
  /** Returns the osmo equivalent multiplier used in the most recent epoch. */
  assetMultiplier(request: AssetMultiplierRequest): Promise<AssetMultiplierResponse>;
  /** Returns all superfluid intermediary accounts. */
  allIntermediaryAccounts(request?: AllIntermediaryAccountsRequest): Promise<AllIntermediaryAccountsResponse>;
  /** Returns intermediary account connected to a superfluid staked lock by id */
  connectedIntermediaryAccount(request: ConnectedIntermediaryAccountRequest): Promise<ConnectedIntermediaryAccountResponse>;
  /** Returns the amount of delegations of specific denom for all validators */
  totalDelegationByValidatorForDenom(request: QueryTotalDelegationByValidatorForDenomRequest): Promise<QueryTotalDelegationByValidatorForDenomResponse>;
  /**
   * Returns the total amount of osmo superfluidly staked.
   * Response is denominated in uosmo.
   */
  totalSuperfluidDelegations(request?: TotalSuperfluidDelegationsRequest): Promise<TotalSuperfluidDelegationsResponse>;
  /**
   * Returns the coins superfluid delegated for the delegator, validator, denom
   * triplet
   */
  superfluidDelegationAmount(request: SuperfluidDelegationAmountRequest): Promise<SuperfluidDelegationAmountResponse>;
  /** Returns all the delegated superfluid poistions for a specific delegator. */
  superfluidDelegationsByDelegator(request: SuperfluidDelegationsByDelegatorRequest): Promise<SuperfluidDelegationsByDelegatorResponse>;
  /** Returns all the undelegating superfluid poistions for a specific delegator. */
  superfluidUndelegationsByDelegator(request: SuperfluidUndelegationsByDelegatorRequest): Promise<SuperfluidUndelegationsByDelegatorResponse>;
  /**
   * Returns all the superfluid positions of a specific denom delegated to one
   * validator
   */
  superfluidDelegationsByValidatorDenom(request: SuperfluidDelegationsByValidatorDenomRequest): Promise<SuperfluidDelegationsByValidatorDenomResponse>;
  /**
   * Returns the amount of a specific denom delegated to a specific validator
   * This is labeled an estimate, because the way it calculates the amount can
   * lead rounding errors from the true delegated amount
   */
  estimateSuperfluidDelegatedAmountByValidatorDenom(request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
  /** Returns the specified delegations for a specific delegator */
  totalDelegationByDelegator(request: QueryTotalDelegationByDelegatorRequest): Promise<QueryTotalDelegationByDelegatorResponse>;
  /** Returns a list of whitelisted pool ids to unpool. */
  unpoolWhitelist(request?: QueryUnpoolWhitelistRequest): Promise<QueryUnpoolWhitelistResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Params returns the total set of superfluid parameters. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* Returns superfluid asset type, whether if it's a native asset or an lp
   share. */
  assetType = async (request: AssetTypeRequest): Promise<AssetTypeResponse> => {
    const data = AssetTypeRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "AssetType", data);
    return promise.then(data => AssetTypeResponse.decode(new BinaryReader(data)));
  };
  /* Returns all registered superfluid assets. */
  allAssets = async (request: AllAssetsRequest = {}): Promise<AllAssetsResponse> => {
    const data = AllAssetsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "AllAssets", data);
    return promise.then(data => AllAssetsResponse.decode(new BinaryReader(data)));
  };
  /* Returns the osmo equivalent multiplier used in the most recent epoch. */
  assetMultiplier = async (request: AssetMultiplierRequest): Promise<AssetMultiplierResponse> => {
    const data = AssetMultiplierRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "AssetMultiplier", data);
    return promise.then(data => AssetMultiplierResponse.decode(new BinaryReader(data)));
  };
  /* Returns all superfluid intermediary accounts. */
  allIntermediaryAccounts = async (request: AllIntermediaryAccountsRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<AllIntermediaryAccountsResponse> => {
    const data = AllIntermediaryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "AllIntermediaryAccounts", data);
    return promise.then(data => AllIntermediaryAccountsResponse.decode(new BinaryReader(data)));
  };
  /* Returns intermediary account connected to a superfluid staked lock by id */
  connectedIntermediaryAccount = async (request: ConnectedIntermediaryAccountRequest): Promise<ConnectedIntermediaryAccountResponse> => {
    const data = ConnectedIntermediaryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "ConnectedIntermediaryAccount", data);
    return promise.then(data => ConnectedIntermediaryAccountResponse.decode(new BinaryReader(data)));
  };
  /* Returns the amount of delegations of specific denom for all validators */
  totalDelegationByValidatorForDenom = async (request: QueryTotalDelegationByValidatorForDenomRequest): Promise<QueryTotalDelegationByValidatorForDenomResponse> => {
    const data = QueryTotalDelegationByValidatorForDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "TotalDelegationByValidatorForDenom", data);
    return promise.then(data => QueryTotalDelegationByValidatorForDenomResponse.decode(new BinaryReader(data)));
  };
  /* Returns the total amount of osmo superfluidly staked.
   Response is denominated in uosmo. */
  totalSuperfluidDelegations = async (request: TotalSuperfluidDelegationsRequest = {}): Promise<TotalSuperfluidDelegationsResponse> => {
    const data = TotalSuperfluidDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "TotalSuperfluidDelegations", data);
    return promise.then(data => TotalSuperfluidDelegationsResponse.decode(new BinaryReader(data)));
  };
  /* Returns the coins superfluid delegated for the delegator, validator, denom
   triplet */
  superfluidDelegationAmount = async (request: SuperfluidDelegationAmountRequest): Promise<SuperfluidDelegationAmountResponse> => {
    const data = SuperfluidDelegationAmountRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidDelegationAmount", data);
    return promise.then(data => SuperfluidDelegationAmountResponse.decode(new BinaryReader(data)));
  };
  /* Returns all the delegated superfluid poistions for a specific delegator. */
  superfluidDelegationsByDelegator = async (request: SuperfluidDelegationsByDelegatorRequest): Promise<SuperfluidDelegationsByDelegatorResponse> => {
    const data = SuperfluidDelegationsByDelegatorRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidDelegationsByDelegator", data);
    return promise.then(data => SuperfluidDelegationsByDelegatorResponse.decode(new BinaryReader(data)));
  };
  /* Returns all the undelegating superfluid poistions for a specific delegator. */
  superfluidUndelegationsByDelegator = async (request: SuperfluidUndelegationsByDelegatorRequest): Promise<SuperfluidUndelegationsByDelegatorResponse> => {
    const data = SuperfluidUndelegationsByDelegatorRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidUndelegationsByDelegator", data);
    return promise.then(data => SuperfluidUndelegationsByDelegatorResponse.decode(new BinaryReader(data)));
  };
  /* Returns all the superfluid positions of a specific denom delegated to one
   validator */
  superfluidDelegationsByValidatorDenom = async (request: SuperfluidDelegationsByValidatorDenomRequest): Promise<SuperfluidDelegationsByValidatorDenomResponse> => {
    const data = SuperfluidDelegationsByValidatorDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "SuperfluidDelegationsByValidatorDenom", data);
    return promise.then(data => SuperfluidDelegationsByValidatorDenomResponse.decode(new BinaryReader(data)));
  };
  /* Returns the amount of a specific denom delegated to a specific validator
   This is labeled an estimate, because the way it calculates the amount can
   lead rounding errors from the true delegated amount */
  estimateSuperfluidDelegatedAmountByValidatorDenom = async (request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse> => {
    const data = EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "EstimateSuperfluidDelegatedAmountByValidatorDenom", data);
    return promise.then(data => EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.decode(new BinaryReader(data)));
  };
  /* Returns the specified delegations for a specific delegator */
  totalDelegationByDelegator = async (request: QueryTotalDelegationByDelegatorRequest): Promise<QueryTotalDelegationByDelegatorResponse> => {
    const data = QueryTotalDelegationByDelegatorRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "TotalDelegationByDelegator", data);
    return promise.then(data => QueryTotalDelegationByDelegatorResponse.decode(new BinaryReader(data)));
  };
  /* Returns a list of whitelisted pool ids to unpool. */
  unpoolWhitelist = async (request: QueryUnpoolWhitelistRequest = {}): Promise<QueryUnpoolWhitelistResponse> => {
    const data = QueryUnpoolWhitelistRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.superfluid.Query", "UnpoolWhitelist", data);
    return promise.then(data => QueryUnpoolWhitelistResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    assetType(request: AssetTypeRequest): Promise<AssetTypeResponse> {
      return queryService.assetType(request);
    },
    allAssets(request?: AllAssetsRequest): Promise<AllAssetsResponse> {
      return queryService.allAssets(request);
    },
    assetMultiplier(request: AssetMultiplierRequest): Promise<AssetMultiplierResponse> {
      return queryService.assetMultiplier(request);
    },
    allIntermediaryAccounts(request?: AllIntermediaryAccountsRequest): Promise<AllIntermediaryAccountsResponse> {
      return queryService.allIntermediaryAccounts(request);
    },
    connectedIntermediaryAccount(request: ConnectedIntermediaryAccountRequest): Promise<ConnectedIntermediaryAccountResponse> {
      return queryService.connectedIntermediaryAccount(request);
    },
    totalDelegationByValidatorForDenom(request: QueryTotalDelegationByValidatorForDenomRequest): Promise<QueryTotalDelegationByValidatorForDenomResponse> {
      return queryService.totalDelegationByValidatorForDenom(request);
    },
    totalSuperfluidDelegations(request?: TotalSuperfluidDelegationsRequest): Promise<TotalSuperfluidDelegationsResponse> {
      return queryService.totalSuperfluidDelegations(request);
    },
    superfluidDelegationAmount(request: SuperfluidDelegationAmountRequest): Promise<SuperfluidDelegationAmountResponse> {
      return queryService.superfluidDelegationAmount(request);
    },
    superfluidDelegationsByDelegator(request: SuperfluidDelegationsByDelegatorRequest): Promise<SuperfluidDelegationsByDelegatorResponse> {
      return queryService.superfluidDelegationsByDelegator(request);
    },
    superfluidUndelegationsByDelegator(request: SuperfluidUndelegationsByDelegatorRequest): Promise<SuperfluidUndelegationsByDelegatorResponse> {
      return queryService.superfluidUndelegationsByDelegator(request);
    },
    superfluidDelegationsByValidatorDenom(request: SuperfluidDelegationsByValidatorDenomRequest): Promise<SuperfluidDelegationsByValidatorDenomResponse> {
      return queryService.superfluidDelegationsByValidatorDenom(request);
    },
    estimateSuperfluidDelegatedAmountByValidatorDenom(request: EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse> {
      return queryService.estimateSuperfluidDelegatedAmountByValidatorDenom(request);
    },
    totalDelegationByDelegator(request: QueryTotalDelegationByDelegatorRequest): Promise<QueryTotalDelegationByDelegatorResponse> {
      return queryService.totalDelegationByDelegator(request);
    },
    unpoolWhitelist(request?: QueryUnpoolWhitelistRequest): Promise<QueryUnpoolWhitelistResponse> {
      return queryService.unpoolWhitelist(request);
    }
  };
};