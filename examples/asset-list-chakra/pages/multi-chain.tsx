import { useState } from 'react';
import NoSSR from 'react-no-ssr';
import { ChainName } from '@cosmos-kit/core';
import { AssetListSection, Layout, WalletSection } from '@/components';

export default function MultiChain() {
  const [chainName, setChainName] = useState<ChainName>();

  return (
    <Layout>
      <WalletSection
        isMultiChain={true}
        providedChainName={chainName}
        setChainName={setChainName}
      />
      <NoSSR>{chainName && <AssetListSection chainName={chainName} />}</NoSSR>
    </Layout>
  );
}
