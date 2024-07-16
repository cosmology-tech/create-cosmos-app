import { Divider } from '@interchain-ui/react';
import { ReactNoSSR } from '@interchain-ui/react-no-ssr';
import { defaultChainName } from '@/config';
import { Layout, StakingSection, WalletSection } from '@/components';

export default function SingleChain() {
  return (
    <Layout>
      <WalletSection isMultiChain={false} />
      <Divider height="0.1px" mt="$12" />
      <ReactNoSSR>
        <StakingSection chainName={defaultChainName} />
      </ReactNoSSR>
    </Layout>
  );
}
