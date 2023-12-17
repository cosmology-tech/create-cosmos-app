"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const params_1 = require("./params");
const claim_1 = require("./claim");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
function createBaseGenesisState() {
    return {
        moduleAccountBalance: coin_1.Coin.fromPartial({}),
        params: params_1.Params.fromPartial({}),
        claimRecords: []
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.claim.v1beta1.GenesisState",
    aminoType: "osmosis/claim/genesis-state",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || coin_1.Coin.is(o.moduleAccountBalance) && params_1.Params.is(o.params) && Array.isArray(o.claimRecords) && (!o.claimRecords.length || claim_1.ClaimRecord.is(o.claimRecords[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || coin_1.Coin.isSDK(o.module_account_balance) && params_1.Params.isSDK(o.params) && Array.isArray(o.claim_records) && (!o.claim_records.length || claim_1.ClaimRecord.isSDK(o.claim_records[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || coin_1.Coin.isAmino(o.module_account_balance) && params_1.Params.isAmino(o.params) && Array.isArray(o.claim_records) && (!o.claim_records.length || claim_1.ClaimRecord.isAmino(o.claim_records[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.moduleAccountBalance !== undefined) {
            coin_1.Coin.encode(message.moduleAccountBalance, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.claimRecords) {
            claim_1.ClaimRecord.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.moduleAccountBalance = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.claimRecords.push(claim_1.ClaimRecord.decode(reader, reader.uint32()));
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
            moduleAccountBalance: (0, helpers_1.isSet)(object.moduleAccountBalance) ? coin_1.Coin.fromJSON(object.moduleAccountBalance) : undefined,
            params: (0, helpers_1.isSet)(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
            claimRecords: Array.isArray(object?.claimRecords) ? object.claimRecords.map((e) => claim_1.ClaimRecord.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.moduleAccountBalance !== undefined && (obj.moduleAccountBalance = message.moduleAccountBalance ? coin_1.Coin.toJSON(message.moduleAccountBalance) : undefined);
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.claimRecords) {
            obj.claimRecords = message.claimRecords.map(e => e ? claim_1.ClaimRecord.toJSON(e) : undefined);
        }
        else {
            obj.claimRecords = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.moduleAccountBalance = object.moduleAccountBalance !== undefined && object.moduleAccountBalance !== null ? coin_1.Coin.fromPartial(object.moduleAccountBalance) : undefined;
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.claimRecords = object.claimRecords?.map(e => claim_1.ClaimRecord.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            moduleAccountBalance: object.module_account_balance ? coin_1.Coin.fromSDK(object.module_account_balance) : undefined,
            params: object.params ? params_1.Params.fromSDK(object.params) : undefined,
            claimRecords: Array.isArray(object?.claim_records) ? object.claim_records.map((e) => claim_1.ClaimRecord.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        message.moduleAccountBalance !== undefined && (obj.module_account_balance = message.moduleAccountBalance ? coin_1.Coin.toSDK(message.moduleAccountBalance) : undefined);
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toSDK(message.params) : undefined);
        if (message.claimRecords) {
            obj.claim_records = message.claimRecords.map(e => e ? claim_1.ClaimRecord.toSDK(e) : undefined);
        }
        else {
            obj.claim_records = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.module_account_balance !== undefined && object.module_account_balance !== null) {
            message.moduleAccountBalance = coin_1.Coin.fromAmino(object.module_account_balance);
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        message.claimRecords = object.claim_records?.map(e => claim_1.ClaimRecord.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.module_account_balance = message.moduleAccountBalance ? coin_1.Coin.toAmino(message.moduleAccountBalance) : undefined;
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        if (message.claimRecords) {
            obj.claim_records = message.claimRecords.map(e => e ? claim_1.ClaimRecord.toAmino(e) : undefined);
        }
        else {
            obj.claim_records = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/claim/genesis-state",
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
            typeUrl: "/osmosis.claim.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
