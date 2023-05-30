import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { ParamsRequest, ParamsResponse, ArithmeticTwapRequest, ArithmeticTwapResponse, ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse } from "./query";
export interface Query {
  params(request?: DeepPartial<ParamsRequest>, metadata?: grpc.Metadata): Promise<ParamsResponse>;
  arithmeticTwap(request: DeepPartial<ArithmeticTwapRequest>, metadata?: grpc.Metadata): Promise<ArithmeticTwapResponse>;
  arithmeticTwapToNow(request: DeepPartial<ArithmeticTwapToNowRequest>, metadata?: grpc.Metadata): Promise<ArithmeticTwapToNowResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.arithmeticTwap = this.arithmeticTwap.bind(this);
    this.arithmeticTwapToNow = this.arithmeticTwapToNow.bind(this);
  }
  params(request: DeepPartial<ParamsRequest> = {}, metadata?: grpc.Metadata): Promise<ParamsResponse> {
    return this.rpc.unary(ParamsDesc, ParamsRequest.fromPartial(request), metadata);
  }
  arithmeticTwap(request: DeepPartial<ArithmeticTwapRequest>, metadata?: grpc.Metadata): Promise<ArithmeticTwapResponse> {
    return this.rpc.unary(ArithmeticTwapDesc, ArithmeticTwapRequest.fromPartial(request), metadata);
  }
  arithmeticTwapToNow(request: DeepPartial<ArithmeticTwapToNowRequest>, metadata?: grpc.Metadata): Promise<ArithmeticTwapToNowResponse> {
    return this.rpc.unary(ArithmeticTwapToNowDesc, ArithmeticTwapToNowRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "osmosis.twap.v1beta1.Query"
};
export const QueryParamsDesc: UnaryMethodDefinitionish = {
  methodName: "Params",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return ParamsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...ParamsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryArithmeticTwapDesc: UnaryMethodDefinitionish = {
  methodName: "ArithmeticTwap",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return ArithmeticTwapRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...ArithmeticTwapResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryArithmeticTwapToNowDesc: UnaryMethodDefinitionish = {
  methodName: "ArithmeticTwapToNow",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return ArithmeticTwapToNowRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...ArithmeticTwapToNowResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export class GrpcWebImpl {
  host: string;
  options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  };
  constructor(host: string, options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  }) {
    this.host = host;
    this.options = options;
  }
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined) {
    const request = {
      ..._request,
      ...methodDesc.requestType
    };
    const maybeCombinedMetadata = metadata && this.options.metadata ? new BrowserHeaders({
      ...this.options?.metadata.headersMap,
      ...metadata?.headersMap
    }) : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = (new Error(response.statusMessage) as any);
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        }
      });
    });
  }
}