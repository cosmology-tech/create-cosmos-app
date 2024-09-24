import { Box, Icon, IconName, Text, useTheme } from '@interchain-ui/react';
import styles from './Radio.module.css';

type RadioProps = {
  children: React.ReactNode;
  value: string;
  icon?: IconName | React.ReactNode;
  name?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Radio = ({
  children,
  value,
  checked,
  name,
  icon,
  onChange,
}: RadioProps) => {
  const { theme } = useTheme();

  const checkedColor = theme === 'light' ? '$purple600' : '$purple400';
  const textColor = checked ? checkedColor : '$blackAlpha600';
  const borderColor = checked ? checkedColor : '$blackAlpha200';

  return (
    <Box
      as="label"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      flex="1 1 auto"
      gap="6px"
      cursor="pointer"
      position="relative"
      width="100%"
      height="100px"
      borderRadius="4px"
      borderWidth="1px"
      borderStyle="solid"
      borderColor={borderColor}
      padding="10px"
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={`${styles.radio} ${
          theme === 'dark' ? styles.radioDark : ''
        }`}
        style={{
          position: 'absolute',
          top: '6px',
          right: '6px',
        }}
      />
      <Box color={textColor}>
        {typeof icon === 'string' ? (
          <Icon name={icon as IconName} color={textColor} size="$lg" />
        ) : (
          icon
        )}
      </Box>
      <Text color={textColor} fontSize="14px" fontWeight="500">
        {children}
      </Text>
    </Box>
  );
};
