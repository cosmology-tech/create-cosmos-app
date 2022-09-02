import React, { ReactNode } from "react";
import { Stack, useColorModeValue } from "@chakra-ui/react";

export const ConnectWalletCard = ({
  userInfo,
  addressBtn,
  connectWalletButton,
}: {
  userInfo: ReactNode;
  addressBtn: ReactNode;
  connectWalletButton: ReactNode;
}) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      borderRadius="lg"
      bg={useColorModeValue("white", "blackAlpha.400")}
      boxShadow={useColorModeValue(
        "0 0 2px #dfdfdf, 0 0 6px -2px #d3d3d3",
        "0 0 2px #363636, 0 0 8px -2px #4f4f4f"
      )}
      spacing={4}
      px={8}
      py={{ base: 6, md: 12 }}
    >
      {userInfo}
      {addressBtn}
      {connectWalletButton}
    </Stack>
  );
};
