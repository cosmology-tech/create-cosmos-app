"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRPCMsgClient = void 0;
const createRPCMsgClient = async ({ rpc }) => ({
    cosmos: {
        authz: {
            v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/authz/v1beta1/tx.rpc.msg")))).MsgClientImpl(rpc)
        },
        bank: {
            v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/bank/v1beta1/tx.rpc.msg")))).MsgClientImpl(rpc)
        },
        crisis: {
            v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/crisis/v1beta1/tx.rpc.msg")))).MsgClientImpl(rpc)
        },
        distribution: {
            v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/distribution/v1beta1/tx.rpc.msg")))).MsgClientImpl(rpc)
        },
        evidence: {
            v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/evidence/v1beta1/tx.rpc.msg")))).MsgClientImpl(rpc)
        },
        feegrant: {
            v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/feegrant/v1beta1/tx.rpc.msg")))).MsgClientImpl(rpc)
        },
        gov: {
            v1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/gov/v1/tx.rpc.msg")))).MsgClientImpl(rpc),
            v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/gov/v1beta1/tx.rpc.msg")))).MsgClientImpl(rpc)
        },
        group: {
            v1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/group/v1/tx.rpc.msg")))).MsgClientImpl(rpc)
        },
        nft: {
            v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/nft/v1beta1/tx.rpc.msg")))).MsgClientImpl(rpc)
        },
        slashing: {
            v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/slashing/v1beta1/tx.rpc.msg")))).MsgClientImpl(rpc)
        },
        staking: {
            v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/staking/v1beta1/tx.rpc.msg")))).MsgClientImpl(rpc)
        },
        upgrade: {
            v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/upgrade/v1beta1/tx.rpc.msg")))).MsgClientImpl(rpc)
        },
        vesting: {
            v1beta1: new (await Promise.resolve().then(() => __importStar(require("../cosmos/vesting/v1beta1/tx.rpc.msg")))).MsgClientImpl(rpc)
        }
    },
    ibc: {
        applications: {
            transfer: {
                v1: new (await Promise.resolve().then(() => __importStar(require("./applications/transfer/v1/tx.rpc.msg")))).MsgClientImpl(rpc)
            }
        },
        core: {
            channel: {
                v1: new (await Promise.resolve().then(() => __importStar(require("./core/channel/v1/tx.rpc.msg")))).MsgClientImpl(rpc)
            },
            client: {
                v1: new (await Promise.resolve().then(() => __importStar(require("./core/client/v1/tx.rpc.msg")))).MsgClientImpl(rpc)
            },
            connection: {
                v1: new (await Promise.resolve().then(() => __importStar(require("./core/connection/v1/tx.rpc.msg")))).MsgClientImpl(rpc)
            }
        }
    }
});
exports.createRPCMsgClient = createRPCMsgClient;
