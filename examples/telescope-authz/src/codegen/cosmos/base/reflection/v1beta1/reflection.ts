import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial, isSet } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "cosmos.base.reflection.v1beta1";
/** ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesRequest {}
export interface ListAllInterfacesRequestProtoMsg {
  typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesRequest";
  value: Uint8Array;
}
/** ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesRequestAmino {}
export interface ListAllInterfacesRequestAminoMsg {
  type: "cosmos-sdk/ListAllInterfacesRequest";
  value: ListAllInterfacesRequestAmino;
}
/** ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesRequestSDKType {}
/** ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesResponse {
  /** interface_names is an array of all the registered interfaces. */
  interfaceNames: string[];
}
export interface ListAllInterfacesResponseProtoMsg {
  typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesResponse";
  value: Uint8Array;
}
/** ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesResponseAmino {
  /** interface_names is an array of all the registered interfaces. */
  interface_names?: string[];
}
export interface ListAllInterfacesResponseAminoMsg {
  type: "cosmos-sdk/ListAllInterfacesResponse";
  value: ListAllInterfacesResponseAmino;
}
/** ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesResponseSDKType {
  interface_names: string[];
}
/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsRequest {
  /** interface_name defines the interface to query the implementations for. */
  interfaceName: string;
}
export interface ListImplementationsRequestProtoMsg {
  typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsRequest";
  value: Uint8Array;
}
/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsRequestAmino {
  /** interface_name defines the interface to query the implementations for. */
  interface_name?: string;
}
export interface ListImplementationsRequestAminoMsg {
  type: "cosmos-sdk/ListImplementationsRequest";
  value: ListImplementationsRequestAmino;
}
/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsRequestSDKType {
  interface_name: string;
}
/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsResponse {
  implementationMessageNames: string[];
}
export interface ListImplementationsResponseProtoMsg {
  typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsResponse";
  value: Uint8Array;
}
/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsResponseAmino {
  implementation_message_names?: string[];
}
export interface ListImplementationsResponseAminoMsg {
  type: "cosmos-sdk/ListImplementationsResponse";
  value: ListImplementationsResponseAmino;
}
/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsResponseSDKType {
  implementation_message_names: string[];
}
function createBaseListAllInterfacesRequest(): ListAllInterfacesRequest {
  return {};
}
export const ListAllInterfacesRequest = {
  typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesRequest",
  aminoType: "cosmos-sdk/ListAllInterfacesRequest",
  is(o: any): o is ListAllInterfacesRequest {
    return o && o.$typeUrl === ListAllInterfacesRequest.typeUrl;
  },
  isSDK(o: any): o is ListAllInterfacesRequestSDKType {
    return o && o.$typeUrl === ListAllInterfacesRequest.typeUrl;
  },
  isAmino(o: any): o is ListAllInterfacesRequestAmino {
    return o && o.$typeUrl === ListAllInterfacesRequest.typeUrl;
  },
  encode(_: ListAllInterfacesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListAllInterfacesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAllInterfacesRequest();
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
  fromJSON(_: any): ListAllInterfacesRequest {
    const obj = createBaseListAllInterfacesRequest();
    return obj;
  },
  toJSON(_: ListAllInterfacesRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<ListAllInterfacesRequest>): ListAllInterfacesRequest {
    const message = createBaseListAllInterfacesRequest();
    return message;
  },
  fromSDK(_: ListAllInterfacesRequestSDKType): ListAllInterfacesRequest {
    return {};
  },
  toSDK(_: ListAllInterfacesRequest): ListAllInterfacesRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: ListAllInterfacesRequestAmino): ListAllInterfacesRequest {
    const message = createBaseListAllInterfacesRequest();
    return message;
  },
  toAmino(_: ListAllInterfacesRequest): ListAllInterfacesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ListAllInterfacesRequestAminoMsg): ListAllInterfacesRequest {
    return ListAllInterfacesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ListAllInterfacesRequest): ListAllInterfacesRequestAminoMsg {
    return {
      type: "cosmos-sdk/ListAllInterfacesRequest",
      value: ListAllInterfacesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ListAllInterfacesRequestProtoMsg): ListAllInterfacesRequest {
    return ListAllInterfacesRequest.decode(message.value);
  },
  toProto(message: ListAllInterfacesRequest): Uint8Array {
    return ListAllInterfacesRequest.encode(message).finish();
  },
  toProtoMsg(message: ListAllInterfacesRequest): ListAllInterfacesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesRequest",
      value: ListAllInterfacesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ListAllInterfacesRequest.typeUrl, ListAllInterfacesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ListAllInterfacesRequest.aminoType, ListAllInterfacesRequest.typeUrl);
function createBaseListAllInterfacesResponse(): ListAllInterfacesResponse {
  return {
    interfaceNames: []
  };
}
export const ListAllInterfacesResponse = {
  typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesResponse",
  aminoType: "cosmos-sdk/ListAllInterfacesResponse",
  is(o: any): o is ListAllInterfacesResponse {
    return o && (o.$typeUrl === ListAllInterfacesResponse.typeUrl || Array.isArray(o.interfaceNames) && (!o.interfaceNames.length || typeof o.interfaceNames[0] === "string"));
  },
  isSDK(o: any): o is ListAllInterfacesResponseSDKType {
    return o && (o.$typeUrl === ListAllInterfacesResponse.typeUrl || Array.isArray(o.interface_names) && (!o.interface_names.length || typeof o.interface_names[0] === "string"));
  },
  isAmino(o: any): o is ListAllInterfacesResponseAmino {
    return o && (o.$typeUrl === ListAllInterfacesResponse.typeUrl || Array.isArray(o.interface_names) && (!o.interface_names.length || typeof o.interface_names[0] === "string"));
  },
  encode(message: ListAllInterfacesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.interfaceNames) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListAllInterfacesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAllInterfacesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interfaceNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListAllInterfacesResponse {
    const obj = createBaseListAllInterfacesResponse();
    if (Array.isArray(object?.interfaceNames)) obj.interfaceNames = object.interfaceNames.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: ListAllInterfacesResponse): unknown {
    const obj: any = {};
    if (message.interfaceNames) {
      obj.interfaceNames = message.interfaceNames.map(e => e);
    } else {
      obj.interfaceNames = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ListAllInterfacesResponse>): ListAllInterfacesResponse {
    const message = createBaseListAllInterfacesResponse();
    message.interfaceNames = object.interfaceNames?.map(e => e) || [];
    return message;
  },
  fromSDK(object: ListAllInterfacesResponseSDKType): ListAllInterfacesResponse {
    return {
      interfaceNames: Array.isArray(object?.interface_names) ? object.interface_names.map((e: any) => e) : []
    };
  },
  toSDK(message: ListAllInterfacesResponse): ListAllInterfacesResponseSDKType {
    const obj: any = {};
    if (message.interfaceNames) {
      obj.interface_names = message.interfaceNames.map(e => e);
    } else {
      obj.interface_names = [];
    }
    return obj;
  },
  fromAmino(object: ListAllInterfacesResponseAmino): ListAllInterfacesResponse {
    const message = createBaseListAllInterfacesResponse();
    message.interfaceNames = object.interface_names?.map(e => e) || [];
    return message;
  },
  toAmino(message: ListAllInterfacesResponse): ListAllInterfacesResponseAmino {
    const obj: any = {};
    if (message.interfaceNames) {
      obj.interface_names = message.interfaceNames.map(e => e);
    } else {
      obj.interface_names = [];
    }
    return obj;
  },
  fromAminoMsg(object: ListAllInterfacesResponseAminoMsg): ListAllInterfacesResponse {
    return ListAllInterfacesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ListAllInterfacesResponse): ListAllInterfacesResponseAminoMsg {
    return {
      type: "cosmos-sdk/ListAllInterfacesResponse",
      value: ListAllInterfacesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ListAllInterfacesResponseProtoMsg): ListAllInterfacesResponse {
    return ListAllInterfacesResponse.decode(message.value);
  },
  toProto(message: ListAllInterfacesResponse): Uint8Array {
    return ListAllInterfacesResponse.encode(message).finish();
  },
  toProtoMsg(message: ListAllInterfacesResponse): ListAllInterfacesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v1beta1.ListAllInterfacesResponse",
      value: ListAllInterfacesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ListAllInterfacesResponse.typeUrl, ListAllInterfacesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ListAllInterfacesResponse.aminoType, ListAllInterfacesResponse.typeUrl);
function createBaseListImplementationsRequest(): ListImplementationsRequest {
  return {
    interfaceName: ""
  };
}
export const ListImplementationsRequest = {
  typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsRequest",
  aminoType: "cosmos-sdk/ListImplementationsRequest",
  is(o: any): o is ListImplementationsRequest {
    return o && (o.$typeUrl === ListImplementationsRequest.typeUrl || typeof o.interfaceName === "string");
  },
  isSDK(o: any): o is ListImplementationsRequestSDKType {
    return o && (o.$typeUrl === ListImplementationsRequest.typeUrl || typeof o.interface_name === "string");
  },
  isAmino(o: any): o is ListImplementationsRequestAmino {
    return o && (o.$typeUrl === ListImplementationsRequest.typeUrl || typeof o.interface_name === "string");
  },
  encode(message: ListImplementationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.interfaceName !== undefined) {
      writer.uint32(10).string(message.interfaceName);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListImplementationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListImplementationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interfaceName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListImplementationsRequest {
    const obj = createBaseListImplementationsRequest();
    if (isSet(object.interfaceName)) obj.interfaceName = String(object.interfaceName);
    return obj;
  },
  toJSON(message: ListImplementationsRequest): unknown {
    const obj: any = {};
    message.interfaceName !== undefined && (obj.interfaceName = message.interfaceName);
    return obj;
  },
  fromPartial(object: DeepPartial<ListImplementationsRequest>): ListImplementationsRequest {
    const message = createBaseListImplementationsRequest();
    message.interfaceName = object.interfaceName ?? "";
    return message;
  },
  fromSDK(object: ListImplementationsRequestSDKType): ListImplementationsRequest {
    return {
      interfaceName: object?.interface_name
    };
  },
  toSDK(message: ListImplementationsRequest): ListImplementationsRequestSDKType {
    const obj: any = {};
    obj.interface_name = message.interfaceName;
    return obj;
  },
  fromAmino(object: ListImplementationsRequestAmino): ListImplementationsRequest {
    const message = createBaseListImplementationsRequest();
    if (object.interface_name !== undefined && object.interface_name !== null) {
      message.interfaceName = object.interface_name;
    }
    return message;
  },
  toAmino(message: ListImplementationsRequest): ListImplementationsRequestAmino {
    const obj: any = {};
    obj.interface_name = message.interfaceName;
    return obj;
  },
  fromAminoMsg(object: ListImplementationsRequestAminoMsg): ListImplementationsRequest {
    return ListImplementationsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ListImplementationsRequest): ListImplementationsRequestAminoMsg {
    return {
      type: "cosmos-sdk/ListImplementationsRequest",
      value: ListImplementationsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ListImplementationsRequestProtoMsg): ListImplementationsRequest {
    return ListImplementationsRequest.decode(message.value);
  },
  toProto(message: ListImplementationsRequest): Uint8Array {
    return ListImplementationsRequest.encode(message).finish();
  },
  toProtoMsg(message: ListImplementationsRequest): ListImplementationsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsRequest",
      value: ListImplementationsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ListImplementationsRequest.typeUrl, ListImplementationsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ListImplementationsRequest.aminoType, ListImplementationsRequest.typeUrl);
function createBaseListImplementationsResponse(): ListImplementationsResponse {
  return {
    implementationMessageNames: []
  };
}
export const ListImplementationsResponse = {
  typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsResponse",
  aminoType: "cosmos-sdk/ListImplementationsResponse",
  is(o: any): o is ListImplementationsResponse {
    return o && (o.$typeUrl === ListImplementationsResponse.typeUrl || Array.isArray(o.implementationMessageNames) && (!o.implementationMessageNames.length || typeof o.implementationMessageNames[0] === "string"));
  },
  isSDK(o: any): o is ListImplementationsResponseSDKType {
    return o && (o.$typeUrl === ListImplementationsResponse.typeUrl || Array.isArray(o.implementation_message_names) && (!o.implementation_message_names.length || typeof o.implementation_message_names[0] === "string"));
  },
  isAmino(o: any): o is ListImplementationsResponseAmino {
    return o && (o.$typeUrl === ListImplementationsResponse.typeUrl || Array.isArray(o.implementation_message_names) && (!o.implementation_message_names.length || typeof o.implementation_message_names[0] === "string"));
  },
  encode(message: ListImplementationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.implementationMessageNames) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListImplementationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListImplementationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.implementationMessageNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListImplementationsResponse {
    const obj = createBaseListImplementationsResponse();
    if (Array.isArray(object?.implementationMessageNames)) obj.implementationMessageNames = object.implementationMessageNames.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: ListImplementationsResponse): unknown {
    const obj: any = {};
    if (message.implementationMessageNames) {
      obj.implementationMessageNames = message.implementationMessageNames.map(e => e);
    } else {
      obj.implementationMessageNames = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ListImplementationsResponse>): ListImplementationsResponse {
    const message = createBaseListImplementationsResponse();
    message.implementationMessageNames = object.implementationMessageNames?.map(e => e) || [];
    return message;
  },
  fromSDK(object: ListImplementationsResponseSDKType): ListImplementationsResponse {
    return {
      implementationMessageNames: Array.isArray(object?.implementation_message_names) ? object.implementation_message_names.map((e: any) => e) : []
    };
  },
  toSDK(message: ListImplementationsResponse): ListImplementationsResponseSDKType {
    const obj: any = {};
    if (message.implementationMessageNames) {
      obj.implementation_message_names = message.implementationMessageNames.map(e => e);
    } else {
      obj.implementation_message_names = [];
    }
    return obj;
  },
  fromAmino(object: ListImplementationsResponseAmino): ListImplementationsResponse {
    const message = createBaseListImplementationsResponse();
    message.implementationMessageNames = object.implementation_message_names?.map(e => e) || [];
    return message;
  },
  toAmino(message: ListImplementationsResponse): ListImplementationsResponseAmino {
    const obj: any = {};
    if (message.implementationMessageNames) {
      obj.implementation_message_names = message.implementationMessageNames.map(e => e);
    } else {
      obj.implementation_message_names = [];
    }
    return obj;
  },
  fromAminoMsg(object: ListImplementationsResponseAminoMsg): ListImplementationsResponse {
    return ListImplementationsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ListImplementationsResponse): ListImplementationsResponseAminoMsg {
    return {
      type: "cosmos-sdk/ListImplementationsResponse",
      value: ListImplementationsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ListImplementationsResponseProtoMsg): ListImplementationsResponse {
    return ListImplementationsResponse.decode(message.value);
  },
  toProto(message: ListImplementationsResponse): Uint8Array {
    return ListImplementationsResponse.encode(message).finish();
  },
  toProtoMsg(message: ListImplementationsResponse): ListImplementationsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v1beta1.ListImplementationsResponse",
      value: ListImplementationsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ListImplementationsResponse.typeUrl, ListImplementationsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ListImplementationsResponse.aminoType, ListImplementationsResponse.typeUrl);