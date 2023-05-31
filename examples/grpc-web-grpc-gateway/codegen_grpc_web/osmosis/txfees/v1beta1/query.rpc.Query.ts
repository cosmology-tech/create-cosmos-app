import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryFeeTokensRequest, QueryFeeTokensResponse, QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse, QueryDenomPoolIdRequest, QueryDenomPoolIdResponse, QueryBaseDenomRequest, QueryBaseDenomResponse } from "./query";
export interface Query {
  /**
   * FeeTokens returns a list of all the whitelisted fee tokens and their
   * corresponding pools. It does not include the BaseDenom, which has its own
   * query endpoint
   */
  feeTokens(request?: DeepPartial<QueryFeeTokensRequest>, metadata?: grpc.Metadata): Promise<QueryFeeTokensResponse>;
  /** DenomSpotPrice returns all spot prices by each registered token denom. */
  denomSpotPrice(request: DeepPartial<QueryDenomSpotPriceRequest>, metadata?: grpc.Metadata): Promise<QueryDenomSpotPriceResponse>;
  /** Returns the poolID for a specified denom input. */
  denomPoolId(request: DeepPartial<QueryDenomPoolIdRequest>, metadata?: grpc.Metadata): Promise<QueryDenomPoolIdResponse>;
  /** Returns a list of all base denom tokens and their corresponding pools. */
  baseDenom(request?: DeepPartial<QueryBaseDenomRequest>, metadata?: grpc.Metadata): Promise<QueryBaseDenomResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.feeTokens = this.feeTokens.bind(this);
    this.denomSpotPrice = this.denomSpotPrice.bind(this);
    this.denomPoolId = this.denomPoolId.bind(this);
    this.baseDenom = this.baseDenom.bind(this);
  }
  feeTokens(request: DeepPartial<QueryFeeTokensRequest> = {}, metadata?: grpc.Metadata): Promise<QueryFeeTokensResponse> {
    return this.rpc.unary(QueryFeeTokensDesc, QueryFeeTokensRequest.fromPartial(request), metadata);
  }
  denomSpotPrice(request: DeepPartial<QueryDenomSpotPriceRequest>, metadata?: grpc.Metadata): Promise<QueryDenomSpotPriceResponse> {
    return this.rpc.unary(QueryDenomSpotPriceDesc, QueryDenomSpotPriceRequest.fromPartial(request), metadata);
  }
  denomPoolId(request: DeepPartial<QueryDenomPoolIdRequest>, metadata?: grpc.Metadata): Promise<QueryDenomPoolIdResponse> {
    return this.rpc.unary(QueryDenomPoolIdDesc, QueryDenomPoolIdRequest.fromPartial(request), metadata);
  }
  baseDenom(request: DeepPartial<QueryBaseDenomRequest> = {}, metadata?: grpc.Metadata): Promise<QueryBaseDenomResponse> {
    return this.rpc.unary(QueryBaseDenomDesc, QueryBaseDenomRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "osmosis.txfees.v1beta1.Query"
};
export const QueryFeeTokensDesc: UnaryMethodDefinitionish = {
  methodName: "FeeTokens",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryFeeTokensRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryFeeTokensResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryDenomSpotPriceDesc: UnaryMethodDefinitionish = {
  methodName: "DenomSpotPrice",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryDenomSpotPriceRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDenomSpotPriceResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryDenomPoolIdDesc: UnaryMethodDefinitionish = {
  methodName: "DenomPoolId",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryDenomPoolIdRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDenomPoolIdResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryBaseDenomDesc: UnaryMethodDefinitionish = {
  methodName: "BaseDenom",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryBaseDenomRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryBaseDenomResponse.decode(data),
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