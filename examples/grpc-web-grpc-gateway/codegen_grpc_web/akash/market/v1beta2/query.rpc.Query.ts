import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryOrdersRequest, QueryOrdersResponse, QueryOrderRequest, QueryOrderResponse, QueryBidsRequest, QueryBidsResponse, QueryBidRequest, QueryBidResponse, QueryLeasesRequest, QueryLeasesResponse, QueryLeaseRequest, QueryLeaseResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
  /** Orders queries orders with filters */
  orders(request: DeepPartial<QueryOrdersRequest>, metadata?: grpc.Metadata): Promise<QueryOrdersResponse>;
  /** Order queries order details */
  order(request: DeepPartial<QueryOrderRequest>, metadata?: grpc.Metadata): Promise<QueryOrderResponse>;
  /** Bids queries bids with filters */
  bids(request: DeepPartial<QueryBidsRequest>, metadata?: grpc.Metadata): Promise<QueryBidsResponse>;
  /** Bid queries bid details */
  bid(request: DeepPartial<QueryBidRequest>, metadata?: grpc.Metadata): Promise<QueryBidResponse>;
  /** Leases queries leases with filters */
  leases(request: DeepPartial<QueryLeasesRequest>, metadata?: grpc.Metadata): Promise<QueryLeasesResponse>;
  /** Lease queries lease details */
  lease(request: DeepPartial<QueryLeaseRequest>, metadata?: grpc.Metadata): Promise<QueryLeaseResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.orders = this.orders.bind(this);
    this.order = this.order.bind(this);
    this.bids = this.bids.bind(this);
    this.bid = this.bid.bind(this);
    this.leases = this.leases.bind(this);
    this.lease = this.lease.bind(this);
  }
  orders(request: DeepPartial<QueryOrdersRequest>, metadata?: grpc.Metadata): Promise<QueryOrdersResponse> {
    return this.rpc.unary(QueryOrdersDesc, QueryOrdersRequest.fromPartial(request), metadata);
  }
  order(request: DeepPartial<QueryOrderRequest>, metadata?: grpc.Metadata): Promise<QueryOrderResponse> {
    return this.rpc.unary(QueryOrderDesc, QueryOrderRequest.fromPartial(request), metadata);
  }
  bids(request: DeepPartial<QueryBidsRequest>, metadata?: grpc.Metadata): Promise<QueryBidsResponse> {
    return this.rpc.unary(QueryBidsDesc, QueryBidsRequest.fromPartial(request), metadata);
  }
  bid(request: DeepPartial<QueryBidRequest>, metadata?: grpc.Metadata): Promise<QueryBidResponse> {
    return this.rpc.unary(QueryBidDesc, QueryBidRequest.fromPartial(request), metadata);
  }
  leases(request: DeepPartial<QueryLeasesRequest>, metadata?: grpc.Metadata): Promise<QueryLeasesResponse> {
    return this.rpc.unary(QueryLeasesDesc, QueryLeasesRequest.fromPartial(request), metadata);
  }
  lease(request: DeepPartial<QueryLeaseRequest>, metadata?: grpc.Metadata): Promise<QueryLeaseResponse> {
    return this.rpc.unary(QueryLeaseDesc, QueryLeaseRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "akash.market.v1beta2.Query"
};
export const QueryOrdersDesc: UnaryMethodDefinitionish = {
  methodName: "Orders",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryOrdersRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryOrdersResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryOrderDesc: UnaryMethodDefinitionish = {
  methodName: "Order",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryOrderRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryOrderResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryBidsDesc: UnaryMethodDefinitionish = {
  methodName: "Bids",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryBidsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryBidsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryBidDesc: UnaryMethodDefinitionish = {
  methodName: "Bid",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryBidRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryBidResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryLeasesDesc: UnaryMethodDefinitionish = {
  methodName: "Leases",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryLeasesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryLeasesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryLeaseDesc: UnaryMethodDefinitionish = {
  methodName: "Lease",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryLeaseRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryLeaseResponse.decode(data),
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