import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  useColorModeValue,
} from '@interchain-ui/react';
import { useChain } from '@cosmos-kit/react';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';

import { Button, WalletConnect } from '@/components';
import { darkColors, lightColors } from '@/config';
import { useChainStore } from '@/contexts';
import { useCopyToClipboard, useDetectBreakpoints } from '@/hooks';
import { shortenAddress } from '@/utils';

export const AddressButton = () => {
  const { selectedChain } = useChainStore();
  const { address } = useChain(selectedChain);
  const { isCopied, copyToClipboard } = useCopyToClipboard();
  const { isDesktop } = useDetectBreakpoints();

  const arrowBgColor = useColorModeValue(
    lightColors?.background as string,
    darkColors?.background as string
  );

  if (!isDesktop) {
    return (
      <Popover
        triggerType="click"
        placement="bottom"
        offset={{ mainAxis: 16 }}
        // @ts-ignore
        arrowRef={null}
      >
        <PopoverTrigger>
          <Button
            leftIcon={<MdOutlineAccountBalanceWallet size="20px" />}
            px="10px"
          />
        </PopoverTrigger>
        <PopoverContent
          arrowStyles={{ width: 16, height: 10, fill: arrowBgColor }}
        >
          <WalletConnect />
        </PopoverContent>
      </Popover>
    );
  }

  if (!address) return null;

  return (
    <Button
      rightIcon={isCopied ? 'checkLine' : 'copy'}
      iconColor={isCopied ? '$textSuccess' : 'inherit'}
      onClick={() => copyToClipboard(address)}
      px="10px"
    >
      {shortenAddress(address)}
    </Button>
  );
};
