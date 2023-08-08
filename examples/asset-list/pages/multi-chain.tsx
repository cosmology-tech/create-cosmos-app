import { AssetList, Layout, WalletSection } from '@/components';
import { useState } from 'react';
import { ChainName } from '@cosmos-kit/core';

export default function MultiChain() {
  const [selectedChainName, setChainName] = useState<ChainName>();

  return (
    <Layout>
      <WalletSection
        isMultiChain={true}
        providedChainName={selectedChainName}
        setChainName={setChainName}
      />
      {selectedChainName && <AssetList selectedChainName={selectedChainName} />}
    </Layout>
  );
}
