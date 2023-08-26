import NoSSR from 'react-no-ssr';
import { defaultChainName } from '@/config';
import { AssetListSection, Layout, WalletSection } from '@/components';

export default function SingleChain() {
  return (
    <Layout>
      <WalletSection isMultiChain={false} />
      <NoSSR>
        <AssetListSection chainName={defaultChainName} />
      </NoSSR>
    </Layout>
  );
}
