import { Config, ConfigAmino, ConfigSDKType } from "./config";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet } from "../../../helpers";
export const protobufPackage = "cosmos.app.v1alpha1";
/** QueryConfigRequest is the Query/Config request type. */
export interface QueryConfigRequest {}
export interface QueryConfigRequestProtoMsg {
  typeUrl: "/cosmos.app.v1alpha1.QueryConfigRequest";
  value: Uint8Array;
}
/** QueryConfigRequest is the Query/Config request type. */
export interface QueryConfigRequestAmino {}
export interface QueryConfigRequestAminoMsg {
  type: "cosmos-sdk/QueryConfigRequest";
  value: QueryConfigRequestAmino;
}
/** QueryConfigRequest is the Query/Config request type. */
export interface QueryConfigRequestSDKType {}
/** QueryConfigRequest is the Query/Config response type. */
export interface QueryConfigResponse {
  /** config is the current app config. */
  config?: Config;
}
export interface QueryConfigResponseProtoMsg {
  typeUrl: "/cosmos.app.v1alpha1.QueryConfigResponse";
  value: Uint8Array;
}
/** QueryConfigRequest is the Query/Config response type. */
export interface QueryConfigResponseAmino {
  /** config is the current app config. */
  config?: ConfigAmino;
}
export interface QueryConfigResponseAminoMsg {
  type: "cosmos-sdk/QueryConfigResponse";
  value: QueryConfigResponseAmino;
}
/** QueryConfigRequest is the Query/Config response type. */
export interface QueryConfigResponseSDKType {
  config?: ConfigSDKType;
}
function createBaseQueryConfigRequest(): QueryConfigRequest {
  return {};
}
export const QueryConfigRequest = {
  typeUrl: "/cosmos.app.v1alpha1.QueryConfigRequest",
  aminoType: "cosmos-sdk/QueryConfigRequest",
  encode(_: QueryConfigRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfigRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryConfigRequest {
    return {};
  },
  toJSON(_: QueryConfigRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryConfigRequest>): QueryConfigRequest {
    const message = createBaseQueryConfigRequest();
    return message;
  },
  fromSDK(_: QueryConfigRequestSDKType): QueryConfigRequest {
    return {};
  },
  toSDK(_: QueryConfigRequest): QueryConfigRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryConfigRequestAmino): QueryConfigRequest {
    return {};
  },
  toAmino(_: QueryConfigRequest): QueryConfigRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryConfigRequestAminoMsg): QueryConfigRequest {
    return QueryConfigRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConfigRequest): QueryConfigRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryConfigRequest",
      value: QueryConfigRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConfigRequestProtoMsg): QueryConfigRequest {
    return QueryConfigRequest.decode(message.value);
  },
  toProto(message: QueryConfigRequest): Uint8Array {
    return QueryConfigRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConfigRequest): QueryConfigRequestProtoMsg {
    return {
      typeUrl: "/cosmos.app.v1alpha1.QueryConfigRequest",
      value: QueryConfigRequest.encode(message).finish()
    };
  }
};
function createBaseQueryConfigResponse(): QueryConfigResponse {
  return {
    config: undefined
  };
}
export const QueryConfigResponse = {
  typeUrl: "/cosmos.app.v1alpha1.QueryConfigResponse",
  aminoType: "cosmos-sdk/QueryConfigResponse",
  encode(message: QueryConfigResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.config !== undefined) {
      Config.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConfigResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConfigResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = Config.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConfigResponse {
    return {
      config: isSet(object.config) ? Config.fromJSON(object.config) : undefined
    };
  },
  toJSON(message: QueryConfigResponse): unknown {
    const obj: any = {};
    message.config !== undefined && (obj.config = message.config ? Config.toJSON(message.config) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryConfigResponse>): QueryConfigResponse {
    const message = createBaseQueryConfigResponse();
    message.config = object.config !== undefined && object.config !== null ? Config.fromPartial(object.config) : undefined;
    return message;
  },
  fromSDK(object: QueryConfigResponseSDKType): QueryConfigResponse {
    return {
      config: object.config ? Config.fromSDK(object.config) : undefined
    };
  },
  toSDK(message: QueryConfigResponse): QueryConfigResponseSDKType {
    const obj: any = {};
    message.config !== undefined && (obj.config = message.config ? Config.toSDK(message.config) : undefined);
    return obj;
  },
  fromAmino(object: QueryConfigResponseAmino): QueryConfigResponse {
    return {
      config: object?.config ? Config.fromAmino(object.config) : undefined
    };
  },
  toAmino(message: QueryConfigResponse): QueryConfigResponseAmino {
    const obj: any = {};
    obj.config = message.config ? Config.toAmino(message.config) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryConfigResponseAminoMsg): QueryConfigResponse {
    return QueryConfigResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConfigResponse): QueryConfigResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryConfigResponse",
      value: QueryConfigResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConfigResponseProtoMsg): QueryConfigResponse {
    return QueryConfigResponse.decode(message.value);
  },
  toProto(message: QueryConfigResponse): Uint8Array {
    return QueryConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConfigResponse): QueryConfigResponseProtoMsg {
    return {
      typeUrl: "/cosmos.app.v1alpha1.QueryConfigResponse",
      value: QueryConfigResponse.encode(message).finish()
    };
  }
};