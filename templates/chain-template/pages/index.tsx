import Image from 'next/image';
import { Box, Text } from '@interchain-ui/react';
import { Button } from '@/components';
import { useDetectBreakpoints } from '@/hooks';

export default function Home() {
  const { isMobile } = useDetectBreakpoints();

  return (
    <>
      <Text
        textAlign="center"
        fontSize="48px"
        fontWeight="500"
        attributes={{ mt: '220px', mb: '20px' }}
      >
        Create Cosmos App
      </Text>
      <Text
        textAlign="center"
        fontSize="16px"
        fontWeight="500"
        attributes={{ mb: '20px' }}
      >
        Welcome to <HighlightText>Cosmos Kit</HighlightText> +{' '}
        <HighlightText>Next.js</HighlightText>
      </Text>
      <Button
        variant="primary"
        leftIcon="walletFilled"
        mx="auto"
        mb={isMobile ? '60px' : '100px'}
      >
        Connect Wallet
      </Button>
      <Box display="flex" justifyContent="center">
        <Image
          alt="chains"
          src="/images/chains.svg"
          width={0}
          height={0}
          style={{
            maxWidth: '840px',
            width: '100%',
            height: 'auto',
          }}
        />
      </Box>
    </>
  );
}

const HighlightText = ({ children }: { children: string }) => {
  return (
    <Text as="span" color="$purple600">
      {children}
    </Text>
  );
};
