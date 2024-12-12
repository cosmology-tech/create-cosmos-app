<script setup lang="ts">
import { Spinner, Box, Text, Modal } from '@interchain-ui/vue'
import { ref, computed } from 'vue'
import { ProposalStatus, Proposal as IProposal, TallyResult } from '../outputv4/cosmos/gov/v1/gov';
import { useVotingData, } from '../composables/voting/useVotingData';
import { formatDate } from '../utils/voting';
import Proposal from '../components/voting/proposal.vue';

const chainName = ref('cosmoshub')

const { data, isLoading, refetch } = useVotingData(chainName)
const selectedPoposal = ref<IProposal>()
const isModalOpen = ref(false)

function status(s: ProposalStatus) {
  switch (s) {
    case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
      return "pending";
    case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
      return "pending";
    case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
      return "pending";
    case ProposalStatus.PROPOSAL_STATUS_PASSED:
      return "passed";
    case ProposalStatus.PROPOSAL_STATUS_REJECTED:
      return "rejected";
    case ProposalStatus.PROPOSAL_STATUS_FAILED:
      return "rejected";
    default:
      return "pending";
  }
}
function votes(result: TallyResult) {
  return {
    yes: Number(result.yesCount) || 0,
    no: Number(result.noCount) || 0,
    abstain: Number(result.abstainCount) || 0,
    noWithVeto: Number(result.noWithVetoCount) || 0,
  };
}

const proposals = computed(() => {
  const list = [] as IProposal[]
  // @ts-ignore
  data.proposals.value?.forEach((proposal: IProposal) => {
    list.push(proposal)
  })
  return list
})

const clickProposal = async(proposal: IProposal) => {
  console.log('proposal', proposal)
  selectedPoposal.value = proposal
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

</script>

<template>
<Box mb="$20" position="relative">
  <Text fontWeight="600" fontSize="$2xl">Proposals</Text>
  <Box
    v-if="isLoading"
    p="$8"
    borderRadius="$md"
    justifyContent="center"
    display="flex"
  >
    <Spinner
      size="$5xl"
    />
  </Box>
  <Box mt="$12" v-else>
    <Box
      my="$8"
      position="relative"
    > 
      <div 
        v-for="(proposal) in proposals" 
        style="border: 1px solid; cursor: pointer;"
        @click="clickProposal(proposal)"
      >
        <!-- GovernanceProposalItem -->
        <div>id: {{ proposal?.id }}</div>
        <div>status: {{ status(proposal?.status) }}</div>
        <div>finalTallyResult: {{ proposal?.finalTallyResult? votes(proposal.finalTallyResult) : '' }}</div>
        <div>endTime: {{ formatDate(proposal?.votingEndTime) }}</div>
      </div>
    </Box>
  </Box>
  <Modal
    header="header"
    :isOpen="isModalOpen"
    @close="closeModal"
  >
    <Proposal
      v-if="selectedPoposal"
      :votes="data.votes"
      :proposal="selectedPoposal"
      :quorum="data.quorumData"
      :bondedTokens="data.bondedTokens"
      :chainName="chainName"
      :onVoteSuccess="refetch"
    />
  </Modal>
</Box>
</template>

<style scoped></style>
