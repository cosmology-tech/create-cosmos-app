import { useState } from 'react';
import { Box, Tabs } from '@interchain-ui/react';
import { ExecuteTab, QueryTab } from '@/components';

export default function Contract() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Tabs
        tabs={[
          {
            label: 'Query',
            content: undefined,
          },
          {
            label: 'Execute',
            content: undefined,
          },
        ]}
        activeTab={activeTab}
        onActiveTabChange={(tabId) => setActiveTab(tabId)}
        attributes={{ width: '$min' }}
      />
      <Box mt="40px">
        <QueryTab show={activeTab === 0} />
        <ExecuteTab show={activeTab === 1} />
      </Box>
    </>
  );
}
