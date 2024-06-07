//@ts-nocheck
import { Height, HeightAmino, HeightSDKType } from "../../../core/client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "ibc.lightclients.localhost.v1";
/**
 * ClientState defines a loopback (localhost) client. It requires (read-only)
 * access to keys outside the client prefix.
 */
export interface ClientState {
  /** self chain ID */
  chainId: string;
  /** self latest block height */
  height: Height;
}
export interface ClientStateProtoMsg {
  typeUrl: "/ibc.lightclients.localhost.v1.ClientState";
  value: Uint8Array;
}
/**
 * ClientState defines a loopback (localhost) client. It requires (read-only)
 * access to keys outside the client prefix.
 */
export interface ClientStateAmino {
  /** self chain ID */
  chain_id?: string;
  /** self latest block height */
  height?: HeightAmino;
}
export interface ClientStateAminoMsg {
  type: "cosmos-sdk/ClientState";
  value: ClientStateAmino;
}
/**
 * ClientState defines a loopback (localhost) client. It requires (read-only)
 * access to keys outside the client prefix.
 */
export interface ClientStateSDKType {
  chain_id: string;
  height: HeightSDKType;
}
function createBaseClientState(): ClientState {
  return {
    chainId: "",
    height: Height.fromPartial({})
  };
}
export const ClientState = {
  typeUrl: "/ibc.lightclients.localhost.v1.ClientState",
  aminoType: "cosmos-sdk/ClientState",
  is(o: any): o is ClientState {
    return o && (o.$typeUrl === ClientState.typeUrl || typeof o.chainId === "string" && Height.is(o.height));
  },
  isSDK(o: any): o is ClientStateSDKType {
    return o && (o.$typeUrl === ClientState.typeUrl || typeof o.chain_id === "string" && Height.isSDK(o.height));
  },
  isAmino(o: any): o is ClientStateAmino {
    return o && (o.$typeUrl === ClientState.typeUrl || typeof o.chain_id === "string" && Height.isAmino(o.height));
  },
  encode(message: ClientState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== undefined) {
      writer.uint32(10).string(message.chainId);
    }
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClientState {
    const obj = createBaseClientState();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.height)) obj.height = Height.fromJSON(object.height);
    return obj;
  },
  toJSON(message: ClientState): JsonSafe<ClientState> {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ClientState>): ClientState {
    const message = createBaseClientState();
    message.chainId = object.chainId ?? "";
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromPartial(object.height);
    }
    return message;
  },
  fromSDK(object: ClientStateSDKType): ClientState {
    return {
      chainId: object?.chain_id,
      height: object.height ? Height.fromSDK(object.height) : undefined
    };
  },
  toSDK(message: ClientState): ClientStateSDKType {
    const obj: any = {};
    obj.chain_id = message.chainId;
    message.height !== undefined && (obj.height = message.height ? Height.toSDK(message.height) : undefined);
    return obj;
  },
  fromAmino(object: ClientStateAmino): ClientState {
    const message = createBaseClientState();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Height.fromAmino(object.height);
    }
    return message;
  },
  toAmino(message: ClientState): ClientStateAmino {
    const obj: any = {};
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.height = message.height ? Height.toAmino(message.height) : {};
    return obj;
  },
  fromAminoMsg(object: ClientStateAminoMsg): ClientState {
    return ClientState.fromAmino(object.value);
  },
  toAminoMsg(message: ClientState): ClientStateAminoMsg {
    return {
      type: "cosmos-sdk/ClientState",
      value: ClientState.toAmino(message)
    };
  },
  fromProtoMsg(message: ClientStateProtoMsg): ClientState {
    return ClientState.decode(message.value);
  },
  toProto(message: ClientState): Uint8Array {
    return ClientState.encode(message).finish();
  },
  toProtoMsg(message: ClientState): ClientStateProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.localhost.v1.ClientState",
      value: ClientState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ClientState.typeUrl, ClientState);
GlobalDecoderRegistry.registerAminoProtoMapping(ClientState.aminoType, ClientState.typeUrl);