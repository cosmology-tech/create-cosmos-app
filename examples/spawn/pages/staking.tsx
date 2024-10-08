import { ReactNoSSR } from '@interchain-ui/react-no-ssr';
import { useChainStore } from '@/contexts';
import { StakingSection } from '@/components';

export default function StakingPage() {
  const { selectedChain } = useChainStore();

  return (
    <ReactNoSSR>
      <StakingSection chainName={selectedChain} />
    </ReactNoSSR>
  );
}
