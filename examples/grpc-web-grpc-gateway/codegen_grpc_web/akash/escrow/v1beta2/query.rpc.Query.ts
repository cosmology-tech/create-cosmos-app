import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryAccountsRequest, QueryAccountsResponse, QueryPaymentsRequest, QueryPaymentsResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
  /**
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   * Accounts queries all accounts
   */
  accounts(request: DeepPartial<QueryAccountsRequest>, metadata?: grpc.Metadata): Promise<QueryAccountsResponse>;
  /**
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   * Payments queries all payments
   */
  payments(request: DeepPartial<QueryPaymentsRequest>, metadata?: grpc.Metadata): Promise<QueryPaymentsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.accounts = this.accounts.bind(this);
    this.payments = this.payments.bind(this);
  }
  accounts(request: DeepPartial<QueryAccountsRequest>, metadata?: grpc.Metadata): Promise<QueryAccountsResponse> {
    return this.rpc.unary(QueryAccountsDesc, QueryAccountsRequest.fromPartial(request), metadata);
  }
  payments(request: DeepPartial<QueryPaymentsRequest>, metadata?: grpc.Metadata): Promise<QueryPaymentsResponse> {
    return this.rpc.unary(QueryPaymentsDesc, QueryPaymentsRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "akash.escrow.v1beta2.Query"
};
export const QueryAccountsDesc: UnaryMethodDefinitionish = {
  methodName: "Accounts",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAccountsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAccountsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryPaymentsDesc: UnaryMethodDefinitionish = {
  methodName: "Payments",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryPaymentsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryPaymentsResponse.decode(data),
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