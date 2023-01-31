import { CheckIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
  Badge,
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Icon,
  Progress,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { BsDot, BsCheck } from 'react-icons/bs';

export const ProposalCard = ({ openModal }: { openModal: () => void }) => {
  return (
    <Stack spacing={4}>
      <Grid
        h="120px"
        py={4}
        templateColumns="repeat(13, 1fr)"
        // gap={4}
        bgColor="#fbfcfe"
        borderColor="gray.400"
        borderRadius={10}
        transition="all 0.2s linear"
        _hover={{
          backgroundColor: 'gray.100',
          cursor: 'pointer',
        }}
        onClick={() => openModal()}
      >
        <GridItem colSpan={2}>
          <Center w="100%" h="100%">
            # 000029
          </Center>
        </GridItem>
        <GridItem colSpan={9} py={2}>
          <Flex flexDirection="column" h="100%">
            <Flex gap={2} alignItems="center">
              <Text fontSize="lg">Cosmos Option Vaults by CzarDAO</Text>
              <Badge
                colorScheme="purple"
                variant="solid"
                borderRadius={4}
                h="min-content"
              >
                Voted
              </Badge>
            </Flex>
            <Spacer />
            <Flex flexDirection="column" h="44%">
              <Flex alignItems="center" fontSize="sm">
                <Text color="gray.600">Voting end time: &nbsp;</Text>
                <Text color="gray.600" fontWeight="semibold">
                  2023-01-22 02:27
                </Text>
              </Flex>
              <Spacer />
              <Flex gap="1px">
                <Box w="86%" h="3px" bgColor="green.500" />
                <Box w="4%" h="3px" bgColor="red.500" />
                <Box w="10%" h="3px" bgColor="gray.500" />
              </Flex>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem colSpan={2}>
          <Flex
            w="100%"
            h="100%"
            alignItems="center"
            px={4}
            justifyContent="center"
          >
            <Badge colorScheme="purple" variant="subtle" borderRadius={4}>
              <Flex alignItems="center">
                {/* <Icon as={BsDot} fontSize="xl" w="16px" />  */}
                Voting Period
              </Flex>
            </Badge>
          </Flex>
        </GridItem>
      </Grid>

      {/* ------------ */}

      <Grid
        h="120px"
        py={4}
        templateColumns="repeat(13, 1fr)"
        // gap={4}
        bgColor="#fbfcfe"
        borderColor="gray.400"
        borderRadius={10}
        transition="all 0.2s linear"
        _hover={{
          backgroundColor: 'gray.100',
          cursor: 'pointer',
        }}
      >
        <GridItem colSpan={2}>
          <Center w="100%" h="100%">
            # 000029
          </Center>
        </GridItem>
        <GridItem colSpan={9} py={2}>
          <Flex flexDirection="column" h="100%">
            <Flex gap={2} alignItems="center">
              <Text fontSize="lg">
                Community Spend Proposal for AmigoSound Project
              </Text>
            </Flex>
            <Spacer />
            <Flex flexDirection="column" h="44%">
              <Flex alignItems="center" fontSize="sm">
                <Text color="gray.600">Voting end time: &nbsp;</Text>
                <Text color="gray.600" fontWeight="semibold">
                  2023-01-22 02:27
                </Text>
              </Flex>
              <Spacer />
              <Flex gap="1px">
                <Box w="60%" h="3px" bgColor="green.500" />
                <Box w="12%" h="3px" bgColor="red.500" />
                <Box w="28%" h="3px" bgColor="gray.500" />
              </Flex>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem colSpan={2}>
          <Flex
            w="100%"
            h="100%"
            alignItems="center"
            px={4}
            justifyContent="center"
          >
            <Badge colorScheme="green" variant="subtle" borderRadius={4}>
              <Flex>
                {/* <Icon as={BsCheck} fontSize="lg" /> */}
                Passed
              </Flex>
            </Badge>
          </Flex>
        </GridItem>
      </Grid>
    </Stack>
  );
};
