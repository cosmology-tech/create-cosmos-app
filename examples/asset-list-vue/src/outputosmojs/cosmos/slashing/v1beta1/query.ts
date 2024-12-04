import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsSDKType, ValidatorSigningInfo, ValidatorSigningInfoSDKType } from "./slashing";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, isSet } from "../../../helpers";
export const protobufPackage = "cosmos.slashing.v1beta1";
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC
 * method
 */
export interface QuerySigningInfoRequest {
  /** cons_address is the address to query signing info of */
  consAddress: string;
}
export interface QuerySigningInfoRequestProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoRequest";
  value: Uint8Array;
}
/**
 * QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC
 * method
 */
export interface QuerySigningInfoRequestSDKType {
  cons_address: string;
}
/**
 * QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
 * method
 */
export interface QuerySigningInfoResponse {
  /** val_signing_info is the signing info of requested val cons address */
  valSigningInfo: ValidatorSigningInfo;
}
export interface QuerySigningInfoResponseProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoResponse";
  value: Uint8Array;
}
/**
 * QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
 * method
 */
export interface QuerySigningInfoResponseSDKType {
  val_signing_info: ValidatorSigningInfoSDKType;
}
/**
 * QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC
 * method
 */
export interface QuerySigningInfosRequest {
  pagination?: PageRequest;
}
export interface QuerySigningInfosRequestProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosRequest";
  value: Uint8Array;
}
/**
 * QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC
 * method
 */
export interface QuerySigningInfosRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
 * method
 */
export interface QuerySigningInfosResponse {
  /** info is the signing info of all validators */
  info: ValidatorSigningInfo[];
  pagination?: PageResponse;
}
export interface QuerySigningInfosResponseProtoMsg {
  typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosResponse";
  value: Uint8Array;
}
/**
 * QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
 * method
 */
export interface QuerySigningInfosResponseSDKType {
  info: ValidatorSigningInfoSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cosmos.slashing.v1beta1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryParamsRequestSDKType {
    return {};
  },
  toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
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
      typeUrl: "/cosmos.slashing.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/cosmos.slashing.v1beta1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  fromSDKJSON(object: any): QueryParamsResponseSDKType {
    return {
      params: isSet(object.params) ? Params.fromSDKJSON(object.params) : undefined
    };
  },
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
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
      typeUrl: "/cosmos.slashing.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySigningInfoRequest(): QuerySigningInfoRequest {
  return {
    consAddress: ""
  };
}
export const QuerySigningInfoRequest = {
  typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoRequest",
  encode(message: QuerySigningInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consAddress !== "") {
      writer.uint32(10).string(message.consAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySigningInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySigningInfoRequest {
    return {
      consAddress: isSet(object.consAddress) ? String(object.consAddress) : ""
    };
  },
  toJSON(message: QuerySigningInfoRequest): JsonSafe<QuerySigningInfoRequest> {
    const obj: any = {};
    message.consAddress !== undefined && (obj.consAddress = message.consAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySigningInfoRequest>): QuerySigningInfoRequest {
    const message = createBaseQuerySigningInfoRequest();
    message.consAddress = object.consAddress ?? "";
    return message;
  },
  fromSDK(object: QuerySigningInfoRequestSDKType): QuerySigningInfoRequest {
    return {
      consAddress: object?.cons_address
    };
  },
  fromSDKJSON(object: any): QuerySigningInfoRequestSDKType {
    return {
      cons_address: isSet(object.cons_address) ? String(object.cons_address) : ""
    };
  },
  toSDK(message: QuerySigningInfoRequest): QuerySigningInfoRequestSDKType {
    const obj: any = {};
    obj.cons_address = message.consAddress;
    return obj;
  },
  fromAmino(object: QuerySigningInfoRequestAmino): QuerySigningInfoRequest {
    const message = createBaseQuerySigningInfoRequest();
    if (object.cons_address !== undefined && object.cons_address !== null) {
      message.consAddress = object.cons_address;
    }
    return message;
  },
  toAmino(message: QuerySigningInfoRequest): QuerySigningInfoRequestAmino {
    const obj: any = {};
    obj.cons_address = message.consAddress === "" ? undefined : message.consAddress;
    return obj;
  },
  fromAminoMsg(object: QuerySigningInfoRequestAminoMsg): QuerySigningInfoRequest {
    return QuerySigningInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySigningInfoRequest): QuerySigningInfoRequestAminoMsg {
    return {
      type: "cosmos-sdk/QuerySigningInfoRequest",
      value: QuerySigningInfoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySigningInfoRequestProtoMsg): QuerySigningInfoRequest {
    return QuerySigningInfoRequest.decode(message.value);
  },
  toProto(message: QuerySigningInfoRequest): Uint8Array {
    return QuerySigningInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySigningInfoRequest): QuerySigningInfoRequestProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoRequest",
      value: QuerySigningInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySigningInfoResponse(): QuerySigningInfoResponse {
  return {
    valSigningInfo: ValidatorSigningInfo.fromPartial({})
  };
}
export const QuerySigningInfoResponse = {
  typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoResponse",
  encode(message: QuerySigningInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valSigningInfo !== undefined) {
      ValidatorSigningInfo.encode(message.valSigningInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySigningInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valSigningInfo = ValidatorSigningInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySigningInfoResponse {
    return {
      valSigningInfo: isSet(object.valSigningInfo) ? ValidatorSigningInfo.fromJSON(object.valSigningInfo) : undefined
    };
  },
  toJSON(message: QuerySigningInfoResponse): JsonSafe<QuerySigningInfoResponse> {
    const obj: any = {};
    message.valSigningInfo !== undefined && (obj.valSigningInfo = message.valSigningInfo ? ValidatorSigningInfo.toJSON(message.valSigningInfo) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySigningInfoResponse>): QuerySigningInfoResponse {
    const message = createBaseQuerySigningInfoResponse();
    message.valSigningInfo = object.valSigningInfo !== undefined && object.valSigningInfo !== null ? ValidatorSigningInfo.fromPartial(object.valSigningInfo) : undefined;
    return message;
  },
  fromSDK(object: QuerySigningInfoResponseSDKType): QuerySigningInfoResponse {
    return {
      valSigningInfo: object.val_signing_info ? ValidatorSigningInfo.fromSDK(object.val_signing_info) : undefined
    };
  },
  fromSDKJSON(object: any): QuerySigningInfoResponseSDKType {
    return {
      val_signing_info: isSet(object.val_signing_info) ? ValidatorSigningInfo.fromSDKJSON(object.val_signing_info) : undefined
    };
  },
  toSDK(message: QuerySigningInfoResponse): QuerySigningInfoResponseSDKType {
    const obj: any = {};
    message.valSigningInfo !== undefined && (obj.val_signing_info = message.valSigningInfo ? ValidatorSigningInfo.toSDK(message.valSigningInfo) : undefined);
    return obj;
  },
  fromAmino(object: QuerySigningInfoResponseAmino): QuerySigningInfoResponse {
    const message = createBaseQuerySigningInfoResponse();
    if (object.val_signing_info !== undefined && object.val_signing_info !== null) {
      message.valSigningInfo = ValidatorSigningInfo.fromAmino(object.val_signing_info);
    }
    return message;
  },
  toAmino(message: QuerySigningInfoResponse): QuerySigningInfoResponseAmino {
    const obj: any = {};
    obj.val_signing_info = message.valSigningInfo ? ValidatorSigningInfo.toAmino(message.valSigningInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySigningInfoResponseAminoMsg): QuerySigningInfoResponse {
    return QuerySigningInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySigningInfoResponse): QuerySigningInfoResponseAminoMsg {
    return {
      type: "cosmos-sdk/QuerySigningInfoResponse",
      value: QuerySigningInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySigningInfoResponseProtoMsg): QuerySigningInfoResponse {
    return QuerySigningInfoResponse.decode(message.value);
  },
  toProto(message: QuerySigningInfoResponse): Uint8Array {
    return QuerySigningInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySigningInfoResponse): QuerySigningInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoResponse",
      value: QuerySigningInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySigningInfosRequest(): QuerySigningInfosRequest {
  return {
    pagination: undefined
  };
}
export const QuerySigningInfosRequest = {
  typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosRequest",
  encode(message: QuerySigningInfosRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySigningInfosRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfosRequest();
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
  fromJSON(object: any): QuerySigningInfosRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QuerySigningInfosRequest): JsonSafe<QuerySigningInfosRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySigningInfosRequest>): QuerySigningInfosRequest {
    const message = createBaseQuerySigningInfosRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QuerySigningInfosRequestSDKType): QuerySigningInfosRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QuerySigningInfosRequestSDKType {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QuerySigningInfosRequest): QuerySigningInfosRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QuerySigningInfosRequestAmino): QuerySigningInfosRequest {
    const message = createBaseQuerySigningInfosRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySigningInfosRequest): QuerySigningInfosRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySigningInfosRequestAminoMsg): QuerySigningInfosRequest {
    return QuerySigningInfosRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySigningInfosRequest): QuerySigningInfosRequestAminoMsg {
    return {
      type: "cosmos-sdk/QuerySigningInfosRequest",
      value: QuerySigningInfosRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySigningInfosRequestProtoMsg): QuerySigningInfosRequest {
    return QuerySigningInfosRequest.decode(message.value);
  },
  toProto(message: QuerySigningInfosRequest): Uint8Array {
    return QuerySigningInfosRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySigningInfosRequest): QuerySigningInfosRequestProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosRequest",
      value: QuerySigningInfosRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySigningInfosResponse(): QuerySigningInfosResponse {
  return {
    info: [],
    pagination: undefined
  };
}
export const QuerySigningInfosResponse = {
  typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosResponse",
  encode(message: QuerySigningInfosResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.info) {
      ValidatorSigningInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySigningInfosResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySigningInfosResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info.push(ValidatorSigningInfo.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QuerySigningInfosResponse {
    return {
      info: Array.isArray(object?.info) ? object.info.map((e: any) => ValidatorSigningInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QuerySigningInfosResponse): JsonSafe<QuerySigningInfosResponse> {
    const obj: any = {};
    if (message.info) {
      obj.info = message.info.map(e => e ? ValidatorSigningInfo.toJSON(e) : undefined);
    } else {
      obj.info = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySigningInfosResponse>): QuerySigningInfosResponse {
    const message = createBaseQuerySigningInfosResponse();
    message.info = object.info?.map(e => ValidatorSigningInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QuerySigningInfosResponseSDKType): QuerySigningInfosResponse {
    return {
      info: Array.isArray(object?.info) ? object.info.map((e: any) => ValidatorSigningInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QuerySigningInfosResponseSDKType {
    return {
      info: Array.isArray(object?.info) ? object.info.map((e: any) => ValidatorSigningInfo.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QuerySigningInfosResponse): QuerySigningInfosResponseSDKType {
    const obj: any = {};
    if (message.info) {
      obj.info = message.info.map(e => e ? ValidatorSigningInfo.toSDK(e) : undefined);
    } else {
      obj.info = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QuerySigningInfosResponseAmino): QuerySigningInfosResponse {
    const message = createBaseQuerySigningInfosResponse();
    message.info = object.info?.map(e => ValidatorSigningInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QuerySigningInfosResponse): QuerySigningInfosResponseAmino {
    const obj: any = {};
    if (message.info) {
      obj.info = message.info.map(e => e ? ValidatorSigningInfo.toAmino(e) : undefined);
    } else {
      obj.info = message.info;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySigningInfosResponseAminoMsg): QuerySigningInfosResponse {
    return QuerySigningInfosResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySigningInfosResponse): QuerySigningInfosResponseAminoMsg {
    return {
      type: "cosmos-sdk/QuerySigningInfosResponse",
      value: QuerySigningInfosResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySigningInfosResponseProtoMsg): QuerySigningInfosResponse {
    return QuerySigningInfosResponse.decode(message.value);
  },
  toProto(message: QuerySigningInfosResponse): Uint8Array {
    return QuerySigningInfosResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySigningInfosResponse): QuerySigningInfosResponseProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosResponse",
      value: QuerySigningInfosResponse.encode(message).finish()
    };
  }
};