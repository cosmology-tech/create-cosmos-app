import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgVerifyInvariant represents a message to verify a particular invariance. */
export interface MsgVerifyInvariant {
  sender: string;
  invariantModuleName: string;
  invariantRoute: string;
}
/** MsgVerifyInvariant represents a message to verify a particular invariance. */
export interface MsgVerifyInvariantSDKType {
  sender: string;
  invariant_module_name: string;
  invariant_route: string;
}
/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */
export interface MsgVerifyInvariantResponse {}
/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */
export interface MsgVerifyInvariantResponseSDKType {}
function createBaseMsgVerifyInvariant(): MsgVerifyInvariant {
  return {
    sender: "",
    invariantModuleName: "",
    invariantRoute: ""
  };
}
export const MsgVerifyInvariant = {
  encode(message: MsgVerifyInvariant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.invariantModuleName !== "") {
      writer.uint32(18).string(message.invariantModuleName);
    }
    if (message.invariantRoute !== "") {
      writer.uint32(26).string(message.invariantRoute);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVerifyInvariant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVerifyInvariant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.invariantModuleName = reader.string();
          break;
        case 3:
          message.invariantRoute = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgVerifyInvariant {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      invariantModuleName: isSet(object.invariantModuleName) ? String(object.invariantModuleName) : "",
      invariantRoute: isSet(object.invariantRoute) ? String(object.invariantRoute) : ""
    };
  },
  toJSON(message: MsgVerifyInvariant): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.invariantModuleName !== undefined && (obj.invariantModuleName = message.invariantModuleName);
    message.invariantRoute !== undefined && (obj.invariantRoute = message.invariantRoute);
    return obj;
  },
  fromPartial(object: Partial<MsgVerifyInvariant>): MsgVerifyInvariant {
    const message = createBaseMsgVerifyInvariant();
    message.sender = object.sender ?? "";
    message.invariantModuleName = object.invariantModuleName ?? "";
    message.invariantRoute = object.invariantRoute ?? "";
    return message;
  }
};
function createBaseMsgVerifyInvariantResponse(): MsgVerifyInvariantResponse {
  return {};
}
export const MsgVerifyInvariantResponse = {
  encode(_: MsgVerifyInvariantResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVerifyInvariantResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVerifyInvariantResponse();
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
  fromJSON(_: any): MsgVerifyInvariantResponse {
    return {};
  },
  toJSON(_: MsgVerifyInvariantResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgVerifyInvariantResponse>): MsgVerifyInvariantResponse {
    const message = createBaseMsgVerifyInvariantResponse();
    return message;
  }
};