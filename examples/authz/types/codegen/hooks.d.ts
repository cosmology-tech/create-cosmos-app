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
export declare const createRpcQueryHooks: ({ rpc }: {
    rpc: ProtobufRpcClient | undefined;
}) => {
    cosmos: {
        app: {
            v1alpha1: {
                useConfig: <TData = import("./cosmos/app/v1alpha1/query").QueryConfigResponse>({ request, options }: _CosmosAppV1alpha1Queryrpc.UseConfigQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
            };
        };
        auth: {
            v1beta1: {
                useAccounts: <TData_1 = import("./cosmos/auth/v1beta1/query").QueryAccountsResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseAccountsQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                useAccount: <TData_2 = import("./cosmos/auth/v1beta1/query").QueryAccountResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseAccountQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                useParams: <TData_3 = import("./cosmos/auth/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseParamsQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                useModuleAccounts: <TData_4 = import("./cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseModuleAccountsQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                useBech32Prefix: <TData_5 = import("./cosmos/auth/v1beta1/query").Bech32PrefixResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseBech32PrefixQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
                useAddressBytesToString: <TData_6 = import("./cosmos/auth/v1beta1/query").AddressBytesToStringResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseAddressBytesToStringQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
                useAddressStringToBytes: <TData_7 = import("./cosmos/auth/v1beta1/query").AddressStringToBytesResponse>({ request, options }: _CosmosAuthV1beta1Queryrpc.UseAddressStringToBytesQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
            };
        };
        authz: {
            v1beta1: {
                useGrants: <TData_8 = import("./cosmos/authz/v1beta1/query").QueryGrantsResponse>({ request, options }: _CosmosAuthzV1beta1Queryrpc.UseGrantsQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
                useGranterGrants: <TData_9 = import("./cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>({ request, options }: _CosmosAuthzV1beta1Queryrpc.UseGranterGrantsQuery<TData_9>) => import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
                useGranteeGrants: <TData_10 = import("./cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>({ request, options }: _CosmosAuthzV1beta1Queryrpc.UseGranteeGrantsQuery<TData_10>) => import("@tanstack/react-query").UseQueryResult<TData_10, Error>;
            };
        };
        bank: {
            v1beta1: {
                useBalance: <TData_11 = import("./cosmos/bank/v1beta1/query").QueryBalanceResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseBalanceQuery<TData_11>) => import("@tanstack/react-query").UseQueryResult<TData_11, Error>;
                useAllBalances: <TData_12 = import("./cosmos/bank/v1beta1/query").QueryAllBalancesResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseAllBalancesQuery<TData_12>) => import("@tanstack/react-query").UseQueryResult<TData_12, Error>;
                useSpendableBalances: <TData_13 = import("./cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseSpendableBalancesQuery<TData_13>) => import("@tanstack/react-query").UseQueryResult<TData_13, Error>;
                useTotalSupply: <TData_14 = import("./cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseTotalSupplyQuery<TData_14>) => import("@tanstack/react-query").UseQueryResult<TData_14, Error>;
                useSupplyOf: <TData_15 = import("./cosmos/bank/v1beta1/query").QuerySupplyOfResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseSupplyOfQuery<TData_15>) => import("@tanstack/react-query").UseQueryResult<TData_15, Error>;
                useParams: <TData_16 = import("./cosmos/bank/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseParamsQuery<TData_16>) => import("@tanstack/react-query").UseQueryResult<TData_16, Error>;
                useDenomMetadata: <TData_17 = import("./cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseDenomMetadataQuery<TData_17>) => import("@tanstack/react-query").UseQueryResult<TData_17, Error>;
                useDenomsMetadata: <TData_18 = import("./cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseDenomsMetadataQuery<TData_18>) => import("@tanstack/react-query").UseQueryResult<TData_18, Error>;
                useDenomOwners: <TData_19 = import("./cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>({ request, options }: _CosmosBankV1beta1Queryrpc.UseDenomOwnersQuery<TData_19>) => import("@tanstack/react-query").UseQueryResult<TData_19, Error>;
            };
        };
        base: {
            tendermint: {
                v1beta1: {
                    useGetNodeInfo: <TData_20 = import("./cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetNodeInfoQuery<TData_20>) => import("@tanstack/react-query").UseQueryResult<TData_20, Error>;
                    useGetSyncing: <TData_21 = import("./cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetSyncingQuery<TData_21>) => import("@tanstack/react-query").UseQueryResult<TData_21, Error>;
                    useGetLatestBlock: <TData_22 = import("./cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetLatestBlockQuery<TData_22>) => import("@tanstack/react-query").UseQueryResult<TData_22, Error>;
                    useGetBlockByHeight: <TData_23 = import("./cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetBlockByHeightQuery<TData_23>) => import("@tanstack/react-query").UseQueryResult<TData_23, Error>;
                    useGetLatestValidatorSet: <TData_24 = import("./cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetLatestValidatorSetQuery<TData_24>) => import("@tanstack/react-query").UseQueryResult<TData_24, Error>;
                    useGetValidatorSetByHeight: <TData_25 = import("./cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>({ request, options }: _CosmosBaseTendermintV1beta1Queryrpc.UseGetValidatorSetByHeightQuery<TData_25>) => import("@tanstack/react-query").UseQueryResult<TData_25, Error>;
                };
            };
        };
        distribution: {
            v1beta1: {
                useParams: <TData_26 = import("./cosmos/distribution/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseParamsQuery<TData_26>) => import("@tanstack/react-query").UseQueryResult<TData_26, Error>;
                useValidatorOutstandingRewards: <TData_27 = import("./cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseValidatorOutstandingRewardsQuery<TData_27>) => import("@tanstack/react-query").UseQueryResult<TData_27, Error>;
                useValidatorCommission: <TData_28 = import("./cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseValidatorCommissionQuery<TData_28>) => import("@tanstack/react-query").UseQueryResult<TData_28, Error>;
                useValidatorSlashes: <TData_29 = import("./cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseValidatorSlashesQuery<TData_29>) => import("@tanstack/react-query").UseQueryResult<TData_29, Error>;
                useDelegationRewards: <TData_30 = import("./cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseDelegationRewardsQuery<TData_30>) => import("@tanstack/react-query").UseQueryResult<TData_30, Error>;
                useDelegationTotalRewards: <TData_31 = import("./cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseDelegationTotalRewardsQuery<TData_31>) => import("@tanstack/react-query").UseQueryResult<TData_31, Error>;
                useDelegatorValidators: <TData_32 = import("./cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseDelegatorValidatorsQuery<TData_32>) => import("@tanstack/react-query").UseQueryResult<TData_32, Error>;
                useDelegatorWithdrawAddress: <TData_33 = import("./cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseDelegatorWithdrawAddressQuery<TData_33>) => import("@tanstack/react-query").UseQueryResult<TData_33, Error>;
                useCommunityPool: <TData_34 = import("./cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>({ request, options }: _CosmosDistributionV1beta1Queryrpc.UseCommunityPoolQuery<TData_34>) => import("@tanstack/react-query").UseQueryResult<TData_34, Error>;
            };
        };
        evidence: {
            v1beta1: {
                useEvidence: <TData_35 = import("./cosmos/evidence/v1beta1/query").QueryEvidenceResponse>({ request, options }: _CosmosEvidenceV1beta1Queryrpc.UseEvidenceQuery<TData_35>) => import("@tanstack/react-query").UseQueryResult<TData_35, Error>;
                useAllEvidence: <TData_36 = import("./cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>({ request, options }: _CosmosEvidenceV1beta1Queryrpc.UseAllEvidenceQuery<TData_36>) => import("@tanstack/react-query").UseQueryResult<TData_36, Error>;
            };
        };
        feegrant: {
            v1beta1: {
                useAllowance: <TData_37 = import("./cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>({ request, options }: _CosmosFeegrantV1beta1Queryrpc.UseAllowanceQuery<TData_37>) => import("@tanstack/react-query").UseQueryResult<TData_37, Error>;
                useAllowances: <TData_38 = import("./cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>({ request, options }: _CosmosFeegrantV1beta1Queryrpc.UseAllowancesQuery<TData_38>) => import("@tanstack/react-query").UseQueryResult<TData_38, Error>;
                useAllowancesByGranter: <TData_39 = import("./cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>({ request, options }: _CosmosFeegrantV1beta1Queryrpc.UseAllowancesByGranterQuery<TData_39>) => import("@tanstack/react-query").UseQueryResult<TData_39, Error>;
            };
        };
        gov: {
            v1: {
                useProposal: <TData_40 = import("./cosmos/gov/v1/query").QueryProposalResponse>({ request, options }: _CosmosGovV1Queryrpc.UseProposalQuery<TData_40>) => import("@tanstack/react-query").UseQueryResult<TData_40, Error>;
                useProposals: <TData_41 = import("./cosmos/gov/v1/query").QueryProposalsResponse>({ request, options }: _CosmosGovV1Queryrpc.UseProposalsQuery<TData_41>) => import("@tanstack/react-query").UseQueryResult<TData_41, Error>;
                useVote: <TData_42 = import("./cosmos/gov/v1/query").QueryVoteResponse>({ request, options }: _CosmosGovV1Queryrpc.UseVoteQuery<TData_42>) => import("@tanstack/react-query").UseQueryResult<TData_42, Error>;
                useVotes: <TData_43 = import("./cosmos/gov/v1/query").QueryVotesResponse>({ request, options }: _CosmosGovV1Queryrpc.UseVotesQuery<TData_43>) => import("@tanstack/react-query").UseQueryResult<TData_43, Error>;
                useParams: <TData_44 = import("./cosmos/gov/v1/query").QueryParamsResponse>({ request, options }: _CosmosGovV1Queryrpc.UseParamsQuery<TData_44>) => import("@tanstack/react-query").UseQueryResult<TData_44, Error>;
                useDeposit: <TData_45 = import("./cosmos/gov/v1/query").QueryDepositResponse>({ request, options }: _CosmosGovV1Queryrpc.UseDepositQuery<TData_45>) => import("@tanstack/react-query").UseQueryResult<TData_45, Error>;
                useDeposits: <TData_46 = import("./cosmos/gov/v1/query").QueryDepositsResponse>({ request, options }: _CosmosGovV1Queryrpc.UseDepositsQuery<TData_46>) => import("@tanstack/react-query").UseQueryResult<TData_46, Error>;
                useTallyResult: <TData_47 = import("./cosmos/gov/v1/query").QueryTallyResultResponse>({ request, options }: _CosmosGovV1Queryrpc.UseTallyResultQuery<TData_47>) => import("@tanstack/react-query").UseQueryResult<TData_47, Error>;
            };
            v1beta1: {
                useProposal: <TData_48 = import("./cosmos/gov/v1beta1/query").QueryProposalResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseProposalQuery<TData_48>) => import("@tanstack/react-query").UseQueryResult<TData_48, Error>;
                useProposals: <TData_49 = import("./cosmos/gov/v1beta1/query").QueryProposalsResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseProposalsQuery<TData_49>) => import("@tanstack/react-query").UseQueryResult<TData_49, Error>;
                useVote: <TData_50 = import("./cosmos/gov/v1beta1/query").QueryVoteResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseVoteQuery<TData_50>) => import("@tanstack/react-query").UseQueryResult<TData_50, Error>;
                useVotes: <TData_51 = import("./cosmos/gov/v1beta1/query").QueryVotesResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseVotesQuery<TData_51>) => import("@tanstack/react-query").UseQueryResult<TData_51, Error>;
                useParams: <TData_52 = import("./cosmos/gov/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseParamsQuery<TData_52>) => import("@tanstack/react-query").UseQueryResult<TData_52, Error>;
                useDeposit: <TData_53 = import("./cosmos/gov/v1beta1/query").QueryDepositResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseDepositQuery<TData_53>) => import("@tanstack/react-query").UseQueryResult<TData_53, Error>;
                useDeposits: <TData_54 = import("./cosmos/gov/v1beta1/query").QueryDepositsResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseDepositsQuery<TData_54>) => import("@tanstack/react-query").UseQueryResult<TData_54, Error>;
                useTallyResult: <TData_55 = import("./cosmos/gov/v1beta1/query").QueryTallyResultResponse>({ request, options }: _CosmosGovV1beta1Queryrpc.UseTallyResultQuery<TData_55>) => import("@tanstack/react-query").UseQueryResult<TData_55, Error>;
            };
        };
        group: {
            v1: {
                useGroupInfo: <TData_56 = import("./cosmos/group/v1/query").QueryGroupInfoResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupInfoQuery<TData_56>) => import("@tanstack/react-query").UseQueryResult<TData_56, Error>;
                useGroupPolicyInfo: <TData_57 = import("./cosmos/group/v1/query").QueryGroupPolicyInfoResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupPolicyInfoQuery<TData_57>) => import("@tanstack/react-query").UseQueryResult<TData_57, Error>;
                useGroupMembers: <TData_58 = import("./cosmos/group/v1/query").QueryGroupMembersResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupMembersQuery<TData_58>) => import("@tanstack/react-query").UseQueryResult<TData_58, Error>;
                useGroupsByAdmin: <TData_59 = import("./cosmos/group/v1/query").QueryGroupsByAdminResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupsByAdminQuery<TData_59>) => import("@tanstack/react-query").UseQueryResult<TData_59, Error>;
                useGroupPoliciesByGroup: <TData_60 = import("./cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupPoliciesByGroupQuery<TData_60>) => import("@tanstack/react-query").UseQueryResult<TData_60, Error>;
                useGroupPoliciesByAdmin: <TData_61 = import("./cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupPoliciesByAdminQuery<TData_61>) => import("@tanstack/react-query").UseQueryResult<TData_61, Error>;
                useProposal: <TData_62 = import("./cosmos/group/v1/query").QueryProposalResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseProposalQuery<TData_62>) => import("@tanstack/react-query").UseQueryResult<TData_62, Error>;
                useProposalsByGroupPolicy: <TData_63 = import("./cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseProposalsByGroupPolicyQuery<TData_63>) => import("@tanstack/react-query").UseQueryResult<TData_63, Error>;
                useVoteByProposalVoter: <TData_64 = import("./cosmos/group/v1/query").QueryVoteByProposalVoterResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseVoteByProposalVoterQuery<TData_64>) => import("@tanstack/react-query").UseQueryResult<TData_64, Error>;
                useVotesByProposal: <TData_65 = import("./cosmos/group/v1/query").QueryVotesByProposalResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseVotesByProposalQuery<TData_65>) => import("@tanstack/react-query").UseQueryResult<TData_65, Error>;
                useVotesByVoter: <TData_66 = import("./cosmos/group/v1/query").QueryVotesByVoterResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseVotesByVoterQuery<TData_66>) => import("@tanstack/react-query").UseQueryResult<TData_66, Error>;
                useGroupsByMember: <TData_67 = import("./cosmos/group/v1/query").QueryGroupsByMemberResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseGroupsByMemberQuery<TData_67>) => import("@tanstack/react-query").UseQueryResult<TData_67, Error>;
                useTallyResult: <TData_68 = import("./cosmos/group/v1/query").QueryTallyResultResponse>({ request, options }: _CosmosGroupV1Queryrpc.UseTallyResultQuery<TData_68>) => import("@tanstack/react-query").UseQueryResult<TData_68, Error>;
            };
        };
        mint: {
            v1beta1: {
                useParams: <TData_69 = import("./cosmos/mint/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosMintV1beta1Queryrpc.UseParamsQuery<TData_69>) => import("@tanstack/react-query").UseQueryResult<TData_69, Error>;
                useInflation: <TData_70 = import("./cosmos/mint/v1beta1/query").QueryInflationResponse>({ request, options }: _CosmosMintV1beta1Queryrpc.UseInflationQuery<TData_70>) => import("@tanstack/react-query").UseQueryResult<TData_70, Error>;
                useAnnualProvisions: <TData_71 = import("./cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>({ request, options }: _CosmosMintV1beta1Queryrpc.UseAnnualProvisionsQuery<TData_71>) => import("@tanstack/react-query").UseQueryResult<TData_71, Error>;
            };
        };
        nft: {
            v1beta1: {
                useBalance: <TData_72 = import("./cosmos/nft/v1beta1/query").QueryBalanceResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseBalanceQuery<TData_72>) => import("@tanstack/react-query").UseQueryResult<TData_72, Error>;
                useOwner: <TData_73 = import("./cosmos/nft/v1beta1/query").QueryOwnerResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseOwnerQuery<TData_73>) => import("@tanstack/react-query").UseQueryResult<TData_73, Error>;
                useSupply: <TData_74 = import("./cosmos/nft/v1beta1/query").QuerySupplyResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseSupplyQuery<TData_74>) => import("@tanstack/react-query").UseQueryResult<TData_74, Error>;
                useNFTs: <TData_75 = import("./cosmos/nft/v1beta1/query").QueryNFTsResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseNFTsQuery<TData_75>) => import("@tanstack/react-query").UseQueryResult<TData_75, Error>;
                useNFT: <TData_76 = import("./cosmos/nft/v1beta1/query").QueryNFTResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseNFTQuery<TData_76>) => import("@tanstack/react-query").UseQueryResult<TData_76, Error>;
                useClass: <TData_77 = import("./cosmos/nft/v1beta1/query").QueryClassResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseClassQuery<TData_77>) => import("@tanstack/react-query").UseQueryResult<TData_77, Error>;
                useClasses: <TData_78 = import("./cosmos/nft/v1beta1/query").QueryClassesResponse>({ request, options }: _CosmosNftV1beta1Queryrpc.UseClassesQuery<TData_78>) => import("@tanstack/react-query").UseQueryResult<TData_78, Error>;
            };
        };
        params: {
            v1beta1: {
                useParams: <TData_79 = import("./cosmos/params/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosParamsV1beta1Queryrpc.UseParamsQuery<TData_79>) => import("@tanstack/react-query").UseQueryResult<TData_79, Error>;
                useSubspaces: <TData_80 = import("./cosmos/params/v1beta1/query").QuerySubspacesResponse>({ request, options }: _CosmosParamsV1beta1Queryrpc.UseSubspacesQuery<TData_80>) => import("@tanstack/react-query").UseQueryResult<TData_80, Error>;
            };
        };
        slashing: {
            v1beta1: {
                useParams: <TData_81 = import("./cosmos/slashing/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosSlashingV1beta1Queryrpc.UseParamsQuery<TData_81>) => import("@tanstack/react-query").UseQueryResult<TData_81, Error>;
                useSigningInfo: <TData_82 = import("./cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>({ request, options }: _CosmosSlashingV1beta1Queryrpc.UseSigningInfoQuery<TData_82>) => import("@tanstack/react-query").UseQueryResult<TData_82, Error>;
                useSigningInfos: <TData_83 = import("./cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>({ request, options }: _CosmosSlashingV1beta1Queryrpc.UseSigningInfosQuery<TData_83>) => import("@tanstack/react-query").UseQueryResult<TData_83, Error>;
            };
        };
        staking: {
            v1beta1: {
                useValidators: <TData_84 = import("./cosmos/staking/v1beta1/query").QueryValidatorsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseValidatorsQuery<TData_84>) => import("@tanstack/react-query").UseQueryResult<TData_84, Error>;
                useValidator: <TData_85 = import("./cosmos/staking/v1beta1/query").QueryValidatorResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseValidatorQuery<TData_85>) => import("@tanstack/react-query").UseQueryResult<TData_85, Error>;
                useValidatorDelegations: <TData_86 = import("./cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseValidatorDelegationsQuery<TData_86>) => import("@tanstack/react-query").UseQueryResult<TData_86, Error>;
                useValidatorUnbondingDelegations: <TData_87 = import("./cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseValidatorUnbondingDelegationsQuery<TData_87>) => import("@tanstack/react-query").UseQueryResult<TData_87, Error>;
                useDelegation: <TData_88 = import("./cosmos/staking/v1beta1/query").QueryDelegationResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegationQuery<TData_88>) => import("@tanstack/react-query").UseQueryResult<TData_88, Error>;
                useUnbondingDelegation: <TData_89 = import("./cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseUnbondingDelegationQuery<TData_89>) => import("@tanstack/react-query").UseQueryResult<TData_89, Error>;
                useDelegatorDelegations: <TData_90 = import("./cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegatorDelegationsQuery<TData_90>) => import("@tanstack/react-query").UseQueryResult<TData_90, Error>;
                useDelegatorUnbondingDelegations: <TData_91 = import("./cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegatorUnbondingDelegationsQuery<TData_91>) => import("@tanstack/react-query").UseQueryResult<TData_91, Error>;
                useRedelegations: <TData_92 = import("./cosmos/staking/v1beta1/query").QueryRedelegationsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseRedelegationsQuery<TData_92>) => import("@tanstack/react-query").UseQueryResult<TData_92, Error>;
                useDelegatorValidators: <TData_93 = import("./cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegatorValidatorsQuery<TData_93>) => import("@tanstack/react-query").UseQueryResult<TData_93, Error>;
                useDelegatorValidator: <TData_94 = import("./cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseDelegatorValidatorQuery<TData_94>) => import("@tanstack/react-query").UseQueryResult<TData_94, Error>;
                useHistoricalInfo: <TData_95 = import("./cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseHistoricalInfoQuery<TData_95>) => import("@tanstack/react-query").UseQueryResult<TData_95, Error>;
                usePool: <TData_96 = import("./cosmos/staking/v1beta1/query").QueryPoolResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UsePoolQuery<TData_96>) => import("@tanstack/react-query").UseQueryResult<TData_96, Error>;
                useParams: <TData_97 = import("./cosmos/staking/v1beta1/query").QueryParamsResponse>({ request, options }: _CosmosStakingV1beta1Queryrpc.UseParamsQuery<TData_97>) => import("@tanstack/react-query").UseQueryResult<TData_97, Error>;
            };
        };
        tx: {
            v1beta1: {
                useSimulate: <TData_98 = import("./cosmos/tx/v1beta1/service").SimulateResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseSimulateQuery<TData_98>) => import("@tanstack/react-query").UseQueryResult<TData_98, Error>;
                useGetTx: <TData_99 = import("./cosmos/tx/v1beta1/service").GetTxResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseGetTxQuery<TData_99>) => import("@tanstack/react-query").UseQueryResult<TData_99, Error>;
                useBroadcastTx: <TData_100 = import("./cosmos/tx/v1beta1/service").BroadcastTxResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseBroadcastTxQuery<TData_100>) => import("@tanstack/react-query").UseQueryResult<TData_100, Error>;
                useGetTxsEvent: <TData_101 = import("./cosmos/tx/v1beta1/service").GetTxsEventResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseGetTxsEventQuery<TData_101>) => import("@tanstack/react-query").UseQueryResult<TData_101, Error>;
                useGetBlockWithTxs: <TData_102 = import("./cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>({ request, options }: _CosmosTxV1beta1Servicerpc.UseGetBlockWithTxsQuery<TData_102>) => import("@tanstack/react-query").UseQueryResult<TData_102, Error>;
            };
        };
        upgrade: {
            v1beta1: {
                useCurrentPlan: <TData_103 = import("./cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseCurrentPlanQuery<TData_103>) => import("@tanstack/react-query").UseQueryResult<TData_103, Error>;
                useAppliedPlan: <TData_104 = import("./cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseAppliedPlanQuery<TData_104>) => import("@tanstack/react-query").UseQueryResult<TData_104, Error>;
                useUpgradedConsensusState: <TData_105 = import("./cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseUpgradedConsensusStateQuery<TData_105>) => import("@tanstack/react-query").UseQueryResult<TData_105, Error>;
                useModuleVersions: <TData_106 = import("./cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseModuleVersionsQuery<TData_106>) => import("@tanstack/react-query").UseQueryResult<TData_106, Error>;
                useAuthority: <TData_107 = import("./cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>({ request, options }: _CosmosUpgradeV1beta1Queryrpc.UseAuthorityQuery<TData_107>) => import("@tanstack/react-query").UseQueryResult<TData_107, Error>;
            };
        };
    };
    cosmwasm: {
        wasm: {
            v1: {
                useContractInfo: <TData_108 = import("./cosmwasm/wasm/v1/query").QueryContractInfoResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseContractInfoQuery<TData_108>) => import("@tanstack/react-query").UseQueryResult<TData_108, Error>;
                useContractHistory: <TData_109 = import("./cosmwasm/wasm/v1/query").QueryContractHistoryResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseContractHistoryQuery<TData_109>) => import("@tanstack/react-query").UseQueryResult<TData_109, Error>;
                useContractsByCode: <TData_110 = import("./cosmwasm/wasm/v1/query").QueryContractsByCodeResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseContractsByCodeQuery<TData_110>) => import("@tanstack/react-query").UseQueryResult<TData_110, Error>;
                useAllContractState: <TData_111 = import("./cosmwasm/wasm/v1/query").QueryAllContractStateResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseAllContractStateQuery<TData_111>) => import("@tanstack/react-query").UseQueryResult<TData_111, Error>;
                useRawContractState: <TData_112 = import("./cosmwasm/wasm/v1/query").QueryRawContractStateResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseRawContractStateQuery<TData_112>) => import("@tanstack/react-query").UseQueryResult<TData_112, Error>;
                useSmartContractState: <TData_113 = import("./cosmwasm/wasm/v1/query").QuerySmartContractStateResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseSmartContractStateQuery<TData_113>) => import("@tanstack/react-query").UseQueryResult<TData_113, Error>;
                useCode: <TData_114 = import("./cosmwasm/wasm/v1/query").QueryCodeResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseCodeQuery<TData_114>) => import("@tanstack/react-query").UseQueryResult<TData_114, Error>;
                useCodes: <TData_115 = import("./cosmwasm/wasm/v1/query").QueryCodesResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UseCodesQuery<TData_115>) => import("@tanstack/react-query").UseQueryResult<TData_115, Error>;
                usePinnedCodes: <TData_116 = import("./cosmwasm/wasm/v1/query").QueryPinnedCodesResponse>({ request, options }: _CosmwasmWasmV1Queryrpc.UsePinnedCodesQuery<TData_116>) => import("@tanstack/react-query").UseQueryResult<TData_116, Error>;
            };
        };
    };
    ibc: {
        applications: {
            transfer: {
                v1: {
                    useDenomTrace: <TData_117 = import("./ibc/applications/transfer/v1/query").QueryDenomTraceResponse>({ request, options }: _IbcApplicationsTransferV1Queryrpc.UseDenomTraceQuery<TData_117>) => import("@tanstack/react-query").UseQueryResult<TData_117, Error>;
                    useDenomTraces: <TData_118 = import("./ibc/applications/transfer/v1/query").QueryDenomTracesResponse>({ request, options }: _IbcApplicationsTransferV1Queryrpc.UseDenomTracesQuery<TData_118>) => import("@tanstack/react-query").UseQueryResult<TData_118, Error>;
                    useParams: <TData_119 = import("./ibc/applications/transfer/v1/query").QueryParamsResponse>({ request, options }: _IbcApplicationsTransferV1Queryrpc.UseParamsQuery<TData_119>) => import("@tanstack/react-query").UseQueryResult<TData_119, Error>;
                };
            };
        };
        core: {
            channel: {
                v1: {
                    useChannel: <TData_120 = import("./ibc/core/channel/v1/query").QueryChannelResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseChannelQuery<TData_120>) => import("@tanstack/react-query").UseQueryResult<TData_120, Error>;
                    useChannels: <TData_121 = import("./ibc/core/channel/v1/query").QueryChannelsResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseChannelsQuery<TData_121>) => import("@tanstack/react-query").UseQueryResult<TData_121, Error>;
                    useConnectionChannels: <TData_122 = import("./ibc/core/channel/v1/query").QueryConnectionChannelsResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseConnectionChannelsQuery<TData_122>) => import("@tanstack/react-query").UseQueryResult<TData_122, Error>;
                    useChannelClientState: <TData_123 = import("./ibc/core/channel/v1/query").QueryChannelClientStateResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseChannelClientStateQuery<TData_123>) => import("@tanstack/react-query").UseQueryResult<TData_123, Error>;
                    useChannelConsensusState: <TData_124 = import("./ibc/core/channel/v1/query").QueryChannelConsensusStateResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseChannelConsensusStateQuery<TData_124>) => import("@tanstack/react-query").UseQueryResult<TData_124, Error>;
                    usePacketCommitment: <TData_125 = import("./ibc/core/channel/v1/query").QueryPacketCommitmentResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UsePacketCommitmentQuery<TData_125>) => import("@tanstack/react-query").UseQueryResult<TData_125, Error>;
                    usePacketCommitments: <TData_126 = import("./ibc/core/channel/v1/query").QueryPacketCommitmentsResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UsePacketCommitmentsQuery<TData_126>) => import("@tanstack/react-query").UseQueryResult<TData_126, Error>;
                    usePacketReceipt: <TData_127 = import("./ibc/core/channel/v1/query").QueryPacketReceiptResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UsePacketReceiptQuery<TData_127>) => import("@tanstack/react-query").UseQueryResult<TData_127, Error>;
                    usePacketAcknowledgement: <TData_128 = import("./ibc/core/channel/v1/query").QueryPacketAcknowledgementResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UsePacketAcknowledgementQuery<TData_128>) => import("@tanstack/react-query").UseQueryResult<TData_128, Error>;
                    usePacketAcknowledgements: <TData_129 = import("./ibc/core/channel/v1/query").QueryPacketAcknowledgementsResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UsePacketAcknowledgementsQuery<TData_129>) => import("@tanstack/react-query").UseQueryResult<TData_129, Error>;
                    useUnreceivedPackets: <TData_130 = import("./ibc/core/channel/v1/query").QueryUnreceivedPacketsResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseUnreceivedPacketsQuery<TData_130>) => import("@tanstack/react-query").UseQueryResult<TData_130, Error>;
                    useUnreceivedAcks: <TData_131 = import("./ibc/core/channel/v1/query").QueryUnreceivedAcksResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseUnreceivedAcksQuery<TData_131>) => import("@tanstack/react-query").UseQueryResult<TData_131, Error>;
                    useNextSequenceReceive: <TData_132 = import("./ibc/core/channel/v1/query").QueryNextSequenceReceiveResponse>({ request, options }: _IbcCoreChannelV1Queryrpc.UseNextSequenceReceiveQuery<TData_132>) => import("@tanstack/react-query").UseQueryResult<TData_132, Error>;
                };
            };
            client: {
                v1: {
                    useClientState: <TData_133 = import("./ibc/core/client/v1/query").QueryClientStateResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseClientStateQuery<TData_133>) => import("@tanstack/react-query").UseQueryResult<TData_133, Error>;
                    useClientStates: <TData_134 = import("./ibc/core/client/v1/query").QueryClientStatesResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseClientStatesQuery<TData_134>) => import("@tanstack/react-query").UseQueryResult<TData_134, Error>;
                    useConsensusState: <TData_135 = import("./ibc/core/client/v1/query").QueryConsensusStateResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseConsensusStateQuery<TData_135>) => import("@tanstack/react-query").UseQueryResult<TData_135, Error>;
                    useConsensusStates: <TData_136 = import("./ibc/core/client/v1/query").QueryConsensusStatesResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseConsensusStatesQuery<TData_136>) => import("@tanstack/react-query").UseQueryResult<TData_136, Error>;
                    useClientStatus: <TData_137 = import("./ibc/core/client/v1/query").QueryClientStatusResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseClientStatusQuery<TData_137>) => import("@tanstack/react-query").UseQueryResult<TData_137, Error>;
                    useClientParams: <TData_138 = import("./ibc/core/client/v1/query").QueryClientParamsResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseClientParamsQuery<TData_138>) => import("@tanstack/react-query").UseQueryResult<TData_138, Error>;
                    useUpgradedClientState: <TData_139 = import("./ibc/core/client/v1/query").QueryUpgradedClientStateResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseUpgradedClientStateQuery<TData_139>) => import("@tanstack/react-query").UseQueryResult<TData_139, Error>;
                    useUpgradedConsensusState: <TData_140 = import("./ibc/core/client/v1/query").QueryUpgradedConsensusStateResponse>({ request, options }: _IbcCoreClientV1Queryrpc.UseUpgradedConsensusStateQuery<TData_140>) => import("@tanstack/react-query").UseQueryResult<TData_140, Error>;
                };
            };
            connection: {
                v1: {
                    useConnection: <TData_141 = import("./ibc/core/connection/v1/query").QueryConnectionResponse>({ request, options }: _IbcCoreConnectionV1Queryrpc.UseConnectionQuery<TData_141>) => import("@tanstack/react-query").UseQueryResult<TData_141, Error>;
                    useConnections: <TData_142 = import("./ibc/core/connection/v1/query").QueryConnectionsResponse>({ request, options }: _IbcCoreConnectionV1Queryrpc.UseConnectionsQuery<TData_142>) => import("@tanstack/react-query").UseQueryResult<TData_142, Error>;
                    useClientConnections: <TData_143 = import("./ibc/core/connection/v1/query").QueryClientConnectionsResponse>({ request, options }: _IbcCoreConnectionV1Queryrpc.UseClientConnectionsQuery<TData_143>) => import("@tanstack/react-query").UseQueryResult<TData_143, Error>;
                    useConnectionClientState: <TData_144 = import("./ibc/core/connection/v1/query").QueryConnectionClientStateResponse>({ request, options }: _IbcCoreConnectionV1Queryrpc.UseConnectionClientStateQuery<TData_144>) => import("@tanstack/react-query").UseQueryResult<TData_144, Error>;
                    useConnectionConsensusState: <TData_145 = import("./ibc/core/connection/v1/query").QueryConnectionConsensusStateResponse>({ request, options }: _IbcCoreConnectionV1Queryrpc.UseConnectionConsensusStateQuery<TData_145>) => import("@tanstack/react-query").UseQueryResult<TData_145, Error>;
                };
            };
            port: {
                v1: {
                    useAppVersion: <TData_146 = import("./ibc/core/port/v1/query").QueryAppVersionResponse>({ request, options }: _IbcCorePortV1Queryrpc.UseAppVersionQuery<TData_146>) => import("@tanstack/react-query").UseQueryResult<TData_146, Error>;
                };
            };
        };
    };
    osmosis: {
        claim: {
            v1beta1: {
                useModuleAccountBalance: <TData_147 = import("./osmosis/claim/v1beta1/query").QueryModuleAccountBalanceResponse>({ request, options }: _OsmosisClaimV1beta1Queryrpc.UseModuleAccountBalanceQuery<TData_147>) => import("@tanstack/react-query").UseQueryResult<TData_147, Error>;
                useParams: <TData_148 = import("./osmosis/claim/v1beta1/query").QueryParamsResponse>({ request, options }: _OsmosisClaimV1beta1Queryrpc.UseParamsQuery<TData_148>) => import("@tanstack/react-query").UseQueryResult<TData_148, Error>;
                useClaimRecord: <TData_149 = import("./osmosis/claim/v1beta1/query").QueryClaimRecordResponse>({ request, options }: _OsmosisClaimV1beta1Queryrpc.UseClaimRecordQuery<TData_149>) => import("@tanstack/react-query").UseQueryResult<TData_149, Error>;
                useClaimableForAction: <TData_150 = import("./osmosis/claim/v1beta1/query").QueryClaimableForActionResponse>({ request, options }: _OsmosisClaimV1beta1Queryrpc.UseClaimableForActionQuery<TData_150>) => import("@tanstack/react-query").UseQueryResult<TData_150, Error>;
                useTotalClaimable: <TData_151 = import("./osmosis/claim/v1beta1/query").QueryTotalClaimableResponse>({ request, options }: _OsmosisClaimV1beta1Queryrpc.UseTotalClaimableQuery<TData_151>) => import("@tanstack/react-query").UseQueryResult<TData_151, Error>;
            };
        };
        epochs: {
            v1beta1: {
                useEpochInfos: <TData_152 = import("./osmosis/epochs/query").QueryEpochsInfoResponse>({ request, options }: _OsmosisEpochsQueryrpc.UseEpochInfosQuery<TData_152>) => import("@tanstack/react-query").UseQueryResult<TData_152, Error>;
                useCurrentEpoch: <TData_153 = import("./osmosis/epochs/query").QueryCurrentEpochResponse>({ request, options }: _OsmosisEpochsQueryrpc.UseCurrentEpochQuery<TData_153>) => import("@tanstack/react-query").UseQueryResult<TData_153, Error>;
            };
        };
        gamm: {
            v2: {
                useSpotPrice: <TData_154 = import("./osmosis/gamm/v2/query").QuerySpotPriceResponse>({ request, options }: _OsmosisGammV2Queryrpc.UseSpotPriceQuery<TData_154>) => import("@tanstack/react-query").UseQueryResult<TData_154, Error>;
            };
        };
        ibcratelimit: {
            v1beta1: {
                useParams: <TData_155 = import("./osmosis/ibc-rate-limit/v1beta1/query").QueryParamsResponse>({ request, options }: _OsmosisIbcratelimitV1beta1Queryrpc.UseParamsQuery<TData_155>) => import("@tanstack/react-query").UseQueryResult<TData_155, Error>;
            };
        };
        incentives: {
            useModuleToDistributeCoins: <TData_156 = import("./osmosis/incentives/query").ModuleToDistributeCoinsResponse>({ request, options }: _OsmosisIncentivesQueryrpc.UseModuleToDistributeCoinsQuery<TData_156>) => import("@tanstack/react-query").UseQueryResult<TData_156, Error>;
            useGaugeByID: <TData_157 = import("./osmosis/incentives/query").GaugeByIDResponse>({ request, options }: _OsmosisIncentivesQueryrpc.UseGaugeByIDQuery<TData_157>) => import("@tanstack/react-query").UseQueryResult<TData_157, Error>;
            useGauges: <TData_158 = import("./osmosis/incentives/query").GaugesResponse>({ request, options }: _OsmosisIncentivesQueryrpc.UseGaugesQuery<TData_158>) => import("@tanstack/react-query").UseQueryResult<TData_158, Error>;
            useActiveGauges: <TData_159 = import("./osmosis/incentives/query").ActiveGaugesResponse>({ request, options }: _OsmosisIncentivesQueryrpc.UseActiveGaugesQuery<TData_159>) => import("@tanstack/react-query").UseQueryResult<TData_159, Error>;
            useActiveGaugesPerDenom: <TData_160 = import("./osmosis/incentives/query").ActiveGaugesPerDenomResponse>({ request, options }: _OsmosisIncentivesQueryrpc.UseActiveGaugesPerDenomQuery<TData_160>) => import("@tanstack/react-query").UseQueryResult<TData_160, Error>;
            useUpcomingGauges: <TData_161 = import("./osmosis/incentives/query").UpcomingGaugesResponse>({ request, options }: _OsmosisIncentivesQueryrpc.UseUpcomingGaugesQuery<TData_161>) => import("@tanstack/react-query").UseQueryResult<TData_161, Error>;
            useUpcomingGaugesPerDenom: <TData_162 = import("./osmosis/incentives/query").UpcomingGaugesPerDenomResponse>({ request, options }: _OsmosisIncentivesQueryrpc.UseUpcomingGaugesPerDenomQuery<TData_162>) => import("@tanstack/react-query").UseQueryResult<TData_162, Error>;
            useRewardsEst: <TData_163 = import("./osmosis/incentives/query").RewardsEstResponse>({ request, options }: _OsmosisIncentivesQueryrpc.UseRewardsEstQuery<TData_163>) => import("@tanstack/react-query").UseQueryResult<TData_163, Error>;
            useLockableDurations: <TData_164 = import("./osmosis/incentives/query").QueryLockableDurationsResponse>({ request, options }: _OsmosisIncentivesQueryrpc.UseLockableDurationsQuery<TData_164>) => import("@tanstack/react-query").UseQueryResult<TData_164, Error>;
        };
        lockup: {
            useModuleBalance: <TData_165 = import("./osmosis/lockup/query").ModuleBalanceResponse>({ request, options }: _OsmosisLockupQueryrpc.UseModuleBalanceQuery<TData_165>) => import("@tanstack/react-query").UseQueryResult<TData_165, Error>;
            useModuleLockedAmount: <TData_166 = import("./osmosis/lockup/query").ModuleLockedAmountResponse>({ request, options }: _OsmosisLockupQueryrpc.UseModuleLockedAmountQuery<TData_166>) => import("@tanstack/react-query").UseQueryResult<TData_166, Error>;
            useAccountUnlockableCoins: <TData_167 = import("./osmosis/lockup/query").AccountUnlockableCoinsResponse>({ request, options }: _OsmosisLockupQueryrpc.UseAccountUnlockableCoinsQuery<TData_167>) => import("@tanstack/react-query").UseQueryResult<TData_167, Error>;
            useAccountUnlockingCoins: <TData_168 = import("./osmosis/lockup/query").AccountUnlockingCoinsResponse>({ request, options }: _OsmosisLockupQueryrpc.UseAccountUnlockingCoinsQuery<TData_168>) => import("@tanstack/react-query").UseQueryResult<TData_168, Error>;
            useAccountLockedCoins: <TData_169 = import("./osmosis/lockup/query").AccountLockedCoinsResponse>({ request, options }: _OsmosisLockupQueryrpc.UseAccountLockedCoinsQuery<TData_169>) => import("@tanstack/react-query").UseQueryResult<TData_169, Error>;
            useAccountLockedPastTime: <TData_170 = import("./osmosis/lockup/query").AccountLockedPastTimeResponse>({ request, options }: _OsmosisLockupQueryrpc.UseAccountLockedPastTimeQuery<TData_170>) => import("@tanstack/react-query").UseQueryResult<TData_170, Error>;
            useAccountLockedPastTimeNotUnlockingOnly: <TData_171 = import("./osmosis/lockup/query").AccountLockedPastTimeNotUnlockingOnlyResponse>({ request, options }: _OsmosisLockupQueryrpc.UseAccountLockedPastTimeNotUnlockingOnlyQuery<TData_171>) => import("@tanstack/react-query").UseQueryResult<TData_171, Error>;
            useAccountUnlockedBeforeTime: <TData_172 = import("./osmosis/lockup/query").AccountUnlockedBeforeTimeResponse>({ request, options }: _OsmosisLockupQueryrpc.UseAccountUnlockedBeforeTimeQuery<TData_172>) => import("@tanstack/react-query").UseQueryResult<TData_172, Error>;
            useAccountLockedPastTimeDenom: <TData_173 = import("./osmosis/lockup/query").AccountLockedPastTimeDenomResponse>({ request, options }: _OsmosisLockupQueryrpc.UseAccountLockedPastTimeDenomQuery<TData_173>) => import("@tanstack/react-query").UseQueryResult<TData_173, Error>;
            useLockedDenom: <TData_174 = import("./osmosis/lockup/query").LockedDenomResponse>({ request, options }: _OsmosisLockupQueryrpc.UseLockedDenomQuery<TData_174>) => import("@tanstack/react-query").UseQueryResult<TData_174, Error>;
            useLockedByID: <TData_175 = import("./osmosis/lockup/query").LockedResponse>({ request, options }: _OsmosisLockupQueryrpc.UseLockedByIDQuery<TData_175>) => import("@tanstack/react-query").UseQueryResult<TData_175, Error>;
            useSyntheticLockupsByLockupID: <TData_176 = import("./osmosis/lockup/query").SyntheticLockupsByLockupIDResponse>({ request, options }: _OsmosisLockupQueryrpc.UseSyntheticLockupsByLockupIDQuery<TData_176>) => import("@tanstack/react-query").UseQueryResult<TData_176, Error>;
            useAccountLockedLongerDuration: <TData_177 = import("./osmosis/lockup/query").AccountLockedLongerDurationResponse>({ request, options }: _OsmosisLockupQueryrpc.UseAccountLockedLongerDurationQuery<TData_177>) => import("@tanstack/react-query").UseQueryResult<TData_177, Error>;
            useAccountLockedDuration: <TData_178 = import("./osmosis/lockup/query").AccountLockedDurationResponse>({ request, options }: _OsmosisLockupQueryrpc.UseAccountLockedDurationQuery<TData_178>) => import("@tanstack/react-query").UseQueryResult<TData_178, Error>;
            useAccountLockedLongerDurationNotUnlockingOnly: <TData_179 = import("./osmosis/lockup/query").AccountLockedLongerDurationNotUnlockingOnlyResponse>({ request, options }: _OsmosisLockupQueryrpc.UseAccountLockedLongerDurationNotUnlockingOnlyQuery<TData_179>) => import("@tanstack/react-query").UseQueryResult<TData_179, Error>;
            useAccountLockedLongerDurationDenom: <TData_180 = import("./osmosis/lockup/query").AccountLockedLongerDurationDenomResponse>({ request, options }: _OsmosisLockupQueryrpc.UseAccountLockedLongerDurationDenomQuery<TData_180>) => import("@tanstack/react-query").UseQueryResult<TData_180, Error>;
            useParams: <TData_181 = import("./osmosis/lockup/query").QueryParamsResponse>({ request, options }: _OsmosisLockupQueryrpc.UseParamsQuery<TData_181>) => import("@tanstack/react-query").UseQueryResult<TData_181, Error>;
        };
        mint: {
            v1beta1: {
                useParams: <TData_182 = import("./osmosis/mint/v1beta1/query").QueryParamsResponse>({ request, options }: _OsmosisMintV1beta1Queryrpc.UseParamsQuery<TData_182>) => import("@tanstack/react-query").UseQueryResult<TData_182, Error>;
                useEpochProvisions: <TData_183 = import("./osmosis/mint/v1beta1/query").QueryEpochProvisionsResponse>({ request, options }: _OsmosisMintV1beta1Queryrpc.UseEpochProvisionsQuery<TData_183>) => import("@tanstack/react-query").UseQueryResult<TData_183, Error>;
            };
        };
        poolincentives: {
            v1beta1: {
                useGaugeIds: <TData_184 = import("./osmosis/pool-incentives/v1beta1/query").QueryGaugeIdsResponse>({ request, options }: _OsmosisPoolincentivesV1beta1Queryrpc.UseGaugeIdsQuery<TData_184>) => import("@tanstack/react-query").UseQueryResult<TData_184, Error>;
                useDistrInfo: <TData_185 = import("./osmosis/pool-incentives/v1beta1/query").QueryDistrInfoResponse>({ request, options }: _OsmosisPoolincentivesV1beta1Queryrpc.UseDistrInfoQuery<TData_185>) => import("@tanstack/react-query").UseQueryResult<TData_185, Error>;
                useParams: <TData_186 = import("./osmosis/pool-incentives/v1beta1/query").QueryParamsResponse>({ request, options }: _OsmosisPoolincentivesV1beta1Queryrpc.UseParamsQuery<TData_186>) => import("@tanstack/react-query").UseQueryResult<TData_186, Error>;
                useLockableDurations: <TData_187 = import("./osmosis/pool-incentives/v1beta1/query").QueryLockableDurationsResponse>({ request, options }: _OsmosisPoolincentivesV1beta1Queryrpc.UseLockableDurationsQuery<TData_187>) => import("@tanstack/react-query").UseQueryResult<TData_187, Error>;
                useIncentivizedPools: <TData_188 = import("./osmosis/pool-incentives/v1beta1/query").QueryIncentivizedPoolsResponse>({ request, options }: _OsmosisPoolincentivesV1beta1Queryrpc.UseIncentivizedPoolsQuery<TData_188>) => import("@tanstack/react-query").UseQueryResult<TData_188, Error>;
                useExternalIncentiveGauges: <TData_189 = import("./osmosis/pool-incentives/v1beta1/query").QueryExternalIncentiveGaugesResponse>({ request, options }: _OsmosisPoolincentivesV1beta1Queryrpc.UseExternalIncentiveGaugesQuery<TData_189>) => import("@tanstack/react-query").UseQueryResult<TData_189, Error>;
            };
        };
        superfluid: {
            useParams: <TData_190 = import("./osmosis/superfluid/query").QueryParamsResponse>({ request, options }: _OsmosisSuperfluidQueryrpc.UseParamsQuery<TData_190>) => import("@tanstack/react-query").UseQueryResult<TData_190, Error>;
            useAssetType: <TData_191 = import("./osmosis/superfluid/query").AssetTypeResponse>({ request, options }: _OsmosisSuperfluidQueryrpc.UseAssetTypeQuery<TData_191>) => import("@tanstack/react-query").UseQueryResult<TData_191, Error>;
            useAllAssets: <TData_192 = import("./osmosis/superfluid/query").AllAssetsResponse>({ request, options }: _OsmosisSuperfluidQueryrpc.UseAllAssetsQuery<TData_192>) => import("@tanstack/react-query").UseQueryResult<TData_192, Error>;
            useAssetMultiplier: <TData_193 = import("./osmosis/superfluid/query").AssetMultiplierResponse>({ request, options }: _OsmosisSuperfluidQueryrpc.UseAssetMultiplierQuery<TData_193>) => import("@tanstack/react-query").UseQueryResult<TData_193, Error>;
            useAllIntermediaryAccounts: <TData_194 = import("./osmosis/superfluid/query").AllIntermediaryAccountsResponse>({ request, options }: _OsmosisSuperfluidQueryrpc.UseAllIntermediaryAccountsQuery<TData_194>) => import("@tanstack/react-query").UseQueryResult<TData_194, Error>;
            useConnectedIntermediaryAccount: <TData_195 = import("./osmosis/superfluid/query").ConnectedIntermediaryAccountResponse>({ request, options }: _OsmosisSuperfluidQueryrpc.UseConnectedIntermediaryAccountQuery<TData_195>) => import("@tanstack/react-query").UseQueryResult<TData_195, Error>;
            useTotalDelegationByValidatorForDenom: <TData_196 = import("./osmosis/superfluid/query").QueryTotalDelegationByValidatorForDenomResponse>({ request, options }: _OsmosisSuperfluidQueryrpc.UseTotalDelegationByValidatorForDenomQuery<TData_196>) => import("@tanstack/react-query").UseQueryResult<TData_196, Error>;
            useTotalSuperfluidDelegations: <TData_197 = import("./osmosis/superfluid/query").TotalSuperfluidDelegationsResponse>({ request, options }: _OsmosisSuperfluidQueryrpc.UseTotalSuperfluidDelegationsQuery<TData_197>) => import("@tanstack/react-query").UseQueryResult<TData_197, Error>;
            useSuperfluidDelegationAmount: <TData_198 = import("./osmosis/superfluid/query").SuperfluidDelegationAmountResponse>({ request, options }: _OsmosisSuperfluidQueryrpc.UseSuperfluidDelegationAmountQuery<TData_198>) => import("@tanstack/react-query").UseQueryResult<TData_198, Error>;
            useSuperfluidDelegationsByDelegator: <TData_199 = import("./osmosis/superfluid/query").SuperfluidDelegationsByDelegatorResponse>({ request, options }: _OsmosisSuperfluidQueryrpc.UseSuperfluidDelegationsByDelegatorQuery<TData_199>) => import("@tanstack/react-query").UseQueryResult<TData_199, Error>;
            useSuperfluidUndelegationsByDelegator: <TData_200 = import("./osmosis/superfluid/query").SuperfluidUndelegationsByDelegatorResponse>({ request, options }: _OsmosisSuperfluidQueryrpc.UseSuperfluidUndelegationsByDelegatorQuery<TData_200>) => import("@tanstack/react-query").UseQueryResult<TData_200, Error>;
            useSuperfluidDelegationsByValidatorDenom: <TData_201 = import("./osmosis/superfluid/query").SuperfluidDelegationsByValidatorDenomResponse>({ request, options }: _OsmosisSuperfluidQueryrpc.UseSuperfluidDelegationsByValidatorDenomQuery<TData_201>) => import("@tanstack/react-query").UseQueryResult<TData_201, Error>;
            useEstimateSuperfluidDelegatedAmountByValidatorDenom: <TData_202 = import("./osmosis/superfluid/query").EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>({ request, options }: _OsmosisSuperfluidQueryrpc.UseEstimateSuperfluidDelegatedAmountByValidatorDenomQuery<TData_202>) => import("@tanstack/react-query").UseQueryResult<TData_202, Error>;
            useTotalDelegationByDelegator: <TData_203 = import("./osmosis/superfluid/query").QueryTotalDelegationByDelegatorResponse>({ request, options }: _OsmosisSuperfluidQueryrpc.UseTotalDelegationByDelegatorQuery<TData_203>) => import("@tanstack/react-query").UseQueryResult<TData_203, Error>;
            useUnpoolWhitelist: <TData_204 = import("./osmosis/superfluid/query").QueryUnpoolWhitelistResponse>({ request, options }: _OsmosisSuperfluidQueryrpc.UseUnpoolWhitelistQuery<TData_204>) => import("@tanstack/react-query").UseQueryResult<TData_204, Error>;
        };
        tokenfactory: {
            v1beta1: {
                useParams: <TData_205 = import("./osmosis/tokenfactory/v1beta1/query").QueryParamsResponse>({ request, options }: _OsmosisTokenfactoryV1beta1Queryrpc.UseParamsQuery<TData_205>) => import("@tanstack/react-query").UseQueryResult<TData_205, Error>;
                useDenomAuthorityMetadata: <TData_206 = import("./osmosis/tokenfactory/v1beta1/query").QueryDenomAuthorityMetadataResponse>({ request, options }: _OsmosisTokenfactoryV1beta1Queryrpc.UseDenomAuthorityMetadataQuery<TData_206>) => import("@tanstack/react-query").UseQueryResult<TData_206, Error>;
                useDenomsFromCreator: <TData_207 = import("./osmosis/tokenfactory/v1beta1/query").QueryDenomsFromCreatorResponse>({ request, options }: _OsmosisTokenfactoryV1beta1Queryrpc.UseDenomsFromCreatorQuery<TData_207>) => import("@tanstack/react-query").UseQueryResult<TData_207, Error>;
            };
        };
        twap: {
            v1beta1: {
                useParams: <TData_208 = import("./osmosis/twap/v1beta1/query").ParamsResponse>({ request, options }: _OsmosisTwapV1beta1Queryrpc.UseParamsQuery<TData_208>) => import("@tanstack/react-query").UseQueryResult<TData_208, Error>;
                useArithmeticTwap: <TData_209 = import("./osmosis/twap/v1beta1/query").ArithmeticTwapResponse>({ request, options }: _OsmosisTwapV1beta1Queryrpc.UseArithmeticTwapQuery<TData_209>) => import("@tanstack/react-query").UseQueryResult<TData_209, Error>;
                useArithmeticTwapToNow: <TData_210 = import("./osmosis/twap/v1beta1/query").ArithmeticTwapToNowResponse>({ request, options }: _OsmosisTwapV1beta1Queryrpc.UseArithmeticTwapToNowQuery<TData_210>) => import("@tanstack/react-query").UseQueryResult<TData_210, Error>;
            };
        };
        txfees: {
            v1beta1: {
                useFeeTokens: <TData_211 = import("./osmosis/txfees/v1beta1/query").QueryFeeTokensResponse>({ request, options }: _OsmosisTxfeesV1beta1Queryrpc.UseFeeTokensQuery<TData_211>) => import("@tanstack/react-query").UseQueryResult<TData_211, Error>;
                useDenomSpotPrice: <TData_212 = import("./osmosis/txfees/v1beta1/query").QueryDenomSpotPriceResponse>({ request, options }: _OsmosisTxfeesV1beta1Queryrpc.UseDenomSpotPriceQuery<TData_212>) => import("@tanstack/react-query").UseQueryResult<TData_212, Error>;
                useDenomPoolId: <TData_213 = import("./osmosis/txfees/v1beta1/query").QueryDenomPoolIdResponse>({ request, options }: _OsmosisTxfeesV1beta1Queryrpc.UseDenomPoolIdQuery<TData_213>) => import("@tanstack/react-query").UseQueryResult<TData_213, Error>;
                useBaseDenom: <TData_214 = import("./osmosis/txfees/v1beta1/query").QueryBaseDenomResponse>({ request, options }: _OsmosisTxfeesV1beta1Queryrpc.UseBaseDenomQuery<TData_214>) => import("@tanstack/react-query").UseQueryResult<TData_214, Error>;
            };
        };
    };
};
