import * as React from 'react';

export const useDisclosure = (isDefaultOpen = false) => {
  const [isOpen, setIsOpen] = React.useState(isDefaultOpen);

  const open = React.useCallback(() => setIsOpen(true), []);
  const close = React.useCallback(() => setIsOpen(false), []);

  const toggle = React.useCallback((toSet?: boolean) => {
    if (typeof toSet === 'undefined') {
      setIsOpen((state) => !state);
    } else {
      setIsOpen(Boolean(toSet));
    }
  }, []);

  return { isOpen, open, close, toggle };
};
