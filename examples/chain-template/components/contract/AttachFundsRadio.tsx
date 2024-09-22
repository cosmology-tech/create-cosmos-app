import { useEffect, useMemo, useState } from 'react';
import { Coin } from '@cosmjs/amino';
import { Box } from '@interchain-ui/react';
import { Asset } from '@chain-registry/types';
import BigNumber from 'bignumber.js';
import { TbCurrencyDollarOff } from 'react-icons/tb';
import { LuListPlus } from 'react-icons/lu';
import { VscJson } from 'react-icons/vsc';

import { JsonInput } from './JsonInput';
import { SelectAssetContent } from './SelectAssetContent';
import { getExponentFromAsset, prettifyJson } from '@/utils';
import { Radio, RadioGroup } from '../common';

const defaultAssetListJson = prettifyJson(
  JSON.stringify([{ denom: '', amount: '' }]),
);

export type SelectedAssetWithAmount = {
  asset: Asset | undefined;
  amount: string;
};

export const defaultSelectedAsset: SelectedAssetWithAmount = {
  asset: undefined,
  amount: '',
};

export type FundsOptionKey = 'no_funds' | 'select_assets' | 'json_asset_list';

type FundsOption = {
  key: FundsOptionKey;
  icon: React.ReactNode;
  label: string;
  content: React.ReactNode;
};

type AttachFundsRadioProps = {
  setFunds: (funds: Coin[]) => void;
  setIsAssetListJsonValid: (isValid: boolean) => void;
  direction?: 'row' | 'column';
};

export const AttachFundsRadio = ({
  setFunds,
  setIsAssetListJsonValid,
  direction = 'row',
}: AttachFundsRadioProps) => {
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
        icon: <TbCurrencyDollarOff size="22px" />,
        content: null,
      },
      select_assets: {
        key: 'select_assets',
        label: 'Select assets',
        icon: <LuListPlus size="22px" />,
        content: (
          <SelectAssetContent
            selectedAssetsWithAmount={selectedAssetsWithAmount}
            setSelectedAssetsWithAmount={setSelectedAssetsWithAmount}
          />
        ),
      },
      json_asset_list: {
        key: 'json_asset_list',
        label: 'JSON asset list',
        icon: <VscJson size="22px" />,
        content: (
          <JsonInput
            value={assetListJson}
            setValue={setAssetListJson}
            minLines={14}
            height="292px"
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

    if (selectedOptionKey === 'select_assets') {
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

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={selectedOptionKey === 'json_asset_list' ? '10px' : '20px'}
    >
      <RadioGroup
        direction={direction}
        name="attach_funds"
        value={selectedOptionKey}
        onChange={(val) => {
          setSelectedOptionKey(val as FundsOptionKey);
        }}
      >
        {Object.values(fundsOptionsMap).map(({ key, label, icon }) => (
          <Radio key={key} value={key} icon={icon}>
            {label}
          </Radio>
        ))}
      </RadioGroup>

      {optionContent}
    </Box>
  );
};
