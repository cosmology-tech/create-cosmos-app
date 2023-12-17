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
exports.getSigningIbcClient = exports.getSigningIbcClientOptions = exports.ibcProtoRegistry = exports.ibcAminoConverters = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const stargate_1 = require("@cosmjs/stargate");
const ibcApplicationsTransferV1TxRegistry = __importStar(require("./applications/transfer/v1/tx.registry"));
const ibcCoreChannelV1TxRegistry = __importStar(require("./core/channel/v1/tx.registry"));
const ibcCoreClientV1TxRegistry = __importStar(require("./core/client/v1/tx.registry"));
const ibcCoreConnectionV1TxRegistry = __importStar(require("./core/connection/v1/tx.registry"));
const ibcApplicationsTransferV1TxAmino = __importStar(require("./applications/transfer/v1/tx.amino"));
const ibcCoreChannelV1TxAmino = __importStar(require("./core/channel/v1/tx.amino"));
const ibcCoreClientV1TxAmino = __importStar(require("./core/client/v1/tx.amino"));
const ibcCoreConnectionV1TxAmino = __importStar(require("./core/connection/v1/tx.amino"));
exports.ibcAminoConverters = {
    ...ibcApplicationsTransferV1TxAmino.AminoConverter,
    ...ibcCoreChannelV1TxAmino.AminoConverter,
    ...ibcCoreClientV1TxAmino.AminoConverter,
    ...ibcCoreConnectionV1TxAmino.AminoConverter
};
exports.ibcProtoRegistry = [...ibcApplicationsTransferV1TxRegistry.registry, ...ibcCoreChannelV1TxRegistry.registry, ...ibcCoreClientV1TxRegistry.registry, ...ibcCoreConnectionV1TxRegistry.registry];
const getSigningIbcClientOptions = ({ defaultTypes = stargate_1.defaultRegistryTypes } = {}) => {
    const registry = new proto_signing_1.Registry([...defaultTypes, ...exports.ibcProtoRegistry]);
    const aminoTypes = new stargate_1.AminoTypes({
        ...exports.ibcAminoConverters
    });
    return {
        registry,
        aminoTypes
    };
};
exports.getSigningIbcClientOptions = getSigningIbcClientOptions;
const getSigningIbcClient = async ({ rpcEndpoint, signer, defaultTypes = stargate_1.defaultRegistryTypes }) => {
    const { registry, aminoTypes } = (0, exports.getSigningIbcClientOptions)({
        defaultTypes
    });
    const client = await stargate_1.SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
        registry: registry,
        aminoTypes
    });
    return client;
};
exports.getSigningIbcClient = getSigningIbcClient;
