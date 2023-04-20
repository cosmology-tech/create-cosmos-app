import { Box, Button, Divider, Flex, Text } from '@chakra-ui/react';
import { useTheme } from '@cosmology-ui/theme';
import React from 'react';

import { SwapDropdownsView } from './swap-dropdowns-view';
import { SwapPrice } from './swap-price';
import { SwapSlippage } from './swap-slippage';
import { SwapViewType } from './type';

export const SwapViewBaseStyle = (theme: string) => {
  return {
    '>.swap-divider': {
      borderColor: `swap-view-dropdown-background-color-${theme}`
    },
    '>.swap-tolerance-box': {
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 'sm',
      py: 3.5,
      '>.swap-tolerance-title': {
        flex: 1,
        color: `swap-view-header-text-color-${theme}`
      },
      '>.swap-tolerance-value': {
        color: `swap-view-price-text-color-${theme}`,
        fontWeight: 'bold',
        mr: 2
      },
      '>.swap-slippage': {
        w: 'fit-content',
        position: 'relative',
        '>.swap-slippage-list-box': {
          position: 'absolute',
          right: -2,
          transition: 'all 0.25s ease',
          visibility: 'hidden',
          opacity: 0.1,
          '&.swap-slippage-list': {
            visibility: 'visible',
            opacity: 1,
            right: 8
          },
          '>.swap-slippage-button': {
            h: 8,
            minW: 8,
            mr: 2,
            px: 3,
            display: 'flex',
            justifyContent: 'center',
            borderRadius: 'base',
            bg: `swap-setting-button-background-color-${theme}`,
            color: `swap-setting-button-text-color-${theme}`,
            _hover: {
              bg: `swap-setting-hover-button-background-color-${theme}`
            },
            '&.swap-slippage-selected': {
              bg: `swap-setting-selected-button-background-color-${theme}`,
              color: `swap-setting-selected-button-text-color-${theme}`,
              _hover: {
                bg: `swap-setting-selected-button-background-color-${theme}`,
                color: `swap-setting-selected-button-text-color-${theme}`
              }
            }
          }
        },
        '>.swap-toggle-button': {
          h: 8,
          w: 8,
          minW: 'fit-content',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: 'base',
          bg: `swap-setting-button-background-color-${theme}`,
          color: `swap-setting-button-text-color-${theme}`
        }
      }
    },
    '>.swap-price-box': {
      '>.swap-price': {
        justifyContent: 'space-between',
        alignItems: 'center',
        py: 3.5,
        '>.swap-price-title': {
          flex: 1,
          fontSize: 'sm',
          color: `swap-view-header-text-color-${theme}`
        },
        '>.swap-price-value': {
          fontSize: 'sm',
          '>.swap-skeleton-box': {
            alignItems: 'center',
            '>.swap-skeleton-amount': {
              width: 36,
              height: 4,
              mr: 5
            },
            '>.swap-price-fiat': {
              color: `swap-view-header-text-color-${theme}`
            },
            '>.swap-skeleton-fiat': {
              width: 14,
              height: 4
            }
          },
          '>.swap-price-amount': {
            mr: 5,
            fontWeight: 'semibold',
            color: `swap-view-price-text-color-${theme}`
          },
          '>.swap-price-fiat': {
            color: `swap-view-header-text-color-${theme}`
          },
          '>.swap-toggle-button': {
            h: 8,
            w: 8,
            ml: 9,
            minW: 'fit-content',
            borderRadius: 'base',
            bg: `swap-setting-button-background-color-${theme}`,
            color: `swap-setting-button-text-color-${theme}`,
            '&.swap-detail-button-open': {
              bg: `swap-setting-selected-button-background-color-${theme}`,
              color: `swap-setting-selected-button-text-color-${theme}`
            }
          }
        }
      },
      '>.swap-detail-animate': {
        '>.swap-price-detail-box': {
          mt: 10,
          my: 12,
          fontSize: 'sm',
          color: `swap-view-header-text-color-${theme}`,
          '>.swap-price-detail': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            '>.swap-price-value': {
              fontWeight: 'bold',
              textAlign: 'end',
              ml: 1
            },
            '&.swap-price-impact': {
              mb: 4
            },
            '&.swap-fee': {
              mb: 8
            },
            '&.swap-expected-output': {
              mb: 4
            },
            '&.swap-minimum-received': {
              mb: 8
            },
            '&.swap-route': {
              display: 'block',
              '>.swap-route-title': {
                mb: 4
              },
              '>.swap-route-details': {
                alignItems: 'center',
                color: `swap-view-header-text-color-${theme}`,
                '>.swap-route-sellToken': {
                  mr: 4,
                  '&.swap-route-icon': {
                    w: 7,
                    h: 7,
                    minW: 7,
                    minH: 7,
                    maxW: 7,
                    maxH: 7
                  }
                },
                '>.swap-route-divider-box': {
                  w: 'full',
                  mr: 4,
                  '>.swap-route-divider': {
                    border: '2px dashed',
                    borderColor: `swap-view-header-text-color-${theme}`
                  }
                },
                '>.swap-route-pool-box': {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  minW: 12,
                  h: 10,
                  '>.swap-route-icon': {
                    position: 'absolute',
                    w: 7,
                    h: 7,
                    minW: 7,
                    minH: 7,
                    maxW: 7,
                    maxH: 7,
                    '&.swap-route-icon-left': {
                      left: 0,
                      zIndex: 1
                    },
                    '&.swap-route-icon-right': {
                      right: 1,
                      zIndex: 2
                    }
                  }
                },
                '>.swap-route-fee': {
                  ml: 1,
                  mr: 4,
                  fontWeight: 'bold'
                },
                '>.swap-route-buyToken': {
                  '&.swap-route-icon': {
                    w: 7,
                    h: 7,
                    minW: 7,
                    minH: 7,
                    maxW: 7,
                    maxH: 7
                  }
                }
              }
            }
          }
        }
      }
    },
    '>.swap-submit-button': {
      w: 'full',
      h: 'fit-content',
      p: 0,
      py: 5,
      mt: 0.5,
      bg: `swap-view-submit-background-color-${theme}`,
      color: `swap-view-submit-text-color-${theme}`,
      boxShadow: `swap-view-submit-shadow-${theme}`,
      _hover: {
        bg: `swap-view-submit-hover-background-color-${theme}`
      },
      _active: {
        bg: `swap-view-submit-active-background-color-${theme}`,
        color: `swap-view-submit-active-text-color-${theme}`
      },
      _focus: {
        boxShadow: `swap-view-submit-focus-shadow-${theme}`
      },
      _disabled: {
        bg: `swap-view-submit-disabled-background-color-${theme}`,
        color: `swap-view-submit-disabled-text-color-${theme}`,
        _hover: {
          bg: `swap-view-submit-disabled-background-color-${theme}`
        },
        _active: {
          bg: `swap-view-submit-disabled-background-color-${theme}`
        },
        _focus: {
          boxShadow: 'none'
        }
      }
    }
  };
};

/**
 * TThe swap dropdowns and swap details.
 * @see {@link SwapViewType}
 */
export const SwapView = ({
  fromConfig,
  toConfig,
  slippageConfig,
  price,
  submitButtonConfig,
  onAmountInputChange,
  onFromDropdownChange,
  onToDropdownChange,
  onSwapSwitch,
  onSwapSubmit,
  setSelectedSlippage
}: SwapViewType) => {
  const { theme } = useTheme();
  return (
    <Box className="swap-view" sx={SwapViewBaseStyle(theme)}>
      <SwapDropdownsView
        fromConfig={fromConfig}
        toConfig={toConfig}
        onAmountInputChange={onAmountInputChange}
        onFromDropdownChange={onFromDropdownChange}
        onToDropdownChange={onToDropdownChange}
        onSwapSwitch={onSwapSwitch}
      />
      <Flex className="swap-tolerance-box">
        <Text className="swap-tolerance-title">Slippage tolerance</Text>
        <Text className="swap-tolerance-value">
          {slippageConfig.selectedSlippage}
        </Text>
        <SwapSlippage
          slippageConfig={slippageConfig}
          setSelectedSlippage={setSelectedSlippage}
        />
      </Flex>
      <Divider className="swap-divider" />
      <SwapPrice
        loading={price.loading}
        rate={price.rate}
        detail={price.detail}
      />
      <Button
        className="swap-submit-button"
        isDisabled={submitButtonConfig.disabled}
        isLoading={submitButtonConfig.loading}
        onClick={onSwapSubmit}
      >
        Swap
      </Button>
    </Box>
  );
};
