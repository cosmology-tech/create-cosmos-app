//@ts-nocheck
import { Params, ParamsSDKType } from "./mint";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryEpochProvisionsRequest, QueryEpochProvisionsRequestSDKType, QueryEpochProvisionsResponse, QueryEpochProvisionsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Params returns the total set of minting parameters. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const endpoint = `osmosis/mint/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  };
  /* EpochProvisions returns the current minting epoch provisions value. */
  epochProvisions = async (_params: QueryEpochProvisionsRequest = {}): Promise<QueryEpochProvisionsResponseSDKType> => {
    const endpoint = `osmosis/mint/v1beta1/epoch_provisions`;
    return await this.req.get<QueryEpochProvisionsResponseSDKType>(endpoint);
  };
}