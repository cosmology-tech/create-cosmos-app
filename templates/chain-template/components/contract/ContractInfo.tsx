import { Box, BoxProps, Text, TextField } from '@interchain-ui/react';
import { colors } from '@/config';
import { Button } from '@/components';

type ContractInfoProps = {
  contractAddress: string;
  setContractAddress: (address: string) => void;
  mb?: BoxProps['mb'];
};

export const ContractInfo = ({
  contractAddress,
  setContractAddress,
  mb = '$0',
}: ContractInfoProps) => {
  return (
    <Box
      borderWidth="1px"
      borderStyle="solid"
      borderColor={colors.black300}
      borderRadius="4px"
      display="flex"
      alignItems="center"
      gap="60px"
      p="20px"
      mb={mb}
    >
      <Box>
        <Text fontSize="16px" fontWeight="700" attributes={{ mb: '10px' }}>
          Contract Address
        </Text>
        <Box display="flex" alignItems="center" gap="10px">
          <TextField
            id="contract-address"
            value={contractAddress}
            onChange={(e) => setContractAddress(e.target.value)}
            placeholder="Enter contract address"
            attributes={{ width: '422px' }}
          />
          <Button color="$text">Submit</Button>
        </Box>
      </Box>

      <Box>
        <Text fontSize="16px" fontWeight="700" attributes={{ mb: '10px' }}>
          Contract Name
        </Text>
        <Text color="$textSecondary" fontSize="16px" fontWeight="500">
          Not set yet
        </Text>
      </Box>
    </Box>
  );
};
