import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantAmino, GrantSDKType } from "./feegrant";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "cosmos.feegrant.v1beta1";
/** QueryAllowanceRequest is the request type for the Query/Allowance RPC method. */
export interface QueryAllowanceRequest {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */
  grantee: string;
}
export interface QueryAllowanceRequestProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceRequest";
  value: Uint8Array;
}
/** QueryAllowanceRequest is the request type for the Query/Allowance RPC method. */
export interface QueryAllowanceRequestAmino {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;
  /** grantee is the address of the user being granted an allowance of another user's funds. */
  grantee: string;
}
export interface QueryAllowanceRequestAminoMsg {
  type: "cosmos-sdk/QueryAllowanceRequest";
  value: QueryAllowanceRequestAmino;
}
/** QueryAllowanceRequest is the request type for the Query/Allowance RPC method. */
export interface QueryAllowanceRequestSDKType {
  granter: string;
  grantee: string;
}
/** QueryAllowanceResponse is the response type for the Query/Allowance RPC method. */
export interface QueryAllowanceResponse {
  /** allowance is a allowance granted for grantee by granter. */
  allowance: Grant;
}
export interface QueryAllowanceResponseProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceResponse";
  value: Uint8Array;
}
/** QueryAllowanceResponse is the response type for the Query/Allowance RPC method. */
export interface QueryAllowanceResponseAmino {
  /** allowance is a allowance granted for grantee by granter. */
  allowance?: GrantAmino;
}
export interface QueryAllowanceResponseAminoMsg {
  type: "cosmos-sdk/QueryAllowanceResponse";
  value: QueryAllowanceResponseAmino;
}
/** QueryAllowanceResponse is the response type for the Query/Allowance RPC method. */
export interface QueryAllowanceResponseSDKType {
  allowance: GrantSDKType;
}
/** QueryAllowancesRequest is the request type for the Query/Allowances RPC method. */
export interface QueryAllowancesRequest {
  grantee: string;
  /** pagination defines an pagination for the request. */
  pagination: PageRequest;
}
export interface QueryAllowancesRequestProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesRequest";
  value: Uint8Array;
}
/** QueryAllowancesRequest is the request type for the Query/Allowances RPC method. */
export interface QueryAllowancesRequestAmino {
  grantee: string;
  /** pagination defines an pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryAllowancesRequestAminoMsg {
  type: "cosmos-sdk/QueryAllowancesRequest";
  value: QueryAllowancesRequestAmino;
}
/** QueryAllowancesRequest is the request type for the Query/Allowances RPC method. */
export interface QueryAllowancesRequestSDKType {
  grantee: string;
  pagination: PageRequestSDKType;
}
/** QueryAllowancesResponse is the response type for the Query/Allowances RPC method. */
export interface QueryAllowancesResponse {
  /** allowances are allowance's granted for grantee by granter. */
  allowances: Grant[];
  /** pagination defines an pagination for the response. */
  pagination: PageResponse;
}
export interface QueryAllowancesResponseProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesResponse";
  value: Uint8Array;
}
/** QueryAllowancesResponse is the response type for the Query/Allowances RPC method. */
export interface QueryAllowancesResponseAmino {
  /** allowances are allowance's granted for grantee by granter. */
  allowances: GrantAmino[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponseAmino;
}
export interface QueryAllowancesResponseAminoMsg {
  type: "cosmos-sdk/QueryAllowancesResponse";
  value: QueryAllowancesResponseAmino;
}
/** QueryAllowancesResponse is the response type for the Query/Allowances RPC method. */
export interface QueryAllowancesResponseSDKType {
  allowances: GrantSDKType[];
  pagination: PageResponseSDKType;
}
/** QueryAllowancesByGranterRequest is the request type for the Query/AllowancesByGranter RPC method. */
export interface QueryAllowancesByGranterRequest {
  granter: string;
  /** pagination defines an pagination for the request. */
  pagination: PageRequest;
}
export interface QueryAllowancesByGranterRequestProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest";
  value: Uint8Array;
}
/** QueryAllowancesByGranterRequest is the request type for the Query/AllowancesByGranter RPC method. */
export interface QueryAllowancesByGranterRequestAmino {
  granter: string;
  /** pagination defines an pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryAllowancesByGranterRequestAminoMsg {
  type: "cosmos-sdk/QueryAllowancesByGranterRequest";
  value: QueryAllowancesByGranterRequestAmino;
}
/** QueryAllowancesByGranterRequest is the request type for the Query/AllowancesByGranter RPC method. */
export interface QueryAllowancesByGranterRequestSDKType {
  granter: string;
  pagination: PageRequestSDKType;
}
/** QueryAllowancesByGranterResponse is the response type for the Query/AllowancesByGranter RPC method. */
export interface QueryAllowancesByGranterResponse {
  /** allowances that have been issued by the granter. */
  allowances: Grant[];
  /** pagination defines an pagination for the response. */
  pagination: PageResponse;
}
export interface QueryAllowancesByGranterResponseProtoMsg {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse";
  value: Uint8Array;
}
/** QueryAllowancesByGranterResponse is the response type for the Query/AllowancesByGranter RPC method. */
export interface QueryAllowancesByGranterResponseAmino {
  /** allowances that have been issued by the granter. */
  allowances: GrantAmino[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponseAmino;
}
export interface QueryAllowancesByGranterResponseAminoMsg {
  type: "cosmos-sdk/QueryAllowancesByGranterResponse";
  value: QueryAllowancesByGranterResponseAmino;
}
/** QueryAllowancesByGranterResponse is the response type for the Query/AllowancesByGranter RPC method. */
export interface QueryAllowancesByGranterResponseSDKType {
  allowances: GrantSDKType[];
  pagination: PageResponseSDKType;
}
function createBaseQueryAllowanceRequest(): QueryAllowanceRequest {
  return {
    granter: "",
    grantee: ""
  };
}
export const QueryAllowanceRequest = {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceRequest",
  aminoType: "cosmos-sdk/QueryAllowanceRequest",
  encode(message: QueryAllowanceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowanceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllowanceRequest {
    return {
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : ""
    };
  },
  toJSON(message: QueryAllowanceRequest): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllowanceRequest>): QueryAllowanceRequest {
    const message = createBaseQueryAllowanceRequest();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    return message;
  },
  fromSDK(object: QueryAllowanceRequestSDKType): QueryAllowanceRequest {
    return {
      granter: object?.granter,
      grantee: object?.grantee
    };
  },
  toSDK(message: QueryAllowanceRequest): QueryAllowanceRequestSDKType {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    return obj;
  },
  fromAmino(object: QueryAllowanceRequestAmino): QueryAllowanceRequest {
    return {
      granter: object.granter,
      grantee: object.grantee
    };
  },
  toAmino(message: QueryAllowanceRequest): QueryAllowanceRequestAmino {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    return obj;
  },
  fromAminoMsg(object: QueryAllowanceRequestAminoMsg): QueryAllowanceRequest {
    return QueryAllowanceRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllowanceRequest): QueryAllowanceRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryAllowanceRequest",
      value: QueryAllowanceRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllowanceRequestProtoMsg): QueryAllowanceRequest {
    return QueryAllowanceRequest.decode(message.value);
  },
  toProto(message: QueryAllowanceRequest): Uint8Array {
    return QueryAllowanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllowanceRequest): QueryAllowanceRequestProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceRequest",
      value: QueryAllowanceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllowanceResponse(): QueryAllowanceResponse {
  return {
    allowance: Grant.fromPartial({})
  };
}
export const QueryAllowanceResponse = {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceResponse",
  aminoType: "cosmos-sdk/QueryAllowanceResponse",
  encode(message: QueryAllowanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allowance !== undefined) {
      Grant.encode(message.allowance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowance = Grant.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllowanceResponse {
    return {
      allowance: isSet(object.allowance) ? Grant.fromJSON(object.allowance) : undefined
    };
  },
  toJSON(message: QueryAllowanceResponse): unknown {
    const obj: any = {};
    message.allowance !== undefined && (obj.allowance = message.allowance ? Grant.toJSON(message.allowance) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllowanceResponse>): QueryAllowanceResponse {
    const message = createBaseQueryAllowanceResponse();
    message.allowance = object.allowance !== undefined && object.allowance !== null ? Grant.fromPartial(object.allowance) : undefined;
    return message;
  },
  fromSDK(object: QueryAllowanceResponseSDKType): QueryAllowanceResponse {
    return {
      allowance: object.allowance ? Grant.fromSDK(object.allowance) : undefined
    };
  },
  toSDK(message: QueryAllowanceResponse): QueryAllowanceResponseSDKType {
    const obj: any = {};
    message.allowance !== undefined && (obj.allowance = message.allowance ? Grant.toSDK(message.allowance) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllowanceResponseAmino): QueryAllowanceResponse {
    return {
      allowance: object?.allowance ? Grant.fromAmino(object.allowance) : undefined
    };
  },
  toAmino(message: QueryAllowanceResponse): QueryAllowanceResponseAmino {
    const obj: any = {};
    obj.allowance = message.allowance ? Grant.toAmino(message.allowance) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllowanceResponseAminoMsg): QueryAllowanceResponse {
    return QueryAllowanceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllowanceResponse): QueryAllowanceResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryAllowanceResponse",
      value: QueryAllowanceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllowanceResponseProtoMsg): QueryAllowanceResponse {
    return QueryAllowanceResponse.decode(message.value);
  },
  toProto(message: QueryAllowanceResponse): Uint8Array {
    return QueryAllowanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllowanceResponse): QueryAllowanceResponseProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowanceResponse",
      value: QueryAllowanceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllowancesRequest(): QueryAllowancesRequest {
  return {
    grantee: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllowancesRequest = {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesRequest",
  aminoType: "cosmos-sdk/QueryAllowancesRequest",
  encode(message: QueryAllowancesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowancesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
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
  fromJSON(object: any): QueryAllowancesRequest {
    return {
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllowancesRequest): unknown {
    const obj: any = {};
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllowancesRequest>): QueryAllowancesRequest {
    const message = createBaseQueryAllowancesRequest();
    message.grantee = object.grantee ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAllowancesRequestSDKType): QueryAllowancesRequest {
    return {
      grantee: object?.grantee,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllowancesRequest): QueryAllowancesRequestSDKType {
    const obj: any = {};
    obj.grantee = message.grantee;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllowancesRequestAmino): QueryAllowancesRequest {
    return {
      grantee: object.grantee,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllowancesRequest): QueryAllowancesRequestAmino {
    const obj: any = {};
    obj.grantee = message.grantee;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllowancesRequestAminoMsg): QueryAllowancesRequest {
    return QueryAllowancesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllowancesRequest): QueryAllowancesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryAllowancesRequest",
      value: QueryAllowancesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllowancesRequestProtoMsg): QueryAllowancesRequest {
    return QueryAllowancesRequest.decode(message.value);
  },
  toProto(message: QueryAllowancesRequest): Uint8Array {
    return QueryAllowancesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllowancesRequest): QueryAllowancesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesRequest",
      value: QueryAllowancesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllowancesResponse(): QueryAllowancesResponse {
  return {
    allowances: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllowancesResponse = {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesResponse",
  aminoType: "cosmos-sdk/QueryAllowancesResponse",
  encode(message: QueryAllowancesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allowances) {
      Grant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowancesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowances.push(Grant.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllowancesResponse {
    return {
      allowances: Array.isArray(object?.allowances) ? object.allowances.map((e: any) => Grant.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllowancesResponse): unknown {
    const obj: any = {};
    if (message.allowances) {
      obj.allowances = message.allowances.map(e => e ? Grant.toJSON(e) : undefined);
    } else {
      obj.allowances = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllowancesResponse>): QueryAllowancesResponse {
    const message = createBaseQueryAllowancesResponse();
    message.allowances = object.allowances?.map(e => Grant.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAllowancesResponseSDKType): QueryAllowancesResponse {
    return {
      allowances: Array.isArray(object?.allowances) ? object.allowances.map((e: any) => Grant.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllowancesResponse): QueryAllowancesResponseSDKType {
    const obj: any = {};
    if (message.allowances) {
      obj.allowances = message.allowances.map(e => e ? Grant.toSDK(e) : undefined);
    } else {
      obj.allowances = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllowancesResponseAmino): QueryAllowancesResponse {
    return {
      allowances: Array.isArray(object?.allowances) ? object.allowances.map((e: any) => Grant.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllowancesResponse): QueryAllowancesResponseAmino {
    const obj: any = {};
    if (message.allowances) {
      obj.allowances = message.allowances.map(e => e ? Grant.toAmino(e) : undefined);
    } else {
      obj.allowances = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllowancesResponseAminoMsg): QueryAllowancesResponse {
    return QueryAllowancesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllowancesResponse): QueryAllowancesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryAllowancesResponse",
      value: QueryAllowancesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllowancesResponseProtoMsg): QueryAllowancesResponse {
    return QueryAllowancesResponse.decode(message.value);
  },
  toProto(message: QueryAllowancesResponse): Uint8Array {
    return QueryAllowancesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllowancesResponse): QueryAllowancesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesResponse",
      value: QueryAllowancesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllowancesByGranterRequest(): QueryAllowancesByGranterRequest {
  return {
    granter: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllowancesByGranterRequest = {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest",
  aminoType: "cosmos-sdk/QueryAllowancesByGranterRequest",
  encode(message: QueryAllowancesByGranterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowancesByGranterRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowancesByGranterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
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
  fromJSON(object: any): QueryAllowancesByGranterRequest {
    return {
      granter: isSet(object.granter) ? String(object.granter) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllowancesByGranterRequest): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllowancesByGranterRequest>): QueryAllowancesByGranterRequest {
    const message = createBaseQueryAllowancesByGranterRequest();
    message.granter = object.granter ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAllowancesByGranterRequestSDKType): QueryAllowancesByGranterRequest {
    return {
      granter: object?.granter,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllowancesByGranterRequest): QueryAllowancesByGranterRequestSDKType {
    const obj: any = {};
    obj.granter = message.granter;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllowancesByGranterRequestAmino): QueryAllowancesByGranterRequest {
    return {
      granter: object.granter,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllowancesByGranterRequest): QueryAllowancesByGranterRequestAmino {
    const obj: any = {};
    obj.granter = message.granter;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllowancesByGranterRequestAminoMsg): QueryAllowancesByGranterRequest {
    return QueryAllowancesByGranterRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllowancesByGranterRequest): QueryAllowancesByGranterRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryAllowancesByGranterRequest",
      value: QueryAllowancesByGranterRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllowancesByGranterRequestProtoMsg): QueryAllowancesByGranterRequest {
    return QueryAllowancesByGranterRequest.decode(message.value);
  },
  toProto(message: QueryAllowancesByGranterRequest): Uint8Array {
    return QueryAllowancesByGranterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllowancesByGranterRequest): QueryAllowancesByGranterRequestProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest",
      value: QueryAllowancesByGranterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllowancesByGranterResponse(): QueryAllowancesByGranterResponse {
  return {
    allowances: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllowancesByGranterResponse = {
  typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse",
  aminoType: "cosmos-sdk/QueryAllowancesByGranterResponse",
  encode(message: QueryAllowancesByGranterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allowances) {
      Grant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowancesByGranterResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowancesByGranterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowances.push(Grant.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllowancesByGranterResponse {
    return {
      allowances: Array.isArray(object?.allowances) ? object.allowances.map((e: any) => Grant.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllowancesByGranterResponse): unknown {
    const obj: any = {};
    if (message.allowances) {
      obj.allowances = message.allowances.map(e => e ? Grant.toJSON(e) : undefined);
    } else {
      obj.allowances = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllowancesByGranterResponse>): QueryAllowancesByGranterResponse {
    const message = createBaseQueryAllowancesByGranterResponse();
    message.allowances = object.allowances?.map(e => Grant.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryAllowancesByGranterResponseSDKType): QueryAllowancesByGranterResponse {
    return {
      allowances: Array.isArray(object?.allowances) ? object.allowances.map((e: any) => Grant.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryAllowancesByGranterResponse): QueryAllowancesByGranterResponseSDKType {
    const obj: any = {};
    if (message.allowances) {
      obj.allowances = message.allowances.map(e => e ? Grant.toSDK(e) : undefined);
    } else {
      obj.allowances = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryAllowancesByGranterResponseAmino): QueryAllowancesByGranterResponse {
    return {
      allowances: Array.isArray(object?.allowances) ? object.allowances.map((e: any) => Grant.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllowancesByGranterResponse): QueryAllowancesByGranterResponseAmino {
    const obj: any = {};
    if (message.allowances) {
      obj.allowances = message.allowances.map(e => e ? Grant.toAmino(e) : undefined);
    } else {
      obj.allowances = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllowancesByGranterResponseAminoMsg): QueryAllowancesByGranterResponse {
    return QueryAllowancesByGranterResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllowancesByGranterResponse): QueryAllowancesByGranterResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryAllowancesByGranterResponse",
      value: QueryAllowancesByGranterResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllowancesByGranterResponseProtoMsg): QueryAllowancesByGranterResponse {
    return QueryAllowancesByGranterResponse.decode(message.value);
  },
  toProto(message: QueryAllowancesByGranterResponse): Uint8Array {
    return QueryAllowancesByGranterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllowancesByGranterResponse): QueryAllowancesByGranterResponseProtoMsg {
    return {
      typeUrl: "/cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse",
      value: QueryAllowancesByGranterResponse.encode(message).finish()
    };
  }
};