// TODO fix type issues
// @ts-nocheck

import { useState } from 'react';
import { useChain } from '@cosmos-kit/react';
import { Box, Button, Spinner, Text, TokenInput } from '@interchain-ui/react';
import BigNumber from 'bignumber.js';

import { useAuthzTx, useSendData, useToast } from '@/hooks';
import {
  getCoin,
  getExponent,
  getChainLogoByChainName,
  shiftDigits,
} from '@/utils';
import { useAuthzContext } from '@/context';
import { AddressInput } from '@/components';
import { MsgSend } from '@/src/codegen/cosmos/bank/v1beta1/tx';
import { SendAuthorization } from '@/src/codegen/cosmos/bank/v1beta1/authz';

type SendSectionProps = {
  chainName: string;
};

export const SendSection = ({ chainName }: SendSectionProps) => {
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const [isSending, setIsSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const { isWalletConnected } = useChain(chainName);
  const { data, isLoading, refetch } = useSendData(chainName);
  const { authzTx, createExecMsg } = useAuthzTx(chainName);
  const { permission } = useAuthzContext();
  const { toast } = useToast();

  const coin = getCoin(chainName);
  const exponent = getExponent(chainName);

  const onSendClick = () => {
    if (!amount || !recipientAddress || !permission) return;

    const { grantee, granter, authorization, expiration } = permission;

    const sendAmount = shiftDigits(amount, exponent);

    if (SendAuthorization.is(authorization)) {
      const limitAmount = authorization?.spendLimit?.[0]?.amount;
      if (limitAmount && new BigNumber(sendAmount).gt(limitAmount)) {
        toast({
          type: 'error',
          title: 'Amount exceeds the spending limit',
        });
        return;
      }
    }

    setIsSending(true);

    const msg = MsgSend.toProtoMsg({
      amount: [
        {
          amount: sendAmount,
          denom: coin.base,
        },
      ],
      fromAddress: granter,
      toAddress: recipientAddress,
    });

    authzTx({
      msgs: [createExecMsg({ msgs: [msg], grantee })],
      execExpiration: expiration,
      onSuccess: () => {
        refetch();
        setAmount(undefined);
        setRecipientAddress('');
      },
      onComplete: () => {
        setIsSending(false);
      },
    });
  };

  if (!isWalletConnected) {
    return (
      <Text
        color="$textSecondary"
        fontWeight="$semibold"
        fontSize="$xl"
        textAlign="center"
        attributes={{ mt: '$20', mb: '$22' }}
      >
        Please connect the wallet
      </Text>
    );
  }

  if (isLoading || !data) {
    return (
      <Box mt="$20" mb="$22" display="flex" justifyContent="center">
        <Spinner size="$7xl" />
      </Box>
    );
  }

  return (
    <Box mt="$18" mb="$22" width="$containerSm" mx="auto">
      <Text fontSize="$2xl" fontWeight="$semibold" attributes={{ mb: '$12' }}>
        Send
      </Text>

      <AddressInput
        label="Recipient Address"
        placeholder="Enter recipient address"
        chainName={chainName}
        address={recipientAddress}
        onAddressChange={setRecipientAddress}
        onInvalidAddress={setErrorMsg}
        mb="$12"
      />

      <TokenInput
        title="Amount"
        symbol={coin.symbol}
        amount={amount}
        onAmountChange={setAmount}
        available={Number(data.balance)}
        priceDisplayAmount={data.prices[coin.base]}
        tokenIcon={getChainLogoByChainName(chainName)}
        attributes={{ mb: '$15' }}
        hasProgressBar={false}
        availableAsMax
      />

      <Button
        intent="tertiary"
        disabled={!amount || !recipientAddress || isSending || !!errorMsg}
        onClick={onSendClick}
        fluidWidth
      >
        Send
      </Button>
    </Box>
  );
};
