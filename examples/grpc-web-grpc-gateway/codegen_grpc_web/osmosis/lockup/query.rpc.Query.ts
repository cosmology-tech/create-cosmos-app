import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../grpc-web";
import { DeepPartial } from "../../helpers";
import { BrowserHeaders } from "browser-headers";
import { ModuleBalanceRequest, ModuleBalanceResponse, ModuleLockedAmountRequest, ModuleLockedAmountResponse, AccountUnlockableCoinsRequest, AccountUnlockableCoinsResponse, AccountUnlockingCoinsRequest, AccountUnlockingCoinsResponse, AccountLockedCoinsRequest, AccountLockedCoinsResponse, AccountLockedPastTimeRequest, AccountLockedPastTimeResponse, AccountLockedPastTimeNotUnlockingOnlyRequest, AccountLockedPastTimeNotUnlockingOnlyResponse, AccountUnlockedBeforeTimeRequest, AccountUnlockedBeforeTimeResponse, AccountLockedPastTimeDenomRequest, AccountLockedPastTimeDenomResponse, LockedDenomRequest, LockedDenomResponse, LockedRequest, LockedResponse, SyntheticLockupsByLockupIDRequest, SyntheticLockupsByLockupIDResponse, AccountLockedLongerDurationRequest, AccountLockedLongerDurationResponse, AccountLockedDurationRequest, AccountLockedDurationResponse, AccountLockedLongerDurationNotUnlockingOnlyRequest, AccountLockedLongerDurationNotUnlockingOnlyResponse, AccountLockedLongerDurationDenomRequest, AccountLockedLongerDurationDenomResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Return full balance of the module */
  moduleBalance(request?: DeepPartial<ModuleBalanceRequest>, metadata?: grpc.Metadata): Promise<ModuleBalanceResponse>;
  /** Return locked balance of the module */
  moduleLockedAmount(request?: DeepPartial<ModuleLockedAmountRequest>, metadata?: grpc.Metadata): Promise<ModuleLockedAmountResponse>;
  /** Returns unlockable coins which are not withdrawn yet */
  accountUnlockableCoins(request: DeepPartial<AccountUnlockableCoinsRequest>, metadata?: grpc.Metadata): Promise<AccountUnlockableCoinsResponse>;
  /** Returns unlocking coins */
  accountUnlockingCoins(request: DeepPartial<AccountUnlockingCoinsRequest>, metadata?: grpc.Metadata): Promise<AccountUnlockingCoinsResponse>;
  /** Return a locked coins that can't be withdrawn */
  accountLockedCoins(request: DeepPartial<AccountLockedCoinsRequest>, metadata?: grpc.Metadata): Promise<AccountLockedCoinsResponse>;
  /** Returns locked records of an account with unlock time beyond timestamp */
  accountLockedPastTime(request: DeepPartial<AccountLockedPastTimeRequest>, metadata?: grpc.Metadata): Promise<AccountLockedPastTimeResponse>;
  /**
   * Returns locked records of an account with unlock time beyond timestamp
   * excluding tokens started unlocking
   */
  accountLockedPastTimeNotUnlockingOnly(request: DeepPartial<AccountLockedPastTimeNotUnlockingOnlyRequest>, metadata?: grpc.Metadata): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse>;
  /** Returns unlocked records with unlock time before timestamp */
  accountUnlockedBeforeTime(request: DeepPartial<AccountUnlockedBeforeTimeRequest>, metadata?: grpc.Metadata): Promise<AccountUnlockedBeforeTimeResponse>;
  /** Returns lock records by address, timestamp, denom */
  accountLockedPastTimeDenom(request: DeepPartial<AccountLockedPastTimeDenomRequest>, metadata?: grpc.Metadata): Promise<AccountLockedPastTimeDenomResponse>;
  /** Returns total locked per denom with longer past given time */
  lockedDenom(request: DeepPartial<LockedDenomRequest>, metadata?: grpc.Metadata): Promise<LockedDenomResponse>;
  /** Returns lock record by id */
  lockedByID(request: DeepPartial<LockedRequest>, metadata?: grpc.Metadata): Promise<LockedResponse>;
  /** Returns synthetic lockups by native lockup id */
  syntheticLockupsByLockupID(request: DeepPartial<SyntheticLockupsByLockupIDRequest>, metadata?: grpc.Metadata): Promise<SyntheticLockupsByLockupIDResponse>;
  /** Returns account locked records with longer duration */
  accountLockedLongerDuration(request: DeepPartial<AccountLockedLongerDurationRequest>, metadata?: grpc.Metadata): Promise<AccountLockedLongerDurationResponse>;
  /** Returns account locked records with a specific duration */
  accountLockedDuration(request: DeepPartial<AccountLockedDurationRequest>, metadata?: grpc.Metadata): Promise<AccountLockedDurationResponse>;
  /**
   * Returns account locked records with longer duration excluding tokens
   * started unlocking
   */
  accountLockedLongerDurationNotUnlockingOnly(request: DeepPartial<AccountLockedLongerDurationNotUnlockingOnlyRequest>, metadata?: grpc.Metadata): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse>;
  /** Returns account's locked records for a denom with longer duration */
  accountLockedLongerDurationDenom(request: DeepPartial<AccountLockedLongerDurationDenomRequest>, metadata?: grpc.Metadata): Promise<AccountLockedLongerDurationDenomResponse>;
  /** Params returns lockup params. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.moduleBalance = this.moduleBalance.bind(this);
    this.moduleLockedAmount = this.moduleLockedAmount.bind(this);
    this.accountUnlockableCoins = this.accountUnlockableCoins.bind(this);
    this.accountUnlockingCoins = this.accountUnlockingCoins.bind(this);
    this.accountLockedCoins = this.accountLockedCoins.bind(this);
    this.accountLockedPastTime = this.accountLockedPastTime.bind(this);
    this.accountLockedPastTimeNotUnlockingOnly = this.accountLockedPastTimeNotUnlockingOnly.bind(this);
    this.accountUnlockedBeforeTime = this.accountUnlockedBeforeTime.bind(this);
    this.accountLockedPastTimeDenom = this.accountLockedPastTimeDenom.bind(this);
    this.lockedDenom = this.lockedDenom.bind(this);
    this.lockedByID = this.lockedByID.bind(this);
    this.syntheticLockupsByLockupID = this.syntheticLockupsByLockupID.bind(this);
    this.accountLockedLongerDuration = this.accountLockedLongerDuration.bind(this);
    this.accountLockedDuration = this.accountLockedDuration.bind(this);
    this.accountLockedLongerDurationNotUnlockingOnly = this.accountLockedLongerDurationNotUnlockingOnly.bind(this);
    this.accountLockedLongerDurationDenom = this.accountLockedLongerDurationDenom.bind(this);
    this.params = this.params.bind(this);
  }
  moduleBalance(request: DeepPartial<ModuleBalanceRequest> = {}, metadata?: grpc.Metadata): Promise<ModuleBalanceResponse> {
    return this.rpc.unary(ModuleBalanceDesc, ModuleBalanceRequest.fromPartial(request), metadata);
  }
  moduleLockedAmount(request: DeepPartial<ModuleLockedAmountRequest> = {}, metadata?: grpc.Metadata): Promise<ModuleLockedAmountResponse> {
    return this.rpc.unary(ModuleLockedAmountDesc, ModuleLockedAmountRequest.fromPartial(request), metadata);
  }
  accountUnlockableCoins(request: DeepPartial<AccountUnlockableCoinsRequest>, metadata?: grpc.Metadata): Promise<AccountUnlockableCoinsResponse> {
    return this.rpc.unary(AccountUnlockableCoinsDesc, AccountUnlockableCoinsRequest.fromPartial(request), metadata);
  }
  accountUnlockingCoins(request: DeepPartial<AccountUnlockingCoinsRequest>, metadata?: grpc.Metadata): Promise<AccountUnlockingCoinsResponse> {
    return this.rpc.unary(AccountUnlockingCoinsDesc, AccountUnlockingCoinsRequest.fromPartial(request), metadata);
  }
  accountLockedCoins(request: DeepPartial<AccountLockedCoinsRequest>, metadata?: grpc.Metadata): Promise<AccountLockedCoinsResponse> {
    return this.rpc.unary(AccountLockedCoinsDesc, AccountLockedCoinsRequest.fromPartial(request), metadata);
  }
  accountLockedPastTime(request: DeepPartial<AccountLockedPastTimeRequest>, metadata?: grpc.Metadata): Promise<AccountLockedPastTimeResponse> {
    return this.rpc.unary(AccountLockedPastTimeDesc, AccountLockedPastTimeRequest.fromPartial(request), metadata);
  }
  accountLockedPastTimeNotUnlockingOnly(request: DeepPartial<AccountLockedPastTimeNotUnlockingOnlyRequest>, metadata?: grpc.Metadata): Promise<AccountLockedPastTimeNotUnlockingOnlyResponse> {
    return this.rpc.unary(AccountLockedPastTimeNotUnlockingOnlyDesc, AccountLockedPastTimeNotUnlockingOnlyRequest.fromPartial(request), metadata);
  }
  accountUnlockedBeforeTime(request: DeepPartial<AccountUnlockedBeforeTimeRequest>, metadata?: grpc.Metadata): Promise<AccountUnlockedBeforeTimeResponse> {
    return this.rpc.unary(AccountUnlockedBeforeTimeDesc, AccountUnlockedBeforeTimeRequest.fromPartial(request), metadata);
  }
  accountLockedPastTimeDenom(request: DeepPartial<AccountLockedPastTimeDenomRequest>, metadata?: grpc.Metadata): Promise<AccountLockedPastTimeDenomResponse> {
    return this.rpc.unary(AccountLockedPastTimeDenomDesc, AccountLockedPastTimeDenomRequest.fromPartial(request), metadata);
  }
  lockedDenom(request: DeepPartial<LockedDenomRequest>, metadata?: grpc.Metadata): Promise<LockedDenomResponse> {
    return this.rpc.unary(LockedDenomDesc, LockedDenomRequest.fromPartial(request), metadata);
  }
  lockedByID(request: DeepPartial<LockedRequest>, metadata?: grpc.Metadata): Promise<LockedResponse> {
    return this.rpc.unary(LockedDesc, LockedRequest.fromPartial(request), metadata);
  }
  syntheticLockupsByLockupID(request: DeepPartial<SyntheticLockupsByLockupIDRequest>, metadata?: grpc.Metadata): Promise<SyntheticLockupsByLockupIDResponse> {
    return this.rpc.unary(SyntheticLockupsByLockupIDDesc, SyntheticLockupsByLockupIDRequest.fromPartial(request), metadata);
  }
  accountLockedLongerDuration(request: DeepPartial<AccountLockedLongerDurationRequest>, metadata?: grpc.Metadata): Promise<AccountLockedLongerDurationResponse> {
    return this.rpc.unary(AccountLockedLongerDurationDesc, AccountLockedLongerDurationRequest.fromPartial(request), metadata);
  }
  accountLockedDuration(request: DeepPartial<AccountLockedDurationRequest>, metadata?: grpc.Metadata): Promise<AccountLockedDurationResponse> {
    return this.rpc.unary(AccountLockedDurationDesc, AccountLockedDurationRequest.fromPartial(request), metadata);
  }
  accountLockedLongerDurationNotUnlockingOnly(request: DeepPartial<AccountLockedLongerDurationNotUnlockingOnlyRequest>, metadata?: grpc.Metadata): Promise<AccountLockedLongerDurationNotUnlockingOnlyResponse> {
    return this.rpc.unary(AccountLockedLongerDurationNotUnlockingOnlyDesc, AccountLockedLongerDurationNotUnlockingOnlyRequest.fromPartial(request), metadata);
  }
  accountLockedLongerDurationDenom(request: DeepPartial<AccountLockedLongerDurationDenomRequest>, metadata?: grpc.Metadata): Promise<AccountLockedLongerDurationDenomResponse> {
    return this.rpc.unary(AccountLockedLongerDurationDenomDesc, AccountLockedLongerDurationDenomRequest.fromPartial(request), metadata);
  }
  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "osmosis.lockup.Query"
};
export const QueryModuleBalanceDesc: UnaryMethodDefinitionish = {
  methodName: "ModuleBalance",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return ModuleBalanceRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...ModuleBalanceResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryModuleLockedAmountDesc: UnaryMethodDefinitionish = {
  methodName: "ModuleLockedAmount",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return ModuleLockedAmountRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...ModuleLockedAmountResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAccountUnlockableCoinsDesc: UnaryMethodDefinitionish = {
  methodName: "AccountUnlockableCoins",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return AccountUnlockableCoinsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...AccountUnlockableCoinsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAccountUnlockingCoinsDesc: UnaryMethodDefinitionish = {
  methodName: "AccountUnlockingCoins",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return AccountUnlockingCoinsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...AccountUnlockingCoinsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAccountLockedCoinsDesc: UnaryMethodDefinitionish = {
  methodName: "AccountLockedCoins",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return AccountLockedCoinsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...AccountLockedCoinsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAccountLockedPastTimeDesc: UnaryMethodDefinitionish = {
  methodName: "AccountLockedPastTime",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return AccountLockedPastTimeRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...AccountLockedPastTimeResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAccountLockedPastTimeNotUnlockingOnlyDesc: UnaryMethodDefinitionish = {
  methodName: "AccountLockedPastTimeNotUnlockingOnly",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return AccountLockedPastTimeNotUnlockingOnlyRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...AccountLockedPastTimeNotUnlockingOnlyResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAccountUnlockedBeforeTimeDesc: UnaryMethodDefinitionish = {
  methodName: "AccountUnlockedBeforeTime",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return AccountUnlockedBeforeTimeRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...AccountUnlockedBeforeTimeResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAccountLockedPastTimeDenomDesc: UnaryMethodDefinitionish = {
  methodName: "AccountLockedPastTimeDenom",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return AccountLockedPastTimeDenomRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...AccountLockedPastTimeDenomResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryLockedDenomDesc: UnaryMethodDefinitionish = {
  methodName: "LockedDenom",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return LockedDenomRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...LockedDenomResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryLockedByIDDesc: UnaryMethodDefinitionish = {
  methodName: "LockedByID",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return LockedRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...LockedResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QuerySyntheticLockupsByLockupIDDesc: UnaryMethodDefinitionish = {
  methodName: "SyntheticLockupsByLockupID",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return SyntheticLockupsByLockupIDRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...SyntheticLockupsByLockupIDResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAccountLockedLongerDurationDesc: UnaryMethodDefinitionish = {
  methodName: "AccountLockedLongerDuration",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return AccountLockedLongerDurationRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...AccountLockedLongerDurationResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAccountLockedDurationDesc: UnaryMethodDefinitionish = {
  methodName: "AccountLockedDuration",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return AccountLockedDurationRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...AccountLockedDurationResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAccountLockedLongerDurationNotUnlockingOnlyDesc: UnaryMethodDefinitionish = {
  methodName: "AccountLockedLongerDurationNotUnlockingOnly",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return AccountLockedLongerDurationNotUnlockingOnlyRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...AccountLockedLongerDurationNotUnlockingOnlyResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryAccountLockedLongerDurationDenomDesc: UnaryMethodDefinitionish = {
  methodName: "AccountLockedLongerDurationDenom",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return AccountLockedLongerDurationDenomRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...AccountLockedLongerDurationDenomResponse.decode(data),
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