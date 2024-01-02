import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export const protobufPackage = "google.protobuf";
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request
 * or the response type of an API method. For instance:
 * 
 *     service Foo {
 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
 *     }
 * 
 * The JSON representation for `Empty` is empty JSON object `{}`.
 */
export interface Empty {}
export interface EmptyProtoMsg {
  typeUrl: "/google.protobuf.Empty";
  value: Uint8Array;
}
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request
 * or the response type of an API method. For instance:
 * 
 *     service Foo {
 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
 *     }
 * 
 * The JSON representation for `Empty` is empty JSON object `{}`.
 */
export interface EmptyAmino {}
export interface EmptyAminoMsg {
  type: "/google.protobuf.Empty";
  value: EmptyAmino;
}
/**
 * A generic empty message that you can re-use to avoid defining duplicated
 * empty messages in your APIs. A typical example is to use it as the request
 * or the response type of an API method. For instance:
 * 
 *     service Foo {
 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
 *     }
 * 
 * The JSON representation for `Empty` is empty JSON object `{}`.
 */
export interface EmptySDKType {}
function createBaseEmpty(): Empty {
  return {};
}
export const Empty = {
  typeUrl: "/google.protobuf.Empty",
  is(o: any): o is Empty {
    return o && o.$typeUrl === Empty.typeUrl;
  },
  isSDK(o: any): o is EmptySDKType {
    return o && o.$typeUrl === Empty.typeUrl;
  },
  isAmino(o: any): o is EmptyAmino {
    return o && o.$typeUrl === Empty.typeUrl;
  },
  encode(_: Empty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Empty {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmpty();
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
  fromJSON(_: any): Empty {
    const obj = createBaseEmpty();
    return obj;
  },
  toJSON(_: Empty): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<Empty>): Empty {
    const message = createBaseEmpty();
    return message;
  },
  fromSDK(_: EmptySDKType): Empty {
    return {};
  },
  toSDK(_: Empty): EmptySDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: EmptyAmino): Empty {
    const message = createBaseEmpty();
    return message;
  },
  toAmino(_: Empty): EmptyAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: EmptyAminoMsg): Empty {
    return Empty.fromAmino(object.value);
  },
  fromProtoMsg(message: EmptyProtoMsg): Empty {
    return Empty.decode(message.value);
  },
  toProto(message: Empty): Uint8Array {
    return Empty.encode(message).finish();
  },
  toProtoMsg(message: Empty): EmptyProtoMsg {
    return {
      typeUrl: "/google.protobuf.Empty",
      value: Empty.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Empty.typeUrl, Empty);