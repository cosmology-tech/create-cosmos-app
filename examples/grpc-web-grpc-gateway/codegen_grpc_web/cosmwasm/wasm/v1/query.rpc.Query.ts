import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryContractInfoRequest, QueryContractInfoResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryAllContractStateRequest, QueryAllContractStateResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
  /** ContractInfo gets the contract meta data */
  contractInfo(request: DeepPartial<QueryContractInfoRequest>, metadata?: grpc.Metadata): Promise<QueryContractInfoResponse>;
  /** ContractHistory gets the contract code history */
  contractHistory(request: DeepPartial<QueryContractHistoryRequest>, metadata?: grpc.Metadata): Promise<QueryContractHistoryResponse>;
  /** ContractsByCode lists all smart contracts for a code id */
  contractsByCode(request: DeepPartial<QueryContractsByCodeRequest>, metadata?: grpc.Metadata): Promise<QueryContractsByCodeResponse>;
  /** AllContractState gets all raw store data for a single contract */
  allContractState(request: DeepPartial<QueryAllContractStateRequest>, metadata?: grpc.Metadata): Promise<QueryAllContractStateResponse>;
  /** RawContractState gets single key from the raw store data of a contract */
  rawContractState(request: DeepPartial<QueryRawContractStateRequest>, metadata?: grpc.Metadata): Promise<QueryRawContractStateResponse>;
  /** SmartContractState get smart query result from the contract */
  smartContractState(request: DeepPartial<QuerySmartContractStateRequest>, metadata?: grpc.Metadata): Promise<QuerySmartContractStateResponse>;
  /** Code gets the binary code and metadata for a singe wasm code */
  code(request: DeepPartial<QueryCodeRequest>, metadata?: grpc.Metadata): Promise<QueryCodeResponse>;
  /** Codes gets the metadata for all stored wasm codes */
  codes(request?: DeepPartial<QueryCodesRequest>, metadata?: grpc.Metadata): Promise<QueryCodesResponse>;
  /** PinnedCodes gets the pinned code ids */
  pinnedCodes(request?: DeepPartial<QueryPinnedCodesRequest>, metadata?: grpc.Metadata): Promise<QueryPinnedCodesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.contractInfo = this.contractInfo.bind(this);
    this.contractHistory = this.contractHistory.bind(this);
    this.contractsByCode = this.contractsByCode.bind(this);
    this.allContractState = this.allContractState.bind(this);
    this.rawContractState = this.rawContractState.bind(this);
    this.smartContractState = this.smartContractState.bind(this);
    this.code = this.code.bind(this);
    this.codes = this.codes.bind(this);
    this.pinnedCodes = this.pinnedCodes.bind(this);
  }
  contractInfo(request: DeepPartial<QueryContractInfoRequest>, metadata?: grpc.Metadata): Promise<QueryContractInfoResponse> {
    return this.rpc.unary(QueryContractInfoDesc, QueryContractInfoRequest.fromPartial(request), metadata);
  }
  contractHistory(request: DeepPartial<QueryContractHistoryRequest>, metadata?: grpc.Metadata): Promise<QueryContractHistoryResponse> {
    return this.rpc.unary(QueryContractHistoryDesc, QueryContractHistoryRequest.fromPartial(request), metadata);
  }
  contractsByCode(request: DeepPartial<QueryContractsByCodeRequest>, metadata?: grpc.Metadata): Promise<QueryContractsByCodeResponse> {
    return this.rpc.unary(QueryContractsByCodeDesc, QueryContractsByCodeRequest.fromPartial(request), metadata);
  }
  allContractState(request: DeepPartial<QueryAllContractStateRequest>, metadata?: grpc.Metadata): Promise<QueryAllContractStateResponse> {
    return this.rpc.unary(QueryAllContractStateDesc, QueryAllContractStateRequest.fromPartial(request), metadata);
  }
  rawContractState(request: DeepPartial<QueryRawContractStateRequest>, metadata?: grpc.Metadata): Promise<QueryRawContractStateResponse> {
    return this.rpc.unary(QueryRawContractStateDesc, QueryRawContractStateRequest.fromPartial(request), metadata);
  }
  smartContractState(request: DeepPartial<QuerySmartContractStateRequest>, metadata?: grpc.Metadata): Promise<QuerySmartContractStateResponse> {
    return this.rpc.unary(QuerySmartContractStateDesc, QuerySmartContractStateRequest.fromPartial(request), metadata);
  }
  code(request: DeepPartial<QueryCodeRequest>, metadata?: grpc.Metadata): Promise<QueryCodeResponse> {
    return this.rpc.unary(QueryCodeDesc, QueryCodeRequest.fromPartial(request), metadata);
  }
  codes(request: DeepPartial<QueryCodesRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryCodesResponse> {
    return this.rpc.unary(QueryCodesDesc, QueryCodesRequest.fromPartial(request), metadata);
  }
  pinnedCodes(request: DeepPartial<QueryPinnedCodesRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryPinnedCodesResponse> {
    return this.rpc.unary(QueryPinnedCodesDesc, QueryPinnedCodesRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "cosmwasm.wasm.v1.Query"
};
export const QueryContractInfoDesc: UnaryMethodDefinitionish = {
  methodName: "ContractInfo",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryContractInfoRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryContractInfoResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryContractHistoryDesc: UnaryMethodDefinitionish = {
  methodName: "ContractHistory",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryContractHistoryRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryContractHistoryResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryContractsByCodeDesc: UnaryMethodDefinitionish = {
  methodName: "ContractsByCode",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryContractsByCodeRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryContractsByCodeResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAllContractStateDesc: UnaryMethodDefinitionish = {
  methodName: "AllContractState",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllContractStateRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllContractStateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryRawContractStateDesc: UnaryMethodDefinitionish = {
  methodName: "RawContractState",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryRawContractStateRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryRawContractStateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QuerySmartContractStateDesc: UnaryMethodDefinitionish = {
  methodName: "SmartContractState",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QuerySmartContractStateRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySmartContractStateResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryCodeDesc: UnaryMethodDefinitionish = {
  methodName: "Code",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryCodeRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryCodeResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryCodesDesc: UnaryMethodDefinitionish = {
  methodName: "Codes",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryCodesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryCodesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryPinnedCodesDesc: UnaryMethodDefinitionish = {
  methodName: "PinnedCodes",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryPinnedCodesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryPinnedCodesResponse.decode(data),
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