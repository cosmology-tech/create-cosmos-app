import { Box, Center, useDisclosure, useOutsideClick } from '@chakra-ui/react';
import { AnimateIconButton, useTheme } from '@cosmology-ui/react';
import React, { ReactNode, useRef, useState } from 'react';
import { ImArrowDown2 } from 'react-icons/im';
import { TbArrowsRightLeft } from 'react-icons/tb';

import { SwapControlPanel } from './swap-panel';
import { SwapDropdownsViewType, SwapSwitchButtonType, SwapType } from './type';

const SwapSwitchButton = ({ onSwapSwitch }: SwapSwitchButtonType) => {
  const [icon, setIcon] = useState<ReactNode>(<ImArrowDown2 />);
  return (
    <AnimateIconButton
      variant="unstyled"
      className="swap-switch-button"
      aria-label="swap-switch-button"
      icon={icon}
      onClick={onSwapSwitch}
      whileHover={{
        rotate: 90,
        scale: 1.1,
        transition: { duration: 0.1, ease: 'circInOut' },
      }}
      onHoverStart={() => setIcon(<TbArrowsRightLeft />)}
      onHoverEnd={() => setIcon(<ImArrowDown2 />)}
    />
  );
};

export const SwapDropdownsViewBaseStyle = (theme: string) => {
  return {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '>:first-of-type': { mb: 4 },
    '>.swap-switch-button-box': {
      position: 'absolute',
      zIndex: 2,
      '>.swap-switch-button': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'lg',
        w: 'fit-content',
        h: 'fit-content',
        p: 3,
        borderRadius: 'full',
        bg: `swap-dropdown-background-color-${theme}`,
        border: '3px solid',
        borderColor: `swap-dropdowns-view-switch-button-border-color-${theme}`,
        color: `swap-dropdowns-view-switch-button-text-color-${theme}`,
      },
    },
  };
};

/**
 * From and to Panel with switch button.
 * @see {@link SwapDropdownsViewType}
 */
export const SwapDropdownsView = ({
  fromToken,
  toToken,
  inputData,
  dropdownData,
  onSwapSwitch,
  onFromDropdownChange,
  onToDropdownChange,
  onAmountInputChange,
  loading,
}: SwapDropdownsViewType) => {
  const { theme } = useTheme();
  const fromMenuRef = useRef<HTMLDivElement>(null);
  const toMenuRef = useRef<HTMLDivElement>(null);
  const { onClose: onFromMenuClose } = useDisclosure();
  const { onClose: onToMenuClose } = useDisclosure();

  useOutsideClick({
    ref: fromMenuRef,
    handler: onFromMenuClose,
  });
  useOutsideClick({
    ref: toMenuRef,
    handler: onToMenuClose,
  });

  return (
    <Box className="swap-dropdowns-view" sx={SwapDropdownsViewBaseStyle(theme)}>
      <SwapControlPanel
        swapType={SwapType.from}
        selectedToken={fromToken}
        inputData={inputData}
        dropdownData={dropdownData}
        onDropdownChange={onFromDropdownChange}
        onAmountInputChange={onAmountInputChange}
        loading={loading}
      />
      <Center className="swap-switch-button-box">
        <SwapSwitchButton onSwapSwitch={onSwapSwitch} />
      </Center>
      <SwapControlPanel
        swapType={SwapType.to}
        selectedToken={toToken}
        inputData={inputData}
        dropdownData={dropdownData}
        onDropdownChange={onToDropdownChange}
        onAmountInputChange={onAmountInputChange}
        loading={loading}
      />
    </Box>
  );
};
