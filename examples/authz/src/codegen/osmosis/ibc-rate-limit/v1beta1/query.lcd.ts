//@ts-nocheck
import { Params, ParamsSDKType } from "./params";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Params defines a gRPC query method that returns the ibc-rate-limit module's
   parameters. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const endpoint = `osmosis/ibc-rate-limit/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  };
}