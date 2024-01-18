"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.Height = exports.UpgradeProposal = exports.ClientUpdateProposal = exports.ClientConsensusStates = exports.ConsensusStateWithHeight = exports.IdentifiedClientState = void 0;
const any_1 = require("../../../../google/protobuf/any");
const upgrade_1 = require("../../../../cosmos/upgrade/v1beta1/upgrade");
const binary_1 = require("../../../../binary");
const helpers_1 = require("../../../../helpers");
const registry_1 = require("../../../../registry");
function createBaseIdentifiedClientState() {
    return {
        clientId: "",
        clientState: undefined
    };
}
exports.IdentifiedClientState = {
    typeUrl: "/ibc.core.client.v1.IdentifiedClientState",
    aminoType: "cosmos-sdk/IdentifiedClientState",
    is(o) {
        return o && (o.$typeUrl === exports.IdentifiedClientState.typeUrl || typeof o.clientId === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.IdentifiedClientState.typeUrl || typeof o.client_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.IdentifiedClientState.typeUrl || typeof o.client_id === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.clientState !== undefined) {
            any_1.Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIdentifiedClientState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.clientState = any_1.Any.decode(reader, reader.uint32());
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
            clientId: (0, helpers_1.isSet)(object.clientId) ? String(object.clientId) : "",
            clientState: (0, helpers_1.isSet)(object.clientState) ? any_1.Any.fromJSON(object.clientState) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.clientState !== undefined && (obj.clientState = message.clientState ? any_1.Any.toJSON(message.clientState) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIdentifiedClientState();
        message.clientId = object.clientId ?? "";
        message.clientState = object.clientState !== undefined && object.clientState !== null ? any_1.Any.fromPartial(object.clientState) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            clientId: object?.client_id,
            clientState: object.client_state ? any_1.Any.fromSDK(object.client_state) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.client_id = message.clientId;
        message.clientState !== undefined && (obj.client_state = message.clientState ? any_1.Any.toSDK(message.clientState) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseIdentifiedClientState();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        if (object.client_state !== undefined && object.client_state !== null) {
            message.clientState = any_1.Any.fromAmino(object.client_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId;
        obj.client_state = message.clientState ? any_1.Any.toAmino(message.clientState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.IdentifiedClientState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/IdentifiedClientState",
            value: exports.IdentifiedClientState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.IdentifiedClientState.decode(message.value);
    },
    toProto(message) {
        return exports.IdentifiedClientState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.IdentifiedClientState",
            value: exports.IdentifiedClientState.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.IdentifiedClientState.typeUrl, exports.IdentifiedClientState);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.IdentifiedClientState.aminoType, exports.IdentifiedClientState.typeUrl);
function createBaseConsensusStateWithHeight() {
    return {
        height: exports.Height.fromPartial({}),
        consensusState: undefined
    };
}
exports.ConsensusStateWithHeight = {
    typeUrl: "/ibc.core.client.v1.ConsensusStateWithHeight",
    aminoType: "cosmos-sdk/ConsensusStateWithHeight",
    is(o) {
        return o && (o.$typeUrl === exports.ConsensusStateWithHeight.typeUrl || exports.Height.is(o.height));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ConsensusStateWithHeight.typeUrl || exports.Height.isSDK(o.height));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ConsensusStateWithHeight.typeUrl || exports.Height.isAmino(o.height));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.height !== undefined) {
            exports.Height.encode(message.height, writer.uint32(10).fork()).ldelim();
        }
        if (message.consensusState !== undefined) {
            any_1.Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusStateWithHeight();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = exports.Height.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.consensusState = any_1.Any.decode(reader, reader.uint32());
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
            height: (0, helpers_1.isSet)(object.height) ? exports.Height.fromJSON(object.height) : undefined,
            consensusState: (0, helpers_1.isSet)(object.consensusState) ? any_1.Any.fromJSON(object.consensusState) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height ? exports.Height.toJSON(message.height) : undefined);
        message.consensusState !== undefined && (obj.consensusState = message.consensusState ? any_1.Any.toJSON(message.consensusState) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensusStateWithHeight();
        message.height = object.height !== undefined && object.height !== null ? exports.Height.fromPartial(object.height) : undefined;
        message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? any_1.Any.fromPartial(object.consensusState) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            height: object.height ? exports.Height.fromSDK(object.height) : undefined,
            consensusState: object.consensus_state ? any_1.Any.fromSDK(object.consensus_state) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height ? exports.Height.toSDK(message.height) : undefined);
        message.consensusState !== undefined && (obj.consensus_state = message.consensusState ? any_1.Any.toSDK(message.consensusState) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseConsensusStateWithHeight();
        if (object.height !== undefined && object.height !== null) {
            message.height = exports.Height.fromAmino(object.height);
        }
        if (object.consensus_state !== undefined && object.consensus_state !== null) {
            message.consensusState = any_1.Any.fromAmino(object.consensus_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? exports.Height.toAmino(message.height) : undefined;
        obj.consensus_state = message.consensusState ? any_1.Any.toAmino(message.consensusState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConsensusStateWithHeight.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConsensusStateWithHeight",
            value: exports.ConsensusStateWithHeight.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ConsensusStateWithHeight.decode(message.value);
    },
    toProto(message) {
        return exports.ConsensusStateWithHeight.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.ConsensusStateWithHeight",
            value: exports.ConsensusStateWithHeight.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ConsensusStateWithHeight.typeUrl, exports.ConsensusStateWithHeight);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ConsensusStateWithHeight.aminoType, exports.ConsensusStateWithHeight.typeUrl);
function createBaseClientConsensusStates() {
    return {
        clientId: "",
        consensusStates: []
    };
}
exports.ClientConsensusStates = {
    typeUrl: "/ibc.core.client.v1.ClientConsensusStates",
    aminoType: "cosmos-sdk/ClientConsensusStates",
    is(o) {
        return o && (o.$typeUrl === exports.ClientConsensusStates.typeUrl || typeof o.clientId === "string" && Array.isArray(o.consensusStates) && (!o.consensusStates.length || exports.ConsensusStateWithHeight.is(o.consensusStates[0])));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ClientConsensusStates.typeUrl || typeof o.client_id === "string" && Array.isArray(o.consensus_states) && (!o.consensus_states.length || exports.ConsensusStateWithHeight.isSDK(o.consensus_states[0])));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ClientConsensusStates.typeUrl || typeof o.client_id === "string" && Array.isArray(o.consensus_states) && (!o.consensus_states.length || exports.ConsensusStateWithHeight.isAmino(o.consensus_states[0])));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        for (const v of message.consensusStates) {
            exports.ConsensusStateWithHeight.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientConsensusStates();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.consensusStates.push(exports.ConsensusStateWithHeight.decode(reader, reader.uint32()));
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
            clientId: (0, helpers_1.isSet)(object.clientId) ? String(object.clientId) : "",
            consensusStates: Array.isArray(object?.consensusStates) ? object.consensusStates.map((e) => exports.ConsensusStateWithHeight.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        if (message.consensusStates) {
            obj.consensusStates = message.consensusStates.map(e => e ? exports.ConsensusStateWithHeight.toJSON(e) : undefined);
        }
        else {
            obj.consensusStates = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClientConsensusStates();
        message.clientId = object.clientId ?? "";
        message.consensusStates = object.consensusStates?.map(e => exports.ConsensusStateWithHeight.fromPartial(e)) || [];
        return message;
    },
    fromSDK(object) {
        return {
            clientId: object?.client_id,
            consensusStates: Array.isArray(object?.consensus_states) ? object.consensus_states.map((e) => exports.ConsensusStateWithHeight.fromSDK(e)) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.client_id = message.clientId;
        if (message.consensusStates) {
            obj.consensus_states = message.consensusStates.map(e => e ? exports.ConsensusStateWithHeight.toSDK(e) : undefined);
        }
        else {
            obj.consensus_states = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseClientConsensusStates();
        if (object.client_id !== undefined && object.client_id !== null) {
            message.clientId = object.client_id;
        }
        message.consensusStates = object.consensus_states?.map(e => exports.ConsensusStateWithHeight.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId;
        if (message.consensusStates) {
            obj.consensus_states = message.consensusStates.map(e => e ? exports.ConsensusStateWithHeight.toAmino(e) : undefined);
        }
        else {
            obj.consensus_states = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClientConsensusStates.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientConsensusStates",
            value: exports.ClientConsensusStates.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ClientConsensusStates.decode(message.value);
    },
    toProto(message) {
        return exports.ClientConsensusStates.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.ClientConsensusStates",
            value: exports.ClientConsensusStates.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ClientConsensusStates.typeUrl, exports.ClientConsensusStates);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ClientConsensusStates.aminoType, exports.ClientConsensusStates.typeUrl);
function createBaseClientUpdateProposal() {
    return {
        $typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
        title: "",
        description: "",
        subjectClientId: "",
        substituteClientId: ""
    };
}
exports.ClientUpdateProposal = {
    typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
    aminoType: "cosmos-sdk/ClientUpdateProposal",
    is(o) {
        return o && (o.$typeUrl === exports.ClientUpdateProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.subjectClientId === "string" && typeof o.substituteClientId === "string");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ClientUpdateProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.subject_client_id === "string" && typeof o.substitute_client_id === "string");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ClientUpdateProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && typeof o.subject_client_id === "string" && typeof o.substitute_client_id === "string");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.subjectClientId !== "") {
            writer.uint32(26).string(message.subjectClientId);
        }
        if (message.substituteClientId !== "") {
            writer.uint32(34).string(message.substituteClientId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientUpdateProposal();
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
                    message.subjectClientId = reader.string();
                    break;
                case 4:
                    message.substituteClientId = reader.string();
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            subjectClientId: (0, helpers_1.isSet)(object.subjectClientId) ? String(object.subjectClientId) : "",
            substituteClientId: (0, helpers_1.isSet)(object.substituteClientId) ? String(object.substituteClientId) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.subjectClientId !== undefined && (obj.subjectClientId = message.subjectClientId);
        message.substituteClientId !== undefined && (obj.substituteClientId = message.substituteClientId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClientUpdateProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.subjectClientId = object.subjectClientId ?? "";
        message.substituteClientId = object.substituteClientId ?? "";
        return message;
    },
    fromSDK(object) {
        return {
            title: object?.title,
            description: object?.description,
            subjectClientId: object?.subject_client_id,
            substituteClientId: object?.substitute_client_id
        };
    },
    toSDK(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.subject_client_id = message.subjectClientId;
        obj.substitute_client_id = message.substituteClientId;
        return obj;
    },
    fromAmino(object) {
        const message = createBaseClientUpdateProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.subject_client_id !== undefined && object.subject_client_id !== null) {
            message.subjectClientId = object.subject_client_id;
        }
        if (object.substitute_client_id !== undefined && object.substitute_client_id !== null) {
            message.substituteClientId = object.substitute_client_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.subject_client_id = message.subjectClientId;
        obj.substitute_client_id = message.substituteClientId;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClientUpdateProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientUpdateProposal",
            value: exports.ClientUpdateProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ClientUpdateProposal.decode(message.value);
    },
    toProto(message) {
        return exports.ClientUpdateProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
            value: exports.ClientUpdateProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ClientUpdateProposal.typeUrl, exports.ClientUpdateProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ClientUpdateProposal.aminoType, exports.ClientUpdateProposal.typeUrl);
function createBaseUpgradeProposal() {
    return {
        $typeUrl: "/ibc.core.client.v1.UpgradeProposal",
        title: "",
        description: "",
        plan: upgrade_1.Plan.fromPartial({}),
        upgradedClientState: undefined
    };
}
exports.UpgradeProposal = {
    typeUrl: "/ibc.core.client.v1.UpgradeProposal",
    aminoType: "cosmos-sdk/UpgradeProposal",
    is(o) {
        return o && (o.$typeUrl === exports.UpgradeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && upgrade_1.Plan.is(o.plan));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.UpgradeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && upgrade_1.Plan.isSDK(o.plan));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.UpgradeProposal.typeUrl || typeof o.title === "string" && typeof o.description === "string" && upgrade_1.Plan.isAmino(o.plan));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.plan !== undefined) {
            upgrade_1.Plan.encode(message.plan, writer.uint32(26).fork()).ldelim();
        }
        if (message.upgradedClientState !== undefined) {
            any_1.Any.encode(message.upgradedClientState, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpgradeProposal();
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
                    message.plan = upgrade_1.Plan.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.upgradedClientState = any_1.Any.decode(reader, reader.uint32());
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            plan: (0, helpers_1.isSet)(object.plan) ? upgrade_1.Plan.fromJSON(object.plan) : undefined,
            upgradedClientState: (0, helpers_1.isSet)(object.upgradedClientState) ? any_1.Any.fromJSON(object.upgradedClientState) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.plan !== undefined && (obj.plan = message.plan ? upgrade_1.Plan.toJSON(message.plan) : undefined);
        message.upgradedClientState !== undefined && (obj.upgradedClientState = message.upgradedClientState ? any_1.Any.toJSON(message.upgradedClientState) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpgradeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.plan = object.plan !== undefined && object.plan !== null ? upgrade_1.Plan.fromPartial(object.plan) : undefined;
        message.upgradedClientState = object.upgradedClientState !== undefined && object.upgradedClientState !== null ? any_1.Any.fromPartial(object.upgradedClientState) : undefined;
        return message;
    },
    fromSDK(object) {
        return {
            title: object?.title,
            description: object?.description,
            plan: object.plan ? upgrade_1.Plan.fromSDK(object.plan) : undefined,
            upgradedClientState: object.upgraded_client_state ? any_1.Any.fromSDK(object.upgraded_client_state) : undefined
        };
    },
    toSDK(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        message.plan !== undefined && (obj.plan = message.plan ? upgrade_1.Plan.toSDK(message.plan) : undefined);
        message.upgradedClientState !== undefined && (obj.upgraded_client_state = message.upgradedClientState ? any_1.Any.toSDK(message.upgradedClientState) : undefined);
        return obj;
    },
    fromAmino(object) {
        const message = createBaseUpgradeProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.plan !== undefined && object.plan !== null) {
            message.plan = upgrade_1.Plan.fromAmino(object.plan);
        }
        if (object.upgraded_client_state !== undefined && object.upgraded_client_state !== null) {
            message.upgradedClientState = any_1.Any.fromAmino(object.upgraded_client_state);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.plan = message.plan ? upgrade_1.Plan.toAmino(message.plan) : undefined;
        obj.upgraded_client_state = message.upgradedClientState ? any_1.Any.toAmino(message.upgradedClientState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UpgradeProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/UpgradeProposal",
            value: exports.UpgradeProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UpgradeProposal.decode(message.value);
    },
    toProto(message) {
        return exports.UpgradeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.UpgradeProposal",
            value: exports.UpgradeProposal.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.UpgradeProposal.typeUrl, exports.UpgradeProposal);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.UpgradeProposal.aminoType, exports.UpgradeProposal.typeUrl);
function createBaseHeight() {
    return {
        revisionNumber: BigInt(0),
        revisionHeight: BigInt(0)
    };
}
exports.Height = {
    typeUrl: "/ibc.core.client.v1.Height",
    aminoType: "cosmos-sdk/Height",
    is(o) {
        return o && (o.$typeUrl === exports.Height.typeUrl || typeof o.revisionNumber === "bigint" && typeof o.revisionHeight === "bigint");
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Height.typeUrl || typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint");
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Height.typeUrl || typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint");
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.revisionNumber !== BigInt(0)) {
            writer.uint32(8).uint64(message.revisionNumber);
        }
        if (message.revisionHeight !== BigInt(0)) {
            writer.uint32(16).uint64(message.revisionHeight);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeight();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.revisionNumber = reader.uint64();
                    break;
                case 2:
                    message.revisionHeight = reader.uint64();
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
            revisionNumber: (0, helpers_1.isSet)(object.revisionNumber) ? BigInt(object.revisionNumber.toString()) : BigInt(0),
            revisionHeight: (0, helpers_1.isSet)(object.revisionHeight) ? BigInt(object.revisionHeight.toString()) : BigInt(0)
        };
    },
    toJSON(message) {
        const obj = {};
        message.revisionNumber !== undefined && (obj.revisionNumber = (message.revisionNumber || BigInt(0)).toString());
        message.revisionHeight !== undefined && (obj.revisionHeight = (message.revisionHeight || BigInt(0)).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHeight();
        message.revisionNumber = object.revisionNumber !== undefined && object.revisionNumber !== null ? BigInt(object.revisionNumber.toString()) : BigInt(0);
        message.revisionHeight = object.revisionHeight !== undefined && object.revisionHeight !== null ? BigInt(object.revisionHeight.toString()) : BigInt(0);
        return message;
    },
    fromSDK(object) {
        return {
            revisionNumber: object?.revision_number,
            revisionHeight: object?.revision_height
        };
    },
    toSDK(message) {
        const obj = {};
        obj.revision_number = message.revisionNumber;
        obj.revision_height = message.revisionHeight;
        return obj;
    },
    fromAmino(object) {
        return {
            revisionNumber: BigInt(object.revision_number || "0"),
            revisionHeight: BigInt(object.revision_height || "0")
        };
    },
    toAmino(message) {
        const obj = {};
        obj.revision_number = message.revisionNumber ? message.revisionNumber.toString() : undefined;
        obj.revision_height = message.revisionHeight ? message.revisionHeight.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Height.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Height",
            value: exports.Height.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Height.decode(message.value);
    },
    toProto(message) {
        return exports.Height.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.Height",
            value: exports.Height.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Height.typeUrl, exports.Height);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Height.aminoType, exports.Height.typeUrl);
function createBaseParams() {
    return {
        allowedClients: []
    };
}
exports.Params = {
    typeUrl: "/ibc.core.client.v1.Params",
    aminoType: "cosmos-sdk/Params",
    is(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || Array.isArray(o.allowedClients) && (!o.allowedClients.length || typeof o.allowedClients[0] === "string"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || Array.isArray(o.allowed_clients) && (!o.allowed_clients.length || typeof o.allowed_clients[0] === "string"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.Params.typeUrl || Array.isArray(o.allowed_clients) && (!o.allowed_clients.length || typeof o.allowed_clients[0] === "string"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        for (const v of message.allowedClients) {
            writer.uint32(10).string(v);
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
                    message.allowedClients.push(reader.string());
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
            allowedClients: Array.isArray(object?.allowedClients) ? object.allowedClients.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.allowedClients) {
            obj.allowedClients = message.allowedClients.map(e => e);
        }
        else {
            obj.allowedClients = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.allowedClients = object.allowedClients?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            allowedClients: Array.isArray(object?.allowed_clients) ? object.allowed_clients.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        if (message.allowedClients) {
            obj.allowed_clients = message.allowedClients.map(e => e);
        }
        else {
            obj.allowed_clients = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseParams();
        message.allowedClients = object.allowed_clients?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.allowedClients) {
            obj.allowed_clients = message.allowedClients.map(e => e);
        }
        else {
            obj.allowed_clients = [];
        }
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
            typeUrl: "/ibc.core.client.v1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.Params.typeUrl, exports.Params);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.Params.aminoType, exports.Params.typeUrl);
