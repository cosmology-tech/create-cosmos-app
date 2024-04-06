//@ts-nocheck
import { Action, ActionSDKType, ClaimRecord, ClaimRecordSDKType } from "./claim";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import { LCDClient } from "@cosmology/lcd";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceRequestSDKType, QueryModuleAccountBalanceResponse, QueryModuleAccountBalanceResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryClaimRecordRequest, QueryClaimRecordRequestSDKType, QueryClaimRecordResponse, QueryClaimRecordResponseSDKType, QueryClaimableForActionRequest, QueryClaimableForActionRequestSDKType, QueryClaimableForActionResponse, QueryClaimableForActionResponseSDKType, QueryTotalClaimableRequest, QueryTotalClaimableRequestSDKType, QueryTotalClaimableResponse, QueryTotalClaimableResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* ModuleAccountBalance */
  moduleAccountBalance = async (_params: QueryModuleAccountBalanceRequest = {}): Promise<QueryModuleAccountBalanceResponseSDKType> => {
    const endpoint = `osmosis/claim/v1beta1/module_account_balance`;
    return await this.req.get<QueryModuleAccountBalanceResponseSDKType>(endpoint);
  };
  /* Params */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const endpoint = `osmosis/claim/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  };
  /* ClaimRecord */
  claimRecord = async (params: QueryClaimRecordRequest): Promise<QueryClaimRecordResponseSDKType> => {
    const endpoint = `osmosis/claim/v1beta1/claim_record/${params.address}`;
    return await this.req.get<QueryClaimRecordResponseSDKType>(endpoint);
  };
  /* ClaimableForAction */
  claimableForAction = async (params: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponseSDKType> => {
    const endpoint = `osmosis/claim/v1beta1/claimable_for_action/${params.address}/${params.action}`;
    return await this.req.get<QueryClaimableForActionResponseSDKType>(endpoint);
  };
  /* TotalClaimable */
  totalClaimable = async (params: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponseSDKType> => {
    const endpoint = `osmosis/claim/v1beta1/total_claimable/${params.address}`;
    return await this.req.get<QueryTotalClaimableResponseSDKType>(endpoint);
  };
}