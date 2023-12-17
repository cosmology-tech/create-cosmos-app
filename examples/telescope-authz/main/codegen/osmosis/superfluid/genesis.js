"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
const params_1 = require("./params");
const superfluid_1 = require("./superfluid");
const binary_1 = require("../../binary");
const helpers_1 = require("../../helpers");
const registry_1 = require("../../registry");
function createBaseGenesisState() {
    return {
        params: params_1.Params.fromPartial({}),
        superfluidAssets: [],
        osmoEquivalentMultipliers: [],
        intermediaryAccounts: [],
        intemediaryAccountConnections: []
    };
}
exports.GenesisState = {
    typeUrl: "/osmosis.superfluid.GenesisState",
    aminoType: "osmosis/genesis-state",
    is(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || params_1.Params.is(o.params) && Array.isArray(o.superfluidAssets) && (!o.superfluidAssets.length || superfluid_1.SuperfluidAsset.is(o.superfluidAssets[0])) && Array.isArray(o.osmoEquivalentMultipliers) && (!o.osmoEquivalentMultipliers.length || superfluid_1.OsmoEquivalentMultiplierRecord.is(o.osmoEquivalentMultipliers[0])) && Array.isArray(o.intermediaryAccounts) && (!o.intermediaryAccounts.length || superfluid_1.SuperfluidIntermediaryAccount.is(o.intermediaryAccounts[0])) && Array.isArray(o.intemediaryAccountConnections) && (!o.intemediaryAccountConnections.length || superfluid_1.LockIdIntermediaryAccountConnection.is(o.intemediaryAccountConnections[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || params_1.Params.isSDK(o.params) && Array.isArray(o.superfluid_assets) && (!o.superfluid_assets.length || superfluid_1.SuperfluidAsset.isSDK(o.superfluid_assets[0])) && Array.isArray(o.osmo_equivalent_multipliers) && (!o.osmo_equivalent_multipliers.length || superfluid_1.OsmoEquivalentMultiplierRecord.isSDK(o.osmo_equivalent_multipliers[0])) && Array.isArray(o.intermediary_accounts) && (!o.intermediary_accounts.length || superfluid_1.SuperfluidIntermediaryAccount.isSDK(o.intermediary_accounts[0])) && Array.isArray(o.intemediary_account_connections) && (!o.intemediary_account_connections.length || superfluid_1.LockIdIntermediaryAccountConnection.isSDK(o.intemediary_account_connections[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.GenesisState.typeUrl || params_1.Params.isAmino(o.params) && Array.isArray(o.superfluid_assets) && (!o.superfluid_assets.length || superfluid_1.SuperfluidAsset.isAmino(o.superfluid_assets[0])) && Array.isArray(o.osmo_equivalent_multipliers) && (!o.osmo_equivalent_multipliers.length || superfluid_1.OsmoEquivalentMultiplierRecord.isAmino(o.osmo_equivalent_multipliers[0])) && Array.isArray(o.intermediary_accounts) && (!o.intermediary_accounts.length || superfluid_1.SuperfluidIntermediaryAccount.isAmino(o.intermediary_accounts[0])) && Array.isArray(o.intemediary_account_connections) && (!o.intemediary_account_connections.length || superfluid_1.LockIdIntermediaryAccountConnection.isAmino(o.intemediary_account_connections[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.superfluidAssets) {
            superfluid_1.SuperfluidAsset.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.osmoEquivalentMultipliers) {
            superfluid_1.OsmoEquivalentMultiplierRecord.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.intermediaryAccounts) {
            superfluid_1.SuperfluidIntermediaryAccount.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.intemediaryAccountConnections) {
            superfluid_1.LockIdIntermediaryAccountConnection.encode(v, writer.uint32(42).fork()).ldelim();
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
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.superfluidAssets.push(superfluid_1.SuperfluidAsset.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.osmoEquivalentMultipliers.push(superfluid_1.OsmoEquivalentMultiplierRecord.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.intermediaryAccounts.push(superfluid_1.SuperfluidIntermediaryAccount.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.intemediaryAccountConnections.push(superfluid_1.LockIdIntermediaryAccountConnection.decode(reader, reader.uint32()));
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
            params: (0, helpers_1.isSet)(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
            superfluidAssets: Array.isArray(object?.superfluidAssets) ? object.superfluidAssets.map((e) => superfluid_1.SuperfluidAsset.fromJSON(e)) : [],
            osmoEquivalentMultipliers: Array.isArray(object?.osmoEquivalentMultipliers) ? object.osmoEquivalentMultipliers.map((e) => superfluid_1.OsmoEquivalentMultiplierRecord.fromJSON(e)) : [],
            intermediaryAccounts: Array.isArray(object?.intermediaryAccounts) ? object.intermediaryAccounts.map((e) => superfluid_1.SuperfluidIntermediaryAccount.fromJSON(e)) : [],
            intemediaryAccountConnections: Array.isArray(object?.intemediaryAccountConnections) ? object.intemediaryAccountConnections.map((e) => superfluid_1.LockIdIntermediaryAccountConnection.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.superfluidAssets) {
            obj.superfluidAssets = message.superfluidAssets.map(e => e ? superfluid_1.SuperfluidAsset.toJSON(e) : undefined);
        }
        else {
            obj.superfluidAssets = [];
        }
        if (message.osmoEquivalentMultipliers) {
            obj.osmoEquivalentMultipliers = message.osmoEquivalentMultipliers.map(e => e ? superfluid_1.OsmoEquivalentMultiplierRecord.toJSON(e) : undefined);
        }
        else {
            obj.osmoEquivalentMultipliers = [];
        }
        if (message.intermediaryAccounts) {
            obj.intermediaryAccounts = message.intermediaryAccounts.map(e => e ? superfluid_1.SuperfluidIntermediaryAccount.toJSON(e) : undefined);
        }
        else {
            obj.intermediaryAccounts = [];
        }
        if (message.intemediaryAccountConnections) {
            obj.intemediaryAccountConnections = message.intemediaryAccountConnections.map(e => e ? superfluid_1.LockIdIntermediaryAccountConnection.toJSON(e) : undefined);
        }
        else {
            obj.intemediaryAccountConnections = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        message.superfluidAssets = object.superfluidAssets?.map(e => superfluid_1.SuperfluidAsset.fromPartial(e)) || [];
        message.osmoEquivalentMultipliers = object.osmoEquivalentMultipliers?.map(e => superfluid_1.OsmoEquivalentMultiplierRecord.fromPartial(e)) || [];
        message.intermediaryAccounts = object.intermediaryAccounts?.map(e => superfluid_1.SuperfluidIntermediaryAccount.fromPartial(e)) || [];
        message.intemediaryAccountConnections = object.intemediaryAccountConnections?.map(e => superfluid_1.LockIdIntermediaryAccountConnection.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            params: object.params ? params_1.Params.fromSDK(object.params) : undefined,
            superfluidAssets: Array.isArray(object?.superfluid_assets) ? object.superfluid_assets.map((e) => superfluid_1.SuperfluidAsset.fromSDK(e)) : [],
            osmoEquivalentMultipliers: Array.isArray(object?.osmo_equivalent_multipliers) ? object.osmo_equivalent_multipliers.map((e) => superfluid_1.OsmoEquivalentMultiplierRecord.fromSDK(e)) : [],
            intermediaryAccounts: Array.isArray(object?.intermediary_accounts) ? object.intermediary_accounts.map((e) => superfluid_1.SuperfluidIntermediaryAccount.fromSDK(e)) : [],
            intemediaryAccountConnections: Array.isArray(object?.intemediary_account_connections) ? object.intemediary_account_connections.map((e) => superfluid_1.LockIdIntermediaryAccountConnection.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toSDK(message.params) : undefined);
        if (message.superfluidAssets) {
            obj.superfluid_assets = message.superfluidAssets.map(e => e ? superfluid_1.SuperfluidAsset.toSDK(e) : undefined);
        }
        else {
            obj.superfluid_assets = [];
        }
        if (message.osmoEquivalentMultipliers) {
            obj.osmo_equivalent_multipliers = message.osmoEquivalentMultipliers.map(e => e ? superfluid_1.OsmoEquivalentMultiplierRecord.toSDK(e) : undefined);
        }
        else {
            obj.osmo_equivalent_multipliers = [];
        }
        if (message.intermediaryAccounts) {
            obj.intermediary_accounts = message.intermediaryAccounts.map(e => e ? superfluid_1.SuperfluidIntermediaryAccount.toSDK(e) : undefined);
        }
        else {
            obj.intermediary_accounts = [];
        }
        if (message.intemediaryAccountConnections) {
            obj.intemediary_account_connections = message.intemediaryAccountConnections.map(e => e ? superfluid_1.LockIdIntermediaryAccountConnection.toSDK(e) : undefined);
        }
        else {
            obj.intemediary_account_connections = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = params_1.Params.fromAmino(object.params);
        }
        message.superfluidAssets = object.superfluid_assets?.map(e => superfluid_1.SuperfluidAsset.fromAmino(e)) || [];
        message.osmoEquivalentMultipliers = object.osmo_equivalent_multipliers?.map(e => superfluid_1.OsmoEquivalentMultiplierRecord.fromAmino(e)) || [];
        message.intermediaryAccounts = object.intermediary_accounts?.map(e => superfluid_1.SuperfluidIntermediaryAccount.fromAmino(e)) || [];
        message.intemediaryAccountConnections = object.intemediary_account_connections?.map(e => superfluid_1.LockIdIntermediaryAccountConnection.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? params_1.Params.toAmino(message.params) : undefined;
        if (message.superfluidAssets) {
            obj.superfluid_assets = message.superfluidAssets.map(e => e ? superfluid_1.SuperfluidAsset.toAmino(e) : undefined);
        }
        else {
            obj.superfluid_assets = [];
        }
        if (message.osmoEquivalentMultipliers) {
            obj.osmo_equivalent_multipliers = message.osmoEquivalentMultipliers.map(e => e ? superfluid_1.OsmoEquivalentMultiplierRecord.toAmino(e) : undefined);
        }
        else {
            obj.osmo_equivalent_multipliers = [];
        }
        if (message.intermediaryAccounts) {
            obj.intermediary_accounts = message.intermediaryAccounts.map(e => e ? superfluid_1.SuperfluidIntermediaryAccount.toAmino(e) : undefined);
        }
        else {
            obj.intermediary_accounts = [];
        }
        if (message.intemediaryAccountConnections) {
            obj.intemediary_account_connections = message.intemediaryAccountConnections.map(e => e ? superfluid_1.LockIdIntermediaryAccountConnection.toAmino(e) : undefined);
        }
        else {
            obj.intemediary_account_connections = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/genesis-state",
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
            typeUrl: "/osmosis.superfluid.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.GenesisState.typeUrl, exports.GenesisState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.GenesisState.aminoType, exports.GenesisState.typeUrl);
