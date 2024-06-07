//@ts-nocheck
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { NFT, NFTAmino, NFTSDKType, Class, ClassAmino, ClassSDKType } from "./nft";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.nft.v1beta1";
/** QueryBalanceRequest is the request type for the Query/Balance RPC method */
export interface QueryBalanceRequest {
  classId: string;
  owner: string;
}
export interface QueryBalanceRequestProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryBalanceRequest";
  value: Uint8Array;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method */
export interface QueryBalanceRequestAmino {
  class_id?: string;
  owner?: string;
}
export interface QueryBalanceRequestAminoMsg {
  type: "cosmos-sdk/QueryBalanceRequest";
  value: QueryBalanceRequestAmino;
}
/** QueryBalanceRequest is the request type for the Query/Balance RPC method */
export interface QueryBalanceRequestSDKType {
  class_id: string;
  owner: string;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method */
export interface QueryBalanceResponse {
  amount: bigint;
}
export interface QueryBalanceResponseProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryBalanceResponse";
  value: Uint8Array;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method */
export interface QueryBalanceResponseAmino {
  amount?: string;
}
export interface QueryBalanceResponseAminoMsg {
  type: "cosmos-sdk/QueryBalanceResponse";
  value: QueryBalanceResponseAmino;
}
/** QueryBalanceResponse is the response type for the Query/Balance RPC method */
export interface QueryBalanceResponseSDKType {
  amount: bigint;
}
/** QueryOwnerRequest is the request type for the Query/Owner RPC method */
export interface QueryOwnerRequest {
  classId: string;
  id: string;
}
export interface QueryOwnerRequestProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryOwnerRequest";
  value: Uint8Array;
}
/** QueryOwnerRequest is the request type for the Query/Owner RPC method */
export interface QueryOwnerRequestAmino {
  class_id?: string;
  id?: string;
}
export interface QueryOwnerRequestAminoMsg {
  type: "cosmos-sdk/QueryOwnerRequest";
  value: QueryOwnerRequestAmino;
}
/** QueryOwnerRequest is the request type for the Query/Owner RPC method */
export interface QueryOwnerRequestSDKType {
  class_id: string;
  id: string;
}
/** QueryOwnerResponse is the response type for the Query/Owner RPC method */
export interface QueryOwnerResponse {
  owner: string;
}
export interface QueryOwnerResponseProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryOwnerResponse";
  value: Uint8Array;
}
/** QueryOwnerResponse is the response type for the Query/Owner RPC method */
export interface QueryOwnerResponseAmino {
  owner?: string;
}
export interface QueryOwnerResponseAminoMsg {
  type: "cosmos-sdk/QueryOwnerResponse";
  value: QueryOwnerResponseAmino;
}
/** QueryOwnerResponse is the response type for the Query/Owner RPC method */
export interface QueryOwnerResponseSDKType {
  owner: string;
}
/** QuerySupplyRequest is the request type for the Query/Supply RPC method */
export interface QuerySupplyRequest {
  classId: string;
}
export interface QuerySupplyRequestProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QuerySupplyRequest";
  value: Uint8Array;
}
/** QuerySupplyRequest is the request type for the Query/Supply RPC method */
export interface QuerySupplyRequestAmino {
  class_id?: string;
}
export interface QuerySupplyRequestAminoMsg {
  type: "cosmos-sdk/QuerySupplyRequest";
  value: QuerySupplyRequestAmino;
}
/** QuerySupplyRequest is the request type for the Query/Supply RPC method */
export interface QuerySupplyRequestSDKType {
  class_id: string;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponse {
  amount: bigint;
}
export interface QuerySupplyResponseProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QuerySupplyResponse";
  value: Uint8Array;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponseAmino {
  amount?: string;
}
export interface QuerySupplyResponseAminoMsg {
  type: "cosmos-sdk/QuerySupplyResponse";
  value: QuerySupplyResponseAmino;
}
/** QuerySupplyResponse is the response type for the Query/Supply RPC method */
export interface QuerySupplyResponseSDKType {
  amount: bigint;
}
/** QueryNFTstRequest is the request type for the Query/NFTs RPC method */
export interface QueryNFTsRequest {
  classId: string;
  owner: string;
  pagination?: PageRequest;
}
export interface QueryNFTsRequestProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTsRequest";
  value: Uint8Array;
}
/** QueryNFTstRequest is the request type for the Query/NFTs RPC method */
export interface QueryNFTsRequestAmino {
  class_id?: string;
  owner?: string;
  pagination?: PageRequestAmino;
}
export interface QueryNFTsRequestAminoMsg {
  type: "cosmos-sdk/QueryNFTsRequest";
  value: QueryNFTsRequestAmino;
}
/** QueryNFTstRequest is the request type for the Query/NFTs RPC method */
export interface QueryNFTsRequestSDKType {
  class_id: string;
  owner: string;
  pagination?: PageRequestSDKType;
}
/** QueryNFTsResponse is the response type for the Query/NFTs RPC methods */
export interface QueryNFTsResponse {
  nfts: NFT[];
  pagination?: PageResponse;
}
export interface QueryNFTsResponseProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTsResponse";
  value: Uint8Array;
}
/** QueryNFTsResponse is the response type for the Query/NFTs RPC methods */
export interface QueryNFTsResponseAmino {
  nfts?: NFTAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryNFTsResponseAminoMsg {
  type: "cosmos-sdk/QueryNFTsResponse";
  value: QueryNFTsResponseAmino;
}
/** QueryNFTsResponse is the response type for the Query/NFTs RPC methods */
export interface QueryNFTsResponseSDKType {
  nfts: NFTSDKType[];
  pagination?: PageResponseSDKType;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequest {
  classId: string;
  id: string;
}
export interface QueryNFTRequestProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTRequest";
  value: Uint8Array;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequestAmino {
  class_id?: string;
  id?: string;
}
export interface QueryNFTRequestAminoMsg {
  type: "cosmos-sdk/QueryNFTRequest";
  value: QueryNFTRequestAmino;
}
/** QueryNFTRequest is the request type for the Query/NFT RPC method */
export interface QueryNFTRequestSDKType {
  class_id: string;
  id: string;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponse {
  nft?: NFT;
}
export interface QueryNFTResponseProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTResponse";
  value: Uint8Array;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponseAmino {
  nft?: NFTAmino;
}
export interface QueryNFTResponseAminoMsg {
  type: "cosmos-sdk/QueryNFTResponse";
  value: QueryNFTResponseAmino;
}
/** QueryNFTResponse is the response type for the Query/NFT RPC method */
export interface QueryNFTResponseSDKType {
  nft?: NFTSDKType;
}
/** QueryClassRequest is the request type for the Query/Class RPC method */
export interface QueryClassRequest {
  classId: string;
}
export interface QueryClassRequestProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassRequest";
  value: Uint8Array;
}
/** QueryClassRequest is the request type for the Query/Class RPC method */
export interface QueryClassRequestAmino {
  class_id?: string;
}
export interface QueryClassRequestAminoMsg {
  type: "cosmos-sdk/QueryClassRequest";
  value: QueryClassRequestAmino;
}
/** QueryClassRequest is the request type for the Query/Class RPC method */
export interface QueryClassRequestSDKType {
  class_id: string;
}
/** QueryClassResponse is the response type for the Query/Class RPC method */
export interface QueryClassResponse {
  class?: Class;
}
export interface QueryClassResponseProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassResponse";
  value: Uint8Array;
}
/** QueryClassResponse is the response type for the Query/Class RPC method */
export interface QueryClassResponseAmino {
  class?: ClassAmino;
}
export interface QueryClassResponseAminoMsg {
  type: "cosmos-sdk/QueryClassResponse";
  value: QueryClassResponseAmino;
}
/** QueryClassResponse is the response type for the Query/Class RPC method */
export interface QueryClassResponseSDKType {
  class?: ClassSDKType;
}
/** QueryClassesRequest is the request type for the Query/Classes RPC method */
export interface QueryClassesRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}
export interface QueryClassesRequestProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassesRequest";
  value: Uint8Array;
}
/** QueryClassesRequest is the request type for the Query/Classes RPC method */
export interface QueryClassesRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryClassesRequestAminoMsg {
  type: "cosmos-sdk/QueryClassesRequest";
  value: QueryClassesRequestAmino;
}
/** QueryClassesRequest is the request type for the Query/Classes RPC method */
export interface QueryClassesRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** QueryClassesResponse is the response type for the Query/Classes RPC method */
export interface QueryClassesResponse {
  classes: Class[];
  pagination?: PageResponse;
}
export interface QueryClassesResponseProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassesResponse";
  value: Uint8Array;
}
/** QueryClassesResponse is the response type for the Query/Classes RPC method */
export interface QueryClassesResponseAmino {
  classes?: ClassAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryClassesResponseAminoMsg {
  type: "cosmos-sdk/QueryClassesResponse";
  value: QueryClassesResponseAmino;
}
/** QueryClassesResponse is the response type for the Query/Classes RPC method */
export interface QueryClassesResponseSDKType {
  classes: ClassSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseQueryBalanceRequest(): QueryBalanceRequest {
  return {
    classId: "",
    owner: ""
  };
}
export const QueryBalanceRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryBalanceRequest",
  aminoType: "cosmos-sdk/QueryBalanceRequest",
  is(o: any): o is QueryBalanceRequest {
    return o && (o.$typeUrl === QueryBalanceRequest.typeUrl || typeof o.classId === "string" && typeof o.owner === "string");
  },
  isSDK(o: any): o is QueryBalanceRequestSDKType {
    return o && (o.$typeUrl === QueryBalanceRequest.typeUrl || typeof o.class_id === "string" && typeof o.owner === "string");
  },
  isAmino(o: any): o is QueryBalanceRequestAmino {
    return o && (o.$typeUrl === QueryBalanceRequest.typeUrl || typeof o.class_id === "string" && typeof o.owner === "string");
  },
  encode(message: QueryBalanceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== undefined) {
      writer.uint32(10).string(message.classId);
    }
    if (message.owner !== undefined) {
      writer.uint32(18).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
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
  fromJSON(object: any): QueryBalanceRequest {
    const obj = createBaseQueryBalanceRequest();
    if (isSet(object.classId)) obj.classId = String(object.classId);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: QueryBalanceRequest): JsonSafe<QueryBalanceRequest> {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    message.classId = object.classId ?? "";
    message.owner = object.owner ?? "";
    return message;
  },
  fromSDK(object: QueryBalanceRequestSDKType): QueryBalanceRequest {
    return {
      classId: object?.class_id,
      owner: object?.owner
    };
  },
  toSDK(message: QueryBalanceRequest): QueryBalanceRequestSDKType {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.owner = message.owner;
    return obj;
  },
  fromAmino(object: QueryBalanceRequestAmino): QueryBalanceRequest {
    const message = createBaseQueryBalanceRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: QueryBalanceRequest): QueryBalanceRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceRequestAminoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryBalanceRequest): QueryBalanceRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryBalanceRequest",
      value: QueryBalanceRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryBalanceRequestProtoMsg): QueryBalanceRequest {
    return QueryBalanceRequest.decode(message.value);
  },
  toProto(message: QueryBalanceRequest): Uint8Array {
    return QueryBalanceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceRequest): QueryBalanceRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryBalanceRequest",
      value: QueryBalanceRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryBalanceRequest.typeUrl, QueryBalanceRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryBalanceRequest.aminoType, QueryBalanceRequest.typeUrl);
function createBaseQueryBalanceResponse(): QueryBalanceResponse {
  return {
    amount: BigInt(0)
  };
}
export const QueryBalanceResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryBalanceResponse",
  aminoType: "cosmos-sdk/QueryBalanceResponse",
  is(o: any): o is QueryBalanceResponse {
    return o && (o.$typeUrl === QueryBalanceResponse.typeUrl || typeof o.amount === "bigint");
  },
  isSDK(o: any): o is QueryBalanceResponseSDKType {
    return o && (o.$typeUrl === QueryBalanceResponse.typeUrl || typeof o.amount === "bigint");
  },
  isAmino(o: any): o is QueryBalanceResponseAmino {
    return o && (o.$typeUrl === QueryBalanceResponse.typeUrl || typeof o.amount === "bigint");
  },
  encode(message: QueryBalanceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalanceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalanceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBalanceResponse {
    const obj = createBaseQueryBalanceResponse();
    if (isSet(object.amount)) obj.amount = BigInt(object.amount.toString());
    return obj;
  },
  toJSON(message: QueryBalanceResponse): JsonSafe<QueryBalanceResponse> {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = (message.amount || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount.toString());
    }
    return message;
  },
  fromSDK(object: QueryBalanceResponseSDKType): QueryBalanceResponse {
    return {
      amount: object?.amount
    };
  },
  toSDK(message: QueryBalanceResponse): QueryBalanceResponseSDKType {
    const obj: any = {};
    obj.amount = message.amount;
    return obj;
  },
  fromAmino(object: QueryBalanceResponseAmino): QueryBalanceResponse {
    const message = createBaseQueryBalanceResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    return message;
  },
  toAmino(message: QueryBalanceResponse): QueryBalanceResponseAmino {
    const obj: any = {};
    obj.amount = message.amount !== BigInt(0) ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryBalanceResponseAminoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryBalanceResponse): QueryBalanceResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryBalanceResponse",
      value: QueryBalanceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryBalanceResponseProtoMsg): QueryBalanceResponse {
    return QueryBalanceResponse.decode(message.value);
  },
  toProto(message: QueryBalanceResponse): Uint8Array {
    return QueryBalanceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalanceResponse): QueryBalanceResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryBalanceResponse",
      value: QueryBalanceResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryBalanceResponse.typeUrl, QueryBalanceResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryBalanceResponse.aminoType, QueryBalanceResponse.typeUrl);
function createBaseQueryOwnerRequest(): QueryOwnerRequest {
  return {
    classId: "",
    id: ""
  };
}
export const QueryOwnerRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryOwnerRequest",
  aminoType: "cosmos-sdk/QueryOwnerRequest",
  is(o: any): o is QueryOwnerRequest {
    return o && (o.$typeUrl === QueryOwnerRequest.typeUrl || typeof o.classId === "string" && typeof o.id === "string");
  },
  isSDK(o: any): o is QueryOwnerRequestSDKType {
    return o && (o.$typeUrl === QueryOwnerRequest.typeUrl || typeof o.class_id === "string" && typeof o.id === "string");
  },
  isAmino(o: any): o is QueryOwnerRequestAmino {
    return o && (o.$typeUrl === QueryOwnerRequest.typeUrl || typeof o.class_id === "string" && typeof o.id === "string");
  },
  encode(message: QueryOwnerRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== undefined) {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== undefined) {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOwnerRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOwnerRequest {
    const obj = createBaseQueryOwnerRequest();
    if (isSet(object.classId)) obj.classId = String(object.classId);
    if (isSet(object.id)) obj.id = String(object.id);
    return obj;
  },
  toJSON(message: QueryOwnerRequest): JsonSafe<QueryOwnerRequest> {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryOwnerRequest>): QueryOwnerRequest {
    const message = createBaseQueryOwnerRequest();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromSDK(object: QueryOwnerRequestSDKType): QueryOwnerRequest {
    return {
      classId: object?.class_id,
      id: object?.id
    };
  },
  toSDK(message: QueryOwnerRequest): QueryOwnerRequestSDKType {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    return obj;
  },
  fromAmino(object: QueryOwnerRequestAmino): QueryOwnerRequest {
    const message = createBaseQueryOwnerRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryOwnerRequest): QueryOwnerRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: QueryOwnerRequestAminoMsg): QueryOwnerRequest {
    return QueryOwnerRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryOwnerRequest): QueryOwnerRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryOwnerRequest",
      value: QueryOwnerRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryOwnerRequestProtoMsg): QueryOwnerRequest {
    return QueryOwnerRequest.decode(message.value);
  },
  toProto(message: QueryOwnerRequest): Uint8Array {
    return QueryOwnerRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOwnerRequest): QueryOwnerRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryOwnerRequest",
      value: QueryOwnerRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOwnerRequest.typeUrl, QueryOwnerRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryOwnerRequest.aminoType, QueryOwnerRequest.typeUrl);
function createBaseQueryOwnerResponse(): QueryOwnerResponse {
  return {
    owner: ""
  };
}
export const QueryOwnerResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryOwnerResponse",
  aminoType: "cosmos-sdk/QueryOwnerResponse",
  is(o: any): o is QueryOwnerResponse {
    return o && (o.$typeUrl === QueryOwnerResponse.typeUrl || typeof o.owner === "string");
  },
  isSDK(o: any): o is QueryOwnerResponseSDKType {
    return o && (o.$typeUrl === QueryOwnerResponse.typeUrl || typeof o.owner === "string");
  },
  isAmino(o: any): o is QueryOwnerResponseAmino {
    return o && (o.$typeUrl === QueryOwnerResponse.typeUrl || typeof o.owner === "string");
  },
  encode(message: QueryOwnerResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== undefined) {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOwnerResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryOwnerResponse {
    const obj = createBaseQueryOwnerResponse();
    if (isSet(object.owner)) obj.owner = String(object.owner);
    return obj;
  },
  toJSON(message: QueryOwnerResponse): JsonSafe<QueryOwnerResponse> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryOwnerResponse>): QueryOwnerResponse {
    const message = createBaseQueryOwnerResponse();
    message.owner = object.owner ?? "";
    return message;
  },
  fromSDK(object: QueryOwnerResponseSDKType): QueryOwnerResponse {
    return {
      owner: object?.owner
    };
  },
  toSDK(message: QueryOwnerResponse): QueryOwnerResponseSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    return obj;
  },
  fromAmino(object: QueryOwnerResponseAmino): QueryOwnerResponse {
    const message = createBaseQueryOwnerResponse();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: QueryOwnerResponse): QueryOwnerResponseAmino {
    const obj: any = {};
    obj.owner = message.owner === "" ? undefined : message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryOwnerResponseAminoMsg): QueryOwnerResponse {
    return QueryOwnerResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryOwnerResponse): QueryOwnerResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryOwnerResponse",
      value: QueryOwnerResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryOwnerResponseProtoMsg): QueryOwnerResponse {
    return QueryOwnerResponse.decode(message.value);
  },
  toProto(message: QueryOwnerResponse): Uint8Array {
    return QueryOwnerResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOwnerResponse): QueryOwnerResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryOwnerResponse",
      value: QueryOwnerResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryOwnerResponse.typeUrl, QueryOwnerResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryOwnerResponse.aminoType, QueryOwnerResponse.typeUrl);
function createBaseQuerySupplyRequest(): QuerySupplyRequest {
  return {
    classId: ""
  };
}
export const QuerySupplyRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QuerySupplyRequest",
  aminoType: "cosmos-sdk/QuerySupplyRequest",
  is(o: any): o is QuerySupplyRequest {
    return o && (o.$typeUrl === QuerySupplyRequest.typeUrl || typeof o.classId === "string");
  },
  isSDK(o: any): o is QuerySupplyRequestSDKType {
    return o && (o.$typeUrl === QuerySupplyRequest.typeUrl || typeof o.class_id === "string");
  },
  isAmino(o: any): o is QuerySupplyRequestAmino {
    return o && (o.$typeUrl === QuerySupplyRequest.typeUrl || typeof o.class_id === "string");
  },
  encode(message: QuerySupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== undefined) {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySupplyRequest {
    const obj = createBaseQuerySupplyRequest();
    if (isSet(object.classId)) obj.classId = String(object.classId);
    return obj;
  },
  toJSON(message: QuerySupplyRequest): JsonSafe<QuerySupplyRequest> {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySupplyRequest>): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    message.classId = object.classId ?? "";
    return message;
  },
  fromSDK(object: QuerySupplyRequestSDKType): QuerySupplyRequest {
    return {
      classId: object?.class_id
    };
  },
  toSDK(message: QuerySupplyRequest): QuerySupplyRequestSDKType {
    const obj: any = {};
    obj.class_id = message.classId;
    return obj;
  },
  fromAmino(object: QuerySupplyRequestAmino): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: QuerySupplyRequest): QuerySupplyRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    return obj;
  },
  fromAminoMsg(object: QuerySupplyRequestAminoMsg): QuerySupplyRequest {
    return QuerySupplyRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySupplyRequest): QuerySupplyRequestAminoMsg {
    return {
      type: "cosmos-sdk/QuerySupplyRequest",
      value: QuerySupplyRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySupplyRequestProtoMsg): QuerySupplyRequest {
    return QuerySupplyRequest.decode(message.value);
  },
  toProto(message: QuerySupplyRequest): Uint8Array {
    return QuerySupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyRequest): QuerySupplyRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QuerySupplyRequest",
      value: QuerySupplyRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySupplyRequest.typeUrl, QuerySupplyRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QuerySupplyRequest.aminoType, QuerySupplyRequest.typeUrl);
function createBaseQuerySupplyResponse(): QuerySupplyResponse {
  return {
    amount: BigInt(0)
  };
}
export const QuerySupplyResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QuerySupplyResponse",
  aminoType: "cosmos-sdk/QuerySupplyResponse",
  is(o: any): o is QuerySupplyResponse {
    return o && (o.$typeUrl === QuerySupplyResponse.typeUrl || typeof o.amount === "bigint");
  },
  isSDK(o: any): o is QuerySupplyResponseSDKType {
    return o && (o.$typeUrl === QuerySupplyResponse.typeUrl || typeof o.amount === "bigint");
  },
  isAmino(o: any): o is QuerySupplyResponseAmino {
    return o && (o.$typeUrl === QuerySupplyResponse.typeUrl || typeof o.amount === "bigint");
  },
  encode(message: QuerySupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.amount !== undefined) {
      writer.uint32(8).uint64(message.amount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySupplyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySupplyResponse {
    const obj = createBaseQuerySupplyResponse();
    if (isSet(object.amount)) obj.amount = BigInt(object.amount.toString());
    return obj;
  },
  toJSON(message: QuerySupplyResponse): JsonSafe<QuerySupplyResponse> {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = (message.amount || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySupplyResponse>): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount.toString());
    }
    return message;
  },
  fromSDK(object: QuerySupplyResponseSDKType): QuerySupplyResponse {
    return {
      amount: object?.amount
    };
  },
  toSDK(message: QuerySupplyResponse): QuerySupplyResponseSDKType {
    const obj: any = {};
    obj.amount = message.amount;
    return obj;
  },
  fromAmino(object: QuerySupplyResponseAmino): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    return message;
  },
  toAmino(message: QuerySupplyResponse): QuerySupplyResponseAmino {
    const obj: any = {};
    obj.amount = message.amount !== BigInt(0) ? message.amount.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySupplyResponseAminoMsg): QuerySupplyResponse {
    return QuerySupplyResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QuerySupplyResponse): QuerySupplyResponseAminoMsg {
    return {
      type: "cosmos-sdk/QuerySupplyResponse",
      value: QuerySupplyResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QuerySupplyResponseProtoMsg): QuerySupplyResponse {
    return QuerySupplyResponse.decode(message.value);
  },
  toProto(message: QuerySupplyResponse): Uint8Array {
    return QuerySupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyResponse): QuerySupplyResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QuerySupplyResponse",
      value: QuerySupplyResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QuerySupplyResponse.typeUrl, QuerySupplyResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QuerySupplyResponse.aminoType, QuerySupplyResponse.typeUrl);
function createBaseQueryNFTsRequest(): QueryNFTsRequest {
  return {
    classId: "",
    owner: "",
    pagination: undefined
  };
}
export const QueryNFTsRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTsRequest",
  aminoType: "cosmos-sdk/QueryNFTsRequest",
  is(o: any): o is QueryNFTsRequest {
    return o && (o.$typeUrl === QueryNFTsRequest.typeUrl || typeof o.classId === "string" && typeof o.owner === "string");
  },
  isSDK(o: any): o is QueryNFTsRequestSDKType {
    return o && (o.$typeUrl === QueryNFTsRequest.typeUrl || typeof o.class_id === "string" && typeof o.owner === "string");
  },
  isAmino(o: any): o is QueryNFTsRequestAmino {
    return o && (o.$typeUrl === QueryNFTsRequest.typeUrl || typeof o.class_id === "string" && typeof o.owner === "string");
  },
  encode(message: QueryNFTsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== undefined) {
      writer.uint32(10).string(message.classId);
    }
    if (message.owner !== undefined) {
      writer.uint32(18).string(message.owner);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNFTsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNFTsRequest {
    const obj = createBaseQueryNFTsRequest();
    if (isSet(object.classId)) obj.classId = String(object.classId);
    if (isSet(object.owner)) obj.owner = String(object.owner);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryNFTsRequest): JsonSafe<QueryNFTsRequest> {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.owner !== undefined && (obj.owner = message.owner);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryNFTsRequest>): QueryNFTsRequest {
    const message = createBaseQueryNFTsRequest();
    message.classId = object.classId ?? "";
    message.owner = object.owner ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryNFTsRequestSDKType): QueryNFTsRequest {
    return {
      classId: object?.class_id,
      owner: object?.owner,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryNFTsRequest): QueryNFTsRequestSDKType {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.owner = message.owner;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryNFTsRequestAmino): QueryNFTsRequest {
    const message = createBaseQueryNFTsRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryNFTsRequest): QueryNFTsRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.owner = message.owner === "" ? undefined : message.owner;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNFTsRequestAminoMsg): QueryNFTsRequest {
    return QueryNFTsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryNFTsRequest): QueryNFTsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryNFTsRequest",
      value: QueryNFTsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryNFTsRequestProtoMsg): QueryNFTsRequest {
    return QueryNFTsRequest.decode(message.value);
  },
  toProto(message: QueryNFTsRequest): Uint8Array {
    return QueryNFTsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNFTsRequest): QueryNFTsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryNFTsRequest",
      value: QueryNFTsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryNFTsRequest.typeUrl, QueryNFTsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryNFTsRequest.aminoType, QueryNFTsRequest.typeUrl);
function createBaseQueryNFTsResponse(): QueryNFTsResponse {
  return {
    nfts: [],
    pagination: undefined
  };
}
export const QueryNFTsResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTsResponse",
  aminoType: "cosmos-sdk/QueryNFTsResponse",
  is(o: any): o is QueryNFTsResponse {
    return o && (o.$typeUrl === QueryNFTsResponse.typeUrl || Array.isArray(o.nfts) && (!o.nfts.length || NFT.is(o.nfts[0])));
  },
  isSDK(o: any): o is QueryNFTsResponseSDKType {
    return o && (o.$typeUrl === QueryNFTsResponse.typeUrl || Array.isArray(o.nfts) && (!o.nfts.length || NFT.isSDK(o.nfts[0])));
  },
  isAmino(o: any): o is QueryNFTsResponseAmino {
    return o && (o.$typeUrl === QueryNFTsResponse.typeUrl || Array.isArray(o.nfts) && (!o.nfts.length || NFT.isAmino(o.nfts[0])));
  },
  encode(message: QueryNFTsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.nfts) {
      NFT.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNFTsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nfts.push(NFT.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryNFTsResponse {
    const obj = createBaseQueryNFTsResponse();
    if (Array.isArray(object?.nfts)) obj.nfts = object.nfts.map((e: any) => NFT.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryNFTsResponse): JsonSafe<QueryNFTsResponse> {
    const obj: any = {};
    if (message.nfts) {
      obj.nfts = message.nfts.map(e => e ? NFT.toJSON(e) : undefined);
    } else {
      obj.nfts = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryNFTsResponse>): QueryNFTsResponse {
    const message = createBaseQueryNFTsResponse();
    message.nfts = object.nfts?.map(e => NFT.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryNFTsResponseSDKType): QueryNFTsResponse {
    return {
      nfts: Array.isArray(object?.nfts) ? object.nfts.map((e: any) => NFT.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryNFTsResponse): QueryNFTsResponseSDKType {
    const obj: any = {};
    if (message.nfts) {
      obj.nfts = message.nfts.map(e => e ? NFT.toSDK(e) : undefined);
    } else {
      obj.nfts = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryNFTsResponseAmino): QueryNFTsResponse {
    const message = createBaseQueryNFTsResponse();
    message.nfts = object.nfts?.map(e => NFT.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryNFTsResponse): QueryNFTsResponseAmino {
    const obj: any = {};
    if (message.nfts) {
      obj.nfts = message.nfts.map(e => e ? NFT.toAmino(e) : undefined);
    } else {
      obj.nfts = message.nfts;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNFTsResponseAminoMsg): QueryNFTsResponse {
    return QueryNFTsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryNFTsResponse): QueryNFTsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryNFTsResponse",
      value: QueryNFTsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryNFTsResponseProtoMsg): QueryNFTsResponse {
    return QueryNFTsResponse.decode(message.value);
  },
  toProto(message: QueryNFTsResponse): Uint8Array {
    return QueryNFTsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNFTsResponse): QueryNFTsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryNFTsResponse",
      value: QueryNFTsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryNFTsResponse.typeUrl, QueryNFTsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryNFTsResponse.aminoType, QueryNFTsResponse.typeUrl);
function createBaseQueryNFTRequest(): QueryNFTRequest {
  return {
    classId: "",
    id: ""
  };
}
export const QueryNFTRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTRequest",
  aminoType: "cosmos-sdk/QueryNFTRequest",
  is(o: any): o is QueryNFTRequest {
    return o && (o.$typeUrl === QueryNFTRequest.typeUrl || typeof o.classId === "string" && typeof o.id === "string");
  },
  isSDK(o: any): o is QueryNFTRequestSDKType {
    return o && (o.$typeUrl === QueryNFTRequest.typeUrl || typeof o.class_id === "string" && typeof o.id === "string");
  },
  isAmino(o: any): o is QueryNFTRequestAmino {
    return o && (o.$typeUrl === QueryNFTRequest.typeUrl || typeof o.class_id === "string" && typeof o.id === "string");
  },
  encode(message: QueryNFTRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== undefined) {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== undefined) {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNFTRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNFTRequest {
    const obj = createBaseQueryNFTRequest();
    if (isSet(object.classId)) obj.classId = String(object.classId);
    if (isSet(object.id)) obj.id = String(object.id);
    return obj;
  },
  toJSON(message: QueryNFTRequest): JsonSafe<QueryNFTRequest> {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryNFTRequest>): QueryNFTRequest {
    const message = createBaseQueryNFTRequest();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    return message;
  },
  fromSDK(object: QueryNFTRequestSDKType): QueryNFTRequest {
    return {
      classId: object?.class_id,
      id: object?.id
    };
  },
  toSDK(message: QueryNFTRequest): QueryNFTRequestSDKType {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    return obj;
  },
  fromAmino(object: QueryNFTRequestAmino): QueryNFTRequest {
    const message = createBaseQueryNFTRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: QueryNFTRequest): QueryNFTRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.id = message.id === "" ? undefined : message.id;
    return obj;
  },
  fromAminoMsg(object: QueryNFTRequestAminoMsg): QueryNFTRequest {
    return QueryNFTRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryNFTRequest): QueryNFTRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryNFTRequest",
      value: QueryNFTRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryNFTRequestProtoMsg): QueryNFTRequest {
    return QueryNFTRequest.decode(message.value);
  },
  toProto(message: QueryNFTRequest): Uint8Array {
    return QueryNFTRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryNFTRequest): QueryNFTRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryNFTRequest",
      value: QueryNFTRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryNFTRequest.typeUrl, QueryNFTRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryNFTRequest.aminoType, QueryNFTRequest.typeUrl);
function createBaseQueryNFTResponse(): QueryNFTResponse {
  return {
    nft: undefined
  };
}
export const QueryNFTResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryNFTResponse",
  aminoType: "cosmos-sdk/QueryNFTResponse",
  is(o: any): o is QueryNFTResponse {
    return o && o.$typeUrl === QueryNFTResponse.typeUrl;
  },
  isSDK(o: any): o is QueryNFTResponseSDKType {
    return o && o.$typeUrl === QueryNFTResponse.typeUrl;
  },
  isAmino(o: any): o is QueryNFTResponseAmino {
    return o && o.$typeUrl === QueryNFTResponse.typeUrl;
  },
  encode(message: QueryNFTResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nft !== undefined) {
      NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryNFTResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nft = NFT.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryNFTResponse {
    const obj = createBaseQueryNFTResponse();
    if (isSet(object.nft)) obj.nft = NFT.fromJSON(object.nft);
    return obj;
  },
  toJSON(message: QueryNFTResponse): JsonSafe<QueryNFTResponse> {
    const obj: any = {};
    message.nft !== undefined && (obj.nft = message.nft ? NFT.toJSON(message.nft) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryNFTResponse>): QueryNFTResponse {
    const message = createBaseQueryNFTResponse();
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = NFT.fromPartial(object.nft);
    }
    return message;
  },
  fromSDK(object: QueryNFTResponseSDKType): QueryNFTResponse {
    return {
      nft: object.nft ? NFT.fromSDK(object.nft) : undefined
    };
  },
  toSDK(message: QueryNFTResponse): QueryNFTResponseSDKType {
    const obj: any = {};
    message.nft !== undefined && (obj.nft = message.nft ? NFT.toSDK(message.nft) : undefined);
    return obj;
  },
  fromAmino(object: QueryNFTResponseAmino): QueryNFTResponse {
    const message = createBaseQueryNFTResponse();
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = NFT.fromAmino(object.nft);
    }
    return message;
  },
  toAmino(message: QueryNFTResponse): QueryNFTResponseAmino {
    const obj: any = {};
    obj.nft = message.nft ? NFT.toAmino(message.nft) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryNFTResponseAminoMsg): QueryNFTResponse {
    return QueryNFTResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryNFTResponse): QueryNFTResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryNFTResponse",
      value: QueryNFTResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryNFTResponseProtoMsg): QueryNFTResponse {
    return QueryNFTResponse.decode(message.value);
  },
  toProto(message: QueryNFTResponse): Uint8Array {
    return QueryNFTResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryNFTResponse): QueryNFTResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryNFTResponse",
      value: QueryNFTResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryNFTResponse.typeUrl, QueryNFTResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryNFTResponse.aminoType, QueryNFTResponse.typeUrl);
function createBaseQueryClassRequest(): QueryClassRequest {
  return {
    classId: ""
  };
}
export const QueryClassRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassRequest",
  aminoType: "cosmos-sdk/QueryClassRequest",
  is(o: any): o is QueryClassRequest {
    return o && (o.$typeUrl === QueryClassRequest.typeUrl || typeof o.classId === "string");
  },
  isSDK(o: any): o is QueryClassRequestSDKType {
    return o && (o.$typeUrl === QueryClassRequest.typeUrl || typeof o.class_id === "string");
  },
  isAmino(o: any): o is QueryClassRequestAmino {
    return o && (o.$typeUrl === QueryClassRequest.typeUrl || typeof o.class_id === "string");
  },
  encode(message: QueryClassRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== undefined) {
      writer.uint32(10).string(message.classId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClassRequest {
    const obj = createBaseQueryClassRequest();
    if (isSet(object.classId)) obj.classId = String(object.classId);
    return obj;
  },
  toJSON(message: QueryClassRequest): JsonSafe<QueryClassRequest> {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClassRequest>): QueryClassRequest {
    const message = createBaseQueryClassRequest();
    message.classId = object.classId ?? "";
    return message;
  },
  fromSDK(object: QueryClassRequestSDKType): QueryClassRequest {
    return {
      classId: object?.class_id
    };
  },
  toSDK(message: QueryClassRequest): QueryClassRequestSDKType {
    const obj: any = {};
    obj.class_id = message.classId;
    return obj;
  },
  fromAmino(object: QueryClassRequestAmino): QueryClassRequest {
    const message = createBaseQueryClassRequest();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    return message;
  },
  toAmino(message: QueryClassRequest): QueryClassRequestAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    return obj;
  },
  fromAminoMsg(object: QueryClassRequestAminoMsg): QueryClassRequest {
    return QueryClassRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClassRequest): QueryClassRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryClassRequest",
      value: QueryClassRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClassRequestProtoMsg): QueryClassRequest {
    return QueryClassRequest.decode(message.value);
  },
  toProto(message: QueryClassRequest): Uint8Array {
    return QueryClassRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassRequest): QueryClassRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryClassRequest",
      value: QueryClassRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryClassRequest.typeUrl, QueryClassRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryClassRequest.aminoType, QueryClassRequest.typeUrl);
function createBaseQueryClassResponse(): QueryClassResponse {
  return {
    class: undefined
  };
}
export const QueryClassResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassResponse",
  aminoType: "cosmos-sdk/QueryClassResponse",
  is(o: any): o is QueryClassResponse {
    return o && o.$typeUrl === QueryClassResponse.typeUrl;
  },
  isSDK(o: any): o is QueryClassResponseSDKType {
    return o && o.$typeUrl === QueryClassResponse.typeUrl;
  },
  isAmino(o: any): o is QueryClassResponseAmino {
    return o && o.$typeUrl === QueryClassResponse.typeUrl;
  },
  encode(message: QueryClassResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.class !== undefined) {
      Class.encode(message.class, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.class = Class.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClassResponse {
    const obj = createBaseQueryClassResponse();
    if (isSet(object.class)) obj.class = Class.fromJSON(object.class);
    return obj;
  },
  toJSON(message: QueryClassResponse): JsonSafe<QueryClassResponse> {
    const obj: any = {};
    message.class !== undefined && (obj.class = message.class ? Class.toJSON(message.class) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClassResponse>): QueryClassResponse {
    const message = createBaseQueryClassResponse();
    if (object.class !== undefined && object.class !== null) {
      message.class = Class.fromPartial(object.class);
    }
    return message;
  },
  fromSDK(object: QueryClassResponseSDKType): QueryClassResponse {
    return {
      class: object.class ? Class.fromSDK(object.class) : undefined
    };
  },
  toSDK(message: QueryClassResponse): QueryClassResponseSDKType {
    const obj: any = {};
    message.class !== undefined && (obj.class = message.class ? Class.toSDK(message.class) : undefined);
    return obj;
  },
  fromAmino(object: QueryClassResponseAmino): QueryClassResponse {
    const message = createBaseQueryClassResponse();
    if (object.class !== undefined && object.class !== null) {
      message.class = Class.fromAmino(object.class);
    }
    return message;
  },
  toAmino(message: QueryClassResponse): QueryClassResponseAmino {
    const obj: any = {};
    obj.class = message.class ? Class.toAmino(message.class) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassResponseAminoMsg): QueryClassResponse {
    return QueryClassResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClassResponse): QueryClassResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryClassResponse",
      value: QueryClassResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClassResponseProtoMsg): QueryClassResponse {
    return QueryClassResponse.decode(message.value);
  },
  toProto(message: QueryClassResponse): Uint8Array {
    return QueryClassResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassResponse): QueryClassResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryClassResponse",
      value: QueryClassResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryClassResponse.typeUrl, QueryClassResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryClassResponse.aminoType, QueryClassResponse.typeUrl);
function createBaseQueryClassesRequest(): QueryClassesRequest {
  return {
    pagination: undefined
  };
}
export const QueryClassesRequest = {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassesRequest",
  aminoType: "cosmos-sdk/QueryClassesRequest",
  is(o: any): o is QueryClassesRequest {
    return o && o.$typeUrl === QueryClassesRequest.typeUrl;
  },
  isSDK(o: any): o is QueryClassesRequestSDKType {
    return o && o.$typeUrl === QueryClassesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryClassesRequestAmino {
    return o && o.$typeUrl === QueryClassesRequest.typeUrl;
  },
  encode(message: QueryClassesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesRequest();
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
  fromJSON(object: any): QueryClassesRequest {
    const obj = createBaseQueryClassesRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryClassesRequest): JsonSafe<QueryClassesRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClassesRequest>): QueryClassesRequest {
    const message = createBaseQueryClassesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryClassesRequestSDKType): QueryClassesRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryClassesRequest): QueryClassesRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryClassesRequestAmino): QueryClassesRequest {
    const message = createBaseQueryClassesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClassesRequest): QueryClassesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassesRequestAminoMsg): QueryClassesRequest {
    return QueryClassesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClassesRequest): QueryClassesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryClassesRequest",
      value: QueryClassesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClassesRequestProtoMsg): QueryClassesRequest {
    return QueryClassesRequest.decode(message.value);
  },
  toProto(message: QueryClassesRequest): Uint8Array {
    return QueryClassesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesRequest): QueryClassesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryClassesRequest",
      value: QueryClassesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryClassesRequest.typeUrl, QueryClassesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryClassesRequest.aminoType, QueryClassesRequest.typeUrl);
function createBaseQueryClassesResponse(): QueryClassesResponse {
  return {
    classes: [],
    pagination: undefined
  };
}
export const QueryClassesResponse = {
  typeUrl: "/cosmos.nft.v1beta1.QueryClassesResponse",
  aminoType: "cosmos-sdk/QueryClassesResponse",
  is(o: any): o is QueryClassesResponse {
    return o && (o.$typeUrl === QueryClassesResponse.typeUrl || Array.isArray(o.classes) && (!o.classes.length || Class.is(o.classes[0])));
  },
  isSDK(o: any): o is QueryClassesResponseSDKType {
    return o && (o.$typeUrl === QueryClassesResponse.typeUrl || Array.isArray(o.classes) && (!o.classes.length || Class.isSDK(o.classes[0])));
  },
  isAmino(o: any): o is QueryClassesResponseAmino {
    return o && (o.$typeUrl === QueryClassesResponse.typeUrl || Array.isArray(o.classes) && (!o.classes.length || Class.isAmino(o.classes[0])));
  },
  encode(message: QueryClassesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.classes) {
      Class.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClassesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClassesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classes.push(Class.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryClassesResponse {
    const obj = createBaseQueryClassesResponse();
    if (Array.isArray(object?.classes)) obj.classes = object.classes.map((e: any) => Class.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryClassesResponse): JsonSafe<QueryClassesResponse> {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? Class.toJSON(e) : undefined);
    } else {
      obj.classes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClassesResponse>): QueryClassesResponse {
    const message = createBaseQueryClassesResponse();
    message.classes = object.classes?.map(e => Class.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromSDK(object: QueryClassesResponseSDKType): QueryClassesResponse {
    return {
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => Class.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryClassesResponse): QueryClassesResponseSDKType {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? Class.toSDK(e) : undefined);
    } else {
      obj.classes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryClassesResponseAmino): QueryClassesResponse {
    const message = createBaseQueryClassesResponse();
    message.classes = object.classes?.map(e => Class.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClassesResponse): QueryClassesResponseAmino {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? Class.toAmino(e) : undefined);
    } else {
      obj.classes = message.classes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClassesResponseAminoMsg): QueryClassesResponse {
    return QueryClassesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClassesResponse): QueryClassesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryClassesResponse",
      value: QueryClassesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClassesResponseProtoMsg): QueryClassesResponse {
    return QueryClassesResponse.decode(message.value);
  },
  toProto(message: QueryClassesResponse): Uint8Array {
    return QueryClassesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClassesResponse): QueryClassesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.QueryClassesResponse",
      value: QueryClassesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryClassesResponse.typeUrl, QueryClassesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryClassesResponse.aminoType, QueryClassesResponse.typeUrl);