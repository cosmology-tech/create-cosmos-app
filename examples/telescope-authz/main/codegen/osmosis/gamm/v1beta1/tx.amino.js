"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/osmosis.gamm.v1beta1.MsgJoinPool": {
        aminoType: "osmosis/gamm/join-pool",
        toAmino: tx_1.MsgJoinPool.toAmino,
        fromAmino: tx_1.MsgJoinPool.fromAmino
    },
    "/osmosis.gamm.v1beta1.MsgExitPool": {
        aminoType: "osmosis/gamm/exit-pool",
        toAmino: tx_1.MsgExitPool.toAmino,
        fromAmino: tx_1.MsgExitPool.fromAmino
    },
    "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
        aminoType: "osmosis/gamm/swap-exact-amount-in",
        toAmino: tx_1.MsgSwapExactAmountIn.toAmino,
        fromAmino: tx_1.MsgSwapExactAmountIn.fromAmino
    },
    "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
        aminoType: "osmosis/gamm/swap-exact-amount-out",
        toAmino: tx_1.MsgSwapExactAmountOut.toAmino,
        fromAmino: tx_1.MsgSwapExactAmountOut.fromAmino
    },
    "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
        aminoType: "osmosis/gamm/join-swap-extern-amount-in",
        toAmino: tx_1.MsgJoinSwapExternAmountIn.toAmino,
        fromAmino: tx_1.MsgJoinSwapExternAmountIn.fromAmino
    },
    "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
        aminoType: "osmosis/gamm/join-swap-share-amount-out",
        toAmino: tx_1.MsgJoinSwapShareAmountOut.toAmino,
        fromAmino: tx_1.MsgJoinSwapShareAmountOut.fromAmino
    },
    "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
        aminoType: "osmosis/gamm/exit-swap-extern-amount-out",
        toAmino: tx_1.MsgExitSwapExternAmountOut.toAmino,
        fromAmino: tx_1.MsgExitSwapExternAmountOut.fromAmino
    },
    "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
        aminoType: "osmosis/gamm/exit-swap-share-amount-in",
        toAmino: tx_1.MsgExitSwapShareAmountIn.toAmino,
        fromAmino: tx_1.MsgExitSwapShareAmountIn.fromAmino
    }
};
