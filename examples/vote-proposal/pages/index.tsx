import { useState } from 'react';
import { ReactNoSSR } from '@interchain-ui/react-no-ssr';
import { CHAIN_NAME, Layout, Voting, Wallet } from '@/components';

export default function Home() {
  const [chainName, setChainName] = useState(CHAIN_NAME);

  function onChainChange(chainName?: string) {
    setChainName(chainName!);
  }

  return (
    <Layout>
      <ReactNoSSR>
        <Wallet chainName={chainName} onChainChange={onChainChange} />
        <Voting chainName={chainName} />
      </ReactNoSSR>
    </Layout>
  );
}
