import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider, ProviderSDKType } from "./audit";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "akash.audit.v1beta2";
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponse {
  providers: Provider[];
  pagination?: PageResponse;
}
export interface QueryProvidersResponseProtoMsg {
  typeUrl: "/akash.audit.v1beta2.QueryProvidersResponse";
  value: Uint8Array;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponseSDKType {
  providers: ProviderSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequest {
  auditor: string;
  owner: string;
}
export interface QueryProviderRequestProtoMsg {
  typeUrl: "/akash.audit.v1beta2.QueryProviderRequest";
  value: Uint8Array;
}
/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequestSDKType {
  auditor: string;
  owner: string;
}
/** QueryAllProvidersAttributesRequest is request type for the Query/All Providers RPC method */
export interface QueryAllProvidersAttributesRequest {
  pagination?: PageRequest;
}
export interface QueryAllProvidersAttributesRequestProtoMsg {
  typeUrl: "/akash.audit.v1beta2.QueryAllProvidersAttributesRequest";
  value: Uint8Array;
}
/** QueryAllProvidersAttributesRequest is request type for the Query/All Providers RPC method */
export interface QueryAllProvidersAttributesRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryProviderAttributesRequest is request type for the Query/Provider RPC method */
export interface QueryProviderAttributesRequest {
  owner: string;
  pagination?: PageRequest;
}
export interface QueryProviderAttributesRequestProtoMsg {
  typeUrl: "/akash.audit.v1beta2.QueryProviderAttributesRequest";
  value: Uint8Array;
}
/** QueryProviderAttributesRequest is request type for the Query/Provider RPC method */
export interface QueryProviderAttributesRequestSDKType {
  owner: string;
  pagination?: PageRequestSDKType;
}
/** QueryProviderAuditorRequest is request type for the Query/Providers RPC method */
export interface QueryProviderAuditorRequest {
  auditor: string;
  owner: string;
}
export interface QueryProviderAuditorRequestProtoMsg {
  typeUrl: "/akash.audit.v1beta2.QueryProviderAuditorRequest";
  value: Uint8Array;
}
/** QueryProviderAuditorRequest is request type for the Query/Providers RPC method */
export interface QueryProviderAuditorRequestSDKType {
  auditor: string;
  owner: string;
}
/** QueryAuditorAttributesRequest is request type for the Query/Providers RPC method */
export interface QueryAuditorAttributesRequest {
  auditor: string;
  pagination?: PageRequest;
}
export interface QueryAuditorAttributesRequestProtoMsg {
  typeUrl: "/akash.audit.v1beta2.QueryAuditorAttributesRequest";
  value: Uint8Array;
}
/** QueryAuditorAttributesRequest is request type for the Query/Providers RPC method */
export interface QueryAuditorAttributesRequestSDKType {
  auditor: string;
  pagination?: PageRequestSDKType;
}
function createBaseQueryProvidersResponse(): QueryProvidersResponse {
  return {
    providers: [],
    pagination: undefined
  };
}
export const QueryProvidersResponse = {
  typeUrl: "/akash.audit.v1beta2.QueryProvidersResponse",
  encode(message: QueryProvidersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.providers) {
      Provider.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProvidersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProvidersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providers.push(Provider.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProvidersResponse {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => Provider.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryProvidersResponse): JsonSafe<QueryProvidersResponse> {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? Provider.toJSON(e) : undefined);
    } else {
      obj.providers = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProvidersResponse>, I>>(object: I): QueryProvidersResponse {
    const message = createBaseQueryProvidersResponse();
    message.providers = object.providers?.map(e => Provider.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryProvidersResponseSDKType): QueryProvidersResponse {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => Provider.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryProvidersResponseSDKType {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => Provider.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryProvidersResponse): QueryProvidersResponseSDKType {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? Provider.toSDK(e) : undefined);
    } else {
      obj.providers = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryProvidersResponseAmino): QueryProvidersResponse {
    const message = createBaseQueryProvidersResponse();
    message.providers = object.providers?.map(e => Provider.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProvidersResponse): QueryProvidersResponseAmino {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? Provider.toAmino(e) : undefined);
    } else {
      obj.providers = message.providers;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProvidersResponseAminoMsg): QueryProvidersResponse {
    return QueryProvidersResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProvidersResponse): QueryProvidersResponseAminoMsg {
    return {
      type: "akash/audit/v1beta2/query-providers-response",
      value: QueryProvidersResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProvidersResponseProtoMsg): QueryProvidersResponse {
    return QueryProvidersResponse.decode(message.value);
  },
  toProto(message: QueryProvidersResponse): Uint8Array {
    return QueryProvidersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProvidersResponse): QueryProvidersResponseProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta2.QueryProvidersResponse",
      value: QueryProvidersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryProviderRequest(): QueryProviderRequest {
  return {
    auditor: "",
    owner: ""
  };
}
export const QueryProviderRequest = {
  typeUrl: "/akash.audit.v1beta2.QueryProviderRequest",
  encode(message: QueryProviderRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auditor !== "") {
      writer.uint32(10).string(message.auditor);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProviderRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auditor = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProviderRequest {
    return {
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  toJSON(message: QueryProviderRequest): JsonSafe<QueryProviderRequest> {
    const obj: any = {};
    message.auditor !== undefined && (obj.auditor = message.auditor);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProviderRequest>, I>>(object: I): QueryProviderRequest {
    const message = createBaseQueryProviderRequest();
    message.auditor = object.auditor ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromSDK(object: QueryProviderRequestSDKType): QueryProviderRequest {
    return {
      auditor: object?.auditor,
      owner: object?.owner
    };
  },
  fromSDKJSON(object: any): QueryProviderRequestSDKType {
    return {
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  toSDK(message: QueryProviderRequest): QueryProviderRequestSDKType {
    const obj: any = {};
    obj.auditor = message.auditor;
    obj.owner = message.owner;
    return obj;
  },
  fromAmino(object: QueryProviderRequestAmino): QueryProviderRequest {
    const message = createBaseQueryProviderRequest();
    if (object.auditor !== undefined && object.auditor !== null) {
      message.auditor = object.auditor;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: QueryProviderRequest): QueryProviderRequestAmino {
    const obj: any = {};
    obj.auditor = message.auditor === "" ? undefined : message.auditor;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryProviderRequestAminoMsg): QueryProviderRequest {
    return QueryProviderRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProviderRequest): QueryProviderRequestAminoMsg {
    return {
      type: "akash/audit/v1beta2/query-provider-request",
      value: QueryProviderRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProviderRequestProtoMsg): QueryProviderRequest {
    return QueryProviderRequest.decode(message.value);
  },
  toProto(message: QueryProviderRequest): Uint8Array {
    return QueryProviderRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderRequest): QueryProviderRequestProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta2.QueryProviderRequest",
      value: QueryProviderRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllProvidersAttributesRequest(): QueryAllProvidersAttributesRequest {
  return {
    pagination: undefined
  };
}
export const QueryAllProvidersAttributesRequest = {
  typeUrl: "/akash.audit.v1beta2.QueryAllProvidersAttributesRequest",
  encode(message: QueryAllProvidersAttributesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllProvidersAttributesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllProvidersAttributesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllProvidersAttributesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllProvidersAttributesRequest): JsonSafe<QueryAllProvidersAttributesRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAllProvidersAttributesRequest>, I>>(object: I): QueryAllProvidersAttributesRequest {
    const message = createBaseQueryAllProvidersAttributesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAllProvidersAttributesRequestSDKType): QueryAllProvidersAttributesRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryAllProvidersAttributesRequestSDKType {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllProvidersAttributesRequest): QueryAllProvidersAttributesRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllProvidersAttributesRequestAmino): QueryAllProvidersAttributesRequest {
    const message = createBaseQueryAllProvidersAttributesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllProvidersAttributesRequest): QueryAllProvidersAttributesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllProvidersAttributesRequestAminoMsg): QueryAllProvidersAttributesRequest {
    return QueryAllProvidersAttributesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllProvidersAttributesRequest): QueryAllProvidersAttributesRequestAminoMsg {
    return {
      type: "akash/audit/v1beta2/query-all-providers-attributes-request",
      value: QueryAllProvidersAttributesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllProvidersAttributesRequestProtoMsg): QueryAllProvidersAttributesRequest {
    return QueryAllProvidersAttributesRequest.decode(message.value);
  },
  toProto(message: QueryAllProvidersAttributesRequest): Uint8Array {
    return QueryAllProvidersAttributesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllProvidersAttributesRequest): QueryAllProvidersAttributesRequestProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta2.QueryAllProvidersAttributesRequest",
      value: QueryAllProvidersAttributesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProviderAttributesRequest(): QueryProviderAttributesRequest {
  return {
    owner: "",
    pagination: undefined
  };
}
export const QueryProviderAttributesRequest = {
  typeUrl: "/akash.audit.v1beta2.QueryProviderAttributesRequest",
  encode(message: QueryProviderAttributesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProviderAttributesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderAttributesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProviderAttributesRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryProviderAttributesRequest): JsonSafe<QueryProviderAttributesRequest> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProviderAttributesRequest>, I>>(object: I): QueryProviderAttributesRequest {
    const message = createBaseQueryProviderAttributesRequest();
    message.owner = object.owner ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryProviderAttributesRequestSDKType): QueryProviderAttributesRequest {
    return {
      owner: object?.owner,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryProviderAttributesRequestSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryProviderAttributesRequest): QueryProviderAttributesRequestSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryProviderAttributesRequestAmino): QueryProviderAttributesRequest {
    const message = createBaseQueryProviderAttributesRequest();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProviderAttributesRequest): QueryProviderAttributesRequestAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProviderAttributesRequestAminoMsg): QueryProviderAttributesRequest {
    return QueryProviderAttributesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProviderAttributesRequest): QueryProviderAttributesRequestAminoMsg {
    return {
      type: "akash/audit/v1beta2/query-provider-attributes-request",
      value: QueryProviderAttributesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProviderAttributesRequestProtoMsg): QueryProviderAttributesRequest {
    return QueryProviderAttributesRequest.decode(message.value);
  },
  toProto(message: QueryProviderAttributesRequest): Uint8Array {
    return QueryProviderAttributesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderAttributesRequest): QueryProviderAttributesRequestProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta2.QueryProviderAttributesRequest",
      value: QueryProviderAttributesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryProviderAuditorRequest(): QueryProviderAuditorRequest {
  return {
    auditor: "",
    owner: ""
  };
}
export const QueryProviderAuditorRequest = {
  typeUrl: "/akash.audit.v1beta2.QueryProviderAuditorRequest",
  encode(message: QueryProviderAuditorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auditor !== "") {
      writer.uint32(10).string(message.auditor);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProviderAuditorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProviderAuditorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auditor = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProviderAuditorRequest {
    return {
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  toJSON(message: QueryProviderAuditorRequest): JsonSafe<QueryProviderAuditorRequest> {
    const obj: any = {};
    message.auditor !== undefined && (obj.auditor = message.auditor);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryProviderAuditorRequest>, I>>(object: I): QueryProviderAuditorRequest {
    const message = createBaseQueryProviderAuditorRequest();
    message.auditor = object.auditor ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromSDK(object: QueryProviderAuditorRequestSDKType): QueryProviderAuditorRequest {
    return {
      auditor: object?.auditor,
      owner: object?.owner
    };
  },
  fromSDKJSON(object: any): QueryProviderAuditorRequestSDKType {
    return {
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  toSDK(message: QueryProviderAuditorRequest): QueryProviderAuditorRequestSDKType {
    const obj: any = {};
    obj.auditor = message.auditor;
    obj.owner = message.owner;
    return obj;
  },
  fromAmino(object: QueryProviderAuditorRequestAmino): QueryProviderAuditorRequest {
    const message = createBaseQueryProviderAuditorRequest();
    if (object.auditor !== undefined && object.auditor !== null) {
      message.auditor = object.auditor;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: QueryProviderAuditorRequest): QueryProviderAuditorRequestAmino {
    const obj: any = {};
    obj.auditor = message.auditor === "" ? undefined : message.auditor;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryProviderAuditorRequestAminoMsg): QueryProviderAuditorRequest {
    return QueryProviderAuditorRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryProviderAuditorRequest): QueryProviderAuditorRequestAminoMsg {
    return {
      type: "akash/audit/v1beta2/query-provider-auditor-request",
      value: QueryProviderAuditorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryProviderAuditorRequestProtoMsg): QueryProviderAuditorRequest {
    return QueryProviderAuditorRequest.decode(message.value);
  },
  toProto(message: QueryProviderAuditorRequest): Uint8Array {
    return QueryProviderAuditorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProviderAuditorRequest): QueryProviderAuditorRequestProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta2.QueryProviderAuditorRequest",
      value: QueryProviderAuditorRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAuditorAttributesRequest(): QueryAuditorAttributesRequest {
  return {
    auditor: "",
    pagination: undefined
  };
}
export const QueryAuditorAttributesRequest = {
  typeUrl: "/akash.audit.v1beta2.QueryAuditorAttributesRequest",
  encode(message: QueryAuditorAttributesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.auditor !== "") {
      writer.uint32(10).string(message.auditor);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAuditorAttributesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuditorAttributesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auditor = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAuditorAttributesRequest {
    return {
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAuditorAttributesRequest): JsonSafe<QueryAuditorAttributesRequest> {
    const obj: any = {};
    message.auditor !== undefined && (obj.auditor = message.auditor);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryAuditorAttributesRequest>, I>>(object: I): QueryAuditorAttributesRequest {
    const message = createBaseQueryAuditorAttributesRequest();
    message.auditor = object.auditor ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAuditorAttributesRequestSDKType): QueryAuditorAttributesRequest {
    return {
      auditor: object?.auditor,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryAuditorAttributesRequestSDKType {
    return {
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAuditorAttributesRequest): QueryAuditorAttributesRequestSDKType {
    const obj: any = {};
    obj.auditor = message.auditor;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAuditorAttributesRequestAmino): QueryAuditorAttributesRequest {
    const message = createBaseQueryAuditorAttributesRequest();
    if (object.auditor !== undefined && object.auditor !== null) {
      message.auditor = object.auditor;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAuditorAttributesRequest): QueryAuditorAttributesRequestAmino {
    const obj: any = {};
    obj.auditor = message.auditor === "" ? undefined : message.auditor;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAuditorAttributesRequestAminoMsg): QueryAuditorAttributesRequest {
    return QueryAuditorAttributesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAuditorAttributesRequest): QueryAuditorAttributesRequestAminoMsg {
    return {
      type: "akash/audit/v1beta2/query-auditor-attributes-request",
      value: QueryAuditorAttributesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAuditorAttributesRequestProtoMsg): QueryAuditorAttributesRequest {
    return QueryAuditorAttributesRequest.decode(message.value);
  },
  toProto(message: QueryAuditorAttributesRequest): Uint8Array {
    return QueryAuditorAttributesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAuditorAttributesRequest): QueryAuditorAttributesRequestProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta2.QueryAuditorAttributesRequest",
      value: QueryAuditorAttributesRequest.encode(message).finish()
    };
  }
};