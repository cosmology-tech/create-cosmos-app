import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../query/v1beta1/pagination";
import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { BlockID, BlockIDSDKType } from "../../../../tendermint/types/types";
import { Block, BlockSDKType } from "../../../../tendermint/types/block";
import { NodeInfo, NodeInfoSDKType } from "../../../../tendermint/p2p/types";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
import { ComputedRef } from "vue";
export const protobufPackage = "cosmos.base.tendermint.v1beta1";
/** GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightRequest {
  height: bigint;
  /** pagination defines an pagination for the request. */
  pagination?: PageRequest;
}
export interface ReactiveGetValidatorSetByHeightRequest {
  height: ComputedRef<bigint>;
  pagination?: ComputedRef<PageRequest>;
}
export interface GetValidatorSetByHeightRequestProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest";
  value: Uint8Array;
}
/** GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightRequestSDKType {
  height: bigint;
  pagination?: PageRequestSDKType;
}
/** GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightResponse {
  blockHeight: bigint;
  validators: Validator[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}
export interface ReactiveGetValidatorSetByHeightResponse {
  blockHeight: ComputedRef<bigint>;
  validators: ComputedRef<Validator[]>;
  pagination?: ComputedRef<PageResponse>;
}
export interface GetValidatorSetByHeightResponseProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse";
  value: Uint8Array;
}
/** GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightResponseSDKType {
  block_height: bigint;
  validators: ValidatorSDKType[];
  pagination?: PageResponseSDKType;
}
/** GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetRequest {
  /** pagination defines an pagination for the request. */
  pagination?: PageRequest;
}
export interface ReactiveGetLatestValidatorSetRequest {
  pagination?: ComputedRef<PageRequest>;
}
export interface GetLatestValidatorSetRequestProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest";
  value: Uint8Array;
}
/** GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetRequestSDKType {
  pagination?: PageRequestSDKType;
}
/** GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetResponse {
  blockHeight: bigint;
  validators: Validator[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}
export interface ReactiveGetLatestValidatorSetResponse {
  blockHeight: ComputedRef<bigint>;
  validators: ComputedRef<Validator[]>;
  pagination?: ComputedRef<PageResponse>;
}
export interface GetLatestValidatorSetResponseProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse";
  value: Uint8Array;
}
/** GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetResponseSDKType {
  block_height: bigint;
  validators: ValidatorSDKType[];
  pagination?: PageResponseSDKType;
}
/** Validator is the type for the validator-set. */
export interface Validator {
  address: string;
  pubKey?: Any;
  votingPower: bigint;
  proposerPriority: bigint;
}
export interface ReactiveValidator {
  address: ComputedRef<string>;
  pubKey?: ComputedRef<Any>;
  votingPower: ComputedRef<bigint>;
  proposerPriority: ComputedRef<bigint>;
}
export interface ValidatorProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.Validator";
  value: Uint8Array;
}
/** Validator is the type for the validator-set. */
export interface ValidatorSDKType {
  address: string;
  pub_key?: AnySDKType;
  voting_power: bigint;
  proposer_priority: bigint;
}
/** GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightRequest {
  height: bigint;
}
export interface ReactiveGetBlockByHeightRequest {
  height: ComputedRef<bigint>;
}
export interface GetBlockByHeightRequestProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest";
  value: Uint8Array;
}
/** GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightRequestSDKType {
  height: bigint;
}
/** GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightResponse {
  blockId?: BlockID;
  block?: Block;
}
export interface ReactiveGetBlockByHeightResponse {
  blockId?: ComputedRef<BlockID>;
  block?: ComputedRef<Block>;
}
export interface GetBlockByHeightResponseProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse";
  value: Uint8Array;
}
/** GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightResponseSDKType {
  block_id?: BlockIDSDKType;
  block?: BlockSDKType;
}
/** GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockRequest {}
export interface ReactiveGetLatestBlockRequest {}
export interface GetLatestBlockRequestProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest";
  value: Uint8Array;
}
/** GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockRequestSDKType {}
/** GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockResponse {
  blockId?: BlockID;
  block?: Block;
}
export interface ReactiveGetLatestBlockResponse {
  blockId?: ComputedRef<BlockID>;
  block?: ComputedRef<Block>;
}
export interface GetLatestBlockResponseProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockResponse";
  value: Uint8Array;
}
/** GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockResponseSDKType {
  block_id?: BlockIDSDKType;
  block?: BlockSDKType;
}
/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */
export interface GetSyncingRequest {}
export interface ReactiveGetSyncingRequest {}
export interface GetSyncingRequestProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest";
  value: Uint8Array;
}
/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */
export interface GetSyncingRequestSDKType {}
/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */
export interface GetSyncingResponse {
  syncing: boolean;
}
export interface ReactiveGetSyncingResponse {
  syncing: ComputedRef<boolean>;
}
export interface GetSyncingResponseProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingResponse";
  value: Uint8Array;
}
/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */
export interface GetSyncingResponseSDKType {
  syncing: boolean;
}
/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoRequest {}
export interface ReactiveGetNodeInfoRequest {}
export interface GetNodeInfoRequestProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest";
  value: Uint8Array;
}
/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoRequestSDKType {}
/** GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoResponse {
  nodeInfo?: NodeInfo;
  applicationVersion?: VersionInfo;
}
export interface ReactiveGetNodeInfoResponse {
  nodeInfo?: ComputedRef<NodeInfo>;
  applicationVersion?: ComputedRef<VersionInfo>;
}
export interface GetNodeInfoResponseProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoResponse";
  value: Uint8Array;
}
/** GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoResponseSDKType {
  node_info?: NodeInfoSDKType;
  application_version?: VersionInfoSDKType;
}
/** VersionInfo is the type for the GetNodeInfoResponse message. */
export interface VersionInfo {
  name: string;
  appName: string;
  version: string;
  gitCommit: string;
  buildTags: string;
  goVersion: string;
  buildDeps: Module[];
  /** Since: cosmos-sdk 0.43 */
  cosmosSdkVersion: string;
}
export interface ReactiveVersionInfo {
  name: ComputedRef<string>;
  appName: ComputedRef<string>;
  version: ComputedRef<string>;
  gitCommit: ComputedRef<string>;
  buildTags: ComputedRef<string>;
  goVersion: ComputedRef<string>;
  buildDeps: ComputedRef<Module[]>;
  cosmosSdkVersion: ComputedRef<string>;
}
export interface VersionInfoProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.VersionInfo";
  value: Uint8Array;
}
/** VersionInfo is the type for the GetNodeInfoResponse message. */
export interface VersionInfoSDKType {
  name: string;
  app_name: string;
  version: string;
  git_commit: string;
  build_tags: string;
  go_version: string;
  build_deps: ModuleSDKType[];
  cosmos_sdk_version: string;
}
/** Module is the type for VersionInfo */
export interface Module {
  /** module path */
  path: string;
  /** module version */
  version: string;
  /** checksum */
  sum: string;
}
export interface ReactiveModule {
  path: ComputedRef<string>;
  version: ComputedRef<string>;
  sum: ComputedRef<string>;
}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.base.tendermint.v1beta1.Module";
  value: Uint8Array;
}
/** Module is the type for VersionInfo */
export interface ModuleSDKType {
  path: string;
  version: string;
  sum: string;
}
function createBaseGetValidatorSetByHeightRequest(): GetValidatorSetByHeightRequest {
  return {
    height: BigInt(0),
    pagination: undefined
  };
}
export const GetValidatorSetByHeightRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest",
  encode(message: GetValidatorSetByHeightRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetValidatorSetByHeightRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetValidatorSetByHeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetValidatorSetByHeightRequest {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: GetValidatorSetByHeightRequest): JsonSafe<GetValidatorSetByHeightRequest> {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GetValidatorSetByHeightRequest>): GetValidatorSetByHeightRequest {
    const message = createBaseGetValidatorSetByHeightRequest();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: GetValidatorSetByHeightRequestSDKType): GetValidatorSetByHeightRequest {
    return {
      height: object?.height,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): GetValidatorSetByHeightRequestSDKType {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: GetValidatorSetByHeightRequest): GetValidatorSetByHeightRequestSDKType {
    const obj: any = {};
    obj.height = message.height;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: GetValidatorSetByHeightRequestAmino): GetValidatorSetByHeightRequest {
    const message = createBaseGetValidatorSetByHeightRequest();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: GetValidatorSetByHeightRequest): GetValidatorSetByHeightRequestAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetValidatorSetByHeightRequestAminoMsg): GetValidatorSetByHeightRequest {
    return GetValidatorSetByHeightRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetValidatorSetByHeightRequest): GetValidatorSetByHeightRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetValidatorSetByHeightRequest",
      value: GetValidatorSetByHeightRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetValidatorSetByHeightRequestProtoMsg): GetValidatorSetByHeightRequest {
    return GetValidatorSetByHeightRequest.decode(message.value);
  },
  toProto(message: GetValidatorSetByHeightRequest): Uint8Array {
    return GetValidatorSetByHeightRequest.encode(message).finish();
  },
  toProtoMsg(message: GetValidatorSetByHeightRequest): GetValidatorSetByHeightRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest",
      value: GetValidatorSetByHeightRequest.encode(message).finish()
    };
  }
};
function createBaseGetValidatorSetByHeightResponse(): GetValidatorSetByHeightResponse {
  return {
    blockHeight: BigInt(0),
    validators: [],
    pagination: undefined
  };
}
export const GetValidatorSetByHeightResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse",
  encode(message: GetValidatorSetByHeightResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetValidatorSetByHeightResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetValidatorSetByHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetValidatorSetByHeightResponse {
    return {
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: GetValidatorSetByHeightResponse): JsonSafe<GetValidatorSetByHeightResponse> {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GetValidatorSetByHeightResponse>): GetValidatorSetByHeightResponse {
    const message = createBaseGetValidatorSetByHeightResponse();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: GetValidatorSetByHeightResponseSDKType): GetValidatorSetByHeightResponse {
    return {
      blockHeight: object?.block_height,
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): GetValidatorSetByHeightResponseSDKType {
    return {
      block_height: isSet(object.block_height) ? BigInt(object.block_height.toString()) : BigInt(0),
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: GetValidatorSetByHeightResponse): GetValidatorSetByHeightResponseSDKType {
    const obj: any = {};
    obj.block_height = message.blockHeight;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toSDK(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: GetValidatorSetByHeightResponseAmino): GetValidatorSetByHeightResponse {
    const message = createBaseGetValidatorSetByHeightResponse();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: GetValidatorSetByHeightResponse): GetValidatorSetByHeightResponseAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : undefined;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = message.validators;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetValidatorSetByHeightResponseAminoMsg): GetValidatorSetByHeightResponse {
    return GetValidatorSetByHeightResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetValidatorSetByHeightResponse): GetValidatorSetByHeightResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetValidatorSetByHeightResponse",
      value: GetValidatorSetByHeightResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetValidatorSetByHeightResponseProtoMsg): GetValidatorSetByHeightResponse {
    return GetValidatorSetByHeightResponse.decode(message.value);
  },
  toProto(message: GetValidatorSetByHeightResponse): Uint8Array {
    return GetValidatorSetByHeightResponse.encode(message).finish();
  },
  toProtoMsg(message: GetValidatorSetByHeightResponse): GetValidatorSetByHeightResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse",
      value: GetValidatorSetByHeightResponse.encode(message).finish()
    };
  }
};
function createBaseGetLatestValidatorSetRequest(): GetLatestValidatorSetRequest {
  return {
    pagination: undefined
  };
}
export const GetLatestValidatorSetRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest",
  encode(message: GetLatestValidatorSetRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetLatestValidatorSetRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestValidatorSetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetLatestValidatorSetRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: GetLatestValidatorSetRequest): JsonSafe<GetLatestValidatorSetRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GetLatestValidatorSetRequest>): GetLatestValidatorSetRequest {
    const message = createBaseGetLatestValidatorSetRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: GetLatestValidatorSetRequestSDKType): GetLatestValidatorSetRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): GetLatestValidatorSetRequestSDKType {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: GetLatestValidatorSetRequest): GetLatestValidatorSetRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: GetLatestValidatorSetRequestAmino): GetLatestValidatorSetRequest {
    const message = createBaseGetLatestValidatorSetRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: GetLatestValidatorSetRequest): GetLatestValidatorSetRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetLatestValidatorSetRequestAminoMsg): GetLatestValidatorSetRequest {
    return GetLatestValidatorSetRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetLatestValidatorSetRequest): GetLatestValidatorSetRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetLatestValidatorSetRequest",
      value: GetLatestValidatorSetRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetLatestValidatorSetRequestProtoMsg): GetLatestValidatorSetRequest {
    return GetLatestValidatorSetRequest.decode(message.value);
  },
  toProto(message: GetLatestValidatorSetRequest): Uint8Array {
    return GetLatestValidatorSetRequest.encode(message).finish();
  },
  toProtoMsg(message: GetLatestValidatorSetRequest): GetLatestValidatorSetRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest",
      value: GetLatestValidatorSetRequest.encode(message).finish()
    };
  }
};
function createBaseGetLatestValidatorSetResponse(): GetLatestValidatorSetResponse {
  return {
    blockHeight: BigInt(0),
    validators: [],
    pagination: undefined
  };
}
export const GetLatestValidatorSetResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse",
  encode(message: GetLatestValidatorSetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockHeight !== BigInt(0)) {
      writer.uint32(8).int64(message.blockHeight);
    }
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetLatestValidatorSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestValidatorSetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.int64();
          break;
        case 2:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetLatestValidatorSetResponse {
    return {
      blockHeight: isSet(object.blockHeight) ? BigInt(object.blockHeight.toString()) : BigInt(0),
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: GetLatestValidatorSetResponse): JsonSafe<GetLatestValidatorSetResponse> {
    const obj: any = {};
    message.blockHeight !== undefined && (obj.blockHeight = (message.blockHeight || BigInt(0)).toString());
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GetLatestValidatorSetResponse>): GetLatestValidatorSetResponse {
    const message = createBaseGetLatestValidatorSetResponse();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: GetLatestValidatorSetResponseSDKType): GetLatestValidatorSetResponse {
    return {
      blockHeight: object?.block_height,
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  fromSDKJSON(object: any): GetLatestValidatorSetResponseSDKType {
    return {
      block_height: isSet(object.block_height) ? BigInt(object.block_height.toString()) : BigInt(0),
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
    };
  },
  toSDK(message: GetLatestValidatorSetResponse): GetLatestValidatorSetResponseSDKType {
    const obj: any = {};
    obj.block_height = message.blockHeight;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toSDK(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: GetLatestValidatorSetResponseAmino): GetLatestValidatorSetResponse {
    const message = createBaseGetLatestValidatorSetResponse();
    if (object.block_height !== undefined && object.block_height !== null) {
      message.blockHeight = BigInt(object.block_height);
    }
    message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: GetLatestValidatorSetResponse): GetLatestValidatorSetResponseAmino {
    const obj: any = {};
    obj.block_height = message.blockHeight !== BigInt(0) ? message.blockHeight?.toString() : undefined;
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = message.validators;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetLatestValidatorSetResponseAminoMsg): GetLatestValidatorSetResponse {
    return GetLatestValidatorSetResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetLatestValidatorSetResponse): GetLatestValidatorSetResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetLatestValidatorSetResponse",
      value: GetLatestValidatorSetResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetLatestValidatorSetResponseProtoMsg): GetLatestValidatorSetResponse {
    return GetLatestValidatorSetResponse.decode(message.value);
  },
  toProto(message: GetLatestValidatorSetResponse): Uint8Array {
    return GetLatestValidatorSetResponse.encode(message).finish();
  },
  toProtoMsg(message: GetLatestValidatorSetResponse): GetLatestValidatorSetResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse",
      value: GetLatestValidatorSetResponse.encode(message).finish()
    };
  }
};
function createBaseValidator(): Validator {
  return {
    address: "",
    pubKey: undefined,
    votingPower: BigInt(0),
    proposerPriority: BigInt(0)
  };
}
export const Validator = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.Validator",
  encode(message: Validator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pubKey !== undefined) {
      Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.votingPower !== BigInt(0)) {
      writer.uint32(24).int64(message.votingPower);
    }
    if (message.proposerPriority !== BigInt(0)) {
      writer.uint32(32).int64(message.proposerPriority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Validator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pubKey = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.votingPower = reader.int64();
          break;
        case 4:
          message.proposerPriority = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Validator {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pubKey: isSet(object.pubKey) ? Any.fromJSON(object.pubKey) : undefined,
      votingPower: isSet(object.votingPower) ? BigInt(object.votingPower.toString()) : BigInt(0),
      proposerPriority: isSet(object.proposerPriority) ? BigInt(object.proposerPriority.toString()) : BigInt(0)
    };
  },
  toJSON(message: Validator): JsonSafe<Validator> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
    message.votingPower !== undefined && (obj.votingPower = (message.votingPower || BigInt(0)).toString());
    message.proposerPriority !== undefined && (obj.proposerPriority = (message.proposerPriority || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? "";
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? Any.fromPartial(object.pubKey) : undefined;
    message.votingPower = object.votingPower !== undefined && object.votingPower !== null ? BigInt(object.votingPower.toString()) : BigInt(0);
    message.proposerPriority = object.proposerPriority !== undefined && object.proposerPriority !== null ? BigInt(object.proposerPriority.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: ValidatorSDKType): Validator {
    return {
      address: object?.address,
      pubKey: object.pub_key ? Any.fromSDK(object.pub_key) : undefined,
      votingPower: object?.voting_power,
      proposerPriority: object?.proposer_priority
    };
  },
  fromSDKJSON(object: any): ValidatorSDKType {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pub_key: isSet(object.pub_key) ? Any.fromSDKJSON(object.pub_key) : undefined,
      voting_power: isSet(object.voting_power) ? BigInt(object.voting_power.toString()) : BigInt(0),
      proposer_priority: isSet(object.proposer_priority) ? BigInt(object.proposer_priority.toString()) : BigInt(0)
    };
  },
  toSDK(message: Validator): ValidatorSDKType {
    const obj: any = {};
    obj.address = message.address;
    message.pubKey !== undefined && (obj.pub_key = message.pubKey ? Any.toSDK(message.pubKey) : undefined);
    obj.voting_power = message.votingPower;
    obj.proposer_priority = message.proposerPriority;
    return obj;
  },
  fromAmino(object: ValidatorAmino): Validator {
    const message = createBaseValidator();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pubKey = Any.fromAmino(object.pub_key);
    }
    if (object.voting_power !== undefined && object.voting_power !== null) {
      message.votingPower = BigInt(object.voting_power);
    }
    if (object.proposer_priority !== undefined && object.proposer_priority !== null) {
      message.proposerPriority = BigInt(object.proposer_priority);
    }
    return message;
  },
  toAmino(message: Validator): ValidatorAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pub_key = message.pubKey ? Any.toAmino(message.pubKey) : undefined;
    obj.voting_power = message.votingPower !== BigInt(0) ? message.votingPower?.toString() : undefined;
    obj.proposer_priority = message.proposerPriority !== BigInt(0) ? message.proposerPriority?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorAminoMsg): Validator {
    return Validator.fromAmino(object.value);
  },
  toAminoMsg(message: Validator): ValidatorAminoMsg {
    return {
      type: "cosmos-sdk/Validator",
      value: Validator.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorProtoMsg): Validator {
    return Validator.decode(message.value);
  },
  toProto(message: Validator): Uint8Array {
    return Validator.encode(message).finish();
  },
  toProtoMsg(message: Validator): ValidatorProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.Validator",
      value: Validator.encode(message).finish()
    };
  }
};
function createBaseGetBlockByHeightRequest(): GetBlockByHeightRequest {
  return {
    height: BigInt(0)
  };
}
export const GetBlockByHeightRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest",
  encode(message: GetBlockByHeightRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetBlockByHeightRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockByHeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetBlockByHeightRequest {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
    };
  },
  toJSON(message: GetBlockByHeightRequest): JsonSafe<GetBlockByHeightRequest> {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<GetBlockByHeightRequest>): GetBlockByHeightRequest {
    const message = createBaseGetBlockByHeightRequest();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: GetBlockByHeightRequestSDKType): GetBlockByHeightRequest {
    return {
      height: object?.height
    };
  },
  fromSDKJSON(object: any): GetBlockByHeightRequestSDKType {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
    };
  },
  toSDK(message: GetBlockByHeightRequest): GetBlockByHeightRequestSDKType {
    const obj: any = {};
    obj.height = message.height;
    return obj;
  },
  fromAmino(object: GetBlockByHeightRequestAmino): GetBlockByHeightRequest {
    const message = createBaseGetBlockByHeightRequest();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    return message;
  },
  toAmino(message: GetBlockByHeightRequest): GetBlockByHeightRequestAmino {
    const obj: any = {};
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GetBlockByHeightRequestAminoMsg): GetBlockByHeightRequest {
    return GetBlockByHeightRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetBlockByHeightRequest): GetBlockByHeightRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetBlockByHeightRequest",
      value: GetBlockByHeightRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetBlockByHeightRequestProtoMsg): GetBlockByHeightRequest {
    return GetBlockByHeightRequest.decode(message.value);
  },
  toProto(message: GetBlockByHeightRequest): Uint8Array {
    return GetBlockByHeightRequest.encode(message).finish();
  },
  toProtoMsg(message: GetBlockByHeightRequest): GetBlockByHeightRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest",
      value: GetBlockByHeightRequest.encode(message).finish()
    };
  }
};
function createBaseGetBlockByHeightResponse(): GetBlockByHeightResponse {
  return {
    blockId: undefined,
    block: undefined
  };
}
export const GetBlockByHeightResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse",
  encode(message: GetBlockByHeightResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetBlockByHeightResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBlockByHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.block = Block.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetBlockByHeightResponse {
    return {
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
      block: isSet(object.block) ? Block.fromJSON(object.block) : undefined
    };
  },
  toJSON(message: GetBlockByHeightResponse): JsonSafe<GetBlockByHeightResponse> {
    const obj: any = {};
    message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.block !== undefined && (obj.block = message.block ? Block.toJSON(message.block) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GetBlockByHeightResponse>): GetBlockByHeightResponse {
    const message = createBaseGetBlockByHeightResponse();
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
    return message;
  },
  fromSDK(object: GetBlockByHeightResponseSDKType): GetBlockByHeightResponse {
    return {
      blockId: object.block_id ? BlockID.fromSDK(object.block_id) : undefined,
      block: object.block ? Block.fromSDK(object.block) : undefined
    };
  },
  fromSDKJSON(object: any): GetBlockByHeightResponseSDKType {
    return {
      block_id: isSet(object.block_id) ? BlockID.fromSDKJSON(object.block_id) : undefined,
      block: isSet(object.block) ? Block.fromSDKJSON(object.block) : undefined
    };
  },
  toSDK(message: GetBlockByHeightResponse): GetBlockByHeightResponseSDKType {
    const obj: any = {};
    message.blockId !== undefined && (obj.block_id = message.blockId ? BlockID.toSDK(message.blockId) : undefined);
    message.block !== undefined && (obj.block = message.block ? Block.toSDK(message.block) : undefined);
    return obj;
  },
  fromAmino(object: GetBlockByHeightResponseAmino): GetBlockByHeightResponse {
    const message = createBaseGetBlockByHeightResponse();
    if (object.block_id !== undefined && object.block_id !== null) {
      message.blockId = BlockID.fromAmino(object.block_id);
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = Block.fromAmino(object.block);
    }
    return message;
  },
  toAmino(message: GetBlockByHeightResponse): GetBlockByHeightResponseAmino {
    const obj: any = {};
    obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : undefined;
    obj.block = message.block ? Block.toAmino(message.block) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetBlockByHeightResponseAminoMsg): GetBlockByHeightResponse {
    return GetBlockByHeightResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetBlockByHeightResponse): GetBlockByHeightResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetBlockByHeightResponse",
      value: GetBlockByHeightResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetBlockByHeightResponseProtoMsg): GetBlockByHeightResponse {
    return GetBlockByHeightResponse.decode(message.value);
  },
  toProto(message: GetBlockByHeightResponse): Uint8Array {
    return GetBlockByHeightResponse.encode(message).finish();
  },
  toProtoMsg(message: GetBlockByHeightResponse): GetBlockByHeightResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse",
      value: GetBlockByHeightResponse.encode(message).finish()
    };
  }
};
function createBaseGetLatestBlockRequest(): GetLatestBlockRequest {
  return {};
}
export const GetLatestBlockRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest",
  encode(_: GetLatestBlockRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetLatestBlockRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestBlockRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): GetLatestBlockRequest {
    return {};
  },
  toJSON(_: GetLatestBlockRequest): JsonSafe<GetLatestBlockRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<GetLatestBlockRequest>): GetLatestBlockRequest {
    const message = createBaseGetLatestBlockRequest();
    return message;
  },
  fromSDK(_: GetLatestBlockRequestSDKType): GetLatestBlockRequest {
    return {};
  },
  fromSDKJSON(_: any): GetLatestBlockRequestSDKType {
    return {};
  },
  toSDK(_: GetLatestBlockRequest): GetLatestBlockRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: GetLatestBlockRequestAmino): GetLatestBlockRequest {
    const message = createBaseGetLatestBlockRequest();
    return message;
  },
  toAmino(_: GetLatestBlockRequest): GetLatestBlockRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: GetLatestBlockRequestAminoMsg): GetLatestBlockRequest {
    return GetLatestBlockRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetLatestBlockRequest): GetLatestBlockRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetLatestBlockRequest",
      value: GetLatestBlockRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetLatestBlockRequestProtoMsg): GetLatestBlockRequest {
    return GetLatestBlockRequest.decode(message.value);
  },
  toProto(message: GetLatestBlockRequest): Uint8Array {
    return GetLatestBlockRequest.encode(message).finish();
  },
  toProtoMsg(message: GetLatestBlockRequest): GetLatestBlockRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest",
      value: GetLatestBlockRequest.encode(message).finish()
    };
  }
};
function createBaseGetLatestBlockResponse(): GetLatestBlockResponse {
  return {
    blockId: undefined,
    block: undefined
  };
}
export const GetLatestBlockResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockResponse",
  encode(message: GetLatestBlockResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    if (message.block !== undefined) {
      Block.encode(message.block, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetLatestBlockResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLatestBlockResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.block = Block.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetLatestBlockResponse {
    return {
      blockId: isSet(object.blockId) ? BlockID.fromJSON(object.blockId) : undefined,
      block: isSet(object.block) ? Block.fromJSON(object.block) : undefined
    };
  },
  toJSON(message: GetLatestBlockResponse): JsonSafe<GetLatestBlockResponse> {
    const obj: any = {};
    message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.block !== undefined && (obj.block = message.block ? Block.toJSON(message.block) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GetLatestBlockResponse>): GetLatestBlockResponse {
    const message = createBaseGetLatestBlockResponse();
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
    return message;
  },
  fromSDK(object: GetLatestBlockResponseSDKType): GetLatestBlockResponse {
    return {
      blockId: object.block_id ? BlockID.fromSDK(object.block_id) : undefined,
      block: object.block ? Block.fromSDK(object.block) : undefined
    };
  },
  fromSDKJSON(object: any): GetLatestBlockResponseSDKType {
    return {
      block_id: isSet(object.block_id) ? BlockID.fromSDKJSON(object.block_id) : undefined,
      block: isSet(object.block) ? Block.fromSDKJSON(object.block) : undefined
    };
  },
  toSDK(message: GetLatestBlockResponse): GetLatestBlockResponseSDKType {
    const obj: any = {};
    message.blockId !== undefined && (obj.block_id = message.blockId ? BlockID.toSDK(message.blockId) : undefined);
    message.block !== undefined && (obj.block = message.block ? Block.toSDK(message.block) : undefined);
    return obj;
  },
  fromAmino(object: GetLatestBlockResponseAmino): GetLatestBlockResponse {
    const message = createBaseGetLatestBlockResponse();
    if (object.block_id !== undefined && object.block_id !== null) {
      message.blockId = BlockID.fromAmino(object.block_id);
    }
    if (object.block !== undefined && object.block !== null) {
      message.block = Block.fromAmino(object.block);
    }
    return message;
  },
  toAmino(message: GetLatestBlockResponse): GetLatestBlockResponseAmino {
    const obj: any = {};
    obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : undefined;
    obj.block = message.block ? Block.toAmino(message.block) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetLatestBlockResponseAminoMsg): GetLatestBlockResponse {
    return GetLatestBlockResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetLatestBlockResponse): GetLatestBlockResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetLatestBlockResponse",
      value: GetLatestBlockResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetLatestBlockResponseProtoMsg): GetLatestBlockResponse {
    return GetLatestBlockResponse.decode(message.value);
  },
  toProto(message: GetLatestBlockResponse): Uint8Array {
    return GetLatestBlockResponse.encode(message).finish();
  },
  toProtoMsg(message: GetLatestBlockResponse): GetLatestBlockResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockResponse",
      value: GetLatestBlockResponse.encode(message).finish()
    };
  }
};
function createBaseGetSyncingRequest(): GetSyncingRequest {
  return {};
}
export const GetSyncingRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest",
  encode(_: GetSyncingRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetSyncingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSyncingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): GetSyncingRequest {
    return {};
  },
  toJSON(_: GetSyncingRequest): JsonSafe<GetSyncingRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<GetSyncingRequest>): GetSyncingRequest {
    const message = createBaseGetSyncingRequest();
    return message;
  },
  fromSDK(_: GetSyncingRequestSDKType): GetSyncingRequest {
    return {};
  },
  fromSDKJSON(_: any): GetSyncingRequestSDKType {
    return {};
  },
  toSDK(_: GetSyncingRequest): GetSyncingRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: GetSyncingRequestAmino): GetSyncingRequest {
    const message = createBaseGetSyncingRequest();
    return message;
  },
  toAmino(_: GetSyncingRequest): GetSyncingRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: GetSyncingRequestAminoMsg): GetSyncingRequest {
    return GetSyncingRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetSyncingRequest): GetSyncingRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetSyncingRequest",
      value: GetSyncingRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetSyncingRequestProtoMsg): GetSyncingRequest {
    return GetSyncingRequest.decode(message.value);
  },
  toProto(message: GetSyncingRequest): Uint8Array {
    return GetSyncingRequest.encode(message).finish();
  },
  toProtoMsg(message: GetSyncingRequest): GetSyncingRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest",
      value: GetSyncingRequest.encode(message).finish()
    };
  }
};
function createBaseGetSyncingResponse(): GetSyncingResponse {
  return {
    syncing: false
  };
}
export const GetSyncingResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingResponse",
  encode(message: GetSyncingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.syncing === true) {
      writer.uint32(8).bool(message.syncing);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetSyncingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSyncingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.syncing = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetSyncingResponse {
    return {
      syncing: isSet(object.syncing) ? Boolean(object.syncing) : false
    };
  },
  toJSON(message: GetSyncingResponse): JsonSafe<GetSyncingResponse> {
    const obj: any = {};
    message.syncing !== undefined && (obj.syncing = message.syncing);
    return obj;
  },
  fromPartial(object: DeepPartial<GetSyncingResponse>): GetSyncingResponse {
    const message = createBaseGetSyncingResponse();
    message.syncing = object.syncing ?? false;
    return message;
  },
  fromSDK(object: GetSyncingResponseSDKType): GetSyncingResponse {
    return {
      syncing: object?.syncing
    };
  },
  fromSDKJSON(object: any): GetSyncingResponseSDKType {
    return {
      syncing: isSet(object.syncing) ? Boolean(object.syncing) : false
    };
  },
  toSDK(message: GetSyncingResponse): GetSyncingResponseSDKType {
    const obj: any = {};
    obj.syncing = message.syncing;
    return obj;
  },
  fromAmino(object: GetSyncingResponseAmino): GetSyncingResponse {
    const message = createBaseGetSyncingResponse();
    if (object.syncing !== undefined && object.syncing !== null) {
      message.syncing = object.syncing;
    }
    return message;
  },
  toAmino(message: GetSyncingResponse): GetSyncingResponseAmino {
    const obj: any = {};
    obj.syncing = message.syncing === false ? undefined : message.syncing;
    return obj;
  },
  fromAminoMsg(object: GetSyncingResponseAminoMsg): GetSyncingResponse {
    return GetSyncingResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetSyncingResponse): GetSyncingResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetSyncingResponse",
      value: GetSyncingResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetSyncingResponseProtoMsg): GetSyncingResponse {
    return GetSyncingResponse.decode(message.value);
  },
  toProto(message: GetSyncingResponse): Uint8Array {
    return GetSyncingResponse.encode(message).finish();
  },
  toProtoMsg(message: GetSyncingResponse): GetSyncingResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingResponse",
      value: GetSyncingResponse.encode(message).finish()
    };
  }
};
function createBaseGetNodeInfoRequest(): GetNodeInfoRequest {
  return {};
}
export const GetNodeInfoRequest = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest",
  encode(_: GetNodeInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetNodeInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNodeInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): GetNodeInfoRequest {
    return {};
  },
  toJSON(_: GetNodeInfoRequest): JsonSafe<GetNodeInfoRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<GetNodeInfoRequest>): GetNodeInfoRequest {
    const message = createBaseGetNodeInfoRequest();
    return message;
  },
  fromSDK(_: GetNodeInfoRequestSDKType): GetNodeInfoRequest {
    return {};
  },
  fromSDKJSON(_: any): GetNodeInfoRequestSDKType {
    return {};
  },
  toSDK(_: GetNodeInfoRequest): GetNodeInfoRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: GetNodeInfoRequestAmino): GetNodeInfoRequest {
    const message = createBaseGetNodeInfoRequest();
    return message;
  },
  toAmino(_: GetNodeInfoRequest): GetNodeInfoRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: GetNodeInfoRequestAminoMsg): GetNodeInfoRequest {
    return GetNodeInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetNodeInfoRequest): GetNodeInfoRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetNodeInfoRequest",
      value: GetNodeInfoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetNodeInfoRequestProtoMsg): GetNodeInfoRequest {
    return GetNodeInfoRequest.decode(message.value);
  },
  toProto(message: GetNodeInfoRequest): Uint8Array {
    return GetNodeInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: GetNodeInfoRequest): GetNodeInfoRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest",
      value: GetNodeInfoRequest.encode(message).finish()
    };
  }
};
function createBaseGetNodeInfoResponse(): GetNodeInfoResponse {
  return {
    nodeInfo: undefined,
    applicationVersion: undefined
  };
}
export const GetNodeInfoResponse = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoResponse",
  encode(message: GetNodeInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nodeInfo !== undefined) {
      NodeInfo.encode(message.nodeInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.applicationVersion !== undefined) {
      VersionInfo.encode(message.applicationVersion, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetNodeInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetNodeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nodeInfo = NodeInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.applicationVersion = VersionInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetNodeInfoResponse {
    return {
      nodeInfo: isSet(object.nodeInfo) ? NodeInfo.fromJSON(object.nodeInfo) : undefined,
      applicationVersion: isSet(object.applicationVersion) ? VersionInfo.fromJSON(object.applicationVersion) : undefined
    };
  },
  toJSON(message: GetNodeInfoResponse): JsonSafe<GetNodeInfoResponse> {
    const obj: any = {};
    message.nodeInfo !== undefined && (obj.nodeInfo = message.nodeInfo ? NodeInfo.toJSON(message.nodeInfo) : undefined);
    message.applicationVersion !== undefined && (obj.applicationVersion = message.applicationVersion ? VersionInfo.toJSON(message.applicationVersion) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GetNodeInfoResponse>): GetNodeInfoResponse {
    const message = createBaseGetNodeInfoResponse();
    message.nodeInfo = object.nodeInfo !== undefined && object.nodeInfo !== null ? NodeInfo.fromPartial(object.nodeInfo) : undefined;
    message.applicationVersion = object.applicationVersion !== undefined && object.applicationVersion !== null ? VersionInfo.fromPartial(object.applicationVersion) : undefined;
    return message;
  },
  fromSDK(object: GetNodeInfoResponseSDKType): GetNodeInfoResponse {
    return {
      nodeInfo: object.node_info ? NodeInfo.fromSDK(object.node_info) : undefined,
      applicationVersion: object.application_version ? VersionInfo.fromSDK(object.application_version) : undefined
    };
  },
  fromSDKJSON(object: any): GetNodeInfoResponseSDKType {
    return {
      node_info: isSet(object.node_info) ? NodeInfo.fromSDKJSON(object.node_info) : undefined,
      application_version: isSet(object.application_version) ? VersionInfo.fromSDKJSON(object.application_version) : undefined
    };
  },
  toSDK(message: GetNodeInfoResponse): GetNodeInfoResponseSDKType {
    const obj: any = {};
    message.nodeInfo !== undefined && (obj.node_info = message.nodeInfo ? NodeInfo.toSDK(message.nodeInfo) : undefined);
    message.applicationVersion !== undefined && (obj.application_version = message.applicationVersion ? VersionInfo.toSDK(message.applicationVersion) : undefined);
    return obj;
  },
  fromAmino(object: GetNodeInfoResponseAmino): GetNodeInfoResponse {
    const message = createBaseGetNodeInfoResponse();
    if (object.node_info !== undefined && object.node_info !== null) {
      message.nodeInfo = NodeInfo.fromAmino(object.node_info);
    }
    if (object.application_version !== undefined && object.application_version !== null) {
      message.applicationVersion = VersionInfo.fromAmino(object.application_version);
    }
    return message;
  },
  toAmino(message: GetNodeInfoResponse): GetNodeInfoResponseAmino {
    const obj: any = {};
    obj.node_info = message.nodeInfo ? NodeInfo.toAmino(message.nodeInfo) : undefined;
    obj.application_version = message.applicationVersion ? VersionInfo.toAmino(message.applicationVersion) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetNodeInfoResponseAminoMsg): GetNodeInfoResponse {
    return GetNodeInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetNodeInfoResponse): GetNodeInfoResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetNodeInfoResponse",
      value: GetNodeInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetNodeInfoResponseProtoMsg): GetNodeInfoResponse {
    return GetNodeInfoResponse.decode(message.value);
  },
  toProto(message: GetNodeInfoResponse): Uint8Array {
    return GetNodeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: GetNodeInfoResponse): GetNodeInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoResponse",
      value: GetNodeInfoResponse.encode(message).finish()
    };
  }
};
function createBaseVersionInfo(): VersionInfo {
  return {
    name: "",
    appName: "",
    version: "",
    gitCommit: "",
    buildTags: "",
    goVersion: "",
    buildDeps: [],
    cosmosSdkVersion: ""
  };
}
export const VersionInfo = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.VersionInfo",
  encode(message: VersionInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.appName !== "") {
      writer.uint32(18).string(message.appName);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (message.gitCommit !== "") {
      writer.uint32(34).string(message.gitCommit);
    }
    if (message.buildTags !== "") {
      writer.uint32(42).string(message.buildTags);
    }
    if (message.goVersion !== "") {
      writer.uint32(50).string(message.goVersion);
    }
    for (const v of message.buildDeps) {
      Module.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.cosmosSdkVersion !== "") {
      writer.uint32(66).string(message.cosmosSdkVersion);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VersionInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.appName = reader.string();
          break;
        case 3:
          message.version = reader.string();
          break;
        case 4:
          message.gitCommit = reader.string();
          break;
        case 5:
          message.buildTags = reader.string();
          break;
        case 6:
          message.goVersion = reader.string();
          break;
        case 7:
          message.buildDeps.push(Module.decode(reader, reader.uint32()));
          break;
        case 8:
          message.cosmosSdkVersion = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VersionInfo {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      appName: isSet(object.appName) ? String(object.appName) : "",
      version: isSet(object.version) ? String(object.version) : "",
      gitCommit: isSet(object.gitCommit) ? String(object.gitCommit) : "",
      buildTags: isSet(object.buildTags) ? String(object.buildTags) : "",
      goVersion: isSet(object.goVersion) ? String(object.goVersion) : "",
      buildDeps: Array.isArray(object?.buildDeps) ? object.buildDeps.map((e: any) => Module.fromJSON(e)) : [],
      cosmosSdkVersion: isSet(object.cosmosSdkVersion) ? String(object.cosmosSdkVersion) : ""
    };
  },
  toJSON(message: VersionInfo): JsonSafe<VersionInfo> {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.appName !== undefined && (obj.appName = message.appName);
    message.version !== undefined && (obj.version = message.version);
    message.gitCommit !== undefined && (obj.gitCommit = message.gitCommit);
    message.buildTags !== undefined && (obj.buildTags = message.buildTags);
    message.goVersion !== undefined && (obj.goVersion = message.goVersion);
    if (message.buildDeps) {
      obj.buildDeps = message.buildDeps.map(e => e ? Module.toJSON(e) : undefined);
    } else {
      obj.buildDeps = [];
    }
    message.cosmosSdkVersion !== undefined && (obj.cosmosSdkVersion = message.cosmosSdkVersion);
    return obj;
  },
  fromPartial(object: DeepPartial<VersionInfo>): VersionInfo {
    const message = createBaseVersionInfo();
    message.name = object.name ?? "";
    message.appName = object.appName ?? "";
    message.version = object.version ?? "";
    message.gitCommit = object.gitCommit ?? "";
    message.buildTags = object.buildTags ?? "";
    message.goVersion = object.goVersion ?? "";
    message.buildDeps = object.buildDeps?.map(e => Module.fromPartial(e)) || [];
    message.cosmosSdkVersion = object.cosmosSdkVersion ?? "";
    return message;
  },
  fromSDK(object: VersionInfoSDKType): VersionInfo {
    return {
      name: object?.name,
      appName: object?.app_name,
      version: object?.version,
      gitCommit: object?.git_commit,
      buildTags: object?.build_tags,
      goVersion: object?.go_version,
      buildDeps: Array.isArray(object?.build_deps) ? object.build_deps.map((e: any) => Module.fromSDK(e)) : [],
      cosmosSdkVersion: object?.cosmos_sdk_version
    };
  },
  fromSDKJSON(object: any): VersionInfoSDKType {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      app_name: isSet(object.app_name) ? String(object.app_name) : "",
      version: isSet(object.version) ? String(object.version) : "",
      git_commit: isSet(object.git_commit) ? String(object.git_commit) : "",
      build_tags: isSet(object.build_tags) ? String(object.build_tags) : "",
      go_version: isSet(object.go_version) ? String(object.go_version) : "",
      build_deps: Array.isArray(object?.build_deps) ? object.build_deps.map((e: any) => Module.fromSDKJSON(e)) : [],
      cosmos_sdk_version: isSet(object.cosmos_sdk_version) ? String(object.cosmos_sdk_version) : ""
    };
  },
  toSDK(message: VersionInfo): VersionInfoSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.app_name = message.appName;
    obj.version = message.version;
    obj.git_commit = message.gitCommit;
    obj.build_tags = message.buildTags;
    obj.go_version = message.goVersion;
    if (message.buildDeps) {
      obj.build_deps = message.buildDeps.map(e => e ? Module.toSDK(e) : undefined);
    } else {
      obj.build_deps = [];
    }
    obj.cosmos_sdk_version = message.cosmosSdkVersion;
    return obj;
  },
  fromAmino(object: VersionInfoAmino): VersionInfo {
    const message = createBaseVersionInfo();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.app_name !== undefined && object.app_name !== null) {
      message.appName = object.app_name;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.git_commit !== undefined && object.git_commit !== null) {
      message.gitCommit = object.git_commit;
    }
    if (object.build_tags !== undefined && object.build_tags !== null) {
      message.buildTags = object.build_tags;
    }
    if (object.go_version !== undefined && object.go_version !== null) {
      message.goVersion = object.go_version;
    }
    message.buildDeps = object.build_deps?.map(e => Module.fromAmino(e)) || [];
    if (object.cosmos_sdk_version !== undefined && object.cosmos_sdk_version !== null) {
      message.cosmosSdkVersion = object.cosmos_sdk_version;
    }
    return message;
  },
  toAmino(message: VersionInfo): VersionInfoAmino {
    const obj: any = {};
    obj.name = message.name === "" ? undefined : message.name;
    obj.app_name = message.appName === "" ? undefined : message.appName;
    obj.version = message.version === "" ? undefined : message.version;
    obj.git_commit = message.gitCommit === "" ? undefined : message.gitCommit;
    obj.build_tags = message.buildTags === "" ? undefined : message.buildTags;
    obj.go_version = message.goVersion === "" ? undefined : message.goVersion;
    if (message.buildDeps) {
      obj.build_deps = message.buildDeps.map(e => e ? Module.toAmino(e) : undefined);
    } else {
      obj.build_deps = message.buildDeps;
    }
    obj.cosmos_sdk_version = message.cosmosSdkVersion === "" ? undefined : message.cosmosSdkVersion;
    return obj;
  },
  fromAminoMsg(object: VersionInfoAminoMsg): VersionInfo {
    return VersionInfo.fromAmino(object.value);
  },
  toAminoMsg(message: VersionInfo): VersionInfoAminoMsg {
    return {
      type: "cosmos-sdk/VersionInfo",
      value: VersionInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: VersionInfoProtoMsg): VersionInfo {
    return VersionInfo.decode(message.value);
  },
  toProto(message: VersionInfo): Uint8Array {
    return VersionInfo.encode(message).finish();
  },
  toProtoMsg(message: VersionInfo): VersionInfoProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.VersionInfo",
      value: VersionInfo.encode(message).finish()
    };
  }
};
function createBaseModule(): Module {
  return {
    path: "",
    version: "",
    sum: ""
  };
}
export const Module = {
  typeUrl: "/cosmos.base.tendermint.v1beta1.Module",
  encode(message: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    if (message.sum !== "") {
      writer.uint32(26).string(message.sum);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Module {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        case 3:
          message.sum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Module {
    return {
      path: isSet(object.path) ? String(object.path) : "",
      version: isSet(object.version) ? String(object.version) : "",
      sum: isSet(object.sum) ? String(object.sum) : ""
    };
  },
  toJSON(message: Module): JsonSafe<Module> {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.version !== undefined && (obj.version = message.version);
    message.sum !== undefined && (obj.sum = message.sum);
    return obj;
  },
  fromPartial(object: DeepPartial<Module>): Module {
    const message = createBaseModule();
    message.path = object.path ?? "";
    message.version = object.version ?? "";
    message.sum = object.sum ?? "";
    return message;
  },
  fromSDK(object: ModuleSDKType): Module {
    return {
      path: object?.path,
      version: object?.version,
      sum: object?.sum
    };
  },
  fromSDKJSON(object: any): ModuleSDKType {
    return {
      path: isSet(object.path) ? String(object.path) : "",
      version: isSet(object.version) ? String(object.version) : "",
      sum: isSet(object.sum) ? String(object.sum) : ""
    };
  },
  toSDK(message: Module): ModuleSDKType {
    const obj: any = {};
    obj.path = message.path;
    obj.version = message.version;
    obj.sum = message.sum;
    return obj;
  },
  fromAmino(object: ModuleAmino): Module {
    const message = createBaseModule();
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.sum !== undefined && object.sum !== null) {
      message.sum = object.sum;
    }
    return message;
  },
  toAmino(message: Module): ModuleAmino {
    const obj: any = {};
    obj.path = message.path === "" ? undefined : message.path;
    obj.version = message.version === "" ? undefined : message.version;
    obj.sum = message.sum === "" ? undefined : message.sum;
    return obj;
  },
  fromAminoMsg(object: ModuleAminoMsg): Module {
    return Module.fromAmino(object.value);
  },
  toAminoMsg(message: Module): ModuleAminoMsg {
    return {
      type: "cosmos-sdk/Module",
      value: Module.toAmino(message)
    };
  },
  fromProtoMsg(message: ModuleProtoMsg): Module {
    return Module.decode(message.value);
  },
  toProto(message: Module): Uint8Array {
    return Module.encode(message).finish();
  },
  toProtoMsg(message: Module): ModuleProtoMsg {
    return {
      typeUrl: "/cosmos.base.tendermint.v1beta1.Module",
      value: Module.encode(message).finish()
    };
  }
};