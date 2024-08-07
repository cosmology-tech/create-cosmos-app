import { ReactNoSSR } from '@interchain-ui/react-no-ssr';
import { defaultChainName } from '@/config';
import { AssetListSection, Layout, WalletSection } from '@/components';

export default function SingleChain() {
  return (
    <Layout>
      <WalletSection isMultiChain={false} />
      <ReactNoSSR>
        <AssetListSection chainName={defaultChainName} />
      </ReactNoSSR>
    </Layout>
  );
}
