import NoSSR from 'react-no-ssr';
import { defaultChainName } from '@/config';
import { AssetListSection, Layout, WalletSection } from '@/components';

export default function SingleChain() {
  return (
    <Layout>
      <WalletSection isMultiChain={false} />
      {/* TODO fix type error */}
      {/* Type error: This JSX tag's 'children' prop expects a single child of type 'ReactNode', but multiple children were provided. */}
      {/* @ts-ignore */}
      <NoSSR>
        <AssetListSection chainName={defaultChainName} />
      </NoSSR>
    </Layout>
  );
}
