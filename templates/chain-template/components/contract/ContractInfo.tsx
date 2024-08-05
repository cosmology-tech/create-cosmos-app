import { useEffect, useState } from 'react';
import { useChain } from '@cosmos-kit/react';
import { Box, BoxProps, Text, TextField } from '@interchain-ui/react';

import { Button } from '@/components';
import { useChainStore } from '@/contexts';
import { useContractInfo, useDetectBreakpoints } from '@/hooks';
import { shortenAddress, validateContractAddress } from '@/utils';

type ContractInfoProps = {
  setContractAddress: (address: string) => void;
  initialAddress: string;
  clearInitAddress: () => void;
  mb?: BoxProps['mb'];
};

// TODO: apply initialAddress when there's already an fetched address
export const ContractInfo = ({
  setContractAddress,
  initialAddress = '',
  clearInitAddress,
  mb = '$0',
}: ContractInfoProps) => {
  const [input, setInput] = useState('');
  const [inputErr, setInputErr] = useState<string | null>(null);
  const [isEditable, setIsEditable] = useState(true);

  const { isMobile } = useDetectBreakpoints();
  const { selectedChain } = useChainStore();
  const { chain } = useChain(selectedChain);
  const {
    data: contractInfo,
    error: fetchContractError,
    refetch: fetchContractInfo,
    remove: removeQueryCache,
    isFetching,
  } = useContractInfo({
    contractAddress: input,
    enabled: false,
  });

  const handleSubmit = (address: string) => {
    const err = validateContractAddress(address, chain.bech32_prefix);
    if (err) {
      setInputErr(err);
      return;
    }
    setInputErr(null);
    setContractAddress(address);
    fetchContractInfo().then(({ isSuccess }) => {
      if (isSuccess) setIsEditable(false);
    });
  };

  useEffect(() => {
    if (initialAddress) {
      setInput(initialAddress);
      setInputErr(null);
    }
  }, [initialAddress]);

  useEffect(() => {
    if (initialAddress && input === initialAddress) {
      handleSubmit(initialAddress);
    }
  }, [initialAddress, input]);

  const handleEdit = () => {
    setIsEditable(true);
    removeQueryCache();
    clearInitAddress();
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
      borderColor="$blackAlpha300"
      borderRadius="4px"
      display="flex"
      flexDirection={isMobile ? 'column' : 'row'}
      gap={isMobile ? '10px' : '60px'}
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
              value={
                isEditable ? input : shortenAddress(input, isMobile ? 9 : 15)
              }
              onChange={(e) => {
                setInput(e.target.value);
                setInputErr(null);
              }}
              placeholder="Enter contract address"
              intent={inputErr ? 'error' : 'default'}
              readonly={!isEditable || isFetching}
              attributes={{
                width: isEditable ? 'auto' : isMobile ? '172px' : '260px',
              }}
            />
            {inputErr && (
              <Text
                color="$red600"
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
              onClick={() => handleSubmit(input)}
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
