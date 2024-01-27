import { useState } from 'react';
import { Divider } from '@interchain-ui/react';
import { ChainName } from 'cosmos-kit';

import { Layout, WalletSection, AuthzSection } from '@/components';

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
      {selectedChain && <AuthzSection chainName={selectedChain} />}
    </Layout>
  );
}
