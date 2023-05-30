import { ResourceValue, ResourceValueAmino, ResourceValueSDKType } from "./resourcevalue";
import { Attribute, AttributeAmino, AttributeSDKType } from "./attribute";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.base.v1beta2";
/** CPU stores resource units and cpu config attributes */
export interface CPU {
  units?: ResourceValue;
  attributes: Attribute[];
}
export interface CPUProtoMsg {
  typeUrl: "/akash.base.v1beta2.CPU";
  value: Uint8Array;
}
/** CPU stores resource units and cpu config attributes */
export interface CPUAmino {
  units?: ResourceValueAmino;
  attributes: AttributeAmino[];
}
export interface CPUAminoMsg {
  type: "/akash.base.v1beta2.CPU";
  value: CPUAmino;
}
/** CPU stores resource units and cpu config attributes */
export interface CPUSDKType {
  units?: ResourceValueSDKType;
  attributes: AttributeSDKType[];
}
/** Memory stores resource quantity and memory attributes */
export interface Memory {
  quantity?: ResourceValue;
  attributes: Attribute[];
}
export interface MemoryProtoMsg {
  typeUrl: "/akash.base.v1beta2.Memory";
  value: Uint8Array;
}
/** Memory stores resource quantity and memory attributes */
export interface MemoryAmino {
  quantity?: ResourceValueAmino;
  attributes: AttributeAmino[];
}
export interface MemoryAminoMsg {
  type: "/akash.base.v1beta2.Memory";
  value: MemoryAmino;
}
/** Memory stores resource quantity and memory attributes */
export interface MemorySDKType {
  quantity?: ResourceValueSDKType;
  attributes: AttributeSDKType[];
}
/** Storage stores resource quantity and storage attributes */
export interface Storage {
  name: string;
  quantity?: ResourceValue;
  attributes: Attribute[];
}
export interface StorageProtoMsg {
  typeUrl: "/akash.base.v1beta2.Storage";
  value: Uint8Array;
}
/** Storage stores resource quantity and storage attributes */
export interface StorageAmino {
  name: string;
  quantity?: ResourceValueAmino;
  attributes: AttributeAmino[];
}
export interface StorageAminoMsg {
  type: "/akash.base.v1beta2.Storage";
  value: StorageAmino;
}
/** Storage stores resource quantity and storage attributes */
export interface StorageSDKType {
  name: string;
  quantity?: ResourceValueSDKType;
  attributes: AttributeSDKType[];
}
function createBaseCPU(): CPU {
  return {
    units: undefined,
    attributes: []
  };
}
export const CPU = {
  typeUrl: "/akash.base.v1beta2.CPU",
  encode(message: CPU, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.units !== undefined) {
      ResourceValue.encode(message.units, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CPU {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPU();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.units = ResourceValue.decode(reader, reader.uint32());
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CPU {
    return {
      units: isSet(object.units) ? ResourceValue.fromJSON(object.units) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : []
    };
  },
  toJSON(message: CPU): unknown {
    const obj: any = {};
    message.units !== undefined && (obj.units = message.units ? ResourceValue.toJSON(message.units) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<CPU>): CPU {
    const message = createBaseCPU();
    message.units = object.units !== undefined && object.units !== null ? ResourceValue.fromPartial(object.units) : undefined;
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: CPUSDKType): CPU {
    return {
      units: object.units ? ResourceValue.fromSDK(object.units) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : []
    };
  },
  toSDK(message: CPU): CPUSDKType {
    const obj: any = {};
    message.units !== undefined && (obj.units = message.units ? ResourceValue.toSDK(message.units) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAmino(object: CPUAmino): CPU {
    return {
      units: object?.units ? ResourceValue.fromAmino(object.units) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromAmino(e)) : []
    };
  },
  toAmino(message: CPU): CPUAmino {
    const obj: any = {};
    obj.units = message.units ? ResourceValue.toAmino(message.units) : undefined;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAminoMsg(object: CPUAminoMsg): CPU {
    return CPU.fromAmino(object.value);
  },
  fromProtoMsg(message: CPUProtoMsg): CPU {
    return CPU.decode(message.value);
  },
  toProto(message: CPU): Uint8Array {
    return CPU.encode(message).finish();
  },
  toProtoMsg(message: CPU): CPUProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta2.CPU",
      value: CPU.encode(message).finish()
    };
  }
};
function createBaseMemory(): Memory {
  return {
    quantity: undefined,
    attributes: []
  };
}
export const Memory = {
  typeUrl: "/akash.base.v1beta2.Memory",
  encode(message: Memory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quantity !== undefined) {
      ResourceValue.encode(message.quantity, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Memory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quantity = ResourceValue.decode(reader, reader.uint32());
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Memory {
    return {
      quantity: isSet(object.quantity) ? ResourceValue.fromJSON(object.quantity) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : []
    };
  },
  toJSON(message: Memory): unknown {
    const obj: any = {};
    message.quantity !== undefined && (obj.quantity = message.quantity ? ResourceValue.toJSON(message.quantity) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Memory>): Memory {
    const message = createBaseMemory();
    message.quantity = object.quantity !== undefined && object.quantity !== null ? ResourceValue.fromPartial(object.quantity) : undefined;
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MemorySDKType): Memory {
    return {
      quantity: object.quantity ? ResourceValue.fromSDK(object.quantity) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : []
    };
  },
  toSDK(message: Memory): MemorySDKType {
    const obj: any = {};
    message.quantity !== undefined && (obj.quantity = message.quantity ? ResourceValue.toSDK(message.quantity) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAmino(object: MemoryAmino): Memory {
    return {
      quantity: object?.quantity ? ResourceValue.fromAmino(object.quantity) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromAmino(e)) : []
    };
  },
  toAmino(message: Memory): MemoryAmino {
    const obj: any = {};
    obj.quantity = message.quantity ? ResourceValue.toAmino(message.quantity) : undefined;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAminoMsg(object: MemoryAminoMsg): Memory {
    return Memory.fromAmino(object.value);
  },
  fromProtoMsg(message: MemoryProtoMsg): Memory {
    return Memory.decode(message.value);
  },
  toProto(message: Memory): Uint8Array {
    return Memory.encode(message).finish();
  },
  toProtoMsg(message: Memory): MemoryProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta2.Memory",
      value: Memory.encode(message).finish()
    };
  }
};
function createBaseStorage(): Storage {
  return {
    name: "",
    quantity: undefined,
    attributes: []
  };
}
export const Storage = {
  typeUrl: "/akash.base.v1beta2.Storage",
  encode(message: Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.quantity !== undefined) {
      ResourceValue.encode(message.quantity, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Storage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.quantity = ResourceValue.decode(reader, reader.uint32());
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Storage {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      quantity: isSet(object.quantity) ? ResourceValue.fromJSON(object.quantity) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : []
    };
  },
  toJSON(message: Storage): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.quantity !== undefined && (obj.quantity = message.quantity ? ResourceValue.toJSON(message.quantity) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Storage>): Storage {
    const message = createBaseStorage();
    message.name = object.name ?? "";
    message.quantity = object.quantity !== undefined && object.quantity !== null ? ResourceValue.fromPartial(object.quantity) : undefined;
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: StorageSDKType): Storage {
    return {
      name: object?.name,
      quantity: object.quantity ? ResourceValue.fromSDK(object.quantity) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : []
    };
  },
  toSDK(message: Storage): StorageSDKType {
    const obj: any = {};
    obj.name = message.name;
    message.quantity !== undefined && (obj.quantity = message.quantity ? ResourceValue.toSDK(message.quantity) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAmino(object: StorageAmino): Storage {
    return {
      name: object.name,
      quantity: object?.quantity ? ResourceValue.fromAmino(object.quantity) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromAmino(e)) : []
    };
  },
  toAmino(message: Storage): StorageAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.quantity = message.quantity ? ResourceValue.toAmino(message.quantity) : undefined;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAminoMsg(object: StorageAminoMsg): Storage {
    return Storage.fromAmino(object.value);
  },
  fromProtoMsg(message: StorageProtoMsg): Storage {
    return Storage.decode(message.value);
  },
  toProto(message: Storage): Uint8Array {
    return Storage.encode(message).finish();
  },
  toProtoMsg(message: Storage): StorageProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta2.Storage",
      value: Storage.encode(message).finish()
    };
  }
};