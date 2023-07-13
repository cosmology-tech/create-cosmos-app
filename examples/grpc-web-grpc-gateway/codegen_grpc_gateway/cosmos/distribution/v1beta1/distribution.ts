import { DecCoin, DecCoinAmino, DecCoinSDKType, Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.distribution.v1beta1";
/** Params defines the set of params for the distribution module. */
export interface Params {
  communityTax: string;
  baseProposerReward: string;
  bonusProposerReward: string;
  withdrawAddrEnabled: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.Params";
  value: Uint8Array;
}
/** Params defines the set of params for the distribution module. */
export interface ParamsAmino {
  community_tax: string;
  base_proposer_reward: string;
  bonus_proposer_reward: string;
  withdraw_addr_enabled: boolean;
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/Params";
  value: ParamsAmino;
}
/** Params defines the set of params for the distribution module. */
export interface ParamsSDKType {
  community_tax: string;
  base_proposer_reward: string;
  bonus_proposer_reward: string;
  withdraw_addr_enabled: boolean;
}
/**
 * ValidatorHistoricalRewards represents historical rewards for a validator.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 *    number of outstanding delegations which ended the associated period (and
 *    might need to read that record)
 *  + number of slashes which ended the associated period (and might need to
 *  read that record)
 *  + one per validator for the zeroeth period, set on initialization
 */
export interface ValidatorHistoricalRewards {
  cumulativeRewardRatio: DecCoin[];
  referenceCount: number;
}
export interface ValidatorHistoricalRewardsProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewards";
  value: Uint8Array;
}
/**
 * ValidatorHistoricalRewards represents historical rewards for a validator.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 *    number of outstanding delegations which ended the associated period (and
 *    might need to read that record)
 *  + number of slashes which ended the associated period (and might need to
 *  read that record)
 *  + one per validator for the zeroeth period, set on initialization
 */
export interface ValidatorHistoricalRewardsAmino {
  cumulative_reward_ratio: DecCoinAmino[];
  reference_count: number;
}
export interface ValidatorHistoricalRewardsAminoMsg {
  type: "cosmos-sdk/ValidatorHistoricalRewards";
  value: ValidatorHistoricalRewardsAmino;
}
/**
 * ValidatorHistoricalRewards represents historical rewards for a validator.
 * Height is implicit within the store key.
 * Cumulative reward ratio is the sum from the zeroeth period
 * until this period of rewards / tokens, per the spec.
 * The reference count indicates the number of objects
 * which might need to reference this historical entry at any point.
 * ReferenceCount =
 *    number of outstanding delegations which ended the associated period (and
 *    might need to read that record)
 *  + number of slashes which ended the associated period (and might need to
 *  read that record)
 *  + one per validator for the zeroeth period, set on initialization
 */
export interface ValidatorHistoricalRewardsSDKType {
  cumulative_reward_ratio: DecCoinSDKType[];
  reference_count: number;
}
/**
 * ValidatorCurrentRewards represents current rewards and current
 * period for a validator kept as a running counter and incremented
 * each block as long as the validator's tokens remain constant.
 */
export interface ValidatorCurrentRewards {
  rewards: DecCoin[];
  period: Long;
}
export interface ValidatorCurrentRewardsProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewards";
  value: Uint8Array;
}
/**
 * ValidatorCurrentRewards represents current rewards and current
 * period for a validator kept as a running counter and incremented
 * each block as long as the validator's tokens remain constant.
 */
export interface ValidatorCurrentRewardsAmino {
  rewards: DecCoinAmino[];
  period: string;
}
export interface ValidatorCurrentRewardsAminoMsg {
  type: "cosmos-sdk/ValidatorCurrentRewards";
  value: ValidatorCurrentRewardsAmino;
}
/**
 * ValidatorCurrentRewards represents current rewards and current
 * period for a validator kept as a running counter and incremented
 * each block as long as the validator's tokens remain constant.
 */
export interface ValidatorCurrentRewardsSDKType {
  rewards: DecCoinSDKType[];
  period: Long;
}
/**
 * ValidatorAccumulatedCommission represents accumulated commission
 * for a validator kept as a running counter, can be withdrawn at any time.
 */
export interface ValidatorAccumulatedCommission {
  commission: DecCoin[];
}
export interface ValidatorAccumulatedCommissionProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission";
  value: Uint8Array;
}
/**
 * ValidatorAccumulatedCommission represents accumulated commission
 * for a validator kept as a running counter, can be withdrawn at any time.
 */
export interface ValidatorAccumulatedCommissionAmino {
  commission: DecCoinAmino[];
}
export interface ValidatorAccumulatedCommissionAminoMsg {
  type: "cosmos-sdk/ValidatorAccumulatedCommission";
  value: ValidatorAccumulatedCommissionAmino;
}
/**
 * ValidatorAccumulatedCommission represents accumulated commission
 * for a validator kept as a running counter, can be withdrawn at any time.
 */
export interface ValidatorAccumulatedCommissionSDKType {
  commission: DecCoinSDKType[];
}
/**
 * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a validator inexpensive to track, allows simple sanity checks.
 */
export interface ValidatorOutstandingRewards {
  rewards: DecCoin[];
}
export interface ValidatorOutstandingRewardsProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewards";
  value: Uint8Array;
}
/**
 * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a validator inexpensive to track, allows simple sanity checks.
 */
export interface ValidatorOutstandingRewardsAmino {
  rewards: DecCoinAmino[];
}
export interface ValidatorOutstandingRewardsAminoMsg {
  type: "cosmos-sdk/ValidatorOutstandingRewards";
  value: ValidatorOutstandingRewardsAmino;
}
/**
 * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
 * for a validator inexpensive to track, allows simple sanity checks.
 */
export interface ValidatorOutstandingRewardsSDKType {
  rewards: DecCoinSDKType[];
}
/**
 * ValidatorSlashEvent represents a validator slash event.
 * Height is implicit within the store key.
 * This is needed to calculate appropriate amount of staking tokens
 * for delegations which are withdrawn after a slash has occurred.
 */
export interface ValidatorSlashEvent {
  validatorPeriod: Long;
  fraction: string;
}
export interface ValidatorSlashEventProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvent";
  value: Uint8Array;
}
/**
 * ValidatorSlashEvent represents a validator slash event.
 * Height is implicit within the store key.
 * This is needed to calculate appropriate amount of staking tokens
 * for delegations which are withdrawn after a slash has occurred.
 */
export interface ValidatorSlashEventAmino {
  validator_period: string;
  fraction: string;
}
export interface ValidatorSlashEventAminoMsg {
  type: "cosmos-sdk/ValidatorSlashEvent";
  value: ValidatorSlashEventAmino;
}
/**
 * ValidatorSlashEvent represents a validator slash event.
 * Height is implicit within the store key.
 * This is needed to calculate appropriate amount of staking tokens
 * for delegations which are withdrawn after a slash has occurred.
 */
export interface ValidatorSlashEventSDKType {
  validator_period: Long;
  fraction: string;
}
/** ValidatorSlashEvents is a collection of ValidatorSlashEvent messages. */
export interface ValidatorSlashEvents {
  validatorSlashEvents: ValidatorSlashEvent[];
}
export interface ValidatorSlashEventsProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvents";
  value: Uint8Array;
}
/** ValidatorSlashEvents is a collection of ValidatorSlashEvent messages. */
export interface ValidatorSlashEventsAmino {
  validator_slash_events: ValidatorSlashEventAmino[];
}
export interface ValidatorSlashEventsAminoMsg {
  type: "cosmos-sdk/ValidatorSlashEvents";
  value: ValidatorSlashEventsAmino;
}
/** ValidatorSlashEvents is a collection of ValidatorSlashEvent messages. */
export interface ValidatorSlashEventsSDKType {
  validator_slash_events: ValidatorSlashEventSDKType[];
}
/** FeePool is the global fee pool for distribution. */
export interface FeePool {
  communityPool: DecCoin[];
}
export interface FeePoolProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.FeePool";
  value: Uint8Array;
}
/** FeePool is the global fee pool for distribution. */
export interface FeePoolAmino {
  community_pool: DecCoinAmino[];
}
export interface FeePoolAminoMsg {
  type: "cosmos-sdk/FeePool";
  value: FeePoolAmino;
}
/** FeePool is the global fee pool for distribution. */
export interface FeePoolSDKType {
  community_pool: DecCoinSDKType[];
}
/**
 * CommunityPoolSpendProposal details a proposal for use of community funds,
 * together with how many coins are proposed to be spent, and to which
 * recipient account.
 */
export interface CommunityPoolSpendProposal {
  title: string;
  description: string;
  recipient: string;
  amount: Coin[];
}
export interface CommunityPoolSpendProposalProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal";
  value: Uint8Array;
}
/**
 * CommunityPoolSpendProposal details a proposal for use of community funds,
 * together with how many coins are proposed to be spent, and to which
 * recipient account.
 */
export interface CommunityPoolSpendProposalAmino {
  title: string;
  description: string;
  recipient: string;
  amount: CoinAmino[];
}
export interface CommunityPoolSpendProposalAminoMsg {
  type: "cosmos-sdk/CommunityPoolSpendProposal";
  value: CommunityPoolSpendProposalAmino;
}
/**
 * CommunityPoolSpendProposal details a proposal for use of community funds,
 * together with how many coins are proposed to be spent, and to which
 * recipient account.
 */
export interface CommunityPoolSpendProposalSDKType {
  title: string;
  description: string;
  recipient: string;
  amount: CoinSDKType[];
}
/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous validator period, the delegation's amount of
 * staking token, and the creation height (to check later on if any slashes have
 * occurred). NOTE: Even though validators are slashed to whole staking tokens,
 * the delegators within the validator may be left with less than a full token,
 * thus sdk.Dec is used.
 */
export interface DelegatorStartingInfo {
  previousPeriod: Long;
  stake: string;
  height: Long;
}
export interface DelegatorStartingInfoProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfo";
  value: Uint8Array;
}
/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous validator period, the delegation's amount of
 * staking token, and the creation height (to check later on if any slashes have
 * occurred). NOTE: Even though validators are slashed to whole staking tokens,
 * the delegators within the validator may be left with less than a full token,
 * thus sdk.Dec is used.
 */
export interface DelegatorStartingInfoAmino {
  previous_period: string;
  stake: string;
  height: string;
}
export interface DelegatorStartingInfoAminoMsg {
  type: "cosmos-sdk/DelegatorStartingInfo";
  value: DelegatorStartingInfoAmino;
}
/**
 * DelegatorStartingInfo represents the starting info for a delegator reward
 * period. It tracks the previous validator period, the delegation's amount of
 * staking token, and the creation height (to check later on if any slashes have
 * occurred). NOTE: Even though validators are slashed to whole staking tokens,
 * the delegators within the validator may be left with less than a full token,
 * thus sdk.Dec is used.
 */
export interface DelegatorStartingInfoSDKType {
  previous_period: Long;
  stake: string;
  height: Long;
}
/**
 * DelegationDelegatorReward represents the properties
 * of a delegator's delegation reward.
 */
export interface DelegationDelegatorReward {
  validatorAddress: string;
  reward: DecCoin[];
}
export interface DelegationDelegatorRewardProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.DelegationDelegatorReward";
  value: Uint8Array;
}
/**
 * DelegationDelegatorReward represents the properties
 * of a delegator's delegation reward.
 */
export interface DelegationDelegatorRewardAmino {
  validator_address: string;
  reward: DecCoinAmino[];
}
export interface DelegationDelegatorRewardAminoMsg {
  type: "cosmos-sdk/DelegationDelegatorReward";
  value: DelegationDelegatorRewardAmino;
}
/**
 * DelegationDelegatorReward represents the properties
 * of a delegator's delegation reward.
 */
export interface DelegationDelegatorRewardSDKType {
  validator_address: string;
  reward: DecCoinSDKType[];
}
/**
 * CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal
 * with a deposit
 */
export interface CommunityPoolSpendProposalWithDeposit {
  title: string;
  description: string;
  recipient: string;
  amount: string;
  deposit: string;
}
export interface CommunityPoolSpendProposalWithDepositProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit";
  value: Uint8Array;
}
/**
 * CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal
 * with a deposit
 */
export interface CommunityPoolSpendProposalWithDepositAmino {
  title: string;
  description: string;
  recipient: string;
  amount: string;
  deposit: string;
}
export interface CommunityPoolSpendProposalWithDepositAminoMsg {
  type: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit";
  value: CommunityPoolSpendProposalWithDepositAmino;
}
/**
 * CommunityPoolSpendProposalWithDeposit defines a CommunityPoolSpendProposal
 * with a deposit
 */
export interface CommunityPoolSpendProposalWithDepositSDKType {
  title: string;
  description: string;
  recipient: string;
  amount: string;
  deposit: string;
}
function createBaseParams(): Params {
  return {
    communityTax: "",
    baseProposerReward: "",
    bonusProposerReward: "",
    withdrawAddrEnabled: false
  };
}
export const Params = {
  typeUrl: "/cosmos.distribution.v1beta1.Params",
  aminoType: "cosmos-sdk/Params",
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.communityTax !== "") {
      writer.uint32(10).string(message.communityTax);
    }
    if (message.baseProposerReward !== "") {
      writer.uint32(18).string(message.baseProposerReward);
    }
    if (message.bonusProposerReward !== "") {
      writer.uint32(26).string(message.bonusProposerReward);
    }
    if (message.withdrawAddrEnabled === true) {
      writer.uint32(32).bool(message.withdrawAddrEnabled);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityTax = reader.string();
          break;
        case 2:
          message.baseProposerReward = reader.string();
          break;
        case 3:
          message.bonusProposerReward = reader.string();
          break;
        case 4:
          message.withdrawAddrEnabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      communityTax: isSet(object.communityTax) ? String(object.communityTax) : "",
      baseProposerReward: isSet(object.baseProposerReward) ? String(object.baseProposerReward) : "",
      bonusProposerReward: isSet(object.bonusProposerReward) ? String(object.bonusProposerReward) : "",
      withdrawAddrEnabled: isSet(object.withdrawAddrEnabled) ? Boolean(object.withdrawAddrEnabled) : false
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.communityTax !== undefined && (obj.communityTax = message.communityTax);
    message.baseProposerReward !== undefined && (obj.baseProposerReward = message.baseProposerReward);
    message.bonusProposerReward !== undefined && (obj.bonusProposerReward = message.bonusProposerReward);
    message.withdrawAddrEnabled !== undefined && (obj.withdrawAddrEnabled = message.withdrawAddrEnabled);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.communityTax = object.communityTax ?? "";
    message.baseProposerReward = object.baseProposerReward ?? "";
    message.bonusProposerReward = object.bonusProposerReward ?? "";
    message.withdrawAddrEnabled = object.withdrawAddrEnabled ?? false;
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      communityTax: object?.community_tax,
      baseProposerReward: object?.base_proposer_reward,
      bonusProposerReward: object?.bonus_proposer_reward,
      withdrawAddrEnabled: object?.withdraw_addr_enabled
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.community_tax = message.communityTax;
    obj.base_proposer_reward = message.baseProposerReward;
    obj.bonus_proposer_reward = message.bonusProposerReward;
    obj.withdraw_addr_enabled = message.withdrawAddrEnabled;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      communityTax: object.community_tax,
      baseProposerReward: object.base_proposer_reward,
      bonusProposerReward: object.bonus_proposer_reward,
      withdrawAddrEnabled: object.withdraw_addr_enabled
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.community_tax = message.communityTax;
    obj.base_proposer_reward = message.baseProposerReward;
    obj.bonus_proposer_reward = message.bonusProposerReward;
    obj.withdraw_addr_enabled = message.withdrawAddrEnabled;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/Params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseValidatorHistoricalRewards(): ValidatorHistoricalRewards {
  return {
    cumulativeRewardRatio: [],
    referenceCount: 0
  };
}
export const ValidatorHistoricalRewards = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewards",
  aminoType: "cosmos-sdk/ValidatorHistoricalRewards",
  encode(message: ValidatorHistoricalRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.cumulativeRewardRatio) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.referenceCount !== 0) {
      writer.uint32(16).uint32(message.referenceCount);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorHistoricalRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorHistoricalRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cumulativeRewardRatio.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.referenceCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorHistoricalRewards {
    return {
      cumulativeRewardRatio: Array.isArray(object?.cumulativeRewardRatio) ? object.cumulativeRewardRatio.map((e: any) => DecCoin.fromJSON(e)) : [],
      referenceCount: isSet(object.referenceCount) ? Number(object.referenceCount) : 0
    };
  },
  toJSON(message: ValidatorHistoricalRewards): unknown {
    const obj: any = {};
    if (message.cumulativeRewardRatio) {
      obj.cumulativeRewardRatio = message.cumulativeRewardRatio.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.cumulativeRewardRatio = [];
    }
    message.referenceCount !== undefined && (obj.referenceCount = Math.round(message.referenceCount));
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorHistoricalRewards>): ValidatorHistoricalRewards {
    const message = createBaseValidatorHistoricalRewards();
    message.cumulativeRewardRatio = object.cumulativeRewardRatio?.map(e => DecCoin.fromPartial(e)) || [];
    message.referenceCount = object.referenceCount ?? 0;
    return message;
  },
  fromSDK(object: ValidatorHistoricalRewardsSDKType): ValidatorHistoricalRewards {
    return {
      cumulativeRewardRatio: Array.isArray(object?.cumulative_reward_ratio) ? object.cumulative_reward_ratio.map((e: any) => DecCoin.fromSDK(e)) : [],
      referenceCount: object?.reference_count
    };
  },
  toSDK(message: ValidatorHistoricalRewards): ValidatorHistoricalRewardsSDKType {
    const obj: any = {};
    if (message.cumulativeRewardRatio) {
      obj.cumulative_reward_ratio = message.cumulativeRewardRatio.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.cumulative_reward_ratio = [];
    }
    obj.reference_count = message.referenceCount;
    return obj;
  },
  fromAmino(object: ValidatorHistoricalRewardsAmino): ValidatorHistoricalRewards {
    return {
      cumulativeRewardRatio: Array.isArray(object?.cumulative_reward_ratio) ? object.cumulative_reward_ratio.map((e: any) => DecCoin.fromAmino(e)) : [],
      referenceCount: object.reference_count
    };
  },
  toAmino(message: ValidatorHistoricalRewards): ValidatorHistoricalRewardsAmino {
    const obj: any = {};
    if (message.cumulativeRewardRatio) {
      obj.cumulative_reward_ratio = message.cumulativeRewardRatio.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.cumulative_reward_ratio = [];
    }
    obj.reference_count = message.referenceCount;
    return obj;
  },
  fromAminoMsg(object: ValidatorHistoricalRewardsAminoMsg): ValidatorHistoricalRewards {
    return ValidatorHistoricalRewards.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorHistoricalRewards): ValidatorHistoricalRewardsAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorHistoricalRewards",
      value: ValidatorHistoricalRewards.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorHistoricalRewardsProtoMsg): ValidatorHistoricalRewards {
    return ValidatorHistoricalRewards.decode(message.value);
  },
  toProto(message: ValidatorHistoricalRewards): Uint8Array {
    return ValidatorHistoricalRewards.encode(message).finish();
  },
  toProtoMsg(message: ValidatorHistoricalRewards): ValidatorHistoricalRewardsProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorHistoricalRewards",
      value: ValidatorHistoricalRewards.encode(message).finish()
    };
  }
};
function createBaseValidatorCurrentRewards(): ValidatorCurrentRewards {
  return {
    rewards: [],
    period: Long.UZERO
  };
}
export const ValidatorCurrentRewards = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewards",
  aminoType: "cosmos-sdk/ValidatorCurrentRewards",
  encode(message: ValidatorCurrentRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.period.isZero()) {
      writer.uint32(16).uint64(message.period);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorCurrentRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorCurrentRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.period = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorCurrentRewards {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromJSON(e)) : [],
      period: isSet(object.period) ? Long.fromValue(object.period) : Long.UZERO
    };
  },
  toJSON(message: ValidatorCurrentRewards): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    message.period !== undefined && (obj.period = (message.period || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorCurrentRewards>): ValidatorCurrentRewards {
    const message = createBaseValidatorCurrentRewards();
    message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
    message.period = object.period !== undefined && object.period !== null ? Long.fromValue(object.period) : Long.UZERO;
    return message;
  },
  fromSDK(object: ValidatorCurrentRewardsSDKType): ValidatorCurrentRewards {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromSDK(e)) : [],
      period: object?.period
    };
  },
  toSDK(message: ValidatorCurrentRewards): ValidatorCurrentRewardsSDKType {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.rewards = [];
    }
    obj.period = message.period;
    return obj;
  },
  fromAmino(object: ValidatorCurrentRewardsAmino): ValidatorCurrentRewards {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromAmino(e)) : [],
      period: Long.fromString(object.period)
    };
  },
  toAmino(message: ValidatorCurrentRewards): ValidatorCurrentRewardsAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.rewards = [];
    }
    obj.period = message.period ? message.period.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorCurrentRewardsAminoMsg): ValidatorCurrentRewards {
    return ValidatorCurrentRewards.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorCurrentRewards): ValidatorCurrentRewardsAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorCurrentRewards",
      value: ValidatorCurrentRewards.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorCurrentRewardsProtoMsg): ValidatorCurrentRewards {
    return ValidatorCurrentRewards.decode(message.value);
  },
  toProto(message: ValidatorCurrentRewards): Uint8Array {
    return ValidatorCurrentRewards.encode(message).finish();
  },
  toProtoMsg(message: ValidatorCurrentRewards): ValidatorCurrentRewardsProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorCurrentRewards",
      value: ValidatorCurrentRewards.encode(message).finish()
    };
  }
};
function createBaseValidatorAccumulatedCommission(): ValidatorAccumulatedCommission {
  return {
    commission: []
  };
}
export const ValidatorAccumulatedCommission = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission",
  aminoType: "cosmos-sdk/ValidatorAccumulatedCommission",
  encode(message: ValidatorAccumulatedCommission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.commission) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorAccumulatedCommission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorAccumulatedCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorAccumulatedCommission {
    return {
      commission: Array.isArray(object?.commission) ? object.commission.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message: ValidatorAccumulatedCommission): unknown {
    const obj: any = {};
    if (message.commission) {
      obj.commission = message.commission.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.commission = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorAccumulatedCommission>): ValidatorAccumulatedCommission {
    const message = createBaseValidatorAccumulatedCommission();
    message.commission = object.commission?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ValidatorAccumulatedCommissionSDKType): ValidatorAccumulatedCommission {
    return {
      commission: Array.isArray(object?.commission) ? object.commission.map((e: any) => DecCoin.fromSDK(e)) : []
    };
  },
  toSDK(message: ValidatorAccumulatedCommission): ValidatorAccumulatedCommissionSDKType {
    const obj: any = {};
    if (message.commission) {
      obj.commission = message.commission.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.commission = [];
    }
    return obj;
  },
  fromAmino(object: ValidatorAccumulatedCommissionAmino): ValidatorAccumulatedCommission {
    return {
      commission: Array.isArray(object?.commission) ? object.commission.map((e: any) => DecCoin.fromAmino(e)) : []
    };
  },
  toAmino(message: ValidatorAccumulatedCommission): ValidatorAccumulatedCommissionAmino {
    const obj: any = {};
    if (message.commission) {
      obj.commission = message.commission.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.commission = [];
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorAccumulatedCommissionAminoMsg): ValidatorAccumulatedCommission {
    return ValidatorAccumulatedCommission.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorAccumulatedCommission): ValidatorAccumulatedCommissionAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorAccumulatedCommission",
      value: ValidatorAccumulatedCommission.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorAccumulatedCommissionProtoMsg): ValidatorAccumulatedCommission {
    return ValidatorAccumulatedCommission.decode(message.value);
  },
  toProto(message: ValidatorAccumulatedCommission): Uint8Array {
    return ValidatorAccumulatedCommission.encode(message).finish();
  },
  toProtoMsg(message: ValidatorAccumulatedCommission): ValidatorAccumulatedCommissionProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorAccumulatedCommission",
      value: ValidatorAccumulatedCommission.encode(message).finish()
    };
  }
};
function createBaseValidatorOutstandingRewards(): ValidatorOutstandingRewards {
  return {
    rewards: []
  };
}
export const ValidatorOutstandingRewards = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewards",
  aminoType: "cosmos-sdk/ValidatorOutstandingRewards",
  encode(message: ValidatorOutstandingRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorOutstandingRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorOutstandingRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorOutstandingRewards {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message: ValidatorOutstandingRewards): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorOutstandingRewards>): ValidatorOutstandingRewards {
    const message = createBaseValidatorOutstandingRewards();
    message.rewards = object.rewards?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ValidatorOutstandingRewardsSDKType): ValidatorOutstandingRewards {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromSDK(e)) : []
    };
  },
  toSDK(message: ValidatorOutstandingRewards): ValidatorOutstandingRewardsSDKType {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromAmino(object: ValidatorOutstandingRewardsAmino): ValidatorOutstandingRewards {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => DecCoin.fromAmino(e)) : []
    };
  },
  toAmino(message: ValidatorOutstandingRewards): ValidatorOutstandingRewardsAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorOutstandingRewardsAminoMsg): ValidatorOutstandingRewards {
    return ValidatorOutstandingRewards.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorOutstandingRewards): ValidatorOutstandingRewardsAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorOutstandingRewards",
      value: ValidatorOutstandingRewards.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorOutstandingRewardsProtoMsg): ValidatorOutstandingRewards {
    return ValidatorOutstandingRewards.decode(message.value);
  },
  toProto(message: ValidatorOutstandingRewards): Uint8Array {
    return ValidatorOutstandingRewards.encode(message).finish();
  },
  toProtoMsg(message: ValidatorOutstandingRewards): ValidatorOutstandingRewardsProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorOutstandingRewards",
      value: ValidatorOutstandingRewards.encode(message).finish()
    };
  }
};
function createBaseValidatorSlashEvent(): ValidatorSlashEvent {
  return {
    validatorPeriod: Long.UZERO,
    fraction: ""
  };
}
export const ValidatorSlashEvent = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvent",
  aminoType: "cosmos-sdk/ValidatorSlashEvent",
  encode(message: ValidatorSlashEvent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.validatorPeriod.isZero()) {
      writer.uint32(8).uint64(message.validatorPeriod);
    }
    if (message.fraction !== "") {
      writer.uint32(18).string(message.fraction);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSlashEvent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorPeriod = (reader.uint64() as Long);
          break;
        case 2:
          message.fraction = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSlashEvent {
    return {
      validatorPeriod: isSet(object.validatorPeriod) ? Long.fromValue(object.validatorPeriod) : Long.UZERO,
      fraction: isSet(object.fraction) ? String(object.fraction) : ""
    };
  },
  toJSON(message: ValidatorSlashEvent): unknown {
    const obj: any = {};
    message.validatorPeriod !== undefined && (obj.validatorPeriod = (message.validatorPeriod || Long.UZERO).toString());
    message.fraction !== undefined && (obj.fraction = message.fraction);
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorSlashEvent>): ValidatorSlashEvent {
    const message = createBaseValidatorSlashEvent();
    message.validatorPeriod = object.validatorPeriod !== undefined && object.validatorPeriod !== null ? Long.fromValue(object.validatorPeriod) : Long.UZERO;
    message.fraction = object.fraction ?? "";
    return message;
  },
  fromSDK(object: ValidatorSlashEventSDKType): ValidatorSlashEvent {
    return {
      validatorPeriod: object?.validator_period,
      fraction: object?.fraction
    };
  },
  toSDK(message: ValidatorSlashEvent): ValidatorSlashEventSDKType {
    const obj: any = {};
    obj.validator_period = message.validatorPeriod;
    obj.fraction = message.fraction;
    return obj;
  },
  fromAmino(object: ValidatorSlashEventAmino): ValidatorSlashEvent {
    return {
      validatorPeriod: Long.fromString(object.validator_period),
      fraction: object.fraction
    };
  },
  toAmino(message: ValidatorSlashEvent): ValidatorSlashEventAmino {
    const obj: any = {};
    obj.validator_period = message.validatorPeriod ? message.validatorPeriod.toString() : undefined;
    obj.fraction = message.fraction;
    return obj;
  },
  fromAminoMsg(object: ValidatorSlashEventAminoMsg): ValidatorSlashEvent {
    return ValidatorSlashEvent.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorSlashEvent): ValidatorSlashEventAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorSlashEvent",
      value: ValidatorSlashEvent.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorSlashEventProtoMsg): ValidatorSlashEvent {
    return ValidatorSlashEvent.decode(message.value);
  },
  toProto(message: ValidatorSlashEvent): Uint8Array {
    return ValidatorSlashEvent.encode(message).finish();
  },
  toProtoMsg(message: ValidatorSlashEvent): ValidatorSlashEventProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvent",
      value: ValidatorSlashEvent.encode(message).finish()
    };
  }
};
function createBaseValidatorSlashEvents(): ValidatorSlashEvents {
  return {
    validatorSlashEvents: []
  };
}
export const ValidatorSlashEvents = {
  typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvents",
  aminoType: "cosmos-sdk/ValidatorSlashEvents",
  encode(message: ValidatorSlashEvents, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validatorSlashEvents) {
      ValidatorSlashEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSlashEvents {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlashEvents();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorSlashEvents.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSlashEvents {
    return {
      validatorSlashEvents: Array.isArray(object?.validatorSlashEvents) ? object.validatorSlashEvents.map((e: any) => ValidatorSlashEvent.fromJSON(e)) : []
    };
  },
  toJSON(message: ValidatorSlashEvents): unknown {
    const obj: any = {};
    if (message.validatorSlashEvents) {
      obj.validatorSlashEvents = message.validatorSlashEvents.map(e => e ? ValidatorSlashEvent.toJSON(e) : undefined);
    } else {
      obj.validatorSlashEvents = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ValidatorSlashEvents>): ValidatorSlashEvents {
    const message = createBaseValidatorSlashEvents();
    message.validatorSlashEvents = object.validatorSlashEvents?.map(e => ValidatorSlashEvent.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ValidatorSlashEventsSDKType): ValidatorSlashEvents {
    return {
      validatorSlashEvents: Array.isArray(object?.validator_slash_events) ? object.validator_slash_events.map((e: any) => ValidatorSlashEvent.fromSDK(e)) : []
    };
  },
  toSDK(message: ValidatorSlashEvents): ValidatorSlashEventsSDKType {
    const obj: any = {};
    if (message.validatorSlashEvents) {
      obj.validator_slash_events = message.validatorSlashEvents.map(e => e ? ValidatorSlashEvent.toSDK(e) : undefined);
    } else {
      obj.validator_slash_events = [];
    }
    return obj;
  },
  fromAmino(object: ValidatorSlashEventsAmino): ValidatorSlashEvents {
    return {
      validatorSlashEvents: Array.isArray(object?.validator_slash_events) ? object.validator_slash_events.map((e: any) => ValidatorSlashEvent.fromAmino(e)) : []
    };
  },
  toAmino(message: ValidatorSlashEvents): ValidatorSlashEventsAmino {
    const obj: any = {};
    if (message.validatorSlashEvents) {
      obj.validator_slash_events = message.validatorSlashEvents.map(e => e ? ValidatorSlashEvent.toAmino(e) : undefined);
    } else {
      obj.validator_slash_events = [];
    }
    return obj;
  },
  fromAminoMsg(object: ValidatorSlashEventsAminoMsg): ValidatorSlashEvents {
    return ValidatorSlashEvents.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorSlashEvents): ValidatorSlashEventsAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorSlashEvents",
      value: ValidatorSlashEvents.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorSlashEventsProtoMsg): ValidatorSlashEvents {
    return ValidatorSlashEvents.decode(message.value);
  },
  toProto(message: ValidatorSlashEvents): Uint8Array {
    return ValidatorSlashEvents.encode(message).finish();
  },
  toProtoMsg(message: ValidatorSlashEvents): ValidatorSlashEventsProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.ValidatorSlashEvents",
      value: ValidatorSlashEvents.encode(message).finish()
    };
  }
};
function createBaseFeePool(): FeePool {
  return {
    communityPool: []
  };
}
export const FeePool = {
  typeUrl: "/cosmos.distribution.v1beta1.FeePool",
  aminoType: "cosmos-sdk/FeePool",
  encode(message: FeePool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.communityPool) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): FeePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityPool.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FeePool {
    return {
      communityPool: Array.isArray(object?.communityPool) ? object.communityPool.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message: FeePool): unknown {
    const obj: any = {};
    if (message.communityPool) {
      obj.communityPool = message.communityPool.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.communityPool = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<FeePool>): FeePool {
    const message = createBaseFeePool();
    message.communityPool = object.communityPool?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: FeePoolSDKType): FeePool {
    return {
      communityPool: Array.isArray(object?.community_pool) ? object.community_pool.map((e: any) => DecCoin.fromSDK(e)) : []
    };
  },
  toSDK(message: FeePool): FeePoolSDKType {
    const obj: any = {};
    if (message.communityPool) {
      obj.community_pool = message.communityPool.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.community_pool = [];
    }
    return obj;
  },
  fromAmino(object: FeePoolAmino): FeePool {
    return {
      communityPool: Array.isArray(object?.community_pool) ? object.community_pool.map((e: any) => DecCoin.fromAmino(e)) : []
    };
  },
  toAmino(message: FeePool): FeePoolAmino {
    const obj: any = {};
    if (message.communityPool) {
      obj.community_pool = message.communityPool.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.community_pool = [];
    }
    return obj;
  },
  fromAminoMsg(object: FeePoolAminoMsg): FeePool {
    return FeePool.fromAmino(object.value);
  },
  toAminoMsg(message: FeePool): FeePoolAminoMsg {
    return {
      type: "cosmos-sdk/FeePool",
      value: FeePool.toAmino(message)
    };
  },
  fromProtoMsg(message: FeePoolProtoMsg): FeePool {
    return FeePool.decode(message.value);
  },
  toProto(message: FeePool): Uint8Array {
    return FeePool.encode(message).finish();
  },
  toProtoMsg(message: FeePool): FeePoolProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.FeePool",
      value: FeePool.encode(message).finish()
    };
  }
};
function createBaseCommunityPoolSpendProposal(): CommunityPoolSpendProposal {
  return {
    title: "",
    description: "",
    recipient: "",
    amount: []
  };
}
export const CommunityPoolSpendProposal = {
  typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
  aminoType: "cosmos-sdk/CommunityPoolSpendProposal",
  encode(message: CommunityPoolSpendProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolSpendProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolSpendProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommunityPoolSpendProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: CommunityPoolSpendProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<CommunityPoolSpendProposal>): CommunityPoolSpendProposal {
    const message = createBaseCommunityPoolSpendProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: CommunityPoolSpendProposalSDKType): CommunityPoolSpendProposal {
    return {
      title: object?.title,
      description: object?.description,
      recipient: object?.recipient,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : []
    };
  },
  toSDK(message: CommunityPoolSpendProposal): CommunityPoolSpendProposalSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.recipient = message.recipient;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAmino(object: CommunityPoolSpendProposalAmino): CommunityPoolSpendProposal {
    return {
      title: object.title,
      description: object.description,
      recipient: object.recipient,
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: CommunityPoolSpendProposal): CommunityPoolSpendProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.recipient = message.recipient;
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: CommunityPoolSpendProposalAminoMsg): CommunityPoolSpendProposal {
    return CommunityPoolSpendProposal.fromAmino(object.value);
  },
  toAminoMsg(message: CommunityPoolSpendProposal): CommunityPoolSpendProposalAminoMsg {
    return {
      type: "cosmos-sdk/CommunityPoolSpendProposal",
      value: CommunityPoolSpendProposal.toAmino(message)
    };
  },
  fromProtoMsg(message: CommunityPoolSpendProposalProtoMsg): CommunityPoolSpendProposal {
    return CommunityPoolSpendProposal.decode(message.value);
  },
  toProto(message: CommunityPoolSpendProposal): Uint8Array {
    return CommunityPoolSpendProposal.encode(message).finish();
  },
  toProtoMsg(message: CommunityPoolSpendProposal): CommunityPoolSpendProposalProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
      value: CommunityPoolSpendProposal.encode(message).finish()
    };
  }
};
function createBaseDelegatorStartingInfo(): DelegatorStartingInfo {
  return {
    previousPeriod: Long.UZERO,
    stake: "",
    height: Long.UZERO
  };
}
export const DelegatorStartingInfo = {
  typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfo",
  aminoType: "cosmos-sdk/DelegatorStartingInfo",
  encode(message: DelegatorStartingInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.previousPeriod.isZero()) {
      writer.uint32(8).uint64(message.previousPeriod);
    }
    if (message.stake !== "") {
      writer.uint32(18).string(message.stake);
    }
    if (!message.height.isZero()) {
      writer.uint32(24).uint64(message.height);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorStartingInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorStartingInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.previousPeriod = (reader.uint64() as Long);
          break;
        case 2:
          message.stake = reader.string();
          break;
        case 3:
          message.height = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegatorStartingInfo {
    return {
      previousPeriod: isSet(object.previousPeriod) ? Long.fromValue(object.previousPeriod) : Long.UZERO,
      stake: isSet(object.stake) ? String(object.stake) : "",
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.UZERO
    };
  },
  toJSON(message: DelegatorStartingInfo): unknown {
    const obj: any = {};
    message.previousPeriod !== undefined && (obj.previousPeriod = (message.previousPeriod || Long.UZERO).toString());
    message.stake !== undefined && (obj.stake = message.stake);
    message.height !== undefined && (obj.height = (message.height || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<DelegatorStartingInfo>): DelegatorStartingInfo {
    const message = createBaseDelegatorStartingInfo();
    message.previousPeriod = object.previousPeriod !== undefined && object.previousPeriod !== null ? Long.fromValue(object.previousPeriod) : Long.UZERO;
    message.stake = object.stake ?? "";
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.UZERO;
    return message;
  },
  fromSDK(object: DelegatorStartingInfoSDKType): DelegatorStartingInfo {
    return {
      previousPeriod: object?.previous_period,
      stake: object?.stake,
      height: object?.height
    };
  },
  toSDK(message: DelegatorStartingInfo): DelegatorStartingInfoSDKType {
    const obj: any = {};
    obj.previous_period = message.previousPeriod;
    obj.stake = message.stake;
    obj.height = message.height;
    return obj;
  },
  fromAmino(object: DelegatorStartingInfoAmino): DelegatorStartingInfo {
    return {
      previousPeriod: Long.fromString(object.previous_period),
      stake: object.stake,
      height: Long.fromString(object.height)
    };
  },
  toAmino(message: DelegatorStartingInfo): DelegatorStartingInfoAmino {
    const obj: any = {};
    obj.previous_period = message.previousPeriod ? message.previousPeriod.toString() : undefined;
    obj.stake = message.stake;
    obj.height = message.height ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: DelegatorStartingInfoAminoMsg): DelegatorStartingInfo {
    return DelegatorStartingInfo.fromAmino(object.value);
  },
  toAminoMsg(message: DelegatorStartingInfo): DelegatorStartingInfoAminoMsg {
    return {
      type: "cosmos-sdk/DelegatorStartingInfo",
      value: DelegatorStartingInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: DelegatorStartingInfoProtoMsg): DelegatorStartingInfo {
    return DelegatorStartingInfo.decode(message.value);
  },
  toProto(message: DelegatorStartingInfo): Uint8Array {
    return DelegatorStartingInfo.encode(message).finish();
  },
  toProtoMsg(message: DelegatorStartingInfo): DelegatorStartingInfoProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.DelegatorStartingInfo",
      value: DelegatorStartingInfo.encode(message).finish()
    };
  }
};
function createBaseDelegationDelegatorReward(): DelegationDelegatorReward {
  return {
    validatorAddress: "",
    reward: []
  };
}
export const DelegationDelegatorReward = {
  typeUrl: "/cosmos.distribution.v1beta1.DelegationDelegatorReward",
  aminoType: "cosmos-sdk/DelegationDelegatorReward",
  encode(message: DelegationDelegatorReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    for (const v of message.reward) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationDelegatorReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationDelegatorReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.reward.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegationDelegatorReward {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : "",
      reward: Array.isArray(object?.reward) ? object.reward.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message: DelegationDelegatorReward): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    if (message.reward) {
      obj.reward = message.reward.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.reward = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<DelegationDelegatorReward>): DelegationDelegatorReward {
    const message = createBaseDelegationDelegatorReward();
    message.validatorAddress = object.validatorAddress ?? "";
    message.reward = object.reward?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: DelegationDelegatorRewardSDKType): DelegationDelegatorReward {
    return {
      validatorAddress: object?.validator_address,
      reward: Array.isArray(object?.reward) ? object.reward.map((e: any) => DecCoin.fromSDK(e)) : []
    };
  },
  toSDK(message: DelegationDelegatorReward): DelegationDelegatorRewardSDKType {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    if (message.reward) {
      obj.reward = message.reward.map(e => e ? DecCoin.toSDK(e) : undefined);
    } else {
      obj.reward = [];
    }
    return obj;
  },
  fromAmino(object: DelegationDelegatorRewardAmino): DelegationDelegatorReward {
    return {
      validatorAddress: object.validator_address,
      reward: Array.isArray(object?.reward) ? object.reward.map((e: any) => DecCoin.fromAmino(e)) : []
    };
  },
  toAmino(message: DelegationDelegatorReward): DelegationDelegatorRewardAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    if (message.reward) {
      obj.reward = message.reward.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.reward = [];
    }
    return obj;
  },
  fromAminoMsg(object: DelegationDelegatorRewardAminoMsg): DelegationDelegatorReward {
    return DelegationDelegatorReward.fromAmino(object.value);
  },
  toAminoMsg(message: DelegationDelegatorReward): DelegationDelegatorRewardAminoMsg {
    return {
      type: "cosmos-sdk/DelegationDelegatorReward",
      value: DelegationDelegatorReward.toAmino(message)
    };
  },
  fromProtoMsg(message: DelegationDelegatorRewardProtoMsg): DelegationDelegatorReward {
    return DelegationDelegatorReward.decode(message.value);
  },
  toProto(message: DelegationDelegatorReward): Uint8Array {
    return DelegationDelegatorReward.encode(message).finish();
  },
  toProtoMsg(message: DelegationDelegatorReward): DelegationDelegatorRewardProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.DelegationDelegatorReward",
      value: DelegationDelegatorReward.encode(message).finish()
    };
  }
};
function createBaseCommunityPoolSpendProposalWithDeposit(): CommunityPoolSpendProposalWithDeposit {
  return {
    title: "",
    description: "",
    recipient: "",
    amount: "",
    deposit: ""
  };
}
export const CommunityPoolSpendProposalWithDeposit = {
  typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
  aminoType: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit",
  encode(message: CommunityPoolSpendProposalWithDeposit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityPoolSpendProposalWithDeposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityPoolSpendProposalWithDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.deposit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommunityPoolSpendProposalWithDeposit {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  toJSON(message: CommunityPoolSpendProposalWithDeposit): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amount !== undefined && (obj.amount = message.amount);
    message.deposit !== undefined && (obj.deposit = message.deposit);
    return obj;
  },
  fromPartial(object: DeepPartial<CommunityPoolSpendProposalWithDeposit>): CommunityPoolSpendProposalWithDeposit {
    const message = createBaseCommunityPoolSpendProposalWithDeposit();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    message.deposit = object.deposit ?? "";
    return message;
  },
  fromSDK(object: CommunityPoolSpendProposalWithDepositSDKType): CommunityPoolSpendProposalWithDeposit {
    return {
      title: object?.title,
      description: object?.description,
      recipient: object?.recipient,
      amount: object?.amount,
      deposit: object?.deposit
    };
  },
  toSDK(message: CommunityPoolSpendProposalWithDeposit): CommunityPoolSpendProposalWithDepositSDKType {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.recipient = message.recipient;
    obj.amount = message.amount;
    obj.deposit = message.deposit;
    return obj;
  },
  fromAmino(object: CommunityPoolSpendProposalWithDepositAmino): CommunityPoolSpendProposalWithDeposit {
    return {
      title: object.title,
      description: object.description,
      recipient: object.recipient,
      amount: object.amount,
      deposit: object.deposit
    };
  },
  toAmino(message: CommunityPoolSpendProposalWithDeposit): CommunityPoolSpendProposalWithDepositAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.recipient = message.recipient;
    obj.amount = message.amount;
    obj.deposit = message.deposit;
    return obj;
  },
  fromAminoMsg(object: CommunityPoolSpendProposalWithDepositAminoMsg): CommunityPoolSpendProposalWithDeposit {
    return CommunityPoolSpendProposalWithDeposit.fromAmino(object.value);
  },
  toAminoMsg(message: CommunityPoolSpendProposalWithDeposit): CommunityPoolSpendProposalWithDepositAminoMsg {
    return {
      type: "cosmos-sdk/CommunityPoolSpendProposalWithDeposit",
      value: CommunityPoolSpendProposalWithDeposit.toAmino(message)
    };
  },
  fromProtoMsg(message: CommunityPoolSpendProposalWithDepositProtoMsg): CommunityPoolSpendProposalWithDeposit {
    return CommunityPoolSpendProposalWithDeposit.decode(message.value);
  },
  toProto(message: CommunityPoolSpendProposalWithDeposit): Uint8Array {
    return CommunityPoolSpendProposalWithDeposit.encode(message).finish();
  },
  toProtoMsg(message: CommunityPoolSpendProposalWithDeposit): CommunityPoolSpendProposalWithDepositProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposalWithDeposit",
      value: CommunityPoolSpendProposalWithDeposit.encode(message).finish()
    };
  }
};