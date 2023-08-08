import { defaultChainName as defaultChainName } from '@/config';
import { AssetList, Layout } from '@/components';
import { WalletSection } from '@/components/wallet';

export default function SingleChain() {
  return (
    <Layout>
      <WalletSection isMultiChain={false} />
      <AssetList selectedChainName={defaultChainName} />
    </Layout>
  );
}
