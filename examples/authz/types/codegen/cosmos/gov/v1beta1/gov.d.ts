import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { DeepPartial } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** VoteOption enumerates the valid vote options for a given governance proposal. */
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
/** ProposalStatus enumerates the valid statuses of a proposal. */
export declare enum ProposalStatus {
    /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status. */
    PROPOSAL_STATUS_UNSPECIFIED = 0,
    /**
     * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
     * period.
     */
    PROPOSAL_STATUS_DEPOSIT_PERIOD = 1,
    /**
     * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
     * period.
     */
    PROPOSAL_STATUS_VOTING_PERIOD = 2,
    /**
     * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
     * passed.
     */
    PROPOSAL_STATUS_PASSED = 3,
    /**
     * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
     * been rejected.
     */
    PROPOSAL_STATUS_REJECTED = 4,
    /**
     * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
     * failed.
     */
    PROPOSAL_STATUS_FAILED = 5,
    UNRECOGNIZED = -1
}
export declare const ProposalStatusSDKType: typeof ProposalStatus;
export declare const ProposalStatusAmino: typeof ProposalStatus;
export declare function proposalStatusFromJSON(object: any): ProposalStatus;
export declare function proposalStatusToJSON(object: ProposalStatus): string;
/**
 * WeightedVoteOption defines a unit of vote for vote split.
 *
 * Since: cosmos-sdk 0.43
 */
export interface WeightedVoteOption {
    option: VoteOption;
    weight: string;
}
export interface WeightedVoteOptionProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.WeightedVoteOption";
    value: Uint8Array;
}
/**
 * WeightedVoteOption defines a unit of vote for vote split.
 *
 * Since: cosmos-sdk 0.43
 */
export interface WeightedVoteOptionAmino {
    option?: VoteOption;
    weight?: string;
}
export interface WeightedVoteOptionAminoMsg {
    type: "cosmos-sdk/WeightedVoteOption";
    value: WeightedVoteOptionAmino;
}
/**
 * WeightedVoteOption defines a unit of vote for vote split.
 *
 * Since: cosmos-sdk 0.43
 */
export interface WeightedVoteOptionSDKType {
    option: VoteOption;
    weight: string;
}
/**
 * TextProposal defines a standard text proposal whose changes need to be
 * manually updated in case of approval.
 */
export interface TextProposal {
    $typeUrl?: "/cosmos.gov.v1beta1.TextProposal";
    title: string;
    description: string;
}
export interface TextProposalProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.TextProposal";
    value: Uint8Array;
}
/**
 * TextProposal defines a standard text proposal whose changes need to be
 * manually updated in case of approval.
 */
export interface TextProposalAmino {
    title?: string;
    description?: string;
}
export interface TextProposalAminoMsg {
    type: "cosmos-sdk/TextProposal";
    value: TextProposalAmino;
}
/**
 * TextProposal defines a standard text proposal whose changes need to be
 * manually updated in case of approval.
 */
export interface TextProposalSDKType {
    $typeUrl?: "/cosmos.gov.v1beta1.TextProposal";
    title: string;
    description: string;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface Deposit {
    proposalId: bigint;
    depositor: string;
    amount: Coin[];
}
export interface DepositProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.Deposit";
    value: Uint8Array;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface DepositAmino {
    proposal_id?: string;
    depositor?: string;
    amount?: CoinAmino[];
}
export interface DepositAminoMsg {
    type: "cosmos-sdk/Deposit";
    value: DepositAmino;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface DepositSDKType {
    proposal_id: bigint;
    depositor: string;
    amount: CoinSDKType[];
}
/** Proposal defines the core field members of a governance proposal. */
export interface Proposal {
    proposalId: bigint;
    content?: TextProposal | Any | undefined;
    status: ProposalStatus;
    /**
     * final_tally_result is the final tally result of the proposal. When
     * querying a proposal via gRPC, this field is not populated until the
     * proposal's voting period has ended.
     */
    finalTallyResult: TallyResult | undefined;
    submitTime: Date | undefined;
    depositEndTime: Date | undefined;
    totalDeposit: Coin[];
    votingStartTime: Date | undefined;
    votingEndTime: Date | undefined;
}
export interface ProposalProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.Proposal";
    value: Uint8Array;
}
export type ProposalEncoded = Omit<Proposal, "content"> & {
    content?: TextProposalProtoMsg | AnyProtoMsg | undefined;
};
/** Proposal defines the core field members of a governance proposal. */
export interface ProposalAmino {
    proposal_id?: string;
    content?: AnyAmino | undefined;
    status?: ProposalStatus;
    /**
     * final_tally_result is the final tally result of the proposal. When
     * querying a proposal via gRPC, this field is not populated until the
     * proposal's voting period has ended.
     */
    final_tally_result?: TallyResultAmino | undefined;
    submit_time?: string | undefined;
    deposit_end_time?: string | undefined;
    total_deposit?: CoinAmino[];
    voting_start_time?: string | undefined;
    voting_end_time?: string | undefined;
}
export interface ProposalAminoMsg {
    type: "cosmos-sdk/Proposal";
    value: ProposalAmino;
}
/** Proposal defines the core field members of a governance proposal. */
export interface ProposalSDKType {
    proposal_id: bigint;
    content?: TextProposalSDKType | AnySDKType | undefined;
    status: ProposalStatus;
    final_tally_result: TallyResultSDKType | undefined;
    submit_time: Date | undefined;
    deposit_end_time: Date | undefined;
    total_deposit: CoinSDKType[];
    voting_start_time: Date | undefined;
    voting_end_time: Date | undefined;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResult {
    yes: string;
    abstain: string;
    no: string;
    noWithVeto: string;
}
export interface TallyResultProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.TallyResult";
    value: Uint8Array;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResultAmino {
    yes?: string;
    abstain?: string;
    no?: string;
    no_with_veto?: string;
}
export interface TallyResultAminoMsg {
    type: "cosmos-sdk/TallyResult";
    value: TallyResultAmino;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResultSDKType {
    yes: string;
    abstain: string;
    no: string;
    no_with_veto: string;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface Vote {
    proposalId: bigint;
    voter: string;
    /**
     * Deprecated: Prefer to use `options` instead. This field is set in queries
     * if and only if `len(options) == 1` and that option has weight 1. In all
     * other cases, this field will default to VOTE_OPTION_UNSPECIFIED.
     */
    /** @deprecated */
    option: VoteOption;
    /** Since: cosmos-sdk 0.43 */
    options: WeightedVoteOption[];
}
export interface VoteProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.Vote";
    value: Uint8Array;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface VoteAmino {
    proposal_id?: string;
    voter?: string;
    /**
     * Deprecated: Prefer to use `options` instead. This field is set in queries
     * if and only if `len(options) == 1` and that option has weight 1. In all
     * other cases, this field will default to VOTE_OPTION_UNSPECIFIED.
     */
    /** @deprecated */
    option?: VoteOption;
    /** Since: cosmos-sdk 0.43 */
    options?: WeightedVoteOptionAmino[];
}
export interface VoteAminoMsg {
    type: "cosmos-sdk/Vote";
    value: VoteAmino;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface VoteSDKType {
    proposal_id: bigint;
    voter: string;
    /** @deprecated */
    option: VoteOption;
    options: WeightedVoteOptionSDKType[];
}
/** DepositParams defines the params for deposits on governance proposals. */
export interface DepositParams {
    /** Minimum deposit for a proposal to enter voting period. */
    minDeposit: Coin[];
    /**
     * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
     *  months.
     */
    maxDepositPeriod: Duration | undefined;
}
export interface DepositParamsProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.DepositParams";
    value: Uint8Array;
}
/** DepositParams defines the params for deposits on governance proposals. */
export interface DepositParamsAmino {
    /** Minimum deposit for a proposal to enter voting period. */
    min_deposit?: CoinAmino[];
    /**
     * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
     *  months.
     */
    max_deposit_period?: DurationAmino | undefined;
}
export interface DepositParamsAminoMsg {
    type: "cosmos-sdk/DepositParams";
    value: DepositParamsAmino;
}
/** DepositParams defines the params for deposits on governance proposals. */
export interface DepositParamsSDKType {
    min_deposit: CoinSDKType[];
    max_deposit_period: DurationSDKType | undefined;
}
/** VotingParams defines the params for voting on governance proposals. */
export interface VotingParams {
    /** Length of the voting period. */
    votingPeriod: Duration | undefined;
}
export interface VotingParamsProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.VotingParams";
    value: Uint8Array;
}
/** VotingParams defines the params for voting on governance proposals. */
export interface VotingParamsAmino {
    /** Length of the voting period. */
    voting_period?: DurationAmino | undefined;
}
export interface VotingParamsAminoMsg {
    type: "cosmos-sdk/VotingParams";
    value: VotingParamsAmino;
}
/** VotingParams defines the params for voting on governance proposals. */
export interface VotingParamsSDKType {
    voting_period: DurationSDKType | undefined;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
export interface TallyParams {
    /**
     * Minimum percentage of total stake needed to vote for a result to be
     *  considered valid.
     */
    quorum: Uint8Array;
    /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
    threshold: Uint8Array;
    /**
     * Minimum value of Veto votes to Total votes ratio for proposal to be
     *  vetoed. Default value: 1/3.
     */
    vetoThreshold: Uint8Array;
}
export interface TallyParamsProtoMsg {
    typeUrl: "/cosmos.gov.v1beta1.TallyParams";
    value: Uint8Array;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
export interface TallyParamsAmino {
    /**
     * Minimum percentage of total stake needed to vote for a result to be
     *  considered valid.
     */
    quorum?: string;
    /** Minimum proportion of Yes votes for proposal to pass. Default value: 0.5. */
    threshold?: string;
    /**
     * Minimum value of Veto votes to Total votes ratio for proposal to be
     *  vetoed. Default value: 1/3.
     */
    veto_threshold?: string;
}
export interface TallyParamsAminoMsg {
    type: "cosmos-sdk/TallyParams";
    value: TallyParamsAmino;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
export interface TallyParamsSDKType {
    quorum: Uint8Array;
    threshold: Uint8Array;
    veto_threshold: Uint8Array;
}
export declare const WeightedVoteOption: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is WeightedVoteOption;
    isSDK(o: any): o is WeightedVoteOptionSDKType;
    isAmino(o: any): o is WeightedVoteOptionAmino;
    encode(message: WeightedVoteOption, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): WeightedVoteOption;
    fromJSON(object: any): WeightedVoteOption;
    toJSON(message: WeightedVoteOption): unknown;
    fromPartial(object: DeepPartial<WeightedVoteOption>): WeightedVoteOption;
    fromSDK(object: WeightedVoteOptionSDKType): WeightedVoteOption;
    toSDK(message: WeightedVoteOption): WeightedVoteOptionSDKType;
    fromAmino(object: WeightedVoteOptionAmino): WeightedVoteOption;
    toAmino(message: WeightedVoteOption): WeightedVoteOptionAmino;
    fromAminoMsg(object: WeightedVoteOptionAminoMsg): WeightedVoteOption;
    toAminoMsg(message: WeightedVoteOption): WeightedVoteOptionAminoMsg;
    fromProtoMsg(message: WeightedVoteOptionProtoMsg): WeightedVoteOption;
    toProto(message: WeightedVoteOption): Uint8Array;
    toProtoMsg(message: WeightedVoteOption): WeightedVoteOptionProtoMsg;
};
export declare const TextProposal: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is TextProposal;
    isSDK(o: any): o is TextProposalSDKType;
    isAmino(o: any): o is TextProposalAmino;
    encode(message: TextProposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TextProposal;
    fromJSON(object: any): TextProposal;
    toJSON(message: TextProposal): unknown;
    fromPartial(object: DeepPartial<TextProposal>): TextProposal;
    fromSDK(object: TextProposalSDKType): TextProposal;
    toSDK(message: TextProposal): TextProposalSDKType;
    fromAmino(object: TextProposalAmino): TextProposal;
    toAmino(message: TextProposal): TextProposalAmino;
    fromAminoMsg(object: TextProposalAminoMsg): TextProposal;
    toAminoMsg(message: TextProposal): TextProposalAminoMsg;
    fromProtoMsg(message: TextProposalProtoMsg): TextProposal;
    toProto(message: TextProposal): Uint8Array;
    toProtoMsg(message: TextProposal): TextProposalProtoMsg;
};
export declare const Deposit: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is Deposit;
    isSDK(o: any): o is DepositSDKType;
    isAmino(o: any): o is DepositAmino;
    encode(message: Deposit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Deposit;
    fromJSON(object: any): Deposit;
    toJSON(message: Deposit): unknown;
    fromPartial(object: DeepPartial<Deposit>): Deposit;
    fromSDK(object: DepositSDKType): Deposit;
    toSDK(message: Deposit): DepositSDKType;
    fromAmino(object: DepositAmino): Deposit;
    toAmino(message: Deposit): DepositAmino;
    fromAminoMsg(object: DepositAminoMsg): Deposit;
    toAminoMsg(message: Deposit): DepositAminoMsg;
    fromProtoMsg(message: DepositProtoMsg): Deposit;
    toProto(message: Deposit): Uint8Array;
    toProtoMsg(message: Deposit): DepositProtoMsg;
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
export declare const DepositParams: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is DepositParams;
    isSDK(o: any): o is DepositParamsSDKType;
    isAmino(o: any): o is DepositParamsAmino;
    encode(message: DepositParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): DepositParams;
    fromJSON(object: any): DepositParams;
    toJSON(message: DepositParams): unknown;
    fromPartial(object: DeepPartial<DepositParams>): DepositParams;
    fromSDK(object: DepositParamsSDKType): DepositParams;
    toSDK(message: DepositParams): DepositParamsSDKType;
    fromAmino(object: DepositParamsAmino): DepositParams;
    toAmino(message: DepositParams): DepositParamsAmino;
    fromAminoMsg(object: DepositParamsAminoMsg): DepositParams;
    toAminoMsg(message: DepositParams): DepositParamsAminoMsg;
    fromProtoMsg(message: DepositParamsProtoMsg): DepositParams;
    toProto(message: DepositParams): Uint8Array;
    toProtoMsg(message: DepositParams): DepositParamsProtoMsg;
};
export declare const VotingParams: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is VotingParams;
    isSDK(o: any): o is VotingParamsSDKType;
    isAmino(o: any): o is VotingParamsAmino;
    encode(message: VotingParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): VotingParams;
    fromJSON(object: any): VotingParams;
    toJSON(message: VotingParams): unknown;
    fromPartial(object: DeepPartial<VotingParams>): VotingParams;
    fromSDK(object: VotingParamsSDKType): VotingParams;
    toSDK(message: VotingParams): VotingParamsSDKType;
    fromAmino(object: VotingParamsAmino): VotingParams;
    toAmino(message: VotingParams): VotingParamsAmino;
    fromAminoMsg(object: VotingParamsAminoMsg): VotingParams;
    toAminoMsg(message: VotingParams): VotingParamsAminoMsg;
    fromProtoMsg(message: VotingParamsProtoMsg): VotingParams;
    toProto(message: VotingParams): Uint8Array;
    toProtoMsg(message: VotingParams): VotingParamsProtoMsg;
};
export declare const TallyParams: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is TallyParams;
    isSDK(o: any): o is TallyParamsSDKType;
    isAmino(o: any): o is TallyParamsAmino;
    encode(message: TallyParams, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TallyParams;
    fromJSON(object: any): TallyParams;
    toJSON(message: TallyParams): unknown;
    fromPartial(object: DeepPartial<TallyParams>): TallyParams;
    fromSDK(object: TallyParamsSDKType): TallyParams;
    toSDK(message: TallyParams): TallyParamsSDKType;
    fromAmino(object: TallyParamsAmino): TallyParams;
    toAmino(message: TallyParams): TallyParamsAmino;
    fromAminoMsg(object: TallyParamsAminoMsg): TallyParams;
    toAminoMsg(message: TallyParams): TallyParamsAminoMsg;
    fromProtoMsg(message: TallyParamsProtoMsg): TallyParams;
    toProto(message: TallyParams): Uint8Array;
    toProtoMsg(message: TallyParams): TallyParamsProtoMsg;
};
