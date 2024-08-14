import { useEffect } from 'react';

interface UseOutsideClickProps {
  ref: React.RefObject<HTMLElement>;
  handler: () => void;
  shouldListen?: boolean;
}

export const useOutsideClick = ({ ref, handler, shouldListen = true }: UseOutsideClickProps) => {
  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      handler();
    }
  };

  useEffect(() => {
    if (shouldListen) {
      document.addEventListener('mousedown', handleClick);
    } else {
      document.removeEventListener('mousedown', handleClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [ref, handler, shouldListen]);
};
