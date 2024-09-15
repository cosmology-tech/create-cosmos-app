import { Box, Text } from '@interchain-ui/react';

const InputField = ({
  children,
  title,
  required = false,
}: {
  title: string;
  children: React.ReactNode;
  required?: boolean;
}) => {
  return (
    <Box display="flex" flexDirection="column" gap="10px">
      <Text color="$blackAlpha600" fontSize="16px" fontWeight="700">
        {title}{' '}
        {required && (
          <Text as="span" color="$red600" fontSize="16px">
            *
          </Text>
        )}
      </Text>
      {children}
    </Box>
  );
};

const Description = ({
  children,
  intent = 'default',
}: {
  children: string;
  intent?: 'error' | 'default';
}) => {
  return (
    <Text
      color={intent === 'error' ? '$red600' : '$blackAlpha500'}
      fontSize="12px"
      fontWeight="500"
    >
      {children}
    </Text>
  );
};

InputField.Description = Description;

export { InputField };
