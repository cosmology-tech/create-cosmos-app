import { ParamChange, ParamChangeAmino, ParamChangeSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.params.v1beta1";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
  /** subspace defines the module to query the parameter for. */
  subspace: string;
  /** key defines the key of the parameter in the subspace. */
  key: string;
}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
  /** subspace defines the module to query the parameter for. */
  subspace?: string;
  /** key defines the key of the parameter in the subspace. */
  key?: string;
}
export interface QueryParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
  subspace: string;
  key: string;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** param defines the queried parameter. */
  param: ParamChange;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** param defines the queried parameter. */
  param?: ParamChangeAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  param: ParamChangeSDKType;
}
/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 */
export interface QuerySubspacesRequest {}
export interface QuerySubspacesRequestProtoMsg {
  typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest";
  value: Uint8Array;
}
/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 */
export interface QuerySubspacesRequestAmino {}
export interface QuerySubspacesRequestAminoMsg {
  type: "cosmos-sdk/QuerySubspacesRequest";
  value: QuerySubspacesRequestAmino;
}
/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 */
export interface QuerySubspacesRequestSDKType {}
/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 */
export interface QuerySubspacesResponse {
  subspaces: Subspace[];
}
export interface QuerySubspacesResponseProtoMsg {
  typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse";
  value: Uint8Array;
}
/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 */
export interface QuerySubspacesResponseAmino {
  subspaces?: SubspaceAmino[];
}
export interface QuerySubspacesResponseAminoMsg {
  type: "cosmos-sdk/QuerySubspacesResponse";
  value: QuerySubspacesResponseAmino;
}
/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 */
export interface QuerySubspacesResponseSDKType {
  subspaces: SubspaceSDKType[];
}
/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 */
export interface Subspace {
  subspace: string;
  keys: string[];
}
export interface SubspaceProtoMsg {
  typeUrl: "/cosmos.params.v1beta1.Subspace";
  value: Uint8Array;
}
/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 */
export interface SubspaceAmino {
  subspace?: string;
  keys?: string[];
}
export interface SubspaceAminoMsg {
  type: "cosmos-sdk/Subspace";
  value: SubspaceAmino;
}
/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 */
export interface SubspaceSDKType {
  subspace: string;
  keys: string[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {
    subspace: "",
    key: ""
  };
}
export const QueryParamsRequest = {
  typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest",
  aminoType: "cosmos-sdk/QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && (o.$typeUrl === QueryParamsRequest.typeUrl || typeof o.subspace === "string" && typeof o.key === "string");
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && (o.$typeUrl === QueryParamsRequest.typeUrl || typeof o.subspace === "string" && typeof o.key === "string");
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && (o.$typeUrl === QueryParamsRequest.typeUrl || typeof o.subspace === "string" && typeof o.key === "string");
  },
  encode(message: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subspace !== undefined) {
      writer.uint32(10).string(message.subspace);
    }
    if (message.key !== undefined) {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    if (isSet(object.subspace)) obj.subspace = String(object.subspace);
    if (isSet(object.key)) obj.key = String(object.key);
    return obj;
  },
  toJSON(message: QueryParamsRequest): unknown {
    const obj: any = {};
    message.subspace !== undefined && (obj.subspace = message.subspace);
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    message.subspace = object.subspace ?? "";
    message.key = object.key ?? "";
    return message;
  },
  fromSDK(object: QueryParamsRequestSDKType): QueryParamsRequest {
    return {
      subspace: object?.subspace,
      key: object?.key
    };
  },
  toSDK(message: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    obj.subspace = message.subspace;
    obj.key = message.key;
    return obj;
  },
  fromAmino(object: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = object.subspace;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    return message;
  },
  toAmino(message: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    obj.subspace = message.subspace;
    obj.key = message.key;
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.params.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsRequest.aminoType, QueryParamsRequest.typeUrl);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    param: ParamChange.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse",
  aminoType: "cosmos-sdk/QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || ParamChange.is(o.param));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || ParamChange.isSDK(o.param));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || ParamChange.isAmino(o.param));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.param !== undefined) {
      ParamChange.encode(message.param, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.param = ParamChange.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.param)) obj.param = ParamChange.fromJSON(object.param);
    return obj;
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.param !== undefined && (obj.param = message.param ? ParamChange.toJSON(message.param) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.param !== undefined && object.param !== null) {
      message.param = ParamChange.fromPartial(object.param);
    }
    return message;
  },
  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      param: object.param ? ParamChange.fromSDK(object.param) : undefined
    };
  },
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.param !== undefined && (obj.param = message.param ? ParamChange.toSDK(message.param) : undefined);
    return obj;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.param !== undefined && object.param !== null) {
      message.param = ParamChange.fromAmino(object.param);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.param = message.param ? ParamChange.toAmino(message.param) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.params.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsResponse.aminoType, QueryParamsResponse.typeUrl);
function createBaseQuerySubspacesRequest(): QuerySubspacesRequest {
  return {};
}
export const QuerySubspacesRequest = {
  typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest",
  aminoType: "cosmos-sdk/QuerySubspacesRequest",
  is(o: any): o is QuerySubspacesRequest {
    return o && o.$typeUrl === QuerySubspacesRequest.typeUrl;
  },
  isSDK(o: any): o is QuerySubspacesRequestSDKType {
    return o && o.$typeUrl === QuerySubspacesRequest.typeUrl;
  },
  isAmino(o: any): o is QuerySubspacesRequestAmino {
    return o && o.$typeUrl === QuerySubspacesRequest.typeUrl;
  },
  encode(_: QuerySubspacesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubspacesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspacesRequest();
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
  fromJSON(_: any): QuerySubspacesRequest {
    const obj = createBaseQuerySubspacesRequest();
    return obj;
  },
  toJSON(_: QuerySubspacesRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QuerySubspacesRequest>): QuerySubspacesRequest {
    const message = createBaseQuerySubspacesRequest();
    return message;
  },
  fromSDK(_: QuerySubspacesRequestSDKType): QuerySubspacesRequest {
    return {};
  },
  toSDK(_: QuerySubspacesRequest): QuerySubspacesRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QuerySubspacesRequestAmino): QuerySubspacesRequest {
    const message = createBaseQuerySubspacesRequest();
    return message;
  },
  toAmino(_: QuerySubspacesRequest): QuerySubspacesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QuerySubspacesRequestAminoMsg): QuerySubspacesRequest {
    return QuerySubspacesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySubspacesRequest): QuerySubspacesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QuerySubspacesRequest",
      value: QuerySubspacesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySubspacesRequestProtoMsg): QuerySubspacesRequest {
    return QuerySubspacesRequest.decode(message.value);
  },
  toProto(message: QuerySubspacesRequest): Uint8Array {
    return QuerySubspacesRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySubspacesRequest): QuerySubspacesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.params.v1beta1.QuerySubspacesRequest",
      value: QuerySubspacesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySubspacesRequest.typeUrl, QuerySubspacesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QuerySubspacesRequest.aminoType, QuerySubspacesRequest.typeUrl);
function createBaseQuerySubspacesResponse(): QuerySubspacesResponse {
  return {
    subspaces: []
  };
}
export const QuerySubspacesResponse = {
  typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse",
  aminoType: "cosmos-sdk/QuerySubspacesResponse",
  is(o: any): o is QuerySubspacesResponse {
    return o && (o.$typeUrl === QuerySubspacesResponse.typeUrl || Array.isArray(o.subspaces) && (!o.subspaces.length || Subspace.is(o.subspaces[0])));
  },
  isSDK(o: any): o is QuerySubspacesResponseSDKType {
    return o && (o.$typeUrl === QuerySubspacesResponse.typeUrl || Array.isArray(o.subspaces) && (!o.subspaces.length || Subspace.isSDK(o.subspaces[0])));
  },
  isAmino(o: any): o is QuerySubspacesResponseAmino {
    return o && (o.$typeUrl === QuerySubspacesResponse.typeUrl || Array.isArray(o.subspaces) && (!o.subspaces.length || Subspace.isAmino(o.subspaces[0])));
  },
  encode(message: QuerySubspacesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.subspaces) {
      Subspace.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySubspacesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubspacesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspaces.push(Subspace.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySubspacesResponse {
    const obj = createBaseQuerySubspacesResponse();
    if (Array.isArray(object?.subspaces)) obj.subspaces = object.subspaces.map((e: any) => Subspace.fromJSON(e));
    return obj;
  },
  toJSON(message: QuerySubspacesResponse): unknown {
    const obj: any = {};
    if (message.subspaces) {
      obj.subspaces = message.subspaces.map(e => e ? Subspace.toJSON(e) : undefined);
    } else {
      obj.subspaces = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySubspacesResponse>): QuerySubspacesResponse {
    const message = createBaseQuerySubspacesResponse();
    message.subspaces = object.subspaces?.map(e => Subspace.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QuerySubspacesResponseSDKType): QuerySubspacesResponse {
    return {
      subspaces: Array.isArray(object?.subspaces) ? object.subspaces.map((e: any) => Subspace.fromSDK(e)) : []
    };
  },
  toSDK(message: QuerySubspacesResponse): QuerySubspacesResponseSDKType {
    const obj: any = {};
    if (message.subspaces) {
      obj.subspaces = message.subspaces.map(e => e ? Subspace.toSDK(e) : undefined);
    } else {
      obj.subspaces = [];
    }
    return obj;
  },
  fromAmino(object: QuerySubspacesResponseAmino): QuerySubspacesResponse {
    const message = createBaseQuerySubspacesResponse();
    message.subspaces = object.subspaces?.map(e => Subspace.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QuerySubspacesResponse): QuerySubspacesResponseAmino {
    const obj: any = {};
    if (message.subspaces) {
      obj.subspaces = message.subspaces.map(e => e ? Subspace.toAmino(e) : undefined);
    } else {
      obj.subspaces = [];
    }
    return obj;
  },
  fromAminoMsg(object: QuerySubspacesResponseAminoMsg): QuerySubspacesResponse {
    return QuerySubspacesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySubspacesResponse): QuerySubspacesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QuerySubspacesResponse",
      value: QuerySubspacesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySubspacesResponseProtoMsg): QuerySubspacesResponse {
    return QuerySubspacesResponse.decode(message.value);
  },
  toProto(message: QuerySubspacesResponse): Uint8Array {
    return QuerySubspacesResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySubspacesResponse): QuerySubspacesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.params.v1beta1.QuerySubspacesResponse",
      value: QuerySubspacesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySubspacesResponse.typeUrl, QuerySubspacesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QuerySubspacesResponse.aminoType, QuerySubspacesResponse.typeUrl);
function createBaseSubspace(): Subspace {
  return {
    subspace: "",
    keys: []
  };
}
export const Subspace = {
  typeUrl: "/cosmos.params.v1beta1.Subspace",
  aminoType: "cosmos-sdk/Subspace",
  is(o: any): o is Subspace {
    return o && (o.$typeUrl === Subspace.typeUrl || typeof o.subspace === "string" && Array.isArray(o.keys) && (!o.keys.length || typeof o.keys[0] === "string"));
  },
  isSDK(o: any): o is SubspaceSDKType {
    return o && (o.$typeUrl === Subspace.typeUrl || typeof o.subspace === "string" && Array.isArray(o.keys) && (!o.keys.length || typeof o.keys[0] === "string"));
  },
  isAmino(o: any): o is SubspaceAmino {
    return o && (o.$typeUrl === Subspace.typeUrl || typeof o.subspace === "string" && Array.isArray(o.keys) && (!o.keys.length || typeof o.keys[0] === "string"));
  },
  encode(message: Subspace, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subspace !== undefined) {
      writer.uint32(10).string(message.subspace);
    }
    for (const v of message.keys) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Subspace {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubspace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;
        case 2:
          message.keys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Subspace {
    const obj = createBaseSubspace();
    if (isSet(object.subspace)) obj.subspace = String(object.subspace);
    if (Array.isArray(object?.keys)) obj.keys = object.keys.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: Subspace): unknown {
    const obj: any = {};
    message.subspace !== undefined && (obj.subspace = message.subspace);
    if (message.keys) {
      obj.keys = message.keys.map(e => e);
    } else {
      obj.keys = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Subspace>): Subspace {
    const message = createBaseSubspace();
    message.subspace = object.subspace ?? "";
    message.keys = object.keys?.map(e => e) || [];
    return message;
  },
  fromSDK(object: SubspaceSDKType): Subspace {
    return {
      subspace: object?.subspace,
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => e) : []
    };
  },
  toSDK(message: Subspace): SubspaceSDKType {
    const obj: any = {};
    obj.subspace = message.subspace;
    if (message.keys) {
      obj.keys = message.keys.map(e => e);
    } else {
      obj.keys = [];
    }
    return obj;
  },
  fromAmino(object: SubspaceAmino): Subspace {
    const message = createBaseSubspace();
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = object.subspace;
    }
    message.keys = object.keys?.map(e => e) || [];
    return message;
  },
  toAmino(message: Subspace): SubspaceAmino {
    const obj: any = {};
    obj.subspace = message.subspace;
    if (message.keys) {
      obj.keys = message.keys.map(e => e);
    } else {
      obj.keys = [];
    }
    return obj;
  },
  fromAminoMsg(object: SubspaceAminoMsg): Subspace {
    return Subspace.fromAmino(object.value);
  },
  toAminoMsg(message: Subspace): SubspaceAminoMsg {
    return {
      type: "cosmos-sdk/Subspace",
      value: Subspace.toAmino(message)
    };
  },
  fromProtoMsg(message: SubspaceProtoMsg): Subspace {
    return Subspace.decode(message.value);
  },
  toProto(message: Subspace): Uint8Array {
    return Subspace.encode(message).finish();
  },
  toProtoMsg(message: Subspace): SubspaceProtoMsg {
    return {
      typeUrl: "/cosmos.params.v1beta1.Subspace",
      value: Subspace.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Subspace.typeUrl, Subspace);
GlobalDecoderRegistry.registerAminoProtoMapping(Subspace.aminoType, Subspace.typeUrl);