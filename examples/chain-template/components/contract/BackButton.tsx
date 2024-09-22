import { Box, Icon, Text } from '@interchain-ui/react';

export const BackButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Box
      display="flex"
      gap="6px"
      alignItems="center"
      cursor="pointer"
      attributes={{ onClick }}
    >
      <Icon
        color="$text"
        name="arrowRightLine"
        attributes={{ transform: 'rotate(180deg)' }}
      />
      <Text color="$text" fontSize="16px" fontWeight="500">
        Back
      </Text>
    </Box>
  );
};
