import { AuditedAttributes, AuditedAttributesSDKType } from "./audit";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, Exact } from "../../../helpers";
import { ComputedRef } from "vue";
export const protobufPackage = "akash.audit.v1beta2";
/** GenesisState defines the basic genesis state used by audit module */
export interface GenesisState {
  attributes: AuditedAttributes[];
}
export interface ReactiveGenesisState {
  attributes: ComputedRef<AuditedAttributes[]>;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/akash.audit.v1beta2.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the basic genesis state used by audit module */
export interface GenesisStateSDKType {
  attributes: AuditedAttributesSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    attributes: []
  };
}
export const GenesisState = {
  typeUrl: "/akash.audit.v1beta2.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.attributes) {
      AuditedAttributes.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attributes.push(AuditedAttributes.decode(reader, reader.uint32()));
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
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => AuditedAttributes.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? AuditedAttributes.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.attributes = object.attributes?.map(e => AuditedAttributes.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => AuditedAttributes.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => AuditedAttributes.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? AuditedAttributes.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.attributes = object.attributes?.map(e => AuditedAttributes.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? AuditedAttributes.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "akash/audit/v1beta2/genesis-state",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta2.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};