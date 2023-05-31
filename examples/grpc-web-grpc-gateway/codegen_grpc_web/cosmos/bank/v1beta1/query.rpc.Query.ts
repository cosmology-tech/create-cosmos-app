import { Metadata } from "./bank";
import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Balance queries the balance of a single coin for a single account. */
  balance(request: DeepPartial<QueryBalanceRequest>, metadata?: grpc.Metadata): Promise<QueryBalanceResponse>;
  /** AllBalances queries the balance of all coins for a single account. */
  allBalances(request: DeepPartial<QueryAllBalancesRequest>, metadata?: grpc.Metadata): Promise<QueryAllBalancesResponse>;
  /**
   * SpendableBalances queries the spenable balance of all coins for a single
   * account.
   */
  spendableBalances(request: DeepPartial<QuerySpendableBalancesRequest>, metadata?: grpc.Metadata): Promise<QuerySpendableBalancesResponse>;
  /** TotalSupply queries the total supply of all coins. */
  totalSupply(request?: DeepPartial<QueryTotalSupplyRequest>, metadata?: grpc.Metadata): Promise<QueryTotalSupplyResponse>;
  /** SupplyOf queries the supply of a single coin. */
  supplyOf(request: DeepPartial<QuerySupplyOfRequest>, metadata?: grpc.Metadata): Promise<QuerySupplyOfResponse>;
  /** Params queries the parameters of x/bank module. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** DenomsMetadata queries the client metadata of a given coin denomination. */
  denomMetadata(request: DeepPartial<QueryDenomMetadataRequest>, metadata?: grpc.Metadata): Promise<QueryDenomMetadataResponse>;
  /**
   * DenomsMetadata queries the client metadata for all registered coin
   * denominations.
   */
  denomsMetadata(request?: DeepPartial<QueryDenomsMetadataRequest>, metadata?: grpc.Metadata): Promise<QueryDenomsMetadataResponse>;
  /**
   * DenomOwners queries for all account addresses that own a particular token
   * denomination.
   */
  denomOwners(request: DeepPartial<QueryDenomOwnersRequest>, metadata?: grpc.Metadata): Promise<QueryDenomOwnersResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.balance = this.balance.bind(this);
    this.allBalances = this.allBalances.bind(this);
    this.spendableBalances = this.spendableBalances.bind(this);
    this.totalSupply = this.totalSupply.bind(this);
    this.supplyOf = this.supplyOf.bind(this);
    this.params = this.params.bind(this);
    this.denomMetadata = this.denomMetadata.bind(this);
    this.denomsMetadata = this.denomsMetadata.bind(this);
    this.denomOwners = this.denomOwners.bind(this);
  }
  balance(request: DeepPartial<QueryBalanceRequest>, metadata?: grpc.Metadata): Promise<QueryBalanceResponse> {
    return this.rpc.unary(QueryBalanceDesc, QueryBalanceRequest.fromPartial(request), metadata);
  }
  allBalances(request: DeepPartial<QueryAllBalancesRequest>, metadata?: grpc.Metadata): Promise<QueryAllBalancesResponse> {
    return this.rpc.unary(QueryAllBalancesDesc, QueryAllBalancesRequest.fromPartial(request), metadata);
  }
  spendableBalances(request: DeepPartial<QuerySpendableBalancesRequest>, metadata?: grpc.Metadata): Promise<QuerySpendableBalancesResponse> {
    return this.rpc.unary(QuerySpendableBalancesDesc, QuerySpendableBalancesRequest.fromPartial(request), metadata);
  }
  totalSupply(request: DeepPartial<QueryTotalSupplyRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryTotalSupplyResponse> {
    return this.rpc.unary(QueryTotalSupplyDesc, QueryTotalSupplyRequest.fromPartial(request), metadata);
  }
  supplyOf(request: DeepPartial<QuerySupplyOfRequest>, metadata?: grpc.Metadata): Promise<QuerySupplyOfResponse> {
    return this.rpc.unary(QuerySupplyOfDesc, QuerySupplyOfRequest.fromPartial(request), metadata);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
  denomMetadata(request: DeepPartial<QueryDenomMetadataRequest>, metadata?: grpc.Metadata): Promise<QueryDenomMetadataResponse> {
    return this.rpc.unary(QueryDenomMetadataDesc, QueryDenomMetadataRequest.fromPartial(request), metadata);
  }
  denomsMetadata(request: DeepPartial<QueryDenomsMetadataRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryDenomsMetadataResponse> {
    return this.rpc.unary(QueryDenomsMetadataDesc, QueryDenomsMetadataRequest.fromPartial(request), metadata);
  }
  denomOwners(request: DeepPartial<QueryDenomOwnersRequest>, metadata?: grpc.Metadata): Promise<QueryDenomOwnersResponse> {
    return this.rpc.unary(QueryDenomOwnersDesc, QueryDenomOwnersRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "cosmos.bank.v1beta1.Query"
};
export const QueryBalanceDesc: UnaryMethodDefinitionish = {
  methodName: "Balance",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryBalanceRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryBalanceResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAllBalancesDesc: UnaryMethodDefinitionish = {
  methodName: "AllBalances",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAllBalancesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAllBalancesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QuerySpendableBalancesDesc: UnaryMethodDefinitionish = {
  methodName: "SpendableBalances",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QuerySpendableBalancesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySpendableBalancesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryTotalSupplyDesc: UnaryMethodDefinitionish = {
  methodName: "TotalSupply",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTotalSupplyRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTotalSupplyResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QuerySupplyOfDesc: UnaryMethodDefinitionish = {
  methodName: "SupplyOf",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QuerySupplyOfRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QuerySupplyOfResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryParamsDesc: UnaryMethodDefinitionish = {
  methodName: "Params",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryParamsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryParamsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryDenomMetadataDesc: UnaryMethodDefinitionish = {
  methodName: "DenomMetadata",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryDenomMetadataRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDenomMetadataResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryDenomsMetadataDesc: UnaryMethodDefinitionish = {
  methodName: "DenomsMetadata",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryDenomsMetadataRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDenomsMetadataResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryDenomOwnersDesc: UnaryMethodDefinitionish = {
  methodName: "DenomOwners",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryDenomOwnersRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDenomOwnersResponse.decode(data),
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