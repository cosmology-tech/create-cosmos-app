"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
        aminoType: "cosmos-sdk/MsgSubmitEvidence",
        toAmino: tx_1.MsgSubmitEvidence.toAmino,
        fromAmino: tx_1.MsgSubmitEvidence.fromAmino
    }
};
