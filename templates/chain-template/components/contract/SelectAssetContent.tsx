import {
  Avatar,
  Box,
  NumberField,
  Select,
  SelectOption,
  Stack,
  Text,
} from '@interchain-ui/react';
import osmoAssets from 'chain-registry/testnet/osmosistestnet/assets';
import { useState } from 'react';
import { Button } from '@/components';
import { HiOutlineTrash } from 'react-icons/hi';

const assets = osmoAssets.assets.slice(0, 2);

type SelectAssetContentProps = {};

export const SelectAssetContent = ({}: SelectAssetContentProps) => {
  const [selectedDenoms, setSelectedDenoms] = useState<string[]>([]);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-end"
        gap="10px"
        mb="20px"
      >
        <Box>
          <Text fontSize="16px" fontWeight="400" attributes={{ mb: '10px' }}>
            Asset
          </Text>
          <Select
            width="140px"
            onSelectItem={(item) => {
              if (!item) return;
              setSelectedDenoms((prev) => [...prev, item.key]);
            }}
            placeholder="Select"
          >
            {assets.map(({ base, symbol, logo_URIs }) => (
              <SelectOption key={base} optionKey={base} label={symbol}>
                <Stack space="10px" attributes={{ alignItems: 'center' }}>
                  <Avatar
                    name={symbol}
                    src={logo_URIs?.svg || logo_URIs?.png}
                    size="xs"
                  />
                  <Text fontSize="16px" fontWeight="500">
                    {symbol}
                  </Text>
                </Stack>
              </SelectOption>
            ))}
          </Select>
        </Box>

        <Box flex="1">
          <Text fontSize="16px" fontWeight="400" attributes={{ mb: '10px' }}>
            Amount
          </Text>
          <NumberField placeholder="Enter amount" />
        </Box>

        <Button
          px="10px"
          color="$text"
          leftIcon={<HiOutlineTrash size="20px" />}
        />
      </Box>

      <Button color="$text">Add More Assets</Button>
    </>
  );
};
