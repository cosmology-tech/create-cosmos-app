import { Box, Center, useDisclosure, useOutsideClick } from '@chakra-ui/react';
import { AnimateIconButton } from '@cosmology-ui/animation';
import { useTheme } from '@cosmology-ui/theme';
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
        transition: { duration: 0.1, ease: 'circInOut' }
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
        color: `swap-dropdowns-view-switch-button-text-color-${theme}`
      }
    }
  };
};

/**
 * From and to Panel with switch button.
 * @see {@link SwapDropdownsViewType}
 */
export const SwapDropdownsView = ({
  fromConfig,
  toConfig,
  onSwapSwitch,
  onFromDropdownChange,
  onToDropdownChange,
  onAmountInputChange
}: SwapDropdownsViewType) => {
  const { theme } = useTheme();
  const fromMenuRef = useRef<HTMLDivElement>(null);
  const toMenuRef = useRef<HTMLDivElement>(null);
  const { onClose: onFromMenuClose } = useDisclosure();
  const { onClose: onToMenuClose } = useDisclosure();

  useOutsideClick({
    ref: fromMenuRef,
    handler: onFromMenuClose
  });
  useOutsideClick({
    ref: toMenuRef,
    handler: onToMenuClose
  });

  return (
    <Box className="swap-dropdowns-view" sx={SwapDropdownsViewBaseStyle(theme)}>
      <SwapControlPanel
        swapType={SwapType.from}
        selectedToken={fromConfig.selectedToken}
        inputConfig={fromConfig.inputConfig}
        dropdownConfig={fromConfig.dropdownConfig}
        onDropdownChange={onFromDropdownChange}
        onAmountInputChange={onAmountInputChange}
      />
      <Center className="swap-switch-button-box">
        <SwapSwitchButton onSwapSwitch={onSwapSwitch} />
      </Center>
      <SwapControlPanel
        swapType={SwapType.to}
        selectedToken={toConfig.selectedToken}
        dropdownConfig={toConfig.dropdownConfig}
        onDropdownChange={onToDropdownChange}
      />
    </Box>
  );
};
