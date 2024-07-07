import { Dispatch, SetStateAction, useMemo } from 'react';
import { assets } from 'chain-registry';

import {
  defaultSelectedAsset,
  SelectedAssetWithAmount,
} from './AttachFundsSelect';
import { Button } from '@/components';
import { SelectAssetItem } from './SelectAssetItem';
import { useChainStore } from '@/contexts';

type SelectAssetContentProps = {
  selectedAssetsWithAmount: SelectedAssetWithAmount[];
  setSelectedAssetsWithAmount: Dispatch<
    SetStateAction<SelectedAssetWithAmount[]>
  >;
};

export const SelectAssetContent = ({
  selectedAssetsWithAmount,
  setSelectedAssetsWithAmount,
}: SelectAssetContentProps) => {
  const { selectedChain } = useChainStore();

  const nativeAssets = useMemo(() => {
    return (
      assets
        .find(({ chain_name }) => chain_name === selectedChain)
        ?.assets.filter(
          ({ type_asset, base }) =>
            type_asset !== 'cw20' &&
            type_asset !== 'ics20' &&
            !base.startsWith('factory/')
        ) || []
    );
  }, [selectedChain]);

  const selectedSymbols = selectedAssetsWithAmount
    .map(({ asset }) => asset?.symbol)
    .filter(Boolean) as string[];

  const handleAddAssets = () => {
    setSelectedAssetsWithAmount((prev) => [...prev, defaultSelectedAsset]);
  };

  return (
    <>
      {selectedAssetsWithAmount.map((assetWithAmount, index) => (
        <SelectAssetItem
          key={assetWithAmount.asset?.symbol || index}
          itemIndex={index}
          allAssets={nativeAssets}
          selectedSymbols={selectedSymbols}
          disableTrashButton={selectedAssetsWithAmount.length === 1}
          selectedAssetWithAmount={assetWithAmount}
          setSelectedAssetsWithAmount={setSelectedAssetsWithAmount}
        />
      ))}

      <Button
        color="$text"
        onClick={handleAddAssets}
        disabled={selectedAssetsWithAmount.length === nativeAssets.length}
      >
        Add More Assets
      </Button>
    </>
  );
};
