"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pool = exports.RedelegationResponse = exports.RedelegationEntryResponse = exports.DelegationResponse = exports.Params = exports.Redelegation = exports.RedelegationEntry = exports.UnbondingDelegationEntry = exports.UnbondingDelegation = exports.Delegation = exports.DVVTriplets = exports.DVVTriplet = exports.DVPairs = exports.DVPair = exports.ValAddresses = exports.Validator = exports.Description = exports.Commission = exports.CommissionRates = exports.HistoricalInfo = exports.bondStatusToJSON = exports.bondStatusFromJSON = exports.BondStatusAmino = exports.BondStatusSDKType = exports.BondStatus = void 0;
const types_1 = require("../../../tendermint/types/types");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const any_1 = require("../../../google/protobuf/any");
const duration_1 = require("../../../google/protobuf/duration");
const coin_1 = require("../../base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
const math_1 = require("@cosmjs/math");
const proto_signing_1 = require("@cosmjs/proto-signing");
/** BondStatus is the status of a validator. */
var BondStatus;
(function (BondStatus) {
    /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
    BondStatus[BondStatus["BOND_STATUS_UNSPECIFIED"] = 0] = "BOND_STATUS_UNSPECIFIED";
    /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
    BondStatus[BondStatus["BOND_STATUS_UNBONDED"] = 1] = "BOND_STATUS_UNBONDED";
    /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
    BondStatus[BondStatus["BOND_STATUS_UNBONDING"] = 2] = "BOND_STATUS_UNBONDING";
    /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
    BondStatus[BondStatus["BOND_STATUS_BONDED"] = 3] = "BOND_STATUS_BONDED";
    BondStatus[BondStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BondStatus || (exports.BondStatus = BondStatus = {}));
exports.BondStatusSDKType = BondStatus;
exports.BondStatusAmino = BondStatus;
function bondStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "BOND_STATUS_UNSPECIFIED":
            return BondStatus.BOND_STATUS_UNSPECIFIED;
        case 1:
        case "BOND_STATUS_UNBONDED":
            return BondStatus.BOND_STATUS_UNBONDED;
        case 2:
        case "BOND_STATUS_UNBONDING":
            return BondStatus.BOND_STATUS_UNBONDING;
        case 3:
        case "BOND_STATUS_BONDED":
            return BondStatus.BOND_STATUS_BONDED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BondStatus.UNRECOGNIZED;
    }
}
exports.bondStatusFromJSON = bondStatusFromJSON;
function bondStatusToJSON(object) {
    switch (object) {
        case BondStatus.BOND_STATUS_UNSPECIFIED:
            return "BOND_STATUS_UNSPECIFIED";
        case BondStatus.BOND_STATUS_UNBONDED:
            return "BOND_STATUS_UNBONDED";
        case BondStatus.BOND_STATUS_UNBONDING:
            return "BOND_STATUS_UNBONDING";
        case BondStatus.BOND_STATUS_BONDED:
            return "BOND_STATUS_BONDED";
        case BondStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.bondStatusToJSON = bondStatusToJSON;
function createBaseHistoricalInfo() {
    return {
        header: types_1.Header.fromPartial({}),
        valset: []
    };
}
exports.HistoricalInfo = {
    typeUrl: "/cosmos.staking.v1beta1.HistoricalInfo",
    aminoType: "cosmos-sdk/HistoricalInfo",
    is(o) {
        return o && (o.$typeUrl === exports.HistoricalInfo.typeUrl || types_1.Header.is(o.header) && Array.isArray(o.valset) && (!o.valset.length || exports.Validator.is(o.valset[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.HistoricalInfo.typeUrl || types_1.Header.isSDK(o.header) && Array.isArray(o.valset) && (!o.valset.length || exports.Validator.isSDK(o.valset[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.HistoricalInfo.typeUrl || types_1.Header.isAmino(o.header) && Array.isArray(o.valset) && (!o.valset.length || exports.Validator.isAmino(o.valset[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.header !== undefined) {
            types_1.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.valset) {
            exports.Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHistoricalInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = types_1.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.valset.push(exports.Validator.decode(reader, reader.uint32()));
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
            header: (0, helpers_1.isSet)(object.header) ? types_1.Header.fromJSON(object.header) : undefined,
            valset: Array.isArray(object?.valset) ? object.valset.map((e) => exports.Validator.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.header !== undefined && (obj.header = message.header ? types_1.Header.toJSON(message.header) : undefined);
        if (message.valset) {
            obj.valset = message.valset.map(e => e ? exports.Validator.toJSON(e) : undefined);
        }
        else {
            obj.valset = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHistoricalInfo();
        message.header = object.header !== undefined && object.header !== null ? types_1.Header.fromPartial(object.header) : undefined;
        message.valset = object.valset?.map(e => exports.Validator.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            header: object.header ? types_1.Header.fromSDK(object.header) : undefined,
            valset: Array.isArray(object?.valset) ? object.valset.map((e) => exports.Validator.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        message.header !== undefined && (obj.header = message.header ? types_1.Header.toSDK(message.header) : undefined);
        if (message.valset) {
            obj.valset = message.valset.map(e => e ? exports.Validator.toSDK(e) : undefined);
        }
        else {
            obj.valset = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseHistoricalInfo();
        if (object.header !== undefined && object.header !== null) {
            message.header = types_1.Header.fromAmino(object.header);
        }
        message.valset = object.valset?.map(e => exports.Validator.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.header = message.header ? types_1.Header.toAmino(message.header) : undefined;
        if (message.valset) {
            obj.valset = message.valset.map(e => e ? exports.Validator.toAmino(e) : undefined);
        }
        else {
            obj.valset = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.HistoricalInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/HistoricalInfo",
            value: exports.HistoricalInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.HistoricalInfo.decode(message.value);
    },
    toProto(message) {
        return exports.HistoricalInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.HistoricalInfo",
            value: exports.HistoricalInfo.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.HistoricalInfo.typeUrl, exports.HistoricalInfo);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.HistoricalInfo.aminoType, exports.HistoricalInfo.typeUrl);
function createBaseCommissionRates() {
    return {
        rate: "",
        maxRate: "",
        maxChangeRate: ""
    };
}
exports.CommissionRates = {
    typeUrl: "/cosmos.staking.v1beta1.CommissionRates",
    aminoType: "cosmos-sdk/CommissionRates",
    is(o) {
        return o && (o.$typeUrl === exports.CommissionRates.typeUrl || typeof o.rate === "string" && typeof o.maxRate === "string" && typeof o.maxChangeRate === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.CommissionRates.typeUrl || typeof o.rate === "string" && typeof o.max_rate === "string" && typeof o.max_change_rate === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.CommissionRates.typeUrl || typeof o.rate === "string" && typeof o.max_rate === "string" && typeof o.max_change_rate === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.rate !== "") {
            writer.uint32(10).string(math_1.Decimal.fromUserInput(message.rate, 18).atomics);
        }
        if (message.maxRate !== "") {
            writer.uint32(18).string(math_1.Decimal.fromUserInput(message.maxRate, 18).atomics);
        }
        if (message.maxChangeRate !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.maxChangeRate, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommissionRates();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.maxRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.maxChangeRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
            rate: (0, helpers_1.isSet)(object.rate) ? String(object.rate) : "",
            maxRate: (0, helpers_1.isSet)(object.maxRate) ? String(object.maxRate) : "",
            maxChangeRate: (0, helpers_1.isSet)(object.maxChangeRate) ? String(object.maxChangeRate) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.rate !== undefined && (obj.rate = message.rate);
        message.maxRate !== undefined && (obj.maxRate = message.maxRate);
        message.maxChangeRate !== undefined && (obj.maxChangeRate = message.maxChangeRate);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommissionRates();
        message.rate = object.rate ?? "";
        message.maxRate = object.maxRate ?? "";
        message.maxChangeRate = object.maxChangeRate ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            rate: object?.rate,
            maxRate: object?.max_rate,
            maxChangeRate: object?.max_change_rate
        };
    },
    toSDK(message) {
        const obj = {};
        obj.rate = message.rate;
        obj.max_rate = message.maxRate;
        obj.max_change_rate = message.maxChangeRate;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseCommissionRates();
        if (object.rate !== undefined && object.rate !== null) {
            message.rate = object.rate;
        }
        if (object.max_rate !== undefined && object.max_rate !== null) {
            message.maxRate = object.max_rate;
        }
        if (object.max_change_rate !== undefined && object.max_change_rate !== null) {
            message.maxChangeRate = object.max_change_rate;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.rate = message.rate;
        obj.max_rate = message.maxRate;
        obj.max_change_rate = message.maxChangeRate;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CommissionRates.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CommissionRates",
            value: exports.CommissionRates.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.CommissionRates.decode(message.value);
    },
    toProto(message) {
        return exports.CommissionRates.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.CommissionRates",
            value: exports.CommissionRates.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.CommissionRates.typeUrl, exports.CommissionRates);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.CommissionRates.aminoType, exports.CommissionRates.typeUrl);
function createBaseCommission() {
    return {
        commissionRates: exports.CommissionRates.fromPartial({}),
        updateTime: new Date()
    };
}
exports.Commission = {
    typeUrl: "/cosmos.staking.v1beta1.Commission",
    aminoType: "cosmos-sdk/Commission",
    is(o) {
        return o && (o.$typeUrl === exports.Commission.typeUrl || exports.CommissionRates.is(o.commissionRates) && timestamp_1.Timestamp.is(o.updateTime));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Commission.typeUrl || exports.CommissionRates.isSDK(o.commission_rates) && timestamp_1.Timestamp.isSDK(o.update_time));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Commission.typeUrl || exports.CommissionRates.isAmino(o.commission_rates) && timestamp_1.Timestamp.isAmino(o.update_time));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.commissionRates !== undefined) {
            exports.CommissionRates.encode(message.commissionRates, writer.uint32(10).fork()).ldelim();
        }
        if (message.updateTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.updateTime), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commissionRates = exports.CommissionRates.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.updateTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            commissionRates: (0, helpers_1.isSet)(object.commissionRates) ? exports.CommissionRates.fromJSON(object.commissionRates) : undefined,
            updateTime: (0, helpers_1.isSet)(object.updateTime) ? new Date(object.updateTime) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.commissionRates !== undefined && (obj.commissionRates = message.commissionRates ? exports.CommissionRates.toJSON(message.commissionRates) : undefined);
        message.updateTime !== undefined && (obj.updateTime = message.updateTime.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommission();
        message.commissionRates = object.commissionRates !== undefined && object.commissionRates !== null ? exports.CommissionRates.fromPartial(object.commissionRates) : undefined;
        message.updateTime = object.updateTime ?? undefined;
        return message;
    },
    fromSDK(object) {
        return {
            commissionRates: object.commission_rates ? exports.CommissionRates.fromSDK(object.commission_rates) : undefined,
            updateTime: object.update_time ?? undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.commissionRates !== undefined && (obj.commission_rates = message.commissionRates ? exports.CommissionRates.toSDK(message.commissionRates) : undefined);
        message.updateTime !== undefined && (obj.update_time = message.updateTime ?? undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseCommission();
        if (object.commission_rates !== undefined && object.commission_rates !== null) {
            message.commissionRates = exports.CommissionRates.fromAmino(object.commission_rates);
        }
        if (object.update_time !== undefined && object.update_time !== null) {
            message.updateTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.update_time));
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.commission_rates = message.commissionRates ? exports.CommissionRates.toAmino(message.commissionRates) : undefined;
        obj.update_time = message.updateTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.updateTime)) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Commission.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Commission",
            value: exports.Commission.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Commission.decode(message.value);
    },
    toProto(message) {
        return exports.Commission.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Commission",
            value: exports.Commission.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Commission.typeUrl, exports.Commission);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Commission.aminoType, exports.Commission.typeUrl);
function createBaseDescription() {
    return {
        moniker: "",
        identity: "",
        website: "",
        securityContact: "",
        details: ""
    };
}
exports.Description = {
    typeUrl: "/cosmos.staking.v1beta1.Description",
    aminoType: "cosmos-sdk/Description",
    is(o) {
        return o && (o.$typeUrl === exports.Description.typeUrl || typeof o.moniker === "string" && typeof o.identity === "string" && typeof o.website === "string" && typeof o.securityContact === "string" && typeof o.details === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Description.typeUrl || typeof o.moniker === "string" && typeof o.identity === "string" && typeof o.website === "string" && typeof o.security_contact === "string" && typeof o.details === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Description.typeUrl || typeof o.moniker === "string" && typeof o.identity === "string" && typeof o.website === "string" && typeof o.security_contact === "string" && typeof o.details === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.moniker !== "") {
            writer.uint32(10).string(message.moniker);
        }
        if (message.identity !== "") {
            writer.uint32(18).string(message.identity);
        }
        if (message.website !== "") {
            writer.uint32(26).string(message.website);
        }
        if (message.securityContact !== "") {
            writer.uint32(34).string(message.securityContact);
        }
        if (message.details !== "") {
            writer.uint32(42).string(message.details);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDescription();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moniker = reader.string();
                    break;
                case 2:
                    message.identity = reader.string();
                    break;
                case 3:
                    message.website = reader.string();
                    break;
                case 4:
                    message.securityContact = reader.string();
                    break;
                case 5:
                    message.details = reader.string();
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
            moniker: (0, helpers_1.isSet)(object.moniker) ? String(object.moniker) : "",
            identity: (0, helpers_1.isSet)(object.identity) ? String(object.identity) : "",
            website: (0, helpers_1.isSet)(object.website) ? String(object.website) : "",
            securityContact: (0, helpers_1.isSet)(object.securityContact) ? String(object.securityContact) : "",
            details: (0, helpers_1.isSet)(object.details) ? String(object.details) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.identity !== undefined && (obj.identity = message.identity);
        message.website !== undefined && (obj.website = message.website);
        message.securityContact !== undefined && (obj.securityContact = message.securityContact);
        message.details !== undefined && (obj.details = message.details);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDescription();
        message.moniker = object.moniker ?? "";
        message.identity = object.identity ?? "";
        message.website = object.website ?? "";
        message.securityContact = object.securityContact ?? "";
        message.details = object.details ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            moniker: object?.moniker,
            identity: object?.identity,
            website: object?.website,
            securityContact: object?.security_contact,
            details: object?.details
        };
    },
    toSDK(message) {
        const obj = {};
        obj.moniker = message.moniker;
        obj.identity = message.identity;
        obj.website = message.website;
        obj.security_contact = message.securityContact;
        obj.details = message.details;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseDescription();
        if (object.moniker !== undefined && object.moniker !== null) {
            message.moniker = object.moniker;
        }
        if (object.identity !== undefined && object.identity !== null) {
            message.identity = object.identity;
        }
        if (object.website !== undefined && object.website !== null) {
            message.website = object.website;
        }
        if (object.security_contact !== undefined && object.security_contact !== null) {
            message.securityContact = object.security_contact;
        }
        if (object.details !== undefined && object.details !== null) {
            message.details = object.details;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.moniker = message.moniker;
        obj.identity = message.identity;
        obj.website = message.website;
        obj.security_contact = message.securityContact;
        obj.details = message.details;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Description.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Description",
            value: exports.Description.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Description.decode(message.value);
    },
    toProto(message) {
        return exports.Description.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Description",
            value: exports.Description.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Description.typeUrl, exports.Description);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Description.aminoType, exports.Description.typeUrl);
function createBaseValidator() {
    return {
        operatorAddress: "",
        consensusPubkey: undefined,
        jailed: false,
        status: 0,
        tokens: "",
        delegatorShares: "",
        description: exports.Description.fromPartial({}),
        unbondingHeight: BigInt(0),
        unbondingTime: new Date(),
        commission: exports.Commission.fromPartial({}),
        minSelfDelegation: ""
    };
}
exports.Validator = {
    typeUrl: "/cosmos.staking.v1beta1.Validator",
    aminoType: "cosmos-sdk/Validator",
    is(o) {
        return o && (o.$typeUrl === exports.Validator.typeUrl || typeof o.operatorAddress === "string" && typeof o.jailed === "boolean" && (0, helpers_1.isSet)(o.status) && typeof o.tokens === "string" && typeof o.delegatorShares === "string" && exports.Description.is(o.description) && typeof o.unbondingHeight === "bigint" && timestamp_1.Timestamp.is(o.unbondingTime) && exports.Commission.is(o.commission) && typeof o.minSelfDelegation === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Validator.typeUrl || typeof o.operator_address === "string" && typeof o.jailed === "boolean" && (0, helpers_1.isSet)(o.status) && typeof o.tokens === "string" && typeof o.delegator_shares === "string" && exports.Description.isSDK(o.description) && typeof o.unbonding_height === "bigint" && timestamp_1.Timestamp.isSDK(o.unbonding_time) && exports.Commission.isSDK(o.commission) && typeof o.min_self_delegation === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Validator.typeUrl || typeof o.operator_address === "string" && typeof o.jailed === "boolean" && (0, helpers_1.isSet)(o.status) && typeof o.tokens === "string" && typeof o.delegator_shares === "string" && exports.Description.isAmino(o.description) && typeof o.unbonding_height === "bigint" && timestamp_1.Timestamp.isAmino(o.unbonding_time) && exports.Commission.isAmino(o.commission) && typeof o.min_self_delegation === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.operatorAddress !== "") {
            writer.uint32(10).string(message.operatorAddress);
        }
        if (message.consensusPubkey !== undefined) {
            any_1.Any.encode(registry_1.GlobalDecoderRegistry.wrapAny(message.consensusPubkey), writer.uint32(18).fork()).ldelim();
        }
        if (message.jailed === true) {
            writer.uint32(24).bool(message.jailed);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.tokens !== "") {
            writer.uint32(42).string(message.tokens);
        }
        if (message.delegatorShares !== "") {
            writer.uint32(50).string(math_1.Decimal.fromUserInput(message.delegatorShares, 18).atomics);
        }
        if (message.description !== undefined) {
            exports.Description.encode(message.description, writer.uint32(58).fork()).ldelim();
        }
        if (message.unbondingHeight !== BigInt(0)) {
            writer.uint32(64).int64(message.unbondingHeight);
        }
        if (message.unbondingTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.unbondingTime), writer.uint32(74).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            exports.Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
        }
        if (message.minSelfDelegation !== "") {
            writer.uint32(90).string(message.minSelfDelegation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operatorAddress = reader.string();
                    break;
                case 2:
                    message.consensusPubkey = registry_1.GlobalDecoderRegistry.unwrapAny(reader);
                    break;
                case 3:
                    message.jailed = reader.bool();
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
                    message.tokens = reader.string();
                    break;
                case 6:
                    message.delegatorShares = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 7:
                    message.description = exports.Description.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.unbondingHeight = reader.int64();
                    break;
                case 9:
                    message.unbondingTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.commission = exports.Commission.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.minSelfDelegation = reader.string();
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
            operatorAddress: (0, helpers_1.isSet)(object.operatorAddress) ? String(object.operatorAddress) : "",
            consensusPubkey: (0, helpers_1.isSet)(object.consensusPubkey) ? registry_1.GlobalDecoderRegistry.fromJSON(object.consensusPubkey) : undefined,
            jailed: (0, helpers_1.isSet)(object.jailed) ? Boolean(object.jailed) : false,
            status: (0, helpers_1.isSet)(object.status) ? bondStatusFromJSON(object.status) : -1,
            tokens: (0, helpers_1.isSet)(object.tokens) ? String(object.tokens) : "",
            delegatorShares: (0, helpers_1.isSet)(object.delegatorShares) ? String(object.delegatorShares) : "",
            description: (0, helpers_1.isSet)(object.description) ? exports.Description.fromJSON(object.description) : undefined,
            unbondingHeight: (0, helpers_1.isSet)(object.unbondingHeight) ? BigInt(object.unbondingHeight.toString()) : BigInt(0),
            unbondingTime: (0, helpers_1.isSet)(object.unbondingTime) ? new Date(object.unbondingTime) : undefined,
            commission: (0, helpers_1.isSet)(object.commission) ? exports.Commission.fromJSON(object.commission) : undefined,
            minSelfDelegation: (0, helpers_1.isSet)(object.minSelfDelegation) ? String(object.minSelfDelegation) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
        message.consensusPubkey !== undefined && (obj.consensusPubkey = message.consensusPubkey ? registry_1.GlobalDecoderRegistry.toJSON(message.consensusPubkey) : undefined);
        message.jailed !== undefined && (obj.jailed = message.jailed);
        message.status !== undefined && (obj.status = bondStatusToJSON(message.status));
        message.tokens !== undefined && (obj.tokens = message.tokens);
        message.delegatorShares !== undefined && (obj.delegatorShares = message.delegatorShares);
        message.description !== undefined && (obj.description = message.description ? exports.Description.toJSON(message.description) : undefined);
        message.unbondingHeight !== undefined && (obj.unbondingHeight = (message.unbondingHeight || BigInt(0)).toString());
        message.unbondingTime !== undefined && (obj.unbondingTime = message.unbondingTime.toISOString());
        message.commission !== undefined && (obj.commission = message.commission ? exports.Commission.toJSON(message.commission) : undefined);
        message.minSelfDelegation !== undefined && (obj.minSelfDelegation = message.minSelfDelegation);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.operatorAddress = object.operatorAddress ?? "";
        message.consensusPubkey = object.consensusPubkey !== undefined && object.consensusPubkey !== null ? registry_1.GlobalDecoderRegistry.fromPartial(object.consensusPubkey) : undefined;
        message.jailed = object.jailed ?? false;
        message.status = object.status ?? 0;
        message.tokens = object.tokens ?? "";
        message.delegatorShares = object.delegatorShares ?? "";
        message.description = object.description !== undefined && object.description !== null ? exports.Description.fromPartial(object.description) : undefined;
        message.unbondingHeight = object.unbondingHeight !== undefined && object.unbondingHeight !== null ? BigInt(object.unbondingHeight.toString()) : BigInt(0);
        message.unbondingTime = object.unbondingTime ?? undefined;
        message.commission = object.commission !== undefined && object.commission !== null ? exports.Commission.fromPartial(object.commission) : undefined;
        message.minSelfDelegation = object.minSelfDelegation ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            operatorAddress: object?.operator_address,
            consensusPubkey: object.consensus_pubkey ? registry_1.GlobalDecoderRegistry.fromSDK(object.consensus_pubkey) : undefined,
            jailed: object?.jailed,
            status: (0, helpers_1.isSet)(object.status) ? bondStatusFromJSON(object.status) : -1,
            tokens: object?.tokens,
            delegatorShares: object?.delegator_shares,
            description: object.description ? exports.Description.fromSDK(object.description) : undefined,
            unbondingHeight: object?.unbonding_height,
            unbondingTime: object.unbonding_time ?? undefined,
            commission: object.commission ? exports.Commission.fromSDK(object.commission) : undefined,
            minSelfDelegation: object?.min_self_delegation
        };
    },
    toSDK(message) {
        const obj = {};
        obj.operator_address = message.operatorAddress;
        message.consensusPubkey !== undefined && (obj.consensus_pubkey = message.consensusPubkey ? registry_1.GlobalDecoderRegistry.toSDK(message.consensusPubkey) : undefined);
        obj.jailed = message.jailed;
        message.status !== undefined && (obj.status = bondStatusToJSON(message.status));
        obj.tokens = message.tokens;
        obj.delegator_shares = message.delegatorShares;
        message.description !== undefined && (obj.description = message.description ? exports.Description.toSDK(message.description) : undefined);
        obj.unbonding_height = message.unbondingHeight;
        message.unbondingTime !== undefined && (obj.unbonding_time = message.unbondingTime ?? undefined);
        message.commission !== undefined && (obj.commission = message.commission ? exports.Commission.toSDK(message.commission) : undefined);
        obj.min_self_delegation = message.minSelfDelegation;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseValidator();
        if (object.operator_address !== undefined && object.operator_address !== null) {
            message.operatorAddress = object.operator_address;
        }
        if (object.consensus_pubkey !== undefined && object.consensus_pubkey !== null) {
            message.consensusPubkey = (0, proto_signing_1.encodePubkey)(object.consensus_pubkey);
        }
        if (object.jailed !== undefined && object.jailed !== null) {
            message.jailed = object.jailed;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = bondStatusFromJSON(object.status);
        }
        if (object.tokens !== undefined && object.tokens !== null) {
            message.tokens = object.tokens;
        }
        if (object.delegator_shares !== undefined && object.delegator_shares !== null) {
            message.delegatorShares = object.delegator_shares;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = exports.Description.fromAmino(object.description);
        }
        if (object.unbonding_height !== undefined && object.unbonding_height !== null) {
            message.unbondingHeight = BigInt(object.unbonding_height);
        }
        if (object.unbonding_time !== undefined && object.unbonding_time !== null) {
            message.unbondingTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.unbonding_time));
        }
        if (object.commission !== undefined && object.commission !== null) {
            message.commission = exports.Commission.fromAmino(object.commission);
        }
        if (object.min_self_delegation !== undefined && object.min_self_delegation !== null) {
            message.minSelfDelegation = object.min_self_delegation;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.operator_address = message.operatorAddress;
        obj.consensus_pubkey = message.consensusPubkey ? (0, proto_signing_1.decodePubkey)(message.consensusPubkey) : undefined;
        obj.jailed = message.jailed;
        obj.status = bondStatusToJSON(message.status);
        obj.tokens = message.tokens;
        obj.delegator_shares = message.delegatorShares;
        obj.description = message.description ? exports.Description.toAmino(message.description) : undefined;
        obj.unbonding_height = message.unbondingHeight ? message.unbondingHeight.toString() : undefined;
        obj.unbonding_time = message.unbondingTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.unbondingTime)) : undefined;
        obj.commission = message.commission ? exports.Commission.toAmino(message.commission) : undefined;
        obj.min_self_delegation = message.minSelfDelegation;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Validator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Validator",
            value: exports.Validator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Validator.decode(message.value);
    },
    toProto(message) {
        return exports.Validator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Validator",
            value: exports.Validator.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Validator.typeUrl, exports.Validator);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Validator.aminoType, exports.Validator.typeUrl);
function createBaseValAddresses() {
    return {
        addresses: []
    };
}
exports.ValAddresses = {
    typeUrl: "/cosmos.staking.v1beta1.ValAddresses",
    aminoType: "cosmos-sdk/ValAddresses",
    is(o) {
        return o && (o.$typeUrl === exports.ValAddresses.typeUrl || Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ValAddresses.typeUrl || Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ValAddresses.typeUrl || Array.isArray(o.addresses) && (!o.addresses.length || typeof o.addresses[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.addresses) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValAddresses();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addresses.push(reader.string());
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
            addresses: Array.isArray(object?.addresses) ? object.addresses.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.addresses) {
            obj.addresses = message.addresses.map(e => e);
        }
        else {
            obj.addresses = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValAddresses();
        message.addresses = object.addresses?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            addresses: Array.isArray(object?.addresses) ? object.addresses.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.addresses) {
            obj.addresses = message.addresses.map(e => e);
        }
        else {
            obj.addresses = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseValAddresses();
        message.addresses = object.addresses?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.addresses) {
            obj.addresses = message.addresses.map(e => e);
        }
        else {
            obj.addresses = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValAddresses.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValAddresses",
            value: exports.ValAddresses.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValAddresses.decode(message.value);
    },
    toProto(message) {
        return exports.ValAddresses.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.ValAddresses",
            value: exports.ValAddresses.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ValAddresses.typeUrl, exports.ValAddresses);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ValAddresses.aminoType, exports.ValAddresses.typeUrl);
function createBaseDVPair() {
    return {
        delegatorAddress: "",
        validatorAddress: ""
    };
}
exports.DVPair = {
    typeUrl: "/cosmos.staking.v1beta1.DVPair",
    aminoType: "cosmos-sdk/DVPair",
    is(o) {
        return o && (o.$typeUrl === exports.DVPair.typeUrl || typeof o.delegatorAddress === "string" && typeof o.validatorAddress === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.DVPair.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.DVPair.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVPair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
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
            validatorAddress: (0, helpers_1.isSet)(object.validatorAddress) ? String(object.validatorAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDVPair();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            delegatorAddress: object?.delegator_address,
            validatorAddress: object?.validator_address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_address = message.validatorAddress;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseDVPair();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_address = message.validatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DVPair.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVPair",
            value: exports.DVPair.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DVPair.decode(message.value);
    },
    toProto(message) {
        return exports.DVPair.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVPair",
            value: exports.DVPair.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.DVPair.typeUrl, exports.DVPair);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.DVPair.aminoType, exports.DVPair.typeUrl);
function createBaseDVPairs() {
    return {
        pairs: []
    };
}
exports.DVPairs = {
    typeUrl: "/cosmos.staking.v1beta1.DVPairs",
    aminoType: "cosmos-sdk/DVPairs",
    is(o) {
        return o && (o.$typeUrl === exports.DVPairs.typeUrl || Array.isArray(o.pairs) && (!o.pairs.length || exports.DVPair.is(o.pairs[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.DVPairs.typeUrl || Array.isArray(o.pairs) && (!o.pairs.length || exports.DVPair.isSDK(o.pairs[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.DVPairs.typeUrl || Array.isArray(o.pairs) && (!o.pairs.length || exports.DVPair.isAmino(o.pairs[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.pairs) {
            exports.DVPair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVPairs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairs.push(exports.DVPair.decode(reader, reader.uint32()));
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
            pairs: Array.isArray(object?.pairs) ? object.pairs.map((e) => exports.DVPair.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pairs) {
            obj.pairs = message.pairs.map(e => e ? exports.DVPair.toJSON(e) : undefined);
        }
        else {
            obj.pairs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDVPairs();
        message.pairs = object.pairs?.map(e => exports.DVPair.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            pairs: Array.isArray(object?.pairs) ? object.pairs.map((e) => exports.DVPair.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.pairs) {
            obj.pairs = message.pairs.map(e => e ? exports.DVPair.toSDK(e) : undefined);
        }
        else {
            obj.pairs = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseDVPairs();
        message.pairs = object.pairs?.map(e => exports.DVPair.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.pairs) {
            obj.pairs = message.pairs.map(e => e ? exports.DVPair.toAmino(e) : undefined);
        }
        else {
            obj.pairs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DVPairs.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVPairs",
            value: exports.DVPairs.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DVPairs.decode(message.value);
    },
    toProto(message) {
        return exports.DVPairs.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVPairs",
            value: exports.DVPairs.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.DVPairs.typeUrl, exports.DVPairs);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.DVPairs.aminoType, exports.DVPairs.typeUrl);
function createBaseDVVTriplet() {
    return {
        delegatorAddress: "",
        validatorSrcAddress: "",
        validatorDstAddress: ""
    };
}
exports.DVVTriplet = {
    typeUrl: "/cosmos.staking.v1beta1.DVVTriplet",
    aminoType: "cosmos-sdk/DVVTriplet",
    is(o) {
        return o && (o.$typeUrl === exports.DVVTriplet.typeUrl || typeof o.delegatorAddress === "string" && typeof o.validatorSrcAddress === "string" && typeof o.validatorDstAddress === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.DVVTriplet.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_src_address === "string" && typeof o.validator_dst_address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.DVVTriplet.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_src_address === "string" && typeof o.validator_dst_address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorSrcAddress !== "") {
            writer.uint32(18).string(message.validatorSrcAddress);
        }
        if (message.validatorDstAddress !== "") {
            writer.uint32(26).string(message.validatorDstAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVVTriplet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorSrcAddress = reader.string();
                    break;
                case 3:
                    message.validatorDstAddress = reader.string();
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
            validatorSrcAddress: (0, helpers_1.isSet)(object.validatorSrcAddress) ? String(object.validatorSrcAddress) : "",
            validatorDstAddress: (0, helpers_1.isSet)(object.validatorDstAddress) ? String(object.validatorDstAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorSrcAddress !== undefined && (obj.validatorSrcAddress = message.validatorSrcAddress);
        message.validatorDstAddress !== undefined && (obj.validatorDstAddress = message.validatorDstAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDVVTriplet();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorSrcAddress = object.validatorSrcAddress ?? "";
        message.validatorDstAddress = object.validatorDstAddress ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            delegatorAddress: object?.delegator_address,
            validatorSrcAddress: object?.validator_src_address,
            validatorDstAddress: object?.validator_dst_address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_src_address = message.validatorSrcAddress;
        obj.validator_dst_address = message.validatorDstAddress;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseDVVTriplet();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_src_address !== undefined && object.validator_src_address !== null) {
            message.validatorSrcAddress = object.validator_src_address;
        }
        if (object.validator_dst_address !== undefined && object.validator_dst_address !== null) {
            message.validatorDstAddress = object.validator_dst_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_src_address = message.validatorSrcAddress;
        obj.validator_dst_address = message.validatorDstAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DVVTriplet.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVVTriplet",
            value: exports.DVVTriplet.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DVVTriplet.decode(message.value);
    },
    toProto(message) {
        return exports.DVVTriplet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVVTriplet",
            value: exports.DVVTriplet.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.DVVTriplet.typeUrl, exports.DVVTriplet);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.DVVTriplet.aminoType, exports.DVVTriplet.typeUrl);
function createBaseDVVTriplets() {
    return {
        triplets: []
    };
}
exports.DVVTriplets = {
    typeUrl: "/cosmos.staking.v1beta1.DVVTriplets",
    aminoType: "cosmos-sdk/DVVTriplets",
    is(o) {
        return o && (o.$typeUrl === exports.DVVTriplets.typeUrl || Array.isArray(o.triplets) && (!o.triplets.length || exports.DVVTriplet.is(o.triplets[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.DVVTriplets.typeUrl || Array.isArray(o.triplets) && (!o.triplets.length || exports.DVVTriplet.isSDK(o.triplets[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.DVVTriplets.typeUrl || Array.isArray(o.triplets) && (!o.triplets.length || exports.DVVTriplet.isAmino(o.triplets[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.triplets) {
            exports.DVVTriplet.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVVTriplets();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triplets.push(exports.DVVTriplet.decode(reader, reader.uint32()));
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
            triplets: Array.isArray(object?.triplets) ? object.triplets.map((e) => exports.DVVTriplet.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.triplets) {
            obj.triplets = message.triplets.map(e => e ? exports.DVVTriplet.toJSON(e) : undefined);
        }
        else {
            obj.triplets = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDVVTriplets();
        message.triplets = object.triplets?.map(e => exports.DVVTriplet.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            triplets: Array.isArray(object?.triplets) ? object.triplets.map((e) => exports.DVVTriplet.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.triplets) {
            obj.triplets = message.triplets.map(e => e ? exports.DVVTriplet.toSDK(e) : undefined);
        }
        else {
            obj.triplets = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseDVVTriplets();
        message.triplets = object.triplets?.map(e => exports.DVVTriplet.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.triplets) {
            obj.triplets = message.triplets.map(e => e ? exports.DVVTriplet.toAmino(e) : undefined);
        }
        else {
            obj.triplets = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DVVTriplets.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DVVTriplets",
            value: exports.DVVTriplets.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DVVTriplets.decode(message.value);
    },
    toProto(message) {
        return exports.DVVTriplets.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DVVTriplets",
            value: exports.DVVTriplets.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.DVVTriplets.typeUrl, exports.DVVTriplets);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.DVVTriplets.aminoType, exports.DVVTriplets.typeUrl);
function createBaseDelegation() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        shares: ""
    };
}
exports.Delegation = {
    typeUrl: "/cosmos.staking.v1beta1.Delegation",
    aminoType: "cosmos-sdk/Delegation",
    is(o) {
        return o && (o.$typeUrl === exports.Delegation.typeUrl || typeof o.delegatorAddress === "string" && typeof o.validatorAddress === "string" && typeof o.shares === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Delegation.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && typeof o.shares === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Delegation.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && typeof o.shares === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.shares !== "") {
            writer.uint32(26).string(math_1.Decimal.fromUserInput(message.shares, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegation();
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
                    message.shares = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
            shares: (0, helpers_1.isSet)(object.shares) ? String(object.shares) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.shares !== undefined && (obj.shares = message.shares);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegation();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.shares = object.shares ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            delegatorAddress: object?.delegator_address,
            validatorAddress: object?.validator_address,
            shares: object?.shares
        };
    },
    toSDK(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_address = message.validatorAddress;
        obj.shares = message.shares;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseDelegation();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        if (object.shares !== undefined && object.shares !== null) {
            message.shares = object.shares;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_address = message.validatorAddress;
        obj.shares = message.shares;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Delegation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Delegation",
            value: exports.Delegation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Delegation.decode(message.value);
    },
    toProto(message) {
        return exports.Delegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Delegation",
            value: exports.Delegation.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Delegation.typeUrl, exports.Delegation);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Delegation.aminoType, exports.Delegation.typeUrl);
function createBaseUnbondingDelegation() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        entries: []
    };
}
exports.UnbondingDelegation = {
    typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegation",
    aminoType: "cosmos-sdk/UnbondingDelegation",
    is(o) {
        return o && (o.$typeUrl === exports.UnbondingDelegation.typeUrl || typeof o.delegatorAddress === "string" && typeof o.validatorAddress === "string" && Array.isArray(o.entries) && (!o.entries.length || exports.UnbondingDelegationEntry.is(o.entries[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.UnbondingDelegation.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Array.isArray(o.entries) && (!o.entries.length || exports.UnbondingDelegationEntry.isSDK(o.entries[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.UnbondingDelegation.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string" && Array.isArray(o.entries) && (!o.entries.length || exports.UnbondingDelegationEntry.isAmino(o.entries[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        for (const v of message.entries) {
            exports.UnbondingDelegationEntry.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnbondingDelegation();
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
                    message.entries.push(exports.UnbondingDelegationEntry.decode(reader, reader.uint32()));
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
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.UnbondingDelegationEntry.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.UnbondingDelegationEntry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUnbondingDelegation();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.entries = object.entries?.map(e => exports.UnbondingDelegationEntry.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            delegatorAddress: object?.delegator_address,
            validatorAddress: object?.validator_address,
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.UnbondingDelegationEntry.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_address = message.validatorAddress;
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.UnbondingDelegationEntry.toSDK(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseUnbondingDelegation();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        message.entries = object.entries?.map(e => exports.UnbondingDelegationEntry.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_address = message.validatorAddress;
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.UnbondingDelegationEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UnbondingDelegation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/UnbondingDelegation",
            value: exports.UnbondingDelegation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UnbondingDelegation.decode(message.value);
    },
    toProto(message) {
        return exports.UnbondingDelegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegation",
            value: exports.UnbondingDelegation.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.UnbondingDelegation.typeUrl, exports.UnbondingDelegation);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.UnbondingDelegation.aminoType, exports.UnbondingDelegation.typeUrl);
function createBaseUnbondingDelegationEntry() {
    return {
        creationHeight: BigInt(0),
        completionTime: new Date(),
        initialBalance: "",
        balance: ""
    };
}
exports.UnbondingDelegationEntry = {
    typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegationEntry",
    aminoType: "cosmos-sdk/UnbondingDelegationEntry",
    is(o) {
        return o && (o.$typeUrl === exports.UnbondingDelegationEntry.typeUrl || typeof o.creationHeight === "bigint" && timestamp_1.Timestamp.is(o.completionTime) && typeof o.initialBalance === "string" && typeof o.balance === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.UnbondingDelegationEntry.typeUrl || typeof o.creation_height === "bigint" && timestamp_1.Timestamp.isSDK(o.completion_time) && typeof o.initial_balance === "string" && typeof o.balance === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.UnbondingDelegationEntry.typeUrl || typeof o.creation_height === "bigint" && timestamp_1.Timestamp.isAmino(o.completion_time) && typeof o.initial_balance === "string" && typeof o.balance === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.creationHeight !== BigInt(0)) {
            writer.uint32(8).int64(message.creationHeight);
        }
        if (message.completionTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.completionTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.initialBalance !== "") {
            writer.uint32(26).string(message.initialBalance);
        }
        if (message.balance !== "") {
            writer.uint32(34).string(message.balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnbondingDelegationEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creationHeight = reader.int64();
                    break;
                case 2:
                    message.completionTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.initialBalance = reader.string();
                    break;
                case 4:
                    message.balance = reader.string();
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
            creationHeight: (0, helpers_1.isSet)(object.creationHeight) ? BigInt(object.creationHeight.toString()) : BigInt(0),
            completionTime: (0, helpers_1.isSet)(object.completionTime) ? new Date(object.completionTime) : undefined,
            initialBalance: (0, helpers_1.isSet)(object.initialBalance) ? String(object.initialBalance) : "",
            balance: (0, helpers_1.isSet)(object.balance) ? String(object.balance) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.creationHeight !== undefined && (obj.creationHeight = (message.creationHeight || BigInt(0)).toString());
        message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
        message.initialBalance !== undefined && (obj.initialBalance = message.initialBalance);
        message.balance !== undefined && (obj.balance = message.balance);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUnbondingDelegationEntry();
        message.creationHeight = object.creationHeight !== undefined && object.creationHeight !== null ? BigInt(object.creationHeight.toString()) : BigInt(0);
        message.completionTime = object.completionTime ?? undefined;
        message.initialBalance = object.initialBalance ?? "";
        message.balance = object.balance ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            creationHeight: object?.creation_height,
            completionTime: object.completion_time ?? undefined,
            initialBalance: object?.initial_balance,
            balance: object?.balance
        };
    },
    toSDK(message) {
        const obj = {};
        obj.creation_height = message.creationHeight;
        message.completionTime !== undefined && (obj.completion_time = message.completionTime ?? undefined);
        obj.initial_balance = message.initialBalance;
        obj.balance = message.balance;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseUnbondingDelegationEntry();
        if (object.creation_height !== undefined && object.creation_height !== null) {
            message.creationHeight = BigInt(object.creation_height);
        }
        if (object.completion_time !== undefined && object.completion_time !== null) {
            message.completionTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.completion_time));
        }
        if (object.initial_balance !== undefined && object.initial_balance !== null) {
            message.initialBalance = object.initial_balance;
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = object.balance;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creation_height = message.creationHeight ? message.creationHeight.toString() : undefined;
        obj.completion_time = message.completionTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.completionTime)) : undefined;
        obj.initial_balance = message.initialBalance;
        obj.balance = message.balance;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UnbondingDelegationEntry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/UnbondingDelegationEntry",
            value: exports.UnbondingDelegationEntry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UnbondingDelegationEntry.decode(message.value);
    },
    toProto(message) {
        return exports.UnbondingDelegationEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.UnbondingDelegationEntry",
            value: exports.UnbondingDelegationEntry.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.UnbondingDelegationEntry.typeUrl, exports.UnbondingDelegationEntry);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.UnbondingDelegationEntry.aminoType, exports.UnbondingDelegationEntry.typeUrl);
function createBaseRedelegationEntry() {
    return {
        creationHeight: BigInt(0),
        completionTime: new Date(),
        initialBalance: "",
        sharesDst: ""
    };
}
exports.RedelegationEntry = {
    typeUrl: "/cosmos.staking.v1beta1.RedelegationEntry",
    aminoType: "cosmos-sdk/RedelegationEntry",
    is(o) {
        return o && (o.$typeUrl === exports.RedelegationEntry.typeUrl || typeof o.creationHeight === "bigint" && timestamp_1.Timestamp.is(o.completionTime) && typeof o.initialBalance === "string" && typeof o.sharesDst === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.RedelegationEntry.typeUrl || typeof o.creation_height === "bigint" && timestamp_1.Timestamp.isSDK(o.completion_time) && typeof o.initial_balance === "string" && typeof o.shares_dst === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.RedelegationEntry.typeUrl || typeof o.creation_height === "bigint" && timestamp_1.Timestamp.isAmino(o.completion_time) && typeof o.initial_balance === "string" && typeof o.shares_dst === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.creationHeight !== BigInt(0)) {
            writer.uint32(8).int64(message.creationHeight);
        }
        if (message.completionTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.completionTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.initialBalance !== "") {
            writer.uint32(26).string(message.initialBalance);
        }
        if (message.sharesDst !== "") {
            writer.uint32(34).string(math_1.Decimal.fromUserInput(message.sharesDst, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creationHeight = reader.int64();
                    break;
                case 2:
                    message.completionTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.initialBalance = reader.string();
                    break;
                case 4:
                    message.sharesDst = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
            creationHeight: (0, helpers_1.isSet)(object.creationHeight) ? BigInt(object.creationHeight.toString()) : BigInt(0),
            completionTime: (0, helpers_1.isSet)(object.completionTime) ? new Date(object.completionTime) : undefined,
            initialBalance: (0, helpers_1.isSet)(object.initialBalance) ? String(object.initialBalance) : "",
            sharesDst: (0, helpers_1.isSet)(object.sharesDst) ? String(object.sharesDst) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.creationHeight !== undefined && (obj.creationHeight = (message.creationHeight || BigInt(0)).toString());
        message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
        message.initialBalance !== undefined && (obj.initialBalance = message.initialBalance);
        message.sharesDst !== undefined && (obj.sharesDst = message.sharesDst);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRedelegationEntry();
        message.creationHeight = object.creationHeight !== undefined && object.creationHeight !== null ? BigInt(object.creationHeight.toString()) : BigInt(0);
        message.completionTime = object.completionTime ?? undefined;
        message.initialBalance = object.initialBalance ?? "";
        message.sharesDst = object.sharesDst ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            creationHeight: object?.creation_height,
            completionTime: object.completion_time ?? undefined,
            initialBalance: object?.initial_balance,
            sharesDst: object?.shares_dst
        };
    },
    toSDK(message) {
        const obj = {};
        obj.creation_height = message.creationHeight;
        message.completionTime !== undefined && (obj.completion_time = message.completionTime ?? undefined);
        obj.initial_balance = message.initialBalance;
        obj.shares_dst = message.sharesDst;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseRedelegationEntry();
        if (object.creation_height !== undefined && object.creation_height !== null) {
            message.creationHeight = BigInt(object.creation_height);
        }
        if (object.completion_time !== undefined && object.completion_time !== null) {
            message.completionTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.fromAmino(object.completion_time));
        }
        if (object.initial_balance !== undefined && object.initial_balance !== null) {
            message.initialBalance = object.initial_balance;
        }
        if (object.shares_dst !== undefined && object.shares_dst !== null) {
            message.sharesDst = object.shares_dst;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.creation_height = message.creationHeight ? message.creationHeight.toString() : undefined;
        obj.completion_time = message.completionTime ? timestamp_1.Timestamp.toAmino((0, helpers_1.toTimestamp)(message.completionTime)) : undefined;
        obj.initial_balance = message.initialBalance;
        obj.shares_dst = message.sharesDst;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RedelegationEntry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/RedelegationEntry",
            value: exports.RedelegationEntry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.RedelegationEntry.decode(message.value);
    },
    toProto(message) {
        return exports.RedelegationEntry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.RedelegationEntry",
            value: exports.RedelegationEntry.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.RedelegationEntry.typeUrl, exports.RedelegationEntry);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.RedelegationEntry.aminoType, exports.RedelegationEntry.typeUrl);
function createBaseRedelegation() {
    return {
        delegatorAddress: "",
        validatorSrcAddress: "",
        validatorDstAddress: "",
        entries: []
    };
}
exports.Redelegation = {
    typeUrl: "/cosmos.staking.v1beta1.Redelegation",
    aminoType: "cosmos-sdk/Redelegation",
    is(o) {
        return o && (o.$typeUrl === exports.Redelegation.typeUrl || typeof o.delegatorAddress === "string" && typeof o.validatorSrcAddress === "string" && typeof o.validatorDstAddress === "string" && Array.isArray(o.entries) && (!o.entries.length || exports.RedelegationEntry.is(o.entries[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Redelegation.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_src_address === "string" && typeof o.validator_dst_address === "string" && Array.isArray(o.entries) && (!o.entries.length || exports.RedelegationEntry.isSDK(o.entries[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Redelegation.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_src_address === "string" && typeof o.validator_dst_address === "string" && Array.isArray(o.entries) && (!o.entries.length || exports.RedelegationEntry.isAmino(o.entries[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorSrcAddress !== "") {
            writer.uint32(18).string(message.validatorSrcAddress);
        }
        if (message.validatorDstAddress !== "") {
            writer.uint32(26).string(message.validatorDstAddress);
        }
        for (const v of message.entries) {
            exports.RedelegationEntry.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorSrcAddress = reader.string();
                    break;
                case 3:
                    message.validatorDstAddress = reader.string();
                    break;
                case 4:
                    message.entries.push(exports.RedelegationEntry.decode(reader, reader.uint32()));
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
            validatorSrcAddress: (0, helpers_1.isSet)(object.validatorSrcAddress) ? String(object.validatorSrcAddress) : "",
            validatorDstAddress: (0, helpers_1.isSet)(object.validatorDstAddress) ? String(object.validatorDstAddress) : "",
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.RedelegationEntry.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorSrcAddress !== undefined && (obj.validatorSrcAddress = message.validatorSrcAddress);
        message.validatorDstAddress !== undefined && (obj.validatorDstAddress = message.validatorDstAddress);
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.RedelegationEntry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRedelegation();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorSrcAddress = object.validatorSrcAddress ?? "";
        message.validatorDstAddress = object.validatorDstAddress ?? "";
        message.entries = object.entries?.map(e => exports.RedelegationEntry.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            delegatorAddress: object?.delegator_address,
            validatorSrcAddress: object?.validator_src_address,
            validatorDstAddress: object?.validator_dst_address,
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.RedelegationEntry.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_src_address = message.validatorSrcAddress;
        obj.validator_dst_address = message.validatorDstAddress;
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.RedelegationEntry.toSDK(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseRedelegation();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.validator_src_address !== undefined && object.validator_src_address !== null) {
            message.validatorSrcAddress = object.validator_src_address;
        }
        if (object.validator_dst_address !== undefined && object.validator_dst_address !== null) {
            message.validatorDstAddress = object.validator_dst_address;
        }
        message.entries = object.entries?.map(e => exports.RedelegationEntry.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_src_address = message.validatorSrcAddress;
        obj.validator_dst_address = message.validatorDstAddress;
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.RedelegationEntry.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Redelegation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Redelegation",
            value: exports.Redelegation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Redelegation.decode(message.value);
    },
    toProto(message) {
        return exports.Redelegation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Redelegation",
            value: exports.Redelegation.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Redelegation.typeUrl, exports.Redelegation);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Redelegation.aminoType, exports.Redelegation.typeUrl);
function createBaseParams() {
    return {
        unbondingTime: duration_1.Duration.fromPartial({}),
        maxValidators: 0,
        maxEntries: 0,
        historicalEntries: 0,
        bondDenom: "",
        minCommissionRate: ""
    };
}
exports.Params = {
    typeUrl: "/cosmos.staking.v1beta1.Params",
    aminoType: "cosmos-sdk/Params",
    is(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || duration_1.Duration.is(o.unbondingTime) && typeof o.maxValidators === "number" && typeof o.maxEntries === "number" && typeof o.historicalEntries === "number" && typeof o.bondDenom === "string" && typeof o.minCommissionRate === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || duration_1.Duration.isSDK(o.unbonding_time) && typeof o.max_validators === "number" && typeof o.max_entries === "number" && typeof o.historical_entries === "number" && typeof o.bond_denom === "string" && typeof o.min_commission_rate === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || duration_1.Duration.isAmino(o.unbonding_time) && typeof o.max_validators === "number" && typeof o.max_entries === "number" && typeof o.historical_entries === "number" && typeof o.bond_denom === "string" && typeof o.min_commission_rate === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.unbondingTime !== undefined) {
            duration_1.Duration.encode(message.unbondingTime, writer.uint32(10).fork()).ldelim();
        }
        if (message.maxValidators !== 0) {
            writer.uint32(16).uint32(message.maxValidators);
        }
        if (message.maxEntries !== 0) {
            writer.uint32(24).uint32(message.maxEntries);
        }
        if (message.historicalEntries !== 0) {
            writer.uint32(32).uint32(message.historicalEntries);
        }
        if (message.bondDenom !== "") {
            writer.uint32(42).string(message.bondDenom);
        }
        if (message.minCommissionRate !== "") {
            writer.uint32(50).string(math_1.Decimal.fromUserInput(message.minCommissionRate, 18).atomics);
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
                    message.unbondingTime = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.maxValidators = reader.uint32();
                    break;
                case 3:
                    message.maxEntries = reader.uint32();
                    break;
                case 4:
                    message.historicalEntries = reader.uint32();
                    break;
                case 5:
                    message.bondDenom = reader.string();
                    break;
                case 6:
                    message.minCommissionRate = math_1.Decimal.fromAtomics(reader.string(), 18).toString();
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
            unbondingTime: (0, helpers_1.isSet)(object.unbondingTime) ? duration_1.Duration.fromJSON(object.unbondingTime) : undefined,
            maxValidators: (0, helpers_1.isSet)(object.maxValidators) ? Number(object.maxValidators) : 0,
            maxEntries: (0, helpers_1.isSet)(object.maxEntries) ? Number(object.maxEntries) : 0,
            historicalEntries: (0, helpers_1.isSet)(object.historicalEntries) ? Number(object.historicalEntries) : 0,
            bondDenom: (0, helpers_1.isSet)(object.bondDenom) ? String(object.bondDenom) : "",
            minCommissionRate: (0, helpers_1.isSet)(object.minCommissionRate) ? String(object.minCommissionRate) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.unbondingTime !== undefined && (obj.unbondingTime = message.unbondingTime ? duration_1.Duration.toJSON(message.unbondingTime) : undefined);
        message.maxValidators !== undefined && (obj.maxValidators = Math.round(message.maxValidators));
        message.maxEntries !== undefined && (obj.maxEntries = Math.round(message.maxEntries));
        message.historicalEntries !== undefined && (obj.historicalEntries = Math.round(message.historicalEntries));
        message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
        message.minCommissionRate !== undefined && (obj.minCommissionRate = message.minCommissionRate);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.unbondingTime = object.unbondingTime !== undefined && object.unbondingTime !== null ? duration_1.Duration.fromPartial(object.unbondingTime) : undefined;
        message.maxValidators = object.maxValidators ?? 0;
        message.maxEntries = object.maxEntries ?? 0;
        message.historicalEntries = object.historicalEntries ?? 0;
        message.bondDenom = object.bondDenom ?? "";
        message.minCommissionRate = object.minCommissionRate ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            unbondingTime: object.unbonding_time ? duration_1.Duration.fromSDK(object.unbonding_time) : undefined,
            maxValidators: object?.max_validators,
            maxEntries: object?.max_entries,
            historicalEntries: object?.historical_entries,
            bondDenom: object?.bond_denom,
            minCommissionRate: object?.min_commission_rate
        };
    },
    toSDK(message) {
        const obj = {};
        message.unbondingTime !== undefined && (obj.unbonding_time = message.unbondingTime ? duration_1.Duration.toSDK(message.unbondingTime) : undefined);
        obj.max_validators = message.maxValidators;
        obj.max_entries = message.maxEntries;
        obj.historical_entries = message.historicalEntries;
        obj.bond_denom = message.bondDenom;
        obj.min_commission_rate = message.minCommissionRate;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.unbonding_time !== undefined && object.unbonding_time !== null) {
            message.unbondingTime = duration_1.Duration.fromAmino(object.unbonding_time);
        }
        if (object.max_validators !== undefined && object.max_validators !== null) {
            message.maxValidators = object.max_validators;
        }
        if (object.max_entries !== undefined && object.max_entries !== null) {
            message.maxEntries = object.max_entries;
        }
        if (object.historical_entries !== undefined && object.historical_entries !== null) {
            message.historicalEntries = object.historical_entries;
        }
        if (object.bond_denom !== undefined && object.bond_denom !== null) {
            message.bondDenom = object.bond_denom;
        }
        if (object.min_commission_rate !== undefined && object.min_commission_rate !== null) {
            message.minCommissionRate = object.min_commission_rate;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.unbonding_time = message.unbondingTime ? duration_1.Duration.toAmino(message.unbondingTime) : undefined;
        obj.max_validators = message.maxValidators;
        obj.max_entries = message.maxEntries;
        obj.historical_entries = message.historicalEntries;
        obj.bond_denom = message.bondDenom;
        obj.min_commission_rate = message.minCommissionRate;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
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
            typeUrl: "/cosmos.staking.v1beta1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
function createBaseDelegationResponse() {
    return {
        delegation: exports.Delegation.fromPartial({}),
        balance: coin_1.Coin.fromPartial({})
    };
}
exports.DelegationResponse = {
    typeUrl: "/cosmos.staking.v1beta1.DelegationResponse",
    aminoType: "cosmos-sdk/DelegationResponse",
    is(o) {
        return o && (o.$typeUrl === exports.DelegationResponse.typeUrl || exports.Delegation.is(o.delegation) && coin_1.Coin.is(o.balance));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.DelegationResponse.typeUrl || exports.Delegation.isSDK(o.delegation) && coin_1.Coin.isSDK(o.balance));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.DelegationResponse.typeUrl || exports.Delegation.isAmino(o.delegation) && coin_1.Coin.isAmino(o.balance));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegation !== undefined) {
            exports.Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== undefined) {
            coin_1.Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegation = exports.Delegation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.balance = coin_1.Coin.decode(reader, reader.uint32());
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
            delegation: (0, helpers_1.isSet)(object.delegation) ? exports.Delegation.fromJSON(object.delegation) : undefined,
            balance: (0, helpers_1.isSet)(object.balance) ? coin_1.Coin.fromJSON(object.balance) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegation !== undefined && (obj.delegation = message.delegation ? exports.Delegation.toJSON(message.delegation) : undefined);
        message.balance !== undefined && (obj.balance = message.balance ? coin_1.Coin.toJSON(message.balance) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegationResponse();
        message.delegation = object.delegation !== undefined && object.delegation !== null ? exports.Delegation.fromPartial(object.delegation) : undefined;
        message.balance = object.balance !== undefined && object.balance !== null ? coin_1.Coin.fromPartial(object.balance) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            delegation: object.delegation ? exports.Delegation.fromSDK(object.delegation) : undefined,
            balance: object.balance ? coin_1.Coin.fromSDK(object.balance) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.delegation !== undefined && (obj.delegation = message.delegation ? exports.Delegation.toSDK(message.delegation) : undefined);
        message.balance !== undefined && (obj.balance = message.balance ? coin_1.Coin.toSDK(message.balance) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseDelegationResponse();
        if (object.delegation !== undefined && object.delegation !== null) {
            message.delegation = exports.Delegation.fromAmino(object.delegation);
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = coin_1.Coin.fromAmino(object.balance);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegation = message.delegation ? exports.Delegation.toAmino(message.delegation) : undefined;
        obj.balance = message.balance ? coin_1.Coin.toAmino(message.balance) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DelegationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/DelegationResponse",
            value: exports.DelegationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.DelegationResponse.decode(message.value);
    },
    toProto(message) {
        return exports.DelegationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.DelegationResponse",
            value: exports.DelegationResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.DelegationResponse.typeUrl, exports.DelegationResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.DelegationResponse.aminoType, exports.DelegationResponse.typeUrl);
function createBaseRedelegationEntryResponse() {
    return {
        redelegationEntry: exports.RedelegationEntry.fromPartial({}),
        balance: ""
    };
}
exports.RedelegationEntryResponse = {
    typeUrl: "/cosmos.staking.v1beta1.RedelegationEntryResponse",
    aminoType: "cosmos-sdk/RedelegationEntryResponse",
    is(o) {
        return o && (o.$typeUrl === exports.RedelegationEntryResponse.typeUrl || exports.RedelegationEntry.is(o.redelegationEntry) && typeof o.balance === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.RedelegationEntryResponse.typeUrl || exports.RedelegationEntry.isSDK(o.redelegation_entry) && typeof o.balance === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.RedelegationEntryResponse.typeUrl || exports.RedelegationEntry.isAmino(o.redelegation_entry) && typeof o.balance === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.redelegationEntry !== undefined) {
            exports.RedelegationEntry.encode(message.redelegationEntry, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== "") {
            writer.uint32(34).string(message.balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationEntryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegationEntry = exports.RedelegationEntry.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.balance = reader.string();
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
            redelegationEntry: (0, helpers_1.isSet)(object.redelegationEntry) ? exports.RedelegationEntry.fromJSON(object.redelegationEntry) : undefined,
            balance: (0, helpers_1.isSet)(object.balance) ? String(object.balance) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.redelegationEntry !== undefined && (obj.redelegationEntry = message.redelegationEntry ? exports.RedelegationEntry.toJSON(message.redelegationEntry) : undefined);
        message.balance !== undefined && (obj.balance = message.balance);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRedelegationEntryResponse();
        message.redelegationEntry = object.redelegationEntry !== undefined && object.redelegationEntry !== null ? exports.RedelegationEntry.fromPartial(object.redelegationEntry) : undefined;
        message.balance = object.balance ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            redelegationEntry: object.redelegation_entry ? exports.RedelegationEntry.fromSDK(object.redelegation_entry) : undefined,
            balance: object?.balance
        };
    },
    toSDK(message) {
        const obj = {};
        message.redelegationEntry !== undefined && (obj.redelegation_entry = message.redelegationEntry ? exports.RedelegationEntry.toSDK(message.redelegationEntry) : undefined);
        obj.balance = message.balance;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseRedelegationEntryResponse();
        if (object.redelegation_entry !== undefined && object.redelegation_entry !== null) {
            message.redelegationEntry = exports.RedelegationEntry.fromAmino(object.redelegation_entry);
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = object.balance;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.redelegation_entry = message.redelegationEntry ? exports.RedelegationEntry.toAmino(message.redelegationEntry) : undefined;
        obj.balance = message.balance;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RedelegationEntryResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/RedelegationEntryResponse",
            value: exports.RedelegationEntryResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.RedelegationEntryResponse.decode(message.value);
    },
    toProto(message) {
        return exports.RedelegationEntryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.RedelegationEntryResponse",
            value: exports.RedelegationEntryResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.RedelegationEntryResponse.typeUrl, exports.RedelegationEntryResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.RedelegationEntryResponse.aminoType, exports.RedelegationEntryResponse.typeUrl);
function createBaseRedelegationResponse() {
    return {
        redelegation: exports.Redelegation.fromPartial({}),
        entries: []
    };
}
exports.RedelegationResponse = {
    typeUrl: "/cosmos.staking.v1beta1.RedelegationResponse",
    aminoType: "cosmos-sdk/RedelegationResponse",
    is(o) {
        return o && (o.$typeUrl === exports.RedelegationResponse.typeUrl || exports.Redelegation.is(o.redelegation) && Array.isArray(o.entries) && (!o.entries.length || exports.RedelegationEntryResponse.is(o.entries[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.RedelegationResponse.typeUrl || exports.Redelegation.isSDK(o.redelegation) && Array.isArray(o.entries) && (!o.entries.length || exports.RedelegationEntryResponse.isSDK(o.entries[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.RedelegationResponse.typeUrl || exports.Redelegation.isAmino(o.redelegation) && Array.isArray(o.entries) && (!o.entries.length || exports.RedelegationEntryResponse.isAmino(o.entries[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.redelegation !== undefined) {
            exports.Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.entries) {
            exports.RedelegationEntryResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegation = exports.Redelegation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.entries.push(exports.RedelegationEntryResponse.decode(reader, reader.uint32()));
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
            redelegation: (0, helpers_1.isSet)(object.redelegation) ? exports.Redelegation.fromJSON(object.redelegation) : undefined,
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.RedelegationEntryResponse.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.redelegation !== undefined && (obj.redelegation = message.redelegation ? exports.Redelegation.toJSON(message.redelegation) : undefined);
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.RedelegationEntryResponse.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRedelegationResponse();
        message.redelegation = object.redelegation !== undefined && object.redelegation !== null ? exports.Redelegation.fromPartial(object.redelegation) : undefined;
        message.entries = object.entries?.map(e => exports.RedelegationEntryResponse.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            redelegation: object.redelegation ? exports.Redelegation.fromSDK(object.redelegation) : undefined,
            entries: Array.isArray(object?.entries) ? object.entries.map((e) => exports.RedelegationEntryResponse.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        message.redelegation !== undefined && (obj.redelegation = message.redelegation ? exports.Redelegation.toSDK(message.redelegation) : undefined);
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.RedelegationEntryResponse.toSDK(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseRedelegationResponse();
        if (object.redelegation !== undefined && object.redelegation !== null) {
            message.redelegation = exports.Redelegation.fromAmino(object.redelegation);
        }
        message.entries = object.entries?.map(e => exports.RedelegationEntryResponse.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.redelegation = message.redelegation ? exports.Redelegation.toAmino(message.redelegation) : undefined;
        if (message.entries) {
            obj.entries = message.entries.map(e => e ? exports.RedelegationEntryResponse.toAmino(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.RedelegationResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/RedelegationResponse",
            value: exports.RedelegationResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.RedelegationResponse.decode(message.value);
    },
    toProto(message) {
        return exports.RedelegationResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.RedelegationResponse",
            value: exports.RedelegationResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.RedelegationResponse.typeUrl, exports.RedelegationResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.RedelegationResponse.aminoType, exports.RedelegationResponse.typeUrl);
function createBasePool() {
    return {
        notBondedTokens: "",
        bondedTokens: ""
    };
}
exports.Pool = {
    typeUrl: "/cosmos.staking.v1beta1.Pool",
    aminoType: "cosmos-sdk/Pool",
    is(o) {
        return o && (o.$typeUrl === exports.Pool.typeUrl || typeof o.notBondedTokens === "string" && typeof o.bondedTokens === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Pool.typeUrl || typeof o.not_bonded_tokens === "string" && typeof o.bonded_tokens === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Pool.typeUrl || typeof o.not_bonded_tokens === "string" && typeof o.bonded_tokens === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.notBondedTokens !== "") {
            writer.uint32(10).string(message.notBondedTokens);
        }
        if (message.bondedTokens !== "") {
            writer.uint32(18).string(message.bondedTokens);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.notBondedTokens = reader.string();
                    break;
                case 2:
                    message.bondedTokens = reader.string();
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
            notBondedTokens: (0, helpers_1.isSet)(object.notBondedTokens) ? String(object.notBondedTokens) : "",
            bondedTokens: (0, helpers_1.isSet)(object.bondedTokens) ? String(object.bondedTokens) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.notBondedTokens !== undefined && (obj.notBondedTokens = message.notBondedTokens);
        message.bondedTokens !== undefined && (obj.bondedTokens = message.bondedTokens);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePool();
        message.notBondedTokens = object.notBondedTokens ?? "";
        message.bondedTokens = object.bondedTokens ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            notBondedTokens: object?.not_bonded_tokens,
            bondedTokens: object?.bonded_tokens
        };
    },
    toSDK(message) {
        const obj = {};
        obj.not_bonded_tokens = message.notBondedTokens;
        obj.bonded_tokens = message.bondedTokens;
        return obj;
    },
    fromAmino(object) {
        const message = createBasePool();
        if (object.not_bonded_tokens !== undefined && object.not_bonded_tokens !== null) {
            message.notBondedTokens = object.not_bonded_tokens;
        }
        if (object.bonded_tokens !== undefined && object.bonded_tokens !== null) {
            message.bondedTokens = object.bonded_tokens;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.not_bonded_tokens = message.notBondedTokens;
        obj.bonded_tokens = message.bondedTokens;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Pool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Pool",
            value: exports.Pool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Pool.decode(message.value);
    },
    toProto(message) {
        return exports.Pool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.Pool",
            value: exports.Pool.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Pool.typeUrl, exports.Pool);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Pool.aminoType, exports.Pool.typeUrl);
