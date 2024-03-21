import { Plan, PlanAmino, PlanSDKType, ModuleVersion, ModuleVersionAmino, ModuleVersionSDKType } from "./upgrade";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/**
 * QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanRequest {
}
export interface QueryCurrentPlanRequestProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanRequest";
    value: Uint8Array;
}
/**
 * QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanRequestAmino {
}
export interface QueryCurrentPlanRequestAminoMsg {
    type: "cosmos-sdk/QueryCurrentPlanRequest";
    value: QueryCurrentPlanRequestAmino;
}
/**
 * QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanRequestSDKType {
}
/**
 * QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanResponse {
    /** plan is the current upgrade plan. */
    plan?: Plan | undefined;
}
export interface QueryCurrentPlanResponseProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanResponse";
    value: Uint8Array;
}
/**
 * QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanResponseAmino {
    /** plan is the current upgrade plan. */
    plan?: PlanAmino | undefined;
}
export interface QueryCurrentPlanResponseAminoMsg {
    type: "cosmos-sdk/QueryCurrentPlanResponse";
    value: QueryCurrentPlanResponseAmino;
}
/**
 * QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanResponseSDKType {
    plan?: PlanSDKType | undefined;
}
/**
 * QueryCurrentPlanRequest is the request type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanRequest {
    /** name is the name of the applied plan to query for. */
    name: string;
}
export interface QueryAppliedPlanRequestProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanRequest";
    value: Uint8Array;
}
/**
 * QueryCurrentPlanRequest is the request type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanRequestAmino {
    /** name is the name of the applied plan to query for. */
    name?: string;
}
export interface QueryAppliedPlanRequestAminoMsg {
    type: "cosmos-sdk/QueryAppliedPlanRequest";
    value: QueryAppliedPlanRequestAmino;
}
/**
 * QueryCurrentPlanRequest is the request type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanRequestSDKType {
    name: string;
}
/**
 * QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanResponse {
    /** height is the block height at which the plan was applied. */
    height: bigint;
}
export interface QueryAppliedPlanResponseProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanResponse";
    value: Uint8Array;
}
/**
 * QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanResponseAmino {
    /** height is the block height at which the plan was applied. */
    height?: string;
}
export interface QueryAppliedPlanResponseAminoMsg {
    type: "cosmos-sdk/QueryAppliedPlanResponse";
    value: QueryAppliedPlanResponseAmino;
}
/**
 * QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanResponseSDKType {
    height: bigint;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the Query/UpgradedConsensusState
 * RPC method.
 */
/** @deprecated */
export interface QueryUpgradedConsensusStateRequest {
    /**
     * last height of the current chain must be sent in request
     * as this is the height under which next consensus state is stored
     */
    lastHeight: bigint;
}
export interface QueryUpgradedConsensusStateRequestProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest";
    value: Uint8Array;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the Query/UpgradedConsensusState
 * RPC method.
 */
/** @deprecated */
export interface QueryUpgradedConsensusStateRequestAmino {
    /**
     * last height of the current chain must be sent in request
     * as this is the height under which next consensus state is stored
     */
    last_height?: string;
}
export interface QueryUpgradedConsensusStateRequestAminoMsg {
    type: "cosmos-sdk/QueryUpgradedConsensusStateRequest";
    value: QueryUpgradedConsensusStateRequestAmino;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the Query/UpgradedConsensusState
 * RPC method.
 */
/** @deprecated */
export interface QueryUpgradedConsensusStateRequestSDKType {
    last_height: bigint;
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState
 * RPC method.
 */
/** @deprecated */
export interface QueryUpgradedConsensusStateResponse {
    /** Since: cosmos-sdk 0.43 */
    upgradedConsensusState: Uint8Array;
}
export interface QueryUpgradedConsensusStateResponseProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse";
    value: Uint8Array;
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState
 * RPC method.
 */
/** @deprecated */
export interface QueryUpgradedConsensusStateResponseAmino {
    /** Since: cosmos-sdk 0.43 */
    upgraded_consensus_state?: string;
}
export interface QueryUpgradedConsensusStateResponseAminoMsg {
    type: "cosmos-sdk/QueryUpgradedConsensusStateResponse";
    value: QueryUpgradedConsensusStateResponseAmino;
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState
 * RPC method.
 */
/** @deprecated */
export interface QueryUpgradedConsensusStateResponseSDKType {
    upgraded_consensus_state: Uint8Array;
}
/**
 * QueryModuleVersionsRequest is the request type for the Query/ModuleVersions
 * RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryModuleVersionsRequest {
    /**
     * module_name is a field to query a specific module
     * consensus version from state. Leaving this empty will
     * fetch the full list of module versions from state
     */
    moduleName: string;
}
export interface QueryModuleVersionsRequestProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsRequest";
    value: Uint8Array;
}
/**
 * QueryModuleVersionsRequest is the request type for the Query/ModuleVersions
 * RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryModuleVersionsRequestAmino {
    /**
     * module_name is a field to query a specific module
     * consensus version from state. Leaving this empty will
     * fetch the full list of module versions from state
     */
    module_name?: string;
}
export interface QueryModuleVersionsRequestAminoMsg {
    type: "cosmos-sdk/QueryModuleVersionsRequest";
    value: QueryModuleVersionsRequestAmino;
}
/**
 * QueryModuleVersionsRequest is the request type for the Query/ModuleVersions
 * RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryModuleVersionsRequestSDKType {
    module_name: string;
}
/**
 * QueryModuleVersionsResponse is the response type for the Query/ModuleVersions
 * RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryModuleVersionsResponse {
    /** module_versions is a list of module names with their consensus versions. */
    moduleVersions: ModuleVersion[];
}
export interface QueryModuleVersionsResponseProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsResponse";
    value: Uint8Array;
}
/**
 * QueryModuleVersionsResponse is the response type for the Query/ModuleVersions
 * RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryModuleVersionsResponseAmino {
    /** module_versions is a list of module names with their consensus versions. */
    module_versions?: ModuleVersionAmino[];
}
export interface QueryModuleVersionsResponseAminoMsg {
    type: "cosmos-sdk/QueryModuleVersionsResponse";
    value: QueryModuleVersionsResponseAmino;
}
/**
 * QueryModuleVersionsResponse is the response type for the Query/ModuleVersions
 * RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryModuleVersionsResponseSDKType {
    module_versions: ModuleVersionSDKType[];
}
/**
 * QueryAuthorityRequest is the request type for Query/Authority
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryAuthorityRequest {
}
export interface QueryAuthorityRequestProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryAuthorityRequest";
    value: Uint8Array;
}
/**
 * QueryAuthorityRequest is the request type for Query/Authority
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryAuthorityRequestAmino {
}
export interface QueryAuthorityRequestAminoMsg {
    type: "cosmos-sdk/QueryAuthorityRequest";
    value: QueryAuthorityRequestAmino;
}
/**
 * QueryAuthorityRequest is the request type for Query/Authority
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryAuthorityRequestSDKType {
}
/**
 * QueryAuthorityResponse is the response type for Query/Authority
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryAuthorityResponse {
    address: string;
}
export interface QueryAuthorityResponseProtoMsg {
    typeUrl: "/cosmos.upgrade.v1beta1.QueryAuthorityResponse";
    value: Uint8Array;
}
/**
 * QueryAuthorityResponse is the response type for Query/Authority
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryAuthorityResponseAmino {
    address?: string;
}
export interface QueryAuthorityResponseAminoMsg {
    type: "cosmos-sdk/QueryAuthorityResponse";
    value: QueryAuthorityResponseAmino;
}
/**
 * QueryAuthorityResponse is the response type for Query/Authority
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryAuthorityResponseSDKType {
    address: string;
}
export declare const QueryCurrentPlanRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryCurrentPlanRequest;
    isSDK(o: any): o is QueryCurrentPlanRequestSDKType;
    isAmino(o: any): o is QueryCurrentPlanRequestAmino;
    encode(_: QueryCurrentPlanRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentPlanRequest;
    fromJSON(_: any): QueryCurrentPlanRequest;
    toJSON(_: QueryCurrentPlanRequest): unknown;
    fromPartial(_: DeepPartial<QueryCurrentPlanRequest>): QueryCurrentPlanRequest;
    fromSDK(_: QueryCurrentPlanRequestSDKType): QueryCurrentPlanRequest;
    toSDK(_: QueryCurrentPlanRequest): QueryCurrentPlanRequestSDKType;
    fromAmino(_: QueryCurrentPlanRequestAmino): QueryCurrentPlanRequest;
    toAmino(_: QueryCurrentPlanRequest): QueryCurrentPlanRequestAmino;
    fromAminoMsg(object: QueryCurrentPlanRequestAminoMsg): QueryCurrentPlanRequest;
    toAminoMsg(message: QueryCurrentPlanRequest): QueryCurrentPlanRequestAminoMsg;
    fromProtoMsg(message: QueryCurrentPlanRequestProtoMsg): QueryCurrentPlanRequest;
    toProto(message: QueryCurrentPlanRequest): Uint8Array;
    toProtoMsg(message: QueryCurrentPlanRequest): QueryCurrentPlanRequestProtoMsg;
};
export declare const QueryCurrentPlanResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryCurrentPlanResponse;
    isSDK(o: any): o is QueryCurrentPlanResponseSDKType;
    isAmino(o: any): o is QueryCurrentPlanResponseAmino;
    encode(message: QueryCurrentPlanResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentPlanResponse;
    fromJSON(object: any): QueryCurrentPlanResponse;
    toJSON(message: QueryCurrentPlanResponse): unknown;
    fromPartial(object: DeepPartial<QueryCurrentPlanResponse>): QueryCurrentPlanResponse;
    fromSDK(object: QueryCurrentPlanResponseSDKType): QueryCurrentPlanResponse;
    toSDK(message: QueryCurrentPlanResponse): QueryCurrentPlanResponseSDKType;
    fromAmino(object: QueryCurrentPlanResponseAmino): QueryCurrentPlanResponse;
    toAmino(message: QueryCurrentPlanResponse): QueryCurrentPlanResponseAmino;
    fromAminoMsg(object: QueryCurrentPlanResponseAminoMsg): QueryCurrentPlanResponse;
    toAminoMsg(message: QueryCurrentPlanResponse): QueryCurrentPlanResponseAminoMsg;
    fromProtoMsg(message: QueryCurrentPlanResponseProtoMsg): QueryCurrentPlanResponse;
    toProto(message: QueryCurrentPlanResponse): Uint8Array;
    toProtoMsg(message: QueryCurrentPlanResponse): QueryCurrentPlanResponseProtoMsg;
};
export declare const QueryAppliedPlanRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryAppliedPlanRequest;
    isSDK(o: any): o is QueryAppliedPlanRequestSDKType;
    isAmino(o: any): o is QueryAppliedPlanRequestAmino;
    encode(message: QueryAppliedPlanRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAppliedPlanRequest;
    fromJSON(object: any): QueryAppliedPlanRequest;
    toJSON(message: QueryAppliedPlanRequest): unknown;
    fromPartial(object: DeepPartial<QueryAppliedPlanRequest>): QueryAppliedPlanRequest;
    fromSDK(object: QueryAppliedPlanRequestSDKType): QueryAppliedPlanRequest;
    toSDK(message: QueryAppliedPlanRequest): QueryAppliedPlanRequestSDKType;
    fromAmino(object: QueryAppliedPlanRequestAmino): QueryAppliedPlanRequest;
    toAmino(message: QueryAppliedPlanRequest): QueryAppliedPlanRequestAmino;
    fromAminoMsg(object: QueryAppliedPlanRequestAminoMsg): QueryAppliedPlanRequest;
    toAminoMsg(message: QueryAppliedPlanRequest): QueryAppliedPlanRequestAminoMsg;
    fromProtoMsg(message: QueryAppliedPlanRequestProtoMsg): QueryAppliedPlanRequest;
    toProto(message: QueryAppliedPlanRequest): Uint8Array;
    toProtoMsg(message: QueryAppliedPlanRequest): QueryAppliedPlanRequestProtoMsg;
};
export declare const QueryAppliedPlanResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryAppliedPlanResponse;
    isSDK(o: any): o is QueryAppliedPlanResponseSDKType;
    isAmino(o: any): o is QueryAppliedPlanResponseAmino;
    encode(message: QueryAppliedPlanResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAppliedPlanResponse;
    fromJSON(object: any): QueryAppliedPlanResponse;
    toJSON(message: QueryAppliedPlanResponse): unknown;
    fromPartial(object: DeepPartial<QueryAppliedPlanResponse>): QueryAppliedPlanResponse;
    fromSDK(object: QueryAppliedPlanResponseSDKType): QueryAppliedPlanResponse;
    toSDK(message: QueryAppliedPlanResponse): QueryAppliedPlanResponseSDKType;
    fromAmino(object: QueryAppliedPlanResponseAmino): QueryAppliedPlanResponse;
    toAmino(message: QueryAppliedPlanResponse): QueryAppliedPlanResponseAmino;
    fromAminoMsg(object: QueryAppliedPlanResponseAminoMsg): QueryAppliedPlanResponse;
    toAminoMsg(message: QueryAppliedPlanResponse): QueryAppliedPlanResponseAminoMsg;
    fromProtoMsg(message: QueryAppliedPlanResponseProtoMsg): QueryAppliedPlanResponse;
    toProto(message: QueryAppliedPlanResponse): Uint8Array;
    toProtoMsg(message: QueryAppliedPlanResponse): QueryAppliedPlanResponseProtoMsg;
};
export declare const QueryUpgradedConsensusStateRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryUpgradedConsensusStateRequest;
    isSDK(o: any): o is QueryUpgradedConsensusStateRequestSDKType;
    isAmino(o: any): o is QueryUpgradedConsensusStateRequestAmino;
    encode(message: QueryUpgradedConsensusStateRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUpgradedConsensusStateRequest;
    fromJSON(object: any): QueryUpgradedConsensusStateRequest;
    toJSON(message: QueryUpgradedConsensusStateRequest): unknown;
    fromPartial(object: DeepPartial<QueryUpgradedConsensusStateRequest>): QueryUpgradedConsensusStateRequest;
    fromSDK(object: QueryUpgradedConsensusStateRequestSDKType): QueryUpgradedConsensusStateRequest;
    toSDK(message: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequestSDKType;
    fromAmino(object: QueryUpgradedConsensusStateRequestAmino): QueryUpgradedConsensusStateRequest;
    toAmino(message: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequestAmino;
    fromAminoMsg(object: QueryUpgradedConsensusStateRequestAminoMsg): QueryUpgradedConsensusStateRequest;
    toAminoMsg(message: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequestAminoMsg;
    fromProtoMsg(message: QueryUpgradedConsensusStateRequestProtoMsg): QueryUpgradedConsensusStateRequest;
    toProto(message: QueryUpgradedConsensusStateRequest): Uint8Array;
    toProtoMsg(message: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequestProtoMsg;
};
export declare const QueryUpgradedConsensusStateResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryUpgradedConsensusStateResponse;
    isSDK(o: any): o is QueryUpgradedConsensusStateResponseSDKType;
    isAmino(o: any): o is QueryUpgradedConsensusStateResponseAmino;
    encode(message: QueryUpgradedConsensusStateResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUpgradedConsensusStateResponse;
    fromJSON(object: any): QueryUpgradedConsensusStateResponse;
    toJSON(message: QueryUpgradedConsensusStateResponse): unknown;
    fromPartial(object: DeepPartial<QueryUpgradedConsensusStateResponse>): QueryUpgradedConsensusStateResponse;
    fromSDK(object: QueryUpgradedConsensusStateResponseSDKType): QueryUpgradedConsensusStateResponse;
    toSDK(message: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponseSDKType;
    fromAmino(object: QueryUpgradedConsensusStateResponseAmino): QueryUpgradedConsensusStateResponse;
    toAmino(message: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponseAmino;
    fromAminoMsg(object: QueryUpgradedConsensusStateResponseAminoMsg): QueryUpgradedConsensusStateResponse;
    toAminoMsg(message: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponseAminoMsg;
    fromProtoMsg(message: QueryUpgradedConsensusStateResponseProtoMsg): QueryUpgradedConsensusStateResponse;
    toProto(message: QueryUpgradedConsensusStateResponse): Uint8Array;
    toProtoMsg(message: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponseProtoMsg;
};
export declare const QueryModuleVersionsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryModuleVersionsRequest;
    isSDK(o: any): o is QueryModuleVersionsRequestSDKType;
    isAmino(o: any): o is QueryModuleVersionsRequestAmino;
    encode(message: QueryModuleVersionsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleVersionsRequest;
    fromJSON(object: any): QueryModuleVersionsRequest;
    toJSON(message: QueryModuleVersionsRequest): unknown;
    fromPartial(object: DeepPartial<QueryModuleVersionsRequest>): QueryModuleVersionsRequest;
    fromSDK(object: QueryModuleVersionsRequestSDKType): QueryModuleVersionsRequest;
    toSDK(message: QueryModuleVersionsRequest): QueryModuleVersionsRequestSDKType;
    fromAmino(object: QueryModuleVersionsRequestAmino): QueryModuleVersionsRequest;
    toAmino(message: QueryModuleVersionsRequest): QueryModuleVersionsRequestAmino;
    fromAminoMsg(object: QueryModuleVersionsRequestAminoMsg): QueryModuleVersionsRequest;
    toAminoMsg(message: QueryModuleVersionsRequest): QueryModuleVersionsRequestAminoMsg;
    fromProtoMsg(message: QueryModuleVersionsRequestProtoMsg): QueryModuleVersionsRequest;
    toProto(message: QueryModuleVersionsRequest): Uint8Array;
    toProtoMsg(message: QueryModuleVersionsRequest): QueryModuleVersionsRequestProtoMsg;
};
export declare const QueryModuleVersionsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryModuleVersionsResponse;
    isSDK(o: any): o is QueryModuleVersionsResponseSDKType;
    isAmino(o: any): o is QueryModuleVersionsResponseAmino;
    encode(message: QueryModuleVersionsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleVersionsResponse;
    fromJSON(object: any): QueryModuleVersionsResponse;
    toJSON(message: QueryModuleVersionsResponse): unknown;
    fromPartial(object: DeepPartial<QueryModuleVersionsResponse>): QueryModuleVersionsResponse;
    fromSDK(object: QueryModuleVersionsResponseSDKType): QueryModuleVersionsResponse;
    toSDK(message: QueryModuleVersionsResponse): QueryModuleVersionsResponseSDKType;
    fromAmino(object: QueryModuleVersionsResponseAmino): QueryModuleVersionsResponse;
    toAmino(message: QueryModuleVersionsResponse): QueryModuleVersionsResponseAmino;
    fromAminoMsg(object: QueryModuleVersionsResponseAminoMsg): QueryModuleVersionsResponse;
    toAminoMsg(message: QueryModuleVersionsResponse): QueryModuleVersionsResponseAminoMsg;
    fromProtoMsg(message: QueryModuleVersionsResponseProtoMsg): QueryModuleVersionsResponse;
    toProto(message: QueryModuleVersionsResponse): Uint8Array;
    toProtoMsg(message: QueryModuleVersionsResponse): QueryModuleVersionsResponseProtoMsg;
};
export declare const QueryAuthorityRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryAuthorityRequest;
    isSDK(o: any): o is QueryAuthorityRequestSDKType;
    isAmino(o: any): o is QueryAuthorityRequestAmino;
    encode(_: QueryAuthorityRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAuthorityRequest;
    fromJSON(_: any): QueryAuthorityRequest;
    toJSON(_: QueryAuthorityRequest): unknown;
    fromPartial(_: DeepPartial<QueryAuthorityRequest>): QueryAuthorityRequest;
    fromSDK(_: QueryAuthorityRequestSDKType): QueryAuthorityRequest;
    toSDK(_: QueryAuthorityRequest): QueryAuthorityRequestSDKType;
    fromAmino(_: QueryAuthorityRequestAmino): QueryAuthorityRequest;
    toAmino(_: QueryAuthorityRequest): QueryAuthorityRequestAmino;
    fromAminoMsg(object: QueryAuthorityRequestAminoMsg): QueryAuthorityRequest;
    toAminoMsg(message: QueryAuthorityRequest): QueryAuthorityRequestAminoMsg;
    fromProtoMsg(message: QueryAuthorityRequestProtoMsg): QueryAuthorityRequest;
    toProto(message: QueryAuthorityRequest): Uint8Array;
    toProtoMsg(message: QueryAuthorityRequest): QueryAuthorityRequestProtoMsg;
};
export declare const QueryAuthorityResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryAuthorityResponse;
    isSDK(o: any): o is QueryAuthorityResponseSDKType;
    isAmino(o: any): o is QueryAuthorityResponseAmino;
    encode(message: QueryAuthorityResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryAuthorityResponse;
    fromJSON(object: any): QueryAuthorityResponse;
    toJSON(message: QueryAuthorityResponse): unknown;
    fromPartial(object: DeepPartial<QueryAuthorityResponse>): QueryAuthorityResponse;
    fromSDK(object: QueryAuthorityResponseSDKType): QueryAuthorityResponse;
    toSDK(message: QueryAuthorityResponse): QueryAuthorityResponseSDKType;
    fromAmino(object: QueryAuthorityResponseAmino): QueryAuthorityResponse;
    toAmino(message: QueryAuthorityResponse): QueryAuthorityResponseAmino;
    fromAminoMsg(object: QueryAuthorityResponseAminoMsg): QueryAuthorityResponse;
    toAminoMsg(message: QueryAuthorityResponse): QueryAuthorityResponseAminoMsg;
    fromProtoMsg(message: QueryAuthorityResponseProtoMsg): QueryAuthorityResponse;
    toProto(message: QueryAuthorityResponse): Uint8Array;
    toProtoMsg(message: QueryAuthorityResponse): QueryAuthorityResponseProtoMsg;
};
