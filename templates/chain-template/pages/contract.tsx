import { useState } from 'react';
import { Box, Tabs } from '@interchain-ui/react';
import { ExecuteTab, InstantiateTab, QueryTab, UploadTab } from '@/components';

export default function Contract() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Tabs
        tabs={[
          {
            label: 'Upload',
            content: undefined,
          },
          {
            label: 'Instantiate',
            content: undefined,
          },
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
        attributes={{ width: '800px' }}
      />
      <Box mt="40px">
        <UploadTab show={activeTab === 0} />
        <InstantiateTab show={activeTab === 1} />
        <QueryTab show={activeTab === 2} />
        <ExecuteTab show={activeTab === 3} />
      </Box>
    </>
  );
}
