import { useState } from 'react';
import { Box, Text, TextField, TextFieldAddon } from '@interchain-ui/react';
import { useChain } from '@cosmos-kit/react';

import { Button } from '@/components';
import { useChainStore } from '@/contexts';
import { creditFromFaucet, validateChainAddress } from '@/utils';
import { useStarshipChains, useToast } from '@/hooks';
import config from '@/starship/configs/config.yaml';
import type { StarshipConfig } from '@/starship';
import styles from '@/styles/comp.module.css';

export default function Faucet() {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { selectedChain } = useChainStore();
  const { address, chain, assets } = useChain(selectedChain);
  const { toast } = useToast();
  const { data: starshipChains } = useStarshipChains();

  const checkIsChainSupported = () => {
    const isStarshipRunning =
      starshipChains?.chains?.length && starshipChains?.assets?.length;

    if (!isStarshipRunning) {
      toast({
        type: 'error',
        title: 'Starship is not running',
        description: 'Faucet is only available in Starship environment',
      });
      return false;
    }

    const isStarshipChain = starshipChains?.chains?.some(
      (c) => c.chain_id === chain.chain_id,
    );

    if (!isStarshipChain) {
      toast({
        type: 'error',
        title: 'Chain is not supported',
        description: 'Faucet is only available for Starship chains',
      });
      return false;
    }

    return true;
  };

  const inputErrMsg = input
    ? validateChainAddress(input, chain.bech32_prefix)
    : null;

  const handleGetTokens = async () => {
    if (!assets || !checkIsChainSupported()) return;

    setIsLoading(true);

    const asset = assets.assets[0];
    const port = (config as StarshipConfig).chains.find(
      (c) => c.id === chain.chain_id,
    )!.ports.faucet;

    try {
      await creditFromFaucet(input, asset.base, port);
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

  const isButtonDisabled = !input || !!inputErrMsg;

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

        <Box mb="24px">
          <TextField
            id="address"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your address"
            intent={inputErrMsg ? 'error' : 'default'}
            autoComplete="off"
            inputClassName={styles['input-pr']}
            endAddon={
              <TextFieldAddon position="end">
                <Box
                  height="$full"
                  display="flex"
                  alignItems="center"
                  borderLeftWidth="1px"
                  borderLeftStyle="solid"
                  borderLeftColor="$inputBorder"
                >
                  <Button
                    size="sm"
                    variant="text"
                    disabled={!address}
                    onClick={() => setInput(address ?? '')}
                  >
                    Autofill
                  </Button>
                </Box>
              </TextFieldAddon>
            }
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
