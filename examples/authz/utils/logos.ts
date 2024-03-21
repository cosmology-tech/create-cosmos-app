import { ParsedValidator as Validator } from './staking';

type ImageSource = {
  imageSource: 'cosmostation' | 'keybase';
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

export const getKeybaseUrl = (identity: string) => {
  return `https://keybase.io/_/api/1.0/user/lookup.json?key_suffix=${identity}&fields=pictures`;
};

export const addLogoUrlSource = async (
  validator: Validator,
  chainName: string
): Promise<Validator & ImageSource> => {
  const url = getCosmostationUrl(chainName, validator.address);
  const isValid = await isUrlValid(url);
  return { ...validator, imageSource: isValid ? 'cosmostation' : 'keybase' };
};

export const getLogoUrls = async (
  validators: Validator[],
  chainName: string
) => {
  const validatorsWithImgSource = await Promise.all(
    validators.map((validator) => addLogoUrlSource(validator, chainName))
  );

  // cosmostation urls
  const cosmostationUrls = validatorsWithImgSource
    .filter((validator) => validator.imageSource === 'cosmostation')
    .map(({ address }) => {
      return {
        address,
        url: getCosmostationUrl(chainName, address),
      };
    });

  // keybase urls
  const keybaseIdentities = validatorsWithImgSource
    .filter((validator) => validator.imageSource === 'keybase')
    .map(({ address, identity }) => ({
      address,
      identity,
    }));

  const chunkedIdentities = splitIntoChunks(keybaseIdentities, 20);

  let responses: any[] = [];

  for (const chunk of chunkedIdentities) {
    const logoUrlRequests = chunk.map(({ address, identity }) => {
      if (!identity) return { address, url: '' };

      return fetch(getKeybaseUrl(identity))
        .then((response) => response.json())
        .then((res) => ({
          address,
          url: res.them?.[0]?.pictures?.primary.url || '',
        }));
    });
    responses = [...responses, await Promise.all(logoUrlRequests)];
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  const keybaseUrls = responses.flat();

  const allUrls = [...cosmostationUrls, ...keybaseUrls].reduce(
    (prev, cur) => ({ ...prev, [cur.address]: cur.url }),
    {}
  );

  return allUrls;
};
