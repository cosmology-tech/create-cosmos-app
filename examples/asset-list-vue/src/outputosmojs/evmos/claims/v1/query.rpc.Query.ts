import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { ClaimsRecordAddress, ClaimsRecordAddressSDKType, Claim, ClaimSDKType } from "./claims";
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryTotalUnclaimedRequest, QueryTotalUnclaimedRequestSDKType, QueryTotalUnclaimedResponse, QueryTotalUnclaimedResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryClaimsRecordsRequest, QueryClaimsRecordsRequestSDKType, QueryClaimsRecordsResponse, QueryClaimsRecordsResponseSDKType, QueryClaimsRecordRequest, QueryClaimsRecordRequestSDKType, QueryClaimsRecordResponse, QueryClaimsRecordResponseSDKType } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** TotalUnclaimed queries the total unclaimed tokens from the airdrop */
  totalUnclaimed(request?: QueryTotalUnclaimedRequest): Promise<QueryTotalUnclaimedResponse>;
  /** Params returns the claims module parameters */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ClaimsRecords returns all claims records */
  claimsRecords(request?: QueryClaimsRecordsRequest): Promise<QueryClaimsRecordsResponse>;
  /** ClaimsRecord returns the claims record for a given address */
  claimsRecord(request: QueryClaimsRecordRequest): Promise<QueryClaimsRecordResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.totalUnclaimed = this.totalUnclaimed.bind(this);
    this.params = this.params.bind(this);
    this.claimsRecords = this.claimsRecords.bind(this);
    this.claimsRecord = this.claimsRecord.bind(this);
  }
  totalUnclaimed(request: QueryTotalUnclaimedRequest = {}): Promise<QueryTotalUnclaimedResponse> {
    const data = QueryTotalUnclaimedRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.claims.v1.Query", "TotalUnclaimed", data);
    return promise.then(data => QueryTotalUnclaimedResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.claims.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  claimsRecords(request: QueryClaimsRecordsRequest = {
    pagination: undefined
  }): Promise<QueryClaimsRecordsResponse> {
    const data = QueryClaimsRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.claims.v1.Query", "ClaimsRecords", data);
    return promise.then(data => QueryClaimsRecordsResponse.decode(new BinaryReader(data)));
  }
  claimsRecord(request: QueryClaimsRecordRequest): Promise<QueryClaimsRecordResponse> {
    const data = QueryClaimsRecordRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.claims.v1.Query", "ClaimsRecord", data);
    return promise.then(data => QueryClaimsRecordResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    totalUnclaimed(request?: QueryTotalUnclaimedRequest): Promise<QueryTotalUnclaimedResponse> {
      return queryService.totalUnclaimed(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    claimsRecords(request?: QueryClaimsRecordsRequest): Promise<QueryClaimsRecordsResponse> {
      return queryService.claimsRecords(request);
    },
    claimsRecord(request: QueryClaimsRecordRequest): Promise<QueryClaimsRecordResponse> {
      return queryService.claimsRecord(request);
    }
  };
};