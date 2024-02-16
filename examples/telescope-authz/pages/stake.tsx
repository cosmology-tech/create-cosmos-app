import { Box, Divider, Icon, Text } from '@interchain-ui/react';
import { useAuthzContext } from '@/context';
import { Layout, StakingSection, Wallet } from '@/components';

export default function SingleChain() {
  const { chainName, permission } = useAuthzContext();

  return (
    <Layout>
      <Wallet chainName={chainName} />
      <Divider height="0.1px" mt="$12" />
      <Box
        width="$fit"
        height="$14"
        backgroundColor="$cardBg"
        borderRadius="$md"
        display="flex"
        alignItems="center"
        gap="$4"
        px="$6"
        my="$16"
        mx="auto"
      >
        <Icon name="errorWarningLine" size="$xl" />
        <Text>You are now logged in as</Text>
        <Text fontWeight="$semibold">{permission?.granter}</Text>
      </Box>
      {chainName && <StakingSection chainName={chainName} />}
    </Layout>
  );
}
