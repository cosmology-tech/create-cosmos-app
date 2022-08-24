import React, { ReactNode } from "react";
import { Text, Stack, Box } from "@chakra-ui/react";
import { ConnectedUserCardType } from "./types";

export const ConnectedUserCard = ({
  userName,
  icon,
}: ConnectedUserCardType) => {
  return (
    <Stack
      isInline={true}
      spacing={2}
      justifyContent="center"
      alignItems="center"
      w="full"
      minW="fit-content"
    >
      <Box
        display={icon ? "block" : "none"}
        minW={12}
        maxW={12}
        w={12}
        minH={12}
        maxH={12}
        h={12}
        borderRadius="full"
        overflow="hidden"
      >
        {icon}
      </Box>
      <Text fontSize={{ lg: "lg" }} fontWeight="semibold">
        {userName}
      </Text>
    </Stack>
  );
};

export const ConnectedUserInfo = ({
  name,
  icon,
}: {
  name: string;
  icon?: ReactNode;
}) => {
  return <ConnectedUserCard userName={name} icon={icon} />;
};
