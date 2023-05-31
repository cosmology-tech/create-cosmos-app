import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryParamsRequest, QueryParamsResponse, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse, QueryValidatorCommissionRequest, QueryValidatorCommissionResponse, QueryValidatorSlashesRequest, QueryValidatorSlashesResponse, QueryDelegationRewardsRequest, QueryDelegationRewardsResponse, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryCommunityPoolRequest, QueryCommunityPoolResponse } from "./query";
/** Query defines the gRPC querier service for distribution module. */
export interface Query {
  /** Params queries params of the distribution module. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** ValidatorOutstandingRewards queries rewards of a validator address. */
  validatorOutstandingRewards(request: DeepPartial<QueryValidatorOutstandingRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorOutstandingRewardsResponse>;
  /** ValidatorCommission queries accumulated commission for a validator. */
  validatorCommission(request: DeepPartial<QueryValidatorCommissionRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorCommissionResponse>;
  /** ValidatorSlashes queries slash events of a validator. */
  validatorSlashes(request: DeepPartial<QueryValidatorSlashesRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorSlashesResponse>;
  /** DelegationRewards queries the total rewards accrued by a delegation. */
  delegationRewards(request: DeepPartial<QueryDelegationRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegationRewardsResponse>;
  /**
   * DelegationTotalRewards queries the total rewards accrued by a each
   * validator.
   */
  delegationTotalRewards(request: DeepPartial<QueryDelegationTotalRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegationTotalRewardsResponse>;
  /** DelegatorValidators queries the validators of a delegator. */
  delegatorValidators(request: DeepPartial<QueryDelegatorValidatorsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorValidatorsResponse>;
  /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
  delegatorWithdrawAddress(request: DeepPartial<QueryDelegatorWithdrawAddressRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorWithdrawAddressResponse>;
  /** CommunityPool queries the community pool coins. */
  communityPool(request?: DeepPartial<QueryCommunityPoolRequest>, metadata?: grpc.Metadata): Promise<QueryCommunityPoolResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.validatorOutstandingRewards = this.validatorOutstandingRewards.bind(this);
    this.validatorCommission = this.validatorCommission.bind(this);
    this.validatorSlashes = this.validatorSlashes.bind(this);
    this.delegationRewards = this.delegationRewards.bind(this);
    this.delegationTotalRewards = this.delegationTotalRewards.bind(this);
    this.delegatorValidators = this.delegatorValidators.bind(this);
    this.delegatorWithdrawAddress = this.delegatorWithdrawAddress.bind(this);
    this.communityPool = this.communityPool.bind(this);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
  validatorOutstandingRewards(request: DeepPartial<QueryValidatorOutstandingRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorOutstandingRewardsResponse> {
    return this.rpc.unary(QueryValidatorOutstandingRewardsDesc, QueryValidatorOutstandingRewardsRequest.fromPartial(request), metadata);
  }
  validatorCommission(request: DeepPartial<QueryValidatorCommissionRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorCommissionResponse> {
    return this.rpc.unary(QueryValidatorCommissionDesc, QueryValidatorCommissionRequest.fromPartial(request), metadata);
  }
  validatorSlashes(request: DeepPartial<QueryValidatorSlashesRequest>, metadata?: grpc.Metadata): Promise<QueryValidatorSlashesResponse> {
    return this.rpc.unary(QueryValidatorSlashesDesc, QueryValidatorSlashesRequest.fromPartial(request), metadata);
  }
  delegationRewards(request: DeepPartial<QueryDelegationRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegationRewardsResponse> {
    return this.rpc.unary(QueryDelegationRewardsDesc, QueryDelegationRewardsRequest.fromPartial(request), metadata);
  }
  delegationTotalRewards(request: DeepPartial<QueryDelegationTotalRewardsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegationTotalRewardsResponse> {
    return this.rpc.unary(QueryDelegationTotalRewardsDesc, QueryDelegationTotalRewardsRequest.fromPartial(request), metadata);
  }
  delegatorValidators(request: DeepPartial<QueryDelegatorValidatorsRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorValidatorsResponse> {
    return this.rpc.unary(QueryDelegatorValidatorsDesc, QueryDelegatorValidatorsRequest.fromPartial(request), metadata);
  }
  delegatorWithdrawAddress(request: DeepPartial<QueryDelegatorWithdrawAddressRequest>, metadata?: grpc.Metadata): Promise<QueryDelegatorWithdrawAddressResponse> {
    return this.rpc.unary(QueryDelegatorWithdrawAddressDesc, QueryDelegatorWithdrawAddressRequest.fromPartial(request), metadata);
  }
  communityPool(request: DeepPartial<QueryCommunityPoolRequest> = {}, metadata?: grpc.Metadata): Promise<QueryCommunityPoolResponse> {
    return this.rpc.unary(QueryCommunityPoolDesc, QueryCommunityPoolRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "cosmos.distribution.v1beta1.Query"
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
export const QueryValidatorOutstandingRewardsDesc: UnaryMethodDefinitionish = {
  methodName: "ValidatorOutstandingRewards",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryValidatorOutstandingRewardsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryValidatorOutstandingRewardsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryValidatorCommissionDesc: UnaryMethodDefinitionish = {
  methodName: "ValidatorCommission",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryValidatorCommissionRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryValidatorCommissionResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryValidatorSlashesDesc: UnaryMethodDefinitionish = {
  methodName: "ValidatorSlashes",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryValidatorSlashesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryValidatorSlashesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryDelegationRewardsDesc: UnaryMethodDefinitionish = {
  methodName: "DelegationRewards",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryDelegationRewardsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDelegationRewardsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryDelegationTotalRewardsDesc: UnaryMethodDefinitionish = {
  methodName: "DelegationTotalRewards",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryDelegationTotalRewardsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDelegationTotalRewardsResponse.decode(data),
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
export const QueryDelegatorWithdrawAddressDesc: UnaryMethodDefinitionish = {
  methodName: "DelegatorWithdrawAddress",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryDelegatorWithdrawAddressRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDelegatorWithdrawAddressResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryCommunityPoolDesc: UnaryMethodDefinitionish = {
  methodName: "CommunityPool",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryCommunityPoolRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryCommunityPoolResponse.decode(data),
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