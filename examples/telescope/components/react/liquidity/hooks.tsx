import { useToast, Text, Box } from '@interchain-ui/react';
import { TransactionResult } from './types';

export const useTransactionToast = () => {
  const toast = useToast({
    position: 'top-right',
    containerStyle: {
      maxWidth: '150px',
    },
  });

  const showToast = (code: number, res?: any) => {
    toast({
      title: `Transaction ${code === TransactionResult.Success ? 'successful' : 'failed'
        }`,
      status: code === TransactionResult.Success ? 'success' : 'error',
      duration: code === TransactionResult.Success ? 5000 : 20000,
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
