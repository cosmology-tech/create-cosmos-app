import { ReactNoSSR } from '@interchain-ui/react-no-ssr';
import { AssetListSection } from '@/components';
import { useChainStore } from '@/contexts';

export default function AssetListPage() {
  const { selectedChain } = useChainStore();

  return (
    <ReactNoSSR>
      <AssetListSection chainName={selectedChain} />
    </ReactNoSSR>
  );
}
