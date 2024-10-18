import { Text, Box, toast } from '@interchain-ui/react';
import { TransactionResult } from '../components/types';

export const useTransactionToast = () => {

  const showToast = (code: number, res?: any) => {
    toast(
      `Transaction ${code === TransactionResult.Success ? 'successful' : 'failed'}`,
      {
        duration: code === TransactionResult.Success ? 5000 : 20000,
        description: (
          // @ts-ignore
          <Box
            pr="20px"
          >
            <Text fontSize="sm">{res?.message}</Text>
            <Text fontSize="sm">{res?.rawLog}</Text>
          </Box>
        ),
      });
  };

  return { showToast };
};
