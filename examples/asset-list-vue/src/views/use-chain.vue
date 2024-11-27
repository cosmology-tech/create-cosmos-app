<script setup lang="ts">
import { ref } from 'vue'
import { useChain } from '@interchain-kit/vue';
import { createGetBalance } from "interchainjs/cosmos/bank/v1beta1/query.rpc.func";
import { createSend } from "interchainjs/cosmos/bank/v1beta1/tx.rpc.func";
import { coins } from "@cosmjs/amino";

const chainName = ref('osmosis')
const {
  logoUrl, openView, connect, disconnect, wallet, address,
  status, username, message, chain, rpcEndpoint, signingClient
} = useChain(chainName);

const recipientAddress = ref('')
const amount = ref('')
const balance = ref()

const handleBalanceQuery = async () => {
  const balanceQuery = createGetBalance(rpcEndpoint.value as string);
  const { balance: bc } = await balanceQuery({
    address: address.value,
    denom: chain.value.staking?.stakingTokens[0].denom as string,
  });
  balance.value = bc?.amount
}

const handleSendToken = async () => {
  const denom = chain.value.staking?.stakingTokens[0].denom as string;
  const txSend = createSend(signingClient.value);
  const fee = {
    amount: coins(25000, denom),
    gas: "1000000",
  };
  try {
    const tx = await txSend(
      address.value,
      {
        fromAddress: address.value,
        toAddress: recipientAddress.value,
        amount: [
          { denom: denom, amount: amount.value },
        ],
      },
      fee,
      "test"
    );
    console.log(tx);
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <div>
    <select v-model="chainName" className="h-9 px-3 mr-4 border rounded-md shadow-sm">
      <!-- <option value="osmosistestnet">Osmosis Testnet</option> -->
      <option value="juno">Juno</option>
      <option value="osmosis">Osmosis</option>
      <option value="stargaze">Stargaze</option>
      <option value="cosmoshub">Cosmos Hub</option>
    </select>
    logo: <img :src="logoUrl" alt="" style="width: 30px;" />
    <div>rpcEndpoint: {{ rpcEndpoint }}</div>
    <div>address: {{ address }}</div>
    <div>balance: {{ balance }} <button @click="handleBalanceQuery">getBalance</button></div>
    <div>walletStatus: {{ status }}</div>
    <div>username: {{ username }}</div>
    <div>message: {{ message }}</div>
    <!-- <button @click="openView">openView</button> -->
    <button v-if="status !== 'Connected'" @click="connect">connect</button>
    <button v-if="status === 'Connected'" @click="disconnect">disconnect</button>
    <div>
      <div>amount: <input v-model="amount" type="text" /></div>
      <div>recipient address: <input v-model="recipientAddress" type="text" style="width: 400px;" /></div>
      <button @click="handleSendToken" :disabled="!recipientAddress && !amount">send</button>
    </div>
  </div>
</template>

<style scoped></style>
