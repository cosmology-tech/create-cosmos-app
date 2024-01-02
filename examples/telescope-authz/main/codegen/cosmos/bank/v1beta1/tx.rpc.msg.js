"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientImpl = exports.MsgClientImpl = void 0;
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
    }
    /* Send defines a method for sending coins from one account to another account. */
    send = async (signerAddress, message, fee = "auto", memo = "") => {
        const data = [{
                typeUrl: tx_1.MsgSend.typeUrl,
                value: message
            }];
        return this.rpc.signAndBroadcast(signerAddress, data, fee, memo);
    };
    /* MultiSend defines a method for sending coins from some accounts to other accounts. */
    multiSend = async (signerAddress, message, fee = "auto", memo = "") => {
        const data = [{
                typeUrl: tx_1.MsgMultiSend.typeUrl,
                value: message
            }];
        return this.rpc.signAndBroadcast(signerAddress, data, fee, memo);
    };
}
exports.MsgClientImpl = MsgClientImpl;
const createClientImpl = (rpc) => {
    return new MsgClientImpl(rpc);
};
exports.createClientImpl = createClientImpl;
