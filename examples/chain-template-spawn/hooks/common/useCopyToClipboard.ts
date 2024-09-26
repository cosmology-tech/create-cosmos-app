import { useState } from 'react';
import { toast } from '@interchain-ui/react';

export const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    } catch (err) {
      toast.error('Failed to copy text. Please try again.');
    }
  };

  return { isCopied, copyToClipboard };
};
