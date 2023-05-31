import { OrderID, OrderIDAmino, OrderIDSDKType } from "./order";
import { DecCoin, DecCoinAmino, DecCoinSDKType, Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export const Bid_StateAmino = Bid_State;
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
  order?: OrderID;
  provider: string;
  price?: DecCoin;
  deposit?: Coin;
}
export interface MsgCreateBidProtoMsg {
  typeUrl: "/akash.market.v1beta2.MsgCreateBid";
  value: Uint8Array;
}
/** MsgCreateBid defines an SDK message for creating Bid */
export interface MsgCreateBidAmino {
  order?: OrderIDAmino;
  provider: string;
  price?: DecCoinAmino;
  deposit?: CoinAmino;
}
export interface MsgCreateBidAminoMsg {
  type: "/akash.market.v1beta2.MsgCreateBid";
  value: MsgCreateBidAmino;
}
/** MsgCreateBid defines an SDK message for creating Bid */
export interface MsgCreateBidSDKType {
  order?: OrderIDSDKType;
  provider: string;
  price?: DecCoinSDKType;
  deposit?: CoinSDKType;
}
/** MsgCreateBidResponse defines the Msg/CreateBid response type. */
export interface MsgCreateBidResponse {}
export interface MsgCreateBidResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.MsgCreateBidResponse";
  value: Uint8Array;
}
/** MsgCreateBidResponse defines the Msg/CreateBid response type. */
export interface MsgCreateBidResponseAmino {}
export interface MsgCreateBidResponseAminoMsg {
  type: "/akash.market.v1beta2.MsgCreateBidResponse";
  value: MsgCreateBidResponseAmino;
}
/** MsgCreateBidResponse defines the Msg/CreateBid response type. */
export interface MsgCreateBidResponseSDKType {}
/** MsgCloseBid defines an SDK message for closing bid */
export interface MsgCloseBid {
  bidId?: BidID;
}
export interface MsgCloseBidProtoMsg {
  typeUrl: "/akash.market.v1beta2.MsgCloseBid";
  value: Uint8Array;
}
/** MsgCloseBid defines an SDK message for closing bid */
export interface MsgCloseBidAmino {
  bid_id?: BidIDAmino;
}
export interface MsgCloseBidAminoMsg {
  type: "/akash.market.v1beta2.MsgCloseBid";
  value: MsgCloseBidAmino;
}
/** MsgCloseBid defines an SDK message for closing bid */
export interface MsgCloseBidSDKType {
  bid_id?: BidIDSDKType;
}
/** MsgCloseBidResponse defines the Msg/CloseBid response type. */
export interface MsgCloseBidResponse {}
export interface MsgCloseBidResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.MsgCloseBidResponse";
  value: Uint8Array;
}
/** MsgCloseBidResponse defines the Msg/CloseBid response type. */
export interface MsgCloseBidResponseAmino {}
export interface MsgCloseBidResponseAminoMsg {
  type: "/akash.market.v1beta2.MsgCloseBidResponse";
  value: MsgCloseBidResponseAmino;
}
/** MsgCloseBidResponse defines the Msg/CloseBid response type. */
export interface MsgCloseBidResponseSDKType {}
/**
 * BidID stores owner and all other seq numbers
 * A successful bid becomes a Lease(ID).
 */
export interface BidID {
  owner: string;
  dseq: Long;
  gseq: number;
  oseq: number;
  provider: string;
}
export interface BidIDProtoMsg {
  typeUrl: "/akash.market.v1beta2.BidID";
  value: Uint8Array;
}
/**
 * BidID stores owner and all other seq numbers
 * A successful bid becomes a Lease(ID).
 */
export interface BidIDAmino {
  owner: string;
  dseq: string;
  gseq: number;
  oseq: number;
  provider: string;
}
export interface BidIDAminoMsg {
  type: "/akash.market.v1beta2.BidID";
  value: BidIDAmino;
}
/**
 * BidID stores owner and all other seq numbers
 * A successful bid becomes a Lease(ID).
 */
export interface BidIDSDKType {
  owner: string;
  dseq: Long;
  gseq: number;
  oseq: number;
  provider: string;
}
/** Bid stores BidID, state of bid and price */
export interface Bid {
  bidId?: BidID;
  state: Bid_State;
  price?: DecCoin;
  createdAt: Long;
}
export interface BidProtoMsg {
  typeUrl: "/akash.market.v1beta2.Bid";
  value: Uint8Array;
}
/** Bid stores BidID, state of bid and price */
export interface BidAmino {
  bid_id?: BidIDAmino;
  state: Bid_State;
  price?: DecCoinAmino;
  created_at: string;
}
export interface BidAminoMsg {
  type: "/akash.market.v1beta2.Bid";
  value: BidAmino;
}
/** Bid stores BidID, state of bid and price */
export interface BidSDKType {
  bid_id?: BidIDSDKType;
  state: Bid_State;
  price?: DecCoinSDKType;
  created_at: Long;
}
/** BidFilters defines flags for bid list filter */
export interface BidFilters {
  owner: string;
  dseq: Long;
  gseq: number;
  oseq: number;
  provider: string;
  state: string;
}
export interface BidFiltersProtoMsg {
  typeUrl: "/akash.market.v1beta2.BidFilters";
  value: Uint8Array;
}
/** BidFilters defines flags for bid list filter */
export interface BidFiltersAmino {
  owner: string;
  dseq: string;
  gseq: number;
  oseq: number;
  provider: string;
  state: string;
}
export interface BidFiltersAminoMsg {
  type: "/akash.market.v1beta2.BidFilters";
  value: BidFiltersAmino;
}
/** BidFilters defines flags for bid list filter */
export interface BidFiltersSDKType {
  owner: string;
  dseq: Long;
  gseq: number;
  oseq: number;
  provider: string;
  state: string;
}
function createBaseMsgCreateBid(): MsgCreateBid {
  return {
    order: undefined,
    provider: "",
    price: undefined,
    deposit: undefined
  };
}
export const MsgCreateBid = {
  typeUrl: "/akash.market.v1beta2.MsgCreateBid",
  encode(message: MsgCreateBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  toJSON(message: MsgCreateBid): unknown {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? OrderID.toJSON(message.order) : undefined);
    message.provider !== undefined && (obj.provider = message.provider);
    message.price !== undefined && (obj.price = message.price ? DecCoin.toJSON(message.price) : undefined);
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toJSON(message.deposit) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateBid>): MsgCreateBid {
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
  toSDK(message: MsgCreateBid): MsgCreateBidSDKType {
    const obj: any = {};
    message.order !== undefined && (obj.order = message.order ? OrderID.toSDK(message.order) : undefined);
    obj.provider = message.provider;
    message.price !== undefined && (obj.price = message.price ? DecCoin.toSDK(message.price) : undefined);
    message.deposit !== undefined && (obj.deposit = message.deposit ? Coin.toSDK(message.deposit) : undefined);
    return obj;
  },
  fromAmino(object: MsgCreateBidAmino): MsgCreateBid {
    return {
      order: object?.order ? OrderID.fromAmino(object.order) : undefined,
      provider: object.provider,
      price: object?.price ? DecCoin.fromAmino(object.price) : undefined,
      deposit: object?.deposit ? Coin.fromAmino(object.deposit) : undefined
    };
  },
  toAmino(message: MsgCreateBid): MsgCreateBidAmino {
    const obj: any = {};
    obj.order = message.order ? OrderID.toAmino(message.order) : undefined;
    obj.provider = message.provider;
    obj.price = message.price ? DecCoin.toAmino(message.price) : undefined;
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateBidAminoMsg): MsgCreateBid {
    return MsgCreateBid.fromAmino(object.value);
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
  encode(_: MsgCreateBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  toJSON(_: MsgCreateBidResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgCreateBidResponse>): MsgCreateBidResponse {
    const message = createBaseMsgCreateBidResponse();
    return message;
  },
  fromSDK(_: MsgCreateBidResponseSDKType): MsgCreateBidResponse {
    return {};
  },
  toSDK(_: MsgCreateBidResponse): MsgCreateBidResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCreateBidResponseAmino): MsgCreateBidResponse {
    return {};
  },
  toAmino(_: MsgCreateBidResponse): MsgCreateBidResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateBidResponseAminoMsg): MsgCreateBidResponse {
    return MsgCreateBidResponse.fromAmino(object.value);
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
    bidId: undefined
  };
}
export const MsgCloseBid = {
  typeUrl: "/akash.market.v1beta2.MsgCloseBid",
  encode(message: MsgCloseBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidId !== undefined) {
      BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  toJSON(message: MsgCloseBid): unknown {
    const obj: any = {};
    message.bidId !== undefined && (obj.bidId = message.bidId ? BidID.toJSON(message.bidId) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCloseBid>): MsgCloseBid {
    const message = createBaseMsgCloseBid();
    message.bidId = object.bidId !== undefined && object.bidId !== null ? BidID.fromPartial(object.bidId) : undefined;
    return message;
  },
  fromSDK(object: MsgCloseBidSDKType): MsgCloseBid {
    return {
      bidId: object.bid_id ? BidID.fromSDK(object.bid_id) : undefined
    };
  },
  toSDK(message: MsgCloseBid): MsgCloseBidSDKType {
    const obj: any = {};
    message.bidId !== undefined && (obj.bid_id = message.bidId ? BidID.toSDK(message.bidId) : undefined);
    return obj;
  },
  fromAmino(object: MsgCloseBidAmino): MsgCloseBid {
    return {
      bidId: object?.bid_id ? BidID.fromAmino(object.bid_id) : undefined
    };
  },
  toAmino(message: MsgCloseBid): MsgCloseBidAmino {
    const obj: any = {};
    obj.bid_id = message.bidId ? BidID.toAmino(message.bidId) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCloseBidAminoMsg): MsgCloseBid {
    return MsgCloseBid.fromAmino(object.value);
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
  encode(_: MsgCloseBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  toJSON(_: MsgCloseBidResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgCloseBidResponse>): MsgCloseBidResponse {
    const message = createBaseMsgCloseBidResponse();
    return message;
  },
  fromSDK(_: MsgCloseBidResponseSDKType): MsgCloseBidResponse {
    return {};
  },
  toSDK(_: MsgCloseBidResponse): MsgCloseBidResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCloseBidResponseAmino): MsgCloseBidResponse {
    return {};
  },
  toAmino(_: MsgCloseBidResponse): MsgCloseBidResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCloseBidResponseAminoMsg): MsgCloseBidResponse {
    return MsgCloseBidResponse.fromAmino(object.value);
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
    dseq: Long.UZERO,
    gseq: 0,
    oseq: 0,
    provider: ""
  };
}
export const BidID = {
  typeUrl: "/akash.market.v1beta2.BidID",
  encode(message: BidID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.dseq.isZero()) {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): BidID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBidID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.dseq = (reader.uint64() as Long);
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
      dseq: isSet(object.dseq) ? Long.fromValue(object.dseq) : Long.UZERO,
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0,
      oseq: isSet(object.oseq) ? Number(object.oseq) : 0,
      provider: isSet(object.provider) ? String(object.provider) : ""
    };
  },
  toJSON(message: BidID): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || Long.UZERO).toString());
    message.gseq !== undefined && (obj.gseq = Math.round(message.gseq));
    message.oseq !== undefined && (obj.oseq = Math.round(message.oseq));
    message.provider !== undefined && (obj.provider = message.provider);
    return obj;
  },
  fromPartial(object: DeepPartial<BidID>): BidID {
    const message = createBaseBidID();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? Long.fromValue(object.dseq) : Long.UZERO;
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
    return {
      owner: object.owner,
      dseq: Long.fromString(object.dseq),
      gseq: object.gseq,
      oseq: object.oseq,
      provider: object.provider
    };
  },
  toAmino(message: BidID): BidIDAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq ? message.dseq.toString() : undefined;
    obj.gseq = message.gseq;
    obj.oseq = message.oseq;
    obj.provider = message.provider;
    return obj;
  },
  fromAminoMsg(object: BidIDAminoMsg): BidID {
    return BidID.fromAmino(object.value);
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
    bidId: undefined,
    state: 0,
    price: undefined,
    createdAt: Long.ZERO
  };
}
export const Bid = {
  typeUrl: "/akash.market.v1beta2.Bid",
  encode(message: Bid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidId !== undefined) {
      BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    if (!message.createdAt.isZero()) {
      writer.uint32(32).int64(message.createdAt);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Bid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.createdAt = (reader.int64() as Long);
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
      state: isSet(object.state) ? bid_StateFromJSON(object.state) : 0,
      price: isSet(object.price) ? DecCoin.fromJSON(object.price) : undefined,
      createdAt: isSet(object.createdAt) ? Long.fromValue(object.createdAt) : Long.ZERO
    };
  },
  toJSON(message: Bid): unknown {
    const obj: any = {};
    message.bidId !== undefined && (obj.bidId = message.bidId ? BidID.toJSON(message.bidId) : undefined);
    message.state !== undefined && (obj.state = bid_StateToJSON(message.state));
    message.price !== undefined && (obj.price = message.price ? DecCoin.toJSON(message.price) : undefined);
    message.createdAt !== undefined && (obj.createdAt = (message.createdAt || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Bid>): Bid {
    const message = createBaseBid();
    message.bidId = object.bidId !== undefined && object.bidId !== null ? BidID.fromPartial(object.bidId) : undefined;
    message.state = object.state ?? 0;
    message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Long.fromValue(object.createdAt) : Long.ZERO;
    return message;
  },
  fromSDK(object: BidSDKType): Bid {
    return {
      bidId: object.bid_id ? BidID.fromSDK(object.bid_id) : undefined,
      state: isSet(object.state) ? bid_StateFromJSON(object.state) : 0,
      price: object.price ? DecCoin.fromSDK(object.price) : undefined,
      createdAt: object?.created_at
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
    return {
      bidId: object?.bid_id ? BidID.fromAmino(object.bid_id) : undefined,
      state: isSet(object.state) ? bid_StateFromJSON(object.state) : 0,
      price: object?.price ? DecCoin.fromAmino(object.price) : undefined,
      createdAt: Long.fromString(object.created_at)
    };
  },
  toAmino(message: Bid): BidAmino {
    const obj: any = {};
    obj.bid_id = message.bidId ? BidID.toAmino(message.bidId) : undefined;
    obj.state = message.state;
    obj.price = message.price ? DecCoin.toAmino(message.price) : undefined;
    obj.created_at = message.createdAt ? message.createdAt.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: BidAminoMsg): Bid {
    return Bid.fromAmino(object.value);
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
    dseq: Long.UZERO,
    gseq: 0,
    oseq: 0,
    provider: "",
    state: ""
  };
}
export const BidFilters = {
  typeUrl: "/akash.market.v1beta2.BidFilters",
  encode(message: BidFilters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.dseq.isZero()) {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): BidFilters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBidFilters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.dseq = (reader.uint64() as Long);
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
      dseq: isSet(object.dseq) ? Long.fromValue(object.dseq) : Long.UZERO,
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0,
      oseq: isSet(object.oseq) ? Number(object.oseq) : 0,
      provider: isSet(object.provider) ? String(object.provider) : "",
      state: isSet(object.state) ? String(object.state) : ""
    };
  },
  toJSON(message: BidFilters): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || Long.UZERO).toString());
    message.gseq !== undefined && (obj.gseq = Math.round(message.gseq));
    message.oseq !== undefined && (obj.oseq = Math.round(message.oseq));
    message.provider !== undefined && (obj.provider = message.provider);
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },
  fromPartial(object: DeepPartial<BidFilters>): BidFilters {
    const message = createBaseBidFilters();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? Long.fromValue(object.dseq) : Long.UZERO;
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
    return {
      owner: object.owner,
      dseq: Long.fromString(object.dseq),
      gseq: object.gseq,
      oseq: object.oseq,
      provider: object.provider,
      state: object.state
    };
  },
  toAmino(message: BidFilters): BidFiltersAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq ? message.dseq.toString() : undefined;
    obj.gseq = message.gseq;
    obj.oseq = message.oseq;
    obj.provider = message.provider;
    obj.state = message.state;
    return obj;
  },
  fromAminoMsg(object: BidFiltersAminoMsg): BidFilters {
    return BidFilters.fromAmino(object.value);
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