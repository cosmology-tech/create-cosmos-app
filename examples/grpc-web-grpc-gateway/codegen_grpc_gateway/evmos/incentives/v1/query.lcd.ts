import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Incentive, IncentiveSDKType, GasMeter, GasMeterSDKType } from "./incentives";
import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryIncentivesRequest, QueryIncentivesRequestSDKType, QueryIncentivesResponse, QueryIncentivesResponseSDKType, QueryIncentiveRequest, QueryIncentiveRequestSDKType, QueryIncentiveResponse, QueryIncentiveResponseSDKType, QueryGasMetersRequest, QueryGasMetersRequestSDKType, QueryGasMetersResponse, QueryGasMetersResponseSDKType, QueryGasMeterRequest, QueryGasMeterRequestSDKType, QueryGasMeterResponse, QueryGasMeterResponseSDKType, QueryAllocationMetersRequest, QueryAllocationMetersRequestSDKType, QueryAllocationMetersResponse, QueryAllocationMetersResponseSDKType, QueryAllocationMeterRequest, QueryAllocationMeterRequestSDKType, QueryAllocationMeterResponse, QueryAllocationMeterResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.incentives = this.incentives.bind(this);
    this.incentive = this.incentive.bind(this);
    this.gasMeters = this.gasMeters.bind(this);
    this.gasMeter = this.gasMeter.bind(this);
    this.allocationMeters = this.allocationMeters.bind(this);
    this.allocationMeter = this.allocationMeter.bind(this);
    this.params = this.params.bind(this);
  }
  /* Incentives retrieves registered incentives */
  async incentives(params: QueryIncentivesRequest = {
    pagination: undefined
  }): Promise<QueryIncentivesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `evmos/incentives/v1/incentives`;
    return await this.req.get<QueryIncentivesResponseSDKType>(endpoint, options);
  }
  /* Incentive retrieves a registered incentive */
  async incentive(params: QueryIncentiveRequest): Promise<QueryIncentiveResponseSDKType> {
    const endpoint = `evmos/incentives/v1/incentives/${params.contract}`;
    return await this.req.get<QueryIncentiveResponseSDKType>(endpoint);
  }
  /* GasMeters retrieves active gas meters for a given contract */
  async gasMeters(params: QueryGasMetersRequest): Promise<QueryGasMetersResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `evmos/incentives/v1/gas_meters/${params.contract}`;
    return await this.req.get<QueryGasMetersResponseSDKType>(endpoint, options);
  }
  /* GasMeter Retrieves a active gas meter */
  async gasMeter(params: QueryGasMeterRequest): Promise<QueryGasMeterResponseSDKType> {
    const endpoint = `evmos/incentives/v1/gas_meters/${params.contract}/${params.participant}`;
    return await this.req.get<QueryGasMeterResponseSDKType>(endpoint);
  }
  /* AllocationMeters retrieves active allocation meters for a given
   denomination */
  async allocationMeters(params: QueryAllocationMetersRequest = {
    pagination: undefined
  }): Promise<QueryAllocationMetersResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `evmos/incentives/v1/allocation_meters`;
    return await this.req.get<QueryAllocationMetersResponseSDKType>(endpoint, options);
  }
  /* AllocationMeter Retrieves a active gas meter */
  async allocationMeter(params: QueryAllocationMeterRequest): Promise<QueryAllocationMeterResponseSDKType> {
    const endpoint = `evmos/incentives/v1/allocation_meters/${params.denom}`;
    return await this.req.get<QueryAllocationMeterResponseSDKType>(endpoint);
  }
  /* Params retrieves the incentives module params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `evmos/incentives/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
}