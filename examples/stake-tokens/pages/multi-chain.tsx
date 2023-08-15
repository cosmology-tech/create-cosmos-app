import { Divider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ChainName } from '@cosmos-kit/core';
import { Layout, StakingSection, WalletSection } from '@/components';

export default function MultiChain() {
  const [selectedChainName, setChainName] = useState<ChainName>();
  const [content, setContent] = useState<JSX.Element>();

  useEffect(() => {
    if (!selectedChainName) return;
    setContent(<StakingSection chainName={selectedChainName} />);
  }, [selectedChainName]);

  return (
    <Layout>
      <WalletSection
        isMultiChain={true}
        providedChainName={selectedChainName}
        setChainName={setChainName}
      />
      <Divider />
      {content}
    </Layout>
  );
}
