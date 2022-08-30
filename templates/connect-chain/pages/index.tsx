import { MouseEventHandler } from 'react';
import Head from 'next/head';
import {
  Box,
  Divider,
  Grid,
  Heading,
  Text,
  Stack,
  Container,
  Link,
  Button,
  Flex,
  Icon,
  useColorMode,
  useColorModeValue,
  GridItem,
  Center
} from '@chakra-ui/react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { FiAlertTriangle } from 'react-icons/fi';
import { useWalletManager, useWallet } from '@cosmos-kit/react';
import {
  Connected,
  ConnectedUserInfo,
  Connecting,
  Disconnect,
  NotExist,
  Rejected,
  ConnectWalletButtonStatus,
  Astronaut,
  ConnectedShowAddress,
  Product,
  Dependency,
  ConnectStatusWarn,
  RejectedWarn,
  CopyAddressBtn
} from '../components';
import { mapStatusFromCosmosWallet } from '../utils';
import { dependencies, products } from '../config';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { connect, disconnect } = useWalletManager();
  const { status, error, name, address } = useWallet();
  const walletStatus = mapStatusFromCosmosWallet(status, error as Error);

  const onClickConnect: MouseEventHandler = (e) => {
    e.preventDefault();
    connect();
  };
  const onClickDisconnect: MouseEventHandler = (e) => {
    e.preventDefault();
    disconnect();
  };

  const userInfo = <ConnectedUserInfo username={name} icon={<Astronaut />} />;
  const addressBtn = (
    <CopyAddressBtn
      walletStatus={walletStatus}
      connected={<ConnectedShowAddress address={address} isLoading={false} />}
    />
  );
  const connectWalletButton = (
    <ConnectWalletButtonStatus
      walletStatus={walletStatus}
      disconnect={
        <Disconnect buttonText="Connect Wallet" onClick={onClickConnect} />
      }
      connecting={<Connecting />}
      connected={
        <Connected buttonText="Disconnect" onClick={onClickDisconnect} />
      }
      rejected={<Rejected buttonText="Chain Rejected" />}
      notExist={<NotExist buttonText="Not Exist" />}
    />
  );
  const connectWalletWarn = (
    <ConnectStatusWarn
      walletStatus={walletStatus}
      rejected={
        <RejectedWarn
          icon={<Icon as={FiAlertTriangle} mt={1} />}
          wordOfWarning="Warning: There is not enough chain information to connect to this chain."
        />
      }
    />
  );

  return (
    <Container maxW="5xl" py={10}>
      <Head>
        <title>Create Cosmos App</title>
        <meta name="description" content="Generated by create cosmos app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
          Cosmos App Made Easy
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
            CosmosKit + Telescope + Next.js
          </Text>
        </Heading>
      </Box>
      <Center py={16}>
        <Grid
          w="full"
          maxW="sm"
          templateColumns="1fr"
          rowGap={4}
          alignItems="center"
          justifyContent="center"
        >
          <GridItem>{connectWalletWarn}</GridItem>
          <GridItem px={6}>
            <Stack
              justifyContent="center"
              alignItems="center"
              borderRadius="lg"
              bg={useColorModeValue('white', 'blackAlpha.400')}
              boxShadow={useColorModeValue(
                '0 0 2px #dfdfdf, 0 0 6px -2px #d3d3d3',
                '0 0 2px #363636, 0 0 8px -2px #4f4f4f'
              )}
              spacing={4}
              px={4}
              py={{ base: 6, md: 12 }}
            >
              {userInfo}
              {addressBtn}
              <Box w="full" maxW={{ base: 52, md: 64 }}>
                {connectWalletButton}
              </Box>
            </Stack>
          </GridItem>
        </Grid>
      </Center>
      <Grid
        templateColumns={{
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)'
        }}
        gap={8}
        mb={14}
      >
        {products.map((product) => (
          <Product key={product.title} {...product}></Product>
        ))}
      </Grid>
      <Grid templateColumns={{ md: '1fr 1fr' }} gap={8} mb={20}>
        {dependencies.map((dependency) => (
          <Dependency key={dependency.title} {...dependency}></Dependency>
        ))}
      </Grid>
      <Box mb={3}>
        <Divider />
      </Box>
      <Stack
        isInline={true}
        spacing={1}
        justifyContent="center"
        opacity={0.5}
        fontSize="sm"
      >
        <Text>Built with</Text>
        <Link
          href="https://cosmology.tech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cosmology
        </Link>
      </Stack>
    </Container>
  );
}
