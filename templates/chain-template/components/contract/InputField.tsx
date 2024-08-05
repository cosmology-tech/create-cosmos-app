import { Box, Text } from '@interchain-ui/react';

const InputField = ({
  children,
  title,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Box display="flex" flexDirection="column" gap="10px">
      <Text color="$blackAlpha600" fontSize="16px" fontWeight="700">
        {title}
      </Text>
      {children}
    </Box>
  );
};

const Description = ({ children }: { children: string }) => {
  return (
    <Text color="$blackAlpha500" fontSize="12px" fontWeight="500">
      {children}
    </Text>
  );
};

InputField.Description = Description;

export { InputField };
