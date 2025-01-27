import Link from "next/link";
import Image from "next/image";
import { Box, Text } from "@interchain-ui/react";

import logo from "../../images/cosmology-name-logo.svg";

export function Footer() {
  return (
    <Box
      gap="$6"
      pt="$10"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderTopWidth="1px"
      borderTopColor="$gray100"
      borderTopStyle="solid"
    >
      <Text color="$gray500" fontSize="$xs">Built with</Text>
      <Link href="https://hyperweb.io/" target="_blank">
        <Image src={logo} alt="Hyperweb Logo" width={110} />
      </Link>
    </Box>
  );
}
