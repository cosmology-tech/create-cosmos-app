import { MsgCloseGroup, MsgCloseGroupResponse, MsgPauseGroup, MsgPauseGroupResponse, MsgStartGroup, MsgStartGroupResponse } from "./group";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgCreateDeployment, MsgCreateDeploymentResponse, MsgDepositDeployment, MsgDepositDeploymentResponse, MsgUpdateDeployment, MsgUpdateDeploymentResponse, MsgCloseDeployment, MsgCloseDeploymentResponse } from "./deployment";
/** Msg defines the deployment Msg service. */
export interface Msg {
  /** CreateDeployment defines a method to create new deployment given proper inputs. */
  createDeployment(request: DeepPartial<MsgCreateDeployment>, metadata?: grpc.Metadata): Promise<MsgCreateDeploymentResponse>;
  /** DepositDeployment deposits more funds into the deployment account */
  depositDeployment(request: DeepPartial<MsgDepositDeployment>, metadata?: grpc.Metadata): Promise<MsgDepositDeploymentResponse>;
  /** UpdateDeployment defines a method to update a deployment given proper inputs. */
  updateDeployment(request: DeepPartial<MsgUpdateDeployment>, metadata?: grpc.Metadata): Promise<MsgUpdateDeploymentResponse>;
  /** CloseDeployment defines a method to close a deployment given proper inputs. */
  closeDeployment(request: DeepPartial<MsgCloseDeployment>, metadata?: grpc.Metadata): Promise<MsgCloseDeploymentResponse>;
  /** CloseGroup defines a method to close a group of a deployment given proper inputs. */
  closeGroup(request: DeepPartial<MsgCloseGroup>, metadata?: grpc.Metadata): Promise<MsgCloseGroupResponse>;
  /** PauseGroup defines a method to close a group of a deployment given proper inputs. */
  pauseGroup(request: DeepPartial<MsgPauseGroup>, metadata?: grpc.Metadata): Promise<MsgPauseGroupResponse>;
  /** StartGroup defines a method to close a group of a deployment given proper inputs. */
  startGroup(request: DeepPartial<MsgStartGroup>, metadata?: grpc.Metadata): Promise<MsgStartGroupResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createDeployment = this.createDeployment.bind(this);
    this.depositDeployment = this.depositDeployment.bind(this);
    this.updateDeployment = this.updateDeployment.bind(this);
    this.closeDeployment = this.closeDeployment.bind(this);
    this.closeGroup = this.closeGroup.bind(this);
    this.pauseGroup = this.pauseGroup.bind(this);
    this.startGroup = this.startGroup.bind(this);
  }
  createDeployment(request: DeepPartial<MsgCreateDeployment>, metadata?: grpc.Metadata): Promise<MsgCreateDeploymentResponse> {
    return this.rpc.unary(MsgCreateDeploymentDesc, MsgCreateDeployment.fromPartial(request), metadata);
  }
  depositDeployment(request: DeepPartial<MsgDepositDeployment>, metadata?: grpc.Metadata): Promise<MsgDepositDeploymentResponse> {
    return this.rpc.unary(MsgDepositDeploymentDesc, MsgDepositDeployment.fromPartial(request), metadata);
  }
  updateDeployment(request: DeepPartial<MsgUpdateDeployment>, metadata?: grpc.Metadata): Promise<MsgUpdateDeploymentResponse> {
    return this.rpc.unary(MsgUpdateDeploymentDesc, MsgUpdateDeployment.fromPartial(request), metadata);
  }
  closeDeployment(request: DeepPartial<MsgCloseDeployment>, metadata?: grpc.Metadata): Promise<MsgCloseDeploymentResponse> {
    return this.rpc.unary(MsgCloseDeploymentDesc, MsgCloseDeployment.fromPartial(request), metadata);
  }
  closeGroup(request: DeepPartial<MsgCloseGroup>, metadata?: grpc.Metadata): Promise<MsgCloseGroupResponse> {
    return this.rpc.unary(MsgCloseGroupDesc, MsgCloseGroup.fromPartial(request), metadata);
  }
  pauseGroup(request: DeepPartial<MsgPauseGroup>, metadata?: grpc.Metadata): Promise<MsgPauseGroupResponse> {
    return this.rpc.unary(MsgPauseGroupDesc, MsgPauseGroup.fromPartial(request), metadata);
  }
  startGroup(request: DeepPartial<MsgStartGroup>, metadata?: grpc.Metadata): Promise<MsgStartGroupResponse> {
    return this.rpc.unary(MsgStartGroupDesc, MsgStartGroup.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "akash.deployment.v1beta1.Msg"
};
export const MsgCreateDeploymentDesc: UnaryMethodDefinitionish = {
  methodName: "CreateDeployment",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCreateDeployment.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCreateDeploymentResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgDepositDeploymentDesc: UnaryMethodDefinitionish = {
  methodName: "DepositDeployment",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgDepositDeployment.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgDepositDeploymentResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgUpdateDeploymentDesc: UnaryMethodDefinitionish = {
  methodName: "UpdateDeployment",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgUpdateDeployment.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgUpdateDeploymentResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgCloseDeploymentDesc: UnaryMethodDefinitionish = {
  methodName: "CloseDeployment",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCloseDeployment.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCloseDeploymentResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgCloseGroupDesc: UnaryMethodDefinitionish = {
  methodName: "CloseGroup",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgCloseGroup.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgCloseGroupResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgPauseGroupDesc: UnaryMethodDefinitionish = {
  methodName: "PauseGroup",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgPauseGroup.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgPauseGroupResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgStartGroupDesc: UnaryMethodDefinitionish = {
  methodName: "StartGroup",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgStartGroup.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgStartGroupResponse.decode(data),
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