import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../grpc-web";
import { DeepPartial } from "../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryParamsRequest, QueryParamsResponse, AssetTypeRequest, AssetTypeResponse, AllAssetsRequest, AllAssetsResponse, AssetMultiplierRequest, AssetMultiplierResponse, AllIntermediaryAccountsRequest, AllIntermediaryAccountsResponse, ConnectedIntermediaryAccountRequest, ConnectedIntermediaryAccountResponse, QueryTotalDelegationByValidatorForDenomRequest, QueryTotalDelegationByValidatorForDenomResponse, TotalSuperfluidDelegationsRequest, TotalSuperfluidDelegationsResponse, SuperfluidDelegationAmountRequest, SuperfluidDelegationAmountResponse, SuperfluidDelegationsByDelegatorRequest, SuperfluidDelegationsByDelegatorResponse, SuperfluidUndelegationsByDelegatorRequest, SuperfluidUndelegationsByDelegatorResponse, SuperfluidDelegationsByValidatorDenomRequest, SuperfluidDelegationsByValidatorDenomResponse, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, QueryTotalDelegationByDelegatorRequest, QueryTotalDelegationByDelegatorResponse, QueryUnpoolWhitelistRequest, QueryUnpoolWhitelistResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Params returns the total set of superfluid parameters. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /**
   * Returns superfluid asset type, whether if it's a native asset or an lp
   * share.
   */
  assetType(request: DeepPartial<AssetTypeRequest>, metadata?: grpc.Metadata): Promise<AssetTypeResponse>;
  /** Returns all registered superfluid assets. */
  allAssets(request?: DeepPartial<AllAssetsRequest>, metadata?: grpc.Metadata): Promise<AllAssetsResponse>;
  /** Returns the osmo equivalent multiplier used in the most recent epoch. */
  assetMultiplier(request: DeepPartial<AssetMultiplierRequest>, metadata?: grpc.Metadata): Promise<AssetMultiplierResponse>;
  /** Returns all superfluid intermediary accounts. */
  allIntermediaryAccounts(request?: DeepPartial<AllIntermediaryAccountsRequest>, metadata?: grpc.Metadata): Promise<AllIntermediaryAccountsResponse>;
  /** Returns intermediary account connected to a superfluid staked lock by id */
  connectedIntermediaryAccount(request: DeepPartial<ConnectedIntermediaryAccountRequest>, metadata?: grpc.Metadata): Promise<ConnectedIntermediaryAccountResponse>;
  /** Returns the amount of delegations of specific denom for all validators */
  totalDelegationByValidatorForDenom(request: DeepPartial<QueryTotalDelegationByValidatorForDenomRequest>, metadata?: grpc.Metadata): Promise<QueryTotalDelegationByValidatorForDenomResponse>;
  /**
   * Returns the total amount of osmo superfluidly staked.
   * Response is denominated in uosmo.
   */
  totalSuperfluidDelegations(request?: DeepPartial<TotalSuperfluidDelegationsRequest>, metadata?: grpc.Metadata): Promise<TotalSuperfluidDelegationsResponse>;
  /**
   * Returns the coins superfluid delegated for the delegator, validator, denom
   * triplet
   */
  superfluidDelegationAmount(request: DeepPartial<SuperfluidDelegationAmountRequest>, metadata?: grpc.Metadata): Promise<SuperfluidDelegationAmountResponse>;
  /** Returns all the delegated superfluid poistions for a specific delegator. */
  superfluidDelegationsByDelegator(request: DeepPartial<SuperfluidDelegationsByDelegatorRequest>, metadata?: grpc.Metadata): Promise<SuperfluidDelegationsByDelegatorResponse>;
  /** Returns all the undelegating superfluid poistions for a specific delegator. */
  superfluidUndelegationsByDelegator(request: DeepPartial<SuperfluidUndelegationsByDelegatorRequest>, metadata?: grpc.Metadata): Promise<SuperfluidUndelegationsByDelegatorResponse>;
  /**
   * Returns all the superfluid positions of a specific denom delegated to one
   * validator
   */
  superfluidDelegationsByValidatorDenom(request: DeepPartial<SuperfluidDelegationsByValidatorDenomRequest>, metadata?: grpc.Metadata): Promise<SuperfluidDelegationsByValidatorDenomResponse>;
  /**
   * Returns the amount of a specific denom delegated to a specific validator
   * This is labeled an estimate, because the way it calculates the amount can
   * lead rounding errors from the true delegated amount
   */
  estimateSuperfluidDelegatedAmountByValidatorDenom(request: DeepPartial<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>, metadata?: grpc.Metadata): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
  /** Returns the specified delegations for a specific delegator */
  totalDelegationByDelegator(request: DeepPartial<QueryTotalDelegationByDelegatorRequest>, metadata?: grpc.Metadata): Promise<QueryTotalDelegationByDelegatorResponse>;
  /** Returns a list of whitelisted pool ids to unpool. */
  unpoolWhitelist(request?: DeepPartial<QueryUnpoolWhitelistRequest>, metadata?: grpc.Metadata): Promise<QueryUnpoolWhitelistResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.assetType = this.assetType.bind(this);
    this.allAssets = this.allAssets.bind(this);
    this.assetMultiplier = this.assetMultiplier.bind(this);
    this.allIntermediaryAccounts = this.allIntermediaryAccounts.bind(this);
    this.connectedIntermediaryAccount = this.connectedIntermediaryAccount.bind(this);
    this.totalDelegationByValidatorForDenom = this.totalDelegationByValidatorForDenom.bind(this);
    this.totalSuperfluidDelegations = this.totalSuperfluidDelegations.bind(this);
    this.superfluidDelegationAmount = this.superfluidDelegationAmount.bind(this);
    this.superfluidDelegationsByDelegator = this.superfluidDelegationsByDelegator.bind(this);
    this.superfluidUndelegationsByDelegator = this.superfluidUndelegationsByDelegator.bind(this);
    this.superfluidDelegationsByValidatorDenom = this.superfluidDelegationsByValidatorDenom.bind(this);
    this.estimateSuperfluidDelegatedAmountByValidatorDenom = this.estimateSuperfluidDelegatedAmountByValidatorDenom.bind(this);
    this.totalDelegationByDelegator = this.totalDelegationByDelegator.bind(this);
    this.unpoolWhitelist = this.unpoolWhitelist.bind(this);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
  assetType(request: DeepPartial<AssetTypeRequest>, metadata?: grpc.Metadata): Promise<AssetTypeResponse> {
    return this.rpc.unary(AssetTypeDesc, AssetTypeRequest.fromPartial(request), metadata);
  }
  allAssets(request: DeepPartial<AllAssetsRequest> = {}, metadata?: grpc.Metadata): Promise<AllAssetsResponse> {
    return this.rpc.unary(AllAssetsDesc, AllAssetsRequest.fromPartial(request), metadata);
  }
  assetMultiplier(request: DeepPartial<AssetMultiplierRequest>, metadata?: grpc.Metadata): Promise<AssetMultiplierResponse> {
    return this.rpc.unary(AssetMultiplierDesc, AssetMultiplierRequest.fromPartial(request), metadata);
  }
  allIntermediaryAccounts(request: DeepPartial<AllIntermediaryAccountsRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<AllIntermediaryAccountsResponse> {
    return this.rpc.unary(AllIntermediaryAccountsDesc, AllIntermediaryAccountsRequest.fromPartial(request), metadata);
  }
  connectedIntermediaryAccount(request: DeepPartial<ConnectedIntermediaryAccountRequest>, metadata?: grpc.Metadata): Promise<ConnectedIntermediaryAccountResponse> {
    return this.rpc.unary(ConnectedIntermediaryAccountDesc, ConnectedIntermediaryAccountRequest.fromPartial(request), metadata);
  }
  totalDelegationByValidatorForDenom(request: DeepPartial<QueryTotalDelegationByValidatorForDenomRequest>, metadata?: grpc.Metadata): Promise<QueryTotalDelegationByValidatorForDenomResponse> {
    return this.rpc.unary(QueryTotalDelegationByValidatorForDenomDesc, QueryTotalDelegationByValidatorForDenomRequest.fromPartial(request), metadata);
  }
  totalSuperfluidDelegations(request: DeepPartial<TotalSuperfluidDelegationsRequest> = {}, metadata?: grpc.Metadata): Promise<TotalSuperfluidDelegationsResponse> {
    return this.rpc.unary(TotalSuperfluidDelegationsDesc, TotalSuperfluidDelegationsRequest.fromPartial(request), metadata);
  }
  superfluidDelegationAmount(request: DeepPartial<SuperfluidDelegationAmountRequest>, metadata?: grpc.Metadata): Promise<SuperfluidDelegationAmountResponse> {
    return this.rpc.unary(SuperfluidDelegationAmountDesc, SuperfluidDelegationAmountRequest.fromPartial(request), metadata);
  }
  superfluidDelegationsByDelegator(request: DeepPartial<SuperfluidDelegationsByDelegatorRequest>, metadata?: grpc.Metadata): Promise<SuperfluidDelegationsByDelegatorResponse> {
    return this.rpc.unary(SuperfluidDelegationsByDelegatorDesc, SuperfluidDelegationsByDelegatorRequest.fromPartial(request), metadata);
  }
  superfluidUndelegationsByDelegator(request: DeepPartial<SuperfluidUndelegationsByDelegatorRequest>, metadata?: grpc.Metadata): Promise<SuperfluidUndelegationsByDelegatorResponse> {
    return this.rpc.unary(SuperfluidUndelegationsByDelegatorDesc, SuperfluidUndelegationsByDelegatorRequest.fromPartial(request), metadata);
  }
  superfluidDelegationsByValidatorDenom(request: DeepPartial<SuperfluidDelegationsByValidatorDenomRequest>, metadata?: grpc.Metadata): Promise<SuperfluidDelegationsByValidatorDenomResponse> {
    return this.rpc.unary(SuperfluidDelegationsByValidatorDenomDesc, SuperfluidDelegationsByValidatorDenomRequest.fromPartial(request), metadata);
  }
  estimateSuperfluidDelegatedAmountByValidatorDenom(request: DeepPartial<EstimateSuperfluidDelegatedAmountByValidatorDenomRequest>, metadata?: grpc.Metadata): Promise<EstimateSuperfluidDelegatedAmountByValidatorDenomResponse> {
    return this.rpc.unary(EstimateSuperfluidDelegatedAmountByValidatorDenomDesc, EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.fromPartial(request), metadata);
  }
  totalDelegationByDelegator(request: DeepPartial<QueryTotalDelegationByDelegatorRequest>, metadata?: grpc.Metadata): Promise<QueryTotalDelegationByDelegatorResponse> {
    return this.rpc.unary(QueryTotalDelegationByDelegatorDesc, QueryTotalDelegationByDelegatorRequest.fromPartial(request), metadata);
  }
  unpoolWhitelist(request: DeepPartial<QueryUnpoolWhitelistRequest> = {}, metadata?: grpc.Metadata): Promise<QueryUnpoolWhitelistResponse> {
    return this.rpc.unary(QueryUnpoolWhitelistDesc, QueryUnpoolWhitelistRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "osmosis.superfluid.Query"
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
export const QueryAssetTypeDesc: UnaryMethodDefinitionish = {
  methodName: "AssetType",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return AssetTypeRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...AssetTypeResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAllAssetsDesc: UnaryMethodDefinitionish = {
  methodName: "AllAssets",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return AllAssetsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...AllAssetsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAssetMultiplierDesc: UnaryMethodDefinitionish = {
  methodName: "AssetMultiplier",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return AssetMultiplierRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...AssetMultiplierResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAllIntermediaryAccountsDesc: UnaryMethodDefinitionish = {
  methodName: "AllIntermediaryAccounts",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return AllIntermediaryAccountsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...AllIntermediaryAccountsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryConnectedIntermediaryAccountDesc: UnaryMethodDefinitionish = {
  methodName: "ConnectedIntermediaryAccount",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return ConnectedIntermediaryAccountRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...ConnectedIntermediaryAccountResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryTotalDelegationByValidatorForDenomDesc: UnaryMethodDefinitionish = {
  methodName: "TotalDelegationByValidatorForDenom",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTotalDelegationByValidatorForDenomRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTotalDelegationByValidatorForDenomResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryTotalSuperfluidDelegationsDesc: UnaryMethodDefinitionish = {
  methodName: "TotalSuperfluidDelegations",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return TotalSuperfluidDelegationsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...TotalSuperfluidDelegationsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QuerySuperfluidDelegationAmountDesc: UnaryMethodDefinitionish = {
  methodName: "SuperfluidDelegationAmount",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return SuperfluidDelegationAmountRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...SuperfluidDelegationAmountResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QuerySuperfluidDelegationsByDelegatorDesc: UnaryMethodDefinitionish = {
  methodName: "SuperfluidDelegationsByDelegator",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return SuperfluidDelegationsByDelegatorRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...SuperfluidDelegationsByDelegatorResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QuerySuperfluidUndelegationsByDelegatorDesc: UnaryMethodDefinitionish = {
  methodName: "SuperfluidUndelegationsByDelegator",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return SuperfluidUndelegationsByDelegatorRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...SuperfluidUndelegationsByDelegatorResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QuerySuperfluidDelegationsByValidatorDenomDesc: UnaryMethodDefinitionish = {
  methodName: "SuperfluidDelegationsByValidatorDenom",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return SuperfluidDelegationsByValidatorDenomRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...SuperfluidDelegationsByValidatorDenomResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryEstimateSuperfluidDelegatedAmountByValidatorDenomDesc: UnaryMethodDefinitionish = {
  methodName: "EstimateSuperfluidDelegatedAmountByValidatorDenom",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return EstimateSuperfluidDelegatedAmountByValidatorDenomRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...EstimateSuperfluidDelegatedAmountByValidatorDenomResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryTotalDelegationByDelegatorDesc: UnaryMethodDefinitionish = {
  methodName: "TotalDelegationByDelegator",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTotalDelegationByDelegatorRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTotalDelegationByDelegatorResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryUnpoolWhitelistDesc: UnaryMethodDefinitionish = {
  methodName: "UnpoolWhitelist",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryUnpoolWhitelistRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryUnpoolWhitelistResponse.decode(data),
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