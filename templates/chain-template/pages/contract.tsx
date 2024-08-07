import { useEffect, useState } from 'react';
import { Box, Tabs } from '@interchain-ui/react';
import {
  ExecuteTab,
  InstantiateTab,
  MyContractsTab,
  QueryTab,
  UploadTab,
} from '@/components';
import { CodeIdInfo } from '@/contexts';
import { splitCamelCase } from '@/utils';

export enum TabLabel {
  MyContracts,
  Upload,
  Instantiate,
  Query,
  Execute,
}

export default function Contract() {
  const [activeTab, setActiveTab] = useState(0);
  const [codeInfo, setCodeInfo] = useState<CodeIdInfo>();
  const [initQueryAddress, setInitQueryAddress] = useState('');
  const [initExecuteAddress, setInitExecuteAddress] = useState('');

  useEffect(() => {
    if (activeTab !== TabLabel.Query) setInitQueryAddress('');
    if (activeTab !== TabLabel.Execute) setInitExecuteAddress('');
  }, [activeTab]);

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
        <MyContractsTab show={activeTab === TabLabel.MyContracts} />
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
          switchTab={(initialAddress, tabId) => {
            setActiveTab(tabId);
            if (tabId === TabLabel.Query) setInitQueryAddress(initialAddress);
            if (tabId === TabLabel.Execute)
              setInitExecuteAddress(initialAddress);
          }}
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
