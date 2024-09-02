import { Asset, AssetList, Chain } from '@chain-registry/types';
import { toBech32, fromBech32 } from '@cosmjs/encoding';
import { Sha256 } from '@cosmjs/crypto';
import { DeliverTxResponse } from '@cosmjs/cosmwasm-stargate';
import { Coin, logs, parseCoins } from '@cosmjs/stargate';
import { CodeInfoResponse } from 'interchain-query/cosmwasm/wasm/v1/query';
import { AccessType } from 'interchain-query/cosmwasm/wasm/v1/types';
import BigNumber from 'bignumber.js';

import { codeStore } from '@/contexts';

export const validateContractAddress = (
  address: string,
  bech32Prefix: string,
) => {
  if (!bech32Prefix)
    return 'Cannot retrieve bech32 prefix of the current network.';

  if (!address.startsWith(bech32Prefix))
    return `Invalid prefix (expected "${bech32Prefix}")`;

  const bytes = Array.from(Array(32).keys());
  const exampleAddress = toBech32(bech32Prefix, new Uint8Array(bytes));

  if (address.length !== exampleAddress.length) return 'Invalid address length';

  try {
    fromBech32(address);
  } catch (e) {
    return (e as Error).message;
  }

  return null;
};

export const validateJson = (text: string) => {
  try {
    if (text.trim().length === 0)
      throw new SyntaxError(`Can't use empty string`);
    JSON.parse(text);
    return null;
  } catch (error) {
    return (error as SyntaxError).message;
  }
};

export const prettifyJson = (text: string) => {
  try {
    return JSON.stringify(JSON.parse(text), null, 2);
  } catch {
    return text;
  }
};

export const countJsonLines = (text: string) => text.split(/\n/).length;

export const getExplorerLink = (chain: Chain, txHash: string) => {
  const txPageLink = chain.explorers?.[0].tx_page ?? '';
  return `${txPageLink.replace('${txHash}', txHash)}`;
};

export const getExponentFromAsset = (asset: Asset) => {
  return asset.denom_units.find((unit) => unit.denom === asset.display)
    ?.exponent;
};

export const bytesToKb = (bytes: number) => {
  return BigNumber(bytes)
    .dividedBy(1000)
    .toFixed(bytes >= 1000 ? 0 : 2);
};

export const convWasmFileToCodeHash = async (wasmFile: File | null) => {
  if (wasmFile) {
    const wasmFileBytes = new Sha256(
      new Uint8Array(await wasmFile.arrayBuffer()),
    ).digest();
    return Buffer.from(wasmFileBytes).toString('hex');
  }
  return '';
};

export const findAttr = (
  events: logs.Log['events'],
  eventType: string,
  attrKey: string,
) => {
  const mimicLog: logs.Log = {
    msg_index: 0,
    log: '',
    events,
  };

  try {
    return logs.findAttribute([mimicLog], eventType, attrKey).value;
  } catch {
    return undefined;
  }
};

export type PrettyTxResult = {
  codeId: string;
  codeHash: string;
  txHash: string;
  txFee: string;
  codeDisplayName: string;
};

export const prettyStoreCodeTxResult = (
  txResponse: DeliverTxResponse,
  codeName: string,
  wasmFileName: string,
): PrettyTxResult => {
  const events = txResponse.events;
  const codeId = findAttr(events, 'store_code', 'code_id') ?? '0';
  const codeHash = findAttr(events, 'store_code', 'code_checksum') ?? '';
  const txHash = txResponse.transactionHash;
  const txFee =
    txResponse.events.find((e) => e.type === 'tx')?.attributes[0].value ?? '';
  const codeDisplayName = codeName || `${wasmFileName}(${codeId})`;

  return {
    codeId,
    codeHash,
    txHash,
    txFee,
    codeDisplayName,
  };
};

export const formatTxFee = (txFee: string, assets: AssetList) => {
  let coins: Coin[] = [];

  try {
    coins = parseCoins(txFee);
  } catch (e) {
    console.error(e);
  }

  if (coins.length === 0) return '--';

  const denom = coins[0].denom;
  const amount = coins[0].amount;
  const asset = assets.assets.find((asset) => asset.base === denom);
  if (!asset) return '--';

  const exponent = getExponentFromAsset(asset);
  if (!exponent) return '--';

  const displayAmount = BigNumber(amount).shiftedBy(-exponent).toFixed();
  return `${displayAmount} ${asset.symbol}`;
};

export const splitCamelCase = (text: string): string => {
  return text.replace(/([A-Z])/g, ' $1').trim();
};

export const resolvePermission = (
  address: string,
  permission: AccessType,
  permissionAddresses: string[] = [],
): boolean =>
  permission === AccessType.ACCESS_TYPE_EVERYBODY ||
  (address ? permissionAddresses.includes(address) : false);

export interface CodeInfo {
  id: number;
  name: string;
  uploader: string;
  permission: AccessType;
  addresses: string[];
}

export type PermissionValue = 'all' | 'without-proposal' | 'with-proposal';

export const filterCodeByPermission = (
  codeInfo: CodeInfo,
  address: string,
  filterValue: PermissionValue,
) => {
  const { permission, addresses } = codeInfo;

  const isAllowed = resolvePermission(address, permission, addresses);

  switch (filterValue) {
    case 'with-proposal':
      return !isAllowed;
    case 'without-proposal':
      return isAllowed;
    case 'all':
    default:
      return true;
  }
};

export const filterCodeBySearch = (codeInfo: CodeInfo, keyword: string) => {
  const computedKeyword = keyword.trim();
  if (!computedKeyword.length) return true;

  return (
    codeInfo.id.toString().startsWith(computedKeyword) ||
    codeInfo.name.toLowerCase().includes(computedKeyword.toLowerCase())
  );
};

export const prettyCodeInfo = (rawCodeInfo: CodeInfoResponse): CodeInfo => {
  const { codeId, creator, instantiatePermission } = rawCodeInfo;

  return {
    id: Number(codeId),
    name: codeStore.getCodeName(Number(codeId)) ?? '',
    permission: instantiatePermission?.permission!,
    uploader: creator,
    addresses: instantiatePermission?.addresses || [],
  };
};

export const isPositiveInt = (input: string): boolean => {
  if (input.startsWith('0x')) return false;
  const numberValue = Number(input);
  return Number.isInteger(numberValue) && numberValue > 0;
};

export const isValidCodeId = (input: string): boolean =>
  input.length <= 7 && isPositiveInt(input);
