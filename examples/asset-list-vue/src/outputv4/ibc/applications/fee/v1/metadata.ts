import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
import { ComputedRef } from "vue";
export const protobufPackage = "ibc.applications.fee.v1";
/**
 * Metadata defines the ICS29 channel specific metadata encoded into the channel version bytestring
 * See ICS004: https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#Versioning
 */
export interface Metadata {
  /** fee_version defines the ICS29 fee version */
  feeVersion: string;
  /** app_version defines the underlying application version, which may or may not be a JSON encoded bytestring */
  appVersion: string;
}
export interface ReactiveMetadata {
  feeVersion: ComputedRef<string>;
  appVersion: ComputedRef<string>;
}
export interface MetadataProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.Metadata";
  value: Uint8Array;
}
/**
 * Metadata defines the ICS29 channel specific metadata encoded into the channel version bytestring
 * See ICS004: https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#Versioning
 */
export interface MetadataSDKType {
  fee_version: string;
  app_version: string;
}
function createBaseMetadata(): Metadata {
  return {
    feeVersion: "",
    appVersion: ""
  };
}
export const Metadata = {
  typeUrl: "/ibc.applications.fee.v1.Metadata",
  encode(message: Metadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feeVersion !== "") {
      writer.uint32(10).string(message.feeVersion);
    }
    if (message.appVersion !== "") {
      writer.uint32(18).string(message.appVersion);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feeVersion = reader.string();
          break;
        case 2:
          message.appVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Metadata {
    return {
      feeVersion: isSet(object.feeVersion) ? String(object.feeVersion) : "",
      appVersion: isSet(object.appVersion) ? String(object.appVersion) : ""
    };
  },
  toJSON(message: Metadata): JsonSafe<Metadata> {
    const obj: any = {};
    message.feeVersion !== undefined && (obj.feeVersion = message.feeVersion);
    message.appVersion !== undefined && (obj.appVersion = message.appVersion);
    return obj;
  },
  fromPartial(object: DeepPartial<Metadata>): Metadata {
    const message = createBaseMetadata();
    message.feeVersion = object.feeVersion ?? "";
    message.appVersion = object.appVersion ?? "";
    return message;
  },
  fromSDK(object: MetadataSDKType): Metadata {
    return {
      feeVersion: object?.fee_version,
      appVersion: object?.app_version
    };
  },
  fromSDKJSON(object: any): MetadataSDKType {
    return {
      fee_version: isSet(object.fee_version) ? String(object.fee_version) : "",
      app_version: isSet(object.app_version) ? String(object.app_version) : ""
    };
  },
  toSDK(message: Metadata): MetadataSDKType {
    const obj: any = {};
    obj.fee_version = message.feeVersion;
    obj.app_version = message.appVersion;
    return obj;
  },
  fromAmino(object: MetadataAmino): Metadata {
    const message = createBaseMetadata();
    if (object.fee_version !== undefined && object.fee_version !== null) {
      message.feeVersion = object.fee_version;
    }
    if (object.app_version !== undefined && object.app_version !== null) {
      message.appVersion = object.app_version;
    }
    return message;
  },
  toAmino(message: Metadata): MetadataAmino {
    const obj: any = {};
    obj.fee_version = message.feeVersion === "" ? undefined : message.feeVersion;
    obj.app_version = message.appVersion === "" ? undefined : message.appVersion;
    return obj;
  },
  fromAminoMsg(object: MetadataAminoMsg): Metadata {
    return Metadata.fromAmino(object.value);
  },
  toAminoMsg(message: Metadata): MetadataAminoMsg {
    return {
      type: "cosmos-sdk/Metadata",
      value: Metadata.toAmino(message)
    };
  },
  fromProtoMsg(message: MetadataProtoMsg): Metadata {
    return Metadata.decode(message.value);
  },
  toProto(message: Metadata): Uint8Array {
    return Metadata.encode(message).finish();
  },
  toProtoMsg(message: Metadata): MetadataProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.Metadata",
      value: Metadata.encode(message).finish()
    };
  }
};