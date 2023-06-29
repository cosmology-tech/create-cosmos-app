import { ReactElement } from 'react';
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
  ListItem,
  UnorderedList,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';

export const ValidatorInfo = ({
  imgUrl,
  name,
  commission,
  apr,
}: {
  imgUrl: string;
  name: string;
  commission: number | string;
  apr: string | number;
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
        Commission {commission}%&nbsp;
        {Number.isNaN(Number(apr)) ? '' : `| APR ${apr}%`}
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
