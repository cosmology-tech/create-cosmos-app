import { ValidatorPreference, ValidatorPreferenceSDKType } from "./state";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "osmosis.valsetpref.v1beta1";
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */
export interface MsgSetValidatorSetPreference {
  /** delegator is the user who is trying to create a validator-set. */
  delegator: string;
  /** list of {valAddr, weight} to delegate to */
  preferences: ValidatorPreference[];
}
export interface MsgSetValidatorSetPreferenceProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference";
  value: Uint8Array;
}
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */
export interface MsgSetValidatorSetPreferenceSDKType {
  delegator: string;
  preferences: ValidatorPreferenceSDKType[];
}
export interface MsgSetValidatorSetPreferenceResponse {}
export interface MsgSetValidatorSetPreferenceResponseProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse";
  value: Uint8Array;
}
export interface MsgSetValidatorSetPreferenceResponseSDKType {}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */
export interface MsgDelegateToValidatorSet {
  /** delegator is the user who is trying to delegate. */
  delegator: string;
  /**
   * the amount of tokens the user is trying to delegate.
   * For ex: delegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3, ValC
   * -> 0.2} our staking logic would attempt to delegate 5osmo to A , 3osmo to
   * B, 2osmo to C.
   */
  coin: Coin;
}
export interface MsgDelegateToValidatorSetProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet";
  value: Uint8Array;
}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */
export interface MsgDelegateToValidatorSetSDKType {
  delegator: string;
  coin: CoinSDKType;
}
export interface MsgDelegateToValidatorSetResponse {}
export interface MsgDelegateToValidatorSetResponseProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse";
  value: Uint8Array;
}
export interface MsgDelegateToValidatorSetResponseSDKType {}
export interface MsgUndelegateFromValidatorSet {
  /** delegator is the user who is trying to undelegate. */
  delegator: string;
  /**
   * the amount the user wants to undelegate
   * For ex: Undelegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3,
   * ValC
   * -> 0.2} our undelegate logic would attempt to undelegate 5osmo from A ,
   * 3osmo from B, 2osmo from C
   */
  coin: Coin;
}
export interface MsgUndelegateFromValidatorSetProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet";
  value: Uint8Array;
}
export interface MsgUndelegateFromValidatorSetSDKType {
  delegator: string;
  coin: CoinSDKType;
}
export interface MsgUndelegateFromValidatorSetResponse {}
export interface MsgUndelegateFromValidatorSetResponseProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse";
  value: Uint8Array;
}
export interface MsgUndelegateFromValidatorSetResponseSDKType {}
export interface MsgRedelegateValidatorSet {
  /** delegator is the user who is trying to create a validator-set. */
  delegator: string;
  /** list of {valAddr, weight} to delegate to */
  preferences: ValidatorPreference[];
}
export interface MsgRedelegateValidatorSetProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet";
  value: Uint8Array;
}
export interface MsgRedelegateValidatorSetSDKType {
  delegator: string;
  preferences: ValidatorPreferenceSDKType[];
}
export interface MsgRedelegateValidatorSetResponse {}
export interface MsgRedelegateValidatorSetResponseProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse";
  value: Uint8Array;
}
export interface MsgRedelegateValidatorSetResponseSDKType {}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */
export interface MsgWithdrawDelegationRewards {
  /** delegator is the user who is trying to claim staking rewards. */
  delegator: string;
}
export interface MsgWithdrawDelegationRewardsProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards";
  value: Uint8Array;
}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */
export interface MsgWithdrawDelegationRewardsSDKType {
  delegator: string;
}
export interface MsgWithdrawDelegationRewardsResponse {}
export interface MsgWithdrawDelegationRewardsResponseProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse";
  value: Uint8Array;
}
export interface MsgWithdrawDelegationRewardsResponseSDKType {}
/**
 * MsgDelegateBondedTokens breaks bonded lockup (by ID) of osmo, of
 * length <= 2 weeks and takes all that osmo and delegates according to
 * delegator's current validator set preference.
 */
export interface MsgDelegateBondedTokens {
  /** delegator is the user who is trying to force unbond osmo and delegate. */
  delegator: string;
  /** lockup id of osmo in the pool */
  lockID: bigint;
}
export interface MsgDelegateBondedTokensProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens";
  value: Uint8Array;
}
/**
 * MsgDelegateBondedTokens breaks bonded lockup (by ID) of osmo, of
 * length <= 2 weeks and takes all that osmo and delegates according to
 * delegator's current validator set preference.
 */
export interface MsgDelegateBondedTokensSDKType {
  delegator: string;
  lockID: bigint;
}
export interface MsgDelegateBondedTokensResponse {}
export interface MsgDelegateBondedTokensResponseProtoMsg {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokensResponse";
  value: Uint8Array;
}
export interface MsgDelegateBondedTokensResponseSDKType {}
function createBaseMsgSetValidatorSetPreference(): MsgSetValidatorSetPreference {
  return {
    delegator: "",
    preferences: []
  };
}
export const MsgSetValidatorSetPreference = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference",
  encode(message: MsgSetValidatorSetPreference, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    for (const v of message.preferences) {
      ValidatorPreference.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetValidatorSetPreference {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetValidatorSetPreference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.preferences.push(ValidatorPreference.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetValidatorSetPreference {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      preferences: Array.isArray(object?.preferences) ? object.preferences.map((e: any) => ValidatorPreference.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgSetValidatorSetPreference): JsonSafe<MsgSetValidatorSetPreference> {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    if (message.preferences) {
      obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toJSON(e) : undefined);
    } else {
      obj.preferences = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSetValidatorSetPreference>): MsgSetValidatorSetPreference {
    const message = createBaseMsgSetValidatorSetPreference();
    message.delegator = object.delegator ?? "";
    message.preferences = object.preferences?.map(e => ValidatorPreference.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgSetValidatorSetPreferenceSDKType): MsgSetValidatorSetPreference {
    return {
      delegator: object?.delegator,
      preferences: Array.isArray(object?.preferences) ? object.preferences.map((e: any) => ValidatorPreference.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): MsgSetValidatorSetPreferenceSDKType {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      preferences: Array.isArray(object?.preferences) ? object.preferences.map((e: any) => ValidatorPreference.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: MsgSetValidatorSetPreference): MsgSetValidatorSetPreferenceSDKType {
    const obj: any = {};
    obj.delegator = message.delegator;
    if (message.preferences) {
      obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toSDK(e) : undefined);
    } else {
      obj.preferences = [];
    }
    return obj;
  },
  fromAmino(object: MsgSetValidatorSetPreferenceAmino): MsgSetValidatorSetPreference {
    const message = createBaseMsgSetValidatorSetPreference();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    message.preferences = object.preferences?.map(e => ValidatorPreference.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgSetValidatorSetPreference): MsgSetValidatorSetPreferenceAmino {
    const obj: any = {};
    obj.delegator = message.delegator === "" ? undefined : message.delegator;
    if (message.preferences) {
      obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toAmino(e) : undefined);
    } else {
      obj.preferences = message.preferences;
    }
    return obj;
  },
  fromAminoMsg(object: MsgSetValidatorSetPreferenceAminoMsg): MsgSetValidatorSetPreference {
    return MsgSetValidatorSetPreference.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetValidatorSetPreference): MsgSetValidatorSetPreferenceAminoMsg {
    return {
      type: "osmosis/valset-pref/MsgSetValidatorSetPreference",
      value: MsgSetValidatorSetPreference.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetValidatorSetPreferenceProtoMsg): MsgSetValidatorSetPreference {
    return MsgSetValidatorSetPreference.decode(message.value);
  },
  toProto(message: MsgSetValidatorSetPreference): Uint8Array {
    return MsgSetValidatorSetPreference.encode(message).finish();
  },
  toProtoMsg(message: MsgSetValidatorSetPreference): MsgSetValidatorSetPreferenceProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreference",
      value: MsgSetValidatorSetPreference.encode(message).finish()
    };
  }
};
function createBaseMsgSetValidatorSetPreferenceResponse(): MsgSetValidatorSetPreferenceResponse {
  return {};
}
export const MsgSetValidatorSetPreferenceResponse = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse",
  encode(_: MsgSetValidatorSetPreferenceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetValidatorSetPreferenceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetValidatorSetPreferenceResponse();
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
  fromJSON(_: any): MsgSetValidatorSetPreferenceResponse {
    return {};
  },
  toJSON(_: MsgSetValidatorSetPreferenceResponse): JsonSafe<MsgSetValidatorSetPreferenceResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSetValidatorSetPreferenceResponse>): MsgSetValidatorSetPreferenceResponse {
    const message = createBaseMsgSetValidatorSetPreferenceResponse();
    return message;
  },
  fromSDK(_: MsgSetValidatorSetPreferenceResponseSDKType): MsgSetValidatorSetPreferenceResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgSetValidatorSetPreferenceResponseSDKType {
    return {};
  },
  toSDK(_: MsgSetValidatorSetPreferenceResponse): MsgSetValidatorSetPreferenceResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgSetValidatorSetPreferenceResponseAmino): MsgSetValidatorSetPreferenceResponse {
    const message = createBaseMsgSetValidatorSetPreferenceResponse();
    return message;
  },
  toAmino(_: MsgSetValidatorSetPreferenceResponse): MsgSetValidatorSetPreferenceResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetValidatorSetPreferenceResponseAminoMsg): MsgSetValidatorSetPreferenceResponse {
    return MsgSetValidatorSetPreferenceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetValidatorSetPreferenceResponse): MsgSetValidatorSetPreferenceResponseAminoMsg {
    return {
      type: "osmosis/valsetpref/set-validator-set-preference-response",
      value: MsgSetValidatorSetPreferenceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetValidatorSetPreferenceResponseProtoMsg): MsgSetValidatorSetPreferenceResponse {
    return MsgSetValidatorSetPreferenceResponse.decode(message.value);
  },
  toProto(message: MsgSetValidatorSetPreferenceResponse): Uint8Array {
    return MsgSetValidatorSetPreferenceResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetValidatorSetPreferenceResponse): MsgSetValidatorSetPreferenceResponseProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgSetValidatorSetPreferenceResponse",
      value: MsgSetValidatorSetPreferenceResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDelegateToValidatorSet(): MsgDelegateToValidatorSet {
  return {
    delegator: "",
    coin: Coin.fromPartial({})
  };
}
export const MsgDelegateToValidatorSet = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet",
  encode(message: MsgDelegateToValidatorSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateToValidatorSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateToValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDelegateToValidatorSet {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined
    };
  },
  toJSON(message: MsgDelegateToValidatorSet): JsonSafe<MsgDelegateToValidatorSet> {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgDelegateToValidatorSet>): MsgDelegateToValidatorSet {
    const message = createBaseMsgDelegateToValidatorSet();
    message.delegator = object.delegator ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
  fromSDK(object: MsgDelegateToValidatorSetSDKType): MsgDelegateToValidatorSet {
    return {
      delegator: object?.delegator,
      coin: object.coin ? Coin.fromSDK(object.coin) : undefined
    };
  },
  fromSDKJSON(object: any): MsgDelegateToValidatorSetSDKType {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      coin: isSet(object.coin) ? Coin.fromSDKJSON(object.coin) : undefined
    };
  },
  toSDK(message: MsgDelegateToValidatorSet): MsgDelegateToValidatorSetSDKType {
    const obj: any = {};
    obj.delegator = message.delegator;
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toSDK(message.coin) : undefined);
    return obj;
  },
  fromAmino(object: MsgDelegateToValidatorSetAmino): MsgDelegateToValidatorSet {
    const message = createBaseMsgDelegateToValidatorSet();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    return message;
  },
  toAmino(message: MsgDelegateToValidatorSet): MsgDelegateToValidatorSetAmino {
    const obj: any = {};
    obj.delegator = message.delegator === "" ? undefined : message.delegator;
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDelegateToValidatorSetAminoMsg): MsgDelegateToValidatorSet {
    return MsgDelegateToValidatorSet.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDelegateToValidatorSet): MsgDelegateToValidatorSetAminoMsg {
    return {
      type: "osmosis/valset-pref/MsgDelegateToValidatorSet",
      value: MsgDelegateToValidatorSet.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDelegateToValidatorSetProtoMsg): MsgDelegateToValidatorSet {
    return MsgDelegateToValidatorSet.decode(message.value);
  },
  toProto(message: MsgDelegateToValidatorSet): Uint8Array {
    return MsgDelegateToValidatorSet.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateToValidatorSet): MsgDelegateToValidatorSetProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSet",
      value: MsgDelegateToValidatorSet.encode(message).finish()
    };
  }
};
function createBaseMsgDelegateToValidatorSetResponse(): MsgDelegateToValidatorSetResponse {
  return {};
}
export const MsgDelegateToValidatorSetResponse = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse",
  encode(_: MsgDelegateToValidatorSetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateToValidatorSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateToValidatorSetResponse();
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
  fromJSON(_: any): MsgDelegateToValidatorSetResponse {
    return {};
  },
  toJSON(_: MsgDelegateToValidatorSetResponse): JsonSafe<MsgDelegateToValidatorSetResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgDelegateToValidatorSetResponse>): MsgDelegateToValidatorSetResponse {
    const message = createBaseMsgDelegateToValidatorSetResponse();
    return message;
  },
  fromSDK(_: MsgDelegateToValidatorSetResponseSDKType): MsgDelegateToValidatorSetResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgDelegateToValidatorSetResponseSDKType {
    return {};
  },
  toSDK(_: MsgDelegateToValidatorSetResponse): MsgDelegateToValidatorSetResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgDelegateToValidatorSetResponseAmino): MsgDelegateToValidatorSetResponse {
    const message = createBaseMsgDelegateToValidatorSetResponse();
    return message;
  },
  toAmino(_: MsgDelegateToValidatorSetResponse): MsgDelegateToValidatorSetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDelegateToValidatorSetResponseAminoMsg): MsgDelegateToValidatorSetResponse {
    return MsgDelegateToValidatorSetResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDelegateToValidatorSetResponse): MsgDelegateToValidatorSetResponseAminoMsg {
    return {
      type: "osmosis/valsetpref/delegate-to-validator-set-response",
      value: MsgDelegateToValidatorSetResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDelegateToValidatorSetResponseProtoMsg): MsgDelegateToValidatorSetResponse {
    return MsgDelegateToValidatorSetResponse.decode(message.value);
  },
  toProto(message: MsgDelegateToValidatorSetResponse): Uint8Array {
    return MsgDelegateToValidatorSetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateToValidatorSetResponse): MsgDelegateToValidatorSetResponseProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateToValidatorSetResponse",
      value: MsgDelegateToValidatorSetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUndelegateFromValidatorSet(): MsgUndelegateFromValidatorSet {
  return {
    delegator: "",
    coin: Coin.fromPartial({})
  };
}
export const MsgUndelegateFromValidatorSet = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet",
  encode(message: MsgUndelegateFromValidatorSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateFromValidatorSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateFromValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 3:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUndelegateFromValidatorSet {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined
    };
  },
  toJSON(message: MsgUndelegateFromValidatorSet): JsonSafe<MsgUndelegateFromValidatorSet> {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUndelegateFromValidatorSet>): MsgUndelegateFromValidatorSet {
    const message = createBaseMsgUndelegateFromValidatorSet();
    message.delegator = object.delegator ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
  fromSDK(object: MsgUndelegateFromValidatorSetSDKType): MsgUndelegateFromValidatorSet {
    return {
      delegator: object?.delegator,
      coin: object.coin ? Coin.fromSDK(object.coin) : undefined
    };
  },
  fromSDKJSON(object: any): MsgUndelegateFromValidatorSetSDKType {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      coin: isSet(object.coin) ? Coin.fromSDKJSON(object.coin) : undefined
    };
  },
  toSDK(message: MsgUndelegateFromValidatorSet): MsgUndelegateFromValidatorSetSDKType {
    const obj: any = {};
    obj.delegator = message.delegator;
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toSDK(message.coin) : undefined);
    return obj;
  },
  fromAmino(object: MsgUndelegateFromValidatorSetAmino): MsgUndelegateFromValidatorSet {
    const message = createBaseMsgUndelegateFromValidatorSet();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromAmino(object.coin);
    }
    return message;
  },
  toAmino(message: MsgUndelegateFromValidatorSet): MsgUndelegateFromValidatorSetAmino {
    const obj: any = {};
    obj.delegator = message.delegator === "" ? undefined : message.delegator;
    obj.coin = message.coin ? Coin.toAmino(message.coin) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUndelegateFromValidatorSetAminoMsg): MsgUndelegateFromValidatorSet {
    return MsgUndelegateFromValidatorSet.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUndelegateFromValidatorSet): MsgUndelegateFromValidatorSetAminoMsg {
    return {
      type: "osmosis/valset-pref/MsgUndelegateFromValidatorSet",
      value: MsgUndelegateFromValidatorSet.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUndelegateFromValidatorSetProtoMsg): MsgUndelegateFromValidatorSet {
    return MsgUndelegateFromValidatorSet.decode(message.value);
  },
  toProto(message: MsgUndelegateFromValidatorSet): Uint8Array {
    return MsgUndelegateFromValidatorSet.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegateFromValidatorSet): MsgUndelegateFromValidatorSetProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSet",
      value: MsgUndelegateFromValidatorSet.encode(message).finish()
    };
  }
};
function createBaseMsgUndelegateFromValidatorSetResponse(): MsgUndelegateFromValidatorSetResponse {
  return {};
}
export const MsgUndelegateFromValidatorSetResponse = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse",
  encode(_: MsgUndelegateFromValidatorSetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateFromValidatorSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateFromValidatorSetResponse();
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
  fromJSON(_: any): MsgUndelegateFromValidatorSetResponse {
    return {};
  },
  toJSON(_: MsgUndelegateFromValidatorSetResponse): JsonSafe<MsgUndelegateFromValidatorSetResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUndelegateFromValidatorSetResponse>): MsgUndelegateFromValidatorSetResponse {
    const message = createBaseMsgUndelegateFromValidatorSetResponse();
    return message;
  },
  fromSDK(_: MsgUndelegateFromValidatorSetResponseSDKType): MsgUndelegateFromValidatorSetResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgUndelegateFromValidatorSetResponseSDKType {
    return {};
  },
  toSDK(_: MsgUndelegateFromValidatorSetResponse): MsgUndelegateFromValidatorSetResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgUndelegateFromValidatorSetResponseAmino): MsgUndelegateFromValidatorSetResponse {
    const message = createBaseMsgUndelegateFromValidatorSetResponse();
    return message;
  },
  toAmino(_: MsgUndelegateFromValidatorSetResponse): MsgUndelegateFromValidatorSetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUndelegateFromValidatorSetResponseAminoMsg): MsgUndelegateFromValidatorSetResponse {
    return MsgUndelegateFromValidatorSetResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUndelegateFromValidatorSetResponse): MsgUndelegateFromValidatorSetResponseAminoMsg {
    return {
      type: "osmosis/valsetpref/undelegate-from-validator-set-response",
      value: MsgUndelegateFromValidatorSetResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUndelegateFromValidatorSetResponseProtoMsg): MsgUndelegateFromValidatorSetResponse {
    return MsgUndelegateFromValidatorSetResponse.decode(message.value);
  },
  toProto(message: MsgUndelegateFromValidatorSetResponse): Uint8Array {
    return MsgUndelegateFromValidatorSetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegateFromValidatorSetResponse): MsgUndelegateFromValidatorSetResponseProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgUndelegateFromValidatorSetResponse",
      value: MsgUndelegateFromValidatorSetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRedelegateValidatorSet(): MsgRedelegateValidatorSet {
  return {
    delegator: "",
    preferences: []
  };
}
export const MsgRedelegateValidatorSet = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet",
  encode(message: MsgRedelegateValidatorSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    for (const v of message.preferences) {
      ValidatorPreference.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRedelegateValidatorSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedelegateValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.preferences.push(ValidatorPreference.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRedelegateValidatorSet {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      preferences: Array.isArray(object?.preferences) ? object.preferences.map((e: any) => ValidatorPreference.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgRedelegateValidatorSet): JsonSafe<MsgRedelegateValidatorSet> {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    if (message.preferences) {
      obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toJSON(e) : undefined);
    } else {
      obj.preferences = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgRedelegateValidatorSet>): MsgRedelegateValidatorSet {
    const message = createBaseMsgRedelegateValidatorSet();
    message.delegator = object.delegator ?? "";
    message.preferences = object.preferences?.map(e => ValidatorPreference.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgRedelegateValidatorSetSDKType): MsgRedelegateValidatorSet {
    return {
      delegator: object?.delegator,
      preferences: Array.isArray(object?.preferences) ? object.preferences.map((e: any) => ValidatorPreference.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): MsgRedelegateValidatorSetSDKType {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      preferences: Array.isArray(object?.preferences) ? object.preferences.map((e: any) => ValidatorPreference.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: MsgRedelegateValidatorSet): MsgRedelegateValidatorSetSDKType {
    const obj: any = {};
    obj.delegator = message.delegator;
    if (message.preferences) {
      obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toSDK(e) : undefined);
    } else {
      obj.preferences = [];
    }
    return obj;
  },
  fromAmino(object: MsgRedelegateValidatorSetAmino): MsgRedelegateValidatorSet {
    const message = createBaseMsgRedelegateValidatorSet();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    message.preferences = object.preferences?.map(e => ValidatorPreference.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgRedelegateValidatorSet): MsgRedelegateValidatorSetAmino {
    const obj: any = {};
    obj.delegator = message.delegator === "" ? undefined : message.delegator;
    if (message.preferences) {
      obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toAmino(e) : undefined);
    } else {
      obj.preferences = message.preferences;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRedelegateValidatorSetAminoMsg): MsgRedelegateValidatorSet {
    return MsgRedelegateValidatorSet.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRedelegateValidatorSet): MsgRedelegateValidatorSetAminoMsg {
    return {
      type: "osmosis/valsetpref/redelegate-validator-set",
      value: MsgRedelegateValidatorSet.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRedelegateValidatorSetProtoMsg): MsgRedelegateValidatorSet {
    return MsgRedelegateValidatorSet.decode(message.value);
  },
  toProto(message: MsgRedelegateValidatorSet): Uint8Array {
    return MsgRedelegateValidatorSet.encode(message).finish();
  },
  toProtoMsg(message: MsgRedelegateValidatorSet): MsgRedelegateValidatorSetProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSet",
      value: MsgRedelegateValidatorSet.encode(message).finish()
    };
  }
};
function createBaseMsgRedelegateValidatorSetResponse(): MsgRedelegateValidatorSetResponse {
  return {};
}
export const MsgRedelegateValidatorSetResponse = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse",
  encode(_: MsgRedelegateValidatorSetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRedelegateValidatorSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedelegateValidatorSetResponse();
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
  fromJSON(_: any): MsgRedelegateValidatorSetResponse {
    return {};
  },
  toJSON(_: MsgRedelegateValidatorSetResponse): JsonSafe<MsgRedelegateValidatorSetResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgRedelegateValidatorSetResponse>): MsgRedelegateValidatorSetResponse {
    const message = createBaseMsgRedelegateValidatorSetResponse();
    return message;
  },
  fromSDK(_: MsgRedelegateValidatorSetResponseSDKType): MsgRedelegateValidatorSetResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgRedelegateValidatorSetResponseSDKType {
    return {};
  },
  toSDK(_: MsgRedelegateValidatorSetResponse): MsgRedelegateValidatorSetResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgRedelegateValidatorSetResponseAmino): MsgRedelegateValidatorSetResponse {
    const message = createBaseMsgRedelegateValidatorSetResponse();
    return message;
  },
  toAmino(_: MsgRedelegateValidatorSetResponse): MsgRedelegateValidatorSetResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRedelegateValidatorSetResponseAminoMsg): MsgRedelegateValidatorSetResponse {
    return MsgRedelegateValidatorSetResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRedelegateValidatorSetResponse): MsgRedelegateValidatorSetResponseAminoMsg {
    return {
      type: "osmosis/valsetpref/redelegate-validator-set-response",
      value: MsgRedelegateValidatorSetResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRedelegateValidatorSetResponseProtoMsg): MsgRedelegateValidatorSetResponse {
    return MsgRedelegateValidatorSetResponse.decode(message.value);
  },
  toProto(message: MsgRedelegateValidatorSetResponse): Uint8Array {
    return MsgRedelegateValidatorSetResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRedelegateValidatorSetResponse): MsgRedelegateValidatorSetResponseProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgRedelegateValidatorSetResponse",
      value: MsgRedelegateValidatorSetResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawDelegationRewards(): MsgWithdrawDelegationRewards {
  return {
    delegator: ""
  };
}
export const MsgWithdrawDelegationRewards = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards",
  encode(message: MsgWithdrawDelegationRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegationRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegationRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawDelegationRewards {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : ""
    };
  },
  toJSON(message: MsgWithdrawDelegationRewards): JsonSafe<MsgWithdrawDelegationRewards> {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgWithdrawDelegationRewards>): MsgWithdrawDelegationRewards {
    const message = createBaseMsgWithdrawDelegationRewards();
    message.delegator = object.delegator ?? "";
    return message;
  },
  fromSDK(object: MsgWithdrawDelegationRewardsSDKType): MsgWithdrawDelegationRewards {
    return {
      delegator: object?.delegator
    };
  },
  fromSDKJSON(object: any): MsgWithdrawDelegationRewardsSDKType {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : ""
    };
  },
  toSDK(message: MsgWithdrawDelegationRewards): MsgWithdrawDelegationRewardsSDKType {
    const obj: any = {};
    obj.delegator = message.delegator;
    return obj;
  },
  fromAmino(object: MsgWithdrawDelegationRewardsAmino): MsgWithdrawDelegationRewards {
    const message = createBaseMsgWithdrawDelegationRewards();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    return message;
  },
  toAmino(message: MsgWithdrawDelegationRewards): MsgWithdrawDelegationRewardsAmino {
    const obj: any = {};
    obj.delegator = message.delegator === "" ? undefined : message.delegator;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawDelegationRewardsAminoMsg): MsgWithdrawDelegationRewards {
    return MsgWithdrawDelegationRewards.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawDelegationRewards): MsgWithdrawDelegationRewardsAminoMsg {
    return {
      type: "osmosis/valset-pref/MsgWithdrawDelegationRewards",
      value: MsgWithdrawDelegationRewards.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawDelegationRewardsProtoMsg): MsgWithdrawDelegationRewards {
    return MsgWithdrawDelegationRewards.decode(message.value);
  },
  toProto(message: MsgWithdrawDelegationRewards): Uint8Array {
    return MsgWithdrawDelegationRewards.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawDelegationRewards): MsgWithdrawDelegationRewardsProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewards",
      value: MsgWithdrawDelegationRewards.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawDelegationRewardsResponse(): MsgWithdrawDelegationRewardsResponse {
  return {};
}
export const MsgWithdrawDelegationRewardsResponse = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse",
  encode(_: MsgWithdrawDelegationRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegationRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegationRewardsResponse();
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
  fromJSON(_: any): MsgWithdrawDelegationRewardsResponse {
    return {};
  },
  toJSON(_: MsgWithdrawDelegationRewardsResponse): JsonSafe<MsgWithdrawDelegationRewardsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgWithdrawDelegationRewardsResponse>): MsgWithdrawDelegationRewardsResponse {
    const message = createBaseMsgWithdrawDelegationRewardsResponse();
    return message;
  },
  fromSDK(_: MsgWithdrawDelegationRewardsResponseSDKType): MsgWithdrawDelegationRewardsResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgWithdrawDelegationRewardsResponseSDKType {
    return {};
  },
  toSDK(_: MsgWithdrawDelegationRewardsResponse): MsgWithdrawDelegationRewardsResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgWithdrawDelegationRewardsResponseAmino): MsgWithdrawDelegationRewardsResponse {
    const message = createBaseMsgWithdrawDelegationRewardsResponse();
    return message;
  },
  toAmino(_: MsgWithdrawDelegationRewardsResponse): MsgWithdrawDelegationRewardsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawDelegationRewardsResponseAminoMsg): MsgWithdrawDelegationRewardsResponse {
    return MsgWithdrawDelegationRewardsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawDelegationRewardsResponse): MsgWithdrawDelegationRewardsResponseAminoMsg {
    return {
      type: "osmosis/valsetpref/withdraw-delegation-rewards-response",
      value: MsgWithdrawDelegationRewardsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawDelegationRewardsResponseProtoMsg): MsgWithdrawDelegationRewardsResponse {
    return MsgWithdrawDelegationRewardsResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawDelegationRewardsResponse): Uint8Array {
    return MsgWithdrawDelegationRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawDelegationRewardsResponse): MsgWithdrawDelegationRewardsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgWithdrawDelegationRewardsResponse",
      value: MsgWithdrawDelegationRewardsResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDelegateBondedTokens(): MsgDelegateBondedTokens {
  return {
    delegator: "",
    lockID: BigInt(0)
  };
}
export const MsgDelegateBondedTokens = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens",
  encode(message: MsgDelegateBondedTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.lockID !== BigInt(0)) {
      writer.uint32(16).uint64(message.lockID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateBondedTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateBondedTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.lockID = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDelegateBondedTokens {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      lockID: isSet(object.lockID) ? BigInt(object.lockID.toString()) : BigInt(0)
    };
  },
  toJSON(message: MsgDelegateBondedTokens): JsonSafe<MsgDelegateBondedTokens> {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.lockID !== undefined && (obj.lockID = (message.lockID || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgDelegateBondedTokens>): MsgDelegateBondedTokens {
    const message = createBaseMsgDelegateBondedTokens();
    message.delegator = object.delegator ?? "";
    message.lockID = object.lockID !== undefined && object.lockID !== null ? BigInt(object.lockID.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: MsgDelegateBondedTokensSDKType): MsgDelegateBondedTokens {
    return {
      delegator: object?.delegator,
      lockID: object?.lockID
    };
  },
  fromSDKJSON(object: any): MsgDelegateBondedTokensSDKType {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      lockID: isSet(object.lockID) ? BigInt(object.lockID.toString()) : BigInt(0)
    };
  },
  toSDK(message: MsgDelegateBondedTokens): MsgDelegateBondedTokensSDKType {
    const obj: any = {};
    obj.delegator = message.delegator;
    obj.lockID = message.lockID;
    return obj;
  },
  fromAmino(object: MsgDelegateBondedTokensAmino): MsgDelegateBondedTokens {
    const message = createBaseMsgDelegateBondedTokens();
    if (object.delegator !== undefined && object.delegator !== null) {
      message.delegator = object.delegator;
    }
    if (object.lockID !== undefined && object.lockID !== null) {
      message.lockID = BigInt(object.lockID);
    }
    return message;
  },
  toAmino(message: MsgDelegateBondedTokens): MsgDelegateBondedTokensAmino {
    const obj: any = {};
    obj.delegator = message.delegator === "" ? undefined : message.delegator;
    obj.lockID = message.lockID !== BigInt(0) ? message.lockID?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgDelegateBondedTokensAminoMsg): MsgDelegateBondedTokens {
    return MsgDelegateBondedTokens.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDelegateBondedTokens): MsgDelegateBondedTokensAminoMsg {
    return {
      type: "osmosis/valsetpref/delegate-bonded-tokens",
      value: MsgDelegateBondedTokens.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDelegateBondedTokensProtoMsg): MsgDelegateBondedTokens {
    return MsgDelegateBondedTokens.decode(message.value);
  },
  toProto(message: MsgDelegateBondedTokens): Uint8Array {
    return MsgDelegateBondedTokens.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateBondedTokens): MsgDelegateBondedTokensProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokens",
      value: MsgDelegateBondedTokens.encode(message).finish()
    };
  }
};
function createBaseMsgDelegateBondedTokensResponse(): MsgDelegateBondedTokensResponse {
  return {};
}
export const MsgDelegateBondedTokensResponse = {
  typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokensResponse",
  encode(_: MsgDelegateBondedTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateBondedTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateBondedTokensResponse();
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
  fromJSON(_: any): MsgDelegateBondedTokensResponse {
    return {};
  },
  toJSON(_: MsgDelegateBondedTokensResponse): JsonSafe<MsgDelegateBondedTokensResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgDelegateBondedTokensResponse>): MsgDelegateBondedTokensResponse {
    const message = createBaseMsgDelegateBondedTokensResponse();
    return message;
  },
  fromSDK(_: MsgDelegateBondedTokensResponseSDKType): MsgDelegateBondedTokensResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgDelegateBondedTokensResponseSDKType {
    return {};
  },
  toSDK(_: MsgDelegateBondedTokensResponse): MsgDelegateBondedTokensResponseSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: MsgDelegateBondedTokensResponseAmino): MsgDelegateBondedTokensResponse {
    const message = createBaseMsgDelegateBondedTokensResponse();
    return message;
  },
  toAmino(_: MsgDelegateBondedTokensResponse): MsgDelegateBondedTokensResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDelegateBondedTokensResponseAminoMsg): MsgDelegateBondedTokensResponse {
    return MsgDelegateBondedTokensResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDelegateBondedTokensResponse): MsgDelegateBondedTokensResponseAminoMsg {
    return {
      type: "osmosis/valsetpref/delegate-bonded-tokens-response",
      value: MsgDelegateBondedTokensResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDelegateBondedTokensResponseProtoMsg): MsgDelegateBondedTokensResponse {
    return MsgDelegateBondedTokensResponse.decode(message.value);
  },
  toProto(message: MsgDelegateBondedTokensResponse): Uint8Array {
    return MsgDelegateBondedTokensResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateBondedTokensResponse): MsgDelegateBondedTokensResponseProtoMsg {
    return {
      typeUrl: "/osmosis.valsetpref.v1beta1.MsgDelegateBondedTokensResponse",
      value: MsgDelegateBondedTokensResponse.encode(message).finish()
    };
  }
};