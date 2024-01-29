import BigNumber from 'bignumber.js';
import {
  Proposal,
  ProposalStatus,
} from 'interchain-query/cosmos/gov/v1beta1/gov';
import dayjs from 'dayjs';
import { assets } from 'chain-registry';
import { AssetList, Asset } from '@chain-registry/types';

export const parseProposals = (proposals: Proposal[]) => {
  const sortedProposal = proposals.sort(
    (a, b) => Number(b.proposalId) - Number(a.proposalId)
  );
  const votingProposals = sortedProposal.filter(
    ({ status }) => status === ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD
  );
  const nonVotingProposals = sortedProposal.filter(
    ({ status }) => status !== ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD
  );

  return [...votingProposals, ...nonVotingProposals];
};

export const decodeUint8Arr = (uint8array: Uint8Array | undefined) => {
  if (!uint8array) return '';
  return new TextDecoder('utf-8').decode(uint8array);
};

export const parseQuorum = (quorum: Uint8Array | undefined) => {
  const quorumStr = decodeUint8Arr(quorum);
  return new BigNumber(quorumStr).shiftedBy(-quorumStr.length).toNumber();
};

export const getChainAssets = (chainName: string) => {
  return assets.find((chain) => chain.chain_name === chainName) as AssetList;
};

export const getCoin = (chainName: string) => {
  const chainAssets = getChainAssets(chainName);
  return chainAssets.assets[0] as Asset;
};

export const getExponent = (chainName: string) => {
  return getCoin(chainName).denom_units.find(
    (unit) => unit.denom === getCoin(chainName).display
  )?.exponent as number;
};

export const exponentiate = (num: number | string | undefined, exp: number) => {
  if (!num) return 0;
  return new BigNumber(num)
    .multipliedBy(new BigNumber(10).exponentiatedBy(exp))
    .toNumber();
};

export const formatDate = (date: Date | undefined) => {
  if (!date) return 'not specified';
  return dayjs(date).format('YYYY-MM-DD hh:mm:ss');
};

export const getTitleFromDecoded = (decodedStr: string) => {
  return decodedStr.slice(0, 250).match(/[A-Z][A-Za-z].*(?=\u0012)/)?.[0];
};

export const getPercentage = (option: string | undefined, total: number) => {
  if (!total) return '0.00%';
  const voted = option ? Number(option) : 0;
  return ((voted / total) * 100).toFixed(2) + '%';
};
