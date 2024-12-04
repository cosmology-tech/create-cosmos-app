import { Expr, ExprSDKType } from "./expr";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "google.api.expr.v1beta1";
/** A declaration. */
export interface Decl {
  /** The id of the declaration. */
  id: number;
  /** The name of the declaration. */
  name: string;
  /** The documentation string for the declaration. */
  doc: string;
  /** An identifier declaration. */
  ident?: IdentDecl;
  /** A function declaration. */
  function?: FunctionDecl;
}
export interface DeclProtoMsg {
  typeUrl: "/google.api.expr.v1beta1.Decl";
  value: Uint8Array;
}
/** A declaration. */
export interface DeclSDKType {
  id: number;
  name: string;
  doc: string;
  ident?: IdentDeclSDKType;
  function?: FunctionDeclSDKType;
}
/**
 * The declared type of a variable.
 * 
 * Extends runtime type values with extra information used for type checking
 * and dispatching.
 */
export interface DeclType {
  /** The expression id of the declared type, if applicable. */
  id: number;
  /** The type name, e.g. 'int', 'my.type.Type' or 'T' */
  type: string;
  /**
   * An ordered list of type parameters, e.g. `<string, int>`.
   * Only applies to a subset of types, e.g. `map`, `list`.
   */
  typeParams: DeclType[];
}
export interface DeclTypeProtoMsg {
  typeUrl: "/google.api.expr.v1beta1.DeclType";
  value: Uint8Array;
}
/**
 * The declared type of a variable.
 * 
 * Extends runtime type values with extra information used for type checking
 * and dispatching.
 */
export interface DeclTypeSDKType {
  id: number;
  type: string;
  type_params: DeclTypeSDKType[];
}
/** An identifier declaration. */
export interface IdentDecl {
  /** Optional type of the identifier. */
  type?: DeclType;
  /** Optional value of the identifier. */
  value?: Expr;
}
export interface IdentDeclProtoMsg {
  typeUrl: "/google.api.expr.v1beta1.IdentDecl";
  value: Uint8Array;
}
/** An identifier declaration. */
export interface IdentDeclSDKType {
  type?: DeclTypeSDKType;
  value?: ExprSDKType;
}
/** A function declaration. */
export interface FunctionDecl {
  /** The function arguments. */
  args: IdentDecl[];
  /** Optional declared return type. */
  returnType?: DeclType;
  /** If the first argument of the function is the receiver. */
  receiverFunction: boolean;
}
export interface FunctionDeclProtoMsg {
  typeUrl: "/google.api.expr.v1beta1.FunctionDecl";
  value: Uint8Array;
}
/** A function declaration. */
export interface FunctionDeclSDKType {
  args: IdentDeclSDKType[];
  return_type?: DeclTypeSDKType;
  receiver_function: boolean;
}
function createBaseDecl(): Decl {
  return {
    id: 0,
    name: "",
    doc: "",
    ident: undefined,
    function: undefined
  };
}
export const Decl = {
  typeUrl: "/google.api.expr.v1beta1.Decl",
  encode(message: Decl, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.doc !== "") {
      writer.uint32(26).string(message.doc);
    }
    if (message.ident !== undefined) {
      IdentDecl.encode(message.ident, writer.uint32(34).fork()).ldelim();
    }
    if (message.function !== undefined) {
      FunctionDecl.encode(message.function, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Decl {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.doc = reader.string();
          break;
        case 4:
          message.ident = IdentDecl.decode(reader, reader.uint32());
          break;
        case 5:
          message.function = FunctionDecl.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Decl {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      doc: isSet(object.doc) ? String(object.doc) : "",
      ident: isSet(object.ident) ? IdentDecl.fromJSON(object.ident) : undefined,
      function: isSet(object.function) ? FunctionDecl.fromJSON(object.function) : undefined
    };
  },
  toJSON(message: Decl): JsonSafe<Decl> {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.doc !== undefined && (obj.doc = message.doc);
    message.ident !== undefined && (obj.ident = message.ident ? IdentDecl.toJSON(message.ident) : undefined);
    message.function !== undefined && (obj.function = message.function ? FunctionDecl.toJSON(message.function) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Decl>): Decl {
    const message = createBaseDecl();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.doc = object.doc ?? "";
    message.ident = object.ident !== undefined && object.ident !== null ? IdentDecl.fromPartial(object.ident) : undefined;
    message.function = object.function !== undefined && object.function !== null ? FunctionDecl.fromPartial(object.function) : undefined;
    return message;
  },
  fromSDK(object: DeclSDKType): Decl {
    return {
      id: object?.id,
      name: object?.name,
      doc: object?.doc,
      ident: object.ident ? IdentDecl.fromSDK(object.ident) : undefined,
      function: object.function ? FunctionDecl.fromSDK(object.function) : undefined
    };
  },
  fromSDKJSON(object: any): DeclSDKType {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      doc: isSet(object.doc) ? String(object.doc) : "",
      ident: isSet(object.ident) ? IdentDecl.fromSDKJSON(object.ident) : undefined,
      function: isSet(object.function) ? FunctionDecl.fromSDKJSON(object.function) : undefined
    };
  },
  toSDK(message: Decl): DeclSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.name = message.name;
    obj.doc = message.doc;
    message.ident !== undefined && (obj.ident = message.ident ? IdentDecl.toSDK(message.ident) : undefined);
    message.function !== undefined && (obj.function = message.function ? FunctionDecl.toSDK(message.function) : undefined);
    return obj;
  },
  fromAmino(object: DeclAmino): Decl {
    const message = createBaseDecl();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.doc !== undefined && object.doc !== null) {
      message.doc = object.doc;
    }
    if (object.ident !== undefined && object.ident !== null) {
      message.ident = IdentDecl.fromAmino(object.ident);
    }
    if (object.function !== undefined && object.function !== null) {
      message.function = FunctionDecl.fromAmino(object.function);
    }
    return message;
  },
  toAmino(message: Decl): DeclAmino {
    const obj: any = {};
    obj.id = message.id === 0 ? undefined : message.id;
    obj.name = message.name === "" ? undefined : message.name;
    obj.doc = message.doc === "" ? undefined : message.doc;
    obj.ident = message.ident ? IdentDecl.toAmino(message.ident) : undefined;
    obj.function = message.function ? FunctionDecl.toAmino(message.function) : undefined;
    return obj;
  },
  fromAminoMsg(object: DeclAminoMsg): Decl {
    return Decl.fromAmino(object.value);
  },
  fromProtoMsg(message: DeclProtoMsg): Decl {
    return Decl.decode(message.value);
  },
  toProto(message: Decl): Uint8Array {
    return Decl.encode(message).finish();
  },
  toProtoMsg(message: Decl): DeclProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1beta1.Decl",
      value: Decl.encode(message).finish()
    };
  }
};
function createBaseDeclType(): DeclType {
  return {
    id: 0,
    type: "",
    typeParams: []
  };
}
export const DeclType = {
  typeUrl: "/google.api.expr.v1beta1.DeclType",
  encode(message: DeclType, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    for (const v of message.typeParams) {
      DeclType.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeclType {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeclType();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 4:
          message.typeParams.push(DeclType.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DeclType {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      type: isSet(object.type) ? String(object.type) : "",
      typeParams: Array.isArray(object?.typeParams) ? object.typeParams.map((e: any) => DeclType.fromJSON(e)) : []
    };
  },
  toJSON(message: DeclType): JsonSafe<DeclType> {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.type !== undefined && (obj.type = message.type);
    if (message.typeParams) {
      obj.typeParams = message.typeParams.map(e => e ? DeclType.toJSON(e) : undefined);
    } else {
      obj.typeParams = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<DeclType>): DeclType {
    const message = createBaseDeclType();
    message.id = object.id ?? 0;
    message.type = object.type ?? "";
    message.typeParams = object.typeParams?.map(e => DeclType.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: DeclTypeSDKType): DeclType {
    return {
      id: object?.id,
      type: object?.type,
      typeParams: Array.isArray(object?.type_params) ? object.type_params.map((e: any) => DeclType.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): DeclTypeSDKType {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      type: isSet(object.type) ? String(object.type) : "",
      type_params: Array.isArray(object?.type_params) ? object.type_params.map((e: any) => DeclType.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: DeclType): DeclTypeSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.type = message.type;
    if (message.typeParams) {
      obj.type_params = message.typeParams.map(e => e ? DeclType.toSDK(e) : undefined);
    } else {
      obj.type_params = [];
    }
    return obj;
  },
  fromAmino(object: DeclTypeAmino): DeclType {
    const message = createBaseDeclType();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    message.typeParams = object.type_params?.map(e => DeclType.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DeclType): DeclTypeAmino {
    const obj: any = {};
    obj.id = message.id === 0 ? undefined : message.id;
    obj.type = message.type === "" ? undefined : message.type;
    if (message.typeParams) {
      obj.type_params = message.typeParams.map(e => e ? DeclType.toAmino(e) : undefined);
    } else {
      obj.type_params = message.typeParams;
    }
    return obj;
  },
  fromAminoMsg(object: DeclTypeAminoMsg): DeclType {
    return DeclType.fromAmino(object.value);
  },
  fromProtoMsg(message: DeclTypeProtoMsg): DeclType {
    return DeclType.decode(message.value);
  },
  toProto(message: DeclType): Uint8Array {
    return DeclType.encode(message).finish();
  },
  toProtoMsg(message: DeclType): DeclTypeProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1beta1.DeclType",
      value: DeclType.encode(message).finish()
    };
  }
};
function createBaseIdentDecl(): IdentDecl {
  return {
    type: undefined,
    value: undefined
  };
}
export const IdentDecl = {
  typeUrl: "/google.api.expr.v1beta1.IdentDecl",
  encode(message: IdentDecl, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== undefined) {
      DeclType.encode(message.type, writer.uint32(26).fork()).ldelim();
    }
    if (message.value !== undefined) {
      Expr.encode(message.value, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IdentDecl {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentDecl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.type = DeclType.decode(reader, reader.uint32());
          break;
        case 4:
          message.value = Expr.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IdentDecl {
    return {
      type: isSet(object.type) ? DeclType.fromJSON(object.type) : undefined,
      value: isSet(object.value) ? Expr.fromJSON(object.value) : undefined
    };
  },
  toJSON(message: IdentDecl): JsonSafe<IdentDecl> {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type ? DeclType.toJSON(message.type) : undefined);
    message.value !== undefined && (obj.value = message.value ? Expr.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<IdentDecl>): IdentDecl {
    const message = createBaseIdentDecl();
    message.type = object.type !== undefined && object.type !== null ? DeclType.fromPartial(object.type) : undefined;
    message.value = object.value !== undefined && object.value !== null ? Expr.fromPartial(object.value) : undefined;
    return message;
  },
  fromSDK(object: IdentDeclSDKType): IdentDecl {
    return {
      type: object.type ? DeclType.fromSDK(object.type) : undefined,
      value: object.value ? Expr.fromSDK(object.value) : undefined
    };
  },
  fromSDKJSON(object: any): IdentDeclSDKType {
    return {
      type: isSet(object.type) ? DeclType.fromSDKJSON(object.type) : undefined,
      value: isSet(object.value) ? Expr.fromSDKJSON(object.value) : undefined
    };
  },
  toSDK(message: IdentDecl): IdentDeclSDKType {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type ? DeclType.toSDK(message.type) : undefined);
    message.value !== undefined && (obj.value = message.value ? Expr.toSDK(message.value) : undefined);
    return obj;
  },
  fromAmino(object: IdentDeclAmino): IdentDecl {
    const message = createBaseIdentDecl();
    if (object.type !== undefined && object.type !== null) {
      message.type = DeclType.fromAmino(object.type);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = Expr.fromAmino(object.value);
    }
    return message;
  },
  toAmino(message: IdentDecl): IdentDeclAmino {
    const obj: any = {};
    obj.type = message.type ? DeclType.toAmino(message.type) : undefined;
    obj.value = message.value ? Expr.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: IdentDeclAminoMsg): IdentDecl {
    return IdentDecl.fromAmino(object.value);
  },
  fromProtoMsg(message: IdentDeclProtoMsg): IdentDecl {
    return IdentDecl.decode(message.value);
  },
  toProto(message: IdentDecl): Uint8Array {
    return IdentDecl.encode(message).finish();
  },
  toProtoMsg(message: IdentDecl): IdentDeclProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1beta1.IdentDecl",
      value: IdentDecl.encode(message).finish()
    };
  }
};
function createBaseFunctionDecl(): FunctionDecl {
  return {
    args: [],
    returnType: undefined,
    receiverFunction: false
  };
}
export const FunctionDecl = {
  typeUrl: "/google.api.expr.v1beta1.FunctionDecl",
  encode(message: FunctionDecl, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.args) {
      IdentDecl.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.returnType !== undefined) {
      DeclType.encode(message.returnType, writer.uint32(18).fork()).ldelim();
    }
    if (message.receiverFunction === true) {
      writer.uint32(24).bool(message.receiverFunction);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FunctionDecl {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFunctionDecl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.args.push(IdentDecl.decode(reader, reader.uint32()));
          break;
        case 2:
          message.returnType = DeclType.decode(reader, reader.uint32());
          break;
        case 3:
          message.receiverFunction = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FunctionDecl {
    return {
      args: Array.isArray(object?.args) ? object.args.map((e: any) => IdentDecl.fromJSON(e)) : [],
      returnType: isSet(object.returnType) ? DeclType.fromJSON(object.returnType) : undefined,
      receiverFunction: isSet(object.receiverFunction) ? Boolean(object.receiverFunction) : false
    };
  },
  toJSON(message: FunctionDecl): JsonSafe<FunctionDecl> {
    const obj: any = {};
    if (message.args) {
      obj.args = message.args.map(e => e ? IdentDecl.toJSON(e) : undefined);
    } else {
      obj.args = [];
    }
    message.returnType !== undefined && (obj.returnType = message.returnType ? DeclType.toJSON(message.returnType) : undefined);
    message.receiverFunction !== undefined && (obj.receiverFunction = message.receiverFunction);
    return obj;
  },
  fromPartial(object: DeepPartial<FunctionDecl>): FunctionDecl {
    const message = createBaseFunctionDecl();
    message.args = object.args?.map(e => IdentDecl.fromPartial(e)) || [];
    message.returnType = object.returnType !== undefined && object.returnType !== null ? DeclType.fromPartial(object.returnType) : undefined;
    message.receiverFunction = object.receiverFunction ?? false;
    return message;
  },
  fromSDK(object: FunctionDeclSDKType): FunctionDecl {
    return {
      args: Array.isArray(object?.args) ? object.args.map((e: any) => IdentDecl.fromSDK(e)) : [],
      returnType: object.return_type ? DeclType.fromSDK(object.return_type) : undefined,
      receiverFunction: object?.receiver_function
    };
  },
  fromSDKJSON(object: any): FunctionDeclSDKType {
    return {
      args: Array.isArray(object?.args) ? object.args.map((e: any) => IdentDecl.fromSDKJSON(e)) : [],
      return_type: isSet(object.return_type) ? DeclType.fromSDKJSON(object.return_type) : undefined,
      receiver_function: isSet(object.receiver_function) ? Boolean(object.receiver_function) : false
    };
  },
  toSDK(message: FunctionDecl): FunctionDeclSDKType {
    const obj: any = {};
    if (message.args) {
      obj.args = message.args.map(e => e ? IdentDecl.toSDK(e) : undefined);
    } else {
      obj.args = [];
    }
    message.returnType !== undefined && (obj.return_type = message.returnType ? DeclType.toSDK(message.returnType) : undefined);
    obj.receiver_function = message.receiverFunction;
    return obj;
  },
  fromAmino(object: FunctionDeclAmino): FunctionDecl {
    const message = createBaseFunctionDecl();
    message.args = object.args?.map(e => IdentDecl.fromAmino(e)) || [];
    if (object.return_type !== undefined && object.return_type !== null) {
      message.returnType = DeclType.fromAmino(object.return_type);
    }
    if (object.receiver_function !== undefined && object.receiver_function !== null) {
      message.receiverFunction = object.receiver_function;
    }
    return message;
  },
  toAmino(message: FunctionDecl): FunctionDeclAmino {
    const obj: any = {};
    if (message.args) {
      obj.args = message.args.map(e => e ? IdentDecl.toAmino(e) : undefined);
    } else {
      obj.args = message.args;
    }
    obj.return_type = message.returnType ? DeclType.toAmino(message.returnType) : undefined;
    obj.receiver_function = message.receiverFunction === false ? undefined : message.receiverFunction;
    return obj;
  },
  fromAminoMsg(object: FunctionDeclAminoMsg): FunctionDecl {
    return FunctionDecl.fromAmino(object.value);
  },
  fromProtoMsg(message: FunctionDeclProtoMsg): FunctionDecl {
    return FunctionDecl.decode(message.value);
  },
  toProto(message: FunctionDecl): Uint8Array {
    return FunctionDecl.encode(message).finish();
  },
  toProtoMsg(message: FunctionDecl): FunctionDeclProtoMsg {
    return {
      typeUrl: "/google.api.expr.v1beta1.FunctionDecl",
      value: FunctionDecl.encode(message).finish()
    };
  }
};