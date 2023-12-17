"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Balance = exports.GenesisState = void 0;
const bank_1 = require("./bank");
const coin_1 = require("../../base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseGenesisState() {
    return {
        params: bank_1.Params.fromPartial({}),
        balances: [],
        supply: [],
        denomMetadata: []
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.bank.v1beta1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || bank_1.Params.is(o.params) && Array.isArray(o.balances) && (!o.balances.length || exports.Balance.is(o.balances[0])) && Array.isArray(o.supply) && (!o.supply.length || coin_1.Coin.is(o.supply[0])) && Array.isArray(o.denomMetadata) && (!o.denomMetadata.length || bank_1.Metadata.is(o.denomMetadata[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || bank_1.Params.isSDK(o.params) && Array.isArray(o.balances) && (!o.balances.length || exports.Balance.isSDK(o.balances[0])) && Array.isArray(o.supply) && (!o.supply.length || coin_1.Coin.isSDK(o.supply[0])) && Array.isArray(o.denom_metadata) && (!o.denom_metadata.length || bank_1.Metadata.isSDK(o.denom_metadata[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || bank_1.Params.isAmino(o.params) && Array.isArray(o.balances) && (!o.balances.length || exports.Balance.isAmino(o.balances[0])) && Array.isArray(o.supply) && (!o.supply.length || coin_1.Coin.isAmino(o.supply[0])) && Array.isArray(o.denom_metadata) && (!o.denom_metadata.length || bank_1.Metadata.isAmino(o.denom_metadata[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            bank_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.balances) {
            exports.Balance.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.supply) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.denomMetadata) {
            bank_1.Metadata.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = bank_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.balances.push(exports.Balance.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.supply.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.denomMetadata.push(bank_1.Metadata.decode(reader, reader.uint32()));
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
            params: (0, helpers_1.isSet)(object.params) ? bank_1.Params.fromJSON(object.params) : undefined,
            balances: Array.isArray(object?.balances) ? object.balances.map((e) => exports.Balance.fromJSON(e)) : [],
            supply: Array.isArray(object?.supply) ? object.supply.map((e) => coin_1.Coin.fromJSON(e)) : [],
            denomMetadata: Array.isArray(object?.denomMetadata) ? object.denomMetadata.map((e) => bank_1.Metadata.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? bank_1.Params.toJSON(message.params) : undefined);
        if (message.balances) {
            obj.balances = message.balances.map(e => e ? exports.Balance.toJSON(e) : undefined);
        }
        else {
            obj.balances = [];
        }
        if (message.supply) {
            obj.supply = message.supply.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.supply = [];
        }
        if (message.denomMetadata) {
            obj.denomMetadata = message.denomMetadata.map(e => e ? bank_1.Metadata.toJSON(e) : undefined);
        }
        else {
            obj.denomMetadata = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? bank_1.Params.fromPartial(object.params) : undefined;
        message.balances = object.balances?.map(e => exports.Balance.fromPartial(e)) || [];
        message.supply = object.supply?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.denomMetadata = object.denomMetadata?.map(e => bank_1.Metadata.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? bank_1.Params.fromSDK(object.params) : undefined,
            balances: Array.isArray(object?.balances) ? object.balances.map((e) => exports.Balance.fromSDK(e)) : [],
            supply: Array.isArray(object?.supply) ? object.supply.map((e) => coin_1.Coin.fromSDK(e)) : [],
            denomMetadata: Array.isArray(object?.denom_metadata) ? object.denom_metadata.map((e) => bank_1.Metadata.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? bank_1.Params.toSDK(message.params) : undefined);
        if (message.balances) {
            obj.balances = message.balances.map(e => e ? exports.Balance.toSDK(e) : undefined);
        }
        else {
            obj.balances = [];
        }
        if (message.supply) {
            obj.supply = message.supply.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.supply = [];
        }
        if (message.denomMetadata) {
            obj.denom_metadata = message.denomMetadata.map(e => e ? bank_1.Metadata.toSDK(e) : undefined);
        }
        else {
            obj.denom_metadata = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = bank_1.Params.fromAmino(object.params);
        }
        message.balances = object.balances?.map(e => exports.Balance.fromAmino(e)) || [];
        message.supply = object.supply?.map(e => coin_1.Coin.fromAmino(e)) || [];
        message.denomMetadata = object.denom_metadata?.map(e => bank_1.Metadata.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? bank_1.Params.toAmino(message.params) : undefined;
        if (message.balances) {
            obj.balances = message.balances.map(e => e ? exports.Balance.toAmino(e) : undefined);
        }
        else {
            obj.balances = [];
        }
        if (message.supply) {
            obj.supply = message.supply.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.supply = [];
        }
        if (message.denomMetadata) {
            obj.denom_metadata = message.denomMetadata.map(e => e ? bank_1.Metadata.toAmino(e) : undefined);
        }
        else {
            obj.denom_metadata = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
function createBaseBalance() {
    return {
        address: "",
        coins: []
    };
}
exports.Balance = {
    typeUrl: "/cosmos.bank.v1beta1.Balance",
    aminoType: "cosmos-sdk/Balance",
    is(o) {
        return o && (o.$typeUrl === exports.Balance.typeUrl || typeof o.address === "string" && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.is(o.coins[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Balance.typeUrl || typeof o.address === "string" && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isSDK(o.coins[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Balance.typeUrl || typeof o.address === "string" && Array.isArray(o.coins) && (!o.coins.length || coin_1.Coin.isAmino(o.coins[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.coins) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBalance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.coins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBalance();
        message.address = object.address ?? "";
        message.coins = object.coins?.map(e => coin_1.Coin.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            coins: Array.isArray(object?.coins) ? object.coins.map((e) => coin_1.Coin.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseBalance();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.coins = object.coins?.map(e => coin_1.Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        if (message.coins) {
            obj.coins = message.coins.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.coins = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Balance.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Balance",
            value: exports.Balance.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Balance.decode(message.value);
    },
    toProto(message) {
        return exports.Balance.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.Balance",
            value: exports.Balance.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Balance.typeUrl, exports.Balance);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Balance.aminoType, exports.Balance.typeUrl);
