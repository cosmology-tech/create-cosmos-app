import { Action, ActionSDKType, ClaimRecord, ClaimRecordSDKType } from "./claim";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import { LCDClient } from "@osmonauts/lcd";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceRequestSDKType, QueryModuleAccountBalanceResponse, QueryModuleAccountBalanceResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryClaimRecordRequest, QueryClaimRecordRequestSDKType, QueryClaimRecordResponse, QueryClaimRecordResponseSDKType, QueryClaimableForActionRequest, QueryClaimableForActionRequestSDKType, QueryClaimableForActionResponse, QueryClaimableForActionResponseSDKType, QueryTotalClaimableRequest, QueryTotalClaimableRequestSDKType, QueryTotalClaimableResponse, QueryTotalClaimableResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.moduleAccountBalance = this.moduleAccountBalance.bind(this);
    this.params = this.params.bind(this);
    this.claimRecord = this.claimRecord.bind(this);
    this.claimableForAction = this.claimableForAction.bind(this);
    this.totalClaimable = this.totalClaimable.bind(this);
  }
  /* ModuleAccountBalance */
  async moduleAccountBalance(_params: QueryModuleAccountBalanceRequest = {}): Promise<QueryModuleAccountBalanceResponseSDKType> {
    const endpoint = `osmosis/claim/v1beta1/module_account_balance`;
    return await this.req.get<QueryModuleAccountBalanceResponseSDKType>(endpoint);
  }
  /* Params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `osmosis/claim/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* ClaimRecord */
  async claimRecord(params: QueryClaimRecordRequest): Promise<QueryClaimRecordResponseSDKType> {
    const endpoint = `osmosis/claim/v1beta1/claim_record/${params.address}`;
    return await this.req.get<QueryClaimRecordResponseSDKType>(endpoint);
  }
  /* ClaimableForAction */
  async claimableForAction(params: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponseSDKType> {
    const endpoint = `osmosis/claim/v1beta1/claimable_for_action/${params.address}/${params.action}`;
    return await this.req.get<QueryClaimableForActionResponseSDKType>(endpoint);
  }
  /* TotalClaimable */
  async totalClaimable(params: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponseSDKType> {
    const endpoint = `osmosis/claim/v1beta1/total_claimable/${params.address}`;
    return await this.req.get<QueryTotalClaimableResponseSDKType>(endpoint);
  }
}