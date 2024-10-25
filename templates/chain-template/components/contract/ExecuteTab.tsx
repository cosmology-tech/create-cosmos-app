import { useMemo, useState } from 'react';
import { Box, Text } from '@interchain-ui/react';
import { Coin } from '@cosmjs/amino';

import { ContractAddressField } from './ContractAddressField';
import { InputField } from './InputField';
import { JsonInput } from './JsonInput';
import { AttachFundsRadio } from './AttachFundsRadio';
import { Button } from '../common';
import { useChainStore } from '@/contexts';
import {
  useConnectChain,
  useDetectBreakpoints,
  useExecuteContractTx,
} from '@/hooks';
import { validateJson } from '@/utils';

const INPUT_LINES = 12;

type ExecuteTabProps = {
  show: boolean;
  addressValue: string;
  onAddressInput: (input: string) => void;
};

export const ExecuteTab = ({
  show,
  addressValue,
  onAddressInput,
}: ExecuteTabProps) => {
  const [contractAddress, setContractAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [executeMsg, setExecuteMsg] = useState('');
  const [funds, setFunds] = useState<Coin[]>([]);
  const [isAssetListJsonValid, setIsAssetListJsonValid] = useState(true);

  const { selectedChain } = useChainStore();
  const { address, connect } = useConnectChain(selectedChain);
  const { executeTx } = useExecuteContractTx(selectedChain);

  const handleExecuteMsg = () => {
    if (!address) {
      connect();
      return;
    }

    setIsLoading(true);

    executeTx({
      msg: JSON.parse(executeMsg),
      address,
      contractAddress,
      fee: { amount: [], gas: '200000' },
      funds,
      onTxSucceed: () => setIsLoading(false),
      onTxFailed: () => setIsLoading(false),
    });
  };

  const isMsgValid = validateJson(executeMsg) === null;

  const buttonText = useMemo(() => {
    if (!address) return 'Connect Wallet';
    return 'Execute';
  }, [address]);

  const isButtonDisabled = useMemo(() => {
    if (!address) return false;
    return !contractAddress || !isMsgValid || !isAssetListJsonValid;
  }, [address, contractAddress, isMsgValid, isAssetListJsonValid]);

  const { isMobile } = useDetectBreakpoints();

  return (
    <Box
      display={show ? 'flex' : 'none'}
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
        Execute Contract
      </Text>
      <ContractAddressField
        addressValue={addressValue}
        onAddressInput={onAddressInput}
        onValidAddressChange={setContractAddress}
      />
      <InputField title="Execute Message">
        <JsonInput
          value={executeMsg}
          setValue={setExecuteMsg}
          minLines={INPUT_LINES}
          height="250px"
        />
      </InputField>
      <InputField title="Attach Funds">
        <AttachFundsRadio
          setFunds={setFunds}
          setIsAssetListJsonValid={setIsAssetListJsonValid}
          direction={isMobile ? 'column' : 'row'}
        />
      </InputField>
      <Button
        onClick={handleExecuteMsg}
        disabled={isButtonDisabled}
        isLoading={isLoading}
        width="100%"
        variant="primary"
      >
        {buttonText}
      </Button>
    </Box>
  );
};
