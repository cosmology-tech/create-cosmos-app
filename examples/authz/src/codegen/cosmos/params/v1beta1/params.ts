//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.params.v1beta1";
/** ParameterChangeProposal defines a proposal to change one or more parameters. */
export interface ParameterChangeProposal {
  $typeUrl?: "/cosmos.params.v1beta1.ParameterChangeProposal";
  title: string;
  description: string;
  changes: ParamChange[];
}
export interface ParameterChangeProposalProtoMsg {
  typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal";
  value: Uint8Array;
}
/** ParameterChangeProposal defines a proposal to change one or more parameters. */
export interface ParameterChangeProposalAmino {
  title?: string;
  description?: string;
  changes?: ParamChangeAmino[];
}
export interface ParameterChangeProposalAminoMsg {
  type: "cosmos-sdk/ParameterChangeProposal";
  value: ParameterChangeProposalAmino;
}
/** ParameterChangeProposal defines a proposal to change one or more parameters. */
export interface ParameterChangeProposalSDKType {
  $typeUrl?: "/cosmos.params.v1beta1.ParameterChangeProposal";
  title: string;
  description: string;
  changes: ParamChangeSDKType[];
}
/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */
export interface ParamChange {
  subspace: string;
  key: string;
  value: string;
}
export interface ParamChangeProtoMsg {
  typeUrl: "/cosmos.params.v1beta1.ParamChange";
  value: Uint8Array;
}
/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */
export interface ParamChangeAmino {
  subspace?: string;
  key?: string;
  value?: string;
}
export interface ParamChangeAminoMsg {
  type: "cosmos-sdk/ParamChange";
  value: ParamChangeAmino;
}
/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */
export interface ParamChangeSDKType {
  subspace: string;
  key: string;
  value: string;
}
function createBaseParameterChangeProposal(): ParameterChangeProposal {
  return {
    $typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
    title: "",
    description: "",
    changes: []
  };
}
export const ParameterChangeProposal = {
  typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
  aminoType: "cosmos-sdk/ParameterChangeProposal",
  is(o: any): o is ParameterChangeProposal {
    return o && (o.$typeUrl === ParameterChangeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.changes) && (!o.changes.length || ParamChange.is(o.changes[0])));
  },
  isSDK(o: any): o is ParameterChangeProposalSDKType {
    return o && (o.$typeUrl === ParameterChangeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.changes) && (!o.changes.length || ParamChange.isSDK(o.changes[0])));
  },
  isAmino(o: any): o is ParameterChangeProposalAmino {
    return o && (o.$typeUrl === ParameterChangeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && Array.isArray(o.changes) && (!o.changes.length || ParamChange.isAmino(o.changes[0])));
  },
  encode(message: ParameterChangeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== undefined) {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== undefined) {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.changes) {
      ParamChange.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParameterChangeProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParameterChangeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.changes.push(ParamChange.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ParameterChangeProposal {
    const obj = createBaseParameterChangeProposal();
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.description)) obj.description = String(object.description);
    if (Array.isArray(object?.changes)) obj.changes = object.changes.map((e: any) => ParamChange.fromJSON(e));
    return obj;
  },
  toJSON(message: ParameterChangeProposal): JsonSafe<ParameterChangeProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.changes) {
      obj.changes = message.changes.map(e => e ? ParamChange.toJSON(e) : undefined);
    } else {
      obj.changes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ParameterChangeProposal>): ParameterChangeProposal {
    const message = createBaseParameterChangeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.changes = object.changes?.map(e => ParamChange.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ParameterChangeProposalSDKType): ParameterChangeProposal {
    return {
      title: object?.title,
      description: object?.description,
      changes: Array.isArray(object?.changes) ? object.changes.map((e: any) => ParamChange.fromSDK(e)) : []
    };
  },
  toSDK(message: ParameterChangeProposal): ParameterChangeProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.changes) {
      obj.changes = message.changes.map(e => e ? ParamChange.toSDK(e) : undefined);
    } else {
      obj.changes = [];
    }
    return obj;
  },
  fromAmino(object: ParameterChangeProposalAmino): ParameterChangeProposal {
    const message = createBaseParameterChangeProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.changes = object.changes?.map(e => ParamChange.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ParameterChangeProposal): ParameterChangeProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.changes) {
      obj.changes = message.changes.map(e => e ? ParamChange.toAmino(e) : undefined);
    } else {
      obj.changes = message.changes;
    }
    return obj;
  },
  fromAminoMsg(object: ParameterChangeProposalAminoMsg): ParameterChangeProposal {
    return ParameterChangeProposal.fromAmino(object.value);
  },
  toAminoMsg(message: ParameterChangeProposal): ParameterChangeProposalAminoMsg {
    return {
      type: "cosmos-sdk/ParameterChangeProposal",
      value: ParameterChangeProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: ParameterChangeProposalProtoMsg): ParameterChangeProposal {
    return ParameterChangeProposal.decode(message.value);
  },
  toProto(message: ParameterChangeProposal): Uint8Array {
    return ParameterChangeProposal.encode(message).finish();
  },
  toProtoMsg(message: ParameterChangeProposal): ParameterChangeProposalProtoMsg {
    return {
      typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
      value: ParameterChangeProposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ParameterChangeProposal.typeUrl, ParameterChangeProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(ParameterChangeProposal.aminoType, ParameterChangeProposal.typeUrl);
function createBaseParamChange(): ParamChange {
  return {
    subspace: "",
    key: "",
    value: ""
  };
}
export const ParamChange = {
  typeUrl: "/cosmos.params.v1beta1.ParamChange",
  aminoType: "cosmos-sdk/ParamChange",
  is(o: any): o is ParamChange {
    return o && (o.$typeUrl === ParamChange.typeUrl || typeof o.subspace === "string" && typeof o.key === "string" && typeof o.value === "string");
  },
  isSDK(o: any): o is ParamChangeSDKType {
    return o && (o.$typeUrl === ParamChange.typeUrl || typeof o.subspace === "string" && typeof o.key === "string" && typeof o.value === "string");
  },
  isAmino(o: any): o is ParamChangeAmino {
    return o && (o.$typeUrl === ParamChange.typeUrl || typeof o.subspace === "string" && typeof o.key === "string" && typeof o.value === "string");
  },
  encode(message: ParamChange, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.subspace !== undefined) {
      writer.uint32(10).string(message.subspace);
    }
    if (message.key !== undefined) {
      writer.uint32(18).string(message.key);
    }
    if (message.value !== undefined) {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamChange {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subspace = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ParamChange {
    const obj = createBaseParamChange();
    if (isSet(object.subspace)) obj.subspace = String(object.subspace);
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.value)) obj.value = String(object.value);
    return obj;
  },
  toJSON(message: ParamChange): JsonSafe<ParamChange> {
    const obj: any = {};
    message.subspace !== undefined && (obj.subspace = message.subspace);
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<ParamChange>): ParamChange {
    const message = createBaseParamChange();
    message.subspace = object.subspace ?? "";
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: ParamChangeSDKType): ParamChange {
    return {
      subspace: object?.subspace,
      key: object?.key,
      value: object?.value
    };
  },
  toSDK(message: ParamChange): ParamChangeSDKType {
    const obj: any = {};
    obj.subspace = message.subspace;
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: ParamChangeAmino): ParamChange {
    const message = createBaseParamChange();
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = object.subspace;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: ParamChange): ParamChangeAmino {
    const obj: any = {};
    obj.subspace = message.subspace === "" ? undefined : message.subspace;
    obj.key = message.key === "" ? undefined : message.key;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: ParamChangeAminoMsg): ParamChange {
    return ParamChange.fromAmino(object.value);
  },
  toAminoMsg(message: ParamChange): ParamChangeAminoMsg {
    return {
      type: "cosmos-sdk/ParamChange",
      value: ParamChange.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamChangeProtoMsg): ParamChange {
    return ParamChange.decode(message.value);
  },
  toProto(message: ParamChange): Uint8Array {
    return ParamChange.encode(message).finish();
  },
  toProtoMsg(message: ParamChange): ParamChangeProtoMsg {
    return {
      typeUrl: "/cosmos.params.v1beta1.ParamChange",
      value: ParamChange.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ParamChange.typeUrl, ParamChange);
GlobalDecoderRegistry.registerAminoProtoMapping(ParamChange.aminoType, ParamChange.typeUrl);