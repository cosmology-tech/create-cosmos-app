import { AssetListSection, Layout, WalletSection } from '@/components';
import { useEffect, useState } from 'react';
import { ChainName } from '@cosmos-kit/core';

export default function MultiChain() {
  const [chainName, setChainName] = useState<ChainName>();
  const [content, setContent] = useState<JSX.Element>();

  useEffect(() => {
    if (!chainName) return;
    setContent(<AssetListSection chainName={chainName} />);
  }, [chainName]);

  return (
    <Layout>
      <WalletSection
        isMultiChain={true}
        providedChainName={chainName}
        setChainName={setChainName}
      />
      {content}
    </Layout>
  );
}
