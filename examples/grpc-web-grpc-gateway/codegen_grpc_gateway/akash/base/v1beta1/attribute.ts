import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.base.v1beta1";
/** Attribute represents key value pair */
export interface Attribute {
  key: string;
  value: string;
}
export interface AttributeProtoMsg {
  typeUrl: "/akash.base.v1beta1.Attribute";
  value: Uint8Array;
}
/** Attribute represents key value pair */
export interface AttributeAmino {
  key: string;
  value: string;
}
export interface AttributeAminoMsg {
  type: "/akash.base.v1beta1.Attribute";
  value: AttributeAmino;
}
/** Attribute represents key value pair */
export interface AttributeSDKType {
  key: string;
  value: string;
}
/**
 * SignedBy represents validation accounts that tenant expects signatures for provider attributes
 * AllOf has precedence i.e. if there is at least one entry AnyOf is ignored regardless to how many
 * entries there
 * this behaviour to be discussed
 */
export interface SignedBy {
  /** all_of all keys in this list must have signed attributes */
  allOf: string[];
  /** any_of at least of of the keys from the list must have signed attributes */
  anyOf: string[];
}
export interface SignedByProtoMsg {
  typeUrl: "/akash.base.v1beta1.SignedBy";
  value: Uint8Array;
}
/**
 * SignedBy represents validation accounts that tenant expects signatures for provider attributes
 * AllOf has precedence i.e. if there is at least one entry AnyOf is ignored regardless to how many
 * entries there
 * this behaviour to be discussed
 */
export interface SignedByAmino {
  /** all_of all keys in this list must have signed attributes */
  all_of: string[];
  /** any_of at least of of the keys from the list must have signed attributes */
  any_of: string[];
}
export interface SignedByAminoMsg {
  type: "/akash.base.v1beta1.SignedBy";
  value: SignedByAmino;
}
/**
 * SignedBy represents validation accounts that tenant expects signatures for provider attributes
 * AllOf has precedence i.e. if there is at least one entry AnyOf is ignored regardless to how many
 * entries there
 * this behaviour to be discussed
 */
export interface SignedBySDKType {
  all_of: string[];
  any_of: string[];
}
/** PlacementRequirements */
export interface PlacementRequirements {
  /** SignedBy list of keys that tenants expect to have signatures from */
  signedBy?: SignedBy;
  /** Attribute list of attributes tenant expects from the provider */
  attributes: Attribute[];
}
export interface PlacementRequirementsProtoMsg {
  typeUrl: "/akash.base.v1beta1.PlacementRequirements";
  value: Uint8Array;
}
/** PlacementRequirements */
export interface PlacementRequirementsAmino {
  /** SignedBy list of keys that tenants expect to have signatures from */
  signed_by?: SignedByAmino;
  /** Attribute list of attributes tenant expects from the provider */
  attributes: AttributeAmino[];
}
export interface PlacementRequirementsAminoMsg {
  type: "/akash.base.v1beta1.PlacementRequirements";
  value: PlacementRequirementsAmino;
}
/** PlacementRequirements */
export interface PlacementRequirementsSDKType {
  signed_by?: SignedBySDKType;
  attributes: AttributeSDKType[];
}
function createBaseAttribute(): Attribute {
  return {
    key: "",
    value: ""
  };
}
export const Attribute = {
  typeUrl: "/akash.base.v1beta1.Attribute",
  encode(message: Attribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Attribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Attribute {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: Attribute): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<Attribute>): Attribute {
    const message = createBaseAttribute();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: AttributeSDKType): Attribute {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  toSDK(message: Attribute): AttributeSDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: AttributeAmino): Attribute {
    return {
      key: object.key,
      value: object.value
    };
  },
  toAmino(message: Attribute): AttributeAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: AttributeAminoMsg): Attribute {
    return Attribute.fromAmino(object.value);
  },
  fromProtoMsg(message: AttributeProtoMsg): Attribute {
    return Attribute.decode(message.value);
  },
  toProto(message: Attribute): Uint8Array {
    return Attribute.encode(message).finish();
  },
  toProtoMsg(message: Attribute): AttributeProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta1.Attribute",
      value: Attribute.encode(message).finish()
    };
  }
};
function createBaseSignedBy(): SignedBy {
  return {
    allOf: [],
    anyOf: []
  };
}
export const SignedBy = {
  typeUrl: "/akash.base.v1beta1.SignedBy",
  encode(message: SignedBy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allOf) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.anyOf) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SignedBy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignedBy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allOf.push(reader.string());
          break;
        case 2:
          message.anyOf.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SignedBy {
    return {
      allOf: Array.isArray(object?.allOf) ? object.allOf.map((e: any) => String(e)) : [],
      anyOf: Array.isArray(object?.anyOf) ? object.anyOf.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: SignedBy): unknown {
    const obj: any = {};
    if (message.allOf) {
      obj.allOf = message.allOf.map(e => e);
    } else {
      obj.allOf = [];
    }
    if (message.anyOf) {
      obj.anyOf = message.anyOf.map(e => e);
    } else {
      obj.anyOf = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<SignedBy>): SignedBy {
    const message = createBaseSignedBy();
    message.allOf = object.allOf?.map(e => e) || [];
    message.anyOf = object.anyOf?.map(e => e) || [];
    return message;
  },
  fromSDK(object: SignedBySDKType): SignedBy {
    return {
      allOf: Array.isArray(object?.all_of) ? object.all_of.map((e: any) => e) : [],
      anyOf: Array.isArray(object?.any_of) ? object.any_of.map((e: any) => e) : []
    };
  },
  toSDK(message: SignedBy): SignedBySDKType {
    const obj: any = {};
    if (message.allOf) {
      obj.all_of = message.allOf.map(e => e);
    } else {
      obj.all_of = [];
    }
    if (message.anyOf) {
      obj.any_of = message.anyOf.map(e => e);
    } else {
      obj.any_of = [];
    }
    return obj;
  },
  fromAmino(object: SignedByAmino): SignedBy {
    return {
      allOf: Array.isArray(object?.all_of) ? object.all_of.map((e: any) => e) : [],
      anyOf: Array.isArray(object?.any_of) ? object.any_of.map((e: any) => e) : []
    };
  },
  toAmino(message: SignedBy): SignedByAmino {
    const obj: any = {};
    if (message.allOf) {
      obj.all_of = message.allOf.map(e => e);
    } else {
      obj.all_of = [];
    }
    if (message.anyOf) {
      obj.any_of = message.anyOf.map(e => e);
    } else {
      obj.any_of = [];
    }
    return obj;
  },
  fromAminoMsg(object: SignedByAminoMsg): SignedBy {
    return SignedBy.fromAmino(object.value);
  },
  fromProtoMsg(message: SignedByProtoMsg): SignedBy {
    return SignedBy.decode(message.value);
  },
  toProto(message: SignedBy): Uint8Array {
    return SignedBy.encode(message).finish();
  },
  toProtoMsg(message: SignedBy): SignedByProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta1.SignedBy",
      value: SignedBy.encode(message).finish()
    };
  }
};
function createBasePlacementRequirements(): PlacementRequirements {
  return {
    signedBy: undefined,
    attributes: []
  };
}
export const PlacementRequirements = {
  typeUrl: "/akash.base.v1beta1.PlacementRequirements",
  encode(message: PlacementRequirements, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signedBy !== undefined) {
      SignedBy.encode(message.signedBy, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PlacementRequirements {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlacementRequirements();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signedBy = SignedBy.decode(reader, reader.uint32());
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
  fromJSON(object: any): PlacementRequirements {
    return {
      signedBy: isSet(object.signedBy) ? SignedBy.fromJSON(object.signedBy) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : []
    };
  },
  toJSON(message: PlacementRequirements): unknown {
    const obj: any = {};
    message.signedBy !== undefined && (obj.signedBy = message.signedBy ? SignedBy.toJSON(message.signedBy) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<PlacementRequirements>): PlacementRequirements {
    const message = createBasePlacementRequirements();
    message.signedBy = object.signedBy !== undefined && object.signedBy !== null ? SignedBy.fromPartial(object.signedBy) : undefined;
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: PlacementRequirementsSDKType): PlacementRequirements {
    return {
      signedBy: object.signed_by ? SignedBy.fromSDK(object.signed_by) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : []
    };
  },
  toSDK(message: PlacementRequirements): PlacementRequirementsSDKType {
    const obj: any = {};
    message.signedBy !== undefined && (obj.signed_by = message.signedBy ? SignedBy.toSDK(message.signedBy) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAmino(object: PlacementRequirementsAmino): PlacementRequirements {
    return {
      signedBy: object?.signed_by ? SignedBy.fromAmino(object.signed_by) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromAmino(e)) : []
    };
  },
  toAmino(message: PlacementRequirements): PlacementRequirementsAmino {
    const obj: any = {};
    obj.signed_by = message.signedBy ? SignedBy.toAmino(message.signedBy) : undefined;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAminoMsg(object: PlacementRequirementsAminoMsg): PlacementRequirements {
    return PlacementRequirements.fromAmino(object.value);
  },
  fromProtoMsg(message: PlacementRequirementsProtoMsg): PlacementRequirements {
    return PlacementRequirements.decode(message.value);
  },
  toProto(message: PlacementRequirements): Uint8Array {
    return PlacementRequirements.encode(message).finish();
  },
  toProtoMsg(message: PlacementRequirements): PlacementRequirementsProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta1.PlacementRequirements",
      value: PlacementRequirements.encode(message).finish()
    };
  }
};