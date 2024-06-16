import { useEffect, useState } from 'react';
import { useChain } from '@cosmos-kit/react';
import { Box, BoxProps, Text, TextField } from '@interchain-ui/react';

import { colors } from '@/config';
import { Button } from '@/components';
import { useChainStore } from '@/contexts';
import { useContractInfo } from '@/hooks';
import { shortenAddress, validateContractAddress } from '@/utils';

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
  const [input, setInput] = useState('');
  const [inputErr, setInputErr] = useState<string | null>(null);
  const [isEditable, setIsEditable] = useState(true);

  const { selectedChain } = useChainStore();
  const { chain } = useChain(selectedChain);
  const {
    data: contractInfo,
    error: fetchContractError,
    refetch: fetchContractInfo,
    remove: removeQueryCache,
    isFetching,
  } = useContractInfo({
    contractAddress,
    enabled: false,
  });

  const handleSubmit = () => {
    const err = validateContractAddress(input, chain.bech32_prefix);
    if (err) {
      setInputErr(err);
      return;
    }
    setContractAddress(input);
    fetchContractInfo().then(({ isSuccess }) => {
      if (isSuccess) {
        setIsEditable(false);
        setInput(shortenAddress(input, 15));
      }
    });
  };

  const handleEdit = () => {
    setIsEditable(true);
    setInput(contractAddress);
    removeQueryCache();
  };

  useEffect(() => {
    if (fetchContractError) {
      setInputErr('Error fetching contract info. Please try again.');
      removeQueryCache();
    }
  }, [fetchContractError]);

  return (
    <Box
      borderWidth="1px"
      borderStyle="solid"
      borderColor={colors.black300}
      borderRadius="4px"
      display="flex"
      gap="60px"
      p="20px"
      mb={mb}
    >
      <Box flex="1.5">
        <Text fontSize="16px" fontWeight="700" attributes={{ mb: '10px' }}>
          Contract Address
        </Text>
        <Box display="flex" gap="10px" mb="6px">
          <Box width={isEditable ? '$full' : '$auto'}>
            <TextField
              id="contract-address"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setInputErr(null);
              }}
              placeholder="Enter contract address"
              intent={inputErr ? 'error' : 'default'}
              disabled={isFetching}
              readonly={!isEditable}
              attributes={{ width: isEditable ? 'auto' : '260px' }}
            />
            {inputErr && (
              <Text
                color="#E65858"
                fontSize="12px"
                fontWeight="500"
                wordBreak="break-all"
                attributes={{ mt: '6px' }}
              >
                {inputErr}
              </Text>
            )}
          </Box>
          {isEditable ? (
            <Button
              color="$text"
              onClick={handleSubmit}
              isLoading={isFetching}
              disabled={!input}
            >
              Submit
            </Button>
          ) : (
            <Button color="$text" onClick={handleEdit} leftIcon="pencilLine">
              Edit
            </Button>
          )}
        </Box>
      </Box>

      <Box flex="1">
        <Text fontSize="16px" fontWeight="700" attributes={{ mb: '10px' }}>
          Contract Name
        </Text>
        <Text color="$textSecondary" fontSize="16px" fontWeight="500">
          {contractInfo?.label || 'Not set'}
        </Text>
      </Box>
    </Box>
  );
};
