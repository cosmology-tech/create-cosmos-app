import { Box, Text, Button, Link } from "@interchain-ui/react";
import { useEffect, useState } from "react";
import { useChain, useOfflineSigner } from "@interchain-kit/react";
import { defaultAssetList, defaultChain, defaultChainName, defaultRpcEndpoint } from "@/config";
import useBalance from "@/hooks/useBalance";
import { InjSigningClient } from "@interchainjs/injective/signing-client";
import { MessageComposer } from 'interchain-vue/cosmos/bank/v1beta1/tx.registry';
import { toEncoders, toConverters } from '@interchainjs/cosmos/utils';
import { MsgSend } from 'interchain-react/cosmos/bank/v1beta1/tx';

export default function SendMsg() {
  const coin = defaultAssetList?.assets[0];
  const denom = coin!.base!
  const COIN_DISPLAY_EXPONENT = coin!.denomUnits.find(
    (unit) => unit.denom === coin!.display
  )?.exponent as number;
  const chain = defaultChain
  const txPage = chain?.explorers?.[0].txPage

  const { address, isLoading, wallet } = useChain(defaultChainName);

  const { offlineSigner } = useOfflineSigner(defaultChainName, wallet.info!.name)

  const [sending, setSending] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [signingClient, setSigningClient] = useState<InjSigningClient | null>(null);

  useEffect(() => {
    if (!offlineSigner) return;
    (async () => {
      console.log('offlineSigner', offlineSigner)
      setSigningClient(await InjSigningClient.connectWithSigner(defaultRpcEndpoint, offlineSigner))
    })()
  }, [offlineSigner])

  useEffect(() => {
    signingClient?.addEncoders(toEncoders(MsgSend));
    signingClient?.addConverters(toConverters(MsgSend));
  }, [signingClient])

  const {
    balance,
    isBalanceLoaded,
    isFetchingBalance,
    refetchBalance,
  } = useBalance({
    address,
  })

  const handleSend = async () => {
    if (sending || isLoading) return;

    setError(null);
    setTxHash(null);
    setSending(true);

    const fee = {
      amount: [{
        denom,
        amount: '2500',
      }],
      gas: "1000000",
    };
    const { send } = MessageComposer.withTypeUrl
    const msgs = [send({
      fromAddress: address,
      toAddress: address,
      amount: [{ denom, amount: '1' }]
    })]
    try {
      const data = await signingClient!.signAndBroadcast(
        address, msgs, fee, 'using interchainjs'
      ) as any
      console.log('onSuccess', data)
      if (data.code === 0) {
        setTimeout(() => {
          refetchBalance()
          setTxHash(data.hash);
          setSending(false);
        }, 4000)
      } else {
        setError(data.rawLog || JSON.stringify(data || {}));
        setSending(false);
      }
    } catch (error: any) {
      console.log('onError', error)
      setError(error?.message || 'Unknown error');
      setSending(false);
    }
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box mb='$4'>
        <Text fontSize='$2xl'>Balance: {isFetchingBalance ? '--' : (balance?.toFixed(COIN_DISPLAY_EXPONENT))} {coin?.symbol}</Text>
      </Box>
      <Box>
        <Button
          disabled={sending || isLoading}
          isLoading={sending}
          onClick={handleSend}
        >{isLoading ? 'Initializing...' : 'Send Token'}</Button>
      </Box>
      {txHash && <Box mt='$4' display='flex' flexDirection='row' alignItems='center'>
        <Text attributes={{ mr: '$1' }}>Details:</Text>
        <Link href={txPage?.replace('${txHash}', txHash)!} target="_blank">
          {txPage?.replace('${txHash}', txHash)!}
        </Link>
      </Box>}
      {error && <Box mt='$4' display='flex' flexDirection='row' alignItems='center'>
        <Text attributes={{ mr: '$1' }} fontSize='$2xl'>Error:</Text>
        <Text fontSize='$2xl'>{error}</Text>
      </Box>}
    </Box>
  );
}