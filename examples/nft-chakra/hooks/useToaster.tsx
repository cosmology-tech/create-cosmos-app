import { useToast, Text, Box } from '@chakra-ui/react';

export enum ToastType {
  Info = 'info',
  Error = 'error',
  Success = 'success',
  Loading = 'loading',
}

export type CustomToast = {
  title: string;
  type: ToastType;
  message?: string | JSX.Element;
  closable?: boolean;
  duration?: number;
};

export const useToaster = () => {
  const toast = useToast({
    position: 'top-right',
    containerStyle: {
      maxWidth: '150px',
    },
  });

  const customToast = ({
    type,
    title,
    message,
    closable = true,
    duration = 5000,
  }: CustomToast) => {
    return toast({
      title,
      duration,
      status: type,
      isClosable: closable,
      description: (
        <Box pr="20px">
          <Text fontSize="sm">{message}</Text>
        </Box>
      ),
    });
  };

  const toastSuccess = () =>
    customToast({
      title: 'Transaction successful',
      type: ToastType.Success,
    });

  const toastFailed = (error?: any) =>
    customToast({
      title: 'Transaction failed',
      type: ToastType.Error,
      duration: 12000,
      message: error?.message || error?.rawLog,
    });

  return { ...toast, toast: customToast, toastSuccess, toastFailed };
};
