import { ReactNoSSR } from '@interchain-ui/react-no-ssr';
import { Voting } from '@/components';
import { useChainStore } from '@/contexts';

export default function GovernancePage() {
  const { selectedChain } = useChainStore();

  return (
    <ReactNoSSR>
      <Voting chainName={selectedChain} />
    </ReactNoSSR>
  );
}
