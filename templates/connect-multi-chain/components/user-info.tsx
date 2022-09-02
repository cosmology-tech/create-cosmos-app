import React from "react";
import {
  Text,
  Stack,
  Box,
  Image,
  Icon,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoMdWallet } from "react-icons/io";
import { ConnectedUserCardType } from "./types";

export const ConnectedUserInfo = ({
  walletIcon,
  username,
  icon,
}: ConnectedUserCardType) => {
  return (
    <Stack spacing={1} alignItems="center">
      <Box
        display={icon ? "block" : "none"}
        minW={20}
        maxW={20}
        w={20}
        minH={20}
        maxH={20}
        h={20}
        borderRadius="full"
        overflow="hidden"
      >
        {icon}
      </Box>
      {username && (
        <Stack isInline={true} alignItems="center">
          {walletIcon ? (
            <Box minW={5} maxW={5} w={5} minH={5} maxH={5} h={5}>
              <Image src={walletIcon} />
            </Box>
          ) : (
            <Center
              borderRadius="full"
              p={1.5}
              bg={useColorModeValue("purple.50", "purple.700")}
              color={useColorModeValue("purple.700", "purple.100")}
            >
              <Icon as={IoMdWallet} />
            </Center>
          )}
          <Text fontSize={{ md: "xl" }} fontWeight="semibold">
            {username}
          </Text>
        </Stack>
      )}
    </Stack>
  );
};
