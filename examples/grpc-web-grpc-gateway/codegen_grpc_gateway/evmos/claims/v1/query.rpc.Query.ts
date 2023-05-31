import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { ClaimsRecordAddress, ClaimsRecordAddressSDKType, Claim, ClaimSDKType } from "./claims";
import * as fm from "../../../grpc-gateway";
import { QueryTotalUnclaimedRequest, QueryTotalUnclaimedRequestSDKType, QueryTotalUnclaimedResponse, QueryTotalUnclaimedResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryClaimsRecordsRequest, QueryClaimsRecordsRequestSDKType, QueryClaimsRecordsResponse, QueryClaimsRecordsResponseSDKType, QueryClaimsRecordRequest, QueryClaimsRecordRequestSDKType, QueryClaimsRecordResponse, QueryClaimsRecordResponseSDKType } from "./query";
export class Query {
  /** TotalUnclaimed queries the total unclaimed tokens from the airdrop */
  static totalUnclaimed(request: QueryTotalUnclaimedRequest, initRequest?: fm.InitReq): Promise<QueryTotalUnclaimedResponse> {
    return fm.fetchReq(`/evmos/claims/v1/total_unclaimed?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Params returns the claims module parameters */
  static params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/evmos/claims/v1/params?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** ClaimsRecords returns all claims records */
  static claimsRecords(request: QueryClaimsRecordsRequest, initRequest?: fm.InitReq): Promise<QueryClaimsRecordsResponse> {
    return fm.fetchReq(`/evmos/claims/v1/claims_records?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** ClaimsRecord returns the claims record for a given address */
  static claimsRecord(request: QueryClaimsRecordRequest, initRequest?: fm.InitReq): Promise<QueryClaimsRecordResponse> {
    return fm.fetchReq(`/evmos/claims/v1/claims_records/${request["address"]}?${fm.renderURLSearchParams({
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
  /** TotalUnclaimed queries the total unclaimed tokens from the airdrop */
  async totalUnclaimed(req: QueryTotalUnclaimedRequest, headers?: HeadersInit): Promise<QueryTotalUnclaimedResponse> {
    return Query.totalUnclaimed(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Params returns the claims module parameters */
  async params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse> {
    return Query.params(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** ClaimsRecords returns all claims records */
  async claimsRecords(req: QueryClaimsRecordsRequest, headers?: HeadersInit): Promise<QueryClaimsRecordsResponse> {
    return Query.claimsRecords(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** ClaimsRecord returns the claims record for a given address */
  async claimsRecord(req: QueryClaimsRecordRequest, headers?: HeadersInit): Promise<QueryClaimsRecordResponse> {
    return Query.claimsRecord(req, {
      headers,
      pathPrefix: this.url
    });
  }
}