import { CapabilityOwners, CapabilityOwnersSDKType } from "./capability";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial } from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "capability.v1";
/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwners {
  /** index is the index of the capability owner. */
  index: bigint;
  /** index_owners are the owners at the given index. */
  indexOwners: CapabilityOwners;
}
export interface GenesisOwnersProtoMsg {
  typeUrl: "/capability.v1.GenesisOwners";
  value: Uint8Array;
}
/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwnersSDKType {
  index: bigint;
  index_owners: CapabilityOwnersSDKType;
}
/** GenesisState defines the capability module's genesis state. */
export interface GenesisState {
  /** index is the capability global index. */
  index: bigint;
  /**
   * owners represents a map from index to owners of the capability index
   * index key is string to allow amino marshalling.
   */
  owners: GenesisOwners[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/capability.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the capability module's genesis state. */
export interface GenesisStateSDKType {
  index: bigint;
  owners: GenesisOwnersSDKType[];
}
function createBaseGenesisOwners(): GenesisOwners {
  return {
    index: BigInt(0),
    indexOwners: CapabilityOwners.fromPartial({})
  };
}
export const GenesisOwners = {
  typeUrl: "/capability.v1.GenesisOwners",
  encode(message: GenesisOwners, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.indexOwners !== undefined) {
      CapabilityOwners.encode(message.indexOwners, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisOwners {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisOwners();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64();
          break;
        case 2:
          message.indexOwners = CapabilityOwners.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisOwners {
    return {
      index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0),
      indexOwners: isSet(object.indexOwners) ? CapabilityOwners.fromJSON(object.indexOwners) : undefined
    };
  },
  toJSON(message: GenesisOwners): JsonSafe<GenesisOwners> {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
    message.indexOwners !== undefined && (obj.indexOwners = message.indexOwners ? CapabilityOwners.toJSON(message.indexOwners) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisOwners>): GenesisOwners {
    const message = createBaseGenesisOwners();
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.indexOwners = object.indexOwners !== undefined && object.indexOwners !== null ? CapabilityOwners.fromPartial(object.indexOwners) : undefined;
    return message;
  },
  fromSDK(object: GenesisOwnersSDKType): GenesisOwners {
    return {
      index: object?.index,
      indexOwners: object.index_owners ? CapabilityOwners.fromSDK(object.index_owners) : undefined
    };
  },
  fromSDKJSON(object: any): GenesisOwnersSDKType {
    return {
      index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0),
      index_owners: isSet(object.index_owners) ? CapabilityOwners.fromSDKJSON(object.index_owners) : undefined
    };
  },
  toSDK(message: GenesisOwners): GenesisOwnersSDKType {
    const obj: any = {};
    obj.index = message.index;
    message.indexOwners !== undefined && (obj.index_owners = message.indexOwners ? CapabilityOwners.toSDK(message.indexOwners) : undefined);
    return obj;
  },
  fromAmino(object: GenesisOwnersAmino): GenesisOwners {
    const message = createBaseGenesisOwners();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    if (object.index_owners !== undefined && object.index_owners !== null) {
      message.indexOwners = CapabilityOwners.fromAmino(object.index_owners);
    }
    return message;
  },
  toAmino(message: GenesisOwners): GenesisOwnersAmino {
    const obj: any = {};
    obj.index = message.index !== BigInt(0) ? message.index?.toString() : undefined;
    obj.index_owners = message.indexOwners ? CapabilityOwners.toAmino(message.indexOwners) : CapabilityOwners.toAmino(CapabilityOwners.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: GenesisOwnersAminoMsg): GenesisOwners {
    return GenesisOwners.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisOwnersProtoMsg): GenesisOwners {
    return GenesisOwners.decode(message.value);
  },
  toProto(message: GenesisOwners): Uint8Array {
    return GenesisOwners.encode(message).finish();
  },
  toProtoMsg(message: GenesisOwners): GenesisOwnersProtoMsg {
    return {
      typeUrl: "/capability.v1.GenesisOwners",
      value: GenesisOwners.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    index: BigInt(0),
    owners: []
  };
}
export const GenesisState = {
  typeUrl: "/capability.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(message.index);
    }
    for (const v of message.owners) {
      GenesisOwners.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64();
          break;
        case 2:
          message.owners.push(GenesisOwners.decode(reader, reader.uint32()));
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
      index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0),
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => GenesisOwners.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
    if (message.owners) {
      obj.owners = message.owners.map(e => e ? GenesisOwners.toJSON(e) : undefined);
    } else {
      obj.owners = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
    message.owners = object.owners?.map(e => GenesisOwners.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      index: object?.index,
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => GenesisOwners.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0),
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => GenesisOwners.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    obj.index = message.index;
    if (message.owners) {
      obj.owners = message.owners.map(e => e ? GenesisOwners.toSDK(e) : undefined);
    } else {
      obj.owners = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    message.owners = object.owners?.map(e => GenesisOwners.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.index = message.index !== BigInt(0) ? message.index?.toString() : undefined;
    if (message.owners) {
      obj.owners = message.owners.map(e => e ? GenesisOwners.toAmino(e) : undefined);
    } else {
      obj.owners = message.owners;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/capability.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};