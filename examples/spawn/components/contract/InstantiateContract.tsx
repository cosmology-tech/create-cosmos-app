import { useState } from 'react';
import {
  Box,
  Divider,
  Text,
  TextField,
  TextFieldAddon,
} from '@interchain-ui/react';
import { Coin } from '@cosmjs/stargate';
import { IoChevronDown } from 'react-icons/io5';
import { useChain } from '@cosmos-kit/react';
import { InstantiateResult } from '@cosmjs/cosmwasm-stargate';

import { CodeIdField } from './CodeIdField';
import {
  CodeInfo,
  formatTxFee,
  resolvePermission,
  shortenAddress,
  validateChainAddress,
} from '@/utils';
import { InputField } from './InputField';
import { JsonInput } from './JsonInput';
import { useChainStore } from '@/contexts';
import { AttachFundsRadio } from './AttachFundsRadio';
import { Button } from '../common';
import {
  useDetectBreakpoints,
  useInstantiateTx,
  useMyContracts,
} from '@/hooks';
import { TxInfoItem, TxSuccessDisplay } from './TxSuccessDisplay';
import { TabLabel } from '@/pages/contract';
import styles from '@/styles/comp.module.css';

type InstantiateContractProps = {
  show?: boolean;
  switchTab?: (addressValue: string, tabId: number) => void;
  onSuccess?: () => void;
  defaultCodeId?: string;
  onCreateNewContract?: () => void;
  onViewMyContracts?: () => void;
};

export const InstantiateContract = ({
  show = true,
  onSuccess,
  switchTab,
  defaultCodeId,
  onCreateNewContract,
  onViewMyContracts,
}: InstantiateContractProps) => {
  const [codeId, setCodeId] = useState('');
  const [codeInfo, setCodeInfo] = useState<CodeInfo>();
  const [label, setLabel] = useState('');
  const [initMsg, setInitMsg] = useState('');
  const [adminAddress, setAdminAddress] = useState('');
  const [funds, setFunds] = useState<Coin[]>([]);
  const [isAssetListJsonValid, setIsAssetListJsonValid] = useState(true);
  const [isShowMore, setIsShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [txResult, setTxResult] = useState<InstantiateResult>();

  const { selectedChain } = useChainStore();
  const { address, chain, assets } = useChain(selectedChain);
  const { instantiateTx } = useInstantiateTx(selectedChain);
  const { refetch: updateMyContracts } = useMyContracts();

  const handleInstantiate = () => {
    if (!address || !codeInfo) return;

    setIsLoading(true);

    instantiateTx({
      address,
      codeId: codeInfo.id,
      initMsg: JSON.parse(initMsg),
      label,
      admin: adminAddress,
      funds,
      onTxSucceed: (txInfo) => {
        setIsLoading(false);
        setTxResult(txInfo);
        updateMyContracts();
        onSuccess?.();
      },
      onTxFailed: () => {
        setIsLoading(false);
      },
    });
  };

  const resetStates = () => {
    setCodeId('');
    setCodeInfo(undefined);
    setLabel('');
    setAdminAddress('');
    setInitMsg('');
    setFunds([]);
    setTxResult(undefined);
  };

  const adminInputErr =
    adminAddress && validateChainAddress(adminAddress, chain.bech32_prefix);

  const canInstantiate =
    !!address &&
    !!codeInfo &&
    resolvePermission(address, codeInfo.permission, codeInfo.addresses);

  const isButtonDisabled =
    !label ||
    !initMsg ||
    !isAssetListJsonValid ||
    !canInstantiate ||
    !!adminInputErr;

  const { isMobile } = useDetectBreakpoints();

  if (txResult) {
    const txFee =
      txResult.events.find((e) => e.type === 'tx')?.attributes[0].value ?? '';

    const infoItems: TxInfoItem[] = [
      {
        label: 'Tx Hash',
        value: shortenAddress(txResult.transactionHash),
        copyValue: txResult.transactionHash,
        showCopy: true,
      },
      {
        label: 'Contract Address',
        value: shortenAddress(txResult.contractAddress),
        copyValue: txResult.contractAddress,
        showCopy: true,
      },
      {
        label: 'Tx Fee',
        value: formatTxFee(txFee, assets!),
      },
    ];

    return (
      <TxSuccessDisplay
        show={show}
        infoItems={infoItems}
        txResult={txResult}
        footer={
          <Box
            width="$full"
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            gap="10px"
          >
            <Button
              width="$full"
              variant="primary"
              onClick={() => {
                switchTab?.(txResult.contractAddress, TabLabel.Query);
              }}
            >
              Query
            </Button>
            <Button
              width="$full"
              variant="primary"
              onClick={() => {
                switchTab?.(txResult.contractAddress, TabLabel.Execute);
              }}
            >
              Execute
            </Button>
            <Button
              width="$full"
              onClick={() => {
                resetStates();
                onCreateNewContract?.();
              }}
            >
              Create New Contract
            </Button>
            <Button width="$full" onClick={onViewMyContracts}>
              View My Contracts
            </Button>
          </Box>
        }
      />
    );
  }

  return (
    <Box
      display={show ? 'flex' : 'none'}
      flexDirection="column"
      gap="20px"
      mt="40px"
      maxWidth="560px"
      mx="auto"
    >
      <Text
        fontSize="24px"
        fontWeight="500"
        color="$blackAlpha600"
        textAlign="center"
      >
        Instantiate Contract
      </Text>

      <CodeIdField
        codeId={codeId}
        setCodeId={setCodeId}
        setCodeInfo={setCodeInfo}
        defaultCodeId={defaultCodeId}
        readonly={!!defaultCodeId}
      />

      <InputField title="Label" required>
        <TextField
          id="label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          autoComplete="off"
          readonly={isLoading}
        />
        <InputField.Description>
          Provide a short description of the contract&apos;s purpose and
          functionality.
        </InputField.Description>
      </InputField>

      <InputField title="Instantiate Message" required>
        <JsonInput value={initMsg} setValue={setInitMsg} height="342px" />
      </InputField>

      {isShowMore && (
        <Box display="flex" alignItems="center" gap="6px">
          <Divider />
          <Text
            color="$blackAlpha500"
            fontSize="12px"
            fontWeight="500"
            attributes={{
              flexShrink: 0,
            }}
          >
            More Settings
          </Text>
          <Divider />
        </Box>
      )}

      <Box
        display={isShowMore ? 'flex' : 'none'}
        flexDirection="column"
        gap="20px"
      >
        <InputField title="Contract Admin">
          <TextField
            id="admin_address"
            intent={adminInputErr ? 'error' : 'default'}
            value={adminAddress}
            onChange={(e) => setAdminAddress(e.target.value)}
            autoComplete="off"
            inputClassName={styles['input-pr']}
            endAddon={
              <TextFieldAddon position="end">
                <Box
                  height="$full"
                  display="flex"
                  alignItems="center"
                  borderLeftWidth="1px"
                  borderLeftStyle="solid"
                  borderLeftColor="$inputBorder"
                >
                  <Button
                    size="sm"
                    variant="text"
                    disabled={!address}
                    onClick={() => setAdminAddress(address ?? '')}
                  >
                    Autofill
                  </Button>
                </Box>
              </TextFieldAddon>
            }
          />
          <InputField.Description intent={adminInputErr ? 'error' : 'default'}>
            {adminInputErr ||
              'The contract admin can transfer ownership and perform future upgrades.'}
          </InputField.Description>
        </InputField>

        <InputField title="Attach Funds">
          <AttachFundsRadio
            setFunds={setFunds}
            setIsAssetListJsonValid={setIsAssetListJsonValid}
            direction={isMobile ? 'column' : 'row'}
          />
        </InputField>
      </Box>

      <Button
        onClick={() => setIsShowMore(!isShowMore)}
        variant="text"
        size="sm"
        mx="auto"
        rightIcon={
          <IoChevronDown
            size="16px"
            style={{
              transform: isShowMore ? 'rotate(180deg)' : '',
              transition: 'transform 0.3s',
            }}
          />
        }
      >
        {isShowMore ? 'Show Less' : 'Show More'}
      </Button>

      <Button
        variant="primary"
        onClick={handleInstantiate}
        disabled={isButtonDisabled}
        isLoading={isLoading}
        width="$full"
      >
        Instantiate
      </Button>
    </Box>
  );
};
