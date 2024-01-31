"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageComposer = exports.load = exports.registry = void 0;
const tx_1 = require("./tx");
exports.registry = [["/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool", tx_1.MsgCreateStableswapPool], ["/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors", tx_1.MsgStableSwapAdjustScalingFactors]];
const load = (protoRegistry) => {
    exports.registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
exports.load = load;
exports.MessageComposer = {
    encoded: {
        createStableswapPool(value) {
            return {
                typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool",
                value: tx_1.MsgCreateStableswapPool.encode(value).finish()
            };
        },
        stableSwapAdjustScalingFactors(value) {
            return {
                typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors",
                value: tx_1.MsgStableSwapAdjustScalingFactors.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createStableswapPool(value) {
            return {
                typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool",
                value
            };
        },
        stableSwapAdjustScalingFactors(value) {
            return {
                typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors",
                value
            };
        }
    },
    toJSON: {
        createStableswapPool(value) {
            return {
                typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool",
                value: tx_1.MsgCreateStableswapPool.toJSON(value)
            };
        },
        stableSwapAdjustScalingFactors(value) {
            return {
                typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors",
                value: tx_1.MsgStableSwapAdjustScalingFactors.toJSON(value)
            };
        }
    },
    fromJSON: {
        createStableswapPool(value) {
            return {
                typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool",
                value: tx_1.MsgCreateStableswapPool.fromJSON(value)
            };
        },
        stableSwapAdjustScalingFactors(value) {
            return {
                typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors",
                value: tx_1.MsgStableSwapAdjustScalingFactors.fromJSON(value)
            };
        }
    },
    fromPartial: {
        createStableswapPool(value) {
            return {
                typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool",
                value: tx_1.MsgCreateStableswapPool.fromPartial(value)
            };
        },
        stableSwapAdjustScalingFactors(value) {
            return {
                typeUrl: "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors",
                value: tx_1.MsgStableSwapAdjustScalingFactors.fromPartial(value)
            };
        }
    }
};
