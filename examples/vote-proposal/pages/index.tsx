import { useState } from 'react';
import { ChainName } from '@cosmos-kit/core';
import NoSSR from 'react-no-ssr';
import { VotingSection, Layout, WalletSection } from '@/components';

export default function Home() {
  const [chainName, setChainName] = useState<ChainName>();

  return (
    <Layout>
      <WalletSection chainName={chainName} setChainName={setChainName} />
      <NoSSR>{chainName && <VotingSection chainName={chainName} />}</NoSSR>
    </Layout>
  );
}
