import React from "react";
import { Box, Heading, Stack, Text, useColorMode } from "@chakra-ui/react";
import { handleChangeColorModeValue } from "./handleChangeColor";

type SendTokensCardType = {
  balance?: string;
  isConnectWallet: boolean;
};

export const HackCw20 = ({ balance, isConnectWallet }: SendTokensCardType) => {
  const { colorMode } = useColorMode();

  if (!isConnectWallet) {
    return (
      <Box boxShadow="0 0 2px #ccc, 0 0 5px -1px #ccc" borderRadius="lg" p={5}>
        <Heading
          as="h3"
          textAlign="center"
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="extrabold"
          color="primary.400"
          m={30}
        >
          Please Connect Your Wallet!
        </Heading>
      </Box>
    );
  }

  return (
    <Stack
      boxShadow={handleChangeColorModeValue(
        colorMode,
        "0 0 2px #dfdfdf, 0 0 6px -2px #d3d3d3",
        "0 0 2px #212121, 0 0 6px -2px #8a8a8a"
      )}
      borderRadius="lg"
      w="full"
      maxW="md"
      p={6}
      pt={7}
      spacing={6}
    >
      <Box
        bg={handleChangeColorModeValue(
          colorMode,
          "blackAlpha.50",
          "blackAlpha.300"
        )}
        borderRadius="md"
        border="1px solid"
        borderColor={handleChangeColorModeValue(
          colorMode,
          "gray.300",
          "gray.600"
        )}
        p={4}
      >
        <Text>
          Balance:&ensp;
          <Text
            as="span"
            color={handleChangeColorModeValue(
              colorMode,
              "primary.500",
              "primary.200"
            )}
            fontWeight="semibold"
            fontSize="xl"
          >
            {balance}
          </Text>
        </Text>
      </Box>
    </Stack>
  );
};
