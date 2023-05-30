import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../protobuf/timestamp";
import { LogSeverity, LogSeveritySDKType, logSeverityFromJSON, logSeverityToJSON } from "../../../logging/type/log_severity";
import { HttpRequest, HttpRequestAmino, HttpRequestSDKType } from "./http_request";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../protobuf/any";
import { Struct, StructAmino, StructSDKType } from "../../../protobuf/struct";
import { Long, isSet, DeepPartial, toTimestamp, fromTimestamp, isObject } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "google.api.servicecontrol.v1";
export interface LogEntry_LabelsEntry {
  key: string;
  value: string;
}
export interface LogEntry_LabelsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface LogEntry_LabelsEntryAmino {
  key: string;
  value: string;
}
export interface LogEntry_LabelsEntryAminoMsg {
  type: string;
  value: LogEntry_LabelsEntryAmino;
}
export interface LogEntry_LabelsEntrySDKType {
  key: string;
  value: string;
}
/** An individual log entry. */
export interface LogEntry {
  /**
   * Required. The log to which this log entry belongs. Examples: `"syslog"`,
   * `"book_log"`.
   */
  name: string;
  /**
   * The time the event described by the log entry occurred. If
   * omitted, defaults to operation start time.
   */
  timestamp?: Date;
  /**
   * The severity of the log entry. The default value is
   * `LogSeverity.DEFAULT`.
   */
  severity: LogSeverity;
  /**
   * Optional. Information about the HTTP request associated with this
   * log entry, if applicable.
   */
  httpRequest?: HttpRequest;
  /**
   * Optional. Resource name of the trace associated with the log entry, if any.
   * If this field contains a relative resource name, you can assume the name is
   * relative to `//tracing.googleapis.com`. Example:
   * `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824`
   */
  trace: string;
  /**
   * A unique ID for the log entry used for deduplication. If omitted,
   * the implementation will generate one based on operation_id.
   */
  insertId: string;
  /**
   * A set of user-defined (key, value) data that provides additional
   * information about the log entry.
   */
  labels: {
    [key: string]: string;
  };
  /**
   * The log entry payload, represented as a protocol buffer that is
   * expressed as a JSON object. The only accepted type currently is
   * [AuditLog][google.cloud.audit.AuditLog].
   */
  protoPayload?: Any;
  /** The log entry payload, represented as a Unicode string (UTF-8). */
  textPayload?: string;
  /**
   * The log entry payload, represented as a structure that
   * is expressed as a JSON object.
   */
  structPayload?: Struct;
  /**
   * Optional. Information about an operation associated with the log entry, if
   * applicable.
   */
  operation?: LogEntryOperation;
  /**
   * Optional. Source code location information associated with the log entry,
   * if any.
   */
  sourceLocation?: LogEntrySourceLocation;
}
export interface LogEntryProtoMsg {
  typeUrl: "/google.api.servicecontrol.v1.LogEntry";
  value: Uint8Array;
}
/** An individual log entry. */
export interface LogEntryAmino {
  /**
   * Required. The log to which this log entry belongs. Examples: `"syslog"`,
   * `"book_log"`.
   */
  name: string;
  /**
   * The time the event described by the log entry occurred. If
   * omitted, defaults to operation start time.
   */
  timestamp?: Date;
  /**
   * The severity of the log entry. The default value is
   * `LogSeverity.DEFAULT`.
   */
  severity: LogSeverity;
  /**
   * Optional. Information about the HTTP request associated with this
   * log entry, if applicable.
   */
  http_request?: HttpRequestAmino;
  /**
   * Optional. Resource name of the trace associated with the log entry, if any.
   * If this field contains a relative resource name, you can assume the name is
   * relative to `//tracing.googleapis.com`. Example:
   * `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824`
   */
  trace: string;
  /**
   * A unique ID for the log entry used for deduplication. If omitted,
   * the implementation will generate one based on operation_id.
   */
  insert_id: string;
  /**
   * A set of user-defined (key, value) data that provides additional
   * information about the log entry.
   */
  labels: {
    [key: string]: string;
  };
  /**
   * The log entry payload, represented as a protocol buffer that is
   * expressed as a JSON object. The only accepted type currently is
   * [AuditLog][google.cloud.audit.AuditLog].
   */
  proto_payload?: AnyAmino;
  /** The log entry payload, represented as a Unicode string (UTF-8). */
  text_payload?: string;
  /**
   * The log entry payload, represented as a structure that
   * is expressed as a JSON object.
   */
  struct_payload?: StructAmino;
  /**
   * Optional. Information about an operation associated with the log entry, if
   * applicable.
   */
  operation?: LogEntryOperationAmino;
  /**
   * Optional. Source code location information associated with the log entry,
   * if any.
   */
  source_location?: LogEntrySourceLocationAmino;
}
export interface LogEntryAminoMsg {
  type: "/google.api.servicecontrol.v1.LogEntry";
  value: LogEntryAmino;
}
/** An individual log entry. */
export interface LogEntrySDKType {
  name: string;
  timestamp?: Date;
  severity: LogSeverity;
  http_request?: HttpRequestSDKType;
  trace: string;
  insert_id: string;
  labels: {
    [key: string]: string;
  };
  proto_payload?: AnySDKType;
  text_payload?: string;
  struct_payload?: StructSDKType;
  operation?: LogEntryOperationSDKType;
  source_location?: LogEntrySourceLocationSDKType;
}
/**
 * Additional information about a potentially long-running operation with which
 * a log entry is associated.
 */
export interface LogEntryOperation {
  /**
   * Optional. An arbitrary operation identifier. Log entries with the
   * same identifier are assumed to be part of the same operation.
   */
  id: string;
  /**
   * Optional. An arbitrary producer identifier. The combination of
   * `id` and `producer` must be globally unique.  Examples for `producer`:
   * `"MyDivision.MyBigCompany.com"`, `"github.com/MyProject/MyApplication"`.
   */
  producer: string;
  /** Optional. Set this to True if this is the first log entry in the operation. */
  first: boolean;
  /** Optional. Set this to True if this is the last log entry in the operation. */
  last: boolean;
}
export interface LogEntryOperationProtoMsg {
  typeUrl: "/google.api.servicecontrol.v1.LogEntryOperation";
  value: Uint8Array;
}
/**
 * Additional information about a potentially long-running operation with which
 * a log entry is associated.
 */
export interface LogEntryOperationAmino {
  /**
   * Optional. An arbitrary operation identifier. Log entries with the
   * same identifier are assumed to be part of the same operation.
   */
  id: string;
  /**
   * Optional. An arbitrary producer identifier. The combination of
   * `id` and `producer` must be globally unique.  Examples for `producer`:
   * `"MyDivision.MyBigCompany.com"`, `"github.com/MyProject/MyApplication"`.
   */
  producer: string;
  /** Optional. Set this to True if this is the first log entry in the operation. */
  first: boolean;
  /** Optional. Set this to True if this is the last log entry in the operation. */
  last: boolean;
}
export interface LogEntryOperationAminoMsg {
  type: "/google.api.servicecontrol.v1.LogEntryOperation";
  value: LogEntryOperationAmino;
}
/**
 * Additional information about a potentially long-running operation with which
 * a log entry is associated.
 */
export interface LogEntryOperationSDKType {
  id: string;
  producer: string;
  first: boolean;
  last: boolean;
}
/**
 * Additional information about the source code location that produced the log
 * entry.
 */
export interface LogEntrySourceLocation {
  /**
   * Optional. Source file name. Depending on the runtime environment, this
   * might be a simple name or a fully-qualified name.
   */
  file: string;
  /**
   * Optional. Line within the source file. 1-based; 0 indicates no line number
   * available.
   */
  line: Long;
  /**
   * Optional. Human-readable name of the function or method being invoked, with
   * optional context such as the class or package name. This information may be
   * used in contexts such as the logs viewer, where a file and line number are
   * less meaningful. The format can vary by language. For example:
   * `qual.if.ied.Class.method` (Java), `dir/package.func` (Go), `function`
   * (Python).
   */
  function: string;
}
export interface LogEntrySourceLocationProtoMsg {
  typeUrl: "/google.api.servicecontrol.v1.LogEntrySourceLocation";
  value: Uint8Array;
}
/**
 * Additional information about the source code location that produced the log
 * entry.
 */
export interface LogEntrySourceLocationAmino {
  /**
   * Optional. Source file name. Depending on the runtime environment, this
   * might be a simple name or a fully-qualified name.
   */
  file: string;
  /**
   * Optional. Line within the source file. 1-based; 0 indicates no line number
   * available.
   */
  line: string;
  /**
   * Optional. Human-readable name of the function or method being invoked, with
   * optional context such as the class or package name. This information may be
   * used in contexts such as the logs viewer, where a file and line number are
   * less meaningful. The format can vary by language. For example:
   * `qual.if.ied.Class.method` (Java), `dir/package.func` (Go), `function`
   * (Python).
   */
  function: string;
}
export interface LogEntrySourceLocationAminoMsg {
  type: "/google.api.servicecontrol.v1.LogEntrySourceLocation";
  value: LogEntrySourceLocationAmino;
}
/**
 * Additional information about the source code location that produced the log
 * entry.
 */
export interface LogEntrySourceLocationSDKType {
  file: string;
  line: Long;
  function: string;
}
function createBaseLogEntry_LabelsEntry(): LogEntry_LabelsEntry {
  return {
    key: "",
    value: ""
  };
}
export const LogEntry_LabelsEntry = {
  encode(message: LogEntry_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LogEntry_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogEntry_LabelsEntry();
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
  fromJSON(object: any): LogEntry_LabelsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: LogEntry_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<LogEntry_LabelsEntry>): LogEntry_LabelsEntry {
    const message = createBaseLogEntry_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
  fromSDK(object: LogEntry_LabelsEntrySDKType): LogEntry_LabelsEntry {
    return {
      key: object?.key,
      value: object?.value
    };
  },
  toSDK(message: LogEntry_LabelsEntry): LogEntry_LabelsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAmino(object: LogEntry_LabelsEntryAmino): LogEntry_LabelsEntry {
    return {
      key: object.key,
      value: object.value
    };
  },
  toAmino(message: LogEntry_LabelsEntry): LogEntry_LabelsEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: LogEntry_LabelsEntryAminoMsg): LogEntry_LabelsEntry {
    return LogEntry_LabelsEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: LogEntry_LabelsEntryProtoMsg): LogEntry_LabelsEntry {
    return LogEntry_LabelsEntry.decode(message.value);
  },
  toProto(message: LogEntry_LabelsEntry): Uint8Array {
    return LogEntry_LabelsEntry.encode(message).finish();
  }
};
function createBaseLogEntry(): LogEntry {
  return {
    name: "",
    timestamp: undefined,
    severity: 0,
    httpRequest: undefined,
    trace: "",
    insertId: "",
    labels: {},
    protoPayload: undefined,
    textPayload: undefined,
    structPayload: undefined,
    operation: undefined,
    sourceLocation: undefined
  };
}
export const LogEntry = {
  typeUrl: "/google.api.servicecontrol.v1.LogEntry",
  encode(message: LogEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(82).string(message.name);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(90).fork()).ldelim();
    }
    if (message.severity !== 0) {
      writer.uint32(96).int32(message.severity);
    }
    if (message.httpRequest !== undefined) {
      HttpRequest.encode(message.httpRequest, writer.uint32(114).fork()).ldelim();
    }
    if (message.trace !== "") {
      writer.uint32(122).string(message.trace);
    }
    if (message.insertId !== "") {
      writer.uint32(34).string(message.insertId);
    }
    Object.entries(message.labels).forEach(([key, value]) => {
      LogEntry_LabelsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(106).fork()).ldelim();
    });
    if (message.protoPayload !== undefined) {
      Any.encode(message.protoPayload, writer.uint32(18).fork()).ldelim();
    }
    if (message.textPayload !== undefined) {
      writer.uint32(26).string(message.textPayload);
    }
    if (message.structPayload !== undefined) {
      Struct.encode(message.structPayload, writer.uint32(50).fork()).ldelim();
    }
    if (message.operation !== undefined) {
      LogEntryOperation.encode(message.operation, writer.uint32(130).fork()).ldelim();
    }
    if (message.sourceLocation !== undefined) {
      LogEntrySourceLocation.encode(message.sourceLocation, writer.uint32(138).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LogEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 10:
          message.name = reader.string();
          break;
        case 11:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 12:
          message.severity = (reader.int32() as any);
          break;
        case 14:
          message.httpRequest = HttpRequest.decode(reader, reader.uint32());
          break;
        case 15:
          message.trace = reader.string();
          break;
        case 4:
          message.insertId = reader.string();
          break;
        case 13:
          const entry13 = LogEntry_LabelsEntry.decode(reader, reader.uint32());
          if (entry13.value !== undefined) {
            message.labels[entry13.key] = entry13.value;
          }
          break;
        case 2:
          message.protoPayload = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.textPayload = reader.string();
          break;
        case 6:
          message.structPayload = Struct.decode(reader, reader.uint32());
          break;
        case 16:
          message.operation = LogEntryOperation.decode(reader, reader.uint32());
          break;
        case 17:
          message.sourceLocation = LogEntrySourceLocation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LogEntry {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      timestamp: isSet(object.timestamp) ? new Date(object.timestamp) : undefined,
      severity: isSet(object.severity) ? logSeverityFromJSON(object.severity) : 0,
      httpRequest: isSet(object.httpRequest) ? HttpRequest.fromJSON(object.httpRequest) : undefined,
      trace: isSet(object.trace) ? String(object.trace) : "",
      insertId: isSet(object.insertId) ? String(object.insertId) : "",
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      protoPayload: isSet(object.protoPayload) ? Any.fromJSON(object.protoPayload) : undefined,
      textPayload: isSet(object.textPayload) ? String(object.textPayload) : undefined,
      structPayload: isSet(object.structPayload) ? Struct.fromJSON(object.structPayload) : undefined,
      operation: isSet(object.operation) ? LogEntryOperation.fromJSON(object.operation) : undefined,
      sourceLocation: isSet(object.sourceLocation) ? LogEntrySourceLocation.fromJSON(object.sourceLocation) : undefined
    };
  },
  toJSON(message: LogEntry): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    message.severity !== undefined && (obj.severity = logSeverityToJSON(message.severity));
    message.httpRequest !== undefined && (obj.httpRequest = message.httpRequest ? HttpRequest.toJSON(message.httpRequest) : undefined);
    message.trace !== undefined && (obj.trace = message.trace);
    message.insertId !== undefined && (obj.insertId = message.insertId);
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.protoPayload !== undefined && (obj.protoPayload = message.protoPayload ? Any.toJSON(message.protoPayload) : undefined);
    message.textPayload !== undefined && (obj.textPayload = message.textPayload);
    message.structPayload !== undefined && (obj.structPayload = message.structPayload ? Struct.toJSON(message.structPayload) : undefined);
    message.operation !== undefined && (obj.operation = message.operation ? LogEntryOperation.toJSON(message.operation) : undefined);
    message.sourceLocation !== undefined && (obj.sourceLocation = message.sourceLocation ? LogEntrySourceLocation.toJSON(message.sourceLocation) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<LogEntry>): LogEntry {
    const message = createBaseLogEntry();
    message.name = object.name ?? "";
    message.timestamp = object.timestamp ?? undefined;
    message.severity = object.severity ?? 0;
    message.httpRequest = object.httpRequest !== undefined && object.httpRequest !== null ? HttpRequest.fromPartial(object.httpRequest) : undefined;
    message.trace = object.trace ?? "";
    message.insertId = object.insertId ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.protoPayload = object.protoPayload !== undefined && object.protoPayload !== null ? Any.fromPartial(object.protoPayload) : undefined;
    message.textPayload = object.textPayload ?? undefined;
    message.structPayload = object.structPayload !== undefined && object.structPayload !== null ? Struct.fromPartial(object.structPayload) : undefined;
    message.operation = object.operation !== undefined && object.operation !== null ? LogEntryOperation.fromPartial(object.operation) : undefined;
    message.sourceLocation = object.sourceLocation !== undefined && object.sourceLocation !== null ? LogEntrySourceLocation.fromPartial(object.sourceLocation) : undefined;
    return message;
  },
  fromSDK(object: LogEntrySDKType): LogEntry {
    return {
      name: object?.name,
      timestamp: object.timestamp ?? undefined,
      severity: isSet(object.severity) ? logSeverityFromJSON(object.severity) : 0,
      httpRequest: object.http_request ? HttpRequest.fromSDK(object.http_request) : undefined,
      trace: object?.trace,
      insertId: object?.insert_id,
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      protoPayload: object.proto_payload ? Any.fromSDK(object.proto_payload) : undefined,
      textPayload: object?.text_payload,
      structPayload: object.struct_payload ? Struct.fromSDK(object.struct_payload) : undefined,
      operation: object.operation ? LogEntryOperation.fromSDK(object.operation) : undefined,
      sourceLocation: object.source_location ? LogEntrySourceLocation.fromSDK(object.source_location) : undefined
    };
  },
  toSDK(message: LogEntry): LogEntrySDKType {
    const obj: any = {};
    obj.name = message.name;
    message.timestamp !== undefined && (obj.timestamp = message.timestamp ?? undefined);
    message.severity !== undefined && (obj.severity = logSeverityToJSON(message.severity));
    message.httpRequest !== undefined && (obj.http_request = message.httpRequest ? HttpRequest.toSDK(message.httpRequest) : undefined);
    obj.trace = message.trace;
    obj.insert_id = message.insertId;
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    message.protoPayload !== undefined && (obj.proto_payload = message.protoPayload ? Any.toSDK(message.protoPayload) : undefined);
    obj.text_payload = message.textPayload;
    message.structPayload !== undefined && (obj.struct_payload = message.structPayload ? Struct.toSDK(message.structPayload) : undefined);
    message.operation !== undefined && (obj.operation = message.operation ? LogEntryOperation.toSDK(message.operation) : undefined);
    message.sourceLocation !== undefined && (obj.source_location = message.sourceLocation ? LogEntrySourceLocation.toSDK(message.sourceLocation) : undefined);
    return obj;
  },
  fromAmino(object: LogEntryAmino): LogEntry {
    return {
      name: object.name,
      timestamp: object?.timestamp ? Timestamp.fromAmino(object.timestamp) : undefined,
      severity: isSet(object.severity) ? logSeverityFromJSON(object.severity) : 0,
      httpRequest: object?.http_request ? HttpRequest.fromAmino(object.http_request) : undefined,
      trace: object.trace,
      insertId: object.insert_id,
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      protoPayload: object?.proto_payload ? Any.fromAmino(object.proto_payload) : undefined,
      textPayload: object?.text_payload,
      structPayload: object?.struct_payload ? Struct.fromAmino(object.struct_payload) : undefined,
      operation: object?.operation ? LogEntryOperation.fromAmino(object.operation) : undefined,
      sourceLocation: object?.source_location ? LogEntrySourceLocation.fromAmino(object.source_location) : undefined
    };
  },
  toAmino(message: LogEntry): LogEntryAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(message.timestamp) : undefined;
    obj.severity = message.severity;
    obj.http_request = message.httpRequest ? HttpRequest.toAmino(message.httpRequest) : undefined;
    obj.trace = message.trace;
    obj.insert_id = message.insertId;
    obj.labels = {};
    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }
    obj.proto_payload = message.protoPayload ? Any.toAmino(message.protoPayload) : undefined;
    obj.text_payload = message.textPayload;
    obj.struct_payload = message.structPayload ? Struct.toAmino(message.structPayload) : undefined;
    obj.operation = message.operation ? LogEntryOperation.toAmino(message.operation) : undefined;
    obj.source_location = message.sourceLocation ? LogEntrySourceLocation.toAmino(message.sourceLocation) : undefined;
    return obj;
  },
  fromAminoMsg(object: LogEntryAminoMsg): LogEntry {
    return LogEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: LogEntryProtoMsg): LogEntry {
    return LogEntry.decode(message.value);
  },
  toProto(message: LogEntry): Uint8Array {
    return LogEntry.encode(message).finish();
  },
  toProtoMsg(message: LogEntry): LogEntryProtoMsg {
    return {
      typeUrl: "/google.api.servicecontrol.v1.LogEntry",
      value: LogEntry.encode(message).finish()
    };
  }
};
function createBaseLogEntryOperation(): LogEntryOperation {
  return {
    id: "",
    producer: "",
    first: false,
    last: false
  };
}
export const LogEntryOperation = {
  typeUrl: "/google.api.servicecontrol.v1.LogEntryOperation",
  encode(message: LogEntryOperation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.producer !== "") {
      writer.uint32(18).string(message.producer);
    }
    if (message.first === true) {
      writer.uint32(24).bool(message.first);
    }
    if (message.last === true) {
      writer.uint32(32).bool(message.last);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LogEntryOperation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogEntryOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.producer = reader.string();
          break;
        case 3:
          message.first = reader.bool();
          break;
        case 4:
          message.last = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LogEntryOperation {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      producer: isSet(object.producer) ? String(object.producer) : "",
      first: isSet(object.first) ? Boolean(object.first) : false,
      last: isSet(object.last) ? Boolean(object.last) : false
    };
  },
  toJSON(message: LogEntryOperation): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.producer !== undefined && (obj.producer = message.producer);
    message.first !== undefined && (obj.first = message.first);
    message.last !== undefined && (obj.last = message.last);
    return obj;
  },
  fromPartial(object: DeepPartial<LogEntryOperation>): LogEntryOperation {
    const message = createBaseLogEntryOperation();
    message.id = object.id ?? "";
    message.producer = object.producer ?? "";
    message.first = object.first ?? false;
    message.last = object.last ?? false;
    return message;
  },
  fromSDK(object: LogEntryOperationSDKType): LogEntryOperation {
    return {
      id: object?.id,
      producer: object?.producer,
      first: object?.first,
      last: object?.last
    };
  },
  toSDK(message: LogEntryOperation): LogEntryOperationSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.producer = message.producer;
    obj.first = message.first;
    obj.last = message.last;
    return obj;
  },
  fromAmino(object: LogEntryOperationAmino): LogEntryOperation {
    return {
      id: object.id,
      producer: object.producer,
      first: object.first,
      last: object.last
    };
  },
  toAmino(message: LogEntryOperation): LogEntryOperationAmino {
    const obj: any = {};
    obj.id = message.id;
    obj.producer = message.producer;
    obj.first = message.first;
    obj.last = message.last;
    return obj;
  },
  fromAminoMsg(object: LogEntryOperationAminoMsg): LogEntryOperation {
    return LogEntryOperation.fromAmino(object.value);
  },
  fromProtoMsg(message: LogEntryOperationProtoMsg): LogEntryOperation {
    return LogEntryOperation.decode(message.value);
  },
  toProto(message: LogEntryOperation): Uint8Array {
    return LogEntryOperation.encode(message).finish();
  },
  toProtoMsg(message: LogEntryOperation): LogEntryOperationProtoMsg {
    return {
      typeUrl: "/google.api.servicecontrol.v1.LogEntryOperation",
      value: LogEntryOperation.encode(message).finish()
    };
  }
};
function createBaseLogEntrySourceLocation(): LogEntrySourceLocation {
  return {
    file: "",
    line: Long.ZERO,
    function: ""
  };
}
export const LogEntrySourceLocation = {
  typeUrl: "/google.api.servicecontrol.v1.LogEntrySourceLocation",
  encode(message: LogEntrySourceLocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.file !== "") {
      writer.uint32(10).string(message.file);
    }
    if (!message.line.isZero()) {
      writer.uint32(16).int64(message.line);
    }
    if (message.function !== "") {
      writer.uint32(26).string(message.function);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LogEntrySourceLocation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogEntrySourceLocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.file = reader.string();
          break;
        case 2:
          message.line = (reader.int64() as Long);
          break;
        case 3:
          message.function = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LogEntrySourceLocation {
    return {
      file: isSet(object.file) ? String(object.file) : "",
      line: isSet(object.line) ? Long.fromValue(object.line) : Long.ZERO,
      function: isSet(object.function) ? String(object.function) : ""
    };
  },
  toJSON(message: LogEntrySourceLocation): unknown {
    const obj: any = {};
    message.file !== undefined && (obj.file = message.file);
    message.line !== undefined && (obj.line = (message.line || Long.ZERO).toString());
    message.function !== undefined && (obj.function = message.function);
    return obj;
  },
  fromPartial(object: DeepPartial<LogEntrySourceLocation>): LogEntrySourceLocation {
    const message = createBaseLogEntrySourceLocation();
    message.file = object.file ?? "";
    message.line = object.line !== undefined && object.line !== null ? Long.fromValue(object.line) : Long.ZERO;
    message.function = object.function ?? "";
    return message;
  },
  fromSDK(object: LogEntrySourceLocationSDKType): LogEntrySourceLocation {
    return {
      file: object?.file,
      line: object?.line,
      function: object?.function
    };
  },
  toSDK(message: LogEntrySourceLocation): LogEntrySourceLocationSDKType {
    const obj: any = {};
    obj.file = message.file;
    obj.line = message.line;
    obj.function = message.function;
    return obj;
  },
  fromAmino(object: LogEntrySourceLocationAmino): LogEntrySourceLocation {
    return {
      file: object.file,
      line: Long.fromString(object.line),
      function: object.function
    };
  },
  toAmino(message: LogEntrySourceLocation): LogEntrySourceLocationAmino {
    const obj: any = {};
    obj.file = message.file;
    obj.line = message.line ? message.line.toString() : undefined;
    obj.function = message.function;
    return obj;
  },
  fromAminoMsg(object: LogEntrySourceLocationAminoMsg): LogEntrySourceLocation {
    return LogEntrySourceLocation.fromAmino(object.value);
  },
  fromProtoMsg(message: LogEntrySourceLocationProtoMsg): LogEntrySourceLocation {
    return LogEntrySourceLocation.decode(message.value);
  },
  toProto(message: LogEntrySourceLocation): Uint8Array {
    return LogEntrySourceLocation.encode(message).finish();
  },
  toProtoMsg(message: LogEntrySourceLocation): LogEntrySourceLocationProtoMsg {
    return {
      typeUrl: "/google.api.servicecontrol.v1.LogEntrySourceLocation",
      value: LogEntrySourceLocation.encode(message).finish()
    };
  }
};