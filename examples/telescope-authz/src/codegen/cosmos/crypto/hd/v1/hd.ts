import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "cosmos.crypto.hd.v1";
/** BIP44Params is used as path field in ledger item in Record. */
export interface BIP44Params {
  /** purpose is a constant set to 44' (or 0x8000002C) following the BIP43 recommendation */
  purpose: number;
  /** coin_type is a constant that improves privacy */
  coinType: number;
  /** account splits the key space into independent user identities */
  account: number;
  /**
   * change is a constant used for public derivation. Constant 0 is used for external chain and constant 1 for internal
   * chain.
   */
  change: boolean;
  /** address_index is used as child index in BIP32 derivation */
  addressIndex: number;
}
export interface BIP44ParamsProtoMsg {
  typeUrl: "/cosmos.crypto.hd.v1.BIP44Params";
  value: Uint8Array;
}
/** BIP44Params is used as path field in ledger item in Record. */
export interface BIP44ParamsAmino {
  /** purpose is a constant set to 44' (or 0x8000002C) following the BIP43 recommendation */
  purpose?: number;
  /** coin_type is a constant that improves privacy */
  coin_type?: number;
  /** account splits the key space into independent user identities */
  account?: number;
  /**
   * change is a constant used for public derivation. Constant 0 is used for external chain and constant 1 for internal
   * chain.
   */
  change?: boolean;
  /** address_index is used as child index in BIP32 derivation */
  address_index?: number;
}
export interface BIP44ParamsAminoMsg {
  type: "cosmos-sdk/BIP44Params";
  value: BIP44ParamsAmino;
}
/** BIP44Params is used as path field in ledger item in Record. */
export interface BIP44ParamsSDKType {
  purpose: number;
  coin_type: number;
  account: number;
  change: boolean;
  address_index: number;
}
function createBaseBIP44Params(): BIP44Params {
  return {
    purpose: 0,
    coinType: 0,
    account: 0,
    change: false,
    addressIndex: 0
  };
}
export const BIP44Params = {
  typeUrl: "/cosmos.crypto.hd.v1.BIP44Params",
  aminoType: "cosmos-sdk/BIP44Params",
  is(o: any): o is BIP44Params {
    return o && (o.$typeUrl === BIP44Params.typeUrl || typeof o.purpose === "number" && typeof o.coinType === "number" && typeof o.account === "number" && typeof o.change === "boolean" && typeof o.addressIndex === "number");
  },
  isSDK(o: any): o is BIP44ParamsSDKType {
    return o && (o.$typeUrl === BIP44Params.typeUrl || typeof o.purpose === "number" && typeof o.coin_type === "number" && typeof o.account === "number" && typeof o.change === "boolean" && typeof o.address_index === "number");
  },
  isAmino(o: any): o is BIP44ParamsAmino {
    return o && (o.$typeUrl === BIP44Params.typeUrl || typeof o.purpose === "number" && typeof o.coin_type === "number" && typeof o.account === "number" && typeof o.change === "boolean" && typeof o.address_index === "number");
  },
  encode(message: BIP44Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.purpose !== undefined) {
      writer.uint32(8).uint32(message.purpose);
    }
    if (message.coinType !== undefined) {
      writer.uint32(16).uint32(message.coinType);
    }
    if (message.account !== undefined) {
      writer.uint32(24).uint32(message.account);
    }
    if (message.change !== undefined) {
      writer.uint32(32).bool(message.change);
    }
    if (message.addressIndex !== undefined) {
      writer.uint32(40).uint32(message.addressIndex);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BIP44Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBIP44Params();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.purpose = reader.uint32();
          break;
        case 2:
          message.coinType = reader.uint32();
          break;
        case 3:
          message.account = reader.uint32();
          break;
        case 4:
          message.change = reader.bool();
          break;
        case 5:
          message.addressIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BIP44Params {
    const obj = createBaseBIP44Params();
    if (isSet(object.purpose)) obj.purpose = Number(object.purpose);
    if (isSet(object.coinType)) obj.coinType = Number(object.coinType);
    if (isSet(object.account)) obj.account = Number(object.account);
    if (isSet(object.change)) obj.change = Boolean(object.change);
    if (isSet(object.addressIndex)) obj.addressIndex = Number(object.addressIndex);
    return obj;
  },
  toJSON(message: BIP44Params): unknown {
    const obj: any = {};
    message.purpose !== undefined && (obj.purpose = Math.round(message.purpose));
    message.coinType !== undefined && (obj.coinType = Math.round(message.coinType));
    message.account !== undefined && (obj.account = Math.round(message.account));
    message.change !== undefined && (obj.change = message.change);
    message.addressIndex !== undefined && (obj.addressIndex = Math.round(message.addressIndex));
    return obj;
  },
  fromPartial(object: DeepPartial<BIP44Params>): BIP44Params {
    const message = createBaseBIP44Params();
    message.purpose = object.purpose ?? 0;
    message.coinType = object.coinType ?? 0;
    message.account = object.account ?? 0;
    message.change = object.change ?? false;
    message.addressIndex = object.addressIndex ?? 0;
    return message;
  },
  fromSDK(object: BIP44ParamsSDKType): BIP44Params {
    return {
      purpose: object?.purpose,
      coinType: object?.coin_type,
      account: object?.account,
      change: object?.change,
      addressIndex: object?.address_index
    };
  },
  toSDK(message: BIP44Params): BIP44ParamsSDKType {
    const obj: any = {};
    obj.purpose = message.purpose;
    obj.coin_type = message.coinType;
    obj.account = message.account;
    obj.change = message.change;
    obj.address_index = message.addressIndex;
    return obj;
  },
  fromAmino(object: BIP44ParamsAmino): BIP44Params {
    const message = createBaseBIP44Params();
    if (object.purpose !== undefined && object.purpose !== null) {
      message.purpose = object.purpose;
    }
    if (object.coin_type !== undefined && object.coin_type !== null) {
      message.coinType = object.coin_type;
    }
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    }
    if (object.change !== undefined && object.change !== null) {
      message.change = object.change;
    }
    if (object.address_index !== undefined && object.address_index !== null) {
      message.addressIndex = object.address_index;
    }
    return message;
  },
  toAmino(message: BIP44Params): BIP44ParamsAmino {
    const obj: any = {};
    obj.purpose = message.purpose;
    obj.coin_type = message.coinType;
    obj.account = message.account;
    obj.change = message.change;
    obj.address_index = message.addressIndex;
    return obj;
  },
  fromAminoMsg(object: BIP44ParamsAminoMsg): BIP44Params {
    return BIP44Params.fromAmino(object.value);
  },
  toAminoMsg(message: BIP44Params): BIP44ParamsAminoMsg {
    return {
      type: "cosmos-sdk/BIP44Params",
      value: BIP44Params.toAmino(message)
    };
  },
  fromProtoMsg(message: BIP44ParamsProtoMsg): BIP44Params {
    return BIP44Params.decode(message.value);
  },
  toProto(message: BIP44Params): Uint8Array {
    return BIP44Params.encode(message).finish();
  },
  toProtoMsg(message: BIP44Params): BIP44ParamsProtoMsg {
    return {
      typeUrl: "/cosmos.crypto.hd.v1.BIP44Params",
      value: BIP44Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BIP44Params.typeUrl, BIP44Params);
GlobalDecoderRegistry.registerAminoProtoMapping(BIP44Params.aminoType, BIP44Params.typeUrl);