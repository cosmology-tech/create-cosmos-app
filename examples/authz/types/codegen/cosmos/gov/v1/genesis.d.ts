import { Deposit, DepositAmino, DepositSDKType, Vote, VoteAmino, VoteSDKType, Proposal, ProposalAmino, ProposalSDKType, DepositParams, DepositParamsAmino, DepositParamsSDKType, VotingParams, VotingParamsAmino, VotingParamsSDKType, TallyParams, TallyParamsAmino, TallyParamsSDKType } from "./gov";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the gov module's genesis state. */
export interface GenesisState {
    /** starting_proposal_id is the ID of the starting proposal. */
    startingProposalId: bigint;
    /** deposits defines all the deposits present at genesis. */
    deposits: Deposit[];
    /** votes defines all the votes present at genesis. */
    votes: Vote[];
    /** proposals defines all the proposals present at genesis. */
    proposals: Proposal[];
    /** params defines all the paramaters of related to deposit. */
    depositParams?: DepositParams | undefined;
    /** params defines all the paramaters of related to voting. */
    votingParams?: VotingParams | undefined;
    /** params defines all the paramaters of related to tally. */
    tallyParams?: TallyParams | undefined;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/cosmos.gov.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the gov module's genesis state. */
export interface GenesisStateAmino {
    /** starting_proposal_id is the ID of the starting proposal. */
    starting_proposal_id?: string;
    /** deposits defines all the deposits present at genesis. */
    deposits?: DepositAmino[];
    /** votes defines all the votes present at genesis. */
    votes?: VoteAmino[];
    /** proposals defines all the proposals present at genesis. */
    proposals?: ProposalAmino[];
    /** params defines all the paramaters of related to deposit. */
    deposit_params?: DepositParamsAmino | undefined;
    /** params defines all the paramaters of related to voting. */
    voting_params?: VotingParamsAmino | undefined;
    /** params defines all the paramaters of related to tally. */
    tally_params?: TallyParamsAmino | undefined;
}
export interface GenesisStateAminoMsg {
    type: "cosmos-sdk/v1/GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the gov module's genesis state. */
export interface GenesisStateSDKType {
    starting_proposal_id: bigint;
    deposits: DepositSDKType[];
    votes: VoteSDKType[];
    proposals: ProposalSDKType[];
    deposit_params?: DepositParamsSDKType | undefined;
    voting_params?: VotingParamsSDKType | undefined;
    tally_params?: TallyParamsSDKType | undefined;
}
export declare const GenesisState: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is GenesisState;
    isSDK(o: any): o is GenesisStateSDKType;
    isAmino(o: any): o is GenesisStateAmino;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
    fromSDK(object: GenesisStateSDKType): GenesisState;
    toSDK(message: GenesisState): GenesisStateSDKType;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
