import { useEffect, useMemo, useState } from 'react';
import {
  Box,
  BoxProps,
  Spinner,
  Text,
  TextProps,
  Icon,
} from '@interchain-ui/react';

import { Button } from '@/components';
import { countJsonLines, prettifyJson, validateJson } from '@/utils';
import { JsonEditor } from './JsonEditor';

type JsonDisplay = {
  icon?: React.ReactNode;
  text?: string;
  textColor?: TextProps['color'];
};

const displayJsonState = (jsonState: JsonState) => {
  const jsonStateMap: Record<JsonState['state'], JsonDisplay> = {
    loading: {
      icon: <Spinner size="$lg" color="$textSecondary" />,
      text: 'Checking JSON Format...',
      textColor: '$textSecondary',
    },

    success: {
      icon: <Icon name="checkboxCircle" size="18px" color="$textSuccess" />,
      text: 'Valid JSON Format',
      textColor: '$text',
    },

    error: {
      icon: <Icon name="errorWarningLine" size="18px" color="$textDanger" />,
      text: jsonState.errMsg || 'Invalid JSON Format',
      textColor: '$textDanger',
    },

    empty: {},
  };

  return jsonStateMap[jsonState.state];
};

interface JsonState {
  state: 'empty' | 'loading' | 'success' | 'error';
  errMsg?: string;
}

type JsonInputProps = {
  value: string;
  setValue: (value: string) => void;
  minLines?: number;
} & Pick<BoxProps, 'width' | 'height' | 'mt' | 'mb'>;

export const JsonInput = ({
  value = '',
  setValue,
  minLines = 16,
  ...rest
}: JsonInputProps) => {
  const [jsonState, setJsonState] = useState<JsonState>({ state: 'empty' });

  const handleChange = (val: string) => {
    setJsonState({ state: 'loading' });
    setValue(val);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const error = validateJson(value);

      if (value.trim().length === 0) setJsonState({ state: 'empty' });
      else if (error) setJsonState({ state: 'error', errMsg: error });
      else setJsonState({ state: 'success' });
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [value]);

  const { icon, text, textColor } = displayJsonState(jsonState);
  const isValidJson = validateJson(value) === null;

  const lines = useMemo(() => {
    return Math.max(countJsonLines(value), minLines);
  }, [value]);

  return (
    <Box>
      <Box
        position="relative"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="$blackAlpha300"
        borderRadius="4px"
        overflowY="auto"
        p="10px"
        {...rest}
      >
        <JsonEditor value={value} setValue={handleChange} lines={lines} />
        <Button
          px="6px"
          py="4px"
          color="$text"
          fontSize="12px"
          position="absolute"
          top="10px"
          right="10px"
          height="24px"
          disabled={!isValidJson}
          onClick={() => setValue(prettifyJson(value))}
        >
          Format JSON
        </Button>
      </Box>
      {jsonState.state !== 'empty' && (
        <Box display="flex" alignItems="center" gap="6px" mt="6px">
          {icon}
          <Text color={textColor} fontSize="12px">
            {text}
          </Text>
        </Box>
      )}
    </Box>
  );
};
