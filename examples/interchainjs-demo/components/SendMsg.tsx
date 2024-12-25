import { Box, Text, Button, Link } from '@interchain-ui/react';
import { useState } from 'react';
import { useChain } from '@interchain-kit/react';
import { defaultAssetList, defaultChain, defaultChainName } from '@/config';
import useBalance from '@/hooks/useBalance';
import { useSend } from 'interchain-react/cosmos/bank/v1beta1/tx.rpc.func';
import { defaultContext } from '@tanstack/react-query';

export default function SendMsg() {
  const coin = defaultAssetList?.assets[0];

  const denom = coin!.base!;

  const COIN_DISPLAY_EXPONENT = coin!.denomUnits.find(
    (unit) => unit.denom === coin!.display
  )?.exponent as number;

  const chain = defaultChain;
  const txPage = chain?.explorers?.[0].txPage;

  const { address, signingClient, isLoading } = useChain(defaultChainName);

  const [sending, setSending] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { mutate: send, isSuccess: isSendSuccess } = useSend({
    clientResolver: signingClient,
    options: {
      context: defaultContext,
      onSuccess: (data) => {
        console.log('signAndBroadcast', data);
        if (data.code === 0) {
          setTxHash((data as any).hash);
        } else {
          setError(data.rawLog || JSON.stringify(data || {}));
        }
        setSending(false);
      },
      onError: (error) => {
        console.error('signAndBroadcast', error);
        setError(error.message);
        setSending(false);
      },
    },
  });

  const { balance } = useBalance({
    address,
  });

  const handleSend = async () => {
    if (sending || isLoading) return;

    setError(null);
    setTxHash(null);
    setSending(true);

    const fee = {
      amount: [
        {
          denom,
          amount: '2500',
        },
      ],
      gas: '1000000',
    };

    send({
      signerAddress: address,
      message: {
        fromAddress: address,
        toAddress: address,
        amount: [
          {
            denom,
            amount: '1',
          },
        ],
      },
      fee,
      memo: 'Send from interchain-react',
    });
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box mb="$4">
        <Text fontSize="$2xl">
          Balance:{' '}
          {balance === null ? '--' : balance?.toFixed(COIN_DISPLAY_EXPONENT)}{' '}
          {coin?.symbol}
        </Text>
      </Box>
      <Box>
        <Button
          disabled={sending || isLoading}
          isLoading={sending}
          onClick={handleSend}
        >
          {isLoading ? 'Initializing...' : 'Send Token'}
        </Button>
      </Box>
      {txHash && (
        <Box mt="$4" display="flex" flexDirection="row" alignItems="center">
          <Text attributes={{ mr: '$1' }}>Details:</Text>
          <Link href={txPage?.replace('${txHash}', txHash)!} target="_blank">
            {txPage?.replace('${txHash}', txHash)!}
          </Link>
        </Box>
      )}
      {error && (
        <Box mt="$4" display="flex" flexDirection="row" alignItems="center">
          <Text attributes={{ mr: '$1' }} fontSize="$2xl">
            Error:
          </Text>
          <Text fontSize="$2xl">{error}</Text>
        </Box>
      )}
    </Box>
  );
}
