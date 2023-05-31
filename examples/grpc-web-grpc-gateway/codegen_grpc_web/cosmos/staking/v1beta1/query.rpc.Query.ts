import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryValidatorsRequest, QueryValidatorsResponse, QueryValidatorRequest, QueryValidatorResponse, QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse, QueryDelegationRequest, QueryDelegationResponse, QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, QueryRedelegationsRequest, QueryRedelegationsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse, QueryHistoricalInfoRequest, QueryHistoricalInfoResponse, QueryPoolRequest, QueryPoolResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Validators queries all validators that match the given status. */
  validators(request: DeepPartial<QueryValidatorsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorsResponse>;
  /** Validator queries validator info for given validator address. */
  validator(request: DeepPartial<QueryValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorResponse>;
  /** ValidatorDelegations queries delegate info for given validator. */
  validatorDelegations(request: DeepPartial<QueryValidatorDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorDelegationsResponse>;
  /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
  validatorUnbondingDelegations(request: DeepPartial<QueryValidatorUnbondingDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorUnbondingDelegationsResponse>;
  /** Delegation queries delegate info for given validator delegator pair. */
  delegation(request: DeepPartial<QueryDelegationRequest>, metadata?: grpc.Metadata): Promise<QueryDelegationResponse>;
  /**
   * UnbondingDelegation queries unbonding info for given validator delegator
   * pair.
   */
  unbondingDelegation(request: DeepPartial<QueryUnbondingDelegationRequest>, metadata?: grpc.Metadata): Promise<QueryUnbondingDelegationResponse>;
  /** DelegatorDelegations queries all delegations of a given delegator address. */
  delegatorDelegations(request: DeepPartial<QueryDelegatorDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorDelegationsResponse>;
  /**
   * DelegatorUnbondingDelegations queries all unbonding delegations of a given
   * delegator address.
   */
  delegatorUnbondingDelegations(request: DeepPartial<QueryDelegatorUnbondingDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorUnbondingDelegationsResponse>;
  /** Redelegations queries redelegations of given address. */
  redelegations(request: DeepPartial<QueryRedelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryRedelegationsResponse>;
  /**
   * DelegatorValidators queries all validators info for given delegator
   * address.
   */
  delegatorValidators(request: DeepPartial<QueryDelegatorValidatorsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorValidatorsResponse>;
  /**
   * DelegatorValidator queries validator info for given delegator validator
   * pair.
   */
  delegatorValidator(request: DeepPartial<QueryDelegatorValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorValidatorResponse>;
  /** HistoricalInfo queries the historical info for given height. */
  historicalInfo(request: DeepPartial<QueryHistoricalInfoRequest>, metadata?: grpc.Metadata): Promise<QueryHistoricalInfoResponse>;
  /** Pool queries the pool info. */
  pool(request?: DeepPartial<QueryPoolRequest>, metadata?: grpc.Metadata): Promise<QueryPoolResponse>;
  /** Parameters queries the staking parameters. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.validators = this.validators.bind(this);
    this.validator = this.validator.bind(this);
    this.validatorDelegations = this.validatorDelegations.bind(this);
    this.validatorUnbondingDelegations = this.validatorUnbondingDelegations.bind(this);
    this.delegation = this.delegation.bind(this);
    this.unbondingDelegation = this.unbondingDelegation.bind(this);
    this.delegatorDelegations = this.delegatorDelegations.bind(this);
    this.delegatorUnbondingDelegations = this.delegatorUnbondingDelegations.bind(this);
    this.redelegations = this.redelegations.bind(this);
    this.delegatorValidators = this.delegatorValidators.bind(this);
    this.delegatorValidator = this.delegatorValidator.bind(this);
    this.historicalInfo = this.historicalInfo.bind(this);
    this.pool = this.pool.bind(this);
    this.params = this.params.bind(this);
  }
  validators(request: DeepPartial<QueryValidatorsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorsResponse> {
    return this.rpc.unary(QueryValidatorsDesc, QueryValidatorsRequest.fromPartial(request), metadata);
  }
  validator(request: DeepPartial<QueryValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorResponse> {
    return this.rpc.unary(QueryValidatorDesc, QueryValidatorRequest.fromPartial(request), metadata);
  }
  validatorDelegations(request: DeepPartial<QueryValidatorDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorDelegationsResponse> {
    return this.rpc.unary(QueryValidatorDelegationsDesc, QueryValidatorDelegationsRequest.fromPartial(request), metadata);
  }
  validatorUnbondingDelegations(request: DeepPartial<QueryValidatorUnbondingDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorUnbondingDelegationsResponse> {
    return this.rpc.unary(QueryValidatorUnbondingDelegationsDesc, QueryValidatorUnbondingDelegationsRequest.fromPartial(request), metadata);
  }
  delegation(request: DeepPartial<QueryDelegationRequest>, metadata?: grpc.Metadata): Promise<QueryDelegationResponse> {
    return this.rpc.unary(QueryDelegationDesc, QueryDelegationRequest.fromPartial(request), metadata);
  }
  unbondingDelegation(request: DeepPartial<QueryUnbondingDelegationRequest>, metadata?: grpc.Metadata): Promise<QueryUnbondingDelegationResponse> {
    return this.rpc.unary(QueryUnbondingDelegationDesc, QueryUnbondingDelegationRequest.fromPartial(request), metadata);
  }
  delegatorDelegations(request: DeepPartial<QueryDelegatorDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorDelegationsResponse> {
    return this.rpc.unary(QueryDelegatorDelegationsDesc, QueryDelegatorDelegationsRequest.fromPartial(request), metadata);
  }
  delegatorUnbondingDelegations(request: DeepPartial<QueryDelegatorUnbondingDelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorUnbondingDelegationsResponse> {
    return this.rpc.unary(QueryDelegatorUnbondingDelegationsDesc, QueryDelegatorUnbondingDelegationsRequest.fromPartial(request), metadata);
  }
  redelegations(request: DeepPartial<QueryRedelegationsRequest>, metadata?: grpc.Metadata): Promise<QueryRedelegationsResponse> {
    return this.rpc.unary(QueryRedelegationsDesc, QueryRedelegationsRequest.fromPartial(request), metadata);
  }
  delegatorValidators(request: DeepPartial<QueryDelegatorValidatorsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorValidatorsResponse> {
    return this.rpc.unary(QueryDelegatorValidatorsDesc, QueryDelegatorValidatorsRequest.fromPartial(request), metadata);
  }
  delegatorValidator(request: DeepPartial<QueryDelegatorValidatorRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorValidatorResponse> {
    return this.rpc.unary(QueryDelegatorValidatorDesc, QueryDelegatorValidatorRequest.fromPartial(request), metadata);
  }
  historicalInfo(request: DeepPartial<QueryHistoricalInfoRequest>, metadata?: grpc.Metadata): Promise<QueryHistoricalInfoResponse> {
    return this.rpc.unary(QueryHistoricalInfoDesc, QueryHistoricalInfoRequest.fromPartial(request), metadata);
  }
  pool(request: DeepPartial<QueryPoolRequest> = {}, metadata?: grpc.Metadata): Promise<QueryPoolResponse> {
    return this.rpc.unary(QueryPoolDesc, QueryPoolRequest.fromPartial(request), metadata);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "cosmos.staking.v1beta1.Query"
};
export const QueryValidatorsDesc: UnaryMethodDefinitionish = {
  methodName: "Validators",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryValidatorsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryValidatorsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryValidatorDesc: UnaryMethodDefinitionish = {
  methodName: "Validator",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryValidatorRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryValidatorResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryValidatorDelegationsDesc: UnaryMethodDefinitionish = {
  methodName: "ValidatorDelegations",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryValidatorDelegationsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryValidatorDelegationsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryValidatorUnbondingDelegationsDesc: UnaryMethodDefinitionish = {
  methodName: "ValidatorUnbondingDelegations",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryValidatorUnbondingDelegationsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryValidatorUnbondingDelegationsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryDelegationDesc: UnaryMethodDefinitionish = {
  methodName: "Delegation",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryDelegationRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDelegationResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryUnbondingDelegationDesc: UnaryMethodDefinitionish = {
  methodName: "UnbondingDelegation",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryUnbondingDelegationRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryUnbondingDelegationResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryDelegatorDelegationsDesc: UnaryMethodDefinitionish = {
  methodName: "DelegatorDelegations",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryDelegatorDelegationsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDelegatorDelegationsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryDelegatorUnbondingDelegationsDesc: UnaryMethodDefinitionish = {
  methodName: "DelegatorUnbondingDelegations",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryDelegatorUnbondingDelegationsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDelegatorUnbondingDelegationsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryRedelegationsDesc: UnaryMethodDefinitionish = {
  methodName: "Redelegations",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryRedelegationsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryRedelegationsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryDelegatorValidatorsDesc: UnaryMethodDefinitionish = {
  methodName: "DelegatorValidators",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryDelegatorValidatorsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDelegatorValidatorsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryDelegatorValidatorDesc: UnaryMethodDefinitionish = {
  methodName: "DelegatorValidator",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryDelegatorValidatorRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDelegatorValidatorResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryHistoricalInfoDesc: UnaryMethodDefinitionish = {
  methodName: "HistoricalInfo",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryHistoricalInfoRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryHistoricalInfoResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryPoolDesc: UnaryMethodDefinitionish = {
  methodName: "Pool",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryPoolRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryPoolResponse.decode(data),
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