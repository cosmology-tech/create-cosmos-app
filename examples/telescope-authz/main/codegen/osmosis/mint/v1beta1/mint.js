"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.DistributionProportions = exports.WeightedAddress = exports.Minter = void 0;
const binary_1 = require("../../../binary");
const math_1 = require("@cosmjs/math");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseMinter() {
    return {
        epochProvisions: ""
    };
}
exports.Minter = {
    typeUrl: "/osmosis.mint.v1beta1.Minter",
    aminoType: "osmosis/mint/minter",
    is(o) {
        return o && (o.$typeUrl === exports.Minter.typeUrl || typeof o.epochProvisions === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Minter.typeUrl || typeof o.epoch_provisions === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Minter.typeUrl || typeof o.epoch_provisions === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.epochProvisions !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.epochProvisions, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMinter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochProvisions = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            epochProvisions: (0, helpers_1.isSet)(object.epochProvisions) ? String(object.epochProvisions) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochProvisions !== undefined && (obj.epochProvisions = message.epochProvisions);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMinter();
        message.epochProvisions = object.epochProvisions ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            epochProvisions: object?.epoch_provisions
        };
    },
    toSDK(message) {
        const obj = {};
        obj.epoch_provisions = message.epochProvisions;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMinter();
        if (object.epoch_provisions !== undefined && object.epoch_provisions !== null) {
            message.epochProvisions = object.epoch_provisions;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.epoch_provisions = message.epochProvisions;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Minter.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/mint/minter",
            value: exports.Minter.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Minter.decode(message.value);
    },
    toProto(message) {
        return exports.Minter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.mint.v1beta1.Minter",
            value: exports.Minter.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Minter.typeUrl, exports.Minter);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Minter.aminoType, exports.Minter.typeUrl);
function createBaseWeightedAddress() {
    return {
        address: "",
        weight: ""
    };
}
exports.WeightedAddress = {
    typeUrl: "/osmosis.mint.v1beta1.WeightedAddress",
    aminoType: "osmosis/mint/weighted-address",
    is(o) {
        return o && (o.$typeUrl === exports.WeightedAddress.typeUrl || typeof o.address === "string" && typeof o.weight === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.WeightedAddress.typeUrl || typeof o.address === "string" && typeof o.weight === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.WeightedAddress.typeUrl || typeof o.address === "string" && typeof o.weight === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.weight, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWeightedAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.weight = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            weight: (0, helpers_1.isSet)(object.weight) ? String(object.weight) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.weight !== undefined && (obj.weight = message.weight);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseWeightedAddress();
        message.address = object.address ?? "";
        message.weight = object.weight ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            weight: object?.weight
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        obj.weight = message.weight;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseWeightedAddress();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.weight !== undefined && object.weight !== null) {
            message.weight = object.weight;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.weight = message.weight;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.WeightedAddress.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/mint/weighted-address",
            value: exports.WeightedAddress.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.WeightedAddress.decode(message.value);
    },
    toProto(message) {
        return exports.WeightedAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.mint.v1beta1.WeightedAddress",
            value: exports.WeightedAddress.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.WeightedAddress.typeUrl, exports.WeightedAddress);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.WeightedAddress.aminoType, exports.WeightedAddress.typeUrl);
function createBaseDistributionProportions() {
    return {
        staking: "",
        poolIncentives: "",
        developerRewards: "",
        communityPool: ""
    };
}
exports.DistributionProportions = {
    typeUrl: "/osmosis.mint.v1beta1.DistributionProportions",
    aminoType: "osmosis/mint/distribution-proportions",
    is(o) {
        return o && (o.$typeUrl === exports.DistributionProportions.typeUrl || typeof o.staking === "string" && typeof o.poolIncentives === "string" && typeof o.developerRewards === "string" && typeof o.communityPool === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.DistributionProportions.typeUrl || typeof o.staking === "string" && typeof o.pool_incentives === "string" && typeof o.developer_rewards === "string" && typeof o.community_pool === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.DistributionProportions.typeUrl || typeof o.staking === "string" && typeof o.pool_incentives === "string" && typeof o.developer_rewards === "string" && typeof o.community_pool === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.staking !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.staking, 18).atomics);
        }
        if (message.poolIncentives !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.poolIncentives, 18).atomics);
        }
        if (message.developerRewards !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.developerRewards, 18).atomics);
        }
        if (message.communityPool !== "") {
            writer.uint32(34).string(math_1.Decimal.fromUserInput(message.communityPool, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDistributionProportions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.staking = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.poolIncentives = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.developerRewards = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.communityPool = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            staking: (0, helpers_1.isSet)(object.staking) ? String(object.staking) : "",
            poolIncentives: (0, helpers_1.isSet)(object.poolIncentives) ? String(object.poolIncentives) : "",
            developerRewards: (0, helpers_1.isSet)(object.developerRewards) ? String(object.developerRewards) : "",
            communityPool: (0, helpers_1.isSet)(object.communityPool) ? String(object.communityPool) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.staking !== undefined && (obj.staking = message.staking);
        message.poolIncentives !== undefined && (obj.poolIncentives = message.poolIncentives);
        message.developerRewards !== undefined && (obj.developerRewards = message.developerRewards);
        message.communityPool !== undefined && (obj.communityPool = message.communityPool);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDistributionProportions();
        message.staking = object.staking ?? "";
        message.poolIncentives = object.poolIncentives ?? "";
        message.developerRewards = object.developerRewards ?? "";
        message.communityPool = object.communityPool ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            staking: object?.staking,
            poolIncentives: object?.pool_incentives,
            developerRewards: object?.developer_rewards,
            communityPool: object?.community_pool
        };
    },
    toSDK(message) {
        const obj = {};
        obj.staking = message.staking;
        obj.pool_incentives = message.poolIncentives;
        obj.developer_rewards = message.developerRewards;
        obj.community_pool = message.communityPool;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseDistributionProportions();
        if (object.staking !== undefined && object.staking !== null) {
            message.staking = object.staking;
        }
        if (object.pool_incentives !== undefined && object.pool_incentives !== null) {
            message.poolIncentives = object.pool_incentives;
        }
        if (object.developer_rewards !== undefined && object.developer_rewards !== null) {
            message.developerRewards = object.developer_rewards;
        }
        if (object.community_pool !== undefined && object.community_pool !== null) {
            message.communityPool = object.community_pool;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.staking = message.staking;
        obj.pool_incentives = message.poolIncentives;
        obj.developer_rewards = message.developerRewards;
        obj.community_pool = message.communityPool;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DistributionProportions.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/mint/distribution-proportions",
            value: exports.DistributionProportions.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DistributionProportions.decode(message.value);
    },
    toProto(message) {
        return exports.DistributionProportions.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.mint.v1beta1.DistributionProportions",
            value: exports.DistributionProportions.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.DistributionProportions.typeUrl, exports.DistributionProportions);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.DistributionProportions.aminoType, exports.DistributionProportions.typeUrl);
function createBaseParams() {
    return {
        mintDenom: "",
        genesisEpochProvisions: "",
        epochIdentifier: "",
        reductionPeriodInEpochs: BigInt(0),
        reductionFactor: "",
        distributionProportions: exports.DistributionProportions.fromPartial({}),
        weightedDeveloperRewardsReceivers: [],
        mintingRewardsDistributionStartEpoch: BigInt(0)
    };
}
exports.Params = {
    typeUrl: "/osmosis.mint.v1beta1.Params",
    aminoType: "osmosis/mint/params",
    is(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.mintDenom === "string" && typeof o.genesisEpochProvisions === "string" && typeof o.epochIdentifier === "string" && typeof o.reductionPeriodInEpochs === "bigint" && typeof o.reductionFactor === "string" && exports.DistributionProportions.is(o.distributionProportions) && Array.isArray(o.weightedDeveloperRewardsReceivers) && (!o.weightedDeveloperRewardsReceivers.length || exports.WeightedAddress.is(o.weightedDeveloperRewardsReceivers[0])) && typeof o.mintingRewardsDistributionStartEpoch === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.mint_denom === "string" && typeof o.genesis_epoch_provisions === "string" && typeof o.epoch_identifier === "string" && typeof o.reduction_period_in_epochs === "bigint" && typeof o.reduction_factor === "string" && exports.DistributionProportions.isSDK(o.distribution_proportions) && Array.isArray(o.weighted_developer_rewards_receivers) && (!o.weighted_developer_rewards_receivers.length || exports.WeightedAddress.isSDK(o.weighted_developer_rewards_receivers[0])) && typeof o.minting_rewards_distribution_start_epoch === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || typeof o.mint_denom === "string" && typeof o.genesis_epoch_provisions === "string" && typeof o.epoch_identifier === "string" && typeof o.reduction_period_in_epochs === "bigint" && typeof o.reduction_factor === "string" && exports.DistributionProportions.isAmino(o.distribution_proportions) && Array.isArray(o.weighted_developer_rewards_receivers) && (!o.weighted_developer_rewards_receivers.length || exports.WeightedAddress.isAmino(o.weighted_developer_rewards_receivers[0])) && typeof o.minting_rewards_distribution_start_epoch === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.mintDenom !== "") {
            writer.uint32(10).string(message.mintDenom);
        }
        if (message.genesisEpochProvisions !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.genesisEpochProvisions, 18).atomics);
        }
        if (message.epochIdentifier !== "") {
            writer.uint32(26).string(message.epochIdentifier);
        }
        if (message.reductionPeriodInEpochs !== BigInt(0)) {
            writer.uint32(32).int64(message.reductionPeriodInEpochs);
        }
        if (message.reductionFactor !== "") {
            writer.uint32(42).string(math_1.Decimal.fromUserInput(message.reductionFactor, 18).atomics);
        }
        if (message.distributionProportions !== undefined) {
            exports.DistributionProportions.encode(message.distributionProportions, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.weightedDeveloperRewardsReceivers) {
            exports.WeightedAddress.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.mintingRewardsDistributionStartEpoch !== BigInt(0)) {
            writer.uint32(64).int64(message.mintingRewardsDistributionStartEpoch);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mintDenom = reader.string();
                    break;
                case 2:
                    message.genesisEpochProvisions = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.epochIdentifier = reader.string();
                    break;
                case 4:
                    message.reductionPeriodInEpochs = reader.int64();
                    break;
                case 5:
                    message.reductionFactor = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 6:
                    message.distributionProportions = exports.DistributionProportions.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.weightedDeveloperRewardsReceivers.push(exports.WeightedAddress.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.mintingRewardsDistributionStartEpoch = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            mintDenom: (0, helpers_1.isSet)(object.mintDenom) ? String(object.mintDenom) : "",
            genesisEpochProvisions: (0, helpers_1.isSet)(object.genesisEpochProvisions) ? String(object.genesisEpochProvisions) : "",
            epochIdentifier: (0, helpers_1.isSet)(object.epochIdentifier) ? String(object.epochIdentifier) : "",
            reductionPeriodInEpochs: (0, helpers_1.isSet)(object.reductionPeriodInEpochs) ? BigInt(object.reductionPeriodInEpochs.toString()) : BigInt(0),
            reductionFactor: (0, helpers_1.isSet)(object.reductionFactor) ? String(object.reductionFactor) : "",
            distributionProportions: (0, helpers_1.isSet)(object.distributionProportions) ? exports.DistributionProportions.fromJSON(object.distributionProportions) : undefined,
            weightedDeveloperRewardsReceivers: Array.isArray(object?.weightedDeveloperRewardsReceivers) ? object.weightedDeveloperRewardsReceivers.map((e) => exports.WeightedAddress.fromJSON(e)) : [],
            mintingRewardsDistributionStartEpoch: (0, helpers_1.isSet)(object.mintingRewardsDistributionStartEpoch) ? BigInt(object.mintingRewardsDistributionStartEpoch.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
        message.genesisEpochProvisions !== undefined && (obj.genesisEpochProvisions = message.genesisEpochProvisions);
        message.epochIdentifier !== undefined && (obj.epochIdentifier = message.epochIdentifier);
        message.reductionPeriodInEpochs !== undefined && (obj.reductionPeriodInEpochs = (message.reductionPeriodInEpochs || BigInt(0)).toString());
        message.reductionFactor !== undefined && (obj.reductionFactor = message.reductionFactor);
        message.distributionProportions !== undefined && (obj.distributionProportions = message.distributionProportions ? exports.DistributionProportions.toJSON(message.distributionProportions) : undefined);
        if (message.weightedDeveloperRewardsReceivers) {
            obj.weightedDeveloperRewardsReceivers = message.weightedDeveloperRewardsReceivers.map(e => e ? exports.WeightedAddress.toJSON(e) : undefined);
        }
        else {
            obj.weightedDeveloperRewardsReceivers = [];
        }
        message.mintingRewardsDistributionStartEpoch !== undefined && (obj.mintingRewardsDistributionStartEpoch = (message.mintingRewardsDistributionStartEpoch || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.mintDenom = object.mintDenom ?? "";
        message.genesisEpochProvisions = object.genesisEpochProvisions ?? "";
        message.epochIdentifier = object.epochIdentifier ?? "";
        message.reductionPeriodInEpochs = object.reductionPeriodInEpochs !== undefined && object.reductionPeriodInEpochs !== null ? BigInt(object.reductionPeriodInEpochs.toString()) : BigInt(0);
        message.reductionFactor = object.reductionFactor ?? "";
        message.distributionProportions = object.distributionProportions !== undefined && object.distributionProportions !== null ? exports.DistributionProportions.fromPartial(object.distributionProportions) : undefined;
        message.weightedDeveloperRewardsReceivers = object.weightedDeveloperRewardsReceivers?.map(e => exports.WeightedAddress.fromPartial(e)) || [];
        message.mintingRewardsDistributionStartEpoch = object.mintingRewardsDistributionStartEpoch !== undefined && object.mintingRewardsDistributionStartEpoch !== null ? BigInt(object.mintingRewardsDistributionStartEpoch.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            mintDenom: object?.mint_denom,
            genesisEpochProvisions: object?.genesis_epoch_provisions,
            epochIdentifier: object?.epoch_identifier,
            reductionPeriodInEpochs: object?.reduction_period_in_epochs,
            reductionFactor: object?.reduction_factor,
            distributionProportions: object.distribution_proportions ? exports.DistributionProportions.fromSDK(object.distribution_proportions) : undefined,
            weightedDeveloperRewardsReceivers: Array.isArray(object?.weighted_developer_rewards_receivers) ? object.weighted_developer_rewards_receivers.map((e) => exports.WeightedAddress.fromSDK(e)) : [],
            mintingRewardsDistributionStartEpoch: object?.minting_rewards_distribution_start_epoch
        };
    },
    toSDK(message) {
        const obj = {};
        obj.mint_denom = message.mintDenom;
        obj.genesis_epoch_provisions = message.genesisEpochProvisions;
        obj.epoch_identifier = message.epochIdentifier;
        obj.reduction_period_in_epochs = message.reductionPeriodInEpochs;
        obj.reduction_factor = message.reductionFactor;
        message.distributionProportions !== undefined && (obj.distribution_proportions = message.distributionProportions ? exports.DistributionProportions.toSDK(message.distributionProportions) : undefined);
        if (message.weightedDeveloperRewardsReceivers) {
            obj.weighted_developer_rewards_receivers = message.weightedDeveloperRewardsReceivers.map(e => e ? exports.WeightedAddress.toSDK(e) : undefined);
        }
        else {
            obj.weighted_developer_rewards_receivers = [];
        }
        obj.minting_rewards_distribution_start_epoch = message.mintingRewardsDistributionStartEpoch;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.mint_denom !== undefined && object.mint_denom !== null) {
            message.mintDenom = object.mint_denom;
        }
        if (object.genesis_epoch_provisions !== undefined && object.genesis_epoch_provisions !== null) {
            message.genesisEpochProvisions = object.genesis_epoch_provisions;
        }
        if (object.epoch_identifier !== undefined && object.epoch_identifier !== null) {
            message.epochIdentifier = object.epoch_identifier;
        }
        if (object.reduction_period_in_epochs !== undefined && object.reduction_period_in_epochs !== null) {
            message.reductionPeriodInEpochs = BigInt(object.reduction_period_in_epochs);
        }
        if (object.reduction_factor !== undefined && object.reduction_factor !== null) {
            message.reductionFactor = object.reduction_factor;
        }
        if (object.distribution_proportions !== undefined && object.distribution_proportions !== null) {
            message.distributionProportions = exports.DistributionProportions.fromAmino(object.distribution_proportions);
        }
        message.weightedDeveloperRewardsReceivers = object.weighted_developer_rewards_receivers?.map(e => exports.WeightedAddress.fromAmino(e)) || [];
        if (object.minting_rewards_distribution_start_epoch !== undefined && object.minting_rewards_distribution_start_epoch !== null) {
            message.mintingRewardsDistributionStartEpoch = BigInt(object.minting_rewards_distribution_start_epoch);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.mint_denom = message.mintDenom;
        obj.genesis_epoch_provisions = message.genesisEpochProvisions;
        obj.epoch_identifier = message.epochIdentifier;
        obj.reduction_period_in_epochs = message.reductionPeriodInEpochs ? message.reductionPeriodInEpochs.toString() : undefined;
        obj.reduction_factor = message.reductionFactor;
        obj.distribution_proportions = message.distributionProportions ? exports.DistributionProportions.toAmino(message.distributionProportions) : undefined;
        if (message.weightedDeveloperRewardsReceivers) {
            obj.weighted_developer_rewards_receivers = message.weightedDeveloperRewardsReceivers.map(e => e ? exports.WeightedAddress.toAmino(e) : undefined);
        }
        else {
            obj.weighted_developer_rewards_receivers = [];
        }
        obj.minting_rewards_distribution_start_epoch = message.mintingRewardsDistributionStartEpoch ? message.mintingRewardsDistributionStartEpoch.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/mint/params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.mint.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
