import {
  handleSwapDropdown,
  SwapDataType,
  SwapView,
} from '@cosmology-ui/react';
import { useCallback, useEffect, useReducer, useState } from 'react';
import { chainList } from './config';
import Decimal from 'decimal.js';
import { Box, Center } from '@chakra-ui/react';

enum SwapValueType {
  INITIAL = 'INITIAL',
  VALID = 'VALID',
  NOTPOSITIVE = 'NOTPOSITIVE',
  NOVALUE = 'NOVALUE',
  UPDATE = 'UPDATE',
  OVERMAXIMUM = 'OVERMAXIMUM',
}
interface UpdateDropdownReducer {
  selectedToken?: SwapDataType;
  dropdownLoading?: boolean;
  inputLoading?: boolean;
}
interface UpdateInputReducer {
  amountValue?: string;
  fiatValue?: string;
  invalid: boolean;
  invalidText?: string;
  isInputLoading?: boolean;
}
interface UpdateReducerAction extends UpdateInputReducer {
  type: SwapValueType;
}

function updateDropdownReducer(
  state: UpdateDropdownReducer,
  action: UpdateDropdownReducer
): UpdateDropdownReducer {
  return {
    ...state,
    selectedToken: action.selectedToken,
    dropdownLoading: action.dropdownLoading,
    inputLoading: action.inputLoading,
  };
}
function updateInputReducer(
  state: UpdateInputReducer,
  action: UpdateReducerAction
): UpdateInputReducer {
  switch (action.type) {
    case SwapValueType.INITIAL:
      return {
        ...state,
        isInputLoading: action.isInputLoading,
        invalid: action.invalid,
        amountValue: action.amountValue,
        fiatValue: action.fiatValue,
      };
    case SwapValueType.UPDATE:
      return {
        ...state,
        isInputLoading: action.isInputLoading,
        invalid: action.invalid,
        amountValue: action.amountValue,
        fiatValue: action.fiatValue,
      };
    case SwapValueType.NOTPOSITIVE:
      return {
        ...state,
        invalid: action.invalid,
        invalidText: action.invalidText,
        amountValue: action.amountValue,
        fiatValue: action.fiatValue,
      };
    case SwapValueType.OVERMAXIMUM:
      return {
        ...state,
        invalid: action.invalid,
        invalidText: action.invalidText,
        amountValue: action.amountValue,
        fiatValue: action.fiatValue,
      };
    case SwapValueType.NOVALUE:
      return {
        ...state,
        invalid: action.invalid,
        invalidText: action.invalidText,
        amountValue: action.amountValue,
        fiatValue: action.fiatValue,
      };
    case SwapValueType.VALID:
      return {
        ...state,
        invalid: action.invalid,
        invalidText: action.invalidText,
        amountValue: action.amountValue,
        fiatValue: action.fiatValue,
      };

    default: {
      return state;
    }
  }
}

export const SwapTokens = () => {
  const tokenArray = ['1%', '2.5%', '3%', '5%'];
  const [chainData, setChainData] = useState<SwapDataType[]>([]);
  const [fromToken, updateFromToken] = useReducer(updateDropdownReducer, {
    selectedToken: undefined,
    dropdownLoading: true,
    inputLoading: true,
  });
  const [toToken, updateToToken] = useReducer(updateDropdownReducer, {
    selectedToken: undefined,
    dropdownLoading: true,
    inputLoading: true,
  });
  const [inputEvent, updateInputEvent] = useReducer(updateInputReducer, {
    amountValue: undefined,
    fiatValue: '$-',
    invalid: false,
    invalidText: undefined,
    isInputLoading: true,
  });
  const [selectedToken, setSelectToken] = useState<string | undefined>(
    tokenArray ? tokenArray[0] : undefined
  );
  const [priceValue, setPrice] = useState({
    loading: true,
    amountValue: '0',
    fiatValue: '$-',
  });

  function handleSelectTolerance(value: string) {
    console.log(`log:tolerance`, value);
    setSelectToken(value);
  }
  const handleInputChange = (value: string, selectedToken: SwapDataType) => {
    if (!value) {
      updateInputEvent({
        type: SwapValueType.NOVALUE,
        amountValue: '0',
        fiatValue: '$-',
        invalid: true,
        invalidText: 'Please enter a value.',
      });
    }
    if (value) {
      const decimalInput = new Decimal(value);
      const decimalDefault = new Decimal(selectedToken.amountValue);
      if (!decimalInput.isPositive()) {
        updateInputEvent({
          type: SwapValueType.NOTPOSITIVE,
          amountValue: selectedToken.amountValue,
          fiatValue: selectedToken.fiatValue,
          invalid: true,
          invalidText: 'Please enter a positive value.',
        });
      }
      if (decimalInput.toNumber() > decimalDefault.toNumber()) {
        updateInputEvent({
          type: SwapValueType.OVERMAXIMUM,
          amountValue: selectedToken.amountValue,
          fiatValue: selectedToken.fiatValue,
          invalid: true,
          invalidText: `Please enter a value less than ${selectedToken.amountValue}.`,
        });
      }
      if (
        !(decimalInput.toNumber() > decimalDefault.toNumber()) &&
        decimalInput.isPositive()
      ) {
        updateInputEvent({
          type: SwapValueType.VALID,
          amountValue: value,
          fiatValue: decimalInput.div(0.05).toString(),
          invalid: false,
          invalidText: undefined,
        });
      }
    }
  };
  const handleFromDropdownChange: handleSwapDropdown = (value) => {
    if (value) {
      updateInputEvent({
        type: SwapValueType.UPDATE,
        isInputLoading: false,
        invalid: false,
        amountValue: value.amountValue,
        fiatValue: value.fiatValue,
      });
      updateFromToken({
        selectedToken: value,
      });
    }
  };
  const handleToDropdownChange: handleSwapDropdown = (value) => {
    if (value) {
      updateToToken({
        selectedToken: value,
      });
    }
  };
  const handleSwapSwitch = useCallback(() => {
    updateFromToken({
      selectedToken: toToken.selectedToken,
    });
    updateToToken({
      selectedToken: fromToken.selectedToken,
    });
    if (toToken.selectedToken)
      updateInputEvent({
        type: SwapValueType.INITIAL,
        isInputLoading: false,
        invalid: false,
        amountValue: toToken.selectedToken.amountValue,
        fiatValue: toToken.selectedToken.fiatValue,
      });
  }, [fromToken.selectedToken, toToken.selectedToken]);
  const handleSubmit = () => {
    console.log('submit');
  };

  useEffect(() => {
    const formatData = chainList.map(
      ({ chainName, label, value, symbol, icon, amountValue, fiatValue }) => ({
        name: chainName,
        label,
        value,
        symbol,
        icon,
        amountValue,
        fiatValue,
      })
    );
    setTimeout(() => {
      setChainData(formatData);
    }, 800);
  }, []);
  useEffect(() => {
    if (chainData.length > 0) {
      updateFromToken({
        selectedToken: chainData[0],
        dropdownLoading: false,
      });
      updateToToken({
        selectedToken: chainData[1],
        dropdownLoading: false,
        inputLoading: false,
      });
      updateInputEvent({
        type: SwapValueType.INITIAL,
        isInputLoading: false,
        invalid: false,
        amountValue: chainData[0].amountValue,
        fiatValue: chainData[0].fiatValue,
      });
    }
  }, [chainData]);
  useEffect(() => {
    if (fromToken.selectedToken && toToken.selectedToken) {
      const decimalValue = new Decimal(fromToken.selectedToken.amountValue);
      setPrice({
        loading: false,
        amountValue: decimalValue
          .mul(toToken.selectedToken.amountValue)
          .div(decimalValue)
          .div(100)
          .toFixed(5),
        fiatValue:
          '$' +
          decimalValue
            .div(toToken.selectedToken.amountValue)
            .mul(100)
            .toFixed(4),
      });
    }
  }, [fromToken.selectedToken, toToken.selectedToken]);

  return (
    <Box width="500px" mx="auto" mb="60px">
      <SwapView
        dropdownData={chainData}
        fromDropdownLoading={fromToken.dropdownLoading}
        fromInputLoading={inputEvent.isInputLoading}
        fromToken={fromToken.selectedToken}
        toDropdownLoading={toToken.dropdownLoading}
        toInputLoading={toToken.inputLoading}
        toToken={toToken.selectedToken}
        amountValue={inputEvent.amountValue}
        fiatValue={inputEvent.fiatValue}
        settingToken={selectedToken}
        tokenArray={tokenArray}
        priceValue={priceValue}
        submitDisabled={false}
        onSelectSetting={handleSelectTolerance}
        onAmountInputChange={(value) => {
          if (fromToken.selectedToken)
            handleInputChange(value, fromToken.selectedToken);
        }}
        onFromDropdownChange={handleFromDropdownChange}
        onToDropdownChange={handleToDropdownChange}
        onSwapSwitch={handleSwapSwitch}
        onSwapSubmit={handleSubmit}
      />
    </Box>
  );
};
