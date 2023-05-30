import { Order, OrderAmino, OrderSDKType } from "./order";
import { Lease, LeaseAmino, LeaseSDKType } from "./lease";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.market.v1beta2";
/** GenesisState defines the basic genesis state used by market module */
export interface GenesisState {
  orders: Order[];
  leases: Lease[];
  params?: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/akash.market.v1beta2.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the basic genesis state used by market module */
export interface GenesisStateAmino {
  orders: OrderAmino[];
  leases: LeaseAmino[];
  params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/akash.market.v1beta2.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the basic genesis state used by market module */
export interface GenesisStateSDKType {
  orders: OrderSDKType[];
  leases: LeaseSDKType[];
  params?: ParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    orders: [],
    leases: [],
    params: undefined
  };
}
export const GenesisState = {
  typeUrl: "/akash.market.v1beta2.GenesisState",
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.leases) {
      Lease.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;
        case 2:
          message.leases.push(Lease.decode(reader, reader.uint32()));
          break;
        case 3:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromJSON(e)) : [],
      leases: Array.isArray(object?.leases) ? object.leases.map((e: any) => Lease.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? Order.toJSON(e) : undefined);
    } else {
      obj.orders = [];
    }
    if (message.leases) {
      obj.leases = message.leases.map(e => e ? Lease.toJSON(e) : undefined);
    } else {
      obj.leases = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.orders = object.orders?.map(e => Order.fromPartial(e)) || [];
    message.leases = object.leases?.map(e => Lease.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromSDK(e)) : [],
      leases: Array.isArray(object?.leases) ? object.leases.map((e: any) => Lease.fromSDK(e)) : [],
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? Order.toSDK(e) : undefined);
    } else {
      obj.orders = [];
    }
    if (message.leases) {
      obj.leases = message.leases.map(e => e ? Lease.toSDK(e) : undefined);
    } else {
      obj.leases = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromAmino(e)) : [],
      leases: Array.isArray(object?.leases) ? object.leases.map((e: any) => Lease.fromAmino(e)) : [],
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? Order.toAmino(e) : undefined);
    } else {
      obj.orders = [];
    }
    if (message.leases) {
      obj.leases = message.leases.map(e => e ? Lease.toAmino(e) : undefined);
    } else {
      obj.leases = [];
    }
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta2.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};