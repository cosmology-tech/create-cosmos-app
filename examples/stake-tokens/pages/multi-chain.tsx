import { useState } from 'react';
import { Divider } from '@interchain-ui/react';
import { ChainName } from 'cosmos-kit';
import { ReactNoSSR } from '@interchain-ui/react-no-ssr';
import { Layout, StakingSection, WalletSection } from '@/components';

export default function MultiChain() {
  const [selectedChainName, setChainName] = useState<ChainName>();

  return (
    <Layout>
      <WalletSection
        isMultiChain={true}
        providedChainName={selectedChainName}
        setChainName={setChainName}
      />
      <Divider height="0.1px" mt="$12" />
      <ReactNoSSR>
        {selectedChainName && <StakingSection chainName={selectedChainName} />}
      </ReactNoSSR>
    </Layout>
  );
}
