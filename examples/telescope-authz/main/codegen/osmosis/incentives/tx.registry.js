"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/osmosis.incentives.MsgCreateGauge", tx_1.MsgCreateGauge], ["/osmosis.incentives.MsgAddToGauge", tx_1.MsgAddToGauge]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createGauge(value) {
            return {
                typeUrl: "/osmosis.incentives.MsgCreateGauge",
                value: tx_1.MsgCreateGauge.encode(value).finish()
            };
        },
        addToGauge(value) {
            return {
                typeUrl: "/osmosis.incentives.MsgAddToGauge",
                value: tx_1.MsgAddToGauge.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createGauge(value) {
            return {
                typeUrl: "/osmosis.incentives.MsgCreateGauge",
                value
            };
        },
        addToGauge(value) {
            return {
                typeUrl: "/osmosis.incentives.MsgAddToGauge",
                value
            };
        }
    },
    toJSON: {
        createGauge(value) {
            return {
                typeUrl: "/osmosis.incentives.MsgCreateGauge",
                value: tx_1.MsgCreateGauge.toJSON(value)
            };
        },
        addToGauge(value) {
            return {
                typeUrl: "/osmosis.incentives.MsgAddToGauge",
                value: tx_1.MsgAddToGauge.toJSON(value)
            };
        }
    },
    fromJSON: {
        createGauge(value) {
            return {
                typeUrl: "/osmosis.incentives.MsgCreateGauge",
                value: tx_1.MsgCreateGauge.fromJSON(value)
            };
        },
        addToGauge(value) {
            return {
                typeUrl: "/osmosis.incentives.MsgAddToGauge",
                value: tx_1.MsgAddToGauge.fromJSON(value)
            };
        }
    },
    fromPartial: {
        createGauge(value) {
            return {
                typeUrl: "/osmosis.incentives.MsgCreateGauge",
                value: tx_1.MsgCreateGauge.fromPartial(value)
            };
        },
        addToGauge(value) {
            return {
                typeUrl: "/osmosis.incentives.MsgAddToGauge",
                value: tx_1.MsgAddToGauge.fromPartial(value)
            };
        }
    }
};
