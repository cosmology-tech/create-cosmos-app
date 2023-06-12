import { Box } from '@chakra-ui/react';
import starsIcon from 'assets/stars.png';
import Image from 'next/image';

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
      <Image src={starsIcon} alt="stars_icon" height="100%" width="100%" />
    </Box>
  );
};
