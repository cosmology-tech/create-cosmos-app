import { ChangeEvent, useState } from 'react';
import {
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { StatBox } from '../components/react/delegate-modal';

export const InputBox = ({
  label,
  token,
  value,
  onChange,
  onMaxClick,
  isMaxBtnLoading = false,
}: {
  label: string;
  token: string;
  value: number | string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onMaxClick: () => void;
  isMaxBtnLoading?: boolean;
}) => (
  <StatBox
    label={label}
    token={token}
    input={
      <InputGroup mt={2}>
        <Input type="number" value={value} onChange={onChange} />
        <InputRightElement
          mr={3}
          width={24}
          display="flex"
          justifyContent="space-between"
        >
          <Button
            w="42px"
            h="22px"
            fontSize="12px"
            borderRadius="4px"
            color="white"
            variant="solid"
            colorScheme="cyan"
            fontWeight="bold"
            disabled={isMaxBtnLoading}
            onClick={onMaxClick}
            isLoading={isMaxBtnLoading}
            _hover={{ cursor: 'pointer' }}
          >
            MAX
          </Button>
          <Text fontSize="sm" fontWeight="bold" lineHeight="none">
            {token}
          </Text>
        </InputRightElement>
      </InputGroup>
    }
  />
);

export const useInputBox = (maxAmount?: number) => {
  const [amount, setAmount] = useState<number | string>('');
  const [max, setMax] = useState<number>(maxAmount || 0);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) > max) {
      setAmount(max);
      return;
    }

    if (e.target.value === '') {
      setAmount('');
      return;
    }

    setAmount(+Number(e.target.value).toFixed(6));
  };

  const renderInputBox = (
    label: string,
    token: string,
    onMaxClick?: () => void,
    isLoading?: boolean
  ) => {
    return (
      <InputBox
        label={label}
        token={token}
        value={amount}
        isMaxBtnLoading={isLoading}
        onChange={(e) => handleInputChange(e)}
        onMaxClick={() => (onMaxClick ? onMaxClick() : setAmount(max))}
      />
    );
  };

  return { renderInputBox, amount, setAmount, setMax };
};
