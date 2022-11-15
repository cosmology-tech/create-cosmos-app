import { StdFee } from '@cosmjs/amino';
import { assets } from 'chain-registry';
import { AssetList, Asset } from '@chain-registry/types';
import { SigningStargateClient } from '@cosmjs/stargate';
import { cosmos } from 'stargazejs';

export const chainName = 'stargaze';

export const chainassets: AssetList = assets.find(
    (chain) => chain.chain_name === chainName
) as AssetList;

export const coin: Asset = chainassets.assets.find(
    (asset) => asset.base === 'ustars'
) as Asset;

export const sendTokens = (
    getSigningStargateClient: () => Promise<SigningStargateClient>,
    setResp: (resp: string) => any,
    address: string
) => {
    return async () => {
        const stargateClient = await getSigningStargateClient();
        if (!stargateClient || !address) {
            console.error('stargateClient undefined or address undefined.');
            return;
        }

        const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

        const msg = send({
            amount: [
                {
                    denom: coin.base,
                    amount: '1000'
                }
            ],
            toAddress: address,
            fromAddress: address
        });

        const fee: StdFee = {
            amount: [
                {
                    denom: coin.base,
                    amount: '864'
                }
            ],
            gas: '86364'
        };
        const response = await stargateClient.signAndBroadcast(address, [msg], fee);
        setResp(JSON.stringify(response, null, 2));
    };
};