import { Duration, DurationSDKType } from "../protobuf/duration";
import { Any, AnySDKType } from "../protobuf/any";
import { Status, StatusSDKType } from "../rpc/status";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { ComputedRef } from "vue";
export const protobufPackage = "google.longrunning";
/**
 * This resource represents a long-running operation that is the result of a
 * network API call.
 */
export interface Operation {
  /**
   * The server-assigned name, which is only unique within the same service that
   * originally returns it. If you use the default HTTP mapping, the
   * `name` should be a resource name ending with `operations/{unique_id}`.
   */
  name: string;
  /**
   * Service-specific metadata associated with the operation.  It typically
   * contains progress information and common metadata such as create time.
   * Some services might not provide such metadata.  Any method that returns a
   * long-running operation should document the metadata type, if any.
   */
  metadata?: Any;
  /**
   * If the value is `false`, it means the operation is still in progress.
   * If `true`, the operation is completed, and either `error` or `response` is
   * available.
   */
  done: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /**
   * The normal response of the operation in case of success.  If the original
   * method returns no data on success, such as `Delete`, the response is
   * `google.protobuf.Empty`.  If the original method is standard
   * `Get`/`Create`/`Update`, the response should be the resource.  For other
   * methods, the response should have the type `XxxResponse`, where `Xxx`
   * is the original method name.  For example, if the original method name
   * is `TakeSnapshot()`, the inferred response type is
   * `TakeSnapshotResponse`.
   */
  response?: Any;
}
export interface ReactiveOperation {
  name: ComputedRef<string>;
  metadata?: ComputedRef<Any>;
  done: ComputedRef<boolean>;
  error?: ComputedRef<Status>;
  response?: ComputedRef<Any>;
}
export interface OperationProtoMsg {
  typeUrl: "/google.longrunning.Operation";
  value: Uint8Array;
}
/**
 * This resource represents a long-running operation that is the result of a
 * network API call.
 */
export interface OperationSDKType {
  name: string;
  metadata?: AnySDKType;
  done: boolean;
  error?: StatusSDKType;
  response?: AnySDKType;
}
/** The request message for [Operations.GetOperation][google.longrunning.Operations.GetOperation]. */
export interface GetOperationRequest {
  /** The name of the operation resource. */
  name: string;
}
export interface ReactiveGetOperationRequest {
  name: ComputedRef<string>;
}
export interface GetOperationRequestProtoMsg {
  typeUrl: "/google.longrunning.GetOperationRequest";
  value: Uint8Array;
}
/** The request message for [Operations.GetOperation][google.longrunning.Operations.GetOperation]. */
export interface GetOperationRequestSDKType {
  name: string;
}
/** The request message for [Operations.ListOperations][google.longrunning.Operations.ListOperations]. */
export interface ListOperationsRequest {
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list filter. */
  filter: string;
  /** The standard list page size. */
  pageSize: number;
  /** The standard list page token. */
  pageToken: string;
}
export interface ReactiveListOperationsRequest {
  name: ComputedRef<string>;
  filter: ComputedRef<string>;
  pageSize: ComputedRef<number>;
  pageToken: ComputedRef<string>;
}
export interface ListOperationsRequestProtoMsg {
  typeUrl: "/google.longrunning.ListOperationsRequest";
  value: Uint8Array;
}
/** The request message for [Operations.ListOperations][google.longrunning.Operations.ListOperations]. */
export interface ListOperationsRequestSDKType {
  name: string;
  filter: string;
  page_size: number;
  page_token: string;
}
/** The response message for [Operations.ListOperations][google.longrunning.Operations.ListOperations]. */
export interface ListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations: Operation[];
  /** The standard List next-page token. */
  nextPageToken: string;
}
export interface ReactiveListOperationsResponse {
  operations: ComputedRef<Operation[]>;
  nextPageToken: ComputedRef<string>;
}
export interface ListOperationsResponseProtoMsg {
  typeUrl: "/google.longrunning.ListOperationsResponse";
  value: Uint8Array;
}
/** The response message for [Operations.ListOperations][google.longrunning.Operations.ListOperations]. */
export interface ListOperationsResponseSDKType {
  operations: OperationSDKType[];
  next_page_token: string;
}
/** The request message for [Operations.CancelOperation][google.longrunning.Operations.CancelOperation]. */
export interface CancelOperationRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
}
export interface ReactiveCancelOperationRequest {
  name: ComputedRef<string>;
}
export interface CancelOperationRequestProtoMsg {
  typeUrl: "/google.longrunning.CancelOperationRequest";
  value: Uint8Array;
}
/** The request message for [Operations.CancelOperation][google.longrunning.Operations.CancelOperation]. */
export interface CancelOperationRequestSDKType {
  name: string;
}
/** The request message for [Operations.DeleteOperation][google.longrunning.Operations.DeleteOperation]. */
export interface DeleteOperationRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}
export interface ReactiveDeleteOperationRequest {
  name: ComputedRef<string>;
}
export interface DeleteOperationRequestProtoMsg {
  typeUrl: "/google.longrunning.DeleteOperationRequest";
  value: Uint8Array;
}
/** The request message for [Operations.DeleteOperation][google.longrunning.Operations.DeleteOperation]. */
export interface DeleteOperationRequestSDKType {
  name: string;
}
/** The request message for [Operations.WaitOperation][google.longrunning.Operations.WaitOperation]. */
export interface WaitOperationRequest {
  /** The name of the operation resource to wait on. */
  name: string;
  /**
   * The maximum duration to wait before timing out. If left blank, the wait
   * will be at most the time permitted by the underlying HTTP/RPC protocol.
   * If RPC context deadline is also specified, the shorter one will be used.
   */
  timeout?: Duration;
}
export interface ReactiveWaitOperationRequest {
  name: ComputedRef<string>;
  timeout?: ComputedRef<Duration>;
}
export interface WaitOperationRequestProtoMsg {
  typeUrl: "/google.longrunning.WaitOperationRequest";
  value: Uint8Array;
}
/** The request message for [Operations.WaitOperation][google.longrunning.Operations.WaitOperation]. */
export interface WaitOperationRequestSDKType {
  name: string;
  timeout?: DurationSDKType;
}
/**
 * A message representing the message types used by a long-running operation.
 * 
 * Example:
 * 
 *   rpc LongRunningRecognize(LongRunningRecognizeRequest)
 *       returns (google.longrunning.Operation) {
 *     option (google.longrunning.operation_info) = {
 *       response_type: "LongRunningRecognizeResponse"
 *       metadata_type: "LongRunningRecognizeMetadata"
 *     };
 *   }
 */
export interface OperationInfo {
  /**
   * Required. The message name of the primary return type for this
   * long-running operation.
   * This type will be used to deserialize the LRO's response.
   * 
   * If the response is in a different package from the rpc, a fully-qualified
   * message name must be used (e.g. `google.protobuf.Struct`).
   * 
   * Note: Altering this value constitutes a breaking change.
   */
  responseType: string;
  /**
   * Required. The message name of the metadata type for this long-running
   * operation.
   * 
   * If the response is in a different package from the rpc, a fully-qualified
   * message name must be used (e.g. `google.protobuf.Struct`).
   * 
   * Note: Altering this value constitutes a breaking change.
   */
  metadataType: string;
}
export interface ReactiveOperationInfo {
  responseType: ComputedRef<string>;
  metadataType: ComputedRef<string>;
}
export interface OperationInfoProtoMsg {
  typeUrl: "/google.longrunning.OperationInfo";
  value: Uint8Array;
}
/**
 * A message representing the message types used by a long-running operation.
 * 
 * Example:
 * 
 *   rpc LongRunningRecognize(LongRunningRecognizeRequest)
 *       returns (google.longrunning.Operation) {
 *     option (google.longrunning.operation_info) = {
 *       response_type: "LongRunningRecognizeResponse"
 *       metadata_type: "LongRunningRecognizeMetadata"
 *     };
 *   }
 */
export interface OperationInfoSDKType {
  response_type: string;
  metadata_type: string;
}
function createBaseOperation(): Operation {
  return {
    name: "",
    metadata: undefined,
    done: false,
    error: undefined,
    response: undefined
  };
}
export const Operation = {
  typeUrl: "/google.longrunning.Operation",
  encode(message: Operation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.metadata !== undefined) {
      Any.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.done === true) {
      writer.uint32(24).bool(message.done);
    }
    if (message.error !== undefined) {
      Status.encode(message.error, writer.uint32(34).fork()).ldelim();
    }
    if (message.response !== undefined) {
      Any.encode(message.response, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Operation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.metadata = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.done = reader.bool();
          break;
        case 4:
          message.error = Status.decode(reader, reader.uint32());
          break;
        case 5:
          message.response = Any.decode(reader, reader.uint32());
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
      name: isSet(object.name) ? String(object.name) : "",
      metadata: isSet(object.metadata) ? Any.fromJSON(object.metadata) : undefined,
      done: isSet(object.done) ? Boolean(object.done) : false,
      error: isSet(object.error) ? Status.fromJSON(object.error) : undefined,
      response: isSet(object.response) ? Any.fromJSON(object.response) : undefined
    };
  },
  toJSON(message: Operation): JsonSafe<Operation> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.metadata !== undefined && (obj.metadata = message.metadata ? Any.toJSON(message.metadata) : undefined);
    message.done !== undefined && (obj.done = message.done);
    message.error !== undefined && (obj.error = message.error ? Status.toJSON(message.error) : undefined);
    message.response !== undefined && (obj.response = message.response ? Any.toJSON(message.response) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Operation>): Operation {
    const message = createBaseOperation();
    message.name = object.name ?? "";
    message.metadata = object.metadata !== undefined && object.metadata !== null ? Any.fromPartial(object.metadata) : undefined;
    message.done = object.done ?? false;
    message.error = object.error !== undefined && object.error !== null ? Status.fromPartial(object.error) : undefined;
    message.response = object.response !== undefined && object.response !== null ? Any.fromPartial(object.response) : undefined;
    return message;
  },
  fromSDK(object: OperationSDKType): Operation {
    return {
      name: object?.name,
      metadata: object.metadata ? Any.fromSDK(object.metadata) : undefined,
      done: object?.done,
      error: object.error ? Status.fromSDK(object.error) : undefined,
      response: object.response ? Any.fromSDK(object.response) : undefined
    };
  },
  fromSDKJSON(object: any): OperationSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      metadata: isSet(object.metadata) ? Any.fromSDKJSON(object.metadata) : undefined,
      done: isSet(object.done) ? Boolean(object.done) : false,
      error: isSet(object.error) ? Status.fromSDKJSON(object.error) : undefined,
      response: isSet(object.response) ? Any.fromSDKJSON(object.response) : undefined
    };
  },
  toSDK(message: Operation): OperationSDKType {
    const obj: any = {};
    obj.name = message.name;
    message.metadata !== undefined && (obj.metadata = message.metadata ? Any.toSDK(message.metadata) : undefined);
    obj.done = message.done;
    message.error !== undefined && (obj.error = message.error ? Status.toSDK(message.error) : undefined);
    message.response !== undefined && (obj.response = message.response ? Any.toSDK(message.response) : undefined);
    return obj;
  },
  fromAmino(object: OperationAmino): Operation {
    const message = createBaseOperation();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Any.fromAmino(object.metadata);
    }
    if (object.done !== undefined && object.done !== null) {
      message.done = object.done;
    }
    if (object.error !== undefined && object.error !== null) {
      message.error = Status.fromAmino(object.error);
    }
    if (object.response !== undefined && object.response !== null) {
      message.response = Any.fromAmino(object.response);
    }
    return message;
  },
  toAmino(message: Operation): OperationAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.metadata = message.metadata ? Any.toAmino(message.metadata) : undefined;
    obj.done = message.done === false ? undefined : message.done;
    obj.error = message.error ? Status.toAmino(message.error) : undefined;
    obj.response = message.response ? Any.toAmino(message.response) : undefined;
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
      typeUrl: "/google.longrunning.Operation",
      value: Operation.encode(message).finish()
    };
  }
};
function createBaseGetOperationRequest(): GetOperationRequest {
  return {
    name: ""
  };
}
export const GetOperationRequest = {
  typeUrl: "/google.longrunning.GetOperationRequest",
  encode(message: GetOperationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetOperationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOperationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetOperationRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toJSON(message: GetOperationRequest): JsonSafe<GetOperationRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: DeepPartial<GetOperationRequest>): GetOperationRequest {
    const message = createBaseGetOperationRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromSDK(object: GetOperationRequestSDKType): GetOperationRequest {
    return {
      name: object?.name
    };
  },
  fromSDKJSON(object: any): GetOperationRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toSDK(message: GetOperationRequest): GetOperationRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  },
  fromAmino(object: GetOperationRequestAmino): GetOperationRequest {
    const message = createBaseGetOperationRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: GetOperationRequest): GetOperationRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: GetOperationRequestAminoMsg): GetOperationRequest {
    return GetOperationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: GetOperationRequestProtoMsg): GetOperationRequest {
    return GetOperationRequest.decode(message.value);
  },
  toProto(message: GetOperationRequest): Uint8Array {
    return GetOperationRequest.encode(message).finish();
  },
  toProtoMsg(message: GetOperationRequest): GetOperationRequestProtoMsg {
    return {
      typeUrl: "/google.longrunning.GetOperationRequest",
      value: GetOperationRequest.encode(message).finish()
    };
  }
};
function createBaseListOperationsRequest(): ListOperationsRequest {
  return {
    name: "",
    filter: "",
    pageSize: 0,
    pageToken: ""
  };
}
export const ListOperationsRequest = {
  typeUrl: "/google.longrunning.ListOperationsRequest",
  encode(message: ListOperationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.filter !== "") {
      writer.uint32(10).string(message.filter);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListOperationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.name = reader.string();
          break;
        case 1:
          message.filter = reader.string();
          break;
        case 2:
          message.pageSize = reader.int32();
          break;
        case 3:
          message.pageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListOperationsRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      filter: isSet(object.filter) ? String(object.filter) : "",
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : ""
    };
  },
  toJSON(message: ListOperationsRequest): JsonSafe<ListOperationsRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.filter !== undefined && (obj.filter = message.filter);
    message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },
  fromPartial(object: DeepPartial<ListOperationsRequest>): ListOperationsRequest {
    const message = createBaseListOperationsRequest();
    message.name = object.name ?? "";
    message.filter = object.filter ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
  fromSDK(object: ListOperationsRequestSDKType): ListOperationsRequest {
    return {
      name: object?.name,
      filter: object?.filter,
      pageSize: object?.page_size,
      pageToken: object?.page_token
    };
  },
  fromSDKJSON(object: any): ListOperationsRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      filter: isSet(object.filter) ? String(object.filter) : "",
      page_size: isSet(object.page_size) ? Number(object.page_size) : 0,
      page_token: isSet(object.page_token) ? String(object.page_token) : ""
    };
  },
  toSDK(message: ListOperationsRequest): ListOperationsRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.filter = message.filter;
    obj.page_size = message.pageSize;
    obj.page_token = message.pageToken;
    return obj;
  },
  fromAmino(object: ListOperationsRequestAmino): ListOperationsRequest {
    const message = createBaseListOperationsRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = object.filter;
    }
    if (object.page_size !== undefined && object.page_size !== null) {
      message.pageSize = object.page_size;
    }
    if (object.page_token !== undefined && object.page_token !== null) {
      message.pageToken = object.page_token;
    }
    return message;
  },
  toAmino(message: ListOperationsRequest): ListOperationsRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.filter = message.filter === "" ? undefined : message.filter;
    obj.page_size = message.pageSize === 0 ? undefined : message.pageSize;
    obj.page_token = message.pageToken === "" ? undefined : message.pageToken;
    return obj;
  },
  fromAminoMsg(object: ListOperationsRequestAminoMsg): ListOperationsRequest {
    return ListOperationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ListOperationsRequestProtoMsg): ListOperationsRequest {
    return ListOperationsRequest.decode(message.value);
  },
  toProto(message: ListOperationsRequest): Uint8Array {
    return ListOperationsRequest.encode(message).finish();
  },
  toProtoMsg(message: ListOperationsRequest): ListOperationsRequestProtoMsg {
    return {
      typeUrl: "/google.longrunning.ListOperationsRequest",
      value: ListOperationsRequest.encode(message).finish()
    };
  }
};
function createBaseListOperationsResponse(): ListOperationsResponse {
  return {
    operations: [],
    nextPageToken: ""
  };
}
export const ListOperationsResponse = {
  typeUrl: "/google.longrunning.ListOperationsResponse",
  encode(message: ListOperationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListOperationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListOperationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operations.push(Operation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextPageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListOperationsResponse {
    return {
      operations: Array.isArray(object?.operations) ? object.operations.map((e: any) => Operation.fromJSON(e)) : [],
      nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : ""
    };
  },
  toJSON(message: ListOperationsResponse): JsonSafe<ListOperationsResponse> {
    const obj: any = {};
    if (message.operations) {
      obj.operations = message.operations.map(e => e ? Operation.toJSON(e) : undefined);
    } else {
      obj.operations = [];
    }
    message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
    return obj;
  },
  fromPartial(object: DeepPartial<ListOperationsResponse>): ListOperationsResponse {
    const message = createBaseListOperationsResponse();
    message.operations = object.operations?.map(e => Operation.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
  fromSDK(object: ListOperationsResponseSDKType): ListOperationsResponse {
    return {
      operations: Array.isArray(object?.operations) ? object.operations.map((e: any) => Operation.fromSDK(e)) : [],
      nextPageToken: object?.next_page_token
    };
  },
  fromSDKJSON(object: any): ListOperationsResponseSDKType {
    return {
      operations: Array.isArray(object?.operations) ? object.operations.map((e: any) => Operation.fromSDKJSON(e)) : [],
      next_page_token: isSet(object.next_page_token) ? String(object.next_page_token) : ""
    };
  },
  toSDK(message: ListOperationsResponse): ListOperationsResponseSDKType {
    const obj: any = {};
    if (message.operations) {
      obj.operations = message.operations.map(e => e ? Operation.toSDK(e) : undefined);
    } else {
      obj.operations = [];
    }
    obj.next_page_token = message.nextPageToken;
    return obj;
  },
  fromAmino(object: ListOperationsResponseAmino): ListOperationsResponse {
    const message = createBaseListOperationsResponse();
    message.operations = object.operations?.map(e => Operation.fromAmino(e)) || [];
    if (object.next_page_token !== undefined && object.next_page_token !== null) {
      message.nextPageToken = object.next_page_token;
    }
    return message;
  },
  toAmino(message: ListOperationsResponse): ListOperationsResponseAmino {
    const obj: any = {};
    if (message.operations) {
      obj.operations = message.operations.map(e => e ? Operation.toAmino(e) : undefined);
    } else {
      obj.operations = message.operations;
    }
    obj.next_page_token = message.nextPageToken === "" ? undefined : message.nextPageToken;
    return obj;
  },
  fromAminoMsg(object: ListOperationsResponseAminoMsg): ListOperationsResponse {
    return ListOperationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ListOperationsResponseProtoMsg): ListOperationsResponse {
    return ListOperationsResponse.decode(message.value);
  },
  toProto(message: ListOperationsResponse): Uint8Array {
    return ListOperationsResponse.encode(message).finish();
  },
  toProtoMsg(message: ListOperationsResponse): ListOperationsResponseProtoMsg {
    return {
      typeUrl: "/google.longrunning.ListOperationsResponse",
      value: ListOperationsResponse.encode(message).finish()
    };
  }
};
function createBaseCancelOperationRequest(): CancelOperationRequest {
  return {
    name: ""
  };
}
export const CancelOperationRequest = {
  typeUrl: "/google.longrunning.CancelOperationRequest",
  encode(message: CancelOperationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CancelOperationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelOperationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CancelOperationRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toJSON(message: CancelOperationRequest): JsonSafe<CancelOperationRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: DeepPartial<CancelOperationRequest>): CancelOperationRequest {
    const message = createBaseCancelOperationRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromSDK(object: CancelOperationRequestSDKType): CancelOperationRequest {
    return {
      name: object?.name
    };
  },
  fromSDKJSON(object: any): CancelOperationRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toSDK(message: CancelOperationRequest): CancelOperationRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  },
  fromAmino(object: CancelOperationRequestAmino): CancelOperationRequest {
    const message = createBaseCancelOperationRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: CancelOperationRequest): CancelOperationRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: CancelOperationRequestAminoMsg): CancelOperationRequest {
    return CancelOperationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: CancelOperationRequestProtoMsg): CancelOperationRequest {
    return CancelOperationRequest.decode(message.value);
  },
  toProto(message: CancelOperationRequest): Uint8Array {
    return CancelOperationRequest.encode(message).finish();
  },
  toProtoMsg(message: CancelOperationRequest): CancelOperationRequestProtoMsg {
    return {
      typeUrl: "/google.longrunning.CancelOperationRequest",
      value: CancelOperationRequest.encode(message).finish()
    };
  }
};
function createBaseDeleteOperationRequest(): DeleteOperationRequest {
  return {
    name: ""
  };
}
export const DeleteOperationRequest = {
  typeUrl: "/google.longrunning.DeleteOperationRequest",
  encode(message: DeleteOperationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DeleteOperationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteOperationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DeleteOperationRequest {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toJSON(message: DeleteOperationRequest): JsonSafe<DeleteOperationRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: DeepPartial<DeleteOperationRequest>): DeleteOperationRequest {
    const message = createBaseDeleteOperationRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromSDK(object: DeleteOperationRequestSDKType): DeleteOperationRequest {
    return {
      name: object?.name
    };
  },
  fromSDKJSON(object: any): DeleteOperationRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toSDK(message: DeleteOperationRequest): DeleteOperationRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  },
  fromAmino(object: DeleteOperationRequestAmino): DeleteOperationRequest {
    const message = createBaseDeleteOperationRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: DeleteOperationRequest): DeleteOperationRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: DeleteOperationRequestAminoMsg): DeleteOperationRequest {
    return DeleteOperationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: DeleteOperationRequestProtoMsg): DeleteOperationRequest {
    return DeleteOperationRequest.decode(message.value);
  },
  toProto(message: DeleteOperationRequest): Uint8Array {
    return DeleteOperationRequest.encode(message).finish();
  },
  toProtoMsg(message: DeleteOperationRequest): DeleteOperationRequestProtoMsg {
    return {
      typeUrl: "/google.longrunning.DeleteOperationRequest",
      value: DeleteOperationRequest.encode(message).finish()
    };
  }
};
function createBaseWaitOperationRequest(): WaitOperationRequest {
  return {
    name: "",
    timeout: undefined
  };
}
export const WaitOperationRequest = {
  typeUrl: "/google.longrunning.WaitOperationRequest",
  encode(message: WaitOperationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.timeout !== undefined) {
      Duration.encode(message.timeout, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WaitOperationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWaitOperationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.timeout = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WaitOperationRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      timeout: isSet(object.timeout) ? Duration.fromJSON(object.timeout) : undefined
    };
  },
  toJSON(message: WaitOperationRequest): JsonSafe<WaitOperationRequest> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.timeout !== undefined && (obj.timeout = message.timeout ? Duration.toJSON(message.timeout) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<WaitOperationRequest>): WaitOperationRequest {
    const message = createBaseWaitOperationRequest();
    message.name = object.name ?? "";
    message.timeout = object.timeout !== undefined && object.timeout !== null ? Duration.fromPartial(object.timeout) : undefined;
    return message;
  },
  fromSDK(object: WaitOperationRequestSDKType): WaitOperationRequest {
    return {
      name: object?.name,
      timeout: object.timeout ? Duration.fromSDK(object.timeout) : undefined
    };
  },
  fromSDKJSON(object: any): WaitOperationRequestSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      timeout: isSet(object.timeout) ? Duration.fromSDKJSON(object.timeout) : undefined
    };
  },
  toSDK(message: WaitOperationRequest): WaitOperationRequestSDKType {
    const obj: any = {};
    obj.name = message.name;
    message.timeout !== undefined && (obj.timeout = message.timeout ? Duration.toSDK(message.timeout) : undefined);
    return obj;
  },
  fromAmino(object: WaitOperationRequestAmino): WaitOperationRequest {
    const message = createBaseWaitOperationRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.timeout !== undefined && object.timeout !== null) {
      message.timeout = Duration.fromAmino(object.timeout);
    }
    return message;
  },
  toAmino(message: WaitOperationRequest): WaitOperationRequestAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.timeout = message.timeout ? Duration.toAmino(message.timeout) : undefined;
    return obj;
  },
  fromAminoMsg(object: WaitOperationRequestAminoMsg): WaitOperationRequest {
    return WaitOperationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: WaitOperationRequestProtoMsg): WaitOperationRequest {
    return WaitOperationRequest.decode(message.value);
  },
  toProto(message: WaitOperationRequest): Uint8Array {
    return WaitOperationRequest.encode(message).finish();
  },
  toProtoMsg(message: WaitOperationRequest): WaitOperationRequestProtoMsg {
    return {
      typeUrl: "/google.longrunning.WaitOperationRequest",
      value: WaitOperationRequest.encode(message).finish()
    };
  }
};
function createBaseOperationInfo(): OperationInfo {
  return {
    responseType: "",
    metadataType: ""
  };
}
export const OperationInfo = {
  typeUrl: "/google.longrunning.OperationInfo",
  encode(message: OperationInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.responseType !== "") {
      writer.uint32(10).string(message.responseType);
    }
    if (message.metadataType !== "") {
      writer.uint32(18).string(message.metadataType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OperationInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.responseType = reader.string();
          break;
        case 2:
          message.metadataType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): OperationInfo {
    return {
      responseType: isSet(object.responseType) ? String(object.responseType) : "",
      metadataType: isSet(object.metadataType) ? String(object.metadataType) : ""
    };
  },
  toJSON(message: OperationInfo): JsonSafe<OperationInfo> {
    const obj: any = {};
    message.responseType !== undefined && (obj.responseType = message.responseType);
    message.metadataType !== undefined && (obj.metadataType = message.metadataType);
    return obj;
  },
  fromPartial(object: DeepPartial<OperationInfo>): OperationInfo {
    const message = createBaseOperationInfo();
    message.responseType = object.responseType ?? "";
    message.metadataType = object.metadataType ?? "";
    return message;
  },
  fromSDK(object: OperationInfoSDKType): OperationInfo {
    return {
      responseType: object?.response_type,
      metadataType: object?.metadata_type
    };
  },
  fromSDKJSON(object: any): OperationInfoSDKType {
    return {
      response_type: isSet(object.response_type) ? String(object.response_type) : "",
      metadata_type: isSet(object.metadata_type) ? String(object.metadata_type) : ""
    };
  },
  toSDK(message: OperationInfo): OperationInfoSDKType {
    const obj: any = {};
    obj.response_type = message.responseType;
    obj.metadata_type = message.metadataType;
    return obj;
  },
  fromAmino(object: OperationInfoAmino): OperationInfo {
    const message = createBaseOperationInfo();
    if (object.response_type !== undefined && object.response_type !== null) {
      message.responseType = object.response_type;
    }
    if (object.metadata_type !== undefined && object.metadata_type !== null) {
      message.metadataType = object.metadata_type;
    }
    return message;
  },
  toAmino(message: OperationInfo): OperationInfoAmino {
    const obj: any = {};
    obj.response_type = message.responseType === "" ? undefined : message.responseType;
    obj.metadata_type = message.metadataType === "" ? undefined : message.metadataType;
    return obj;
  },
  fromAminoMsg(object: OperationInfoAminoMsg): OperationInfo {
    return OperationInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: OperationInfoProtoMsg): OperationInfo {
    return OperationInfo.decode(message.value);
  },
  toProto(message: OperationInfo): Uint8Array {
    return OperationInfo.encode(message).finish();
  },
  toProtoMsg(message: OperationInfo): OperationInfoProtoMsg {
    return {
      typeUrl: "/google.longrunning.OperationInfo",
      value: OperationInfo.encode(message).finish()
    };
  }
};