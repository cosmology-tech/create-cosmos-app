"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
        aminoType: "osmosis/gamm/poolmodels/balancer/create-balancer-pool",
        toAmino: tx_1.MsgCreateBalancerPool.toAmino,
        fromAmino: tx_1.MsgCreateBalancerPool.fromAmino
    }
};
