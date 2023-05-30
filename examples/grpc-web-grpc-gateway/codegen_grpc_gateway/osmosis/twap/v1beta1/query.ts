import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { Long, toTimestamp, fromTimestamp, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "osmosis.twap.v1beta1";
export interface ArithmeticTwapRequest {
  poolId: Long;
  baseAsset: string;
  quoteAsset: string;
  startTime?: Date;
  endTime?: Date;
}
export interface ArithmeticTwapRequestProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapRequest";
  value: Uint8Array;
}
export interface ArithmeticTwapRequestAmino {
  pool_id: string;
  base_asset: string;
  quote_asset: string;
  start_time?: Date;
  end_time?: Date;
}
export interface ArithmeticTwapRequestAminoMsg {
  type: "osmosis/twap/arithmetic-twap-request";
  value: ArithmeticTwapRequestAmino;
}
export interface ArithmeticTwapRequestSDKType {
  pool_id: Long;
  base_asset: string;
  quote_asset: string;
  start_time?: Date;
  end_time?: Date;
}
export interface ArithmeticTwapResponse {
  arithmeticTwap: string;
}
export interface ArithmeticTwapResponseProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapResponse";
  value: Uint8Array;
}
export interface ArithmeticTwapResponseAmino {
  arithmetic_twap: string;
}
export interface ArithmeticTwapResponseAminoMsg {
  type: "osmosis/twap/arithmetic-twap-response";
  value: ArithmeticTwapResponseAmino;
}
export interface ArithmeticTwapResponseSDKType {
  arithmetic_twap: string;
}
export interface ArithmeticTwapToNowRequest {
  poolId: Long;
  baseAsset: string;
  quoteAsset: string;
  startTime?: Date;
}
export interface ArithmeticTwapToNowRequestProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest";
  value: Uint8Array;
}
export interface ArithmeticTwapToNowRequestAmino {
  pool_id: string;
  base_asset: string;
  quote_asset: string;
  start_time?: Date;
}
export interface ArithmeticTwapToNowRequestAminoMsg {
  type: "osmosis/twap/arithmetic-twap-to-now-request";
  value: ArithmeticTwapToNowRequestAmino;
}
export interface ArithmeticTwapToNowRequestSDKType {
  pool_id: Long;
  base_asset: string;
  quote_asset: string;
  start_time?: Date;
}
export interface ArithmeticTwapToNowResponse {
  arithmeticTwap: string;
}
export interface ArithmeticTwapToNowResponseProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse";
  value: Uint8Array;
}
export interface ArithmeticTwapToNowResponseAmino {
  arithmetic_twap: string;
}
export interface ArithmeticTwapToNowResponseAminoMsg {
  type: "osmosis/twap/arithmetic-twap-to-now-response";
  value: ArithmeticTwapToNowResponseAmino;
}
export interface ArithmeticTwapToNowResponseSDKType {
  arithmetic_twap: string;
}
export interface ParamsRequest {}
export interface ParamsRequestProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.ParamsRequest";
  value: Uint8Array;
}
export interface ParamsRequestAmino {}
export interface ParamsRequestAminoMsg {
  type: "osmosis/twap/params-request";
  value: ParamsRequestAmino;
}
export interface ParamsRequestSDKType {}
export interface ParamsResponse {
  params?: Params;
}
export interface ParamsResponseProtoMsg {
  typeUrl: "/osmosis.twap.v1beta1.ParamsResponse";
  value: Uint8Array;
}
export interface ParamsResponseAmino {
  params?: ParamsAmino;
}
export interface ParamsResponseAminoMsg {
  type: "osmosis/twap/params-response";
  value: ParamsResponseAmino;
}
export interface ParamsResponseSDKType {
  params?: ParamsSDKType;
}
function createBaseArithmeticTwapRequest(): ArithmeticTwapRequest {
  return {
    poolId: Long.UZERO,
    baseAsset: "",
    quoteAsset: "",
    startTime: undefined,
    endTime: undefined
  };
}
export const ArithmeticTwapRequest = {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapRequest",
  aminoType: "osmosis/twap/arithmetic-twap-request",
  encode(message: ArithmeticTwapRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== "") {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== "") {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArithmeticTwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.baseAsset = reader.string();
          break;
        case 3:
          message.quoteAsset = reader.string();
          break;
        case 4:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ArithmeticTwapRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      baseAsset: isSet(object.baseAsset) ? String(object.baseAsset) : "",
      quoteAsset: isSet(object.quoteAsset) ? String(object.quoteAsset) : "",
      startTime: isSet(object.startTime) ? new Date(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? new Date(object.endTime) : undefined
    };
  },
  toJSON(message: ArithmeticTwapRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.baseAsset !== undefined && (obj.baseAsset = message.baseAsset);
    message.quoteAsset !== undefined && (obj.quoteAsset = message.quoteAsset);
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<ArithmeticTwapRequest>): ArithmeticTwapRequest {
    const message = createBaseArithmeticTwapRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.baseAsset = object.baseAsset ?? "";
    message.quoteAsset = object.quoteAsset ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    return message;
  },
  fromSDK(object: ArithmeticTwapRequestSDKType): ArithmeticTwapRequest {
    return {
      poolId: object?.pool_id,
      baseAsset: object?.base_asset,
      quoteAsset: object?.quote_asset,
      startTime: object.start_time ?? undefined,
      endTime: object.end_time ?? undefined
    };
  },
  toSDK(message: ArithmeticTwapRequest): ArithmeticTwapRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    obj.base_asset = message.baseAsset;
    obj.quote_asset = message.quoteAsset;
    message.startTime !== undefined && (obj.start_time = message.startTime ?? undefined);
    message.endTime !== undefined && (obj.end_time = message.endTime ?? undefined);
    return obj;
  },
  fromAmino(object: ArithmeticTwapRequestAmino): ArithmeticTwapRequest {
    return {
      poolId: Long.fromString(object.pool_id),
      baseAsset: object.base_asset,
      quoteAsset: object.quote_asset,
      startTime: object?.start_time ? Timestamp.fromAmino(object.start_time) : undefined,
      endTime: object?.end_time ? Timestamp.fromAmino(object.end_time) : undefined
    };
  },
  toAmino(message: ArithmeticTwapRequest): ArithmeticTwapRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.base_asset = message.baseAsset;
    obj.quote_asset = message.quoteAsset;
    obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(message.endTime) : undefined;
    return obj;
  },
  fromAminoMsg(object: ArithmeticTwapRequestAminoMsg): ArithmeticTwapRequest {
    return ArithmeticTwapRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ArithmeticTwapRequest): ArithmeticTwapRequestAminoMsg {
    return {
      type: "osmosis/twap/arithmetic-twap-request",
      value: ArithmeticTwapRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ArithmeticTwapRequestProtoMsg): ArithmeticTwapRequest {
    return ArithmeticTwapRequest.decode(message.value);
  },
  toProto(message: ArithmeticTwapRequest): Uint8Array {
    return ArithmeticTwapRequest.encode(message).finish();
  },
  toProtoMsg(message: ArithmeticTwapRequest): ArithmeticTwapRequestProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapRequest",
      value: ArithmeticTwapRequest.encode(message).finish()
    };
  }
};
function createBaseArithmeticTwapResponse(): ArithmeticTwapResponse {
  return {
    arithmeticTwap: ""
  };
}
export const ArithmeticTwapResponse = {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapResponse",
  aminoType: "osmosis/twap/arithmetic-twap-response",
  encode(message: ArithmeticTwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.arithmeticTwap !== "") {
      writer.uint32(10).string(message.arithmeticTwap);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArithmeticTwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.arithmeticTwap = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ArithmeticTwapResponse {
    return {
      arithmeticTwap: isSet(object.arithmeticTwap) ? String(object.arithmeticTwap) : ""
    };
  },
  toJSON(message: ArithmeticTwapResponse): unknown {
    const obj: any = {};
    message.arithmeticTwap !== undefined && (obj.arithmeticTwap = message.arithmeticTwap);
    return obj;
  },
  fromPartial(object: DeepPartial<ArithmeticTwapResponse>): ArithmeticTwapResponse {
    const message = createBaseArithmeticTwapResponse();
    message.arithmeticTwap = object.arithmeticTwap ?? "";
    return message;
  },
  fromSDK(object: ArithmeticTwapResponseSDKType): ArithmeticTwapResponse {
    return {
      arithmeticTwap: object?.arithmetic_twap
    };
  },
  toSDK(message: ArithmeticTwapResponse): ArithmeticTwapResponseSDKType {
    const obj: any = {};
    obj.arithmetic_twap = message.arithmeticTwap;
    return obj;
  },
  fromAmino(object: ArithmeticTwapResponseAmino): ArithmeticTwapResponse {
    return {
      arithmeticTwap: object.arithmetic_twap
    };
  },
  toAmino(message: ArithmeticTwapResponse): ArithmeticTwapResponseAmino {
    const obj: any = {};
    obj.arithmetic_twap = message.arithmeticTwap;
    return obj;
  },
  fromAminoMsg(object: ArithmeticTwapResponseAminoMsg): ArithmeticTwapResponse {
    return ArithmeticTwapResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ArithmeticTwapResponse): ArithmeticTwapResponseAminoMsg {
    return {
      type: "osmosis/twap/arithmetic-twap-response",
      value: ArithmeticTwapResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ArithmeticTwapResponseProtoMsg): ArithmeticTwapResponse {
    return ArithmeticTwapResponse.decode(message.value);
  },
  toProto(message: ArithmeticTwapResponse): Uint8Array {
    return ArithmeticTwapResponse.encode(message).finish();
  },
  toProtoMsg(message: ArithmeticTwapResponse): ArithmeticTwapResponseProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapResponse",
      value: ArithmeticTwapResponse.encode(message).finish()
    };
  }
};
function createBaseArithmeticTwapToNowRequest(): ArithmeticTwapToNowRequest {
  return {
    poolId: Long.UZERO,
    baseAsset: "",
    quoteAsset: "",
    startTime: undefined
  };
}
export const ArithmeticTwapToNowRequest = {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest",
  aminoType: "osmosis/twap/arithmetic-twap-to-now-request",
  encode(message: ArithmeticTwapToNowRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== "") {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== "") {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapToNowRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArithmeticTwapToNowRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;
        case 2:
          message.baseAsset = reader.string();
          break;
        case 3:
          message.quoteAsset = reader.string();
          break;
        case 4:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ArithmeticTwapToNowRequest {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      baseAsset: isSet(object.baseAsset) ? String(object.baseAsset) : "",
      quoteAsset: isSet(object.quoteAsset) ? String(object.quoteAsset) : "",
      startTime: isSet(object.startTime) ? new Date(object.startTime) : undefined
    };
  },
  toJSON(message: ArithmeticTwapToNowRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.baseAsset !== undefined && (obj.baseAsset = message.baseAsset);
    message.quoteAsset !== undefined && (obj.quoteAsset = message.quoteAsset);
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<ArithmeticTwapToNowRequest>): ArithmeticTwapToNowRequest {
    const message = createBaseArithmeticTwapToNowRequest();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.baseAsset = object.baseAsset ?? "";
    message.quoteAsset = object.quoteAsset ?? "";
    message.startTime = object.startTime ?? undefined;
    return message;
  },
  fromSDK(object: ArithmeticTwapToNowRequestSDKType): ArithmeticTwapToNowRequest {
    return {
      poolId: object?.pool_id,
      baseAsset: object?.base_asset,
      quoteAsset: object?.quote_asset,
      startTime: object.start_time ?? undefined
    };
  },
  toSDK(message: ArithmeticTwapToNowRequest): ArithmeticTwapToNowRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    obj.base_asset = message.baseAsset;
    obj.quote_asset = message.quoteAsset;
    message.startTime !== undefined && (obj.start_time = message.startTime ?? undefined);
    return obj;
  },
  fromAmino(object: ArithmeticTwapToNowRequestAmino): ArithmeticTwapToNowRequest {
    return {
      poolId: Long.fromString(object.pool_id),
      baseAsset: object.base_asset,
      quoteAsset: object.quote_asset,
      startTime: object?.start_time ? Timestamp.fromAmino(object.start_time) : undefined
    };
  },
  toAmino(message: ArithmeticTwapToNowRequest): ArithmeticTwapToNowRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.base_asset = message.baseAsset;
    obj.quote_asset = message.quoteAsset;
    obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime) : undefined;
    return obj;
  },
  fromAminoMsg(object: ArithmeticTwapToNowRequestAminoMsg): ArithmeticTwapToNowRequest {
    return ArithmeticTwapToNowRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ArithmeticTwapToNowRequest): ArithmeticTwapToNowRequestAminoMsg {
    return {
      type: "osmosis/twap/arithmetic-twap-to-now-request",
      value: ArithmeticTwapToNowRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ArithmeticTwapToNowRequestProtoMsg): ArithmeticTwapToNowRequest {
    return ArithmeticTwapToNowRequest.decode(message.value);
  },
  toProto(message: ArithmeticTwapToNowRequest): Uint8Array {
    return ArithmeticTwapToNowRequest.encode(message).finish();
  },
  toProtoMsg(message: ArithmeticTwapToNowRequest): ArithmeticTwapToNowRequestProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowRequest",
      value: ArithmeticTwapToNowRequest.encode(message).finish()
    };
  }
};
function createBaseArithmeticTwapToNowResponse(): ArithmeticTwapToNowResponse {
  return {
    arithmeticTwap: ""
  };
}
export const ArithmeticTwapToNowResponse = {
  typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse",
  aminoType: "osmosis/twap/arithmetic-twap-to-now-response",
  encode(message: ArithmeticTwapToNowResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.arithmeticTwap !== "") {
      writer.uint32(10).string(message.arithmeticTwap);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ArithmeticTwapToNowResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArithmeticTwapToNowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.arithmeticTwap = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ArithmeticTwapToNowResponse {
    return {
      arithmeticTwap: isSet(object.arithmeticTwap) ? String(object.arithmeticTwap) : ""
    };
  },
  toJSON(message: ArithmeticTwapToNowResponse): unknown {
    const obj: any = {};
    message.arithmeticTwap !== undefined && (obj.arithmeticTwap = message.arithmeticTwap);
    return obj;
  },
  fromPartial(object: DeepPartial<ArithmeticTwapToNowResponse>): ArithmeticTwapToNowResponse {
    const message = createBaseArithmeticTwapToNowResponse();
    message.arithmeticTwap = object.arithmeticTwap ?? "";
    return message;
  },
  fromSDK(object: ArithmeticTwapToNowResponseSDKType): ArithmeticTwapToNowResponse {
    return {
      arithmeticTwap: object?.arithmetic_twap
    };
  },
  toSDK(message: ArithmeticTwapToNowResponse): ArithmeticTwapToNowResponseSDKType {
    const obj: any = {};
    obj.arithmetic_twap = message.arithmeticTwap;
    return obj;
  },
  fromAmino(object: ArithmeticTwapToNowResponseAmino): ArithmeticTwapToNowResponse {
    return {
      arithmeticTwap: object.arithmetic_twap
    };
  },
  toAmino(message: ArithmeticTwapToNowResponse): ArithmeticTwapToNowResponseAmino {
    const obj: any = {};
    obj.arithmetic_twap = message.arithmeticTwap;
    return obj;
  },
  fromAminoMsg(object: ArithmeticTwapToNowResponseAminoMsg): ArithmeticTwapToNowResponse {
    return ArithmeticTwapToNowResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ArithmeticTwapToNowResponse): ArithmeticTwapToNowResponseAminoMsg {
    return {
      type: "osmosis/twap/arithmetic-twap-to-now-response",
      value: ArithmeticTwapToNowResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ArithmeticTwapToNowResponseProtoMsg): ArithmeticTwapToNowResponse {
    return ArithmeticTwapToNowResponse.decode(message.value);
  },
  toProto(message: ArithmeticTwapToNowResponse): Uint8Array {
    return ArithmeticTwapToNowResponse.encode(message).finish();
  },
  toProtoMsg(message: ArithmeticTwapToNowResponse): ArithmeticTwapToNowResponseProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ArithmeticTwapToNowResponse",
      value: ArithmeticTwapToNowResponse.encode(message).finish()
    };
  }
};
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/osmosis.twap.v1beta1.ParamsRequest",
  aminoType: "osmosis/twap/params-request",
  encode(_: ParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsRequest();
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
  fromJSON(_: any): ParamsRequest {
    return {};
  },
  toJSON(_: ParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<ParamsRequest>): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  fromSDK(_: ParamsRequestSDKType): ParamsRequest {
    return {};
  },
  toSDK(_: ParamsRequest): ParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: ParamsRequestAmino): ParamsRequest {
    return {};
  },
  toAmino(_: ParamsRequest): ParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest {
    return ParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ParamsRequest): ParamsRequestAminoMsg {
    return {
      type: "osmosis/twap/params-request",
      value: ParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest {
    return ParamsRequest.decode(message.value);
  },
  toProto(message: ParamsRequest): Uint8Array {
    return ParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ParamsRequest",
      value: ParamsRequest.encode(message).finish()
    };
  }
};
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: undefined
  };
}
export const ParamsResponse = {
  typeUrl: "/osmosis.twap.v1beta1.ParamsResponse",
  aminoType: "osmosis/twap/params-response",
  encode(message: ParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsResponse();
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
  fromJSON(object: any): ParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: ParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ParamsResponse>): ParamsResponse {
    const message = createBaseParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: ParamsResponseSDKType): ParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: ParamsResponse): ParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: ParamsResponseAmino): ParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: ParamsResponse): ParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse {
    return ParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ParamsResponse): ParamsResponseAminoMsg {
    return {
      type: "osmosis/twap/params-response",
      value: ParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse {
    return ParamsResponse.decode(message.value);
  },
  toProto(message: ParamsResponse): Uint8Array {
    return ParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.twap.v1beta1.ParamsResponse",
      value: ParamsResponse.encode(message).finish()
    };
  }
};