import {
  Box,
  BoxProps,
  Icon,
  IconName,
  IconProps,
  Spinner,
} from '@interchain-ui/react';
import { useState, useRef, useEffect } from 'react';

type Variant = 'primary' | 'outline' | 'text';
type ButtonIcon = IconName | JSX.Element;
type Size = 'sm' | 'md';

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
  size?: Size;
} & BoxProps;

const sizeStyles: Record<Size, BoxProps> = {
  sm: {
    py: '6px',
    px: '12px',
    height: '32px',
    fontSize: '14px',
  },
  md: {
    py: '10px',
    px: '20px',
    height: '40px',
    fontSize: '16px',
  },
};

const variantStyles: Record<Variant, BoxProps> = {
  outline: {
    borderWidth: '1px',
    borderStyle: '$solid',
    borderColor: '$blackAlpha200',
    color: '$blackAlpha500',
    backgroundColor: {
      hover: '$blackAlpha100',
      base: '$background',
    },
  },
  text: {
    color: {
      base: '$blackAlpha500',
      hover: '$blackAlpha600',
    },
    backgroundColor: 'transparent',
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
  text: {
    color: '$blackAlpha300',
  },
  primary: {
    backgroundColor: '$purple200',
  },
};

export const Button = ({
  children,
  onClick,
  size = 'md',
  variant = 'outline',
  disabled = false,
  isLoading = false,
  iconColor = 'inherit',
  iconSize = '$md',
  leftIcon,
  rightIcon,
  ...rest
}: ButtonProps) => {
  const [buttonWidth, setButtonWidth] = useState<number>(0);
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
      borderRadius="4px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap="6px"
      cursor={disabled || isLoading ? 'not-allowed' : 'pointer'}
      fontWeight="500"
      transition="all 0.15s ease-in-out"
      border="none"
      width={isLoading && buttonWidth ? `${buttonWidth}px` : '$fit'}
      attributes={{ onClick: disabled || isLoading ? undefined : onClick }}
      {...sizeStyles[size]}
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
