<script setup lang="ts">
import { computed, defineProps, Ref, ComputedRef, ref, onMounted } from 'vue'
import { Box, Stack, Text, Button, Icon } from '@interchain-ui/vue'
import { Proposal, ProposalStatus } from '../../outputv4/cosmos/gov/v1/gov'
import { formatDate } from '../../utils/voting';
import { useVoting } from '../../composables/voting/useVoting';
import { exponentiate, percent } from '../../utils/voting';
import { useAssets } from '../../composables/useAssets';
export interface Votes {
  [key: string]: number;
}

export type ProposalProps = {
  proposal: Proposal;
  votes?: ComputedRef<Votes>;
  quorum?: Ref<number|undefined>;
  bondedTokens?: Ref<string | undefined>;
  chainName: string;
  onVoteSuccess?: () => void;
};
const VoteTypes = ["", "yes", "abstain", "no", "noWithVeto"];
const props = defineProps<ProposalProps>()
const chainName = ref(props.chainName)
const proposal = ref(props.proposal)
const { allAssets } = useAssets(chainName)
const voteType = ref()
const { isVoting, onVote } = useVoting({
  chainName,
  proposal
})

const isPassed = computed(() => {
  return props.proposal.status === ProposalStatus.PROPOSAL_STATUS_PASSED
})
const isRejected = computed(() => {
  return props.proposal.status === ProposalStatus.PROPOSAL_STATUS_REJECTED
})
const isDepositPeriod = computed(() => {
  return props.proposal.status === ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD
})
const isVotingPeriod = computed(() => {
  return props.proposal.status === ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD
})

const total = computed(() => {
  return props.proposal.finalTallyResult
    ? Object.values(props.proposal.finalTallyResult).reduce(
      (sum, val) => sum + Number(val),
      0,
    )
    : 0;
})

const turnout = computed(() => {
  return total.value / Number(props.bondedTokens?.value);
})

const timepoints = computed(() => {
  return [
    {
      label: "Submit Time",
      timestamp: formatDate(props.proposal?.submitTime!) || "",
    },
    {
      label: "Voting Starts",
      timestamp: isDepositPeriod.value
        ? "Not Specified Yet"
        : formatDate(props.proposal.votingStartTime) || "",
    },
    {
      label: "Voting Ends",
      timestamp: isDepositPeriod.value
        ? "Not Specified Yet"
        : formatDate(props.proposal?.votingEndTime!) || "",
    },
  ]
});

const vote = computed(() => {
  return props.votes?.value?.[props.proposal.id.toString()]
})

console.log('props.votes?.value', props.votes)
console.log('props.proposal.id.toString()', props.proposal.id.toString())
console.log('vote>！', vote)

onMounted(() => {
  if (typeof vote.value === 'number') {
    voteType.value = VoteTypes[vote.value];
  }
})

const options = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
  { value: 'noWithVeto', label: 'No with veto' },
  { value: 'abstain', label: 'Abstain'}
]

const isChanged = computed(() => {
  return (vote.value === undefined && voteType.value) ||
    (typeof vote.value === "number" && voteType.value !== VoteTypes[vote.value]);
})

const onVoteButtonClick = () => {
  if (!voteType.value) return;

  onVote({
    option: VoteTypes.indexOf(voteType.value),
    success: () => {
      console.log('success.')
    },
  });
}

const exponent = computed(() => {
  return (allAssets[0].denom_units.find((unit) => unit.denom === allAssets[0].display))?.exponent
})

const minStakedTokens = computed(() => {
  return props.quorum?.value && exponentiate(props.quorum.value * Number(props.bondedTokens?.value), -(exponent.value || 0)).toFixed(6);
})

const coin = computed(() => {
  return allAssets[0]
})

</script>

<template>
  <Box py="$12" minWidth="40rem" maxWidth="40rem">
    <Box
      backgroundColor="$cardBg"
      display="flex"
      flexDirection="column"
      gap="$10"
      :p="{
        mobile: '$9',
        tablet: '$10',
        desktop: '$10',
      }"
      borderRadius="$lg"
    >
      <Box display="flex" justifyContent="space-between">
        <Stack v-for="(timepoint, i) in timepoints" :key="i" direction="vertical" space="$1">
          <Text
            color="$textSecondary"
            fontSize="$sm"
            fontWeight="$semibold"
          >
            {{timepoint.label}}
          </Text>
          <Text color="$textSecondary" fontSize="$sm" fontWeight="$normal">
            {{timepoint.timestamp}}
          </Text>
        </Stack>
      </Box>
      <Box :display="!isVotingPeriod && !vote ? 'none' : 'block'">
        <div v-for="option in options" :key="option.value">
          <input
            type="radio"
            :id="option.value"
            :value="option.value"
            v-model="voteType"
          />
          <label :for="option.value">{{ option.label }}</label>
        </div>
      </Box>
      <Button
        intent="tertiary"
        :isLoading="isVoting"
        :disabled="!isVotingPeriod || isVoting ||
          isVotingPeriod && !isChanged"
        @click="onVoteButtonClick"
      >
        {{vote ? "Update Vote" : "Vote"}}
      </Button>
    </Box>
    <Stack
      direction="vertical"
      space="$6"
      :attributes="{
        marginY: '$12',
      }"
    >
      <Text
        color="$textSecondary"
        fontSize="$lg"
        fontWeight="$semibold"
      >
        Vote Details
      </Text>
      <Text
        v-if="quorum?.value"
        color="$textSecondary"
        fontSize="$xs"
        fontWeight="$normal"
        :attributes="{
          display: 'flex',
          alignItems: 'center',
        }"
      >
        <Icon
          name="informationLine"
          color="$textSecondary"
          size="$sm"
          :attributes="{
            marginRight: '$2',
          }"
        />
        <Text
          as="span"
          color="inherit"
          fontWeight="$semibold"
          fontSize="$xs"
          :attributes="{
            px: '$2',
          }"
        >
          {{`Minimum of staked ${minStakedTokens} ${coin.symbol}(${quorum.value * 100
            }%) need to vote
      for this proposal to pass.`}}
        </Text>
      </Text>
    </Stack>
    <Box display="flex" gap="$17" marginBottom="$12">
      <Box display="flex" flex="1" flexDirection="column" gap="$4">
        <div>
          <div>voteType: abstain</div>
          <div>votePercentage: {{ percent(proposal.finalTallyResult?.yesCount, total) }}</div>
          <div>description: {{ exponentiate(proposal.finalTallyResult?.yesCount, -(exponent || 0)).toFixed(2) }} {{ coin.symbol }}</div>
        </div>
        <div>
          <div>voteType: no</div>
          <div>votePercentage: {{ percent(proposal.finalTallyResult?.noCount, total) }}</div>
          <div>description: {{ exponentiate(proposal.finalTallyResult?.noCount, -(exponent || 0)).toFixed(2) }} {{ coin.symbol }}</div>
        </div>
        <div>
          <div>voteType: noWithVeto</div>
          <div>votePercentage: {{ percent(proposal.finalTallyResult?.noWithVetoCount, total) }}</div>
          <div>description: {{ exponentiate(proposal.finalTallyResult?.noWithVetoCount, -(exponent || 0)).toFixed(2) }} {{ coin.symbol }}</div>
        </div>
      </Box>
      <Box display="flex" flexDirection="column" gap="$12">
        <div v-if="isPassed">
          resultType: passed
          votePercentage: {{ percent(proposal.finalTallyResult?.yesCount, total) }}
        </div>
        <div v-if="isRejected">
          resultType: rejected
          votePercentage: {{ percent(proposal.finalTallyResult?.noWithVetoCount, total) }}
        </div>
        <div>
          resultType: info
          votePercentage: {{ +(turnout * 100).toFixed(2) }}
        </div>
      </Box>
    </Box>
  </Box>
</template>

<style scoped></style>
