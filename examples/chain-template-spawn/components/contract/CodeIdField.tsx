import { useEffect, useState } from 'react';
import { Box, Icon, Spinner, TextField } from '@interchain-ui/react';
import { useChain } from '@cosmos-kit/react';

import { InputField } from './InputField';
import { useCodeDetails } from '@/hooks';
import { useChainStore } from '@/contexts';
import { CodeInfo, isValidCodeId, resolvePermission } from '@/utils';

export type InputStatus = {
  state: 'init' | 'loading' | 'success' | 'error';
  message?: string;
};

export const CodeIdField = ({
  codeId,
  setCodeId,
  setCodeInfo,
  readonly = false,
  defaultCodeId,
}: {
  codeId: string;
  setCodeId: (codeId: string) => void;
  setCodeInfo: (codeInfo: CodeInfo | undefined) => void;
  readonly?: boolean;
  defaultCodeId?: string;
}) => {
  const [status, setStatus] = useState<InputStatus>({ state: 'init' });

  const { selectedChain } = useChainStore();
  const { address } = useChain(selectedChain);
  const { refetch } = useCodeDetails(Number(codeId), false);

  useEffect(() => {
    if (defaultCodeId) {
      setCodeId(defaultCodeId);
    }
  }, [defaultCodeId]);

  useEffect(() => {
    setStatus({ state: 'init' });
    setCodeInfo(undefined);
    if (codeId.length) {
      if (!isValidCodeId(codeId)) {
        return setStatus({ state: 'error', message: 'Invalid Code ID' });
      }

      setStatus({ state: 'loading' });

      const timer = setTimeout(() => {
        refetch().then(({ data }) => {
          setCodeInfo(data);

          if (!data) {
            return setStatus({
              state: 'error',
              message: 'This code ID does not exist',
            });
          }

          const hasPermission = resolvePermission(
            address || '',
            data.permission,
            data.addresses,
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
    <InputField title="Code ID" required>
      <Box position="relative">
        <TextField
          id="code_id"
          type="number"
          intent={status.state === 'error' ? 'error' : 'default'}
          value={codeId}
          onChange={(e) => setCodeId(e.target.value)}
          readonly={readonly}
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
  );
};
