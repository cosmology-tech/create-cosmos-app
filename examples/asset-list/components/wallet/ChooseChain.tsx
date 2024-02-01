import * as React from 'react';
import {
  Box,
  Combobox,
  Text,
  Stack,
  Avatar,
  ThemeProvider,
  useTheme,
} from '@interchain-ui/react';

type Option = {
  label: string;
  value: string;
};

export interface ChainInfo {
  chainName: string;
  chainRoute?: string;
  label: string;
  value: string;
  icon?: string;
  disabled?: boolean;
}

export interface ChooseChainProps {
  chainName?: string;
  chainInfos: ChainInfo[];
  onChange: (selectedItem: Option | null) => void;
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

export const ChooseChain = (props: ChooseChainProps) => {
  const { chainName, chainInfos, onChange } = props;
  const [selectedKey, setSelectedKey] = React.useState<React.Key>();
  const { themeClass } = useTheme();

  React.useEffect(() => {
    // Init selected key to provided chainName
    if (chainName && chainInfos.length > 0) {
      const initKey = chainInfos.filter(
        (options) => options.chainName === chainName
      )[0].value;

      return setSelectedKey(initKey);
    }

    if (!chainName) setSelectedKey(undefined);
  }, [chainInfos, chainName]);

  const chainOptions = chainInfos
    .map((chainInfo) => ({
      iconUrl: chainInfo.icon,
      label: chainInfo.label,
      value: chainInfo.value,
    }))
    .filter((chainInfo) => chainInfo.label && chainInfo.value);

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
                chainInfos.find((options) => options.value === item) ?? null;

              if (found) {
                onChange?.(found);
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
            width: '350px',
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
    </ThemeProvider>
  );
};
