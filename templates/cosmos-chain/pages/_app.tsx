import "../styles/globals.css";
import "@interchain-ui/react/styles";

import type { AppProps } from "next/app";
import { SignerOptions, wallets } from "cosmos-kit";
import { ChainProvider } from "@cosmos-kit/react";
import { assets, chains } from "chain-registry";

import {
  Box,
  ThemeProvider,
  Toaster,
  useColorModeValue,
  useTheme,
} from "@interchain-ui/react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

function CreateCosmosApp({ Component, pageProps }: AppProps) {
  const { themeClass } = useTheme();

  const signerOptions: SignerOptions = {
    // signingStargate: () => {
    //   return getSigningCosmosClientOptions();
    // }
  };

  return (
    <ThemeProvider>
      <ChainProvider
        chains={chains}
        assetLists={assets}
        wallets={wallets}
        walletConnectOptions={{
          signClient: {
            projectId: "a8510432ebb71e6948cfd6cde54b70f7",
            relayUrl: "wss://relay.walletconnect.org",
            metadata: {
              name: "CosmosKit Template",
              description: "CosmosKit dapp template",
              url: "https://docs.cosmology.zone/cosmos-kit/",
              icons: [],
            },
          },
        }}
        signerOptions={signerOptions}
      >
        <Box
          className={themeClass}
          minHeight="100dvh"
          backgroundColor={useColorModeValue("$white", "$background")}
        >
          <QueryClientProvider client={queryClient}>
            {/* @ts-ignore */}
            <Component {...pageProps} />
          </QueryClientProvider>
        </Box>
      </ChainProvider>
      <Toaster position={"top-right"} closeButton={true} />
    </ThemeProvider>
  );
}

export default CreateCosmosApp;
