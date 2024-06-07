//@ts-nocheck
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.nft.v1beta1";
/** Class defines the class of the nft type. */
export interface Class {
  /** id defines the unique identifier of the NFT classification, similar to the contract address of ERC721 */
  id: string;
  /** name defines the human-readable name of the NFT classification. Optional */
  name: string;
  /** symbol is an abbreviated name for nft classification. Optional */
  symbol: string;
  /** description is a brief description of nft classification. Optional */
  description: string;
  /** uri for the class metadata stored off chain. It can define schema for Class and NFT `Data` attributes. Optional */
  uri: string;
  /** uri_hash is a hash of the document pointed by uri. Optional */
  uriHash: string;
  /** data is the app specific metadata of the NFT class. Optional */
  data?: Any;
}
export interface ClassProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.Class";
  value: Uint8Array;
}
/** Class defines the class of the nft type. */
export interface ClassAmino {
  /** id defines the unique identifier of the NFT classification, similar to the contract address of ERC721 */
  id?: string;
  /** name defines the human-readable name of the NFT classification. Optional */
  name?: string;
  /** symbol is an abbreviated name for nft classification. Optional */
  symbol?: string;
  /** description is a brief description of nft classification. Optional */
  description?: string;
  /** uri for the class metadata stored off chain. It can define schema for Class and NFT `Data` attributes. Optional */
  uri?: string;
  /** uri_hash is a hash of the document pointed by uri. Optional */
  uri_hash?: string;
  /** data is the app specific metadata of the NFT class. Optional */
  data?: AnyAmino;
}
export interface ClassAminoMsg {
  type: "cosmos-sdk/Class";
  value: ClassAmino;
}
/** Class defines the class of the nft type. */
export interface ClassSDKType {
  id: string;
  name: string;
  symbol: string;
  description: string;
  uri: string;
  uri_hash: string;
  data?: AnySDKType;
}
/** NFT defines the NFT. */
export interface NFT {
  /** class_id associated with the NFT, similar to the contract address of ERC721 */
  classId: string;
  /** id is a unique identifier of the NFT */
  id: string;
  /** uri for the NFT metadata stored off chain */
  uri: string;
  /** uri_hash is a hash of the document pointed by uri */
  uriHash: string;
  /** data is an app specific data of the NFT. Optional */
  data?: Any;
}
export interface NFTProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.NFT";
  value: Uint8Array;
}
/** NFT defines the NFT. */
export interface NFTAmino {
  /** class_id associated with the NFT, similar to the contract address of ERC721 */
  class_id?: string;
  /** id is a unique identifier of the NFT */
  id?: string;
  /** uri for the NFT metadata stored off chain */
  uri?: string;
  /** uri_hash is a hash of the document pointed by uri */
  uri_hash?: string;
  /** data is an app specific data of the NFT. Optional */
  data?: AnyAmino;
}
export interface NFTAminoMsg {
  type: "cosmos-sdk/NFT";
  value: NFTAmino;
}
/** NFT defines the NFT. */
export interface NFTSDKType {
  class_id: string;
  id: string;
  uri: string;
  uri_hash: string;
  data?: AnySDKType;
}
function createBaseClass(): Class {
  return {
    id: "",
    name: "",
    symbol: "",
    description: "",
    uri: "",
    uriHash: "",
    data: undefined
  };
}
export const Class = {
  typeUrl: "/cosmos.nft.v1beta1.Class",
  aminoType: "cosmos-sdk/Class",
  is(o: any): o is Class {
    return o && (o.$typeUrl === Class.typeUrl || typeof o.id === "string" && typeof o.name === "string" && typeof o.symbol === "string" && typeof o.description === "string" && typeof o.uri === "string" && typeof o.uriHash === "string");
  },
  isSDK(o: any): o is ClassSDKType {
    return o && (o.$typeUrl === Class.typeUrl || typeof o.id === "string" && typeof o.name === "string" && typeof o.symbol === "string" && typeof o.description === "string" && typeof o.uri === "string" && typeof o.uri_hash === "string");
  },
  isAmino(o: any): o is ClassAmino {
    return o && (o.$typeUrl === Class.typeUrl || typeof o.id === "string" && typeof o.name === "string" && typeof o.symbol === "string" && typeof o.description === "string" && typeof o.uri === "string" && typeof o.uri_hash === "string");
  },
  encode(message: Class, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== undefined) {
      writer.uint32(18).string(message.name);
    }
    if (message.symbol !== undefined) {
      writer.uint32(26).string(message.symbol);
    }
    if (message.description !== undefined) {
      writer.uint32(34).string(message.description);
    }
    if (message.uri !== undefined) {
      writer.uint32(42).string(message.uri);
    }
    if (message.uriHash !== undefined) {
      writer.uint32(50).string(message.uriHash);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Class {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClass();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.uri = reader.string();
          break;
        case 6:
          message.uriHash = reader.string();
          break;
        case 7:
          message.data = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Class {
    const obj = createBaseClass();
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.symbol)) obj.symbol = String(object.symbol);
    if (isSet(object.description)) obj.description = String(object.description);
    if (isSet(object.uri)) obj.uri = String(object.uri);
    if (isSet(object.uriHash)) obj.uriHash = String(object.uriHash);
    if (isSet(object.data)) obj.data = Any.fromJSON(object.data);
    return obj;
  },
  toJSON(message: Class): JsonSafe<Class> {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.description !== undefined && (obj.description = message.description);
    message.uri !== undefined && (obj.uri = message.uri);
    message.uriHash !== undefined && (obj.uriHash = message.uriHash);
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Class>): Class {
    const message = createBaseClass();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.description = object.description ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromPartial(object.data);
    }
    return message;
  },
  fromSDK(object: ClassSDKType): Class {
    return {
      id: object?.id,
      name: object?.name,
      symbol: object?.symbol,
      description: object?.description,
      uri: object?.uri,
      uriHash: object?.uri_hash,
      data: object.data ? Any.fromSDK(object.data) : undefined
    };
  },
  toSDK(message: Class): ClassSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.name = message.name;
    obj.symbol = message.symbol;
    obj.description = message.description;
    obj.uri = message.uri;
    obj.uri_hash = message.uriHash;
    message.data !== undefined && (obj.data = message.data ? Any.toSDK(message.data) : undefined);
    return obj;
  },
  fromAmino(object: ClassAmino): Class {
    const message = createBaseClass();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    }
    if (object.uri_hash !== undefined && object.uri_hash !== null) {
      message.uriHash = object.uri_hash;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromAmino(object.data);
    }
    return message;
  },
  toAmino(message: Class): ClassAmino {
    const obj: any = {};
    obj.id = message.id === "" ? undefined : message.id;
    obj.name = message.name === "" ? undefined : message.name;
    obj.symbol = message.symbol === "" ? undefined : message.symbol;
    obj.description = message.description === "" ? undefined : message.description;
    obj.uri = message.uri === "" ? undefined : message.uri;
    obj.uri_hash = message.uriHash === "" ? undefined : message.uriHash;
    obj.data = message.data ? Any.toAmino(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: ClassAminoMsg): Class {
    return Class.fromAmino(object.value);
  },
  toAminoMsg(message: Class): ClassAminoMsg {
    return {
      type: "cosmos-sdk/Class",
      value: Class.toAmino(message)
    };
  },
  fromProtoMsg(message: ClassProtoMsg): Class {
    return Class.decode(message.value);
  },
  toProto(message: Class): Uint8Array {
    return Class.encode(message).finish();
  },
  toProtoMsg(message: Class): ClassProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.Class",
      value: Class.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Class.typeUrl, Class);
GlobalDecoderRegistry.registerAminoProtoMapping(Class.aminoType, Class.typeUrl);
function createBaseNFT(): NFT {
  return {
    classId: "",
    id: "",
    uri: "",
    uriHash: "",
    data: undefined
  };
}
export const NFT = {
  typeUrl: "/cosmos.nft.v1beta1.NFT",
  aminoType: "cosmos-sdk/NFT",
  is(o: any): o is NFT {
    return o && (o.$typeUrl === NFT.typeUrl || typeof o.classId === "string" && typeof o.id === "string" && typeof o.uri === "string" && typeof o.uriHash === "string");
  },
  isSDK(o: any): o is NFTSDKType {
    return o && (o.$typeUrl === NFT.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.uri === "string" && typeof o.uri_hash === "string");
  },
  isAmino(o: any): o is NFTAmino {
    return o && (o.$typeUrl === NFT.typeUrl || typeof o.class_id === "string" && typeof o.id === "string" && typeof o.uri === "string" && typeof o.uri_hash === "string");
  },
  encode(message: NFT, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classId !== undefined) {
      writer.uint32(10).string(message.classId);
    }
    if (message.id !== undefined) {
      writer.uint32(18).string(message.id);
    }
    if (message.uri !== undefined) {
      writer.uint32(26).string(message.uri);
    }
    if (message.uriHash !== undefined) {
      writer.uint32(34).string(message.uriHash);
    }
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NFT {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.uri = reader.string();
          break;
        case 4:
          message.uriHash = reader.string();
          break;
        case 10:
          message.data = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NFT {
    const obj = createBaseNFT();
    if (isSet(object.classId)) obj.classId = String(object.classId);
    if (isSet(object.id)) obj.id = String(object.id);
    if (isSet(object.uri)) obj.uri = String(object.uri);
    if (isSet(object.uriHash)) obj.uriHash = String(object.uriHash);
    if (isSet(object.data)) obj.data = Any.fromJSON(object.data);
    return obj;
  },
  toJSON(message: NFT): JsonSafe<NFT> {
    const obj: any = {};
    message.classId !== undefined && (obj.classId = message.classId);
    message.id !== undefined && (obj.id = message.id);
    message.uri !== undefined && (obj.uri = message.uri);
    message.uriHash !== undefined && (obj.uriHash = message.uriHash);
    message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<NFT>): NFT {
    const message = createBaseNFT();
    message.classId = object.classId ?? "";
    message.id = object.id ?? "";
    message.uri = object.uri ?? "";
    message.uriHash = object.uriHash ?? "";
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromPartial(object.data);
    }
    return message;
  },
  fromSDK(object: NFTSDKType): NFT {
    return {
      classId: object?.class_id,
      id: object?.id,
      uri: object?.uri,
      uriHash: object?.uri_hash,
      data: object.data ? Any.fromSDK(object.data) : undefined
    };
  },
  toSDK(message: NFT): NFTSDKType {
    const obj: any = {};
    obj.class_id = message.classId;
    obj.id = message.id;
    obj.uri = message.uri;
    obj.uri_hash = message.uriHash;
    message.data !== undefined && (obj.data = message.data ? Any.toSDK(message.data) : undefined);
    return obj;
  },
  fromAmino(object: NFTAmino): NFT {
    const message = createBaseNFT();
    if (object.class_id !== undefined && object.class_id !== null) {
      message.classId = object.class_id;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    }
    if (object.uri_hash !== undefined && object.uri_hash !== null) {
      message.uriHash = object.uri_hash;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromAmino(object.data);
    }
    return message;
  },
  toAmino(message: NFT): NFTAmino {
    const obj: any = {};
    obj.class_id = message.classId === "" ? undefined : message.classId;
    obj.id = message.id === "" ? undefined : message.id;
    obj.uri = message.uri === "" ? undefined : message.uri;
    obj.uri_hash = message.uriHash === "" ? undefined : message.uriHash;
    obj.data = message.data ? Any.toAmino(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: NFTAminoMsg): NFT {
    return NFT.fromAmino(object.value);
  },
  toAminoMsg(message: NFT): NFTAminoMsg {
    return {
      type: "cosmos-sdk/NFT",
      value: NFT.toAmino(message)
    };
  },
  fromProtoMsg(message: NFTProtoMsg): NFT {
    return NFT.decode(message.value);
  },
  toProto(message: NFT): Uint8Array {
    return NFT.encode(message).finish();
  },
  toProtoMsg(message: NFT): NFTProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.NFT",
      value: NFT.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(NFT.typeUrl, NFT);
GlobalDecoderRegistry.registerAminoProtoMapping(NFT.aminoType, NFT.typeUrl);