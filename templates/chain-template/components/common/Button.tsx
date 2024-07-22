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
    borderWidth: '1px',
    borderStyle: '$solid',
    borderColor: '$blackAlpha200',
    color: '$blackAlpha500',
    backgroundColor: {
      hover: '$blackAlpha100',
      base: 'transparent',
    },
  },
  primary: {
    color: '$white',
    backgroundColor: {
      hover: '$purple400',
      base: '$purple600',
    },
  },
};

const disabledStyles: Record<Variant, BoxProps> = {
  outline: {
    color: '$blackAlpha300',
    backgroundColor: 'transparent',
  },
  primary: {
    backgroundColor: '$purple200',
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
        <Spinner
          size="$xl"
          color={variant === 'primary' ? '$white' : '$textSecondary'}
        />
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
