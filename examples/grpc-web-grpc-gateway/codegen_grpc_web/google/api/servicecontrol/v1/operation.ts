import { Timestamp } from "../../../protobuf/timestamp";
import { MetricValueSet, MetricValueSetAmino, MetricValueSetSDKType } from "./metric_value";
import { LogEntry, LogEntryAmino, LogEntrySDKType } from "./log_entry";
import { Any, AnyAmino, AnySDKType } from "../../../protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, toTimestamp, fromTimestamp, isObject } from "../../../../helpers";
export const protobufPackage = "google.api.servicecontrol.v1";
/** Defines the importance of the data contained in the operation. */
export enum Operation_Importance {
  /**
   * LOW - Allows data caching, batching, and aggregation. It provides
   * higher performance with higher data loss risk.
   */
  LOW = 0,
  /**
   * HIGH - Disables data aggregation to minimize data loss. It is for operations
   * that contains significant monetary value or audit trail. This feature
   * only applies to the client libraries.
   */
  HIGH = 1,
  UNRECOGNIZED = -1,
}
export const Operation_ImportanceSDKType = Operation_Importance;
export const Operation_ImportanceAmino = Operation_Importance;
export function operation_ImportanceFromJSON(object: any): Operation_Importance {
  switch (object) {
    case 0:
    case "LOW":
      return Operation_Importance.LOW;
    case 1:
    case "HIGH":
      return Operation_Importance.HIGH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Operation_Importance.UNRECOGNIZED;
  }
}
export function operation_ImportanceToJSON(object: Operation_Importance): string {
  switch (object) {
    case Operation_Importance.LOW:
      return "LOW";
    case Operation_Importance.HIGH:
      return "HIGH";
    case Operation_Importance.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Operation_LabelsEntry {
  key: string;
  value: string;
}
export interface Operation_LabelsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface Operation_LabelsEntryAmino {
  key: string;
  value: string;
}
export interface Operation_LabelsEntryAminoMsg {
  type: string;
  value: Operation_LabelsEntryAmino;
}
export interface Operation_LabelsEntrySDKType {
  key: string;
  value: string;
}
/** Represents information regarding an operation. */
export interface Operation {
  /**
   * Identity of the operation. This must be unique within the scope of the
   * service that generated the operation. If the service calls
   * Check() and Report() on the same operation, the two calls should carry
   * the same id.
   * 
   * UUID version 4 is recommended, though not required.
   * In scenarios where an operation is computed from existing information
   * and an idempotent id is desirable for deduplication purpose, UUID version 5
   * is recommended. See RFC 4122 for details.
   */
  operationId: string;
  /** Fully qualified name of the operation. Reserved for future use. */
  operationName: string;
  /**
   * Identity of the consumer who is using the service.
   * This field should be filled in for the operations initiated by a
   * consumer, but not for service-initiated operations that are
   * not related to a specific consumer.
   * 
   * - This can be in one of the following formats:
   *     - project:PROJECT_ID,
   *     - project`_`number:PROJECT_NUMBER,
   *     - projects/PROJECT_ID or PROJECT_NUMBER,
   *     - folders/FOLDER_NUMBER,
   *     - organizations/ORGANIZATION_NUMBER,
   *     - api`_`key:API_KEY.
   */
  consumerId: string;
  /** Required. Start time of the operation. */
  startTime?: Date;
  /**
   * End time of the operation.
   * Required when the operation is used in
   * [ServiceController.Report][google.api.servicecontrol.v1.ServiceController.Report],
   * but optional when the operation is used in
   * [ServiceController.Check][google.api.servicecontrol.v1.ServiceController.Check].
   */
  endTime?: Date;
  /**
   * Labels describing the operation. Only the following labels are allowed:
   * 
   * - Labels describing monitored resources as defined in
   *   the service configuration.
   * - Default labels of metric values. When specified, labels defined in the
   *   metric value override these default.
   * - The following labels defined by Google Cloud Platform:
   *     - `cloud.googleapis.com/location` describing the location where the
   *        operation happened,
   *     - `servicecontrol.googleapis.com/user_agent` describing the user agent
   *        of the API request,
   *     - `servicecontrol.googleapis.com/service_agent` describing the service
   *        used to handle the API request (e.g. ESP),
   *     - `servicecontrol.googleapis.com/platform` describing the platform
   *        where the API is served, such as App Engine, Compute Engine, or
   *        Kubernetes Engine.
   */
  labels: {
    [key: string]: string;
  };
  /**
   * Represents information about this operation. Each MetricValueSet
   * corresponds to a metric defined in the service configuration.
   * The data type used in the MetricValueSet must agree with
   * the data type specified in the metric definition.
   * 
   * Within a single operation, it is not allowed to have more than one
   * MetricValue instances that have the same metric names and identical
   * label value combinations. If a request has such duplicated MetricValue
   * instances, the entire request is rejected with
   * an invalid argument error.
   */
  metricValueSets: MetricValueSet[];
  /** Represents information to be logged. */
  logEntries: LogEntry[];
  /** DO NOT USE. This is an experimental field. */
  importance: Operation_Importance;
  /** Unimplemented. */
  extensions: Any[];
}
export interface OperationProtoMsg {
  typeUrl: "/google.api.servicecontrol.v1.Operation";
  value: Uint8Array;
}
/** Represents information regarding an operation. */
export interface OperationAmino {
  /**
   * Identity of the operation. This must be unique within the scope of the
   * service that generated the operation. If the service calls
   * Check() and Report() on the same operation, the two calls should carry
   * the same id.
   * 
   * UUID version 4 is recommended, though not required.
   * In scenarios where an operation is computed from existing information
   * and an idempotent id is desirable for deduplication purpose, UUID version 5
   * is recommended. See RFC 4122 for details.
   */
  operation_id: string;
  /** Fully qualified name of the operation. Reserved for future use. */
  operation_name: string;
  /**
   * Identity of the consumer who is using the service.
   * This field should be filled in for the operations initiated by a
   * consumer, but not for service-initiated operations that are
   * not related to a specific consumer.
   * 
   * - This can be in one of the following formats:
   *     - project:PROJECT_ID,
   *     - project`_`number:PROJECT_NUMBER,
   *     - projects/PROJECT_ID or PROJECT_NUMBER,
   *     - folders/FOLDER_NUMBER,
   *     - organizations/ORGANIZATION_NUMBER,
   *     - api`_`key:API_KEY.
   */
  consumer_id: string;
  /** Required. Start time of the operation. */
  start_time?: Date;
  /**
   * End time of the operation.
   * Required when the operation is used in
   * [ServiceController.Report][google.api.servicecontrol.v1.ServiceController.Report],
   * but optional when the operation is used in
   * [ServiceController.Check][google.api.servicecontrol.v1.ServiceController.Check].
   */
  end_time?: Date;
  /**
   * Labels describing the operation. Only the following labels are allowed:
   * 
   * - Labels describing monitored resources as defined in
   *   the service configuration.
   * - Default labels of metric values. When specified, labels defined in the
   *   metric value override these default.
   * - The following labels defined by Google Cloud Platform:
   *     - `cloud.googleapis.com/location` describing the location where the
   *        operation happened,
   *     - `servicecontrol.googleapis.com/user_agent` describing the user agent
   *        of the API request,
   *     - `servicecontrol.googleapis.com/service_agent` describing the service
   *        used to handle the API request (e.g. ESP),
   *     - `servicecontrol.googleapis.com/platform` describing the platform
   *        where the API is served, such as App Engine, Compute Engine, or
   *        Kubernetes Engine.
   */
  labels: {
    [key: string]: string;
  };
  /**
   * Represents information about this operation. Each MetricValueSet
   * corresponds to a metric defined in the service configuration.
   * The data type used in the MetricValueSet must agree with
   * the data type specified in the metric definition.
   * 
   * Within a single operation, it is not allowed to have more than one
   * MetricValue instances that have the same metric names and identical
   * label value combinations. If a request has such duplicated MetricValue
   * instances, the entire request is rejected with
   * an invalid argument error.
   */
  metric_value_sets: MetricValueSetAmino[];
  /** Represents information to be logged. */
  log_entries: LogEntryAmino[];
  /** DO NOT USE. This is an experimental field. */
  importance: Operation_Importance;
  /** Unimplemented. */
  extensions: AnyAmino[];
}
export interface OperationAminoMsg {
  type: "/google.api.servicecontrol.v1.Operation";
  value: OperationAmino;
}
/** Represents information regarding an operation. */
export interface OperationSDKType {
  operation_id: string;
  operation_name: string;
  consumer_id: string;
  start_time?: Date;
  end_time?: Date;
  labels: {
    [key: string]: string;
  };
  metric_value_sets: MetricValueSetSDKType[];
  log_entries: LogEntrySDKType[];
  importance: Operation_Importance;
  extensions: AnySDKType[];
}
function createBaseOperation_LabelsEntry(): Operation_LabelsEntry {
  return {
    key: "",
    value: ""
  };
}
export const Operation_LabelsEntry = {
  encode(message: Operation_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Operation_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperation_LabelsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Operation_LabelsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: Operation_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<Operation_LabelsEntry>): Operation_LabelsEntry {
    const message = createBaseOperation_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: Operation_LabelsEntrySDKType): Operation_LabelsEntry {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  toSDK(message: Operation_LabelsEntry): Operation_LabelsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: Operation_LabelsEntryAmino): Operation_LabelsEntry {
    return {
      key: object.key,
      value: object.value
    };
  },
  toAmino(message: Operation_LabelsEntry): Operation_LabelsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: Operation_LabelsEntryAminoMsg): Operation_LabelsEntry {
    return Operation_LabelsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: Operation_LabelsEntryProtoMsg): Operation_LabelsEntry {
    return Operation_LabelsEntry.decode(message.value);
  },
  toProto(message: Operation_LabelsEntry): Uint8Array {
    return Operation_LabelsEntry.encode(message).finish();
  }
};
function createBaseOperation(): Operation {
  return {
    operationId: "",
    operationName: "",
    consumerId: "",
    startTime: undefined,
    endTime: undefined,
    labels: {},
    metricValueSets: [],
    logEntries: [],
    importance: 0,
    extensions: []
  };
}
export const Operation = {
  typeUrl: "/google.api.servicecontrol.v1.Operation",
  encode(message: Operation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operationId !== "") {
      writer.uint32(10).string(message.operationId);
    }
    if (message.operationName !== "") {
      writer.uint32(18).string(message.operationName);
    }
    if (message.consumerId !== "") {
      writer.uint32(26).string(message.consumerId);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(toTimestamp(message.endTime), writer.uint32(42).fork()).ldelim();
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      Operation_LabelsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(50).fork()).ldelim();
    });
    for (const v of message.metricValueSets) {
      MetricValueSet.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.logEntries) {
      LogEntry.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.importance !== 0) {
      writer.uint32(88).int32(message.importance);
    }
    for (const v of message.extensions) {
      Any.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Operation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operationId = reader.string();
          break;
        case 2:
          message.operationName = reader.string();
          break;
        case 3:
          message.consumerId = reader.string();
          break;
        case 4:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 5:
          message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          const entry6 = Operation_LabelsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }
          break;
        case 7:
          message.metricValueSets.push(MetricValueSet.decode(reader, reader.uint32()));
          break;
        case 8:
          message.logEntries.push(LogEntry.decode(reader, reader.uint32()));
          break;
        case 11:
          message.importance = (reader.int32() as any);
          break;
        case 16:
          message.extensions.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Operation {
    return {
      operationId: isSet(object.operationId) ? String(object.operationId) : "",
      operationName: isSet(object.operationName) ? String(object.operationName) : "",
      consumerId: isSet(object.consumerId) ? String(object.consumerId) : "",
      startTime: isSet(object.startTime) ? new Date(object.startTime) : undefined,
      endTime: isSet(object.endTime) ? new Date(object.endTime) : undefined,
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      metricValueSets: Array.isArray(object?.metricValueSets) ? object.metricValueSets.map((e: any) => MetricValueSet.fromJSON(e)) : [],
      logEntries: Array.isArray(object?.logEntries) ? object.logEntries.map((e: any) => LogEntry.fromJSON(e)) : [],
      importance: isSet(object.importance) ? operation_ImportanceFromJSON(object.importance) : 0,
      extensions: Array.isArray(object?.extensions) ? object.extensions.map((e: any) => Any.fromJSON(e)) : []
    };
  },
  toJSON(message: Operation): unknown {
    const obj: any = {};
    message.operationId !== undefined && (obj.operationId = message.operationId);
    message.operationName !== undefined && (obj.operationName = message.operationName);
    message.consumerId !== undefined && (obj.consumerId = message.consumerId);
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined && (obj.endTime = message.endTime.toISOString());
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    if (message.metricValueSets) {
      obj.metricValueSets = message.metricValueSets.map(e => e ? MetricValueSet.toJSON(e) : undefined);
    } else {
      obj.metricValueSets = [];
    }
    if (message.logEntries) {
      obj.logEntries = message.logEntries.map(e => e ? LogEntry.toJSON(e) : undefined);
    } else {
      obj.logEntries = [];
    }
    message.importance !== undefined && (obj.importance = operation_ImportanceToJSON(message.importance));
    if (message.extensions) {
      obj.extensions = message.extensions.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.extensions = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Operation>): Operation {
    const message = createBaseOperation();
    message.operationId = object.operationId ?? "";
    message.operationName = object.operationName ?? "";
    message.consumerId = object.consumerId ?? "";
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.metricValueSets = object.metricValueSets?.map(e => MetricValueSet.fromPartial(e)) || [];
    message.logEntries = object.logEntries?.map(e => LogEntry.fromPartial(e)) || [];
    message.importance = object.importance ?? 0;
    message.extensions = object.extensions?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: OperationSDKType): Operation {
    return {
      operationId: object?.operation_id,
      operationName: object?.operation_name,
      consumerId: object?.consumer_id,
      startTime: object.start_time ?? undefined,
      endTime: object.end_time ?? undefined,
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      metricValueSets: Array.isArray(object?.metric_value_sets) ? object.metric_value_sets.map((e: any) => MetricValueSet.fromSDK(e)) : [],
      logEntries: Array.isArray(object?.log_entries) ? object.log_entries.map((e: any) => LogEntry.fromSDK(e)) : [],
      importance: isSet(object.importance) ? operation_ImportanceFromJSON(object.importance) : 0,
      extensions: Array.isArray(object?.extensions) ? object.extensions.map((e: any) => Any.fromSDK(e)) : []
    };
  },
  toSDK(message: Operation): OperationSDKType {
    const obj: any = {};
    obj.operation_id = message.operationId;
    obj.operation_name = message.operationName;
    obj.consumer_id = message.consumerId;
    message.startTime !== undefined && (obj.start_time = message.startTime ?? undefined);
    message.endTime !== undefined && (obj.end_time = message.endTime ?? undefined);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    if (message.metricValueSets) {
      obj.metric_value_sets = message.metricValueSets.map(e => e ? MetricValueSet.toSDK(e) : undefined);
    } else {
      obj.metric_value_sets = [];
    }
    if (message.logEntries) {
      obj.log_entries = message.logEntries.map(e => e ? LogEntry.toSDK(e) : undefined);
    } else {
      obj.log_entries = [];
    }
    message.importance !== undefined && (obj.importance = operation_ImportanceToJSON(message.importance));
    if (message.extensions) {
      obj.extensions = message.extensions.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.extensions = [];
    }
    return obj;
  },
  fromAmino(object: OperationAmino): Operation {
    return {
      operationId: object.operation_id,
      operationName: object.operation_name,
      consumerId: object.consumer_id,
      startTime: object?.start_time ? Timestamp.fromAmino(object.start_time) : undefined,
      endTime: object?.end_time ? Timestamp.fromAmino(object.end_time) : undefined,
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      metricValueSets: Array.isArray(object?.metric_value_sets) ? object.metric_value_sets.map((e: any) => MetricValueSet.fromAmino(e)) : [],
      logEntries: Array.isArray(object?.log_entries) ? object.log_entries.map((e: any) => LogEntry.fromAmino(e)) : [],
      importance: isSet(object.importance) ? operation_ImportanceFromJSON(object.importance) : 0,
      extensions: Array.isArray(object?.extensions) ? object.extensions.map((e: any) => Any.fromAmino(e)) : []
    };
  },
  toAmino(message: Operation): OperationAmino {
    const obj: any = {};
    obj.operation_id = message.operationId;
    obj.operation_name = message.operationName;
    obj.consumer_id = message.consumerId;
    obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime) : undefined;
    obj.end_time = message.endTime ? Timestamp.toAmino(message.endTime) : undefined;
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    if (message.metricValueSets) {
      obj.metric_value_sets = message.metricValueSets.map(e => e ? MetricValueSet.toAmino(e) : undefined);
    } else {
      obj.metric_value_sets = [];
    }
    if (message.logEntries) {
      obj.log_entries = message.logEntries.map(e => e ? LogEntry.toAmino(e) : undefined);
    } else {
      obj.log_entries = [];
    }
    obj.importance = message.importance;
    if (message.extensions) {
      obj.extensions = message.extensions.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.extensions = [];
    }
    return obj;
  },
  fromAminoMsg(object: OperationAminoMsg): Operation {
    return Operation.fromAmino(object.value);
  },
  fromProtoMsg(message: OperationProtoMsg): Operation {
    return Operation.decode(message.value);
  },
  toProto(message: Operation): Uint8Array {
    return Operation.encode(message).finish();
  },
  toProtoMsg(message: Operation): OperationProtoMsg {
    return {
      typeUrl: "/google.api.servicecontrol.v1.Operation",
      value: Operation.encode(message).finish()
    };
  }
};