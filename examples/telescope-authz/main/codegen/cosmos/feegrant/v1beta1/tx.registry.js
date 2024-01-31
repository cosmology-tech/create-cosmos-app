"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/cosmos.feegrant.v1beta1.MsgGrantAllowance", tx_1.MsgGrantAllowance], ["/cosmos.feegrant.v1beta1.MsgRevokeAllowance", tx_1.MsgRevokeAllowance]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        grantAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                value: tx_1.MsgGrantAllowance.encode(value).finish()
            };
        },
        revokeAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
                value: tx_1.MsgRevokeAllowance.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        grantAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                value
            };
        },
        revokeAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
                value
            };
        }
    },
    toJSON: {
        grantAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                value: tx_1.MsgGrantAllowance.toJSON(value)
            };
        },
        revokeAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
                value: tx_1.MsgRevokeAllowance.toJSON(value)
            };
        }
    },
    fromJSON: {
        grantAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                value: tx_1.MsgGrantAllowance.fromJSON(value)
            };
        },
        revokeAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
                value: tx_1.MsgRevokeAllowance.fromJSON(value)
            };
        }
    },
    fromPartial: {
        grantAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                value: tx_1.MsgGrantAllowance.fromPartial(value)
            };
        },
        revokeAllowance(value) {
            return {
                typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
                value: tx_1.MsgRevokeAllowance.fromPartial(value)
            };
        }
    }
};
