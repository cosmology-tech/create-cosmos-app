import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { GlobalDecoderRegistry } from "../../registry";
import { ComputedRef } from "vue";
export const protobufPackage = "google.api";
/**
 * `Endpoint` describes a network endpoint of a service that serves a set of
 * APIs. It is commonly known as a service endpoint. A service may expose
 * any number of service endpoints, and all service endpoints share the same
 * service definition, such as quota limits and monitoring metrics.
 * 
 * Example service configuration:
 * 
 *     name: library-example.googleapis.com
 *     endpoints:
 *       # Below entry makes 'google.example.library.v1.Library'
 *       # API be served from endpoint address library-example.googleapis.com.
 *       # It also allows HTTP OPTIONS calls to be passed to the backend, for
 *       # it to decide whether the subsequent cross-origin request is
 *       # allowed to proceed.
 *     - name: library-example.googleapis.com
 *       allow_cors: true
 */
export interface Endpoint {
  /** The canonical name of this endpoint. */
  name: string;
  /**
   * Unimplemented. Dot not use.
   * 
   * DEPRECATED: This field is no longer supported. Instead of using aliases,
   * please specify multiple [google.api.Endpoint][google.api.Endpoint] for each of the intended
   * aliases.
   * 
   * Additional names that this endpoint will be hosted on.
   */
  /** @deprecated */
  aliases: string[];
  /**
   * The specification of an Internet routable address of API frontend that will
   * handle requests to this [API
   * Endpoint](https://cloud.google.com/apis/design/glossary). It should be
   * either a valid IPv4 address or a fully-qualified domain name. For example,
   * "8.8.8.8" or "myservice.appspot.com".
   */
  target: string;
  /**
   * Allowing
   * [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), aka
   * cross-domain traffic, would allow the backends served from this endpoint to
   * receive and respond to HTTP OPTIONS requests. The response will be used by
   * the browser to determine whether the subsequent cross-origin request is
   * allowed to proceed.
   */
  allowCors: boolean;
}
export interface ReactiveEndpoint {
  name: ComputedRef<string>;
  aliases: ComputedRef<string[]>;
  target: ComputedRef<string>;
  allowCors: ComputedRef<boolean>;
}
export interface EndpointProtoMsg {
  typeUrl: "/google.api.Endpoint";
  value: Uint8Array;
}
/**
 * `Endpoint` describes a network endpoint of a service that serves a set of
 * APIs. It is commonly known as a service endpoint. A service may expose
 * any number of service endpoints, and all service endpoints share the same
 * service definition, such as quota limits and monitoring metrics.
 * 
 * Example service configuration:
 * 
 *     name: library-example.googleapis.com
 *     endpoints:
 *       # Below entry makes 'google.example.library.v1.Library'
 *       # API be served from endpoint address library-example.googleapis.com.
 *       # It also allows HTTP OPTIONS calls to be passed to the backend, for
 *       # it to decide whether the subsequent cross-origin request is
 *       # allowed to proceed.
 *     - name: library-example.googleapis.com
 *       allow_cors: true
 */
export interface EndpointSDKType {
  name: string;
  /** @deprecated */
  aliases: string[];
  target: string;
  allow_cors: boolean;
}
function createBaseEndpoint(): Endpoint {
  return {
    name: "",
    aliases: [],
    target: "",
    allowCors: false
  };
}
export const Endpoint = {
  typeUrl: "/google.api.Endpoint",
  is(o: any): o is Endpoint {
    return o && (o.$typeUrl === Endpoint.typeUrl || typeof o.name === "string" && Array.isArray(o.aliases) && (!o.aliases.length || typeof o.aliases[0] === "string") && typeof o.target === "string" && typeof o.allowCors === "boolean");
  },
  isSDK(o: any): o is EndpointSDKType {
    return o && (o.$typeUrl === Endpoint.typeUrl || typeof o.name === "string" && Array.isArray(o.aliases) && (!o.aliases.length || typeof o.aliases[0] === "string") && typeof o.target === "string" && typeof o.allow_cors === "boolean");
  },
  encode(message: Endpoint, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.aliases) {
      writer.uint32(18).string(v!);
    }
    if (message.target !== "") {
      writer.uint32(810).string(message.target);
    }
    if (message.allowCors === true) {
      writer.uint32(40).bool(message.allowCors);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Endpoint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndpoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.aliases.push(reader.string());
          break;
        case 101:
          message.target = reader.string();
          break;
        case 5:
          message.allowCors = reader.bool();
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
      name: isSet(object.name) ? String(object.name) : "",
      aliases: Array.isArray(object?.aliases) ? object.aliases.map((e: any) => String(e)) : [],
      target: isSet(object.target) ? String(object.target) : "",
      allowCors: isSet(object.allowCors) ? Boolean(object.allowCors) : false
    };
  },
  toJSON(message: Endpoint): JsonSafe<Endpoint> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.aliases) {
      obj.aliases = message.aliases.map(e => e);
    } else {
      obj.aliases = [];
    }
    message.target !== undefined && (obj.target = message.target);
    message.allowCors !== undefined && (obj.allowCors = message.allowCors);
    return obj;
  },
  fromPartial(object: DeepPartial<Endpoint>): Endpoint {
    const message = createBaseEndpoint();
    message.name = object.name ?? "";
    message.aliases = object.aliases?.map(e => e) || [];
    message.target = object.target ?? "";
    message.allowCors = object.allowCors ?? false;
    return message;
  },
  fromSDK(object: EndpointSDKType): Endpoint {
    return {
      name: object?.name,
      aliases: Array.isArray(object?.aliases) ? object.aliases.map((e: any) => e) : [],
      target: object?.target,
      allowCors: object?.allow_cors
    };
  },
  fromSDKJSON(object: any): EndpointSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      aliases: Array.isArray(object?.aliases) ? object.aliases.map((e: any) => String(e)) : [],
      target: isSet(object.target) ? String(object.target) : "",
      allow_cors: isSet(object.allow_cors) ? Boolean(object.allow_cors) : false
    };
  },
  toSDK(message: Endpoint): EndpointSDKType {
    const obj: any = {};
    obj.name = message.name;
    if (message.aliases) {
      obj.aliases = message.aliases.map(e => e);
    } else {
      obj.aliases = [];
    }
    obj.target = message.target;
    obj.allow_cors = message.allowCors;
    return obj;
  },
  fromAmino(object: EndpointAmino): Endpoint {
    const message = createBaseEndpoint();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    message.aliases = object.aliases?.map(e => e) || [];
    if (object.target !== undefined && object.target !== null) {
      message.target = object.target;
    }
    if (object.allow_cors !== undefined && object.allow_cors !== null) {
      message.allowCors = object.allow_cors;
    }
    return message;
  },
  toAmino(message: Endpoint): EndpointAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    if (message.aliases) {
      obj.aliases = message.aliases.map(e => e);
    } else {
      obj.aliases = message.aliases;
    }
    obj.target = message.target === "" ? undefined : message.target;
    obj.allow_cors = message.allowCors === false ? undefined : message.allowCors;
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
      typeUrl: "/google.api.Endpoint",
      value: Endpoint.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Endpoint.typeUrl, Endpoint);