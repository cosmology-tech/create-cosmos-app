import { useState } from 'react';

export const useDisclosure = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  const onToggle = () => setIsOpen((prev) => !prev);

  return {
    isOpen,
    onClose,
    onOpen,
    onToggle,
  };
};

export type UseDisclosureReturn = ReturnType<typeof useDisclosure>;
