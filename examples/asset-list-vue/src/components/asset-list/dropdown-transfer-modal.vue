<script setup lang="ts">
import { defineProps } from 'vue'
import { PrettyAsset } from './asset-list-section.vue';
import { TransferInfo } from './assets-overview.vue';
import { PriceHash } from '../../utils/types';

interface OverviewTransferWrapperProps {
  prices: PriceHash;
  assets: PrettyAsset[];
  modalControl: Object
  // updateData: () => void;
  transferInfoState: {
    transferInfo: TransferInfo | undefined;
    setTransferInfo: any;
  }
  selectedChainName: string;
}

const props = defineProps<OverviewTransferWrapperProps>()
console.log('props>>', props)
</script>

<template>
  <div>
    dropdown transfer modal
  </div>
</template>

<style scoped></style>
