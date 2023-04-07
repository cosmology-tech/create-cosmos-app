import React, { useMemo, useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  Skeleton,
  Text,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { NormalButton } from './buttons';
import DropdownTransferModal from './dropdown-transfer-modal';
import { PrettyAsset, PriceHash, Transfer, TransferValues } from '../types';
import { isOsmosisAsset } from './osmosis-assets';

// TODO: no assets to deposit or withdraw
// TODO: use InfoOutlineIcon and tooltip to show what assets are made of

interface IProps {
  assets: PrettyAsset[];
  prices: PriceHash | undefined;
  updateBalances: () => void;
  isLoading: boolean;
}

const AssetsOverview: React.FC<IProps> = ({
  assets,
  prices,
  isLoading,
  updateBalances,
}) => {
  const [transferType, setTransferType] = useState<TransferValues>();

  const modalControl = useDisclosure();

  const transferableAssets = useMemo(
    () => assets.filter((asset) => !isOsmosisAsset(asset)),
    [assets]
  );

  return (
    <Box p="24px" bg="#F5F7FB" borderRadius="6px" mb="26px">
      <Flex justifyContent="space-between">
        <Box>
          <Text
            fontSize="14px"
            fontWeight="600"
            color="#697584"
            lineHeight="16px"
            mb="4px"
          >
            Total on Osmosis
          </Text>
          {isLoading ? (
            <Skeleton w="80px" h="26px" mt="8px" />
          ) : (
            <Text
              fontSize="26px"
              fontWeight="600"
              color="#2C3137"
              lineHeight="30px"
            >
              <span style={{ fontSize: '14px', lineHeight: '16px' }}>$</span>
              54.92
            </Text>
          )}
        </Box>

        <HStack spacing="26px">
          <NormalButton
            type="outline"
            text={Transfer.Withdraw}
            size={{ h: '48px', w: '160px' }}
            onClick={() => {
              setTransferType(Transfer.Withdraw);
              modalControl.onOpen();
            }}
          />
          <NormalButton
            type="solid"
            text="Deposit"
            size={{ h: '48px', w: '160px' }}
            onClick={() => {
              setTransferType(Transfer.Deposit);
              modalControl.onOpen();
            }}
          />
        </HStack>
      </Flex>

      {prices && transferType && (
        <DropdownTransferModal
          prices={prices}
          assets={transferableAssets}
          transferType={transferType}
          modalControl={modalControl}
          updateBalances={updateBalances}
        />
      )}
    </Box>
  );
};

export default AssetsOverview;
