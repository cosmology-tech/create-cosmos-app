import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** ModuleDescriptor describes an app module. */
export interface ModuleDescriptor {
    /**
     * go_import names the package that should be imported by an app to load the
     * module in the runtime module registry. Either go_import must be defined here
     * or the go_package option must be defined at the file level to indicate
     * to users where to location the module implementation. go_import takes
     * precedence over go_package when both are defined.
     */
    goImport: string;
    /**
     * use_package refers to a protobuf package that this module
     * uses and exposes to the world. In an app, only one module should "use"
     * or own a single protobuf package. It is assumed that the module uses
     * all of the .proto files in a single package.
     */
    usePackage: PackageReference[];
    /**
     * can_migrate_from defines which module versions this module can migrate
     * state from. The framework will check that one module version is able to
     * migrate from a previous module version before attempting to update its
     * config. It is assumed that modules can transitively migrate from earlier
     * versions. For instance if v3 declares it can migrate from v2, and v2
     * declares it can migrate from v1, the framework knows how to migrate
     * from v1 to v3, assuming all 3 module versions are registered at runtime.
     */
    canMigrateFrom: MigrateFromInfo[];
}
export interface ModuleDescriptorProtoMsg {
    typeUrl: "/cosmos.app.v1alpha1.ModuleDescriptor";
    value: Uint8Array;
}
/** ModuleDescriptor describes an app module. */
export interface ModuleDescriptorAmino {
    /**
     * go_import names the package that should be imported by an app to load the
     * module in the runtime module registry. Either go_import must be defined here
     * or the go_package option must be defined at the file level to indicate
     * to users where to location the module implementation. go_import takes
     * precedence over go_package when both are defined.
     */
    go_import?: string;
    /**
     * use_package refers to a protobuf package that this module
     * uses and exposes to the world. In an app, only one module should "use"
     * or own a single protobuf package. It is assumed that the module uses
     * all of the .proto files in a single package.
     */
    use_package?: PackageReferenceAmino[];
    /**
     * can_migrate_from defines which module versions this module can migrate
     * state from. The framework will check that one module version is able to
     * migrate from a previous module version before attempting to update its
     * config. It is assumed that modules can transitively migrate from earlier
     * versions. For instance if v3 declares it can migrate from v2, and v2
     * declares it can migrate from v1, the framework knows how to migrate
     * from v1 to v3, assuming all 3 module versions are registered at runtime.
     */
    can_migrate_from?: MigrateFromInfoAmino[];
}
export interface ModuleDescriptorAminoMsg {
    type: "cosmos-sdk/ModuleDescriptor";
    value: ModuleDescriptorAmino;
}
/** ModuleDescriptor describes an app module. */
export interface ModuleDescriptorSDKType {
    go_import: string;
    use_package: PackageReferenceSDKType[];
    can_migrate_from: MigrateFromInfoSDKType[];
}
/** PackageReference is a reference to a protobuf package used by a module. */
export interface PackageReference {
    /** name is the fully-qualified name of the package. */
    name: string;
    /**
     * revision is the optional revision of the package that is being used.
     * Protobuf packages used in Cosmos should generally have a major version
     * as the last part of the package name, ex. foo.bar.baz.v1.
     * The revision of a package can be thought of as the minor version of a
     * package which has additional backwards compatible definitions that weren't
     * present in a previous version.
     *
     * A package should indicate its revision with a source code comment
     * above the package declaration in one of its fields containing the
     * test "Revision N" where N is an integer revision. All packages start
     * at revision 0 the first time they are released in a module.
     *
     * When a new version of a module is released and items are added to existing
     * .proto files, these definitions should contain comments of the form
     * "Since Revision N" where N is an integer revision.
     *
     * When the module runtime starts up, it will check the pinned proto
     * image and panic if there are runtime protobuf definitions that are not
     * in the pinned descriptor which do not have
     * a "Since Revision N" comment or have a "Since Revision N" comment where
     * N is <= to the revision specified here. This indicates that the protobuf
     * files have been updated, but the pinned file descriptor hasn't.
     *
     * If there are items in the pinned file descriptor with a revision
     * greater than the value indicated here, this will also cause a panic
     * as it may mean that the pinned descriptor for a legacy module has been
     * improperly updated or that there is some other versioning discrepancy.
     * Runtime protobuf definitions will also be checked for compatibility
     * with pinned file descriptors to make sure there are no incompatible changes.
     *
     * This behavior ensures that:
     * * pinned proto images are up-to-date
     * * protobuf files are carefully annotated with revision comments which
     *   are important good client UX
     * * protobuf files are changed in backwards and forwards compatible ways
     */
    revision: number;
}
export interface PackageReferenceProtoMsg {
    typeUrl: "/cosmos.app.v1alpha1.PackageReference";
    value: Uint8Array;
}
/** PackageReference is a reference to a protobuf package used by a module. */
export interface PackageReferenceAmino {
    /** name is the fully-qualified name of the package. */
    name?: string;
    /**
     * revision is the optional revision of the package that is being used.
     * Protobuf packages used in Cosmos should generally have a major version
     * as the last part of the package name, ex. foo.bar.baz.v1.
     * The revision of a package can be thought of as the minor version of a
     * package which has additional backwards compatible definitions that weren't
     * present in a previous version.
     *
     * A package should indicate its revision with a source code comment
     * above the package declaration in one of its fields containing the
     * test "Revision N" where N is an integer revision. All packages start
     * at revision 0 the first time they are released in a module.
     *
     * When a new version of a module is released and items are added to existing
     * .proto files, these definitions should contain comments of the form
     * "Since Revision N" where N is an integer revision.
     *
     * When the module runtime starts up, it will check the pinned proto
     * image and panic if there are runtime protobuf definitions that are not
     * in the pinned descriptor which do not have
     * a "Since Revision N" comment or have a "Since Revision N" comment where
     * N is <= to the revision specified here. This indicates that the protobuf
     * files have been updated, but the pinned file descriptor hasn't.
     *
     * If there are items in the pinned file descriptor with a revision
     * greater than the value indicated here, this will also cause a panic
     * as it may mean that the pinned descriptor for a legacy module has been
     * improperly updated or that there is some other versioning discrepancy.
     * Runtime protobuf definitions will also be checked for compatibility
     * with pinned file descriptors to make sure there are no incompatible changes.
     *
     * This behavior ensures that:
     * * pinned proto images are up-to-date
     * * protobuf files are carefully annotated with revision comments which
     *   are important good client UX
     * * protobuf files are changed in backwards and forwards compatible ways
     */
    revision?: number;
}
export interface PackageReferenceAminoMsg {
    type: "cosmos-sdk/PackageReference";
    value: PackageReferenceAmino;
}
/** PackageReference is a reference to a protobuf package used by a module. */
export interface PackageReferenceSDKType {
    name: string;
    revision: number;
}
/**
 * MigrateFromInfo is information on a module version that a newer module
 * can migrate from.
 */
export interface MigrateFromInfo {
    /**
     * module is the fully-qualified protobuf name of the module config object
     * for the previous module version, ex: "cosmos.group.module.v1.Module".
     */
    module: string;
}
export interface MigrateFromInfoProtoMsg {
    typeUrl: "/cosmos.app.v1alpha1.MigrateFromInfo";
    value: Uint8Array;
}
/**
 * MigrateFromInfo is information on a module version that a newer module
 * can migrate from.
 */
export interface MigrateFromInfoAmino {
    /**
     * module is the fully-qualified protobuf name of the module config object
     * for the previous module version, ex: "cosmos.group.module.v1.Module".
     */
    module?: string;
}
export interface MigrateFromInfoAminoMsg {
    type: "cosmos-sdk/MigrateFromInfo";
    value: MigrateFromInfoAmino;
}
/**
 * MigrateFromInfo is information on a module version that a newer module
 * can migrate from.
 */
export interface MigrateFromInfoSDKType {
    module: string;
}
export declare const ModuleDescriptor: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ModuleDescriptor;
    isSDK(o: any): o is ModuleDescriptorSDKType;
    isAmino(o: any): o is ModuleDescriptorAmino;
    encode(message: ModuleDescriptor, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ModuleDescriptor;
    fromJSON(object: any): ModuleDescriptor;
    toJSON(message: ModuleDescriptor): unknown;
    fromPartial(object: DeepPartial<ModuleDescriptor>): ModuleDescriptor;
    fromSDK(object: ModuleDescriptorSDKType): ModuleDescriptor;
    toSDK(message: ModuleDescriptor): ModuleDescriptorSDKType;
    fromAmino(object: ModuleDescriptorAmino): ModuleDescriptor;
    toAmino(message: ModuleDescriptor): ModuleDescriptorAmino;
    fromAminoMsg(object: ModuleDescriptorAminoMsg): ModuleDescriptor;
    toAminoMsg(message: ModuleDescriptor): ModuleDescriptorAminoMsg;
    fromProtoMsg(message: ModuleDescriptorProtoMsg): ModuleDescriptor;
    toProto(message: ModuleDescriptor): Uint8Array;
    toProtoMsg(message: ModuleDescriptor): ModuleDescriptorProtoMsg;
};
export declare const PackageReference: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is PackageReference;
    isSDK(o: any): o is PackageReferenceSDKType;
    isAmino(o: any): o is PackageReferenceAmino;
    encode(message: PackageReference, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PackageReference;
    fromJSON(object: any): PackageReference;
    toJSON(message: PackageReference): unknown;
    fromPartial(object: DeepPartial<PackageReference>): PackageReference;
    fromSDK(object: PackageReferenceSDKType): PackageReference;
    toSDK(message: PackageReference): PackageReferenceSDKType;
    fromAmino(object: PackageReferenceAmino): PackageReference;
    toAmino(message: PackageReference): PackageReferenceAmino;
    fromAminoMsg(object: PackageReferenceAminoMsg): PackageReference;
    toAminoMsg(message: PackageReference): PackageReferenceAminoMsg;
    fromProtoMsg(message: PackageReferenceProtoMsg): PackageReference;
    toProto(message: PackageReference): Uint8Array;
    toProtoMsg(message: PackageReference): PackageReferenceProtoMsg;
};
export declare const MigrateFromInfo: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MigrateFromInfo;
    isSDK(o: any): o is MigrateFromInfoSDKType;
    isAmino(o: any): o is MigrateFromInfoAmino;
    encode(message: MigrateFromInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MigrateFromInfo;
    fromJSON(object: any): MigrateFromInfo;
    toJSON(message: MigrateFromInfo): unknown;
    fromPartial(object: DeepPartial<MigrateFromInfo>): MigrateFromInfo;
    fromSDK(object: MigrateFromInfoSDKType): MigrateFromInfo;
    toSDK(message: MigrateFromInfo): MigrateFromInfoSDKType;
    fromAmino(object: MigrateFromInfoAmino): MigrateFromInfo;
    toAmino(message: MigrateFromInfo): MigrateFromInfoAmino;
    fromAminoMsg(object: MigrateFromInfoAminoMsg): MigrateFromInfo;
    toAminoMsg(message: MigrateFromInfo): MigrateFromInfoAminoMsg;
    fromProtoMsg(message: MigrateFromInfoProtoMsg): MigrateFromInfo;
    toProto(message: MigrateFromInfo): Uint8Array;
    toProtoMsg(message: MigrateFromInfo): MigrateFromInfoProtoMsg;
};
