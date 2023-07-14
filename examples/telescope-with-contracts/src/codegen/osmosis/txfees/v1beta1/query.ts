import { FeeToken, FeeTokenSDKType } from "./feetoken";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryFeeTokensRequest {}
export interface QueryFeeTokensRequestSDKType {}
export interface QueryFeeTokensResponse {
  feeTokens: FeeToken[];
}
export interface QueryFeeTokensResponseSDKType {
  fee_tokens: FeeTokenSDKType[];
}
/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceRequest {
  denom: string;
}
/**
 * QueryDenomSpotPriceRequest defines grpc request structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceRequestSDKType {
  denom: string;
}
/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceResponse {
  poolID: Long;
  spotPrice: string;
}
/**
 * QueryDenomSpotPriceRequest defines grpc response structure for querying spot
 * price for the specified tx fee denom
 */
export interface QueryDenomSpotPriceResponseSDKType {
  poolID: Long;
  spot_price: string;
}
export interface QueryDenomPoolIdRequest {
  denom: string;
}
export interface QueryDenomPoolIdRequestSDKType {
  denom: string;
}
export interface QueryDenomPoolIdResponse {
  poolID: Long;
}
export interface QueryDenomPoolIdResponseSDKType {
  poolID: Long;
}
export interface QueryBaseDenomRequest {}
export interface QueryBaseDenomRequestSDKType {}
export interface QueryBaseDenomResponse {
  baseDenom: string;
}
export interface QueryBaseDenomResponseSDKType {
  base_denom: string;
}
function createBaseQueryFeeTokensRequest(): QueryFeeTokensRequest {
  return {};
}
export const QueryFeeTokensRequest = {
  encode(_: QueryFeeTokensRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeTokensRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeTokensRequest();
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
  fromPartial(_: DeepPartial<QueryFeeTokensRequest>): QueryFeeTokensRequest {
    const message = createBaseQueryFeeTokensRequest();
    return message;
  }
};
function createBaseQueryFeeTokensResponse(): QueryFeeTokensResponse {
  return {
    feeTokens: []
  };
}
export const QueryFeeTokensResponse = {
  encode(message: QueryFeeTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.feeTokens) {
      FeeToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeeTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeTokens.push(FeeToken.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFeeTokensResponse>): QueryFeeTokensResponse {
    const message = createBaseQueryFeeTokensResponse();
    message.feeTokens = object.feeTokens?.map(e => FeeToken.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQueryDenomSpotPriceRequest(): QueryDenomSpotPriceRequest {
  return {
    denom: ""
  };
}
export const QueryDenomSpotPriceRequest = {
  encode(message: QueryDenomSpotPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomSpotPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomSpotPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDenomSpotPriceRequest>): QueryDenomSpotPriceRequest {
    const message = createBaseQueryDenomSpotPriceRequest();
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseQueryDenomSpotPriceResponse(): QueryDenomSpotPriceResponse {
  return {
    poolID: Long.UZERO,
    spotPrice: ""
  };
}
export const QueryDenomSpotPriceResponse = {
  encode(message: QueryDenomSpotPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolID.isZero()) {
      writer.uint32(8).uint64(message.poolID);
    }
    if (message.spotPrice !== "") {
      writer.uint32(18).string(message.spotPrice);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomSpotPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomSpotPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolID = (reader.uint64() as Long);
          break;
        case 2:
          message.spotPrice = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDenomSpotPriceResponse>): QueryDenomSpotPriceResponse {
    const message = createBaseQueryDenomSpotPriceResponse();
    message.poolID = object.poolID !== undefined && object.poolID !== null ? Long.fromValue(object.poolID) : Long.UZERO;
    message.spotPrice = object.spotPrice ?? "";
    return message;
  }
};
function createBaseQueryDenomPoolIdRequest(): QueryDenomPoolIdRequest {
  return {
    denom: ""
  };
}
export const QueryDenomPoolIdRequest = {
  encode(message: QueryDenomPoolIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomPoolIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomPoolIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDenomPoolIdRequest>): QueryDenomPoolIdRequest {
    const message = createBaseQueryDenomPoolIdRequest();
    message.denom = object.denom ?? "";
    return message;
  }
};
function createBaseQueryDenomPoolIdResponse(): QueryDenomPoolIdResponse {
  return {
    poolID: Long.UZERO
  };
}
export const QueryDenomPoolIdResponse = {
  encode(message: QueryDenomPoolIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolID.isZero()) {
      writer.uint32(8).uint64(message.poolID);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomPoolIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomPoolIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolID = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryDenomPoolIdResponse>): QueryDenomPoolIdResponse {
    const message = createBaseQueryDenomPoolIdResponse();
    message.poolID = object.poolID !== undefined && object.poolID !== null ? Long.fromValue(object.poolID) : Long.UZERO;
    return message;
  }
};
function createBaseQueryBaseDenomRequest(): QueryBaseDenomRequest {
  return {};
}
export const QueryBaseDenomRequest = {
  encode(_: QueryBaseDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBaseDenomRequest();
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
  fromPartial(_: DeepPartial<QueryBaseDenomRequest>): QueryBaseDenomRequest {
    const message = createBaseQueryBaseDenomRequest();
    return message;
  }
};
function createBaseQueryBaseDenomResponse(): QueryBaseDenomResponse {
  return {
    baseDenom: ""
  };
}
export const QueryBaseDenomResponse = {
  encode(message: QueryBaseDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBaseDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryBaseDenomResponse>): QueryBaseDenomResponse {
    const message = createBaseQueryBaseDenomResponse();
    message.baseDenom = object.baseDenom ?? "";
    return message;
  }
};