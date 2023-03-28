import { useToast } from '@chakra-ui/react';
import { TransactionResult } from '../types';

export const useTransactionToast = () => {
  const toast = useToast();

  const showToast = (code: number) => {
    toast({
      title: `Transaction ${
        code === TransactionResult.Success ? 'successful' : 'failed'
      }`,
      status: code === TransactionResult.Success ? 'success' : 'error',
      duration: 5000,
      isClosable: true,
      position: 'top-right',
    });
  };

  return { showToast };
};
