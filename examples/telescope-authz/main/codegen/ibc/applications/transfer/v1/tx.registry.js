"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/ibc.applications.transfer.v1.MsgTransfer", tx_1.MsgTransfer]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        transfer(value) {
            return {
                typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
                value: tx_1.MsgTransfer.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        transfer(value) {
            return {
                typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
                value
            };
        }
    },
    toJSON: {
        transfer(value) {
            return {
                typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
                value: tx_1.MsgTransfer.toJSON(value)
            };
        }
    },
    fromJSON: {
        transfer(value) {
            return {
                typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
                value: tx_1.MsgTransfer.fromJSON(value)
            };
        }
    },
    fromPartial: {
        transfer(value) {
            return {
                typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
                value: tx_1.MsgTransfer.fromPartial(value)
            };
        }
    }
};
