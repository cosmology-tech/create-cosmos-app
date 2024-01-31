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
exports.createRPCQueryClient = void 0;
const createRPCQueryClient = async ({ rpc }) => {
    return {
        cosmos: {
            app: {
                v1alpha1: (await Promise.resolve().then(() => __importStar(require("./app/v1alpha1/query.rpc.Query")))).createClientImpl(rpc)
            },
            auth: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./auth/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            authz: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./authz/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            bank: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./bank/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            base: {
                tendermint: {
                    v1beta1: (await Promise.resolve().then(() => __importStar(require("./base/tendermint/v1beta1/query.rpc.Service")))).createClientImpl(rpc)
                }
            },
            distribution: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./distribution/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            evidence: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./evidence/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            feegrant: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./feegrant/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            gov: {
                v1: (await Promise.resolve().then(() => __importStar(require("./gov/v1/query.rpc.Query")))).createClientImpl(rpc),
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./gov/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            group: {
                v1: (await Promise.resolve().then(() => __importStar(require("./group/v1/query.rpc.Query")))).createClientImpl(rpc)
            },
            mint: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./mint/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            nft: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./nft/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            params: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./params/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            slashing: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./slashing/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            staking: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./staking/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            tx: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./tx/v1beta1/service.rpc.Service")))).createClientImpl(rpc)
            },
            upgrade: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./upgrade/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            }
        }
    };
};
exports.createRPCQueryClient = createRPCQueryClient;
