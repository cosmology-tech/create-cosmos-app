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
  const color = checked ? '$purple600' : '$blackAlpha600';

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
      borderColor={checked ? '$purple600' : '$blackAlpha200'}
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
      <Box color={color}>
        {typeof icon === 'string' ? (
          <Icon name={icon as IconName} color={color} size="$lg" />
        ) : (
          icon
        )}
      </Box>
      <Text color={color} fontSize="14px" fontWeight="500">
        {children}
      </Text>
    </Box>
  );
};
