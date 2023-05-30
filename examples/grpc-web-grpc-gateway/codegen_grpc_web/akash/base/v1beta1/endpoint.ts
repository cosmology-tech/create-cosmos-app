import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.base.v1beta1";
/** This describes how the endpoint is implemented when the lease is deployed */
export enum Endpoint_Kind {
  /** SHARED_HTTP - Describes an endpoint that becomes a Kubernetes Ingress */
  SHARED_HTTP = 0,
  /** RANDOM_PORT - Describes an endpoint that becomes a Kubernetes NodePort */
  RANDOM_PORT = 1,
  UNRECOGNIZED = -1,
}
export const Endpoint_KindSDKType = Endpoint_Kind;
export const Endpoint_KindAmino = Endpoint_Kind;
export function endpoint_KindFromJSON(object: any): Endpoint_Kind {
  switch (object) {
    case 0:
    case "SHARED_HTTP":
      return Endpoint_Kind.SHARED_HTTP;
    case 1:
    case "RANDOM_PORT":
      return Endpoint_Kind.RANDOM_PORT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Endpoint_Kind.UNRECOGNIZED;
  }
}
export function endpoint_KindToJSON(object: Endpoint_Kind): string {
  switch (object) {
    case Endpoint_Kind.SHARED_HTTP:
      return "SHARED_HTTP";
    case Endpoint_Kind.RANDOM_PORT:
      return "RANDOM_PORT";
    case Endpoint_Kind.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Endpoint describes a publicly accessible IP service */
export interface Endpoint {
  kind: Endpoint_Kind;
}
export interface EndpointProtoMsg {
  typeUrl: "/akash.base.v1beta1.Endpoint";
  value: Uint8Array;
}
/** Endpoint describes a publicly accessible IP service */
export interface EndpointAmino {
  kind: Endpoint_Kind;
}
export interface EndpointAminoMsg {
  type: "/akash.base.v1beta1.Endpoint";
  value: EndpointAmino;
}
/** Endpoint describes a publicly accessible IP service */
export interface EndpointSDKType {
  kind: Endpoint_Kind;
}
function createBaseEndpoint(): Endpoint {
  return {
    kind: 0
  };
}
export const Endpoint = {
  typeUrl: "/akash.base.v1beta1.Endpoint",
  encode(message: Endpoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind !== 0) {
      writer.uint32(8).int32(message.kind);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Endpoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndpoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.kind = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Endpoint {
    return {
      kind: isSet(object.kind) ? endpoint_KindFromJSON(object.kind) : 0
    };
  },
  toJSON(message: Endpoint): unknown {
    const obj: any = {};
    message.kind !== undefined && (obj.kind = endpoint_KindToJSON(message.kind));
    return obj;
  },
  fromPartial(object: DeepPartial<Endpoint>): Endpoint {
    const message = createBaseEndpoint();
    message.kind = object.kind ?? 0;
    return message;
  },
  fromSDK(object: EndpointSDKType): Endpoint {
    return {
      kind: isSet(object.kind) ? endpoint_KindFromJSON(object.kind) : 0
    };
  },
  toSDK(message: Endpoint): EndpointSDKType {
    const obj: any = {};
    message.kind !== undefined && (obj.kind = endpoint_KindToJSON(message.kind));
    return obj;
  },
  fromAmino(object: EndpointAmino): Endpoint {
    return {
      kind: isSet(object.kind) ? endpoint_KindFromJSON(object.kind) : 0
    };
  },
  toAmino(message: Endpoint): EndpointAmino {
    const obj: any = {};
    obj.kind = message.kind;
    return obj;
  },
  fromAminoMsg(object: EndpointAminoMsg): Endpoint {
    return Endpoint.fromAmino(object.value);
  },
  fromProtoMsg(message: EndpointProtoMsg): Endpoint {
    return Endpoint.decode(message.value);
  },
  toProto(message: Endpoint): Uint8Array {
    return Endpoint.encode(message).finish();
  },
  toProtoMsg(message: Endpoint): EndpointProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta1.Endpoint",
      value: Endpoint.encode(message).finish()
    };
  }
};