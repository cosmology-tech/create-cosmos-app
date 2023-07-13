import { Box, Image } from '@chakra-ui/react';

export const StarsIcon = ({
  ml,
  boxSize,
  yOffset,
}: {
  ml?: string;
  boxSize: string;
  yOffset?: string;
}) => {
  return (
    <Box
      boxSize={boxSize}
      border="none"
      ml={ml}
      transform={`translateY(${yOffset})`}
      borderRadius="full"
      overflow="hidden"
    >
      <Image
        src="https://pbs.twimg.com/profile_images/1507391623914737669/U3fR7nxh_400x400.jpg"
        alt="stars_icon"
        height="100%"
        width="100%"
      />
    </Box>
  );
};
