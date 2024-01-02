"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useChain = exports.useRegistry = exports.Config = void 0;
const client_1 = require("@chain-registry/client");
const fs_1 = __importDefault(require("fs"));
const js_yaml_1 = __importDefault(require("js-yaml"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const stargate_1 = require("@cosmjs/stargate");
//@ts-ignore
const codegen_1 = require("./codegen");
exports.Config = {
    registry: undefined,
    configFile: undefined,
    set setConfigFile(configFile) {
        this.configFile = configFile;
    },
    set setRegistry(registry) {
        this.registry = registry;
    }
};
const useRegistry = async (configFile) => {
    const config = js_yaml_1.default.load(fs_1.default.readFileSync(configFile, 'utf8'));
    const registryUrl = `http://localhost:${config.registry.ports.rest}`;
    const urls = [];
    config.chains.forEach((chain) => {
        urls.push(`${registryUrl}/chains/${chain.name}`, `${registryUrl}/chains/${chain.name}/assets`);
    });
    config.relayers.forEach((relayer) => {
        urls.push(`${registryUrl}/ibc/${relayer.chains[0]}/${relayer.chains[1]}`, `${registryUrl}/ibc/${relayer.chains[1]}/${relayer.chains[0]}`);
    });
    const options = {
        urls: urls
    };
    const registry = new client_1.ChainRegistryFetcher(options);
    await registry.fetchUrls();
    return registry;
};
exports.useRegistry = useRegistry;
const useChain = (chainName, signingOptions = null) => {
    const registry = exports.Config.registry;
    const configFile = exports.Config.configFile;
    const config = js_yaml_1.default.load(fs_1.default.readFileSync(configFile, 'utf8'));
    const chain = registry.getChain(chainName);
    const chainInfo = registry.getChainInfo(chainName);
    const chainID = chainInfo.chain.chain_id;
    const getRpcEndpoint = () => {
        return `http://localhost:${config.chains.find((chain) => chain.name === chainID).ports.rpc}`;
    };
    const getRestEndpoint = () => {
        return `http://localhost:${config.chains.find((chain) => chain.name === chainID).ports.rest}`;
    };
    const getGenesisMnemonic = async () => {
        const url = `http://localhost:${config.registry.ports.rest}/chains/${chainID}/keys`;
        const response = await (0, node_fetch_1.default)(url, {});
        const data = await response.json();
        return data['genesis'][0]['mnemonic'];
    };
    if (!signingOptions) {
        signingOptions = (0, codegen_1.getSigningCosmosClientOptions)();
    }
    const getStargateClient = () => {
        const rpcEndpoint = getRpcEndpoint();
        return stargate_1.StargateClient.connect(rpcEndpoint, signingOptions);
    };
    const getCoin = () => {
        return chainInfo.fetcher.getChainAssetList(chainName).assets[0];
    };
    const creditFromFaucet = async (address, denom = null) => {
        const faucetEndpoint = `http://localhost:${config.chains.find((chain) => chain.name === chainID).ports.faucet}/credit`;
        if (!denom) {
            denom = getCoin().base;
        }
        await (0, node_fetch_1.default)(faucetEndpoint, {
            method: 'POST',
            body: JSON.stringify({
                address,
                denom
            }),
            headers: {
                'Content-type': 'application/json'
            }
        });
    };
    return {
        chain,
        chainInfo,
        getCoin,
        getRpcEndpoint,
        getRestEndpoint,
        getGenesisMnemonic,
        getStargateClient,
        creditFromFaucet
    };
};
exports.useChain = useChain;
