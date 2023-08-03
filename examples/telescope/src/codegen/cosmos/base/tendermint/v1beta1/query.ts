import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../query/v1beta1/pagination";
import { Any, AnySDKType } from "../../../../google/protobuf/any";
import { BlockID, BlockIDSDKType } from "../../../../tendermint/types/types";
import { Block, BlockSDKType } from "../../../../tendermint/types/block";
import { NodeInfo, NodeInfoSDKType } from "../../../../tendermint/p2p/types";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
/** GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightRequest {
  height: bigint;
  /** pagination defines an pagination for the request. */
  pagination: PageRequest;
}
/** GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightRequestSDKType {
  height: bigint;
  pagination: PageRequestSDKType;
}
/** GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightResponse {
  blockHeight: bigint;
  validators: Validator[];
  /** pagination defines an pagination for the response. */
  pagination: PageResponse;
}
/** GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightResponseSDKType {
  block_height: bigint;
  validators: ValidatorSDKType[];
  pagination: PageResponseSDKType;
}
/** GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetRequest {
  /** pagination defines an pagination for the request. */
  pagination: PageRequest;
}
/** GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetRequestSDKType {
  pagination: PageRequestSDKType;
}
/** GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetResponse {
  blockHeight: bigint;
  validators: Validator[];
  /** pagination defines an pagination for the response. */
  pagination: PageResponse;
}
/** GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetResponseSDKType {
  block_height: bigint;
  validators: ValidatorSDKType[];
  pagination: PageResponseSDKType;
}
/** Validator is the type for the validator-set. */
export interface Validator {
  address: string;
  pubKey: Any;
  votingPower: bigint;
  proposerPriority: bigint;
}
/** Validator is the type for the validator-set. */
export interface ValidatorSDKType {
  address: string;
  pub_key: AnySDKType;
  voting_power: bigint;
  proposer_priority: bigint;
}
/** GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightRequest {
  height: bigint;
}
/** GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightRequestSDKType {
  height: bigint;
}
/** GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightResponse {
  blockId: BlockID;
  block: Block;
}
/** GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightResponseSDKType {
  block_id: BlockIDSDKType;
  block: BlockSDKType;
}
/** GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockRequest {}
/** GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockRequestSDKType {}
/** GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockResponse {
  blockId: BlockID;
  block: Block;
}
/** GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockResponseSDKType {
  block_id: BlockIDSDKType;
  block: BlockSDKType;
}
/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */
export interface GetSyncingRequest {}
/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */
export interface GetSyncingRequestSDKType {}
/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */
export interface GetSyncingResponse {
  syncing: boolean;
}
/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */
export interface GetSyncingResponseSDKType {
  syncing: boolean;
}
/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoRequest {}
/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoRequestSDKType {}
/** GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoResponse {
  nodeInfo: NodeInfo;
  applicationVersion: VersionInfo;
}
/** GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoResponseSDKType {
  node_info: NodeInfoSDKType;
  application_version: VersionInfoSDKType;
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
/** Module is the type for VersionInfo */
export interface ModuleSDKType {
  path: string;
  version: string;
  sum: string;
}
function createBaseGetValidatorSetByHeightRequest(): GetValidatorSetByHeightRequest {
  return {
    height: BigInt(0),
    pagination: PageRequest.fromPartial({})
  };
}
export const GetValidatorSetByHeightRequest = {
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
  toJSON(message: GetValidatorSetByHeightRequest): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GetValidatorSetByHeightRequest>): GetValidatorSetByHeightRequest {
    const message = createBaseGetValidatorSetByHeightRequest();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseGetValidatorSetByHeightResponse(): GetValidatorSetByHeightResponse {
  return {
    blockHeight: BigInt(0),
    validators: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const GetValidatorSetByHeightResponse = {
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
  toJSON(message: GetValidatorSetByHeightResponse): unknown {
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
  fromPartial(object: Partial<GetValidatorSetByHeightResponse>): GetValidatorSetByHeightResponse {
    const message = createBaseGetValidatorSetByHeightResponse();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseGetLatestValidatorSetRequest(): GetLatestValidatorSetRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const GetLatestValidatorSetRequest = {
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
  toJSON(message: GetLatestValidatorSetRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GetLatestValidatorSetRequest>): GetLatestValidatorSetRequest {
    const message = createBaseGetLatestValidatorSetRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseGetLatestValidatorSetResponse(): GetLatestValidatorSetResponse {
  return {
    blockHeight: BigInt(0),
    validators: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const GetLatestValidatorSetResponse = {
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
  toJSON(message: GetLatestValidatorSetResponse): unknown {
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
  fromPartial(object: Partial<GetLatestValidatorSetResponse>): GetLatestValidatorSetResponse {
    const message = createBaseGetLatestValidatorSetResponse();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? BigInt(object.blockHeight.toString()) : BigInt(0);
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  }
};
function createBaseValidator(): Validator {
  return {
    address: "",
    pubKey: Any.fromPartial({}),
    votingPower: BigInt(0),
    proposerPriority: BigInt(0)
  };
}
export const Validator = {
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
  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? Any.toJSON(message.pubKey) : undefined);
    message.votingPower !== undefined && (obj.votingPower = (message.votingPower || BigInt(0)).toString());
    message.proposerPriority !== undefined && (obj.proposerPriority = (message.proposerPriority || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<Validator>): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? "";
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? Any.fromPartial(object.pubKey) : undefined;
    message.votingPower = object.votingPower !== undefined && object.votingPower !== null ? BigInt(object.votingPower.toString()) : BigInt(0);
    message.proposerPriority = object.proposerPriority !== undefined && object.proposerPriority !== null ? BigInt(object.proposerPriority.toString()) : BigInt(0);
    return message;
  }
};
function createBaseGetBlockByHeightRequest(): GetBlockByHeightRequest {
  return {
    height: BigInt(0)
  };
}
export const GetBlockByHeightRequest = {
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
  toJSON(message: GetBlockByHeightRequest): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<GetBlockByHeightRequest>): GetBlockByHeightRequest {
    const message = createBaseGetBlockByHeightRequest();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  }
};
function createBaseGetBlockByHeightResponse(): GetBlockByHeightResponse {
  return {
    blockId: BlockID.fromPartial({}),
    block: Block.fromPartial({})
  };
}
export const GetBlockByHeightResponse = {
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
  toJSON(message: GetBlockByHeightResponse): unknown {
    const obj: any = {};
    message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.block !== undefined && (obj.block = message.block ? Block.toJSON(message.block) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GetBlockByHeightResponse>): GetBlockByHeightResponse {
    const message = createBaseGetBlockByHeightResponse();
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
    return message;
  }
};
function createBaseGetLatestBlockRequest(): GetLatestBlockRequest {
  return {};
}
export const GetLatestBlockRequest = {
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
  toJSON(_: GetLatestBlockRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<GetLatestBlockRequest>): GetLatestBlockRequest {
    const message = createBaseGetLatestBlockRequest();
    return message;
  }
};
function createBaseGetLatestBlockResponse(): GetLatestBlockResponse {
  return {
    blockId: BlockID.fromPartial({}),
    block: Block.fromPartial({})
  };
}
export const GetLatestBlockResponse = {
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
  toJSON(message: GetLatestBlockResponse): unknown {
    const obj: any = {};
    message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.block !== undefined && (obj.block = message.block ? Block.toJSON(message.block) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GetLatestBlockResponse>): GetLatestBlockResponse {
    const message = createBaseGetLatestBlockResponse();
    message.blockId = object.blockId !== undefined && object.blockId !== null ? BlockID.fromPartial(object.blockId) : undefined;
    message.block = object.block !== undefined && object.block !== null ? Block.fromPartial(object.block) : undefined;
    return message;
  }
};
function createBaseGetSyncingRequest(): GetSyncingRequest {
  return {};
}
export const GetSyncingRequest = {
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
  toJSON(_: GetSyncingRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<GetSyncingRequest>): GetSyncingRequest {
    const message = createBaseGetSyncingRequest();
    return message;
  }
};
function createBaseGetSyncingResponse(): GetSyncingResponse {
  return {
    syncing: false
  };
}
export const GetSyncingResponse = {
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
  toJSON(message: GetSyncingResponse): unknown {
    const obj: any = {};
    message.syncing !== undefined && (obj.syncing = message.syncing);
    return obj;
  },
  fromPartial(object: Partial<GetSyncingResponse>): GetSyncingResponse {
    const message = createBaseGetSyncingResponse();
    message.syncing = object.syncing ?? false;
    return message;
  }
};
function createBaseGetNodeInfoRequest(): GetNodeInfoRequest {
  return {};
}
export const GetNodeInfoRequest = {
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
  toJSON(_: GetNodeInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<GetNodeInfoRequest>): GetNodeInfoRequest {
    const message = createBaseGetNodeInfoRequest();
    return message;
  }
};
function createBaseGetNodeInfoResponse(): GetNodeInfoResponse {
  return {
    nodeInfo: NodeInfo.fromPartial({}),
    applicationVersion: VersionInfo.fromPartial({})
  };
}
export const GetNodeInfoResponse = {
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
  toJSON(message: GetNodeInfoResponse): unknown {
    const obj: any = {};
    message.nodeInfo !== undefined && (obj.nodeInfo = message.nodeInfo ? NodeInfo.toJSON(message.nodeInfo) : undefined);
    message.applicationVersion !== undefined && (obj.applicationVersion = message.applicationVersion ? VersionInfo.toJSON(message.applicationVersion) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GetNodeInfoResponse>): GetNodeInfoResponse {
    const message = createBaseGetNodeInfoResponse();
    message.nodeInfo = object.nodeInfo !== undefined && object.nodeInfo !== null ? NodeInfo.fromPartial(object.nodeInfo) : undefined;
    message.applicationVersion = object.applicationVersion !== undefined && object.applicationVersion !== null ? VersionInfo.fromPartial(object.applicationVersion) : undefined;
    return message;
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
  toJSON(message: VersionInfo): unknown {
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
  fromPartial(object: Partial<VersionInfo>): VersionInfo {
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
  toJSON(message: Module): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    message.version !== undefined && (obj.version = message.version);
    message.sum !== undefined && (obj.sum = message.sum);
    return obj;
  },
  fromPartial(object: Partial<Module>): Module {
    const message = createBaseModule();
    message.path = object.path ?? "";
    message.version = object.version ?? "";
    message.sum = object.sum ?? "";
    return message;
  }
};