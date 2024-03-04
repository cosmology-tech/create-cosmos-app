import { chains } from "chain-registry";
import { Asset, Chain } from "@chain-registry/types";

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

export function getChainLogo(name: string) {
  const chain = chains.find((chain) => chain.chain_name === name);
  return chain ? getLogo(chain) : null;
}
