import { useEffect, useMemo, useState } from 'react';
import { Chains } from '@chain-registry/types';
import { matchSorter } from 'match-sorter';
import {
  Avatar,
  Box,
  Combobox,
  Skeleton,
  Stack,
  Text,
  ThemeProvider,
  useTheme,
} from '@interchain-ui/react';

export type ChainSelectProps = {
  chains: Chains;
  chainName?: string;
  onChange?: (chainName?: string) => void;
};

export function ChainSelect({
  chainName,
  chains = [],
  onChange = () => {},
}: ChainSelectProps) {
  const { themeClass } = useTheme();
  const [value, setValue] = useState<string>();
  const [input, setInput] = useState<string>('');

  const cache = useMemo(
    () =>
      chains.reduce(
        (cache, chain) => ((cache[chain.chain_name] = chain), cache),
        {} as Record<string, Chains[number]>
      ),
    [chains]
  );

  const options = useMemo(
    () =>
      matchSorter(
        chains
          .map((chain) => ({
            logo: chain.logo_URIs?.png || chain.logo_URIs?.svg || '',
            value: chain.chain_name,
            label: chain.pretty_name,
          }))
          .filter((chain) => chain.value && chain.label),
        input,
        { keys: ['value', 'label'] }
      ),
    [chains, input]
  );

  useEffect(() => {
    if (!chainName) setValue(undefined);

    if (chainName && chains.length > 0) {
      const chain = cache[chainName];

      if (chain) {
        setValue(chain.chain_name);
        setInput(chain.pretty_name);
      }
    }
  }, [chains, chainName]);

  const avatar = cache[value!]?.logo_URIs?.png || cache[value!]?.logo_URIs?.svg;

  return (
    <ThemeProvider>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={themeClass}
      >
        <Combobox
          selectedKey={value}
          inputValue={input}
          onInputChange={(input) => {
            setInput(input);
            if (!input) setValue(undefined);
          }}
          onSelectionChange={(value) => {
            const name = value as string;
            if (name) {
              setValue(name);
              if (cache[name]) {
                onChange(cache[name].chain_name);
              }
            }
          }}
          inputAddonStart={
            value && avatar ? (
              <Avatar
                name={value as string}
                getInitials={(name) => name[0]}
                size="xs"
                src={avatar}
                fallbackMode="bg"
                attributes={{
                  paddingX: '$4',
                }}
              />
            ) : (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                px="$4"
              >
                <Skeleton width="24px" height="24px" borderRadius="$full" />
              </Box>
            )
          }
          styleProps={{
            width: {
              mobile: '100%',
              mdMobile: '350px',
            },
          }}
        >
          {options.map((option) => (
            <Combobox.Item key={option.value} textValue={option.label}>
              <ChainOption logo={option.logo ?? ''} label={option.label} />
            </Combobox.Item>
          ))}
        </Combobox>
      </Box>
    </ThemeProvider>
  );
}

function ChainOption({ logo, label }: { logo: string; label: string }) {
  return (
    <Stack
      direction="horizontal"
      space="$4"
      attributes={{ alignItems: 'center' }}
    >
      <Avatar
        name={label}
        getInitials={(name) => name[0]}
        size="xs"
        src={logo}
        fallbackMode="bg"
      />

      <Text fontSize="$md" fontWeight="$normal" color="$text">
        {label}
      </Text>
    </Stack>
  );
}
