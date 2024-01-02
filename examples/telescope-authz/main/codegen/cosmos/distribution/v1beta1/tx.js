"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgFundCommunityPoolResponse = exports.MsgFundCommunityPool = exports.MsgWithdrawValidatorCommissionResponse = exports.MsgWithdrawValidatorCommission = exports.MsgWithdrawDelegatorRewardResponse = exports.MsgWithdrawDelegatorReward = exports.MsgSetWithdrawAddressResponse = exports.MsgSetWithdrawAddress = void 0;
const coin_1 = require("../../base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseMsgSetWithdrawAddress() {
    return {
        delegatorAddress: "",
        withdrawAddress: ""
    };
}
exports.MsgSetWithdrawAddress = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
    aminoType: "cosmos-sdk/MsgModifyWithdrawAddress",
    is(o) {
        return o && (o.$typeUrl === exports.MsgSetWithdrawAddress.typeUrl || typeof o.delegatorAddress === "string" && typeof o.withdrawAddress === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgSetWithdrawAddress.typeUrl || typeof o.delegator_address === "string" && typeof o.withdraw_address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgSetWithdrawAddress.typeUrl || typeof o.delegator_address === "string" && typeof o.withdraw_address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.withdrawAddress !== "") {
            writer.uint32(18).string(message.withdrawAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetWithdrawAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.withdrawAddress = reader.string();
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
            withdrawAddress: (0, helpers_1.isSet)(object.withdrawAddress) ? String(object.withdrawAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSetWithdrawAddress();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.withdrawAddress = object.withdrawAddress ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            delegatorAddress: object?.delegator_address,
            withdrawAddress: object?.withdraw_address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.withdraw_address = message.withdrawAddress;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgSetWithdrawAddress();
        if (object.delegator_address !== undefined && object.delegator_address !== null) {
            message.delegatorAddress = object.delegator_address;
        }
        if (object.withdraw_address !== undefined && object.withdraw_address !== null) {
            message.withdrawAddress = object.withdraw_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.withdraw_address = message.withdrawAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetWithdrawAddress.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgModifyWithdrawAddress",
            value: exports.MsgSetWithdrawAddress.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetWithdrawAddress.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetWithdrawAddress.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
            value: exports.MsgSetWithdrawAddress.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSetWithdrawAddress.typeUrl, exports.MsgSetWithdrawAddress);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSetWithdrawAddress.aminoType, exports.MsgSetWithdrawAddress.typeUrl);
function createBaseMsgSetWithdrawAddressResponse() {
    return {};
}
exports.MsgSetWithdrawAddressResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse",
    aminoType: "cosmos-sdk/MsgSetWithdrawAddressResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgSetWithdrawAddressResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgSetWithdrawAddressResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgSetWithdrawAddressResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSetWithdrawAddressResponse();
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSetWithdrawAddressResponse();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        const message = createBaseMsgSetWithdrawAddressResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSetWithdrawAddressResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSetWithdrawAddressResponse",
            value: exports.MsgSetWithdrawAddressResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSetWithdrawAddressResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSetWithdrawAddressResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse",
            value: exports.MsgSetWithdrawAddressResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgSetWithdrawAddressResponse.typeUrl, exports.MsgSetWithdrawAddressResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgSetWithdrawAddressResponse.aminoType, exports.MsgSetWithdrawAddressResponse.typeUrl);
function createBaseMsgWithdrawDelegatorReward() {
    return {
        delegatorAddress: "",
        validatorAddress: ""
    };
}
exports.MsgWithdrawDelegatorReward = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
    aminoType: "cosmos-sdk/MsgWithdrawDelegationReward",
    is(o) {
        return o && (o.$typeUrl === exports.MsgWithdrawDelegatorReward.typeUrl || typeof o.delegatorAddress === "string" && typeof o.validatorAddress === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgWithdrawDelegatorReward.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgWithdrawDelegatorReward.typeUrl || typeof o.delegator_address === "string" && typeof o.validator_address === "string");
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
        const message = createBaseMsgWithdrawDelegatorReward();
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
        const message = createBaseMsgWithdrawDelegatorReward();
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
        const message = createBaseMsgWithdrawDelegatorReward();
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
        return exports.MsgWithdrawDelegatorReward.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgWithdrawDelegationReward",
            value: exports.MsgWithdrawDelegatorReward.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawDelegatorReward.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawDelegatorReward.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
            value: exports.MsgWithdrawDelegatorReward.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgWithdrawDelegatorReward.typeUrl, exports.MsgWithdrawDelegatorReward);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgWithdrawDelegatorReward.aminoType, exports.MsgWithdrawDelegatorReward.typeUrl);
function createBaseMsgWithdrawDelegatorRewardResponse() {
    return {
        amount: []
    };
}
exports.MsgWithdrawDelegatorRewardResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse",
    aminoType: "cosmos-sdk/MsgWithdrawDelegatorRewardResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgWithdrawDelegatorRewardResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.is(o.amount[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgWithdrawDelegatorRewardResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isSDK(o.amount[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgWithdrawDelegatorRewardResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isAmino(o.amount[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawDelegatorRewardResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawDelegatorRewardResponse();
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgWithdrawDelegatorRewardResponse();
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdrawDelegatorRewardResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgWithdrawDelegatorRewardResponse",
            value: exports.MsgWithdrawDelegatorRewardResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawDelegatorRewardResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawDelegatorRewardResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse",
            value: exports.MsgWithdrawDelegatorRewardResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgWithdrawDelegatorRewardResponse.typeUrl, exports.MsgWithdrawDelegatorRewardResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgWithdrawDelegatorRewardResponse.aminoType, exports.MsgWithdrawDelegatorRewardResponse.typeUrl);
function createBaseMsgWithdrawValidatorCommission() {
    return {
        validatorAddress: ""
    };
}
exports.MsgWithdrawValidatorCommission = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
    aminoType: "cosmos-sdk/MsgWithdrawValidatorCommission",
    is(o) {
        return o && (o.$typeUrl === exports.MsgWithdrawValidatorCommission.typeUrl || typeof o.validatorAddress === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgWithdrawValidatorCommission.typeUrl || typeof o.validator_address === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgWithdrawValidatorCommission.typeUrl || typeof o.validator_address === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawValidatorCommission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            validatorAddress: (0, helpers_1.isSet)(object.validatorAddress) ? String(object.validatorAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawValidatorCommission();
        message.validatorAddress = object.validatorAddress ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            validatorAddress: object?.validator_address
        };
    },
    toSDK(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgWithdrawValidatorCommission();
        if (object.validator_address !== undefined && object.validator_address !== null) {
            message.validatorAddress = object.validator_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdrawValidatorCommission.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgWithdrawValidatorCommission",
            value: exports.MsgWithdrawValidatorCommission.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawValidatorCommission.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawValidatorCommission.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
            value: exports.MsgWithdrawValidatorCommission.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgWithdrawValidatorCommission.typeUrl, exports.MsgWithdrawValidatorCommission);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgWithdrawValidatorCommission.aminoType, exports.MsgWithdrawValidatorCommission.typeUrl);
function createBaseMsgWithdrawValidatorCommissionResponse() {
    return {
        amount: []
    };
}
exports.MsgWithdrawValidatorCommissionResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse",
    aminoType: "cosmos-sdk/MsgWithdrawValidatorCommissionResponse",
    is(o) {
        return o && (o.$typeUrl === exports.MsgWithdrawValidatorCommissionResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.is(o.amount[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgWithdrawValidatorCommissionResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isSDK(o.amount[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgWithdrawValidatorCommissionResponse.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isAmino(o.amount[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawValidatorCommissionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawValidatorCommissionResponse();
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgWithdrawValidatorCommissionResponse();
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdrawValidatorCommissionResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgWithdrawValidatorCommissionResponse",
            value: exports.MsgWithdrawValidatorCommissionResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawValidatorCommissionResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawValidatorCommissionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse",
            value: exports.MsgWithdrawValidatorCommissionResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgWithdrawValidatorCommissionResponse.typeUrl, exports.MsgWithdrawValidatorCommissionResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgWithdrawValidatorCommissionResponse.aminoType, exports.MsgWithdrawValidatorCommissionResponse.typeUrl);
function createBaseMsgFundCommunityPool() {
    return {
        amount: [],
        depositor: ""
    };
}
exports.MsgFundCommunityPool = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
    aminoType: "cosmos-sdk/MsgFundCommunityPool",
    is(o) {
        return o && (o.$typeUrl === exports.MsgFundCommunityPool.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.is(o.amount[0])) && typeof o.depositor === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.MsgFundCommunityPool.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isSDK(o.amount[0])) && typeof o.depositor === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.MsgFundCommunityPool.typeUrl || Array.isArray(o.amount) && (!o.amount.length || coin_1.Coin.isAmino(o.amount[0])) && typeof o.depositor === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.depositor !== "") {
            writer.uint32(18).string(message.depositor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFundCommunityPool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.depositor = reader.string();
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
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromJSON(e)) : [],
            depositor: (0, helpers_1.isSet)(object.depositor) ? String(object.depositor) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        message.depositor !== undefined && (obj.depositor = message.depositor);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgFundCommunityPool();
        message.amount = object.amount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.depositor = object.depositor ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => coin_1.Coin.fromSDK(e)) : [],
            depositor: object?.depositor
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        obj.depositor = message.depositor;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseMsgFundCommunityPool();
        message.amount = object.amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        if (object.depositor !== undefined && object.depositor !== null) {
            message.depositor = object.depositor;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        obj.depositor = message.depositor;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgFundCommunityPool.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgFundCommunityPool",
            value: exports.MsgFundCommunityPool.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgFundCommunityPool.decode(message.value);
    },
    toProto(message) {
        return exports.MsgFundCommunityPool.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
            value: exports.MsgFundCommunityPool.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgFundCommunityPool.typeUrl, exports.MsgFundCommunityPool);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgFundCommunityPool.aminoType, exports.MsgFundCommunityPool.typeUrl);
function createBaseMsgFundCommunityPoolResponse() {
    return {};
}
exports.MsgFundCommunityPoolResponse = {
    typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse",
    aminoType: "cosmos-sdk/MsgFundCommunityPoolResponse",
    is(o) {
        return o && o.$typeUrl === exports.MsgFundCommunityPoolResponse.typeUrl;
    },
    isSDK(o) {
        return o && o.$typeUrl === exports.MsgFundCommunityPoolResponse.typeUrl;
    },
    isAmino(o) {
        return o && o.$typeUrl === exports.MsgFundCommunityPoolResponse.typeUrl;
    },
    encode(_, writer = binary_1.BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgFundCommunityPoolResponse();
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgFundCommunityPoolResponse();
        return message;
    },
    fromSDK(_) {
        return {};
    },
    toSDK(_) {
        const obj = {};
        return obj;
    },
    fromAmino(_) {
        const message = createBaseMsgFundCommunityPoolResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgFundCommunityPoolResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgFundCommunityPoolResponse",
            value: exports.MsgFundCommunityPoolResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgFundCommunityPoolResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgFundCommunityPoolResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse",
            value: exports.MsgFundCommunityPoolResponse.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.MsgFundCommunityPoolResponse.typeUrl, exports.MsgFundCommunityPoolResponse);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.MsgFundCommunityPoolResponse.aminoType, exports.MsgFundCommunityPoolResponse.typeUrl);
