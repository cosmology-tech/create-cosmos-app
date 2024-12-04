import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "osmosis.gamm.v1beta1";
/**
 * ReplaceMigrationRecordsProposal is a gov Content type for updating the
 * migration records. If a ReplaceMigrationRecordsProposal passes, the
 * proposal’s records override the existing MigrationRecords set in the module.
 * Each record specifies a single connection between a single balancer pool and
 * a single concentrated pool.
 */
export interface ReplaceMigrationRecordsProposal {
  title: string;
  description: string;
}
export interface ReplaceMigrationRecordsProposalProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal";
  value: Uint8Array;
}
/**
 * ReplaceMigrationRecordsProposal is a gov Content type for updating the
 * migration records. If a ReplaceMigrationRecordsProposal passes, the
 * proposal’s records override the existing MigrationRecords set in the module.
 * Each record specifies a single connection between a single balancer pool and
 * a single concentrated pool.
 */
export interface ReplaceMigrationRecordsProposalSDKType {
  title: string;
  description: string;
}
/**
 * For example: if the existing DistrRecords were:
 * [(Balancer 1, CL 5), (Balancer 2, CL 6), (Balancer 3, CL 7)]
 * And an UpdateMigrationRecordsProposal includes
 * [(Balancer 2, CL 0), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 * This would leave Balancer 1 record, delete Balancer 2 record,
 * Edit Balancer 3 record, and Add Balancer 4 record
 * The result MigrationRecords in state would be:
 * [(Balancer 1, CL 5), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 */
export interface UpdateMigrationRecordsProposal {
  title: string;
  description: string;
}
export interface UpdateMigrationRecordsProposalProtoMsg {
  typeUrl: "/osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal";
  value: Uint8Array;
}
/**
 * For example: if the existing DistrRecords were:
 * [(Balancer 1, CL 5), (Balancer 2, CL 6), (Balancer 3, CL 7)]
 * And an UpdateMigrationRecordsProposal includes
 * [(Balancer 2, CL 0), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 * This would leave Balancer 1 record, delete Balancer 2 record,
 * Edit Balancer 3 record, and Add Balancer 4 record
 * The result MigrationRecords in state would be:
 * [(Balancer 1, CL 5), (Balancer 3, CL 4), (Balancer 4, CL 10)]
 */
export interface UpdateMigrationRecordsProposalSDKType {
  title: string;
  description: string;
}
function createBaseReplaceMigrationRecordsProposal(): ReplaceMigrationRecordsProposal {
  return {
    title: "",
    description: ""
  };
}
export const ReplaceMigrationRecordsProposal = {
  typeUrl: "/osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal",
  encode(message: ReplaceMigrationRecordsProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReplaceMigrationRecordsProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReplaceMigrationRecordsProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ReplaceMigrationRecordsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  toJSON(message: ReplaceMigrationRecordsProposal): JsonSafe<ReplaceMigrationRecordsProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },
  fromPartial(object: DeepPartial<ReplaceMigrationRecordsProposal>): ReplaceMigrationRecordsProposal {
    const message = createBaseReplaceMigrationRecordsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromSDK(object: ReplaceMigrationRecordsProposalSDKType): ReplaceMigrationRecordsProposal {
    return {
      title: object?.title,
      description: object?.description
    };
  },
  fromSDKJSON(object: any): ReplaceMigrationRecordsProposalSDKType {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  toSDK(message: ReplaceMigrationRecordsProposal): ReplaceMigrationRecordsProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    return obj;
  },
  fromAmino(object: ReplaceMigrationRecordsProposalAmino): ReplaceMigrationRecordsProposal {
    const message = createBaseReplaceMigrationRecordsProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: ReplaceMigrationRecordsProposal): ReplaceMigrationRecordsProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: ReplaceMigrationRecordsProposalAminoMsg): ReplaceMigrationRecordsProposal {
    return ReplaceMigrationRecordsProposal.fromAmino(object.value);
  },
  toAminoMsg(message: ReplaceMigrationRecordsProposal): ReplaceMigrationRecordsProposalAminoMsg {
    return {
      type: "osmosis/gamm/replace-migration-records-proposal",
      value: ReplaceMigrationRecordsProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: ReplaceMigrationRecordsProposalProtoMsg): ReplaceMigrationRecordsProposal {
    return ReplaceMigrationRecordsProposal.decode(message.value);
  },
  toProto(message: ReplaceMigrationRecordsProposal): Uint8Array {
    return ReplaceMigrationRecordsProposal.encode(message).finish();
  },
  toProtoMsg(message: ReplaceMigrationRecordsProposal): ReplaceMigrationRecordsProposalProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.ReplaceMigrationRecordsProposal",
      value: ReplaceMigrationRecordsProposal.encode(message).finish()
    };
  }
};
function createBaseUpdateMigrationRecordsProposal(): UpdateMigrationRecordsProposal {
  return {
    title: "",
    description: ""
  };
}
export const UpdateMigrationRecordsProposal = {
  typeUrl: "/osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal",
  encode(message: UpdateMigrationRecordsProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateMigrationRecordsProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateMigrationRecordsProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdateMigrationRecordsProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  toJSON(message: UpdateMigrationRecordsProposal): JsonSafe<UpdateMigrationRecordsProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },
  fromPartial(object: DeepPartial<UpdateMigrationRecordsProposal>): UpdateMigrationRecordsProposal {
    const message = createBaseUpdateMigrationRecordsProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromSDK(object: UpdateMigrationRecordsProposalSDKType): UpdateMigrationRecordsProposal {
    return {
      title: object?.title,
      description: object?.description
    };
  },
  fromSDKJSON(object: any): UpdateMigrationRecordsProposalSDKType {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  toSDK(message: UpdateMigrationRecordsProposal): UpdateMigrationRecordsProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    return obj;
  },
  fromAmino(object: UpdateMigrationRecordsProposalAmino): UpdateMigrationRecordsProposal {
    const message = createBaseUpdateMigrationRecordsProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: UpdateMigrationRecordsProposal): UpdateMigrationRecordsProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    return obj;
  },
  fromAminoMsg(object: UpdateMigrationRecordsProposalAminoMsg): UpdateMigrationRecordsProposal {
    return UpdateMigrationRecordsProposal.fromAmino(object.value);
  },
  toAminoMsg(message: UpdateMigrationRecordsProposal): UpdateMigrationRecordsProposalAminoMsg {
    return {
      type: "osmosis/gamm/update-migration-records-proposal",
      value: UpdateMigrationRecordsProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: UpdateMigrationRecordsProposalProtoMsg): UpdateMigrationRecordsProposal {
    return UpdateMigrationRecordsProposal.decode(message.value);
  },
  toProto(message: UpdateMigrationRecordsProposal): Uint8Array {
    return UpdateMigrationRecordsProposal.encode(message).finish();
  },
  toProtoMsg(message: UpdateMigrationRecordsProposal): UpdateMigrationRecordsProposalProtoMsg {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.UpdateMigrationRecordsProposal",
      value: UpdateMigrationRecordsProposal.encode(message).finish()
    };
  }
};