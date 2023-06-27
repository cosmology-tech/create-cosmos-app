import { HStack, Text } from '@chakra-ui/react';
import { useColor } from 'hooks';

export const ProfileStat = ({
  name,
  value,
}: {
  name: string;
  value: number | string;
}) => {
  const { textColor } = useColor();
  return (
    <HStack spacing="8px">
      <Text fontWeight="400" fontSize="12px" color={textColor.secondary}>
        {name}
      </Text>
      <Text fontWeight="600" fontSize="14px" color={textColor.primary}>
        {value}
      </Text>
    </HStack>
  );
};
