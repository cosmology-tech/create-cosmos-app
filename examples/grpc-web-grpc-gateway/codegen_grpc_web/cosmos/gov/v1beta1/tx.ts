import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { VoteOption, WeightedVoteOption, WeightedVoteOptionAmino, WeightedVoteOptionSDKType, TextProposal, TextProposalProtoMsg, TextProposalSDKType, voteOptionFromJSON, voteOptionToJSON } from "./gov";
import { RegisterIncentiveProposal, RegisterIncentiveProposalProtoMsg, RegisterIncentiveProposalSDKType } from "../../../evmos/incentives/v1/incentives";
import { ClientUpdateProposal, ClientUpdateProposalProtoMsg, ClientUpdateProposalSDKType, UpgradeProposal, UpgradeProposalProtoMsg, UpgradeProposalSDKType } from "../../../ibc/core/client/v1/client";
import { ReplacePoolIncentivesProposal, ReplacePoolIncentivesProposalProtoMsg, ReplacePoolIncentivesProposalSDKType, UpdatePoolIncentivesProposal, UpdatePoolIncentivesProposalProtoMsg, UpdatePoolIncentivesProposalSDKType } from "../../../osmosis/pool-incentives/v1beta1/gov";
import { SetSuperfluidAssetsProposal, SetSuperfluidAssetsProposalProtoMsg, SetSuperfluidAssetsProposalSDKType, RemoveSuperfluidAssetsProposal, RemoveSuperfluidAssetsProposalProtoMsg, RemoveSuperfluidAssetsProposalSDKType, UpdateUnpoolWhiteListProposal, UpdateUnpoolWhiteListProposalProtoMsg, UpdateUnpoolWhiteListProposalSDKType } from "../../../osmosis/superfluid/v1beta1/gov";
import { UpdateFeeTokenProposal, UpdateFeeTokenProposalProtoMsg, UpdateFeeTokenProposalSDKType } from "../../../osmosis/txfees/v1beta1/gov";
import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.gov.v1beta1";
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposal {
  content?: (TextProposal & RegisterIncentiveProposal & ClientUpdateProposal & UpgradeProposal & ReplacePoolIncentivesProposal & UpdatePoolIncentivesProposal & SetSuperfluidAssetsProposal & RemoveSuperfluidAssetsProposal & UpdateUnpoolWhiteListProposal & UpdateFeeTokenProposal & Any) | undefined;
  initialDeposit: Coin[];
  proposer: string;
}
export interface MsgSubmitProposalProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal";
  value: Uint8Array;
}
export type MsgSubmitProposalEncoded = Omit<MsgSubmitProposal, "content"> & {
  content?: TextProposalProtoMsg | RegisterIncentiveProposalProtoMsg | ClientUpdateProposalProtoMsg | UpgradeProposalProtoMsg | ReplacePoolIncentivesProposalProtoMsg | UpdatePoolIncentivesProposalProtoMsg | SetSuperfluidAssetsProposalProtoMsg | RemoveSuperfluidAssetsProposalProtoMsg | UpdateUnpoolWhiteListProposalProtoMsg | UpdateFeeTokenProposalProtoMsg | AnyProtoMsg | undefined;
};
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposalAmino {
  content?: AnyAmino;
  initial_deposit: CoinAmino[];
  proposer: string;
}
export interface MsgSubmitProposalAminoMsg {
  type: "cosmos-sdk/MsgSubmitProposal";
  value: MsgSubmitProposalAmino;
}
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposalSDKType {
  content?: TextProposalSDKType | RegisterIncentiveProposalSDKType | ClientUpdateProposalSDKType | UpgradeProposalSDKType | ReplacePoolIncentivesProposalSDKType | UpdatePoolIncentivesProposalSDKType | SetSuperfluidAssetsProposalSDKType | RemoveSuperfluidAssetsProposalSDKType | UpdateUnpoolWhiteListProposalSDKType | UpdateFeeTokenProposalSDKType | AnySDKType | undefined;
  initial_deposit: CoinSDKType[];
  proposer: string;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
  proposalId: Long;
}
export interface MsgSubmitProposalResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposalResponse";
  value: Uint8Array;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponseAmino {
  proposal_id: string;
}
export interface MsgSubmitProposalResponseAminoMsg {
  type: "cosmos-sdk/MsgSubmitProposalResponse";
  value: MsgSubmitProposalResponseAmino;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponseSDKType {
  proposal_id: Long;
}
/** MsgVote defines a message to cast a vote. */
export interface MsgVote {
  proposalId: Long;
  voter: string;
  option: VoteOption;
}
export interface MsgVoteProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgVote";
  value: Uint8Array;
}
/** MsgVote defines a message to cast a vote. */
export interface MsgVoteAmino {
  proposal_id: string;
  voter: string;
  option: VoteOption;
}
export interface MsgVoteAminoMsg {
  type: "cosmos-sdk/MsgVote";
  value: MsgVoteAmino;
}
/** MsgVote defines a message to cast a vote. */
export interface MsgVoteSDKType {
  proposal_id: Long;
  voter: string;
  option: VoteOption;
}
/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponse {}
export interface MsgVoteResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteResponse";
  value: Uint8Array;
}
/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponseAmino {}
export interface MsgVoteResponseAminoMsg {
  type: "cosmos-sdk/MsgVoteResponse";
  value: MsgVoteResponseAmino;
}
/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponseSDKType {}
/**
 * MsgVoteWeighted defines a message to cast a vote.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeighted {
  proposalId: Long;
  voter: string;
  options: WeightedVoteOption[];
}
export interface MsgVoteWeightedProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted";
  value: Uint8Array;
}
/**
 * MsgVoteWeighted defines a message to cast a vote.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedAmino {
  proposal_id: string;
  voter: string;
  options: WeightedVoteOptionAmino[];
}
export interface MsgVoteWeightedAminoMsg {
  type: "cosmos-sdk/MsgVoteWeighted";
  value: MsgVoteWeightedAmino;
}
/**
 * MsgVoteWeighted defines a message to cast a vote.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedSDKType {
  proposal_id: Long;
  voter: string;
  options: WeightedVoteOptionSDKType[];
}
/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedResponse {}
export interface MsgVoteWeightedResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeightedResponse";
  value: Uint8Array;
}
/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedResponseAmino {}
export interface MsgVoteWeightedResponseAminoMsg {
  type: "cosmos-sdk/MsgVoteWeightedResponse";
  value: MsgVoteWeightedResponseAmino;
}
/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface MsgVoteWeightedResponseSDKType {}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDeposit {
  proposalId: Long;
  depositor: string;
  amount: Coin[];
}
export interface MsgDepositProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgDeposit";
  value: Uint8Array;
}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDepositAmino {
  proposal_id: string;
  depositor: string;
  amount: CoinAmino[];
}
export interface MsgDepositAminoMsg {
  type: "cosmos-sdk/MsgDeposit";
  value: MsgDepositAmino;
}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDepositSDKType {
  proposal_id: Long;
  depositor: string;
  amount: CoinSDKType[];
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {}
export interface MsgDepositResponseProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.MsgDepositResponse";
  value: Uint8Array;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseAmino {}
export interface MsgDepositResponseAminoMsg {
  type: "cosmos-sdk/MsgDepositResponse";
  value: MsgDepositResponseAmino;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponseSDKType {}
function createBaseMsgSubmitProposal(): MsgSubmitProposal {
  return {
    content: undefined,
    initialDeposit: [],
    proposer: ""
  };
}
export const MsgSubmitProposal = {
  typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
  aminoType: "cosmos-sdk/MsgSubmitProposal",
  encode(message: MsgSubmitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.content !== undefined) {
      Any.encode((message.content as Any), writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.initialDeposit) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = (ProposalContentI_InterfaceDecoder(reader) as Any);
          break;
        case 2:
          message.initialDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.proposer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitProposal {
    return {
      content: isSet(object.content) ? Any.fromJSON(object.content) : undefined,
      initialDeposit: Array.isArray(object?.initialDeposit) ? object.initialDeposit.map((e: any) => Coin.fromJSON(e)) : [],
      proposer: isSet(object.proposer) ? String(object.proposer) : ""
    };
  },
  toJSON(message: MsgSubmitProposal): unknown {
    const obj: any = {};
    message.content !== undefined && (obj.content = message.content ? Any.toJSON(message.content) : undefined);
    if (message.initialDeposit) {
      obj.initialDeposit = message.initialDeposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.initialDeposit = [];
    }
    message.proposer !== undefined && (obj.proposer = message.proposer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSubmitProposal>): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    message.content = object.content !== undefined && object.content !== null ? Any.fromPartial(object.content) : undefined;
    message.initialDeposit = object.initialDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.proposer = object.proposer ?? "";
    return message;
  },
  fromSDK(object: MsgSubmitProposalSDKType): MsgSubmitProposal {
    return {
      content: object.content ? Any.fromSDK(object.content) : undefined,
      initialDeposit: Array.isArray(object?.initial_deposit) ? object.initial_deposit.map((e: any) => Coin.fromSDK(e)) : [],
      proposer: object?.proposer
    };
  },
  toSDK(message: MsgSubmitProposal): MsgSubmitProposalSDKType {
    const obj: any = {};
    message.content !== undefined && (obj.content = message.content ? Any.toSDK(message.content) : undefined);
    if (message.initialDeposit) {
      obj.initial_deposit = message.initialDeposit.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.initial_deposit = [];
    }
    obj.proposer = message.proposer;
    return obj;
  },
  fromAmino(object: MsgSubmitProposalAmino): MsgSubmitProposal {
    return {
      content: object?.content ? ProposalContentI_FromAmino(object.content) : undefined,
      initialDeposit: Array.isArray(object?.initial_deposit) ? object.initial_deposit.map((e: any) => Coin.fromAmino(e)) : [],
      proposer: object.proposer
    };
  },
  toAmino(message: MsgSubmitProposal): MsgSubmitProposalAmino {
    const obj: any = {};
    obj.content = message.content ? ProposalContentI_ToAmino((message.content as Any)) : undefined;
    if (message.initialDeposit) {
      obj.initial_deposit = message.initialDeposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.initial_deposit = [];
    }
    obj.proposer = message.proposer;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitProposalAminoMsg): MsgSubmitProposal {
    return MsgSubmitProposal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitProposal): MsgSubmitProposalAminoMsg {
    return {
      type: "cosmos-sdk/MsgSubmitProposal",
      value: MsgSubmitProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitProposalProtoMsg): MsgSubmitProposal {
    return MsgSubmitProposal.decode(message.value);
  },
  toProto(message: MsgSubmitProposal): Uint8Array {
    return MsgSubmitProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitProposal): MsgSubmitProposalProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
      value: MsgSubmitProposal.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitProposalResponse(): MsgSubmitProposalResponse {
  return {
    proposalId: Long.UZERO
  };
}
export const MsgSubmitProposalResponse = {
  typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposalResponse",
  aminoType: "cosmos-sdk/MsgSubmitProposalResponse",
  encode(message: MsgSubmitProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitProposalResponse {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO
    };
  },
  toJSON(message: MsgSubmitProposalResponse): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    return message;
  },
  fromSDK(object: MsgSubmitProposalResponseSDKType): MsgSubmitProposalResponse {
    return {
      proposalId: object?.proposal_id
    };
  },
  toSDK(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    return obj;
  },
  fromAmino(object: MsgSubmitProposalResponseAmino): MsgSubmitProposalResponse {
    return {
      proposalId: Long.fromString(object.proposal_id)
    };
  },
  toAmino(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitProposalResponseAminoMsg): MsgSubmitProposalResponse {
    return MsgSubmitProposalResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitProposalResponseProtoMsg): MsgSubmitProposalResponse {
    return MsgSubmitProposalResponse.decode(message.value);
  },
  toProto(message: MsgSubmitProposalResponse): Uint8Array {
    return MsgSubmitProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.encode(message).finish()
    };
  }
};
function createBaseMsgVote(): MsgVote {
  return {
    proposalId: Long.UZERO,
    voter: "",
    option: 0
  };
}
export const MsgVote = {
  typeUrl: "/cosmos.gov.v1beta1.MsgVote",
  aminoType: "cosmos-sdk/MsgVote",
  encode(message: MsgVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgVote {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      voter: isSet(object.voter) ? String(object.voter) : "",
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0
    };
  },
  toJSON(message: MsgVote): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    return obj;
  },
  fromPartial(object: DeepPartial<MsgVote>): MsgVote {
    const message = createBaseMsgVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    return message;
  },
  fromSDK(object: MsgVoteSDKType): MsgVote {
    return {
      proposalId: object?.proposal_id,
      voter: object?.voter,
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0
    };
  },
  toSDK(message: MsgVote): MsgVoteSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    obj.voter = message.voter;
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    return obj;
  },
  fromAmino(object: MsgVoteAmino): MsgVote {
    return {
      proposalId: Long.fromString(object.proposal_id),
      voter: object.voter,
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0
    };
  },
  toAmino(message: MsgVote): MsgVoteAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.voter = message.voter;
    obj.option = message.option;
    return obj;
  },
  fromAminoMsg(object: MsgVoteAminoMsg): MsgVote {
    return MsgVote.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVote): MsgVoteAminoMsg {
    return {
      type: "cosmos-sdk/MsgVote",
      value: MsgVote.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVoteProtoMsg): MsgVote {
    return MsgVote.decode(message.value);
  },
  toProto(message: MsgVote): Uint8Array {
    return MsgVote.encode(message).finish();
  },
  toProtoMsg(message: MsgVote): MsgVoteProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgVote",
      value: MsgVote.encode(message).finish()
    };
  }
};
function createBaseMsgVoteResponse(): MsgVoteResponse {
  return {};
}
export const MsgVoteResponse = {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteResponse",
  aminoType: "cosmos-sdk/MsgVoteResponse",
  encode(_: MsgVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteResponse();
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
  fromJSON(_: any): MsgVoteResponse {
    return {};
  },
  toJSON(_: MsgVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgVoteResponse>): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  },
  fromSDK(_: MsgVoteResponseSDKType): MsgVoteResponse {
    return {};
  },
  toSDK(_: MsgVoteResponse): MsgVoteResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgVoteResponseAmino): MsgVoteResponse {
    return {};
  },
  toAmino(_: MsgVoteResponse): MsgVoteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVoteResponseAminoMsg): MsgVoteResponse {
    return MsgVoteResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVoteResponse): MsgVoteResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgVoteResponse",
      value: MsgVoteResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVoteResponseProtoMsg): MsgVoteResponse {
    return MsgVoteResponse.decode(message.value);
  },
  toProto(message: MsgVoteResponse): Uint8Array {
    return MsgVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVoteResponse): MsgVoteResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgVoteResponse",
      value: MsgVoteResponse.encode(message).finish()
    };
  }
};
function createBaseMsgVoteWeighted(): MsgVoteWeighted {
  return {
    proposalId: Long.UZERO,
    voter: "",
    options: []
  };
}
export const MsgVoteWeighted = {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
  aminoType: "cosmos-sdk/MsgVoteWeighted",
  encode(message: MsgVoteWeighted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    for (const v of message.options) {
      WeightedVoteOption.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteWeighted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteWeighted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgVoteWeighted {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      voter: isSet(object.voter) ? String(object.voter) : "",
      options: Array.isArray(object?.options) ? object.options.map((e: any) => WeightedVoteOption.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgVoteWeighted): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toJSON(e) : undefined);
    } else {
      obj.options = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgVoteWeighted>): MsgVoteWeighted {
    const message = createBaseMsgVoteWeighted();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.voter = object.voter ?? "";
    message.options = object.options?.map(e => WeightedVoteOption.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgVoteWeightedSDKType): MsgVoteWeighted {
    return {
      proposalId: object?.proposal_id,
      voter: object?.voter,
      options: Array.isArray(object?.options) ? object.options.map((e: any) => WeightedVoteOption.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgVoteWeighted): MsgVoteWeightedSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    obj.voter = message.voter;
    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toSDK(e) : undefined);
    } else {
      obj.options = [];
    }
    return obj;
  },
  fromAmino(object: MsgVoteWeightedAmino): MsgVoteWeighted {
    return {
      proposalId: Long.fromString(object.proposal_id),
      voter: object.voter,
      options: Array.isArray(object?.options) ? object.options.map((e: any) => WeightedVoteOption.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgVoteWeighted): MsgVoteWeightedAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.voter = message.voter;
    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toAmino(e) : undefined);
    } else {
      obj.options = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgVoteWeightedAminoMsg): MsgVoteWeighted {
    return MsgVoteWeighted.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVoteWeighted): MsgVoteWeightedAminoMsg {
    return {
      type: "cosmos-sdk/MsgVoteWeighted",
      value: MsgVoteWeighted.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVoteWeightedProtoMsg): MsgVoteWeighted {
    return MsgVoteWeighted.decode(message.value);
  },
  toProto(message: MsgVoteWeighted): Uint8Array {
    return MsgVoteWeighted.encode(message).finish();
  },
  toProtoMsg(message: MsgVoteWeighted): MsgVoteWeightedProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
      value: MsgVoteWeighted.encode(message).finish()
    };
  }
};
function createBaseMsgVoteWeightedResponse(): MsgVoteWeightedResponse {
  return {};
}
export const MsgVoteWeightedResponse = {
  typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeightedResponse",
  aminoType: "cosmos-sdk/MsgVoteWeightedResponse",
  encode(_: MsgVoteWeightedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteWeightedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteWeightedResponse();
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
  fromJSON(_: any): MsgVoteWeightedResponse {
    return {};
  },
  toJSON(_: MsgVoteWeightedResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgVoteWeightedResponse>): MsgVoteWeightedResponse {
    const message = createBaseMsgVoteWeightedResponse();
    return message;
  },
  fromSDK(_: MsgVoteWeightedResponseSDKType): MsgVoteWeightedResponse {
    return {};
  },
  toSDK(_: MsgVoteWeightedResponse): MsgVoteWeightedResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgVoteWeightedResponseAmino): MsgVoteWeightedResponse {
    return {};
  },
  toAmino(_: MsgVoteWeightedResponse): MsgVoteWeightedResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVoteWeightedResponseAminoMsg): MsgVoteWeightedResponse {
    return MsgVoteWeightedResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVoteWeightedResponse): MsgVoteWeightedResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgVoteWeightedResponse",
      value: MsgVoteWeightedResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgVoteWeightedResponseProtoMsg): MsgVoteWeightedResponse {
    return MsgVoteWeightedResponse.decode(message.value);
  },
  toProto(message: MsgVoteWeightedResponse): Uint8Array {
    return MsgVoteWeightedResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVoteWeightedResponse): MsgVoteWeightedResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeightedResponse",
      value: MsgVoteWeightedResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDeposit(): MsgDeposit {
  return {
    proposalId: Long.UZERO,
    depositor: "",
    amount: []
  };
}
export const MsgDeposit = {
  typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
  aminoType: "cosmos-sdk/MsgDeposit",
  encode(message: MsgDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;
        case 2:
          message.depositor = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeposit {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromValue(object.proposalId) : Long.UZERO,
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgDeposit): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgDeposit>): MsgDeposit {
    const message = createBaseMsgDeposit();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgDepositSDKType): MsgDeposit {
    return {
      proposalId: object?.proposal_id,
      depositor: object?.depositor,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: MsgDeposit): MsgDepositSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    obj.depositor = message.depositor;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAmino(object: MsgDepositAmino): MsgDeposit {
    return {
      proposalId: Long.fromString(object.proposal_id),
      depositor: object.depositor,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgDeposit): MsgDepositAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.depositor = message.depositor;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgDepositAminoMsg): MsgDeposit {
    return MsgDeposit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeposit): MsgDepositAminoMsg {
    return {
      type: "cosmos-sdk/MsgDeposit",
      value: MsgDeposit.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDepositProtoMsg): MsgDeposit {
    return MsgDeposit.decode(message.value);
  },
  toProto(message: MsgDeposit): Uint8Array {
    return MsgDeposit.encode(message).finish();
  },
  toProtoMsg(message: MsgDeposit): MsgDepositProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
      value: MsgDeposit.encode(message).finish()
    };
  }
};
function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}
export const MsgDepositResponse = {
  typeUrl: "/cosmos.gov.v1beta1.MsgDepositResponse",
  aminoType: "cosmos-sdk/MsgDepositResponse",
  encode(_: MsgDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();
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
  fromJSON(_: any): MsgDepositResponse {
    return {};
  },
  toJSON(_: MsgDepositResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgDepositResponse>): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  },
  fromSDK(_: MsgDepositResponseSDKType): MsgDepositResponse {
    return {};
  },
  toSDK(_: MsgDepositResponse): MsgDepositResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgDepositResponseAmino): MsgDepositResponse {
    return {};
  },
  toAmino(_: MsgDepositResponse): MsgDepositResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDepositResponseAminoMsg): MsgDepositResponse {
    return MsgDepositResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDepositResponse): MsgDepositResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgDepositResponse",
      value: MsgDepositResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDepositResponseProtoMsg): MsgDepositResponse {
    return MsgDepositResponse.decode(message.value);
  },
  toProto(message: MsgDepositResponse): Uint8Array {
    return MsgDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositResponse): MsgDepositResponseProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.MsgDepositResponse",
      value: MsgDepositResponse.encode(message).finish()
    };
  }
};
export const ProposalContentI_InterfaceDecoder = (input: _m0.Reader | Uint8Array): TextProposal | RegisterIncentiveProposal | ClientUpdateProposal | UpgradeProposal | ReplacePoolIncentivesProposal | UpdatePoolIncentivesProposal | SetSuperfluidAssetsProposal | RemoveSuperfluidAssetsProposal | UpdateUnpoolWhiteListProposal | UpdateFeeTokenProposal | Any => {
  const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/cosmos.gov.v1beta1.TextProposal":
      return TextProposal.decode(data.value);
    case "/evmos.incentives.v1.RegisterIncentiveProposal":
      return RegisterIncentiveProposal.decode(data.value);
    case "/ibc.core.client.v1.ClientUpdateProposal":
      return ClientUpdateProposal.decode(data.value);
    case "/ibc.core.client.v1.UpgradeProposal":
      return UpgradeProposal.decode(data.value);
    case "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal":
      return ReplacePoolIncentivesProposal.decode(data.value);
    case "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal":
      return UpdatePoolIncentivesProposal.decode(data.value);
    case "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal":
      return SetSuperfluidAssetsProposal.decode(data.value);
    case "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal":
      return RemoveSuperfluidAssetsProposal.decode(data.value);
    case "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal":
      return UpdateUnpoolWhiteListProposal.decode(data.value);
    case "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal":
      return UpdateFeeTokenProposal.decode(data.value);
    default:
      return data;
  }
};
export const ProposalContentI_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "cosmos-sdk/TextProposal":
      return Any.fromPartial({
        typeUrl: "/cosmos.gov.v1beta1.TextProposal",
        value: TextProposal.encode(TextProposal.fromPartial(TextProposal.fromAmino(content.value))).finish()
      });
    case "/evmos.incentives.v1.RegisterIncentiveProposal":
      return Any.fromPartial({
        typeUrl: "/evmos.incentives.v1.RegisterIncentiveProposal",
        value: RegisterIncentiveProposal.encode(RegisterIncentiveProposal.fromPartial(RegisterIncentiveProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/ClientUpdateProposal":
      return Any.fromPartial({
        typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
        value: ClientUpdateProposal.encode(ClientUpdateProposal.fromPartial(ClientUpdateProposal.fromAmino(content.value))).finish()
      });
    case "cosmos-sdk/UpgradeProposal":
      return Any.fromPartial({
        typeUrl: "/ibc.core.client.v1.UpgradeProposal",
        value: UpgradeProposal.encode(UpgradeProposal.fromPartial(UpgradeProposal.fromAmino(content.value))).finish()
      });
    case "osmosis/poolincentives/replace-pool-incentives-proposal":
      return Any.fromPartial({
        typeUrl: "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal",
        value: ReplacePoolIncentivesProposal.encode(ReplacePoolIncentivesProposal.fromPartial(ReplacePoolIncentivesProposal.fromAmino(content.value))).finish()
      });
    case "osmosis/poolincentives/update-pool-incentives-proposal":
      return Any.fromPartial({
        typeUrl: "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal",
        value: UpdatePoolIncentivesProposal.encode(UpdatePoolIncentivesProposal.fromPartial(UpdatePoolIncentivesProposal.fromAmino(content.value))).finish()
      });
    case "osmosis/v1beta1/set-superfluid-assets-proposal":
      return Any.fromPartial({
        typeUrl: "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal",
        value: SetSuperfluidAssetsProposal.encode(SetSuperfluidAssetsProposal.fromPartial(SetSuperfluidAssetsProposal.fromAmino(content.value))).finish()
      });
    case "osmosis/v1beta1/remove-superfluid-assets-proposal":
      return Any.fromPartial({
        typeUrl: "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal",
        value: RemoveSuperfluidAssetsProposal.encode(RemoveSuperfluidAssetsProposal.fromPartial(RemoveSuperfluidAssetsProposal.fromAmino(content.value))).finish()
      });
    case "osmosis/v1beta1/update-unpool-white-list-proposal":
      return Any.fromPartial({
        typeUrl: "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal",
        value: UpdateUnpoolWhiteListProposal.encode(UpdateUnpoolWhiteListProposal.fromPartial(UpdateUnpoolWhiteListProposal.fromAmino(content.value))).finish()
      });
    case "osmosis/txfees/update-fee-token-proposal":
      return Any.fromPartial({
        typeUrl: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal",
        value: UpdateFeeTokenProposal.encode(UpdateFeeTokenProposal.fromPartial(UpdateFeeTokenProposal.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const ProposalContentI_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/cosmos.gov.v1beta1.TextProposal":
      return {
        type: "cosmos-sdk/TextProposal",
        value: TextProposal.toAmino(TextProposal.decode(content.value))
      };
    case "/evmos.incentives.v1.RegisterIncentiveProposal":
      return {
        type: "/evmos.incentives.v1.RegisterIncentiveProposal",
        value: RegisterIncentiveProposal.toAmino(RegisterIncentiveProposal.decode(content.value))
      };
    case "/ibc.core.client.v1.ClientUpdateProposal":
      return {
        type: "cosmos-sdk/ClientUpdateProposal",
        value: ClientUpdateProposal.toAmino(ClientUpdateProposal.decode(content.value))
      };
    case "/ibc.core.client.v1.UpgradeProposal":
      return {
        type: "cosmos-sdk/UpgradeProposal",
        value: UpgradeProposal.toAmino(UpgradeProposal.decode(content.value))
      };
    case "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal":
      return {
        type: "osmosis/poolincentives/replace-pool-incentives-proposal",
        value: ReplacePoolIncentivesProposal.toAmino(ReplacePoolIncentivesProposal.decode(content.value))
      };
    case "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal":
      return {
        type: "osmosis/poolincentives/update-pool-incentives-proposal",
        value: UpdatePoolIncentivesProposal.toAmino(UpdatePoolIncentivesProposal.decode(content.value))
      };
    case "/osmosis.superfluid.v1beta1.SetSuperfluidAssetsProposal":
      return {
        type: "osmosis/v1beta1/set-superfluid-assets-proposal",
        value: SetSuperfluidAssetsProposal.toAmino(SetSuperfluidAssetsProposal.decode(content.value))
      };
    case "/osmosis.superfluid.v1beta1.RemoveSuperfluidAssetsProposal":
      return {
        type: "osmosis/v1beta1/remove-superfluid-assets-proposal",
        value: RemoveSuperfluidAssetsProposal.toAmino(RemoveSuperfluidAssetsProposal.decode(content.value))
      };
    case "/osmosis.superfluid.v1beta1.UpdateUnpoolWhiteListProposal":
      return {
        type: "osmosis/v1beta1/update-unpool-white-list-proposal",
        value: UpdateUnpoolWhiteListProposal.toAmino(UpdateUnpoolWhiteListProposal.decode(content.value))
      };
    case "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal":
      return {
        type: "osmosis/txfees/update-fee-token-proposal",
        value: UpdateFeeTokenProposal.toAmino(UpdateFeeTokenProposal.decode(content.value))
      };
    default:
      return Any.toAmino(content);
  }
};