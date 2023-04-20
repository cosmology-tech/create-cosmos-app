import { Button, Flex, IconButton, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { CgClose } from 'react-icons/cg';
import { RiSettings4Fill } from 'react-icons/ri';

import {
  SwapSettingType,
  SwapSlippageButtonType,
  SwapToggleSlippagesListButtonType
} from './type';

const SwapToggleSlippagesListButton = ({
  slippagesListOpen,
  toggleOpenSlippagesList
}: SwapToggleSlippagesListButtonType) => {
  return (
    <IconButton
      variant="unstyled"
      className="swap-toggle-button"
      aria-label="swap-setting"
      icon={slippagesListOpen ? <CgClose /> : <RiSettings4Fill />}
      onClick={toggleOpenSlippagesList}
    />
  );
};

const SwapSlippageButton = ({
  selectedSlippage,
  label,
  setSelectedSlippage,
  onCloseSettingList
}: SwapSlippageButtonType) => {
  return (
    <Button
      variant="unstyled"
      className={`swap-slippage-button ${
        selectedSlippage === label ? 'swap-slippage-selected' : ''
      }`}
      onClick={() => {
        setSelectedSlippage(label);
        onCloseSettingList();
      }}
    >
      {label}
    </Button>
  );
};

export const SwapSlippage = ({
  slippageConfig,
  setSelectedSlippage
}: SwapSettingType) => {
  const {
    isOpen: settingListOpen,
    onToggle: toggleOpenSettingList,
    onClose: onCloseSettingList
  } = useDisclosure();

  return (
    <Flex className="swap-slippage">
      <Flex
        className={`swap-slippage-list-box ${
          settingListOpen ? 'swap-slippage-list' : ''
        }`}
      >
        {slippageConfig.slippages.map((label) => (
          <SwapSlippageButton
            key={label}
            label={label}
            selectedSlippage={slippageConfig.selectedSlippage}
            setSelectedSlippage={setSelectedSlippage}
            onCloseSettingList={onCloseSettingList}
          />
        ))}
      </Flex>
      <SwapToggleSlippagesListButton
        slippagesListOpen={settingListOpen}
        toggleOpenSlippagesList={toggleOpenSettingList}
      />
    </Flex>
  );
};
