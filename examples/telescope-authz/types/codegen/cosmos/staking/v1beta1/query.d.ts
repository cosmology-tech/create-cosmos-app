import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Validator, ValidatorAmino, ValidatorSDKType, DelegationResponse, DelegationResponseAmino, DelegationResponseSDKType, UnbondingDelegation, UnbondingDelegationAmino, UnbondingDelegationSDKType, RedelegationResponse, RedelegationResponseAmino, RedelegationResponseSDKType, HistoricalInfo, HistoricalInfoAmino, HistoricalInfoSDKType, Pool, PoolAmino, PoolSDKType, Params, ParamsAmino, ParamsSDKType } from "./staking";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequest {
    /** status enables to query for validators matching a given status. */
    status: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
export interface QueryValidatorsRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsRequest";
    value: Uint8Array;
}
/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequestAmino {
    /** status enables to query for validators matching a given status. */
    status?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryValidatorsRequestAminoMsg {
    type: "cosmos-sdk/QueryValidatorsRequest";
    value: QueryValidatorsRequestAmino;
}
/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequestSDKType {
    status: string;
    pagination?: PageRequestSDKType | undefined;
}
/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponse {
    /** validators contains all the queried validators. */
    validators: Validator[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
export interface QueryValidatorsResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorsResponse";
    value: Uint8Array;
}
/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponseAmino {
    /** validators contains all the queried validators. */
    validators?: ValidatorAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryValidatorsResponseAminoMsg {
    type: "cosmos-sdk/QueryValidatorsResponse";
    value: QueryValidatorsResponseAmino;
}
/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponseSDKType {
    validators: ValidatorSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequest {
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
}
export interface QueryValidatorRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorRequest";
    value: Uint8Array;
}
/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequestAmino {
    /** validator_addr defines the validator address to query for. */
    validator_addr?: string;
}
export interface QueryValidatorRequestAminoMsg {
    type: "cosmos-sdk/QueryValidatorRequest";
    value: QueryValidatorRequestAmino;
}
/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequestSDKType {
    validator_addr: string;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponse {
    /** validator defines the the validator info. */
    validator: Validator | undefined;
}
export interface QueryValidatorResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorResponse";
    value: Uint8Array;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponseAmino {
    /** validator defines the the validator info. */
    validator?: ValidatorAmino | undefined;
}
export interface QueryValidatorResponseAminoMsg {
    type: "cosmos-sdk/QueryValidatorResponse";
    value: QueryValidatorResponseAmino;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponseSDKType {
    validator: ValidatorSDKType | undefined;
}
/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequest {
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
export interface QueryValidatorDelegationsRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsRequest";
    value: Uint8Array;
}
/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequestAmino {
    /** validator_addr defines the validator address to query for. */
    validator_addr?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryValidatorDelegationsRequestAminoMsg {
    type: "cosmos-sdk/QueryValidatorDelegationsRequest";
    value: QueryValidatorDelegationsRequestAmino;
}
/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequestSDKType {
    validator_addr: string;
    pagination?: PageRequestSDKType | undefined;
}
/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponse {
    delegationResponses: DelegationResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
export interface QueryValidatorDelegationsResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorDelegationsResponse";
    value: Uint8Array;
}
/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponseAmino {
    delegation_responses?: DelegationResponseAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryValidatorDelegationsResponseAminoMsg {
    type: "cosmos-sdk/QueryValidatorDelegationsResponse";
    value: QueryValidatorDelegationsResponseAmino;
}
/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponseSDKType {
    delegation_responses: DelegationResponseSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequest {
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
export interface QueryValidatorUnbondingDelegationsRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsRequest";
    value: Uint8Array;
}
/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequestAmino {
    /** validator_addr defines the validator address to query for. */
    validator_addr?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryValidatorUnbondingDelegationsRequestAminoMsg {
    type: "cosmos-sdk/QueryValidatorUnbondingDelegationsRequest";
    value: QueryValidatorUnbondingDelegationsRequestAmino;
}
/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequestSDKType {
    validator_addr: string;
    pagination?: PageRequestSDKType | undefined;
}
/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponse {
    unbondingResponses: UnbondingDelegation[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
export interface QueryValidatorUnbondingDelegationsResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryValidatorUnbondingDelegationsResponse";
    value: Uint8Array;
}
/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponseAmino {
    unbonding_responses?: UnbondingDelegationAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryValidatorUnbondingDelegationsResponseAminoMsg {
    type: "cosmos-sdk/QueryValidatorUnbondingDelegationsResponse";
    value: QueryValidatorUnbondingDelegationsResponseAmino;
}
/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponseSDKType {
    unbonding_responses: UnbondingDelegationSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
}
export interface QueryDelegationRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegationRequest";
    value: Uint8Array;
}
/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequestAmino {
    /** delegator_addr defines the delegator address to query for. */
    delegator_addr?: string;
    /** validator_addr defines the validator address to query for. */
    validator_addr?: string;
}
export interface QueryDelegationRequestAminoMsg {
    type: "cosmos-sdk/QueryDelegationRequest";
    value: QueryDelegationRequestAmino;
}
/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequestSDKType {
    delegator_addr: string;
    validator_addr: string;
}
/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponse {
    /** delegation_responses defines the delegation info of a delegation. */
    delegationResponse?: DelegationResponse | undefined;
}
export interface QueryDelegationResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegationResponse";
    value: Uint8Array;
}
/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponseAmino {
    /** delegation_responses defines the delegation info of a delegation. */
    delegation_response?: DelegationResponseAmino | undefined;
}
export interface QueryDelegationResponseAminoMsg {
    type: "cosmos-sdk/QueryDelegationResponse";
    value: QueryDelegationResponseAmino;
}
/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponseSDKType {
    delegation_response?: DelegationResponseSDKType | undefined;
}
/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
}
export interface QueryUnbondingDelegationRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationRequest";
    value: Uint8Array;
}
/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequestAmino {
    /** delegator_addr defines the delegator address to query for. */
    delegator_addr?: string;
    /** validator_addr defines the validator address to query for. */
    validator_addr?: string;
}
export interface QueryUnbondingDelegationRequestAminoMsg {
    type: "cosmos-sdk/QueryUnbondingDelegationRequest";
    value: QueryUnbondingDelegationRequestAmino;
}
/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequestSDKType {
    delegator_addr: string;
    validator_addr: string;
}
/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface QueryUnbondingDelegationResponse {
    /** unbond defines the unbonding information of a delegation. */
    unbond: UnbondingDelegation | undefined;
}
export interface QueryUnbondingDelegationResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryUnbondingDelegationResponse";
    value: Uint8Array;
}
/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface QueryUnbondingDelegationResponseAmino {
    /** unbond defines the unbonding information of a delegation. */
    unbond?: UnbondingDelegationAmino | undefined;
}
export interface QueryUnbondingDelegationResponseAminoMsg {
    type: "cosmos-sdk/QueryUnbondingDelegationResponse";
    value: QueryUnbondingDelegationResponseAmino;
}
/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface QueryUnbondingDelegationResponseSDKType {
    unbond: UnbondingDelegationSDKType | undefined;
}
/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
export interface QueryDelegatorDelegationsRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsRequest";
    value: Uint8Array;
}
/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequestAmino {
    /** delegator_addr defines the delegator address to query for. */
    delegator_addr?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryDelegatorDelegationsRequestAminoMsg {
    type: "cosmos-sdk/QueryDelegatorDelegationsRequest";
    value: QueryDelegatorDelegationsRequestAmino;
}
/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequestSDKType {
    delegator_addr: string;
    pagination?: PageRequestSDKType | undefined;
}
/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponse {
    /** delegation_responses defines all the delegations' info of a delegator. */
    delegationResponses: DelegationResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
export interface QueryDelegatorDelegationsResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorDelegationsResponse";
    value: Uint8Array;
}
/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponseAmino {
    /** delegation_responses defines all the delegations' info of a delegator. */
    delegation_responses?: DelegationResponseAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryDelegatorDelegationsResponseAminoMsg {
    type: "cosmos-sdk/QueryDelegatorDelegationsResponse";
    value: QueryDelegatorDelegationsResponseAmino;
}
/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponseSDKType {
    delegation_responses: DelegationResponseSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
export interface QueryDelegatorUnbondingDelegationsRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsRequest";
    value: Uint8Array;
}
/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequestAmino {
    /** delegator_addr defines the delegator address to query for. */
    delegator_addr?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryDelegatorUnbondingDelegationsRequestAminoMsg {
    type: "cosmos-sdk/QueryDelegatorUnbondingDelegationsRequest";
    value: QueryDelegatorUnbondingDelegationsRequestAmino;
}
/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequestSDKType {
    delegator_addr: string;
    pagination?: PageRequestSDKType | undefined;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponse {
    unbondingResponses: UnbondingDelegation[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
export interface QueryDelegatorUnbondingDelegationsResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorUnbondingDelegationsResponse";
    value: Uint8Array;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponseAmino {
    unbonding_responses?: UnbondingDelegationAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryDelegatorUnbondingDelegationsResponseAminoMsg {
    type: "cosmos-sdk/QueryDelegatorUnbondingDelegationsResponse";
    value: QueryDelegatorUnbondingDelegationsResponseAmino;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponseSDKType {
    unbonding_responses: UnbondingDelegationSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** src_validator_addr defines the validator address to redelegate from. */
    srcValidatorAddr: string;
    /** dst_validator_addr defines the validator address to redelegate to. */
    dstValidatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
export interface QueryRedelegationsRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsRequest";
    value: Uint8Array;
}
/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsRequestAmino {
    /** delegator_addr defines the delegator address to query for. */
    delegator_addr?: string;
    /** src_validator_addr defines the validator address to redelegate from. */
    src_validator_addr?: string;
    /** dst_validator_addr defines the validator address to redelegate to. */
    dst_validator_addr?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryRedelegationsRequestAminoMsg {
    type: "cosmos-sdk/QueryRedelegationsRequest";
    value: QueryRedelegationsRequestAmino;
}
/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsRequestSDKType {
    delegator_addr: string;
    src_validator_addr: string;
    dst_validator_addr: string;
    pagination?: PageRequestSDKType | undefined;
}
/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsResponse {
    redelegationResponses: RedelegationResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
export interface QueryRedelegationsResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryRedelegationsResponse";
    value: Uint8Array;
}
/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsResponseAmino {
    redelegation_responses?: RedelegationResponseAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryRedelegationsResponseAminoMsg {
    type: "cosmos-sdk/QueryRedelegationsResponse";
    value: QueryRedelegationsResponseAmino;
}
/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsResponseSDKType {
    redelegation_responses: RedelegationResponseSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest | undefined;
}
export interface QueryDelegatorValidatorsRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsRequest";
    value: Uint8Array;
}
/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequestAmino {
    /** delegator_addr defines the delegator address to query for. */
    delegator_addr?: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequestAmino | undefined;
}
export interface QueryDelegatorValidatorsRequestAminoMsg {
    type: "cosmos-sdk/QueryDelegatorValidatorsRequest";
    value: QueryDelegatorValidatorsRequestAmino;
}
/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequestSDKType {
    delegator_addr: string;
    pagination?: PageRequestSDKType | undefined;
}
/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
    /** validators defines the the validators' info of a delegator. */
    validators: Validator[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse | undefined;
}
export interface QueryDelegatorValidatorsResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorsResponse";
    value: Uint8Array;
}
/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponseAmino {
    /** validators defines the the validators' info of a delegator. */
    validators?: ValidatorAmino[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponseAmino | undefined;
}
export interface QueryDelegatorValidatorsResponseAminoMsg {
    type: "cosmos-sdk/QueryDelegatorValidatorsResponse";
    value: QueryDelegatorValidatorsResponseAmino;
}
/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponseSDKType {
    validators: ValidatorSDKType[];
    pagination?: PageResponseSDKType | undefined;
}
/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegatorAddr: string;
    /** validator_addr defines the validator address to query for. */
    validatorAddr: string;
}
export interface QueryDelegatorValidatorRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorRequest";
    value: Uint8Array;
}
/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequestAmino {
    /** delegator_addr defines the delegator address to query for. */
    delegator_addr?: string;
    /** validator_addr defines the validator address to query for. */
    validator_addr?: string;
}
export interface QueryDelegatorValidatorRequestAminoMsg {
    type: "cosmos-sdk/QueryDelegatorValidatorRequest";
    value: QueryDelegatorValidatorRequestAmino;
}
/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequestSDKType {
    delegator_addr: string;
    validator_addr: string;
}
/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponse {
    /** validator defines the the validator info. */
    validator: Validator | undefined;
}
export interface QueryDelegatorValidatorResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryDelegatorValidatorResponse";
    value: Uint8Array;
}
/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponseAmino {
    /** validator defines the the validator info. */
    validator?: ValidatorAmino | undefined;
}
export interface QueryDelegatorValidatorResponseAminoMsg {
    type: "cosmos-sdk/QueryDelegatorValidatorResponse";
    value: QueryDelegatorValidatorResponseAmino;
}
/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponseSDKType {
    validator: ValidatorSDKType | undefined;
}
/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoRequest {
    /** height defines at which height to query the historical info. */
    height: bigint;
}
export interface QueryHistoricalInfoRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoRequest";
    value: Uint8Array;
}
/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoRequestAmino {
    /** height defines at which height to query the historical info. */
    height?: string;
}
export interface QueryHistoricalInfoRequestAminoMsg {
    type: "cosmos-sdk/QueryHistoricalInfoRequest";
    value: QueryHistoricalInfoRequestAmino;
}
/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoRequestSDKType {
    height: bigint;
}
/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoResponse {
    /** hist defines the historical info at the given height. */
    hist?: HistoricalInfo | undefined;
}
export interface QueryHistoricalInfoResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryHistoricalInfoResponse";
    value: Uint8Array;
}
/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoResponseAmino {
    /** hist defines the historical info at the given height. */
    hist?: HistoricalInfoAmino | undefined;
}
export interface QueryHistoricalInfoResponseAminoMsg {
    type: "cosmos-sdk/QueryHistoricalInfoResponse";
    value: QueryHistoricalInfoResponseAmino;
}
/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoResponseSDKType {
    hist?: HistoricalInfoSDKType | undefined;
}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {
}
export interface QueryPoolRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryPoolRequest";
    value: Uint8Array;
}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequestAmino {
}
export interface QueryPoolRequestAminoMsg {
    type: "cosmos-sdk/QueryPoolRequest";
    value: QueryPoolRequestAmino;
}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequestSDKType {
}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
    /** pool defines the pool info. */
    pool: Pool | undefined;
}
export interface QueryPoolResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryPoolResponse";
    value: Uint8Array;
}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponseAmino {
    /** pool defines the pool info. */
    pool?: PoolAmino | undefined;
}
export interface QueryPoolResponseAminoMsg {
    type: "cosmos-sdk/QueryPoolResponse";
    value: QueryPoolResponseAmino;
}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponseSDKType {
    pool: PoolSDKType | undefined;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
export interface QueryParamsRequestProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryParamsRequest";
    value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {
}
export interface QueryParamsRequestAminoMsg {
    type: "cosmos-sdk/QueryParamsRequest";
    value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryParamsResponseProtoMsg {
    typeUrl: "/cosmos.staking.v1beta1.QueryParamsResponse";
    value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
    /** params holds all the parameters of this module. */
    params?: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
    type: "cosmos-sdk/QueryParamsResponse";
    value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
    params: ParamsSDKType | undefined;
}
export declare const QueryValidatorsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryValidatorsRequest;
    isSDK(o: any): o is QueryValidatorsRequestSDKType;
    isAmino(o: any): o is QueryValidatorsRequestAmino;
    encode(message: QueryValidatorsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorsRequest;
    fromJSON(object: any): QueryValidatorsRequest;
    toJSON(message: QueryValidatorsRequest): unknown;
    fromPartial(object: DeepPartial<QueryValidatorsRequest>): QueryValidatorsRequest;
    fromSDK(object: QueryValidatorsRequestSDKType): QueryValidatorsRequest;
    toSDK(message: QueryValidatorsRequest): QueryValidatorsRequestSDKType;
    fromAmino(object: QueryValidatorsRequestAmino): QueryValidatorsRequest;
    toAmino(message: QueryValidatorsRequest): QueryValidatorsRequestAmino;
    fromAminoMsg(object: QueryValidatorsRequestAminoMsg): QueryValidatorsRequest;
    toAminoMsg(message: QueryValidatorsRequest): QueryValidatorsRequestAminoMsg;
    fromProtoMsg(message: QueryValidatorsRequestProtoMsg): QueryValidatorsRequest;
    toProto(message: QueryValidatorsRequest): Uint8Array;
    toProtoMsg(message: QueryValidatorsRequest): QueryValidatorsRequestProtoMsg;
};
export declare const QueryValidatorsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryValidatorsResponse;
    isSDK(o: any): o is QueryValidatorsResponseSDKType;
    isAmino(o: any): o is QueryValidatorsResponseAmino;
    encode(message: QueryValidatorsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorsResponse;
    fromJSON(object: any): QueryValidatorsResponse;
    toJSON(message: QueryValidatorsResponse): unknown;
    fromPartial(object: DeepPartial<QueryValidatorsResponse>): QueryValidatorsResponse;
    fromSDK(object: QueryValidatorsResponseSDKType): QueryValidatorsResponse;
    toSDK(message: QueryValidatorsResponse): QueryValidatorsResponseSDKType;
    fromAmino(object: QueryValidatorsResponseAmino): QueryValidatorsResponse;
    toAmino(message: QueryValidatorsResponse): QueryValidatorsResponseAmino;
    fromAminoMsg(object: QueryValidatorsResponseAminoMsg): QueryValidatorsResponse;
    toAminoMsg(message: QueryValidatorsResponse): QueryValidatorsResponseAminoMsg;
    fromProtoMsg(message: QueryValidatorsResponseProtoMsg): QueryValidatorsResponse;
    toProto(message: QueryValidatorsResponse): Uint8Array;
    toProtoMsg(message: QueryValidatorsResponse): QueryValidatorsResponseProtoMsg;
};
export declare const QueryValidatorRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryValidatorRequest;
    isSDK(o: any): o is QueryValidatorRequestSDKType;
    isAmino(o: any): o is QueryValidatorRequestAmino;
    encode(message: QueryValidatorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorRequest;
    fromJSON(object: any): QueryValidatorRequest;
    toJSON(message: QueryValidatorRequest): unknown;
    fromPartial(object: DeepPartial<QueryValidatorRequest>): QueryValidatorRequest;
    fromSDK(object: QueryValidatorRequestSDKType): QueryValidatorRequest;
    toSDK(message: QueryValidatorRequest): QueryValidatorRequestSDKType;
    fromAmino(object: QueryValidatorRequestAmino): QueryValidatorRequest;
    toAmino(message: QueryValidatorRequest): QueryValidatorRequestAmino;
    fromAminoMsg(object: QueryValidatorRequestAminoMsg): QueryValidatorRequest;
    toAminoMsg(message: QueryValidatorRequest): QueryValidatorRequestAminoMsg;
    fromProtoMsg(message: QueryValidatorRequestProtoMsg): QueryValidatorRequest;
    toProto(message: QueryValidatorRequest): Uint8Array;
    toProtoMsg(message: QueryValidatorRequest): QueryValidatorRequestProtoMsg;
};
export declare const QueryValidatorResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryValidatorResponse;
    isSDK(o: any): o is QueryValidatorResponseSDKType;
    isAmino(o: any): o is QueryValidatorResponseAmino;
    encode(message: QueryValidatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorResponse;
    fromJSON(object: any): QueryValidatorResponse;
    toJSON(message: QueryValidatorResponse): unknown;
    fromPartial(object: DeepPartial<QueryValidatorResponse>): QueryValidatorResponse;
    fromSDK(object: QueryValidatorResponseSDKType): QueryValidatorResponse;
    toSDK(message: QueryValidatorResponse): QueryValidatorResponseSDKType;
    fromAmino(object: QueryValidatorResponseAmino): QueryValidatorResponse;
    toAmino(message: QueryValidatorResponse): QueryValidatorResponseAmino;
    fromAminoMsg(object: QueryValidatorResponseAminoMsg): QueryValidatorResponse;
    toAminoMsg(message: QueryValidatorResponse): QueryValidatorResponseAminoMsg;
    fromProtoMsg(message: QueryValidatorResponseProtoMsg): QueryValidatorResponse;
    toProto(message: QueryValidatorResponse): Uint8Array;
    toProtoMsg(message: QueryValidatorResponse): QueryValidatorResponseProtoMsg;
};
export declare const QueryValidatorDelegationsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryValidatorDelegationsRequest;
    isSDK(o: any): o is QueryValidatorDelegationsRequestSDKType;
    isAmino(o: any): o is QueryValidatorDelegationsRequestAmino;
    encode(message: QueryValidatorDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorDelegationsRequest;
    fromJSON(object: any): QueryValidatorDelegationsRequest;
    toJSON(message: QueryValidatorDelegationsRequest): unknown;
    fromPartial(object: DeepPartial<QueryValidatorDelegationsRequest>): QueryValidatorDelegationsRequest;
    fromSDK(object: QueryValidatorDelegationsRequestSDKType): QueryValidatorDelegationsRequest;
    toSDK(message: QueryValidatorDelegationsRequest): QueryValidatorDelegationsRequestSDKType;
    fromAmino(object: QueryValidatorDelegationsRequestAmino): QueryValidatorDelegationsRequest;
    toAmino(message: QueryValidatorDelegationsRequest): QueryValidatorDelegationsRequestAmino;
    fromAminoMsg(object: QueryValidatorDelegationsRequestAminoMsg): QueryValidatorDelegationsRequest;
    toAminoMsg(message: QueryValidatorDelegationsRequest): QueryValidatorDelegationsRequestAminoMsg;
    fromProtoMsg(message: QueryValidatorDelegationsRequestProtoMsg): QueryValidatorDelegationsRequest;
    toProto(message: QueryValidatorDelegationsRequest): Uint8Array;
    toProtoMsg(message: QueryValidatorDelegationsRequest): QueryValidatorDelegationsRequestProtoMsg;
};
export declare const QueryValidatorDelegationsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryValidatorDelegationsResponse;
    isSDK(o: any): o is QueryValidatorDelegationsResponseSDKType;
    isAmino(o: any): o is QueryValidatorDelegationsResponseAmino;
    encode(message: QueryValidatorDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorDelegationsResponse;
    fromJSON(object: any): QueryValidatorDelegationsResponse;
    toJSON(message: QueryValidatorDelegationsResponse): unknown;
    fromPartial(object: DeepPartial<QueryValidatorDelegationsResponse>): QueryValidatorDelegationsResponse;
    fromSDK(object: QueryValidatorDelegationsResponseSDKType): QueryValidatorDelegationsResponse;
    toSDK(message: QueryValidatorDelegationsResponse): QueryValidatorDelegationsResponseSDKType;
    fromAmino(object: QueryValidatorDelegationsResponseAmino): QueryValidatorDelegationsResponse;
    toAmino(message: QueryValidatorDelegationsResponse): QueryValidatorDelegationsResponseAmino;
    fromAminoMsg(object: QueryValidatorDelegationsResponseAminoMsg): QueryValidatorDelegationsResponse;
    toAminoMsg(message: QueryValidatorDelegationsResponse): QueryValidatorDelegationsResponseAminoMsg;
    fromProtoMsg(message: QueryValidatorDelegationsResponseProtoMsg): QueryValidatorDelegationsResponse;
    toProto(message: QueryValidatorDelegationsResponse): Uint8Array;
    toProtoMsg(message: QueryValidatorDelegationsResponse): QueryValidatorDelegationsResponseProtoMsg;
};
export declare const QueryValidatorUnbondingDelegationsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryValidatorUnbondingDelegationsRequest;
    isSDK(o: any): o is QueryValidatorUnbondingDelegationsRequestSDKType;
    isAmino(o: any): o is QueryValidatorUnbondingDelegationsRequestAmino;
    encode(message: QueryValidatorUnbondingDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsRequest;
    fromJSON(object: any): QueryValidatorUnbondingDelegationsRequest;
    toJSON(message: QueryValidatorUnbondingDelegationsRequest): unknown;
    fromPartial(object: DeepPartial<QueryValidatorUnbondingDelegationsRequest>): QueryValidatorUnbondingDelegationsRequest;
    fromSDK(object: QueryValidatorUnbondingDelegationsRequestSDKType): QueryValidatorUnbondingDelegationsRequest;
    toSDK(message: QueryValidatorUnbondingDelegationsRequest): QueryValidatorUnbondingDelegationsRequestSDKType;
    fromAmino(object: QueryValidatorUnbondingDelegationsRequestAmino): QueryValidatorUnbondingDelegationsRequest;
    toAmino(message: QueryValidatorUnbondingDelegationsRequest): QueryValidatorUnbondingDelegationsRequestAmino;
    fromAminoMsg(object: QueryValidatorUnbondingDelegationsRequestAminoMsg): QueryValidatorUnbondingDelegationsRequest;
    toAminoMsg(message: QueryValidatorUnbondingDelegationsRequest): QueryValidatorUnbondingDelegationsRequestAminoMsg;
    fromProtoMsg(message: QueryValidatorUnbondingDelegationsRequestProtoMsg): QueryValidatorUnbondingDelegationsRequest;
    toProto(message: QueryValidatorUnbondingDelegationsRequest): Uint8Array;
    toProtoMsg(message: QueryValidatorUnbondingDelegationsRequest): QueryValidatorUnbondingDelegationsRequestProtoMsg;
};
export declare const QueryValidatorUnbondingDelegationsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryValidatorUnbondingDelegationsResponse;
    isSDK(o: any): o is QueryValidatorUnbondingDelegationsResponseSDKType;
    isAmino(o: any): o is QueryValidatorUnbondingDelegationsResponseAmino;
    encode(message: QueryValidatorUnbondingDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorUnbondingDelegationsResponse;
    fromJSON(object: any): QueryValidatorUnbondingDelegationsResponse;
    toJSON(message: QueryValidatorUnbondingDelegationsResponse): unknown;
    fromPartial(object: DeepPartial<QueryValidatorUnbondingDelegationsResponse>): QueryValidatorUnbondingDelegationsResponse;
    fromSDK(object: QueryValidatorUnbondingDelegationsResponseSDKType): QueryValidatorUnbondingDelegationsResponse;
    toSDK(message: QueryValidatorUnbondingDelegationsResponse): QueryValidatorUnbondingDelegationsResponseSDKType;
    fromAmino(object: QueryValidatorUnbondingDelegationsResponseAmino): QueryValidatorUnbondingDelegationsResponse;
    toAmino(message: QueryValidatorUnbondingDelegationsResponse): QueryValidatorUnbondingDelegationsResponseAmino;
    fromAminoMsg(object: QueryValidatorUnbondingDelegationsResponseAminoMsg): QueryValidatorUnbondingDelegationsResponse;
    toAminoMsg(message: QueryValidatorUnbondingDelegationsResponse): QueryValidatorUnbondingDelegationsResponseAminoMsg;
    fromProtoMsg(message: QueryValidatorUnbondingDelegationsResponseProtoMsg): QueryValidatorUnbondingDelegationsResponse;
    toProto(message: QueryValidatorUnbondingDelegationsResponse): Uint8Array;
    toProtoMsg(message: QueryValidatorUnbondingDelegationsResponse): QueryValidatorUnbondingDelegationsResponseProtoMsg;
};
export declare const QueryDelegationRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDelegationRequest;
    isSDK(o: any): o is QueryDelegationRequestSDKType;
    isAmino(o: any): o is QueryDelegationRequestAmino;
    encode(message: QueryDelegationRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationRequest;
    fromJSON(object: any): QueryDelegationRequest;
    toJSON(message: QueryDelegationRequest): unknown;
    fromPartial(object: DeepPartial<QueryDelegationRequest>): QueryDelegationRequest;
    fromSDK(object: QueryDelegationRequestSDKType): QueryDelegationRequest;
    toSDK(message: QueryDelegationRequest): QueryDelegationRequestSDKType;
    fromAmino(object: QueryDelegationRequestAmino): QueryDelegationRequest;
    toAmino(message: QueryDelegationRequest): QueryDelegationRequestAmino;
    fromAminoMsg(object: QueryDelegationRequestAminoMsg): QueryDelegationRequest;
    toAminoMsg(message: QueryDelegationRequest): QueryDelegationRequestAminoMsg;
    fromProtoMsg(message: QueryDelegationRequestProtoMsg): QueryDelegationRequest;
    toProto(message: QueryDelegationRequest): Uint8Array;
    toProtoMsg(message: QueryDelegationRequest): QueryDelegationRequestProtoMsg;
};
export declare const QueryDelegationResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDelegationResponse;
    isSDK(o: any): o is QueryDelegationResponseSDKType;
    isAmino(o: any): o is QueryDelegationResponseAmino;
    encode(message: QueryDelegationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationResponse;
    fromJSON(object: any): QueryDelegationResponse;
    toJSON(message: QueryDelegationResponse): unknown;
    fromPartial(object: DeepPartial<QueryDelegationResponse>): QueryDelegationResponse;
    fromSDK(object: QueryDelegationResponseSDKType): QueryDelegationResponse;
    toSDK(message: QueryDelegationResponse): QueryDelegationResponseSDKType;
    fromAmino(object: QueryDelegationResponseAmino): QueryDelegationResponse;
    toAmino(message: QueryDelegationResponse): QueryDelegationResponseAmino;
    fromAminoMsg(object: QueryDelegationResponseAminoMsg): QueryDelegationResponse;
    toAminoMsg(message: QueryDelegationResponse): QueryDelegationResponseAminoMsg;
    fromProtoMsg(message: QueryDelegationResponseProtoMsg): QueryDelegationResponse;
    toProto(message: QueryDelegationResponse): Uint8Array;
    toProtoMsg(message: QueryDelegationResponse): QueryDelegationResponseProtoMsg;
};
export declare const QueryUnbondingDelegationRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryUnbondingDelegationRequest;
    isSDK(o: any): o is QueryUnbondingDelegationRequestSDKType;
    isAmino(o: any): o is QueryUnbondingDelegationRequestAmino;
    encode(message: QueryUnbondingDelegationRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUnbondingDelegationRequest;
    fromJSON(object: any): QueryUnbondingDelegationRequest;
    toJSON(message: QueryUnbondingDelegationRequest): unknown;
    fromPartial(object: DeepPartial<QueryUnbondingDelegationRequest>): QueryUnbondingDelegationRequest;
    fromSDK(object: QueryUnbondingDelegationRequestSDKType): QueryUnbondingDelegationRequest;
    toSDK(message: QueryUnbondingDelegationRequest): QueryUnbondingDelegationRequestSDKType;
    fromAmino(object: QueryUnbondingDelegationRequestAmino): QueryUnbondingDelegationRequest;
    toAmino(message: QueryUnbondingDelegationRequest): QueryUnbondingDelegationRequestAmino;
    fromAminoMsg(object: QueryUnbondingDelegationRequestAminoMsg): QueryUnbondingDelegationRequest;
    toAminoMsg(message: QueryUnbondingDelegationRequest): QueryUnbondingDelegationRequestAminoMsg;
    fromProtoMsg(message: QueryUnbondingDelegationRequestProtoMsg): QueryUnbondingDelegationRequest;
    toProto(message: QueryUnbondingDelegationRequest): Uint8Array;
    toProtoMsg(message: QueryUnbondingDelegationRequest): QueryUnbondingDelegationRequestProtoMsg;
};
export declare const QueryUnbondingDelegationResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryUnbondingDelegationResponse;
    isSDK(o: any): o is QueryUnbondingDelegationResponseSDKType;
    isAmino(o: any): o is QueryUnbondingDelegationResponseAmino;
    encode(message: QueryUnbondingDelegationResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryUnbondingDelegationResponse;
    fromJSON(object: any): QueryUnbondingDelegationResponse;
    toJSON(message: QueryUnbondingDelegationResponse): unknown;
    fromPartial(object: DeepPartial<QueryUnbondingDelegationResponse>): QueryUnbondingDelegationResponse;
    fromSDK(object: QueryUnbondingDelegationResponseSDKType): QueryUnbondingDelegationResponse;
    toSDK(message: QueryUnbondingDelegationResponse): QueryUnbondingDelegationResponseSDKType;
    fromAmino(object: QueryUnbondingDelegationResponseAmino): QueryUnbondingDelegationResponse;
    toAmino(message: QueryUnbondingDelegationResponse): QueryUnbondingDelegationResponseAmino;
    fromAminoMsg(object: QueryUnbondingDelegationResponseAminoMsg): QueryUnbondingDelegationResponse;
    toAminoMsg(message: QueryUnbondingDelegationResponse): QueryUnbondingDelegationResponseAminoMsg;
    fromProtoMsg(message: QueryUnbondingDelegationResponseProtoMsg): QueryUnbondingDelegationResponse;
    toProto(message: QueryUnbondingDelegationResponse): Uint8Array;
    toProtoMsg(message: QueryUnbondingDelegationResponse): QueryUnbondingDelegationResponseProtoMsg;
};
export declare const QueryDelegatorDelegationsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDelegatorDelegationsRequest;
    isSDK(o: any): o is QueryDelegatorDelegationsRequestSDKType;
    isAmino(o: any): o is QueryDelegatorDelegationsRequestAmino;
    encode(message: QueryDelegatorDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorDelegationsRequest;
    fromJSON(object: any): QueryDelegatorDelegationsRequest;
    toJSON(message: QueryDelegatorDelegationsRequest): unknown;
    fromPartial(object: DeepPartial<QueryDelegatorDelegationsRequest>): QueryDelegatorDelegationsRequest;
    fromSDK(object: QueryDelegatorDelegationsRequestSDKType): QueryDelegatorDelegationsRequest;
    toSDK(message: QueryDelegatorDelegationsRequest): QueryDelegatorDelegationsRequestSDKType;
    fromAmino(object: QueryDelegatorDelegationsRequestAmino): QueryDelegatorDelegationsRequest;
    toAmino(message: QueryDelegatorDelegationsRequest): QueryDelegatorDelegationsRequestAmino;
    fromAminoMsg(object: QueryDelegatorDelegationsRequestAminoMsg): QueryDelegatorDelegationsRequest;
    toAminoMsg(message: QueryDelegatorDelegationsRequest): QueryDelegatorDelegationsRequestAminoMsg;
    fromProtoMsg(message: QueryDelegatorDelegationsRequestProtoMsg): QueryDelegatorDelegationsRequest;
    toProto(message: QueryDelegatorDelegationsRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatorDelegationsRequest): QueryDelegatorDelegationsRequestProtoMsg;
};
export declare const QueryDelegatorDelegationsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDelegatorDelegationsResponse;
    isSDK(o: any): o is QueryDelegatorDelegationsResponseSDKType;
    isAmino(o: any): o is QueryDelegatorDelegationsResponseAmino;
    encode(message: QueryDelegatorDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorDelegationsResponse;
    fromJSON(object: any): QueryDelegatorDelegationsResponse;
    toJSON(message: QueryDelegatorDelegationsResponse): unknown;
    fromPartial(object: DeepPartial<QueryDelegatorDelegationsResponse>): QueryDelegatorDelegationsResponse;
    fromSDK(object: QueryDelegatorDelegationsResponseSDKType): QueryDelegatorDelegationsResponse;
    toSDK(message: QueryDelegatorDelegationsResponse): QueryDelegatorDelegationsResponseSDKType;
    fromAmino(object: QueryDelegatorDelegationsResponseAmino): QueryDelegatorDelegationsResponse;
    toAmino(message: QueryDelegatorDelegationsResponse): QueryDelegatorDelegationsResponseAmino;
    fromAminoMsg(object: QueryDelegatorDelegationsResponseAminoMsg): QueryDelegatorDelegationsResponse;
    toAminoMsg(message: QueryDelegatorDelegationsResponse): QueryDelegatorDelegationsResponseAminoMsg;
    fromProtoMsg(message: QueryDelegatorDelegationsResponseProtoMsg): QueryDelegatorDelegationsResponse;
    toProto(message: QueryDelegatorDelegationsResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatorDelegationsResponse): QueryDelegatorDelegationsResponseProtoMsg;
};
export declare const QueryDelegatorUnbondingDelegationsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDelegatorUnbondingDelegationsRequest;
    isSDK(o: any): o is QueryDelegatorUnbondingDelegationsRequestSDKType;
    isAmino(o: any): o is QueryDelegatorUnbondingDelegationsRequestAmino;
    encode(message: QueryDelegatorUnbondingDelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsRequest;
    fromJSON(object: any): QueryDelegatorUnbondingDelegationsRequest;
    toJSON(message: QueryDelegatorUnbondingDelegationsRequest): unknown;
    fromPartial(object: DeepPartial<QueryDelegatorUnbondingDelegationsRequest>): QueryDelegatorUnbondingDelegationsRequest;
    fromSDK(object: QueryDelegatorUnbondingDelegationsRequestSDKType): QueryDelegatorUnbondingDelegationsRequest;
    toSDK(message: QueryDelegatorUnbondingDelegationsRequest): QueryDelegatorUnbondingDelegationsRequestSDKType;
    fromAmino(object: QueryDelegatorUnbondingDelegationsRequestAmino): QueryDelegatorUnbondingDelegationsRequest;
    toAmino(message: QueryDelegatorUnbondingDelegationsRequest): QueryDelegatorUnbondingDelegationsRequestAmino;
    fromAminoMsg(object: QueryDelegatorUnbondingDelegationsRequestAminoMsg): QueryDelegatorUnbondingDelegationsRequest;
    toAminoMsg(message: QueryDelegatorUnbondingDelegationsRequest): QueryDelegatorUnbondingDelegationsRequestAminoMsg;
    fromProtoMsg(message: QueryDelegatorUnbondingDelegationsRequestProtoMsg): QueryDelegatorUnbondingDelegationsRequest;
    toProto(message: QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatorUnbondingDelegationsRequest): QueryDelegatorUnbondingDelegationsRequestProtoMsg;
};
export declare const QueryDelegatorUnbondingDelegationsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDelegatorUnbondingDelegationsResponse;
    isSDK(o: any): o is QueryDelegatorUnbondingDelegationsResponseSDKType;
    isAmino(o: any): o is QueryDelegatorUnbondingDelegationsResponseAmino;
    encode(message: QueryDelegatorUnbondingDelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorUnbondingDelegationsResponse;
    fromJSON(object: any): QueryDelegatorUnbondingDelegationsResponse;
    toJSON(message: QueryDelegatorUnbondingDelegationsResponse): unknown;
    fromPartial(object: DeepPartial<QueryDelegatorUnbondingDelegationsResponse>): QueryDelegatorUnbondingDelegationsResponse;
    fromSDK(object: QueryDelegatorUnbondingDelegationsResponseSDKType): QueryDelegatorUnbondingDelegationsResponse;
    toSDK(message: QueryDelegatorUnbondingDelegationsResponse): QueryDelegatorUnbondingDelegationsResponseSDKType;
    fromAmino(object: QueryDelegatorUnbondingDelegationsResponseAmino): QueryDelegatorUnbondingDelegationsResponse;
    toAmino(message: QueryDelegatorUnbondingDelegationsResponse): QueryDelegatorUnbondingDelegationsResponseAmino;
    fromAminoMsg(object: QueryDelegatorUnbondingDelegationsResponseAminoMsg): QueryDelegatorUnbondingDelegationsResponse;
    toAminoMsg(message: QueryDelegatorUnbondingDelegationsResponse): QueryDelegatorUnbondingDelegationsResponseAminoMsg;
    fromProtoMsg(message: QueryDelegatorUnbondingDelegationsResponseProtoMsg): QueryDelegatorUnbondingDelegationsResponse;
    toProto(message: QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatorUnbondingDelegationsResponse): QueryDelegatorUnbondingDelegationsResponseProtoMsg;
};
export declare const QueryRedelegationsRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryRedelegationsRequest;
    isSDK(o: any): o is QueryRedelegationsRequestSDKType;
    isAmino(o: any): o is QueryRedelegationsRequestAmino;
    encode(message: QueryRedelegationsRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRedelegationsRequest;
    fromJSON(object: any): QueryRedelegationsRequest;
    toJSON(message: QueryRedelegationsRequest): unknown;
    fromPartial(object: DeepPartial<QueryRedelegationsRequest>): QueryRedelegationsRequest;
    fromSDK(object: QueryRedelegationsRequestSDKType): QueryRedelegationsRequest;
    toSDK(message: QueryRedelegationsRequest): QueryRedelegationsRequestSDKType;
    fromAmino(object: QueryRedelegationsRequestAmino): QueryRedelegationsRequest;
    toAmino(message: QueryRedelegationsRequest): QueryRedelegationsRequestAmino;
    fromAminoMsg(object: QueryRedelegationsRequestAminoMsg): QueryRedelegationsRequest;
    toAminoMsg(message: QueryRedelegationsRequest): QueryRedelegationsRequestAminoMsg;
    fromProtoMsg(message: QueryRedelegationsRequestProtoMsg): QueryRedelegationsRequest;
    toProto(message: QueryRedelegationsRequest): Uint8Array;
    toProtoMsg(message: QueryRedelegationsRequest): QueryRedelegationsRequestProtoMsg;
};
export declare const QueryRedelegationsResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryRedelegationsResponse;
    isSDK(o: any): o is QueryRedelegationsResponseSDKType;
    isAmino(o: any): o is QueryRedelegationsResponseAmino;
    encode(message: QueryRedelegationsResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryRedelegationsResponse;
    fromJSON(object: any): QueryRedelegationsResponse;
    toJSON(message: QueryRedelegationsResponse): unknown;
    fromPartial(object: DeepPartial<QueryRedelegationsResponse>): QueryRedelegationsResponse;
    fromSDK(object: QueryRedelegationsResponseSDKType): QueryRedelegationsResponse;
    toSDK(message: QueryRedelegationsResponse): QueryRedelegationsResponseSDKType;
    fromAmino(object: QueryRedelegationsResponseAmino): QueryRedelegationsResponse;
    toAmino(message: QueryRedelegationsResponse): QueryRedelegationsResponseAmino;
    fromAminoMsg(object: QueryRedelegationsResponseAminoMsg): QueryRedelegationsResponse;
    toAminoMsg(message: QueryRedelegationsResponse): QueryRedelegationsResponseAminoMsg;
    fromProtoMsg(message: QueryRedelegationsResponseProtoMsg): QueryRedelegationsResponse;
    toProto(message: QueryRedelegationsResponse): Uint8Array;
    toProtoMsg(message: QueryRedelegationsResponse): QueryRedelegationsResponseProtoMsg;
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
export declare const QueryDelegatorValidatorRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDelegatorValidatorRequest;
    isSDK(o: any): o is QueryDelegatorValidatorRequestSDKType;
    isAmino(o: any): o is QueryDelegatorValidatorRequestAmino;
    encode(message: QueryDelegatorValidatorRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorRequest;
    fromJSON(object: any): QueryDelegatorValidatorRequest;
    toJSON(message: QueryDelegatorValidatorRequest): unknown;
    fromPartial(object: DeepPartial<QueryDelegatorValidatorRequest>): QueryDelegatorValidatorRequest;
    fromSDK(object: QueryDelegatorValidatorRequestSDKType): QueryDelegatorValidatorRequest;
    toSDK(message: QueryDelegatorValidatorRequest): QueryDelegatorValidatorRequestSDKType;
    fromAmino(object: QueryDelegatorValidatorRequestAmino): QueryDelegatorValidatorRequest;
    toAmino(message: QueryDelegatorValidatorRequest): QueryDelegatorValidatorRequestAmino;
    fromAminoMsg(object: QueryDelegatorValidatorRequestAminoMsg): QueryDelegatorValidatorRequest;
    toAminoMsg(message: QueryDelegatorValidatorRequest): QueryDelegatorValidatorRequestAminoMsg;
    fromProtoMsg(message: QueryDelegatorValidatorRequestProtoMsg): QueryDelegatorValidatorRequest;
    toProto(message: QueryDelegatorValidatorRequest): Uint8Array;
    toProtoMsg(message: QueryDelegatorValidatorRequest): QueryDelegatorValidatorRequestProtoMsg;
};
export declare const QueryDelegatorValidatorResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryDelegatorValidatorResponse;
    isSDK(o: any): o is QueryDelegatorValidatorResponseSDKType;
    isAmino(o: any): o is QueryDelegatorValidatorResponseAmino;
    encode(message: QueryDelegatorValidatorResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorResponse;
    fromJSON(object: any): QueryDelegatorValidatorResponse;
    toJSON(message: QueryDelegatorValidatorResponse): unknown;
    fromPartial(object: DeepPartial<QueryDelegatorValidatorResponse>): QueryDelegatorValidatorResponse;
    fromSDK(object: QueryDelegatorValidatorResponseSDKType): QueryDelegatorValidatorResponse;
    toSDK(message: QueryDelegatorValidatorResponse): QueryDelegatorValidatorResponseSDKType;
    fromAmino(object: QueryDelegatorValidatorResponseAmino): QueryDelegatorValidatorResponse;
    toAmino(message: QueryDelegatorValidatorResponse): QueryDelegatorValidatorResponseAmino;
    fromAminoMsg(object: QueryDelegatorValidatorResponseAminoMsg): QueryDelegatorValidatorResponse;
    toAminoMsg(message: QueryDelegatorValidatorResponse): QueryDelegatorValidatorResponseAminoMsg;
    fromProtoMsg(message: QueryDelegatorValidatorResponseProtoMsg): QueryDelegatorValidatorResponse;
    toProto(message: QueryDelegatorValidatorResponse): Uint8Array;
    toProtoMsg(message: QueryDelegatorValidatorResponse): QueryDelegatorValidatorResponseProtoMsg;
};
export declare const QueryHistoricalInfoRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryHistoricalInfoRequest;
    isSDK(o: any): o is QueryHistoricalInfoRequestSDKType;
    isAmino(o: any): o is QueryHistoricalInfoRequestAmino;
    encode(message: QueryHistoricalInfoRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalInfoRequest;
    fromJSON(object: any): QueryHistoricalInfoRequest;
    toJSON(message: QueryHistoricalInfoRequest): unknown;
    fromPartial(object: DeepPartial<QueryHistoricalInfoRequest>): QueryHistoricalInfoRequest;
    fromSDK(object: QueryHistoricalInfoRequestSDKType): QueryHistoricalInfoRequest;
    toSDK(message: QueryHistoricalInfoRequest): QueryHistoricalInfoRequestSDKType;
    fromAmino(object: QueryHistoricalInfoRequestAmino): QueryHistoricalInfoRequest;
    toAmino(message: QueryHistoricalInfoRequest): QueryHistoricalInfoRequestAmino;
    fromAminoMsg(object: QueryHistoricalInfoRequestAminoMsg): QueryHistoricalInfoRequest;
    toAminoMsg(message: QueryHistoricalInfoRequest): QueryHistoricalInfoRequestAminoMsg;
    fromProtoMsg(message: QueryHistoricalInfoRequestProtoMsg): QueryHistoricalInfoRequest;
    toProto(message: QueryHistoricalInfoRequest): Uint8Array;
    toProtoMsg(message: QueryHistoricalInfoRequest): QueryHistoricalInfoRequestProtoMsg;
};
export declare const QueryHistoricalInfoResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryHistoricalInfoResponse;
    isSDK(o: any): o is QueryHistoricalInfoResponseSDKType;
    isAmino(o: any): o is QueryHistoricalInfoResponseAmino;
    encode(message: QueryHistoricalInfoResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryHistoricalInfoResponse;
    fromJSON(object: any): QueryHistoricalInfoResponse;
    toJSON(message: QueryHistoricalInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryHistoricalInfoResponse>): QueryHistoricalInfoResponse;
    fromSDK(object: QueryHistoricalInfoResponseSDKType): QueryHistoricalInfoResponse;
    toSDK(message: QueryHistoricalInfoResponse): QueryHistoricalInfoResponseSDKType;
    fromAmino(object: QueryHistoricalInfoResponseAmino): QueryHistoricalInfoResponse;
    toAmino(message: QueryHistoricalInfoResponse): QueryHistoricalInfoResponseAmino;
    fromAminoMsg(object: QueryHistoricalInfoResponseAminoMsg): QueryHistoricalInfoResponse;
    toAminoMsg(message: QueryHistoricalInfoResponse): QueryHistoricalInfoResponseAminoMsg;
    fromProtoMsg(message: QueryHistoricalInfoResponseProtoMsg): QueryHistoricalInfoResponse;
    toProto(message: QueryHistoricalInfoResponse): Uint8Array;
    toProtoMsg(message: QueryHistoricalInfoResponse): QueryHistoricalInfoResponseProtoMsg;
};
export declare const QueryPoolRequest: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryPoolRequest;
    isSDK(o: any): o is QueryPoolRequestSDKType;
    isAmino(o: any): o is QueryPoolRequestAmino;
    encode(_: QueryPoolRequest, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolRequest;
    fromJSON(_: any): QueryPoolRequest;
    toJSON(_: QueryPoolRequest): unknown;
    fromPartial(_: DeepPartial<QueryPoolRequest>): QueryPoolRequest;
    fromSDK(_: QueryPoolRequestSDKType): QueryPoolRequest;
    toSDK(_: QueryPoolRequest): QueryPoolRequestSDKType;
    fromAmino(_: QueryPoolRequestAmino): QueryPoolRequest;
    toAmino(_: QueryPoolRequest): QueryPoolRequestAmino;
    fromAminoMsg(object: QueryPoolRequestAminoMsg): QueryPoolRequest;
    toAminoMsg(message: QueryPoolRequest): QueryPoolRequestAminoMsg;
    fromProtoMsg(message: QueryPoolRequestProtoMsg): QueryPoolRequest;
    toProto(message: QueryPoolRequest): Uint8Array;
    toProtoMsg(message: QueryPoolRequest): QueryPoolRequestProtoMsg;
};
export declare const QueryPoolResponse: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is QueryPoolResponse;
    isSDK(o: any): o is QueryPoolResponseSDKType;
    isAmino(o: any): o is QueryPoolResponseAmino;
    encode(message: QueryPoolResponse, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): QueryPoolResponse;
    fromJSON(object: any): QueryPoolResponse;
    toJSON(message: QueryPoolResponse): unknown;
    fromPartial(object: DeepPartial<QueryPoolResponse>): QueryPoolResponse;
    fromSDK(object: QueryPoolResponseSDKType): QueryPoolResponse;
    toSDK(message: QueryPoolResponse): QueryPoolResponseSDKType;
    fromAmino(object: QueryPoolResponseAmino): QueryPoolResponse;
    toAmino(message: QueryPoolResponse): QueryPoolResponseAmino;
    fromAminoMsg(object: QueryPoolResponseAminoMsg): QueryPoolResponse;
    toAminoMsg(message: QueryPoolResponse): QueryPoolResponseAminoMsg;
    fromProtoMsg(message: QueryPoolResponseProtoMsg): QueryPoolResponse;
    toProto(message: QueryPoolResponse): Uint8Array;
    toProtoMsg(message: QueryPoolResponse): QueryPoolResponseProtoMsg;
};
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
