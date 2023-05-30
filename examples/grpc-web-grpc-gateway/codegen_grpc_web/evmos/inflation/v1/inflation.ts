import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "evmos.inflation.v1";
/**
 * InflationDistribution defines the distribution in which inflation is
 * allocated through minting on each epoch (staking, incentives, community). It
 * excludes the team vesting distribution, as this is minted once at genesis.
 * The initial InflationDistribution can be calculated from the Evmos Token
 * Model like this:
 * mintDistribution1 = distribution1 / (1 - teamVestingDistribution)
 * 0.5333333         = 40%           / (1 - 25%)
 */
export interface InflationDistribution {
  /**
   * staking_rewards defines the proportion of the minted minted_denom that is
   * to be allocated as staking rewards
   */
  stakingRewards: string;
  /**
   * usage_incentives defines the proportion of the minted minted_denom that is
   * to be allocated to the incentives module address
   */
  usageIncentives: string;
  /**
   * community_pool defines the proportion of the minted minted_denom that is to
   * be allocated to the community pool
   */
  communityPool: string;
}
export interface InflationDistributionProtoMsg {
  typeUrl: "/evmos.inflation.v1.InflationDistribution";
  value: Uint8Array;
}
/**
 * InflationDistribution defines the distribution in which inflation is
 * allocated through minting on each epoch (staking, incentives, community). It
 * excludes the team vesting distribution, as this is minted once at genesis.
 * The initial InflationDistribution can be calculated from the Evmos Token
 * Model like this:
 * mintDistribution1 = distribution1 / (1 - teamVestingDistribution)
 * 0.5333333         = 40%           / (1 - 25%)
 */
export interface InflationDistributionAmino {
  /**
   * staking_rewards defines the proportion of the minted minted_denom that is
   * to be allocated as staking rewards
   */
  staking_rewards: string;
  /**
   * usage_incentives defines the proportion of the minted minted_denom that is
   * to be allocated to the incentives module address
   */
  usage_incentives: string;
  /**
   * community_pool defines the proportion of the minted minted_denom that is to
   * be allocated to the community pool
   */
  community_pool: string;
}
export interface InflationDistributionAminoMsg {
  type: "/evmos.inflation.v1.InflationDistribution";
  value: InflationDistributionAmino;
}
/**
 * InflationDistribution defines the distribution in which inflation is
 * allocated through minting on each epoch (staking, incentives, community). It
 * excludes the team vesting distribution, as this is minted once at genesis.
 * The initial InflationDistribution can be calculated from the Evmos Token
 * Model like this:
 * mintDistribution1 = distribution1 / (1 - teamVestingDistribution)
 * 0.5333333         = 40%           / (1 - 25%)
 */
export interface InflationDistributionSDKType {
  staking_rewards: string;
  usage_incentives: string;
  community_pool: string;
}
/**
 * ExponentialCalculation holds factors to calculate exponential inflation on
 * each period. Calculation reference:
 * periodProvision = exponentialDecay       *  bondingIncentive
 * f(x)            = (a * (1 - r) ^ x + c)  *  (1 + max_variance - bondedRatio *
 * (max_variance / bonding_target))
 */
export interface ExponentialCalculation {
  /** initial value */
  a: string;
  /** reduction factor */
  r: string;
  /** long term inflation */
  c: string;
  /** bonding target */
  bondingTarget: string;
  /** max variance */
  maxVariance: string;
}
export interface ExponentialCalculationProtoMsg {
  typeUrl: "/evmos.inflation.v1.ExponentialCalculation";
  value: Uint8Array;
}
/**
 * ExponentialCalculation holds factors to calculate exponential inflation on
 * each period. Calculation reference:
 * periodProvision = exponentialDecay       *  bondingIncentive
 * f(x)            = (a * (1 - r) ^ x + c)  *  (1 + max_variance - bondedRatio *
 * (max_variance / bonding_target))
 */
export interface ExponentialCalculationAmino {
  /** initial value */
  a: string;
  /** reduction factor */
  r: string;
  /** long term inflation */
  c: string;
  /** bonding target */
  bonding_target: string;
  /** max variance */
  max_variance: string;
}
export interface ExponentialCalculationAminoMsg {
  type: "/evmos.inflation.v1.ExponentialCalculation";
  value: ExponentialCalculationAmino;
}
/**
 * ExponentialCalculation holds factors to calculate exponential inflation on
 * each period. Calculation reference:
 * periodProvision = exponentialDecay       *  bondingIncentive
 * f(x)            = (a * (1 - r) ^ x + c)  *  (1 + max_variance - bondedRatio *
 * (max_variance / bonding_target))
 */
export interface ExponentialCalculationSDKType {
  a: string;
  r: string;
  c: string;
  bonding_target: string;
  max_variance: string;
}
function createBaseInflationDistribution(): InflationDistribution {
  return {
    stakingRewards: "",
    usageIncentives: "",
    communityPool: ""
  };
}
export const InflationDistribution = {
  typeUrl: "/evmos.inflation.v1.InflationDistribution",
  encode(message: InflationDistribution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stakingRewards !== "") {
      writer.uint32(10).string(message.stakingRewards);
    }
    if (message.usageIncentives !== "") {
      writer.uint32(18).string(message.usageIncentives);
    }
    if (message.communityPool !== "") {
      writer.uint32(26).string(message.communityPool);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): InflationDistribution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInflationDistribution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakingRewards = reader.string();
          break;
        case 2:
          message.usageIncentives = reader.string();
          break;
        case 3:
          message.communityPool = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InflationDistribution {
    return {
      stakingRewards: isSet(object.stakingRewards) ? String(object.stakingRewards) : "",
      usageIncentives: isSet(object.usageIncentives) ? String(object.usageIncentives) : "",
      communityPool: isSet(object.communityPool) ? String(object.communityPool) : ""
    };
  },
  toJSON(message: InflationDistribution): unknown {
    const obj: any = {};
    message.stakingRewards !== undefined && (obj.stakingRewards = message.stakingRewards);
    message.usageIncentives !== undefined && (obj.usageIncentives = message.usageIncentives);
    message.communityPool !== undefined && (obj.communityPool = message.communityPool);
    return obj;
  },
  fromPartial(object: DeepPartial<InflationDistribution>): InflationDistribution {
    const message = createBaseInflationDistribution();
    message.stakingRewards = object.stakingRewards ?? "";
    message.usageIncentives = object.usageIncentives ?? "";
    message.communityPool = object.communityPool ?? "";
    return message;
  },
  fromSDK(object: InflationDistributionSDKType): InflationDistribution {
    return {
      stakingRewards: object?.staking_rewards,
      usageIncentives: object?.usage_incentives,
      communityPool: object?.community_pool
    };
  },
  toSDK(message: InflationDistribution): InflationDistributionSDKType {
    const obj: any = {};
    obj.staking_rewards = message.stakingRewards;
    obj.usage_incentives = message.usageIncentives;
    obj.community_pool = message.communityPool;
    return obj;
  },
  fromAmino(object: InflationDistributionAmino): InflationDistribution {
    return {
      stakingRewards: object.staking_rewards,
      usageIncentives: object.usage_incentives,
      communityPool: object.community_pool
    };
  },
  toAmino(message: InflationDistribution): InflationDistributionAmino {
    const obj: any = {};
    obj.staking_rewards = message.stakingRewards;
    obj.usage_incentives = message.usageIncentives;
    obj.community_pool = message.communityPool;
    return obj;
  },
  fromAminoMsg(object: InflationDistributionAminoMsg): InflationDistribution {
    return InflationDistribution.fromAmino(object.value);
  },
  fromProtoMsg(message: InflationDistributionProtoMsg): InflationDistribution {
    return InflationDistribution.decode(message.value);
  },
  toProto(message: InflationDistribution): Uint8Array {
    return InflationDistribution.encode(message).finish();
  },
  toProtoMsg(message: InflationDistribution): InflationDistributionProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.InflationDistribution",
      value: InflationDistribution.encode(message).finish()
    };
  }
};
function createBaseExponentialCalculation(): ExponentialCalculation {
  return {
    a: "",
    r: "",
    c: "",
    bondingTarget: "",
    maxVariance: ""
  };
}
export const ExponentialCalculation = {
  typeUrl: "/evmos.inflation.v1.ExponentialCalculation",
  encode(message: ExponentialCalculation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.a !== "") {
      writer.uint32(10).string(message.a);
    }
    if (message.r !== "") {
      writer.uint32(18).string(message.r);
    }
    if (message.c !== "") {
      writer.uint32(26).string(message.c);
    }
    if (message.bondingTarget !== "") {
      writer.uint32(34).string(message.bondingTarget);
    }
    if (message.maxVariance !== "") {
      writer.uint32(42).string(message.maxVariance);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ExponentialCalculation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExponentialCalculation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.a = reader.string();
          break;
        case 2:
          message.r = reader.string();
          break;
        case 3:
          message.c = reader.string();
          break;
        case 4:
          message.bondingTarget = reader.string();
          break;
        case 5:
          message.maxVariance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExponentialCalculation {
    return {
      a: isSet(object.a) ? String(object.a) : "",
      r: isSet(object.r) ? String(object.r) : "",
      c: isSet(object.c) ? String(object.c) : "",
      bondingTarget: isSet(object.bondingTarget) ? String(object.bondingTarget) : "",
      maxVariance: isSet(object.maxVariance) ? String(object.maxVariance) : ""
    };
  },
  toJSON(message: ExponentialCalculation): unknown {
    const obj: any = {};
    message.a !== undefined && (obj.a = message.a);
    message.r !== undefined && (obj.r = message.r);
    message.c !== undefined && (obj.c = message.c);
    message.bondingTarget !== undefined && (obj.bondingTarget = message.bondingTarget);
    message.maxVariance !== undefined && (obj.maxVariance = message.maxVariance);
    return obj;
  },
  fromPartial(object: DeepPartial<ExponentialCalculation>): ExponentialCalculation {
    const message = createBaseExponentialCalculation();
    message.a = object.a ?? "";
    message.r = object.r ?? "";
    message.c = object.c ?? "";
    message.bondingTarget = object.bondingTarget ?? "";
    message.maxVariance = object.maxVariance ?? "";
    return message;
  },
  fromSDK(object: ExponentialCalculationSDKType): ExponentialCalculation {
    return {
      a: object?.a,
      r: object?.r,
      c: object?.c,
      bondingTarget: object?.bonding_target,
      maxVariance: object?.max_variance
    };
  },
  toSDK(message: ExponentialCalculation): ExponentialCalculationSDKType {
    const obj: any = {};
    obj.a = message.a;
    obj.r = message.r;
    obj.c = message.c;
    obj.bonding_target = message.bondingTarget;
    obj.max_variance = message.maxVariance;
    return obj;
  },
  fromAmino(object: ExponentialCalculationAmino): ExponentialCalculation {
    return {
      a: object.a,
      r: object.r,
      c: object.c,
      bondingTarget: object.bonding_target,
      maxVariance: object.max_variance
    };
  },
  toAmino(message: ExponentialCalculation): ExponentialCalculationAmino {
    const obj: any = {};
    obj.a = message.a;
    obj.r = message.r;
    obj.c = message.c;
    obj.bonding_target = message.bondingTarget;
    obj.max_variance = message.maxVariance;
    return obj;
  },
  fromAminoMsg(object: ExponentialCalculationAminoMsg): ExponentialCalculation {
    return ExponentialCalculation.fromAmino(object.value);
  },
  fromProtoMsg(message: ExponentialCalculationProtoMsg): ExponentialCalculation {
    return ExponentialCalculation.decode(message.value);
  },
  toProto(message: ExponentialCalculation): Uint8Array {
    return ExponentialCalculation.encode(message).finish();
  },
  toProtoMsg(message: ExponentialCalculation): ExponentialCalculationProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.ExponentialCalculation",
      value: ExponentialCalculation.encode(message).finish()
    };
  }
};