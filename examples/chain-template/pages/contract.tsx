import { useEffect, useState } from 'react';
import { Box, Tabs } from '@interchain-ui/react';

import { ExecuteTab, MyContractsTab, QueryTab } from '@/components';
import { splitCamelCase } from '@/utils';
import styles from '@/styles/comp.module.css';

export enum TabLabel {
  MyContracts,
  Query,
  Execute,
}

export default function Contract() {
  const [activeTab, setActiveTab] = useState(TabLabel.MyContracts);
  const [initQueryAddress, setInitQueryAddress] = useState('');
  const [initExecuteAddress, setInitExecuteAddress] = useState('');

  useEffect(() => {
    if (activeTab !== TabLabel.Query) setInitQueryAddress('');
    if (activeTab !== TabLabel.Execute) setInitExecuteAddress('');
  }, [activeTab]);

  const switchTabWithAddress = (address: string, tabId: TabLabel) => {
    setActiveTab(tabId);
    if (tabId === TabLabel.Query) setInitQueryAddress(address);
    if (tabId === TabLabel.Execute) setInitExecuteAddress(address);
  };

  return (
    <>
      <Tabs
        tabs={Object.values(TabLabel)
          .filter((v) => typeof v === 'string')
          .map((label) => ({
            label: splitCamelCase(label as string),
            content: undefined,
          }))}
        activeTab={activeTab}
        onActiveTabChange={(tabId) => setActiveTab(tabId)}
        className={styles.tabs}
      />
      <Box mt="40px">
        <MyContractsTab
          show={activeTab === TabLabel.MyContracts}
          switchTab={switchTabWithAddress}
        />
        <QueryTab
          show={activeTab === TabLabel.Query}
          initialAddress={initQueryAddress}
        />
        <ExecuteTab
          show={activeTab === TabLabel.Execute}
          initialAddress={initExecuteAddress}
        />
      </Box>
    </>
  );
}
