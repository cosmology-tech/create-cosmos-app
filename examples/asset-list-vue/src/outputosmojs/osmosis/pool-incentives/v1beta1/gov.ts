import { DistrRecord, DistrRecordSDKType } from "./incentives";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { ComputedRef } from "vue";
export const protobufPackage = "osmosis.poolincentives.v1beta1";
/**
 * ReplacePoolIncentivesProposal is a gov Content type for updating the pool
 * incentives. If a ReplacePoolIncentivesProposal passes, the proposal’s records
 * override the existing DistrRecords set in the module. Each record has a
 * specified gauge id and weight, and the incentives are distributed to each
 * gauge according to weight/total_weight. The incentives are put in the fee
 * pool and it is allocated to gauges and community pool by the DistrRecords
 * configuration. Note that gaugeId=0 represents the community pool.
 */
export interface ReplacePoolIncentivesProposal {
  title: string;
  description: string;
  records: DistrRecord[];
}
export interface ReactiveReplacePoolIncentivesProposal {
  title: ComputedRef<string>;
  description: ComputedRef<string>;
  records: ComputedRef<DistrRecord[]>;
}
export interface ReplacePoolIncentivesProposalProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal";
  value: Uint8Array;
}
/**
 * ReplacePoolIncentivesProposal is a gov Content type for updating the pool
 * incentives. If a ReplacePoolIncentivesProposal passes, the proposal’s records
 * override the existing DistrRecords set in the module. Each record has a
 * specified gauge id and weight, and the incentives are distributed to each
 * gauge according to weight/total_weight. The incentives are put in the fee
 * pool and it is allocated to gauges and community pool by the DistrRecords
 * configuration. Note that gaugeId=0 represents the community pool.
 */
export interface ReplacePoolIncentivesProposalSDKType {
  title: string;
  description: string;
  records: DistrRecordSDKType[];
}
/**
 * For example: if the existing DistrRecords were:
 * [(Gauge 0, 5), (Gauge 1, 6), (Gauge 2, 6)]
 * An UpdatePoolIncentivesProposal includes
 * [(Gauge 1, 0), (Gauge 2, 4), (Gauge 3, 10)]
 * This would delete Gauge 1, Edit Gauge 2, and Add Gauge 3
 * The result DistrRecords in state would be:
 * [(Gauge 0, 5), (Gauge 2, 4), (Gauge 3, 10)]
 */
export interface UpdatePoolIncentivesProposal {
  title: string;
  description: string;
  records: DistrRecord[];
}
export interface ReactiveUpdatePoolIncentivesProposal {
  title: ComputedRef<string>;
  description: ComputedRef<string>;
  records: ComputedRef<DistrRecord[]>;
}
export interface UpdatePoolIncentivesProposalProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal";
  value: Uint8Array;
}
/**
 * For example: if the existing DistrRecords were:
 * [(Gauge 0, 5), (Gauge 1, 6), (Gauge 2, 6)]
 * An UpdatePoolIncentivesProposal includes
 * [(Gauge 1, 0), (Gauge 2, 4), (Gauge 3, 10)]
 * This would delete Gauge 1, Edit Gauge 2, and Add Gauge 3
 * The result DistrRecords in state would be:
 * [(Gauge 0, 5), (Gauge 2, 4), (Gauge 3, 10)]
 */
export interface UpdatePoolIncentivesProposalSDKType {
  title: string;
  description: string;
  records: DistrRecordSDKType[];
}
function createBaseReplacePoolIncentivesProposal(): ReplacePoolIncentivesProposal {
  return {
    title: "",
    description: "",
    records: []
  };
}
export const ReplacePoolIncentivesProposal = {
  typeUrl: "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal",
  encode(message: ReplacePoolIncentivesProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.records) {
      DistrRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ReplacePoolIncentivesProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReplacePoolIncentivesProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.records.push(DistrRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ReplacePoolIncentivesProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      records: Array.isArray(object?.records) ? object.records.map((e: any) => DistrRecord.fromJSON(e)) : []
    };
  },
  toJSON(message: ReplacePoolIncentivesProposal): JsonSafe<ReplacePoolIncentivesProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.records) {
      obj.records = message.records.map(e => e ? DistrRecord.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ReplacePoolIncentivesProposal>): ReplacePoolIncentivesProposal {
    const message = createBaseReplacePoolIncentivesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.records = object.records?.map(e => DistrRecord.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ReplacePoolIncentivesProposalSDKType): ReplacePoolIncentivesProposal {
    return {
      title: object?.title,
      description: object?.description,
      records: Array.isArray(object?.records) ? object.records.map((e: any) => DistrRecord.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): ReplacePoolIncentivesProposalSDKType {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      records: Array.isArray(object?.records) ? object.records.map((e: any) => DistrRecord.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: ReplacePoolIncentivesProposal): ReplacePoolIncentivesProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.records) {
      obj.records = message.records.map(e => e ? DistrRecord.toSDK(e) : undefined);
    } else {
      obj.records = [];
    }
    return obj;
  },
  fromAmino(object: ReplacePoolIncentivesProposalAmino): ReplacePoolIncentivesProposal {
    const message = createBaseReplacePoolIncentivesProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.records = object.records?.map(e => DistrRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ReplacePoolIncentivesProposal): ReplacePoolIncentivesProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.records) {
      obj.records = message.records.map(e => e ? DistrRecord.toAmino(e) : undefined);
    } else {
      obj.records = message.records;
    }
    return obj;
  },
  fromAminoMsg(object: ReplacePoolIncentivesProposalAminoMsg): ReplacePoolIncentivesProposal {
    return ReplacePoolIncentivesProposal.fromAmino(object.value);
  },
  toAminoMsg(message: ReplacePoolIncentivesProposal): ReplacePoolIncentivesProposalAminoMsg {
    return {
      type: "osmosis/poolincentives/replace-pool-incentives-proposal",
      value: ReplacePoolIncentivesProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: ReplacePoolIncentivesProposalProtoMsg): ReplacePoolIncentivesProposal {
    return ReplacePoolIncentivesProposal.decode(message.value);
  },
  toProto(message: ReplacePoolIncentivesProposal): Uint8Array {
    return ReplacePoolIncentivesProposal.encode(message).finish();
  },
  toProtoMsg(message: ReplacePoolIncentivesProposal): ReplacePoolIncentivesProposalProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal",
      value: ReplacePoolIncentivesProposal.encode(message).finish()
    };
  }
};
function createBaseUpdatePoolIncentivesProposal(): UpdatePoolIncentivesProposal {
  return {
    title: "",
    description: "",
    records: []
  };
}
export const UpdatePoolIncentivesProposal = {
  typeUrl: "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal",
  encode(message: UpdatePoolIncentivesProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.records) {
      DistrRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdatePoolIncentivesProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePoolIncentivesProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.records.push(DistrRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdatePoolIncentivesProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      records: Array.isArray(object?.records) ? object.records.map((e: any) => DistrRecord.fromJSON(e)) : []
    };
  },
  toJSON(message: UpdatePoolIncentivesProposal): JsonSafe<UpdatePoolIncentivesProposal> {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    if (message.records) {
      obj.records = message.records.map(e => e ? DistrRecord.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<UpdatePoolIncentivesProposal>): UpdatePoolIncentivesProposal {
    const message = createBaseUpdatePoolIncentivesProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.records = object.records?.map(e => DistrRecord.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: UpdatePoolIncentivesProposalSDKType): UpdatePoolIncentivesProposal {
    return {
      title: object?.title,
      description: object?.description,
      records: Array.isArray(object?.records) ? object.records.map((e: any) => DistrRecord.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): UpdatePoolIncentivesProposalSDKType {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      records: Array.isArray(object?.records) ? object.records.map((e: any) => DistrRecord.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: UpdatePoolIncentivesProposal): UpdatePoolIncentivesProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.records) {
      obj.records = message.records.map(e => e ? DistrRecord.toSDK(e) : undefined);
    } else {
      obj.records = [];
    }
    return obj;
  },
  fromAmino(object: UpdatePoolIncentivesProposalAmino): UpdatePoolIncentivesProposal {
    const message = createBaseUpdatePoolIncentivesProposal();
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.records = object.records?.map(e => DistrRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: UpdatePoolIncentivesProposal): UpdatePoolIncentivesProposalAmino {
    const obj: any = {};
    obj.title = message.title === "" ? undefined : message.title;
    obj.description = message.description === "" ? undefined : message.description;
    if (message.records) {
      obj.records = message.records.map(e => e ? DistrRecord.toAmino(e) : undefined);
    } else {
      obj.records = message.records;
    }
    return obj;
  },
  fromAminoMsg(object: UpdatePoolIncentivesProposalAminoMsg): UpdatePoolIncentivesProposal {
    return UpdatePoolIncentivesProposal.fromAmino(object.value);
  },
  toAminoMsg(message: UpdatePoolIncentivesProposal): UpdatePoolIncentivesProposalAminoMsg {
    return {
      type: "osmosis/poolincentives/update-pool-incentives-proposal",
      value: UpdatePoolIncentivesProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: UpdatePoolIncentivesProposalProtoMsg): UpdatePoolIncentivesProposal {
    return UpdatePoolIncentivesProposal.decode(message.value);
  },
  toProto(message: UpdatePoolIncentivesProposal): Uint8Array {
    return UpdatePoolIncentivesProposal.encode(message).finish();
  },
  toProtoMsg(message: UpdatePoolIncentivesProposal): UpdatePoolIncentivesProposalProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal",
      value: UpdatePoolIncentivesProposal.encode(message).finish()
    };
  }
};