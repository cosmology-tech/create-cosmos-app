import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../../grpc-web";
import { DeepPartial } from "../../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryClientParamsRequest, QueryClientParamsResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
  /** ClientState queries an IBC light client. */
  clientState(request: DeepPartial<QueryClientStateRequest>, metadata?: grpc.Metadata): Promise<QueryClientStateResponse>;
  /** ClientStates queries all the IBC light clients of a chain. */
  clientStates(request?: DeepPartial<QueryClientStatesRequest>, metadata?: grpc.Metadata): Promise<QueryClientStatesResponse>;
  /**
   * ConsensusState queries a consensus state associated with a client state at
   * a given height.
   */
  consensusState(request: DeepPartial<QueryConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryConsensusStateResponse>;
  /**
   * ConsensusStates queries all the consensus state associated with a given
   * client.
   */
  consensusStates(request: DeepPartial<QueryConsensusStatesRequest>, metadata?: grpc.Metadata): Promise<QueryConsensusStatesResponse>;
  /** Status queries the status of an IBC client. */
  clientStatus(request: DeepPartial<QueryClientStatusRequest>, metadata?: grpc.Metadata): Promise<QueryClientStatusResponse>;
  /** ClientParams queries all parameters of the ibc client. */
  clientParams(request?: DeepPartial<QueryClientParamsRequest>, metadata?: grpc.Metadata): Promise<QueryClientParamsResponse>;
  /** UpgradedClientState queries an Upgraded IBC light client. */
  upgradedClientState(request?: DeepPartial<QueryUpgradedClientStateRequest>, metadata?: grpc.Metadata): Promise<QueryUpgradedClientStateResponse>;
  /** UpgradedConsensusState queries an Upgraded IBC consensus state. */
  upgradedConsensusState(request?: DeepPartial<QueryUpgradedConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryUpgradedConsensusStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.clientState = this.clientState.bind(this);
    this.clientStates = this.clientStates.bind(this);
    this.consensusState = this.consensusState.bind(this);
    this.consensusStates = this.consensusStates.bind(this);
    this.clientStatus = this.clientStatus.bind(this);
    this.clientParams = this.clientParams.bind(this);
    this.upgradedClientState = this.upgradedClientState.bind(this);
    this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
  }
  clientState(request: DeepPartial<QueryClientStateRequest>, metadata?: grpc.Metadata): Promise<QueryClientStateResponse> {
    return this.rpc.unary(QueryClientStateDesc, QueryClientStateRequest.fromPartial(request), metadata);
  }
  clientStates(request: DeepPartial<QueryClientStatesRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryClientStatesResponse> {
    return this.rpc.unary(QueryClientStatesDesc, QueryClientStatesRequest.fromPartial(request), metadata);
  }
  consensusState(request: DeepPartial<QueryConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryConsensusStateResponse> {
    return this.rpc.unary(QueryConsensusStateDesc, QueryConsensusStateRequest.fromPartial(request), metadata);
  }
  consensusStates(request: DeepPartial<QueryConsensusStatesRequest>, metadata?: grpc.Metadata): Promise<QueryConsensusStatesResponse> {
    return this.rpc.unary(QueryConsensusStatesDesc, QueryConsensusStatesRequest.fromPartial(request), metadata);
  }
  clientStatus(request: DeepPartial<QueryClientStatusRequest>, metadata?: grpc.Metadata): Promise<QueryClientStatusResponse> {
    return this.rpc.unary(QueryClientStatusDesc, QueryClientStatusRequest.fromPartial(request), metadata);
  }
  clientParams(request: DeepPartial<QueryClientParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryClientParamsResponse> {
    return this.rpc.unary(QueryClientParamsDesc, QueryClientParamsRequest.fromPartial(request), metadata);
  }
  upgradedClientState(request: DeepPartial<QueryUpgradedClientStateRequest> = {}, metadata?: grpc.Metadata): Promise<QueryUpgradedClientStateResponse> {
    return this.rpc.unary(QueryUpgradedClientStateDesc, QueryUpgradedClientStateRequest.fromPartial(request), metadata);
  }
  upgradedConsensusState(request: DeepPartial<QueryUpgradedConsensusStateRequest> = {}, metadata?: grpc.Metadata): Promise<QueryUpgradedConsensusStateResponse> {
    return this.rpc.unary(QueryUpgradedConsensusStateDesc, QueryUpgradedConsensusStateRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "ibc.core.client.v1.Query"
};
export const QueryClientStateDesc: UnaryMethodDefinitionish = {
  methodName: "ClientState",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryClientStateRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryClientStateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryClientStatesDesc: UnaryMethodDefinitionish = {
  methodName: "ClientStates",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryClientStatesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryClientStatesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryConsensusStateDesc: UnaryMethodDefinitionish = {
  methodName: "ConsensusState",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryConsensusStateRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryConsensusStateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryConsensusStatesDesc: UnaryMethodDefinitionish = {
  methodName: "ConsensusStates",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryConsensusStatesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryConsensusStatesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryClientStatusDesc: UnaryMethodDefinitionish = {
  methodName: "ClientStatus",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryClientStatusRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryClientStatusResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryClientParamsDesc: UnaryMethodDefinitionish = {
  methodName: "ClientParams",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryClientParamsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryClientParamsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryUpgradedClientStateDesc: UnaryMethodDefinitionish = {
  methodName: "UpgradedClientState",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryUpgradedClientStateRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryUpgradedClientStateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryUpgradedConsensusStateDesc: UnaryMethodDefinitionish = {
  methodName: "UpgradedConsensusState",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryUpgradedConsensusStateRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryUpgradedConsensusStateResponse.decode(data),
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