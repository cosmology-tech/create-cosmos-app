import { Box, Button, Tabs } from '@interchain-ui/react';
import { ChainName } from 'cosmos-kit';
import { useState } from 'react';

import { GrantModal } from './GrantModal';
import { GrantsByMe } from './GrantsByMe';
import { GrantsToMe } from './GrantsToMe';

export const AuthzSection = ({ chainName }: { chainName: ChainName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box mb="$18">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="$16"
      >
        <Tabs
          tabs={[
            {
              label: 'Grants to Me',
              content: null,
            },
            {
              label: 'Grants by Me',
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

      {activeTab === 0 && <GrantsToMe grants={[]} />}
      {activeTab === 1 && <GrantsByMe grants={[{}]} />}

      <GrantModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        chainName={chainName}
      />
    </Box>
  );
};
