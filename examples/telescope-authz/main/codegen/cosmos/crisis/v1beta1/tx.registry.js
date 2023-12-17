"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/cosmos.crisis.v1beta1.MsgVerifyInvariant", tx_1.MsgVerifyInvariant]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        verifyInvariant(value) {
            return {
                typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
                value: tx_1.MsgVerifyInvariant.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        verifyInvariant(value) {
            return {
                typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
                value
            };
        }
    },
    toJSON: {
        verifyInvariant(value) {
            return {
                typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
                value: tx_1.MsgVerifyInvariant.toJSON(value)
            };
        }
    },
    fromJSON: {
        verifyInvariant(value) {
            return {
                typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
                value: tx_1.MsgVerifyInvariant.fromJSON(value)
            };
        }
    },
    fromPartial: {
        verifyInvariant(value) {
            return {
                typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
                value: tx_1.MsgVerifyInvariant.fromPartial(value)
            };
        }
    }
};
