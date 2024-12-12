import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { ComputedRef } from "vue";
export const protobufPackage = "osmosis.store.v1beta1";
export interface Node {
  children: Child[];
}
export interface ReactiveNode {
  children: ComputedRef<Child[]>;
}
export interface NodeProtoMsg {
  typeUrl: "/osmosis.store.v1beta1.Node";
  value: Uint8Array;
}
export interface NodeSDKType {
  children: ChildSDKType[];
}
export interface Child {
  index: Uint8Array;
  accumulation: string;
}
export interface ReactiveChild {
  index: ComputedRef<Uint8Array>;
  accumulation: ComputedRef<string>;
}
export interface ChildProtoMsg {
  typeUrl: "/osmosis.store.v1beta1.Child";
  value: Uint8Array;
}
export interface ChildSDKType {
  index: Uint8Array;
  accumulation: string;
}
export interface Leaf {
  leaf?: Child;
}
export interface ReactiveLeaf {
  leaf?: ComputedRef<Child>;
}
export interface LeafProtoMsg {
  typeUrl: "/osmosis.store.v1beta1.Leaf";
  value: Uint8Array;
}
export interface LeafSDKType {
  leaf?: ChildSDKType;
}
function createBaseNode(): Node {
  return {
    children: []
  };
}
export const Node = {
  typeUrl: "/osmosis.store.v1beta1.Node",
  encode(message: Node, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.children) {
      Child.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Node {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.children.push(Child.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Node {
    return {
      children: Array.isArray(object?.children) ? object.children.map((e: any) => Child.fromJSON(e)) : []
    };
  },
  toJSON(message: Node): JsonSafe<Node> {
    const obj: any = {};
    if (message.children) {
      obj.children = message.children.map(e => e ? Child.toJSON(e) : undefined);
    } else {
      obj.children = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Node>): Node {
    const message = createBaseNode();
    message.children = object.children?.map(e => Child.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: NodeSDKType): Node {
    return {
      children: Array.isArray(object?.children) ? object.children.map((e: any) => Child.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): NodeSDKType {
    return {
      children: Array.isArray(object?.children) ? object.children.map((e: any) => Child.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: Node): NodeSDKType {
    const obj: any = {};
    if (message.children) {
      obj.children = message.children.map(e => e ? Child.toSDK(e) : undefined);
    } else {
      obj.children = [];
    }
    return obj;
  },
  fromAmino(object: NodeAmino): Node {
    const message = createBaseNode();
    message.children = object.children?.map(e => Child.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Node): NodeAmino {
    const obj: any = {};
    if (message.children) {
      obj.children = message.children.map(e => e ? Child.toAmino(e) : undefined);
    } else {
      obj.children = message.children;
    }
    return obj;
  },
  fromAminoMsg(object: NodeAminoMsg): Node {
    return Node.fromAmino(object.value);
  },
  toAminoMsg(message: Node): NodeAminoMsg {
    return {
      type: "osmosis/store/node",
      value: Node.toAmino(message)
    };
  },
  fromProtoMsg(message: NodeProtoMsg): Node {
    return Node.decode(message.value);
  },
  toProto(message: Node): Uint8Array {
    return Node.encode(message).finish();
  },
  toProtoMsg(message: Node): NodeProtoMsg {
    return {
      typeUrl: "/osmosis.store.v1beta1.Node",
      value: Node.encode(message).finish()
    };
  }
};
function createBaseChild(): Child {
  return {
    index: new Uint8Array(),
    accumulation: ""
  };
}
export const Child = {
  typeUrl: "/osmosis.store.v1beta1.Child",
  encode(message: Child, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index.length !== 0) {
      writer.uint32(10).bytes(message.index);
    }
    if (message.accumulation !== "") {
      writer.uint32(18).string(message.accumulation);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Child {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChild();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.bytes();
          break;
        case 2:
          message.accumulation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Child {
    return {
      index: isSet(object.index) ? bytesFromBase64(object.index) : new Uint8Array(),
      accumulation: isSet(object.accumulation) ? String(object.accumulation) : ""
    };
  },
  toJSON(message: Child): JsonSafe<Child> {
    const obj: any = {};
    message.index !== undefined && (obj.index = base64FromBytes(message.index !== undefined ? message.index : new Uint8Array()));
    message.accumulation !== undefined && (obj.accumulation = message.accumulation);
    return obj;
  },
  fromPartial(object: DeepPartial<Child>): Child {
    const message = createBaseChild();
    message.index = object.index ?? new Uint8Array();
    message.accumulation = object.accumulation ?? "";
    return message;
  },
  fromSDK(object: ChildSDKType): Child {
    return {
      index: object?.index,
      accumulation: object?.accumulation
    };
  },
  fromSDKJSON(object: any): ChildSDKType {
    return {
      index: isSet(object.index) ? bytesFromBase64(object.index) : new Uint8Array(),
      accumulation: isSet(object.accumulation) ? String(object.accumulation) : ""
    };
  },
  toSDK(message: Child): ChildSDKType {
    const obj: any = {};
    obj.index = message.index;
    obj.accumulation = message.accumulation;
    return obj;
  },
  fromAmino(object: ChildAmino): Child {
    const message = createBaseChild();
    if (object.index !== undefined && object.index !== null) {
      message.index = bytesFromBase64(object.index);
    }
    if (object.accumulation !== undefined && object.accumulation !== null) {
      message.accumulation = object.accumulation;
    }
    return message;
  },
  toAmino(message: Child): ChildAmino {
    const obj: any = {};
    obj.index = message.index ? base64FromBytes(message.index) : undefined;
    obj.accumulation = message.accumulation === "" ? undefined : message.accumulation;
    return obj;
  },
  fromAminoMsg(object: ChildAminoMsg): Child {
    return Child.fromAmino(object.value);
  },
  toAminoMsg(message: Child): ChildAminoMsg {
    return {
      type: "osmosis/store/child",
      value: Child.toAmino(message)
    };
  },
  fromProtoMsg(message: ChildProtoMsg): Child {
    return Child.decode(message.value);
  },
  toProto(message: Child): Uint8Array {
    return Child.encode(message).finish();
  },
  toProtoMsg(message: Child): ChildProtoMsg {
    return {
      typeUrl: "/osmosis.store.v1beta1.Child",
      value: Child.encode(message).finish()
    };
  }
};
function createBaseLeaf(): Leaf {
  return {
    leaf: undefined
  };
}
export const Leaf = {
  typeUrl: "/osmosis.store.v1beta1.Leaf",
  encode(message: Leaf, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.leaf !== undefined) {
      Child.encode(message.leaf, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Leaf {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeaf();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leaf = Child.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Leaf {
    return {
      leaf: isSet(object.leaf) ? Child.fromJSON(object.leaf) : undefined
    };
  },
  toJSON(message: Leaf): JsonSafe<Leaf> {
    const obj: any = {};
    message.leaf !== undefined && (obj.leaf = message.leaf ? Child.toJSON(message.leaf) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Leaf>): Leaf {
    const message = createBaseLeaf();
    message.leaf = object.leaf !== undefined && object.leaf !== null ? Child.fromPartial(object.leaf) : undefined;
    return message;
  },
  fromSDK(object: LeafSDKType): Leaf {
    return {
      leaf: object.leaf ? Child.fromSDK(object.leaf) : undefined
    };
  },
  fromSDKJSON(object: any): LeafSDKType {
    return {
      leaf: isSet(object.leaf) ? Child.fromSDKJSON(object.leaf) : undefined
    };
  },
  toSDK(message: Leaf): LeafSDKType {
    const obj: any = {};
    message.leaf !== undefined && (obj.leaf = message.leaf ? Child.toSDK(message.leaf) : undefined);
    return obj;
  },
  fromAmino(object: LeafAmino): Leaf {
    const message = createBaseLeaf();
    if (object.leaf !== undefined && object.leaf !== null) {
      message.leaf = Child.fromAmino(object.leaf);
    }
    return message;
  },
  toAmino(message: Leaf): LeafAmino {
    const obj: any = {};
    obj.leaf = message.leaf ? Child.toAmino(message.leaf) : undefined;
    return obj;
  },
  fromAminoMsg(object: LeafAminoMsg): Leaf {
    return Leaf.fromAmino(object.value);
  },
  toAminoMsg(message: Leaf): LeafAminoMsg {
    return {
      type: "osmosis/store/leaf",
      value: Leaf.toAmino(message)
    };
  },
  fromProtoMsg(message: LeafProtoMsg): Leaf {
    return Leaf.decode(message.value);
  },
  toProto(message: Leaf): Uint8Array {
    return Leaf.encode(message).finish();
  },
  toProtoMsg(message: Leaf): LeafProtoMsg {
    return {
      typeUrl: "/osmosis.store.v1beta1.Leaf",
      value: Leaf.encode(message).finish()
    };
  }
};