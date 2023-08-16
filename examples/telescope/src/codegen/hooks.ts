import { ProtobufRpcClient } from "@cosmjs/stargate";
import * as _CosmosAppV1alpha1Queryrpc from "./cosmos/app/v1alpha1/query.rpc.Query";
import * as _CosmosAuthV1beta1Queryrpc from "./cosmos/auth/v1beta1/query.rpc.Query";
import * as _CosmosAuthzV1beta1Queryrpc from "./cosmos/authz/v1beta1/query.rpc.Query";
import * as _CosmosBankV1beta1Queryrpc from "./cosmos/bank/v1beta1/query.rpc.Query";
import * as _CosmosBaseTendermintV1beta1Queryrpc from "./cosmos/base/tendermint/v1beta1/query.rpc.Service";
import * as _CosmosDistributionV1beta1Queryrpc from "./cosmos/distribution/v1beta1/query.rpc.Query";
import * as _CosmosEvidenceV1beta1Queryrpc from "./cosmos/evidence/v1beta1/query.rpc.Query";
import * as _CosmosFeegrantV1beta1Queryrpc from "./cosmos/feegrant/v1beta1/query.rpc.Query";
import * as _CosmosGovV1Queryrpc from "./cosmos/gov/v1/query.rpc.Query";
import * as _CosmosGovV1beta1Queryrpc from "./cosmos/gov/v1beta1/query.rpc.Query";
import * as _CosmosGroupV1Queryrpc from "./cosmos/group/v1/query.rpc.Query";
import * as _CosmosMintV1beta1Queryrpc from "./cosmos/mint/v1beta1/query.rpc.Query";
import * as _CosmosNftV1beta1Queryrpc from "./cosmos/nft/v1beta1/query.rpc.Query";
import * as _CosmosParamsV1beta1Queryrpc from "./cosmos/params/v1beta1/query.rpc.Query";
import * as _CosmosSlashingV1beta1Queryrpc from "./cosmos/slashing/v1beta1/query.rpc.Query";
import * as _CosmosStakingV1beta1Queryrpc from "./cosmos/staking/v1beta1/query.rpc.Query";
import * as _CosmosTxV1beta1Servicerpc from "./cosmos/tx/v1beta1/service.rpc.Service";
import * as _CosmosUpgradeV1beta1Queryrpc from "./cosmos/upgrade/v1beta1/query.rpc.Query";
import * as _CosmwasmWasmV1Queryrpc from "./cosmwasm/wasm/v1/query.rpc.Query";
import * as _IbcApplicationsTransferV1Queryrpc from "./ibc/applications/transfer/v1/query.rpc.Query";
import * as _IbcCoreChannelV1Queryrpc from "./ibc/core/channel/v1/query.rpc.Query";
import * as _IbcCoreClientV1Queryrpc from "./ibc/core/client/v1/query.rpc.Query";
import * as _IbcCoreConnectionV1Queryrpc from "./ibc/core/connection/v1/query.rpc.Query";
import * as _IbcCorePortV1Queryrpc from "./ibc/core/port/v1/query.rpc.Query";
import * as _OsmosisClaimV1beta1Queryrpc from "./osmosis/claim/v1beta1/query.rpc.Query";
import * as _OsmosisEpochsQueryrpc from "./osmosis/epochs/query.rpc.Query";
import * as _OsmosisGammV1beta1Queryrpc from "./osmosis/gamm/v1beta1/query.rpc.Query";
import * as _OsmosisGammV2Queryrpc from "./osmosis/gamm/v2/query.rpc.Query";
import * as _OsmosisIbcratelimitV1beta1Queryrpc from "./osmosis/ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _OsmosisIncentivesQueryrpc from "./osmosis/incentives/query.rpc.Query";
import * as _OsmosisLockupQueryrpc from "./osmosis/lockup/query.rpc.Query";
import * as _OsmosisMintV1beta1Queryrpc from "./osmosis/mint/v1beta1/query.rpc.Query";
import * as _OsmosisPoolincentivesV1beta1Queryrpc from "./osmosis/pool-incentives/v1beta1/query.rpc.Query";
import * as _OsmosisSuperfluidQueryrpc from "./osmosis/superfluid/query.rpc.Query";
import * as _OsmosisTokenfactoryV1beta1Queryrpc from "./osmosis/tokenfactory/v1beta1/query.rpc.Query";
import * as _OsmosisTwapV1beta1Queryrpc from "./osmosis/twap/v1beta1/query.rpc.Query";
import * as _OsmosisTxfeesV1beta1Queryrpc from "./osmosis/txfees/v1beta1/query.rpc.Query";
export const createRpcQueryHooks = ({
  rpc
}: {
  rpc: ProtobufRpcClient | undefined;
}) => {
  return {
    cosmos: {
      app: {
        v1alpha1: _CosmosAppV1alpha1Queryrpc.createRpcQueryHooks(rpc)
      },
      auth: {
        v1beta1: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      authz: {
        v1beta1: _CosmosAuthzV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      bank: {
        v1beta1: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      base: {
        tendermint: {
          v1beta1: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryHooks(rpc)
        }
      },
      distribution: {
        v1beta1: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      evidence: {
        v1beta1: _CosmosEvidenceV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      feegrant: {
        v1beta1: _CosmosFeegrantV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      gov: {
        v1: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc),
        v1beta1: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      group: {
        v1: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc)
      },
      mint: {
        v1beta1: _CosmosMintV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      nft: {
        v1beta1: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      params: {
        v1beta1: _CosmosParamsV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      slashing: {
        v1beta1: _CosmosSlashingV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      staking: {
        v1beta1: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      tx: {
        v1beta1: _CosmosTxV1beta1Servicerpc.createRpcQueryHooks(rpc)
      },
      upgrade: {
        v1beta1: _CosmosUpgradeV1beta1Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    cosmwasm: {
      wasm: {
        v1: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    ibc: {
      applications: {
        transfer: {
          v1: _IbcApplicationsTransferV1Queryrpc.createRpcQueryHooks(rpc)
        }
      },
      core: {
        channel: {
          v1: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc)
        },
        client: {
          v1: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc)
        },
        connection: {
          v1: _IbcCoreConnectionV1Queryrpc.createRpcQueryHooks(rpc)
        },
        port: {
          v1: _IbcCorePortV1Queryrpc.createRpcQueryHooks(rpc)
        }
      }
    },
    osmosis: {
      claim: {
        v1beta1: _OsmosisClaimV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      epochs: {
        v1beta1: _OsmosisEpochsQueryrpc.createRpcQueryHooks(rpc)
      },
      gamm: {
        v1beta1: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc),
        v2: _OsmosisGammV2Queryrpc.createRpcQueryHooks(rpc)
      },
      ibcratelimit: {
        v1beta1: _OsmosisIbcratelimitV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      incentives: _OsmosisIncentivesQueryrpc.createRpcQueryHooks(rpc),
      lockup: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc),
      mint: {
        v1beta1: _OsmosisMintV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      poolincentives: {
        v1beta1: _OsmosisPoolincentivesV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      superfluid: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc),
      tokenfactory: {
        v1beta1: _OsmosisTokenfactoryV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      twap: {
        v1beta1: _OsmosisTwapV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      txfees: {
        v1beta1: _OsmosisTxfeesV1beta1Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    /**
     * cosmos.app.v1alpha1.useConfig
     * Config returns the current app config.
     */
    useConfig: _CosmosAppV1alpha1Queryrpc.createRpcQueryHooks(rpc).useConfig,
    /**
     * cosmos.auth.v1beta1.useAccounts
     * Accounts returns all the existing accounts
     * 
     * Since: cosmos-sdk 0.43
     */
    useAccounts: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useAccounts,
    /**
     * cosmos.auth.v1beta1.useAccount
     * Account returns account details based on address.
     */
    useAccount: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useAccount,
    /**
     * cosmos.auth.v1beta1.useParams
     * Params queries all parameters.
     */
    useParams: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.auth.v1beta1.useModuleAccounts
     * ModuleAccounts returns all the existing module accounts.
     */
    useModuleAccounts: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useModuleAccounts,
    /**
     * cosmos.auth.v1beta1.useBech32Prefix
     * Bech32 queries bech32Prefix
     */
    useBech32Prefix: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useBech32Prefix,
    /**
     * cosmos.auth.v1beta1.useAddressBytesToString
     * AddressBytesToString converts Account Address bytes to string
     */
    useAddressBytesToString: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useAddressBytesToString,
    /**
     * cosmos.auth.v1beta1.useAddressStringToBytes
     * AddressStringToBytes converts Address string to bytes
     */
    useAddressStringToBytes: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useAddressStringToBytes,
    /**
     * cosmos.authz.v1beta1.useGrants
     * Returns list of `Authorization`, granted to the grantee by the granter.
     */
    useGrants: _CosmosAuthzV1beta1Queryrpc.createRpcQueryHooks(rpc).useGrants,
    /**
     * cosmos.authz.v1beta1.useGranterGrants
     * GranterGrants returns list of `GrantAuthorization`, granted by granter.
     * 
     * Since: cosmos-sdk 0.46
     */
    useGranterGrants: _CosmosAuthzV1beta1Queryrpc.createRpcQueryHooks(rpc).useGranterGrants,
    /**
     * cosmos.authz.v1beta1.useGranteeGrants
     * GranteeGrants returns a list of `GrantAuthorization` by grantee.
     * 
     * Since: cosmos-sdk 0.46
     */
    useGranteeGrants: _CosmosAuthzV1beta1Queryrpc.createRpcQueryHooks(rpc).useGranteeGrants,
    /**
     * cosmos.bank.v1beta1.useBalance
     * Balance queries the balance of a single coin for a single account.
     */
    useBalance: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useBalance,
    /**
     * cosmos.bank.v1beta1.useAllBalances
     * AllBalances queries the balance of all coins for a single account.
     */
    useAllBalances: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useAllBalances,
    /**
     * cosmos.bank.v1beta1.useSpendableBalances
     * SpendableBalances queries the spenable balance of all coins for a single
     * account.
     */
    useSpendableBalances: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useSpendableBalances,
    /**
     * cosmos.bank.v1beta1.useTotalSupply
     * TotalSupply queries the total supply of all coins.
     */
    useTotalSupply: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useTotalSupply,
    /**
     * cosmos.bank.v1beta1.useSupplyOf
     * SupplyOf queries the supply of a single coin.
     */
    useSupplyOf: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useSupplyOf,
    /**
     * cosmos.bank.v1beta1.useParams
     * Params queries the parameters of x/bank module.
     */
    useCosmosBankV1beta1Params: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.bank.v1beta1.useDenomMetadata
     * DenomsMetadata queries the client metadata of a given coin denomination.
     */
    useDenomMetadata: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useDenomMetadata,
    /**
     * cosmos.bank.v1beta1.useDenomsMetadata
     * DenomsMetadata queries the client metadata for all registered coin
     * denominations.
     */
    useDenomsMetadata: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useDenomsMetadata,
    /**
     * cosmos.bank.v1beta1.useDenomOwners
     * DenomOwners queries for all account addresses that own a particular token
     * denomination.
     */
    useDenomOwners: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useDenomOwners,
    /**
     * cosmos.base.tendermint.v1beta1.useGetNodeInfo
     * GetNodeInfo queries the current node info.
     */
    useGetNodeInfo: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryHooks(rpc).useGetNodeInfo,
    /**
     * cosmos.base.tendermint.v1beta1.useGetSyncing
     * GetSyncing queries node syncing.
     */
    useGetSyncing: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryHooks(rpc).useGetSyncing,
    /**
     * cosmos.base.tendermint.v1beta1.useGetLatestBlock
     * GetLatestBlock returns the latest block.
     */
    useGetLatestBlock: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryHooks(rpc).useGetLatestBlock,
    /**
     * cosmos.base.tendermint.v1beta1.useGetBlockByHeight
     * GetBlockByHeight queries block for given height.
     */
    useGetBlockByHeight: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryHooks(rpc).useGetBlockByHeight,
    /**
     * cosmos.base.tendermint.v1beta1.useGetLatestValidatorSet
     * GetLatestValidatorSet queries latest validator-set.
     */
    useGetLatestValidatorSet: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryHooks(rpc).useGetLatestValidatorSet,
    /**
     * cosmos.base.tendermint.v1beta1.useGetValidatorSetByHeight
     * GetValidatorSetByHeight queries validator-set at a given height.
     */
    useGetValidatorSetByHeight: _CosmosBaseTendermintV1beta1Queryrpc.createRpcQueryHooks(rpc).useGetValidatorSetByHeight,
    /**
     * cosmos.distribution.v1beta1.useParams
     * Params queries params of the distribution module.
     */
    useCosmosDistributionV1beta1Params: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.distribution.v1beta1.useValidatorOutstandingRewards
     * ValidatorOutstandingRewards queries rewards of a validator address.
     */
    useValidatorOutstandingRewards: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useValidatorOutstandingRewards,
    /**
     * cosmos.distribution.v1beta1.useValidatorCommission
     * ValidatorCommission queries accumulated commission for a validator.
     */
    useValidatorCommission: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useValidatorCommission,
    /**
     * cosmos.distribution.v1beta1.useValidatorSlashes
     * ValidatorSlashes queries slash events of a validator.
     */
    useValidatorSlashes: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useValidatorSlashes,
    /**
     * cosmos.distribution.v1beta1.useDelegationRewards
     * DelegationRewards queries the total rewards accrued by a delegation.
     */
    useDelegationRewards: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useDelegationRewards,
    /**
     * cosmos.distribution.v1beta1.useDelegationTotalRewards
     * DelegationTotalRewards queries the total rewards accrued by a each
     * validator.
     */
    useDelegationTotalRewards: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useDelegationTotalRewards,
    /**
     * cosmos.distribution.v1beta1.useDelegatorValidators
     * DelegatorValidators queries the validators of a delegator.
     */
    useDelegatorValidators: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useDelegatorValidators,
    /**
     * cosmos.distribution.v1beta1.useDelegatorWithdrawAddress
     * DelegatorWithdrawAddress queries withdraw address of a delegator.
     */
    useDelegatorWithdrawAddress: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useDelegatorWithdrawAddress,
    /**
     * cosmos.distribution.v1beta1.useCommunityPool
     * CommunityPool queries the community pool coins.
     */
    useCommunityPool: _CosmosDistributionV1beta1Queryrpc.createRpcQueryHooks(rpc).useCommunityPool,
    /**
     * cosmos.evidence.v1beta1.useEvidence
     * Evidence queries evidence based on evidence hash.
     */
    useEvidence: _CosmosEvidenceV1beta1Queryrpc.createRpcQueryHooks(rpc).useEvidence,
    /**
     * cosmos.evidence.v1beta1.useAllEvidence
     * AllEvidence queries all evidence.
     */
    useAllEvidence: _CosmosEvidenceV1beta1Queryrpc.createRpcQueryHooks(rpc).useAllEvidence,
    /**
     * cosmos.feegrant.v1beta1.useAllowance
     * Allowance returns fee granted to the grantee by the granter.
     */
    useAllowance: _CosmosFeegrantV1beta1Queryrpc.createRpcQueryHooks(rpc).useAllowance,
    /**
     * cosmos.feegrant.v1beta1.useAllowances
     * Allowances returns all the grants for address.
     */
    useAllowances: _CosmosFeegrantV1beta1Queryrpc.createRpcQueryHooks(rpc).useAllowances,
    /**
     * cosmos.feegrant.v1beta1.useAllowancesByGranter
     * AllowancesByGranter returns all the grants given by an address
     * Since v0.46
     */
    useAllowancesByGranter: _CosmosFeegrantV1beta1Queryrpc.createRpcQueryHooks(rpc).useAllowancesByGranter,
    /**
     * cosmos.gov.v1.useProposal
     * Proposal queries proposal details based on ProposalID.
     */
    useProposal: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc).useProposal,
    /**
     * cosmos.gov.v1.useProposals
     * Proposals queries all proposals based on given status.
     */
    useProposals: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc).useProposals,
    /**
     * cosmos.gov.v1.useVote
     * Vote queries voted information based on proposalID, voterAddr.
     */
    useVote: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc).useVote,
    /**
     * cosmos.gov.v1.useVotes
     * Votes queries votes of a given proposal.
     */
    useVotes: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc).useVotes,
    /**
     * cosmos.gov.v1.useParams
     * Params queries all parameters of the gov module.
     */
    useCosmosGovV1Params: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.gov.v1.useDeposit
     * Deposit queries single deposit information based proposalID, depositAddr.
     */
    useDeposit: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc).useDeposit,
    /**
     * cosmos.gov.v1.useDeposits
     * Deposits queries all deposits of a single proposal.
     */
    useDeposits: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc).useDeposits,
    /**
     * cosmos.gov.v1.useTallyResult
     * TallyResult queries the tally of a proposal vote.
     */
    useTallyResult: _CosmosGovV1Queryrpc.createRpcQueryHooks(rpc).useTallyResult,
    /**
     * cosmos.gov.v1beta1.useProposal
     * Proposal queries proposal details based on ProposalID.
     */
    useCosmosGovV1beta1Proposal: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc).useProposal,
    /**
     * cosmos.gov.v1beta1.useProposals
     * Proposals queries all proposals based on given status.
     */
    useCosmosGovV1beta1Proposals: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc).useProposals,
    /**
     * cosmos.gov.v1beta1.useVote
     * Vote queries voted information based on proposalID, voterAddr.
     */
    useCosmosGovV1beta1Vote: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc).useVote,
    /**
     * cosmos.gov.v1beta1.useVotes
     * Votes queries votes of a given proposal.
     */
    useCosmosGovV1beta1Votes: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc).useVotes,
    /**
     * cosmos.gov.v1beta1.useParams
     * Params queries all parameters of the gov module.
     */
    useCosmosGovV1beta1Params: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.gov.v1beta1.useDeposit
     * Deposit queries single deposit information based proposalID, depositAddr.
     */
    useCosmosGovV1beta1Deposit: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc).useDeposit,
    /**
     * cosmos.gov.v1beta1.useDeposits
     * Deposits queries all deposits of a single proposal.
     */
    useCosmosGovV1beta1Deposits: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc).useDeposits,
    /**
     * cosmos.gov.v1beta1.useTallyResult
     * TallyResult queries the tally of a proposal vote.
     */
    useCosmosGovV1beta1TallyResult: _CosmosGovV1beta1Queryrpc.createRpcQueryHooks(rpc).useTallyResult,
    /**
     * cosmos.group.v1.useGroupInfo
     * GroupInfo queries group info based on group id.
     */
    useGroupInfo: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useGroupInfo,
    /**
     * cosmos.group.v1.useGroupPolicyInfo
     * GroupPolicyInfo queries group policy info based on account address of group policy.
     */
    useGroupPolicyInfo: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useGroupPolicyInfo,
    /**
     * cosmos.group.v1.useGroupMembers
     * GroupMembers queries members of a group
     */
    useGroupMembers: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useGroupMembers,
    /**
     * cosmos.group.v1.useGroupsByAdmin
     * GroupsByAdmin queries groups by admin address.
     */
    useGroupsByAdmin: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useGroupsByAdmin,
    /**
     * cosmos.group.v1.useGroupPoliciesByGroup
     * GroupPoliciesByGroup queries group policies by group id.
     */
    useGroupPoliciesByGroup: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useGroupPoliciesByGroup,
    /**
     * cosmos.group.v1.useGroupPoliciesByAdmin
     * GroupsByAdmin queries group policies by admin address.
     */
    useGroupPoliciesByAdmin: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useGroupPoliciesByAdmin,
    /**
     * cosmos.group.v1.useProposal
     * Proposal queries a proposal based on proposal id.
     */
    useCosmosGroupV1Proposal: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useProposal,
    /**
     * cosmos.group.v1.useProposalsByGroupPolicy
     * ProposalsByGroupPolicy queries proposals based on account address of group policy.
     */
    useProposalsByGroupPolicy: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useProposalsByGroupPolicy,
    /**
     * cosmos.group.v1.useVoteByProposalVoter
     * VoteByProposalVoter queries a vote by proposal id and voter.
     */
    useVoteByProposalVoter: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useVoteByProposalVoter,
    /**
     * cosmos.group.v1.useVotesByProposal
     * VotesByProposal queries a vote by proposal.
     */
    useVotesByProposal: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useVotesByProposal,
    /**
     * cosmos.group.v1.useVotesByVoter
     * VotesByVoter queries a vote by voter.
     */
    useVotesByVoter: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useVotesByVoter,
    /**
     * cosmos.group.v1.useGroupsByMember
     * GroupsByMember queries groups by member address.
     */
    useGroupsByMember: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useGroupsByMember,
    /**
     * cosmos.group.v1.useTallyResult
     * TallyResult queries the tally of a proposal votes.
     */
    useCosmosGroupV1TallyResult: _CosmosGroupV1Queryrpc.createRpcQueryHooks(rpc).useTallyResult,
    /**
     * cosmos.mint.v1beta1.useParams
     * Params returns the total set of minting parameters.
     */
    useCosmosMintV1beta1Params: _CosmosMintV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.mint.v1beta1.useInflation
     * Inflation returns the current minting inflation value.
     */
    useInflation: _CosmosMintV1beta1Queryrpc.createRpcQueryHooks(rpc).useInflation,
    /**
     * cosmos.mint.v1beta1.useAnnualProvisions
     * AnnualProvisions current minting annual provisions value.
     */
    useAnnualProvisions: _CosmosMintV1beta1Queryrpc.createRpcQueryHooks(rpc).useAnnualProvisions,
    /**
     * cosmos.nft.v1beta1.useBalance
     * Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721
     */
    useCosmosNftV1beta1Balance: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc).useBalance,
    /**
     * cosmos.nft.v1beta1.useOwner
     * Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721
     */
    useOwner: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc).useOwner,
    /**
     * cosmos.nft.v1beta1.useSupply
     * Supply queries the number of NFTs from the given class, same as totalSupply of ERC721.
     */
    useSupply: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc).useSupply,
    /**
     * cosmos.nft.v1beta1.useNFTs
     * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
     * ERC721Enumerable
     */
    useNFTs: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc).useNFTs,
    /**
     * cosmos.nft.v1beta1.useNFT
     * NFT queries an NFT based on its class and id.
     */
    useNFT: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc).useNFT,
    /**
     * cosmos.nft.v1beta1.useClass
     * Class queries an NFT class based on its id
     */
    useClass: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc).useClass,
    /**
     * cosmos.nft.v1beta1.useClasses
     * Classes queries all NFT classes
     */
    useClasses: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc).useClasses,
    /**
     * cosmos.params.v1beta1.useParams
     * Params queries a specific parameter of a module, given its subspace and
     * key.
     */
    useCosmosParamsV1beta1Params: _CosmosParamsV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.params.v1beta1.useSubspaces
     * Subspaces queries for all registered subspaces and all keys for a subspace.
     */
    useSubspaces: _CosmosParamsV1beta1Queryrpc.createRpcQueryHooks(rpc).useSubspaces,
    /**
     * cosmos.slashing.v1beta1.useParams
     * Params queries the parameters of slashing module
     */
    useCosmosSlashingV1beta1Params: _CosmosSlashingV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.slashing.v1beta1.useSigningInfo
     * SigningInfo queries the signing info of given cons address
     */
    useSigningInfo: _CosmosSlashingV1beta1Queryrpc.createRpcQueryHooks(rpc).useSigningInfo,
    /**
     * cosmos.slashing.v1beta1.useSigningInfos
     * SigningInfos queries signing info of all validators
     */
    useSigningInfos: _CosmosSlashingV1beta1Queryrpc.createRpcQueryHooks(rpc).useSigningInfos,
    /**
     * cosmos.staking.v1beta1.useValidators
     * Validators queries all validators that match the given status.
     */
    useValidators: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useValidators,
    /**
     * cosmos.staking.v1beta1.useValidator
     * Validator queries validator info for given validator address.
     */
    useValidator: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useValidator,
    /**
     * cosmos.staking.v1beta1.useValidatorDelegations
     * ValidatorDelegations queries delegate info for given validator.
     */
    useValidatorDelegations: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useValidatorDelegations,
    /**
     * cosmos.staking.v1beta1.useValidatorUnbondingDelegations
     * ValidatorUnbondingDelegations queries unbonding delegations of a validator.
     */
    useValidatorUnbondingDelegations: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useValidatorUnbondingDelegations,
    /**
     * cosmos.staking.v1beta1.useDelegation
     * Delegation queries delegate info for given validator delegator pair.
     */
    useDelegation: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useDelegation,
    /**
     * cosmos.staking.v1beta1.useUnbondingDelegation
     * UnbondingDelegation queries unbonding info for given validator delegator
     * pair.
     */
    useUnbondingDelegation: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useUnbondingDelegation,
    /**
     * cosmos.staking.v1beta1.useDelegatorDelegations
     * DelegatorDelegations queries all delegations of a given delegator address.
     */
    useDelegatorDelegations: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useDelegatorDelegations,
    /**
     * cosmos.staking.v1beta1.useDelegatorUnbondingDelegations
     * DelegatorUnbondingDelegations queries all unbonding delegations of a given
     * delegator address.
     */
    useDelegatorUnbondingDelegations: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useDelegatorUnbondingDelegations,
    /**
     * cosmos.staking.v1beta1.useRedelegations
     * Redelegations queries redelegations of given address.
     */
    useRedelegations: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useRedelegations,
    /**
     * cosmos.staking.v1beta1.useDelegatorValidators
     * DelegatorValidators queries all validators info for given delegator
     * address.
     */
    useCosmosStakingV1beta1DelegatorValidators: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useDelegatorValidators,
    /**
     * cosmos.staking.v1beta1.useDelegatorValidator
     * DelegatorValidator queries validator info for given delegator validator
     * pair.
     */
    useDelegatorValidator: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useDelegatorValidator,
    /**
     * cosmos.staking.v1beta1.useHistoricalInfo
     * HistoricalInfo queries the historical info for given height.
     */
    useHistoricalInfo: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useHistoricalInfo,
    /**
     * cosmos.staking.v1beta1.usePool
     * Pool queries the pool info.
     */
    usePool: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).usePool,
    /**
     * cosmos.staking.v1beta1.useParams
     * Parameters queries the staking parameters.
     */
    useCosmosStakingV1beta1Params: _CosmosStakingV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.tx.v1beta1.useSimulate
     * Simulate simulates executing a transaction for estimating gas usage.
     */
    useSimulate: _CosmosTxV1beta1Servicerpc.createRpcQueryHooks(rpc).useSimulate,
    /**
     * cosmos.tx.v1beta1.useGetTx
     * GetTx fetches a tx by hash.
     */
    useGetTx: _CosmosTxV1beta1Servicerpc.createRpcQueryHooks(rpc).useGetTx,
    /**
     * cosmos.tx.v1beta1.useBroadcastTx
     * BroadcastTx broadcast transaction.
     */
    useBroadcastTx: _CosmosTxV1beta1Servicerpc.createRpcQueryHooks(rpc).useBroadcastTx,
    /**
     * cosmos.tx.v1beta1.useGetTxsEvent
     * GetTxsEvent fetches txs by event.
     */
    useGetTxsEvent: _CosmosTxV1beta1Servicerpc.createRpcQueryHooks(rpc).useGetTxsEvent,
    /**
     * cosmos.tx.v1beta1.useGetBlockWithTxs
     * GetBlockWithTxs fetches a block with decoded txs.
     * 
     * Since: cosmos-sdk 0.45.2
     */
    useGetBlockWithTxs: _CosmosTxV1beta1Servicerpc.createRpcQueryHooks(rpc).useGetBlockWithTxs,
    /**
     * cosmos.upgrade.v1beta1.useCurrentPlan
     * CurrentPlan queries the current upgrade plan.
     */
    useCurrentPlan: _CosmosUpgradeV1beta1Queryrpc.createRpcQueryHooks(rpc).useCurrentPlan,
    /**
     * cosmos.upgrade.v1beta1.useAppliedPlan
     * AppliedPlan queries a previously applied upgrade plan by its name.
     */
    useAppliedPlan: _CosmosUpgradeV1beta1Queryrpc.createRpcQueryHooks(rpc).useAppliedPlan,
    /**
     * cosmos.upgrade.v1beta1.useUpgradedConsensusState
     * UpgradedConsensusState queries the consensus state that will serve
     * as a trusted kernel for the next version of this chain. It will only be
     * stored at the last height of this chain.
     * UpgradedConsensusState RPC not supported with legacy querier
     * This rpc is deprecated now that IBC has its own replacement
     * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
     */
    useUpgradedConsensusState: _CosmosUpgradeV1beta1Queryrpc.createRpcQueryHooks(rpc).useUpgradedConsensusState,
    /**
     * cosmos.upgrade.v1beta1.useModuleVersions
     * ModuleVersions queries the list of module versions from state.
     * 
     * Since: cosmos-sdk 0.43
     */
    useModuleVersions: _CosmosUpgradeV1beta1Queryrpc.createRpcQueryHooks(rpc).useModuleVersions,
    /**
     * cosmos.upgrade.v1beta1.useAuthority
     * Returns the account with authority to conduct upgrades
     */
    useAuthority: _CosmosUpgradeV1beta1Queryrpc.createRpcQueryHooks(rpc).useAuthority,
    /**
     * cosmwasm.wasm.v1.useContractInfo
     * ContractInfo gets the contract meta data
     */
    useContractInfo: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useContractInfo,
    /**
     * cosmwasm.wasm.v1.useContractHistory
     * ContractHistory gets the contract code history
     */
    useContractHistory: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useContractHistory,
    /**
     * cosmwasm.wasm.v1.useContractsByCode
     * ContractsByCode lists all smart contracts for a code id
     */
    useContractsByCode: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useContractsByCode,
    /**
     * cosmwasm.wasm.v1.useAllContractState
     * AllContractState gets all raw store data for a single contract
     */
    useAllContractState: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useAllContractState,
    /**
     * cosmwasm.wasm.v1.useRawContractState
     * RawContractState gets single key from the raw store data of a contract
     */
    useRawContractState: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useRawContractState,
    /**
     * cosmwasm.wasm.v1.useSmartContractState
     * SmartContractState get smart query result from the contract
     */
    useSmartContractState: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useSmartContractState,
    /**
     * cosmwasm.wasm.v1.useCode
     * Code gets the binary code and metadata for a singe wasm code
     */
    useCode: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useCode,
    /**
     * cosmwasm.wasm.v1.useCodes
     * Codes gets the metadata for all stored wasm codes
     */
    useCodes: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).useCodes,
    /**
     * cosmwasm.wasm.v1.usePinnedCodes
     * PinnedCodes gets the pinned code ids
     */
    usePinnedCodes: _CosmwasmWasmV1Queryrpc.createRpcQueryHooks(rpc).usePinnedCodes,
    /**
     * ibc.applications.transfer.v1.useDenomTrace
     * DenomTrace queries a denomination trace information.
     */
    useDenomTrace: _IbcApplicationsTransferV1Queryrpc.createRpcQueryHooks(rpc).useDenomTrace,
    /**
     * ibc.applications.transfer.v1.useDenomTraces
     * DenomTraces queries all denomination traces.
     */
    useDenomTraces: _IbcApplicationsTransferV1Queryrpc.createRpcQueryHooks(rpc).useDenomTraces,
    /**
     * ibc.applications.transfer.v1.useParams
     * Params queries all parameters of the ibc-transfer module.
     */
    useIbcApplicationsTransferV1Params: _IbcApplicationsTransferV1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * ibc.core.channel.v1.useChannel
     * Channel queries an IBC Channel.
     */
    useChannel: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).useChannel,
    /**
     * ibc.core.channel.v1.useChannels
     * Channels queries all the IBC channels of a chain.
     */
    useChannels: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).useChannels,
    /**
     * ibc.core.channel.v1.useConnectionChannels
     * ConnectionChannels queries all the channels associated with a connection
     * end.
     */
    useConnectionChannels: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).useConnectionChannels,
    /**
     * ibc.core.channel.v1.useChannelClientState
     * ChannelClientState queries for the client state for the channel associated
     * with the provided channel identifiers.
     */
    useChannelClientState: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).useChannelClientState,
    /**
     * ibc.core.channel.v1.useChannelConsensusState
     * ChannelConsensusState queries for the consensus state for the channel
     * associated with the provided channel identifiers.
     */
    useChannelConsensusState: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).useChannelConsensusState,
    /**
     * ibc.core.channel.v1.usePacketCommitment
     * PacketCommitment queries a stored packet commitment hash.
     */
    usePacketCommitment: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).usePacketCommitment,
    /**
     * ibc.core.channel.v1.usePacketCommitments
     * PacketCommitments returns all the packet commitments hashes associated
     * with a channel.
     */
    usePacketCommitments: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).usePacketCommitments,
    /**
     * ibc.core.channel.v1.usePacketReceipt
     * PacketReceipt queries if a given packet sequence has been received on the
     * queried chain
     */
    usePacketReceipt: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).usePacketReceipt,
    /**
     * ibc.core.channel.v1.usePacketAcknowledgement
     * PacketAcknowledgement queries a stored packet acknowledgement hash.
     */
    usePacketAcknowledgement: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).usePacketAcknowledgement,
    /**
     * ibc.core.channel.v1.usePacketAcknowledgements
     * PacketAcknowledgements returns all the packet acknowledgements associated
     * with a channel.
     */
    usePacketAcknowledgements: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).usePacketAcknowledgements,
    /**
     * ibc.core.channel.v1.useUnreceivedPackets
     * UnreceivedPackets returns all the unreceived IBC packets associated with a
     * channel and sequences.
     */
    useUnreceivedPackets: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).useUnreceivedPackets,
    /**
     * ibc.core.channel.v1.useUnreceivedAcks
     * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     * with a channel and sequences.
     */
    useUnreceivedAcks: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).useUnreceivedAcks,
    /**
     * ibc.core.channel.v1.useNextSequenceReceive
     * NextSequenceReceive returns the next receive sequence for a given channel.
     */
    useNextSequenceReceive: _IbcCoreChannelV1Queryrpc.createRpcQueryHooks(rpc).useNextSequenceReceive,
    /**
     * ibc.core.client.v1.useClientState
     * ClientState queries an IBC light client.
     */
    useClientState: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc).useClientState,
    /**
     * ibc.core.client.v1.useClientStates
     * ClientStates queries all the IBC light clients of a chain.
     */
    useClientStates: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc).useClientStates,
    /**
     * ibc.core.client.v1.useConsensusState
     * ConsensusState queries a consensus state associated with a client state at
     * a given height.
     */
    useConsensusState: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc).useConsensusState,
    /**
     * ibc.core.client.v1.useConsensusStates
     * ConsensusStates queries all the consensus state associated with a given
     * client.
     */
    useConsensusStates: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc).useConsensusStates,
    /**
     * ibc.core.client.v1.useClientStatus
     * Status queries the status of an IBC client.
     */
    useClientStatus: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc).useClientStatus,
    /**
     * ibc.core.client.v1.useClientParams
     * ClientParams queries all parameters of the ibc client.
     */
    useClientParams: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc).useClientParams,
    /**
     * ibc.core.client.v1.useUpgradedClientState
     * UpgradedClientState queries an Upgraded IBC light client.
     */
    useUpgradedClientState: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc).useUpgradedClientState,
    /**
     * ibc.core.client.v1.useUpgradedConsensusState
     * UpgradedConsensusState queries an Upgraded IBC consensus state.
     */
    useIbcCoreClientV1UpgradedConsensusState: _IbcCoreClientV1Queryrpc.createRpcQueryHooks(rpc).useUpgradedConsensusState,
    /**
     * ibc.core.connection.v1.useConnection
     * Connection queries an IBC connection end.
     */
    useConnection: _IbcCoreConnectionV1Queryrpc.createRpcQueryHooks(rpc).useConnection,
    /**
     * ibc.core.connection.v1.useConnections
     * Connections queries all the IBC connections of a chain.
     */
    useConnections: _IbcCoreConnectionV1Queryrpc.createRpcQueryHooks(rpc).useConnections,
    /**
     * ibc.core.connection.v1.useClientConnections
     * ClientConnections queries the connection paths associated with a client
     * state.
     */
    useClientConnections: _IbcCoreConnectionV1Queryrpc.createRpcQueryHooks(rpc).useClientConnections,
    /**
     * ibc.core.connection.v1.useConnectionClientState
     * ConnectionClientState queries the client state associated with the
     * connection.
     */
    useConnectionClientState: _IbcCoreConnectionV1Queryrpc.createRpcQueryHooks(rpc).useConnectionClientState,
    /**
     * ibc.core.connection.v1.useConnectionConsensusState
     * ConnectionConsensusState queries the consensus state associated with the
     * connection.
     */
    useConnectionConsensusState: _IbcCoreConnectionV1Queryrpc.createRpcQueryHooks(rpc).useConnectionConsensusState,
    /**
     * ibc.core.port.v1.useAppVersion
     * AppVersion queries an IBC Port and determines the appropriate application version to be used
     */
    useAppVersion: _IbcCorePortV1Queryrpc.createRpcQueryHooks(rpc).useAppVersion,
    /**
     * osmosis.claim.v1beta1.useModuleAccountBalance
     * ModuleAccountBalance
     */
    useModuleAccountBalance: _OsmosisClaimV1beta1Queryrpc.createRpcQueryHooks(rpc).useModuleAccountBalance,
    /**
     * osmosis.claim.v1beta1.useParams
     * Params
     */
    useOsmosisClaimV1beta1Params: _OsmosisClaimV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * osmosis.claim.v1beta1.useClaimRecord
     * ClaimRecord
     */
    useClaimRecord: _OsmosisClaimV1beta1Queryrpc.createRpcQueryHooks(rpc).useClaimRecord,
    /**
     * osmosis.claim.v1beta1.useClaimableForAction
     * ClaimableForAction
     */
    useClaimableForAction: _OsmosisClaimV1beta1Queryrpc.createRpcQueryHooks(rpc).useClaimableForAction,
    /**
     * osmosis.claim.v1beta1.useTotalClaimable
     * TotalClaimable
     */
    useTotalClaimable: _OsmosisClaimV1beta1Queryrpc.createRpcQueryHooks(rpc).useTotalClaimable,
    /**
     * osmosis.epochs.v1beta1.useEpochInfos
     * EpochInfos provide running epochInfos
     */
    useEpochInfos: _OsmosisEpochsQueryrpc.createRpcQueryHooks(rpc).useEpochInfos,
    /**
     * osmosis.epochs.v1beta1.useCurrentEpoch
     * CurrentEpoch provide current epoch of specified identifier
     */
    useCurrentEpoch: _OsmosisEpochsQueryrpc.createRpcQueryHooks(rpc).useCurrentEpoch,
    /**
     * osmosis.gamm.v1beta1.usePools
     * Pools
     */
    usePools: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).usePools,
    /**
     * osmosis.gamm.v1beta1.useNumPools
     * NumPools
     */
    useNumPools: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useNumPools,
    /**
     * osmosis.gamm.v1beta1.useTotalLiquidity
     * TotalLiquidity
     */
    useTotalLiquidity: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useTotalLiquidity,
    /**
     * osmosis.gamm.v1beta1.usePoolsWithFilter
     * PoolsWithFilter allows you to query specific pools with requested
     * parameters
     */
    usePoolsWithFilter: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).usePoolsWithFilter,
    /**
     * osmosis.gamm.v1beta1.usePool
     * Per Pool gRPC Endpoints
     */
    useOsmosisGammV1beta1Pool: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).usePool,
    /**
     * osmosis.gamm.v1beta1.usePoolType
     * PoolType returns the type of the pool.
     * Returns "Balancer" as a string literal when the pool is a balancer pool.
     * Errors if the pool is failed to be type caseted.
     */
    usePoolType: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).usePoolType,
    /**
     * osmosis.gamm.v1beta1.useCalcJoinPoolNoSwapShares
     * Simulates joining pool without a swap. Returns the amount of shares you'd
     * get and tokens needed to provide
     */
    useCalcJoinPoolNoSwapShares: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useCalcJoinPoolNoSwapShares,
    /**
     * osmosis.gamm.v1beta1.useCalcJoinPoolShares
     * CalcJoinPoolShares
     */
    useCalcJoinPoolShares: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useCalcJoinPoolShares,
    /**
     * osmosis.gamm.v1beta1.useCalcExitPoolCoinsFromShares
     * CalcExitPoolCoinsFromShares
     */
    useCalcExitPoolCoinsFromShares: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useCalcExitPoolCoinsFromShares,
    /**
     * osmosis.gamm.v1beta1.usePoolParams
     * PoolParams
     */
    usePoolParams: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).usePoolParams,
    /**
     * osmosis.gamm.v1beta1.useTotalPoolLiquidity
     * TotalPoolLiquidity
     */
    useTotalPoolLiquidity: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useTotalPoolLiquidity,
    /**
     * osmosis.gamm.v1beta1.useTotalShares
     * TotalShares
     */
    useTotalShares: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useTotalShares,
    /**
     * osmosis.gamm.v1beta1.useSpotPrice
     * SpotPrice defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     */
    useSpotPrice: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useSpotPrice,
    /**
     * osmosis.gamm.v1beta1.useEstimateSwapExactAmountIn
     * Estimate the swap.
     */
    useEstimateSwapExactAmountIn: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useEstimateSwapExactAmountIn,
    /**
     * osmosis.gamm.v1beta1.useEstimateSwapExactAmountOut
     * EstimateSwapExactAmountOut
     */
    useEstimateSwapExactAmountOut: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useEstimateSwapExactAmountOut,
    /**
     * osmosis.gamm.v2.useSpotPrice
     * SpotPrice defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     */
    useOsmosisGammV2SpotPrice: _OsmosisGammV2Queryrpc.createRpcQueryHooks(rpc).useSpotPrice,
    /**
     * osmosis.ibcratelimit.v1beta1.useParams
     * Params defines a gRPC query method that returns the ibc-rate-limit module's
     * parameters.
     */
    useOsmosisIbcratelimitV1beta1Params: _OsmosisIbcratelimitV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * osmosis.incentives.useModuleToDistributeCoins
     * ModuleToDistributeCoins returns coins that are going to be distributed
     */
    useModuleToDistributeCoins: _OsmosisIncentivesQueryrpc.createRpcQueryHooks(rpc).useModuleToDistributeCoins,
    /**
     * osmosis.incentives.useGaugeByID
     * GaugeByID returns gauges by their respective ID
     */
    useGaugeByID: _OsmosisIncentivesQueryrpc.createRpcQueryHooks(rpc).useGaugeByID,
    /**
     * osmosis.incentives.useGauges
     * Gauges returns both upcoming and active gauges
     */
    useGauges: _OsmosisIncentivesQueryrpc.createRpcQueryHooks(rpc).useGauges,
    /**
     * osmosis.incentives.useActiveGauges
     * ActiveGauges returns active gauges
     */
    useActiveGauges: _OsmosisIncentivesQueryrpc.createRpcQueryHooks(rpc).useActiveGauges,
    /**
     * osmosis.incentives.useActiveGaugesPerDenom
     * ActiveGaugesPerDenom returns active gauges by denom
     */
    useActiveGaugesPerDenom: _OsmosisIncentivesQueryrpc.createRpcQueryHooks(rpc).useActiveGaugesPerDenom,
    /**
     * osmosis.incentives.useUpcomingGauges
     * Returns scheduled gauges that have not yet occured
     */
    useUpcomingGauges: _OsmosisIncentivesQueryrpc.createRpcQueryHooks(rpc).useUpcomingGauges,
    /**
     * osmosis.incentives.useUpcomingGaugesPerDenom
     * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
     * by denom
     */
    useUpcomingGaugesPerDenom: _OsmosisIncentivesQueryrpc.createRpcQueryHooks(rpc).useUpcomingGaugesPerDenom,
    /**
     * osmosis.incentives.useRewardsEst
     * RewardsEst returns an estimate of the rewards from now until a specified
     * time in the future The querier either provides an address or a set of locks
     * for which they want to find the associated rewards
     */
    useRewardsEst: _OsmosisIncentivesQueryrpc.createRpcQueryHooks(rpc).useRewardsEst,
    /**
     * osmosis.incentives.useLockableDurations
     * LockableDurations returns lockable durations that are valid to distribute
     * incentives for
     */
    useLockableDurations: _OsmosisIncentivesQueryrpc.createRpcQueryHooks(rpc).useLockableDurations,
    /**
     * osmosis.lockup.useModuleBalance
     * Return full balance of the module
     */
    useModuleBalance: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useModuleBalance,
    /**
     * osmosis.lockup.useModuleLockedAmount
     * Return locked balance of the module
     */
    useModuleLockedAmount: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useModuleLockedAmount,
    /**
     * osmosis.lockup.useAccountUnlockableCoins
     * Returns unlockable coins which are not withdrawn yet
     */
    useAccountUnlockableCoins: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useAccountUnlockableCoins,
    /**
     * osmosis.lockup.useAccountUnlockingCoins
     * Returns unlocking coins
     */
    useAccountUnlockingCoins: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useAccountUnlockingCoins,
    /**
     * osmosis.lockup.useAccountLockedCoins
     * Return a locked coins that can't be withdrawn
     */
    useAccountLockedCoins: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useAccountLockedCoins,
    /**
     * osmosis.lockup.useAccountLockedPastTime
     * Returns locked records of an account with unlock time beyond timestamp
     */
    useAccountLockedPastTime: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useAccountLockedPastTime,
    /**
     * osmosis.lockup.useAccountLockedPastTimeNotUnlockingOnly
     * Returns locked records of an account with unlock time beyond timestamp
     * excluding tokens started unlocking
     */
    useAccountLockedPastTimeNotUnlockingOnly: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useAccountLockedPastTimeNotUnlockingOnly,
    /**
     * osmosis.lockup.useAccountUnlockedBeforeTime
     * Returns unlocked records with unlock time before timestamp
     */
    useAccountUnlockedBeforeTime: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useAccountUnlockedBeforeTime,
    /**
     * osmosis.lockup.useAccountLockedPastTimeDenom
     * Returns lock records by address, timestamp, denom
     */
    useAccountLockedPastTimeDenom: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useAccountLockedPastTimeDenom,
    /**
     * osmosis.lockup.useLockedDenom
     * Returns total locked per denom with longer past given time
     */
    useLockedDenom: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useLockedDenom,
    /**
     * osmosis.lockup.useLockedByID
     * Returns lock record by id
     */
    useLockedByID: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useLockedByID,
    /**
     * osmosis.lockup.useSyntheticLockupsByLockupID
     * Returns synthetic lockups by native lockup id
     */
    useSyntheticLockupsByLockupID: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useSyntheticLockupsByLockupID,
    /**
     * osmosis.lockup.useAccountLockedLongerDuration
     * Returns account locked records with longer duration
     */
    useAccountLockedLongerDuration: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useAccountLockedLongerDuration,
    /**
     * osmosis.lockup.useAccountLockedDuration
     * Returns account locked records with a specific duration
     */
    useAccountLockedDuration: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useAccountLockedDuration,
    /**
     * osmosis.lockup.useAccountLockedLongerDurationNotUnlockingOnly
     * Returns account locked records with longer duration excluding tokens
     * started unlocking
     */
    useAccountLockedLongerDurationNotUnlockingOnly: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useAccountLockedLongerDurationNotUnlockingOnly,
    /**
     * osmosis.lockup.useAccountLockedLongerDurationDenom
     * Returns account's locked records for a denom with longer duration
     */
    useAccountLockedLongerDurationDenom: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useAccountLockedLongerDurationDenom,
    /**
     * osmosis.lockup.useParams
     * Params returns lockup params.
     */
    useOsmosisLockupParams: _OsmosisLockupQueryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * osmosis.mint.v1beta1.useParams
     * Params returns the total set of minting parameters.
     */
    useOsmosisMintV1beta1Params: _OsmosisMintV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * osmosis.mint.v1beta1.useEpochProvisions
     * EpochProvisions returns the current minting epoch provisions value.
     */
    useEpochProvisions: _OsmosisMintV1beta1Queryrpc.createRpcQueryHooks(rpc).useEpochProvisions,
    /**
     * osmosis.poolincentives.v1beta1.useGaugeIds
     * GaugeIds takes the pool id and returns the matching gauge ids and durations
     */
    useGaugeIds: _OsmosisPoolincentivesV1beta1Queryrpc.createRpcQueryHooks(rpc).useGaugeIds,
    /**
     * osmosis.poolincentives.v1beta1.useDistrInfo
     * DistrInfo returns the pool's matching gauge ids and weights.
     */
    useDistrInfo: _OsmosisPoolincentivesV1beta1Queryrpc.createRpcQueryHooks(rpc).useDistrInfo,
    /**
     * osmosis.poolincentives.v1beta1.useParams
     * Params returns pool incentives params.
     */
    useOsmosisPoolincentivesV1beta1Params: _OsmosisPoolincentivesV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * osmosis.poolincentives.v1beta1.useLockableDurations
     * LockableDurations returns lock durations for pools.
     */
    useOsmosisPoolincentivesV1beta1LockableDurations: _OsmosisPoolincentivesV1beta1Queryrpc.createRpcQueryHooks(rpc).useLockableDurations,
    /**
     * osmosis.poolincentives.v1beta1.useIncentivizedPools
     * IncentivizedPools returns currently incentivized pools
     */
    useIncentivizedPools: _OsmosisPoolincentivesV1beta1Queryrpc.createRpcQueryHooks(rpc).useIncentivizedPools,
    /**
     * osmosis.poolincentives.v1beta1.useExternalIncentiveGauges
     * ExternalIncentiveGauges returns external incentive gauges.
     */
    useExternalIncentiveGauges: _OsmosisPoolincentivesV1beta1Queryrpc.createRpcQueryHooks(rpc).useExternalIncentiveGauges,
    /**
     * osmosis.superfluid.useParams
     * Params returns the total set of superfluid parameters.
     */
    useOsmosisSuperfluidParams: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * osmosis.superfluid.useAssetType
     * Returns superfluid asset type, whether if it's a native asset or an lp
     * share.
     */
    useAssetType: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useAssetType,
    /**
     * osmosis.superfluid.useAllAssets
     * Returns all registered superfluid assets.
     */
    useAllAssets: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useAllAssets,
    /**
     * osmosis.superfluid.useAssetMultiplier
     * Returns the osmo equivalent multiplier used in the most recent epoch.
     */
    useAssetMultiplier: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useAssetMultiplier,
    /**
     * osmosis.superfluid.useAllIntermediaryAccounts
     * Returns all superfluid intermediary accounts.
     */
    useAllIntermediaryAccounts: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useAllIntermediaryAccounts,
    /**
     * osmosis.superfluid.useConnectedIntermediaryAccount
     * Returns intermediary account connected to a superfluid staked lock by id
     */
    useConnectedIntermediaryAccount: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useConnectedIntermediaryAccount,
    /**
     * osmosis.superfluid.useTotalDelegationByValidatorForDenom
     * Returns the amount of delegations of specific denom for all validators
     */
    useTotalDelegationByValidatorForDenom: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useTotalDelegationByValidatorForDenom,
    /**
     * osmosis.superfluid.useTotalSuperfluidDelegations
     * Returns the total amount of osmo superfluidly staked.
     * Response is denominated in uosmo.
     */
    useTotalSuperfluidDelegations: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useTotalSuperfluidDelegations,
    /**
     * osmosis.superfluid.useSuperfluidDelegationAmount
     * Returns the coins superfluid delegated for the delegator, validator, denom
     * triplet
     */
    useSuperfluidDelegationAmount: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useSuperfluidDelegationAmount,
    /**
     * osmosis.superfluid.useSuperfluidDelegationsByDelegator
     * Returns all the delegated superfluid poistions for a specific delegator.
     */
    useSuperfluidDelegationsByDelegator: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useSuperfluidDelegationsByDelegator,
    /**
     * osmosis.superfluid.useSuperfluidUndelegationsByDelegator
     * Returns all the undelegating superfluid poistions for a specific delegator.
     */
    useSuperfluidUndelegationsByDelegator: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useSuperfluidUndelegationsByDelegator,
    /**
     * osmosis.superfluid.useSuperfluidDelegationsByValidatorDenom
     * Returns all the superfluid positions of a specific denom delegated to one
     * validator
     */
    useSuperfluidDelegationsByValidatorDenom: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useSuperfluidDelegationsByValidatorDenom,
    /**
     * osmosis.superfluid.useEstimateSuperfluidDelegatedAmountByValidatorDenom
     * Returns the amount of a specific denom delegated to a specific validator
     * This is labeled an estimate, because the way it calculates the amount can
     * lead rounding errors from the true delegated amount
     */
    useEstimateSuperfluidDelegatedAmountByValidatorDenom: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useEstimateSuperfluidDelegatedAmountByValidatorDenom,
    /**
     * osmosis.superfluid.useTotalDelegationByDelegator
     * Returns the specified delegations for a specific delegator
     */
    useTotalDelegationByDelegator: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useTotalDelegationByDelegator,
    /**
     * osmosis.superfluid.useUnpoolWhitelist
     * Returns a list of whitelisted pool ids to unpool.
     */
    useUnpoolWhitelist: _OsmosisSuperfluidQueryrpc.createRpcQueryHooks(rpc).useUnpoolWhitelist,
    /**
     * osmosis.tokenfactory.v1beta1.useParams
     * Params defines a gRPC query method that returns the tokenfactory module's
     * parameters.
     */
    useOsmosisTokenfactoryV1beta1Params: _OsmosisTokenfactoryV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * osmosis.tokenfactory.v1beta1.useDenomAuthorityMetadata
     * DenomAuthorityMetadata defines a gRPC query method for fetching
     * DenomAuthorityMetadata for a particular denom.
     */
    useDenomAuthorityMetadata: _OsmosisTokenfactoryV1beta1Queryrpc.createRpcQueryHooks(rpc).useDenomAuthorityMetadata,
    /**
     * osmosis.tokenfactory.v1beta1.useDenomsFromCreator
     * DenomsFromCreator defines a gRPC query method for fetching all
     * denominations created by a specific admin/creator.
     */
    useDenomsFromCreator: _OsmosisTokenfactoryV1beta1Queryrpc.createRpcQueryHooks(rpc).useDenomsFromCreator,
    /**
     * osmosis.twap.v1beta1.useParams
     * Params
     */
    useOsmosisTwapV1beta1Params: _OsmosisTwapV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * osmosis.twap.v1beta1.useArithmeticTwap
     * ArithmeticTwap
     */
    useArithmeticTwap: _OsmosisTwapV1beta1Queryrpc.createRpcQueryHooks(rpc).useArithmeticTwap,
    /**
     * osmosis.twap.v1beta1.useArithmeticTwapToNow
     * ArithmeticTwapToNow
     */
    useArithmeticTwapToNow: _OsmosisTwapV1beta1Queryrpc.createRpcQueryHooks(rpc).useArithmeticTwapToNow,
    /**
     * osmosis.txfees.v1beta1.useFeeTokens
     * FeeTokens returns a list of all the whitelisted fee tokens and their
     * corresponding pools. It does not include the BaseDenom, which has its own
     * query endpoint
     */
    useFeeTokens: _OsmosisTxfeesV1beta1Queryrpc.createRpcQueryHooks(rpc).useFeeTokens,
    /**
     * osmosis.txfees.v1beta1.useDenomSpotPrice
     * DenomSpotPrice returns all spot prices by each registered token denom.
     */
    useDenomSpotPrice: _OsmosisTxfeesV1beta1Queryrpc.createRpcQueryHooks(rpc).useDenomSpotPrice,
    /**
     * osmosis.txfees.v1beta1.useDenomPoolId
     * Returns the poolID for a specified denom input.
     */
    useDenomPoolId: _OsmosisTxfeesV1beta1Queryrpc.createRpcQueryHooks(rpc).useDenomPoolId,
    /**
     * osmosis.txfees.v1beta1.useBaseDenom
     * Returns a list of all base denom tokens and their corresponding pools.
     */
    useBaseDenom: _OsmosisTxfeesV1beta1Queryrpc.createRpcQueryHooks(rpc).useBaseDenom
  };
};