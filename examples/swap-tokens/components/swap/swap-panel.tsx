import { Box, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { useTheme } from '@cosmology-ui/theme';
import React, { useEffect, useState } from 'react';

import { SwapControlDropdownButton, SwapDropdown } from './swap-dropdown';
import { SwapEditableInput, SwapInputControlPanel } from './swap-input';
import { SwapSkeletonInputPanel } from './swap-skeleton';
import { SwapControlPanelType, SwapInputConfig, SwapType } from './type';

interface SwapInputPanel extends SwapInputConfig {
  displayPanel: boolean;
}

export const SwapPanelBaseStyle = (theme: string) => {
  return {
    px: 5,
    py: 4,
    w: 'full',
    position: 'relative',
    borderRadius: 'lg',
    bg: `swap-dropdown-background-color-${theme}`,
    color: `swap-panel-text-color-${theme}`,
    '>.swap-header': {
      w: 'full',
      minH: 7,
      mb: 2,
      justifyContent: 'space-between',
      alignItems: 'center',
      color: `swap-panel-header-color-${theme}`,
      '>.swap-input-control-panel': {
        justifyContent: 'end',
        alignItems: 'center',
        '>.swap-available-value': {
          alignItems: 'center',
          fontWeight: 'semibold',
          '>p': { color: `swap-panel-available-value-color-${theme}`, mr: 0.5 },
          '>span': {
            color: `swap-panel-header-color-${theme}`,
            mr: 2
          },
          '>.swap-available-value-skeleton': {
            pr: 1.5,
            '>:first-of-type': {
              w: 12,
              h: 5,
              borderRadius: 'base'
            }
          }
        },
        '>button': {
          py: 0.5,
          px: 2,
          ml: 2.5,
          w: 'fit-content',
          h: 'fit-content',
          bg: `swap-panel-input-control-button-background-color-${theme}`,
          color: `swap-panel-input-control-button-color-${theme}`
        }
      }
    },
    '>.swap-control-panel-box': {
      display: 'flex',
      justifyContent: 'end',
      alignItems: 'center',
      w: 'full',
      '>.swap-control-dropdown-button': {
        flex: 1,
        display: 'flex',
        justifyContent: 'start',
        minW: 'fit-content',
        w: 'full',
        h: 14,
        '>:first-of-type': {
          w: 12,
          h: 12,
          mr: 4,
          '>img': {
            w: 'full'
          }
        },
        '>:last-child>:first-of-type': {
          display: 'flex',
          alignItems: 'center',
          fontWeight: 'semibold',
          fontSize: '2xl',
          lineHeight: 'none',
          mb: 1,
          '>svg': {
            ml: 2
          }
        },
        '>:last-child>:last-child': {
          textAlign: 'start',
          fontSize: 'sm',
          fontWeight: 'normal',
          lineHeight: 'none',
          opacity: 0.7
        }
      },
      '>.swap-skeleton-dropdown-button': {
        flex: 1,
        alignItems: 'center',
        '>:first-of-type': {
          w: 12,
          h: 12
        },
        '>.swap-dropdown-control-panel-skeleton': {
          justifyContent: 'center',
          alignItems: 'start',
          '>:first-of-type': {
            w: 28,
            h: 5,
            borderRadius: 'base'
          },
          '>:last-of-type': {
            w: 20,
            h: 4,
            borderRadius: 'base'
          }
        }
      },
      '>.swap-input-panel': {
        flex: 1,
        justifyContent: 'end',
        alignItems: 'center',
        overflow: 'hidden',
        '>.swap-editable-input-box': {
          w: 'full',
          textAlign: 'end',
          '>.swap-editable-input': {
            fontSize: 'xl',
            w: 'full',
            h: 'fit-content',
            p: 0,
            textAlign: 'end',
            border: 'none',
            borderRadius: 'none',
            _focus: {
              boxShadow: 'none'
            },
            _focusVisible: {
              boxShadow: 'none'
            },
            _invalid: {
              boxShadow: 'none',
              color: `swap-editable-input-invalid-color-${theme}`
            }
          },
          '>.swap-editable-text': {
            overflow: 'scroll',
            scrollbarWidth: 'none', // for firefox
            '::-webkit-scrollbar': {
              display: 'none' // for chrome
            },
            fontSize: '2xl',
            fontWeight: 'semibold',
            lineHeight: 'none',
            pb: 0.5,
            whiteSpace: 'nowrap'
          },
          '>.swap-fiat-text': {
            overflow: 'scroll',
            scrollbarWidth: 'none', // for firefox
            '::-webkit-scrollbar': {
              display: 'none' // for chrome
            },
            color: 'gray.500',
            fontSize: 'sm',
            lineHeight: 'normal',
            whiteSpace: 'nowrap'
          }
        }
      },
      '>.swap-skeleton-input-panel': {
        '>.swap-dropdown-control-panel-skeleton': {
          justifyContent: 'center',
          alignItems: 'end',
          '>:first-of-type': {
            w: 24,
            h: 5,
            borderRadius: 'base'
          },
          '>:last-of-type': {
            w: 16,
            h: 4,
            borderRadius: 'base'
          }
        }
      },
      '&.swap-control-panel-hidden': {
        visibility: 'hidden'
      },
      '>.swap-display-box': {
        flex: 1,
        w: 'full',
        maxW: 52,
        textAlign: 'end',
        '>.swap-amount-text': {
          w: 'full',
          overflowX: 'scroll',
          scrollbarWidth: 'none', // for firefox
          '::-webkit-scrollbar': {
            display: 'none' // for chrome
          },
          fontSize: '2xl',
          fontWeight: 'semibold',
          lineHeight: 'none',
          pb: 0.5,
          whiteSpace: 'nowrap'
        },
        '>.swap-fiat-text': {
          overflowX: 'scroll',
          whiteSpace: 'nowrap',
          scrollbarWidth: 'none', // for firefox
          '::-webkit-scrollbar': {
            display: 'none' // for chrome
          },
          color: 'gray.500',
          fontSize: 'sm',
          lineHeight: 'normal'
        }
      }
    },
    '>.swap-dropdown-box': {
      w: 'full',
      mx: -5,
      position: 'absolute',
      top: 12,
      zIndex: 10
    }
  };
};

/**
 * The panel of swap dropdown and input.
 * @see {@link SwapControlPanelType}
 */
export const SwapControlPanel = ({
  swapType,
  inputConfig,
  dropdownConfig,
  selectedToken,
  onDropdownChange,
  onAmountInputChange
}: SwapControlPanelType) => {
  const { theme } = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { dropdownLoading, dropdownData } = dropdownConfig;
  const [inputControlPanel, setInputControlPanel] = useState<SwapInputPanel>({
    ...inputConfig,
    displayPanel: swapType === SwapType.from ? true : false
  });

  useEffect(() => {
    if (swapType === SwapType.from)
      setInputControlPanel({
        ...inputConfig,
        displayPanel: true
      });
    if (swapType === SwapType.to)
      setInputControlPanel({
        ...inputConfig,
        displayPanel: false
      });
  }, [inputConfig, swapType]);

  return (
    <Box
      className={`swap-${swapType}-control-panel`}
      sx={SwapPanelBaseStyle(theme)}
    >
      <Flex className="swap-header">
        <Text>{swapType}</Text>
        <SwapInputControlPanel
          displayPanel={inputControlPanel.displayPanel}
          loading={inputControlPanel.inputLoading}
          amount={selectedToken?.balanceDisplayAmount}
          onAmountInputChange={onAmountInputChange}
        />
      </Flex>
      <Flex
        className={`swap-control-panel-box ${
          isOpen ? 'swap-control-panel-hidden' : ''
        }`}
      >
        <SwapControlDropdownButton
          loading={dropdownLoading}
          selectedToken={selectedToken}
          onOpen={onOpen}
        />
        {inputControlPanel.displayPanel ? (
          inputControlPanel.inputLoading ? (
            <SwapSkeletonInputPanel />
          ) : (
            <Flex className="swap-input-panel">
              <SwapEditableInput
                id="swap-amount-input"
                inputAmount={inputControlPanel.inputAmount}
                inputDollarValue={inputControlPanel.inputDollarValue}
                invalid={inputControlPanel.invalid}
                invalidText={inputControlPanel.invalidText}
                selectedToken={selectedToken}
                onAmountInputChange={onAmountInputChange}
              />
            </Flex>
          )
        ) : undefined}
        {!inputControlPanel.displayPanel ? (
          dropdownLoading ? (
            <SwapSkeletonInputPanel />
          ) : (
            <Box className="swap-display-box">
              <Text className="swap-amount-text">
                {selectedToken && selectedToken.currentDisplayAmount
                  ? selectedToken.currentDisplayAmount
                  : '0'}
              </Text>
              <Text className="swap-fiat-text">
                {selectedToken && selectedToken.currentDollarValue
                  ? `~ ${selectedToken.currentDollarValue}`
                  : undefined}
              </Text>
            </Box>
          )
        ) : undefined}
      </Flex>

      <Box className="swap-dropdown-box">
        <SwapDropdown
          isOpen={isOpen}
          selectedToken={selectedToken}
          dropdownData={dropdownData}
          onClose={onClose}
          onDropdownChange={onDropdownChange}
        />
      </Box>
    </Box>
  );
};
