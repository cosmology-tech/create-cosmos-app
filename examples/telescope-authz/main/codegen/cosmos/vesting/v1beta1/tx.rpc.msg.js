"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientImpl = exports.MsgClientImpl = void 0;
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
    }
    /* CreateVestingAccount defines a method that enables creating a vesting
     account. */
    createVestingAccount = async (signerAddress, message, fee = "auto", memo = "") => {
        const data = [{
                typeUrl: tx_1.MsgCreateVestingAccount.typeUrl,
                value: message
            }];
        return this.rpc.signAndBroadcast(signerAddress, data, fee, memo);
    };
    /* CreatePermanentLockedAccount defines a method that enables creating a permanent
     locked account. */
    createPermanentLockedAccount = async (signerAddress, message, fee = "auto", memo = "") => {
        const data = [{
                typeUrl: tx_1.MsgCreatePermanentLockedAccount.typeUrl,
                value: message
            }];
        return this.rpc.signAndBroadcast(signerAddress, data, fee, memo);
    };
    /* CreatePeriodicVestingAccount defines a method that enables creating a
     periodic vesting account. */
    createPeriodicVestingAccount = async (signerAddress, message, fee = "auto", memo = "") => {
        const data = [{
                typeUrl: tx_1.MsgCreatePeriodicVestingAccount.typeUrl,
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
