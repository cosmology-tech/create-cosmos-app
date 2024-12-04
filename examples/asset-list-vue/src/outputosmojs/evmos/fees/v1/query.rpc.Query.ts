import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { DevFeeInfo, DevFeeInfoSDKType } from "./fees";
import { Params, ParamsSDKType } from "./genesis";
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryDevFeeInfosRequest, QueryDevFeeInfosRequestSDKType, QueryDevFeeInfosResponse, QueryDevFeeInfosResponseSDKType, QueryDevFeeInfoRequest, QueryDevFeeInfoRequestSDKType, QueryDevFeeInfoResponse, QueryDevFeeInfoResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerRequestSDKType, QueryDevFeeInfosPerDeployerResponse, QueryDevFeeInfosPerDeployerResponseSDKType } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** DevFeeInfos retrieves all registered contracts for fee distribution */
  devFeeInfos(request?: QueryDevFeeInfosRequest): Promise<QueryDevFeeInfosResponse>;
  /** DevFeeInfo retrieves a registered contract for fee distribution */
  devFeeInfo(request: QueryDevFeeInfoRequest): Promise<QueryDevFeeInfoResponse>;
  /** Params retrieves the fees module params */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * DevFeeInfosPerDeployer retrieves all contracts that a deployer has
   * registered for fee distribution
   */
  devFeeInfosPerDeployer(request: QueryDevFeeInfosPerDeployerRequest): Promise<QueryDevFeeInfosPerDeployerResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.devFeeInfos = this.devFeeInfos.bind(this);
    this.devFeeInfo = this.devFeeInfo.bind(this);
    this.params = this.params.bind(this);
    this.devFeeInfosPerDeployer = this.devFeeInfosPerDeployer.bind(this);
  }
  devFeeInfos(request: QueryDevFeeInfosRequest = {
    pagination: undefined
  }): Promise<QueryDevFeeInfosResponse> {
    const data = QueryDevFeeInfosRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.fees.v1.Query", "DevFeeInfos", data);
    return promise.then(data => QueryDevFeeInfosResponse.decode(new BinaryReader(data)));
  }
  devFeeInfo(request: QueryDevFeeInfoRequest): Promise<QueryDevFeeInfoResponse> {
    const data = QueryDevFeeInfoRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.fees.v1.Query", "DevFeeInfo", data);
    return promise.then(data => QueryDevFeeInfoResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.fees.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  devFeeInfosPerDeployer(request: QueryDevFeeInfosPerDeployerRequest): Promise<QueryDevFeeInfosPerDeployerResponse> {
    const data = QueryDevFeeInfosPerDeployerRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.fees.v1.Query", "DevFeeInfosPerDeployer", data);
    return promise.then(data => QueryDevFeeInfosPerDeployerResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    devFeeInfos(request?: QueryDevFeeInfosRequest): Promise<QueryDevFeeInfosResponse> {
      return queryService.devFeeInfos(request);
    },
    devFeeInfo(request: QueryDevFeeInfoRequest): Promise<QueryDevFeeInfoResponse> {
      return queryService.devFeeInfo(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    devFeeInfosPerDeployer(request: QueryDevFeeInfosPerDeployerRequest): Promise<QueryDevFeeInfosPerDeployerResponse> {
      return queryService.devFeeInfosPerDeployer(request);
    }
  };
};