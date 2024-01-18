"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClientImpl = exports.MsgClientImpl = void 0;
const tx_1 = require("./tx");
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
    }
    /* SetWithdrawAddress defines a method to change the withdraw address
     for a delegator (or validator self-delegation). */
    setWithdrawAddress = async (signerAddress, message, fee = "auto", memo = "") => {
        const data = [{
                typeUrl: tx_1.MsgSetWithdrawAddress.typeUrl,
                value: message
            }];
        return this.rpc.signAndBroadcast(signerAddress, data, fee, memo);
    };
    /* WithdrawDelegatorReward defines a method to withdraw rewards of delegator
     from a single validator. */
    withdrawDelegatorReward = async (signerAddress, message, fee = "auto", memo = "") => {
        const data = [{
                typeUrl: tx_1.MsgWithdrawDelegatorReward.typeUrl,
                value: message
            }];
        return this.rpc.signAndBroadcast(signerAddress, data, fee, memo);
    };
    /* WithdrawValidatorCommission defines a method to withdraw the
     full commission to the validator address. */
    withdrawValidatorCommission = async (signerAddress, message, fee = "auto", memo = "") => {
        const data = [{
                typeUrl: tx_1.MsgWithdrawValidatorCommission.typeUrl,
                value: message
            }];
        return this.rpc.signAndBroadcast(signerAddress, data, fee, memo);
    };
    /* FundCommunityPool defines a method to allow an account to directly
     fund the community pool. */
    fundCommunityPool = async (signerAddress, message, fee = "auto", memo = "") => {
        const data = [{
                typeUrl: tx_1.MsgFundCommunityPool.typeUrl,
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
