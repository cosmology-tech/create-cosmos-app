//@ts-nocheck
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { DeepPartial, isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.app.v1alpha1";
/**
 * Config represents the configuration for a Cosmos SDK ABCI app.
 * It is intended that all state machine logic including the version of
 * baseapp and tx handlers (and possibly even Tendermint) that an app needs
 * can be described in a config object. For compatibility, the framework should
 * allow a mixture of declarative and imperative app wiring, however, apps
 * that strive for the maximum ease of maintainability should be able to describe
 * their state machine with a config object alone.
 */
export interface Config {
  /** modules are the module configurations for the app. */
  modules: ModuleConfig[];
}
export interface ConfigProtoMsg {
  typeUrl: "/cosmos.app.v1alpha1.Config";
  value: Uint8Array;
}
/**
 * Config represents the configuration for a Cosmos SDK ABCI app.
 * It is intended that all state machine logic including the version of
 * baseapp and tx handlers (and possibly even Tendermint) that an app needs
 * can be described in a config object. For compatibility, the framework should
 * allow a mixture of declarative and imperative app wiring, however, apps
 * that strive for the maximum ease of maintainability should be able to describe
 * their state machine with a config object alone.
 */
export interface ConfigAmino {
  /** modules are the module configurations for the app. */
  modules?: ModuleConfigAmino[];
}
export interface ConfigAminoMsg {
  type: "cosmos-sdk/Config";
  value: ConfigAmino;
}
/**
 * Config represents the configuration for a Cosmos SDK ABCI app.
 * It is intended that all state machine logic including the version of
 * baseapp and tx handlers (and possibly even Tendermint) that an app needs
 * can be described in a config object. For compatibility, the framework should
 * allow a mixture of declarative and imperative app wiring, however, apps
 * that strive for the maximum ease of maintainability should be able to describe
 * their state machine with a config object alone.
 */
export interface ConfigSDKType {
  modules: ModuleConfigSDKType[];
}
/** ModuleConfig is a module configuration for an app. */
export interface ModuleConfig {
  /**
   * name is the unique name of the module within the app. It should be a name
   * that persists between different versions of a module so that modules
   * can be smoothly upgraded to new versions.
   * 
   * For example, for the module cosmos.bank.module.v1.Module, we may chose
   * to simply name the module "bank" in the app. When we upgrade to
   * cosmos.bank.module.v2.Module, the app-specific name "bank" stays the same
   * and the framework knows that the v2 module should receive all the same state
   * that the v1 module had. Note: modules should provide info on which versions
   * they can migrate from in the ModuleDescriptor.can_migration_from field.
   */
  name: string;
  /**
   * config is the config object for the module. Module config messages should
   * define a ModuleDescriptor using the cosmos.app.v1alpha1.is_module extension.
   */
  config?: Any;
}
export interface ModuleConfigProtoMsg {
  typeUrl: "/cosmos.app.v1alpha1.ModuleConfig";
  value: Uint8Array;
}
/** ModuleConfig is a module configuration for an app. */
export interface ModuleConfigAmino {
  /**
   * name is the unique name of the module within the app. It should be a name
   * that persists between different versions of a module so that modules
   * can be smoothly upgraded to new versions.
   * 
   * For example, for the module cosmos.bank.module.v1.Module, we may chose
   * to simply name the module "bank" in the app. When we upgrade to
   * cosmos.bank.module.v2.Module, the app-specific name "bank" stays the same
   * and the framework knows that the v2 module should receive all the same state
   * that the v1 module had. Note: modules should provide info on which versions
   * they can migrate from in the ModuleDescriptor.can_migration_from field.
   */
  name?: string;
  /**
   * config is the config object for the module. Module config messages should
   * define a ModuleDescriptor using the cosmos.app.v1alpha1.is_module extension.
   */
  config?: AnyAmino;
}
export interface ModuleConfigAminoMsg {
  type: "cosmos-sdk/ModuleConfig";
  value: ModuleConfigAmino;
}
/** ModuleConfig is a module configuration for an app. */
export interface ModuleConfigSDKType {
  name: string;
  config?: AnySDKType;
}
function createBaseConfig(): Config {
  return {
    modules: []
  };
}
export const Config = {
  typeUrl: "/cosmos.app.v1alpha1.Config",
  aminoType: "cosmos-sdk/Config",
  is(o: any): o is Config {
    return o && (o.$typeUrl === Config.typeUrl || Array.isArray(o.modules) && (!o.modules.length || ModuleConfig.is(o.modules[0])));
  },
  isSDK(o: any): o is ConfigSDKType {
    return o && (o.$typeUrl === Config.typeUrl || Array.isArray(o.modules) && (!o.modules.length || ModuleConfig.isSDK(o.modules[0])));
  },
  isAmino(o: any): o is ConfigAmino {
    return o && (o.$typeUrl === Config.typeUrl || Array.isArray(o.modules) && (!o.modules.length || ModuleConfig.isAmino(o.modules[0])));
  },
  encode(message: Config, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.modules) {
      ModuleConfig.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Config {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.modules.push(ModuleConfig.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Config {
    const obj = createBaseConfig();
    if (Array.isArray(object?.modules)) obj.modules = object.modules.map((e: any) => ModuleConfig.fromJSON(e));
    return obj;
  },
  toJSON(message: Config): JsonSafe<Config> {
    const obj: any = {};
    if (message.modules) {
      obj.modules = message.modules.map(e => e ? ModuleConfig.toJSON(e) : undefined);
    } else {
      obj.modules = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Config>): Config {
    const message = createBaseConfig();
    message.modules = object.modules?.map(e => ModuleConfig.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ConfigSDKType): Config {
    return {
      modules: Array.isArray(object?.modules) ? object.modules.map((e: any) => ModuleConfig.fromSDK(e)) : []
    };
  },
  toSDK(message: Config): ConfigSDKType {
    const obj: any = {};
    if (message.modules) {
      obj.modules = message.modules.map(e => e ? ModuleConfig.toSDK(e) : undefined);
    } else {
      obj.modules = [];
    }
    return obj;
  },
  fromAmino(object: ConfigAmino): Config {
    const message = createBaseConfig();
    message.modules = object.modules?.map(e => ModuleConfig.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Config): ConfigAmino {
    const obj: any = {};
    if (message.modules) {
      obj.modules = message.modules.map(e => e ? ModuleConfig.toAmino(e) : undefined);
    } else {
      obj.modules = message.modules;
    }
    return obj;
  },
  fromAminoMsg(object: ConfigAminoMsg): Config {
    return Config.fromAmino(object.value);
  },
  toAminoMsg(message: Config): ConfigAminoMsg {
    return {
      type: "cosmos-sdk/Config",
      value: Config.toAmino(message)
    };
  },
  fromProtoMsg(message: ConfigProtoMsg): Config {
    return Config.decode(message.value);
  },
  toProto(message: Config): Uint8Array {
    return Config.encode(message).finish();
  },
  toProtoMsg(message: Config): ConfigProtoMsg {
    return {
      typeUrl: "/cosmos.app.v1alpha1.Config",
      value: Config.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Config.typeUrl, Config);
GlobalDecoderRegistry.registerAminoProtoMapping(Config.aminoType, Config.typeUrl);
function createBaseModuleConfig(): ModuleConfig {
  return {
    name: "",
    config: undefined
  };
}
export const ModuleConfig = {
  typeUrl: "/cosmos.app.v1alpha1.ModuleConfig",
  aminoType: "cosmos-sdk/ModuleConfig",
  is(o: any): o is ModuleConfig {
    return o && (o.$typeUrl === ModuleConfig.typeUrl || typeof o.name === "string");
  },
  isSDK(o: any): o is ModuleConfigSDKType {
    return o && (o.$typeUrl === ModuleConfig.typeUrl || typeof o.name === "string");
  },
  isAmino(o: any): o is ModuleConfigAmino {
    return o && (o.$typeUrl === ModuleConfig.typeUrl || typeof o.name === "string");
  },
  encode(message: ModuleConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.config !== undefined) {
      Any.encode(message.config, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ModuleConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.config = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ModuleConfig {
    const obj = createBaseModuleConfig();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.config)) obj.config = Any.fromJSON(object.config);
    return obj;
  },
  toJSON(message: ModuleConfig): JsonSafe<ModuleConfig> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.config !== undefined && (obj.config = message.config ? Any.toJSON(message.config) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ModuleConfig>): ModuleConfig {
    const message = createBaseModuleConfig();
    message.name = object.name ?? "";
    if (object.config !== undefined && object.config !== null) {
      message.config = Any.fromPartial(object.config);
    }
    return message;
  },
  fromSDK(object: ModuleConfigSDKType): ModuleConfig {
    return {
      name: object?.name,
      config: object.config ? Any.fromSDK(object.config) : undefined
    };
  },
  toSDK(message: ModuleConfig): ModuleConfigSDKType {
    const obj: any = {};
    obj.name = message.name;
    message.config !== undefined && (obj.config = message.config ? Any.toSDK(message.config) : undefined);
    return obj;
  },
  fromAmino(object: ModuleConfigAmino): ModuleConfig {
    const message = createBaseModuleConfig();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.config !== undefined && object.config !== null) {
      message.config = Any.fromAmino(object.config);
    }
    return message;
  },
  toAmino(message: ModuleConfig): ModuleConfigAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.config = message.config ? Any.toAmino(message.config) : undefined;
    return obj;
  },
  fromAminoMsg(object: ModuleConfigAminoMsg): ModuleConfig {
    return ModuleConfig.fromAmino(object.value);
  },
  toAminoMsg(message: ModuleConfig): ModuleConfigAminoMsg {
    return {
      type: "cosmos-sdk/ModuleConfig",
      value: ModuleConfig.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleConfigProtoMsg): ModuleConfig {
    return ModuleConfig.decode(message.value);
  },
  toProto(message: ModuleConfig): Uint8Array {
    return ModuleConfig.encode(message).finish();
  },
  toProtoMsg(message: ModuleConfig): ModuleConfigProtoMsg {
    return {
      typeUrl: "/cosmos.app.v1alpha1.ModuleConfig",
      value: ModuleConfig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ModuleConfig.typeUrl, ModuleConfig);
GlobalDecoderRegistry.registerAminoProtoMapping(ModuleConfig.aminoType, ModuleConfig.typeUrl);