//@ts-nocheck
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Params, ParamsSDKType } from "./genesis";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { ParamsRequest, ParamsRequestSDKType, ParamsResponse, ParamsResponseSDKType, ArithmeticTwapRequest, ArithmeticTwapRequestSDKType, ArithmeticTwapResponse, ArithmeticTwapResponseSDKType, ArithmeticTwapToNowRequest, ArithmeticTwapToNowRequestSDKType, ArithmeticTwapToNowResponse, ArithmeticTwapToNowResponseSDKType } from "./query";
export interface Query {
  params(request?: ParamsRequest): Promise<ParamsResponse>;
  arithmeticTwap(request: ArithmeticTwapRequest): Promise<ArithmeticTwapResponse>;
  arithmeticTwapToNow(request: ArithmeticTwapToNowRequest): Promise<ArithmeticTwapToNowResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Params */
  params = async (request: ParamsRequest = {}): Promise<ParamsResponse> => {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.twap.v1beta1.Query", "Params", data);
    return promise.then(data => ParamsResponse.decode(new BinaryReader(data)));
  };
  /* ArithmeticTwap */
  arithmeticTwap = async (request: ArithmeticTwapRequest): Promise<ArithmeticTwapResponse> => {
    const data = ArithmeticTwapRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.twap.v1beta1.Query", "ArithmeticTwap", data);
    return promise.then(data => ArithmeticTwapResponse.decode(new BinaryReader(data)));
  };
  /* ArithmeticTwapToNow */
  arithmeticTwapToNow = async (request: ArithmeticTwapToNowRequest): Promise<ArithmeticTwapToNowResponse> => {
    const data = ArithmeticTwapToNowRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.twap.v1beta1.Query", "ArithmeticTwapToNow", data);
    return promise.then(data => ArithmeticTwapToNowResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: ParamsRequest): Promise<ParamsResponse> {
      return queryService.params(request);
    },
    arithmeticTwap(request: ArithmeticTwapRequest): Promise<ArithmeticTwapResponse> {
      return queryService.arithmeticTwap(request);
    },
    arithmeticTwapToNow(request: ArithmeticTwapToNowRequest): Promise<ArithmeticTwapToNowResponse> {
      return queryService.arithmeticTwapToNow(request);
    }
  };
};