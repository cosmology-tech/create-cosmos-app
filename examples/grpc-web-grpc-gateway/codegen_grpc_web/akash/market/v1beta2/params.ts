import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.market.v1beta2";
/** Params is the params for the x/market module */
export interface Params {
  bidMinDeposit?: Coin;
  orderMaxBids: number;
}
export interface ParamsProtoMsg {
  typeUrl: "/akash.market.v1beta2.Params";
  value: Uint8Array;
}
/** Params is the params for the x/market module */
export interface ParamsAmino {
  bid_min_deposit?: CoinAmino;
  order_max_bids: number;
}
export interface ParamsAminoMsg {
  type: "/akash.market.v1beta2.Params";
  value: ParamsAmino;
}
/** Params is the params for the x/market module */
export interface ParamsSDKType {
  bid_min_deposit?: CoinSDKType;
  order_max_bids: number;
}
function createBaseParams(): Params {
  return {
    bidMinDeposit: undefined,
    orderMaxBids: 0
  };
}
export const Params = {
  typeUrl: "/akash.market.v1beta2.Params",
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidMinDeposit !== undefined) {
      Coin.encode(message.bidMinDeposit, writer.uint32(10).fork()).ldelim();
    }
    if (message.orderMaxBids !== 0) {
      writer.uint32(16).uint32(message.orderMaxBids);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidMinDeposit = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.orderMaxBids = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      bidMinDeposit: isSet(object.bidMinDeposit) ? Coin.fromJSON(object.bidMinDeposit) : undefined,
      orderMaxBids: isSet(object.orderMaxBids) ? Number(object.orderMaxBids) : 0
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.bidMinDeposit !== undefined && (obj.bidMinDeposit = message.bidMinDeposit ? Coin.toJSON(message.bidMinDeposit) : undefined);
    message.orderMaxBids !== undefined && (obj.orderMaxBids = Math.round(message.orderMaxBids));
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.bidMinDeposit = object.bidMinDeposit !== undefined && object.bidMinDeposit !== null ? Coin.fromPartial(object.bidMinDeposit) : undefined;
    message.orderMaxBids = object.orderMaxBids ?? 0;
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      bidMinDeposit: object.bid_min_deposit ? Coin.fromSDK(object.bid_min_deposit) : undefined,
      orderMaxBids: object?.order_max_bids
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    message.bidMinDeposit !== undefined && (obj.bid_min_deposit = message.bidMinDeposit ? Coin.toSDK(message.bidMinDeposit) : undefined);
    obj.order_max_bids = message.orderMaxBids;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      bidMinDeposit: object?.bid_min_deposit ? Coin.fromAmino(object.bid_min_deposit) : undefined,
      orderMaxBids: object.order_max_bids
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.bid_min_deposit = message.bidMinDeposit ? Coin.toAmino(message.bidMinDeposit) : undefined;
    obj.order_max_bids = message.orderMaxBids;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.Params",
      value: Params.encode(message).finish()
    };
  }
};