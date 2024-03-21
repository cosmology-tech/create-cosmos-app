import { Header, HeaderAmino, HeaderSDKType, Data, DataAmino, DataSDKType, Commit, CommitAmino, CommitSDKType } from "./types";
import { EvidenceList, EvidenceListAmino, EvidenceListSDKType } from "./evidence";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export const protobufPackage = "tendermint.types";
export interface Block {
  header: Header;
  data: Data;
  evidence: EvidenceList;
  lastCommit?: Commit;
}
export interface BlockProtoMsg {
  typeUrl: "/tendermint.types.Block";
  value: Uint8Array;
}
export interface BlockAmino {
  header?: HeaderAmino;
  data?: DataAmino;
  evidence?: EvidenceListAmino;
  last_commit?: CommitAmino;
}
export interface BlockAminoMsg {
  type: "/tendermint.types.Block";
  value: BlockAmino;
}
export interface BlockSDKType {
  header: HeaderSDKType;
  data: DataSDKType;
  evidence: EvidenceListSDKType;
  last_commit?: CommitSDKType;
}
function createBaseBlock(): Block {
  return {
    header: Header.fromPartial({}),
    data: Data.fromPartial({}),
    evidence: EvidenceList.fromPartial({}),
    lastCommit: undefined
  };
}
export const Block = {
  typeUrl: "/tendermint.types.Block",
  is(o: any): o is Block {
    return o && (o.$typeUrl === Block.typeUrl || Header.is(o.header) && Data.is(o.data) && EvidenceList.is(o.evidence));
  },
  isSDK(o: any): o is BlockSDKType {
    return o && (o.$typeUrl === Block.typeUrl || Header.isSDK(o.header) && Data.isSDK(o.data) && EvidenceList.isSDK(o.evidence));
  },
  isAmino(o: any): o is BlockAmino {
    return o && (o.$typeUrl === Block.typeUrl || Header.isAmino(o.header) && Data.isAmino(o.data) && EvidenceList.isAmino(o.evidence));
  },
  encode(message: Block, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== undefined) {
      Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.evidence !== undefined) {
      EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastCommit !== undefined) {
      Commit.encode(message.lastCommit, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Block {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = Data.decode(reader, reader.uint32());
          break;
        case 3:
          message.evidence = EvidenceList.decode(reader, reader.uint32());
          break;
        case 4:
          message.lastCommit = Commit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Block {
    const obj = createBaseBlock();
    if (isSet(object.header)) obj.header = Header.fromJSON(object.header);
    if (isSet(object.data)) obj.data = Data.fromJSON(object.data);
    if (isSet(object.evidence)) obj.evidence = EvidenceList.fromJSON(object.evidence);
    if (isSet(object.lastCommit)) obj.lastCommit = Commit.fromJSON(object.lastCommit);
    return obj;
  },
  toJSON(message: Block): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.data !== undefined && (obj.data = message.data ? Data.toJSON(message.data) : undefined);
    message.evidence !== undefined && (obj.evidence = message.evidence ? EvidenceList.toJSON(message.evidence) : undefined);
    message.lastCommit !== undefined && (obj.lastCommit = message.lastCommit ? Commit.toJSON(message.lastCommit) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Block>): Block {
    const message = createBaseBlock();
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromPartial(object.header);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Data.fromPartial(object.data);
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = EvidenceList.fromPartial(object.evidence);
    }
    if (object.lastCommit !== undefined && object.lastCommit !== null) {
      message.lastCommit = Commit.fromPartial(object.lastCommit);
    }
    return message;
  },
  fromSDK(object: BlockSDKType): Block {
    return {
      header: object.header ? Header.fromSDK(object.header) : undefined,
      data: object.data ? Data.fromSDK(object.data) : undefined,
      evidence: object.evidence ? EvidenceList.fromSDK(object.evidence) : undefined,
      lastCommit: object.last_commit ? Commit.fromSDK(object.last_commit) : undefined
    };
  },
  toSDK(message: Block): BlockSDKType {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toSDK(message.header) : undefined);
    message.data !== undefined && (obj.data = message.data ? Data.toSDK(message.data) : undefined);
    message.evidence !== undefined && (obj.evidence = message.evidence ? EvidenceList.toSDK(message.evidence) : undefined);
    message.lastCommit !== undefined && (obj.last_commit = message.lastCommit ? Commit.toSDK(message.lastCommit) : undefined);
    return obj;
  },
  fromAmino(object: BlockAmino): Block {
    const message = createBaseBlock();
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromAmino(object.header);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Data.fromAmino(object.data);
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = EvidenceList.fromAmino(object.evidence);
    }
    if (object.last_commit !== undefined && object.last_commit !== null) {
      message.lastCommit = Commit.fromAmino(object.last_commit);
    }
    return message;
  },
  toAmino(message: Block): BlockAmino {
    const obj: any = {};
    obj.header = message.header ? Header.toAmino(message.header) : undefined;
    obj.data = message.data ? Data.toAmino(message.data) : undefined;
    obj.evidence = message.evidence ? EvidenceList.toAmino(message.evidence) : undefined;
    obj.last_commit = message.lastCommit ? Commit.toAmino(message.lastCommit) : undefined;
    return obj;
  },
  fromAminoMsg(object: BlockAminoMsg): Block {
    return Block.fromAmino(object.value);
  },
  fromProtoMsg(message: BlockProtoMsg): Block {
    return Block.decode(message.value);
  },
  toProto(message: Block): Uint8Array {
    return Block.encode(message).finish();
  },
  toProtoMsg(message: Block): BlockProtoMsg {
    return {
      typeUrl: "/tendermint.types.Block",
      value: Block.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Block.typeUrl, Block);