import { useState } from 'react';
import { Box } from '@interchain-ui/react';

import { Button } from '../common';
import { PopoverSelect } from './PopoverSelect';
import { MyContractsTable } from './MyContractsTable';
import { CreateFromUpload } from './CreateFromUpload';
import { CreateFromCodeId } from './CreateFromCodeId';

const ContentViews = {
  MY_CONTRACTS: 'my_contracts',
  CREATE_FROM_UPLOAD: 'create_from_upload',
  CREATE_FROM_CODE_ID: 'create_from_code_id',
} as const;

type ContentView = typeof ContentViews[keyof typeof ContentViews];

const contractCreationOptions = [
  { label: 'From Upload', value: ContentViews.CREATE_FROM_UPLOAD },
  { label: 'From Code ID', value: ContentViews.CREATE_FROM_CODE_ID },
];

type MyContractsTabProps = {
  show: boolean;
  switchTab: (addressValue: string, tabId: number) => void;
};

export const MyContractsTab = ({ show, switchTab }: MyContractsTabProps) => {
  const [contentView, setContentView] = useState<ContentView>(
    ContentViews.MY_CONTRACTS
  );

  return (
    <Box display={show ? 'block' : 'none'}>
      <MyContractsTable
        title="My Contracts"
        show={contentView === ContentViews.MY_CONTRACTS}
        switchTab={switchTab}
        createContractTrigger={
          <PopoverSelect
            trigger={<Button variant="primary">Create Contract</Button>}
            options={contractCreationOptions}
            onOptionClick={(value) => setContentView(value as ContentView)}
            popoverWidth="152px"
          />
        }
      />
      {contentView === ContentViews.CREATE_FROM_UPLOAD && (
        <CreateFromUpload
          switchTab={switchTab}
          onBack={() => setContentView(ContentViews.MY_CONTRACTS)}
        />
      )}
      {contentView === ContentViews.CREATE_FROM_CODE_ID && (
        <CreateFromCodeId
          switchTab={switchTab}
          onBack={() => setContentView(ContentViews.MY_CONTRACTS)}
        />
      )}
    </Box>
  );
};
