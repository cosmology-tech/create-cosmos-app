import { useState } from 'react';
import { ChainName } from 'cosmos-kit';
import NoSSR from 'react-no-ssr';
import { VotingSection, Layout, WalletSection } from '@/components';

export default function Home() {
  const [chainName, setChainName] = useState<ChainName>();

  return (
    <Layout>
      <WalletSection chainName={chainName} setChainName={setChainName} />
      {/* TODO fix type error */}
      {/* Type error: This JSX tag's 'children' prop expects a single child of type 'ReactNode', but multiple children were provided. */}
      {/* @ts-ignore */}
      <NoSSR>{chainName && <VotingSection chainName={chainName} />}</NoSSR>
    </Layout>
  );
}
