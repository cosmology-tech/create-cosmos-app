import { EpochInfo, EpochInfoSDKType } from "./genesis";
import { LCDClient } from "@cosmology/lcd";
import { QueryEpochsInfoRequest, QueryEpochsInfoRequestSDKType, QueryEpochsInfoResponse, QueryEpochsInfoResponseSDKType, QueryCurrentEpochRequest, QueryCurrentEpochRequestSDKType, QueryCurrentEpochResponse, QueryCurrentEpochResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.epochInfos = this.epochInfos.bind(this);
    this.currentEpoch = this.currentEpoch.bind(this);
  }
  /* EpochInfos provide running epochInfos */
  async epochInfos(_params: QueryEpochsInfoRequest = {}): Promise<QueryEpochsInfoResponseSDKType> {
    const endpoint = `osmosis/epochs/v1beta1/epochs`;
    return QueryEpochsInfoResponse.fromSDKJSON(await this.req.get<QueryEpochsInfoResponseSDKType>(endpoint));
  }
  /* CurrentEpoch provide current epoch of specified identifier */
  async currentEpoch(params: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.identifier !== "undefined") {
      options.params.identifier = params.identifier;
    }
    const endpoint = `osmosis/epochs/v1beta1/current_epoch`;
    return QueryCurrentEpochResponse.fromSDKJSON(await this.req.get<QueryCurrentEpochResponseSDKType>(endpoint, options));
  }
}