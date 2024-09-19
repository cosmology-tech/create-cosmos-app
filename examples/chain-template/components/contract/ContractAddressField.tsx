import {
  Box,
  Combobox,
  Icon,
  Spinner,
  Text,
  TextProps,
} from '@interchain-ui/react';
import { InputField } from './InputField';
import { useContractInfo, useMyContracts } from '@/hooks';
import { shortenAddress, validateContractAddress } from '@/utils';
import { useEffect, useState } from 'react';
import { InputStatus } from './CodeIdField';
import { useChainStore } from '@/contexts';
import { useChain } from '@cosmos-kit/react';

type StatusDisplay = {
  icon?: React.ReactNode;
  text?: string;
  textColor?: TextProps['color'];
};

const displayStatus = (status: InputStatus) => {
  const statusMap: Record<InputStatus['state'], StatusDisplay> = {
    loading: {
      icon: <Spinner size="$lg" color="$textSecondary" />,
      text: 'Checking contract address...',
      textColor: '$textSecondary',
    },

    success: {
      icon: <Icon name="checkboxCircle" size="18px" color="$textSuccess" />,
      text: 'Valid contract address',
      textColor: '$text',
    },

    error: {
      icon: <Icon name="errorWarningLine" size="18px" color="$textDanger" />,
      text: status.message || 'Invalid contract address',
      textColor: '$textDanger',
    },

    init: {},
  };

  return statusMap[status.state];
};

type ContractAddressFieldProps = {
  width?: string;
  initialAddress?: string;
  setContractAddress?: (address: string) => void;
};

export const ContractAddressField = ({
  width = '560px',
  initialAddress,
  setContractAddress,
}: ContractAddressFieldProps) => {
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<InputStatus>({ state: 'init' });

  const { selectedChain } = useChainStore();
  const { chain } = useChain(selectedChain);
  const { refetch: fetchContractInfo } = useContractInfo({
    contractAddress: input,
    enabled: false,
  });
  const { data: myContracts = [] } = useMyContracts();

  useEffect(() => {
    if (initialAddress) {
      setInput(initialAddress);
    }
  }, [initialAddress]);

  useEffect(() => {
    setStatus({ state: 'init' });
    setContractAddress?.('');

    if (input.length) {
      const error = validateContractAddress(input, chain.bech32_prefix);

      if (error) {
        return setStatus({ state: 'error', message: error });
      }

      setStatus({ state: 'loading' });

      const timer = setTimeout(() => {
        fetchContractInfo().then(({ data }) => {
          if (!data) {
            return setStatus({
              state: 'error',
              message: 'This contract does not exist',
            });
          }

          setStatus({ state: 'success' });
          setContractAddress?.(input);
        });
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [input, fetchContractInfo, chain.bech32_prefix]);

  const { icon, text, textColor } = displayStatus(status);

  return (
    <InputField title="Contract Address">
      <Combobox
        openOnFocus
        allowsCustomValue
        inputValue={input}
        onInputChange={(input) => {
          setInput(input);
        }}
        onSelectionChange={(value) => {
          if (value) setInput(value as string);
        }}
        styleProps={{ width }}
      >
        {myContracts.map(({ address, contractInfo }) => (
          <Combobox.Item key={address} textValue={address}>
            <Box transform="translateY(2px)">
              <Text>
                {`${shortenAddress(address, 18)} (`}
                <Text as="span" fontWeight="600">
                  {`${contractInfo?.label || 'Unnamed'}`}
                </Text>
                {')'}
              </Text>
            </Box>
          </Combobox.Item>
        ))}
      </Combobox>
      {status.state !== 'init' && (
        <Box display="flex" alignItems="center" gap="6px">
          {icon}
          <Text color={textColor} fontSize="12px">
            {text}
          </Text>
        </Box>
      )}
    </InputField>
  );
};
