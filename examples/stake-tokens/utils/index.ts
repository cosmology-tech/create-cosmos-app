import { getCoin } from '../config';
import { ChainInfo, ImageSource } from '../components/types';
import BigNumber from 'bignumber.js';
import type { Validator } from 'interchain/types/codegen/cosmos/staking/v1beta1/staking';

export const exponentiate = (num: number | string, exp: number) => {
  return new BigNumber(num)
    .multipliedBy(new BigNumber(10).exponentiatedBy(exp))
    .toNumber();
};

export const getExponent = (chainName: string) => {
  return getCoin(chainName).denom_units.find(
    (unit) => unit.denom === getCoin(chainName).display
  )?.exponent as number;
};

export const splitIntoChunks = (arr: any[], chunkSize: number) => {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
};

export const convertChainName = (chainName: string) => {
  if (chainName.endsWith('testnet')) {
    return chainName.replace('testnet', '-testnet');
  }

  switch (chainName) {
    case 'cosmoshub':
      return 'cosmos';
    case 'assetmantle':
      return 'asset-mantle';
    case 'cryptoorgchain':
      return 'crypto-org';
    case 'dig':
      return 'dig-chain';
    case 'gravitybridge':
      return 'gravity-bridge';
    case 'kichain':
      return 'ki-chain';
    case 'oraichain':
      return 'orai-chain';
    case 'terra':
      return 'terra-classic';
    default:
      return chainName;
  }
};

export const isUrlValid = async (url: string) => {
  const res = await fetch(url, { method: 'HEAD' });
  const contentType = res?.headers?.get('Content-Type') || '';
  return contentType.startsWith('image');
};

export const getCosmostationUrl = (
  chainName: string,
  validatorAddr: string
) => {
  const cosmostationChainName = convertChainName(chainName);
  return `https://raw.githubusercontent.com/cosmostation/chainlist/main/chain/${cosmostationChainName}/moniker/${validatorAddr}.png`;
};

export const addImageSource = async (
  validator: Validator,
  chainName: string
): Promise<Validator & ImageSource> => {
  const url = getCosmostationUrl(chainName, validator.operatorAddress);
  const isValid = await isUrlValid(url);
  return { ...validator, imageSource: isValid ? 'cosmostation' : 'keybase' };
};

export const getKeybaseUrl = (identity: string) => {
  return `https://keybase.io/_/api/1.0/user/lookup.json?key_suffix=${identity}&fields=pictures`;
};

export const getImgUrls = async (
  validators: Validator[],
  chainName: string
) => {
  const validatorsWithImgSource = await Promise.all(
    validators.map((validator) => addImageSource(validator, chainName))
  );

  // cosmostation urls
  const cosmostationUrls = validatorsWithImgSource
    .filter((validator) => validator.imageSource === 'cosmostation')
    .map(({ operatorAddress }) => {
      return {
        address: operatorAddress,
        url: getCosmostationUrl(chainName, operatorAddress),
      };
    });

  // keybase urls
  const keybaseIdentities = validatorsWithImgSource
    .filter((validator) => validator.imageSource === 'keybase')
    .map((validator) => ({
      address: validator.operatorAddress,
      identity: validator.description?.identity || '',
    }));

  const chunkedIdentities = splitIntoChunks(keybaseIdentities, 20);

  let responses: any[] = [];

  for (const chunk of chunkedIdentities) {
    const thumbnailRequests = chunk.map(({ address, identity }) => {
      if (!identity) return { address, url: '' };

      return fetch(getKeybaseUrl(identity))
        .then((response) => response.json())
        .then((res) => ({
          address,
          url: res.them?.[0]?.pictures?.primary.url || '',
        }));
    });
    responses = [...responses, await Promise.all(thumbnailRequests)];
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  const keybaseUrls = responses.flat();

  const allUrls = [...cosmostationUrls, ...keybaseUrls].reduce(
    (prev, cur) => ({ ...prev, [cur.address]: cur.url }),
    {}
  );

  return allUrls;
};

export const decodeUint8Arr = (uint8array: Uint8Array | undefined) => {
  if (!uint8array) return '';
  return new TextDecoder('utf-8').decode(uint8array);
};

export const shiftDigits = (num: string | number, places: number) => {
  return new BigNumber(num).shiftedBy(places).toString();
};

export const isObjEmpty = (obj: any) => {
  return Object.keys(obj).length === 0;
};

export const calcStakingApr = ({
  pool,
  commission,
  communityTax,
  annualProvisions,
}: ChainInfo & { commission: string }) => {
  const totalSupply = new BigNumber(pool?.bondedTokens || 0).plus(
    pool?.notBondedTokens || 0
  );

  const bondedTokensRatio = new BigNumber(pool?.bondedTokens || 0).div(
    totalSupply
  );

  const inflation = new BigNumber(annualProvisions || 0).div(totalSupply);

  const one = new BigNumber(1);

  return inflation
    .multipliedBy(one.minus(communityTax || 0))
    .div(bondedTokensRatio)
    .multipliedBy(one.minus(commission))
    .shiftedBy(2)
    .decimalPlaces(2, BigNumber.ROUND_DOWN)
    .toString();
};
