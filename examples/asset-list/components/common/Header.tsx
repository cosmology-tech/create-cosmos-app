import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  Icon,
  useColorMode,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { dependencies } from '@/config';

const stacks = ['CosmosKit', 'Next.js'];

const osmojs = dependencies[0];

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
            {' + '}
            <Link href={osmojs.href} target="_blank" rel="noreferrer">
              {osmojs.title}
            </Link>
          </Text>
        </Heading>
      </Box>
    </>
  );
};
