import { ResourceUnits, ResourceUnitsAmino, ResourceUnitsSDKType } from "../../base/v1beta2/resourceunits";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.deployment.v1beta2";
/** Resource stores unit, total count and price of resource */
export interface Resource {
  resources?: ResourceUnits;
  count: number;
  price?: DecCoin;
}
export interface ResourceProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.Resource";
  value: Uint8Array;
}
/** Resource stores unit, total count and price of resource */
export interface ResourceAmino {
  resources?: ResourceUnitsAmino;
  count: number;
  price?: DecCoinAmino;
}
export interface ResourceAminoMsg {
  type: "/akash.deployment.v1beta2.Resource";
  value: ResourceAmino;
}
/** Resource stores unit, total count and price of resource */
export interface ResourceSDKType {
  resources?: ResourceUnitsSDKType;
  count: number;
  price?: DecCoinSDKType;
}
function createBaseResource(): Resource {
  return {
    resources: undefined,
    count: 0,
    price: undefined
  };
}
export const Resource = {
  typeUrl: "/akash.deployment.v1beta2.Resource",
  encode(message: Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resources !== undefined) {
      ResourceUnits.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resources = ResourceUnits.decode(reader, reader.uint32());
          break;
        case 2:
          message.count = reader.uint32();
          break;
        case 3:
          message.price = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Resource {
    return {
      resources: isSet(object.resources) ? ResourceUnits.fromJSON(object.resources) : undefined,
      count: isSet(object.count) ? Number(object.count) : 0,
      price: isSet(object.price) ? DecCoin.fromJSON(object.price) : undefined
    };
  },
  toJSON(message: Resource): unknown {
    const obj: any = {};
    message.resources !== undefined && (obj.resources = message.resources ? ResourceUnits.toJSON(message.resources) : undefined);
    message.count !== undefined && (obj.count = Math.round(message.count));
    message.price !== undefined && (obj.price = message.price ? DecCoin.toJSON(message.price) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Resource>): Resource {
    const message = createBaseResource();
    message.resources = object.resources !== undefined && object.resources !== null ? ResourceUnits.fromPartial(object.resources) : undefined;
    message.count = object.count ?? 0;
    message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
    return message;
  },
  fromSDK(object: ResourceSDKType): Resource {
    return {
      resources: object.resources ? ResourceUnits.fromSDK(object.resources) : undefined,
      count: object?.count,
      price: object.price ? DecCoin.fromSDK(object.price) : undefined
    };
  },
  toSDK(message: Resource): ResourceSDKType {
    const obj: any = {};
    message.resources !== undefined && (obj.resources = message.resources ? ResourceUnits.toSDK(message.resources) : undefined);
    obj.count = message.count;
    message.price !== undefined && (obj.price = message.price ? DecCoin.toSDK(message.price) : undefined);
    return obj;
  },
  fromAmino(object: ResourceAmino): Resource {
    return {
      resources: object?.resources ? ResourceUnits.fromAmino(object.resources) : undefined,
      count: object.count,
      price: object?.price ? DecCoin.fromAmino(object.price) : undefined
    };
  },
  toAmino(message: Resource): ResourceAmino {
    const obj: any = {};
    obj.resources = message.resources ? ResourceUnits.toAmino(message.resources) : undefined;
    obj.count = message.count;
    obj.price = message.price ? DecCoin.toAmino(message.price) : undefined;
    return obj;
  },
  fromAminoMsg(object: ResourceAminoMsg): Resource {
    return Resource.fromAmino(object.value);
  },
  fromProtoMsg(message: ResourceProtoMsg): Resource {
    return Resource.decode(message.value);
  },
  toProto(message: Resource): Uint8Array {
    return Resource.encode(message).finish();
  },
  toProtoMsg(message: Resource): ResourceProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.Resource",
      value: Resource.encode(message).finish()
    };
  }
};