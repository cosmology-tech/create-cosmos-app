import { useToast } from '@chakra-ui/react';
import { useRef } from 'react';
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

export const usePrevious = <T,>() => {
  const ref = useRef<{ [key: number]: T }>({});

  const addData = (data: { [key: number]: T }) => {
    ref.current = { ...ref.current, ...data };
  };

  return { prevData: ref.current, addData };
};
