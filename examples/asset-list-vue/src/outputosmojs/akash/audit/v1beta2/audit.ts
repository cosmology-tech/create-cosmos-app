import { Attribute, AttributeSDKType } from "../../base/v1beta2/attribute";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial, Exact } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { ComputedRef } from "vue";
export const protobufPackage = "akash.audit.v1beta2";
/** Provider stores owner auditor and attributes details */
export interface Provider {
  owner: string;
  auditor: string;
  attributes: Attribute[];
}
export interface ReactiveProvider {
  owner: ComputedRef<string>;
  auditor: ComputedRef<string>;
  attributes: ComputedRef<Attribute[]>;
}
export interface ProviderProtoMsg {
  typeUrl: "/akash.audit.v1beta2.Provider";
  value: Uint8Array;
}
/** Provider stores owner auditor and attributes details */
export interface ProviderSDKType {
  owner: string;
  auditor: string;
  attributes: AttributeSDKType[];
}
/** Attributes */
export interface AuditedAttributes {
  owner: string;
  auditor: string;
  attributes: Attribute[];
}
export interface ReactiveAuditedAttributes {
  owner: ComputedRef<string>;
  auditor: ComputedRef<string>;
  attributes: ComputedRef<Attribute[]>;
}
export interface AuditedAttributesProtoMsg {
  typeUrl: "/akash.audit.v1beta2.AuditedAttributes";
  value: Uint8Array;
}
/** Attributes */
export interface AuditedAttributesSDKType {
  owner: string;
  auditor: string;
  attributes: AttributeSDKType[];
}
/** AttributesResponse represents details of deployment along with group details */
export interface AttributesResponse {
  attributes: AuditedAttributes[];
}
export interface ReactiveAttributesResponse {
  attributes: ComputedRef<AuditedAttributes[]>;
}
export interface AttributesResponseProtoMsg {
  typeUrl: "/akash.audit.v1beta2.AttributesResponse";
  value: Uint8Array;
}
/** AttributesResponse represents details of deployment along with group details */
export interface AttributesResponseSDKType {
  attributes: AuditedAttributesSDKType[];
}
/** AttributesFilters defines filters used to filter deployments */
export interface AttributesFilters {
  auditors: string[];
  owners: string[];
}
export interface ReactiveAttributesFilters {
  auditors: ComputedRef<string[]>;
  owners: ComputedRef<string[]>;
}
export interface AttributesFiltersProtoMsg {
  typeUrl: "/akash.audit.v1beta2.AttributesFilters";
  value: Uint8Array;
}
/** AttributesFilters defines filters used to filter deployments */
export interface AttributesFiltersSDKType {
  auditors: string[];
  owners: string[];
}
/** MsgSignProviderAttributes defines an SDK message for signing a provider attributes */
export interface MsgSignProviderAttributes {
  owner: string;
  auditor: string;
  attributes: Attribute[];
}
export interface ReactiveMsgSignProviderAttributes {
  owner: ComputedRef<string>;
  auditor: ComputedRef<string>;
  attributes: ComputedRef<Attribute[]>;
}
export interface MsgSignProviderAttributesProtoMsg {
  typeUrl: "/akash.audit.v1beta2.MsgSignProviderAttributes";
  value: Uint8Array;
}
/** MsgSignProviderAttributes defines an SDK message for signing a provider attributes */
export interface MsgSignProviderAttributesSDKType {
  owner: string;
  auditor: string;
  attributes: AttributeSDKType[];
}
/** MsgSignProviderAttributesResponse defines the Msg/CreateProvider response type. */
export interface MsgSignProviderAttributesResponse {}
export interface ReactiveMsgSignProviderAttributesResponse {}
export interface MsgSignProviderAttributesResponseProtoMsg {
  typeUrl: "/akash.audit.v1beta2.MsgSignProviderAttributesResponse";
  value: Uint8Array;
}
/** MsgSignProviderAttributesResponse defines the Msg/CreateProvider response type. */
export interface MsgSignProviderAttributesResponseSDKType {}
/** MsgDeleteProviderAttributes defined the Msg/DeleteProviderAttributes */
export interface MsgDeleteProviderAttributes {
  owner: string;
  auditor: string;
  keys: string[];
}
export interface ReactiveMsgDeleteProviderAttributes {
  owner: ComputedRef<string>;
  auditor: ComputedRef<string>;
  keys: ComputedRef<string[]>;
}
export interface MsgDeleteProviderAttributesProtoMsg {
  typeUrl: "/akash.audit.v1beta2.MsgDeleteProviderAttributes";
  value: Uint8Array;
}
/** MsgDeleteProviderAttributes defined the Msg/DeleteProviderAttributes */
export interface MsgDeleteProviderAttributesSDKType {
  owner: string;
  auditor: string;
  keys: string[];
}
/** MsgDeleteProviderAttributesResponse defines the Msg/ProviderAttributes response type. */
export interface MsgDeleteProviderAttributesResponse {}
export interface ReactiveMsgDeleteProviderAttributesResponse {}
export interface MsgDeleteProviderAttributesResponseProtoMsg {
  typeUrl: "/akash.audit.v1beta2.MsgDeleteProviderAttributesResponse";
  value: Uint8Array;
}
/** MsgDeleteProviderAttributesResponse defines the Msg/ProviderAttributes response type. */
export interface MsgDeleteProviderAttributesResponseSDKType {}
function createBaseProvider(): Provider {
  return {
    owner: "",
    auditor: "",
    attributes: []
  };
}
export const Provider = {
  typeUrl: "/akash.audit.v1beta2.Provider",
  encode(message: Provider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.auditor !== "") {
      writer.uint32(18).string(message.auditor);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Provider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.auditor = reader.string();
          break;
        case 4:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Provider {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : []
    };
  },
  toJSON(message: Provider): JsonSafe<Provider> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.auditor !== undefined && (obj.auditor = message.auditor);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<Provider>, I>>(object: I): Provider {
    const message = createBaseProvider();
    message.owner = object.owner ?? "";
    message.auditor = object.auditor ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ProviderSDKType): Provider {
    return {
      owner: object?.owner,
      auditor: object?.auditor,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): ProviderSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: Provider): ProviderSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.auditor = message.auditor;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAmino(object: ProviderAmino): Provider {
    const message = createBaseProvider();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.auditor !== undefined && object.auditor !== null) {
      message.auditor = object.auditor;
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Provider): ProviderAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.auditor = message.auditor ?? "";
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: ProviderAminoMsg): Provider {
    return Provider.fromAmino(object.value);
  },
  toAminoMsg(message: Provider): ProviderAminoMsg {
    return {
      type: "akash/audit/v1beta2/provider",
      value: Provider.toAmino(message)
    };
  },
  fromProtoMsg(message: ProviderProtoMsg): Provider {
    return Provider.decode(message.value);
  },
  toProto(message: Provider): Uint8Array {
    return Provider.encode(message).finish();
  },
  toProtoMsg(message: Provider): ProviderProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta2.Provider",
      value: Provider.encode(message).finish()
    };
  }
};
function createBaseAuditedAttributes(): AuditedAttributes {
  return {
    owner: "",
    auditor: "",
    attributes: []
  };
}
export const AuditedAttributes = {
  typeUrl: "/akash.audit.v1beta2.AuditedAttributes",
  encode(message: AuditedAttributes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.auditor !== "") {
      writer.uint32(18).string(message.auditor);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AuditedAttributes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuditedAttributes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.auditor = reader.string();
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
  fromJSON(object: any): AuditedAttributes {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : []
    };
  },
  toJSON(message: AuditedAttributes): JsonSafe<AuditedAttributes> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.auditor !== undefined && (obj.auditor = message.auditor);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AuditedAttributes>, I>>(object: I): AuditedAttributes {
    const message = createBaseAuditedAttributes();
    message.owner = object.owner ?? "";
    message.auditor = object.auditor ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: AuditedAttributesSDKType): AuditedAttributes {
    return {
      owner: object?.owner,
      auditor: object?.auditor,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): AuditedAttributesSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: AuditedAttributes): AuditedAttributesSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.auditor = message.auditor;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAmino(object: AuditedAttributesAmino): AuditedAttributes {
    const message = createBaseAuditedAttributes();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.auditor !== undefined && object.auditor !== null) {
      message.auditor = object.auditor;
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AuditedAttributes): AuditedAttributesAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.auditor = message.auditor ?? "";
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: AuditedAttributesAminoMsg): AuditedAttributes {
    return AuditedAttributes.fromAmino(object.value);
  },
  toAminoMsg(message: AuditedAttributes): AuditedAttributesAminoMsg {
    return {
      type: "akash/audit/v1beta2/audited-attributes",
      value: AuditedAttributes.toAmino(message)
    };
  },
  fromProtoMsg(message: AuditedAttributesProtoMsg): AuditedAttributes {
    return AuditedAttributes.decode(message.value);
  },
  toProto(message: AuditedAttributes): Uint8Array {
    return AuditedAttributes.encode(message).finish();
  },
  toProtoMsg(message: AuditedAttributes): AuditedAttributesProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta2.AuditedAttributes",
      value: AuditedAttributes.encode(message).finish()
    };
  }
};
function createBaseAttributesResponse(): AttributesResponse {
  return {
    attributes: []
  };
}
export const AttributesResponse = {
  typeUrl: "/akash.audit.v1beta2.AttributesResponse",
  encode(message: AttributesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.attributes) {
      AuditedAttributes.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AttributesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributesResponse();
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
  fromJSON(object: any): AttributesResponse {
    return {
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => AuditedAttributes.fromJSON(e)) : []
    };
  },
  toJSON(message: AttributesResponse): JsonSafe<AttributesResponse> {
    const obj: any = {};
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? AuditedAttributes.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AttributesResponse>, I>>(object: I): AttributesResponse {
    const message = createBaseAttributesResponse();
    message.attributes = object.attributes?.map(e => AuditedAttributes.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: AttributesResponseSDKType): AttributesResponse {
    return {
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => AuditedAttributes.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): AttributesResponseSDKType {
    return {
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => AuditedAttributes.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: AttributesResponse): AttributesResponseSDKType {
    const obj: any = {};
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? AuditedAttributes.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAmino(object: AttributesResponseAmino): AttributesResponse {
    const message = createBaseAttributesResponse();
    message.attributes = object.attributes?.map(e => AuditedAttributes.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AttributesResponse): AttributesResponseAmino {
    const obj: any = {};
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? AuditedAttributes.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: AttributesResponseAminoMsg): AttributesResponse {
    return AttributesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: AttributesResponse): AttributesResponseAminoMsg {
    return {
      type: "akash/audit/v1beta2/attributes-response",
      value: AttributesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: AttributesResponseProtoMsg): AttributesResponse {
    return AttributesResponse.decode(message.value);
  },
  toProto(message: AttributesResponse): Uint8Array {
    return AttributesResponse.encode(message).finish();
  },
  toProtoMsg(message: AttributesResponse): AttributesResponseProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta2.AttributesResponse",
      value: AttributesResponse.encode(message).finish()
    };
  }
};
function createBaseAttributesFilters(): AttributesFilters {
  return {
    auditors: [],
    owners: []
  };
}
export const AttributesFilters = {
  typeUrl: "/akash.audit.v1beta2.AttributesFilters",
  encode(message: AttributesFilters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.auditors) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.owners) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AttributesFilters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributesFilters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auditors.push(reader.string());
          break;
        case 2:
          message.owners.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AttributesFilters {
    return {
      auditors: Array.isArray(object?.auditors) ? object.auditors.map((e: any) => String(e)) : [],
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: AttributesFilters): JsonSafe<AttributesFilters> {
    const obj: any = {};
    if (message.auditors) {
      obj.auditors = message.auditors.map(e => e);
    } else {
      obj.auditors = [];
    }
    if (message.owners) {
      obj.owners = message.owners.map(e => e);
    } else {
      obj.owners = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<AttributesFilters>, I>>(object: I): AttributesFilters {
    const message = createBaseAttributesFilters();
    message.auditors = object.auditors?.map(e => e) || [];
    message.owners = object.owners?.map(e => e) || [];
    return message;
  },
  fromSDK(object: AttributesFiltersSDKType): AttributesFilters {
    return {
      auditors: Array.isArray(object?.auditors) ? object.auditors.map((e: any) => e) : [],
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): AttributesFiltersSDKType {
    return {
      auditors: Array.isArray(object?.auditors) ? object.auditors.map((e: any) => String(e)) : [],
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => String(e)) : []
    };
  },
  toSDK(message: AttributesFilters): AttributesFiltersSDKType {
    const obj: any = {};
    if (message.auditors) {
      obj.auditors = message.auditors.map(e => e);
    } else {
      obj.auditors = [];
    }
    if (message.owners) {
      obj.owners = message.owners.map(e => e);
    } else {
      obj.owners = [];
    }
    return obj;
  },
  fromAmino(object: AttributesFiltersAmino): AttributesFilters {
    const message = createBaseAttributesFilters();
    message.auditors = object.auditors?.map(e => e) || [];
    message.owners = object.owners?.map(e => e) || [];
    return message;
  },
  toAmino(message: AttributesFilters): AttributesFiltersAmino {
    const obj: any = {};
    if (message.auditors) {
      obj.auditors = message.auditors.map(e => e);
    } else {
      obj.auditors = message.auditors;
    }
    if (message.owners) {
      obj.owners = message.owners.map(e => e);
    } else {
      obj.owners = message.owners;
    }
    return obj;
  },
  fromAminoMsg(object: AttributesFiltersAminoMsg): AttributesFilters {
    return AttributesFilters.fromAmino(object.value);
  },
  toAminoMsg(message: AttributesFilters): AttributesFiltersAminoMsg {
    return {
      type: "akash/audit/v1beta2/attributes-filters",
      value: AttributesFilters.toAmino(message)
    };
  },
  fromProtoMsg(message: AttributesFiltersProtoMsg): AttributesFilters {
    return AttributesFilters.decode(message.value);
  },
  toProto(message: AttributesFilters): Uint8Array {
    return AttributesFilters.encode(message).finish();
  },
  toProtoMsg(message: AttributesFilters): AttributesFiltersProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta2.AttributesFilters",
      value: AttributesFilters.encode(message).finish()
    };
  }
};
function createBaseMsgSignProviderAttributes(): MsgSignProviderAttributes {
  return {
    owner: "",
    auditor: "",
    attributes: []
  };
}
export const MsgSignProviderAttributes = {
  typeUrl: "/akash.audit.v1beta2.MsgSignProviderAttributes",
  encode(message: MsgSignProviderAttributes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.auditor !== "") {
      writer.uint32(18).string(message.auditor);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSignProviderAttributes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignProviderAttributes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.auditor = reader.string();
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
  fromJSON(object: any): MsgSignProviderAttributes {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgSignProviderAttributes): JsonSafe<MsgSignProviderAttributes> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.auditor !== undefined && (obj.auditor = message.auditor);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSignProviderAttributes>, I>>(object: I): MsgSignProviderAttributes {
    const message = createBaseMsgSignProviderAttributes();
    message.owner = object.owner ?? "";
    message.auditor = object.auditor ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgSignProviderAttributesSDKType): MsgSignProviderAttributes {
    return {
      owner: object?.owner,
      auditor: object?.auditor,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): MsgSignProviderAttributesSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: MsgSignProviderAttributes): MsgSignProviderAttributesSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.auditor = message.auditor;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAmino(object: MsgSignProviderAttributesAmino): MsgSignProviderAttributes {
    const message = createBaseMsgSignProviderAttributes();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.auditor !== undefined && object.auditor !== null) {
      message.auditor = object.auditor;
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgSignProviderAttributes): MsgSignProviderAttributesAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.auditor = message.auditor ?? "";
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSignProviderAttributesAminoMsg): MsgSignProviderAttributes {
    return MsgSignProviderAttributes.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSignProviderAttributes): MsgSignProviderAttributesAminoMsg {
    return {
      type: "mymessage-testonly",
      value: MsgSignProviderAttributes.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSignProviderAttributesProtoMsg): MsgSignProviderAttributes {
    return MsgSignProviderAttributes.decode(message.value);
  },
  toProto(message: MsgSignProviderAttributes): Uint8Array {
    return MsgSignProviderAttributes.encode(message).finish();
  },
  toProtoMsg(message: MsgSignProviderAttributes): MsgSignProviderAttributesProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta2.MsgSignProviderAttributes",
      value: MsgSignProviderAttributes.encode(message).finish()
    };
  }
};
function createBaseMsgSignProviderAttributesResponse(): MsgSignProviderAttributesResponse {
  return {};
}
export const MsgSignProviderAttributesResponse = {
  typeUrl: "/akash.audit.v1beta2.MsgSignProviderAttributesResponse",
  encode(_: MsgSignProviderAttributesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSignProviderAttributesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignProviderAttributesResponse();
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
  fromJSON(_: any): MsgSignProviderAttributesResponse {
    return {};
  },
  toJSON(_: MsgSignProviderAttributesResponse): JsonSafe<MsgSignProviderAttributesResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSignProviderAttributesResponse>, I>>(_: I): MsgSignProviderAttributesResponse {
    const message = createBaseMsgSignProviderAttributesResponse();
    return message;
  },
  fromSDK(_: MsgSignProviderAttributesResponseSDKType): MsgSignProviderAttributesResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgSignProviderAttributesResponseSDKType {
    return {};
  },
  toSDK(_: MsgSignProviderAttributesResponse): MsgSignProviderAttributesResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgSignProviderAttributesResponseAmino): MsgSignProviderAttributesResponse {
    const message = createBaseMsgSignProviderAttributesResponse();
    return message;
  },
  toAmino(_: MsgSignProviderAttributesResponse): MsgSignProviderAttributesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSignProviderAttributesResponseAminoMsg): MsgSignProviderAttributesResponse {
    return MsgSignProviderAttributesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSignProviderAttributesResponse): MsgSignProviderAttributesResponseAminoMsg {
    return {
      type: "akash/audit/v1beta2/testonly-sign-provider-attributes-response",
      value: MsgSignProviderAttributesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSignProviderAttributesResponseProtoMsg): MsgSignProviderAttributesResponse {
    return MsgSignProviderAttributesResponse.decode(message.value);
  },
  toProto(message: MsgSignProviderAttributesResponse): Uint8Array {
    return MsgSignProviderAttributesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSignProviderAttributesResponse): MsgSignProviderAttributesResponseProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta2.MsgSignProviderAttributesResponse",
      value: MsgSignProviderAttributesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteProviderAttributes(): MsgDeleteProviderAttributes {
  return {
    owner: "",
    auditor: "",
    keys: []
  };
}
export const MsgDeleteProviderAttributes = {
  typeUrl: "/akash.audit.v1beta2.MsgDeleteProviderAttributes",
  encode(message: MsgDeleteProviderAttributes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.auditor !== "") {
      writer.uint32(18).string(message.auditor);
    }
    for (const v of message.keys) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteProviderAttributes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProviderAttributes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.auditor = reader.string();
          break;
        case 3:
          message.keys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeleteProviderAttributes {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: MsgDeleteProviderAttributes): JsonSafe<MsgDeleteProviderAttributes> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.auditor !== undefined && (obj.auditor = message.auditor);
    if (message.keys) {
      obj.keys = message.keys.map(e => e);
    } else {
      obj.keys = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteProviderAttributes>, I>>(object: I): MsgDeleteProviderAttributes {
    const message = createBaseMsgDeleteProviderAttributes();
    message.owner = object.owner ?? "";
    message.auditor = object.auditor ?? "";
    message.keys = object.keys?.map(e => e) || [];
    return message;
  },
  fromSDK(object: MsgDeleteProviderAttributesSDKType): MsgDeleteProviderAttributes {
    return {
      owner: object?.owner,
      auditor: object?.auditor,
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): MsgDeleteProviderAttributesSDKType {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => String(e)) : []
    };
  },
  toSDK(message: MsgDeleteProviderAttributes): MsgDeleteProviderAttributesSDKType {
    const obj: any = {};
    obj.owner = message.owner;
    obj.auditor = message.auditor;
    if (message.keys) {
      obj.keys = message.keys.map(e => e);
    } else {
      obj.keys = [];
    }
    return obj;
  },
  fromAmino(object: MsgDeleteProviderAttributesAmino): MsgDeleteProviderAttributes {
    const message = createBaseMsgDeleteProviderAttributes();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.auditor !== undefined && object.auditor !== null) {
      message.auditor = object.auditor;
    }
    message.keys = object.keys?.map(e => e) || [];
    return message;
  },
  toAmino(message: MsgDeleteProviderAttributes): MsgDeleteProviderAttributesAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.auditor = message.auditor ?? "";
    if (message.keys) {
      obj.keys = message.keys.map(e => e);
    } else {
      obj.keys = message.keys;
    }
    return obj;
  },
  fromAminoMsg(object: MsgDeleteProviderAttributesAminoMsg): MsgDeleteProviderAttributes {
    return MsgDeleteProviderAttributes.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeleteProviderAttributes): MsgDeleteProviderAttributesAminoMsg {
    return {
      type: "akash/audit/v1beta2/testonly-delete-provider-attributes",
      value: MsgDeleteProviderAttributes.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeleteProviderAttributesProtoMsg): MsgDeleteProviderAttributes {
    return MsgDeleteProviderAttributes.decode(message.value);
  },
  toProto(message: MsgDeleteProviderAttributes): Uint8Array {
    return MsgDeleteProviderAttributes.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteProviderAttributes): MsgDeleteProviderAttributesProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta2.MsgDeleteProviderAttributes",
      value: MsgDeleteProviderAttributes.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteProviderAttributesResponse(): MsgDeleteProviderAttributesResponse {
  return {};
}
export const MsgDeleteProviderAttributesResponse = {
  typeUrl: "/akash.audit.v1beta2.MsgDeleteProviderAttributesResponse",
  encode(_: MsgDeleteProviderAttributesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteProviderAttributesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProviderAttributesResponse();
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
  fromJSON(_: any): MsgDeleteProviderAttributesResponse {
    return {};
  },
  toJSON(_: MsgDeleteProviderAttributesResponse): JsonSafe<MsgDeleteProviderAttributesResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeleteProviderAttributesResponse>, I>>(_: I): MsgDeleteProviderAttributesResponse {
    const message = createBaseMsgDeleteProviderAttributesResponse();
    return message;
  },
  fromSDK(_: MsgDeleteProviderAttributesResponseSDKType): MsgDeleteProviderAttributesResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgDeleteProviderAttributesResponseSDKType {
    return {};
  },
  toSDK(_: MsgDeleteProviderAttributesResponse): MsgDeleteProviderAttributesResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgDeleteProviderAttributesResponseAmino): MsgDeleteProviderAttributesResponse {
    const message = createBaseMsgDeleteProviderAttributesResponse();
    return message;
  },
  toAmino(_: MsgDeleteProviderAttributesResponse): MsgDeleteProviderAttributesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteProviderAttributesResponseAminoMsg): MsgDeleteProviderAttributesResponse {
    return MsgDeleteProviderAttributesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeleteProviderAttributesResponse): MsgDeleteProviderAttributesResponseAminoMsg {
    return {
      type: "akash/audit/v1beta2/testonly-delete-provider-attributes-response",
      value: MsgDeleteProviderAttributesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDeleteProviderAttributesResponseProtoMsg): MsgDeleteProviderAttributesResponse {
    return MsgDeleteProviderAttributesResponse.decode(message.value);
  },
  toProto(message: MsgDeleteProviderAttributesResponse): Uint8Array {
    return MsgDeleteProviderAttributesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteProviderAttributesResponse): MsgDeleteProviderAttributesResponseProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta2.MsgDeleteProviderAttributesResponse",
      value: MsgDeleteProviderAttributesResponse.encode(message).finish()
    };
  }
};