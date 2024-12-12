import { GrantAuthorization, GrantAuthorizationSDKType } from "./authz";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial } from "../../../helpers";
import { ComputedRef } from "vue";
export const protobufPackage = "cosmos.authz.v1beta1";
/** GenesisState defines the authz module's genesis state. */
export interface GenesisState {
  authorization: GrantAuthorization[];
}
export interface ReactiveGenesisState {
  authorization: ComputedRef<GrantAuthorization[]>;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the authz module's genesis state. */
export interface GenesisStateSDKType {
  authorization: GrantAuthorizationSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    authorization: []
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.authz.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.authorization) {
      GrantAuthorization.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.authorization.push(GrantAuthorization.decode(reader, reader.uint32()));
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
      authorization: Array.isArray(object?.authorization) ? object.authorization.map((e: any) => GrantAuthorization.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.authorization) {
      obj.authorization = message.authorization.map(e => e ? GrantAuthorization.toJSON(e) : undefined);
    } else {
      obj.authorization = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.authorization = object.authorization?.map(e => GrantAuthorization.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      authorization: Array.isArray(object?.authorization) ? object.authorization.map((e: any) => GrantAuthorization.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      authorization: Array.isArray(object?.authorization) ? object.authorization.map((e: any) => GrantAuthorization.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    if (message.authorization) {
      obj.authorization = message.authorization.map(e => e ? GrantAuthorization.toSDK(e) : undefined);
    } else {
      obj.authorization = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.authorization = object.authorization?.map(e => GrantAuthorization.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.authorization) {
      obj.authorization = message.authorization.map(e => e ? GrantAuthorization.toAmino(e) : undefined);
    } else {
      obj.authorization = message.authorization;
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
      typeUrl: "/cosmos.authz.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};