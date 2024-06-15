import { useState } from 'react';
import { Box, Text } from '@interchain-ui/react';

import { colors } from '@/config';
import { ContractInfo } from './ContractInfo';
import { AttachFundsSelect } from './AttachFundsSelect';
import { Button } from '../common';
import { IoMdCode } from 'react-icons/io';
import { GoGear } from 'react-icons/go';

type ExecuteTabProps = {
  show: boolean;
};

export const ExecuteTab = ({ show }: ExecuteTabProps) => {
  const [contractAddress, setContractAddress] = useState('');

  return (
    <Box display={show ? 'block' : 'none'}>
      <ContractInfo
        contractAddress={contractAddress}
        setContractAddress={setContractAddress}
        mb="30px"
      />

      <Text fontSize="16px" fontWeight="700" attributes={{ mb: '20px' }}>
        Execute Message
      </Text>

      <Box display="flex" gap="20px" justifyContent="space-between" mb="20px">
        <Box flex="1">
          <Text fontSize="16px" fontWeight="500" attributes={{ mb: '10px' }}>
            Execute Msg
          </Text>
          <Box
            height="324px"
            borderWidth="1px"
            borderStyle="solid"
            borderColor={colors.black300}
            borderRadius="4px"
          ></Box>
        </Box>

        <Box flex="1">
          <AttachFundsSelect />
        </Box>
      </Box>

      <Box display="flex" gap="10px" alignItems="center" mb="250px">
        <Button rightIcon="copy" px="10px">
          Copy
        </Button>
        <Button rightIcon={<IoMdCode size="20px" />} px="10px">
          Code Snippet
        </Button>
        <Button rightIcon={<GoGear size="20px" />} px="10px">
          Execute
        </Button>
      </Box>
    </Box>
  );
};
