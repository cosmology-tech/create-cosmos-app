import { UnaryMethodDefinitionish } from "../../../../grpc-web";
import { DeepPartial } from "../../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgCreateStableswapPool, MsgCreateStableswapPoolResponse, MsgStableSwapAdjustScalingFactors, MsgStableSwapAdjustScalingFactorsResponse } from "./tx";
export interface Msg {
  createStableswapPool(request: DeepPartial<MsgCreateStableswapPool>, metadata?: grpc.Metadata): Promise<MsgCreateStableswapPoolResponse>;
  stableSwapAdjustScalingFactors(request: DeepPartial<MsgStableSwapAdjustScalingFactors>, metadata?: grpc.Metadata): Promise<MsgStableSwapAdjustScalingFactorsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createStableswapPool = this.createStableswapPool.bind(this);
    this.stableSwapAdjustScalingFactors = this.stableSwapAdjustScalingFactors.bind(this);
  }
  createStableswapPool(request: DeepPartial<MsgCreateStableswapPool>, metadata?: grpc.Metadata): Promise<MsgCreateStableswapPoolResponse> {
    return this.rpc.unary(MsgCreateStableswapPoolDesc, MsgCreateStableswapPool.fromPartial(request), metadata);
  }
  stableSwapAdjustScalingFactors(request: DeepPartial<MsgStableSwapAdjustScalingFactors>, metadata?: grpc.Metadata): Promise<MsgStableSwapAdjustScalingFactorsResponse> {
    return this.rpc.unary(MsgStableSwapAdjustScalingFactorsDesc, MsgStableSwapAdjustScalingFactors.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "osmosis.gamm.poolmodels.stableswap.v1beta1.Msg"
};
export const MsgCreateStableswapPoolDesc: UnaryMethodDefinitionish = {
  methodName: "CreateStableswapPool",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCreateStableswapPool.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreateStableswapPoolResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgStableSwapAdjustScalingFactorsDesc: UnaryMethodDefinitionish = {
  methodName: "StableSwapAdjustScalingFactors",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgStableSwapAdjustScalingFactors.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgStableSwapAdjustScalingFactorsResponse.decode(data),
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