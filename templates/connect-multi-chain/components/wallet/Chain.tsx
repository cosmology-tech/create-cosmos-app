import * as React from 'react';
import { chains } from 'chain-registry';
import {
  Box,
  Combobox,
  Text,
  Stack,
  Avatar,
  Skeleton,
  ThemeProvider,
  useTheme,
} from '@interchain-ui/react';
import { matchSorter } from 'match-sorter';

type Option = {
  label: string;
  value: string;
};

export type ChainInfo = typeof chains[number];

export interface ChooseChainProps {
  chainName?: string;
  chainInfos: ChainInfo[];
  onChange: (selectedItem: string | undefined) => void;
}

const ChainOption = (props: Option & { iconUrl: string }) => {
  return (
    <Stack
      direction="horizontal"
      space="$4"
      attributes={{ alignItems: 'center' }}
    >
      <Avatar
        name={props.label}
        getInitials={(name) => name[0]}
        size="xs"
        src={props.iconUrl}
        fallbackMode="bg"
      />

      <Text fontSize="$md" fontWeight="$normal" color="$text">
        {props.label}
      </Text>
    </Stack>
  );
};

export const Chain = (props: ChooseChainProps) => {
  const { chainName, chainInfos, onChange } = props;
  const [selectedKey, setSelectedKey] = React.useState<React.Key>();
  const { themeClass } = useTheme();
  let [filterValue, setFilterValue] = React.useState<string>('');

  React.useEffect(() => {
    // Init selected key to provided chainName
    if (chainName && chainInfos.length > 0) {
      const defaultChain = chainInfos.filter(
        (options) => options.chain_name === chainName
      )[0];

      setSelectedKey(defaultChain.chain_name);
      return setFilterValue(defaultChain.pretty_name);
    }

    if (!chainName) setSelectedKey(undefined);
  }, [chainInfos, chainName]);

  let filteredItems = React.useMemo(() => {
    const initialItems = chainInfos
      .map((chainInfo) => ({
        iconUrl: chainInfo.logo_URIs?.png ?? '',
        label: chainInfo.pretty_name,
        value: chainInfo.chain_name,
      }))
      .filter((chainInfo) => chainInfo.label && chainInfo.value);

    const filtered = matchSorter(initialItems, filterValue, {
      keys: ['label', 'value'],
    });
    return filtered;
  }, [chainInfos, filterValue]);

  const avatarUrl =
    filteredItems.find((i) => i.value === selectedKey)?.iconUrl ?? undefined;

  return (
    <ThemeProvider>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={themeClass}
      >
        <Combobox
          selectedKey={selectedKey as string}
          onSelectionChange={(item) => {
            if (item) {
              setSelectedKey(item);

              const found =
                chainInfos.find((options) => options.chain_name === item) ??
                null;

              if (found) {
                onChange?.(found.chain_name);
              }
            }
          }}
          inputAddonStart={
            selectedKey && avatarUrl ? (
              <Avatar
                name={selectedKey as string}
                getInitials={(name) => name[0]}
                size="xs"
                src={avatarUrl}
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
          {filteredItems.map((option) => (
            <Combobox.Item key={option.value} textValue={option.label}>
              <ChainOption
                iconUrl={option.iconUrl ?? ''}
                label={option.label}
                value={option.value}
              />
            </Combobox.Item>
          ))}
        </Combobox>
      </Box>
    </ThemeProvider>
  );
};
