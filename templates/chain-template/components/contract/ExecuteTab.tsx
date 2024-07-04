import { useState } from 'react';
import { Box, Icon, Text } from '@interchain-ui/react';
import { LuFileInput } from 'react-icons/lu';
import { IoMdLink } from 'react-icons/io';

import { Button } from '@/components';
import { JsonInput } from './JsonInput';
import { ContractInfo } from './ContractInfo';
import { AttachFundsSelect } from './AttachFundsSelect';
import { useExecuteContractTx } from '@/hooks';
import { useChainStore } from '@/contexts';
import { useChain } from '@cosmos-kit/react';
import { CopyButton } from './CopyButton';
import { validateJson } from '@/utils';

type ExecuteTabProps = {
  show: boolean;
};

export const ExecuteTab = ({ show }: ExecuteTabProps) => {
  const [contractAddress, setContractAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState('');

  const { selectedChain } = useChainStore();
  const { address, connect } = useChain(selectedChain);
  const { executeTx } = useExecuteContractTx(selectedChain);

  const handleExecuteMsg = () => {
    if (!address) return;
    setIsLoading(true);

    executeTx({
      msg: JSON.parse(msg),
      address,
      contractAddress,
      fee: { amount: [], gas: '200000' },
      funds: [],
      onTxSucceed: () => setIsLoading(false),
      onTxFailed: () => setIsLoading(false),
    });
  };

  const isMsgValid = validateJson(msg) === null;

  const isExecuteButtonDisabled = !contractAddress || !isMsgValid || !address;

  return (
    <Box display={show ? 'block' : 'none'}>
      {!address && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          borderWidth="1px"
          borderStyle="solid"
          borderColor="#7310FF"
          backgroundColor="#F9F4FF"
          height="70px"
          px="24px"
          borderRadius="8px"
          mb="20px"
        >
          <Box display="flex" gap="6px" alignItems="center">
            <Icon name="walletFilled" color="#7310FF" />
            <Text color="#7310FF" fontSize="16px" fontWeight="500">
              You need to connect your wallet to perform this action
            </Text>
          </Box>
          <Box
            display="flex"
            gap="6px"
            alignItems="center"
            cursor="pointer"
            attributes={{ onClick: connect }}
          >
            <IoMdLink size="20px" color="#7310FF" />
            <Text color="#7310FF" fontSize="16px" fontWeight="500">
              Connect Wallet
            </Text>
          </Box>
        </Box>
      )}

      <ContractInfo setContractAddress={setContractAddress} mb="30px" />

      <Text fontSize="16px" fontWeight="700" attributes={{ mb: '20px' }}>
        Execute Message
      </Text>

      <Box display="flex" gap="20px" justifyContent="space-between" mb="20px">
        <Box flex="1">
          <Text fontSize="16px" fontWeight="500" attributes={{ mb: '10px' }}>
            Execute Msg
          </Text>
          <JsonInput value={msg} setValue={setMsg} height="342px" />
        </Box>

        <Box flex="1">
          <AttachFundsSelect />
        </Box>
      </Box>

      <Box display="flex" gap="10px" alignItems="center" mb="250px">
        <CopyButton value={msg} disabled={!msg} />
        <Button
          rightIcon={<LuFileInput size="18px" />}
          onClick={handleExecuteMsg}
          disabled={isExecuteButtonDisabled}
          isLoading={isLoading}
          px="10px"
        >
          Execute
        </Button>
      </Box>
    </Box>
  );
};
