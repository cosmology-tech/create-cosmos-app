import { Divider } from '@interchain-ui/react';
import { useAuthzContext } from '@/context';
import {
  Layout,
  Wallet,
  LoginInfoBanner,
  ClaimRewardsSection,
} from '@/components';

export default function SingleChain() {
  const { chainName, permission } = useAuthzContext();

  return (
    <Layout>
      <Wallet chainName={chainName} />
      <Divider height="0.1px" mt="$12" />
      {chainName && (
        <>
          {permission && (
            <LoginInfoBanner
              chainName={chainName}
              loginAddress={permission.granter}
            />
          )}
          <ClaimRewardsSection chainName={chainName} />
        </>
      )}
    </Layout>
  );
}
