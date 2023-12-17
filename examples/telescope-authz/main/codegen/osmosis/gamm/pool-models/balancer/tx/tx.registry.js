"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool", tx_1.MsgCreateBalancerPool]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createBalancerPool(value) {
            return {
                typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
                value: tx_1.MsgCreateBalancerPool.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createBalancerPool(value) {
            return {
                typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
                value
            };
        }
    },
    toJSON: {
        createBalancerPool(value) {
            return {
                typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
                value: tx_1.MsgCreateBalancerPool.toJSON(value)
            };
        }
    },
    fromJSON: {
        createBalancerPool(value) {
            return {
                typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
                value: tx_1.MsgCreateBalancerPool.fromJSON(value)
            };
        }
    },
    fromPartial: {
        createBalancerPool(value) {
            return {
                typeUrl: "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool",
                value: tx_1.MsgCreateBalancerPool.fromPartial(value)
            };
        }
    }
};
