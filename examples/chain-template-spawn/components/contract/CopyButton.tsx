import { Button } from '@/components';
import { useCopyToClipboard } from '@/hooks';

type CopyButtonProps = {
  value: string;
  disabled?: boolean;
};

export const CopyButton = ({ value, disabled = false }: CopyButtonProps) => {
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  return (
    <Button
      rightIcon={isCopied ? 'checkboxCircle' : 'copy'}
      iconColor={
        disabled ? 'inherit' : isCopied ? '$textSuccess' : '$textSecondary'
      }
      disabled={disabled}
      onClick={() => copyToClipboard(value)}
      px="10px"
    >
      Copy
    </Button>
  );
};
