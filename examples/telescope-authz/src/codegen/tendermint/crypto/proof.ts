import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export const protobufPackage = "tendermint.crypto";
export interface Proof {
  total: bigint;
  index: bigint;
  leafHash: Uint8Array;
  aunts: Uint8Array[];
}
export interface ProofProtoMsg {
  typeUrl: "/tendermint.crypto.Proof";
  value: Uint8Array;
}
export interface ProofAmino {
  total?: string;
  index?: string;
  leaf_hash?: string;
  aunts?: string[];
}
export interface ProofAminoMsg {
  type: "/tendermint.crypto.Proof";
  value: ProofAmino;
}
export interface ProofSDKType {
  total: bigint;
  index: bigint;
  leaf_hash: Uint8Array;
  aunts: Uint8Array[];
}
export interface ValueOp {
  /** Encoded in ProofOp.Key. */
  key: Uint8Array;
  /** To encode in ProofOp.Data */
  proof?: Proof;
}
export interface ValueOpProtoMsg {
  typeUrl: "/tendermint.crypto.ValueOp";
  value: Uint8Array;
}
export interface ValueOpAmino {
  /** Encoded in ProofOp.Key. */
  key?: string;
  /** To encode in ProofOp.Data */
  proof?: ProofAmino;
}
export interface ValueOpAminoMsg {
  type: "/tendermint.crypto.ValueOp";
  value: ValueOpAmino;
}
export interface ValueOpSDKType {
  key: Uint8Array;
  proof?: ProofSDKType;
}
export interface DominoOp {
  key: string;
  input: string;
  output: string;
}
export interface DominoOpProtoMsg {
  typeUrl: "/tendermint.crypto.DominoOp";
  value: Uint8Array;
}
export interface DominoOpAmino {
  key?: string;
  input?: string;
  output?: string;
}
export interface DominoOpAminoMsg {
  type: "/tendermint.crypto.DominoOp";
  value: DominoOpAmino;
}
export interface DominoOpSDKType {
  key: string;
  input: string;
  output: string;
}
/**
 * ProofOp defines an operation used for calculating Merkle root
 * The data could be arbitrary format, providing nessecary data
 * for example neighbouring node hash
 */
export interface ProofOp {
  type: string;
  key: Uint8Array;
  data: Uint8Array;
}
export interface ProofOpProtoMsg {
  typeUrl: "/tendermint.crypto.ProofOp";
  value: Uint8Array;
}
/**
 * ProofOp defines an operation used for calculating Merkle root
 * The data could be arbitrary format, providing nessecary data
 * for example neighbouring node hash
 */
export interface ProofOpAmino {
  type?: string;
  key?: string;
  data?: string;
}
export interface ProofOpAminoMsg {
  type: "/tendermint.crypto.ProofOp";
  value: ProofOpAmino;
}
/**
 * ProofOp defines an operation used for calculating Merkle root
 * The data could be arbitrary format, providing nessecary data
 * for example neighbouring node hash
 */
export interface ProofOpSDKType {
  type: string;
  key: Uint8Array;
  data: Uint8Array;
}
/** ProofOps is Merkle proof defined by the list of ProofOps */
export interface ProofOps {
  ops: ProofOp[];
}
export interface ProofOpsProtoMsg {
  typeUrl: "/tendermint.crypto.ProofOps";
  value: Uint8Array;
}
/** ProofOps is Merkle proof defined by the list of ProofOps */
export interface ProofOpsAmino {
  ops?: ProofOpAmino[];
}
export interface ProofOpsAminoMsg {
  type: "/tendermint.crypto.ProofOps";
  value: ProofOpsAmino;
}
/** ProofOps is Merkle proof defined by the list of ProofOps */
export interface ProofOpsSDKType {
  ops: ProofOpSDKType[];
}
function createBaseProof(): Proof {
  return {
    total: BigInt(0),
    index: BigInt(0),
    leafHash: new Uint8Array(),
    aunts: []
  };
}
export const Proof = {
  typeUrl: "/tendermint.crypto.Proof",
  is(o: any): o is Proof {
    return o && (o.$typeUrl === Proof.typeUrl || typeof o.total === "bigint" && typeof o.index === "bigint" && (o.leafHash instanceof Uint8Array || typeof o.leafHash === "string") && Array.isArray(o.aunts) && (!o.aunts.length || o.aunts[0] instanceof Uint8Array || typeof o.aunts[0] === "string"));
  },
  isSDK(o: any): o is ProofSDKType {
    return o && (o.$typeUrl === Proof.typeUrl || typeof o.total === "bigint" && typeof o.index === "bigint" && (o.leaf_hash instanceof Uint8Array || typeof o.leaf_hash === "string") && Array.isArray(o.aunts) && (!o.aunts.length || o.aunts[0] instanceof Uint8Array || typeof o.aunts[0] === "string"));
  },
  isAmino(o: any): o is ProofAmino {
    return o && (o.$typeUrl === Proof.typeUrl || typeof o.total === "bigint" && typeof o.index === "bigint" && (o.leaf_hash instanceof Uint8Array || typeof o.leaf_hash === "string") && Array.isArray(o.aunts) && (!o.aunts.length || o.aunts[0] instanceof Uint8Array || typeof o.aunts[0] === "string"));
  },
  encode(message: Proof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.total !== undefined) {
      writer.uint32(8).int64(message.total);
    }
    if (message.index !== undefined) {
      writer.uint32(16).int64(message.index);
    }
    if (message.leafHash.length !== 0) {
      writer.uint32(26).bytes(message.leafHash);
    }
    for (const v of message.aunts) {
      writer.uint32(34).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Proof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.int64();
          break;
        case 2:
          message.index = reader.int64();
          break;
        case 3:
          message.leafHash = reader.bytes();
          break;
        case 4:
          message.aunts.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Proof {
    const obj = createBaseProof();
    if (isSet(object.total)) obj.total = BigInt(object.total.toString());
    if (isSet(object.index)) obj.index = BigInt(object.index.toString());
    if (isSet(object.leafHash)) obj.leafHash = bytesFromBase64(object.leafHash);
    if (Array.isArray(object?.aunts)) obj.aunts = object.aunts.map((e: any) => bytesFromBase64(e));
    return obj;
  },
  toJSON(message: Proof): unknown {
    const obj: any = {};
    message.total !== undefined && (obj.total = (message.total || BigInt(0)).toString());
    message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
    message.leafHash !== undefined && (obj.leafHash = base64FromBytes(message.leafHash !== undefined ? message.leafHash : new Uint8Array()));
    if (message.aunts) {
      obj.aunts = message.aunts.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.aunts = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Proof>): Proof {
    const message = createBaseProof();
    if (object.total !== undefined && object.total !== null) {
      message.total = BigInt(object.total.toString());
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index.toString());
    }
    message.leafHash = object.leafHash ?? new Uint8Array();
    message.aunts = object.aunts?.map(e => e) || [];
    return message;
  },
  fromSDK(object: ProofSDKType): Proof {
    return {
      total: object?.total,
      index: object?.index,
      leafHash: object?.leaf_hash,
      aunts: Array.isArray(object?.aunts) ? object.aunts.map((e: any) => e) : []
    };
  },
  toSDK(message: Proof): ProofSDKType {
    const obj: any = {};
    obj.total = message.total;
    obj.index = message.index;
    obj.leaf_hash = message.leafHash;
    if (message.aunts) {
      obj.aunts = message.aunts.map(e => e);
    } else {
      obj.aunts = [];
    }
    return obj;
  },
  fromAmino(object: ProofAmino): Proof {
    const message = createBaseProof();
    if (object.total !== undefined && object.total !== null) {
      message.total = BigInt(object.total);
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.leaf_hash !== undefined && object.leaf_hash !== null) {
      message.leafHash = bytesFromBase64(object.leaf_hash);
    }
    message.aunts = object.aunts?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: Proof): ProofAmino {
    const obj: any = {};
    obj.total = message.total ? message.total.toString() : undefined;
    obj.index = message.index ? message.index.toString() : undefined;
    obj.leaf_hash = message.leafHash ? base64FromBytes(message.leafHash) : undefined;
    if (message.aunts) {
      obj.aunts = message.aunts.map(e => base64FromBytes(e));
    } else {
      obj.aunts = [];
    }
    return obj;
  },
  fromAminoMsg(object: ProofAminoMsg): Proof {
    return Proof.fromAmino(object.value);
  },
  fromProtoMsg(message: ProofProtoMsg): Proof {
    return Proof.decode(message.value);
  },
  toProto(message: Proof): Uint8Array {
    return Proof.encode(message).finish();
  },
  toProtoMsg(message: Proof): ProofProtoMsg {
    return {
      typeUrl: "/tendermint.crypto.Proof",
      value: Proof.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Proof.typeUrl, Proof);
function createBaseValueOp(): ValueOp {
  return {
    key: new Uint8Array(),
    proof: undefined
  };
}
export const ValueOp = {
  typeUrl: "/tendermint.crypto.ValueOp",
  is(o: any): o is ValueOp {
    return o && (o.$typeUrl === ValueOp.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
  },
  isSDK(o: any): o is ValueOpSDKType {
    return o && (o.$typeUrl === ValueOp.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
  },
  isAmino(o: any): o is ValueOpAmino {
    return o && (o.$typeUrl === ValueOp.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
  },
  encode(message: ValueOp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.proof !== undefined) {
      Proof.encode(message.proof, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValueOp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValueOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.proof = Proof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValueOp {
    const obj = createBaseValueOp();
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    if (isSet(object.proof)) obj.proof = Proof.fromJSON(object.proof);
    return obj;
  },
  toJSON(message: ValueOp): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.proof !== undefined && (obj.proof = message.proof ? Proof.toJSON(message.proof) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ValueOp>): ValueOp {
    const message = createBaseValueOp();
    message.key = object.key ?? new Uint8Array();
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromPartial(object.proof);
    }
    return message;
  },
  fromSDK(object: ValueOpSDKType): ValueOp {
    return {
      key: object?.key,
      proof: object.proof ? Proof.fromSDK(object.proof) : undefined
    };
  },
  toSDK(message: ValueOp): ValueOpSDKType {
    const obj: any = {};
    obj.key = message.key;
    message.proof !== undefined && (obj.proof = message.proof ? Proof.toSDK(message.proof) : undefined);
    return obj;
  },
  fromAmino(object: ValueOpAmino): ValueOp {
    const message = createBaseValueOp();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = Proof.fromAmino(object.proof);
    }
    return message;
  },
  toAmino(message: ValueOp): ValueOpAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.proof = message.proof ? Proof.toAmino(message.proof) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValueOpAminoMsg): ValueOp {
    return ValueOp.fromAmino(object.value);
  },
  fromProtoMsg(message: ValueOpProtoMsg): ValueOp {
    return ValueOp.decode(message.value);
  },
  toProto(message: ValueOp): Uint8Array {
    return ValueOp.encode(message).finish();
  },
  toProtoMsg(message: ValueOp): ValueOpProtoMsg {
    return {
      typeUrl: "/tendermint.crypto.ValueOp",
      value: ValueOp.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValueOp.typeUrl, ValueOp);
function createBaseDominoOp(): DominoOp {
  return {
    key: "",
    input: "",
    output: ""
  };
}
export const DominoOp = {
  typeUrl: "/tendermint.crypto.DominoOp",
  is(o: any): o is DominoOp {
    return o && (o.$typeUrl === DominoOp.typeUrl || typeof o.key === "string" && typeof o.input === "string" && typeof o.output === "string");
  },
  isSDK(o: any): o is DominoOpSDKType {
    return o && (o.$typeUrl === DominoOp.typeUrl || typeof o.key === "string" && typeof o.input === "string" && typeof o.output === "string");
  },
  isAmino(o: any): o is DominoOpAmino {
    return o && (o.$typeUrl === DominoOp.typeUrl || typeof o.key === "string" && typeof o.input === "string" && typeof o.output === "string");
  },
  encode(message: DominoOp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== undefined) {
      writer.uint32(10).string(message.key);
    }
    if (message.input !== undefined) {
      writer.uint32(18).string(message.input);
    }
    if (message.output !== undefined) {
      writer.uint32(26).string(message.output);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DominoOp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDominoOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.input = reader.string();
          break;
        case 3:
          message.output = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DominoOp {
    const obj = createBaseDominoOp();
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.input)) obj.input = String(object.input);
    if (isSet(object.output)) obj.output = String(object.output);
    return obj;
  },
  toJSON(message: DominoOp): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.input !== undefined && (obj.input = message.input);
    message.output !== undefined && (obj.output = message.output);
    return obj;
  },
  fromPartial(object: DeepPartial<DominoOp>): DominoOp {
    const message = createBaseDominoOp();
    message.key = object.key ?? "";
    message.input = object.input ?? "";
    message.output = object.output ?? "";
    return message;
  },
  fromSDK(object: DominoOpSDKType): DominoOp {
    return {
      key: object?.key,
      input: object?.input,
      output: object?.output
    };
  },
  toSDK(message: DominoOp): DominoOpSDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.input = message.input;
    obj.output = message.output;
    return obj;
  },
  fromAmino(object: DominoOpAmino): DominoOp {
    const message = createBaseDominoOp();
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.input !== undefined && object.input !== null) {
      message.input = object.input;
    }
    if (object.output !== undefined && object.output !== null) {
      message.output = object.output;
    }
    return message;
  },
  toAmino(message: DominoOp): DominoOpAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.input = message.input;
    obj.output = message.output;
    return obj;
  },
  fromAminoMsg(object: DominoOpAminoMsg): DominoOp {
    return DominoOp.fromAmino(object.value);
  },
  fromProtoMsg(message: DominoOpProtoMsg): DominoOp {
    return DominoOp.decode(message.value);
  },
  toProto(message: DominoOp): Uint8Array {
    return DominoOp.encode(message).finish();
  },
  toProtoMsg(message: DominoOp): DominoOpProtoMsg {
    return {
      typeUrl: "/tendermint.crypto.DominoOp",
      value: DominoOp.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DominoOp.typeUrl, DominoOp);
function createBaseProofOp(): ProofOp {
  return {
    type: "",
    key: new Uint8Array(),
    data: new Uint8Array()
  };
}
export const ProofOp = {
  typeUrl: "/tendermint.crypto.ProofOp",
  is(o: any): o is ProofOp {
    return o && (o.$typeUrl === ProofOp.typeUrl || typeof o.type === "string" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  isSDK(o: any): o is ProofOpSDKType {
    return o && (o.$typeUrl === ProofOp.typeUrl || typeof o.type === "string" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  isAmino(o: any): o is ProofOpAmino {
    return o && (o.$typeUrl === ProofOp.typeUrl || typeof o.type === "string" && (o.key instanceof Uint8Array || typeof o.key === "string") && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  encode(message: ProofOp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== undefined) {
      writer.uint32(10).string(message.type);
    }
    if (message.key.length !== 0) {
      writer.uint32(18).bytes(message.key);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProofOp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.key = reader.bytes();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProofOp {
    const obj = createBaseProofOp();
    if (isSet(object.type)) obj.type = String(object.type);
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  toJSON(message: ProofOp): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<ProofOp>): ProofOp {
    const message = createBaseProofOp();
    message.type = object.type ?? "";
    message.key = object.key ?? new Uint8Array();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromSDK(object: ProofOpSDKType): ProofOp {
    return {
      type: object?.type,
      key: object?.key,
      data: object?.data
    };
  },
  toSDK(message: ProofOp): ProofOpSDKType {
    const obj: any = {};
    obj.type = message.type;
    obj.key = message.key;
    obj.data = message.data;
    return obj;
  },
  fromAmino(object: ProofOpAmino): ProofOp {
    const message = createBaseProofOp();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: ProofOp): ProofOpAmino {
    const obj: any = {};
    obj.type = message.type;
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: ProofOpAminoMsg): ProofOp {
    return ProofOp.fromAmino(object.value);
  },
  fromProtoMsg(message: ProofOpProtoMsg): ProofOp {
    return ProofOp.decode(message.value);
  },
  toProto(message: ProofOp): Uint8Array {
    return ProofOp.encode(message).finish();
  },
  toProtoMsg(message: ProofOp): ProofOpProtoMsg {
    return {
      typeUrl: "/tendermint.crypto.ProofOp",
      value: ProofOp.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProofOp.typeUrl, ProofOp);
function createBaseProofOps(): ProofOps {
  return {
    ops: []
  };
}
export const ProofOps = {
  typeUrl: "/tendermint.crypto.ProofOps",
  is(o: any): o is ProofOps {
    return o && (o.$typeUrl === ProofOps.typeUrl || Array.isArray(o.ops) && (!o.ops.length || ProofOp.is(o.ops[0])));
  },
  isSDK(o: any): o is ProofOpsSDKType {
    return o && (o.$typeUrl === ProofOps.typeUrl || Array.isArray(o.ops) && (!o.ops.length || ProofOp.isSDK(o.ops[0])));
  },
  isAmino(o: any): o is ProofOpsAmino {
    return o && (o.$typeUrl === ProofOps.typeUrl || Array.isArray(o.ops) && (!o.ops.length || ProofOp.isAmino(o.ops[0])));
  },
  encode(message: ProofOps, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.ops) {
      ProofOp.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProofOps {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofOps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ops.push(ProofOp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProofOps {
    const obj = createBaseProofOps();
    if (Array.isArray(object?.ops)) obj.ops = object.ops.map((e: any) => ProofOp.fromJSON(e));
    return obj;
  },
  toJSON(message: ProofOps): unknown {
    const obj: any = {};
    if (message.ops) {
      obj.ops = message.ops.map(e => e ? ProofOp.toJSON(e) : undefined);
    } else {
      obj.ops = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ProofOps>): ProofOps {
    const message = createBaseProofOps();
    message.ops = object.ops?.map(e => ProofOp.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ProofOpsSDKType): ProofOps {
    return {
      ops: Array.isArray(object?.ops) ? object.ops.map((e: any) => ProofOp.fromSDK(e)) : []
    };
  },
  toSDK(message: ProofOps): ProofOpsSDKType {
    const obj: any = {};
    if (message.ops) {
      obj.ops = message.ops.map(e => e ? ProofOp.toSDK(e) : undefined);
    } else {
      obj.ops = [];
    }
    return obj;
  },
  fromAmino(object: ProofOpsAmino): ProofOps {
    const message = createBaseProofOps();
    message.ops = object.ops?.map(e => ProofOp.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ProofOps): ProofOpsAmino {
    const obj: any = {};
    if (message.ops) {
      obj.ops = message.ops.map(e => e ? ProofOp.toAmino(e) : undefined);
    } else {
      obj.ops = [];
    }
    return obj;
  },
  fromAminoMsg(object: ProofOpsAminoMsg): ProofOps {
    return ProofOps.fromAmino(object.value);
  },
  fromProtoMsg(message: ProofOpsProtoMsg): ProofOps {
    return ProofOps.decode(message.value);
  },
  toProto(message: ProofOps): Uint8Array {
    return ProofOps.encode(message).finish();
  },
  toProtoMsg(message: ProofOps): ProofOpsProtoMsg {
    return {
      typeUrl: "/tendermint.crypto.ProofOps",
      value: ProofOps.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProofOps.typeUrl, ProofOps);