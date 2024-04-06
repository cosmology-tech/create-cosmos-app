// TODO fix type issues
// @ts-nocheck

import { useState } from 'react';
import { ChainName } from 'cosmos-kit';
import { useChain } from '@cosmos-kit/react';
import { Box, Button, Tabs, Text } from '@interchain-ui/react';

import { Grants } from './Grants';
import { GrantModal } from './GrantModal';

export const AuthzSection = ({ chainName }: { chainName: ChainName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const { address } = useChain(chainName);

  if (!address) {
    return (
      <Text
        fontWeight="$semibold"
        fontSize="$lg"
        textAlign="center"
        color="$textSecondary"
        attributes={{ my: '$24' }}
      >
        Please connect your wallet to view and create grants
      </Text>
    );
  }

  return (
    <Box mb="$18" minHeight="500px" display="flex" flexDirection="column">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="$16"
      >
        <Tabs
          tabs={[
            {
              label: 'Grants to me',
              content: null,
            },
            {
              label: 'Grants by me',
              content: null,
            },
          ]}
          activeTab={activeTab}
          onActiveTabChange={(tabId) => setActiveTab(tabId)}
          attributes={{ width: '$min' }}
        />
        <Button intent="tertiary" onClick={() => setIsOpen(true)}>
          Create Grant
        </Button>
      </Box>

      <Grants
        chainName={chainName}
        role={activeTab === 0 ? 'grantee' : 'granter'}
      />

      <GrantModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        chainName={chainName}
      />
    </Box>
  );
};
