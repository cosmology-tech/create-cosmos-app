import { useEffect, useMemo, useState } from 'react';
import { Coin } from '@cosmjs/amino';
import { Box, Select, SelectOption, Text } from '@interchain-ui/react';
import { Asset } from '@chain-registry/types';
import BigNumber from 'bignumber.js';

import { JsonInput } from './JsonInput';
import { SelectAssetContent } from './SelectAssetContent';
import { getExponentFromAsset, prettifyJson } from '@/utils';

const defaultAssetListJson = prettifyJson(
  JSON.stringify([{ denom: '', amount: '' }])
);

export type SelectedAssetWithAmount = {
  asset: Asset | undefined;
  amount: string;
};

export const defaultSelectedAsset: SelectedAssetWithAmount = {
  asset: undefined,
  amount: '',
};

export type FundsOptionKey = 'no_funds' | 'select_asset' | 'json_asset_list';

type FundsOption = {
  key: FundsOptionKey;
  label: string;
  content: React.ReactNode;
};

type AttachFundsSelectProps = {
  setFunds: (funds: Coin[]) => void;
  setIsAssetListJsonValid: (isValid: boolean) => void;
};

export const AttachFundsSelect = ({
  setFunds,
  setIsAssetListJsonValid,
}: AttachFundsSelectProps) => {
  const [selectedOptionKey, setSelectedOptionKey] =
    useState<FundsOptionKey>('no_funds');
  const [assetListJson, setAssetListJson] = useState(defaultAssetListJson);
  const [selectedAssetsWithAmount, setSelectedAssetsWithAmount] = useState<
    SelectedAssetWithAmount[]
  >([defaultSelectedAsset]);

  const fundsOptionsMap: Record<FundsOptionKey, FundsOption> = useMemo(() => {
    return {
      no_funds: {
        key: 'no_funds',
        label: 'No funds attached',
        content: null,
      },
      select_asset: {
        key: 'select_asset',
        label: 'Select asset and fill amount',
        content: (
          <SelectAssetContent
            selectedAssetsWithAmount={selectedAssetsWithAmount}
            setSelectedAssetsWithAmount={setSelectedAssetsWithAmount}
          />
        ),
      },
      json_asset_list: {
        key: 'json_asset_list',
        label: 'Provide JSON asset list',
        content: (
          <JsonInput
            value={assetListJson}
            setValue={setAssetListJson}
            minLines={14}
            height="292px"
            mt="10px"
          />
        ),
      },
    };
  }, [selectedAssetsWithAmount, assetListJson]);

  useEffect(() => {
    setIsAssetListJsonValid(true);

    if (selectedOptionKey === 'no_funds') {
      setFunds([]);
    }

    if (selectedOptionKey === 'select_asset') {
      const funds = selectedAssetsWithAmount
        .filter(({ asset, amount }) => asset && amount)
        .map(({ asset, amount }) => ({
          denom: asset!.base,
          amount: BigNumber(amount)
            .shiftedBy(getExponentFromAsset(asset!) ?? 6)
            .toString(),
        }));

      setFunds(funds);
    }

    if (selectedOptionKey === 'json_asset_list') {
      try {
        const parsedJson = JSON.parse(assetListJson);
        setFunds(parsedJson);
      } catch (e) {
        setFunds([]);
        setIsAssetListJsonValid(false);
      }
    }
  }, [selectedOptionKey, selectedAssetsWithAmount, assetListJson]);

  const optionContent = fundsOptionsMap[selectedOptionKey].content;
  const defaultOption = fundsOptionsMap.no_funds;

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
          onSelectItem={(item) => {
            if (!item) return;
            setSelectedOptionKey(item.key as FundsOptionKey);
          }}
          fullWidth
        >
          {Object.values(fundsOptionsMap).map(({ key, label }) => (
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
