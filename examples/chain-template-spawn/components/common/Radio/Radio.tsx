import { Box, useTheme } from '@interchain-ui/react';
import styles from './Radio.module.css';

type RadioProps = {
  children: React.ReactNode;
  value: string;
  name?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Radio = ({
  children,
  value,
  checked,
  name,
  onChange,
}: RadioProps) => {
  const { theme } = useTheme();

  return (
    <Box
      as="label"
      color="$blackAlpha600"
      fontSize="14px"
      fontWeight="500"
      lineHeight="22px"
      display="flex"
      alignItems="center"
      gap="8px"
      cursor="pointer"
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
      />
      {children}
    </Box>
  );
};
