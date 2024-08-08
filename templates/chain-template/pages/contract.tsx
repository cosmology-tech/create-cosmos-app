import { useEffect, useState } from 'react';
import { Box, Tabs } from '@interchain-ui/react';

import {
  CodeInfo,
  ExecuteTab,
  InstantiateTab,
  MyContractsTab,
  QueryTab,
  UploadTab,
} from '@/components';
import { splitCamelCase } from '@/utils';

export enum TabLabel {
  MyContracts,
  Upload,
  Instantiate,
  Query,
  Execute,
}

export default function Contract() {
  const [activeTab, setActiveTab] = useState(TabLabel.MyContracts);
  const [codeInfo, setCodeInfo] = useState<CodeInfo>();
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
        attributes={{ width: '860px' }}
      />
      <Box mt="40px">
        <MyContractsTab
          show={activeTab === TabLabel.MyContracts}
          switchTab={switchTabWithAddress}
        />
        <UploadTab
          show={activeTab === TabLabel.Upload}
          switchTab={(codeInfo) => {
            setActiveTab(TabLabel.Instantiate);
            setCodeInfo(codeInfo);
          }}
        />
        <InstantiateTab
          show={activeTab === TabLabel.Instantiate}
          initCodeInfo={codeInfo}
          clearInitCodeInfo={() => setCodeInfo(undefined)}
          switchTab={switchTabWithAddress}
        />
        <QueryTab
          show={activeTab === TabLabel.Query}
          initialAddress={initQueryAddress}
          clearInitAddress={() => {
            if (initQueryAddress) setInitQueryAddress('');
          }}
        />
        <ExecuteTab
          show={activeTab === TabLabel.Execute}
          initialAddress={initExecuteAddress}
          clearInitAddress={() => {
            if (initExecuteAddress) setInitExecuteAddress('');
          }}
        />
      </Box>
    </>
  );
}
