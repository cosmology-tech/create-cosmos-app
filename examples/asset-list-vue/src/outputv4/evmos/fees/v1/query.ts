import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { DevFeeInfo, DevFeeInfoSDKType } from "./fees";
import { Params, ParamsSDKType } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { ComputedRef } from "vue";
export const protobufPackage = "evmos.fees.v1";
/**
 * QueryDevFeeInfosRequest is the request type for the Query/DevFeeInfos RPC
 * method.
 */
export interface QueryDevFeeInfosRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface ReactiveQueryDevFeeInfosRequest {
  pagination?: ComputedRef<PageRequest>;
}
export interface QueryDevFeeInfosRequestProtoMsg {
  typeUrl: "/evmos.fees.v1.QueryDevFeeInfosRequest";
  value: Uint8Array;
}
/**
 * QueryDevFeeInfosRequest is the request type for the Query/DevFeeInfos RPC
 * method.
 */
export interface QueryDevFeeInfosRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryDevFeeInfosResponse is the response type for the Query/DevFeeInfos
 * RPC method.
 */
export interface QueryDevFeeInfosResponse {
  fees: DevFeeInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface ReactiveQueryDevFeeInfosResponse {
  fees: ComputedRef<DevFeeInfo[]>;
  pagination?: ComputedRef<PageResponse>;
}
export interface QueryDevFeeInfosResponseProtoMsg {
  typeUrl: "/evmos.fees.v1.QueryDevFeeInfosResponse";
  value: Uint8Array;
}
/**
 * QueryDevFeeInfosResponse is the response type for the Query/DevFeeInfos
 * RPC method.
 */
export interface QueryDevFeeInfosResponseSDKType {
  fees: DevFeeInfoSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryDevFeeInfoRequest is the request type for the Query/DevFeeInfo RPC
 * method.
 */
export interface QueryDevFeeInfoRequest {
  /** contract identifier is the hex contract address of a contract */
  contractAddress: string;
}
export interface ReactiveQueryDevFeeInfoRequest {
  contractAddress: ComputedRef<string>;
}
export interface QueryDevFeeInfoRequestProtoMsg {
  typeUrl: "/evmos.fees.v1.QueryDevFeeInfoRequest";
  value: Uint8Array;
}
/**
 * QueryDevFeeInfoRequest is the request type for the Query/DevFeeInfo RPC
 * method.
 */
export interface QueryDevFeeInfoRequestSDKType {
  contract_address: string;
}
/**
 * QueryDevFeeInfoResponse is the response type for the Query/DevFeeInfo RPC
 * method.
 */
export interface QueryDevFeeInfoResponse {
  fee: DevFeeInfo;
}
export interface ReactiveQueryDevFeeInfoResponse {
  fee: ComputedRef<DevFeeInfo>;
}
export interface QueryDevFeeInfoResponseProtoMsg {
  typeUrl: "/evmos.fees.v1.QueryDevFeeInfoResponse";
  value: Uint8Array;
}
/**
 * QueryDevFeeInfoResponse is the response type for the Query/DevFeeInfo RPC
 * method.
 */
export interface QueryDevFeeInfoResponseSDKType {
  fee: DevFeeInfoSDKType;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface ReactiveQueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/evmos.fees.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponse {
  params: Params;
}
export interface ReactiveQueryParamsResponse {
  params: ComputedRef<Params>;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/evmos.fees.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * QueryDevFeeInfosPerDeployerRequest is the request type for the
 * Query/DevFeeInfosPerDeployer RPC method.
 */
export interface QueryDevFeeInfosPerDeployerRequest {
  /** deployer bech32 address */
  deployerAddress: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface ReactiveQueryDevFeeInfosPerDeployerRequest {
  deployerAddress: ComputedRef<string>;
  pagination?: ComputedRef<PageRequest>;
}
export interface QueryDevFeeInfosPerDeployerRequestProtoMsg {
  typeUrl: "/evmos.fees.v1.QueryDevFeeInfosPerDeployerRequest";
  value: Uint8Array;
}
/**
 * QueryDevFeeInfosPerDeployerRequest is the request type for the
 * Query/DevFeeInfosPerDeployer RPC method.
 */
export interface QueryDevFeeInfosPerDeployerRequestSDKType {
  deployer_address: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryDevFeeInfosPerDeployerResponse is the response type for the
 * Query/DevFeeInfosPerDeployer RPC method.
 */
export interface QueryDevFeeInfosPerDeployerResponse {
  fees: DevFeeInfo[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}
export interface ReactiveQueryDevFeeInfosPerDeployerResponse {
  fees: ComputedRef<DevFeeInfo[]>;
  pagination?: ComputedRef<PageResponse>;
}
export interface QueryDevFeeInfosPerDeployerResponseProtoMsg {
  typeUrl: "/evmos.fees.v1.QueryDevFeeInfosPerDeployerResponse";
  value: Uint8Array;
}
/**
 * QueryDevFeeInfosPerDeployerResponse is the response type for the
 * Query/DevFeeInfosPerDeployer RPC method.
 */
export interface QueryDevFeeInfosPerDeployerResponseSDKType {
  fees: DevFeeInfoSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryDevFeeInfosRequest(): QueryDevFeeInfosRequest {
  return {
    pagination: undefined
  };
}
export const QueryDevFeeInfosRequest = {
  typeUrl: "/evmos.fees.v1.QueryDevFeeInfosRequest",
  encode(message: QueryDevFeeInfosRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDevFeeInfosRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDevFeeInfosRequest();
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
  fromJSON(object: any): QueryDevFeeInfosRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryDevFeeInfosRequest): JsonSafe<QueryDevFeeInfosRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDevFeeInfosRequest>): QueryDevFeeInfosRequest {
    const message = createBaseQueryDevFeeInfosRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryDevFeeInfosRequestSDKType): QueryDevFeeInfosRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryDevFeeInfosRequestSDKType {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDevFeeInfosRequest): QueryDevFeeInfosRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryDevFeeInfosRequestAmino): QueryDevFeeInfosRequest {
    const message = createBaseQueryDevFeeInfosRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDevFeeInfosRequest): QueryDevFeeInfosRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDevFeeInfosRequestAminoMsg): QueryDevFeeInfosRequest {
    return QueryDevFeeInfosRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDevFeeInfosRequestProtoMsg): QueryDevFeeInfosRequest {
    return QueryDevFeeInfosRequest.decode(message.value);
  },
  toProto(message: QueryDevFeeInfosRequest): Uint8Array {
    return QueryDevFeeInfosRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDevFeeInfosRequest): QueryDevFeeInfosRequestProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.QueryDevFeeInfosRequest",
      value: QueryDevFeeInfosRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDevFeeInfosResponse(): QueryDevFeeInfosResponse {
  return {
    fees: [],
    pagination: undefined
  };
}
export const QueryDevFeeInfosResponse = {
  typeUrl: "/evmos.fees.v1.QueryDevFeeInfosResponse",
  encode(message: QueryDevFeeInfosResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.fees) {
      DevFeeInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDevFeeInfosResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDevFeeInfosResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fees.push(DevFeeInfo.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryDevFeeInfosResponse {
    return {
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => DevFeeInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryDevFeeInfosResponse): JsonSafe<QueryDevFeeInfosResponse> {
    const obj: any = {};
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? DevFeeInfo.toJSON(e) : undefined);
    } else {
      obj.fees = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDevFeeInfosResponse>): QueryDevFeeInfosResponse {
    const message = createBaseQueryDevFeeInfosResponse();
    message.fees = object.fees?.map(e => DevFeeInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryDevFeeInfosResponseSDKType): QueryDevFeeInfosResponse {
    return {
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => DevFeeInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryDevFeeInfosResponseSDKType {
    return {
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => DevFeeInfo.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDevFeeInfosResponse): QueryDevFeeInfosResponseSDKType {
    const obj: any = {};
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? DevFeeInfo.toSDK(e) : undefined);
    } else {
      obj.fees = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryDevFeeInfosResponseAmino): QueryDevFeeInfosResponse {
    const message = createBaseQueryDevFeeInfosResponse();
    message.fees = object.fees?.map(e => DevFeeInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDevFeeInfosResponse): QueryDevFeeInfosResponseAmino {
    const obj: any = {};
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? DevFeeInfo.toAmino(e) : undefined);
    } else {
      obj.fees = message.fees;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDevFeeInfosResponseAminoMsg): QueryDevFeeInfosResponse {
    return QueryDevFeeInfosResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDevFeeInfosResponseProtoMsg): QueryDevFeeInfosResponse {
    return QueryDevFeeInfosResponse.decode(message.value);
  },
  toProto(message: QueryDevFeeInfosResponse): Uint8Array {
    return QueryDevFeeInfosResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDevFeeInfosResponse): QueryDevFeeInfosResponseProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.QueryDevFeeInfosResponse",
      value: QueryDevFeeInfosResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDevFeeInfoRequest(): QueryDevFeeInfoRequest {
  return {
    contractAddress: ""
  };
}
export const QueryDevFeeInfoRequest = {
  typeUrl: "/evmos.fees.v1.QueryDevFeeInfoRequest",
  encode(message: QueryDevFeeInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDevFeeInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDevFeeInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDevFeeInfoRequest {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  toJSON(message: QueryDevFeeInfoRequest): JsonSafe<QueryDevFeeInfoRequest> {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDevFeeInfoRequest>): QueryDevFeeInfoRequest {
    const message = createBaseQueryDevFeeInfoRequest();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromSDK(object: QueryDevFeeInfoRequestSDKType): QueryDevFeeInfoRequest {
    return {
      contractAddress: object?.contract_address
    };
  },
  fromSDKJSON(object: any): QueryDevFeeInfoRequestSDKType {
    return {
      contract_address: isSet(object.contract_address) ? String(object.contract_address) : ""
    };
  },
  toSDK(message: QueryDevFeeInfoRequest): QueryDevFeeInfoRequestSDKType {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAmino(object: QueryDevFeeInfoRequestAmino): QueryDevFeeInfoRequest {
    const message = createBaseQueryDevFeeInfoRequest();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    return message;
  },
  toAmino(message: QueryDevFeeInfoRequest): QueryDevFeeInfoRequestAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDevFeeInfoRequestAminoMsg): QueryDevFeeInfoRequest {
    return QueryDevFeeInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDevFeeInfoRequestProtoMsg): QueryDevFeeInfoRequest {
    return QueryDevFeeInfoRequest.decode(message.value);
  },
  toProto(message: QueryDevFeeInfoRequest): Uint8Array {
    return QueryDevFeeInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDevFeeInfoRequest): QueryDevFeeInfoRequestProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.QueryDevFeeInfoRequest",
      value: QueryDevFeeInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDevFeeInfoResponse(): QueryDevFeeInfoResponse {
  return {
    fee: DevFeeInfo.fromPartial({})
  };
}
export const QueryDevFeeInfoResponse = {
  typeUrl: "/evmos.fees.v1.QueryDevFeeInfoResponse",
  encode(message: QueryDevFeeInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fee !== undefined) {
      DevFeeInfo.encode(message.fee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDevFeeInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDevFeeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fee = DevFeeInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDevFeeInfoResponse {
    return {
      fee: isSet(object.fee) ? DevFeeInfo.fromJSON(object.fee) : undefined
    };
  },
  toJSON(message: QueryDevFeeInfoResponse): JsonSafe<QueryDevFeeInfoResponse> {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = message.fee ? DevFeeInfo.toJSON(message.fee) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDevFeeInfoResponse>): QueryDevFeeInfoResponse {
    const message = createBaseQueryDevFeeInfoResponse();
    message.fee = object.fee !== undefined && object.fee !== null ? DevFeeInfo.fromPartial(object.fee) : undefined;
    return message;
  },
  fromSDK(object: QueryDevFeeInfoResponseSDKType): QueryDevFeeInfoResponse {
    return {
      fee: object.fee ? DevFeeInfo.fromSDK(object.fee) : undefined
    };
  },
  fromSDKJSON(object: any): QueryDevFeeInfoResponseSDKType {
    return {
      fee: isSet(object.fee) ? DevFeeInfo.fromSDKJSON(object.fee) : undefined
    };
  },
  toSDK(message: QueryDevFeeInfoResponse): QueryDevFeeInfoResponseSDKType {
    const obj: any = {};
    message.fee !== undefined && (obj.fee = message.fee ? DevFeeInfo.toSDK(message.fee) : undefined);
    return obj;
  },
  fromAmino(object: QueryDevFeeInfoResponseAmino): QueryDevFeeInfoResponse {
    const message = createBaseQueryDevFeeInfoResponse();
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = DevFeeInfo.fromAmino(object.fee);
    }
    return message;
  },
  toAmino(message: QueryDevFeeInfoResponse): QueryDevFeeInfoResponseAmino {
    const obj: any = {};
    obj.fee = message.fee ? DevFeeInfo.toAmino(message.fee) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDevFeeInfoResponseAminoMsg): QueryDevFeeInfoResponse {
    return QueryDevFeeInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDevFeeInfoResponseProtoMsg): QueryDevFeeInfoResponse {
    return QueryDevFeeInfoResponse.decode(message.value);
  },
  toProto(message: QueryDevFeeInfoResponse): Uint8Array {
    return QueryDevFeeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDevFeeInfoResponse): QueryDevFeeInfoResponseProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.QueryDevFeeInfoResponse",
      value: QueryDevFeeInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/evmos.fees.v1.QueryParamsRequest",
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
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.QueryParamsRequest",
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
  typeUrl: "/evmos.fees.v1.QueryParamsResponse",
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
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDevFeeInfosPerDeployerRequest(): QueryDevFeeInfosPerDeployerRequest {
  return {
    deployerAddress: "",
    pagination: undefined
  };
}
export const QueryDevFeeInfosPerDeployerRequest = {
  typeUrl: "/evmos.fees.v1.QueryDevFeeInfosPerDeployerRequest",
  encode(message: QueryDevFeeInfosPerDeployerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deployerAddress !== "") {
      writer.uint32(10).string(message.deployerAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDevFeeInfosPerDeployerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDevFeeInfosPerDeployerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deployerAddress = reader.string();
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
  fromJSON(object: any): QueryDevFeeInfosPerDeployerRequest {
    return {
      deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryDevFeeInfosPerDeployerRequest): JsonSafe<QueryDevFeeInfosPerDeployerRequest> {
    const obj: any = {};
    message.deployerAddress !== undefined && (obj.deployerAddress = message.deployerAddress);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDevFeeInfosPerDeployerRequest>): QueryDevFeeInfosPerDeployerRequest {
    const message = createBaseQueryDevFeeInfosPerDeployerRequest();
    message.deployerAddress = object.deployerAddress ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryDevFeeInfosPerDeployerRequestSDKType): QueryDevFeeInfosPerDeployerRequest {
    return {
      deployerAddress: object?.deployer_address,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryDevFeeInfosPerDeployerRequestSDKType {
    return {
      deployer_address: isSet(object.deployer_address) ? String(object.deployer_address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDevFeeInfosPerDeployerRequest): QueryDevFeeInfosPerDeployerRequestSDKType {
    const obj: any = {};
    obj.deployer_address = message.deployerAddress;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryDevFeeInfosPerDeployerRequestAmino): QueryDevFeeInfosPerDeployerRequest {
    const message = createBaseQueryDevFeeInfosPerDeployerRequest();
    if (object.deployer_address !== undefined && object.deployer_address !== null) {
      message.deployerAddress = object.deployer_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDevFeeInfosPerDeployerRequest): QueryDevFeeInfosPerDeployerRequestAmino {
    const obj: any = {};
    obj.deployer_address = message.deployerAddress === "" ? undefined : message.deployerAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDevFeeInfosPerDeployerRequestAminoMsg): QueryDevFeeInfosPerDeployerRequest {
    return QueryDevFeeInfosPerDeployerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDevFeeInfosPerDeployerRequestProtoMsg): QueryDevFeeInfosPerDeployerRequest {
    return QueryDevFeeInfosPerDeployerRequest.decode(message.value);
  },
  toProto(message: QueryDevFeeInfosPerDeployerRequest): Uint8Array {
    return QueryDevFeeInfosPerDeployerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDevFeeInfosPerDeployerRequest): QueryDevFeeInfosPerDeployerRequestProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.QueryDevFeeInfosPerDeployerRequest",
      value: QueryDevFeeInfosPerDeployerRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDevFeeInfosPerDeployerResponse(): QueryDevFeeInfosPerDeployerResponse {
  return {
    fees: [],
    pagination: undefined
  };
}
export const QueryDevFeeInfosPerDeployerResponse = {
  typeUrl: "/evmos.fees.v1.QueryDevFeeInfosPerDeployerResponse",
  encode(message: QueryDevFeeInfosPerDeployerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.fees) {
      DevFeeInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDevFeeInfosPerDeployerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDevFeeInfosPerDeployerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fees.push(DevFeeInfo.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryDevFeeInfosPerDeployerResponse {
    return {
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => DevFeeInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryDevFeeInfosPerDeployerResponse): JsonSafe<QueryDevFeeInfosPerDeployerResponse> {
    const obj: any = {};
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? DevFeeInfo.toJSON(e) : undefined);
    } else {
      obj.fees = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDevFeeInfosPerDeployerResponse>): QueryDevFeeInfosPerDeployerResponse {
    const message = createBaseQueryDevFeeInfosPerDeployerResponse();
    message.fees = object.fees?.map(e => DevFeeInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryDevFeeInfosPerDeployerResponseSDKType): QueryDevFeeInfosPerDeployerResponse {
    return {
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => DevFeeInfo.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): QueryDevFeeInfosPerDeployerResponseSDKType {
    return {
      fees: Array.isArray(object?.fees) ? object.fees.map((e: any) => DevFeeInfo.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: QueryDevFeeInfosPerDeployerResponse): QueryDevFeeInfosPerDeployerResponseSDKType {
    const obj: any = {};
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? DevFeeInfo.toSDK(e) : undefined);
    } else {
      obj.fees = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryDevFeeInfosPerDeployerResponseAmino): QueryDevFeeInfosPerDeployerResponse {
    const message = createBaseQueryDevFeeInfosPerDeployerResponse();
    message.fees = object.fees?.map(e => DevFeeInfo.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDevFeeInfosPerDeployerResponse): QueryDevFeeInfosPerDeployerResponseAmino {
    const obj: any = {};
    if (message.fees) {
      obj.fees = message.fees.map(e => e ? DevFeeInfo.toAmino(e) : undefined);
    } else {
      obj.fees = message.fees;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDevFeeInfosPerDeployerResponseAminoMsg): QueryDevFeeInfosPerDeployerResponse {
    return QueryDevFeeInfosPerDeployerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDevFeeInfosPerDeployerResponseProtoMsg): QueryDevFeeInfosPerDeployerResponse {
    return QueryDevFeeInfosPerDeployerResponse.decode(message.value);
  },
  toProto(message: QueryDevFeeInfosPerDeployerResponse): Uint8Array {
    return QueryDevFeeInfosPerDeployerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDevFeeInfosPerDeployerResponse): QueryDevFeeInfosPerDeployerResponseProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.QueryDevFeeInfosPerDeployerResponse",
      value: QueryDevFeeInfosPerDeployerResponse.encode(message).finish()
    };
  }
};