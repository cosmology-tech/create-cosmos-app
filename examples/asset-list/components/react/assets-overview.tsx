import React from 'react';
import { Box, Flex, HStack, Text, useDisclosure } from '@chakra-ui/react';
import { NormalButton } from './buttons';
import DropdownTransferModal from './dropdown-transfer-modal';

const AssetsOverview = () => {
  const modalControl = useDisclosure();

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
          <Text
            fontSize="26px"
            fontWeight="600"
            color="#2C3137"
            lineHeight="30px"
          >
            <span style={{ fontSize: '14px', lineHeight: '16px' }}>$</span>
            54.92
          </Text>
        </Box>

        <HStack spacing="26px">
          <NormalButton
            type="outline"
            text="Withdraw"
            size={{ h: '48px', w: '160px' }}
            onClick={modalControl.onOpen}
          />
          <NormalButton
            type="solid"
            text="Deposit"
            size={{ h: '48px', w: '160px' }}
            onClick={modalControl.onOpen}
          />
        </HStack>
      </Flex>

      <DropdownTransferModal modalControl={modalControl} />
    </Box>
  );
};

export default AssetsOverview;
