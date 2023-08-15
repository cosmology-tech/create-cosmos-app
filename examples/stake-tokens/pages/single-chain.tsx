import { Divider } from '@chakra-ui/react';
import { defaultChainName } from '../config';
import { useState, useEffect } from 'react';
import { Layout, StakingSection, WalletSection } from '@/components';

export default function SingleChain() {
  const [content, setContent] = useState<JSX.Element>();

  useEffect(() => {
    setContent(<StakingSection chainName={defaultChainName} />);
  }, []);

  return (
    <Layout>
      <WalletSection isMultiChain={false} />
      <Divider />
      {content}
    </Layout>
  );
}
