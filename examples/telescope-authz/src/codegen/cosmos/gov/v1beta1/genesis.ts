import { Deposit, DepositAmino, DepositSDKType, Vote, VoteAmino, VoteSDKType, Proposal, ProposalAmino, ProposalSDKType, DepositParams, DepositParamsAmino, DepositParamsSDKType, VotingParams, VotingParamsAmino, VotingParamsSDKType, TallyParams, TallyParamsAmino, TallyParamsSDKType } from "./gov";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.gov.v1beta1";
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
  depositParams: DepositParams;
  /** params defines all the paramaters of related to voting. */
  votingParams: VotingParams;
  /** params defines all the paramaters of related to tally. */
  tallyParams: TallyParams;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.GenesisState";
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
  deposit_params?: DepositParamsAmino;
  /** params defines all the paramaters of related to voting. */
  voting_params?: VotingParamsAmino;
  /** params defines all the paramaters of related to tally. */
  tally_params?: TallyParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the gov module's genesis state. */
export interface GenesisStateSDKType {
  starting_proposal_id: bigint;
  deposits: DepositSDKType[];
  votes: VoteSDKType[];
  proposals: ProposalSDKType[];
  deposit_params: DepositParamsSDKType;
  voting_params: VotingParamsSDKType;
  tally_params: TallyParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    startingProposalId: BigInt(0),
    deposits: [],
    votes: [],
    proposals: [],
    depositParams: DepositParams.fromPartial({}),
    votingParams: VotingParams.fromPartial({}),
    tallyParams: TallyParams.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.gov.v1beta1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || typeof o.startingProposalId === "bigint" && Array.isArray(o.deposits) && (!o.deposits.length || Deposit.is(o.deposits[0])) && Array.isArray(o.votes) && (!o.votes.length || Vote.is(o.votes[0])) && Array.isArray(o.proposals) && (!o.proposals.length || Proposal.is(o.proposals[0])) && DepositParams.is(o.depositParams) && VotingParams.is(o.votingParams) && TallyParams.is(o.tallyParams));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || typeof o.starting_proposal_id === "bigint" && Array.isArray(o.deposits) && (!o.deposits.length || Deposit.isSDK(o.deposits[0])) && Array.isArray(o.votes) && (!o.votes.length || Vote.isSDK(o.votes[0])) && Array.isArray(o.proposals) && (!o.proposals.length || Proposal.isSDK(o.proposals[0])) && DepositParams.isSDK(o.deposit_params) && VotingParams.isSDK(o.voting_params) && TallyParams.isSDK(o.tally_params));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || typeof o.starting_proposal_id === "bigint" && Array.isArray(o.deposits) && (!o.deposits.length || Deposit.isAmino(o.deposits[0])) && Array.isArray(o.votes) && (!o.votes.length || Vote.isAmino(o.votes[0])) && Array.isArray(o.proposals) && (!o.proposals.length || Proposal.isAmino(o.proposals[0])) && DepositParams.isAmino(o.deposit_params) && VotingParams.isAmino(o.voting_params) && TallyParams.isAmino(o.tally_params));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.startingProposalId !== undefined) {
      writer.uint32(8).uint64(message.startingProposalId);
    }
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.depositParams !== undefined) {
      DepositParams.encode(message.depositParams, writer.uint32(42).fork()).ldelim();
    }
    if (message.votingParams !== undefined) {
      VotingParams.encode(message.votingParams, writer.uint32(50).fork()).ldelim();
    }
    if (message.tallyParams !== undefined) {
      TallyParams.encode(message.tallyParams, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startingProposalId = reader.uint64();
          break;
        case 2:
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
          break;
        case 3:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 4:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 5:
          message.depositParams = DepositParams.decode(reader, reader.uint32());
          break;
        case 6:
          message.votingParams = VotingParams.decode(reader, reader.uint32());
          break;
        case 7:
          message.tallyParams = TallyParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.startingProposalId)) obj.startingProposalId = BigInt(object.startingProposalId.toString());
    if (Array.isArray(object?.deposits)) obj.deposits = object.deposits.map((e: any) => Deposit.fromJSON(e));
    if (Array.isArray(object?.votes)) obj.votes = object.votes.map((e: any) => Vote.fromJSON(e));
    if (Array.isArray(object?.proposals)) obj.proposals = object.proposals.map((e: any) => Proposal.fromJSON(e));
    if (isSet(object.depositParams)) obj.depositParams = DepositParams.fromJSON(object.depositParams);
    if (isSet(object.votingParams)) obj.votingParams = VotingParams.fromJSON(object.votingParams);
    if (isSet(object.tallyParams)) obj.tallyParams = TallyParams.fromJSON(object.tallyParams);
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.startingProposalId !== undefined && (obj.startingProposalId = (message.startingProposalId || BigInt(0)).toString());
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toJSON(e) : undefined);
    } else {
      obj.deposits = [];
    }
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.votes = [];
    }
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toJSON(e) : undefined);
    } else {
      obj.proposals = [];
    }
    message.depositParams !== undefined && (obj.depositParams = message.depositParams ? DepositParams.toJSON(message.depositParams) : undefined);
    message.votingParams !== undefined && (obj.votingParams = message.votingParams ? VotingParams.toJSON(message.votingParams) : undefined);
    message.tallyParams !== undefined && (obj.tallyParams = message.tallyParams ? TallyParams.toJSON(message.tallyParams) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    if (object.startingProposalId !== undefined && object.startingProposalId !== null) {
      message.startingProposalId = BigInt(object.startingProposalId.toString());
    }
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    if (object.depositParams !== undefined && object.depositParams !== null) {
      message.depositParams = DepositParams.fromPartial(object.depositParams);
    }
    if (object.votingParams !== undefined && object.votingParams !== null) {
      message.votingParams = VotingParams.fromPartial(object.votingParams);
    }
    if (object.tallyParams !== undefined && object.tallyParams !== null) {
      message.tallyParams = TallyParams.fromPartial(object.tallyParams);
    }
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      startingProposalId: object?.starting_proposal_id,
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromSDK(e)) : [],
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromSDK(e)) : [],
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromSDK(e)) : [],
      depositParams: object.deposit_params ? DepositParams.fromSDK(object.deposit_params) : undefined,
      votingParams: object.voting_params ? VotingParams.fromSDK(object.voting_params) : undefined,
      tallyParams: object.tally_params ? TallyParams.fromSDK(object.tally_params) : undefined
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    obj.starting_proposal_id = message.startingProposalId;
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toSDK(e) : undefined);
    } else {
      obj.deposits = [];
    }
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toSDK(e) : undefined);
    } else {
      obj.votes = [];
    }
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toSDK(e) : undefined);
    } else {
      obj.proposals = [];
    }
    message.depositParams !== undefined && (obj.deposit_params = message.depositParams ? DepositParams.toSDK(message.depositParams) : undefined);
    message.votingParams !== undefined && (obj.voting_params = message.votingParams ? VotingParams.toSDK(message.votingParams) : undefined);
    message.tallyParams !== undefined && (obj.tally_params = message.tallyParams ? TallyParams.toSDK(message.tallyParams) : undefined);
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.starting_proposal_id !== undefined && object.starting_proposal_id !== null) {
      message.startingProposalId = BigInt(object.starting_proposal_id);
    }
    message.deposits = object.deposits?.map(e => Deposit.fromAmino(e)) || [];
    message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
    message.proposals = object.proposals?.map(e => Proposal.fromAmino(e)) || [];
    if (object.deposit_params !== undefined && object.deposit_params !== null) {
      message.depositParams = DepositParams.fromAmino(object.deposit_params);
    }
    if (object.voting_params !== undefined && object.voting_params !== null) {
      message.votingParams = VotingParams.fromAmino(object.voting_params);
    }
    if (object.tally_params !== undefined && object.tally_params !== null) {
      message.tallyParams = TallyParams.fromAmino(object.tally_params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.starting_proposal_id = message.startingProposalId ? message.startingProposalId.toString() : undefined;
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
    } else {
      obj.deposits = [];
    }
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.votes = [];
    }
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
    } else {
      obj.proposals = [];
    }
    obj.deposit_params = message.depositParams ? DepositParams.toAmino(message.depositParams) : undefined;
    obj.voting_params = message.votingParams ? VotingParams.toAmino(message.votingParams) : undefined;
    obj.tally_params = message.tallyParams ? TallyParams.toAmino(message.tallyParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);