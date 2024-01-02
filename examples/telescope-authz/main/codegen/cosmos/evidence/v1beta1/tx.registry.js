"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/cosmos.evidence.v1beta1.MsgSubmitEvidence", tx_1.MsgSubmitEvidence]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        submitEvidence(value) {
            return {
                typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
                value: tx_1.MsgSubmitEvidence.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        submitEvidence(value) {
            return {
                typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
                value
            };
        }
    },
    toJSON: {
        submitEvidence(value) {
            return {
                typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
                value: tx_1.MsgSubmitEvidence.toJSON(value)
            };
        }
    },
    fromJSON: {
        submitEvidence(value) {
            return {
                typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
                value: tx_1.MsgSubmitEvidence.fromJSON(value)
            };
        }
    },
    fromPartial: {
        submitEvidence(value) {
            return {
                typeUrl: "/cosmos.evidence.v1beta1.MsgSubmitEvidence",
                value: tx_1.MsgSubmitEvidence.fromPartial(value)
            };
        }
    }
};
