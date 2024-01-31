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
                v1alpha1: (await Promise.resolve().then(() => __importStar(require("../cosmos/app/v1alpha1/query.rpc.Query")))).createClientImpl(rpc)
            },
            auth: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/auth/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            authz: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/authz/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            bank: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/bank/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            base: {
                tendermint: {
                    v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/base/tendermint/v1beta1/query.rpc.Service")))).createClientImpl(rpc)
                }
            },
            distribution: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/distribution/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            evidence: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/evidence/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            feegrant: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/feegrant/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            gov: {
                v1: (await Promise.resolve().then(() => __importStar(require("../cosmos/gov/v1/query.rpc.Query")))).createClientImpl(rpc),
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/gov/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            group: {
                v1: (await Promise.resolve().then(() => __importStar(require("../cosmos/group/v1/query.rpc.Query")))).createClientImpl(rpc)
            },
            mint: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/mint/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            nft: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/nft/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            params: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/params/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            slashing: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/slashing/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            staking: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/staking/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            tx: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/tx/v1beta1/service.rpc.Service")))).createClientImpl(rpc)
            },
            upgrade: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("../cosmos/upgrade/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            }
        },
        osmosis: {
            claim: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./claim/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            epochs: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./epochs/query.rpc.Query")))).createClientImpl(rpc)
            },
            gamm: {
                v2: (await Promise.resolve().then(() => __importStar(require("./gamm/v2/query.rpc.Query")))).createClientImpl(rpc)
            },
            ibcratelimit: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./ibc-rate-limit/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            incentives: (await Promise.resolve().then(() => __importStar(require("./incentives/query.rpc.Query")))).createClientImpl(rpc),
            lockup: (await Promise.resolve().then(() => __importStar(require("./lockup/query.rpc.Query")))).createClientImpl(rpc),
            mint: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./mint/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            poolincentives: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./pool-incentives/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            superfluid: (await Promise.resolve().then(() => __importStar(require("./superfluid/query.rpc.Query")))).createClientImpl(rpc),
            tokenfactory: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./tokenfactory/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            twap: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./twap/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            },
            txfees: {
                v1beta1: (await Promise.resolve().then(() => __importStar(require("./txfees/v1beta1/query.rpc.Query")))).createClientImpl(rpc)
            }
        }
    };
};
exports.createRPCQueryClient = createRPCQueryClient;
