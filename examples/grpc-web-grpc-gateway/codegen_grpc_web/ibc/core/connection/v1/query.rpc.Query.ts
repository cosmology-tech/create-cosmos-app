import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../../grpc-web";
import { DeepPartial } from "../../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse, QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
  /** Connection queries an IBC connection end. */
  connection(request: DeepPartial<QueryConnectionRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionResponse>;
  /** Connections queries all the IBC connections of a chain. */
  connections(request?: DeepPartial<QueryConnectionsRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionsResponse>;
  /**
   * ClientConnections queries the connection paths associated with a client
   * state.
   */
  clientConnections(request: DeepPartial<QueryClientConnectionsRequest>, metadata?: grpc.Metadata): Promise<QueryClientConnectionsResponse>;
  /**
   * ConnectionClientState queries the client state associated with the
   * connection.
   */
  connectionClientState(request: DeepPartial<QueryConnectionClientStateRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionClientStateResponse>;
  /**
   * ConnectionConsensusState queries the consensus state associated with the
   * connection.
   */
  connectionConsensusState(request: DeepPartial<QueryConnectionConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionConsensusStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.connection = this.connection.bind(this);
    this.connections = this.connections.bind(this);
    this.clientConnections = this.clientConnections.bind(this);
    this.connectionClientState = this.connectionClientState.bind(this);
    this.connectionConsensusState = this.connectionConsensusState.bind(this);
  }
  connection(request: DeepPartial<QueryConnectionRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionResponse> {
    return this.rpc.unary(QueryConnectionDesc, QueryConnectionRequest.fromPartial(request), metadata);
  }
  connections(request: DeepPartial<QueryConnectionsRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryConnectionsResponse> {
    return this.rpc.unary(QueryConnectionsDesc, QueryConnectionsRequest.fromPartial(request), metadata);
  }
  clientConnections(request: DeepPartial<QueryClientConnectionsRequest>, metadata?: grpc.Metadata): Promise<QueryClientConnectionsResponse> {
    return this.rpc.unary(QueryClientConnectionsDesc, QueryClientConnectionsRequest.fromPartial(request), metadata);
  }
  connectionClientState(request: DeepPartial<QueryConnectionClientStateRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionClientStateResponse> {
    return this.rpc.unary(QueryConnectionClientStateDesc, QueryConnectionClientStateRequest.fromPartial(request), metadata);
  }
  connectionConsensusState(request: DeepPartial<QueryConnectionConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryConnectionConsensusStateResponse> {
    return this.rpc.unary(QueryConnectionConsensusStateDesc, QueryConnectionConsensusStateRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "ibc.core.connection.v1.Query"
};
export const QueryConnectionDesc: UnaryMethodDefinitionish = {
  methodName: "Connection",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryConnectionRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryConnectionResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryConnectionsDesc: UnaryMethodDefinitionish = {
  methodName: "Connections",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryConnectionsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryConnectionsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryClientConnectionsDesc: UnaryMethodDefinitionish = {
  methodName: "ClientConnections",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryClientConnectionsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryClientConnectionsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryConnectionClientStateDesc: UnaryMethodDefinitionish = {
  methodName: "ConnectionClientState",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryConnectionClientStateRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryConnectionClientStateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryConnectionConsensusStateDesc: UnaryMethodDefinitionish = {
  methodName: "ConnectionConsensusState",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryConnectionConsensusStateRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryConnectionConsensusStateResponse.decode(data),
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