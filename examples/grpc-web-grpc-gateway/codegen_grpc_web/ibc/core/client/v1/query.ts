import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Height, HeightAmino, HeightSDKType, IdentifiedClientState, IdentifiedClientStateAmino, IdentifiedClientStateSDKType, ConsensusStateWithHeight, ConsensusStateWithHeightAmino, ConsensusStateWithHeightSDKType, Params, ParamsAmino, ParamsSDKType } from "./client";
import { Long, isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "ibc.core.client.v1";
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 */
export interface QueryClientStateRequest {
  /** client state unique identifier */
  clientId: string;
}
export interface QueryClientStateRequestProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryClientStateRequest";
  value: Uint8Array;
}
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 */
export interface QueryClientStateRequestAmino {
  /** client state unique identifier */
  client_id: string;
}
export interface QueryClientStateRequestAminoMsg {
  type: "cosmos-sdk/QueryClientStateRequest";
  value: QueryClientStateRequestAmino;
}
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 */
export interface QueryClientStateRequestSDKType {
  client_id: string;
}
/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryClientStateResponse {
  /** client state associated with the request identifier */
  clientState?: Any;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight?: Height;
}
export interface QueryClientStateResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryClientStateResponse";
  value: Uint8Array;
}
/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryClientStateResponseAmino {
  /** client state associated with the request identifier */
  client_state?: AnyAmino;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height?: HeightAmino;
}
export interface QueryClientStateResponseAminoMsg {
  type: "cosmos-sdk/QueryClientStateResponse";
  value: QueryClientStateResponseAmino;
}
/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryClientStateResponseSDKType {
  client_state?: AnySDKType;
  proof: Uint8Array;
  proof_height?: HeightSDKType;
}
/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 */
export interface QueryClientStatesRequest {
  /** pagination request */
  pagination?: PageRequest;
}
export interface QueryClientStatesRequestProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryClientStatesRequest";
  value: Uint8Array;
}
/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 */
export interface QueryClientStatesRequestAmino {
  /** pagination request */
  pagination?: PageRequestAmino;
}
export interface QueryClientStatesRequestAminoMsg {
  type: "cosmos-sdk/QueryClientStatesRequest";
  value: QueryClientStatesRequestAmino;
}
/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 */
export interface QueryClientStatesRequestSDKType {
  pagination?: PageRequestSDKType;
}
/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 */
export interface QueryClientStatesResponse {
  /** list of stored ClientStates of the chain. */
  clientStates: IdentifiedClientState[];
  /** pagination response */
  pagination?: PageResponse;
}
export interface QueryClientStatesResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryClientStatesResponse";
  value: Uint8Array;
}
/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 */
export interface QueryClientStatesResponseAmino {
  /** list of stored ClientStates of the chain. */
  client_states: IdentifiedClientStateAmino[];
  /** pagination response */
  pagination?: PageResponseAmino;
}
export interface QueryClientStatesResponseAminoMsg {
  type: "cosmos-sdk/QueryClientStatesResponse";
  value: QueryClientStatesResponseAmino;
}
/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 */
export interface QueryClientStatesResponseSDKType {
  client_states: IdentifiedClientStateSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 */
export interface QueryConsensusStateRequest {
  /** client identifier */
  clientId: string;
  /** consensus state revision number */
  revisionNumber: Long;
  /** consensus state revision height */
  revisionHeight: Long;
  /**
   * latest_height overrrides the height field and queries the latest stored
   * ConsensusState
   */
  latestHeight: boolean;
}
export interface QueryConsensusStateRequestProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStateRequest";
  value: Uint8Array;
}
/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 */
export interface QueryConsensusStateRequestAmino {
  /** client identifier */
  client_id: string;
  /** consensus state revision number */
  revision_number: string;
  /** consensus state revision height */
  revision_height: string;
  /**
   * latest_height overrrides the height field and queries the latest stored
   * ConsensusState
   */
  latest_height: boolean;
}
export interface QueryConsensusStateRequestAminoMsg {
  type: "cosmos-sdk/QueryConsensusStateRequest";
  value: QueryConsensusStateRequestAmino;
}
/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 */
export interface QueryConsensusStateRequestSDKType {
  client_id: string;
  revision_number: Long;
  revision_height: Long;
  latest_height: boolean;
}
/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 */
export interface QueryConsensusStateResponse {
  /** consensus state associated with the client identifier at the given height */
  consensusState?: Any;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight?: Height;
}
export interface QueryConsensusStateResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStateResponse";
  value: Uint8Array;
}
/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 */
export interface QueryConsensusStateResponseAmino {
  /** consensus state associated with the client identifier at the given height */
  consensus_state?: AnyAmino;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height?: HeightAmino;
}
export interface QueryConsensusStateResponseAminoMsg {
  type: "cosmos-sdk/QueryConsensusStateResponse";
  value: QueryConsensusStateResponseAmino;
}
/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 */
export interface QueryConsensusStateResponseSDKType {
  consensus_state?: AnySDKType;
  proof: Uint8Array;
  proof_height?: HeightSDKType;
}
/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 */
export interface QueryConsensusStatesRequest {
  /** client identifier */
  clientId: string;
  /** pagination request */
  pagination?: PageRequest;
}
export interface QueryConsensusStatesRequestProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStatesRequest";
  value: Uint8Array;
}
/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 */
export interface QueryConsensusStatesRequestAmino {
  /** client identifier */
  client_id: string;
  /** pagination request */
  pagination?: PageRequestAmino;
}
export interface QueryConsensusStatesRequestAminoMsg {
  type: "cosmos-sdk/QueryConsensusStatesRequest";
  value: QueryConsensusStatesRequestAmino;
}
/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 */
export interface QueryConsensusStatesRequestSDKType {
  client_id: string;
  pagination?: PageRequestSDKType;
}
/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 */
export interface QueryConsensusStatesResponse {
  /** consensus states associated with the identifier */
  consensusStates: ConsensusStateWithHeight[];
  /** pagination response */
  pagination?: PageResponse;
}
export interface QueryConsensusStatesResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStatesResponse";
  value: Uint8Array;
}
/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 */
export interface QueryConsensusStatesResponseAmino {
  /** consensus states associated with the identifier */
  consensus_states: ConsensusStateWithHeightAmino[];
  /** pagination response */
  pagination?: PageResponseAmino;
}
export interface QueryConsensusStatesResponseAminoMsg {
  type: "cosmos-sdk/QueryConsensusStatesResponse";
  value: QueryConsensusStatesResponseAmino;
}
/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 */
export interface QueryConsensusStatesResponseSDKType {
  consensus_states: ConsensusStateWithHeightSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * QueryClientStatusRequest is the request type for the Query/ClientStatus RPC
 * method
 */
export interface QueryClientStatusRequest {
  /** client unique identifier */
  clientId: string;
}
export interface QueryClientStatusRequestProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryClientStatusRequest";
  value: Uint8Array;
}
/**
 * QueryClientStatusRequest is the request type for the Query/ClientStatus RPC
 * method
 */
export interface QueryClientStatusRequestAmino {
  /** client unique identifier */
  client_id: string;
}
export interface QueryClientStatusRequestAminoMsg {
  type: "cosmos-sdk/QueryClientStatusRequest";
  value: QueryClientStatusRequestAmino;
}
/**
 * QueryClientStatusRequest is the request type for the Query/ClientStatus RPC
 * method
 */
export interface QueryClientStatusRequestSDKType {
  client_id: string;
}
/**
 * QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
 * method. It returns the current status of the IBC client.
 */
export interface QueryClientStatusResponse {
  status: string;
}
export interface QueryClientStatusResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryClientStatusResponse";
  value: Uint8Array;
}
/**
 * QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
 * method. It returns the current status of the IBC client.
 */
export interface QueryClientStatusResponseAmino {
  status: string;
}
export interface QueryClientStatusResponseAminoMsg {
  type: "cosmos-sdk/QueryClientStatusResponse";
  value: QueryClientStatusResponseAmino;
}
/**
 * QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
 * method. It returns the current status of the IBC client.
 */
export interface QueryClientStatusResponseSDKType {
  status: string;
}
/**
 * QueryClientParamsRequest is the request type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsRequest {}
export interface QueryClientParamsRequestProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryClientParamsRequest";
  value: Uint8Array;
}
/**
 * QueryClientParamsRequest is the request type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsRequestAmino {}
export interface QueryClientParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryClientParamsRequest";
  value: QueryClientParamsRequestAmino;
}
/**
 * QueryClientParamsRequest is the request type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsRequestSDKType {}
/**
 * QueryClientParamsResponse is the response type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params;
}
export interface QueryClientParamsResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryClientParamsResponse";
  value: Uint8Array;
}
/**
 * QueryClientParamsResponse is the response type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryClientParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryClientParamsResponse";
  value: QueryClientParamsResponseAmino;
}
/**
 * QueryClientParamsResponse is the response type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsResponseSDKType {
  params?: ParamsSDKType;
}
/**
 * QueryUpgradedClientStateRequest is the request type for the
 * Query/UpgradedClientState RPC method
 */
export interface QueryUpgradedClientStateRequest {}
export interface QueryUpgradedClientStateRequestProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateRequest";
  value: Uint8Array;
}
/**
 * QueryUpgradedClientStateRequest is the request type for the
 * Query/UpgradedClientState RPC method
 */
export interface QueryUpgradedClientStateRequestAmino {}
export interface QueryUpgradedClientStateRequestAminoMsg {
  type: "cosmos-sdk/QueryUpgradedClientStateRequest";
  value: QueryUpgradedClientStateRequestAmino;
}
/**
 * QueryUpgradedClientStateRequest is the request type for the
 * Query/UpgradedClientState RPC method
 */
export interface QueryUpgradedClientStateRequestSDKType {}
/**
 * QueryUpgradedClientStateResponse is the response type for the
 * Query/UpgradedClientState RPC method.
 */
export interface QueryUpgradedClientStateResponse {
  /** client state associated with the request identifier */
  upgradedClientState?: Any;
}
export interface QueryUpgradedClientStateResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateResponse";
  value: Uint8Array;
}
/**
 * QueryUpgradedClientStateResponse is the response type for the
 * Query/UpgradedClientState RPC method.
 */
export interface QueryUpgradedClientStateResponseAmino {
  /** client state associated with the request identifier */
  upgraded_client_state?: AnyAmino;
}
export interface QueryUpgradedClientStateResponseAminoMsg {
  type: "cosmos-sdk/QueryUpgradedClientStateResponse";
  value: QueryUpgradedClientStateResponseAmino;
}
/**
 * QueryUpgradedClientStateResponse is the response type for the
 * Query/UpgradedClientState RPC method.
 */
export interface QueryUpgradedClientStateResponseSDKType {
  upgraded_client_state?: AnySDKType;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the
 * Query/UpgradedConsensusState RPC method
 */
export interface QueryUpgradedConsensusStateRequest {}
export interface QueryUpgradedConsensusStateRequestProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateRequest";
  value: Uint8Array;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the
 * Query/UpgradedConsensusState RPC method
 */
export interface QueryUpgradedConsensusStateRequestAmino {}
export interface QueryUpgradedConsensusStateRequestAminoMsg {
  type: "cosmos-sdk/QueryUpgradedConsensusStateRequest";
  value: QueryUpgradedConsensusStateRequestAmino;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the
 * Query/UpgradedConsensusState RPC method
 */
export interface QueryUpgradedConsensusStateRequestSDKType {}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the
 * Query/UpgradedConsensusState RPC method.
 */
export interface QueryUpgradedConsensusStateResponse {
  /** Consensus state associated with the request identifier */
  upgradedConsensusState?: Any;
}
export interface QueryUpgradedConsensusStateResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateResponse";
  value: Uint8Array;
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the
 * Query/UpgradedConsensusState RPC method.
 */
export interface QueryUpgradedConsensusStateResponseAmino {
  /** Consensus state associated with the request identifier */
  upgraded_consensus_state?: AnyAmino;
}
export interface QueryUpgradedConsensusStateResponseAminoMsg {
  type: "cosmos-sdk/QueryUpgradedConsensusStateResponse";
  value: QueryUpgradedConsensusStateResponseAmino;
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the
 * Query/UpgradedConsensusState RPC method.
 */
export interface QueryUpgradedConsensusStateResponseSDKType {
  upgraded_consensus_state?: AnySDKType;
}
function createBaseQueryClientStateRequest(): QueryClientStateRequest {
  return {
    clientId: ""
  };
}
export const QueryClientStateRequest = {
  typeUrl: "/ibc.core.client.v1.QueryClientStateRequest",
  aminoType: "cosmos-sdk/QueryClientStateRequest",
  encode(message: QueryClientStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClientStateRequest {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : ""
    };
  },
  toJSON(message: QueryClientStateRequest): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClientStateRequest>): QueryClientStateRequest {
    const message = createBaseQueryClientStateRequest();
    message.clientId = object.clientId ?? "";
    return message;
  },
  fromSDK(object: QueryClientStateRequestSDKType): QueryClientStateRequest {
    return {
      clientId: object?.client_id
    };
  },
  toSDK(message: QueryClientStateRequest): QueryClientStateRequestSDKType {
    const obj: any = {};
    obj.client_id = message.clientId;
    return obj;
  },
  fromAmino(object: QueryClientStateRequestAmino): QueryClientStateRequest {
    return {
      clientId: object.client_id
    };
  },
  toAmino(message: QueryClientStateRequest): QueryClientStateRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId;
    return obj;
  },
  fromAminoMsg(object: QueryClientStateRequestAminoMsg): QueryClientStateRequest {
    return QueryClientStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClientStateRequest): QueryClientStateRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryClientStateRequest",
      value: QueryClientStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClientStateRequestProtoMsg): QueryClientStateRequest {
    return QueryClientStateRequest.decode(message.value);
  },
  toProto(message: QueryClientStateRequest): Uint8Array {
    return QueryClientStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClientStateRequest): QueryClientStateRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryClientStateRequest",
      value: QueryClientStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClientStateResponse(): QueryClientStateResponse {
  return {
    clientState: undefined,
    proof: new Uint8Array(),
    proofHeight: undefined
  };
}
export const QueryClientStateResponse = {
  typeUrl: "/ibc.core.client.v1.QueryClientStateResponse",
  aminoType: "cosmos-sdk/QueryClientStateResponse",
  encode(message: QueryClientStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClientStateResponse {
    return {
      clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined,
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined
    };
  },
  toJSON(message: QueryClientStateResponse): unknown {
    const obj: any = {};
    message.clientState !== undefined && (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClientStateResponse>): QueryClientStateResponse {
    const message = createBaseQueryClientStateResponse();
    message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    return message;
  },
  fromSDK(object: QueryClientStateResponseSDKType): QueryClientStateResponse {
    return {
      clientState: object.client_state ? Any.fromSDK(object.client_state) : undefined,
      proof: object?.proof,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined
    };
  },
  toSDK(message: QueryClientStateResponse): QueryClientStateResponseSDKType {
    const obj: any = {};
    message.clientState !== undefined && (obj.client_state = message.clientState ? Any.toSDK(message.clientState) : undefined);
    obj.proof = message.proof;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    return obj;
  },
  fromAmino(object: QueryClientStateResponseAmino): QueryClientStateResponse {
    return {
      clientState: object?.client_state ? Any.fromAmino(object.client_state) : undefined,
      proof: object.proof,
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
    };
  },
  toAmino(message: QueryClientStateResponse): QueryClientStateResponseAmino {
    const obj: any = {};
    obj.client_state = message.clientState ? Any.toAmino(message.clientState) : undefined;
    obj.proof = message.proof;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    return obj;
  },
  fromAminoMsg(object: QueryClientStateResponseAminoMsg): QueryClientStateResponse {
    return QueryClientStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClientStateResponse): QueryClientStateResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryClientStateResponse",
      value: QueryClientStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClientStateResponseProtoMsg): QueryClientStateResponse {
    return QueryClientStateResponse.decode(message.value);
  },
  toProto(message: QueryClientStateResponse): Uint8Array {
    return QueryClientStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClientStateResponse): QueryClientStateResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryClientStateResponse",
      value: QueryClientStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClientStatesRequest(): QueryClientStatesRequest {
  return {
    pagination: undefined
  };
}
export const QueryClientStatesRequest = {
  typeUrl: "/ibc.core.client.v1.QueryClientStatesRequest",
  aminoType: "cosmos-sdk/QueryClientStatesRequest",
  encode(message: QueryClientStatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatesRequest();
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
  fromJSON(object: any): QueryClientStatesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryClientStatesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClientStatesRequest>): QueryClientStatesRequest {
    const message = createBaseQueryClientStatesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryClientStatesRequestSDKType): QueryClientStatesRequest {
    return {
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryClientStatesRequest): QueryClientStatesRequestSDKType {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryClientStatesRequestAmino): QueryClientStatesRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryClientStatesRequest): QueryClientStatesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClientStatesRequestAminoMsg): QueryClientStatesRequest {
    return QueryClientStatesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClientStatesRequest): QueryClientStatesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryClientStatesRequest",
      value: QueryClientStatesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClientStatesRequestProtoMsg): QueryClientStatesRequest {
    return QueryClientStatesRequest.decode(message.value);
  },
  toProto(message: QueryClientStatesRequest): Uint8Array {
    return QueryClientStatesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClientStatesRequest): QueryClientStatesRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryClientStatesRequest",
      value: QueryClientStatesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClientStatesResponse(): QueryClientStatesResponse {
  return {
    clientStates: [],
    pagination: undefined
  };
}
export const QueryClientStatesResponse = {
  typeUrl: "/ibc.core.client.v1.QueryClientStatesResponse",
  aminoType: "cosmos-sdk/QueryClientStatesResponse",
  encode(message: QueryClientStatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.clientStates) {
      IdentifiedClientState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientStates.push(IdentifiedClientState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClientStatesResponse {
    return {
      clientStates: Array.isArray(object?.clientStates) ? object.clientStates.map((e: any) => IdentifiedClientState.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryClientStatesResponse): unknown {
    const obj: any = {};
    if (message.clientStates) {
      obj.clientStates = message.clientStates.map(e => e ? IdentifiedClientState.toJSON(e) : undefined);
    } else {
      obj.clientStates = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClientStatesResponse>): QueryClientStatesResponse {
    const message = createBaseQueryClientStatesResponse();
    message.clientStates = object.clientStates?.map(e => IdentifiedClientState.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryClientStatesResponseSDKType): QueryClientStatesResponse {
    return {
      clientStates: Array.isArray(object?.client_states) ? object.client_states.map((e: any) => IdentifiedClientState.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryClientStatesResponse): QueryClientStatesResponseSDKType {
    const obj: any = {};
    if (message.clientStates) {
      obj.client_states = message.clientStates.map(e => e ? IdentifiedClientState.toSDK(e) : undefined);
    } else {
      obj.client_states = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryClientStatesResponseAmino): QueryClientStatesResponse {
    return {
      clientStates: Array.isArray(object?.client_states) ? object.client_states.map((e: any) => IdentifiedClientState.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryClientStatesResponse): QueryClientStatesResponseAmino {
    const obj: any = {};
    if (message.clientStates) {
      obj.client_states = message.clientStates.map(e => e ? IdentifiedClientState.toAmino(e) : undefined);
    } else {
      obj.client_states = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClientStatesResponseAminoMsg): QueryClientStatesResponse {
    return QueryClientStatesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClientStatesResponse): QueryClientStatesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryClientStatesResponse",
      value: QueryClientStatesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClientStatesResponseProtoMsg): QueryClientStatesResponse {
    return QueryClientStatesResponse.decode(message.value);
  },
  toProto(message: QueryClientStatesResponse): Uint8Array {
    return QueryClientStatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClientStatesResponse): QueryClientStatesResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryClientStatesResponse",
      value: QueryClientStatesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryConsensusStateRequest(): QueryConsensusStateRequest {
  return {
    clientId: "",
    revisionNumber: Long.UZERO,
    revisionHeight: Long.UZERO,
    latestHeight: false
  };
}
export const QueryConsensusStateRequest = {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStateRequest",
  aminoType: "cosmos-sdk/QueryConsensusStateRequest",
  encode(message: QueryConsensusStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (!message.revisionNumber.isZero()) {
      writer.uint32(16).uint64(message.revisionNumber);
    }
    if (!message.revisionHeight.isZero()) {
      writer.uint32(24).uint64(message.revisionHeight);
    }
    if (message.latestHeight === true) {
      writer.uint32(32).bool(message.latestHeight);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.revisionNumber = (reader.uint64() as Long);
          break;
        case 3:
          message.revisionHeight = (reader.uint64() as Long);
          break;
        case 4:
          message.latestHeight = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsensusStateRequest {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      revisionNumber: isSet(object.revisionNumber) ? Long.fromValue(object.revisionNumber) : Long.UZERO,
      revisionHeight: isSet(object.revisionHeight) ? Long.fromValue(object.revisionHeight) : Long.UZERO,
      latestHeight: isSet(object.latestHeight) ? Boolean(object.latestHeight) : false
    };
  },
  toJSON(message: QueryConsensusStateRequest): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.revisionNumber !== undefined && (obj.revisionNumber = (message.revisionNumber || Long.UZERO).toString());
    message.revisionHeight !== undefined && (obj.revisionHeight = (message.revisionHeight || Long.UZERO).toString());
    message.latestHeight !== undefined && (obj.latestHeight = message.latestHeight);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryConsensusStateRequest>): QueryConsensusStateRequest {
    const message = createBaseQueryConsensusStateRequest();
    message.clientId = object.clientId ?? "";
    message.revisionNumber = object.revisionNumber !== undefined && object.revisionNumber !== null ? Long.fromValue(object.revisionNumber) : Long.UZERO;
    message.revisionHeight = object.revisionHeight !== undefined && object.revisionHeight !== null ? Long.fromValue(object.revisionHeight) : Long.UZERO;
    message.latestHeight = object.latestHeight ?? false;
    return message;
  },
  fromSDK(object: QueryConsensusStateRequestSDKType): QueryConsensusStateRequest {
    return {
      clientId: object?.client_id,
      revisionNumber: object?.revision_number,
      revisionHeight: object?.revision_height,
      latestHeight: object?.latest_height
    };
  },
  toSDK(message: QueryConsensusStateRequest): QueryConsensusStateRequestSDKType {
    const obj: any = {};
    obj.client_id = message.clientId;
    obj.revision_number = message.revisionNumber;
    obj.revision_height = message.revisionHeight;
    obj.latest_height = message.latestHeight;
    return obj;
  },
  fromAmino(object: QueryConsensusStateRequestAmino): QueryConsensusStateRequest {
    return {
      clientId: object.client_id,
      revisionNumber: Long.fromString(object.revision_number),
      revisionHeight: Long.fromString(object.revision_height),
      latestHeight: object.latest_height
    };
  },
  toAmino(message: QueryConsensusStateRequest): QueryConsensusStateRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId;
    obj.revision_number = message.revisionNumber ? message.revisionNumber.toString() : undefined;
    obj.revision_height = message.revisionHeight ? message.revisionHeight.toString() : undefined;
    obj.latest_height = message.latestHeight;
    return obj;
  },
  fromAminoMsg(object: QueryConsensusStateRequestAminoMsg): QueryConsensusStateRequest {
    return QueryConsensusStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConsensusStateRequest): QueryConsensusStateRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryConsensusStateRequest",
      value: QueryConsensusStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConsensusStateRequestProtoMsg): QueryConsensusStateRequest {
    return QueryConsensusStateRequest.decode(message.value);
  },
  toProto(message: QueryConsensusStateRequest): Uint8Array {
    return QueryConsensusStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConsensusStateRequest): QueryConsensusStateRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryConsensusStateRequest",
      value: QueryConsensusStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryConsensusStateResponse(): QueryConsensusStateResponse {
  return {
    consensusState: undefined,
    proof: new Uint8Array(),
    proofHeight: undefined
  };
}
export const QueryConsensusStateResponse = {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStateResponse",
  aminoType: "cosmos-sdk/QueryConsensusStateResponse",
  encode(message: QueryConsensusStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsensusStateResponse {
    return {
      consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : undefined,
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proofHeight: isSet(object.proofHeight) ? Height.fromJSON(object.proofHeight) : undefined
    };
  },
  toJSON(message: QueryConsensusStateResponse): unknown {
    const obj: any = {};
    message.consensusState !== undefined && (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : undefined);
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryConsensusStateResponse>): QueryConsensusStateResponse {
    const message = createBaseQueryConsensusStateResponse();
    message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? Any.fromPartial(object.consensusState) : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proofHeight = object.proofHeight !== undefined && object.proofHeight !== null ? Height.fromPartial(object.proofHeight) : undefined;
    return message;
  },
  fromSDK(object: QueryConsensusStateResponseSDKType): QueryConsensusStateResponse {
    return {
      consensusState: object.consensus_state ? Any.fromSDK(object.consensus_state) : undefined,
      proof: object?.proof,
      proofHeight: object.proof_height ? Height.fromSDK(object.proof_height) : undefined
    };
  },
  toSDK(message: QueryConsensusStateResponse): QueryConsensusStateResponseSDKType {
    const obj: any = {};
    message.consensusState !== undefined && (obj.consensus_state = message.consensusState ? Any.toSDK(message.consensusState) : undefined);
    obj.proof = message.proof;
    message.proofHeight !== undefined && (obj.proof_height = message.proofHeight ? Height.toSDK(message.proofHeight) : undefined);
    return obj;
  },
  fromAmino(object: QueryConsensusStateResponseAmino): QueryConsensusStateResponse {
    return {
      consensusState: object?.consensus_state ? Any.fromAmino(object.consensus_state) : undefined,
      proof: object.proof,
      proofHeight: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
    };
  },
  toAmino(message: QueryConsensusStateResponse): QueryConsensusStateResponseAmino {
    const obj: any = {};
    obj.consensus_state = message.consensusState ? Any.toAmino(message.consensusState) : undefined;
    obj.proof = message.proof;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    return obj;
  },
  fromAminoMsg(object: QueryConsensusStateResponseAminoMsg): QueryConsensusStateResponse {
    return QueryConsensusStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConsensusStateResponse): QueryConsensusStateResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryConsensusStateResponse",
      value: QueryConsensusStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConsensusStateResponseProtoMsg): QueryConsensusStateResponse {
    return QueryConsensusStateResponse.decode(message.value);
  },
  toProto(message: QueryConsensusStateResponse): Uint8Array {
    return QueryConsensusStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConsensusStateResponse): QueryConsensusStateResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryConsensusStateResponse",
      value: QueryConsensusStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryConsensusStatesRequest(): QueryConsensusStatesRequest {
  return {
    clientId: "",
    pagination: undefined
  };
}
export const QueryConsensusStatesRequest = {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStatesRequest",
  aminoType: "cosmos-sdk/QueryConsensusStatesRequest",
  encode(message: QueryConsensusStatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
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
  fromJSON(object: any): QueryConsensusStatesRequest {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryConsensusStatesRequest): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryConsensusStatesRequest>): QueryConsensusStatesRequest {
    const message = createBaseQueryConsensusStatesRequest();
    message.clientId = object.clientId ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryConsensusStatesRequestSDKType): QueryConsensusStatesRequest {
    return {
      clientId: object?.client_id,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryConsensusStatesRequest): QueryConsensusStatesRequestSDKType {
    const obj: any = {};
    obj.client_id = message.clientId;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryConsensusStatesRequestAmino): QueryConsensusStatesRequest {
    return {
      clientId: object.client_id,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryConsensusStatesRequest): QueryConsensusStatesRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryConsensusStatesRequestAminoMsg): QueryConsensusStatesRequest {
    return QueryConsensusStatesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConsensusStatesRequest): QueryConsensusStatesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryConsensusStatesRequest",
      value: QueryConsensusStatesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConsensusStatesRequestProtoMsg): QueryConsensusStatesRequest {
    return QueryConsensusStatesRequest.decode(message.value);
  },
  toProto(message: QueryConsensusStatesRequest): Uint8Array {
    return QueryConsensusStatesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConsensusStatesRequest): QueryConsensusStatesRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryConsensusStatesRequest",
      value: QueryConsensusStatesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryConsensusStatesResponse(): QueryConsensusStatesResponse {
  return {
    consensusStates: [],
    pagination: undefined
  };
}
export const QueryConsensusStatesResponse = {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStatesResponse",
  aminoType: "cosmos-sdk/QueryConsensusStatesResponse",
  encode(message: QueryConsensusStatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.consensusStates) {
      ConsensusStateWithHeight.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusStates.push(ConsensusStateWithHeight.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsensusStatesResponse {
    return {
      consensusStates: Array.isArray(object?.consensusStates) ? object.consensusStates.map((e: any) => ConsensusStateWithHeight.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryConsensusStatesResponse): unknown {
    const obj: any = {};
    if (message.consensusStates) {
      obj.consensusStates = message.consensusStates.map(e => e ? ConsensusStateWithHeight.toJSON(e) : undefined);
    } else {
      obj.consensusStates = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryConsensusStatesResponse>): QueryConsensusStatesResponse {
    const message = createBaseQueryConsensusStatesResponse();
    message.consensusStates = object.consensusStates?.map(e => ConsensusStateWithHeight.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromSDK(object: QueryConsensusStatesResponseSDKType): QueryConsensusStatesResponse {
    return {
      consensusStates: Array.isArray(object?.consensus_states) ? object.consensus_states.map((e: any) => ConsensusStateWithHeight.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },
  toSDK(message: QueryConsensusStatesResponse): QueryConsensusStatesResponseSDKType {
    const obj: any = {};
    if (message.consensusStates) {
      obj.consensus_states = message.consensusStates.map(e => e ? ConsensusStateWithHeight.toSDK(e) : undefined);
    } else {
      obj.consensus_states = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  },
  fromAmino(object: QueryConsensusStatesResponseAmino): QueryConsensusStatesResponse {
    return {
      consensusStates: Array.isArray(object?.consensus_states) ? object.consensus_states.map((e: any) => ConsensusStateWithHeight.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryConsensusStatesResponse): QueryConsensusStatesResponseAmino {
    const obj: any = {};
    if (message.consensusStates) {
      obj.consensus_states = message.consensusStates.map(e => e ? ConsensusStateWithHeight.toAmino(e) : undefined);
    } else {
      obj.consensus_states = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryConsensusStatesResponseAminoMsg): QueryConsensusStatesResponse {
    return QueryConsensusStatesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConsensusStatesResponse): QueryConsensusStatesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryConsensusStatesResponse",
      value: QueryConsensusStatesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConsensusStatesResponseProtoMsg): QueryConsensusStatesResponse {
    return QueryConsensusStatesResponse.decode(message.value);
  },
  toProto(message: QueryConsensusStatesResponse): Uint8Array {
    return QueryConsensusStatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConsensusStatesResponse): QueryConsensusStatesResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryConsensusStatesResponse",
      value: QueryConsensusStatesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClientStatusRequest(): QueryClientStatusRequest {
  return {
    clientId: ""
  };
}
export const QueryClientStatusRequest = {
  typeUrl: "/ibc.core.client.v1.QueryClientStatusRequest",
  aminoType: "cosmos-sdk/QueryClientStatusRequest",
  encode(message: QueryClientStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClientStatusRequest {
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : ""
    };
  },
  toJSON(message: QueryClientStatusRequest): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClientStatusRequest>): QueryClientStatusRequest {
    const message = createBaseQueryClientStatusRequest();
    message.clientId = object.clientId ?? "";
    return message;
  },
  fromSDK(object: QueryClientStatusRequestSDKType): QueryClientStatusRequest {
    return {
      clientId: object?.client_id
    };
  },
  toSDK(message: QueryClientStatusRequest): QueryClientStatusRequestSDKType {
    const obj: any = {};
    obj.client_id = message.clientId;
    return obj;
  },
  fromAmino(object: QueryClientStatusRequestAmino): QueryClientStatusRequest {
    return {
      clientId: object.client_id
    };
  },
  toAmino(message: QueryClientStatusRequest): QueryClientStatusRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId;
    return obj;
  },
  fromAminoMsg(object: QueryClientStatusRequestAminoMsg): QueryClientStatusRequest {
    return QueryClientStatusRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClientStatusRequest): QueryClientStatusRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryClientStatusRequest",
      value: QueryClientStatusRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClientStatusRequestProtoMsg): QueryClientStatusRequest {
    return QueryClientStatusRequest.decode(message.value);
  },
  toProto(message: QueryClientStatusRequest): Uint8Array {
    return QueryClientStatusRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClientStatusRequest): QueryClientStatusRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryClientStatusRequest",
      value: QueryClientStatusRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClientStatusResponse(): QueryClientStatusResponse {
  return {
    status: ""
  };
}
export const QueryClientStatusResponse = {
  typeUrl: "/ibc.core.client.v1.QueryClientStatusResponse",
  aminoType: "cosmos-sdk/QueryClientStatusResponse",
  encode(message: QueryClientStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClientStatusResponse {
    return {
      status: isSet(object.status) ? String(object.status) : ""
    };
  },
  toJSON(message: QueryClientStatusResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClientStatusResponse>): QueryClientStatusResponse {
    const message = createBaseQueryClientStatusResponse();
    message.status = object.status ?? "";
    return message;
  },
  fromSDK(object: QueryClientStatusResponseSDKType): QueryClientStatusResponse {
    return {
      status: object?.status
    };
  },
  toSDK(message: QueryClientStatusResponse): QueryClientStatusResponseSDKType {
    const obj: any = {};
    obj.status = message.status;
    return obj;
  },
  fromAmino(object: QueryClientStatusResponseAmino): QueryClientStatusResponse {
    return {
      status: object.status
    };
  },
  toAmino(message: QueryClientStatusResponse): QueryClientStatusResponseAmino {
    const obj: any = {};
    obj.status = message.status;
    return obj;
  },
  fromAminoMsg(object: QueryClientStatusResponseAminoMsg): QueryClientStatusResponse {
    return QueryClientStatusResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClientStatusResponse): QueryClientStatusResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryClientStatusResponse",
      value: QueryClientStatusResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClientStatusResponseProtoMsg): QueryClientStatusResponse {
    return QueryClientStatusResponse.decode(message.value);
  },
  toProto(message: QueryClientStatusResponse): Uint8Array {
    return QueryClientStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClientStatusResponse): QueryClientStatusResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryClientStatusResponse",
      value: QueryClientStatusResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClientParamsRequest(): QueryClientParamsRequest {
  return {};
}
export const QueryClientParamsRequest = {
  typeUrl: "/ibc.core.client.v1.QueryClientParamsRequest",
  aminoType: "cosmos-sdk/QueryClientParamsRequest",
  encode(_: QueryClientParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientParamsRequest();
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
  fromJSON(_: any): QueryClientParamsRequest {
    return {};
  },
  toJSON(_: QueryClientParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryClientParamsRequest>): QueryClientParamsRequest {
    const message = createBaseQueryClientParamsRequest();
    return message;
  },
  fromSDK(_: QueryClientParamsRequestSDKType): QueryClientParamsRequest {
    return {};
  },
  toSDK(_: QueryClientParamsRequest): QueryClientParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryClientParamsRequestAmino): QueryClientParamsRequest {
    return {};
  },
  toAmino(_: QueryClientParamsRequest): QueryClientParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryClientParamsRequestAminoMsg): QueryClientParamsRequest {
    return QueryClientParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClientParamsRequest): QueryClientParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryClientParamsRequest",
      value: QueryClientParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClientParamsRequestProtoMsg): QueryClientParamsRequest {
    return QueryClientParamsRequest.decode(message.value);
  },
  toProto(message: QueryClientParamsRequest): Uint8Array {
    return QueryClientParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClientParamsRequest): QueryClientParamsRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryClientParamsRequest",
      value: QueryClientParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClientParamsResponse(): QueryClientParamsResponse {
  return {
    params: undefined
  };
}
export const QueryClientParamsResponse = {
  typeUrl: "/ibc.core.client.v1.QueryClientParamsResponse",
  aminoType: "cosmos-sdk/QueryClientParamsResponse",
  encode(message: QueryClientParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClientParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryClientParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClientParamsResponse>): QueryClientParamsResponse {
    const message = createBaseQueryClientParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromSDK(object: QueryClientParamsResponseSDKType): QueryClientParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  toSDK(message: QueryClientParamsResponse): QueryClientParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryClientParamsResponseAmino): QueryClientParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryClientParamsResponse): QueryClientParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClientParamsResponseAminoMsg): QueryClientParamsResponse {
    return QueryClientParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClientParamsResponse): QueryClientParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryClientParamsResponse",
      value: QueryClientParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClientParamsResponseProtoMsg): QueryClientParamsResponse {
    return QueryClientParamsResponse.decode(message.value);
  },
  toProto(message: QueryClientParamsResponse): Uint8Array {
    return QueryClientParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClientParamsResponse): QueryClientParamsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryClientParamsResponse",
      value: QueryClientParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUpgradedClientStateRequest(): QueryUpgradedClientStateRequest {
  return {};
}
export const QueryUpgradedClientStateRequest = {
  typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateRequest",
  aminoType: "cosmos-sdk/QueryUpgradedClientStateRequest",
  encode(_: QueryUpgradedClientStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedClientStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedClientStateRequest();
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
  fromJSON(_: any): QueryUpgradedClientStateRequest {
    return {};
  },
  toJSON(_: QueryUpgradedClientStateRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryUpgradedClientStateRequest>): QueryUpgradedClientStateRequest {
    const message = createBaseQueryUpgradedClientStateRequest();
    return message;
  },
  fromSDK(_: QueryUpgradedClientStateRequestSDKType): QueryUpgradedClientStateRequest {
    return {};
  },
  toSDK(_: QueryUpgradedClientStateRequest): QueryUpgradedClientStateRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryUpgradedClientStateRequestAmino): QueryUpgradedClientStateRequest {
    return {};
  },
  toAmino(_: QueryUpgradedClientStateRequest): QueryUpgradedClientStateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryUpgradedClientStateRequestAminoMsg): QueryUpgradedClientStateRequest {
    return QueryUpgradedClientStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUpgradedClientStateRequest): QueryUpgradedClientStateRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryUpgradedClientStateRequest",
      value: QueryUpgradedClientStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUpgradedClientStateRequestProtoMsg): QueryUpgradedClientStateRequest {
    return QueryUpgradedClientStateRequest.decode(message.value);
  },
  toProto(message: QueryUpgradedClientStateRequest): Uint8Array {
    return QueryUpgradedClientStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUpgradedClientStateRequest): QueryUpgradedClientStateRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateRequest",
      value: QueryUpgradedClientStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUpgradedClientStateResponse(): QueryUpgradedClientStateResponse {
  return {
    upgradedClientState: undefined
  };
}
export const QueryUpgradedClientStateResponse = {
  typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateResponse",
  aminoType: "cosmos-sdk/QueryUpgradedClientStateResponse",
  encode(message: QueryUpgradedClientStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.upgradedClientState !== undefined) {
      Any.encode(message.upgradedClientState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedClientStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedClientStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgradedClientState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUpgradedClientStateResponse {
    return {
      upgradedClientState: isSet(object.upgradedClientState) ? Any.fromJSON(object.upgradedClientState) : undefined
    };
  },
  toJSON(message: QueryUpgradedClientStateResponse): unknown {
    const obj: any = {};
    message.upgradedClientState !== undefined && (obj.upgradedClientState = message.upgradedClientState ? Any.toJSON(message.upgradedClientState) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryUpgradedClientStateResponse>): QueryUpgradedClientStateResponse {
    const message = createBaseQueryUpgradedClientStateResponse();
    message.upgradedClientState = object.upgradedClientState !== undefined && object.upgradedClientState !== null ? Any.fromPartial(object.upgradedClientState) : undefined;
    return message;
  },
  fromSDK(object: QueryUpgradedClientStateResponseSDKType): QueryUpgradedClientStateResponse {
    return {
      upgradedClientState: object.upgraded_client_state ? Any.fromSDK(object.upgraded_client_state) : undefined
    };
  },
  toSDK(message: QueryUpgradedClientStateResponse): QueryUpgradedClientStateResponseSDKType {
    const obj: any = {};
    message.upgradedClientState !== undefined && (obj.upgraded_client_state = message.upgradedClientState ? Any.toSDK(message.upgradedClientState) : undefined);
    return obj;
  },
  fromAmino(object: QueryUpgradedClientStateResponseAmino): QueryUpgradedClientStateResponse {
    return {
      upgradedClientState: object?.upgraded_client_state ? Any.fromAmino(object.upgraded_client_state) : undefined
    };
  },
  toAmino(message: QueryUpgradedClientStateResponse): QueryUpgradedClientStateResponseAmino {
    const obj: any = {};
    obj.upgraded_client_state = message.upgradedClientState ? Any.toAmino(message.upgradedClientState) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUpgradedClientStateResponseAminoMsg): QueryUpgradedClientStateResponse {
    return QueryUpgradedClientStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUpgradedClientStateResponse): QueryUpgradedClientStateResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryUpgradedClientStateResponse",
      value: QueryUpgradedClientStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUpgradedClientStateResponseProtoMsg): QueryUpgradedClientStateResponse {
    return QueryUpgradedClientStateResponse.decode(message.value);
  },
  toProto(message: QueryUpgradedClientStateResponse): Uint8Array {
    return QueryUpgradedClientStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUpgradedClientStateResponse): QueryUpgradedClientStateResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateResponse",
      value: QueryUpgradedClientStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUpgradedConsensusStateRequest(): QueryUpgradedConsensusStateRequest {
  return {};
}
export const QueryUpgradedConsensusStateRequest = {
  typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateRequest",
  aminoType: "cosmos-sdk/QueryUpgradedConsensusStateRequest",
  encode(_: QueryUpgradedConsensusStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedConsensusStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateRequest();
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
  fromJSON(_: any): QueryUpgradedConsensusStateRequest {
    return {};
  },
  toJSON(_: QueryUpgradedConsensusStateRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryUpgradedConsensusStateRequest>): QueryUpgradedConsensusStateRequest {
    const message = createBaseQueryUpgradedConsensusStateRequest();
    return message;
  },
  fromSDK(_: QueryUpgradedConsensusStateRequestSDKType): QueryUpgradedConsensusStateRequest {
    return {};
  },
  toSDK(_: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryUpgradedConsensusStateRequestAmino): QueryUpgradedConsensusStateRequest {
    return {};
  },
  toAmino(_: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryUpgradedConsensusStateRequestAminoMsg): QueryUpgradedConsensusStateRequest {
    return QueryUpgradedConsensusStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryUpgradedConsensusStateRequest",
      value: QueryUpgradedConsensusStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUpgradedConsensusStateRequestProtoMsg): QueryUpgradedConsensusStateRequest {
    return QueryUpgradedConsensusStateRequest.decode(message.value);
  },
  toProto(message: QueryUpgradedConsensusStateRequest): Uint8Array {
    return QueryUpgradedConsensusStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateRequest",
      value: QueryUpgradedConsensusStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUpgradedConsensusStateResponse(): QueryUpgradedConsensusStateResponse {
  return {
    upgradedConsensusState: undefined
  };
}
export const QueryUpgradedConsensusStateResponse = {
  typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateResponse",
  aminoType: "cosmos-sdk/QueryUpgradedConsensusStateResponse",
  encode(message: QueryUpgradedConsensusStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.upgradedConsensusState !== undefined) {
      Any.encode(message.upgradedConsensusState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedConsensusStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgradedConsensusState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUpgradedConsensusStateResponse {
    return {
      upgradedConsensusState: isSet(object.upgradedConsensusState) ? Any.fromJSON(object.upgradedConsensusState) : undefined
    };
  },
  toJSON(message: QueryUpgradedConsensusStateResponse): unknown {
    const obj: any = {};
    message.upgradedConsensusState !== undefined && (obj.upgradedConsensusState = message.upgradedConsensusState ? Any.toJSON(message.upgradedConsensusState) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryUpgradedConsensusStateResponse>): QueryUpgradedConsensusStateResponse {
    const message = createBaseQueryUpgradedConsensusStateResponse();
    message.upgradedConsensusState = object.upgradedConsensusState !== undefined && object.upgradedConsensusState !== null ? Any.fromPartial(object.upgradedConsensusState) : undefined;
    return message;
  },
  fromSDK(object: QueryUpgradedConsensusStateResponseSDKType): QueryUpgradedConsensusStateResponse {
    return {
      upgradedConsensusState: object.upgraded_consensus_state ? Any.fromSDK(object.upgraded_consensus_state) : undefined
    };
  },
  toSDK(message: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponseSDKType {
    const obj: any = {};
    message.upgradedConsensusState !== undefined && (obj.upgraded_consensus_state = message.upgradedConsensusState ? Any.toSDK(message.upgradedConsensusState) : undefined);
    return obj;
  },
  fromAmino(object: QueryUpgradedConsensusStateResponseAmino): QueryUpgradedConsensusStateResponse {
    return {
      upgradedConsensusState: object?.upgraded_consensus_state ? Any.fromAmino(object.upgraded_consensus_state) : undefined
    };
  },
  toAmino(message: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponseAmino {
    const obj: any = {};
    obj.upgraded_consensus_state = message.upgradedConsensusState ? Any.toAmino(message.upgradedConsensusState) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUpgradedConsensusStateResponseAminoMsg): QueryUpgradedConsensusStateResponse {
    return QueryUpgradedConsensusStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryUpgradedConsensusStateResponse",
      value: QueryUpgradedConsensusStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUpgradedConsensusStateResponseProtoMsg): QueryUpgradedConsensusStateResponse {
    return QueryUpgradedConsensusStateResponse.decode(message.value);
  },
  toProto(message: QueryUpgradedConsensusStateResponse): Uint8Array {
    return QueryUpgradedConsensusStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateResponse",
      value: QueryUpgradedConsensusStateResponse.encode(message).finish()
    };
  }
};