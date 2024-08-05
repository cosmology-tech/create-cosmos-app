import { useState } from 'react';
import { Coin } from '@cosmjs/stargate';
import { useChain } from '@cosmos-kit/react';
import { Box, Divider, TextField, Text } from '@interchain-ui/react';
import { InstantiateResult } from '@cosmjs/cosmwasm-stargate';

import { Button } from '@/components';
import { JsonInput } from './JsonInput';
import { InputField } from './InputField';
import { AttachFundsSelect } from './AttachFundsSelect';
import { SelectCodeField } from './SelectCodeField';
import { useChainStore } from '@/contexts';
import { useInstantiateTx } from '@/hooks';
import { TxInfoItem, TxSuccessCard } from './TxSuccessCard';
import { formatTxFee, shortenAddress } from '@/utils';

type InstantiateTabProps = {
  show: boolean;
};

export const InstantiateTab = ({ show }: InstantiateTabProps) => {
  const [codeId, setCodeId] = useState('');
  const [label, setLabel] = useState('');
  const [adminAddress, setAdminAddress] = useState('');
  const [initMsg, setInitMsg] = useState('');
  const [funds, setFunds] = useState<Coin[]>([]);
  const [isAssetListJsonValid, setIsAssetListJsonValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [txResult, setTxResult] = useState<InstantiateResult>();

  const { selectedChain } = useChainStore();
  const { address, assets } = useChain(selectedChain);
  const { instantiateTx } = useInstantiateTx(selectedChain);

  const handleInstantiate = () => {
    if (!address) return;

    setIsLoading(true);

    instantiateTx({
      address,
      codeId: Number(codeId),
      initMsg: JSON.parse(initMsg),
      label,
      admin: adminAddress,
      funds,
      onTxSucceed: (txInfo) => {
        setIsLoading(false);
        setTxResult(txInfo);
      },
      onTxFailed: () => {
        setIsLoading(false);
      },
    });
  };

  const resetStates = () => {
    setCodeId('');
    setLabel('');
    setAdminAddress('');
    setInitMsg('');
    setFunds([]);
    setTxResult(undefined);
  };

  const isButtonDisabled =
    !codeId || !label || !initMsg || !isAssetListJsonValid || !address;

  if (txResult) {
    const txFee =
      txResult.events.find((e) => e.type === 'tx')?.attributes[0].value ?? '';

    const infoItems: TxInfoItem[] = [
      {
        label: 'Tx Hash',
        displayValue: shortenAddress(txResult.transactionHash),
        actualValue: txResult.transactionHash,
      },
      {
        label: 'Contract Address',
        displayValue: shortenAddress(txResult.contractAddress),
        actualValue: txResult.contractAddress,
      },
      {
        label: 'Tx Fee',
        displayValue: formatTxFee(txFee, assets!),
        allowCopy: false,
      },
    ];

    return (
      <TxSuccessCard
        title=" Instantiate Complete!"
        infoItems={infoItems}
        show={show}
        footer={
          <Box width="$full">
            <Box display="flex" gap="10px" mb="10px">
              <Button width="$full">Query</Button>
              <Button width="$full">Execute</Button>
            </Box>
            <Button variant="text" width="$full" onClick={resetStates}>
              Instantiate new contract
            </Button>
          </Box>
        }
      />
    );
  }

  return (
    <Box
      display={show ? 'flex' : 'none'}
      mt="40px"
      maxWidth="560px"
      mx="auto"
      flexDirection="column"
      gap="20px"
    >
      <Text
        fontSize="24px"
        fontWeight="500"
        color="$blackAlpha600"
        textAlign="center"
      >
        Instantiate Contract
      </Text>

      <SelectCodeField setCodeId={setCodeId} />

      <Divider opacity="0.4" />

      <InputField title="Label (Required)">
        <TextField
          id="label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
        <InputField.Description>
          The contract's label help briefly describe the contract and what it
          does.
        </InputField.Description>
      </InputField>

      <InputField title="Admin Address (Optional)">
        <TextField
          id="admin_address"
          value={adminAddress}
          onChange={(e) => setAdminAddress(e.target.value)}
        />
        <InputField.Description>
          The contract's admin will be able to migrate and update future admins.
        </InputField.Description>
      </InputField>

      <InputField title="Instantiate  Message">
        <JsonInput value={initMsg} setValue={setInitMsg} height="342px" />
      </InputField>

      <InputField title="Attach Funds">
        <AttachFundsSelect
          setFunds={setFunds}
          setIsAssetListJsonValid={setIsAssetListJsonValid}
        />
      </InputField>

      <Divider opacity="0.4" />

      <Button
        variant="primary"
        onClick={handleInstantiate}
        disabled={isButtonDisabled}
        isLoading={isLoading}
      >
        Instantiate
      </Button>
    </Box>
  );
};
