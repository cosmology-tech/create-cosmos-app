import { Container, Button } from '@chakra-ui/react';
import { useChain } from '@cosmos-kit/react';
import { useState } from 'react';
import { SigningStargateClient } from '@cosmjs/stargate';
import { WalletStatus } from '@cosmos-kit/core';
import BigNumber from 'bignumber.js';

import { WalletSection } from '../components';
import { cosmos } from '../codegen';
import { baseAsset, chainassets, chainName, sendTokens } from '../config';

export default function Home() {
  const { getSigningStargateClient, address, getRestEndpoint, status } =
    useChain(chainName);

  const [balance, setBalance] = useState(new BigNumber(0));
  const [resp, setResp] = useState('');
  const getBalance = async () => {
    if (!address) {
      setBalance(new BigNumber(0));
      return;
    }

    let restEndpoint = await getRestEndpoint();

    if (!restEndpoint) {
      console.log('no rest endpoint — using a fallback');
      restEndpoint = `https://rest.cosmos.directory/${chainName}`;
    }

    // get LCD client
    const client = await cosmos.ClientFactory.createLCDClient({
      restEndpoint,
    });

    // fetch balance
    const balance = await client.cosmos.bank.v1beta1.balance({
      address,
      denom: chainassets?.assets[0].base as string,
    });

    // Get the display exponent
    // we can get the exponent from chain registry asset denom_units
    const exp = baseAsset.denom_units.find(
      (unit) => unit.denom === baseAsset.display
    )?.exponent as number;

    // show balance in display values by exponentiating it
    const a = new BigNumber(balance.balance?.amount || 0);
    const amount = a.multipliedBy(10 ** -exp);
    setBalance(amount);
  };

  return (
    <Container maxW="5xl" py={10}>
      <WalletSection />

      {status === WalletStatus.Disconnected && <>please connect your wallet!</>}

      {status === WalletStatus.Connected && (
        <>
          <Container>Balance: {balance.toNumber()} </Container>

          <Button onClick={getBalance}>Fetch Balance</Button>

          <Button
            onClick={sendTokens(
              getSigningStargateClient as () => Promise<SigningStargateClient>,
              setResp as () => any,
              address as string
            )}
          >
            Send Tokens (to self)
          </Button>
        </>
      )}

      {!!resp && (
        <>
          <Container>Response: </Container>
          <pre>{resp}</pre>
        </>
      )}
    </Container>
  );
}
