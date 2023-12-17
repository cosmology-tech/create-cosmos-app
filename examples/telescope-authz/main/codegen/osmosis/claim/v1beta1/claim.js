"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimRecord = exports.actionToJSON = exports.actionFromJSON = exports.ActionAmino = exports.ActionSDKType = exports.Action = void 0;
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const binary_1 = require("../../../binary");
const helpers_1 = require("../../../helpers");
const registry_1 = require("../../../registry");
var Action;
(function (Action) {
    Action[Action["ActionAddLiquidity"] = 0] = "ActionAddLiquidity";
    Action[Action["ActionSwap"] = 1] = "ActionSwap";
    Action[Action["ActionVote"] = 2] = "ActionVote";
    Action[Action["ActionDelegateStake"] = 3] = "ActionDelegateStake";
    Action[Action["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Action || (exports.Action = Action = {}));
exports.ActionSDKType = Action;
exports.ActionAmino = Action;
function actionFromJSON(object) {
    switch (object) {
        case 0:
        case "ActionAddLiquidity":
            return Action.ActionAddLiquidity;
        case 1:
        case "ActionSwap":
            return Action.ActionSwap;
        case 2:
        case "ActionVote":
            return Action.ActionVote;
        case 3:
        case "ActionDelegateStake":
            return Action.ActionDelegateStake;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Action.UNRECOGNIZED;
    }
}
exports.actionFromJSON = actionFromJSON;
function actionToJSON(object) {
    switch (object) {
        case Action.ActionAddLiquidity:
            return "ActionAddLiquidity";
        case Action.ActionSwap:
            return "ActionSwap";
        case Action.ActionVote:
            return "ActionVote";
        case Action.ActionDelegateStake:
            return "ActionDelegateStake";
        case Action.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.actionToJSON = actionToJSON;
function createBaseClaimRecord() {
    return {
        address: "",
        initialClaimableAmount: [],
        actionCompleted: []
    };
}
exports.ClaimRecord = {
    typeUrl: "/osmosis.claim.v1beta1.ClaimRecord",
    aminoType: "osmosis/claim/claim-record",
    is(o) {
        return o && (o.$typeUrl === exports.ClaimRecord.typeUrl || typeof o.address === "string" && Array.isArray(o.initialClaimableAmount) && (!o.initialClaimableAmount.length || coin_1.Coin.is(o.initialClaimableAmount[0])) && Array.isArray(o.actionCompleted) && (!o.actionCompleted.length || typeof o.actionCompleted[0] === "boolean"));
    },
    isSDK(o) {
        return o && (o.$typeUrl === exports.ClaimRecord.typeUrl || typeof o.address === "string" && Array.isArray(o.initial_claimable_amount) && (!o.initial_claimable_amount.length || coin_1.Coin.isSDK(o.initial_claimable_amount[0])) && Array.isArray(o.action_completed) && (!o.action_completed.length || typeof o.action_completed[0] === "boolean"));
    },
    isAmino(o) {
        return o && (o.$typeUrl === exports.ClaimRecord.typeUrl || typeof o.address === "string" && Array.isArray(o.initial_claimable_amount) && (!o.initial_claimable_amount.length || coin_1.Coin.isAmino(o.initial_claimable_amount[0])) && Array.isArray(o.action_completed) && (!o.action_completed.length || typeof o.action_completed[0] === "boolean"));
    },
    encode(message, writer = binary_1.BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.initialClaimableAmount) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        writer.uint32(26).fork();
        for (const v of message.actionCompleted) {
            writer.bool(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof binary_1.BinaryReader ? input : new binary_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClaimRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.initialClaimableAmount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.actionCompleted.push(reader.bool());
                        }
                    }
                    else {
                        message.actionCompleted.push(reader.bool());
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            initialClaimableAmount: Array.isArray(object?.initialClaimableAmount) ? object.initialClaimableAmount.map((e) => coin_1.Coin.fromJSON(e)) : [],
            actionCompleted: Array.isArray(object?.actionCompleted) ? object.actionCompleted.map((e) => Boolean(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.initialClaimableAmount) {
            obj.initialClaimableAmount = message.initialClaimableAmount.map(e => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.initialClaimableAmount = [];
        }
        if (message.actionCompleted) {
            obj.actionCompleted = message.actionCompleted.map(e => e);
        }
        else {
            obj.actionCompleted = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClaimRecord();
        message.address = object.address ?? "";
        message.initialClaimableAmount = object.initialClaimableAmount?.map(e => coin_1.Coin.fromPartial(e)) || [];
        message.actionCompleted = object.actionCompleted?.map(e => e) || [];
        return message;
    },
    fromSDK(object) {
        return {
            address: object?.address,
            initialClaimableAmount: Array.isArray(object?.initial_claimable_amount) ? object.initial_claimable_amount.map((e) => coin_1.Coin.fromSDK(e)) : [],
            actionCompleted: Array.isArray(object?.action_completed) ? object.action_completed.map((e) => e) : []
        };
    },
    toSDK(message) {
        const obj = {};
        obj.address = message.address;
        if (message.initialClaimableAmount) {
            obj.initial_claimable_amount = message.initialClaimableAmount.map(e => e ? coin_1.Coin.toSDK(e) : undefined);
        }
        else {
            obj.initial_claimable_amount = [];
        }
        if (message.actionCompleted) {
            obj.action_completed = message.actionCompleted.map(e => e);
        }
        else {
            obj.action_completed = [];
        }
        return obj;
    },
    fromAmino(object) {
        const message = createBaseClaimRecord();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        message.initialClaimableAmount = object.initial_claimable_amount?.map(e => coin_1.Coin.fromAmino(e)) || [];
        message.actionCompleted = object.action_completed?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        if (message.initialClaimableAmount) {
            obj.initial_claimable_amount = message.initialClaimableAmount.map(e => e ? coin_1.Coin.toAmino(e) : undefined);
        }
        else {
            obj.initial_claimable_amount = [];
        }
        if (message.actionCompleted) {
            obj.action_completed = message.actionCompleted.map(e => e);
        }
        else {
            obj.action_completed = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClaimRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/claim/claim-record",
            value: exports.ClaimRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ClaimRecord.decode(message.value);
    },
    toProto(message) {
        return exports.ClaimRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.claim.v1beta1.ClaimRecord",
            value: exports.ClaimRecord.encode(message).finish()
        };
    }
};
registry_1.GlobalDecoderRegistry.register(exports.ClaimRecord.typeUrl, exports.ClaimRecord);
registry_1.GlobalDecoderRegistry.registerAminoProtoMapping(exports.ClaimRecord.aminoType, exports.ClaimRecord.typeUrl);
