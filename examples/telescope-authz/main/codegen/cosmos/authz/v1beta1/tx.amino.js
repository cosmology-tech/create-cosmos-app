"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/cosmos.authz.v1beta1.MsgGrant": {
        aminoType: "cosmos-sdk/MsgGrant",
        toAmino: tx_1.MsgGrant.toAmino,
        fromAmino: tx_1.MsgGrant.fromAmino
    },
    "/cosmos.authz.v1beta1.MsgExec": {
        aminoType: "cosmos-sdk/MsgExec",
        toAmino: tx_1.MsgExec.toAmino,
        fromAmino: tx_1.MsgExec.fromAmino
    },
    "/cosmos.authz.v1beta1.MsgRevoke": {
        aminoType: "cosmos-sdk/MsgRevoke",
        toAmino: tx_1.MsgRevoke.toAmino,
        fromAmino: tx_1.MsgRevoke.fromAmino
    }
};
