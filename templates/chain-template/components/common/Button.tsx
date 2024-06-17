import {
  Box,
  BoxProps,
  Icon,
  IconName,
  IconProps,
  Spinner,
} from '@interchain-ui/react';
import { useState, useRef, useEffect } from 'react';

type Variant = 'primary' | 'outline';
type ButtonIcon = IconName | JSX.Element;

type ButtonProps = {
  children?: React.ReactNode;
  variant?: Variant;
  onClick?: () => void;
  disabled?: boolean;
  leftIcon?: ButtonIcon;
  rightIcon?: ButtonIcon;
  iconColor?: IconProps['color'];
  iconSize?: IconProps['size'];
  isLoading?: boolean;
} & BoxProps;

const variantStyles: Record<Variant, BoxProps> = {
  outline: {
    borderWidth: '2px',
    borderStyle: '$solid',
    borderColor: '#DDE2E9',
    color: '$textSecondary',
    backgroundColor: {
      hover: '#F3F5FA',
      base: '$white',
    },
  },
  primary: {
    color: '$white',
    backgroundColor: {
      hover: '#9D4FFF',
      base: '#7310FF',
    },
  },
};

const disabledStyles: Record<Variant, BoxProps> = {
  outline: {
    color: '#DDE2E9',
    backgroundColor: '$white',
  },
  primary: {
    backgroundColor: '#E5D4FB',
  },
};

export const Button = ({
  children,
  onClick,
  variant = 'outline',
  disabled = false,
  isLoading = false,
  iconColor = 'inherit',
  iconSize = '$md',
  leftIcon,
  rightIcon,
  ...rest
}: ButtonProps) => {
  const [buttonWidth, setButtonWidth] = useState<string | number>('auto');
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // maintain button width when loading
    const updateButtonWidth = () => {
      if (buttonRef.current && !isLoading) {
        setButtonWidth(buttonRef.current.offsetWidth);
      }
    };

    updateButtonWidth();

    window.addEventListener('resize', updateButtonWidth);
    return () => window.removeEventListener('resize', updateButtonWidth);
  }, [isLoading, children, leftIcon, rightIcon, iconSize]);

  return (
    <Box
      as="button"
      ref={buttonRef}
      py="10px"
      px="20px"
      height="40px"
      borderRadius="4px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap="6px"
      cursor={disabled || isLoading ? 'not-allowed' : 'pointer'}
      fontSize="16px"
      fontWeight="500"
      transition="all 0.15s ease-in-out"
      border="none"
      width={isLoading ? `${buttonWidth}px` : 'auto'}
      attributes={{ onClick: disabled || isLoading ? undefined : onClick }}
      {...variantStyles[variant]}
      {...rest}
      {...(disabled && disabledStyles[variant])}
    >
      {isLoading ? (
        <Spinner size="$xl" color="$textSecondary" />
      ) : (
        <>
          {typeof leftIcon === 'string' ? (
            <Icon name={leftIcon} size={iconSize} color={iconColor} />
          ) : (
            leftIcon
          )}

          {children}

          {typeof rightIcon === 'string' ? (
            <Icon name={rightIcon} size={iconSize} color={iconColor} />
          ) : (
            rightIcon
          )}
        </>
      )}
    </Box>
  );
};