//@ts-nocheck
import { CommitmentProof, CommitmentProofAmino, CommitmentProofSDKType } from "../../../../confio/proofs";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "ibc.core.commitment.v1";
/**
 * MerkleRoot defines a merkle root hash.
 * In the Cosmos SDK, the AppHash of a block header becomes the root.
 */
export interface MerkleRoot {
  hash: Uint8Array;
}
export interface MerkleRootProtoMsg {
  typeUrl: "/ibc.core.commitment.v1.MerkleRoot";
  value: Uint8Array;
}
/**
 * MerkleRoot defines a merkle root hash.
 * In the Cosmos SDK, the AppHash of a block header becomes the root.
 */
export interface MerkleRootAmino {
  hash?: string;
}
export interface MerkleRootAminoMsg {
  type: "cosmos-sdk/MerkleRoot";
  value: MerkleRootAmino;
}
/**
 * MerkleRoot defines a merkle root hash.
 * In the Cosmos SDK, the AppHash of a block header becomes the root.
 */
export interface MerkleRootSDKType {
  hash: Uint8Array;
}
/**
 * MerklePrefix is merkle path prefixed to the key.
 * The constructed key from the Path and the key will be append(Path.KeyPath,
 * append(Path.KeyPrefix, key...))
 */
export interface MerklePrefix {
  keyPrefix: Uint8Array;
}
export interface MerklePrefixProtoMsg {
  typeUrl: "/ibc.core.commitment.v1.MerklePrefix";
  value: Uint8Array;
}
/**
 * MerklePrefix is merkle path prefixed to the key.
 * The constructed key from the Path and the key will be append(Path.KeyPath,
 * append(Path.KeyPrefix, key...))
 */
export interface MerklePrefixAmino {
  key_prefix?: string;
}
export interface MerklePrefixAminoMsg {
  type: "cosmos-sdk/MerklePrefix";
  value: MerklePrefixAmino;
}
/**
 * MerklePrefix is merkle path prefixed to the key.
 * The constructed key from the Path and the key will be append(Path.KeyPath,
 * append(Path.KeyPrefix, key...))
 */
export interface MerklePrefixSDKType {
  key_prefix: Uint8Array;
}
/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * MerklePath is represented from root-to-leaf
 */
export interface MerklePath {
  keyPath: string[];
}
export interface MerklePathProtoMsg {
  typeUrl: "/ibc.core.commitment.v1.MerklePath";
  value: Uint8Array;
}
/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * MerklePath is represented from root-to-leaf
 */
export interface MerklePathAmino {
  key_path?: string[];
}
export interface MerklePathAminoMsg {
  type: "cosmos-sdk/MerklePath";
  value: MerklePathAmino;
}
/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * MerklePath is represented from root-to-leaf
 */
export interface MerklePathSDKType {
  key_path: string[];
}
/**
 * MerkleProof is a wrapper type over a chain of CommitmentProofs.
 * It demonstrates membership or non-membership for an element or set of
 * elements, verifiable in conjunction with a known commitment root. Proofs
 * should be succinct.
 * MerkleProofs are ordered from leaf-to-root
 */
export interface MerkleProof {
  proofs: CommitmentProof[];
}
export interface MerkleProofProtoMsg {
  typeUrl: "/ibc.core.commitment.v1.MerkleProof";
  value: Uint8Array;
}
/**
 * MerkleProof is a wrapper type over a chain of CommitmentProofs.
 * It demonstrates membership or non-membership for an element or set of
 * elements, verifiable in conjunction with a known commitment root. Proofs
 * should be succinct.
 * MerkleProofs are ordered from leaf-to-root
 */
export interface MerkleProofAmino {
  proofs?: CommitmentProofAmino[];
}
export interface MerkleProofAminoMsg {
  type: "cosmos-sdk/MerkleProof";
  value: MerkleProofAmino;
}
/**
 * MerkleProof is a wrapper type over a chain of CommitmentProofs.
 * It demonstrates membership or non-membership for an element or set of
 * elements, verifiable in conjunction with a known commitment root. Proofs
 * should be succinct.
 * MerkleProofs are ordered from leaf-to-root
 */
export interface MerkleProofSDKType {
  proofs: CommitmentProofSDKType[];
}
function createBaseMerkleRoot(): MerkleRoot {
  return {
    hash: new Uint8Array()
  };
}
export const MerkleRoot = {
  typeUrl: "/ibc.core.commitment.v1.MerkleRoot",
  aminoType: "cosmos-sdk/MerkleRoot",
  is(o: any): o is MerkleRoot {
    return o && (o.$typeUrl === MerkleRoot.typeUrl || o.hash instanceof Uint8Array || typeof o.hash === "string");
  },
  isSDK(o: any): o is MerkleRootSDKType {
    return o && (o.$typeUrl === MerkleRoot.typeUrl || o.hash instanceof Uint8Array || typeof o.hash === "string");
  },
  isAmino(o: any): o is MerkleRootAmino {
    return o && (o.$typeUrl === MerkleRoot.typeUrl || o.hash instanceof Uint8Array || typeof o.hash === "string");
  },
  encode(message: MerkleRoot, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MerkleRoot {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerkleRoot();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MerkleRoot {
    const obj = createBaseMerkleRoot();
    if (isSet(object.hash)) obj.hash = bytesFromBase64(object.hash);
    return obj;
  },
  toJSON(message: MerkleRoot): JsonSafe<MerkleRoot> {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MerkleRoot>): MerkleRoot {
    const message = createBaseMerkleRoot();
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MerkleRootSDKType): MerkleRoot {
    return {
      hash: object?.hash
    };
  },
  toSDK(message: MerkleRoot): MerkleRootSDKType {
    const obj: any = {};
    obj.hash = message.hash;
    return obj;
  },
  fromAmino(object: MerkleRootAmino): MerkleRoot {
    const message = createBaseMerkleRoot();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    return message;
  },
  toAmino(message: MerkleRoot): MerkleRootAmino {
    const obj: any = {};
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    return obj;
  },
  fromAminoMsg(object: MerkleRootAminoMsg): MerkleRoot {
    return MerkleRoot.fromAmino(object.value);
  },
  toAminoMsg(message: MerkleRoot): MerkleRootAminoMsg {
    return {
      type: "cosmos-sdk/MerkleRoot",
      value: MerkleRoot.toAmino(message)
    };
  },
  fromProtoMsg(message: MerkleRootProtoMsg): MerkleRoot {
    return MerkleRoot.decode(message.value);
  },
  toProto(message: MerkleRoot): Uint8Array {
    return MerkleRoot.encode(message).finish();
  },
  toProtoMsg(message: MerkleRoot): MerkleRootProtoMsg {
    return {
      typeUrl: "/ibc.core.commitment.v1.MerkleRoot",
      value: MerkleRoot.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MerkleRoot.typeUrl, MerkleRoot);
GlobalDecoderRegistry.registerAminoProtoMapping(MerkleRoot.aminoType, MerkleRoot.typeUrl);
function createBaseMerklePrefix(): MerklePrefix {
  return {
    keyPrefix: new Uint8Array()
  };
}
export const MerklePrefix = {
  typeUrl: "/ibc.core.commitment.v1.MerklePrefix",
  aminoType: "cosmos-sdk/MerklePrefix",
  is(o: any): o is MerklePrefix {
    return o && (o.$typeUrl === MerklePrefix.typeUrl || o.keyPrefix instanceof Uint8Array || typeof o.keyPrefix === "string");
  },
  isSDK(o: any): o is MerklePrefixSDKType {
    return o && (o.$typeUrl === MerklePrefix.typeUrl || o.key_prefix instanceof Uint8Array || typeof o.key_prefix === "string");
  },
  isAmino(o: any): o is MerklePrefixAmino {
    return o && (o.$typeUrl === MerklePrefix.typeUrl || o.key_prefix instanceof Uint8Array || typeof o.key_prefix === "string");
  },
  encode(message: MerklePrefix, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.keyPrefix.length !== 0) {
      writer.uint32(10).bytes(message.keyPrefix);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MerklePrefix {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerklePrefix();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyPrefix = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MerklePrefix {
    const obj = createBaseMerklePrefix();
    if (isSet(object.keyPrefix)) obj.keyPrefix = bytesFromBase64(object.keyPrefix);
    return obj;
  },
  toJSON(message: MerklePrefix): JsonSafe<MerklePrefix> {
    const obj: any = {};
    message.keyPrefix !== undefined && (obj.keyPrefix = base64FromBytes(message.keyPrefix !== undefined ? message.keyPrefix : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<MerklePrefix>): MerklePrefix {
    const message = createBaseMerklePrefix();
    message.keyPrefix = object.keyPrefix ?? new Uint8Array();
    return message;
  },
  fromSDK(object: MerklePrefixSDKType): MerklePrefix {
    return {
      keyPrefix: object?.key_prefix
    };
  },
  toSDK(message: MerklePrefix): MerklePrefixSDKType {
    const obj: any = {};
    obj.key_prefix = message.keyPrefix;
    return obj;
  },
  fromAmino(object: MerklePrefixAmino): MerklePrefix {
    const message = createBaseMerklePrefix();
    if (object.key_prefix !== undefined && object.key_prefix !== null) {
      message.keyPrefix = bytesFromBase64(object.key_prefix);
    }
    return message;
  },
  toAmino(message: MerklePrefix): MerklePrefixAmino {
    const obj: any = {};
    obj.key_prefix = message.keyPrefix ? base64FromBytes(message.keyPrefix) : undefined;
    return obj;
  },
  fromAminoMsg(object: MerklePrefixAminoMsg): MerklePrefix {
    return MerklePrefix.fromAmino(object.value);
  },
  toAminoMsg(message: MerklePrefix): MerklePrefixAminoMsg {
    return {
      type: "cosmos-sdk/MerklePrefix",
      value: MerklePrefix.toAmino(message)
    };
  },
  fromProtoMsg(message: MerklePrefixProtoMsg): MerklePrefix {
    return MerklePrefix.decode(message.value);
  },
  toProto(message: MerklePrefix): Uint8Array {
    return MerklePrefix.encode(message).finish();
  },
  toProtoMsg(message: MerklePrefix): MerklePrefixProtoMsg {
    return {
      typeUrl: "/ibc.core.commitment.v1.MerklePrefix",
      value: MerklePrefix.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MerklePrefix.typeUrl, MerklePrefix);
GlobalDecoderRegistry.registerAminoProtoMapping(MerklePrefix.aminoType, MerklePrefix.typeUrl);
function createBaseMerklePath(): MerklePath {
  return {
    keyPath: []
  };
}
export const MerklePath = {
  typeUrl: "/ibc.core.commitment.v1.MerklePath",
  aminoType: "cosmos-sdk/MerklePath",
  is(o: any): o is MerklePath {
    return o && (o.$typeUrl === MerklePath.typeUrl || Array.isArray(o.keyPath) && (!o.keyPath.length || typeof o.keyPath[0] === "string"));
  },
  isSDK(o: any): o is MerklePathSDKType {
    return o && (o.$typeUrl === MerklePath.typeUrl || Array.isArray(o.key_path) && (!o.key_path.length || typeof o.key_path[0] === "string"));
  },
  isAmino(o: any): o is MerklePathAmino {
    return o && (o.$typeUrl === MerklePath.typeUrl || Array.isArray(o.key_path) && (!o.key_path.length || typeof o.key_path[0] === "string"));
  },
  encode(message: MerklePath, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.keyPath) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MerklePath {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerklePath();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyPath.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MerklePath {
    const obj = createBaseMerklePath();
    if (Array.isArray(object?.keyPath)) obj.keyPath = object.keyPath.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: MerklePath): JsonSafe<MerklePath> {
    const obj: any = {};
    if (message.keyPath) {
      obj.keyPath = message.keyPath.map(e => e);
    } else {
      obj.keyPath = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MerklePath>): MerklePath {
    const message = createBaseMerklePath();
    message.keyPath = object.keyPath?.map(e => e) || [];
    return message;
  },
  fromSDK(object: MerklePathSDKType): MerklePath {
    return {
      keyPath: Array.isArray(object?.key_path) ? object.key_path.map((e: any) => e) : []
    };
  },
  toSDK(message: MerklePath): MerklePathSDKType {
    const obj: any = {};
    if (message.keyPath) {
      obj.key_path = message.keyPath.map(e => e);
    } else {
      obj.key_path = [];
    }
    return obj;
  },
  fromAmino(object: MerklePathAmino): MerklePath {
    const message = createBaseMerklePath();
    message.keyPath = object.key_path?.map(e => e) || [];
    return message;
  },
  toAmino(message: MerklePath): MerklePathAmino {
    const obj: any = {};
    if (message.keyPath) {
      obj.key_path = message.keyPath.map(e => e);
    } else {
      obj.key_path = message.keyPath;
    }
    return obj;
  },
  fromAminoMsg(object: MerklePathAminoMsg): MerklePath {
    return MerklePath.fromAmino(object.value);
  },
  toAminoMsg(message: MerklePath): MerklePathAminoMsg {
    return {
      type: "cosmos-sdk/MerklePath",
      value: MerklePath.toAmino(message)
    };
  },
  fromProtoMsg(message: MerklePathProtoMsg): MerklePath {
    return MerklePath.decode(message.value);
  },
  toProto(message: MerklePath): Uint8Array {
    return MerklePath.encode(message).finish();
  },
  toProtoMsg(message: MerklePath): MerklePathProtoMsg {
    return {
      typeUrl: "/ibc.core.commitment.v1.MerklePath",
      value: MerklePath.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MerklePath.typeUrl, MerklePath);
GlobalDecoderRegistry.registerAminoProtoMapping(MerklePath.aminoType, MerklePath.typeUrl);
function createBaseMerkleProof(): MerkleProof {
  return {
    proofs: []
  };
}
export const MerkleProof = {
  typeUrl: "/ibc.core.commitment.v1.MerkleProof",
  aminoType: "cosmos-sdk/MerkleProof",
  is(o: any): o is MerkleProof {
    return o && (o.$typeUrl === MerkleProof.typeUrl || Array.isArray(o.proofs) && (!o.proofs.length || CommitmentProof.is(o.proofs[0])));
  },
  isSDK(o: any): o is MerkleProofSDKType {
    return o && (o.$typeUrl === MerkleProof.typeUrl || Array.isArray(o.proofs) && (!o.proofs.length || CommitmentProof.isSDK(o.proofs[0])));
  },
  isAmino(o: any): o is MerkleProofAmino {
    return o && (o.$typeUrl === MerkleProof.typeUrl || Array.isArray(o.proofs) && (!o.proofs.length || CommitmentProof.isAmino(o.proofs[0])));
  },
  encode(message: MerkleProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proofs) {
      CommitmentProof.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MerkleProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMerkleProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proofs.push(CommitmentProof.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MerkleProof {
    const obj = createBaseMerkleProof();
    if (Array.isArray(object?.proofs)) obj.proofs = object.proofs.map((e: any) => CommitmentProof.fromJSON(e));
    return obj;
  },
  toJSON(message: MerkleProof): JsonSafe<MerkleProof> {
    const obj: any = {};
    if (message.proofs) {
      obj.proofs = message.proofs.map(e => e ? CommitmentProof.toJSON(e) : undefined);
    } else {
      obj.proofs = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MerkleProof>): MerkleProof {
    const message = createBaseMerkleProof();
    message.proofs = object.proofs?.map(e => CommitmentProof.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MerkleProofSDKType): MerkleProof {
    return {
      proofs: Array.isArray(object?.proofs) ? object.proofs.map((e: any) => CommitmentProof.fromSDK(e)) : []
    };
  },
  toSDK(message: MerkleProof): MerkleProofSDKType {
    const obj: any = {};
    if (message.proofs) {
      obj.proofs = message.proofs.map(e => e ? CommitmentProof.toSDK(e) : undefined);
    } else {
      obj.proofs = [];
    }
    return obj;
  },
  fromAmino(object: MerkleProofAmino): MerkleProof {
    const message = createBaseMerkleProof();
    message.proofs = object.proofs?.map(e => CommitmentProof.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MerkleProof): MerkleProofAmino {
    const obj: any = {};
    if (message.proofs) {
      obj.proofs = message.proofs.map(e => e ? CommitmentProof.toAmino(e) : undefined);
    } else {
      obj.proofs = message.proofs;
    }
    return obj;
  },
  fromAminoMsg(object: MerkleProofAminoMsg): MerkleProof {
    return MerkleProof.fromAmino(object.value);
  },
  toAminoMsg(message: MerkleProof): MerkleProofAminoMsg {
    return {
      type: "cosmos-sdk/MerkleProof",
      value: MerkleProof.toAmino(message)
    };
  },
  fromProtoMsg(message: MerkleProofProtoMsg): MerkleProof {
    return MerkleProof.decode(message.value);
  },
  toProto(message: MerkleProof): Uint8Array {
    return MerkleProof.encode(message).finish();
  },
  toProtoMsg(message: MerkleProof): MerkleProofProtoMsg {
    return {
      typeUrl: "/ibc.core.commitment.v1.MerkleProof",
      value: MerkleProof.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MerkleProof.typeUrl, MerkleProof);
GlobalDecoderRegistry.registerAminoProtoMapping(MerkleProof.aminoType, MerkleProof.typeUrl);