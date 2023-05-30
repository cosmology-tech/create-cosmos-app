import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BidID, BidIDAmino, BidIDSDKType } from "./bid";
import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "akash.market.v1beta2";
/** State is an enum which refers to state of lease */
export enum Lease_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,
  /** active - LeaseActive denotes state for lease active */
  active = 1,
  /** insufficient_funds - LeaseInsufficientFunds denotes state for lease insufficient_funds */
  insufficient_funds = 2,
  /** closed - LeaseClosed denotes state for lease closed */
  closed = 3,
  UNRECOGNIZED = -1,
}
export const Lease_StateSDKType = Lease_State;
export const Lease_StateAmino = Lease_State;
export function lease_StateFromJSON(object: any): Lease_State {
  switch (object) {
    case 0:
    case "invalid":
      return Lease_State.invalid;
    case 1:
    case "active":
      return Lease_State.active;
    case 2:
    case "insufficient_funds":
      return Lease_State.insufficient_funds;
    case 3:
    case "closed":
      return Lease_State.closed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Lease_State.UNRECOGNIZED;
  }
}
export function lease_StateToJSON(object: Lease_State): string {
  switch (object) {
    case Lease_State.invalid:
      return "invalid";
    case Lease_State.active:
      return "active";
    case Lease_State.insufficient_funds:
      return "insufficient_funds";
    case Lease_State.closed:
      return "closed";
    case Lease_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** LeaseID stores bid details of lease */
export interface LeaseID {
  owner: string;
  dseq: Long;
  gseq: number;
  oseq: number;
  provider: string;
}
export interface LeaseIDProtoMsg {
  typeUrl: "/akash.market.v1beta2.LeaseID";
  value: Uint8Array;
}
/** LeaseID stores bid details of lease */
export interface LeaseIDAmino {
  owner: string;
  dseq: string;
  gseq: number;
  oseq: number;
  provider: string;
}
export interface LeaseIDAminoMsg {
  type: "/akash.market.v1beta2.LeaseID";
  value: LeaseIDAmino;
}
/** LeaseID stores bid details of lease */
export interface LeaseIDSDKType {
  owner: string;
  dseq: Long;
  gseq: number;
  oseq: number;
  provider: string;
}
/** Lease stores LeaseID, state of lease and price */
export interface Lease {
  leaseId?: LeaseID;
  state: Lease_State;
  price?: DecCoin;
  createdAt: Long;
  closedOn: Long;
}
export interface LeaseProtoMsg {
  typeUrl: "/akash.market.v1beta2.Lease";
  value: Uint8Array;
}
/** Lease stores LeaseID, state of lease and price */
export interface LeaseAmino {
  lease_id?: LeaseIDAmino;
  state: Lease_State;
  price?: DecCoinAmino;
  created_at: string;
  closed_on: string;
}
export interface LeaseAminoMsg {
  type: "/akash.market.v1beta2.Lease";
  value: LeaseAmino;
}
/** Lease stores LeaseID, state of lease and price */
export interface LeaseSDKType {
  lease_id?: LeaseIDSDKType;
  state: Lease_State;
  price?: DecCoinSDKType;
  created_at: Long;
  closed_on: Long;
}
/** LeaseFilters defines flags for lease list filter */
export interface LeaseFilters {
  owner: string;
  dseq: Long;
  gseq: number;
  oseq: number;
  provider: string;
  state: string;
}
export interface LeaseFiltersProtoMsg {
  typeUrl: "/akash.market.v1beta2.LeaseFilters";
  value: Uint8Array;
}
/** LeaseFilters defines flags for lease list filter */
export interface LeaseFiltersAmino {
  owner: string;
  dseq: string;
  gseq: number;
  oseq: number;
  provider: string;
  state: string;
}
export interface LeaseFiltersAminoMsg {
  type: "/akash.market.v1beta2.LeaseFilters";
  value: LeaseFiltersAmino;
}
/** LeaseFilters defines flags for lease list filter */
export interface LeaseFiltersSDKType {
  owner: string;
  dseq: Long;
  gseq: number;
  oseq: number;
  provider: string;
  state: string;
}
/** MsgCreateLease is sent to create a lease */
export interface MsgCreateLease {
  bidId?: BidID;
}
export interface MsgCreateLeaseProtoMsg {
  typeUrl: "/akash.market.v1beta2.MsgCreateLease";
  value: Uint8Array;
}
/** MsgCreateLease is sent to create a lease */
export interface MsgCreateLeaseAmino {
  bid_id?: BidIDAmino;
}
export interface MsgCreateLeaseAminoMsg {
  type: "/akash.market.v1beta2.MsgCreateLease";
  value: MsgCreateLeaseAmino;
}
/** MsgCreateLease is sent to create a lease */
export interface MsgCreateLeaseSDKType {
  bid_id?: BidIDSDKType;
}
/** MsgCreateLeaseResponse is the response from creating a lease */
export interface MsgCreateLeaseResponse {}
export interface MsgCreateLeaseResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.MsgCreateLeaseResponse";
  value: Uint8Array;
}
/** MsgCreateLeaseResponse is the response from creating a lease */
export interface MsgCreateLeaseResponseAmino {}
export interface MsgCreateLeaseResponseAminoMsg {
  type: "/akash.market.v1beta2.MsgCreateLeaseResponse";
  value: MsgCreateLeaseResponseAmino;
}
/** MsgCreateLeaseResponse is the response from creating a lease */
export interface MsgCreateLeaseResponseSDKType {}
/** MsgWithdrawLease defines an SDK message for closing bid */
export interface MsgWithdrawLease {
  bidId?: LeaseID;
}
export interface MsgWithdrawLeaseProtoMsg {
  typeUrl: "/akash.market.v1beta2.MsgWithdrawLease";
  value: Uint8Array;
}
/** MsgWithdrawLease defines an SDK message for closing bid */
export interface MsgWithdrawLeaseAmino {
  bid_id?: LeaseIDAmino;
}
export interface MsgWithdrawLeaseAminoMsg {
  type: "/akash.market.v1beta2.MsgWithdrawLease";
  value: MsgWithdrawLeaseAmino;
}
/** MsgWithdrawLease defines an SDK message for closing bid */
export interface MsgWithdrawLeaseSDKType {
  bid_id?: LeaseIDSDKType;
}
/** MsgWithdrawLeaseResponse defines the Msg/WithdrawLease response type. */
export interface MsgWithdrawLeaseResponse {}
export interface MsgWithdrawLeaseResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.MsgWithdrawLeaseResponse";
  value: Uint8Array;
}
/** MsgWithdrawLeaseResponse defines the Msg/WithdrawLease response type. */
export interface MsgWithdrawLeaseResponseAmino {}
export interface MsgWithdrawLeaseResponseAminoMsg {
  type: "/akash.market.v1beta2.MsgWithdrawLeaseResponse";
  value: MsgWithdrawLeaseResponseAmino;
}
/** MsgWithdrawLeaseResponse defines the Msg/WithdrawLease response type. */
export interface MsgWithdrawLeaseResponseSDKType {}
/** MsgCloseLease defines an SDK message for closing order */
export interface MsgCloseLease {
  leaseId?: LeaseID;
}
export interface MsgCloseLeaseProtoMsg {
  typeUrl: "/akash.market.v1beta2.MsgCloseLease";
  value: Uint8Array;
}
/** MsgCloseLease defines an SDK message for closing order */
export interface MsgCloseLeaseAmino {
  lease_id?: LeaseIDAmino;
}
export interface MsgCloseLeaseAminoMsg {
  type: "/akash.market.v1beta2.MsgCloseLease";
  value: MsgCloseLeaseAmino;
}
/** MsgCloseLease defines an SDK message for closing order */
export interface MsgCloseLeaseSDKType {
  lease_id?: LeaseIDSDKType;
}
/** MsgCloseLeaseResponse defines the Msg/CloseLease response type. */
export interface MsgCloseLeaseResponse {}
export interface MsgCloseLeaseResponseProtoMsg {
  typeUrl: "/akash.market.v1beta2.MsgCloseLeaseResponse";
  value: Uint8Array;
}
/** MsgCloseLeaseResponse defines the Msg/CloseLease response type. */
export interface MsgCloseLeaseResponseAmino {}
export interface MsgCloseLeaseResponseAminoMsg {
  type: "/akash.market.v1beta2.MsgCloseLeaseResponse";
  value: MsgCloseLeaseResponseAmino;
}
/** MsgCloseLeaseResponse defines the Msg/CloseLease response type. */
export interface MsgCloseLeaseResponseSDKType {}
function createBaseLeaseID(): LeaseID {
  return {
    owner: "",
    dseq: Long.UZERO,
    gseq: 0,
    oseq: 0,
    provider: ""
  };
}
export const LeaseID = {
  typeUrl: "/akash.market.v1beta2.LeaseID",
  encode(message: LeaseID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): LeaseID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeaseID();
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
  fromJSON(object: any): LeaseID {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? Long.fromValue(object.dseq) : Long.UZERO,
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0,
      oseq: isSet(object.oseq) ? Number(object.oseq) : 0,
      provider: isSet(object.provider) ? String(object.provider) : ""
    };
  },
  toJSON(message: LeaseID): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || Long.UZERO).toString());
    message.gseq !== undefined && (obj.gseq = Math.round(message.gseq));
    message.oseq !== undefined && (obj.oseq = Math.round(message.oseq));
    message.provider !== undefined && (obj.provider = message.provider);
    return obj;
  },
  fromPartial(object: DeepPartial<LeaseID>): LeaseID {
    const message = createBaseLeaseID();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? Long.fromValue(object.dseq) : Long.UZERO;
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    message.provider = object.provider ?? "";
    return message;
  },
  fromSDK(object: LeaseIDSDKType): LeaseID {
    return {
      owner: object?.owner,
      dseq: object?.dseq,
      gseq: object?.gseq,
      oseq: object?.oseq,
      provider: object?.provider
    };
  },
  toSDK(message: LeaseID): LeaseIDSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq;
    obj.gseq = message.gseq;
    obj.oseq = message.oseq;
    obj.provider = message.provider;
    return obj;
  },
  fromAmino(object: LeaseIDAmino): LeaseID {
    return {
      owner: object.owner,
      dseq: Long.fromString(object.dseq),
      gseq: object.gseq,
      oseq: object.oseq,
      provider: object.provider
    };
  },
  toAmino(message: LeaseID): LeaseIDAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq ? message.dseq.toString() : undefined;
    obj.gseq = message.gseq;
    obj.oseq = message.oseq;
    obj.provider = message.provider;
    return obj;
  },
  fromAminoMsg(object: LeaseIDAminoMsg): LeaseID {
    return LeaseID.fromAmino(object.value);
  },
  fromProtoMsg(message: LeaseIDProtoMsg): LeaseID {
    return LeaseID.decode(message.value);
  },
  toProto(message: LeaseID): Uint8Array {
    return LeaseID.encode(message).finish();
  },
  toProtoMsg(message: LeaseID): LeaseIDProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.LeaseID",
      value: LeaseID.encode(message).finish()
    };
  }
};
function createBaseLease(): Lease {
  return {
    leaseId: undefined,
    state: 0,
    price: undefined,
    createdAt: Long.ZERO,
    closedOn: Long.ZERO
  };
}
export const Lease = {
  typeUrl: "/akash.market.v1beta2.Lease",
  encode(message: Lease, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leaseId !== undefined) {
      LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
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
    if (!message.closedOn.isZero()) {
      writer.uint32(40).int64(message.closedOn);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Lease {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLease();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leaseId = LeaseID.decode(reader, reader.uint32());
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
        case 5:
          message.closedOn = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Lease {
    return {
      leaseId: isSet(object.leaseId) ? LeaseID.fromJSON(object.leaseId) : undefined,
      state: isSet(object.state) ? lease_StateFromJSON(object.state) : 0,
      price: isSet(object.price) ? DecCoin.fromJSON(object.price) : undefined,
      createdAt: isSet(object.createdAt) ? Long.fromValue(object.createdAt) : Long.ZERO,
      closedOn: isSet(object.closedOn) ? Long.fromValue(object.closedOn) : Long.ZERO
    };
  },
  toJSON(message: Lease): unknown {
    const obj: any = {};
    message.leaseId !== undefined && (obj.leaseId = message.leaseId ? LeaseID.toJSON(message.leaseId) : undefined);
    message.state !== undefined && (obj.state = lease_StateToJSON(message.state));
    message.price !== undefined && (obj.price = message.price ? DecCoin.toJSON(message.price) : undefined);
    message.createdAt !== undefined && (obj.createdAt = (message.createdAt || Long.ZERO).toString());
    message.closedOn !== undefined && (obj.closedOn = (message.closedOn || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Lease>): Lease {
    const message = createBaseLease();
    message.leaseId = object.leaseId !== undefined && object.leaseId !== null ? LeaseID.fromPartial(object.leaseId) : undefined;
    message.state = object.state ?? 0;
    message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Long.fromValue(object.createdAt) : Long.ZERO;
    message.closedOn = object.closedOn !== undefined && object.closedOn !== null ? Long.fromValue(object.closedOn) : Long.ZERO;
    return message;
  },
  fromSDK(object: LeaseSDKType): Lease {
    return {
      leaseId: object.lease_id ? LeaseID.fromSDK(object.lease_id) : undefined,
      state: isSet(object.state) ? lease_StateFromJSON(object.state) : 0,
      price: object.price ? DecCoin.fromSDK(object.price) : undefined,
      createdAt: object?.created_at,
      closedOn: object?.closed_on
    };
  },
  toSDK(message: Lease): LeaseSDKType {
    const obj: any = {};
    message.leaseId !== undefined && (obj.lease_id = message.leaseId ? LeaseID.toSDK(message.leaseId) : undefined);
    message.state !== undefined && (obj.state = lease_StateToJSON(message.state));
    message.price !== undefined && (obj.price = message.price ? DecCoin.toSDK(message.price) : undefined);
    obj.created_at = message.createdAt;
    obj.closed_on = message.closedOn;
    return obj;
  },
  fromAmino(object: LeaseAmino): Lease {
    return {
      leaseId: object?.lease_id ? LeaseID.fromAmino(object.lease_id) : undefined,
      state: isSet(object.state) ? lease_StateFromJSON(object.state) : 0,
      price: object?.price ? DecCoin.fromAmino(object.price) : undefined,
      createdAt: Long.fromString(object.created_at),
      closedOn: Long.fromString(object.closed_on)
    };
  },
  toAmino(message: Lease): LeaseAmino {
    const obj: any = {};
    obj.lease_id = message.leaseId ? LeaseID.toAmino(message.leaseId) : undefined;
    obj.state = message.state;
    obj.price = message.price ? DecCoin.toAmino(message.price) : undefined;
    obj.created_at = message.createdAt ? message.createdAt.toString() : undefined;
    obj.closed_on = message.closedOn ? message.closedOn.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: LeaseAminoMsg): Lease {
    return Lease.fromAmino(object.value);
  },
  fromProtoMsg(message: LeaseProtoMsg): Lease {
    return Lease.decode(message.value);
  },
  toProto(message: Lease): Uint8Array {
    return Lease.encode(message).finish();
  },
  toProtoMsg(message: Lease): LeaseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.Lease",
      value: Lease.encode(message).finish()
    };
  }
};
function createBaseLeaseFilters(): LeaseFilters {
  return {
    owner: "",
    dseq: Long.UZERO,
    gseq: 0,
    oseq: 0,
    provider: "",
    state: ""
  };
}
export const LeaseFilters = {
  typeUrl: "/akash.market.v1beta2.LeaseFilters",
  encode(message: LeaseFilters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): LeaseFilters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeaseFilters();
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
  fromJSON(object: any): LeaseFilters {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? Long.fromValue(object.dseq) : Long.UZERO,
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0,
      oseq: isSet(object.oseq) ? Number(object.oseq) : 0,
      provider: isSet(object.provider) ? String(object.provider) : "",
      state: isSet(object.state) ? String(object.state) : ""
    };
  },
  toJSON(message: LeaseFilters): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.dseq !== undefined && (obj.dseq = (message.dseq || Long.UZERO).toString());
    message.gseq !== undefined && (obj.gseq = Math.round(message.gseq));
    message.oseq !== undefined && (obj.oseq = Math.round(message.oseq));
    message.provider !== undefined && (obj.provider = message.provider);
    message.state !== undefined && (obj.state = message.state);
    return obj;
  },
  fromPartial(object: DeepPartial<LeaseFilters>): LeaseFilters {
    const message = createBaseLeaseFilters();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? Long.fromValue(object.dseq) : Long.UZERO;
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    message.provider = object.provider ?? "";
    message.state = object.state ?? "";
    return message;
  },
  fromSDK(object: LeaseFiltersSDKType): LeaseFilters {
    return {
      owner: object?.owner,
      dseq: object?.dseq,
      gseq: object?.gseq,
      oseq: object?.oseq,
      provider: object?.provider,
      state: object?.state
    };
  },
  toSDK(message: LeaseFilters): LeaseFiltersSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq;
    obj.gseq = message.gseq;
    obj.oseq = message.oseq;
    obj.provider = message.provider;
    obj.state = message.state;
    return obj;
  },
  fromAmino(object: LeaseFiltersAmino): LeaseFilters {
    return {
      owner: object.owner,
      dseq: Long.fromString(object.dseq),
      gseq: object.gseq,
      oseq: object.oseq,
      provider: object.provider,
      state: object.state
    };
  },
  toAmino(message: LeaseFilters): LeaseFiltersAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.dseq = message.dseq ? message.dseq.toString() : undefined;
    obj.gseq = message.gseq;
    obj.oseq = message.oseq;
    obj.provider = message.provider;
    obj.state = message.state;
    return obj;
  },
  fromAminoMsg(object: LeaseFiltersAminoMsg): LeaseFilters {
    return LeaseFilters.fromAmino(object.value);
  },
  fromProtoMsg(message: LeaseFiltersProtoMsg): LeaseFilters {
    return LeaseFilters.decode(message.value);
  },
  toProto(message: LeaseFilters): Uint8Array {
    return LeaseFilters.encode(message).finish();
  },
  toProtoMsg(message: LeaseFilters): LeaseFiltersProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.LeaseFilters",
      value: LeaseFilters.encode(message).finish()
    };
  }
};
function createBaseMsgCreateLease(): MsgCreateLease {
  return {
    bidId: undefined
  };
}
export const MsgCreateLease = {
  typeUrl: "/akash.market.v1beta2.MsgCreateLease",
  encode(message: MsgCreateLease, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidId !== undefined) {
      BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateLease {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateLease();
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
  fromJSON(object: any): MsgCreateLease {
    return {
      bidId: isSet(object.bidId) ? BidID.fromJSON(object.bidId) : undefined
    };
  },
  toJSON(message: MsgCreateLease): unknown {
    const obj: any = {};
    message.bidId !== undefined && (obj.bidId = message.bidId ? BidID.toJSON(message.bidId) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateLease>): MsgCreateLease {
    const message = createBaseMsgCreateLease();
    message.bidId = object.bidId !== undefined && object.bidId !== null ? BidID.fromPartial(object.bidId) : undefined;
    return message;
  },
  fromSDK(object: MsgCreateLeaseSDKType): MsgCreateLease {
    return {
      bidId: object.bid_id ? BidID.fromSDK(object.bid_id) : undefined
    };
  },
  toSDK(message: MsgCreateLease): MsgCreateLeaseSDKType {
    const obj: any = {};
    message.bidId !== undefined && (obj.bid_id = message.bidId ? BidID.toSDK(message.bidId) : undefined);
    return obj;
  },
  fromAmino(object: MsgCreateLeaseAmino): MsgCreateLease {
    return {
      bidId: object?.bid_id ? BidID.fromAmino(object.bid_id) : undefined
    };
  },
  toAmino(message: MsgCreateLease): MsgCreateLeaseAmino {
    const obj: any = {};
    obj.bid_id = message.bidId ? BidID.toAmino(message.bidId) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateLeaseAminoMsg): MsgCreateLease {
    return MsgCreateLease.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateLeaseProtoMsg): MsgCreateLease {
    return MsgCreateLease.decode(message.value);
  },
  toProto(message: MsgCreateLease): Uint8Array {
    return MsgCreateLease.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateLease): MsgCreateLeaseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.MsgCreateLease",
      value: MsgCreateLease.encode(message).finish()
    };
  }
};
function createBaseMsgCreateLeaseResponse(): MsgCreateLeaseResponse {
  return {};
}
export const MsgCreateLeaseResponse = {
  typeUrl: "/akash.market.v1beta2.MsgCreateLeaseResponse",
  encode(_: MsgCreateLeaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateLeaseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateLeaseResponse();
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
  fromJSON(_: any): MsgCreateLeaseResponse {
    return {};
  },
  toJSON(_: MsgCreateLeaseResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgCreateLeaseResponse>): MsgCreateLeaseResponse {
    const message = createBaseMsgCreateLeaseResponse();
    return message;
  },
  fromSDK(_: MsgCreateLeaseResponseSDKType): MsgCreateLeaseResponse {
    return {};
  },
  toSDK(_: MsgCreateLeaseResponse): MsgCreateLeaseResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCreateLeaseResponseAmino): MsgCreateLeaseResponse {
    return {};
  },
  toAmino(_: MsgCreateLeaseResponse): MsgCreateLeaseResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateLeaseResponseAminoMsg): MsgCreateLeaseResponse {
    return MsgCreateLeaseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateLeaseResponseProtoMsg): MsgCreateLeaseResponse {
    return MsgCreateLeaseResponse.decode(message.value);
  },
  toProto(message: MsgCreateLeaseResponse): Uint8Array {
    return MsgCreateLeaseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateLeaseResponse): MsgCreateLeaseResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.MsgCreateLeaseResponse",
      value: MsgCreateLeaseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawLease(): MsgWithdrawLease {
  return {
    bidId: undefined
  };
}
export const MsgWithdrawLease = {
  typeUrl: "/akash.market.v1beta2.MsgWithdrawLease",
  encode(message: MsgWithdrawLease, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidId !== undefined) {
      LeaseID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawLease {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawLease();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidId = LeaseID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawLease {
    return {
      bidId: isSet(object.bidId) ? LeaseID.fromJSON(object.bidId) : undefined
    };
  },
  toJSON(message: MsgWithdrawLease): unknown {
    const obj: any = {};
    message.bidId !== undefined && (obj.bidId = message.bidId ? LeaseID.toJSON(message.bidId) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgWithdrawLease>): MsgWithdrawLease {
    const message = createBaseMsgWithdrawLease();
    message.bidId = object.bidId !== undefined && object.bidId !== null ? LeaseID.fromPartial(object.bidId) : undefined;
    return message;
  },
  fromSDK(object: MsgWithdrawLeaseSDKType): MsgWithdrawLease {
    return {
      bidId: object.bid_id ? LeaseID.fromSDK(object.bid_id) : undefined
    };
  },
  toSDK(message: MsgWithdrawLease): MsgWithdrawLeaseSDKType {
    const obj: any = {};
    message.bidId !== undefined && (obj.bid_id = message.bidId ? LeaseID.toSDK(message.bidId) : undefined);
    return obj;
  },
  fromAmino(object: MsgWithdrawLeaseAmino): MsgWithdrawLease {
    return {
      bidId: object?.bid_id ? LeaseID.fromAmino(object.bid_id) : undefined
    };
  },
  toAmino(message: MsgWithdrawLease): MsgWithdrawLeaseAmino {
    const obj: any = {};
    obj.bid_id = message.bidId ? LeaseID.toAmino(message.bidId) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawLeaseAminoMsg): MsgWithdrawLease {
    return MsgWithdrawLease.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawLeaseProtoMsg): MsgWithdrawLease {
    return MsgWithdrawLease.decode(message.value);
  },
  toProto(message: MsgWithdrawLease): Uint8Array {
    return MsgWithdrawLease.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawLease): MsgWithdrawLeaseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.MsgWithdrawLease",
      value: MsgWithdrawLease.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawLeaseResponse(): MsgWithdrawLeaseResponse {
  return {};
}
export const MsgWithdrawLeaseResponse = {
  typeUrl: "/akash.market.v1beta2.MsgWithdrawLeaseResponse",
  encode(_: MsgWithdrawLeaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawLeaseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawLeaseResponse();
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
  fromJSON(_: any): MsgWithdrawLeaseResponse {
    return {};
  },
  toJSON(_: MsgWithdrawLeaseResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgWithdrawLeaseResponse>): MsgWithdrawLeaseResponse {
    const message = createBaseMsgWithdrawLeaseResponse();
    return message;
  },
  fromSDK(_: MsgWithdrawLeaseResponseSDKType): MsgWithdrawLeaseResponse {
    return {};
  },
  toSDK(_: MsgWithdrawLeaseResponse): MsgWithdrawLeaseResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgWithdrawLeaseResponseAmino): MsgWithdrawLeaseResponse {
    return {};
  },
  toAmino(_: MsgWithdrawLeaseResponse): MsgWithdrawLeaseResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawLeaseResponseAminoMsg): MsgWithdrawLeaseResponse {
    return MsgWithdrawLeaseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgWithdrawLeaseResponseProtoMsg): MsgWithdrawLeaseResponse {
    return MsgWithdrawLeaseResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawLeaseResponse): Uint8Array {
    return MsgWithdrawLeaseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawLeaseResponse): MsgWithdrawLeaseResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.MsgWithdrawLeaseResponse",
      value: MsgWithdrawLeaseResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCloseLease(): MsgCloseLease {
  return {
    leaseId: undefined
  };
}
export const MsgCloseLease = {
  typeUrl: "/akash.market.v1beta2.MsgCloseLease",
  encode(message: MsgCloseLease, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.leaseId !== undefined) {
      LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseLease {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseLease();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leaseId = LeaseID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCloseLease {
    return {
      leaseId: isSet(object.leaseId) ? LeaseID.fromJSON(object.leaseId) : undefined
    };
  },
  toJSON(message: MsgCloseLease): unknown {
    const obj: any = {};
    message.leaseId !== undefined && (obj.leaseId = message.leaseId ? LeaseID.toJSON(message.leaseId) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCloseLease>): MsgCloseLease {
    const message = createBaseMsgCloseLease();
    message.leaseId = object.leaseId !== undefined && object.leaseId !== null ? LeaseID.fromPartial(object.leaseId) : undefined;
    return message;
  },
  fromSDK(object: MsgCloseLeaseSDKType): MsgCloseLease {
    return {
      leaseId: object.lease_id ? LeaseID.fromSDK(object.lease_id) : undefined
    };
  },
  toSDK(message: MsgCloseLease): MsgCloseLeaseSDKType {
    const obj: any = {};
    message.leaseId !== undefined && (obj.lease_id = message.leaseId ? LeaseID.toSDK(message.leaseId) : undefined);
    return obj;
  },
  fromAmino(object: MsgCloseLeaseAmino): MsgCloseLease {
    return {
      leaseId: object?.lease_id ? LeaseID.fromAmino(object.lease_id) : undefined
    };
  },
  toAmino(message: MsgCloseLease): MsgCloseLeaseAmino {
    const obj: any = {};
    obj.lease_id = message.leaseId ? LeaseID.toAmino(message.leaseId) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCloseLeaseAminoMsg): MsgCloseLease {
    return MsgCloseLease.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseLeaseProtoMsg): MsgCloseLease {
    return MsgCloseLease.decode(message.value);
  },
  toProto(message: MsgCloseLease): Uint8Array {
    return MsgCloseLease.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseLease): MsgCloseLeaseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.MsgCloseLease",
      value: MsgCloseLease.encode(message).finish()
    };
  }
};
function createBaseMsgCloseLeaseResponse(): MsgCloseLeaseResponse {
  return {};
}
export const MsgCloseLeaseResponse = {
  typeUrl: "/akash.market.v1beta2.MsgCloseLeaseResponse",
  encode(_: MsgCloseLeaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCloseLeaseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseLeaseResponse();
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
  fromJSON(_: any): MsgCloseLeaseResponse {
    return {};
  },
  toJSON(_: MsgCloseLeaseResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgCloseLeaseResponse>): MsgCloseLeaseResponse {
    const message = createBaseMsgCloseLeaseResponse();
    return message;
  },
  fromSDK(_: MsgCloseLeaseResponseSDKType): MsgCloseLeaseResponse {
    return {};
  },
  toSDK(_: MsgCloseLeaseResponse): MsgCloseLeaseResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgCloseLeaseResponseAmino): MsgCloseLeaseResponse {
    return {};
  },
  toAmino(_: MsgCloseLeaseResponse): MsgCloseLeaseResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCloseLeaseResponseAminoMsg): MsgCloseLeaseResponse {
    return MsgCloseLeaseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseLeaseResponseProtoMsg): MsgCloseLeaseResponse {
    return MsgCloseLeaseResponse.decode(message.value);
  },
  toProto(message: MsgCloseLeaseResponse): Uint8Array {
    return MsgCloseLeaseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseLeaseResponse): MsgCloseLeaseResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.MsgCloseLeaseResponse",
      value: MsgCloseLeaseResponse.encode(message).finish()
    };
  }
};