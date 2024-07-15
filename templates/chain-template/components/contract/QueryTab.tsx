import { useMemo, useRef, useState } from 'react';
import { Box, Text } from '@interchain-ui/react';
import { LuFileInput } from 'react-icons/lu';

import { Button } from '@/components';
import { JsonInput } from './JsonInput';
import { ContractInfo } from './ContractInfo';
import { countJsonLines, validateJson } from '@/utils';
import { CopyButton } from './CopyButton';
import { useDetectBreakpoints, useQueryContract } from '@/hooks';
import { JsonEditor } from './JsonEditor';

export const MIN_LINES = 16;

type QueryTabProps = {
  show: boolean;
};

export const QueryTab = ({ show }: QueryTabProps) => {
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
    return Math.max(MIN_LINES, countJsonLines(res));
  }, [res]);

  const isMsgValid = validateJson(queryMsg) === null;

  const isQueryButtonDisabled = !contractAddress || !isMsgValid;

  const { isMobile } = useDetectBreakpoints();

  return (
    <Box display={show ? 'block' : 'none'}>
      <ContractInfo setContractAddress={setContractAddress} mb="30px" />

      <Text fontSize="16px" fontWeight="700" attributes={{ mb: '20px' }}>
        Query Message
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
            Query Msg
          </Text>
          <JsonInput value={queryMsg} setValue={setQueryMsg} height="342px" />
        </Box>

        <Box flex="1">
          <Text fontSize="16px" fontWeight="500" attributes={{ mb: '10px' }}>
            Return Output
          </Text>
          <Box
            borderWidth="1px"
            borderStyle="solid"
            borderColor={isJsonValid ? '$blackAlpha300' : '$red600'}
            borderRadius="4px"
            height="342px"
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
        </Box>
      </Box>

      <Box display="flex" gap="10px" alignItems="center">
        <CopyButton value={queryMsg} disabled={!queryMsg} />
        <Button
          rightIcon={<LuFileInput size="18px" />}
          disabled={isQueryButtonDisabled}
          onClick={queryContract}
          isLoading={isFetching}
          px="10px"
        >
          Query
        </Button>
      </Box>
    </Box>
  );
};
