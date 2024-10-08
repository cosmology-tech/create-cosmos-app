import { useState, useCallback, useEffect, useRef } from 'react';
import { Box, Tabs } from '@interchain-ui/react';
import { useRouter } from 'next/router';

import { ExecuteTab, MyContractsTab, QueryTab } from '@/components';
import { splitCamelCase, toKebabCase, toPascalCase } from '@/utils';
import styles from '@/styles/comp.module.css';

export enum TabLabel {
  MyContracts,
  Query,
  Execute,
}

export default function Contract() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabLabel>(TabLabel.MyContracts);
  const [queryAddress, setQueryAddress] = useState('');
  const [executeAddress, setExecuteAddress] = useState('');
  const initialTab = useRef(false);

  useEffect(() => {
    if (!initialTab.current && router.isReady) {
      const { tab, address } = router.query;

      if (typeof tab === 'string') {
        const pascalCaseTab = toPascalCase(tab);
        const newTab = TabLabel[pascalCaseTab as keyof typeof TabLabel];
        if (newTab !== undefined) {
          setActiveTab(newTab);
        }

        if (typeof address === 'string') {
          if (newTab === TabLabel.Query) setQueryAddress(address);
          if (newTab === TabLabel.Execute) setExecuteAddress(address);
        }
      }

      initialTab.current = true;
    }
  }, [router.isReady, router.query]);

  const updateUrl = useCallback(
    (tabId: TabLabel, address?: string) => {
      const tabName = toKebabCase(TabLabel[tabId]);
      const query: { tab: string; address?: string } = { tab: tabName };
      if (address) {
        query.address = address;
      } else {
        delete query.address;
      }
      router.push({ pathname: '/contract', query }, undefined, {
        shallow: true,
      });
    },
    [router],
  );

  const handleTabChange = useCallback(
    (tabId: TabLabel) => {
      setActiveTab(tabId);
      updateUrl(
        tabId,
        tabId === TabLabel.Query
          ? queryAddress
          : tabId === TabLabel.Execute
            ? executeAddress
            : undefined,
      );
    },
    [updateUrl, queryAddress, executeAddress],
  );

  const switchTabWithAddress = useCallback(
    (address: string, tabId: TabLabel) => {
      if (tabId === TabLabel.Query) setQueryAddress(address);
      if (tabId === TabLabel.Execute) setExecuteAddress(address);
      setActiveTab(tabId);
      updateUrl(tabId, address);
    },
    [updateUrl],
  );

  const handleAddressInput = useCallback(
    (address: string) => {
      if (activeTab === TabLabel.Query) setQueryAddress(address);
      if (activeTab === TabLabel.Execute) setExecuteAddress(address);
      updateUrl(activeTab, address);
    },
    [activeTab, updateUrl],
  );

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
        onActiveTabChange={handleTabChange}
        className={styles.tabs}
      />
      <Box mt="40px">
        <MyContractsTab
          show={activeTab === TabLabel.MyContracts}
          switchTab={switchTabWithAddress}
        />
        <QueryTab
          show={activeTab === TabLabel.Query}
          addressValue={queryAddress}
          onAddressInput={handleAddressInput}
        />
        <ExecuteTab
          show={activeTab === TabLabel.Execute}
          addressValue={executeAddress}
          onAddressInput={handleAddressInput}
        />
      </Box>
    </>
  );
}
