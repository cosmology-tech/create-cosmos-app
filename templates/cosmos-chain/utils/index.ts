import BigNumber from "bignumber.js";
import { assets, chains } from "chain-registry";
import { Asset, Chain } from "@chain-registry/types";
import { asset_lists } from "@chain-registry/assets"; // ibc assets
import { Coin } from "@cosmjs/stargate";

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function paginate(limit: bigint) {
  return {
    limit,
    key: new Uint8Array(),
    offset: 0n,
    countTotal: true,
    reverse: false,
  };
}

export function getLogo(from: Asset | Chain) {
  return from.logo_URIs?.svg || from.logo_URIs?.png || from.logo_URIs?.jpeg;
}

export function getChain(name: string) {
  return chains.find((chain) => chain.chain_name === name);
}

export function getChainLogo(name: string) {
  const chain = getChain(name);
  return chain ? getLogo(chain) : null;
}

export function formatPrice(number: number | string, symbol = "$") {
  return `${symbol ? symbol + " " : ""}${Number(number).toFixed(2)}`;
}

export function convertChainBalances(chainName: string, balances: Coin[] = []) {
  const ibcAssets =
    asset_lists.find((asset) => asset.chain_name === chainName)?.assets || [];
  const nativeAssets =
    assets.find((asset) => asset.chain_name === chainName)?.assets || [];

  return balances.map((balance) => {
    if (balance.denom.startsWith("gamm/")) return { balance };

    const assets = balance.denom.startsWith("ibc/") ? ibcAssets : nativeAssets;
    const asset = assets.find((asset) => asset.base === balance.denom);
    if (asset) {
      const exponent = asset.denom_units[1].exponent;
      return {
        asset,
        balance,
        amount: new BigNumber(balance.amount).shiftedBy(-exponent).toString(),
      };
    }

    return { balance };
  });
}
