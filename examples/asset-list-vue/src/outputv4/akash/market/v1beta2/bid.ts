import { OrderID, OrderIDSDKType } from "./order";
import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { ComputedRef } from "vue";
export const protobufPackage = "akash.market.v1beta2";
/** State is an enum which refers to state of bid */
export enum Bid_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,
  /** open - BidOpen denotes state for bid open */
  open = 1,
  /** active - BidMatched denotes state for bid open */
  active = 2,
  /** lost - BidLost denotes state for bid lost */
  lost = 3,
  /** closed - BidClosed denotes state for bid closed */
  closed = 4,
  UNRECOGNIZED = -1,
}
export const Bid_StateSDKType = Bid_State;
export function bid_StateFromJSON(object: any): Bid_State {
  switch (object) {
    case 0:
    case "invalid":
      return Bid_State.invalid;
    case 1:
    case "open":
      return Bid_State.open;
    case 2:
    case "active":
      return Bid_State.active;
    case 3:
    case "lost":
      return Bid_State.lost;
    case 4:
    case "closed":
      return Bid_State.closed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Bid_State.UNRECOGNIZED;
  }
}
export function bid_StateToJSON(object: Bid_State): string {
  switch (object) {
    case Bid_State.invalid:
      return "invalid";
    case Bid_State.open:
      return "open";
    case Bid_State.active:
      return "active";
    case Bid_State.lost:
      return "lost";
    case Bid_State.closed:
      return "closed";
    case Bid_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** MsgCreateBid defines an SDK message for creating Bid */
export interface MsgCreateBid {
  order: OrderID;
  provider: string;
  price: DecCoin;
  deposit: Coin;
}
export interface ReactiveMsgCreateBid {
  order: ComputedRef<OrderID>;
  provider: ComputedRef<string>;
  price: ComputedRef<DecCoin>;
  deposit: ComputedRef<Coin>;
}
export interface MsgCreateBidProtoMsg {
  typeUrl: "/akash.market.v1beta2.MsgCreateBid";
  value: Uint8Array;
}
/** MsgCreateBid defines an SDK message for creating Bid */
export interface MsgCreateBidSDKType {
  order: OrderIDSDKType;
  provider: string;
  price: DecCoinSDKType;
  deposit: CoinSDKType;
}
/** MsgCreateBidResponse defines the Msg/CreateBid response type. */
export interface MsgCreateBidResponse {}
export interface ReactiveMsgCreateBidResponse {}
export interface MsgCreateBidResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.MsgCreateBidResponse";
  value: Uint8Array;
}
/** MsgCreateBidResponse defines the Msg/CreateBid response type. */
export interface MsgCreateBidResponseSDKType {}
/** MsgCloseBid defines an SDK message for closing bid */
export interface MsgCloseBid {
  bidId: BidID;
}
export interface ReactiveMsgCloseBid {
  bidId: ComputedRef<BidID>;
}
export interface MsgCloseBidProtoMsg {
  typeUrl: "/akash.market.v1beta2.MsgCloseBid";
  value: Uint8Array;
}
/** MsgCloseBid defines an SDK message for closing bid */
export interface MsgCloseBidSDKType {
  bid_id: BidIDSDKType;
}
/** MsgCloseBidResponse defines the Msg/CloseBid response type. */
export interface MsgCloseBidResponse {}
export interface ReactiveMsgCloseBidResponse {}
export interface MsgCloseBidResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.MsgCloseBidResponse";
  value: Uint8Array;
}
/** MsgCloseBidResponse defines the Msg/CloseBid response type. */
export interface MsgCloseBidResponseSDKType {}
/**
 * BidID stores owner and all other seq numbers
 * A successful bid becomes a Lease(ID).
 */
export interface BidID {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
  provider: string;
}
export interface ReactiveBidID {
  owner: ComputedRef<string>;
  dseq: ComputedRef<bigint>;
  gseq: ComputedRef<number>;
  oseq: ComputedRef<number>;
  provider: ComputedRef<string>;
}
export interface BidIDProtoMsg {
  typeUrl: "/akash.market.v1beta2.BidID";
  value: Uint8Array;
}
/**
 * BidID stores owner and all other seq numbers
 * A successful bid becomes a Lease(ID).
 */
export interface BidIDSDKType {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
  provider: string;
}
/** Bid stores BidID, state of bid and price */
export interface Bid {
  bidId: BidID;
  state: Bid_State;
  price: DecCoin;
  createdAt: bigint;
}
export interface ReactiveBid {
  bidId: ComputedRef<BidID>;
  state: ComputedRef<Bid_State>;
  price: ComputedRef<DecCoin>;
  createdAt: ComputedRef<bigint>;
}
export interface BidProtoMsg {
  typeUrl: "/akash.market.v1beta2.Bid";
  value: Uint8Array;
}
/** Bid stores BidID, state of bid and price */
export interface BidSDKType {
  bid_id: BidIDSDKType;
  state: Bid_State;
  price: DecCoinSDKType;
  created_at: bigint;
}
/** BidFilters defines flags for bid list filter */
export interface BidFilters {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
  provider: string;
  state: string;
}
export interface ReactiveBidFilters {
  owner: ComputedRef<string>;
  dseq: ComputedRef<bigint>;
  gseq: ComputedRef<number>;
  oseq: ComputedRef<number>;
  provider: ComputedRef<string>;
  state: ComputedRef<string>;
}
export interface BidFiltersProtoMsg {
  typeUrl: "/akash.market.v1beta2.BidFilters";
  value: Uint8Array;
}
/** BidFilters defines flags for bid list filter */
export interface BidFiltersSDKType {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
  provider: string;
  state: string;
}
function createBaseMsgCreateBid(): MsgCreateBid {
  return {
    order: OrderID.fromPartial({}),
    provider: "",
    price: DecCoin.fromPartial({}),
    deposit: Coin.fromPartial({})
  };
}
export const MsgCreateBid = {
  typeUrl: "/akash.market.v1beta2.MsgCreateBid",
  encode(message: MsgCreateBid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.order !== undefined) {
      OrderID.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = OrderID.decode(reader, reader.uint32());
          break;
        case 2:
          message.provider = reader.string();
          break;
        case 3:
          message.price = DecCoin.decode(reader, reader.uint32());
          break;
        case 4:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateBid {
    return {
      order: isSet(object.order) ? OrderID.fromJSON(object.order) : undefined,
      provider: isSet(object.provider) ? String(object.provider) : "",
      price: isSet(object.price) ? DecCoin.fromJSON(object.price) : undefined,
      deposit: isSet(object.deposit) ? Coin.fromJSON(object.deposit) : undefined
    };
  },
  toJSON(message: MsgCreateBid): JsonSafe<MsgCreateBid> {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? OrderID.toJSON(message.order) : undefined);
    message.provider !== undefined && (obj.provider = message.provider);
    message.price !== undefined && (obj.price = message.price ? DecCoin.toJSON(message.price) : undefined);
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toJSON(message.deposit) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateBid>, I>>(object: I): MsgCreateBid {
    const message = createBaseMsgCreateBid();
    message.order = object.order !== undefined && object.order !== null ? OrderID.fromPartial(object.order) : undefined;
    message.provider = object.provider ?? "";
    message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    return message;
  },
  fromSDK(object: MsgCreateBidSDKType): MsgCreateBid {
    return {
      order: object.order ? OrderID.fromSDK(object.order) : undefined,
      provider: object?.provider,
      price: object.price ? DecCoin.fromSDK(object.price) : undefined,
      deposit: object.deposit ? Coin.fromSDK(object.deposit) : undefined
    };
  },
  fromSDKJSON(object: any): MsgCreateBidSDKType {
    return {
      order: isSet(object.order) ? OrderID.fromSDKJSON(object.order) : undefined,
      provider: isSet(object.provider) ? String(object.provider) : "",
      price: isSet(object.price) ? DecCoin.fromSDKJSON(object.price) : undefined,
      deposit: isSet(object.deposit) ? Coin.fromSDKJSON(object.deposit) : undefined
    };
  },
  toSDK(message: MsgCreateBid): MsgCreateBidSDKType {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? OrderID.toSDK(message.order) : undefined);
    obj.provider = message.provider;
    message.price !== undefined && (obj.price = message.price ? DecCoin.toSDK(message.price) : undefined);
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toSDK(message.deposit) : undefined);
    return obj;
  },
  fromAmino(object: MsgCreateBidAmino): MsgCreateBid {
    const message = createBaseMsgCreateBid();
    if (object.order !== undefined && object.order !== null) {
      message.order = OrderID.fromAmino(object.order);
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = DecCoin.fromAmino(object.price);
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromAmino(object.deposit);
    }
    return message;
  },
  toAmino(message: MsgCreateBid): MsgCreateBidAmino {
    const obj: any = {};
    obj.order = message.order ? OrderID.toAmino(message.order) : OrderID.toAmino(OrderID.fromPartial({}));
    obj.provider = message.provider ?? "";
    obj.price = message.price ? DecCoin.toAmino(message.price) : DecCoin.toAmino(DecCoin.fromPartial({}));
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgCreateBidAminoMsg): MsgCreateBid {
    return MsgCreateBid.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateBid): MsgCreateBidAminoMsg {
    return {
      type: "akash/market/v1beta2/testonly-create-bid",
      value: MsgCreateBid.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateBidProtoMsg): MsgCreateBid {
    return MsgCreateBid.decode(message.value);
  },
  toProto(message: MsgCreateBid): Uint8Array {
    return MsgCreateBid.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBid): MsgCreateBidProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.MsgCreateBid",
      value: MsgCreateBid.encode(message).finish()
    };
  }
};
function createBaseMsgCreateBidResponse(): MsgCreateBidResponse {
  return {};
}
export const MsgCreateBidResponse = {
  typeUrl: "/akash.market.v1beta2.MsgCreateBidResponse",
  encode(_: MsgCreateBidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBidResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBidResponse();
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
  fromJSON(_: any): MsgCreateBidResponse {
    return {};
  },
  toJSON(_: MsgCreateBidResponse): JsonSafe<MsgCreateBidResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateBidResponse>, I>>(_: I): MsgCreateBidResponse {
    const message = createBaseMsgCreateBidResponse();
    return message;
  },
  fromSDK(_: MsgCreateBidResponseSDKType): MsgCreateBidResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgCreateBidResponseSDKType {
    return {};
  },
  toSDK(_: MsgCreateBidResponse): MsgCreateBidResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCreateBidResponseAmino): MsgCreateBidResponse {
    const message = createBaseMsgCreateBidResponse();
    return message;
  },
  toAmino(_: MsgCreateBidResponse): MsgCreateBidResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateBidResponseAminoMsg): MsgCreateBidResponse {
    return MsgCreateBidResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateBidResponse): MsgCreateBidResponseAminoMsg {
    return {
      type: "akash/market/v1beta2/testonly-create-bid-response",
      value: MsgCreateBidResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateBidResponseProtoMsg): MsgCreateBidResponse {
    return MsgCreateBidResponse.decode(message.value);
  },
  toProto(message: MsgCreateBidResponse): Uint8Array {
    return MsgCreateBidResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBidResponse): MsgCreateBidResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.MsgCreateBidResponse",
      value: MsgCreateBidResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCloseBid(): MsgCloseBid {
  return {
    bidId: BidID.fromPartial({})
  };
}
export const MsgCloseBid = {
  typeUrl: "/akash.market.v1beta2.MsgCloseBid",
  encode(message: MsgCloseBid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidId !== undefined) {
      BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseBid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidId = BidID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCloseBid {
    return {
      bidId: isSet(object.bidId) ? BidID.fromJSON(object.bidId) : undefined
    };
  },
  toJSON(message: MsgCloseBid): JsonSafe<MsgCloseBid> {
    const obj: any = {};
    message.bidId !== undefined && (obj.bidId = message.bidId ? BidID.toJSON(message.bidId) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCloseBid>, I>>(object: I): MsgCloseBid {
    const message = createBaseMsgCloseBid();
    message.bidId = object.bidId !== undefined && object.bidId !== null ? BidID.fromPartial(object.bidId) : undefined;
    return message;
  },
  fromSDK(object: MsgCloseBidSDKType): MsgCloseBid {
    return {
      bidId: object.bid_id ? BidID.fromSDK(object.bid_id) : undefined
    };
  },
  fromSDKJSON(object: any): MsgCloseBidSDKType {
    return {
      bid_id: isSet(object.bid_id) ? BidID.fromSDKJSON(object.bid_id) : undefined
    };
  },
  toSDK(message: MsgCloseBid): MsgCloseBidSDKType {
    const obj: any = {};
    message.bidId !== undefined && (obj.bid_id = message.bidId ? BidID.toSDK(message.bidId) : undefined);
    return obj;
  },
  fromAmino(object: MsgCloseBidAmino): MsgCloseBid {
    const message = createBaseMsgCloseBid();
    if (object.bid_id !== undefined && object.bid_id !== null) {
      message.bidId = BidID.fromAmino(object.bid_id);
    }
    return message;
  },
  toAmino(message: MsgCloseBid): MsgCloseBidAmino {
    const obj: any = {};
    obj.bid_id = message.bidId ? BidID.toAmino(message.bidId) : BidID.toAmino(BidID.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgCloseBidAminoMsg): MsgCloseBid {
    return MsgCloseBid.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCloseBid): MsgCloseBidAminoMsg {
    return {
      type: "akash/market/v1beta2/testonly-close-bid",
      value: MsgCloseBid.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCloseBidProtoMsg): MsgCloseBid {
    return MsgCloseBid.decode(message.value);
  },
  toProto(message: MsgCloseBid): Uint8Array {
    return MsgCloseBid.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseBid): MsgCloseBidProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.MsgCloseBid",
      value: MsgCloseBid.encode(message).finish()
    };
  }
};
function createBaseMsgCloseBidResponse(): MsgCloseBidResponse {
  return {};
}
export const MsgCloseBidResponse = {
  typeUrl: "/akash.market.v1beta2.MsgCloseBidResponse",
  encode(_: MsgCloseBidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseBidResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseBidResponse();
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
  fromJSON(_: any): MsgCloseBidResponse {
    return {};
  },
  toJSON(_: MsgCloseBidResponse): JsonSafe<MsgCloseBidResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCloseBidResponse>, I>>(_: I): MsgCloseBidResponse {
    const message = createBaseMsgCloseBidResponse();
    return message;
  },
  fromSDK(_: MsgCloseBidResponseSDKType): MsgCloseBidResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgCloseBidResponseSDKType {
    return {};
  },
  toSDK(_: MsgCloseBidResponse): MsgCloseBidResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCloseBidResponseAmino): MsgCloseBidResponse {
    const message = createBaseMsgCloseBidResponse();
    return message;
  },
  toAmino(_: MsgCloseBidResponse): MsgCloseBidResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCloseBidResponseAminoMsg): MsgCloseBidResponse {
    return MsgCloseBidResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCloseBidResponse): MsgCloseBidResponseAminoMsg {
    return {
      type: "akash/market/v1beta2/testonly-close-bid-response",
      value: MsgCloseBidResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCloseBidResponseProtoMsg): MsgCloseBidResponse {
    return MsgCloseBidResponse.decode(message.value);
  },
  toProto(message: MsgCloseBidResponse): Uint8Array {
    return MsgCloseBidResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseBidResponse): MsgCloseBidResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.MsgCloseBidResponse",
      value: MsgCloseBidResponse.encode(message).finish()
    };
  }
};
function createBaseBidID(): BidID {
  return {
    owner: "",
    dseq: BigInt(0),
    gseq: 0,
    oseq: 0,
    provider: ""
  };
}
export const BidID = {
  typeUrl: "/akash.market.v1beta2.BidID",
  encode(message: BidID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== BigInt(0)) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }
    if (message.oseq !== 0) {
      writer.uint32(32).uint32(message.oseq);
    }
    if (message.provider !== "") {
      writer.uint32(42).string(message.provider);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BidID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBidID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.dseq = reader.uint64();
          break;
        case 3:
          message.gseq = reader.uint32();
          break;
        case 4:
          message.oseq = reader.uint32();
          break;
        case 5:
          message.provider = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BidID {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? BigInt(object.dseq.toString()) : BigInt(0),
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0,
      oseq: isSet(object.oseq) ? Number(object.oseq) : 0,
      provider: isSet(object.provider) ? String(object.provider) : ""
    };
  },
  toJSON(message: BidID): JsonSafe<BidID> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || BigInt(0)).toString());
    message.gseq !== undefined && (obj.gseq = Math.round(message.gseq));
    message.oseq !== undefined && (obj.oseq = Math.round(message.oseq));
    message.provider !== undefined && (obj.provider = message.provider);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BidID>, I>>(object: I): BidID {
    const message = createBaseBidID();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    message.provider = object.provider ?? "";
    return message;
  },
  fromSDK(object: BidIDSDKType): BidID {
    return {
      owner: object?.owner,
      dseq: object?.dseq,
      gseq: object?.gseq,
      oseq: object?.oseq,
      provider: object?.provider
    };
  },
  fromSDKJSON(object: any): BidIDSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? BigInt(object.dseq.toString()) : BigInt(0),
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0,
      oseq: isSet(object.oseq) ? Number(object.oseq) : 0,
      provider: isSet(object.provider) ? String(object.provider) : ""
    };
  },
  toSDK(message: BidID): BidIDSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq;
    obj.gseq = message.gseq;
    obj.oseq = message.oseq;
    obj.provider = message.provider;
    return obj;
  },
  fromAmino(object: BidIDAmino): BidID {
    const message = createBaseBidID();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq);
    }
    if (object.gseq !== undefined && object.gseq !== null) {
      message.gseq = object.gseq;
    }
    if (object.oseq !== undefined && object.oseq !== null) {
      message.oseq = object.oseq;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    return message;
  },
  toAmino(message: BidID): BidIDAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.dseq = message.dseq ? message.dseq?.toString() : "0";
    obj.gseq = message.gseq ?? 0;
    obj.oseq = message.oseq ?? 0;
    obj.provider = message.provider ?? "";
    return obj;
  },
  fromAminoMsg(object: BidIDAminoMsg): BidID {
    return BidID.fromAmino(object.value);
  },
  toAminoMsg(message: BidID): BidIDAminoMsg {
    return {
      type: "akash/market/v1beta2/bid-i-d",
      value: BidID.toAmino(message)
    };
  },
  fromProtoMsg(message: BidIDProtoMsg): BidID {
    return BidID.decode(message.value);
  },
  toProto(message: BidID): Uint8Array {
    return BidID.encode(message).finish();
  },
  toProtoMsg(message: BidID): BidIDProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.BidID",
      value: BidID.encode(message).finish()
    };
  }
};
function createBaseBid(): Bid {
  return {
    bidId: BidID.fromPartial({}),
    state: 0,
    price: DecCoin.fromPartial({}),
    createdAt: BigInt(0)
  };
}
export const Bid = {
  typeUrl: "/akash.market.v1beta2.Bid",
  encode(message: Bid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidId !== undefined) {
      BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(32).int64(message.createdAt);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Bid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidId = BidID.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = (reader.int32() as any);
          break;
        case 3:
          message.price = DecCoin.decode(reader, reader.uint32());
          break;
        case 4:
          message.createdAt = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Bid {
    return {
      bidId: isSet(object.bidId) ? BidID.fromJSON(object.bidId) : undefined,
      state: isSet(object.state) ? bid_StateFromJSON(object.state) : -1,
      price: isSet(object.price) ? DecCoin.fromJSON(object.price) : undefined,
      createdAt: isSet(object.createdAt) ? BigInt(object.createdAt.toString()) : BigInt(0)
    };
  },
  toJSON(message: Bid): JsonSafe<Bid> {
    const obj: any = {};
    message.bidId !== undefined && (obj.bidId = message.bidId ? BidID.toJSON(message.bidId) : undefined);
    message.state !== undefined && (obj.state = bid_StateToJSON(message.state));
    message.price !== undefined && (obj.price = message.price ? DecCoin.toJSON(message.price) : undefined);
    message.createdAt !== undefined && (obj.createdAt = (message.createdAt || BigInt(0)).toString());
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Bid>, I>>(object: I): Bid {
    const message = createBaseBid();
    message.bidId = object.bidId !== undefined && object.bidId !== null ? BidID.fromPartial(object.bidId) : undefined;
    message.state = object.state ?? 0;
    message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: BidSDKType): Bid {
    return {
      bidId: object.bid_id ? BidID.fromSDK(object.bid_id) : undefined,
      state: isSet(object.state) ? bid_StateFromJSON(object.state) : -1,
      price: object.price ? DecCoin.fromSDK(object.price) : undefined,
      createdAt: object?.created_at
    };
  },
  fromSDKJSON(object: any): BidSDKType {
    return {
      bid_id: isSet(object.bid_id) ? BidID.fromSDKJSON(object.bid_id) : undefined,
      state: isSet(object.state) ? bid_StateFromJSON(object.state) : -1,
      price: isSet(object.price) ? DecCoin.fromSDKJSON(object.price) : undefined,
      created_at: isSet(object.created_at) ? BigInt(object.created_at.toString()) : BigInt(0)
    };
  },
  toSDK(message: Bid): BidSDKType {
    const obj: any = {};
    message.bidId !== undefined && (obj.bid_id = message.bidId ? BidID.toSDK(message.bidId) : undefined);
    message.state !== undefined && (obj.state = bid_StateToJSON(message.state));
    message.price !== undefined && (obj.price = message.price ? DecCoin.toSDK(message.price) : undefined);
    obj.created_at = message.createdAt;
    return obj;
  },
  fromAmino(object: BidAmino): Bid {
    const message = createBaseBid();
    if (object.bid_id !== undefined && object.bid_id !== null) {
      message.bidId = BidID.fromAmino(object.bid_id);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = DecCoin.fromAmino(object.price);
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    return message;
  },
  toAmino(message: Bid): BidAmino {
    const obj: any = {};
    obj.bid_id = message.bidId ? BidID.toAmino(message.bidId) : BidID.toAmino(BidID.fromPartial({}));
    obj.state = message.state ?? 0;
    obj.price = message.price ? DecCoin.toAmino(message.price) : DecCoin.toAmino(DecCoin.fromPartial({}));
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BidAminoMsg): Bid {
    return Bid.fromAmino(object.value);
  },
  toAminoMsg(message: Bid): BidAminoMsg {
    return {
      type: "akash/market/v1beta2/bid",
      value: Bid.toAmino(message)
    };
  },
  fromProtoMsg(message: BidProtoMsg): Bid {
    return Bid.decode(message.value);
  },
  toProto(message: Bid): Uint8Array {
    return Bid.encode(message).finish();
  },
  toProtoMsg(message: Bid): BidProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.Bid",
      value: Bid.encode(message).finish()
    };
  }
};
function createBaseBidFilters(): BidFilters {
  return {
    owner: "",
    dseq: BigInt(0),
    gseq: 0,
    oseq: 0,
    provider: "",
    state: ""
  };
}
export const BidFilters = {
  typeUrl: "/akash.market.v1beta2.BidFilters",
  encode(message: BidFilters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== BigInt(0)) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }
    if (message.oseq !== 0) {
      writer.uint32(32).uint32(message.oseq);
    }
    if (message.provider !== "") {
      writer.uint32(42).string(message.provider);
    }
    if (message.state !== "") {
      writer.uint32(50).string(message.state);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BidFilters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBidFilters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.dseq = reader.uint64();
          break;
        case 3:
          message.gseq = reader.uint32();
          break;
        case 4:
          message.oseq = reader.uint32();
          break;
        case 5:
          message.provider = reader.string();
          break;
        case 6:
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BidFilters {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? BigInt(object.dseq.toString()) : BigInt(0),
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0,
      oseq: isSet(object.oseq) ? Number(object.oseq) : 0,
      provider: isSet(object.provider) ? String(object.provider) : "",
      state: isSet(object.state) ? String(object.state) : ""
    };
  },
  toJSON(message: BidFilters): JsonSafe<BidFilters> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || BigInt(0)).toString());
    message.gseq !== undefined && (obj.gseq = Math.round(message.gseq));
    message.oseq !== undefined && (obj.oseq = Math.round(message.oseq));
    message.provider !== undefined && (obj.provider = message.provider);
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<BidFilters>, I>>(object: I): BidFilters {
    const message = createBaseBidFilters();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    message.provider = object.provider ?? "";
    message.state = object.state ?? "";
    return message;
  },
  fromSDK(object: BidFiltersSDKType): BidFilters {
    return {
      owner: object?.owner,
      dseq: object?.dseq,
      gseq: object?.gseq,
      oseq: object?.oseq,
      provider: object?.provider,
      state: object?.state
    };
  },
  fromSDKJSON(object: any): BidFiltersSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? BigInt(object.dseq.toString()) : BigInt(0),
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0,
      oseq: isSet(object.oseq) ? Number(object.oseq) : 0,
      provider: isSet(object.provider) ? String(object.provider) : "",
      state: isSet(object.state) ? String(object.state) : ""
    };
  },
  toSDK(message: BidFilters): BidFiltersSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq;
    obj.gseq = message.gseq;
    obj.oseq = message.oseq;
    obj.provider = message.provider;
    obj.state = message.state;
    return obj;
  },
  fromAmino(object: BidFiltersAmino): BidFilters {
    const message = createBaseBidFilters();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq);
    }
    if (object.gseq !== undefined && object.gseq !== null) {
      message.gseq = object.gseq;
    }
    if (object.oseq !== undefined && object.oseq !== null) {
      message.oseq = object.oseq;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    return message;
  },
  toAmino(message: BidFilters): BidFiltersAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.dseq = message.dseq ? message.dseq?.toString() : "0";
    obj.gseq = message.gseq ?? 0;
    obj.oseq = message.oseq ?? 0;
    obj.provider = message.provider ?? "";
    obj.state = message.state ?? "";
    return obj;
  },
  fromAminoMsg(object: BidFiltersAminoMsg): BidFilters {
    return BidFilters.fromAmino(object.value);
  },
  toAminoMsg(message: BidFilters): BidFiltersAminoMsg {
    return {
      type: "akash/market/v1beta2/bid-filters",
      value: BidFilters.toAmino(message)
    };
  },
  fromProtoMsg(message: BidFiltersProtoMsg): BidFilters {
    return BidFilters.decode(message.value);
  },
  toProto(message: BidFilters): Uint8Array {
    return BidFilters.encode(message).finish();
  },
  toProtoMsg(message: BidFilters): BidFiltersProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.BidFilters",
      value: BidFilters.encode(message).finish()
    };
  }
};