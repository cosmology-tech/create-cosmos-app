import { Box, Text } from '@interchain-ui/react';
import { ContractAddressField } from './ContractAddressField';
import { useEffect, useRef, useState } from 'react';

type QueryTabProps = {
  show: boolean;
  initialAddress: string;
  clearInitAddress: () => void;
};

export const QueryTab = ({
  show,
  initialAddress,
  clearInitAddress,
}: QueryTabProps) => {
  const [contractAddress, setContractAddress] = useState('');
  const [fieldWidth, setFieldWidth] = useState('560px');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      const newWidth = containerRef.current?.clientWidth;
      if (newWidth) {
        setFieldWidth(`${newWidth}px`);
      }
    };

    updateWidth();
    const timeoutId = setTimeout(updateWidth, 0);

    window.addEventListener('resize', updateWidth);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateWidth);
    };
  }, [show]);

  return (
    <Box
      display={show ? 'flex' : 'none'}
      maxWidth="560px"
      mx="auto"
      flexDirection="column"
      gap="20px"
      ref={containerRef}
    >
      <Text
        fontSize="24px"
        fontWeight="500"
        color="$blackAlpha600"
        textAlign="center"
      >
        Query Contract
      </Text>
      <ContractAddressField
        width={fieldWidth}
        initialAddress={initialAddress}
        setContractAddress={setContractAddress}
      />
    </Box>
  );
};
