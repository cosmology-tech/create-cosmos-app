"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AminoConverter = void 0;
const tx_1 = require("./tx");
exports.AminoConverter = {
    "/cosmwasm.wasm.v1.MsgStoreCode": {
        aminoType: "wasm/MsgStoreCode",
        toAmino: tx_1.MsgStoreCode.toAmino,
        fromAmino: tx_1.MsgStoreCode.fromAmino
    },
    "/cosmwasm.wasm.v1.MsgInstantiateContract": {
        aminoType: "wasm/MsgInstantiateContract",
        toAmino: tx_1.MsgInstantiateContract.toAmino,
        fromAmino: tx_1.MsgInstantiateContract.fromAmino
    },
    "/cosmwasm.wasm.v1.MsgExecuteContract": {
        aminoType: "wasm/MsgExecuteContract",
        toAmino: tx_1.MsgExecuteContract.toAmino,
        fromAmino: tx_1.MsgExecuteContract.fromAmino
    },
    "/cosmwasm.wasm.v1.MsgMigrateContract": {
        aminoType: "wasm/MsgMigrateContract",
        toAmino: tx_1.MsgMigrateContract.toAmino,
        fromAmino: tx_1.MsgMigrateContract.fromAmino
    },
    "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
        aminoType: "wasm/MsgUpdateAdmin",
        toAmino: tx_1.MsgUpdateAdmin.toAmino,
        fromAmino: tx_1.MsgUpdateAdmin.fromAmino
    },
    "/cosmwasm.wasm.v1.MsgClearAdmin": {
        aminoType: "wasm/MsgClearAdmin",
        toAmino: tx_1.MsgClearAdmin.toAmino,
        fromAmino: tx_1.MsgClearAdmin.fromAmino
    }
};
