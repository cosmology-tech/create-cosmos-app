import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { ComputedRef } from "vue";
export const protobufPackage = "akash.market.v1beta2";
/** Params is the params for the x/market module */
export interface Params {
  bidMinDeposit: Coin;
  orderMaxBids: number;
}
export interface ReactiveParams {
  bidMinDeposit: ComputedRef<Coin>;
  orderMaxBids: ComputedRef<number>;
}
export interface ParamsProtoMsg {
  typeUrl: "/akash.market.v1beta2.Params";
  value: Uint8Array;
}
/** Params is the params for the x/market module */
export interface ParamsSDKType {
  bid_min_deposit: CoinSDKType;
  order_max_bids: number;
}
function createBaseParams(): Params {
  return {
    bidMinDeposit: Coin.fromPartial({}),
    orderMaxBids: 0
  };
}
export const Params = {
  typeUrl: "/akash.market.v1beta2.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidMinDeposit !== undefined) {
      Coin.encode(message.bidMinDeposit, writer.uint32(10).fork()).ldelim();
    }
    if (message.orderMaxBids !== 0) {
      writer.uint32(16).uint32(message.orderMaxBids);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.bidMinDeposit !== undefined && (obj.bidMinDeposit = message.bidMinDeposit ? Coin.toJSON(message.bidMinDeposit) : undefined);
    message.orderMaxBids !== undefined && (obj.orderMaxBids = Math.round(message.orderMaxBids));
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
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
  fromSDKJSON(object: any): ParamsSDKType {
    return {
      bid_min_deposit: isSet(object.bid_min_deposit) ? Coin.fromSDKJSON(object.bid_min_deposit) : undefined,
      order_max_bids: isSet(object.order_max_bids) ? Number(object.order_max_bids) : 0
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    message.bidMinDeposit !== undefined && (obj.bid_min_deposit = message.bidMinDeposit ? Coin.toSDK(message.bidMinDeposit) : undefined);
    obj.order_max_bids = message.orderMaxBids;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.bid_min_deposit !== undefined && object.bid_min_deposit !== null) {
      message.bidMinDeposit = Coin.fromAmino(object.bid_min_deposit);
    }
    if (object.order_max_bids !== undefined && object.order_max_bids !== null) {
      message.orderMaxBids = object.order_max_bids;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.bid_min_deposit = message.bidMinDeposit ? Coin.toAmino(message.bidMinDeposit) : Coin.toAmino(Coin.fromPartial({}));
    obj.order_max_bids = message.orderMaxBids ?? 0;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "akash/market/v1beta2/params",
      value: Params.toAmino(message)
    };
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