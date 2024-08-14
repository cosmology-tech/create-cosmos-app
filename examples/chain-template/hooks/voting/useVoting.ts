import { useState } from 'react';
import { cosmos } from 'interchain-query';
import { useChain } from '@cosmos-kit/react';
import { coins, StdFee } from '@cosmjs/stargate';
import { Proposal } from 'interchain-query/cosmos/gov/v1beta1/gov';
import { useTx } from '@/hooks';
import { getCoin } from '@/utils';

const MessageComposer = cosmos.gov.v1beta1.MessageComposer;

export type useVotingOptions = {
  chainName: string;
  proposal: Proposal;
};

export type onVoteOptions = {
  option: number;
  success?: () => void;
  error?: () => void;
};

export function useVoting({ chainName, proposal }: useVotingOptions) {
  const { tx } = useTx(chainName);
  const { address } = useChain(chainName);
  const [isVoting, setIsVoting] = useState(false);

  const coin = getCoin(chainName);

  async function onVote({
    option,
    success = () => {},
    error = () => {},
  }: onVoteOptions) {
    if (!address || !option) return;

    setIsVoting(true);

    const msg = MessageComposer.fromPartial.vote({
      option,
      voter: address,
      proposalId: proposal.proposalId,
    });

    const fee: StdFee = {
      amount: coins('1000', coin.base),
      gas: '100000',
    };

    await tx([msg], {
      fee,
      onSuccess: success,
    });

    setIsVoting(false);
  }

  return { isVoting, onVote };
}
