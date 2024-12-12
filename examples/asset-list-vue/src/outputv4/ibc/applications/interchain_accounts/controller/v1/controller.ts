import { BinaryReader, BinaryWriter } from "../../../../../binary";
import { isSet, DeepPartial } from "../../../../../helpers";
import { JsonSafe } from "../../../../../json-safe";
import { ComputedRef } from "vue";
export const protobufPackage = "ibc.applications.interchain_accounts.controller.v1";
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the controller submodule.
 */
export interface Params {
  /** controller_enabled enables or disables the controller submodule. */
  controllerEnabled: boolean;
}
export interface ReactiveParams {
  controllerEnabled: ComputedRef<boolean>;
}
export interface ParamsProtoMsg {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the controller submodule.
 */
export interface ParamsSDKType {
  controller_enabled: boolean;
}
function createBaseParams(): Params {
  return {
    controllerEnabled: false
  };
}
export const Params = {
  typeUrl: "/ibc.applications.interchain_accounts.controller.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.controllerEnabled === true) {
      writer.uint32(8).bool(message.controllerEnabled);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.controllerEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      controllerEnabled: isSet(object.controllerEnabled) ? Boolean(object.controllerEnabled) : false
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.controllerEnabled !== undefined && (obj.controllerEnabled = message.controllerEnabled);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.controllerEnabled = object.controllerEnabled ?? false;
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      controllerEnabled: object?.controller_enabled
    };
  },
  fromSDKJSON(object: any): ParamsSDKType {
    return {
      controller_enabled: isSet(object.controller_enabled) ? Boolean(object.controller_enabled) : false
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.controller_enabled = message.controllerEnabled;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.controller_enabled !== undefined && object.controller_enabled !== null) {
      message.controllerEnabled = object.controller_enabled;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.controller_enabled = message.controllerEnabled === false ? undefined : message.controllerEnabled;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/ibc.applications.interchain_accounts.controller.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};