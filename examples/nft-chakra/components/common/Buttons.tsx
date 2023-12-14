import { useColorModeValue, Button } from '@chakra-ui/react';
import { useColor } from 'hooks';
import React, { ReactNode } from 'react';

export const SimpleButton = ({
  content,
  mr,
  width,
  onClick,
  leftIcon,
  isBoldText,
  visible = true,
}: {
  content: string | React.ReactElement;
  mr?: string;
  width?: string;
  onClick?: () => void;
  visible?: boolean;
  leftIcon?: React.ReactElement;
  isBoldText?: boolean;
}) => {
  const { textColor, bgSimpleBtnColor } = useColor();

  return (
    <Button
      mr={mr}
      px="10px"
      h="32px"
      w={width || 'auto'}
      visibility={visible ? 'visible' : 'hidden'}
      fontWeight="600"
      fontSize="14px"
      bg={bgSimpleBtnColor}
      color={isBoldText ? textColor.primary : textColor.secondary}
      onClick={onClick}
      leftIcon={leftIcon}
      borderRadius="4px"
      _hover={{
        opacity: 0.8,
      }}
      _active={{
        opacity: 0.8,
      }}
    >
      {content}
    </Button>
  );
};

export const NormalButton = ({
  type,
  size,
  onClick,
  text,
  mr,
  disabled,
  isLoading = false,
  leftIcon,
}: {
  type: 'solid' | 'outline';
  size: { w: string; h: string };
  onClick?: () => void;
  text: string;
  mr?: string;
  disabled?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactElement;
}) => {
  const baseStyle = {
    solid: {
      color: useColorModeValue('#FFF', '#1D2024'),
      backgroundColor: useColorModeValue('#2C3137', '#EEF2F8'),
    },
    outline: {
      color: useColorModeValue('#2C3137', '#EEF2F8'),
      border: `2px solid ${useColorModeValue('#2C3137', '#EEF2F8')}`,
      backgroundColor: 'transparent',
    },
  };

  const isDisabledState = isLoading || disabled;

  return (
    <Button
      mr={mr}
      w={size.w}
      h={size.h}
      isDisabled={isDisabledState}
      fontWeight="600"
      fontSize="14px"
      css={{ ...baseStyle[type] }}
      onClick={onClick}
      leftIcon={leftIcon}
      borderRadius="4px"
      isLoading={isLoading}
      _hover={{
        opacity: isDisabledState ? 0.6 : 0.8,
      }}
      _active={{
        opacity: isDisabledState ? 0.6 : 0.8,
      }}
      _disabled={{
        opacity: 0.6,
        cursor: 'not-allowed',
      }}
    >
      {text}
    </Button>
  );
};

export const SemiLargeButton = ({
  width,
  isLoading,
  handleClick,
  disabled,
  btnContent,
  leftIcon,
  mb,
}: {
  width: string;
  btnContent?: string | ReactNode;
  isLoading?: boolean;
  handleClick?: () => void;
  disabled?: boolean;
  leftIcon?: React.ReactElement;
  mb?: string;
}) => {
  return (
    <Button
      isLoading={isLoading}
      isDisabled={isLoading || disabled}
      onClick={handleClick}
      _hover={{
        opacity: isLoading || disabled ? 1 : 0.9,
      }}
      _active={{
        opacity: isLoading || disabled ? 1 : 0.9,
      }}
      _disabled={{
        cursor: 'not-allowed',
        background: '#CBD3DD',
        color: '#697584',
      }}
      leftIcon={leftIcon}
      w={width}
      h="48px"
      mb={mb}
      bgColor={useColorModeValue('#2C3137', '#EEF2F8')}
      borderRadius="4px"
      fontWeight="600"
      fontSize="14px"
      lineHeight="16px"
      color={useColorModeValue('#FFF', '#1D2024')}
    >
      {btnContent}
    </Button>
  );
};

export const LargeButton = ({
  width,
  isLoading,
  handleClick,
  disabled,
  btnContent,
  rightIcon,
}: {
  width: string;
  btnContent?: string | ReactNode;
  isLoading?: boolean;
  handleClick?: () => void;
  disabled?: boolean;
  rightIcon?: React.ReactElement;
}) => {
  return (
    <Button
      isLoading={isLoading}
      isDisabled={isLoading || disabled}
      onClick={handleClick}
      rightIcon={rightIcon}
      _hover={{
        opacity: isLoading || disabled ? 1 : 0.9,
      }}
      _active={{
        opacity: isLoading || disabled ? 1 : 0.9,
      }}
      _disabled={{
        cursor: 'not-allowed',
        background: '#CBD3DD',
        color: '#697584',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
      }}
      w={width}
      h="68px"
      bgColor={useColorModeValue('#2C3137', '#EEF2F8')}
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.3)"
      borderRadius="6px"
      fontWeight="semibold"
      fontSize="18px"
      color={useColorModeValue('#FFF', '#1D2024')}
    >
      {btnContent}
    </Button>
  );
};
