// TODO fix type issues
// @ts-nocheck

import * as React from 'react';
import { chains } from 'chain-registry';
import {
  Box,
  Combobox,
  Text,
  Stack,
  Avatar,
  useTheme,
} from '@interchain-ui/react';

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

  React.useEffect(() => {
    // Init selected key to provided chainName
    if (chainName && chainInfos.length > 0) {
      const initKey = chainInfos.filter(
        (option) => option.chain_name === chainName
      )[0].chain_name;

      return setSelectedKey(initKey);
    }

    if (!chainName) setSelectedKey(undefined);
  }, [chainInfos, chainName]);

  const chainOptions = chainInfos
    .map((chainInfo) => ({
      iconUrl: chainInfo.logo_URIs?.png ?? '',
      label: chainInfo.pretty_name,
      value: chainInfo.chain_name,
    }))
    .filter((chainInfo) => chainInfo.label && chainInfo.value);

  return (
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
              chainInfos.find((options) => options.chain_name === item) ?? null;

            if (found) {
              onChange?.(found.chain_name);
            }
          }
        }}
        inputAddonStart={
          selectedKey ? (
            <Avatar
              name={selectedKey as string}
              getInitials={(name) => name[0]}
              size="xs"
              src={
                chainOptions.find((i) => i.value === selectedKey)?.iconUrl ??
                undefined
              }
              fallbackMode="bg"
              attributes={{
                paddingX: '$4',
              }}
            />
          ) : null
        }
        styleProps={{
          width: {
            mobile: '100%',
            mdMobile: '420px',
          },
        }}
      >
        {chainOptions.map((option) => (
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
  );
};
