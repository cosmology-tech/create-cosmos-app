import { useState } from 'react';
import { Box, Text, TextField } from '@interchain-ui/react';
import { useChain } from '@cosmos-kit/react';

import { Button } from '@/components';
import { useChainStore } from '@/contexts';
import { requestTokens, validateChainAddress } from '@/utils';
import { useSpawnChains, useToast } from '@/hooks';

export default function Faucet() {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { selectedChain } = useChainStore();
  const { address, chain } = useChain(selectedChain);
  const { toast } = useToast();
  const { data: spawnChains } = useSpawnChains();

  const checkIsChainSupported = () => {
    const isSpawnRunning =
      spawnChains?.chains?.length && spawnChains?.assets?.length;

    if (!isSpawnRunning) {
      toast({
        type: 'error',
        title: 'Spawn is not running',
        description: 'Faucet is only available in Spawn environment',
      });
      return false;
    }

    const isSpawnChain = spawnChains?.chains?.some(
      (c) => c.chain_id === chain.chain_id
    );

    if (!isSpawnChain) {
      toast({
        type: 'error',
        title: 'Chain is not supported',
        description: 'Faucet is only available for Spawn chains',
      });
      return false;
    }

    return true;
  };

  const inputErrMsg = input
    ? validateChainAddress(input, chain.bech32_prefix)
    : null;

  const handleGetTokens = async () => {
    if (!address || !checkIsChainSupported()) return;

    setIsLoading(true);

    try {
      const res = await requestTokens(chain.chain_id, address);
      if (res.error) {
        throw new Error(res.error);
      }

      toast({
        type: 'success',
        title: 'Tokens credited',
      });
    } catch (error: any) {
      console.error(error);
      toast({
        type: 'error',
        title: 'Failed to get tokens',
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const isButtonDisabled = !input || !!inputErrMsg || !address;

  return (
    <>
      <Text
        textAlign="center"
        fontSize="48px"
        fontWeight="500"
        attributes={{ mt: '140px', mb: '20px' }}
      >
        Faucet
      </Text>
      <Text
        textAlign="center"
        fontSize="16px"
        fontWeight="500"
        attributes={{ mb: '20px' }}
      >
        Get test tokens for building applications
      </Text>
      <Box maxWidth="500px" mx="auto">
        <Text fontSize="16px" fontWeight="700" attributes={{ mb: '10px' }}>
          Address
        </Text>

        <Box display="flex" justifyContent="space-between" gap="10px" mb="24px">
          <Box width="$full">
            <TextField
              id="address"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your address"
              intent={inputErrMsg ? 'error' : 'default'}
              attributes={{ width: '100%' }}
            />
            {inputErrMsg && (
              <Text
                color="$red600"
                fontSize="12px"
                fontWeight="500"
                wordBreak="break-all"
                attributes={{ mt: '6px' }}
              >
                {inputErrMsg}
              </Text>
            )}
          </Box>
          <Button
            borderWidth="1px"
            borderColor="$blackAlpha300"
            color="$textSecondary"
            fontSize="14px"
            disabled={!address}
            onClick={() => setInput(address ?? '')}
          >
            Autofill
          </Button>
        </Box>

        <Button
          variant="primary"
          width="100%"
          mb="30px"
          onClick={handleGetTokens}
          isLoading={isLoading}
          disabled={isButtonDisabled}
        >
          Get Tokens
        </Button>

        <Text fontSize="16px" fontWeight="700" attributes={{ mb: '10px' }}>
          FAQ
        </Text>

        <Box display="flex" flexDirection="column" gap="20px">
          {faqs.map(({ question, answer }) => (
            <FaqItem key={question} question={question} answer={answer} />
          ))}
        </Box>
      </Box>
    </>
  );
}

const faqs = [
  {
    question: 'What is faucet?',
    answer:
      'A crypto faucet is a website or application that rewards you with cryptocurrency for completing simple tasks.',
  },
  {
    question: 'How can I get test tokens?',
    answer:
      'The Faucet dispenses a small number of test tokens after you claimed.',
  },
];

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <Box
      p="20px"
      width="$full"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="$blackAlpha300"
      borderRadius="4px"
    >
      <Text fontSize="18px" fontWeight="600" attributes={{ mb: '10px' }}>
        {question}
      </Text>
      <Text fontSize="16px" fontWeight="500" color="$textSecondary">
        {answer}
      </Text>
    </Box>
  );
};
