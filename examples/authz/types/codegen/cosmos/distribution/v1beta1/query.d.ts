import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType, ValidatorOutstandingRewards, ValidatorOutstandingRewardsAmino, ValidatorOutstandingRewardsSDKType, ValidatorAccumulatedCommission, ValidatorAccumulatedCommissionAmino, ValidatorAccumulatedCommissionSDKType, ValidatorSlashEvent, ValidatorSlashEventAmino, ValidatorSlashEventSDKType, DelegationDelegatorReward, DelegationDelegatorRewardAmino, DelegationDelegatorRewardSDKType } from "./distribution";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "cosmos-sdk/QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params | undefined;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params defines the parameters of the module. */
    params?: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
    type: "cosmos-sdk/QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType | undefined;
}
/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsRequest {
    /** validator_address defines the validator address to query for. */
    validatorAddress: string;
}
export interface QueryValidatorOutstandingRewardsRequestProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest";
    value: Uint8Array;
}
/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsRequestAmino {
    /** validator_address defines the validator address to query for. */
    validator_address?: string;
}
export interface QueryValidatorOutstandingRewardsRequestAminoMsg {
    type: "cosmos-sdk/QueryValidatorOutstandingRewardsRequest";
    value: QueryValidatorOutstandingRewardsRequestAmino;
}
/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsRequestSDKType {
    validator_address: string;
}
/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsResponse {
    rewards: ValidatorOutstandingRewards | undefined;
}
export interface QueryValidatorOutstandingRewardsResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse";
    value: Uint8Array;
}
/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsResponseAmino {
    rewards?: ValidatorOutstandingRewardsAmino | undefined;
}
export interface QueryValidatorOutstandingRewardsResponseAminoMsg {
    type: "cosmos-sdk/QueryValidatorOutstandingRewardsResponse";
    value: QueryValidatorOutstandingRewardsResponseAmino;
}
/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsResponseSDKType {
    rewards: ValidatorOutstandingRewardsSDKType | undefined;
}
/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionRequest {
    /** validator_address defines the validator address to query for. */
    validatorAddress: string;
}
export interface QueryValidatorCommissionRequestProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest";
    value: Uint8Array;
}
/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionRequestAmino {
    /** validator_address defines the validator address to query for. */
    validator_address?: string;
}
export interface QueryValidatorCommissionRequestAminoMsg {
    type: "cosmos-sdk/QueryValidatorCommissionRequest";
    value: QueryValidatorCommissionRequestAmino;
}
/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionRequestSDKType {
    validator_address: string;
}
/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionResponse {
    /** commission defines the commision the validator received. */
    commission: ValidatorAccumulatedCommission | undefined;
}
export interface QueryValidatorCommissionResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse";
    value: Uint8Array;
}
/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionResponseAmino {
    /** commission defines the commision the validator received. */
    commission?: ValidatorAccumulatedCommissionAmino | undefined;
}
export interface QueryValidatorCommissionResponseAminoMsg {
    type: "cosmos-sdk/QueryValidatorCommissionResponse";
    value: QueryValidatorCommissionResponseAmino;
}
/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionResponseSDKType {
    commission: ValidatorAccumulatedCommissionSDKType | undefined;
}
/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 */
export interface QueryValidatorSlashesRequest {
    /** validator_address defines the validator address to query for. */
    validatorAddress: string;
    /** starting_height defines the optional starting height to query the slashes. */
    startingHeight: bigint;
    /** starting_height defines the optional ending height to query the slashes. */
    endingHeight: bigint;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
export interface QueryValidatorSlashesRequestProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest";
    value: Uint8Array;
}
/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 */
export interface QueryValidatorSlashesRequestAmino {
    /** validator_address defines the validator address to query for. */
    validator_address?: string;
    /** starting_height defines the optional starting height to query the slashes. */
    starting_height?: string;
    /** starting_height defines the optional ending height to query the slashes. */
    ending_height?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryValidatorSlashesRequestAminoMsg {
    type: "cosmos-sdk/QueryValidatorSlashesRequest";
    value: QueryValidatorSlashesRequestAmino;
}
/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 */
export interface QueryValidatorSlashesRequestSDKType {
    validator_address: string;
    starting_height: bigint;
    ending_height: bigint;
    pagination?: PageRequestSDKType | undefined;
}
/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */
export interface QueryValidatorSlashesResponse {
    /** slashes defines the slashes the validator received. */
    slashes: ValidatorSlashEvent[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
export interface QueryValidatorSlashesResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse";
    value: Uint8Array;
}
/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */
export interface QueryValidatorSlashesResponseAmino {
    /** slashes defines the slashes the validator received. */
    slashes?: ValidatorSlashEventAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryValidatorSlashesResponseAminoMsg {
    type: "cosmos-sdk/QueryValidatorSlashesResponse";
    value: QueryValidatorSlashesResponseAmino;
}
/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */
export interface QueryValidatorSlashesResponseSDKType {
    slashes: ValidatorSlashEventSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsRequest {
    /** delegator_address defines the delegator address to query for. */
    delegatorAddress: string;
    /** validator_address defines the validator address to query for. */
    validatorAddress: string;
}
export interface QueryDelegationRewardsRequestProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest";
    value: Uint8Array;
}
/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsRequestAmino {
    /** delegator_address defines the delegator address to query for. */
    delegator_address?: string;
    /** validator_address defines the validator address to query for. */
    validator_address?: string;
}
export interface QueryDelegationRewardsRequestAminoMsg {
    type: "cosmos-sdk/QueryDelegationRewardsRequest";
    value: QueryDelegationRewardsRequestAmino;
}
/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsRequestSDKType {
    delegator_address: string;
    validator_address: string;
}
/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsResponse {
    /** rewards defines the rewards accrued by a delegation. */
    rewards: DecCoin[];
}
export interface QueryDelegationRewardsResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse";
    value: Uint8Array;
}
/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsResponseAmino {
    /** rewards defines the rewards accrued by a delegation. */
    rewards?: DecCoinAmino[];
}
export interface QueryDelegationRewardsResponseAminoMsg {
    type: "cosmos-sdk/QueryDelegationRewardsResponse";
    value: QueryDelegationRewardsResponseAmino;
}
/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsResponseSDKType {
    rewards: DecCoinSDKType[];
}
/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsRequest {
    /** delegator_address defines the delegator address to query for. */
    delegatorAddress: string;
}
export interface QueryDelegationTotalRewardsRequestProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest";
    value: Uint8Array;
}
/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsRequestAmino {
    /** delegator_address defines the delegator address to query for. */
    delegator_address?: string;
}
export interface QueryDelegationTotalRewardsRequestAminoMsg {
    type: "cosmos-sdk/QueryDelegationTotalRewardsRequest";
    value: QueryDelegationTotalRewardsRequestAmino;
}
/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsRequestSDKType {
    delegator_address: string;
}
/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsResponse {
    /** rewards defines all the rewards accrued by a delegator. */
    rewards: DelegationDelegatorReward[];
    /** total defines the sum of all the rewards. */
    total: DecCoin[];
}
export interface QueryDelegationTotalRewardsResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse";
    value: Uint8Array;
}
/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsResponseAmino {
    /** rewards defines all the rewards accrued by a delegator. */
    rewards?: DelegationDelegatorRewardAmino[];
    /** total defines the sum of all the rewards. */
    total?: DecCoinAmino[];
}
export interface QueryDelegationTotalRewardsResponseAminoMsg {
    type: "cosmos-sdk/QueryDelegationTotalRewardsResponse";
    value: QueryDelegationTotalRewardsResponseAmino;
}
/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsResponseSDKType {
    rewards: DelegationDelegatorRewardSDKType[];
    total: DecCoinSDKType[];
}
/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
    /** delegator_address defines the delegator address to query for. */
    delegatorAddress: string;
}
export interface QueryDelegatorValidatorsRequestProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest";
    value: Uint8Array;
}
/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequestAmino {
    /** delegator_address defines the delegator address to query for. */
    delegator_address?: string;
}
export interface QueryDelegatorValidatorsRequestAminoMsg {
    type: "cosmos-sdk/QueryDelegatorValidatorsRequest";
    value: QueryDelegatorValidatorsRequestAmino;
}
/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequestSDKType {
    delegator_address: string;
}
/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
    /** validators defines the validators a delegator is delegating for. */
    validators: string[];
}
export interface QueryDelegatorValidatorsResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse";
    value: Uint8Array;
}
/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponseAmino {
    /** validators defines the validators a delegator is delegating for. */
    validators?: string[];
}
export interface QueryDelegatorValidatorsResponseAminoMsg {
    type: "cosmos-sdk/QueryDelegatorValidatorsResponse";
    value: QueryDelegatorValidatorsResponseAmino;
}
/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponseSDKType {
    validators: string[];
}
/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequest {
    /** delegator_address defines the delegator address to query for. */
    delegatorAddress: string;
}
export interface QueryDelegatorWithdrawAddressRequestProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest";
    value: Uint8Array;
}
/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequestAmino {
    /** delegator_address defines the delegator address to query for. */
    delegator_address?: string;
}
export interface QueryDelegatorWithdrawAddressRequestAminoMsg {
    type: "cosmos-sdk/QueryDelegatorWithdrawAddressRequest";
    value: QueryDelegatorWithdrawAddressRequestAmino;
}
/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequestSDKType {
    delegator_address: string;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponse {
    /** withdraw_address defines the delegator address to query for. */
    withdrawAddress: string;
}
export interface QueryDelegatorWithdrawAddressResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse";
    value: Uint8Array;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponseAmino {
    /** withdraw_address defines the delegator address to query for. */
    withdraw_address?: string;
}
export interface QueryDelegatorWithdrawAddressResponseAminoMsg {
    type: "cosmos-sdk/QueryDelegatorWithdrawAddressResponse";
    value: QueryDelegatorWithdrawAddressResponseAmino;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponseSDKType {
    withdraw_address: string;
}
/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */
export interface QueryCommunityPoolRequest {
}
export interface QueryCommunityPoolRequestProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolRequest";
    value: Uint8Array;
}
/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */
export interface QueryCommunityPoolRequestAmino {
}
export interface QueryCommunityPoolRequestAminoMsg {
    type: "cosmos-sdk/QueryCommunityPoolRequest";
    value: QueryCommunityPoolRequestAmino;
}
/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */
export interface QueryCommunityPoolRequestSDKType {
}
/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface QueryCommunityPoolResponse {
    /** pool defines community pool's coins. */
    pool: DecCoin[];
}
export interface QueryCommunityPoolResponseProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolResponse";
    value: Uint8Array;
}
/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface QueryCommunityPoolResponseAmino {
    /** pool defines community pool's coins. */
    pool?: DecCoinAmino[];
}
export interface QueryCommunityPoolResponseAminoMsg {
    type: "cosmos-sdk/QueryCommunityPoolResponse";
    value: QueryCommunityPoolResponseAmino;
}
/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface QueryCommunityPoolResponseSDKType {
    pool: DecCoinSDKType[];
}
export declare const QueryParamsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryParamsRequest;
    isSDK(o: any): o is QueryParamsRequestSDKType;
    isAmino(o: any): o is QueryParamsRequestAmino;
    encode(_: QueryParamsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
    fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest;
    toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType;
    fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest;
    toAmino(_: QueryParamsRequest): QueryParamsRequestAmino;
    fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest;
    toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg;
    fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest;
    toProto(message: QueryParamsRequest): Uint8Array;
    toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg;
};
export declare const QueryParamsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryParamsResponse;
    isSDK(o: any): o is QueryParamsResponseSDKType;
    isAmino(o: any): o is QueryParamsResponseAmino;
    encode(message: QueryParamsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
    fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse;
    toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType;
    fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse;
    toAmino(message: QueryParamsResponse): QueryParamsResponseAmino;
    fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse;
    toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg;
    fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse;
    toProto(message: QueryParamsResponse): Uint8Array;
    toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg;
};
export declare const QueryValidatorOutstandingRewardsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryValidatorOutstandingRewardsRequest;
    isSDK(o: any): o is QueryValidatorOutstandingRewardsRequestSDKType;
    isAmino(o: any): o is QueryValidatorOutstandingRewardsRequestAmino;
    encode(message: QueryValidatorOutstandingRewardsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorOutstandingRewardsRequest;
    fromJSON(object: any): QueryValidatorOutstandingRewardsRequest;
    toJSON(message: QueryValidatorOutstandingRewardsRequest): unknown;
    fromPartial(object: DeepPartial<QueryValidatorOutstandingRewardsRequest>): QueryValidatorOutstandingRewardsRequest;
    fromSDK(object: QueryValidatorOutstandingRewardsRequestSDKType): QueryValidatorOutstandingRewardsRequest;
    toSDK(message: QueryValidatorOutstandingRewardsRequest): QueryValidatorOutstandingRewardsRequestSDKType;
    fromAmino(object: QueryValidatorOutstandingRewardsRequestAmino): QueryValidatorOutstandingRewardsRequest;
    toAmino(message: QueryValidatorOutstandingRewardsRequest): QueryValidatorOutstandingRewardsRequestAmino;
    fromAminoMsg(object: QueryValidatorOutstandingRewardsRequestAminoMsg): QueryValidatorOutstandingRewardsRequest;
    toAminoMsg(message: QueryValidatorOutstandingRewardsRequest): QueryValidatorOutstandingRewardsRequestAminoMsg;
    fromProtoMsg(message: QueryValidatorOutstandingRewardsRequestProtoMsg): QueryValidatorOutstandingRewardsRequest;
    toProto(message: QueryValidatorOutstandingRewardsRequest): Uint8Array;
    toProtoMsg(message: QueryValidatorOutstandingRewardsRequest): QueryValidatorOutstandingRewardsRequestProtoMsg;
};
export declare const QueryValidatorOutstandingRewardsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryValidatorOutstandingRewardsResponse;
    isSDK(o: any): o is QueryValidatorOutstandingRewardsResponseSDKType;
    isAmino(o: any): o is QueryValidatorOutstandingRewardsResponseAmino;
    encode(message: QueryValidatorOutstandingRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorOutstandingRewardsResponse;
    fromJSON(object: any): QueryValidatorOutstandingRewardsResponse;
    toJSON(message: QueryValidatorOutstandingRewardsResponse): unknown;
    fromPartial(object: DeepPartial<QueryValidatorOutstandingRewardsResponse>): QueryValidatorOutstandingRewardsResponse;
    fromSDK(object: QueryValidatorOutstandingRewardsResponseSDKType): QueryValidatorOutstandingRewardsResponse;
    toSDK(message: QueryValidatorOutstandingRewardsResponse): QueryValidatorOutstandingRewardsResponseSDKType;
    fromAmino(object: QueryValidatorOutstandingRewardsResponseAmino): QueryValidatorOutstandingRewardsResponse;
    toAmino(message: QueryValidatorOutstandingRewardsResponse): QueryValidatorOutstandingRewardsResponseAmino;
    fromAminoMsg(object: QueryValidatorOutstandingRewardsResponseAminoMsg): QueryValidatorOutstandingRewardsResponse;
    toAminoMsg(message: QueryValidatorOutstandingRewardsResponse): QueryValidatorOutstandingRewardsResponseAminoMsg;
    fromProtoMsg(message: QueryValidatorOutstandingRewardsResponseProtoMsg): QueryValidatorOutstandingRewardsResponse;
    toProto(message: QueryValidatorOutstandingRewardsResponse): Uint8Array;
    toProtoMsg(message: QueryValidatorOutstandingRewardsResponse): QueryValidatorOutstandingRewardsResponseProtoMsg;
};
export declare const QueryValidatorCommissionRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryValidatorCommissionRequest;
    isSDK(o: any): o is QueryValidatorCommissionRequestSDKType;
    isAmino(o: any): o is QueryValidatorCommissionRequestAmino;
    encode(message: QueryValidatorCommissionRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorCommissionRequest;
    fromJSON(object: any): QueryValidatorCommissionRequest;
    toJSON(message: QueryValidatorCommissionRequest): unknown;
    fromPartial(object: DeepPartial<QueryValidatorCommissionRequest>): QueryValidatorCommissionRequest;
    fromSDK(object: QueryValidatorCommissionRequestSDKType): QueryValidatorCommissionRequest;
    toSDK(message: QueryValidatorCommissionRequest): QueryValidatorCommissionRequestSDKType;
    fromAmino(object: QueryValidatorCommissionRequestAmino): QueryValidatorCommissionRequest;
    toAmino(message: QueryValidatorCommissionRequest): QueryValidatorCommissionRequestAmino;
    fromAminoMsg(object: QueryValidatorCommissionRequestAminoMsg): QueryValidatorCommissionRequest;
    toAminoMsg(message: QueryValidatorCommissionRequest): QueryValidatorCommissionRequestAminoMsg;
    fromProtoMsg(message: QueryValidatorCommissionRequestProtoMsg): QueryValidatorCommissionRequest;
    toProto(message: QueryValidatorCommissionRequest): Uint8Array;
    toProtoMsg(message: QueryValidatorCommissionRequest): QueryValidatorCommissionRequestProtoMsg;
};
export declare const QueryValidatorCommissionResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryValidatorCommissionResponse;
    isSDK(o: any): o is QueryValidatorCommissionResponseSDKType;
    isAmino(o: any): o is QueryValidatorCommissionResponseAmino;
    encode(message: QueryValidatorCommissionResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorCommissionResponse;
    fromJSON(object: any): QueryValidatorCommissionResponse;
    toJSON(message: QueryValidatorCommissionResponse): unknown;
    fromPartial(object: DeepPartial<QueryValidatorCommissionResponse>): QueryValidatorCommissionResponse;
    fromSDK(object: QueryValidatorCommissionResponseSDKType): QueryValidatorCommissionResponse;
    toSDK(message: QueryValidatorCommissionResponse): QueryValidatorCommissionResponseSDKType;
    fromAmino(object: QueryValidatorCommissionResponseAmino): QueryValidatorCommissionResponse;
    toAmino(message: QueryValidatorCommissionResponse): QueryValidatorCommissionResponseAmino;
    fromAminoMsg(object: QueryValidatorCommissionResponseAminoMsg): QueryValidatorCommissionResponse;
    toAminoMsg(message: QueryValidatorCommissionResponse): QueryValidatorCommissionResponseAminoMsg;
    fromProtoMsg(message: QueryValidatorCommissionResponseProtoMsg): QueryValidatorCommissionResponse;
    toProto(message: QueryValidatorCommissionResponse): Uint8Array;
    toProtoMsg(message: QueryValidatorCommissionResponse): QueryValidatorCommissionResponseProtoMsg;
};
export declare const QueryValidatorSlashesRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryValidatorSlashesRequest;
    isSDK(o: any): o is QueryValidatorSlashesRequestSDKType;
    isAmino(o: any): o is QueryValidatorSlashesRequestAmino;
    encode(message: QueryValidatorSlashesRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorSlashesRequest;
    fromJSON(object: any): QueryValidatorSlashesRequest;
    toJSON(message: QueryValidatorSlashesRequest): unknown;
    fromPartial(object: DeepPartial<QueryValidatorSlashesRequest>): QueryValidatorSlashesRequest;
    fromSDK(object: QueryValidatorSlashesRequestSDKType): QueryValidatorSlashesRequest;
    toSDK(message: QueryValidatorSlashesRequest): QueryValidatorSlashesRequestSDKType;
    fromAmino(object: QueryValidatorSlashesRequestAmino): QueryValidatorSlashesRequest;
    toAmino(message: QueryValidatorSlashesRequest): QueryValidatorSlashesRequestAmino;
    fromAminoMsg(object: QueryValidatorSlashesRequestAminoMsg): QueryValidatorSlashesRequest;
    toAminoMsg(message: QueryValidatorSlashesRequest): QueryValidatorSlashesRequestAminoMsg;
    fromProtoMsg(message: QueryValidatorSlashesRequestProtoMsg): QueryValidatorSlashesRequest;
    toProto(message: QueryValidatorSlashesRequest): Uint8Array;
    toProtoMsg(message: QueryValidatorSlashesRequest): QueryValidatorSlashesRequestProtoMsg;
};
export declare const QueryValidatorSlashesResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryValidatorSlashesResponse;
    isSDK(o: any): o is QueryValidatorSlashesResponseSDKType;
    isAmino(o: any): o is QueryValidatorSlashesResponseAmino;
    encode(message: QueryValidatorSlashesResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorSlashesResponse;
    fromJSON(object: any): QueryValidatorSlashesResponse;
    toJSON(message: QueryValidatorSlashesResponse): unknown;
    fromPartial(object: DeepPartial<QueryValidatorSlashesResponse>): QueryValidatorSlashesResponse;
    fromSDK(object: QueryValidatorSlashesResponseSDKType): QueryValidatorSlashesResponse;
    toSDK(message: QueryValidatorSlashesResponse): QueryValidatorSlashesResponseSDKType;
    fromAmino(object: QueryValidatorSlashesResponseAmino): QueryValidatorSlashesResponse;
    toAmino(message: QueryValidatorSlashesResponse): QueryValidatorSlashesResponseAmino;
    fromAminoMsg(object: QueryValidatorSlashesResponseAminoMsg): QueryValidatorSlashesResponse;
    toAminoMsg(message: QueryValidatorSlashesResponse): QueryValidatorSlashesResponseAminoMsg;
    fromProtoMsg(message: QueryValidatorSlashesResponseProtoMsg): QueryValidatorSlashesResponse;
    toProto(message: QueryValidatorSlashesResponse): Uint8Array;
    toProtoMsg(message: QueryValidatorSlashesResponse): QueryValidatorSlashesResponseProtoMsg;
};
export declare const QueryDelegationRewardsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDelegationRewardsRequest;
    isSDK(o: any): o is QueryDelegationRewardsRequestSDKType;
    isAmino(o: any): o is QueryDelegationRewardsRequestAmino;
    encode(message: QueryDelegationRewardsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationRewardsRequest;
    fromJSON(object: any): QueryDelegationRewardsRequest;
    toJSON(message: QueryDelegationRewardsRequest): unknown;
    fromPartial(object: DeepPartial<QueryDelegationRewardsRequest>): QueryDelegationRewardsRequest;
    fromSDK(object: QueryDelegationRewardsRequestSDKType): QueryDelegationRewardsRequest;
    toSDK(message: QueryDelegationRewardsRequest): QueryDelegationRewardsRequestSDKType;
    fromAmino(object: QueryDelegationRewardsRequestAmino): QueryDelegationRewardsRequest;
    toAmino(message: QueryDelegationRewardsRequest): QueryDelegationRewardsRequestAmino;
    fromAminoMsg(object: QueryDelegationRewardsRequestAminoMsg): QueryDelegationRewardsRequest;
    toAminoMsg(message: QueryDelegationRewardsRequest): QueryDelegationRewardsRequestAminoMsg;
    fromProtoMsg(message: QueryDelegationRewardsRequestProtoMsg): QueryDelegationRewardsRequest;
    toProto(message: QueryDelegationRewardsRequest): Uint8Array;
    toProtoMsg(message: QueryDelegationRewardsRequest): QueryDelegationRewardsRequestProtoMsg;
};
export declare const QueryDelegationRewardsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDelegationRewardsResponse;
    isSDK(o: any): o is QueryDelegationRewardsResponseSDKType;
    isAmino(o: any): o is QueryDelegationRewardsResponseAmino;
    encode(message: QueryDelegationRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationRewardsResponse;
    fromJSON(object: any): QueryDelegationRewardsResponse;
    toJSON(message: QueryDelegationRewardsResponse): unknown;
    fromPartial(object: DeepPartial<QueryDelegationRewardsResponse>): QueryDelegationRewardsResponse;
    fromSDK(object: QueryDelegationRewardsResponseSDKType): QueryDelegationRewardsResponse;
    toSDK(message: QueryDelegationRewardsResponse): QueryDelegationRewardsResponseSDKType;
    fromAmino(object: QueryDelegationRewardsResponseAmino): QueryDelegationRewardsResponse;
    toAmino(message: QueryDelegationRewardsResponse): QueryDelegationRewardsResponseAmino;
    fromAminoMsg(object: QueryDelegationRewardsResponseAminoMsg): QueryDelegationRewardsResponse;
    toAminoMsg(message: QueryDelegationRewardsResponse): QueryDelegationRewardsResponseAminoMsg;
    fromProtoMsg(message: QueryDelegationRewardsResponseProtoMsg): QueryDelegationRewardsResponse;
    toProto(message: QueryDelegationRewardsResponse): Uint8Array;
    toProtoMsg(message: QueryDelegationRewardsResponse): QueryDelegationRewardsResponseProtoMsg;
};
export declare const QueryDelegationTotalRewardsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDelegationTotalRewardsRequest;
    isSDK(o: any): o is QueryDelegationTotalRewardsRequestSDKType;
    isAmino(o: any): o is QueryDelegationTotalRewardsRequestAmino;
    encode(message: QueryDelegationTotalRewardsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationTotalRewardsRequest;
    fromJSON(object: any): QueryDelegationTotalRewardsRequest;
    toJSON(message: QueryDelegationTotalRewardsRequest): unknown;
    fromPartial(object: DeepPartial<QueryDelegationTotalRewardsRequest>): QueryDelegationTotalRewardsRequest;
    fromSDK(object: QueryDelegationTotalRewardsRequestSDKType): QueryDelegationTotalRewardsRequest;
    toSDK(message: QueryDelegationTotalRewardsRequest): QueryDelegationTotalRewardsRequestSDKType;
    fromAmino(object: QueryDelegationTotalRewardsRequestAmino): QueryDelegationTotalRewardsRequest;
    toAmino(message: QueryDelegationTotalRewardsRequest): QueryDelegationTotalRewardsRequestAmino;
    fromAminoMsg(object: QueryDelegationTotalRewardsRequestAminoMsg): QueryDelegationTotalRewardsRequest;
    toAminoMsg(message: QueryDelegationTotalRewardsRequest): QueryDelegationTotalRewardsRequestAminoMsg;
    fromProtoMsg(message: QueryDelegationTotalRewardsRequestProtoMsg): QueryDelegationTotalRewardsRequest;
    toProto(message: QueryDelegationTotalRewardsRequest): Uint8Array;
    toProtoMsg(message: QueryDelegationTotalRewardsRequest): QueryDelegationTotalRewardsRequestProtoMsg;
};
export declare const QueryDelegationTotalRewardsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDelegationTotalRewardsResponse;
    isSDK(o: any): o is QueryDelegationTotalRewardsResponseSDKType;
    isAmino(o: any): o is QueryDelegationTotalRewardsResponseAmino;
    encode(message: QueryDelegationTotalRewardsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationTotalRewardsResponse;
    fromJSON(object: any): QueryDelegationTotalRewardsResponse;
    toJSON(message: QueryDelegationTotalRewardsResponse): unknown;
    fromPartial(object: DeepPartial<QueryDelegationTotalRewardsResponse>): QueryDelegationTotalRewardsResponse;
    fromSDK(object: QueryDelegationTotalRewardsResponseSDKType): QueryDelegationTotalRewardsResponse;
    toSDK(message: QueryDelegationTotalRewardsResponse): QueryDelegationTotalRewardsResponseSDKType;
    fromAmino(object: QueryDelegationTotalRewardsResponseAmino): QueryDelegationTotalRewardsResponse;
    toAmino(message: QueryDelegationTotalRewardsResponse): QueryDelegationTotalRewardsResponseAmino;
    fromAminoMsg(object: QueryDelegationTotalRewardsResponseAminoMsg): QueryDelegationTotalRewardsResponse;
    toAminoMsg(message: QueryDelegationTotalRewardsResponse): QueryDelegationTotalRewardsResponseAminoMsg;
    fromProtoMsg(message: QueryDelegationTotalRewardsResponseProtoMsg): QueryDelegationTotalRewardsResponse;
    toProto(message: QueryDelegationTotalRewardsResponse): Uint8Array;
    toProtoMsg(message: QueryDelegationTotalRewardsResponse): QueryDelegationTotalRewardsResponseProtoMsg;
};
export declare const QueryDelegatorValidatorsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDelegatorValidatorsRequest;
    isSDK(o: any): o is QueryDelegatorValidatorsRequestSDKType;
    isAmino(o: any): o is QueryDelegatorValidatorsRequestAmino;
    encode(message: QueryDelegatorValidatorsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorsRequest;
    fromJSON(object: any): QueryDelegatorValidatorsRequest;
    toJSON(message: QueryDelegatorValidatorsRequest): unknown;
    fromPartial(object: DeepPartial<QueryDelegatorValidatorsRequest>): QueryDelegatorValidatorsRequest;
    fromSDK(object: QueryDelegatorValidatorsRequestSDKType): QueryDelegatorValidatorsRequest;
    toSDK(message: QueryDelegatorValidatorsRequest): QueryDelegatorValidatorsRequestSDKType;
    fromAmino(object: QueryDelegatorValidatorsRequestAmino): QueryDelegatorValidatorsRequest;
    toAmino(message: QueryDelegatorValidatorsRequest): QueryDelegatorValidatorsRequestAmino;
    fromAminoMsg(object: QueryDelegatorValidatorsRequestAminoMsg): QueryDelegatorValidatorsRequest;
    toAminoMsg(message: QueryDelegatorValidatorsRequest): QueryDelegatorValidatorsRequestAminoMsg;
    fromProtoMsg(message: QueryDelegatorValidatorsRequestProtoMsg): QueryDelegatorValidatorsRequest;
    toProto(message: QueryDelegatorValidatorsRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatorValidatorsRequest): QueryDelegatorValidatorsRequestProtoMsg;
};
export declare const QueryDelegatorValidatorsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDelegatorValidatorsResponse;
    isSDK(o: any): o is QueryDelegatorValidatorsResponseSDKType;
    isAmino(o: any): o is QueryDelegatorValidatorsResponseAmino;
    encode(message: QueryDelegatorValidatorsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorsResponse;
    fromJSON(object: any): QueryDelegatorValidatorsResponse;
    toJSON(message: QueryDelegatorValidatorsResponse): unknown;
    fromPartial(object: DeepPartial<QueryDelegatorValidatorsResponse>): QueryDelegatorValidatorsResponse;
    fromSDK(object: QueryDelegatorValidatorsResponseSDKType): QueryDelegatorValidatorsResponse;
    toSDK(message: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponseSDKType;
    fromAmino(object: QueryDelegatorValidatorsResponseAmino): QueryDelegatorValidatorsResponse;
    toAmino(message: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponseAmino;
    fromAminoMsg(object: QueryDelegatorValidatorsResponseAminoMsg): QueryDelegatorValidatorsResponse;
    toAminoMsg(message: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponseAminoMsg;
    fromProtoMsg(message: QueryDelegatorValidatorsResponseProtoMsg): QueryDelegatorValidatorsResponse;
    toProto(message: QueryDelegatorValidatorsResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponseProtoMsg;
};
export declare const QueryDelegatorWithdrawAddressRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDelegatorWithdrawAddressRequest;
    isSDK(o: any): o is QueryDelegatorWithdrawAddressRequestSDKType;
    isAmino(o: any): o is QueryDelegatorWithdrawAddressRequestAmino;
    encode(message: QueryDelegatorWithdrawAddressRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorWithdrawAddressRequest;
    fromJSON(object: any): QueryDelegatorWithdrawAddressRequest;
    toJSON(message: QueryDelegatorWithdrawAddressRequest): unknown;
    fromPartial(object: DeepPartial<QueryDelegatorWithdrawAddressRequest>): QueryDelegatorWithdrawAddressRequest;
    fromSDK(object: QueryDelegatorWithdrawAddressRequestSDKType): QueryDelegatorWithdrawAddressRequest;
    toSDK(message: QueryDelegatorWithdrawAddressRequest): QueryDelegatorWithdrawAddressRequestSDKType;
    fromAmino(object: QueryDelegatorWithdrawAddressRequestAmino): QueryDelegatorWithdrawAddressRequest;
    toAmino(message: QueryDelegatorWithdrawAddressRequest): QueryDelegatorWithdrawAddressRequestAmino;
    fromAminoMsg(object: QueryDelegatorWithdrawAddressRequestAminoMsg): QueryDelegatorWithdrawAddressRequest;
    toAminoMsg(message: QueryDelegatorWithdrawAddressRequest): QueryDelegatorWithdrawAddressRequestAminoMsg;
    fromProtoMsg(message: QueryDelegatorWithdrawAddressRequestProtoMsg): QueryDelegatorWithdrawAddressRequest;
    toProto(message: QueryDelegatorWithdrawAddressRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatorWithdrawAddressRequest): QueryDelegatorWithdrawAddressRequestProtoMsg;
};
export declare const QueryDelegatorWithdrawAddressResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDelegatorWithdrawAddressResponse;
    isSDK(o: any): o is QueryDelegatorWithdrawAddressResponseSDKType;
    isAmino(o: any): o is QueryDelegatorWithdrawAddressResponseAmino;
    encode(message: QueryDelegatorWithdrawAddressResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorWithdrawAddressResponse;
    fromJSON(object: any): QueryDelegatorWithdrawAddressResponse;
    toJSON(message: QueryDelegatorWithdrawAddressResponse): unknown;
    fromPartial(object: DeepPartial<QueryDelegatorWithdrawAddressResponse>): QueryDelegatorWithdrawAddressResponse;
    fromSDK(object: QueryDelegatorWithdrawAddressResponseSDKType): QueryDelegatorWithdrawAddressResponse;
    toSDK(message: QueryDelegatorWithdrawAddressResponse): QueryDelegatorWithdrawAddressResponseSDKType;
    fromAmino(object: QueryDelegatorWithdrawAddressResponseAmino): QueryDelegatorWithdrawAddressResponse;
    toAmino(message: QueryDelegatorWithdrawAddressResponse): QueryDelegatorWithdrawAddressResponseAmino;
    fromAminoMsg(object: QueryDelegatorWithdrawAddressResponseAminoMsg): QueryDelegatorWithdrawAddressResponse;
    toAminoMsg(message: QueryDelegatorWithdrawAddressResponse): QueryDelegatorWithdrawAddressResponseAminoMsg;
    fromProtoMsg(message: QueryDelegatorWithdrawAddressResponseProtoMsg): QueryDelegatorWithdrawAddressResponse;
    toProto(message: QueryDelegatorWithdrawAddressResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatorWithdrawAddressResponse): QueryDelegatorWithdrawAddressResponseProtoMsg;
};
export declare const QueryCommunityPoolRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryCommunityPoolRequest;
    isSDK(o: any): o is QueryCommunityPoolRequestSDKType;
    isAmino(o: any): o is QueryCommunityPoolRequestAmino;
    encode(_: QueryCommunityPoolRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCommunityPoolRequest;
    fromJSON(_: any): QueryCommunityPoolRequest;
    toJSON(_: QueryCommunityPoolRequest): unknown;
    fromPartial(_: DeepPartial<QueryCommunityPoolRequest>): QueryCommunityPoolRequest;
    fromSDK(_: QueryCommunityPoolRequestSDKType): QueryCommunityPoolRequest;
    toSDK(_: QueryCommunityPoolRequest): QueryCommunityPoolRequestSDKType;
    fromAmino(_: QueryCommunityPoolRequestAmino): QueryCommunityPoolRequest;
    toAmino(_: QueryCommunityPoolRequest): QueryCommunityPoolRequestAmino;
    fromAminoMsg(object: QueryCommunityPoolRequestAminoMsg): QueryCommunityPoolRequest;
    toAminoMsg(message: QueryCommunityPoolRequest): QueryCommunityPoolRequestAminoMsg;
    fromProtoMsg(message: QueryCommunityPoolRequestProtoMsg): QueryCommunityPoolRequest;
    toProto(message: QueryCommunityPoolRequest): Uint8Array;
    toProtoMsg(message: QueryCommunityPoolRequest): QueryCommunityPoolRequestProtoMsg;
};
export declare const QueryCommunityPoolResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryCommunityPoolResponse;
    isSDK(o: any): o is QueryCommunityPoolResponseSDKType;
    isAmino(o: any): o is QueryCommunityPoolResponseAmino;
    encode(message: QueryCommunityPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryCommunityPoolResponse;
    fromJSON(object: any): QueryCommunityPoolResponse;
    toJSON(message: QueryCommunityPoolResponse): unknown;
    fromPartial(object: DeepPartial<QueryCommunityPoolResponse>): QueryCommunityPoolResponse;
    fromSDK(object: QueryCommunityPoolResponseSDKType): QueryCommunityPoolResponse;
    toSDK(message: QueryCommunityPoolResponse): QueryCommunityPoolResponseSDKType;
    fromAmino(object: QueryCommunityPoolResponseAmino): QueryCommunityPoolResponse;
    toAmino(message: QueryCommunityPoolResponse): QueryCommunityPoolResponseAmino;
    fromAminoMsg(object: QueryCommunityPoolResponseAminoMsg): QueryCommunityPoolResponse;
    toAminoMsg(message: QueryCommunityPoolResponse): QueryCommunityPoolResponseAminoMsg;
    fromProtoMsg(message: QueryCommunityPoolResponseProtoMsg): QueryCommunityPoolResponse;
    toProto(message: QueryCommunityPoolResponse): Uint8Array;
    toProtoMsg(message: QueryCommunityPoolResponse): QueryCommunityPoolResponseProtoMsg;
};
