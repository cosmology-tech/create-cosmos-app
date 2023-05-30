import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgCreateProvider, MsgCreateProviderResponse, MsgUpdateProvider, MsgUpdateProviderResponse, MsgDeleteProvider, MsgDeleteProviderResponse } from "./provider";
/** Msg defines the provider Msg service */
export interface Msg {
  /** CreateProvider defines a method that creates a provider given the proper inputs */
  createProvider(request: DeepPartial<MsgCreateProvider>, metadata?: grpc.Metadata): Promise<MsgCreateProviderResponse>;
  /** UpdateProvider defines a method that updates a provider given the proper inputs */
  updateProvider(request: DeepPartial<MsgUpdateProvider>, metadata?: grpc.Metadata): Promise<MsgUpdateProviderResponse>;
  /** DeleteProvider defines a method that deletes a provider given the proper inputs */
  deleteProvider(request: DeepPartial<MsgDeleteProvider>, metadata?: grpc.Metadata): Promise<MsgDeleteProviderResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createProvider = this.createProvider.bind(this);
    this.updateProvider = this.updateProvider.bind(this);
    this.deleteProvider = this.deleteProvider.bind(this);
  }
  createProvider(request: DeepPartial<MsgCreateProvider>, metadata?: grpc.Metadata): Promise<MsgCreateProviderResponse> {
    return this.rpc.unary(MsgCreateProviderDesc, MsgCreateProvider.fromPartial(request), metadata);
  }
  updateProvider(request: DeepPartial<MsgUpdateProvider>, metadata?: grpc.Metadata): Promise<MsgUpdateProviderResponse> {
    return this.rpc.unary(MsgUpdateProviderDesc, MsgUpdateProvider.fromPartial(request), metadata);
  }
  deleteProvider(request: DeepPartial<MsgDeleteProvider>, metadata?: grpc.Metadata): Promise<MsgDeleteProviderResponse> {
    return this.rpc.unary(MsgDeleteProviderDesc, MsgDeleteProvider.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "akash.provider.v1beta2.Msg"
};
export const MsgCreateProviderDesc: UnaryMethodDefinitionish = {
  methodName: "CreateProvider",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCreateProvider.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreateProviderResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgUpdateProviderDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateProvider",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgUpdateProvider.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateProviderResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgDeleteProviderDesc: UnaryMethodDefinitionish = {
  methodName: "DeleteProvider",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgDeleteProvider.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgDeleteProviderResponse.decode(data),
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