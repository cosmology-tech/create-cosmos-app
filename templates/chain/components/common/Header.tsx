import {
  Box,
  Button,
  Icon,
  Text,
  Stack,
  useColorModeValue,
  useTheme,
} from '@interchain-ui/react';
import { useEffect } from 'react';
import { chains } from 'chain-registry';
import { useChain } from '@cosmos-kit/react';
import { CHAIN_NAME, CHAIN_NAME_STORAGE_KEY } from '@/config';
import { ChainSelect } from '../wallet/Chain';
import { Logo } from './Logo';

export type HeaderProps = {
  chainName?: string;
  onChainChange?: (chainName?: string) => void;
  onMoreButtonClick?: () => void;
};

export function Header({
  chainName = CHAIN_NAME,
  onChainChange = () => {},
  onMoreButtonClick = () => {},
}: HeaderProps) {
  const { theme, setTheme } = useTheme();

  const toggleColorMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const { chain } = useChain(chainName);

  useEffect(() => {
    const selected = localStorage.getItem(CHAIN_NAME_STORAGE_KEY);
    if (selected && selected !== chainName) {
      onChainChange(selected);
    }
  }, []);

  return (
    <Box
      p={{ mobile: '$5', tablet: '$6', desktop: '$8' }}
      display="flex"
      width="$full"
      alignItems="center"
      justifyContent="end"
      borderBottomWidth="1px"
      borderBottomStyle="solid"
      borderBottomColor="$divider"
    >
      <Box
        flex="1"
        display={{ mobile: 'none', tablet: 'none', desktop: 'flex' }}
      >
        <Text fontSize="$3xl" fontWeight="bold">
          Cosmos Chain Dashboard
        </Text>
      </Box>
      <Box display={{ tablet: 'block', desktop: 'none' }}>
        <Button
          size="md"
          intent="secondary"
          variant="ghost"
          onClick={onMoreButtonClick}
          attributes={{
            px: 0,
            position: 'relative',
          }}
        >
          <Icon name="verticalMore" />
          <Box
            top="0"
            left="0"
            right="0"
            bottom="0"
            position="absolute"
            borderStyle="solid"
            borderWidth="1px"
            borderColor="$inputBorder"
            borderRadius="$md"
          ></Box>
        </Button>
      </Box>
      <Box mx="auto" display={{ mobile: 'block', desktop: 'none' }}>
        <Logo width={160} />
      </Box>

      <Stack space="$4">
        <Box display={{ mobile: 'none', tablet: 'none', desktop: 'block' }}>
          <ChainSelect
            chains={chains}
            chainName={chain.chain_name}
            onChange={onChainChange}
          />
        </Box>

        <Box width="42px" height="42px">
          <Button
            size="md"
            intent="secondary"
            variant="ghost"
            fluid
            attributes={{
              px: 0,
              position: 'relative',
            }}
            onClick={toggleColorMode}
          >
            <Box
              top="0"
              left="0"
              right="0"
              bottom="0"
              position="absolute"
              borderStyle="solid"
              borderWidth="1px"
              borderColor="$inputBorder"
              borderRadius="$md"
              backgroundColor={useColorModeValue('transparent', '$inputBg')}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Icon
                name={useColorModeValue('moonLine', 'sunLine')}
                size="$sm"
                color="$textSecondary"
              />
            </Box>
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
