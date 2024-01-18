"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade", tx_1.MsgSoftwareUpgrade], ["/cosmos.upgrade.v1beta1.MsgCancelUpgrade", tx_1.MsgCancelUpgrade]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        softwareUpgrade(value) {
            return {
                typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
                value: tx_1.MsgSoftwareUpgrade.encode(value).finish()
            };
        },
        cancelUpgrade(value) {
            return {
                typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
                value: tx_1.MsgCancelUpgrade.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        softwareUpgrade(value) {
            return {
                typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
                value
            };
        },
        cancelUpgrade(value) {
            return {
                typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
                value
            };
        }
    },
    toJSON: {
        softwareUpgrade(value) {
            return {
                typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
                value: tx_1.MsgSoftwareUpgrade.toJSON(value)
            };
        },
        cancelUpgrade(value) {
            return {
                typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
                value: tx_1.MsgCancelUpgrade.toJSON(value)
            };
        }
    },
    fromJSON: {
        softwareUpgrade(value) {
            return {
                typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
                value: tx_1.MsgSoftwareUpgrade.fromJSON(value)
            };
        },
        cancelUpgrade(value) {
            return {
                typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
                value: tx_1.MsgCancelUpgrade.fromJSON(value)
            };
        }
    },
    fromPartial: {
        softwareUpgrade(value) {
            return {
                typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
                value: tx_1.MsgSoftwareUpgrade.fromPartial(value)
            };
        },
        cancelUpgrade(value) {
            return {
                typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
                value: tx_1.MsgCancelUpgrade.fromPartial(value)
            };
        }
    }
};
