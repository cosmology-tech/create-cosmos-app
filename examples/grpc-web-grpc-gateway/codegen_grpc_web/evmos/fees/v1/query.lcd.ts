import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryDevFeeInfosRequest, QueryDevFeeInfosResponseSDKType, QueryDevFeeInfoRequest, QueryDevFeeInfoResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.devFeeInfos = this.devFeeInfos.bind(this);
    this.devFeeInfo = this.devFeeInfo.bind(this);
    this.params = this.params.bind(this);
    this.devFeeInfosPerDeployer = this.devFeeInfosPerDeployer.bind(this);
  }
  /* DevFeeInfos retrieves all registered contracts for fee distribution */
  async devFeeInfos(params: QueryDevFeeInfosRequest = {
    pagination: undefined
  }): Promise<QueryDevFeeInfosResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `evmos/fees/v1/fees`;
    return await this.req.get<QueryDevFeeInfosResponseSDKType>(endpoint, options);
  }
  /* DevFeeInfo retrieves a registered contract for fee distribution */
  async devFeeInfo(params: QueryDevFeeInfoRequest): Promise<QueryDevFeeInfoResponseSDKType> {
    const endpoint = `evmos/fees/v1/fees/${params.contractAddress}`;
    return await this.req.get<QueryDevFeeInfoResponseSDKType>(endpoint);
  }
  /* Params retrieves the fees module params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `evmos/fees/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* DevFeeInfosPerDeployer retrieves all contracts that a deployer has
   registered for fee distribution */
  async devFeeInfosPerDeployer(params: QueryDevFeeInfosPerDeployerRequest): Promise<QueryDevFeeInfosPerDeployerResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `evmos/fees/v1/fees/${params.deployerAddress}`;
    return await this.req.get<QueryDevFeeInfosPerDeployerResponseSDKType>(endpoint, options);
  }
}