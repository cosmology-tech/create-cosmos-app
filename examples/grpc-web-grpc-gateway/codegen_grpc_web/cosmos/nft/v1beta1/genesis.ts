import { Class, ClassAmino, ClassSDKType, NFT, NFTAmino, NFTSDKType } from "./nft";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet } from "../../../helpers";
export const protobufPackage = "cosmos.nft.v1beta1";
/** GenesisState defines the nft module's genesis state. */
export interface GenesisState {
  /** class defines the class of the nft type. */
  classes: Class[];
  entries: Entry[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the nft module's genesis state. */
export interface GenesisStateAmino {
  /** class defines the class of the nft type. */
  classes: ClassAmino[];
  entries: EntryAmino[];
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the nft module's genesis state. */
export interface GenesisStateSDKType {
  classes: ClassSDKType[];
  entries: EntrySDKType[];
}
/** Entry Defines all nft owned by a person */
export interface Entry {
  /** owner is the owner address of the following nft */
  owner: string;
  /** nfts is a group of nfts of the same owner */
  nfts: NFT[];
}
export interface EntryProtoMsg {
  typeUrl: "/cosmos.nft.v1beta1.Entry";
  value: Uint8Array;
}
/** Entry Defines all nft owned by a person */
export interface EntryAmino {
  /** owner is the owner address of the following nft */
  owner: string;
  /** nfts is a group of nfts of the same owner */
  nfts: NFTAmino[];
}
export interface EntryAminoMsg {
  type: "cosmos-sdk/Entry";
  value: EntryAmino;
}
/** Entry Defines all nft owned by a person */
export interface EntrySDKType {
  owner: string;
  nfts: NFTSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    classes: [],
    entries: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.nft.v1beta1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.classes) {
      Class.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.entries) {
      Entry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classes.push(Class.decode(reader, reader.uint32()));
          break;
        case 2:
          message.entries.push(Entry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => Class.fromJSON(e)) : [],
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => Entry.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? Class.toJSON(e) : undefined);
    } else {
      obj.classes = [];
    }
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? Entry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.classes = object.classes?.map(e => Class.fromPartial(e)) || [];
    message.entries = object.entries?.map(e => Entry.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => Class.fromSDK(e)) : [],
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => Entry.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? Class.toSDK(e) : undefined);
    } else {
      obj.classes = [];
    }
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? Entry.toSDK(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      classes: Array.isArray(object?.classes) ? object.classes.map((e: any) => Class.fromAmino(e)) : [],
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => Entry.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.classes) {
      obj.classes = message.classes.map(e => e ? Class.toAmino(e) : undefined);
    } else {
      obj.classes = [];
    }
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? Entry.toAmino(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseEntry(): Entry {
  return {
    owner: "",
    nfts: []
  };
}
export const Entry = {
  typeUrl: "/cosmos.nft.v1beta1.Entry",
  aminoType: "cosmos-sdk/Entry",
  encode(message: Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    for (const v of message.nfts) {
      NFT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.nfts.push(NFT.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Entry {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      nfts: Array.isArray(object?.nfts) ? object.nfts.map((e: any) => NFT.fromJSON(e)) : []
    };
  },
  toJSON(message: Entry): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    if (message.nfts) {
      obj.nfts = message.nfts.map(e => e ? NFT.toJSON(e) : undefined);
    } else {
      obj.nfts = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Entry>): Entry {
    const message = createBaseEntry();
    message.owner = object.owner ?? "";
    message.nfts = object.nfts?.map(e => NFT.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: EntrySDKType): Entry {
    return {
      owner: object?.owner,
      nfts: Array.isArray(object?.nfts) ? object.nfts.map((e: any) => NFT.fromSDK(e)) : []
    };
  },
  toSDK(message: Entry): EntrySDKType {
    const obj: any = {};
    obj.owner = message.owner;
    if (message.nfts) {
      obj.nfts = message.nfts.map(e => e ? NFT.toSDK(e) : undefined);
    } else {
      obj.nfts = [];
    }
    return obj;
  },
  fromAmino(object: EntryAmino): Entry {
    return {
      owner: object.owner,
      nfts: Array.isArray(object?.nfts) ? object.nfts.map((e: any) => NFT.fromAmino(e)) : []
    };
  },
  toAmino(message: Entry): EntryAmino {
    const obj: any = {};
    obj.owner = message.owner;
    if (message.nfts) {
      obj.nfts = message.nfts.map(e => e ? NFT.toAmino(e) : undefined);
    } else {
      obj.nfts = [];
    }
    return obj;
  },
  fromAminoMsg(object: EntryAminoMsg): Entry {
    return Entry.fromAmino(object.value);
  },
  toAminoMsg(message: Entry): EntryAminoMsg {
    return {
      type: "cosmos-sdk/Entry",
      value: Entry.toAmino(message)
    };
  },
  fromProtoMsg(message: EntryProtoMsg): Entry {
    return Entry.decode(message.value);
  },
  toProto(message: Entry): Uint8Array {
    return Entry.encode(message).finish();
  },
  toProtoMsg(message: Entry): EntryProtoMsg {
    return {
      typeUrl: "/cosmos.nft.v1beta1.Entry",
      value: Entry.encode(message).finish()
    };
  }
};