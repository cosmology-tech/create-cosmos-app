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
exports.createRpcQueryMobxStores = void 0;
const _CosmosAppV1alpha1Queryrpc = __importStar(require("./cosmos/app/v1alpha1/query.rpc.Query"));
const _CosmosAuthV1beta1Queryrpc = __importStar(require("./cosmos/auth/v1beta1/query.rpc.Query"));
const _CosmosAuthzV1beta1Queryrpc = __importStar(require("./cosmos/authz/v1beta1/query.rpc.Query"));
const _CosmosBankV1beta1Queryrpc = __importStar(require("./cosmos/bank/v1beta1/query.rpc.Query"));
const _CosmosBaseTendermintV1beta1Queryrpc = __importStar(require("./cosmos/base/tendermint/v1beta1/query.rpc.Service"));
const _CosmosDistributionV1beta1Queryrpc = __importStar(require("./cosmos/distribution/v1beta1/query.rpc.Query"));
const _CosmosEvidenceV1beta1Queryrpc = __importStar(require("./cosmos/evidence/v1beta1/query.rpc.Query"));
const _CosmosFeegrantV1beta1Queryrpc = __importStar(require("./cosmos/feegrant/v1beta1/query.rpc.Query"));
const _CosmosGovV1Queryrpc = __importStar(require("./cosmos/gov/v1/query.rpc.Query"));
const _CosmosGovV1beta1Queryrpc = __importStar(require("./cosmos/gov/v1beta1/query.rpc.Query"));
const _CosmosGroupV1Queryrpc = __importStar(require("./cosmos/group/v1/query.rpc.Query"));
const _CosmosMintV1beta1Queryrpc = __importStar(require("./cosmos/mint/v1beta1/query.rpc.Query"));
const _CosmosNftV1beta1Queryrpc = __importStar(require("./cosmos/nft/v1beta1/query.rpc.Query"));
const _CosmosParamsV1beta1Queryrpc = __importStar(require("./cosmos/params/v1beta1/query.rpc.Query"));
const _CosmosSlashingV1beta1Queryrpc = __importStar(require("./cosmos/slashing/v1beta1/query.rpc.Query"));
const _CosmosStakingV1beta1Queryrpc = __importStar(require("./cosmos/staking/v1beta1/query.rpc.Query"));
const _CosmosTxV1beta1Servicerpc = __importStar(require("./cosmos/tx/v1beta1/service.rpc.Service"));
const _CosmosUpgradeV1beta1Queryrpc = __importStar(require("./cosmos/upgrade/v1beta1/query.rpc.Query"));
const _CosmwasmWasmV1Queryrpc = __importStar(require("./cosmwasm/wasm/v1/query.rpc.Query"));
const _IbcApplicationsTransferV1Queryrpc = __importStar(require("./ibc/applications/transfer/v1/query.rpc.Query"));
const _IbcCoreChannelV1Queryrpc = __importStar(require("./ibc/core/channel/v1/query.rpc.Query"));
const _IbcCoreClientV1Queryrpc = __importStar(require("./ibc/core/client/v1/query.rpc.Query"));
const _IbcCoreConnectionV1Queryrpc = __importStar(require("./ibc/core/connection/v1/query.rpc.Query"));
const _IbcCorePortV1Queryrpc = __importStar(require("./ibc/core/port/v1/query.rpc.Query"));
const _OsmosisClaimV1beta1Queryrpc = __importStar(require("./osmosis/claim/v1beta1/query.rpc.Query"));
const _OsmosisEpochsQueryrpc = __importStar(require("./osmosis/epochs/query.rpc.Query"));
const _OsmosisGammV2Queryrpc = __importStar(require("./osmosis/gamm/v2/query.rpc.Query"));
const _OsmosisIbcratelimitV1beta1Queryrpc = __importStar(require("./osmosis/ibc-rate-limit/v1beta1/query.rpc.Query"));
const _OsmosisIncentivesQueryrpc = __importStar(require("./osmosis/incentives/query.rpc.Query"));
const _OsmosisLockupQueryrpc = __importStar(require("./osmosis/lockup/query.rpc.Query"));
const _OsmosisMintV1beta1Queryrpc = __importStar(require("./osmosis/mint/v1beta1/query.rpc.Query"));
const _OsmosisPoolincentivesV1beta1Queryrpc = __importStar(require("./osmosis/pool-incentives/v1beta1/query.rpc.Query"));
const _OsmosisSuperfluidQueryrpc = __importStar(require("./osmosis/superfluid/query.rpc.Query"));
const _OsmosisTokenfactoryV1beta1Queryrpc = __importStar(require("./osmosis/tokenfactory/v1beta1/query.rpc.Query"));
const _OsmosisTwapV1beta1Queryrpc = __importStar(require("./osmosis/twap/v1beta1/query.rpc.Query"));
const _OsmosisTxfeesV1beta1Queryrpc = __importStar(require("./osmosis/txfees/v1beta1/query.rpc.Query"));
const createRpcQueryMobxStores = ({ rpc }) => {
    return {
        cosmos: {
            app: {
                v1alpha1: _CosmosAppV1alpha1Queryrpc.createRpcQueryMobxStores(rpc)
            },
            auth: {
                v1beta1: _CosmosAuthV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
            },
            authz: {
                v1beta1: _CosmosAuthzV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
            },
            bank: {
                v1beta1: _CosmosBankV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
            },
            base: {
                tendermint: {
                    v1beta1: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
                }
            },
            distribution: {
                v1beta1: _CosmosDistributionV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
            },
            evidence: {
                v1beta1: _CosmosEvidenceV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
            },
            feegrant: {
                v1beta1: _CosmosFeegrantV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
            },
            gov: {
                v1: _CosmosGovV1Queryrpc.createRpcQueryMobxStores(rpc),
                v1beta1: _CosmosGovV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
            },
            group: {
                v1: _CosmosGroupV1Queryrpc.createRpcQueryMobxStores(rpc)
            },
            mint: {
                v1beta1: _CosmosMintV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
            },
            nft: {
                v1beta1: _CosmosNftV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
            },
            params: {
                v1beta1: _CosmosParamsV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
            },
            slashing: {
                v1beta1: _CosmosSlashingV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
            },
            staking: {
                v1beta1: _CosmosStakingV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
            },
            tx: {
                v1beta1: _CosmosTxV1beta1Servicerpc.createRpcQueryMobxStores(rpc)
            },
            upgrade: {
                v1beta1: _CosmosUpgradeV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
            }
        },
        cosmwasm: {
            wasm: {
                v1: _CosmwasmWasmV1Queryrpc.createRpcQueryMobxStores(rpc)
            }
        },
        ibc: {
            applications: {
                transfer: {
                    v1: _IbcApplicationsTransferV1Queryrpc.createRpcQueryMobxStores(rpc)
                }
            },
            core: {
                channel: {
                    v1: _IbcCoreChannelV1Queryrpc.createRpcQueryMobxStores(rpc)
                },
                client: {
                    v1: _IbcCoreClientV1Queryrpc.createRpcQueryMobxStores(rpc)
                },
                connection: {
                    v1: _IbcCoreConnectionV1Queryrpc.createRpcQueryMobxStores(rpc)
                },
                port: {
                    v1: _IbcCorePortV1Queryrpc.createRpcQueryMobxStores(rpc)
                }
            }
        },
        osmosis: {
            claim: {
                v1beta1: _OsmosisClaimV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
            },
            epochs: {
                v1beta1: _OsmosisEpochsQueryrpc.createRpcQueryMobxStores(rpc)
            },
            gamm: {
                v2: _OsmosisGammV2Queryrpc.createRpcQueryMobxStores(rpc)
            },
            ibcratelimit: {
                v1beta1: _OsmosisIbcratelimitV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
            },
            incentives: _OsmosisIncentivesQueryrpc.createRpcQueryMobxStores(rpc),
            lockup: _OsmosisLockupQueryrpc.createRpcQueryMobxStores(rpc),
            mint: {
                v1beta1: _OsmosisMintV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
            },
            poolincentives: {
                v1beta1: _OsmosisPoolincentivesV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
            },
            superfluid: _OsmosisSuperfluidQueryrpc.createRpcQueryMobxStores(rpc),
            tokenfactory: {
                v1beta1: _OsmosisTokenfactoryV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
            },
            twap: {
                v1beta1: _OsmosisTwapV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
            },
            txfees: {
                v1beta1: _OsmosisTxfeesV1beta1Queryrpc.createRpcQueryMobxStores(rpc)
            }
        }
    };
};
exports.createRpcQueryMobxStores = createRpcQueryMobxStores;
