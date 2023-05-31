import { UnaryMethodDefinitionish } from "../../../../grpc-web";
import { DeepPartial } from "../../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgCreateClient, MsgCreateClientResponse, MsgUpdateClient, MsgUpdateClientResponse, MsgUpgradeClient, MsgUpgradeClientResponse, MsgSubmitMisbehaviour, MsgSubmitMisbehaviourResponse } from "./tx";
/** Msg defines the ibc/client Msg service. */
export interface Msg {
  /** CreateClient defines a rpc handler method for MsgCreateClient. */
  createClient(request: DeepPartial<MsgCreateClient>, metadata?: grpc.Metadata): Promise<MsgCreateClientResponse>;
  /** UpdateClient defines a rpc handler method for MsgUpdateClient. */
  updateClient(request: DeepPartial<MsgUpdateClient>, metadata?: grpc.Metadata): Promise<MsgUpdateClientResponse>;
  /** UpgradeClient defines a rpc handler method for MsgUpgradeClient. */
  upgradeClient(request: DeepPartial<MsgUpgradeClient>, metadata?: grpc.Metadata): Promise<MsgUpgradeClientResponse>;
  /** SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour. */
  submitMisbehaviour(request: DeepPartial<MsgSubmitMisbehaviour>, metadata?: grpc.Metadata): Promise<MsgSubmitMisbehaviourResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createClient = this.createClient.bind(this);
    this.updateClient = this.updateClient.bind(this);
    this.upgradeClient = this.upgradeClient.bind(this);
    this.submitMisbehaviour = this.submitMisbehaviour.bind(this);
  }
  createClient(request: DeepPartial<MsgCreateClient>, metadata?: grpc.Metadata): Promise<MsgCreateClientResponse> {
    return this.rpc.unary(MsgCreateClientDesc, MsgCreateClient.fromPartial(request), metadata);
  }
  updateClient(request: DeepPartial<MsgUpdateClient>, metadata?: grpc.Metadata): Promise<MsgUpdateClientResponse> {
    return this.rpc.unary(MsgUpdateClientDesc, MsgUpdateClient.fromPartial(request), metadata);
  }
  upgradeClient(request: DeepPartial<MsgUpgradeClient>, metadata?: grpc.Metadata): Promise<MsgUpgradeClientResponse> {
    return this.rpc.unary(MsgUpgradeClientDesc, MsgUpgradeClient.fromPartial(request), metadata);
  }
  submitMisbehaviour(request: DeepPartial<MsgSubmitMisbehaviour>, metadata?: grpc.Metadata): Promise<MsgSubmitMisbehaviourResponse> {
    return this.rpc.unary(MsgSubmitMisbehaviourDesc, MsgSubmitMisbehaviour.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "ibc.core.client.v1.Msg"
};
export const MsgCreateClientDesc: UnaryMethodDefinitionish = {
  methodName: "CreateClient",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCreateClient.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreateClientResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgUpdateClientDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateClient",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgUpdateClient.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateClientResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgUpgradeClientDesc: UnaryMethodDefinitionish = {
  methodName: "UpgradeClient",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgUpgradeClient.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpgradeClientResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgSubmitMisbehaviourDesc: UnaryMethodDefinitionish = {
  methodName: "SubmitMisbehaviour",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSubmitMisbehaviour.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSubmitMisbehaviourResponse.decode(data),
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