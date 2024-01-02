"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/cosmos.nft.v1beta1.MsgSend": {
        aminoType: "cosmos-sdk/MsgNFTSend",
        toAmino: tx_1.MsgSend.toAmino,
        fromAmino: tx_1.MsgSend.fromAmino
    }
};
