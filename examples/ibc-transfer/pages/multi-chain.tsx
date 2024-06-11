import { useState } from 'react';
import { ReactNoSSR } from '@interchain-ui/react-no-ssr';
import { ChainName } from 'cosmos-kit';
import { AssetListSection, Layout, WalletSection } from '@/components';

export default function MultiChain() {
  const [chainName, setChainName] = useState<ChainName>();

  return (
    <Layout>
      <WalletSection
        isMultiChain
        providedChainName={chainName}
        setChainName={setChainName}
      />
      <ReactNoSSR>
        {chainName && <AssetListSection chainName={chainName} />}
      </ReactNoSSR>
    </Layout>
  );
}
