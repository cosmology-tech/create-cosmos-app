import { useState } from 'react';
import { Box, Text } from '@interchain-ui/react';
import { IoMdCode } from 'react-icons/io';
import { LuFileInput } from 'react-icons/lu';

import { Button } from '@/components';
import { JsonEditor } from './JsonEditor';
import { ContractInfo } from './ContractInfo';
import { colors } from '@/config';

type QueryTabProps = {
  show: boolean;
};

export const QueryTab = ({ show }: QueryTabProps) => {
  const [contractAddress, setContractAddress] = useState('');
  const [jsonValue, setJsonValue] = useState('');

  return (
    <Box display={show ? 'block' : 'none'}>
      <ContractInfo
        contractAddress={contractAddress}
        setContractAddress={setContractAddress}
        mb="30px"
      />

      <Text fontSize="16px" fontWeight="700" attributes={{ mb: '20px' }}>
        Query Message
      </Text>

      <Box display="flex" gap="20px" justifyContent="space-between" mb="20px">
        <Box flex="1">
          <Text fontSize="16px" fontWeight="500" attributes={{ mb: '10px' }}>
            Query Msg
          </Text>
          <JsonEditor
            value={jsonValue}
            setValue={setJsonValue}
            height="324px"
          />
        </Box>

        <Box flex="1">
          <Text fontSize="16px" fontWeight="500" attributes={{ mb: '10px' }}>
            Return Output
          </Text>
          <Box
            borderWidth="1px"
            borderStyle="solid"
            borderColor={colors.black300}
            borderRadius="4px"
            height="324px"
            p="10px"
          ></Box>
        </Box>
      </Box>

      <Box display="flex" gap="10px" alignItems="center" mb="250px">
        <Button rightIcon="copy" px="10px">
          Copy
        </Button>
        <Button rightIcon={<IoMdCode size="20px" />} px="10px">
          Code Snippet
        </Button>
        <Button rightIcon={<LuFileInput size="18px" />} px="10px">
          Query
        </Button>
      </Box>
    </Box>
  );
};
