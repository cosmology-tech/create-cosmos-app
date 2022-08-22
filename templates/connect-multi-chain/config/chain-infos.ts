import { ChooseChainInfo } from "../components";
import { chains as chainsBase, assets as chainAssets } from 'chain-registry';

export const chainInfos: ChooseChainInfo[] = chainsBase.map(chain => {
    const assets = chainAssets.find(
        _chain => _chain.chain_name === chain.chain_name
    )?.assets;
    return {
        chainId: chain.chain_id,
        label: chain.pretty_name,
        value: chain.chain_id,
        icon: assets ? assets[0]?.logo_URIs?.svg || assets[0]?.logo_URIs?.png : undefined,
        disabled: false
    }
});