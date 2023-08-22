import {
  Box,
  Divider,
  Grid,
  Heading,
  Text,
  Stack,
  Link,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { dependencies, products, Project } from '../../config';
import { LinkIcon } from '@chakra-ui/icons';

function Product({ name, desc, link }: Project) {
  return (
    <Link href={link} target="_blank" _hover={{ textDecoration: 'none' }}>
      <Stack h="full" p={5} minH={36} spacing={2.5} borderRadius={5} justifyContent="center"
        boxShadow={useColorModeValue(
          '0 2px 5px #ccc',
          '0 1px 3px #727272, 0 2px 12px -2px #2f2f2f'
        )}
        _hover={{
          color: useColorModeValue('purple.600', 'purple.300'),
          boxShadow: useColorModeValue(
            '0 2px 5px #bca5e9',
            '0 0 3px rgba(150, 75, 213, 0.8), 0 3px 8px -2px rgba(175, 89, 246, 0.9)'
          ),
        }}
      >
        <Heading fontSize="xl">{name}&ensp;&rarr;</Heading>
        <Text>{desc}</Text>
      </Stack>
    </Link>
  );
};

function Dependency({ name, desc, link }: Project) {
  return (
    <Link href={link} target="_blank" _hover={{ textDecoration: 'none' }}>
      <Stack key={name} h="full" p={4} spacing={3} isInline={true} justifyContent="center"
        borderRadius="md"
        border="1px solid"
        borderColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.100')}
        _hover={{
          boxShadow: useColorModeValue(
            '0 2px 5px #ccc',
            '0 1px 3px #727272, 0 2px 12px -2px #2f2f2f'
          ),
        }}
      >
        <Box color={useColorModeValue('primary.500', 'primary.200')}>
          <Icon as={LinkIcon} />
        </Box>
        <Stack spacing={1}>
          <Text fontSize="lg" fontWeight="semibold">
            {name}
          </Text>
          <Text lineHeight="short" color={useColorModeValue('blackAlpha.700', 'whiteAlpha.700')}>
            {desc}
          </Text>
        </Stack>
      </Stack>
    </Link>
  );
};

export function Footer() {
  return (
    <>
      <Grid templateColumns={{ md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} mb={14} gap={8}>
        {products.map((product) => (
          <Product key={product.name} {...product}></Product>
        ))}
      </Grid>
      <Grid templateColumns={{ md: 'repeat(3, 1fr)' }} gap={8} mb={20}>
        {dependencies.map((dependency) => (
          <Dependency key={dependency.name} {...dependency}></Dependency>
        ))}
      </Grid>
      <Box mb={3}>
        <Divider />
      </Box>
      <Stack isInline={true} spacing={1} justifyContent="center" opacity={0.5} fontSize="sm">
        <Text>Built with</Text>
        <Link href="https://cosmology.tech/" target="_blank" rel="noopener noreferrer">
          Cosmology
        </Link>
      </Stack>
    </>
  );
};
