import { Dispatch, SetStateAction, useState } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { Asset } from '@chain-registry/types';
import {
  Avatar,
  Box,
  NumberField,
  Popover,
  PopoverContent,
  PopoverTrigger,
  SelectButton,
  Text,
  useColorModeValue,
  useTheme,
} from '@interchain-ui/react';

import { Button } from '@/components';
import { SelectedAssetWithAmount } from './AttachFundsRadio';
import { useDetectBreakpoints } from '@/hooks';

type SelectAssetItemProps = {
  itemIndex: number;
  allAssets: Asset[];
  selectedSymbols: string[];
  disableTrashButton: boolean;
  selectedAssetWithAmount: SelectedAssetWithAmount;
  setSelectedAssetsWithAmount: Dispatch<
    SetStateAction<SelectedAssetWithAmount[]>
  >;
};

export const SelectAssetItem = ({
  itemIndex,
  allAssets,
  selectedSymbols,
  disableTrashButton,
  selectedAssetWithAmount,
  setSelectedAssetsWithAmount,
}: SelectAssetItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectAsset = (asset: Asset, index: number) => () => {
    setSelectedAssetsWithAmount((prev) => {
      const newFunds = [...prev];
      newFunds[index] = {
        ...newFunds[index],
        asset,
      };
      return newFunds;
    });
    setIsOpen(false);
  };

  const handleAmountInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const amount = e.target.value;
    setSelectedAssetsWithAmount((prev) => {
      const newFunds = [...prev];
      newFunds[index] = { ...newFunds[index], amount };
      return newFunds;
    });
  };

  const handleDeleteAsset = (index: number) => () => {
    setSelectedAssetsWithAmount((prev) => {
      const newFunds = [...prev];
      newFunds.splice(index, 1);
      return newFunds;
    });
  };

  const { theme } = useTheme();
  const { isMobile } = useDetectBreakpoints();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="flex-end"
      gap="10px"
    >
      <Box>
        <Text fontSize="16px" fontWeight="400" attributes={{ mb: '10px' }}>
          Asset
        </Text>
        {/* @ts-ignore */}
        <Popover
          triggerType="click"
          placement={isMobile ? 'bottom-start' : 'bottom'}
          offset={{ mainAxis: 10 }}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
          <PopoverTrigger>
            <SelectButton
              onClick={() => {}}
              placeholder={selectedAssetWithAmount?.asset?.symbol ?? 'Select'}
              _css={{ width: isMobile ? '100px' : '140px' }}
            />
          </PopoverTrigger>
          <PopoverContent showArrow={false}>
            <Box
              display="flex"
              flexDirection="column"
              width="140px"
              py="10px"
              bg="$background"
              borderRadius="4px"
              boxShadow={`0px 4px 20px 0px rgba(${
                theme === 'light' ? '0,0,0' : '128,128,128'
              }, 0.1)`}
              maxHeight="220px"
              overflowY="auto"
            >
              {allAssets.map((asset) => (
                <AssetOption
                  key={asset.symbol}
                  asset={asset}
                  onClick={handleSelectAsset(asset, itemIndex)}
                  disabled={selectedSymbols.includes(asset.symbol)}
                />
              ))}
            </Box>
          </PopoverContent>
        </Popover>
      </Box>

      <Box flex="1">
        <Text fontSize="16px" fontWeight="400" attributes={{ mb: '10px' }}>
          Amount
        </Text>
        <NumberField
          placeholder="Enter amount"
          value={
            selectedAssetWithAmount.amount
              ? Number(selectedAssetWithAmount.amount)
              : undefined
          }
          onInput={(e) => handleAmountInput(e as any, itemIndex)}
        />
      </Box>

      <Button
        px="10px"
        color="$text"
        leftIcon={<HiOutlineTrash size="20px" />}
        onClick={handleDeleteAsset(itemIndex)}
        disabled={disableTrashButton}
      />
    </Box>
  );
};

const AssetOption = ({
  asset,
  disabled,
  onClick,
}: {
  asset: Asset;
  disabled: boolean;
  onClick: () => void;
}) => {
  const hoverBg = useColorModeValue('$blackAlpha100', '$whiteAlpha100');
  return (
    <Box
      display="flex"
      gap="10px"
      alignItems="center"
      minHeight="40px"
      px="20px"
      cursor={disabled ? 'default' : 'pointer'}
      opacity={disabled ? 0.3 : 1}
      bg={{
        hover: disabled ? '$background' : hoverBg,
        base: '$background',
      }}
      attributes={{ onClick: disabled ? undefined : onClick }}
    >
      <Avatar
        name={asset.symbol}
        src={asset.logo_URIs?.svg || asset.logo_URIs?.png || ''}
        size="xs"
      />
      <Text
        fontSize="16px"
        fontWeight="500"
        attributes={{
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        {asset.symbol}
      </Text>
    </Box>
  );
};
