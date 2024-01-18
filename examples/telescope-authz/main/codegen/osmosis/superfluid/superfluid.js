"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnpoolWhitelistedPools = exports.LockIdIntermediaryAccountConnection = exports.SuperfluidDelegationRecord = exports.OsmoEquivalentMultiplierRecord = exports.SuperfluidIntermediaryAccount = exports.SuperfluidAsset = exports.superfluidAssetTypeToJSON = exports.superfluidAssetTypeFromJSON = exports.SuperfluidAssetTypeAmino = exports.SuperfluidAssetTypeSDKType = exports.SuperfluidAssetType = void 0;
const coin_1 = require("../../cosmos/base/v1beta1/coin");
const helpers_1 = require("../../helpers");
const binary_1 = require("../../binary");
const registry_1 = require("../../registry");
const math_1 = require("@cosmjs/math");
/**
 * SuperfluidAssetType indicates whether the superfluid asset is
 * a native token itself or the lp share of a pool.
 */
var SuperfluidAssetType;
(function (SuperfluidAssetType) {
    SuperfluidAssetType[SuperfluidAssetType["SuperfluidAssetTypeNative"] = 0] = "SuperfluidAssetTypeNative";
    SuperfluidAssetType[SuperfluidAssetType["SuperfluidAssetTypeLPShare"] = 1] = "SuperfluidAssetTypeLPShare";
    SuperfluidAssetType[SuperfluidAssetType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SuperfluidAssetType || (exports.SuperfluidAssetType = SuperfluidAssetType = {}));
exports.SuperfluidAssetTypeSDKType = SuperfluidAssetType;
exports.SuperfluidAssetTypeAmino = SuperfluidAssetType;
function superfluidAssetTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SuperfluidAssetTypeNative":
            return SuperfluidAssetType.SuperfluidAssetTypeNative;
        case 1:
        case "SuperfluidAssetTypeLPShare":
            return SuperfluidAssetType.SuperfluidAssetTypeLPShare;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SuperfluidAssetType.UNRECOGNIZED;
    }
}
exports.superfluidAssetTypeFromJSON = superfluidAssetTypeFromJSON;
function superfluidAssetTypeToJSON(object) {
    switch (object) {
        case SuperfluidAssetType.SuperfluidAssetTypeNative:
            return "SuperfluidAssetTypeNative";
        case SuperfluidAssetType.SuperfluidAssetTypeLPShare:
            return "SuperfluidAssetTypeLPShare";
        case SuperfluidAssetType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.superfluidAssetTypeToJSON = superfluidAssetTypeToJSON;
function createBaseSuperfluidAsset() {
    return {
        denom: "",
        assetType: 0
    };
}
exports.SuperfluidAsset = {
    typeUrl: "/osmosis.superfluid.SuperfluidAsset",
    aminoType: "osmosis/superfluid-asset",
    is(o) {
        return o && (o.$typeUrl === exports.SuperfluidAsset.typeUrl || typeof o.denom === "string" && (0, helpers_1.isSet)(o.assetType));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SuperfluidAsset.typeUrl || typeof o.denom === "string" && (0, helpers_1.isSet)(o.asset_type));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SuperfluidAsset.typeUrl || typeof o.denom === "string" && (0, helpers_1.isSet)(o.asset_type));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.assetType !== 0) {
            writer.uint32(16).int32(message.assetType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidAsset();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.assetType = reader.int32();
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
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : "",
            assetType: (0, helpers_1.isSet)(object.assetType) ? superfluidAssetTypeFromJSON(object.assetType) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.assetType !== undefined && (obj.assetType = superfluidAssetTypeToJSON(message.assetType));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidAsset();
        message.denom = object.denom ?? "";
        message.assetType = object.assetType ?? 0;
        return message;
    },
    fromSDK(object) {
        return {
            denom: object?.denom,
            assetType: (0, helpers_1.isSet)(object.asset_type) ? superfluidAssetTypeFromJSON(object.asset_type) : -1
        };
    },
    toSDK(message) {
        const obj = {};
        obj.denom = message.denom;
        message.assetType !== undefined && (obj.asset_type = superfluidAssetTypeToJSON(message.assetType));
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSuperfluidAsset();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.asset_type !== undefined && object.asset_type !== null) {
            message.assetType = superfluidAssetTypeFromJSON(object.asset_type);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.asset_type = superfluidAssetTypeToJSON(message.assetType);
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SuperfluidAsset.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-asset",
            value: exports.SuperfluidAsset.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SuperfluidAsset.decode(message.value);
    },
    toProto(message) {
        return exports.SuperfluidAsset.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidAsset",
            value: exports.SuperfluidAsset.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SuperfluidAsset.typeUrl, exports.SuperfluidAsset);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SuperfluidAsset.aminoType, exports.SuperfluidAsset.typeUrl);
function createBaseSuperfluidIntermediaryAccount() {
    return {
        denom: "",
        valAddr: "",
        gaugeId: BigInt(0)
    };
}
exports.SuperfluidIntermediaryAccount = {
    typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccount",
    aminoType: "osmosis/superfluid-intermediary-account",
    is(o) {
        return o && (o.$typeUrl === exports.SuperfluidIntermediaryAccount.typeUrl || typeof o.denom === "string" && typeof o.valAddr === "string" && typeof o.gaugeId === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SuperfluidIntermediaryAccount.typeUrl || typeof o.denom === "string" && typeof o.val_addr === "string" && typeof o.gauge_id === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SuperfluidIntermediaryAccount.typeUrl || typeof o.denom === "string" && typeof o.val_addr === "string" && typeof o.gauge_id === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        if (message.valAddr !== "") {
            writer.uint32(18).string(message.valAddr);
        }
        if (message.gaugeId !== BigInt(0)) {
            writer.uint32(24).uint64(message.gaugeId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidIntermediaryAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
                    break;
                case 2:
                    message.valAddr = reader.string();
                    break;
                case 3:
                    message.gaugeId = reader.uint64();
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
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : "",
            valAddr: (0, helpers_1.isSet)(object.valAddr) ? String(object.valAddr) : "",
            gaugeId: (0, helpers_1.isSet)(object.gaugeId) ? BigInt(object.gaugeId.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        message.valAddr !== undefined && (obj.valAddr = message.valAddr);
        message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidIntermediaryAccount();
        message.denom = object.denom ?? "";
        message.valAddr = object.valAddr ?? "";
        message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? BigInt(object.gaugeId.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            denom: object?.denom,
            valAddr: object?.val_addr,
            gaugeId: object?.gauge_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.val_addr = message.valAddr;
        obj.gauge_id = message.gaugeId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSuperfluidIntermediaryAccount();
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.val_addr !== undefined && object.val_addr !== null) {
            message.valAddr = object.val_addr;
        }
        if (object.gauge_id !== undefined && object.gauge_id !== null) {
            message.gaugeId = BigInt(object.gauge_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        obj.val_addr = message.valAddr;
        obj.gauge_id = message.gaugeId ? message.gaugeId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SuperfluidIntermediaryAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-intermediary-account",
            value: exports.SuperfluidIntermediaryAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SuperfluidIntermediaryAccount.decode(message.value);
    },
    toProto(message) {
        return exports.SuperfluidIntermediaryAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidIntermediaryAccount",
            value: exports.SuperfluidIntermediaryAccount.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SuperfluidIntermediaryAccount.typeUrl, exports.SuperfluidIntermediaryAccount);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SuperfluidIntermediaryAccount.aminoType, exports.SuperfluidIntermediaryAccount.typeUrl);
function createBaseOsmoEquivalentMultiplierRecord() {
    return {
        epochNumber: BigInt(0),
        denom: "",
        multiplier: ""
    };
}
exports.OsmoEquivalentMultiplierRecord = {
    typeUrl: "/osmosis.superfluid.OsmoEquivalentMultiplierRecord",
    aminoType: "osmosis/osmo-equivalent-multiplier-record",
    is(o) {
        return o && (o.$typeUrl === exports.OsmoEquivalentMultiplierRecord.typeUrl || typeof o.epochNumber === "bigint" && typeof o.denom === "string" && typeof o.multiplier === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.OsmoEquivalentMultiplierRecord.typeUrl || typeof o.epoch_number === "bigint" && typeof o.denom === "string" && typeof o.multiplier === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.OsmoEquivalentMultiplierRecord.typeUrl || typeof o.epoch_number === "bigint" && typeof o.denom === "string" && typeof o.multiplier === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.epochNumber !== BigInt(0)) {
            writer.uint32(8).int64(message.epochNumber);
        }
        if (message.denom !== "") {
            writer.uint32(18).string(message.denom);
        }
        if (message.multiplier !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.multiplier, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOsmoEquivalentMultiplierRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochNumber = reader.int64();
                    break;
                case 2:
                    message.denom = reader.string();
                    break;
                case 3:
                    message.multiplier = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
            epochNumber: (0, helpers_1.isSet)(object.epochNumber) ? BigInt(object.epochNumber.toString()) : BigInt(0),
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : "",
            multiplier: (0, helpers_1.isSet)(object.multiplier) ? String(object.multiplier) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.epochNumber !== undefined && (obj.epochNumber = (message.epochNumber || BigInt(0)).toString());
        message.denom !== undefined && (obj.denom = message.denom);
        message.multiplier !== undefined && (obj.multiplier = message.multiplier);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseOsmoEquivalentMultiplierRecord();
        message.epochNumber = object.epochNumber !== undefined && object.epochNumber !== null ? BigInt(object.epochNumber.toString()) : BigInt(0);
        message.denom = object.denom ?? "";
        message.multiplier = object.multiplier ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            epochNumber: object?.epoch_number,
            denom: object?.denom,
            multiplier: object?.multiplier
        };
    },
    toSDK(message) {
        const obj = {};
        obj.epoch_number = message.epochNumber;
        obj.denom = message.denom;
        obj.multiplier = message.multiplier;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseOsmoEquivalentMultiplierRecord();
        if (object.epoch_number !== undefined && object.epoch_number !== null) {
            message.epochNumber = BigInt(object.epoch_number);
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        if (object.multiplier !== undefined && object.multiplier !== null) {
            message.multiplier = object.multiplier;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.epoch_number = message.epochNumber ? message.epochNumber.toString() : undefined;
        obj.denom = message.denom;
        obj.multiplier = message.multiplier;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.OsmoEquivalentMultiplierRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/osmo-equivalent-multiplier-record",
            value: exports.OsmoEquivalentMultiplierRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.OsmoEquivalentMultiplierRecord.decode(message.value);
    },
    toProto(message) {
        return exports.OsmoEquivalentMultiplierRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.OsmoEquivalentMultiplierRecord",
            value: exports.OsmoEquivalentMultiplierRecord.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.OsmoEquivalentMultiplierRecord.typeUrl, exports.OsmoEquivalentMultiplierRecord);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.OsmoEquivalentMultiplierRecord.aminoType, exports.OsmoEquivalentMultiplierRecord.typeUrl);
function createBaseSuperfluidDelegationRecord() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        delegationAmount: coin_1.Coin.fromPartial({}),
        equivalentStakedAmount: undefined
    };
}
exports.SuperfluidDelegationRecord = {
    typeUrl: "/osmosis.superfluid.SuperfluidDelegationRecord",
    aminoType: "osmosis/superfluid-delegation-record",
    is(o) {
        return o && (o.$typeUrl === exports.SuperfluidDelegationRecord.typeUrl || typeof o.delegatorAddress === "string" && typeof o.validatorAddress === "string" && coin_1.Coin.is(o.delegationAmount));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.SuperfluidDelegationRecord.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && coin_1.Coin.isSDK(o.delegation_amount));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.SuperfluidDelegationRecord.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && coin_1.Coin.isAmino(o.delegation_amount));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.delegationAmount !== undefined) {
            coin_1.Coin.encode(message.delegationAmount, writer.uint32(26).fork()).ldelim();
        }
        if (message.equivalentStakedAmount !== undefined) {
            coin_1.Coin.encode(message.equivalentStakedAmount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuperfluidDelegationRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.delegationAmount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.equivalentStakedAmount = coin_1.Coin.decode(reader, reader.uint32());
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
            delegatorAddress: (0, helpers_1.isSet)(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            validatorAddress: (0, helpers_1.isSet)(object.validatorAddress) ? String(object.validatorAddress) : "",
            delegationAmount: (0, helpers_1.isSet)(object.delegationAmount) ? coin_1.Coin.fromJSON(object.delegationAmount) : undefined,
            equivalentStakedAmount: (0, helpers_1.isSet)(object.equivalentStakedAmount) ? coin_1.Coin.fromJSON(object.equivalentStakedAmount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.delegationAmount !== undefined && (obj.delegationAmount = message.delegationAmount ? coin_1.Coin.toJSON(message.delegationAmount) : undefined);
        message.equivalentStakedAmount !== undefined && (obj.equivalentStakedAmount = message.equivalentStakedAmount ? coin_1.Coin.toJSON(message.equivalentStakedAmount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSuperfluidDelegationRecord();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.delegationAmount = object.delegationAmount !== undefined && object.delegationAmount !== null ? coin_1.Coin.fromPartial(object.delegationAmount) : undefined;
        message.equivalentStakedAmount = object.equivalentStakedAmount !== undefined && object.equivalentStakedAmount !== null ? coin_1.Coin.fromPartial(object.equivalentStakedAmount) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            delegatorAddress: object?.delegator_address,
            validatorAddress: object?.validator_address,
            delegationAmount: object.delegation_amount ? coin_1.Coin.fromSDK(object.delegation_amount) : undefined,
            equivalentStakedAmount: object.equivalent_staked_amount ? coin_1.Coin.fromSDK(object.equivalent_staked_amount) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_address = message.validatorAddress;
        message.delegationAmount !== undefined && (obj.delegation_amount = message.delegationAmount ? coin_1.Coin.toSDK(message.delegationAmount) : undefined);
        message.equivalentStakedAmount !== undefined && (obj.equivalent_staked_amount = message.equivalentStakedAmount ? coin_1.Coin.toSDK(message.equivalentStakedAmount) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseSuperfluidDelegationRecord();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.delegation_amount !== undefined && object.delegation_amount !== null) {
            message.delegationAmount = coin_1.Coin.fromAmino(object.delegation_amount);
        }
        if (object.equivalent_staked_amount !== undefined && object.equivalent_staked_amount !== null) {
            message.equivalentStakedAmount = coin_1.Coin.fromAmino(object.equivalent_staked_amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_address = message.validatorAddress;
        obj.delegation_amount = message.delegationAmount ? coin_1.Coin.toAmino(message.delegationAmount) : undefined;
        obj.equivalent_staked_amount = message.equivalentStakedAmount ? coin_1.Coin.toAmino(message.equivalentStakedAmount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SuperfluidDelegationRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/superfluid-delegation-record",
            value: exports.SuperfluidDelegationRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SuperfluidDelegationRecord.decode(message.value);
    },
    toProto(message) {
        return exports.SuperfluidDelegationRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.SuperfluidDelegationRecord",
            value: exports.SuperfluidDelegationRecord.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.SuperfluidDelegationRecord.typeUrl, exports.SuperfluidDelegationRecord);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.SuperfluidDelegationRecord.aminoType, exports.SuperfluidDelegationRecord.typeUrl);
function createBaseLockIdIntermediaryAccountConnection() {
    return {
        lockId: BigInt(0),
        intermediaryAccount: ""
    };
}
exports.LockIdIntermediaryAccountConnection = {
    typeUrl: "/osmosis.superfluid.LockIdIntermediaryAccountConnection",
    aminoType: "osmosis/lock-id-intermediary-account-connection",
    is(o) {
        return o && (o.$typeUrl === exports.LockIdIntermediaryAccountConnection.typeUrl || typeof o.lockId === "bigint" && typeof o.intermediaryAccount === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.LockIdIntermediaryAccountConnection.typeUrl || typeof o.lock_id === "bigint" && typeof o.intermediary_account === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.LockIdIntermediaryAccountConnection.typeUrl || typeof o.lock_id === "bigint" && typeof o.intermediary_account === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.lockId !== BigInt(0)) {
            writer.uint32(8).uint64(message.lockId);
        }
        if (message.intermediaryAccount !== "") {
            writer.uint32(18).string(message.intermediaryAccount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLockIdIntermediaryAccountConnection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lockId = reader.uint64();
                    break;
                case 2:
                    message.intermediaryAccount = reader.string();
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
            lockId: (0, helpers_1.isSet)(object.lockId) ? BigInt(object.lockId.toString()) : BigInt(0),
            intermediaryAccount: (0, helpers_1.isSet)(object.intermediaryAccount) ? String(object.intermediaryAccount) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.lockId !== undefined && (obj.lockId = (message.lockId || BigInt(0)).toString());
        message.intermediaryAccount !== undefined && (obj.intermediaryAccount = message.intermediaryAccount);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLockIdIntermediaryAccountConnection();
        message.lockId = object.lockId !== undefined && object.lockId !== null ? BigInt(object.lockId.toString()) : BigInt(0);
        message.intermediaryAccount = object.intermediaryAccount ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            lockId: object?.lock_id,
            intermediaryAccount: object?.intermediary_account
        };
    },
    toSDK(message) {
        const obj = {};
        obj.lock_id = message.lockId;
        obj.intermediary_account = message.intermediaryAccount;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseLockIdIntermediaryAccountConnection();
        if (object.lock_id !== undefined && object.lock_id !== null) {
            message.lockId = BigInt(object.lock_id);
        }
        if (object.intermediary_account !== undefined && object.intermediary_account !== null) {
            message.intermediaryAccount = object.intermediary_account;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.lock_id = message.lockId ? message.lockId.toString() : undefined;
        obj.intermediary_account = message.intermediaryAccount;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LockIdIntermediaryAccountConnection.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/lock-id-intermediary-account-connection",
            value: exports.LockIdIntermediaryAccountConnection.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.LockIdIntermediaryAccountConnection.decode(message.value);
    },
    toProto(message) {
        return exports.LockIdIntermediaryAccountConnection.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.LockIdIntermediaryAccountConnection",
            value: exports.LockIdIntermediaryAccountConnection.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.LockIdIntermediaryAccountConnection.typeUrl, exports.LockIdIntermediaryAccountConnection);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.LockIdIntermediaryAccountConnection.aminoType, exports.LockIdIntermediaryAccountConnection.typeUrl);
function createBaseUnpoolWhitelistedPools() {
    return {
        ids: []
    };
}
exports.UnpoolWhitelistedPools = {
    typeUrl: "/osmosis.superfluid.UnpoolWhitelistedPools",
    aminoType: "osmosis/unpool-whitelisted-pools",
    is(o) {
        return o && (o.$typeUrl === exports.UnpoolWhitelistedPools.typeUrl || Array.isArray(o.ids) && (!o.ids.length || typeof o.ids[0] === "bigint"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.UnpoolWhitelistedPools.typeUrl || Array.isArray(o.ids) && (!o.ids.length || typeof o.ids[0] === "bigint"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.UnpoolWhitelistedPools.typeUrl || Array.isArray(o.ids) && (!o.ids.length || typeof o.ids[0] === "bigint"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        writer.uint32(10).fork();
        for (const v of message.ids) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnpoolWhitelistedPools();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.ids.push(reader.uint64());
                        }
                    }
                    else {
                        message.ids.push(reader.uint64());
                    }
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
            ids: Array.isArray(object?.ids) ? object.ids.map((e) => BigInt(e.toString())) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ids) {
            obj.ids = message.ids.map(e => (e || BigInt(0)).toString());
        }
        else {
            obj.ids = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUnpoolWhitelistedPools();
        message.ids = object.ids?.map(e => BigInt(e.toString())) || [];
        return message;
    },
    fromSDK(object) {
        return {
            ids: Array.isArray(object?.ids) ? object.ids.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.ids) {
            obj.ids = message.ids.map(e => e);
        }
        else {
            obj.ids = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseUnpoolWhitelistedPools();
        message.ids = object.ids?.map(e => BigInt(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.ids) {
            obj.ids = message.ids.map(e => e.toString());
        }
        else {
            obj.ids = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UnpoolWhitelistedPools.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/unpool-whitelisted-pools",
            value: exports.UnpoolWhitelistedPools.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UnpoolWhitelistedPools.decode(message.value);
    },
    toProto(message) {
        return exports.UnpoolWhitelistedPools.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.superfluid.UnpoolWhitelistedPools",
            value: exports.UnpoolWhitelistedPools.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.UnpoolWhitelistedPools.typeUrl, exports.UnpoolWhitelistedPools);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.UnpoolWhitelistedPools.aminoType, exports.UnpoolWhitelistedPools.typeUrl);
