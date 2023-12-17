"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
        aminoType: "osmosis/tokenfactory/create-denom",
        toAmino: tx_1.MsgCreateDenom.toAmino,
        fromAmino: tx_1.MsgCreateDenom.fromAmino
    },
    "/osmosis.tokenfactory.v1beta1.MsgMint": {
        aminoType: "osmosis/tokenfactory/mint",
        toAmino: tx_1.MsgMint.toAmino,
        fromAmino: tx_1.MsgMint.fromAmino
    },
    "/osmosis.tokenfactory.v1beta1.MsgBurn": {
        aminoType: "osmosis/tokenfactory/burn",
        toAmino: tx_1.MsgBurn.toAmino,
        fromAmino: tx_1.MsgBurn.fromAmino
    },
    "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
        aminoType: "osmosis/tokenfactory/change-admin",
        toAmino: tx_1.MsgChangeAdmin.toAmino,
        fromAmino: tx_1.MsgChangeAdmin.fromAmino
    },
    "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
        aminoType: "osmosis/tokenfactory/set-denom-metadata",
        toAmino: tx_1.MsgSetDenomMetadata.toAmino,
        fromAmino: tx_1.MsgSetDenomMetadata.fromAmino
    }
};
