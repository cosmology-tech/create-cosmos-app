import { Box, BoxProps, Icon, IconName, IconProps } from '@interchain-ui/react';

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
} & BoxProps;

const variantStyles: Record<Variant, BoxProps> = {
  outline: {
    borderWidth: '2px',
    borderStyle: '$solid',
    borderColor: '#DDE2E9',
    color: '$textSecondary',
    backgroundColor: {
      hover: '#F3F5FA',
      base: 'transparent',
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

export const Button = ({
  children,
  onClick,
  variant = 'outline',
  disabled = false,
  iconColor = 'inherit',
  leftIcon,
  rightIcon,
  ...rest
}: ButtonProps) => {
  return (
    <Box
      as="button"
      py="10px"
      px="20px"
      height="40px"
      borderRadius="4px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap="6px"
      cursor="pointer"
      fontSize="16px"
      fontWeight="500"
      transition="all 0.15s ease-in-out"
      border="none"
      attributes={{ onClick: disabled ? undefined : onClick }}
      {...variantStyles[variant]}
      {...rest}
    >
      {typeof leftIcon === 'string' ? (
        <Icon name={leftIcon} size="$lg" color={iconColor} />
      ) : (
        leftIcon
      )}

      {children}

      {typeof rightIcon === 'string' ? (
        <Icon name={rightIcon} size="$lg" color={iconColor} />
      ) : (
        rightIcon
      )}
    </Box>
  );
};
