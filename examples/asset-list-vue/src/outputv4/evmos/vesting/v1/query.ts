import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { ComputedRef } from "vue";
export const protobufPackage = "evmos.vesting.v1";
/** QueryBalancesRequest is the request type for the Query/Balances RPC method. */
export interface QueryBalancesRequest {
  /** address of the clawback vesting account */
  address: string;
}
export interface ReactiveQueryBalancesRequest {
  address: ComputedRef<string>;
}
export interface QueryBalancesRequestProtoMsg {
  typeUrl: "/evmos.vesting.v1.QueryBalancesRequest";
  value: Uint8Array;
}
/** QueryBalancesRequest is the request type for the Query/Balances RPC method. */
export interface QueryBalancesRequestSDKType {
  address: string;
}
/**
 * QueryBalancesResponse is the response type for the Query/Balances RPC
 * method.
 */
export interface QueryBalancesResponse {
  /** current amount of locked tokens */
  locked: Coin[];
  /** current amount of unvested tokens */
  unvested: Coin[];
  /** current amount of vested tokens */
  vested: Coin[];
}
export interface ReactiveQueryBalancesResponse {
  locked: ComputedRef<Coin[]>;
  unvested: ComputedRef<Coin[]>;
  vested: ComputedRef<Coin[]>;
}
export interface QueryBalancesResponseProtoMsg {
  typeUrl: "/evmos.vesting.v1.QueryBalancesResponse";
  value: Uint8Array;
}
/**
 * QueryBalancesResponse is the response type for the Query/Balances RPC
 * method.
 */
export interface QueryBalancesResponseSDKType {
  locked: CoinSDKType[];
  unvested: CoinSDKType[];
  vested: CoinSDKType[];
}
function createBaseQueryBalancesRequest(): QueryBalancesRequest {
  return {
    address: ""
  };
}
export const QueryBalancesRequest = {
  typeUrl: "/evmos.vesting.v1.QueryBalancesRequest",
  encode(message: QueryBalancesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalancesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalancesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBalancesRequest {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryBalancesRequest): JsonSafe<QueryBalancesRequest> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBalancesRequest>): QueryBalancesRequest {
    const message = createBaseQueryBalancesRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromSDK(object: QueryBalancesRequestSDKType): QueryBalancesRequest {
    return {
      address: object?.address
    };
  },
  fromSDKJSON(object: any): QueryBalancesRequestSDKType {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toSDK(message: QueryBalancesRequest): QueryBalancesRequestSDKType {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAmino(object: QueryBalancesRequestAmino): QueryBalancesRequest {
    const message = createBaseQueryBalancesRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryBalancesRequest): QueryBalancesRequestAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: QueryBalancesRequestAminoMsg): QueryBalancesRequest {
    return QueryBalancesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalancesRequestProtoMsg): QueryBalancesRequest {
    return QueryBalancesRequest.decode(message.value);
  },
  toProto(message: QueryBalancesRequest): Uint8Array {
    return QueryBalancesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryBalancesRequest): QueryBalancesRequestProtoMsg {
    return {
      typeUrl: "/evmos.vesting.v1.QueryBalancesRequest",
      value: QueryBalancesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryBalancesResponse(): QueryBalancesResponse {
  return {
    locked: [],
    unvested: [],
    vested: []
  };
}
export const QueryBalancesResponse = {
  typeUrl: "/evmos.vesting.v1.QueryBalancesResponse",
  encode(message: QueryBalancesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.locked) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.unvested) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.vested) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryBalancesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBalancesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.locked.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.unvested.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.vested.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryBalancesResponse {
    return {
      locked: Array.isArray(object?.locked) ? object.locked.map((e: any) => Coin.fromJSON(e)) : [],
      unvested: Array.isArray(object?.unvested) ? object.unvested.map((e: any) => Coin.fromJSON(e)) : [],
      vested: Array.isArray(object?.vested) ? object.vested.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryBalancesResponse): JsonSafe<QueryBalancesResponse> {
    const obj: any = {};
    if (message.locked) {
      obj.locked = message.locked.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.locked = [];
    }
    if (message.unvested) {
      obj.unvested = message.unvested.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.unvested = [];
    }
    if (message.vested) {
      obj.vested = message.vested.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.vested = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryBalancesResponse>): QueryBalancesResponse {
    const message = createBaseQueryBalancesResponse();
    message.locked = object.locked?.map(e => Coin.fromPartial(e)) || [];
    message.unvested = object.unvested?.map(e => Coin.fromPartial(e)) || [];
    message.vested = object.vested?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryBalancesResponseSDKType): QueryBalancesResponse {
    return {
      locked: Array.isArray(object?.locked) ? object.locked.map((e: any) => Coin.fromSDK(e)) : [],
      unvested: Array.isArray(object?.unvested) ? object.unvested.map((e: any) => Coin.fromSDK(e)) : [],
      vested: Array.isArray(object?.vested) ? object.vested.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): QueryBalancesResponseSDKType {
    return {
      locked: Array.isArray(object?.locked) ? object.locked.map((e: any) => Coin.fromSDKJSON(e)) : [],
      unvested: Array.isArray(object?.unvested) ? object.unvested.map((e: any) => Coin.fromSDKJSON(e)) : [],
      vested: Array.isArray(object?.vested) ? object.vested.map((e: any) => Coin.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: QueryBalancesResponse): QueryBalancesResponseSDKType {
    const obj: any = {};
    if (message.locked) {
      obj.locked = message.locked.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.locked = [];
    }
    if (message.unvested) {
      obj.unvested = message.unvested.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.unvested = [];
    }
    if (message.vested) {
      obj.vested = message.vested.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.vested = [];
    }
    return obj;
  },
  fromAmino(object: QueryBalancesResponseAmino): QueryBalancesResponse {
    const message = createBaseQueryBalancesResponse();
    message.locked = object.locked?.map(e => Coin.fromAmino(e)) || [];
    message.unvested = object.unvested?.map(e => Coin.fromAmino(e)) || [];
    message.vested = object.vested?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryBalancesResponse): QueryBalancesResponseAmino {
    const obj: any = {};
    if (message.locked) {
      obj.locked = message.locked.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.locked = message.locked;
    }
    if (message.unvested) {
      obj.unvested = message.unvested.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.unvested = message.unvested;
    }
    if (message.vested) {
      obj.vested = message.vested.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.vested = message.vested;
    }
    return obj;
  },
  fromAminoMsg(object: QueryBalancesResponseAminoMsg): QueryBalancesResponse {
    return QueryBalancesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryBalancesResponseProtoMsg): QueryBalancesResponse {
    return QueryBalancesResponse.decode(message.value);
  },
  toProto(message: QueryBalancesResponse): Uint8Array {
    return QueryBalancesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryBalancesResponse): QueryBalancesResponseProtoMsg {
    return {
      typeUrl: "/evmos.vesting.v1.QueryBalancesResponse",
      value: QueryBalancesResponse.encode(message).finish()
    };
  }
};