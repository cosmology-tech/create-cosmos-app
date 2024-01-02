"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferIbcTokens = exports.waitUntil = exports.calcShareOutAmount = void 0;
const helpers_1 = require("@confio/relayer/build/lib/helpers");
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const bignumber_js_1 = __importDefault(require("bignumber.js"));
//@ts-ignore
const codegen_1 = require("./codegen");
const config_1 = require("./config");
const calcShareOutAmount = (poolInfo, coinsNeeded) => {
    return poolInfo.poolAssets
        .map(({ token }, i) => {
        const tokenInAmount = new bignumber_js_1.default(coinsNeeded[i].amount);
        const totalShare = new bignumber_js_1.default(poolInfo.totalShares.amount);
        const totalShareExp = totalShare.shiftedBy(-18);
        const poolAssetAmount = new bignumber_js_1.default(token.amount);
        return tokenInAmount
            .multipliedBy(totalShareExp)
            .dividedBy(poolAssetAmount)
            .shiftedBy(18)
            .decimalPlaces(0, bignumber_js_1.default.ROUND_HALF_UP)
            .toString();
    })
        .sort((a, b) => (new bignumber_js_1.default(a).lt(b) ? -1 : 1))[0];
};
exports.calcShareOutAmount = calcShareOutAmount;
const waitUntil = (date, timeout = 90000) => {
    return new Promise((resolve) => {
        const delay = date.getTime() - Date.now();
        if (delay > timeout) {
            throw new Error('Timeout to wait until date');
        }
        setTimeout(resolve, delay + 3000);
    });
};
exports.waitUntil = waitUntil;
const transferIbcTokens = async (fromChain, toChain, toAddress, amount) => {
    const registry = config_1.Config.registry;
    const { chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } = (0, config_1.useChain)(fromChain);
    const denom = getCoin().base;
    const { chainInfo: toChainInfo } = (0, config_1.useChain)(toChain);
    const ibcInfos = registry.getChainIbcData(chainInfo.chain.chain_id);
    const ibcInfo = ibcInfos.find((i) => i.chain_1.chain_name === chainInfo.chain.chain_id &&
        i.chain_2.chain_name === toChainInfo.chain.chain_id);
    if (!ibcInfo) {
        throw new Error('cannot find IBC info');
    }
    const { port_id: sourcePort, channel_id: sourceChannel } = ibcInfo.channels[0].chain_1;
    // Create temp address on fromChain that will transfer the funds
    const wallet = await proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic((0, helpers_1.generateMnemonic)(), { prefix: chainInfo.chain.bech32_prefix });
    const fromAddress = (await wallet.getAccounts())[0].address;
    // Transfer funds to address from faucet
    await creditFromFaucet(fromAddress);
    // Create ibc client to transfer tokens
    const fromClient = await (0, codegen_1.getSigningIbcClient)({
        rpcEndpoint: getRpcEndpoint(),
        signer: wallet
    });
    const currentTime = Math.floor(Date.now() / 1000);
    const timeoutTime = currentTime + 300; // 5 minutes
    const fee = {
        amount: [
            {
                denom,
                amount: '100000'
            }
        ],
        gas: '550000'
    };
    const token = {
        denom,
        amount
    };
    // send ibc tokens
    const resp = await fromClient.sendIbcTokens(fromAddress, toAddress, token, sourcePort, sourceChannel, undefined, timeoutTime, fee);
    (0, stargate_1.assertIsDeliverTxSuccess)(resp);
    return token;
};
exports.transferIbcTokens = transferIbcTokens;
