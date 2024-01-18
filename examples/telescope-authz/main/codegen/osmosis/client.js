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
exports.getSigningOsmosisClient = exports.getSigningOsmosisClientOptions = exports.osmosisProtoRegistry = exports.osmosisAminoConverters = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const osmosisGammPoolmodelsBalancerTxTxRegistry = __importStar(require("./gamm/pool-models/balancer/tx/tx.registry"));
const osmosisGammPoolmodelsStableswapTxRegistry = __importStar(require("./gamm/pool-models/stableswap/tx.registry"));
const osmosisIncentivesTxRegistry = __importStar(require("./incentives/tx.registry"));
const osmosisLockupTxRegistry = __importStar(require("./lockup/tx.registry"));
const osmosisSuperfluidTxRegistry = __importStar(require("./superfluid/tx.registry"));
const osmosisTokenfactoryV1beta1TxRegistry = __importStar(require("./tokenfactory/v1beta1/tx.registry"));
const osmosisGammPoolmodelsBalancerTxTxAmino = __importStar(require("./gamm/pool-models/balancer/tx/tx.amino"));
const osmosisGammPoolmodelsStableswapTxAmino = __importStar(require("./gamm/pool-models/stableswap/tx.amino"));
const osmosisGammV1beta1TxAmino = __importStar(require("./gamm/v1beta1/tx.amino"));
const osmosisIncentivesTxAmino = __importStar(require("./incentives/tx.amino"));
const osmosisLockupTxAmino = __importStar(require("./lockup/tx.amino"));
const osmosisSuperfluidTxAmino = __importStar(require("./superfluid/tx.amino"));
const osmosisTokenfactoryV1beta1TxAmino = __importStar(require("./tokenfactory/v1beta1/tx.amino"));
exports.osmosisAminoConverters = {
    ...osmosisGammPoolmodelsBalancerTxTxAmino.AminoConverter,
    ...osmosisGammPoolmodelsStableswapTxAmino.AminoConverter,
    ...osmosisGammV1beta1TxAmino.AminoConverter,
    ...osmosisIncentivesTxAmino.AminoConverter,
    ...osmosisLockupTxAmino.AminoConverter,
    ...osmosisSuperfluidTxAmino.AminoConverter,
    ...osmosisTokenfactoryV1beta1TxAmino.AminoConverter
};
exports.osmosisProtoRegistry = [...osmosisGammPoolmodelsBalancerTxTxRegistry.registry, ...osmosisGammPoolmodelsStableswapTxRegistry.registry, ...osmosisIncentivesTxRegistry.registry, ...osmosisLockupTxRegistry.registry, ...osmosisSuperfluidTxRegistry.registry, ...osmosisTokenfactoryV1beta1TxRegistry.registry];
const getSigningOsmosisClientOptions = ({ defaultTypes = stargate_1.defaultRegistryTypes } = {}) => {
    const registry = new proto_signing_1.Registry([...defaultTypes, ...exports.osmosisProtoRegistry]);
    const aminoTypes = new stargate_1.AminoTypes({
        ...exports.osmosisAminoConverters
    });
    return {
        registry,
        aminoTypes
    };
};
exports.getSigningOsmosisClientOptions = getSigningOsmosisClientOptions;
const getSigningOsmosisClient = async ({ rpcEndpoint, signer, defaultTypes = stargate_1.defaultRegistryTypes }) => {
    const { registry, aminoTypes } = (0, exports.getSigningOsmosisClientOptions)({
        defaultTypes
    });
    const client = await stargate_1.SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes
    });
    return client;
};
exports.getSigningOsmosisClient = getSigningOsmosisClient;
