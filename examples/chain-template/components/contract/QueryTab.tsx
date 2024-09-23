import { useMemo, useRef, useState } from 'react';
import { Box, Text } from '@interchain-ui/react';

import { ContractAddressField } from './ContractAddressField';
import { InputField } from './InputField';
import { JsonInput } from './JsonInput';
import { Button } from '../common';
import { JsonEditor } from './JsonEditor';
import { useQueryContract } from '@/hooks';
import { countJsonLines, validateJson } from '@/utils';

const INPUT_LINES = 12;
const OUTPUT_LINES = 12;

type QueryTabProps = {
  show: boolean;
  addressValue: string;
  onAddressInput: (input: string) => void;
};

export const QueryTab = ({
  show,
  addressValue,
  onAddressInput,
}: QueryTabProps) => {
  const [contractAddress, setContractAddress] = useState('');
  const [queryMsg, setQueryMsg] = useState('');

  const {
    data: queryResult,
    refetch: queryContract,
    error: queryContractError,
    isFetching,
  } = useQueryContract({
    contractAddress,
    queryMsg,
    enabled: false,
  });

  const prevResultRef = useRef('');

  const res = useMemo(() => {
    if (isFetching) {
      return prevResultRef.current;
    } else {
      const newResult = queryResult
        ? JSON.stringify(queryResult, null, 2)
        : queryContractError
          ? (queryContractError as Error)?.message || 'Unknown error'
          : '';

      prevResultRef.current = newResult;

      return newResult;
    }
  }, [isFetching]);

  const isJsonValid = useMemo(() => {
    return validateJson(res) === null || res.length === 0;
  }, [res]);

  const lines = useMemo(() => {
    return Math.max(OUTPUT_LINES, countJsonLines(res));
  }, [res]);

  const isMsgValid = validateJson(queryMsg) === null;

  const isQueryButtonDisabled = !contractAddress || !isMsgValid;

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
        Query Contract
      </Text>
      <ContractAddressField
        addressValue={addressValue}
        onAddressInput={onAddressInput}
        onValidAddressChange={setContractAddress}
      />
      <InputField title="Query Message">
        <JsonInput
          value={queryMsg}
          setValue={setQueryMsg}
          minLines={INPUT_LINES}
          height="250px"
        />
      </InputField>
      <Button
        disabled={isQueryButtonDisabled}
        onClick={queryContract}
        isLoading={isFetching}
        width="100%"
        variant="primary"
      >
        Query
      </Button>
      <InputField title="Return Output">
        <Box
          borderWidth="1px"
          borderStyle="solid"
          borderColor={isJsonValid ? '$blackAlpha300' : '$red600'}
          borderRadius="4px"
          height="250px"
          overflowY="auto"
          p="10px"
        >
          <JsonEditor
            value={res}
            lines={lines}
            isValid={isJsonValid}
            readOnly
          />
        </Box>
      </InputField>
    </Box>
  );
};
