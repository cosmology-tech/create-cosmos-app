"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/cosmos.authz.v1beta1.MsgGrant", tx_1.MsgGrant], ["/cosmos.authz.v1beta1.MsgExec", tx_1.MsgExec], ["/cosmos.authz.v1beta1.MsgRevoke", tx_1.MsgRevoke]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        grant(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
                value: tx_1.MsgGrant.encode(value).finish()
            };
        },
        exec(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgExec",
                value: tx_1.MsgExec.encode(value).finish()
            };
        },
        revoke(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
                value: tx_1.MsgRevoke.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        grant(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
                value
            };
        },
        exec(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgExec",
                value
            };
        },
        revoke(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
                value
            };
        }
    },
    toJSON: {
        grant(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
                value: tx_1.MsgGrant.toJSON(value)
            };
        },
        exec(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgExec",
                value: tx_1.MsgExec.toJSON(value)
            };
        },
        revoke(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
                value: tx_1.MsgRevoke.toJSON(value)
            };
        }
    },
    fromJSON: {
        grant(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
                value: tx_1.MsgGrant.fromJSON(value)
            };
        },
        exec(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgExec",
                value: tx_1.MsgExec.fromJSON(value)
            };
        },
        revoke(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
                value: tx_1.MsgRevoke.fromJSON(value)
            };
        }
    },
    fromPartial: {
        grant(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
                value: tx_1.MsgGrant.fromPartial(value)
            };
        },
        exec(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgExec",
                value: tx_1.MsgExec.fromPartial(value)
            };
        },
        revoke(value) {
            return {
                typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
                value: tx_1.MsgRevoke.fromPartial(value)
            };
        }
    }
};
