import { ReactNoSSR } from '@interchain-ui/react-no-ssr';
import { Staking } from '@/components';
import { useChainStore } from '@/contexts';

export default function StakingPage() {
  const { selectedChain } = useChainStore();

  return (
    <ReactNoSSR>
      <Staking chainName={selectedChain} />
    </ReactNoSSR>
  );
}
