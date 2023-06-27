import { useToast, Text, Box } from '@chakra-ui/react';
import { TxResult } from '../components/types';

export const useTransactionToast = () => {
  const toast = useToast({
    position: 'top-right',
    containerStyle: {
      maxWidth: '150px',
    },
  });

  const showToast = (code: number, res?: any) => {
    toast({
      title: `Transaction ${
        code === TxResult.Success ? 'successful' : 'failed'
      }`,
      status: code === TxResult.Success ? 'success' : 'error',
      duration: code === TxResult.Success ? 5000 : 12000,
      isClosable: true,
      description: (
        <Box pr="20px">
          <Text fontSize="sm">{res?.message}</Text>
          <Text fontSize="sm">{res?.rawLog}</Text>
        </Box>
      ),
    });
  };

  return { showToast };
};
