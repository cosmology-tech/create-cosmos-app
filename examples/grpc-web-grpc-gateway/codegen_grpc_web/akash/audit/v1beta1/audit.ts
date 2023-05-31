import { Attribute, AttributeAmino, AttributeSDKType } from "../../base/v1beta1/attribute";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.audit.v1beta1";
/** Provider stores owner auditor and attributes details */
export interface Provider {
  owner: string;
  auditor: string;
  attributes: Attribute[];
}
export interface ProviderProtoMsg {
  typeUrl: "/akash.audit.v1beta1.Provider";
  value: Uint8Array;
}
/** Provider stores owner auditor and attributes details */
export interface ProviderAmino {
  owner: string;
  auditor: string;
  attributes: AttributeAmino[];
}
export interface ProviderAminoMsg {
  type: "/akash.audit.v1beta1.Provider";
  value: ProviderAmino;
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
export interface AuditedAttributesProtoMsg {
  typeUrl: "/akash.audit.v1beta1.AuditedAttributes";
  value: Uint8Array;
}
/** Attributes */
export interface AuditedAttributesAmino {
  owner: string;
  auditor: string;
  attributes: AttributeAmino[];
}
export interface AuditedAttributesAminoMsg {
  type: "/akash.audit.v1beta1.AuditedAttributes";
  value: AuditedAttributesAmino;
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
export interface AttributesResponseProtoMsg {
  typeUrl: "/akash.audit.v1beta1.AttributesResponse";
  value: Uint8Array;
}
/** AttributesResponse represents details of deployment along with group details */
export interface AttributesResponseAmino {
  attributes: AuditedAttributesAmino[];
}
export interface AttributesResponseAminoMsg {
  type: "/akash.audit.v1beta1.AttributesResponse";
  value: AttributesResponseAmino;
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
export interface AttributesFiltersProtoMsg {
  typeUrl: "/akash.audit.v1beta1.AttributesFilters";
  value: Uint8Array;
}
/** AttributesFilters defines filters used to filter deployments */
export interface AttributesFiltersAmino {
  auditors: string[];
  owners: string[];
}
export interface AttributesFiltersAminoMsg {
  type: "/akash.audit.v1beta1.AttributesFilters";
  value: AttributesFiltersAmino;
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
export interface MsgSignProviderAttributesProtoMsg {
  typeUrl: "/akash.audit.v1beta1.MsgSignProviderAttributes";
  value: Uint8Array;
}
/** MsgSignProviderAttributes defines an SDK message for signing a provider attributes */
export interface MsgSignProviderAttributesAmino {
  owner: string;
  auditor: string;
  attributes: AttributeAmino[];
}
export interface MsgSignProviderAttributesAminoMsg {
  type: "/akash.audit.v1beta1.MsgSignProviderAttributes";
  value: MsgSignProviderAttributesAmino;
}
/** MsgSignProviderAttributes defines an SDK message for signing a provider attributes */
export interface MsgSignProviderAttributesSDKType {
  owner: string;
  auditor: string;
  attributes: AttributeSDKType[];
}
/** MsgSignProviderAttributesResponse defines the Msg/CreateProvider response type. */
export interface MsgSignProviderAttributesResponse {}
export interface MsgSignProviderAttributesResponseProtoMsg {
  typeUrl: "/akash.audit.v1beta1.MsgSignProviderAttributesResponse";
  value: Uint8Array;
}
/** MsgSignProviderAttributesResponse defines the Msg/CreateProvider response type. */
export interface MsgSignProviderAttributesResponseAmino {}
export interface MsgSignProviderAttributesResponseAminoMsg {
  type: "/akash.audit.v1beta1.MsgSignProviderAttributesResponse";
  value: MsgSignProviderAttributesResponseAmino;
}
/** MsgSignProviderAttributesResponse defines the Msg/CreateProvider response type. */
export interface MsgSignProviderAttributesResponseSDKType {}
/** MsgDeleteProviderAttributes defined the Msg/DeleteProviderAttributes */
export interface MsgDeleteProviderAttributes {
  owner: string;
  auditor: string;
  keys: string[];
}
export interface MsgDeleteProviderAttributesProtoMsg {
  typeUrl: "/akash.audit.v1beta1.MsgDeleteProviderAttributes";
  value: Uint8Array;
}
/** MsgDeleteProviderAttributes defined the Msg/DeleteProviderAttributes */
export interface MsgDeleteProviderAttributesAmino {
  owner: string;
  auditor: string;
  keys: string[];
}
export interface MsgDeleteProviderAttributesAminoMsg {
  type: "/akash.audit.v1beta1.MsgDeleteProviderAttributes";
  value: MsgDeleteProviderAttributesAmino;
}
/** MsgDeleteProviderAttributes defined the Msg/DeleteProviderAttributes */
export interface MsgDeleteProviderAttributesSDKType {
  owner: string;
  auditor: string;
  keys: string[];
}
/** MsgDeleteProviderAttributesResponse defines the Msg/ProviderAttributes response type. */
export interface MsgDeleteProviderAttributesResponse {}
export interface MsgDeleteProviderAttributesResponseProtoMsg {
  typeUrl: "/akash.audit.v1beta1.MsgDeleteProviderAttributesResponse";
  value: Uint8Array;
}
/** MsgDeleteProviderAttributesResponse defines the Msg/ProviderAttributes response type. */
export interface MsgDeleteProviderAttributesResponseAmino {}
export interface MsgDeleteProviderAttributesResponseAminoMsg {
  type: "/akash.audit.v1beta1.MsgDeleteProviderAttributesResponse";
  value: MsgDeleteProviderAttributesResponseAmino;
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
  typeUrl: "/akash.audit.v1beta1.Provider",
  encode(message: Provider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): Provider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  toJSON(message: Provider): unknown {
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
  fromPartial(object: DeepPartial<Provider>): Provider {
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
    return {
      owner: object.owner,
      auditor: object.auditor,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromAmino(e)) : []
    };
  },
  toAmino(message: Provider): ProviderAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.auditor = message.auditor;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAminoMsg(object: ProviderAminoMsg): Provider {
    return Provider.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderProtoMsg): Provider {
    return Provider.decode(message.value);
  },
  toProto(message: Provider): Uint8Array {
    return Provider.encode(message).finish();
  },
  toProtoMsg(message: Provider): ProviderProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta1.Provider",
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
  typeUrl: "/akash.audit.v1beta1.AuditedAttributes",
  encode(message: AuditedAttributes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): AuditedAttributes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  toJSON(message: AuditedAttributes): unknown {
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
  fromPartial(object: DeepPartial<AuditedAttributes>): AuditedAttributes {
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
    return {
      owner: object.owner,
      auditor: object.auditor,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromAmino(e)) : []
    };
  },
  toAmino(message: AuditedAttributes): AuditedAttributesAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.auditor = message.auditor;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAminoMsg(object: AuditedAttributesAminoMsg): AuditedAttributes {
    return AuditedAttributes.fromAmino(object.value);
  },
  fromProtoMsg(message: AuditedAttributesProtoMsg): AuditedAttributes {
    return AuditedAttributes.decode(message.value);
  },
  toProto(message: AuditedAttributes): Uint8Array {
    return AuditedAttributes.encode(message).finish();
  },
  toProtoMsg(message: AuditedAttributes): AuditedAttributesProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta1.AuditedAttributes",
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
  typeUrl: "/akash.audit.v1beta1.AttributesResponse",
  encode(message: AttributesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.attributes) {
      AuditedAttributes.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AttributesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  toJSON(message: AttributesResponse): unknown {
    const obj: any = {};
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? AuditedAttributes.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<AttributesResponse>): AttributesResponse {
    const message = createBaseAttributesResponse();
    message.attributes = object.attributes?.map(e => AuditedAttributes.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: AttributesResponseSDKType): AttributesResponse {
    return {
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => AuditedAttributes.fromSDK(e)) : []
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
    return {
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => AuditedAttributes.fromAmino(e)) : []
    };
  },
  toAmino(message: AttributesResponse): AttributesResponseAmino {
    const obj: any = {};
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? AuditedAttributes.toAmino(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAminoMsg(object: AttributesResponseAminoMsg): AttributesResponse {
    return AttributesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: AttributesResponseProtoMsg): AttributesResponse {
    return AttributesResponse.decode(message.value);
  },
  toProto(message: AttributesResponse): Uint8Array {
    return AttributesResponse.encode(message).finish();
  },
  toProtoMsg(message: AttributesResponse): AttributesResponseProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta1.AttributesResponse",
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
  typeUrl: "/akash.audit.v1beta1.AttributesFilters",
  encode(message: AttributesFilters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.auditors) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.owners) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AttributesFilters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  toJSON(message: AttributesFilters): unknown {
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
  fromPartial(object: DeepPartial<AttributesFilters>): AttributesFilters {
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
    return {
      auditors: Array.isArray(object?.auditors) ? object.auditors.map((e: any) => e) : [],
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => e) : []
    };
  },
  toAmino(message: AttributesFilters): AttributesFiltersAmino {
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
  fromAminoMsg(object: AttributesFiltersAminoMsg): AttributesFilters {
    return AttributesFilters.fromAmino(object.value);
  },
  fromProtoMsg(message: AttributesFiltersProtoMsg): AttributesFilters {
    return AttributesFilters.decode(message.value);
  },
  toProto(message: AttributesFilters): Uint8Array {
    return AttributesFilters.encode(message).finish();
  },
  toProtoMsg(message: AttributesFilters): AttributesFiltersProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta1.AttributesFilters",
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
  typeUrl: "/akash.audit.v1beta1.MsgSignProviderAttributes",
  encode(message: MsgSignProviderAttributes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignProviderAttributes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  toJSON(message: MsgSignProviderAttributes): unknown {
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
  fromPartial(object: DeepPartial<MsgSignProviderAttributes>): MsgSignProviderAttributes {
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
    return {
      owner: object.owner,
      auditor: object.auditor,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgSignProviderAttributes): MsgSignProviderAttributesAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.auditor = message.auditor;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgSignProviderAttributesAminoMsg): MsgSignProviderAttributes {
    return MsgSignProviderAttributes.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSignProviderAttributesProtoMsg): MsgSignProviderAttributes {
    return MsgSignProviderAttributes.decode(message.value);
  },
  toProto(message: MsgSignProviderAttributes): Uint8Array {
    return MsgSignProviderAttributes.encode(message).finish();
  },
  toProtoMsg(message: MsgSignProviderAttributes): MsgSignProviderAttributesProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta1.MsgSignProviderAttributes",
      value: MsgSignProviderAttributes.encode(message).finish()
    };
  }
};
function createBaseMsgSignProviderAttributesResponse(): MsgSignProviderAttributesResponse {
  return {};
}
export const MsgSignProviderAttributesResponse = {
  typeUrl: "/akash.audit.v1beta1.MsgSignProviderAttributesResponse",
  encode(_: MsgSignProviderAttributesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignProviderAttributesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  toJSON(_: MsgSignProviderAttributesResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSignProviderAttributesResponse>): MsgSignProviderAttributesResponse {
    const message = createBaseMsgSignProviderAttributesResponse();
    return message;
  },
  fromSDK(_: MsgSignProviderAttributesResponseSDKType): MsgSignProviderAttributesResponse {
    return {};
  },
  toSDK(_: MsgSignProviderAttributesResponse): MsgSignProviderAttributesResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgSignProviderAttributesResponseAmino): MsgSignProviderAttributesResponse {
    return {};
  },
  toAmino(_: MsgSignProviderAttributesResponse): MsgSignProviderAttributesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSignProviderAttributesResponseAminoMsg): MsgSignProviderAttributesResponse {
    return MsgSignProviderAttributesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSignProviderAttributesResponseProtoMsg): MsgSignProviderAttributesResponse {
    return MsgSignProviderAttributesResponse.decode(message.value);
  },
  toProto(message: MsgSignProviderAttributesResponse): Uint8Array {
    return MsgSignProviderAttributesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSignProviderAttributesResponse): MsgSignProviderAttributesResponseProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta1.MsgSignProviderAttributesResponse",
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
  typeUrl: "/akash.audit.v1beta1.MsgDeleteProviderAttributes",
  encode(message: MsgDeleteProviderAttributes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProviderAttributes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  toJSON(message: MsgDeleteProviderAttributes): unknown {
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
  fromPartial(object: DeepPartial<MsgDeleteProviderAttributes>): MsgDeleteProviderAttributes {
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
    return {
      owner: object.owner,
      auditor: object.auditor,
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => e) : []
    };
  },
  toAmino(message: MsgDeleteProviderAttributes): MsgDeleteProviderAttributesAmino {
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
  fromAminoMsg(object: MsgDeleteProviderAttributesAminoMsg): MsgDeleteProviderAttributes {
    return MsgDeleteProviderAttributes.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteProviderAttributesProtoMsg): MsgDeleteProviderAttributes {
    return MsgDeleteProviderAttributes.decode(message.value);
  },
  toProto(message: MsgDeleteProviderAttributes): Uint8Array {
    return MsgDeleteProviderAttributes.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteProviderAttributes): MsgDeleteProviderAttributesProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta1.MsgDeleteProviderAttributes",
      value: MsgDeleteProviderAttributes.encode(message).finish()
    };
  }
};
function createBaseMsgDeleteProviderAttributesResponse(): MsgDeleteProviderAttributesResponse {
  return {};
}
export const MsgDeleteProviderAttributesResponse = {
  typeUrl: "/akash.audit.v1beta1.MsgDeleteProviderAttributesResponse",
  encode(_: MsgDeleteProviderAttributesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProviderAttributesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  toJSON(_: MsgDeleteProviderAttributesResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgDeleteProviderAttributesResponse>): MsgDeleteProviderAttributesResponse {
    const message = createBaseMsgDeleteProviderAttributesResponse();
    return message;
  },
  fromSDK(_: MsgDeleteProviderAttributesResponseSDKType): MsgDeleteProviderAttributesResponse {
    return {};
  },
  toSDK(_: MsgDeleteProviderAttributesResponse): MsgDeleteProviderAttributesResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgDeleteProviderAttributesResponseAmino): MsgDeleteProviderAttributesResponse {
    return {};
  },
  toAmino(_: MsgDeleteProviderAttributesResponse): MsgDeleteProviderAttributesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteProviderAttributesResponseAminoMsg): MsgDeleteProviderAttributesResponse {
    return MsgDeleteProviderAttributesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteProviderAttributesResponseProtoMsg): MsgDeleteProviderAttributesResponse {
    return MsgDeleteProviderAttributesResponse.decode(message.value);
  },
  toProto(message: MsgDeleteProviderAttributesResponse): Uint8Array {
    return MsgDeleteProviderAttributesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteProviderAttributesResponse): MsgDeleteProviderAttributesResponseProtoMsg {
    return {
      typeUrl: "/akash.audit.v1beta1.MsgDeleteProviderAttributesResponse",
      value: MsgDeleteProviderAttributesResponse.encode(message).finish()
    };
  }
};