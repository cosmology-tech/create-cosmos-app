// TODO fix type issues
// @ts-nocheck

import { useState } from 'react';
import { Divider } from '@interchain-ui/react';
import { ChainName } from 'cosmos-kit';

import { useAuthzContext } from '@/context';
import { Layout, Wallet, AuthzSection } from '@/components';

export default function Home() {
  const [selectedChain, setSelectedChain] = useState<ChainName>();
  const { setChainName } = useAuthzContext();

  return (
    <Layout>
      <Wallet
        chainName={selectedChain}
        isMultiChain
        onChainChange={(chainName) => {
          setSelectedChain(chainName);
          setChainName(chainName);
        }}
      />
      <Divider height="0.1px" mt="$12" mb="$17" />
      {selectedChain && <AuthzSection chainName={selectedChain} />}
    </Layout>
  );
}
