import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../grpc-web";
import { DeepPartial } from "../../helpers";
import { BrowserHeaders } from "browser-headers";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse, GaugeByIDRequest, GaugeByIDResponse, GaugesRequest, GaugesResponse, ActiveGaugesRequest, ActiveGaugesResponse, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse, UpcomingGaugesRequest, UpcomingGaugesResponse, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse, RewardsEstRequest, RewardsEstResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
  /** ModuleToDistributeCoins returns coins that are going to be distributed */
  moduleToDistributeCoins(request?: DeepPartial<ModuleToDistributeCoinsRequest>, metadata?: grpc.Metadata): Promise<ModuleToDistributeCoinsResponse>;
  /** GaugeByID returns gauges by their respective ID */
  gaugeByID(request: DeepPartial<GaugeByIDRequest>, metadata?: grpc.Metadata): Promise<GaugeByIDResponse>;
  /** Gauges returns both upcoming and active gauges */
  gauges(request?: DeepPartial<GaugesRequest>, metadata?: grpc.Metadata): Promise<GaugesResponse>;
  /** ActiveGauges returns active gauges */
  activeGauges(request?: DeepPartial<ActiveGaugesRequest>, metadata?: grpc.Metadata): Promise<ActiveGaugesResponse>;
  /** ActiveGaugesPerDenom returns active gauges by denom */
  activeGaugesPerDenom(request: DeepPartial<ActiveGaugesPerDenomRequest>, metadata?: grpc.Metadata): Promise<ActiveGaugesPerDenomResponse>;
  /** Returns scheduled gauges that have not yet occured */
  upcomingGauges(request?: DeepPartial<UpcomingGaugesRequest>, metadata?: grpc.Metadata): Promise<UpcomingGaugesResponse>;
  /**
   * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
   * by denom
   */
  upcomingGaugesPerDenom(request: DeepPartial<UpcomingGaugesPerDenomRequest>, metadata?: grpc.Metadata): Promise<UpcomingGaugesPerDenomResponse>;
  /**
   * RewardsEst returns an estimate of the rewards from now until a specified
   * time in the future The querier either provides an address or a set of locks
   * for which they want to find the associated rewards
   */
  rewardsEst(request: DeepPartial<RewardsEstRequest>, metadata?: grpc.Metadata): Promise<RewardsEstResponse>;
  /**
   * LockableDurations returns lockable durations that are valid to distribute
   * incentives for
   */
  lockableDurations(request?: DeepPartial<QueryLockableDurationsRequest>, metadata?: grpc.Metadata): Promise<QueryLockableDurationsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.moduleToDistributeCoins = this.moduleToDistributeCoins.bind(this);
    this.gaugeByID = this.gaugeByID.bind(this);
    this.gauges = this.gauges.bind(this);
    this.activeGauges = this.activeGauges.bind(this);
    this.activeGaugesPerDenom = this.activeGaugesPerDenom.bind(this);
    this.upcomingGauges = this.upcomingGauges.bind(this);
    this.upcomingGaugesPerDenom = this.upcomingGaugesPerDenom.bind(this);
    this.rewardsEst = this.rewardsEst.bind(this);
    this.lockableDurations = this.lockableDurations.bind(this);
  }
  moduleToDistributeCoins(request: DeepPartial<ModuleToDistributeCoinsRequest> = {}, metadata?: grpc.Metadata): Promise<ModuleToDistributeCoinsResponse> {
    return this.rpc.unary(ModuleToDistributeCoinsDesc, ModuleToDistributeCoinsRequest.fromPartial(request), metadata);
  }
  gaugeByID(request: DeepPartial<GaugeByIDRequest>, metadata?: grpc.Metadata): Promise<GaugeByIDResponse> {
    return this.rpc.unary(GaugeByIDDesc, GaugeByIDRequest.fromPartial(request), metadata);
  }
  gauges(request: DeepPartial<GaugesRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<GaugesResponse> {
    return this.rpc.unary(GaugesDesc, GaugesRequest.fromPartial(request), metadata);
  }
  activeGauges(request: DeepPartial<ActiveGaugesRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<ActiveGaugesResponse> {
    return this.rpc.unary(ActiveGaugesDesc, ActiveGaugesRequest.fromPartial(request), metadata);
  }
  activeGaugesPerDenom(request: DeepPartial<ActiveGaugesPerDenomRequest>, metadata?: grpc.Metadata): Promise<ActiveGaugesPerDenomResponse> {
    return this.rpc.unary(ActiveGaugesPerDenomDesc, ActiveGaugesPerDenomRequest.fromPartial(request), metadata);
  }
  upcomingGauges(request: DeepPartial<UpcomingGaugesRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<UpcomingGaugesResponse> {
    return this.rpc.unary(UpcomingGaugesDesc, UpcomingGaugesRequest.fromPartial(request), metadata);
  }
  upcomingGaugesPerDenom(request: DeepPartial<UpcomingGaugesPerDenomRequest>, metadata?: grpc.Metadata): Promise<UpcomingGaugesPerDenomResponse> {
    return this.rpc.unary(UpcomingGaugesPerDenomDesc, UpcomingGaugesPerDenomRequest.fromPartial(request), metadata);
  }
  rewardsEst(request: DeepPartial<RewardsEstRequest>, metadata?: grpc.Metadata): Promise<RewardsEstResponse> {
    return this.rpc.unary(RewardsEstDesc, RewardsEstRequest.fromPartial(request), metadata);
  }
  lockableDurations(request: DeepPartial<QueryLockableDurationsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryLockableDurationsResponse> {
    return this.rpc.unary(QueryLockableDurationsDesc, QueryLockableDurationsRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "osmosis.incentives.Query"
};
export const QueryModuleToDistributeCoinsDesc: UnaryMethodDefinitionish = {
  methodName: "ModuleToDistributeCoins",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return ModuleToDistributeCoinsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...ModuleToDistributeCoinsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryGaugeByIDDesc: UnaryMethodDefinitionish = {
  methodName: "GaugeByID",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return GaugeByIDRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...GaugeByIDResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryGaugesDesc: UnaryMethodDefinitionish = {
  methodName: "Gauges",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return GaugesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...GaugesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryActiveGaugesDesc: UnaryMethodDefinitionish = {
  methodName: "ActiveGauges",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return ActiveGaugesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...ActiveGaugesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryActiveGaugesPerDenomDesc: UnaryMethodDefinitionish = {
  methodName: "ActiveGaugesPerDenom",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return ActiveGaugesPerDenomRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...ActiveGaugesPerDenomResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryUpcomingGaugesDesc: UnaryMethodDefinitionish = {
  methodName: "UpcomingGauges",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return UpcomingGaugesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...UpcomingGaugesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryUpcomingGaugesPerDenomDesc: UnaryMethodDefinitionish = {
  methodName: "UpcomingGaugesPerDenom",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return UpcomingGaugesPerDenomRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...UpcomingGaugesPerDenomResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryRewardsEstDesc: UnaryMethodDefinitionish = {
  methodName: "RewardsEst",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return RewardsEstRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...RewardsEstResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryLockableDurationsDesc: UnaryMethodDefinitionish = {
  methodName: "LockableDurations",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryLockableDurationsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryLockableDurationsResponse.decode(data),
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