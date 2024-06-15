import { useState } from 'react';
import { Box, Select, SelectOption, Text } from '@interchain-ui/react';
import { SelectAssetContent } from './SelectAssetContent';
import { JsonEditor } from './JsonEditor';

type FundsOptionKey = 'no_funds' | 'select_asset' | 'json_asset_list';

type FundsOption = {
  label: string;
  key: FundsOptionKey;
  content: React.ReactNode;
};

type AttachFundsSelectProps = {};

export const AttachFundsSelect = ({}: AttachFundsSelectProps) => {
  const [selectedOptionKey, setSelectedOptionKey] =
    useState<FundsOptionKey>('no_funds');
  const [jsonValue, setJsonValue] = useState('');

  const fundsOptions: FundsOption[] = [
    {
      label: 'No funds attached',
      key: 'no_funds',
      content: null,
    },
    {
      label: 'Select asset and fill amount',
      key: 'select_asset',
      content: <SelectAssetContent />,
    },
    {
      label: 'Provide JSON asset list',
      key: 'json_asset_list',
      content: (
        <JsonEditor
          value={jsonValue}
          setValue={setJsonValue}
          height="275px"
          mt="10px"
        />
      ),
    },
  ] as const;

  const optionContent = fundsOptions.find(
    ({ key }) => key === selectedOptionKey
  )?.content;

  const defaultOption = fundsOptions[0];

  return (
    <>
      <Text fontSize="16px" fontWeight="500" attributes={{ mb: '10px' }}>
        Attach Funds
      </Text>

      <Box width="$full">
        <Select
          defaultSelectedItem={{
            key: defaultOption.key,
            label: defaultOption.label,
            index: 0,
          }}
          fullWidth
          onSelectItem={(item) => {
            if (!item) return;
            setSelectedOptionKey(item.key as FundsOptionKey);
          }}
        >
          {fundsOptions.map(({ key, label }) => (
            <SelectOption key={key} optionKey={key} label={label}>
              {label}
            </SelectOption>
          ))}
        </Select>
      </Box>

      {optionContent}
    </>
  );
};
