import { ChainRegistryFetcher } from '@chain-registry/client';
import { StargateClient } from '@cosmjs/stargate';
export declare const Config: {
    registry: any;
    configFile: any;
    setConfigFile: any;
    setRegistry: any;
};
export declare const useRegistry: (configFile: any) => Promise<ChainRegistryFetcher>;
export declare const useChain: (chainName: any, signingOptions?: any) => {
    chain: any;
    chainInfo: any;
    getCoin: () => any;
    getRpcEndpoint: () => string;
    getRestEndpoint: () => string;
    getGenesisMnemonic: () => Promise<any>;
    getStargateClient: () => Promise<StargateClient>;
    creditFromFaucet: (address: any, denom?: any) => Promise<void>;
};
