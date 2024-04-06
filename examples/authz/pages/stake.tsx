import { Divider } from '@interchain-ui/react';
import { useAuthzContext } from '@/context';
import { withServerSideRedirect } from '@/utils';
import { Layout, LoginInfoBanner, StakingSection, Wallet } from '@/components';

export const getServerSideProps = withServerSideRedirect({ to: '/' });

export default function Stake() {
  const { chainName, permission } = useAuthzContext();

  return (
    // @ts-ignore
    <Layout>
      {/* @ts-ignore */}
      <Wallet chainName={chainName} />
      <Divider height="0.1px" mt="$12" />
      {chainName && (
        <>
          {permission && (
            // @ts-ignore
            <LoginInfoBanner
            chainName={chainName}
            loginAddress={permission.granter}
            />
          )}
           {/* @ts-ignore */}
          <StakingSection chainName={chainName} />
        </>
      )}
    </Layout>
  );
}
