import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Params, ParamsSDKType } from "./genesis";
import { LCDClient } from "@cosmology/lcd";
import { ParamsRequest, ParamsRequestSDKType, ParamsResponse, ParamsResponseSDKType, ArithmeticTwapRequest, ArithmeticTwapRequestSDKType, ArithmeticTwapResponse, ArithmeticTwapResponseSDKType, ArithmeticTwapToNowRequest, ArithmeticTwapToNowRequestSDKType, ArithmeticTwapToNowResponse, ArithmeticTwapToNowResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Params */
  params = async (_params: ParamsRequest = {}): Promise<ParamsResponseSDKType> => {
    const endpoint = `osmosis/twap/v1beta1/Params`;
    return await this.req.get<ParamsResponseSDKType>(endpoint);
  };
  /* ArithmeticTwap */
  arithmeticTwap = async (params: ArithmeticTwapRequest): Promise<ArithmeticTwapResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    if (typeof params?.baseAsset !== "undefined") {
      options.params.base_asset = params.baseAsset;
    }
    if (typeof params?.quoteAsset !== "undefined") {
      options.params.quote_asset = params.quoteAsset;
    }
    if (typeof params?.startTime !== "undefined") {
      options.params.start_time = params.startTime;
    }
    if (typeof params?.endTime !== "undefined") {
      options.params.end_time = params.endTime;
    }
    const endpoint = `osmosis/twap/v1beta1/ArithmeticTwap`;
    return await this.req.get<ArithmeticTwapResponseSDKType>(endpoint, options);
  };
  /* ArithmeticTwapToNow */
  arithmeticTwapToNow = async (params: ArithmeticTwapToNowRequest): Promise<ArithmeticTwapToNowResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }
    if (typeof params?.baseAsset !== "undefined") {
      options.params.base_asset = params.baseAsset;
    }
    if (typeof params?.quoteAsset !== "undefined") {
      options.params.quote_asset = params.quoteAsset;
    }
    if (typeof params?.startTime !== "undefined") {
      options.params.start_time = params.startTime;
    }
    const endpoint = `osmosis/twap/v1beta1/ArithmeticTwapToNow`;
    return await this.req.get<ArithmeticTwapToNowResponseSDKType>(endpoint, options);
  };
}