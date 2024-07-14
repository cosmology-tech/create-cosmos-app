import Image from 'next/image';
import {
  Box,
  Icon,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  useColorModeValue,
} from '@interchain-ui/react';
import { useChain } from '@cosmos-kit/react';
import { FiLogOut } from 'react-icons/fi';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';

import { Button } from '@/components';
import { darkColors, lightColors } from '@/config';
import { useChainStore } from '@/contexts';
import { useCopyToClipboard, useDetectBreakpoints } from '@/hooks';
import { shortenAddress } from '@/utils';

export const AddressButton = () => {
  const { selectedChain } = useChainStore();
  const { address, disconnect, wallet } = useChain(selectedChain);
  const { isCopied, copyToClipboard } = useCopyToClipboard();
  const { isDesktop } = useDetectBreakpoints();

  const boxShadowColor = useColorModeValue(
    lightColors?.blackAlpha200 as string,
    darkColors?.blackAlpha200 as string
  );

  const arrowBgColor = useColorModeValue(
    lightColors?.background as string,
    darkColors?.background as string
  );

  if (!address) return null;

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
          <Box
            p="10px"
            display="flex"
            alignItems="center"
            gap="10px"
            borderRadius="8px"
            borderWidth="1px"
            borderStyle="solid"
            borderColor="$blackAlpha100" //TODO: the real value is black150
            bg="$background"
            boxShadow={`0px 0px 20px 0px ${boxShadowColor}`}
          >
            <Box display="flex" alignItems="center" gap="4px">
              {wallet?.logo && (
                <Image
                  src={
                    typeof wallet.logo === 'string'
                      ? wallet.logo
                      : wallet.logo.major || wallet.logo.minor
                  }
                  alt={wallet.prettyName}
                  width="0"
                  height="0"
                  style={{ width: '20px', height: 'auto' }}
                />
              )}
              <Text
                color="$gray500"
                fontSize="14px"
                fontWeight="500"
                lineHeight="20px"
              >
                {shortenAddress(address)}
              </Text>
            </Box>
            <Box
              cursor="pointer"
              display="flex"
              alignItems="center"
              attributes={{ onClick: () => copyToClipboard(address) }}
            >
              <Icon
                name={isCopied ? 'checkLine' : 'copy'}
                size="$lg"
                color={isCopied ? '$green600' : '$blackAlpha400'}
              />
            </Box>
            <Box
              color="$blackAlpha400"
              display="flex"
              alignItems="center"
              cursor="pointer"
              attributes={{ onClick: disconnect }}
            >
              <FiLogOut size="18px" />
            </Box>
          </Box>
        </PopoverContent>
      </Popover>
    );
  }

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
