import { useState } from 'react';
import Head from 'next/head';
import BigNumber from 'bignumber.js';

import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import {
  chainassets,
  chainName,
  coin,
  dependencies,
  products,
} from '../config';

import {
  Dependency,
  handleChangeColorModeValue,
  Product,
  WalletSection,
} from '../components';
import { SendTokensCard } from '../components/react/send-tokens-card';

import {
  cosmos,
  createRpcQueryHooks,
  useDefaultRpcClient,
} from '../src/codegen';
import { useRpcClient } from '../src/codegen';
import {
  useChainWallet,
  useWalletManager,
  useChain,
} from '@interchain-kit/react';
import {} from '@interchain-kit/keplr-extension';
// import { CosmWasmSigningClient } from 'interchainjs/cosmwasm-stargate';
import { toEncoders, toConverters } from '@interchainjs/cosmos/utils';
import { SigningClient } from 'interchainjs/signing-client';
import { MsgSend } from '../src/codegen/cosmos/bank/v1beta1/tx';
import { DeliverTxResponse, StdFee } from '@interchainjs/cosmos-types/types';
import { useBalance } from '../src/codegen/cosmos/bank/v1beta1/query.rpc.funcs';

const library = {
  title: 'InterchainJS',
  text: 'interchainjs',
  href: 'https://github.com/cosmology-tech/interchainjs',
};

/**
 * common helper options for generated helper functions.
 * For getting signingClient;
 * Or using chainName for getting signingClient.
 */
class HelperOptions {
  signingClient?: SigningClient;
  chainName?: string;
}

// generated react hook helper function for sending tokens
const useSend = (options: HelperOptions) => {
  // getting signingClient from chainName
  const { signingClient } = useChain(options.chainName ?? '');
  let client = options.signingClient ?? signingClient;

  if (!client) {
    return null;
  }

  // register all related encoders and converters
  // at this case, we only need MsgSend
  signingClient?.addEncoders(toEncoders(MsgSend));
  signingClient?.addConverters(toConverters(MsgSend));

  // return the actual send function
  return async (
    signerAddress: string,
    message: MsgSend,
    fee: StdFee | 'auto' = 'auto',
    memo: string = ''
  ): Promise<DeliverTxResponse> => {
    const data = [
      {
        typeUrl: MsgSend.typeUrl,
        value: message,
      },
    ];
    return signingClient.signAndBroadcast!(signerAddress, data, fee, memo);
  };
};

const useSendTokensDemo = (setResp: (resp: string) => any, address: string) => {
  const send = useSend({ chainName });

  if (!send) {
    console.error('send is not ready.');
    return null;
  }

  return async () => {
    if (!address) {
      console.error('stargateClient undefined or address undefined.');
      return;
    }
    const fee = {
      amount: [
        {
          denom: coin.base,
          amount: '2500',
        },
      ],
      gas: '1000000',
    };

    try {
      const response = await send(
        address,
        {
          fromAddress: address,
          toAddress: address,
          amount: [{ denom: coin.base, amount: '1' }],
        },
        fee,
        'using interchainjs'
      );
      setResp(JSON.stringify(response, null, 2));
    } catch (error) {
      console.error('error injSigningClient.signAndBroadcast', error);
    }
  };
};

const sendTokens = (
  // getSigningStargateClient: CosmWasmSigningClient,
  setResp: (resp: string) => any,
  address: string
) => {
  console.log('chainName', chainName);
  const { signingStargateClient, signingCosmWasmClient, signingClient } =
    useChain(chainName);
  return async () => {
    // const stargateClient = getSigningStargateClient
    if (
      // !stargateClient ||
      !address
    ) {
      console.error('stargateClient undefined or address undefined.');
      return;
    }
    const fee = {
      amount: [
        {
          denom: coin.base,
          amount: '25000',
        },
      ],
      gas: '1000000',
    };
    // const signingClient = getSigningStargateClient
    // const response = await signingClient.helpers.send(
    //   address,
    //   { fromAddress: address, toAddress: address, amount: [{ denom: coin.base, amount: '1' }] },
    //   fee,
    //   'using interchainjs'
    // )
    const response = await signingCosmWasmClient.helpers.send(
      address,
      {
        fromAddress: address,
        toAddress: address,
        amount: [{ denom: coin.base, amount: '1' }],
      },
      fee,
      'using interchainjs'
    );
    setResp(JSON.stringify(response, null, 2));
  };
};

// Get the display exponent
// we can get the exponent from chain registry asset denom_units
const COIN_DISPLAY_EXPONENT = coin.denom_units.find(
  (unit) => unit.denom === coin.display
)?.exponent as number;

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  // const { getSigningStargateClient, address, status, getRpcEndpoint } =
  //   useChain(chainName);
  const walletManager = useWalletManager();
  console.log('walletManager.chains', walletManager.chains);
  const keplrExtension = walletManager.wallets.find(
    (w) => w.option?.name === 'keplr-extension'
  );
  const { signingCosmWasmClient: getSigningStargateClient, address } =
    useChainWallet(chainName, keplrExtension?.option?.name as string);

  const [resp, setResp] = useState('');

  // const {
  //   data: rpcEndpoint
  // } = useRpcEndpoint({
  //   //@ts-ignore
  //   getter: getRpcEndpoint
  // });

  const rpcEndpoint = 'https://rpc.cosmos.directory/cosmoshub';

  const { data: rpcClient } = useDefaultRpcClient({
    rpcEndpoint,
    options: {
      enabled: !!rpcEndpoint,
    },
  });

  console.log({
    rpcEndpoint,
    rpcClient,
  });

  //@ts-ignore
  // const hooks = cosmos.ClientFactory.createRPCQueryHooks({ rpc: rpcClient })
  // const hooks = createRpcQueryHooks({ rpc: rpcClient });

  const {
    data: balance,
    isSuccess: isBalanceLoaded,
    isLoading: isFetchingBalance,
    refetch: refetchBalance,
  } = useBalance<BigNumber>({
    request: {
      address: address || '',
      denom: chainassets?.assets[0].base as string,
    },
    options: {
      enabled: !!address && !!rpcClient,
      // transform the returned balance into a BigNumber
      select: ({ balance }) =>
        new BigNumber(balance?.amount ?? 0).multipliedBy(
          10 ** -COIN_DISPLAY_EXPONENT
        ),
    },
  });

  console.log(
    JSON.stringify(
      {
        address,
        balance,
        isBalanceLoaded,
        isFetchingBalance,
        refetchBalance,
      },
      null,
      2
    )
  );

  return (
    <Container maxW="5xl" py={10}>
      <Head>
        <title>InterchainJS - Create Cosmos App</title>
        <meta name="description" content="Generated by create cosmos app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex justifyContent="end" mb={4}>
        <Button variant="outline" px={0} onClick={toggleColorMode}>
          <Icon as={useColorModeValue(BsFillMoonStarsFill, BsFillSunFill)} />
        </Button>
      </Flex>
      <Box textAlign="center">
        <Heading
          as="h1"
          fontSize={{ base: '3xl', md: '5xl' }}
          fontWeight="extrabold"
          mb={3}
        >
          Create Cosmos App
        </Heading>
        <Heading
          as="h1"
          fontWeight="bold"
          fontSize={{ base: '2xl', md: '4xl' }}
        >
          <Text as="span">Welcome to&nbsp;</Text>
          <Text
            as="span"
            color={handleChangeColorModeValue(
              colorMode,
              'primary.500',
              'primary.200'
            )}
          >
            Interchain Kit&nbsp;+&nbsp;Next.js&nbsp;+&nbsp;
            <Link href={library.href} target="_blank" rel="noreferrer">
              {library.title}
            </Link>
          </Text>
        </Heading>
      </Box>

      <WalletSection />

      <Center mb={16}>
        <SendTokensCard
          isConnectWallet={!!address}
          balance={isBalanceLoaded ? balance.toNumber() : 0}
          isFetchingBalance={isFetchingBalance}
          response={resp}
          sendTokensButtonText="Send Tokens"
          handleClickSendTokens={useSendTokensDemo(
            // getSigningStargateClient as CosmWasmSigningClient,
            setResp as () => any,
            address as string
          )}
          handleClickGetBalance={refetchBalance}
        />
      </Center>

      <Box mb={16}>
        <Divider />
      </Box>
      <Grid
        templateColumns={{
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap={8}
        mb={14}
      >
        {products.map((product) => (
          <Product key={product.title} {...product} />
        ))}
      </Grid>
      <Grid templateColumns={{ md: 'repeat(3, 1fr)' }} gap={8} mb={20}>
        <Dependency {...library} />
        {dependencies.map((dependency) => (
          <Dependency key={dependency.title} {...dependency} />
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
          href="https://cosmology.zone/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cosmology
        </Link>
      </Stack>
    </Container>
  );
}
