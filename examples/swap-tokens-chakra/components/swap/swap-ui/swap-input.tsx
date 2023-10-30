import {
  Box,
  Button,
  Flex,
  Input,
  Skeleton,
  Text,
  Tooltip,
  useOutsideClick,
} from '@chakra-ui/react';
import Decimal from 'decimal.js';
import React, { useRef, useState } from 'react';

import { SwapControlInputValuePanelType, SwapEditableInputType } from './type';

export const SwapEditableInput = ({
  id,
  selectedToken,
  inputAmount = '0',
  inputDollarValue,
  invalidText,
  onAmountInputChange,
}: SwapEditableInputType) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVisible, setInputVisible] = useState(false);

  useOutsideClick({
    ref: inputRef,
    handler: () => setInputVisible(false),
  });

  return (
    <Box className="swap-editable-input-box">
      {inputVisible ? (
        <Tooltip
          label={invalidText}
          placement="bottom-end"
          isOpen={!!invalidText}
          gutter={1}
          textAlign="center"
          maxW={48}
        >
          <Input
            id={id}
            className="swap-editable-input"
            type="number"
            step={0.000001}
            min={0}
            max={selectedToken?.displayAmount}
            ref={inputRef}
            autoFocus={true}
            isInvalid={!!invalidText}
            value={inputAmount}
            onChange={(e) => onAmountInputChange(e.target.value)}
            onKeyDown={(e) => {
              switch (e.code) {
                case 'Enter':
                  setInputVisible(false);
                  break;
                case 'NumpadEnter':
                  setInputVisible(false);
                  break;
                default:
                  break;
              }
            }}
          />
        </Tooltip>
      ) : (
        <Text
          className="swap-editable-text"
          onClick={() => setInputVisible(true)}
        >
          {inputAmount ? inputAmount : '0'}
        </Text>
      )}
      <Text
        className="swap-fiat-text"
        visibility={
          new Decimal(inputDollarValue || 0).gt(0) ? 'visible' : 'hidden'
        }
      >
        {`~ $${inputDollarValue}`}
      </Text>
    </Box>
  );
};

export const SwapInputControlPanel = ({
  loading,
  amount,
  onAmountInputChange,
}: SwapControlInputValuePanelType) => {
  const decimal = new Decimal(amount || 0);

  return (
    <Flex className="swap-input-control-panel">
      <Flex className="swap-available-value">
        <Text as="span">Available</Text>
        {loading ? (
          <Box className="swap-available-value-skeleton">
            <Skeleton />
          </Box>
        ) : (
          <Text>{decimal.equals(0) ? '0' : decimal.toFixed(6)}</Text>
        )}
      </Flex>
      <Button
        variant="unstyled"
        onClick={() => onAmountInputChange(decimal.div(2).toString())}
      >
        Half
      </Button>
      <Button
        variant="unstyled"
        onClick={() => onAmountInputChange(decimal.toString())}
      >
        Max
      </Button>
    </Flex>
  );
};
