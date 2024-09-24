import { Box, Divider, Icon, Text } from '@interchain-ui/react';
import { useCopyToClipboard } from '@/hooks';

type TxSuccessCardProps = {
  title: string;
  description?: string;
  infoItems: TxInfoItem[];
  footer: React.ReactNode;
  show?: boolean;
};

export const TxSuccessCard = ({
  title,
  description,
  infoItems,
  footer,
  show = true,
}: TxSuccessCardProps) => {
  return (
    <Box
      display={show ? 'flex' : 'none'}
      width="420px"
      mx="auto"
      p="20px"
      flexDirection="column"
      alignItems="center"
      gap="20px"
      borderRadius="4px"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="$blackAlpha200"
    >
      <Box position="relative">
        <Box
          width="50px"
          height="50px"
          borderRadius="$full"
          bg="$green600"
          opacity="0.1"
        />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <Icon name="checkLine" size="$6xl" color="$green400" />
        </Box>
      </Box>

      <Box textAlign="center">
        <Text color="$blackAlpha600" fontSize="24px" fontWeight="700">
          {title}
        </Text>

        {description && (
          <Text
            color="$blackAlpha500"
            fontSize="12px"
            fontWeight="500"
            attributes={{ mt: '8px' }}
          >
            {description}
          </Text>
        )}
      </Box>

      <Divider opacity="0.4" />

      <Box width="$full">
        {infoItems.map((item) => (
          <TxInfoItem key={item.label} {...item} />
        ))}
      </Box>

      <Divider opacity="0.4" />

      {footer}
    </Box>
  );
};

export type TxInfoItem = {
  label: string;
  displayValue: string;
  allowCopy?: boolean;
  actualValue?: string;
};

const TxInfoItem = ({
  label,
  displayValue,
  actualValue,
  allowCopy = true,
}: TxInfoItem) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <Box
      display="flex"
      p="10px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text color="$blackAlpha500" fontSize="16px" fontWeight="500">
        {label}
      </Text>
      <Box display="flex" alignItems="center" gap="10px">
        <Text color="$blackAlpha600" fontSize="16px" fontWeight="500">
          {displayValue}
        </Text>
        {allowCopy && (
          <Box
            attributes={{
              onClick: () => copyToClipboard(actualValue ?? displayValue),
            }}
            cursor="pointer"
            display="flex"
            alignItems="center"
          >
            <Icon
              size="$lg"
              name={isCopied ? 'checkLine' : 'copy'}
              color={isCopied ? '$green600' : '$blackAlpha500'}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};
