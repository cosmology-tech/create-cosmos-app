import { useState } from 'react';
import { Divider } from '@chakra-ui/react';
import { ChainName } from '@cosmos-kit/core';
import NoSSR from 'react-no-ssr';
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
      <Divider />
      <NoSSR>
        {selectedChainName && <StakingSection chainName={selectedChainName} />}
      </NoSSR>
    </Layout>
  );
}
