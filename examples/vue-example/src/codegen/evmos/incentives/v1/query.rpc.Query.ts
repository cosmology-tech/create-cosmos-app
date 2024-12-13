import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Incentive, IncentiveSDKType, GasMeter, GasMeterSDKType } from "./incentives";
import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryIncentivesRequest, QueryIncentivesRequestSDKType, QueryIncentivesResponse, QueryIncentivesResponseSDKType, QueryIncentiveRequest, QueryIncentiveRequestSDKType, QueryIncentiveResponse, QueryIncentiveResponseSDKType, QueryGasMetersRequest, QueryGasMetersRequestSDKType, QueryGasMetersResponse, QueryGasMetersResponseSDKType, QueryGasMeterRequest, QueryGasMeterRequestSDKType, QueryGasMeterResponse, QueryGasMeterResponseSDKType, QueryAllocationMetersRequest, QueryAllocationMetersRequestSDKType, QueryAllocationMetersResponse, QueryAllocationMetersResponseSDKType, QueryAllocationMeterRequest, QueryAllocationMeterRequestSDKType, QueryAllocationMeterResponse, QueryAllocationMeterResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, ReactiveQueryIncentivesRequest, ReactiveQueryIncentiveRequest, ReactiveQueryGasMetersRequest, ReactiveQueryGasMeterRequest, ReactiveQueryAllocationMetersRequest, ReactiveQueryAllocationMeterRequest, ReactiveQueryParamsRequest } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Incentives retrieves registered incentives */
  incentives(request?: QueryIncentivesRequest): Promise<QueryIncentivesResponse>;
  /** Incentive retrieves a registered incentive */
  incentive(request: QueryIncentiveRequest): Promise<QueryIncentiveResponse>;
  /** GasMeters retrieves active gas meters for a given contract */
  gasMeters(request: QueryGasMetersRequest): Promise<QueryGasMetersResponse>;
  /** GasMeter Retrieves a active gas meter */
  gasMeter(request: QueryGasMeterRequest): Promise<QueryGasMeterResponse>;
  /**
   * AllocationMeters retrieves active allocation meters for a given
   * denomination
   */
  allocationMeters(request?: QueryAllocationMetersRequest): Promise<QueryAllocationMetersResponse>;
  /** AllocationMeter Retrieves a active gas meter */
  allocationMeter(request: QueryAllocationMeterRequest): Promise<QueryAllocationMeterResponse>;
  /** Params retrieves the incentives module params */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.incentives = this.incentives.bind(this);
    this.incentive = this.incentive.bind(this);
    this.gasMeters = this.gasMeters.bind(this);
    this.gasMeter = this.gasMeter.bind(this);
    this.allocationMeters = this.allocationMeters.bind(this);
    this.allocationMeter = this.allocationMeter.bind(this);
    this.params = this.params.bind(this);
  }
  incentives(request: QueryIncentivesRequest = {
    pagination: undefined
  }): Promise<QueryIncentivesResponse> {
    const data = QueryIncentivesRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "Incentives", data);
    return promise.then(data => QueryIncentivesResponse.decode(new BinaryReader(data)));
  }
  incentive(request: QueryIncentiveRequest): Promise<QueryIncentiveResponse> {
    const data = QueryIncentiveRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "Incentive", data);
    return promise.then(data => QueryIncentiveResponse.decode(new BinaryReader(data)));
  }
  gasMeters(request: QueryGasMetersRequest): Promise<QueryGasMetersResponse> {
    const data = QueryGasMetersRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "GasMeters", data);
    return promise.then(data => QueryGasMetersResponse.decode(new BinaryReader(data)));
  }
  gasMeter(request: QueryGasMeterRequest): Promise<QueryGasMeterResponse> {
    const data = QueryGasMeterRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "GasMeter", data);
    return promise.then(data => QueryGasMeterResponse.decode(new BinaryReader(data)));
  }
  allocationMeters(request: QueryAllocationMetersRequest = {
    pagination: undefined
  }): Promise<QueryAllocationMetersResponse> {
    const data = QueryAllocationMetersRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "AllocationMeters", data);
    return promise.then(data => QueryAllocationMetersResponse.decode(new BinaryReader(data)));
  }
  allocationMeter(request: QueryAllocationMeterRequest): Promise<QueryAllocationMeterResponse> {
    const data = QueryAllocationMeterRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "AllocationMeter", data);
    return promise.then(data => QueryAllocationMeterResponse.decode(new BinaryReader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    incentives(request?: QueryIncentivesRequest): Promise<QueryIncentivesResponse> {
      return queryService.incentives(request);
    },
    incentive(request: QueryIncentiveRequest): Promise<QueryIncentiveResponse> {
      return queryService.incentive(request);
    },
    gasMeters(request: QueryGasMetersRequest): Promise<QueryGasMetersResponse> {
      return queryService.gasMeters(request);
    },
    gasMeter(request: QueryGasMeterRequest): Promise<QueryGasMeterResponse> {
      return queryService.gasMeter(request);
    },
    allocationMeters(request?: QueryAllocationMetersRequest): Promise<QueryAllocationMetersResponse> {
      return queryService.allocationMeters(request);
    },
    allocationMeter(request: QueryAllocationMeterRequest): Promise<QueryAllocationMeterResponse> {
      return queryService.allocationMeter(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};