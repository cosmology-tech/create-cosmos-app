import { Box, useTheme } from '@interchain-ui/react';
import { useChain } from '@cosmos-kit/react';
import { RxHamburgerMenu } from 'react-icons/rx';

import { useChainStore } from '@/contexts';
import { ChainDropdown } from './ChainDropdown';
import { Button } from './Button';
import { useCopyToClipboard, useDetectBreakpoints } from '@/hooks';
import { shortenAddress } from '@/utils';

interface HeaderProps {
  onOpenSidebar: () => void;
}

export const Header = ({ onOpenSidebar }: HeaderProps) => {
  const { selectedChain } = useChainStore();
  const { theme, setTheme } = useTheme();
  const { address } = useChain(selectedChain);
  const { isCopied, copyToClipboard } = useCopyToClipboard();
  const { isDesktop } = useDetectBreakpoints();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      gap="10px"
      mb="30px"
    >
      {address && (
        <Button
          rightIcon={isCopied ? 'checkLine' : 'copy'}
          iconColor={isCopied ? '$textSuccess' : 'inherit'}
          onClick={() => copyToClipboard(address)}
          px="10px"
        >
          {shortenAddress(address)}
        </Button>
      )}
      <ChainDropdown />
      <Button
        leftIcon={theme === 'dark' ? 'moonLine' : 'sunLine'}
        px="10px"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      {!isDesktop && (
        <Box
          color="$blackAlpha400"
          cursor="pointer"
          ml="6px"
          attributes={{ onClick: onOpenSidebar }}
        >
          <RxHamburgerMenu size="22px" />
        </Box>
      )}
    </Box>
  );
};
