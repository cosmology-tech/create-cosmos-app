import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Icon,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const stacks = ['CosmosKit', 'Next.js'];

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex justifyContent="end" mb={4}>
        <Button variant="outline" px={0} onClick={toggleColorMode}>
          <Icon
            as={colorMode === 'light' ? BsFillMoonStarsFill : BsFillSunFill}
          />
        </Button>
      </Flex>
      <Box textAlign="center">
        <Heading
          as="h1"
          fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
          fontWeight="extrabold"
          mb={3}
        >
          Create Cosmos App
        </Heading>
        <Heading
          as="h1"
          fontWeight="bold"
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
        >
          <Text as="span">Welcome to&nbsp;</Text>
          <Text
            as="span"
            color={useColorModeValue('primary.500', 'primary.200')}
          >
            {stacks.join(' + ')}
          </Text>
        </Heading>
      </Box>
    </>
  );
};
