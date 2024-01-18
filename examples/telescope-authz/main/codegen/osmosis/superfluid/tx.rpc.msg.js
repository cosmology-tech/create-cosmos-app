"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientImpl = exports.MsgClientImpl = void 0;
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
    }
    /* Execute superfluid delegation for a lockup */
    superfluidDelegate = async (signerAddress, message, fee = "auto", memo = "") => {
        const data = [{
                typeUrl: tx_1.MsgSuperfluidDelegate.typeUrl,
                value: message
            }];
        return this.rpc.signAndBroadcast(signerAddress, data, fee, memo);
    };
    /* Execute superfluid undelegation for a lockup */
    superfluidUndelegate = async (signerAddress, message, fee = "auto", memo = "") => {
        const data = [{
                typeUrl: tx_1.MsgSuperfluidUndelegate.typeUrl,
                value: message
            }];
        return this.rpc.signAndBroadcast(signerAddress, data, fee, memo);
    };
    /* For a given lock that is being superfluidly undelegated,
     also unbond the underlying lock. */
    superfluidUnbondLock = async (signerAddress, message, fee = "auto", memo = "") => {
        const data = [{
                typeUrl: tx_1.MsgSuperfluidUnbondLock.typeUrl,
                value: message
            }];
        return this.rpc.signAndBroadcast(signerAddress, data, fee, memo);
    };
    /* Execute lockup lock and superfluid delegation in a single msg */
    lockAndSuperfluidDelegate = async (signerAddress, message, fee = "auto", memo = "") => {
        const data = [{
                typeUrl: tx_1.MsgLockAndSuperfluidDelegate.typeUrl,
                value: message
            }];
        return this.rpc.signAndBroadcast(signerAddress, data, fee, memo);
    };
    /* UnPoolWhitelistedPool */
    unPoolWhitelistedPool = async (signerAddress, message, fee = "auto", memo = "") => {
        const data = [{
                typeUrl: tx_1.MsgUnPoolWhitelistedPool.typeUrl,
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
