//@ts-nocheck
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.group.v1";
/** VoteOption enumerates the valid vote options for a given proposal. */
export enum VoteOption {
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
  UNRECOGNIZED = -1,
}
export const VoteOptionSDKType = VoteOption;
export const VoteOptionAmino = VoteOption;
export function voteOptionFromJSON(object: any): VoteOption {
  switch (object) {
    case 0:
    case "VOTE_OPTION_UNSPECIFIED":
      return VoteOption.VOTE_OPTION_UNSPECIFIED;
    case 1:
    case "VOTE_OPTION_YES":
      return VoteOption.VOTE_OPTION_YES;
    case 2:
    case "VOTE_OPTION_ABSTAIN":
      return VoteOption.VOTE_OPTION_ABSTAIN;
    case 3:
    case "VOTE_OPTION_NO":
      return VoteOption.VOTE_OPTION_NO;
    case 4:
    case "VOTE_OPTION_NO_WITH_VETO":
      return VoteOption.VOTE_OPTION_NO_WITH_VETO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteOption.UNRECOGNIZED;
  }
}
export function voteOptionToJSON(object: VoteOption): string {
  switch (object) {
    case VoteOption.VOTE_OPTION_UNSPECIFIED:
      return "VOTE_OPTION_UNSPECIFIED";
    case VoteOption.VOTE_OPTION_YES:
      return "VOTE_OPTION_YES";
    case VoteOption.VOTE_OPTION_ABSTAIN:
      return "VOTE_OPTION_ABSTAIN";
    case VoteOption.VOTE_OPTION_NO:
      return "VOTE_OPTION_NO";
    case VoteOption.VOTE_OPTION_NO_WITH_VETO:
      return "VOTE_OPTION_NO_WITH_VETO";
    case VoteOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ProposalStatus defines proposal statuses. */
export enum ProposalStatus {
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
  UNRECOGNIZED = -1,
}
export const ProposalStatusSDKType = ProposalStatus;
export const ProposalStatusAmino = ProposalStatus;
export function proposalStatusFromJSON(object: any): ProposalStatus {
  switch (object) {
    case 0:
    case "PROPOSAL_STATUS_UNSPECIFIED":
      return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
    case 1:
    case "PROPOSAL_STATUS_SUBMITTED":
      return ProposalStatus.PROPOSAL_STATUS_SUBMITTED;
    case 2:
    case "PROPOSAL_STATUS_CLOSED":
      return ProposalStatus.PROPOSAL_STATUS_CLOSED;
    case 3:
    case "PROPOSAL_STATUS_ABORTED":
      return ProposalStatus.PROPOSAL_STATUS_ABORTED;
    case 4:
    case "PROPOSAL_STATUS_WITHDRAWN":
      return ProposalStatus.PROPOSAL_STATUS_WITHDRAWN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalStatus.UNRECOGNIZED;
  }
}
export function proposalStatusToJSON(object: ProposalStatus): string {
  switch (object) {
    case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
      return "PROPOSAL_STATUS_UNSPECIFIED";
    case ProposalStatus.PROPOSAL_STATUS_SUBMITTED:
      return "PROPOSAL_STATUS_SUBMITTED";
    case ProposalStatus.PROPOSAL_STATUS_CLOSED:
      return "PROPOSAL_STATUS_CLOSED";
    case ProposalStatus.PROPOSAL_STATUS_ABORTED:
      return "PROPOSAL_STATUS_ABORTED";
    case ProposalStatus.PROPOSAL_STATUS_WITHDRAWN:
      return "PROPOSAL_STATUS_WITHDRAWN";
    case ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ProposalResult defines types of proposal results. */
export enum ProposalResult {
  /** PROPOSAL_RESULT_UNSPECIFIED - An empty value is invalid and not allowed */
  PROPOSAL_RESULT_UNSPECIFIED = 0,
  /** PROPOSAL_RESULT_UNFINALIZED - Until a final tally has happened the status is unfinalized */
  PROPOSAL_RESULT_UNFINALIZED = 1,
  /** PROPOSAL_RESULT_ACCEPTED - Final result of the tally */
  PROPOSAL_RESULT_ACCEPTED = 2,
  /** PROPOSAL_RESULT_REJECTED - Final result of the tally */
  PROPOSAL_RESULT_REJECTED = 3,
  UNRECOGNIZED = -1,
}
export const ProposalResultSDKType = ProposalResult;
export const ProposalResultAmino = ProposalResult;
export function proposalResultFromJSON(object: any): ProposalResult {
  switch (object) {
    case 0:
    case "PROPOSAL_RESULT_UNSPECIFIED":
      return ProposalResult.PROPOSAL_RESULT_UNSPECIFIED;
    case 1:
    case "PROPOSAL_RESULT_UNFINALIZED":
      return ProposalResult.PROPOSAL_RESULT_UNFINALIZED;
    case 2:
    case "PROPOSAL_RESULT_ACCEPTED":
      return ProposalResult.PROPOSAL_RESULT_ACCEPTED;
    case 3:
    case "PROPOSAL_RESULT_REJECTED":
      return ProposalResult.PROPOSAL_RESULT_REJECTED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalResult.UNRECOGNIZED;
  }
}
export function proposalResultToJSON(object: ProposalResult): string {
  switch (object) {
    case ProposalResult.PROPOSAL_RESULT_UNSPECIFIED:
      return "PROPOSAL_RESULT_UNSPECIFIED";
    case ProposalResult.PROPOSAL_RESULT_UNFINALIZED:
      return "PROPOSAL_RESULT_UNFINALIZED";
    case ProposalResult.PROPOSAL_RESULT_ACCEPTED:
      return "PROPOSAL_RESULT_ACCEPTED";
    case ProposalResult.PROPOSAL_RESULT_REJECTED:
      return "PROPOSAL_RESULT_REJECTED";
    case ProposalResult.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ProposalExecutorResult defines types of proposal executor results. */
export enum ProposalExecutorResult {
  /** PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED - An empty value is not allowed. */
  PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED = 0,
  /** PROPOSAL_EXECUTOR_RESULT_NOT_RUN - We have not yet run the executor. */
  PROPOSAL_EXECUTOR_RESULT_NOT_RUN = 1,
  /** PROPOSAL_EXECUTOR_RESULT_SUCCESS - The executor was successful and proposed action updated state. */
  PROPOSAL_EXECUTOR_RESULT_SUCCESS = 2,
  /** PROPOSAL_EXECUTOR_RESULT_FAILURE - The executor returned an error and proposed action didn't update state. */
  PROPOSAL_EXECUTOR_RESULT_FAILURE = 3,
  UNRECOGNIZED = -1,
}
export const ProposalExecutorResultSDKType = ProposalExecutorResult;
export const ProposalExecutorResultAmino = ProposalExecutorResult;
export function proposalExecutorResultFromJSON(object: any): ProposalExecutorResult {
  switch (object) {
    case 0:
    case "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED;
    case 1:
    case "PROPOSAL_EXECUTOR_RESULT_NOT_RUN":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN;
    case 2:
    case "PROPOSAL_EXECUTOR_RESULT_SUCCESS":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS;
    case 3:
    case "PROPOSAL_EXECUTOR_RESULT_FAILURE":
      return ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalExecutorResult.UNRECOGNIZED;
  }
}
export function proposalExecutorResultToJSON(object: ProposalExecutorResult): string {
  switch (object) {
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED:
      return "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED";
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_NOT_RUN:
      return "PROPOSAL_EXECUTOR_RESULT_NOT_RUN";
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_SUCCESS:
      return "PROPOSAL_EXECUTOR_RESULT_SUCCESS";
    case ProposalExecutorResult.PROPOSAL_EXECUTOR_RESULT_FAILURE:
      return "PROPOSAL_EXECUTOR_RESULT_FAILURE";
    case ProposalExecutorResult.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
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
  addedAt: Date;
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
  added_at?: string;
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
  added_at: Date;
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
  windows?: DecisionPolicyWindows;
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
  windows?: DecisionPolicyWindowsAmino;
}
export interface ThresholdDecisionPolicyAminoMsg {
  type: "cosmos-sdk/ThresholdDecisionPolicy";
  value: ThresholdDecisionPolicyAmino;
}
/** ThresholdDecisionPolicy implements the DecisionPolicy interface */
export interface ThresholdDecisionPolicySDKType {
  $typeUrl?: "/cosmos.group.v1.ThresholdDecisionPolicy";
  threshold: string;
  windows?: DecisionPolicyWindowsSDKType;
}
/** PercentageDecisionPolicy implements the DecisionPolicy interface */
export interface PercentageDecisionPolicy {
  $typeUrl?: "/cosmos.group.v1.PercentageDecisionPolicy";
  /** percentage is the minimum percentage the weighted sum of yes votes must meet for a proposal to succeed. */
  percentage: string;
  /** windows defines the different windows for voting and execution. */
  windows?: DecisionPolicyWindows;
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
  windows?: DecisionPolicyWindowsAmino;
}
export interface PercentageDecisionPolicyAminoMsg {
  type: "cosmos-sdk/PercentageDecisionPolicy";
  value: PercentageDecisionPolicyAmino;
}
/** PercentageDecisionPolicy implements the DecisionPolicy interface */
export interface PercentageDecisionPolicySDKType {
  $typeUrl?: "/cosmos.group.v1.PercentageDecisionPolicy";
  percentage: string;
  windows?: DecisionPolicyWindowsSDKType;
}
/** DecisionPolicyWindows defines the different windows for voting and execution. */
export interface DecisionPolicyWindows {
  /**
   * voting_period is the duration from submission of a proposal to the end of voting period
   * Within this times votes can be submitted with MsgVote.
   */
  votingPeriod: Duration;
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
  minExecutionPeriod: Duration;
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
  voting_period?: DurationAmino;
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
  min_execution_period?: DurationAmino;
}
export interface DecisionPolicyWindowsAminoMsg {
  type: "cosmos-sdk/DecisionPolicyWindows";
  value: DecisionPolicyWindowsAmino;
}
/** DecisionPolicyWindows defines the different windows for voting and execution. */
export interface DecisionPolicyWindowsSDKType {
  voting_period: DurationSDKType;
  min_execution_period: DurationSDKType;
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
  createdAt: Date;
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
  created_at?: string;
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
  created_at: Date;
}
/** GroupMember represents the relationship between a group and a member. */
export interface GroupMember {
  /** group_id is the unique ID of the group. */
  groupId: bigint;
  /** member is the member data. */
  member?: Member;
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
  member?: MemberAmino;
}
export interface GroupMemberAminoMsg {
  type: "cosmos-sdk/GroupMember";
  value: GroupMemberAmino;
}
/** GroupMember represents the relationship between a group and a member. */
export interface GroupMemberSDKType {
  group_id: bigint;
  member?: MemberSDKType;
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
  createdAt: Date;
}
export interface GroupPolicyInfoProtoMsg {
  typeUrl: "/cosmos.group.v1.GroupPolicyInfo";
  value: Uint8Array;
}
export type GroupPolicyInfoEncoded = Omit<GroupPolicyInfo, "decisionPolicy"> & {
  /** decision_policy specifies the group policy's decision policy. */decisionPolicy?: ThresholdDecisionPolicyProtoMsg | PercentageDecisionPolicyProtoMsg | AnyProtoMsg | undefined;
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
  decision_policy?: AnyAmino;
  /** created_at is a timestamp specifying when a group policy was created. */
  created_at?: string;
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
  created_at: Date;
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
  submitTime: Date;
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
  finalTallyResult: TallyResult;
  /**
   * voting_period_end is the timestamp before which voting must be done.
   * Unless a successfull MsgExec is called before (to execute a proposal whose
   * tally is successful before the voting period ends), tallying will be done
   * at this point, and the `final_tally_result`, as well
   * as `status` and `result` fields will be accordingly updated.
   */
  votingPeriodEnd: Date;
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
  submit_time?: string;
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
  final_tally_result?: TallyResultAmino;
  /**
   * voting_period_end is the timestamp before which voting must be done.
   * Unless a successfull MsgExec is called before (to execute a proposal whose
   * tally is successful before the voting period ends), tallying will be done
   * at this point, and the `final_tally_result`, as well
   * as `status` and `result` fields will be accordingly updated.
   */
  voting_period_end?: string;
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
  submit_time: Date;
  group_version: bigint;
  group_policy_version: bigint;
  status: ProposalStatus;
  result: ProposalResult;
  final_tally_result: TallyResultSDKType;
  voting_period_end: Date;
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
  submitTime: Date;
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
  submit_time?: string;
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
  submit_time: Date;
}
function createBaseMember(): Member {
  return {
    address: "",
    weight: "",
    metadata: "",
    addedAt: new Date()
  };
}
export const Member = {
  typeUrl: "/cosmos.group.v1.Member",
  aminoType: "cosmos-sdk/Member",
  is(o: any): o is Member {
    return o && (o.$typeUrl === Member.typeUrl || typeof o.address === "string" && typeof o.weight === "string" && typeof o.metadata === "string" && Timestamp.is(o.addedAt));
  },
  isSDK(o: any): o is MemberSDKType {
    return o && (o.$typeUrl === Member.typeUrl || typeof o.address === "string" && typeof o.weight === "string" && typeof o.metadata === "string" && Timestamp.isSDK(o.added_at));
  },
  isAmino(o: any): o is MemberAmino {
    return o && (o.$typeUrl === Member.typeUrl || typeof o.address === "string" && typeof o.weight === "string" && typeof o.metadata === "string" && Timestamp.isAmino(o.added_at));
  },
  encode(message: Member, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== undefined) {
      writer.uint32(10).string(message.address);
    }
    if (message.weight !== undefined) {
      writer.uint32(18).string(message.weight);
    }
    if (message.metadata !== undefined) {
      writer.uint32(26).string(message.metadata);
    }
    if (message.addedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.addedAt), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Member {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.weight = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.addedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Member {
    const obj = createBaseMember();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.weight)) obj.weight = String(object.weight);
    if (isSet(object.metadata)) obj.metadata = String(object.metadata);
    if (isSet(object.addedAt)) obj.addedAt = new Date(object.addedAt);
    return obj;
  },
  toJSON(message: Member): JsonSafe<Member> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.weight !== undefined && (obj.weight = message.weight);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.addedAt !== undefined && (obj.addedAt = message.addedAt.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<Member>): Member {
    const message = createBaseMember();
    message.address = object.address ?? "";
    message.weight = object.weight ?? "";
    message.metadata = object.metadata ?? "";
    message.addedAt = object.addedAt ?? undefined;
    return message;
  },
  fromSDK(object: MemberSDKType): Member {
    return {
      address: object?.address,
      weight: object?.weight,
      metadata: object?.metadata,
      addedAt: object.added_at ?? undefined
    };
  },
  toSDK(message: Member): MemberSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.weight = message.weight;
    obj.metadata = message.metadata;
    message.addedAt !== undefined && (obj.added_at = message.addedAt ?? undefined);
    return obj;
  },
  fromAmino(object: MemberAmino): Member {
    const message = createBaseMember();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.added_at !== undefined && object.added_at !== null) {
      message.addedAt = fromTimestamp(Timestamp.fromAmino(object.added_at));
    }
    return message;
  },
  toAmino(message: Member): MemberAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.weight = message.weight === "" ? undefined : message.weight;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    obj.added_at = message.addedAt ? Timestamp.toAmino(toTimestamp(message.addedAt)) : undefined;
    return obj;
  },
  fromAminoMsg(object: MemberAminoMsg): Member {
    return Member.fromAmino(object.value);
  },
  toAminoMsg(message: Member): MemberAminoMsg {
    return {
      type: "cosmos-sdk/Member",
      value: Member.toAmino(message)
    };
  },
  fromProtoMsg(message: MemberProtoMsg): Member {
    return Member.decode(message.value);
  },
  toProto(message: Member): Uint8Array {
    return Member.encode(message).finish();
  },
  toProtoMsg(message: Member): MemberProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.Member",
      value: Member.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Member.typeUrl, Member);
GlobalDecoderRegistry.registerAminoProtoMapping(Member.aminoType, Member.typeUrl);
function createBaseMembers(): Members {
  return {
    members: []
  };
}
export const Members = {
  typeUrl: "/cosmos.group.v1.Members",
  aminoType: "cosmos-sdk/Members",
  is(o: any): o is Members {
    return o && (o.$typeUrl === Members.typeUrl || Array.isArray(o.members) && (!o.members.length || Member.is(o.members[0])));
  },
  isSDK(o: any): o is MembersSDKType {
    return o && (o.$typeUrl === Members.typeUrl || Array.isArray(o.members) && (!o.members.length || Member.isSDK(o.members[0])));
  },
  isAmino(o: any): o is MembersAmino {
    return o && (o.$typeUrl === Members.typeUrl || Array.isArray(o.members) && (!o.members.length || Member.isAmino(o.members[0])));
  },
  encode(message: Members, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.members) {
      Member.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Members {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMembers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.members.push(Member.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Members {
    const obj = createBaseMembers();
    if (Array.isArray(object?.members)) obj.members = object.members.map((e: any) => Member.fromJSON(e));
    return obj;
  },
  toJSON(message: Members): JsonSafe<Members> {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Members>): Members {
    const message = createBaseMembers();
    message.members = object.members?.map(e => Member.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MembersSDKType): Members {
    return {
      members: Array.isArray(object?.members) ? object.members.map((e: any) => Member.fromSDK(e)) : []
    };
  },
  toSDK(message: Members): MembersSDKType {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toSDK(e) : undefined);
    } else {
      obj.members = [];
    }
    return obj;
  },
  fromAmino(object: MembersAmino): Members {
    const message = createBaseMembers();
    message.members = object.members?.map(e => Member.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Members): MembersAmino {
    const obj: any = {};
    if (message.members) {
      obj.members = message.members.map(e => e ? Member.toAmino(e) : undefined);
    } else {
      obj.members = message.members;
    }
    return obj;
  },
  fromAminoMsg(object: MembersAminoMsg): Members {
    return Members.fromAmino(object.value);
  },
  toAminoMsg(message: Members): MembersAminoMsg {
    return {
      type: "cosmos-sdk/Members",
      value: Members.toAmino(message)
    };
  },
  fromProtoMsg(message: MembersProtoMsg): Members {
    return Members.decode(message.value);
  },
  toProto(message: Members): Uint8Array {
    return Members.encode(message).finish();
  },
  toProtoMsg(message: Members): MembersProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.Members",
      value: Members.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Members.typeUrl, Members);
GlobalDecoderRegistry.registerAminoProtoMapping(Members.aminoType, Members.typeUrl);
function createBaseThresholdDecisionPolicy(): ThresholdDecisionPolicy {
  return {
    $typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
    threshold: "",
    windows: undefined
  };
}
export const ThresholdDecisionPolicy = {
  typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
  aminoType: "cosmos-sdk/ThresholdDecisionPolicy",
  is(o: any): o is ThresholdDecisionPolicy {
    return o && (o.$typeUrl === ThresholdDecisionPolicy.typeUrl || typeof o.threshold === "string");
  },
  isSDK(o: any): o is ThresholdDecisionPolicySDKType {
    return o && (o.$typeUrl === ThresholdDecisionPolicy.typeUrl || typeof o.threshold === "string");
  },
  isAmino(o: any): o is ThresholdDecisionPolicyAmino {
    return o && (o.$typeUrl === ThresholdDecisionPolicy.typeUrl || typeof o.threshold === "string");
  },
  encode(message: ThresholdDecisionPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.threshold !== undefined) {
      writer.uint32(10).string(message.threshold);
    }
    if (message.windows !== undefined) {
      DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ThresholdDecisionPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseThresholdDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.threshold = reader.string();
          break;
        case 2:
          message.windows = DecisionPolicyWindows.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ThresholdDecisionPolicy {
    const obj = createBaseThresholdDecisionPolicy();
    if (isSet(object.threshold)) obj.threshold = String(object.threshold);
    if (isSet(object.windows)) obj.windows = DecisionPolicyWindows.fromJSON(object.windows);
    return obj;
  },
  toJSON(message: ThresholdDecisionPolicy): JsonSafe<ThresholdDecisionPolicy> {
    const obj: any = {};
    message.threshold !== undefined && (obj.threshold = message.threshold);
    message.windows !== undefined && (obj.windows = message.windows ? DecisionPolicyWindows.toJSON(message.windows) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ThresholdDecisionPolicy>): ThresholdDecisionPolicy {
    const message = createBaseThresholdDecisionPolicy();
    message.threshold = object.threshold ?? "";
    if (object.windows !== undefined && object.windows !== null) {
      message.windows = DecisionPolicyWindows.fromPartial(object.windows);
    }
    return message;
  },
  fromSDK(object: ThresholdDecisionPolicySDKType): ThresholdDecisionPolicy {
    return {
      threshold: object?.threshold,
      windows: object.windows ? DecisionPolicyWindows.fromSDK(object.windows) : undefined
    };
  },
  toSDK(message: ThresholdDecisionPolicy): ThresholdDecisionPolicySDKType {
    const obj: any = {};
    obj.threshold = message.threshold;
    message.windows !== undefined && (obj.windows = message.windows ? DecisionPolicyWindows.toSDK(message.windows) : undefined);
    return obj;
  },
  fromAmino(object: ThresholdDecisionPolicyAmino): ThresholdDecisionPolicy {
    const message = createBaseThresholdDecisionPolicy();
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = object.threshold;
    }
    if (object.windows !== undefined && object.windows !== null) {
      message.windows = DecisionPolicyWindows.fromAmino(object.windows);
    }
    return message;
  },
  toAmino(message: ThresholdDecisionPolicy): ThresholdDecisionPolicyAmino {
    const obj: any = {};
    obj.threshold = message.threshold === "" ? undefined : message.threshold;
    obj.windows = message.windows ? DecisionPolicyWindows.toAmino(message.windows) : undefined;
    return obj;
  },
  fromAminoMsg(object: ThresholdDecisionPolicyAminoMsg): ThresholdDecisionPolicy {
    return ThresholdDecisionPolicy.fromAmino(object.value);
  },
  toAminoMsg(message: ThresholdDecisionPolicy): ThresholdDecisionPolicyAminoMsg {
    return {
      type: "cosmos-sdk/ThresholdDecisionPolicy",
      value: ThresholdDecisionPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message: ThresholdDecisionPolicyProtoMsg): ThresholdDecisionPolicy {
    return ThresholdDecisionPolicy.decode(message.value);
  },
  toProto(message: ThresholdDecisionPolicy): Uint8Array {
    return ThresholdDecisionPolicy.encode(message).finish();
  },
  toProtoMsg(message: ThresholdDecisionPolicy): ThresholdDecisionPolicyProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.ThresholdDecisionPolicy",
      value: ThresholdDecisionPolicy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ThresholdDecisionPolicy.typeUrl, ThresholdDecisionPolicy);
GlobalDecoderRegistry.registerAminoProtoMapping(ThresholdDecisionPolicy.aminoType, ThresholdDecisionPolicy.typeUrl);
function createBasePercentageDecisionPolicy(): PercentageDecisionPolicy {
  return {
    $typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
    percentage: "",
    windows: undefined
  };
}
export const PercentageDecisionPolicy = {
  typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
  aminoType: "cosmos-sdk/PercentageDecisionPolicy",
  is(o: any): o is PercentageDecisionPolicy {
    return o && (o.$typeUrl === PercentageDecisionPolicy.typeUrl || typeof o.percentage === "string");
  },
  isSDK(o: any): o is PercentageDecisionPolicySDKType {
    return o && (o.$typeUrl === PercentageDecisionPolicy.typeUrl || typeof o.percentage === "string");
  },
  isAmino(o: any): o is PercentageDecisionPolicyAmino {
    return o && (o.$typeUrl === PercentageDecisionPolicy.typeUrl || typeof o.percentage === "string");
  },
  encode(message: PercentageDecisionPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.percentage !== undefined) {
      writer.uint32(10).string(message.percentage);
    }
    if (message.windows !== undefined) {
      DecisionPolicyWindows.encode(message.windows, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PercentageDecisionPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePercentageDecisionPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.percentage = reader.string();
          break;
        case 2:
          message.windows = DecisionPolicyWindows.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PercentageDecisionPolicy {
    const obj = createBasePercentageDecisionPolicy();
    if (isSet(object.percentage)) obj.percentage = String(object.percentage);
    if (isSet(object.windows)) obj.windows = DecisionPolicyWindows.fromJSON(object.windows);
    return obj;
  },
  toJSON(message: PercentageDecisionPolicy): JsonSafe<PercentageDecisionPolicy> {
    const obj: any = {};
    message.percentage !== undefined && (obj.percentage = message.percentage);
    message.windows !== undefined && (obj.windows = message.windows ? DecisionPolicyWindows.toJSON(message.windows) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<PercentageDecisionPolicy>): PercentageDecisionPolicy {
    const message = createBasePercentageDecisionPolicy();
    message.percentage = object.percentage ?? "";
    if (object.windows !== undefined && object.windows !== null) {
      message.windows = DecisionPolicyWindows.fromPartial(object.windows);
    }
    return message;
  },
  fromSDK(object: PercentageDecisionPolicySDKType): PercentageDecisionPolicy {
    return {
      percentage: object?.percentage,
      windows: object.windows ? DecisionPolicyWindows.fromSDK(object.windows) : undefined
    };
  },
  toSDK(message: PercentageDecisionPolicy): PercentageDecisionPolicySDKType {
    const obj: any = {};
    obj.percentage = message.percentage;
    message.windows !== undefined && (obj.windows = message.windows ? DecisionPolicyWindows.toSDK(message.windows) : undefined);
    return obj;
  },
  fromAmino(object: PercentageDecisionPolicyAmino): PercentageDecisionPolicy {
    const message = createBasePercentageDecisionPolicy();
    if (object.percentage !== undefined && object.percentage !== null) {
      message.percentage = object.percentage;
    }
    if (object.windows !== undefined && object.windows !== null) {
      message.windows = DecisionPolicyWindows.fromAmino(object.windows);
    }
    return message;
  },
  toAmino(message: PercentageDecisionPolicy): PercentageDecisionPolicyAmino {
    const obj: any = {};
    obj.percentage = message.percentage === "" ? undefined : message.percentage;
    obj.windows = message.windows ? DecisionPolicyWindows.toAmino(message.windows) : undefined;
    return obj;
  },
  fromAminoMsg(object: PercentageDecisionPolicyAminoMsg): PercentageDecisionPolicy {
    return PercentageDecisionPolicy.fromAmino(object.value);
  },
  toAminoMsg(message: PercentageDecisionPolicy): PercentageDecisionPolicyAminoMsg {
    return {
      type: "cosmos-sdk/PercentageDecisionPolicy",
      value: PercentageDecisionPolicy.toAmino(message)
    };
  },
  fromProtoMsg(message: PercentageDecisionPolicyProtoMsg): PercentageDecisionPolicy {
    return PercentageDecisionPolicy.decode(message.value);
  },
  toProto(message: PercentageDecisionPolicy): Uint8Array {
    return PercentageDecisionPolicy.encode(message).finish();
  },
  toProtoMsg(message: PercentageDecisionPolicy): PercentageDecisionPolicyProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.PercentageDecisionPolicy",
      value: PercentageDecisionPolicy.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PercentageDecisionPolicy.typeUrl, PercentageDecisionPolicy);
GlobalDecoderRegistry.registerAminoProtoMapping(PercentageDecisionPolicy.aminoType, PercentageDecisionPolicy.typeUrl);
function createBaseDecisionPolicyWindows(): DecisionPolicyWindows {
  return {
    votingPeriod: Duration.fromPartial({}),
    minExecutionPeriod: Duration.fromPartial({})
  };
}
export const DecisionPolicyWindows = {
  typeUrl: "/cosmos.group.v1.DecisionPolicyWindows",
  aminoType: "cosmos-sdk/DecisionPolicyWindows",
  is(o: any): o is DecisionPolicyWindows {
    return o && (o.$typeUrl === DecisionPolicyWindows.typeUrl || Duration.is(o.votingPeriod) && Duration.is(o.minExecutionPeriod));
  },
  isSDK(o: any): o is DecisionPolicyWindowsSDKType {
    return o && (o.$typeUrl === DecisionPolicyWindows.typeUrl || Duration.isSDK(o.voting_period) && Duration.isSDK(o.min_execution_period));
  },
  isAmino(o: any): o is DecisionPolicyWindowsAmino {
    return o && (o.$typeUrl === DecisionPolicyWindows.typeUrl || Duration.isAmino(o.voting_period) && Duration.isAmino(o.min_execution_period));
  },
  encode(message: DecisionPolicyWindows, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.votingPeriod !== undefined) {
      Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
    }
    if (message.minExecutionPeriod !== undefined) {
      Duration.encode(message.minExecutionPeriod, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DecisionPolicyWindows {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDecisionPolicyWindows();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votingPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.minExecutionPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DecisionPolicyWindows {
    const obj = createBaseDecisionPolicyWindows();
    if (isSet(object.votingPeriod)) obj.votingPeriod = Duration.fromJSON(object.votingPeriod);
    if (isSet(object.minExecutionPeriod)) obj.minExecutionPeriod = Duration.fromJSON(object.minExecutionPeriod);
    return obj;
  },
  toJSON(message: DecisionPolicyWindows): JsonSafe<DecisionPolicyWindows> {
    const obj: any = {};
    message.votingPeriod !== undefined && (obj.votingPeriod = message.votingPeriod ? Duration.toJSON(message.votingPeriod) : undefined);
    message.minExecutionPeriod !== undefined && (obj.minExecutionPeriod = message.minExecutionPeriod ? Duration.toJSON(message.minExecutionPeriod) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<DecisionPolicyWindows>): DecisionPolicyWindows {
    const message = createBaseDecisionPolicyWindows();
    if (object.votingPeriod !== undefined && object.votingPeriod !== null) {
      message.votingPeriod = Duration.fromPartial(object.votingPeriod);
    }
    if (object.minExecutionPeriod !== undefined && object.minExecutionPeriod !== null) {
      message.minExecutionPeriod = Duration.fromPartial(object.minExecutionPeriod);
    }
    return message;
  },
  fromSDK(object: DecisionPolicyWindowsSDKType): DecisionPolicyWindows {
    return {
      votingPeriod: object.voting_period ? Duration.fromSDK(object.voting_period) : undefined,
      minExecutionPeriod: object.min_execution_period ? Duration.fromSDK(object.min_execution_period) : undefined
    };
  },
  toSDK(message: DecisionPolicyWindows): DecisionPolicyWindowsSDKType {
    const obj: any = {};
    message.votingPeriod !== undefined && (obj.voting_period = message.votingPeriod ? Duration.toSDK(message.votingPeriod) : undefined);
    message.minExecutionPeriod !== undefined && (obj.min_execution_period = message.minExecutionPeriod ? Duration.toSDK(message.minExecutionPeriod) : undefined);
    return obj;
  },
  fromAmino(object: DecisionPolicyWindowsAmino): DecisionPolicyWindows {
    const message = createBaseDecisionPolicyWindows();
    if (object.voting_period !== undefined && object.voting_period !== null) {
      message.votingPeriod = Duration.fromAmino(object.voting_period);
    }
    if (object.min_execution_period !== undefined && object.min_execution_period !== null) {
      message.minExecutionPeriod = Duration.fromAmino(object.min_execution_period);
    }
    return message;
  },
  toAmino(message: DecisionPolicyWindows): DecisionPolicyWindowsAmino {
    const obj: any = {};
    obj.voting_period = message.votingPeriod ? Duration.toAmino(message.votingPeriod) : undefined;
    obj.min_execution_period = message.minExecutionPeriod ? Duration.toAmino(message.minExecutionPeriod) : undefined;
    return obj;
  },
  fromAminoMsg(object: DecisionPolicyWindowsAminoMsg): DecisionPolicyWindows {
    return DecisionPolicyWindows.fromAmino(object.value);
  },
  toAminoMsg(message: DecisionPolicyWindows): DecisionPolicyWindowsAminoMsg {
    return {
      type: "cosmos-sdk/DecisionPolicyWindows",
      value: DecisionPolicyWindows.toAmino(message)
    };
  },
  fromProtoMsg(message: DecisionPolicyWindowsProtoMsg): DecisionPolicyWindows {
    return DecisionPolicyWindows.decode(message.value);
  },
  toProto(message: DecisionPolicyWindows): Uint8Array {
    return DecisionPolicyWindows.encode(message).finish();
  },
  toProtoMsg(message: DecisionPolicyWindows): DecisionPolicyWindowsProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.DecisionPolicyWindows",
      value: DecisionPolicyWindows.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DecisionPolicyWindows.typeUrl, DecisionPolicyWindows);
GlobalDecoderRegistry.registerAminoProtoMapping(DecisionPolicyWindows.aminoType, DecisionPolicyWindows.typeUrl);
function createBaseGroupInfo(): GroupInfo {
  return {
    id: BigInt(0),
    admin: "",
    metadata: "",
    version: BigInt(0),
    totalWeight: "",
    createdAt: new Date()
  };
}
export const GroupInfo = {
  typeUrl: "/cosmos.group.v1.GroupInfo",
  aminoType: "cosmos-sdk/GroupInfo",
  is(o: any): o is GroupInfo {
    return o && (o.$typeUrl === GroupInfo.typeUrl || typeof o.id === "bigint" && typeof o.admin === "string" && typeof o.metadata === "string" && typeof o.version === "bigint" && typeof o.totalWeight === "string" && Timestamp.is(o.createdAt));
  },
  isSDK(o: any): o is GroupInfoSDKType {
    return o && (o.$typeUrl === GroupInfo.typeUrl || typeof o.id === "bigint" && typeof o.admin === "string" && typeof o.metadata === "string" && typeof o.version === "bigint" && typeof o.total_weight === "string" && Timestamp.isSDK(o.created_at));
  },
  isAmino(o: any): o is GroupInfoAmino {
    return o && (o.$typeUrl === GroupInfo.typeUrl || typeof o.id === "bigint" && typeof o.admin === "string" && typeof o.metadata === "string" && typeof o.version === "bigint" && typeof o.total_weight === "string" && Timestamp.isAmino(o.created_at));
  },
  encode(message: GroupInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.admin !== undefined) {
      writer.uint32(18).string(message.admin);
    }
    if (message.metadata !== undefined) {
      writer.uint32(26).string(message.metadata);
    }
    if (message.version !== undefined) {
      writer.uint32(32).uint64(message.version);
    }
    if (message.totalWeight !== undefined) {
      writer.uint32(42).string(message.totalWeight);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GroupInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.admin = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.version = reader.uint64();
          break;
        case 5:
          message.totalWeight = reader.string();
          break;
        case 6:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GroupInfo {
    const obj = createBaseGroupInfo();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (isSet(object.metadata)) obj.metadata = String(object.metadata);
    if (isSet(object.version)) obj.version = BigInt(object.version.toString());
    if (isSet(object.totalWeight)) obj.totalWeight = String(object.totalWeight);
    if (isSet(object.createdAt)) obj.createdAt = new Date(object.createdAt);
    return obj;
  },
  toJSON(message: GroupInfo): JsonSafe<GroupInfo> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.admin !== undefined && (obj.admin = message.admin);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.version !== undefined && (obj.version = (message.version || BigInt(0)).toString());
    message.totalWeight !== undefined && (obj.totalWeight = message.totalWeight);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<GroupInfo>): GroupInfo {
    const message = createBaseGroupInfo();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    message.admin = object.admin ?? "";
    message.metadata = object.metadata ?? "";
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version.toString());
    }
    message.totalWeight = object.totalWeight ?? "";
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
  fromSDK(object: GroupInfoSDKType): GroupInfo {
    return {
      id: object?.id,
      admin: object?.admin,
      metadata: object?.metadata,
      version: object?.version,
      totalWeight: object?.total_weight,
      createdAt: object.created_at ?? undefined
    };
  },
  toSDK(message: GroupInfo): GroupInfoSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.admin = message.admin;
    obj.metadata = message.metadata;
    obj.version = message.version;
    obj.total_weight = message.totalWeight;
    message.createdAt !== undefined && (obj.created_at = message.createdAt ?? undefined);
    return obj;
  },
  fromAmino(object: GroupInfoAmino): GroupInfo {
    const message = createBaseGroupInfo();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version);
    }
    if (object.total_weight !== undefined && object.total_weight !== null) {
      message.totalWeight = object.total_weight;
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = fromTimestamp(Timestamp.fromAmino(object.created_at));
    }
    return message;
  },
  toAmino(message: GroupInfo): GroupInfoAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    obj.version = message.version !== BigInt(0) ? message.version.toString() : undefined;
    obj.total_weight = message.totalWeight === "" ? undefined : message.totalWeight;
    obj.created_at = message.createdAt ? Timestamp.toAmino(toTimestamp(message.createdAt)) : undefined;
    return obj;
  },
  fromAminoMsg(object: GroupInfoAminoMsg): GroupInfo {
    return GroupInfo.fromAmino(object.value);
  },
  toAminoMsg(message: GroupInfo): GroupInfoAminoMsg {
    return {
      type: "cosmos-sdk/GroupInfo",
      value: GroupInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: GroupInfoProtoMsg): GroupInfo {
    return GroupInfo.decode(message.value);
  },
  toProto(message: GroupInfo): Uint8Array {
    return GroupInfo.encode(message).finish();
  },
  toProtoMsg(message: GroupInfo): GroupInfoProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.GroupInfo",
      value: GroupInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GroupInfo.typeUrl, GroupInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(GroupInfo.aminoType, GroupInfo.typeUrl);
function createBaseGroupMember(): GroupMember {
  return {
    groupId: BigInt(0),
    member: undefined
  };
}
export const GroupMember = {
  typeUrl: "/cosmos.group.v1.GroupMember",
  aminoType: "cosmos-sdk/GroupMember",
  is(o: any): o is GroupMember {
    return o && (o.$typeUrl === GroupMember.typeUrl || typeof o.groupId === "bigint");
  },
  isSDK(o: any): o is GroupMemberSDKType {
    return o && (o.$typeUrl === GroupMember.typeUrl || typeof o.group_id === "bigint");
  },
  isAmino(o: any): o is GroupMemberAmino {
    return o && (o.$typeUrl === GroupMember.typeUrl || typeof o.group_id === "bigint");
  },
  encode(message: GroupMember, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== undefined) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.member !== undefined) {
      Member.encode(message.member, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GroupMember {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupMember();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        case 2:
          message.member = Member.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GroupMember {
    const obj = createBaseGroupMember();
    if (isSet(object.groupId)) obj.groupId = BigInt(object.groupId.toString());
    if (isSet(object.member)) obj.member = Member.fromJSON(object.member);
    return obj;
  },
  toJSON(message: GroupMember): JsonSafe<GroupMember> {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    message.member !== undefined && (obj.member = message.member ? Member.toJSON(message.member) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GroupMember>): GroupMember {
    const message = createBaseGroupMember();
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = BigInt(object.groupId.toString());
    }
    if (object.member !== undefined && object.member !== null) {
      message.member = Member.fromPartial(object.member);
    }
    return message;
  },
  fromSDK(object: GroupMemberSDKType): GroupMember {
    return {
      groupId: object?.group_id,
      member: object.member ? Member.fromSDK(object.member) : undefined
    };
  },
  toSDK(message: GroupMember): GroupMemberSDKType {
    const obj: any = {};
    obj.group_id = message.groupId;
    message.member !== undefined && (obj.member = message.member ? Member.toSDK(message.member) : undefined);
    return obj;
  },
  fromAmino(object: GroupMemberAmino): GroupMember {
    const message = createBaseGroupMember();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.member !== undefined && object.member !== null) {
      message.member = Member.fromAmino(object.member);
    }
    return message;
  },
  toAmino(message: GroupMember): GroupMemberAmino {
    const obj: any = {};
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : undefined;
    obj.member = message.member ? Member.toAmino(message.member) : undefined;
    return obj;
  },
  fromAminoMsg(object: GroupMemberAminoMsg): GroupMember {
    return GroupMember.fromAmino(object.value);
  },
  toAminoMsg(message: GroupMember): GroupMemberAminoMsg {
    return {
      type: "cosmos-sdk/GroupMember",
      value: GroupMember.toAmino(message)
    };
  },
  fromProtoMsg(message: GroupMemberProtoMsg): GroupMember {
    return GroupMember.decode(message.value);
  },
  toProto(message: GroupMember): Uint8Array {
    return GroupMember.encode(message).finish();
  },
  toProtoMsg(message: GroupMember): GroupMemberProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.GroupMember",
      value: GroupMember.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GroupMember.typeUrl, GroupMember);
GlobalDecoderRegistry.registerAminoProtoMapping(GroupMember.aminoType, GroupMember.typeUrl);
function createBaseGroupPolicyInfo(): GroupPolicyInfo {
  return {
    address: "",
    groupId: BigInt(0),
    admin: "",
    metadata: "",
    version: BigInt(0),
    decisionPolicy: undefined,
    createdAt: new Date()
  };
}
export const GroupPolicyInfo = {
  typeUrl: "/cosmos.group.v1.GroupPolicyInfo",
  aminoType: "cosmos-sdk/GroupPolicyInfo",
  is(o: any): o is GroupPolicyInfo {
    return o && (o.$typeUrl === GroupPolicyInfo.typeUrl || typeof o.address === "string" && typeof o.groupId === "bigint" && typeof o.admin === "string" && typeof o.metadata === "string" && typeof o.version === "bigint" && Timestamp.is(o.createdAt));
  },
  isSDK(o: any): o is GroupPolicyInfoSDKType {
    return o && (o.$typeUrl === GroupPolicyInfo.typeUrl || typeof o.address === "string" && typeof o.group_id === "bigint" && typeof o.admin === "string" && typeof o.metadata === "string" && typeof o.version === "bigint" && Timestamp.isSDK(o.created_at));
  },
  isAmino(o: any): o is GroupPolicyInfoAmino {
    return o && (o.$typeUrl === GroupPolicyInfo.typeUrl || typeof o.address === "string" && typeof o.group_id === "bigint" && typeof o.admin === "string" && typeof o.metadata === "string" && typeof o.version === "bigint" && Timestamp.isAmino(o.created_at));
  },
  encode(message: GroupPolicyInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== undefined) {
      writer.uint32(10).string(message.address);
    }
    if (message.groupId !== undefined) {
      writer.uint32(16).uint64(message.groupId);
    }
    if (message.admin !== undefined) {
      writer.uint32(26).string(message.admin);
    }
    if (message.metadata !== undefined) {
      writer.uint32(34).string(message.metadata);
    }
    if (message.version !== undefined) {
      writer.uint32(40).uint64(message.version);
    }
    if (message.decisionPolicy !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.decisionPolicy), writer.uint32(50).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GroupPolicyInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupPolicyInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.groupId = reader.uint64();
          break;
        case 3:
          message.admin = reader.string();
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.version = reader.uint64();
          break;
        case 6:
          message.decisionPolicy = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        case 7:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GroupPolicyInfo {
    const obj = createBaseGroupPolicyInfo();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.groupId)) obj.groupId = BigInt(object.groupId.toString());
    if (isSet(object.admin)) obj.admin = String(object.admin);
    if (isSet(object.metadata)) obj.metadata = String(object.metadata);
    if (isSet(object.version)) obj.version = BigInt(object.version.toString());
    if (isSet(object.decisionPolicy)) obj.decisionPolicy = GlobalDecoderRegistry.fromJSON(object.decisionPolicy);
    if (isSet(object.createdAt)) obj.createdAt = new Date(object.createdAt);
    return obj;
  },
  toJSON(message: GroupPolicyInfo): JsonSafe<GroupPolicyInfo> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    message.admin !== undefined && (obj.admin = message.admin);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.version !== undefined && (obj.version = (message.version || BigInt(0)).toString());
    message.decisionPolicy !== undefined && (obj.decisionPolicy = message.decisionPolicy ? GlobalDecoderRegistry.toJSON(message.decisionPolicy) : undefined);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<GroupPolicyInfo>): GroupPolicyInfo {
    const message = createBaseGroupPolicyInfo();
    message.address = object.address ?? "";
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = BigInt(object.groupId.toString());
    }
    message.admin = object.admin ?? "";
    message.metadata = object.metadata ?? "";
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version.toString());
    }
    if (object.decisionPolicy !== undefined && object.decisionPolicy !== null) {
      message.decisionPolicy = GlobalDecoderRegistry.fromPartial(object.decisionPolicy);
    }
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
  fromSDK(object: GroupPolicyInfoSDKType): GroupPolicyInfo {
    return {
      address: object?.address,
      groupId: object?.group_id,
      admin: object?.admin,
      metadata: object?.metadata,
      version: object?.version,
      decisionPolicy: object.decision_policy ? GlobalDecoderRegistry.fromSDK(object.decision_policy) : undefined,
      createdAt: object.created_at ?? undefined
    };
  },
  toSDK(message: GroupPolicyInfo): GroupPolicyInfoSDKType {
    const obj: any = {};
    obj.address = message.address;
    obj.group_id = message.groupId;
    obj.admin = message.admin;
    obj.metadata = message.metadata;
    obj.version = message.version;
    message.decisionPolicy !== undefined && (obj.decision_policy = message.decisionPolicy ? GlobalDecoderRegistry.toSDK(message.decisionPolicy) : undefined);
    message.createdAt !== undefined && (obj.created_at = message.createdAt ?? undefined);
    return obj;
  },
  fromAmino(object: GroupPolicyInfoAmino): GroupPolicyInfo {
    const message = createBaseGroupPolicyInfo();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.admin !== undefined && object.admin !== null) {
      message.admin = object.admin;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = BigInt(object.version);
    }
    if (object.decision_policy !== undefined && object.decision_policy !== null) {
      message.decisionPolicy = GlobalDecoderRegistry.fromAminoMsg(object.decision_policy);
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = fromTimestamp(Timestamp.fromAmino(object.created_at));
    }
    return message;
  },
  toAmino(message: GroupPolicyInfo): GroupPolicyInfoAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.group_id = message.groupId !== BigInt(0) ? message.groupId.toString() : undefined;
    obj.admin = message.admin === "" ? undefined : message.admin;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    obj.version = message.version !== BigInt(0) ? message.version.toString() : undefined;
    obj.decision_policy = message.decisionPolicy ? GlobalDecoderRegistry.toAminoMsg(message.decisionPolicy) : undefined;
    obj.created_at = message.createdAt ? Timestamp.toAmino(toTimestamp(message.createdAt)) : undefined;
    return obj;
  },
  fromAminoMsg(object: GroupPolicyInfoAminoMsg): GroupPolicyInfo {
    return GroupPolicyInfo.fromAmino(object.value);
  },
  toAminoMsg(message: GroupPolicyInfo): GroupPolicyInfoAminoMsg {
    return {
      type: "cosmos-sdk/GroupPolicyInfo",
      value: GroupPolicyInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: GroupPolicyInfoProtoMsg): GroupPolicyInfo {
    return GroupPolicyInfo.decode(message.value);
  },
  toProto(message: GroupPolicyInfo): Uint8Array {
    return GroupPolicyInfo.encode(message).finish();
  },
  toProtoMsg(message: GroupPolicyInfo): GroupPolicyInfoProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.GroupPolicyInfo",
      value: GroupPolicyInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GroupPolicyInfo.typeUrl, GroupPolicyInfo);
GlobalDecoderRegistry.registerAminoProtoMapping(GroupPolicyInfo.aminoType, GroupPolicyInfo.typeUrl);
function createBaseProposal(): Proposal {
  return {
    id: BigInt(0),
    address: "",
    metadata: "",
    proposers: [],
    submitTime: new Date(),
    groupVersion: BigInt(0),
    groupPolicyVersion: BigInt(0),
    status: 0,
    result: 0,
    finalTallyResult: TallyResult.fromPartial({}),
    votingPeriodEnd: new Date(),
    executorResult: 0,
    messages: []
  };
}
export const Proposal = {
  typeUrl: "/cosmos.group.v1.Proposal",
  aminoType: "cosmos-sdk/Proposal",
  is(o: any): o is Proposal {
    return o && (o.$typeUrl === Proposal.typeUrl || typeof o.id === "bigint" && typeof o.address === "string" && typeof o.metadata === "string" && Array.isArray(o.proposers) && (!o.proposers.length || typeof o.proposers[0] === "string") && Timestamp.is(o.submitTime) && typeof o.groupVersion === "bigint" && typeof o.groupPolicyVersion === "bigint" && isSet(o.status) && isSet(o.result) && TallyResult.is(o.finalTallyResult) && Timestamp.is(o.votingPeriodEnd) && isSet(o.executorResult) && Array.isArray(o.messages) && (!o.messages.length || Any.is(o.messages[0])));
  },
  isSDK(o: any): o is ProposalSDKType {
    return o && (o.$typeUrl === Proposal.typeUrl || typeof o.id === "bigint" && typeof o.address === "string" && typeof o.metadata === "string" && Array.isArray(o.proposers) && (!o.proposers.length || typeof o.proposers[0] === "string") && Timestamp.isSDK(o.submit_time) && typeof o.group_version === "bigint" && typeof o.group_policy_version === "bigint" && isSet(o.status) && isSet(o.result) && TallyResult.isSDK(o.final_tally_result) && Timestamp.isSDK(o.voting_period_end) && isSet(o.executor_result) && Array.isArray(o.messages) && (!o.messages.length || Any.isSDK(o.messages[0])));
  },
  isAmino(o: any): o is ProposalAmino {
    return o && (o.$typeUrl === Proposal.typeUrl || typeof o.id === "bigint" && typeof o.address === "string" && typeof o.metadata === "string" && Array.isArray(o.proposers) && (!o.proposers.length || typeof o.proposers[0] === "string") && Timestamp.isAmino(o.submit_time) && typeof o.group_version === "bigint" && typeof o.group_policy_version === "bigint" && isSet(o.status) && isSet(o.result) && TallyResult.isAmino(o.final_tally_result) && Timestamp.isAmino(o.voting_period_end) && isSet(o.executor_result) && Array.isArray(o.messages) && (!o.messages.length || Any.isAmino(o.messages[0])));
  },
  encode(message: Proposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.address !== undefined) {
      writer.uint32(18).string(message.address);
    }
    if (message.metadata !== undefined) {
      writer.uint32(26).string(message.metadata);
    }
    for (const v of message.proposers) {
      writer.uint32(34).string(v!);
    }
    if (message.submitTime !== undefined) {
      Timestamp.encode(toTimestamp(message.submitTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.groupVersion !== undefined) {
      writer.uint32(48).uint64(message.groupVersion);
    }
    if (message.groupPolicyVersion !== undefined) {
      writer.uint32(56).uint64(message.groupPolicyVersion);
    }
    if (message.status !== 0) {
      writer.uint32(64).int32(message.status);
    }
    if (message.result !== 0) {
      writer.uint32(72).int32(message.result);
    }
    if (message.finalTallyResult !== undefined) {
      TallyResult.encode(message.finalTallyResult, writer.uint32(82).fork()).ldelim();
    }
    if (message.votingPeriodEnd !== undefined) {
      Timestamp.encode(toTimestamp(message.votingPeriodEnd), writer.uint32(90).fork()).ldelim();
    }
    if (message.executorResult !== 0) {
      writer.uint32(96).int32(message.executorResult);
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.metadata = reader.string();
          break;
        case 4:
          message.proposers.push(reader.string());
          break;
        case 5:
          message.submitTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.groupVersion = reader.uint64();
          break;
        case 7:
          message.groupPolicyVersion = reader.uint64();
          break;
        case 8:
          message.status = (reader.int32() as any);
          break;
        case 9:
          message.result = (reader.int32() as any);
          break;
        case 10:
          message.finalTallyResult = TallyResult.decode(reader, reader.uint32());
          break;
        case 11:
          message.votingPeriodEnd = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 12:
          message.executorResult = (reader.int32() as any);
          break;
        case 13:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Proposal {
    const obj = createBaseProposal();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.metadata)) obj.metadata = String(object.metadata);
    if (Array.isArray(object?.proposers)) obj.proposers = object.proposers.map((e: any) => String(e));
    if (isSet(object.submitTime)) obj.submitTime = new Date(object.submitTime);
    if (isSet(object.groupVersion)) obj.groupVersion = BigInt(object.groupVersion.toString());
    if (isSet(object.groupPolicyVersion)) obj.groupPolicyVersion = BigInt(object.groupPolicyVersion.toString());
    if (isSet(object.status)) obj.status = proposalStatusFromJSON(object.status);
    if (isSet(object.result)) obj.result = proposalResultFromJSON(object.result);
    if (isSet(object.finalTallyResult)) obj.finalTallyResult = TallyResult.fromJSON(object.finalTallyResult);
    if (isSet(object.votingPeriodEnd)) obj.votingPeriodEnd = new Date(object.votingPeriodEnd);
    if (isSet(object.executorResult)) obj.executorResult = proposalExecutorResultFromJSON(object.executorResult);
    if (Array.isArray(object?.messages)) obj.messages = object.messages.map((e: any) => Any.fromJSON(e));
    return obj;
  },
  toJSON(message: Proposal): JsonSafe<Proposal> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.address !== undefined && (obj.address = message.address);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    if (message.proposers) {
      obj.proposers = message.proposers.map(e => e);
    } else {
      obj.proposers = [];
    }
    message.submitTime !== undefined && (obj.submitTime = message.submitTime.toISOString());
    message.groupVersion !== undefined && (obj.groupVersion = (message.groupVersion || BigInt(0)).toString());
    message.groupPolicyVersion !== undefined && (obj.groupPolicyVersion = (message.groupPolicyVersion || BigInt(0)).toString());
    message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
    message.result !== undefined && (obj.result = proposalResultToJSON(message.result));
    message.finalTallyResult !== undefined && (obj.finalTallyResult = message.finalTallyResult ? TallyResult.toJSON(message.finalTallyResult) : undefined);
    message.votingPeriodEnd !== undefined && (obj.votingPeriodEnd = message.votingPeriodEnd.toISOString());
    message.executorResult !== undefined && (obj.executorResult = proposalExecutorResultToJSON(message.executorResult));
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Proposal>): Proposal {
    const message = createBaseProposal();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    message.address = object.address ?? "";
    message.metadata = object.metadata ?? "";
    message.proposers = object.proposers?.map(e => e) || [];
    message.submitTime = object.submitTime ?? undefined;
    if (object.groupVersion !== undefined && object.groupVersion !== null) {
      message.groupVersion = BigInt(object.groupVersion.toString());
    }
    if (object.groupPolicyVersion !== undefined && object.groupPolicyVersion !== null) {
      message.groupPolicyVersion = BigInt(object.groupPolicyVersion.toString());
    }
    message.status = object.status ?? 0;
    message.result = object.result ?? 0;
    if (object.finalTallyResult !== undefined && object.finalTallyResult !== null) {
      message.finalTallyResult = TallyResult.fromPartial(object.finalTallyResult);
    }
    message.votingPeriodEnd = object.votingPeriodEnd ?? undefined;
    message.executorResult = object.executorResult ?? 0;
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ProposalSDKType): Proposal {
    return {
      id: object?.id,
      address: object?.address,
      metadata: object?.metadata,
      proposers: Array.isArray(object?.proposers) ? object.proposers.map((e: any) => e) : [],
      submitTime: object.submit_time ?? undefined,
      groupVersion: object?.group_version,
      groupPolicyVersion: object?.group_policy_version,
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : -1,
      result: isSet(object.result) ? proposalResultFromJSON(object.result) : -1,
      finalTallyResult: object.final_tally_result ? TallyResult.fromSDK(object.final_tally_result) : undefined,
      votingPeriodEnd: object.voting_period_end ?? undefined,
      executorResult: isSet(object.executor_result) ? proposalExecutorResultFromJSON(object.executor_result) : -1,
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromSDK(e)) : []
    };
  },
  toSDK(message: Proposal): ProposalSDKType {
    const obj: any = {};
    obj.id = message.id;
    obj.address = message.address;
    obj.metadata = message.metadata;
    if (message.proposers) {
      obj.proposers = message.proposers.map(e => e);
    } else {
      obj.proposers = [];
    }
    message.submitTime !== undefined && (obj.submit_time = message.submitTime ?? undefined);
    obj.group_version = message.groupVersion;
    obj.group_policy_version = message.groupPolicyVersion;
    message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
    message.result !== undefined && (obj.result = proposalResultToJSON(message.result));
    message.finalTallyResult !== undefined && (obj.final_tally_result = message.finalTallyResult ? TallyResult.toSDK(message.finalTallyResult) : undefined);
    message.votingPeriodEnd !== undefined && (obj.voting_period_end = message.votingPeriodEnd ?? undefined);
    message.executorResult !== undefined && (obj.executor_result = proposalExecutorResultToJSON(message.executorResult));
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.messages = [];
    }
    return obj;
  },
  fromAmino(object: ProposalAmino): Proposal {
    const message = createBaseProposal();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    message.proposers = object.proposers?.map(e => e) || [];
    if (object.submit_time !== undefined && object.submit_time !== null) {
      message.submitTime = fromTimestamp(Timestamp.fromAmino(object.submit_time));
    }
    if (object.group_version !== undefined && object.group_version !== null) {
      message.groupVersion = BigInt(object.group_version);
    }
    if (object.group_policy_version !== undefined && object.group_policy_version !== null) {
      message.groupPolicyVersion = BigInt(object.group_policy_version);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    if (object.final_tally_result !== undefined && object.final_tally_result !== null) {
      message.finalTallyResult = TallyResult.fromAmino(object.final_tally_result);
    }
    if (object.voting_period_end !== undefined && object.voting_period_end !== null) {
      message.votingPeriodEnd = fromTimestamp(Timestamp.fromAmino(object.voting_period_end));
    }
    if (object.executor_result !== undefined && object.executor_result !== null) {
      message.executorResult = object.executor_result;
    }
    message.messages = object.messages?.map(e => Any.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Proposal): ProposalAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id.toString() : undefined;
    obj.address = message.address === "" ? undefined : message.address;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    if (message.proposers) {
      obj.proposers = message.proposers.map(e => e);
    } else {
      obj.proposers = message.proposers;
    }
    obj.submit_time = message.submitTime ? Timestamp.toAmino(toTimestamp(message.submitTime)) : undefined;
    obj.group_version = message.groupVersion !== BigInt(0) ? message.groupVersion.toString() : undefined;
    obj.group_policy_version = message.groupPolicyVersion !== BigInt(0) ? message.groupPolicyVersion.toString() : undefined;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.result = message.result === 0 ? undefined : message.result;
    obj.final_tally_result = message.finalTallyResult ? TallyResult.toAmino(message.finalTallyResult) : undefined;
    obj.voting_period_end = message.votingPeriodEnd ? Timestamp.toAmino(toTimestamp(message.votingPeriodEnd)) : undefined;
    obj.executor_result = message.executorResult === 0 ? undefined : message.executorResult;
    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.messages = message.messages;
    }
    return obj;
  },
  fromAminoMsg(object: ProposalAminoMsg): Proposal {
    return Proposal.fromAmino(object.value);
  },
  toAminoMsg(message: Proposal): ProposalAminoMsg {
    return {
      type: "cosmos-sdk/Proposal",
      value: Proposal.toAmino(message)
    };
  },
  fromProtoMsg(message: ProposalProtoMsg): Proposal {
    return Proposal.decode(message.value);
  },
  toProto(message: Proposal): Uint8Array {
    return Proposal.encode(message).finish();
  },
  toProtoMsg(message: Proposal): ProposalProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.Proposal",
      value: Proposal.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Proposal.typeUrl, Proposal);
GlobalDecoderRegistry.registerAminoProtoMapping(Proposal.aminoType, Proposal.typeUrl);
function createBaseTallyResult(): TallyResult {
  return {
    yesCount: "",
    abstainCount: "",
    noCount: "",
    noWithVetoCount: ""
  };
}
export const TallyResult = {
  typeUrl: "/cosmos.group.v1.TallyResult",
  aminoType: "cosmos-sdk/TallyResult",
  is(o: any): o is TallyResult {
    return o && (o.$typeUrl === TallyResult.typeUrl || typeof o.yesCount === "string" && typeof o.abstainCount === "string" && typeof o.noCount === "string" && typeof o.noWithVetoCount === "string");
  },
  isSDK(o: any): o is TallyResultSDKType {
    return o && (o.$typeUrl === TallyResult.typeUrl || typeof o.yes_count === "string" && typeof o.abstain_count === "string" && typeof o.no_count === "string" && typeof o.no_with_veto_count === "string");
  },
  isAmino(o: any): o is TallyResultAmino {
    return o && (o.$typeUrl === TallyResult.typeUrl || typeof o.yes_count === "string" && typeof o.abstain_count === "string" && typeof o.no_count === "string" && typeof o.no_with_veto_count === "string");
  },
  encode(message: TallyResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.yesCount !== undefined) {
      writer.uint32(10).string(message.yesCount);
    }
    if (message.abstainCount !== undefined) {
      writer.uint32(18).string(message.abstainCount);
    }
    if (message.noCount !== undefined) {
      writer.uint32(26).string(message.noCount);
    }
    if (message.noWithVetoCount !== undefined) {
      writer.uint32(34).string(message.noWithVetoCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TallyResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTallyResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yesCount = reader.string();
          break;
        case 2:
          message.abstainCount = reader.string();
          break;
        case 3:
          message.noCount = reader.string();
          break;
        case 4:
          message.noWithVetoCount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TallyResult {
    const obj = createBaseTallyResult();
    if (isSet(object.yesCount)) obj.yesCount = String(object.yesCount);
    if (isSet(object.abstainCount)) obj.abstainCount = String(object.abstainCount);
    if (isSet(object.noCount)) obj.noCount = String(object.noCount);
    if (isSet(object.noWithVetoCount)) obj.noWithVetoCount = String(object.noWithVetoCount);
    return obj;
  },
  toJSON(message: TallyResult): JsonSafe<TallyResult> {
    const obj: any = {};
    message.yesCount !== undefined && (obj.yesCount = message.yesCount);
    message.abstainCount !== undefined && (obj.abstainCount = message.abstainCount);
    message.noCount !== undefined && (obj.noCount = message.noCount);
    message.noWithVetoCount !== undefined && (obj.noWithVetoCount = message.noWithVetoCount);
    return obj;
  },
  fromPartial(object: DeepPartial<TallyResult>): TallyResult {
    const message = createBaseTallyResult();
    message.yesCount = object.yesCount ?? "";
    message.abstainCount = object.abstainCount ?? "";
    message.noCount = object.noCount ?? "";
    message.noWithVetoCount = object.noWithVetoCount ?? "";
    return message;
  },
  fromSDK(object: TallyResultSDKType): TallyResult {
    return {
      yesCount: object?.yes_count,
      abstainCount: object?.abstain_count,
      noCount: object?.no_count,
      noWithVetoCount: object?.no_with_veto_count
    };
  },
  toSDK(message: TallyResult): TallyResultSDKType {
    const obj: any = {};
    obj.yes_count = message.yesCount;
    obj.abstain_count = message.abstainCount;
    obj.no_count = message.noCount;
    obj.no_with_veto_count = message.noWithVetoCount;
    return obj;
  },
  fromAmino(object: TallyResultAmino): TallyResult {
    const message = createBaseTallyResult();
    if (object.yes_count !== undefined && object.yes_count !== null) {
      message.yesCount = object.yes_count;
    }
    if (object.abstain_count !== undefined && object.abstain_count !== null) {
      message.abstainCount = object.abstain_count;
    }
    if (object.no_count !== undefined && object.no_count !== null) {
      message.noCount = object.no_count;
    }
    if (object.no_with_veto_count !== undefined && object.no_with_veto_count !== null) {
      message.noWithVetoCount = object.no_with_veto_count;
    }
    return message;
  },
  toAmino(message: TallyResult): TallyResultAmino {
    const obj: any = {};
    obj.yes_count = message.yesCount === "" ? undefined : message.yesCount;
    obj.abstain_count = message.abstainCount === "" ? undefined : message.abstainCount;
    obj.no_count = message.noCount === "" ? undefined : message.noCount;
    obj.no_with_veto_count = message.noWithVetoCount === "" ? undefined : message.noWithVetoCount;
    return obj;
  },
  fromAminoMsg(object: TallyResultAminoMsg): TallyResult {
    return TallyResult.fromAmino(object.value);
  },
  toAminoMsg(message: TallyResult): TallyResultAminoMsg {
    return {
      type: "cosmos-sdk/TallyResult",
      value: TallyResult.toAmino(message)
    };
  },
  fromProtoMsg(message: TallyResultProtoMsg): TallyResult {
    return TallyResult.decode(message.value);
  },
  toProto(message: TallyResult): Uint8Array {
    return TallyResult.encode(message).finish();
  },
  toProtoMsg(message: TallyResult): TallyResultProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.TallyResult",
      value: TallyResult.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TallyResult.typeUrl, TallyResult);
GlobalDecoderRegistry.registerAminoProtoMapping(TallyResult.aminoType, TallyResult.typeUrl);
function createBaseVote(): Vote {
  return {
    proposalId: BigInt(0),
    voter: "",
    option: 0,
    metadata: "",
    submitTime: new Date()
  };
}
export const Vote = {
  typeUrl: "/cosmos.group.v1.Vote",
  aminoType: "cosmos-sdk/Vote",
  is(o: any): o is Vote {
    return o && (o.$typeUrl === Vote.typeUrl || typeof o.proposalId === "bigint" && typeof o.voter === "string" && isSet(o.option) && typeof o.metadata === "string" && Timestamp.is(o.submitTime));
  },
  isSDK(o: any): o is VoteSDKType {
    return o && (o.$typeUrl === Vote.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && isSet(o.option) && typeof o.metadata === "string" && Timestamp.isSDK(o.submit_time));
  },
  isAmino(o: any): o is VoteAmino {
    return o && (o.$typeUrl === Vote.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string" && isSet(o.option) && typeof o.metadata === "string" && Timestamp.isAmino(o.submit_time));
  },
  encode(message: Vote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== undefined) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== undefined) {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    if (message.metadata !== undefined) {
      writer.uint32(34).string(message.metadata);
    }
    if (message.submitTime !== undefined) {
      Timestamp.encode(toTimestamp(message.submitTime), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Vote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = (reader.int32() as any);
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.submitTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Vote {
    const obj = createBaseVote();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.voter)) obj.voter = String(object.voter);
    if (isSet(object.option)) obj.option = voteOptionFromJSON(object.option);
    if (isSet(object.metadata)) obj.metadata = String(object.metadata);
    if (isSet(object.submitTime)) obj.submitTime = new Date(object.submitTime);
    return obj;
  },
  toJSON(message: Vote): JsonSafe<Vote> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.submitTime !== undefined && (obj.submitTime = message.submitTime.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<Vote>): Vote {
    const message = createBaseVote();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    message.metadata = object.metadata ?? "";
    message.submitTime = object.submitTime ?? undefined;
    return message;
  },
  fromSDK(object: VoteSDKType): Vote {
    return {
      proposalId: object?.proposal_id,
      voter: object?.voter,
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1,
      metadata: object?.metadata,
      submitTime: object.submit_time ?? undefined
    };
  },
  toSDK(message: Vote): VoteSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    obj.voter = message.voter;
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    obj.metadata = message.metadata;
    message.submitTime !== undefined && (obj.submit_time = message.submitTime ?? undefined);
    return obj;
  },
  fromAmino(object: VoteAmino): Vote {
    const message = createBaseVote();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.option !== undefined && object.option !== null) {
      message.option = object.option;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.submit_time !== undefined && object.submit_time !== null) {
      message.submitTime = fromTimestamp(Timestamp.fromAmino(object.submit_time));
    }
    return message;
  },
  toAmino(message: Vote): VoteAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId.toString() : undefined;
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.option = message.option === 0 ? undefined : message.option;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    obj.submit_time = message.submitTime ? Timestamp.toAmino(toTimestamp(message.submitTime)) : undefined;
    return obj;
  },
  fromAminoMsg(object: VoteAminoMsg): Vote {
    return Vote.fromAmino(object.value);
  },
  toAminoMsg(message: Vote): VoteAminoMsg {
    return {
      type: "cosmos-sdk/Vote",
      value: Vote.toAmino(message)
    };
  },
  fromProtoMsg(message: VoteProtoMsg): Vote {
    return Vote.decode(message.value);
  },
  toProto(message: Vote): Uint8Array {
    return Vote.encode(message).finish();
  },
  toProtoMsg(message: Vote): VoteProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.Vote",
      value: Vote.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Vote.typeUrl, Vote);
GlobalDecoderRegistry.registerAminoProtoMapping(Vote.aminoType, Vote.typeUrl);