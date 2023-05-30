import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryCurrentPlanRequest, QueryCurrentPlanResponse, QueryAppliedPlanRequest, QueryAppliedPlanResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryModuleVersionsRequest, QueryModuleVersionsResponse, QueryAuthorityRequest, QueryAuthorityResponse } from "./query";
/** Query defines the gRPC upgrade querier service. */
export interface Query {
  /** CurrentPlan queries the current upgrade plan. */
  currentPlan(request?: DeepPartial<QueryCurrentPlanRequest>, metadata?: grpc.Metadata): Promise<QueryCurrentPlanResponse>;
  /** AppliedPlan queries a previously applied upgrade plan by its name. */
  appliedPlan(request: DeepPartial<QueryAppliedPlanRequest>, metadata?: grpc.Metadata): Promise<QueryAppliedPlanResponse>;
  /**
   * UpgradedConsensusState queries the consensus state that will serve
   * as a trusted kernel for the next version of this chain. It will only be
   * stored at the last height of this chain.
   * UpgradedConsensusState RPC not supported with legacy querier
   * This rpc is deprecated now that IBC has its own replacement
   * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
   */
  upgradedConsensusState(request: DeepPartial<QueryUpgradedConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryUpgradedConsensusStateResponse>;
  /**
   * ModuleVersions queries the list of module versions from state.
   * 
   * Since: cosmos-sdk 0.43
   */
  moduleVersions(request: DeepPartial<QueryModuleVersionsRequest>, metadata?: grpc.Metadata): Promise<QueryModuleVersionsResponse>;
  /** Returns the account with authority to conduct upgrades */
  authority(request?: DeepPartial<QueryAuthorityRequest>, metadata?: grpc.Metadata): Promise<QueryAuthorityResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.currentPlan = this.currentPlan.bind(this);
    this.appliedPlan = this.appliedPlan.bind(this);
    this.upgradedConsensusState = this.upgradedConsensusState.bind(this);
    this.moduleVersions = this.moduleVersions.bind(this);
    this.authority = this.authority.bind(this);
  }
  currentPlan(request: DeepPartial<QueryCurrentPlanRequest> = {}, metadata?: grpc.Metadata): Promise<QueryCurrentPlanResponse> {
    return this.rpc.unary(QueryCurrentPlanDesc, QueryCurrentPlanRequest.fromPartial(request), metadata);
  }
  appliedPlan(request: DeepPartial<QueryAppliedPlanRequest>, metadata?: grpc.Metadata): Promise<QueryAppliedPlanResponse> {
    return this.rpc.unary(QueryAppliedPlanDesc, QueryAppliedPlanRequest.fromPartial(request), metadata);
  }
  upgradedConsensusState(request: DeepPartial<QueryUpgradedConsensusStateRequest>, metadata?: grpc.Metadata): Promise<QueryUpgradedConsensusStateResponse> {
    return this.rpc.unary(QueryUpgradedConsensusStateDesc, QueryUpgradedConsensusStateRequest.fromPartial(request), metadata);
  }
  moduleVersions(request: DeepPartial<QueryModuleVersionsRequest>, metadata?: grpc.Metadata): Promise<QueryModuleVersionsResponse> {
    return this.rpc.unary(QueryModuleVersionsDesc, QueryModuleVersionsRequest.fromPartial(request), metadata);
  }
  authority(request: DeepPartial<QueryAuthorityRequest> = {}, metadata?: grpc.Metadata): Promise<QueryAuthorityResponse> {
    return this.rpc.unary(QueryAuthorityDesc, QueryAuthorityRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "cosmos.upgrade.v1beta1.Query"
};
export const QueryCurrentPlanDesc: UnaryMethodDefinitionish = {
  methodName: "CurrentPlan",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryCurrentPlanRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryCurrentPlanResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAppliedPlanDesc: UnaryMethodDefinitionish = {
  methodName: "AppliedPlan",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAppliedPlanRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAppliedPlanResponse.decode(data),
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
export const QueryModuleVersionsDesc: UnaryMethodDefinitionish = {
  methodName: "ModuleVersions",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryModuleVersionsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryModuleVersionsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAuthorityDesc: UnaryMethodDefinitionish = {
  methodName: "Authority",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryAuthorityRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryAuthorityResponse.decode(data),
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