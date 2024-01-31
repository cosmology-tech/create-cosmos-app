import { Divider } from '@interchain-ui/react';
import NoSSR from 'react-no-ssr';
import { defaultChainName } from '@/config';
import { Layout, StakingSection, WalletSection } from '@/components';

export default function SingleChain() {
  return (
    <Layout>
      <WalletSection isMultiChain={false} />
      <Divider height="0.1px" mt="$12" />
      <NoSSR>
        <StakingSection chainName={defaultChainName} />
      </NoSSR>
    </Layout>
  );
}
