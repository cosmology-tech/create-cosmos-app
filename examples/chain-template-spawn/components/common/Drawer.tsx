import { ReactNode, useEffect, useRef } from 'react';
import { Box } from '@interchain-ui/react';
import { useOutsideClick } from '@/hooks';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  direction?: 'top' | 'bottom' | 'left' | 'right';
};

export const Drawer = ({
  isOpen,
  onClose,
  children,
  direction = 'left',
}: DrawerProps) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick({
    ref: contentRef,
    handler: onClose,
    shouldListen: isOpen,
  });

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  const getTransform = () => {
    switch (direction) {
      case 'top':
        return `translateY(${isOpen ? '0%' : '-100%'})`;
      case 'bottom':
        return `translateY(${isOpen ? '0%' : '100%'})`;
      case 'right':
        return `translateX(${isOpen ? '0%' : '100%'})`;
      default:
        return `translateX(${isOpen ? '0%' : '-100%'})`;
    }
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      visibility={isOpen ? 'visible' : 'hidden'}
      opacity={isOpen ? '1' : '0'}
      transition="all 0.25s ease-out"
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex="100"
      bg="rgba(0,0,0,0.5)"
      overflow="hidden"
    >
      <Box
        width={direction === 'top' || direction === 'bottom' ? '100%' : 'auto'}
        height={direction === 'left' || direction === 'right' ? '100%' : 'auto'}
        position="absolute"
        top={direction === 'bottom' ? 'auto' : '0'}
        bottom={direction === 'top' ? 'auto' : '0'}
        left={direction === 'right' ? 'auto' : '0'}
        right={direction === 'left' ? 'auto' : '0'}
        ref={contentRef}
        bg="$background"
        overflowY="auto"
        overflowX="hidden"
        transform={getTransform()}
        transition="all 0.25s ease-out"
      >
        {children}
      </Box>
    </Box>
  );
};
