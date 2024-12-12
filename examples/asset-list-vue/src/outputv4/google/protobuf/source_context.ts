import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { ComputedRef } from "vue";
export const protobufPackage = "google.protobuf";
/**
 * `SourceContext` represents information about the source of a
 * protobuf element, like the file in which it is defined.
 */
export interface SourceContext {
  /**
   * The path-qualified name of the .proto file that contained the associated
   * protobuf element.  For example: `"google/protobuf/source_context.proto"`.
   */
  fileName: string;
}
export interface ReactiveSourceContext {
  fileName: ComputedRef<string>;
}
export interface SourceContextProtoMsg {
  typeUrl: "/google.protobuf.SourceContext";
  value: Uint8Array;
}
/**
 * `SourceContext` represents information about the source of a
 * protobuf element, like the file in which it is defined.
 */
export interface SourceContextSDKType {
  file_name: string;
}
function createBaseSourceContext(): SourceContext {
  return {
    fileName: ""
  };
}
export const SourceContext = {
  typeUrl: "/google.protobuf.SourceContext",
  encode(message: SourceContext, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fileName !== "") {
      writer.uint32(10).string(message.fileName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SourceContext {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceContext();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fileName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SourceContext {
    return {
      fileName: isSet(object.fileName) ? String(object.fileName) : ""
    };
  },
  toJSON(message: SourceContext): JsonSafe<SourceContext> {
    const obj: any = {};
    message.fileName !== undefined && (obj.fileName = message.fileName);
    return obj;
  },
  fromPartial(object: DeepPartial<SourceContext>): SourceContext {
    const message = createBaseSourceContext();
    message.fileName = object.fileName ?? "";
    return message;
  },
  fromSDK(object: SourceContextSDKType): SourceContext {
    return {
      fileName: object?.file_name
    };
  },
  fromSDKJSON(object: any): SourceContextSDKType {
    return {
      file_name: isSet(object.file_name) ? String(object.file_name) : ""
    };
  },
  toSDK(message: SourceContext): SourceContextSDKType {
    const obj: any = {};
    obj.file_name = message.fileName;
    return obj;
  },
  fromAmino(object: SourceContextAmino): SourceContext {
    const message = createBaseSourceContext();
    if (object.file_name !== undefined && object.file_name !== null) {
      message.fileName = object.file_name;
    }
    return message;
  },
  toAmino(message: SourceContext): SourceContextAmino {
    const obj: any = {};
    obj.file_name = message.fileName === "" ? undefined : message.fileName;
    return obj;
  },
  fromAminoMsg(object: SourceContextAminoMsg): SourceContext {
    return SourceContext.fromAmino(object.value);
  },
  fromProtoMsg(message: SourceContextProtoMsg): SourceContext {
    return SourceContext.decode(message.value);
  },
  toProto(message: SourceContext): Uint8Array {
    return SourceContext.encode(message).finish();
  },
  toProtoMsg(message: SourceContext): SourceContextProtoMsg {
    return {
      typeUrl: "/google.protobuf.SourceContext",
      value: SourceContext.encode(message).finish()
    };
  }
};