import { assetLists, chains } from "@chain-registry/v2";

/**
 * mainnet: 'injective'
 * testnet: 'injectivetestnet'
 * mainnet rpc: 'https://sentry.tm.injective.network'
 * testnet rpc: 'https://testnet.sentry.tm.injective.network'
 */
export const defaultChainName = 'injective'
export const defaultRpcEndpoint = 'https://sentry.tm.injective.network'

export const defaultChain = chains.find((chain) => chain.chainName === defaultChainName)

export const defaultAssetList = assetLists.find((assetList) => assetList.chainName === defaultChainName)