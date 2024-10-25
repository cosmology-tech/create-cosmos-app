import { toast, Text, ToastType, Spinner } from '@interchain-ui/react';

export type CustomToast = {
  type: ToastType;
  title: string;
  duration?: number;
  description?: string | JSX.Element;
};

const ToastTitle = ({ title }: { title: string }) => {
  return (
    <Text color="inherit" fontSize="$md" fontWeight="$semibold">
      {title}
    </Text>
  );
};

export const useToast = () => {
  const customToast = ({
    type,
    title,
    description,
    duration = 5000,
  }: CustomToast) => {
    return toast.custom(type, <ToastTitle title={title} />, {
      duration,
      description,
      icon: type === 'loading' ? <Spinner size="$lg" /> : undefined,
    });
  };

  customToast.close = toast.dismiss;

  return { toast: customToast };
};
