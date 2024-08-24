import { useEffect, useMemo, useState } from 'react';
import { Box, Icon, Spinner, Text, TextField } from '@interchain-ui/react';
import { useChain } from '@cosmos-kit/react';

import { Button, Radio, RadioGroup } from '../common';
import { UploadIcon } from './FileUpload';
import { InputField } from './InputField';
import { PermissionTag } from './PermissionTag';
import { SelectCodeModal } from './SelectCodeModal';
import { useCodeDetails, useDisclosure } from '@/hooks';
import { CodeInfo } from './UploadTab';
import { useChainStore } from '@/contexts';
import { isValidCodeId, resolvePermission } from '@/utils';

type Method = 'select-existing' | 'fill-manually';

type SelectCodeFieldProps = {
  setCodeInfo: (codeInfo: CodeInfo | undefined) => void;
  initCodeInfo?: CodeInfo;
};

export const SelectCodeField = ({
  setCodeInfo,
  initCodeInfo,
}: SelectCodeFieldProps) => {
  const [method, setMethod] = useState<Method>('select-existing');
  const [selectedCode, setSelectedCode] = useState<CodeInfo>();
  const [fetchedCode, setFetchedCode] = useState<CodeInfo>();

  useEffect(() => {
    setCodeInfo(method === 'select-existing' ? selectedCode : fetchedCode);
  }, [method, selectedCode, fetchedCode]);

  useEffect(() => {
    setSelectedCode(initCodeInfo);
    setMethod('select-existing');
  }, [initCodeInfo]);

  return (
    <>
      <RadioGroup
        name="select-code"
        direction="row"
        space="60px"
        value={method}
        onChange={(val) => setMethod(val as Method)}
      >
        <Radio value="select-existing">Choose from uploaded codes</Radio>
        <Radio value="fill-manually">Enter Code ID manually</Radio>
      </RadioGroup>

      <SelectCode
        show={method === 'select-existing'}
        selectedCode={selectedCode}
        setSelectedCode={setSelectedCode}
      />

      <FillCodeId
        show={method === 'fill-manually'}
        setFetchedCode={setFetchedCode}
      />
    </>
  );
};

const SelectCode = ({
  show,
  selectedCode,
  setSelectedCode,
}: {
  show: boolean;
  selectedCode: CodeInfo | undefined;
  setSelectedCode: (codeInfo: CodeInfo) => void;
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { selectedChain } = useChainStore();
  const { address } = useChain(selectedChain);

  const canInstantiate = useMemo(() => {
    if (!address || !selectedCode) return true;
    return resolvePermission(
      address,
      selectedCode.permission,
      selectedCode.addresses
    );
  }, [address, selectedCode]);

  return (
    <Box display={show ? 'block' : 'none'}>
      <Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p="10px"
          borderRadius="8px"
          bg="$blackAlpha50"
          borderWidth={!canInstantiate ? '1px' : 0}
          borderStyle="solid"
          borderColor="$red600"
        >
          <Box display="flex" alignItems="center" gap="10px">
            <UploadIcon />
            {selectedCode ? (
              <Box>
                <Text
                  color="$blackAlpha600"
                  fontSize="16px"
                  fontWeight="500"
                  attributes={{ mb: '2px' }}
                >
                  {selectedCode.name || 'Untitled Name'}
                </Text>
                <Box display="flex" gap="6px" alignItems="center">
                  <Text color="$blackAlpha500" fontSize="12px" fontWeight="500">
                    Code ID {selectedCode.id}
                  </Text>
                  <Box
                    width="3px"
                    height="3px"
                    borderRadius="50%"
                    bg="$blackAlpha500"
                  />
                  <PermissionTag permission={selectedCode.permission} />
                </Box>
              </Box>
            ) : (
              <Text color="$blackAlpha600" fontSize="16px" fontWeight="500">
                Choose Code
              </Text>
            )}
          </Box>
          <Button onClick={onOpen} variant="text" px="10px">
            {selectedCode ? 'Change Code' : 'Browse'}
          </Button>
        </Box>
        {!canInstantiate && (
          <Text
            color="$red600"
            fontSize="12px"
            fontWeight="500"
            wordBreak="break-all"
            attributes={{ mt: '6px' }}
          >
            This wallet does not have permission to instantiate this code
          </Text>
        )}
      </Box>
      <SelectCodeModal
        isOpen={isOpen}
        onClose={onClose}
        onRowSelect={(code) => setSelectedCode(code)}
      />
    </Box>
  );
};

type Status = {
  state: 'init' | 'loading' | 'success' | 'error';
  message?: string;
};

const FillCodeId = ({
  show,
  setFetchedCode,
}: {
  show: boolean;
  setFetchedCode: (codeInfo: CodeInfo | undefined) => void;
}) => {
  const [status, setStatus] = useState<Status>({ state: 'init' });
  const [codeId, setCodeId] = useState('');

  const { selectedChain } = useChainStore();
  const { address } = useChain(selectedChain);
  const { refetch } = useCodeDetails(Number(codeId), false);

  useEffect(() => {
    setStatus({ state: 'init' });
    setFetchedCode(undefined);
    if (codeId.length) {
      if (!isValidCodeId(codeId)) {
        return setStatus({ state: 'error', message: 'Invalid Code ID' });
      }

      setStatus({ state: 'loading' });

      const timer = setTimeout(() => {
        refetch().then(({ data }) => {
          setFetchedCode(data);

          if (!data) {
            return setStatus({
              state: 'error',
              message: 'This code ID does not exist',
            });
          }

          const hasPermission = resolvePermission(
            address || '',
            data.permission,
            data.addresses
          );

          hasPermission
            ? setStatus({ state: 'success' })
            : setStatus({
                state: 'error',
                message:
                  'This wallet does not have permission to instantiate this code',
              });
        });
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [codeId, refetch]);

  return (
    <Box display={show ? 'block' : 'none'}>
      <InputField title="Code ID">
        <Box position="relative">
          <TextField
            id="code_id"
            type="number"
            intent={status.state === 'error' ? 'error' : 'default'}
            value={codeId}
            onChange={(e) => setCodeId(e.target.value)}
          />
          {codeId.length > 0 && (
            <Box position="absolute" top="10px" right="10px">
              {status.state === 'loading' && (
                <Spinner size="$xl" color="$blackAlpha600" />
              )}
              {status.state === 'success' && (
                <Icon name="checkboxCircle" color="$green600" size="$xl" />
              )}
            </Box>
          )}
        </Box>
        <InputField.Description
          intent={status.state === 'error' ? 'error' : 'default'}
        >
          {status?.message || 'Enter the ID of an existing Code'}
        </InputField.Description>
      </InputField>
    </Box>
  );
};
