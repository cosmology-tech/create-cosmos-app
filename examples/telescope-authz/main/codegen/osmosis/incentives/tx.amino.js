"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/osmosis.incentives.MsgCreateGauge": {
        aminoType: "osmosis/incentives/create-gauge",
        toAmino: tx_1.MsgCreateGauge.toAmino,
        fromAmino: tx_1.MsgCreateGauge.fromAmino
    },
    "/osmosis.incentives.MsgAddToGauge": {
        aminoType: "osmosis/incentives/add-to-gauge",
        toAmino: tx_1.MsgAddToGauge.toAmino,
        fromAmino: tx_1.MsgAddToGauge.fromAmino
    }
};
