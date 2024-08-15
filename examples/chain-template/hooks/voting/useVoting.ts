import { useState } from 'react';
import { cosmos } from 'interchain-query';
import { toast } from '@interchain-ui/react';
import { useChain } from '@cosmos-kit/react';
import { coins, StdFee } from '@cosmjs/stargate';
import { Proposal } from 'interchain-query/cosmos/gov/v1/gov';
import { getCoin } from '@/utils';
import { useVotingTx } from './useVotingTx';

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
  const { tx } = useVotingTx(chainName);
  const { address } = useChain(chainName);
  const [isVoting, setIsVoting] = useState(false);

  const coin = getCoin(chainName);

  async function onVote({
    option,
    success = () => {},
    error = () => {},
  }: onVoteOptions) {
    if (!address || !option) return;

    const msg = MessageComposer.fromPartial.vote({
      option,
      voter: address,
      proposalId: proposal.id,
    });

    const fee: StdFee = {
      amount: coins('1000', coin.base),
      gas: '100000',
    };

    try {
      setIsVoting(true);
      const res = await tx([msg], { fee });
      if (res.error) {
        error();
        console.error(res.error);
        toast.error(res.errorMsg);
      } else {
        success();
        toast.success('Vote successful');
      }
    } catch (e) {
      error();
      console.error(e);
      toast.error('Vote failed');
    } finally {
      setIsVoting(false);
    }
  }

  return { isVoting, onVote };
}
