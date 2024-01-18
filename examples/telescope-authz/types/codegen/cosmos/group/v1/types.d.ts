import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** VoteOption enumerates the valid vote options for a given proposal. */
export declare enum VoteOption {
    /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
    VOTE_OPTION_UNSPECIFIED = 0,
    /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
    VOTE_OPTION_YES = 1,
    /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
    VOTE_OPTION_ABSTAIN = 2,
    /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
    VOTE_OPTION_NO = 3,
    /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
    VOTE_OPTION_NO_WITH_VETO = 4,
    UNRECOGNIZED = -1
}
export declare const VoteOptionSDKType: typeof VoteOption;
export declare const VoteOptionAmino: typeof VoteOption;
export declare function voteOptionFromJSON(object: any): VoteOption;
export declare function voteOptionToJSON(object: VoteOption): string;
/** ProposalStatus defines proposal statuses. */
export declare enum ProposalStatus {
    /** PROPOSAL_STATUS_UNSPECIFIED - An empty value is invalid and not allowed. */
    PROPOSAL_STATUS_UNSPECIFIED = 0,
    /** PROPOSAL_STATUS_SUBMITTED - Initial status of a proposal when persisted. */
    PROPOSAL_STATUS_SUBMITTED = 1,
    /** PROPOSAL_STATUS_CLOSED - Final status of a proposal when the final tally was executed. */
    PROPOSAL_STATUS_CLOSED = 2,
    /** PROPOSAL_STATUS_ABORTED - Final status of a proposal when the group was modified before the final tally. */
    PROPOSAL_STATUS_ABORTED = 3,
    /**
     * PROPOSAL_STATUS_WITHDRAWN - A proposal can be deleted before the voting start time by the owner. When this happens the final status
     * is Withdrawn.
     */
    PROPOSAL_STATUS_WITHDRAWN = 4,
    UNRECOGNIZED = -1
}
export declare const ProposalStatusSDKType: typeof ProposalStatus;
export declare const ProposalStatusAmino: typeof ProposalStatus;
export declare function proposalStatusFromJSON(object: any): ProposalStatus;
export declare function proposalStatusToJSON(object: ProposalStatus): string;
/** ProposalResult defines types of proposal results. */
export declare enum ProposalResult {
    /** PROPOSAL_RESULT_UNSPECIFIED - An empty value is invalid and not allowed */
    PROPOSAL_RESULT_UNSPECIFIED = 0,
    /** PROPOSAL_RESULT_UNFINALIZED - Until a final tally has happened the status is unfinalized */
    PROPOSAL_RESULT_UNFINALIZED = 1,
    /** PROPOSAL_RESULT_ACCEPTED - Final result of the tally */
    PROPOSAL_RESULT_ACCEPTED = 2,
    /** PROPOSAL_RESULT_REJECTED - Final result of the tally */
    PROPOSAL_RESULT_REJECTED = 3,
    UNRECOGNIZED = -1
}
export declare const ProposalResultSDKType: typeof ProposalResult;
export declare const ProposalResultAmino: typeof ProposalResult;
export declare function proposalResultFromJSON(object: any): ProposalResult;
export declare function proposalResultToJSON(object: ProposalResult): string;
/** ProposalExecutorResult defines types of proposal executor results. */
export declare enum ProposalExecutorResult {
    /** PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED - An empty value is not allowed. */
    PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED = 0,
    /** PROPOSAL_EXECUTOR_RESULT_NOT_RUN - We have not yet run the executor. */
    PROPOSAL_EXECUTOR_RESULT_NOT_RUN = 1,
    /** PROPOSAL_EXECUTOR_RESULT_SUCCESS - The executor was successful and proposed action updated state. */
    PROPOSAL_EXECUTOR_RESULT_SUCCESS = 2,
    /** PROPOSAL_EXECUTOR_RESULT_FAILURE - The executor returned an error and proposed action didn't update state. */
    PROPOSAL_EXECUTOR_RESULT_FAILURE = 3,
    UNRECOGNIZED = -1
}
export declare const ProposalExecutorResultSDKType: typeof ProposalExecutorResult;
export declare const ProposalExecutorResultAmino: typeof ProposalExecutorResult;
export declare function proposalExecutorResultFromJSON(object: any): ProposalExecutorResult;
export declare function proposalExecutorResultToJSON(object: ProposalExecutorResult): string;
/**
 * Member represents a group member with an account address,
 * non-zero weight and metadata.
 */
export interface Member {
    /** address is the member's account address. */
    address: string;
    /** weight is the member's voting weight that should be greater than 0. */
    weight: string;
    /** metadata is any arbitrary metadata to attached to the member. */
    metadata: string;
    /** added_at is a timestamp specifying when a member was added. */
    addedAt: Date | undefined;
}
export interface MemberProtoMsg {
    typeUrl: "/cosmos.group.v1.Member";
    value: Uint8Array;
}
/**
 * Member represents a group member with an account address,
 * non-zero weight and metadata.
 */
export interface MemberAmino {
    /** address is the member's account address. */
    address?: string;
    /** weight is the member's voting weight that should be greater than 0. */
    weight?: string;
    /** metadata is any arbitrary metadata to attached to the member. */
    metadata?: string;
    /** added_at is a timestamp specifying when a member was added. */
    added_at?: string | undefined;
}
export interface MemberAminoMsg {
    type: "cosmos-sdk/Member";
    value: MemberAmino;
}
/**
 * Member represents a group member with an account address,
 * non-zero weight and metadata.
 */
export interface MemberSDKType {
    address: string;
    weight: string;
    metadata: string;
    added_at: Date | undefined;
}
/** Members defines a repeated slice of Member objects. */
export interface Members {
    /** members is the list of members. */
    members: Member[];
}
export interface MembersProtoMsg {
    typeUrl: "/cosmos.group.v1.Members";
    value: Uint8Array;
}
/** Members defines a repeated slice of Member objects. */
export interface MembersAmino {
    /** members is the list of members. */
    members?: MemberAmino[];
}
export interface MembersAminoMsg {
    type: "cosmos-sdk/Members";
    value: MembersAmino;
}
/** Members defines a repeated slice of Member objects. */
export interface MembersSDKType {
    members: MemberSDKType[];
}
/** ThresholdDecisionPolicy implements the DecisionPolicy interface */
export interface ThresholdDecisionPolicy {
    $typeUrl?: "/cosmos.group.v1.ThresholdDecisionPolicy";
    /** threshold is the minimum weighted sum of yes votes that must be met or exceeded for a proposal to succeed. */
    threshold: string;
    /** windows defines the different windows for voting and execution. */
    windows?: DecisionPolicyWindows | undefined;
}
export interface ThresholdDecisionPolicyProtoMsg {
    typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy";
    value: Uint8Array;
}
/** ThresholdDecisionPolicy implements the DecisionPolicy interface */
export interface ThresholdDecisionPolicyAmino {
    /** threshold is the minimum weighted sum of yes votes that must be met or exceeded for a proposal to succeed. */
    threshold?: string;
    /** windows defines the different windows for voting and execution. */
    windows?: DecisionPolicyWindowsAmino | undefined;
}
export interface ThresholdDecisionPolicyAminoMsg {
    type: "cosmos-sdk/ThresholdDecisionPolicy";
    value: ThresholdDecisionPolicyAmino;
}
/** ThresholdDecisionPolicy implements the DecisionPolicy interface */
export interface ThresholdDecisionPolicySDKType {
    $typeUrl?: "/cosmos.group.v1.ThresholdDecisionPolicy";
    threshold: string;
    windows?: DecisionPolicyWindowsSDKType | undefined;
}
/** PercentageDecisionPolicy implements the DecisionPolicy interface */
export interface PercentageDecisionPolicy {
    $typeUrl?: "/cosmos.group.v1.PercentageDecisionPolicy";
    /** percentage is the minimum percentage the weighted sum of yes votes must meet for a proposal to succeed. */
    percentage: string;
    /** windows defines the different windows for voting and execution. */
    windows?: DecisionPolicyWindows | undefined;
}
export interface PercentageDecisionPolicyProtoMsg {
    typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy";
    value: Uint8Array;
}
/** PercentageDecisionPolicy implements the DecisionPolicy interface */
export interface PercentageDecisionPolicyAmino {
    /** percentage is the minimum percentage the weighted sum of yes votes must meet for a proposal to succeed. */
    percentage?: string;
    /** windows defines the different windows for voting and execution. */
    windows?: DecisionPolicyWindowsAmino | undefined;
}
export interface PercentageDecisionPolicyAminoMsg {
    type: "cosmos-sdk/PercentageDecisionPolicy";
    value: PercentageDecisionPolicyAmino;
}
/** PercentageDecisionPolicy implements the DecisionPolicy interface */
export interface PercentageDecisionPolicySDKType {
    $typeUrl?: "/cosmos.group.v1.PercentageDecisionPolicy";
    percentage: string;
    windows?: DecisionPolicyWindowsSDKType | undefined;
}
/** DecisionPolicyWindows defines the different windows for voting and execution. */
export interface DecisionPolicyWindows {
    /**
     * voting_period is the duration from submission of a proposal to the end of voting period
     * Within this times votes can be submitted with MsgVote.
     */
    votingPeriod: Duration | undefined;
    /**
     * min_execution_period is the minimum duration after the proposal submission
     * where members can start sending MsgExec. This means that the window for
     * sending a MsgExec transaction is:
     * `[ submission + min_execution_period ; submission + voting_period + max_execution_period]`
     * where max_execution_period is a app-specific config, defined in the keeper.
     * If not set, min_execution_period will default to 0.
     *
     * Please make sure to set a `min_execution_period` that is smaller than
     * `voting_period + max_execution_period`, or else the above execution window
     * is empty, meaning that all proposals created with this decision policy
     * won't be able to be executed.
     */
    minExecutionPeriod: Duration | undefined;
}
export interface DecisionPolicyWindowsProtoMsg {
    typeUrl: "/cosmos.group.v1.DecisionPolicyWindows";
    value: Uint8Array;
}
/** DecisionPolicyWindows defines the different windows for voting and execution. */
export interface DecisionPolicyWindowsAmino {
    /**
     * voting_period is the duration from submission of a proposal to the end of voting period
     * Within this times votes can be submitted with MsgVote.
     */
    voting_period?: DurationAmino | undefined;
    /**
     * min_execution_period is the minimum duration after the proposal submission
     * where members can start sending MsgExec. This means that the window for
     * sending a MsgExec transaction is:
     * `[ submission + min_execution_period ; submission + voting_period + max_execution_period]`
     * where max_execution_period is a app-specific config, defined in the keeper.
     * If not set, min_execution_period will default to 0.
     *
     * Please make sure to set a `min_execution_period` that is smaller than
     * `voting_period + max_execution_period`, or else the above execution window
     * is empty, meaning that all proposals created with this decision policy
     * won't be able to be executed.
     */
    min_execution_period?: DurationAmino | undefined;
}
export interface DecisionPolicyWindowsAminoMsg {
    type: "cosmos-sdk/DecisionPolicyWindows";
    value: DecisionPolicyWindowsAmino;
}
/** DecisionPolicyWindows defines the different windows for voting and execution. */
export interface DecisionPolicyWindowsSDKType {
    voting_period: DurationSDKType | undefined;
    min_execution_period: DurationSDKType | undefined;
}
/** GroupInfo represents the high-level on-chain information for a group. */
export interface GroupInfo {
    /** id is the unique ID of the group. */
    id: bigint;
    /** admin is the account address of the group's admin. */
    admin: string;
    /** metadata is any arbitrary metadata to attached to the group. */
    metadata: string;
    /**
     * version is used to track changes to a group's membership structure that
     * would break existing proposals. Whenever any members weight is changed,
     * or any member is added or removed this version is incremented and will
     * cause proposals based on older versions of this group to fail
     */
    version: bigint;
    /** total_weight is the sum of the group members' weights. */
    totalWeight: string;
    /** created_at is a timestamp specifying when a group was created. */
    createdAt: Date | undefined;
}
export interface GroupInfoProtoMsg {
    typeUrl: "/cosmos.group.v1.GroupInfo";
    value: Uint8Array;
}
/** GroupInfo represents the high-level on-chain information for a group. */
export interface GroupInfoAmino {
    /** id is the unique ID of the group. */
    id?: string;
    /** admin is the account address of the group's admin. */
    admin?: string;
    /** metadata is any arbitrary metadata to attached to the group. */
    metadata?: string;
    /**
     * version is used to track changes to a group's membership structure that
     * would break existing proposals. Whenever any members weight is changed,
     * or any member is added or removed this version is incremented and will
     * cause proposals based on older versions of this group to fail
     */
    version?: string;
    /** total_weight is the sum of the group members' weights. */
    total_weight?: string;
    /** created_at is a timestamp specifying when a group was created. */
    created_at?: string | undefined;
}
export interface GroupInfoAminoMsg {
    type: "cosmos-sdk/GroupInfo";
    value: GroupInfoAmino;
}
/** GroupInfo represents the high-level on-chain information for a group. */
export interface GroupInfoSDKType {
    id: bigint;
    admin: string;
    metadata: string;
    version: bigint;
    total_weight: string;
    created_at: Date | undefined;
}
/** GroupMember represents the relationship between a group and a member. */
export interface GroupMember {
    /** group_id is the unique ID of the group. */
    groupId: bigint;
    /** member is the member data. */
    member?: Member | undefined;
}
export interface GroupMemberProtoMsg {
    typeUrl: "/cosmos.group.v1.GroupMember";
    value: Uint8Array;
}
/** GroupMember represents the relationship between a group and a member. */
export interface GroupMemberAmino {
    /** group_id is the unique ID of the group. */
    group_id?: string;
    /** member is the member data. */
    member?: MemberAmino | undefined;
}
export interface GroupMemberAminoMsg {
    type: "cosmos-sdk/GroupMember";
    value: GroupMemberAmino;
}
/** GroupMember represents the relationship between a group and a member. */
export interface GroupMemberSDKType {
    group_id: bigint;
    member?: MemberSDKType | undefined;
}
/** GroupPolicyInfo represents the high-level on-chain information for a group policy. */
export interface GroupPolicyInfo {
    /** address is the account address of group policy. */
    address: string;
    /** group_id is the unique ID of the group. */
    groupId: bigint;
    /** admin is the account address of the group admin. */
    admin: string;
    /** metadata is any arbitrary metadata to attached to the group policy. */
    metadata: string;
    /**
     * version is used to track changes to a group's GroupPolicyInfo structure that
     * would create a different result on a running proposal.
     */
    version: bigint;
    /** decision_policy specifies the group policy's decision policy. */
    decisionPolicy?: ThresholdDecisionPolicy | PercentageDecisionPolicy | Any | undefined;
    /** created_at is a timestamp specifying when a group policy was created. */
    createdAt: Date | undefined;
}
export interface GroupPolicyInfoProtoMsg {
    typeUrl: "/cosmos.group.v1.GroupPolicyInfo";
    value: Uint8Array;
}
export type GroupPolicyInfoEncoded = Omit<GroupPolicyInfo, "decisionPolicy"> & {
    /** decision_policy specifies the group policy's decision policy. */ decisionPolicy?: ThresholdDecisionPolicyProtoMsg | PercentageDecisionPolicyProtoMsg | AnyProtoMsg | undefined;
};
/** GroupPolicyInfo represents the high-level on-chain information for a group policy. */
export interface GroupPolicyInfoAmino {
    /** address is the account address of group policy. */
    address?: string;
    /** group_id is the unique ID of the group. */
    group_id?: string;
    /** admin is the account address of the group admin. */
    admin?: string;
    /** metadata is any arbitrary metadata to attached to the group policy. */
    metadata?: string;
    /**
     * version is used to track changes to a group's GroupPolicyInfo structure that
     * would create a different result on a running proposal.
     */
    version?: string;
    /** decision_policy specifies the group policy's decision policy. */
    decision_policy?: AnyAmino | undefined;
    /** created_at is a timestamp specifying when a group policy was created. */
    created_at?: string | undefined;
}
export interface GroupPolicyInfoAminoMsg {
    type: "cosmos-sdk/GroupPolicyInfo";
    value: GroupPolicyInfoAmino;
}
/** GroupPolicyInfo represents the high-level on-chain information for a group policy. */
export interface GroupPolicyInfoSDKType {
    address: string;
    group_id: bigint;
    admin: string;
    metadata: string;
    version: bigint;
    decision_policy?: ThresholdDecisionPolicySDKType | PercentageDecisionPolicySDKType | AnySDKType | undefined;
    created_at: Date | undefined;
}
/**
 * Proposal defines a group proposal. Any member of a group can submit a proposal
 * for a group policy to decide upon.
 * A proposal consists of a set of `sdk.Msg`s that will be executed if the proposal
 * passes as well as some optional metadata associated with the proposal.
 */
export interface Proposal {
    /** id is the unique id of the proposal. */
    id: bigint;
    /** address is the account address of group policy. */
    address: string;
    /** metadata is any arbitrary metadata to attached to the proposal. */
    metadata: string;
    /** proposers are the account addresses of the proposers. */
    proposers: string[];
    /** submit_time is a timestamp specifying when a proposal was submitted. */
    submitTime: Date | undefined;
    /**
     * group_version tracks the version of the group that this proposal corresponds to.
     * When group membership is changed, existing proposals from previous group versions will become invalid.
     */
    groupVersion: bigint;
    /**
     * group_policy_version tracks the version of the group policy that this proposal corresponds to.
     * When a decision policy is changed, existing proposals from previous policy versions will become invalid.
     */
    groupPolicyVersion: bigint;
    /** status represents the high level position in the life cycle of the proposal. Initial value is Submitted. */
    status: ProposalStatus;
    /**
     * result is the final result based on the votes and election rule. Initial value is unfinalized.
     * The result is persisted so that clients can always rely on this state and not have to replicate the logic.
     */
    result: ProposalResult;
    /**
     * final_tally_result contains the sums of all weighted votes for this
     * proposal for each vote option, after tallying. When querying a proposal
     * via gRPC, this field is not populated until the proposal's voting period
     * has ended.
     */
    finalTallyResult: TallyResult | undefined;
    /**
     * voting_period_end is the timestamp before which voting must be done.
     * Unless a successfull MsgExec is called before (to execute a proposal whose
     * tally is successful before the voting period ends), tallying will be done
     * at this point, and the `final_tally_result`, as well
     * as `status` and `result` fields will be accordingly updated.
     */
    votingPeriodEnd: Date | undefined;
    /** executor_result is the final result based on the votes and election rule. Initial value is NotRun. */
    executorResult: ProposalExecutorResult;
    /** messages is a list of Msgs that will be executed if the proposal passes. */
    messages: Any[];
}
export interface ProposalProtoMsg {
    typeUrl: "/cosmos.group.v1.Proposal";
    value: Uint8Array;
}
/**
 * Proposal defines a group proposal. Any member of a group can submit a proposal
 * for a group policy to decide upon.
 * A proposal consists of a set of `sdk.Msg`s that will be executed if the proposal
 * passes as well as some optional metadata associated with the proposal.
 */
export interface ProposalAmino {
    /** id is the unique id of the proposal. */
    id?: string;
    /** address is the account address of group policy. */
    address?: string;
    /** metadata is any arbitrary metadata to attached to the proposal. */
    metadata?: string;
    /** proposers are the account addresses of the proposers. */
    proposers?: string[];
    /** submit_time is a timestamp specifying when a proposal was submitted. */
    submit_time?: string | undefined;
    /**
     * group_version tracks the version of the group that this proposal corresponds to.
     * When group membership is changed, existing proposals from previous group versions will become invalid.
     */
    group_version?: string;
    /**
     * group_policy_version tracks the version of the group policy that this proposal corresponds to.
     * When a decision policy is changed, existing proposals from previous policy versions will become invalid.
     */
    group_policy_version?: string;
    /** status represents the high level position in the life cycle of the proposal. Initial value is Submitted. */
    status?: ProposalStatus;
    /**
     * result is the final result based on the votes and election rule. Initial value is unfinalized.
     * The result is persisted so that clients can always rely on this state and not have to replicate the logic.
     */
    result?: ProposalResult;
    /**
     * final_tally_result contains the sums of all weighted votes for this
     * proposal for each vote option, after tallying. When querying a proposal
     * via gRPC, this field is not populated until the proposal's voting period
     * has ended.
     */
    final_tally_result?: TallyResultAmino | undefined;
    /**
     * voting_period_end is the timestamp before which voting must be done.
     * Unless a successfull MsgExec is called before (to execute a proposal whose
     * tally is successful before the voting period ends), tallying will be done
     * at this point, and the `final_tally_result`, as well
     * as `status` and `result` fields will be accordingly updated.
     */
    voting_period_end?: string | undefined;
    /** executor_result is the final result based on the votes and election rule. Initial value is NotRun. */
    executor_result?: ProposalExecutorResult;
    /** messages is a list of Msgs that will be executed if the proposal passes. */
    messages?: AnyAmino[];
}
export interface ProposalAminoMsg {
    type: "cosmos-sdk/Proposal";
    value: ProposalAmino;
}
/**
 * Proposal defines a group proposal. Any member of a group can submit a proposal
 * for a group policy to decide upon.
 * A proposal consists of a set of `sdk.Msg`s that will be executed if the proposal
 * passes as well as some optional metadata associated with the proposal.
 */
export interface ProposalSDKType {
    id: bigint;
    address: string;
    metadata: string;
    proposers: string[];
    submit_time: Date | undefined;
    group_version: bigint;
    group_policy_version: bigint;
    status: ProposalStatus;
    result: ProposalResult;
    final_tally_result: TallyResultSDKType | undefined;
    voting_period_end: Date | undefined;
    executor_result: ProposalExecutorResult;
    messages: AnySDKType[];
}
/** TallyResult represents the sum of weighted votes for each vote option. */
export interface TallyResult {
    /** yes_count is the weighted sum of yes votes. */
    yesCount: string;
    /** abstain_count is the weighted sum of abstainers. */
    abstainCount: string;
    /** no is the weighted sum of no votes. */
    noCount: string;
    /** no_with_veto_count is the weighted sum of veto. */
    noWithVetoCount: string;
}
export interface TallyResultProtoMsg {
    typeUrl: "/cosmos.group.v1.TallyResult";
    value: Uint8Array;
}
/** TallyResult represents the sum of weighted votes for each vote option. */
export interface TallyResultAmino {
    /** yes_count is the weighted sum of yes votes. */
    yes_count?: string;
    /** abstain_count is the weighted sum of abstainers. */
    abstain_count?: string;
    /** no is the weighted sum of no votes. */
    no_count?: string;
    /** no_with_veto_count is the weighted sum of veto. */
    no_with_veto_count?: string;
}
export interface TallyResultAminoMsg {
    type: "cosmos-sdk/TallyResult";
    value: TallyResultAmino;
}
/** TallyResult represents the sum of weighted votes for each vote option. */
export interface TallyResultSDKType {
    yes_count: string;
    abstain_count: string;
    no_count: string;
    no_with_veto_count: string;
}
/** Vote represents a vote for a proposal. */
export interface Vote {
    /** proposal is the unique ID of the proposal. */
    proposalId: bigint;
    /** voter is the account address of the voter. */
    voter: string;
    /** option is the voter's choice on the proposal. */
    option: VoteOption;
    /** metadata is any arbitrary metadata to attached to the vote. */
    metadata: string;
    /** submit_time is the timestamp when the vote was submitted. */
    submitTime: Date | undefined;
}
export interface VoteProtoMsg {
    typeUrl: "/cosmos.group.v1.Vote";
    value: Uint8Array;
}
/** Vote represents a vote for a proposal. */
export interface VoteAmino {
    /** proposal is the unique ID of the proposal. */
    proposal_id?: string;
    /** voter is the account address of the voter. */
    voter?: string;
    /** option is the voter's choice on the proposal. */
    option?: VoteOption;
    /** metadata is any arbitrary metadata to attached to the vote. */
    metadata?: string;
    /** submit_time is the timestamp when the vote was submitted. */
    submit_time?: string | undefined;
}
export interface VoteAminoMsg {
    type: "cosmos-sdk/Vote";
    value: VoteAmino;
}
/** Vote represents a vote for a proposal. */
export interface VoteSDKType {
    proposal_id: bigint;
    voter: string;
    option: VoteOption;
    metadata: string;
    submit_time: Date | undefined;
}
export declare const Member: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Member;
    isSDK(o: any): o is MemberSDKType;
    isAmino(o: any): o is MemberAmino;
    encode(message: Member, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Member;
    fromJSON(object: any): Member;
    toJSON(message: Member): unknown;
    fromPartial(object: DeepPartial<Member>): Member;
    fromSDK(object: MemberSDKType): Member;
    toSDK(message: Member): MemberSDKType;
    fromAmino(object: MemberAmino): Member;
    toAmino(message: Member): MemberAmino;
    fromAminoMsg(object: MemberAminoMsg): Member;
    toAminoMsg(message: Member): MemberAminoMsg;
    fromProtoMsg(message: MemberProtoMsg): Member;
    toProto(message: Member): Uint8Array;
    toProtoMsg(message: Member): MemberProtoMsg;
};
export declare const Members: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Members;
    isSDK(o: any): o is MembersSDKType;
    isAmino(o: any): o is MembersAmino;
    encode(message: Members, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Members;
    fromJSON(object: any): Members;
    toJSON(message: Members): unknown;
    fromPartial(object: DeepPartial<Members>): Members;
    fromSDK(object: MembersSDKType): Members;
    toSDK(message: Members): MembersSDKType;
    fromAmino(object: MembersAmino): Members;
    toAmino(message: Members): MembersAmino;
    fromAminoMsg(object: MembersAminoMsg): Members;
    toAminoMsg(message: Members): MembersAminoMsg;
    fromProtoMsg(message: MembersProtoMsg): Members;
    toProto(message: Members): Uint8Array;
    toProtoMsg(message: Members): MembersProtoMsg;
};
export declare const ThresholdDecisionPolicy: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is ThresholdDecisionPolicy;
    isSDK(o: any): o is ThresholdDecisionPolicySDKType;
    isAmino(o: any): o is ThresholdDecisionPolicyAmino;
    encode(message: ThresholdDecisionPolicy, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ThresholdDecisionPolicy;
    fromJSON(object: any): ThresholdDecisionPolicy;
    toJSON(message: ThresholdDecisionPolicy): unknown;
    fromPartial(object: DeepPartial<ThresholdDecisionPolicy>): ThresholdDecisionPolicy;
    fromSDK(object: ThresholdDecisionPolicySDKType): ThresholdDecisionPolicy;
    toSDK(message: ThresholdDecisionPolicy): ThresholdDecisionPolicySDKType;
    fromAmino(object: ThresholdDecisionPolicyAmino): ThresholdDecisionPolicy;
    toAmino(message: ThresholdDecisionPolicy): ThresholdDecisionPolicyAmino;
    fromAminoMsg(object: ThresholdDecisionPolicyAminoMsg): ThresholdDecisionPolicy;
    toAminoMsg(message: ThresholdDecisionPolicy): ThresholdDecisionPolicyAminoMsg;
    fromProtoMsg(message: ThresholdDecisionPolicyProtoMsg): ThresholdDecisionPolicy;
    toProto(message: ThresholdDecisionPolicy): Uint8Array;
    toProtoMsg(message: ThresholdDecisionPolicy): ThresholdDecisionPolicyProtoMsg;
};
export declare const PercentageDecisionPolicy: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is PercentageDecisionPolicy;
    isSDK(o: any): o is PercentageDecisionPolicySDKType;
    isAmino(o: any): o is PercentageDecisionPolicyAmino;
    encode(message: PercentageDecisionPolicy, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PercentageDecisionPolicy;
    fromJSON(object: any): PercentageDecisionPolicy;
    toJSON(message: PercentageDecisionPolicy): unknown;
    fromPartial(object: DeepPartial<PercentageDecisionPolicy>): PercentageDecisionPolicy;
    fromSDK(object: PercentageDecisionPolicySDKType): PercentageDecisionPolicy;
    toSDK(message: PercentageDecisionPolicy): PercentageDecisionPolicySDKType;
    fromAmino(object: PercentageDecisionPolicyAmino): PercentageDecisionPolicy;
    toAmino(message: PercentageDecisionPolicy): PercentageDecisionPolicyAmino;
    fromAminoMsg(object: PercentageDecisionPolicyAminoMsg): PercentageDecisionPolicy;
    toAminoMsg(message: PercentageDecisionPolicy): PercentageDecisionPolicyAminoMsg;
    fromProtoMsg(message: PercentageDecisionPolicyProtoMsg): PercentageDecisionPolicy;
    toProto(message: PercentageDecisionPolicy): Uint8Array;
    toProtoMsg(message: PercentageDecisionPolicy): PercentageDecisionPolicyProtoMsg;
};
export declare const DecisionPolicyWindows: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is DecisionPolicyWindows;
    isSDK(o: any): o is DecisionPolicyWindowsSDKType;
    isAmino(o: any): o is DecisionPolicyWindowsAmino;
    encode(message: DecisionPolicyWindows, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DecisionPolicyWindows;
    fromJSON(object: any): DecisionPolicyWindows;
    toJSON(message: DecisionPolicyWindows): unknown;
    fromPartial(object: DeepPartial<DecisionPolicyWindows>): DecisionPolicyWindows;
    fromSDK(object: DecisionPolicyWindowsSDKType): DecisionPolicyWindows;
    toSDK(message: DecisionPolicyWindows): DecisionPolicyWindowsSDKType;
    fromAmino(object: DecisionPolicyWindowsAmino): DecisionPolicyWindows;
    toAmino(message: DecisionPolicyWindows): DecisionPolicyWindowsAmino;
    fromAminoMsg(object: DecisionPolicyWindowsAminoMsg): DecisionPolicyWindows;
    toAminoMsg(message: DecisionPolicyWindows): DecisionPolicyWindowsAminoMsg;
    fromProtoMsg(message: DecisionPolicyWindowsProtoMsg): DecisionPolicyWindows;
    toProto(message: DecisionPolicyWindows): Uint8Array;
    toProtoMsg(message: DecisionPolicyWindows): DecisionPolicyWindowsProtoMsg;
};
export declare const GroupInfo: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GroupInfo;
    isSDK(o: any): o is GroupInfoSDKType;
    isAmino(o: any): o is GroupInfoAmino;
    encode(message: GroupInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GroupInfo;
    fromJSON(object: any): GroupInfo;
    toJSON(message: GroupInfo): unknown;
    fromPartial(object: DeepPartial<GroupInfo>): GroupInfo;
    fromSDK(object: GroupInfoSDKType): GroupInfo;
    toSDK(message: GroupInfo): GroupInfoSDKType;
    fromAmino(object: GroupInfoAmino): GroupInfo;
    toAmino(message: GroupInfo): GroupInfoAmino;
    fromAminoMsg(object: GroupInfoAminoMsg): GroupInfo;
    toAminoMsg(message: GroupInfo): GroupInfoAminoMsg;
    fromProtoMsg(message: GroupInfoProtoMsg): GroupInfo;
    toProto(message: GroupInfo): Uint8Array;
    toProtoMsg(message: GroupInfo): GroupInfoProtoMsg;
};
export declare const GroupMember: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GroupMember;
    isSDK(o: any): o is GroupMemberSDKType;
    isAmino(o: any): o is GroupMemberAmino;
    encode(message: GroupMember, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GroupMember;
    fromJSON(object: any): GroupMember;
    toJSON(message: GroupMember): unknown;
    fromPartial(object: DeepPartial<GroupMember>): GroupMember;
    fromSDK(object: GroupMemberSDKType): GroupMember;
    toSDK(message: GroupMember): GroupMemberSDKType;
    fromAmino(object: GroupMemberAmino): GroupMember;
    toAmino(message: GroupMember): GroupMemberAmino;
    fromAminoMsg(object: GroupMemberAminoMsg): GroupMember;
    toAminoMsg(message: GroupMember): GroupMemberAminoMsg;
    fromProtoMsg(message: GroupMemberProtoMsg): GroupMember;
    toProto(message: GroupMember): Uint8Array;
    toProtoMsg(message: GroupMember): GroupMemberProtoMsg;
};
export declare const GroupPolicyInfo: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GroupPolicyInfo;
    isSDK(o: any): o is GroupPolicyInfoSDKType;
    isAmino(o: any): o is GroupPolicyInfoAmino;
    encode(message: GroupPolicyInfo, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GroupPolicyInfo;
    fromJSON(object: any): GroupPolicyInfo;
    toJSON(message: GroupPolicyInfo): unknown;
    fromPartial(object: DeepPartial<GroupPolicyInfo>): GroupPolicyInfo;
    fromSDK(object: GroupPolicyInfoSDKType): GroupPolicyInfo;
    toSDK(message: GroupPolicyInfo): GroupPolicyInfoSDKType;
    fromAmino(object: GroupPolicyInfoAmino): GroupPolicyInfo;
    toAmino(message: GroupPolicyInfo): GroupPolicyInfoAmino;
    fromAminoMsg(object: GroupPolicyInfoAminoMsg): GroupPolicyInfo;
    toAminoMsg(message: GroupPolicyInfo): GroupPolicyInfoAminoMsg;
    fromProtoMsg(message: GroupPolicyInfoProtoMsg): GroupPolicyInfo;
    toProto(message: GroupPolicyInfo): Uint8Array;
    toProtoMsg(message: GroupPolicyInfo): GroupPolicyInfoProtoMsg;
};
export declare const Proposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Proposal;
    isSDK(o: any): o is ProposalSDKType;
    isAmino(o: any): o is ProposalAmino;
    encode(message: Proposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Proposal;
    fromJSON(object: any): Proposal;
    toJSON(message: Proposal): unknown;
    fromPartial(object: DeepPartial<Proposal>): Proposal;
    fromSDK(object: ProposalSDKType): Proposal;
    toSDK(message: Proposal): ProposalSDKType;
    fromAmino(object: ProposalAmino): Proposal;
    toAmino(message: Proposal): ProposalAmino;
    fromAminoMsg(object: ProposalAminoMsg): Proposal;
    toAminoMsg(message: Proposal): ProposalAminoMsg;
    fromProtoMsg(message: ProposalProtoMsg): Proposal;
    toProto(message: Proposal): Uint8Array;
    toProtoMsg(message: Proposal): ProposalProtoMsg;
};
export declare const TallyResult: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is TallyResult;
    isSDK(o: any): o is TallyResultSDKType;
    isAmino(o: any): o is TallyResultAmino;
    encode(message: TallyResult, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TallyResult;
    fromJSON(object: any): TallyResult;
    toJSON(message: TallyResult): unknown;
    fromPartial(object: DeepPartial<TallyResult>): TallyResult;
    fromSDK(object: TallyResultSDKType): TallyResult;
    toSDK(message: TallyResult): TallyResultSDKType;
    fromAmino(object: TallyResultAmino): TallyResult;
    toAmino(message: TallyResult): TallyResultAmino;
    fromAminoMsg(object: TallyResultAminoMsg): TallyResult;
    toAminoMsg(message: TallyResult): TallyResultAminoMsg;
    fromProtoMsg(message: TallyResultProtoMsg): TallyResult;
    toProto(message: TallyResult): Uint8Array;
    toProtoMsg(message: TallyResult): TallyResultProtoMsg;
};
export declare const Vote: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Vote;
    isSDK(o: any): o is VoteSDKType;
    isAmino(o: any): o is VoteAmino;
    encode(message: Vote, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Vote;
    fromJSON(object: any): Vote;
    toJSON(message: Vote): unknown;
    fromPartial(object: DeepPartial<Vote>): Vote;
    fromSDK(object: VoteSDKType): Vote;
    toSDK(message: Vote): VoteSDKType;
    fromAmino(object: VoteAmino): Vote;
    toAmino(message: Vote): VoteAmino;
    fromAminoMsg(object: VoteAminoMsg): Vote;
    toAminoMsg(message: Vote): VoteAminoMsg;
    fromProtoMsg(message: VoteProtoMsg): Vote;
    toProto(message: Vote): Uint8Array;
    toProtoMsg(message: Vote): VoteProtoMsg;
};
