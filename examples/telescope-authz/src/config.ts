import { ChainRegistryFetcher } from '@chain-registry/client';
import fs from 'fs';
import yaml from 'js-yaml';
import fetch from 'node-fetch';
import { StargateClient } from '@cosmjs/stargate';

//@ts-ignore
import { getSigningCosmosClientOptions } from './codegen';

export const Config = {
  registry: undefined,
  configFile: undefined,

  set setConfigFile(configFile) {
    this.configFile = configFile;
  },
  set setRegistry(registry) {
    this.registry = registry;
  }
};

export const useRegistry = async (configFile) => {
  const config: any = yaml.load(fs.readFileSync(configFile, 'utf8'));
  const registryUrl = `http://localhost:${config.registry.ports.rest}`;

  const urls = [];
  config.chains.forEach((chain) => {
    urls.push(
      `${registryUrl}/chains/${chain.name}`,
      `${registryUrl}/chains/${chain.name}/assets`
    );
  });
  config.relayers.forEach((relayer) => {
    urls.push(
      `${registryUrl}/ibc/${relayer.chains[0]}/${relayer.chains[1]}`,
      `${registryUrl}/ibc/${relayer.chains[1]}/${relayer.chains[0]}`
    );
  });

  const options = {
    urls: urls
  };
  const registry = new ChainRegistryFetcher(options);
  await registry.fetchUrls();

  return registry;
};

export const useChain = (chainName, signingOptions = null) => {
  const registry = Config.registry;
  const configFile = Config.configFile;
  const config: any = yaml.load(fs.readFileSync(configFile, 'utf8'));

  const chain = registry.getChain(chainName);
  const chainInfo = registry.getChainInfo(chainName);
  const chainID = chainInfo.chain.chain_id;

  const getRpcEndpoint = () => {
    return `http://localhost:${
      config.chains.find((chain) => chain.name === chainID).ports.rpc
    }`;
  };
  const getRestEndpoint = () => {
    return `http://localhost:${
      config.chains.find((chain) => chain.name === chainID).ports.rest
    }`;
  };

  const getGenesisMnemonic = async () => {
    const url = `http://localhost:${config.registry.ports.rest}/chains/${chainID}/keys`;
    const response = await fetch(url, {});
    const data = await response.json();
    return data['genesis'][0]['mnemonic'];
  };

  if (!signingOptions) {
    signingOptions = getSigningCosmosClientOptions();
  }

  const getStargateClient = () => {
    const rpcEndpoint = getRpcEndpoint();
    return StargateClient.connect(rpcEndpoint, signingOptions);
  };

  const getCoin = () => {
    return chainInfo.fetcher.getChainAssetList(chainName).assets[0];
  };

  const creditFromFaucet = async (address, denom = null) => {
    const faucetEndpoint = `http://localhost:${
      config.chains.find((chain) => chain.name === chainID).ports.faucet
    }/credit`;
    if (!denom) {
      denom = getCoin().base;
    }
    await fetch(faucetEndpoint, {
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
