<script setup lang="ts">
import { ref, computed, defineProps } from 'vue'
import SingleChain from './single-chain.vue';
import { useTotalAssets } from '../../composables/useTotalAssets';
import { PrettyAsset } from './asset-list-section.vue'
import { truncDecimals, formatDollarValue, AvailableItem, prettyAssetToTransferItem } from '../../utils/format';
import { useAssets } from '../../composables/useAssets';
import DropdownTransferModal from './dropdown-transfer-modal.vue'
import RowTransferModal from './row-transfer-modal.vue';
import BigNumber from 'bignumber.js';
import { useDisclosure } from '../../composables/useDisclosure';
import { CoinDenom, PriceHash, Transfer } from '../../utils/types';
import { useChainUtils } from '../../composables/useChainUtils';

export type TransferValues = typeof Transfer[keyof typeof Transfer];

export type TransferInfo = {
  type: TransferValues;
  sourceChainName: string;
  destChainName: string;
  token: AvailableItem;
};
const props = defineProps<{
  isLoading: Boolean,
  assets: Array<PrettyAsset>,
  prices: PriceHash,
  selectedChainName: string,
}>()

const chainName = ref(props.selectedChainName)
const data = useTotalAssets(chainName)
const { nativeAssets, ibcAssets: ibcAsts } = useAssets(chainName)
const { getDenomByChainName } = useChainUtils(chainName)
const dropdownTransferInfo = ref<TransferInfo>()
const rowTransferInfo = ref<TransferInfo>()
// modalControls
const modalControl = useDisclosure();
const rowModalControl = useDisclosure();
console.log('data>>', data)

const isNativeAsset = ({ denom }: PrettyAsset) => {
  return !!nativeAssets.find((asset) => asset.base === denom);
};

const getChainName = (ibcDenom: CoinDenom) => {
  const nativeAsset = nativeAssets.find((asset) => asset.base === ibcDenom)
  if (nativeAsset) {
    return chainName.value
  }
  const asset = ibcAsts.find((asset) => asset.base === ibcDenom);
  const ibcChainName = asset?.traces?.[0].counterparty.chain_name;
  if (!ibcChainName) throw Error('chainName not found for ibcDenom: ' + ibcDenom);
  return ibcChainName;
};

const assetsToShow = computed(() => {
  const returnAssets = props.assets?.map((asset) => {
    return {
      imgSrc: asset.logoUrl ?? '',
      symbol: asset.symbol,
      denom: asset.denom,
      name: asset.prettyChainName,
      tokenAmount: truncDecimals(asset.displayAmount, 6),
      tokenAmountPrice: formatDollarValue(asset.dollarValue, asset.amount),
      chainName: asset.prettyChainName,
      showDeposit: !isNativeAsset(asset),
      showWithdraw: !isNativeAsset(asset),
      onDeposit: () => {
        const sourceChainName = getChainName(asset.denom);
        const denom = getDenomByChainName(sourceChainName)
        rowTransferInfo.value = {
          sourceChainName,
          type: Transfer.Deposit,
          destChainName: props.selectedChainName,
          token: {
            ...prettyAssetToTransferItem(asset),
            priceDisplayAmount: 0,
            available: 0,
            denom
          }
        }
        rowModalControl.open();
      },
      onWithdraw: () => {
        console.log('onWithdraw..', asset)
        const destChainName = getChainName(asset.denom);

        rowTransferInfo.value = {
          sourceChainName: props.selectedChainName,
          type: Transfer.Withdraw,
          destChainName,
          token: prettyAssetToTransferItem(asset)
        }

        rowModalControl.open();
      }
    }
  })
  return returnAssets
})

const ibcAssets = computed(() => {
  return props.assets?.filter((asset) => !isNativeAsset(asset)) || []
})

const onWithdrawAsset = () => {
  const destChainName = getChainName(ibcAssets.value[0].denom)
  dropdownTransferInfo.value = {
    sourceChainName: props.selectedChainName,
    type: Transfer.Withdraw,
    destChainName,
    token: prettyAssetToTransferItem(ibcAssets.value[0])
  }
}

const onDepositAsset = () => {
  const sourceChainName = getChainName(ibcAssets.value[0].denom);
  const sourceChainAssetDenom = ibcAssets.value[0].denom;
  dropdownTransferInfo.value = {
    sourceChainName,
    type: Transfer.Deposit,
    destChainName: props.selectedChainName,
    token: {
      ...prettyAssetToTransferItem(ibcAssets.value[0]),
      available: 0,
      priceDisplayAmount: 0,
      denom: sourceChainAssetDenom
    }
  }
  // modalControl.open();
};

const setTransferInfo = (info: TransferInfo) => {
  dropdownTransferInfo.value = info
}

const hasBalance = computed(() => {
  return ibcAssets.value.some((asset) => new BigNumber(asset.amount).gt(0))
})

const updateData = () => {
  console.log('updateData>>')
  data.refetch()
}
</script>

<template>
  <SingleChain
    :isLoading="false"
    title="Your assets"
    :listTitle="`On osmosis`"
    :showDeposit="ibcAssets.length > 0"
    :showWithdraw="hasBalance"
    @onDeposit="onDepositAsset"
    @onWithdraw="onWithdrawAsset"
    :singleChainHeader="{
      label: `Total on ${chainName}`,
      value: data.total,
    }"
    :list="assetsToShow"
  />
  <DropdownTransferModal
    v-if="prices && dropdownTransferInfo"
    :prices="prices"
    :assets="ibcAssets"
    :transferInfoState="{
      transferInfo: dropdownTransferInfo,
      setTransferInfo
    }"
    :modalControl="modalControl"
    @update-data=""
    :selectedChainName="selectedChainName"
  />
  <RowTransferModal
    v-if="rowTransferInfo"
    :modalControl="rowModalControl"
    :transferInfo="rowTransferInfo"
    :modal-control="rowModalControl"
    @update-data="updateData"
    :selected-chain-name="selectedChainName"
    :prices="prices"
  />
</template>

<style scoped></style>
