import { Action, ActionSDKType, ClaimRecord, ClaimRecordSDKType } from "./claim";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import * as fm from "../../../grpc-gateway";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceRequestSDKType, QueryModuleAccountBalanceResponse, QueryModuleAccountBalanceResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryClaimRecordRequest, QueryClaimRecordRequestSDKType, QueryClaimRecordResponse, QueryClaimRecordResponseSDKType, QueryClaimableForActionRequest, QueryClaimableForActionRequestSDKType, QueryClaimableForActionResponse, QueryClaimableForActionResponseSDKType, QueryTotalClaimableRequest, QueryTotalClaimableRequestSDKType, QueryTotalClaimableResponse, QueryTotalClaimableResponseSDKType } from "./query";
export class Query {
  static moduleAccountBalance(request: QueryModuleAccountBalanceRequest, initRequest?: fm.InitReq): Promise<QueryModuleAccountBalanceResponse> {
    return fm.fetchReq(`/osmosis/claim/v1beta1/module_account_balance?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/osmosis/claim/v1beta1/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static claimRecord(request: QueryClaimRecordRequest, initRequest?: fm.InitReq): Promise<QueryClaimRecordResponse> {
    return fm.fetchReq(`/osmosis/claim/v1beta1/claim_record/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static claimableForAction(request: QueryClaimableForActionRequest, initRequest?: fm.InitReq): Promise<QueryClaimableForActionResponse> {
    return fm.fetchReq(`/osmosis/claim/v1beta1/claimable_for_action/${request["address"]}/{action}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static totalClaimable(request: QueryTotalClaimableRequest, initRequest?: fm.InitReq): Promise<QueryTotalClaimableResponse> {
    return fm.fetchReq(`/osmosis/claim/v1beta1/total_claimable/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
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
  async moduleAccountBalance(req: QueryModuleAccountBalanceRequest, headers?: HeadersInit): Promise<QueryModuleAccountBalanceResponse> {
    return Query.moduleAccountBalance(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.params(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async claimRecord(req: QueryClaimRecordRequest, headers?: HeadersInit): Promise<QueryClaimRecordResponse> {
    return Query.claimRecord(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async claimableForAction(req: QueryClaimableForActionRequest, headers?: HeadersInit): Promise<QueryClaimableForActionResponse> {
    return Query.claimableForAction(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async totalClaimable(req: QueryTotalClaimableRequest, headers?: HeadersInit): Promise<QueryTotalClaimableResponse> {
    return Query.totalClaimable(req, {
      headers,
      pathPrefix: this.url
    });
  }
}