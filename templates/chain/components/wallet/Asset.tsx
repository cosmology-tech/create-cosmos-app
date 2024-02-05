import { useEffect, useMemo, useState } from "react";
import { Asset } from "@chain-registry/types";
import { matchSorter } from "match-sorter";
import {
  Avatar,
  Box,
  Combobox,
  Skeleton,
  Stack,
  Text,
  ThemeProvider,
  useTheme,
} from "@interchain-ui/react";

export type AssetSelectProps = {
  asset: Asset;
  assets: Asset[];
  onChange?: (asset: Asset) => void;
};

function label(asset: Asset) {
  return `${asset.symbol} - ${asset.name}`;
}

export function AssetSelect({
  asset,
  assets = [],
  onChange = () => {},
}: AssetSelectProps) {
  const { themeClass } = useTheme();
  const [value, setValue] = useState<string>();
  const [input, setInput] = useState<string>("");

  const cache = useMemo(
    () =>
      assets.reduce(
        (cache, asset) => (cache[asset.base] = asset, cache),
        {} as Record<string, Asset>,
      ),
    [assets],
  );

  const options = useMemo(() =>
    matchSorter(
      assets
        .map((asset) => ({
          logo: asset.logo_URIs?.png || asset.logo_URIs?.svg || "",
          value: asset.base,
          label: label(asset),
        }))
        .filter((chain) => chain.value && chain.label),
      input,
      { keys: ["label"] },
    ), [assets, input]);

  useEffect(() => {
    if (!asset) setValue(undefined);

    if (asset && assets.length > 0) {
      const ast = cache[asset.base];

      if (ast) {
        setValue(ast.base);
        setInput(label(ast));
      }
    }
  }, [asset, assets]);

  const avatar = cache[value!]?.logo_URIs?.png || cache[value!]?.logo_URIs?.svg;

  return (
    <ThemeProvider>
      <Box
        display="flex"
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
            const base = value as string;
            if (base) {
              setValue(base);
              if (cache[base]) {
                onChange(cache[base]);
                setInput(label(cache[base]));
              }
            }
          }}
          inputAddonStart={value && avatar
            ? (
              <Avatar
                name={value as string}
                getInitials={(name) => name[0]}
                size="xs"
                src={avatar}
                fallbackMode="bg"
                attributes={{
                  paddingX: "$4",
                }}
              />
            )
            : (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                px="$4"
              >
                <Skeleton width="24px" height="24px" borderRadius="$full" />
              </Box>
            )}
          styleProps={{
            width: "100%",
          }}
        >
          {options.map((option) => (
            <Combobox.Item key={option.value} textValue={option.label}>
              <ChainOption
                logo={option.logo ?? ""}
                label={option.label}
              />
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
      attributes={{ alignItems: "center" }}
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
