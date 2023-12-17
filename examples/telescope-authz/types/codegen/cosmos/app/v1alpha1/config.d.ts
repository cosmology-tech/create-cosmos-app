import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
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
    config?: Any | undefined;
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
    config?: AnyAmino | undefined;
}
export interface ModuleConfigAminoMsg {
    type: "cosmos-sdk/ModuleConfig";
    value: ModuleConfigAmino;
}
/** ModuleConfig is a module configuration for an app. */
export interface ModuleConfigSDKType {
    name: string;
    config?: AnySDKType | undefined;
}
export declare const Config: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Config;
    isSDK(o: any): o is ConfigSDKType;
    isAmino(o: any): o is ConfigAmino;
    encode(message: Config, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Config;
    fromJSON(object: any): Config;
    toJSON(message: Config): unknown;
    fromPartial(object: DeepPartial<Config>): Config;
    fromSDK(object: ConfigSDKType): Config;
    toSDK(message: Config): ConfigSDKType;
    fromAmino(object: ConfigAmino): Config;
    toAmino(message: Config): ConfigAmino;
    fromAminoMsg(object: ConfigAminoMsg): Config;
    toAminoMsg(message: Config): ConfigAminoMsg;
    fromProtoMsg(message: ConfigProtoMsg): Config;
    toProto(message: Config): Uint8Array;
    toProtoMsg(message: Config): ConfigProtoMsg;
};
export declare const ModuleConfig: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ModuleConfig;
    isSDK(o: any): o is ModuleConfigSDKType;
    isAmino(o: any): o is ModuleConfigAmino;
    encode(message: ModuleConfig, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ModuleConfig;
    fromJSON(object: any): ModuleConfig;
    toJSON(message: ModuleConfig): unknown;
    fromPartial(object: DeepPartial<ModuleConfig>): ModuleConfig;
    fromSDK(object: ModuleConfigSDKType): ModuleConfig;
    toSDK(message: ModuleConfig): ModuleConfigSDKType;
    fromAmino(object: ModuleConfigAmino): ModuleConfig;
    toAmino(message: ModuleConfig): ModuleConfigAmino;
    fromAminoMsg(object: ModuleConfigAminoMsg): ModuleConfig;
    toAminoMsg(message: ModuleConfig): ModuleConfigAminoMsg;
    fromProtoMsg(message: ModuleConfigProtoMsg): ModuleConfig;
    toProto(message: ModuleConfig): Uint8Array;
    toProtoMsg(message: ModuleConfig): ModuleConfigProtoMsg;
};
