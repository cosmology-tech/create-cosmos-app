import Link from "next/link";
import { Box, Button, Text } from "@interchain-ui/react";
import Connect from "./Connect";

export function Hero() {
  return (
    <Box display="flex" my="$14">
      <Box mt="$14" maxWidth="500px">
        <Text
          color="$purple400"
          fontSize="$lg"
          fontWeight="$medium"
          attributes={{ display: "block" }}
        >
          Build and grow projects in light speed
        </Text>
        <Text
          fontSize="64px"
          fontWeight="$medium"
          attributes={{
            mt: "$10",
            mb: "$10",
            display: "block",
          }}
        >
          Build web3 apps in light speed
        </Text>
        <Text
          color="$gray500"
          fontSize="$sm"
          lineHeight="$tall"
          attributes={{
            display: "block",
            marginTop: "$7",
          }}
        >
          Hyperweb develops cutting-edge tools for the interchain ecosystem,
          empowering seamless interactions across the Internet of Blockchains.
        </Text>
        <Link href="/components" style={{ display: "inline-block" }}>
          <Button intent="tertiary" attributes={{ mt: "$10" }}>
            View Components
          </Button>
        </Link>
      </Box>
      <Box display={{ mobile: "none", desktop: "block" }}>
        <Connect />
      </Box>
    </Box>
  );
}
