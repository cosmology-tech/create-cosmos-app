import { useState } from 'react';
import { Box, Text, TextField } from '@interchain-ui/react';

import { Button } from '@/components';

export default function Faucet() {
  const [input, setInput] = useState('');

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
      <Box width="500px" mx="auto">
        <Text fontSize="16px" fontWeight="700" attributes={{ mb: '10px' }}>
          Address
        </Text>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="10px"
          mb="24px"
        >
          <TextField
            id="address"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your address"
            attributes={{ width: '100%' }}
          />
          <Button
            borderWidth="1px"
            borderColor="$blackAlpha300"
            color="$textSecondary"
            fontSize="14px"
          >
            Autofill
          </Button>
        </Box>

        <Button variant="primary" width="100%" mb="30px">
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
