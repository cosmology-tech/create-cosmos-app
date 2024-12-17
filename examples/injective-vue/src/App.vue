<script setup lang="ts">
import { ThemeProvider } from '@interchain-ui/vue'
import { ChainProvider } from '@interchain-kit/vue'
import { keplrWallet } from '@interchain-kit/keplr-extension';
import { leapWallet } from '@interchain-kit/leap-extension';
import { RouterView } from 'vue-router';
import { chain as junoChain, assetList as junoAssetList } from "@chain-registry/v2/mainnet/juno";
import { chain as osmosisChain, assetList as osmosisAssetList } from "@chain-registry/v2/mainnet/osmosis";
import { chain as cosmoshubChain, assetList as cosmoshubAssetList } from "@chain-registry/v2/mainnet/cosmoshub";
import { chain as stargazeChain, assetList as stargazeAssetList } from "@chain-registry/v2/mainnet/stargaze";
import { chain as xplaChain, assetList as xplaAssetList} from "@chain-registry/v2/mainnet/xpla"
import { chain as osmosisTestChain, assetList as osmosisTestAssetList } from "@chain-registry/v2/testnet/osmosistestnet"
import { chain as injectiveChain, assetList as injectiveAssetList } from "@chain-registry/v2/mainnet/injective"
</script>

<template>
  <ThemeProvider>
    <ChainProvider 
      :wallets="[keplrWallet, leapWallet]"
      :chains="[osmosisChain, junoChain, cosmoshubChain, stargazeChain, xplaChain, osmosisTestChain, injectiveChain]"
      :asset-lists="[osmosisAssetList, junoAssetList, cosmoshubAssetList, stargazeAssetList, xplaAssetList, osmosisTestAssetList, injectiveAssetList]" :signer-options="{}"
      :endpoint-options="{}">
      <router-view />
    </ChainProvider>
  </ThemeProvider>
</template>

<style scoped></style>
