"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientImpl = exports.MsgClientImpl = void 0;
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
    }
    /* LockTokens lock tokens */
    lockTokens = async (signerAddress, message, fee = "auto", memo = "") => {
        const data = [{
                typeUrl: tx_1.MsgLockTokens.typeUrl,
                value: message
            }];
        return this.rpc.signAndBroadcast(signerAddress, data, fee, memo);
    };
    /* BeginUnlockingAll begin unlocking all tokens */
    beginUnlockingAll = async (signerAddress, message, fee = "auto", memo = "") => {
        const data = [{
                typeUrl: tx_1.MsgBeginUnlockingAll.typeUrl,
                value: message
            }];
        return this.rpc.signAndBroadcast(signerAddress, data, fee, memo);
    };
    /* MsgBeginUnlocking begins unlocking tokens by lock ID */
    beginUnlocking = async (signerAddress, message, fee = "auto", memo = "") => {
        const data = [{
                typeUrl: tx_1.MsgBeginUnlocking.typeUrl,
                value: message
            }];
        return this.rpc.signAndBroadcast(signerAddress, data, fee, memo);
    };
    /* MsgEditLockup edits the existing lockups by lock ID */
    extendLockup = async (signerAddress, message, fee = "auto", memo = "") => {
        const data = [{
                typeUrl: tx_1.MsgExtendLockup.typeUrl,
                value: message
            }];
        return this.rpc.signAndBroadcast(signerAddress, data, fee, memo);
    };
    /* ForceUnlock */
    forceUnlock = async (signerAddress, message, fee = "auto", memo = "") => {
        const data = [{
                typeUrl: tx_1.MsgForceUnlock.typeUrl,
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
