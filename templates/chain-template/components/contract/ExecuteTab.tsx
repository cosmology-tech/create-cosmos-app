import { useState } from 'react';
import { Box, Icon, Text } from '@interchain-ui/react';
import { LuFileInput } from 'react-icons/lu';
import { IoMdLink } from 'react-icons/io';

import { Button } from '@/components';
import { JsonInput } from './JsonInput';
import { ContractInfo } from './ContractInfo';
import { AttachFundsSelect } from './AttachFundsSelect';
import { useDetectBreakpoints, useExecuteContractTx } from '@/hooks';
import { useChainStore } from '@/contexts';
import { useChain } from '@cosmos-kit/react';
import { CopyButton } from './CopyButton';
import { validateJson } from '@/utils';
import { Coin } from '@cosmjs/amino';

type ExecuteTabProps = {
  show: boolean;
};

export const ExecuteTab = ({ show }: ExecuteTabProps) => {
  const [contractAddress, setContractAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState('');
  const [funds, setFunds] = useState<Coin[]>([]);
  const [isAssetListJsonValid, setIsAssetListJsonValid] = useState(true);

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
      funds,
      onTxSucceed: () => setIsLoading(false),
      onTxFailed: () => setIsLoading(false),
    });
  };

  const { isMobile } = useDetectBreakpoints();

  const isMsgValid = validateJson(msg) === null;

  const isExecuteButtonDisabled =
    !contractAddress || !isMsgValid || !address || !isAssetListJsonValid;

  return (
    <Box display={show ? 'block' : 'none'}>
      {!address && (
        <Box
          display="flex"
          flexDirection={isMobile ? 'column' : 'row'}
          justifyContent="space-between"
          alignItems="center"
          gap="20px"
          borderWidth="1px"
          borderStyle="solid"
          borderColor="$purple600"
          backgroundColor="$purple100"
          p={isMobile ? '18px' : '24px'}
          borderRadius="8px"
          mb="20px"
        >
          <Box display="flex" gap="6px" alignItems="center">
            <Icon
              name="walletFilled"
              color="$purple600"
              attributes={{ minWidth: '20px' }}
            />
            <Text color="$purple600" fontSize="16px" fontWeight="500">
              You need to connect your wallet to perform this action
            </Text>
          </Box>
          <Box
            display="flex"
            gap="6px"
            alignItems="center"
            cursor="pointer"
            attributes={{ onClick: connect }}
            color="$purple600"
          >
            <IoMdLink size="20px" />
            <Text color="$purple600" fontSize="16px" fontWeight="500">
              Connect Wallet
            </Text>
          </Box>
        </Box>
      )}

      <ContractInfo setContractAddress={setContractAddress} mb="30px" />

      <Text fontSize="16px" fontWeight="700" attributes={{ mb: '20px' }}>
        Execute Message
      </Text>

      <Box
        display="flex"
        flexDirection={isMobile ? 'column' : 'row'}
        gap="20px"
        justifyContent="space-between"
        mb="20px"
      >
        <Box flex="1">
          <Text fontSize="16px" fontWeight="500" attributes={{ mb: '10px' }}>
            Execute Msg
          </Text>
          <JsonInput value={msg} setValue={setMsg} height="342px" />
        </Box>

        <Box flex="1">
          <Text fontSize="16px" fontWeight="500" attributes={{ mb: '10px' }}>
            Attach Funds
          </Text>
          <AttachFundsSelect
            setFunds={setFunds}
            setIsAssetListJsonValid={setIsAssetListJsonValid}
          />
        </Box>
      </Box>

      <Box display="flex" gap="10px" alignItems="center">
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
