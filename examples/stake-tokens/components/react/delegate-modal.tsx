import { ChangeEvent, ReactElement, useState } from 'react';
import { Token } from './stats';
import {
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  AlertDescription,
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  Input,
  InputGroup,
  InputRightElement,
  Tag,
  ListItem,
  UnorderedList,
  useColorModeValue,
  useToast,
  Center,
} from '@chakra-ui/react';
import { TransactionResult } from '../types';

export const ValidatorInfo = ({
  imgUrl,
  name,
  commission,
  apr,
}: {
  imgUrl: string;
  name: string;
  commission: number | string;
  apr: number;
}) => (
  <Flex alignItems="center" gap={4} mb={4}>
    {imgUrl ? (
      <Image borderRadius="full" boxSize="60px" src={imgUrl} alt={name} />
    ) : (
      <Center boxSize="60px" borderRadius="full" bgColor="gray.400">
        {name.slice(0, 1).toUpperCase()}
      </Center>
    )}
    <Stack>
      <Heading as="h4" size="md">
        {name}
      </Heading>
      <Text>
        Commission {commission}% | APR {apr}%
      </Text>
    </Stack>
  </Flex>
);

export const ValidatorDesc = ({ description }: { description: string }) => (
  <Text mb={4}>{description}</Text>
);

export const DelegateWarning = ({
  unbondingDays,
}: {
  unbondingDays: number;
}) => {
  if (!unbondingDays) return <></>;

  return (
    <Alert
      status="error"
      borderRadius={10}
      flexDir="column"
      alignItems="flex-start"
      bgColor="red.50"
      mt={4}
    >
      <Flex>
        <AlertIcon />
        <AlertTitle color="red.500">
          Staking will lock your funds for {unbondingDays} days
        </AlertTitle>
      </Flex>
      <AlertDescription fontSize="sm" color="red.400" lineHeight="short" mt={2}>
        You will need to undelegate in order for your staked assets to be liquid
        again. This process will take {unbondingDays} days to complete.
      </AlertDescription>
    </Alert>
  );
};

export const UndelegateWarning = ({
  unbondingDays,
}: {
  unbondingDays: number;
}) => {
  if (!unbondingDays) return <></>;

  return (
    <Alert
      status="error"
      borderRadius={10}
      flexDir="column"
      alignItems="flex-start"
      bgColor="red.50"
    >
      <Flex>
        <AlertIcon />
        <AlertTitle color="red.500">
          Once the unbonding period begins you will:
        </AlertTitle>
      </Flex>
      <AlertDescription
        fontSize="sm"
        color="red.400"
        lineHeight="short"
        mt={2}
        ml={1}
      >
        <UnorderedList>
          <ListItem>not receive staking rewards</ListItem>
          <ListItem>not be able to cancel the unbonding</ListItem>
          <ListItem>
            need to wait {unbondingDays} days for the amount to be liquid
          </ListItem>
        </UnorderedList>
      </AlertDescription>
    </Alert>
  );
};

export const StatBox = ({
  label,
  number,
  input,
  token,
}: {
  label: string;
  number?: number;
  input?: ReactElement;
  token: string;
}) => {
  return (
    <Box
      borderRadius={10}
      bgColor={useColorModeValue('gray.50', 'gray.600')}
      border="1px solid"
      borderColor="blackAlpha.200"
      width="100%"
      padding="30px 40px"
      display="flex"
      alignItems="center"
    >
      <Stat>
        <StatLabel>{label}</StatLabel>
        {input ? (
          input
        ) : (
          <StatNumber>
            {number} <Token color="blackAlpha.800" token={token} />
          </StatNumber>
        )}
      </Stat>
    </Box>
  );
};

export const InputBox = ({
  label,
  token,
  value,
  onChange,
  onMaxClick,
}: {
  label: string;
  token: string;
  value: number | string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onMaxClick: () => void;
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
          <Tag
            size="md"
            variant="solid"
            colorScheme="cyan"
            fontWeight="bold"
            onClick={onMaxClick}
            _hover={{ cursor: 'pointer' }}
          >
            MAX
          </Tag>
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

  const renderInputBox = (label: string, token: string) => {
    return (
      <InputBox
        label={label}
        token={token}
        value={amount}
        onChange={(e) => handleInputChange(e)}
        onMaxClick={() => setAmount(max)}
      />
    );
  };

  return { renderInputBox, amount, setAmount, setMax };
};

export const useTransactionToast = () => {
  const toast = useToast();

  const showToast = (code: number) => {
    toast({
      title: `Transaction ${
        code === TransactionResult.Success ? 'successful' : 'failed'
      }`,
      status: code === TransactionResult.Success ? 'success' : 'error',
      duration: 3000,
      isClosable: true,
      position: 'top-right',
    });
  };

  return { showToast };
};
