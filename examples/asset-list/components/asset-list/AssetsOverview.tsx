import React, { useMemo, useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  Skeleton,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { NormalButton } from './Buttons';
import DropdownTransferModal from './DropdownTransferModal';
import { PrettyAsset, Transfer, TransferInfo } from './types';
import { useChainUtils, useTotalAssets } from '../../hooks';
import { useChain } from '@cosmos-kit/react';
import BigNumber from 'bignumber.js';
import { ChainName } from '@cosmos-kit/core';

interface IProps {
  assets: PrettyAsset[];
  selectedChainName: ChainName;
}

const AssetsOverview: React.FC<IProps> = ({ assets, selectedChainName }) => {
  const [transferInfo, setTransferInfo] = useState<TransferInfo>();
  const { chain } = useChain(selectedChainName);

  const { data, isLoading, refetch } = useTotalAssets(selectedChainName);
  const { getChainName, getNativeDenom, isNativeAsset } =
    useChainUtils(selectedChainName);

  const modalControl = useDisclosure();

  const ibcAssets = useMemo(
    () => assets.filter((asset) => !isNativeAsset(asset)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [assets]
  );

  const hasBalance = useMemo(
    () => ibcAssets.some((asset) => new BigNumber(asset.amount).gt(0)),
    [ibcAssets]
  );

  const ZERO_AMOUNT = '0';

  const bgColor = useColorModeValue('#F5F7FB', '#1D2024');
  const titleColor = useColorModeValue('#697584', '#A7B4C2');
  const statColor = useColorModeValue('#2C3137', '#EEF2F8');

  return (
    <Box p="24px" bg={bgColor} borderRadius="6px" mb="26px">
      <Flex justifyContent="space-between">
        <Box>
          <Text
            fontSize="14px"
            fontWeight="600"
            color={titleColor}
            lineHeight="16px"
            mb="4px"
          >
            Total on {chain.pretty_name}
          </Text>
          {isLoading || !data ? (
            <Skeleton w="80px" h="26px" mt="8px" />
          ) : (
            <Text
              fontSize="26px"
              fontWeight="600"
              color={statColor}
              lineHeight="30px"
            >
              <span style={{ fontSize: '14px', lineHeight: '16px' }}>$</span>
              {data.total}
            </Text>
          )}
        </Box>

        {!isLoading && (
          <HStack spacing="26px">
            {hasBalance && (
              <NormalButton
                type="outline"
                text={Transfer.Withdraw}
                size={{ h: '48px', w: '160px' }}
                onClick={() => {
                  const destChainName = getChainName(ibcAssets[0].denom);
                  setTransferInfo({
                    sourceChainName: selectedChainName,
                    type: Transfer.Withdraw,
                    destChainName,
                    token: ibcAssets[0],
                  });
                  modalControl.onOpen();
                }}
              />
            )}
            {ibcAssets.length > 0 && (
              <NormalButton
                type="solid"
                text="Deposit"
                size={{ h: '48px', w: '160px' }}
                onClick={() => {
                  const sourceChainName = getChainName(ibcAssets[0].denom);
                  const sourceChainAssetDenom = getNativeDenom(sourceChainName);
                  setTransferInfo({
                    sourceChainName,
                    type: Transfer.Deposit,
                    destChainName: selectedChainName,
                    token: {
                      ...ibcAssets[0],
                      displayAmount: ZERO_AMOUNT,
                      dollarValue: ZERO_AMOUNT,
                      amount: ZERO_AMOUNT,
                      denom: sourceChainAssetDenom,
                    },
                  });
                  modalControl.onOpen();
                }}
              />
            )}
          </HStack>
        )}
      </Flex>

      {data && transferInfo && (
        <DropdownTransferModal
          prices={data.prices}
          assets={ibcAssets}
          transferInfoState={{ transferInfo, setTransferInfo }}
          modalControl={modalControl}
          updateData={refetch}
          selectedChainName={selectedChainName}
        />
      )}
    </Box>
  );
};

export default AssetsOverview;
