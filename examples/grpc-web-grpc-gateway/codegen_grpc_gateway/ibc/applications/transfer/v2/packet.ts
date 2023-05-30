import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../../helpers";
export const protobufPackage = "ibc.applications.transfer.v2";
/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketData {
  /** the token denomination to be transferred */
  denom: string;
  /** the token amount to be transferred */
  amount: string;
  /** the sender address */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
}
export interface FungibleTokenPacketDataProtoMsg {
  typeUrl: "/ibc.applications.transfer.v2.FungibleTokenPacketData";
  value: Uint8Array;
}
/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketDataAmino {
  /** the token denomination to be transferred */
  denom: string;
  /** the token amount to be transferred */
  amount: string;
  /** the sender address */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
}
export interface FungibleTokenPacketDataAminoMsg {
  type: "cosmos-sdk/FungibleTokenPacketData";
  value: FungibleTokenPacketDataAmino;
}
/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface FungibleTokenPacketDataSDKType {
  denom: string;
  amount: string;
  sender: string;
  receiver: string;
}
function createBaseFungibleTokenPacketData(): FungibleTokenPacketData {
  return {
    denom: "",
    amount: "",
    sender: "",
    receiver: ""
  };
}
export const FungibleTokenPacketData = {
  typeUrl: "/ibc.applications.transfer.v2.FungibleTokenPacketData",
  aminoType: "cosmos-sdk/FungibleTokenPacketData",
  encode(message: FungibleTokenPacketData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): FungibleTokenPacketData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFungibleTokenPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        case 4:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FungibleTokenPacketData {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : ""
    };
  },
  toJSON(message: FungibleTokenPacketData): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.amount !== undefined && (obj.amount = message.amount);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },
  fromPartial(object: DeepPartial<FungibleTokenPacketData>): FungibleTokenPacketData {
    const message = createBaseFungibleTokenPacketData();
    message.denom = object.denom ?? "";
    message.amount = object.amount ?? "";
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    return message;
  },
  fromSDK(object: FungibleTokenPacketDataSDKType): FungibleTokenPacketData {
    return {
      denom: object?.denom,
      amount: object?.amount,
      sender: object?.sender,
      receiver: object?.receiver
    };
  },
  toSDK(message: FungibleTokenPacketData): FungibleTokenPacketDataSDKType {
    const obj: any = {};
    obj.denom = message.denom;
    obj.amount = message.amount;
    obj.sender = message.sender;
    obj.receiver = message.receiver;
    return obj;
  },
  fromAmino(object: FungibleTokenPacketDataAmino): FungibleTokenPacketData {
    return {
      denom: object.denom,
      amount: object.amount,
      sender: object.sender,
      receiver: object.receiver
    };
  },
  toAmino(message: FungibleTokenPacketData): FungibleTokenPacketDataAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.amount = message.amount;
    obj.sender = message.sender;
    obj.receiver = message.receiver;
    return obj;
  },
  fromAminoMsg(object: FungibleTokenPacketDataAminoMsg): FungibleTokenPacketData {
    return FungibleTokenPacketData.fromAmino(object.value);
  },
  toAminoMsg(message: FungibleTokenPacketData): FungibleTokenPacketDataAminoMsg {
    return {
      type: "cosmos-sdk/FungibleTokenPacketData",
      value: FungibleTokenPacketData.toAmino(message)
    };
  },
  fromProtoMsg(message: FungibleTokenPacketDataProtoMsg): FungibleTokenPacketData {
    return FungibleTokenPacketData.decode(message.value);
  },
  toProto(message: FungibleTokenPacketData): Uint8Array {
    return FungibleTokenPacketData.encode(message).finish();
  },
  toProtoMsg(message: FungibleTokenPacketData): FungibleTokenPacketDataProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v2.FungibleTokenPacketData",
      value: FungibleTokenPacketData.encode(message).finish()
    };
  }
};