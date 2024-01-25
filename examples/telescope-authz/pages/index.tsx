import { useState } from 'react';
import { Divider } from '@interchain-ui/react';
import { ChainName } from 'cosmos-kit';
import NoSSR from 'react-no-ssr';

import { Layout, WalletSection } from '@/components';

export default function Home() {
  const [selectedChain, setSelectedChain] = useState<ChainName>();

  return (
    <Layout>
      <WalletSection
        isMultiChain={true}
        providedChainName={selectedChain}
        setChainName={setSelectedChain}
      />
      <Divider height="0.1px" mt="$12" mb="$17" />
      <NoSSR></NoSSR>
    </Layout>
  );
}
