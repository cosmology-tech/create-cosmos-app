import { ProtobufRpcClient } from "@cosmjs/stargate";
export declare const createRpcQueryMobxStores: ({ rpc }: {
    rpc: ProtobufRpcClient | undefined;
}) => {
    cosmos: {
        app: {
            v1alpha1: {
                QueryConfigStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/app/v1alpha1/query").QueryConfigRequest, import("./cosmos/app/v1alpha1/query").QueryConfigResponse>;
                        config(request: import("./cosmos/app/v1alpha1/query").QueryConfigRequest): import("./mobx").MobxResponse<import("./cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
            };
        };
        auth: {
            v1beta1: {
                QueryAccountsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/auth/v1beta1/query").QueryAccountsRequest, import("./cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        accounts(request: import("./cosmos/auth/v1beta1/query").QueryAccountsRequest): import("./mobx").MobxResponse<import("./cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                    };
                };
                QueryAccountStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/auth/v1beta1/query").QueryAccountRequest, import("./cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        account(request: import("./cosmos/auth/v1beta1/query").QueryAccountRequest): import("./mobx").MobxResponse<import("./cosmos/auth/v1beta1/query").QueryAccountResponse>;
                    };
                };
                QueryParamsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/auth/v1beta1/query").QueryParamsRequest, import("./cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        params(request: import("./cosmos/auth/v1beta1/query").QueryParamsRequest): import("./mobx").MobxResponse<import("./cosmos/auth/v1beta1/query").QueryParamsResponse>;
                    };
                };
                QueryModuleAccountsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/auth/v1beta1/query").QueryModuleAccountsRequest, import("./cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        moduleAccounts(request: import("./cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): import("./mobx").MobxResponse<import("./cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                    };
                };
                QueryBech32PrefixStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/auth/v1beta1/query").Bech32PrefixRequest, import("./cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        bech32Prefix(request: import("./cosmos/auth/v1beta1/query").Bech32PrefixRequest): import("./mobx").MobxResponse<import("./cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                    };
                };
                QueryAddressBytesToStringStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/auth/v1beta1/query").AddressBytesToStringRequest, import("./cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressBytesToString(request: import("./cosmos/auth/v1beta1/query").AddressBytesToStringRequest): import("./mobx").MobxResponse<import("./cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                    };
                };
                QueryAddressStringToBytesStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/auth/v1beta1/query").AddressStringToBytesRequest, import("./cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                        addressStringToBytes(request: import("./cosmos/auth/v1beta1/query").AddressStringToBytesRequest): import("./mobx").MobxResponse<import("./cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
            };
        };
        authz: {
            v1beta1: {
                QueryGrantsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/authz/v1beta1/query").QueryGrantsRequest, import("./cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        grants(request: import("./cosmos/authz/v1beta1/query").QueryGrantsRequest): import("./mobx").MobxResponse<import("./cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                    };
                };
                QueryGranterGrantsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/authz/v1beta1/query").QueryGranterGrantsRequest, import("./cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granterGrants(request: import("./cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): import("./mobx").MobxResponse<import("./cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                    };
                };
                QueryGranteeGrantsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest, import("./cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                        granteeGrants(request: import("./cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): import("./mobx").MobxResponse<import("./cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
            };
        };
        bank: {
            v1beta1: {
                QueryBalanceStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/bank/v1beta1/query").QueryBalanceRequest, import("./cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        balance(request: import("./cosmos/bank/v1beta1/query").QueryBalanceRequest): import("./mobx").MobxResponse<import("./cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                    };
                };
                QueryAllBalancesStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/bank/v1beta1/query").QueryAllBalancesRequest, import("./cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        allBalances(request: import("./cosmos/bank/v1beta1/query").QueryAllBalancesRequest): import("./mobx").MobxResponse<import("./cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                    };
                };
                QuerySpendableBalancesStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest, import("./cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        spendableBalances(request: import("./cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): import("./mobx").MobxResponse<import("./cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                    };
                };
                QueryTotalSupplyStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/bank/v1beta1/query").QueryTotalSupplyRequest, import("./cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        totalSupply(request: import("./cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): import("./mobx").MobxResponse<import("./cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                    };
                };
                QuerySupplyOfStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/bank/v1beta1/query").QuerySupplyOfRequest, import("./cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        supplyOf(request: import("./cosmos/bank/v1beta1/query").QuerySupplyOfRequest): import("./mobx").MobxResponse<import("./cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                    };
                };
                QueryParamsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/bank/v1beta1/query").QueryParamsRequest, import("./cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        params(request: import("./cosmos/bank/v1beta1/query").QueryParamsRequest): import("./mobx").MobxResponse<import("./cosmos/bank/v1beta1/query").QueryParamsResponse>;
                    };
                };
                QueryDenomMetadataStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/bank/v1beta1/query").QueryDenomMetadataRequest, import("./cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomMetadata(request: import("./cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): import("./mobx").MobxResponse<import("./cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                    };
                };
                QueryDenomsMetadataStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest, import("./cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomsMetadata(request: import("./cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): import("./mobx").MobxResponse<import("./cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                    };
                };
                QueryDenomOwnersStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/bank/v1beta1/query").QueryDenomOwnersRequest, import("./cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                        denomOwners(request: import("./cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): import("./mobx").MobxResponse<import("./cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
            };
        };
        base: {
            tendermint: {
                v1beta1: {
                    QueryGetNodeInfoStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest, import("./cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getNodeInfo(request: import("./cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): import("./mobx").MobxResponse<import("./cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                        };
                    };
                    QueryGetSyncingStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./cosmos/base/tendermint/v1beta1/query").GetSyncingRequest, import("./cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getSyncing(request: import("./cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): import("./mobx").MobxResponse<import("./cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                        };
                    };
                    QueryGetLatestBlockStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest, import("./cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getLatestBlock(request: import("./cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): import("./mobx").MobxResponse<import("./cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                        };
                    };
                    QueryGetBlockByHeightStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest, import("./cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getBlockByHeight(request: import("./cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): import("./mobx").MobxResponse<import("./cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                        };
                    };
                    QueryGetLatestValidatorSetStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest, import("./cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getLatestValidatorSet(request: import("./cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): import("./mobx").MobxResponse<import("./cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                        };
                    };
                    QueryGetValidatorSetByHeightStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest, import("./cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                            getValidatorSetByHeight(request: import("./cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): import("./mobx").MobxResponse<import("./cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
            };
        };
        distribution: {
            v1beta1: {
                QueryParamsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/distribution/v1beta1/query").QueryParamsRequest, import("./cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        params(request: import("./cosmos/distribution/v1beta1/query").QueryParamsRequest): import("./mobx").MobxResponse<import("./cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                    };
                };
                QueryValidatorOutstandingRewardsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest, import("./cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorOutstandingRewards(request: import("./cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): import("./mobx").MobxResponse<import("./cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                    };
                };
                QueryValidatorCommissionStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest, import("./cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorCommission(request: import("./cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): import("./mobx").MobxResponse<import("./cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                    };
                };
                QueryValidatorSlashesStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest, import("./cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        validatorSlashes(request: import("./cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): import("./mobx").MobxResponse<import("./cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                    };
                };
                QueryDelegationRewardsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest, import("./cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationRewards(request: import("./cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): import("./mobx").MobxResponse<import("./cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                    };
                };
                QueryDelegationTotalRewardsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest, import("./cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegationTotalRewards(request: import("./cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): import("./mobx").MobxResponse<import("./cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                    };
                };
                QueryDelegatorValidatorsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest, import("./cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidators(request: import("./cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): import("./mobx").MobxResponse<import("./cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                    };
                };
                QueryDelegatorWithdrawAddressStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest, import("./cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        delegatorWithdrawAddress(request: import("./cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): import("./mobx").MobxResponse<import("./cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                    };
                };
                QueryCommunityPoolStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest, import("./cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                        communityPool(request: import("./cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): import("./mobx").MobxResponse<import("./cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
            };
        };
        evidence: {
            v1beta1: {
                QueryEvidenceStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/evidence/v1beta1/query").QueryEvidenceRequest, import("./cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        evidence(request: import("./cosmos/evidence/v1beta1/query").QueryEvidenceRequest): import("./mobx").MobxResponse<import("./cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                    };
                };
                QueryAllEvidenceStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest, import("./cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                        allEvidence(request: import("./cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): import("./mobx").MobxResponse<import("./cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
            };
        };
        feegrant: {
            v1beta1: {
                QueryAllowanceStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/feegrant/v1beta1/query").QueryAllowanceRequest, import("./cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowance(request: import("./cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): import("./mobx").MobxResponse<import("./cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                    };
                };
                QueryAllowancesStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/feegrant/v1beta1/query").QueryAllowancesRequest, import("./cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowances(request: import("./cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): import("./mobx").MobxResponse<import("./cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                    };
                };
                QueryAllowancesByGranterStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest, import("./cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                        allowancesByGranter(request: import("./cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): import("./mobx").MobxResponse<import("./cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
            };
        };
        gov: {
            v1: {
                QueryProposalStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/gov/v1/query").QueryProposalRequest, import("./cosmos/gov/v1/query").QueryProposalResponse>;
                        proposal(request: import("./cosmos/gov/v1/query").QueryProposalRequest): import("./mobx").MobxResponse<import("./cosmos/gov/v1/query").QueryProposalResponse>;
                    };
                };
                QueryProposalsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/gov/v1/query").QueryProposalsRequest, import("./cosmos/gov/v1/query").QueryProposalsResponse>;
                        proposals(request: import("./cosmos/gov/v1/query").QueryProposalsRequest): import("./mobx").MobxResponse<import("./cosmos/gov/v1/query").QueryProposalsResponse>;
                    };
                };
                QueryVoteStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/gov/v1/query").QueryVoteRequest, import("./cosmos/gov/v1/query").QueryVoteResponse>;
                        vote(request: import("./cosmos/gov/v1/query").QueryVoteRequest): import("./mobx").MobxResponse<import("./cosmos/gov/v1/query").QueryVoteResponse>;
                    };
                };
                QueryVotesStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/gov/v1/query").QueryVotesRequest, import("./cosmos/gov/v1/query").QueryVotesResponse>;
                        votes(request: import("./cosmos/gov/v1/query").QueryVotesRequest): import("./mobx").MobxResponse<import("./cosmos/gov/v1/query").QueryVotesResponse>;
                    };
                };
                QueryParamsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/gov/v1/query").QueryParamsRequest, import("./cosmos/gov/v1/query").QueryParamsResponse>;
                        params(request: import("./cosmos/gov/v1/query").QueryParamsRequest): import("./mobx").MobxResponse<import("./cosmos/gov/v1/query").QueryParamsResponse>;
                    };
                };
                QueryDepositStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/gov/v1/query").QueryDepositRequest, import("./cosmos/gov/v1/query").QueryDepositResponse>;
                        deposit(request: import("./cosmos/gov/v1/query").QueryDepositRequest): import("./mobx").MobxResponse<import("./cosmos/gov/v1/query").QueryDepositResponse>;
                    };
                };
                QueryDepositsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/gov/v1/query").QueryDepositsRequest, import("./cosmos/gov/v1/query").QueryDepositsResponse>;
                        deposits(request: import("./cosmos/gov/v1/query").QueryDepositsRequest): import("./mobx").MobxResponse<import("./cosmos/gov/v1/query").QueryDepositsResponse>;
                    };
                };
                QueryTallyResultStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/gov/v1/query").QueryTallyResultRequest, import("./cosmos/gov/v1/query").QueryTallyResultResponse>;
                        tallyResult(request: import("./cosmos/gov/v1/query").QueryTallyResultRequest): import("./mobx").MobxResponse<import("./cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                };
            };
            v1beta1: {
                QueryProposalStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/gov/v1beta1/query").QueryProposalRequest, import("./cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposal(request: import("./cosmos/gov/v1beta1/query").QueryProposalRequest): import("./mobx").MobxResponse<import("./cosmos/gov/v1beta1/query").QueryProposalResponse>;
                    };
                };
                QueryProposalsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/gov/v1beta1/query").QueryProposalsRequest, import("./cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        proposals(request: import("./cosmos/gov/v1beta1/query").QueryProposalsRequest): import("./mobx").MobxResponse<import("./cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                    };
                };
                QueryVoteStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/gov/v1beta1/query").QueryVoteRequest, import("./cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        vote(request: import("./cosmos/gov/v1beta1/query").QueryVoteRequest): import("./mobx").MobxResponse<import("./cosmos/gov/v1beta1/query").QueryVoteResponse>;
                    };
                };
                QueryVotesStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/gov/v1beta1/query").QueryVotesRequest, import("./cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        votes(request: import("./cosmos/gov/v1beta1/query").QueryVotesRequest): import("./mobx").MobxResponse<import("./cosmos/gov/v1beta1/query").QueryVotesResponse>;
                    };
                };
                QueryParamsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/gov/v1beta1/query").QueryParamsRequest, import("./cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        params(request: import("./cosmos/gov/v1beta1/query").QueryParamsRequest): import("./mobx").MobxResponse<import("./cosmos/gov/v1beta1/query").QueryParamsResponse>;
                    };
                };
                QueryDepositStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/gov/v1beta1/query").QueryDepositRequest, import("./cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposit(request: import("./cosmos/gov/v1beta1/query").QueryDepositRequest): import("./mobx").MobxResponse<import("./cosmos/gov/v1beta1/query").QueryDepositResponse>;
                    };
                };
                QueryDepositsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/gov/v1beta1/query").QueryDepositsRequest, import("./cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        deposits(request: import("./cosmos/gov/v1beta1/query").QueryDepositsRequest): import("./mobx").MobxResponse<import("./cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                    };
                };
                QueryTallyResultStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/gov/v1beta1/query").QueryTallyResultRequest, import("./cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                        tallyResult(request: import("./cosmos/gov/v1beta1/query").QueryTallyResultRequest): import("./mobx").MobxResponse<import("./cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
            };
        };
        group: {
            v1: {
                QueryGroupInfoStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/group/v1/query").QueryGroupInfoRequest, import("./cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupInfo(request: import("./cosmos/group/v1/query").QueryGroupInfoRequest): import("./mobx").MobxResponse<import("./cosmos/group/v1/query").QueryGroupInfoResponse>;
                    };
                };
                QueryGroupPolicyInfoStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/group/v1/query").QueryGroupPolicyInfoRequest, import("./cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupPolicyInfo(request: import("./cosmos/group/v1/query").QueryGroupPolicyInfoRequest): import("./mobx").MobxResponse<import("./cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                    };
                };
                QueryGroupMembersStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/group/v1/query").QueryGroupMembersRequest, import("./cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupMembers(request: import("./cosmos/group/v1/query").QueryGroupMembersRequest): import("./mobx").MobxResponse<import("./cosmos/group/v1/query").QueryGroupMembersResponse>;
                    };
                };
                QueryGroupsByAdminStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/group/v1/query").QueryGroupsByAdminRequest, import("./cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupsByAdmin(request: import("./cosmos/group/v1/query").QueryGroupsByAdminRequest): import("./mobx").MobxResponse<import("./cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                    };
                };
                QueryGroupPoliciesByGroupStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest, import("./cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByGroup(request: import("./cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): import("./mobx").MobxResponse<import("./cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                    };
                };
                QueryGroupPoliciesByAdminStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest, import("./cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        groupPoliciesByAdmin(request: import("./cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): import("./mobx").MobxResponse<import("./cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                    };
                };
                QueryProposalStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/group/v1/query").QueryProposalRequest, import("./cosmos/group/v1/query").QueryProposalResponse>;
                        proposal(request: import("./cosmos/group/v1/query").QueryProposalRequest): import("./mobx").MobxResponse<import("./cosmos/group/v1/query").QueryProposalResponse>;
                    };
                };
                QueryProposalsByGroupPolicyStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest, import("./cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        proposalsByGroupPolicy(request: import("./cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): import("./mobx").MobxResponse<import("./cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                    };
                };
                QueryVoteByProposalVoterStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/group/v1/query").QueryVoteByProposalVoterRequest, import("./cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        voteByProposalVoter(request: import("./cosmos/group/v1/query").QueryVoteByProposalVoterRequest): import("./mobx").MobxResponse<import("./cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                    };
                };
                QueryVotesByProposalStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/group/v1/query").QueryVotesByProposalRequest, import("./cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByProposal(request: import("./cosmos/group/v1/query").QueryVotesByProposalRequest): import("./mobx").MobxResponse<import("./cosmos/group/v1/query").QueryVotesByProposalResponse>;
                    };
                };
                QueryVotesByVoterStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/group/v1/query").QueryVotesByVoterRequest, import("./cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        votesByVoter(request: import("./cosmos/group/v1/query").QueryVotesByVoterRequest): import("./mobx").MobxResponse<import("./cosmos/group/v1/query").QueryVotesByVoterResponse>;
                    };
                };
                QueryGroupsByMemberStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/group/v1/query").QueryGroupsByMemberRequest, import("./cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        groupsByMember(request: import("./cosmos/group/v1/query").QueryGroupsByMemberRequest): import("./mobx").MobxResponse<import("./cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                    };
                };
                QueryTallyResultStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/group/v1/query").QueryTallyResultRequest, import("./cosmos/group/v1/query").QueryTallyResultResponse>;
                        tallyResult(request: import("./cosmos/group/v1/query").QueryTallyResultRequest): import("./mobx").MobxResponse<import("./cosmos/group/v1/query").QueryTallyResultResponse>;
                    };
                };
            };
        };
        mint: {
            v1beta1: {
                QueryParamsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/mint/v1beta1/query").QueryParamsRequest, import("./cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        params(request: import("./cosmos/mint/v1beta1/query").QueryParamsRequest): import("./mobx").MobxResponse<import("./cosmos/mint/v1beta1/query").QueryParamsResponse>;
                    };
                };
                QueryInflationStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/mint/v1beta1/query").QueryInflationRequest, import("./cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        inflation(request: import("./cosmos/mint/v1beta1/query").QueryInflationRequest): import("./mobx").MobxResponse<import("./cosmos/mint/v1beta1/query").QueryInflationResponse>;
                    };
                };
                QueryAnnualProvisionsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest, import("./cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                        annualProvisions(request: import("./cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): import("./mobx").MobxResponse<import("./cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
            };
        };
        nft: {
            v1beta1: {
                QueryBalanceStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/nft/v1beta1/query").QueryBalanceRequest, import("./cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        balance(request: import("./cosmos/nft/v1beta1/query").QueryBalanceRequest): import("./mobx").MobxResponse<import("./cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                    };
                };
                QueryOwnerStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/nft/v1beta1/query").QueryOwnerRequest, import("./cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        owner(request: import("./cosmos/nft/v1beta1/query").QueryOwnerRequest): import("./mobx").MobxResponse<import("./cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                    };
                };
                QuerySupplyStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/nft/v1beta1/query").QuerySupplyRequest, import("./cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        supply(request: import("./cosmos/nft/v1beta1/query").QuerySupplyRequest): import("./mobx").MobxResponse<import("./cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                    };
                };
                QueryNFTsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/nft/v1beta1/query").QueryNFTsRequest, import("./cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFTs(request: import("./cosmos/nft/v1beta1/query").QueryNFTsRequest): import("./mobx").MobxResponse<import("./cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                    };
                };
                QueryNFTStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/nft/v1beta1/query").QueryNFTRequest, import("./cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        nFT(request: import("./cosmos/nft/v1beta1/query").QueryNFTRequest): import("./mobx").MobxResponse<import("./cosmos/nft/v1beta1/query").QueryNFTResponse>;
                    };
                };
                QueryClassStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/nft/v1beta1/query").QueryClassRequest, import("./cosmos/nft/v1beta1/query").QueryClassResponse>;
                        class(request: import("./cosmos/nft/v1beta1/query").QueryClassRequest): import("./mobx").MobxResponse<import("./cosmos/nft/v1beta1/query").QueryClassResponse>;
                    };
                };
                QueryClassesStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/nft/v1beta1/query").QueryClassesRequest, import("./cosmos/nft/v1beta1/query").QueryClassesResponse>;
                        classes(request: import("./cosmos/nft/v1beta1/query").QueryClassesRequest): import("./mobx").MobxResponse<import("./cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
            };
        };
        params: {
            v1beta1: {
                QueryParamsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/params/v1beta1/query").QueryParamsRequest, import("./cosmos/params/v1beta1/query").QueryParamsResponse>;
                        params(request: import("./cosmos/params/v1beta1/query").QueryParamsRequest): import("./mobx").MobxResponse<import("./cosmos/params/v1beta1/query").QueryParamsResponse>;
                    };
                };
                QuerySubspacesStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/params/v1beta1/query").QuerySubspacesRequest, import("./cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                        subspaces(request: import("./cosmos/params/v1beta1/query").QuerySubspacesRequest): import("./mobx").MobxResponse<import("./cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
            };
        };
        slashing: {
            v1beta1: {
                QueryParamsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/slashing/v1beta1/query").QueryParamsRequest, import("./cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        params(request: import("./cosmos/slashing/v1beta1/query").QueryParamsRequest): import("./mobx").MobxResponse<import("./cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                    };
                };
                QuerySigningInfoStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/slashing/v1beta1/query").QuerySigningInfoRequest, import("./cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfo(request: import("./cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): import("./mobx").MobxResponse<import("./cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                    };
                };
                QuerySigningInfosStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/slashing/v1beta1/query").QuerySigningInfosRequest, import("./cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                        signingInfos(request: import("./cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): import("./mobx").MobxResponse<import("./cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
            };
        };
        staking: {
            v1beta1: {
                QueryValidatorsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/staking/v1beta1/query").QueryValidatorsRequest, import("./cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validators(request: import("./cosmos/staking/v1beta1/query").QueryValidatorsRequest): import("./mobx").MobxResponse<import("./cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                    };
                };
                QueryValidatorStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/staking/v1beta1/query").QueryValidatorRequest, import("./cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validator(request: import("./cosmos/staking/v1beta1/query").QueryValidatorRequest): import("./mobx").MobxResponse<import("./cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                    };
                };
                QueryValidatorDelegationsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest, import("./cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorDelegations(request: import("./cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): import("./mobx").MobxResponse<import("./cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                    };
                };
                QueryValidatorUnbondingDelegationsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest, import("./cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("./cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): import("./mobx").MobxResponse<import("./cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                    };
                };
                QueryDelegationStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/staking/v1beta1/query").QueryDelegationRequest, import("./cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        delegation(request: import("./cosmos/staking/v1beta1/query").QueryDelegationRequest): import("./mobx").MobxResponse<import("./cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                    };
                };
                QueryUnbondingDelegationStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest, import("./cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        unbondingDelegation(request: import("./cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): import("./mobx").MobxResponse<import("./cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                    };
                };
                QueryDelegatorDelegationsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest, import("./cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorDelegations(request: import("./cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): import("./mobx").MobxResponse<import("./cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                    };
                };
                QueryDelegatorUnbondingDelegationsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest, import("./cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("./cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): import("./mobx").MobxResponse<import("./cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                    };
                };
                QueryRedelegationsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/staking/v1beta1/query").QueryRedelegationsRequest, import("./cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        redelegations(request: import("./cosmos/staking/v1beta1/query").QueryRedelegationsRequest): import("./mobx").MobxResponse<import("./cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                    };
                };
                QueryDelegatorValidatorsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest, import("./cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidators(request: import("./cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): import("./mobx").MobxResponse<import("./cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                    };
                };
                QueryDelegatorValidatorStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest, import("./cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        delegatorValidator(request: import("./cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): import("./mobx").MobxResponse<import("./cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                    };
                };
                QueryHistoricalInfoStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest, import("./cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        historicalInfo(request: import("./cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): import("./mobx").MobxResponse<import("./cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                    };
                };
                QueryPoolStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/staking/v1beta1/query").QueryPoolRequest, import("./cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        pool(request: import("./cosmos/staking/v1beta1/query").QueryPoolRequest): import("./mobx").MobxResponse<import("./cosmos/staking/v1beta1/query").QueryPoolResponse>;
                    };
                };
                QueryParamsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/staking/v1beta1/query").QueryParamsRequest, import("./cosmos/staking/v1beta1/query").QueryParamsResponse>;
                        params(request: import("./cosmos/staking/v1beta1/query").QueryParamsRequest): import("./mobx").MobxResponse<import("./cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
            };
        };
        tx: {
            v1beta1: {
                QuerySimulateStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/tx/v1beta1/service").SimulateRequest, import("./cosmos/tx/v1beta1/service").SimulateResponse>;
                        simulate(request: import("./cosmos/tx/v1beta1/service").SimulateRequest): import("./mobx").MobxResponse<import("./cosmos/tx/v1beta1/service").SimulateResponse>;
                    };
                };
                QueryGetTxStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/tx/v1beta1/service").GetTxRequest, import("./cosmos/tx/v1beta1/service").GetTxResponse>;
                        getTx(request: import("./cosmos/tx/v1beta1/service").GetTxRequest): import("./mobx").MobxResponse<import("./cosmos/tx/v1beta1/service").GetTxResponse>;
                    };
                };
                QueryBroadcastTxStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/tx/v1beta1/service").BroadcastTxRequest, import("./cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        broadcastTx(request: import("./cosmos/tx/v1beta1/service").BroadcastTxRequest): import("./mobx").MobxResponse<import("./cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                    };
                };
                QueryGetTxsEventStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/tx/v1beta1/service").GetTxsEventRequest, import("./cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getTxsEvent(request: import("./cosmos/tx/v1beta1/service").GetTxsEventRequest): import("./mobx").MobxResponse<import("./cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                    };
                };
                QueryGetBlockWithTxsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/tx/v1beta1/service").GetBlockWithTxsRequest, import("./cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                        getBlockWithTxs(request: import("./cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): import("./mobx").MobxResponse<import("./cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
            };
        };
        upgrade: {
            v1beta1: {
                QueryCurrentPlanStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest, import("./cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        currentPlan(request: import("./cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): import("./mobx").MobxResponse<import("./cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                    };
                };
                QueryAppliedPlanStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest, import("./cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        appliedPlan(request: import("./cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): import("./mobx").MobxResponse<import("./cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                    };
                };
                QueryUpgradedConsensusStateStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest, import("./cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        upgradedConsensusState(request: import("./cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): import("./mobx").MobxResponse<import("./cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                    };
                };
                QueryModuleVersionsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest, import("./cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        moduleVersions(request: import("./cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): import("./mobx").MobxResponse<import("./cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                    };
                };
                QueryAuthorityStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmos/upgrade/v1beta1/query").QueryAuthorityRequest, import("./cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                        authority(request: import("./cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): import("./mobx").MobxResponse<import("./cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
        };
    };
    cosmwasm: {
        wasm: {
            v1: {
                QueryContractInfoStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmwasm/wasm/v1/query").QueryContractInfoRequest, import("./cosmwasm/wasm/v1/query").QueryContractInfoResponse>;
                        contractInfo(request: import("./cosmwasm/wasm/v1/query").QueryContractInfoRequest): import("./mobx").MobxResponse<import("./cosmwasm/wasm/v1/query").QueryContractInfoResponse>;
                    };
                };
                QueryContractHistoryStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmwasm/wasm/v1/query").QueryContractHistoryRequest, import("./cosmwasm/wasm/v1/query").QueryContractHistoryResponse>;
                        contractHistory(request: import("./cosmwasm/wasm/v1/query").QueryContractHistoryRequest): import("./mobx").MobxResponse<import("./cosmwasm/wasm/v1/query").QueryContractHistoryResponse>;
                    };
                };
                QueryContractsByCodeStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmwasm/wasm/v1/query").QueryContractsByCodeRequest, import("./cosmwasm/wasm/v1/query").QueryContractsByCodeResponse>;
                        contractsByCode(request: import("./cosmwasm/wasm/v1/query").QueryContractsByCodeRequest): import("./mobx").MobxResponse<import("./cosmwasm/wasm/v1/query").QueryContractsByCodeResponse>;
                    };
                };
                QueryAllContractStateStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmwasm/wasm/v1/query").QueryAllContractStateRequest, import("./cosmwasm/wasm/v1/query").QueryAllContractStateResponse>;
                        allContractState(request: import("./cosmwasm/wasm/v1/query").QueryAllContractStateRequest): import("./mobx").MobxResponse<import("./cosmwasm/wasm/v1/query").QueryAllContractStateResponse>;
                    };
                };
                QueryRawContractStateStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmwasm/wasm/v1/query").QueryRawContractStateRequest, import("./cosmwasm/wasm/v1/query").QueryRawContractStateResponse>;
                        rawContractState(request: import("./cosmwasm/wasm/v1/query").QueryRawContractStateRequest): import("./mobx").MobxResponse<import("./cosmwasm/wasm/v1/query").QueryRawContractStateResponse>;
                    };
                };
                QuerySmartContractStateStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmwasm/wasm/v1/query").QuerySmartContractStateRequest, import("./cosmwasm/wasm/v1/query").QuerySmartContractStateResponse>;
                        smartContractState(request: import("./cosmwasm/wasm/v1/query").QuerySmartContractStateRequest): import("./mobx").MobxResponse<import("./cosmwasm/wasm/v1/query").QuerySmartContractStateResponse>;
                    };
                };
                QueryCodeStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmwasm/wasm/v1/query").QueryCodeRequest, import("./cosmwasm/wasm/v1/query").QueryCodeResponse>;
                        code(request: import("./cosmwasm/wasm/v1/query").QueryCodeRequest): import("./mobx").MobxResponse<import("./cosmwasm/wasm/v1/query").QueryCodeResponse>;
                    };
                };
                QueryCodesStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmwasm/wasm/v1/query").QueryCodesRequest, import("./cosmwasm/wasm/v1/query").QueryCodesResponse>;
                        codes(request: import("./cosmwasm/wasm/v1/query").QueryCodesRequest): import("./mobx").MobxResponse<import("./cosmwasm/wasm/v1/query").QueryCodesResponse>;
                    };
                };
                QueryPinnedCodesStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./cosmwasm/wasm/v1/query").QueryPinnedCodesRequest, import("./cosmwasm/wasm/v1/query").QueryPinnedCodesResponse>;
                        pinnedCodes(request: import("./cosmwasm/wasm/v1/query").QueryPinnedCodesRequest): import("./mobx").MobxResponse<import("./cosmwasm/wasm/v1/query").QueryPinnedCodesResponse>;
                    };
                };
            };
        };
    };
    ibc: {
        applications: {
            transfer: {
                v1: {
                    QueryDenomTraceStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/applications/transfer/v1/query").QueryDenomTraceRequest, import("./ibc/applications/transfer/v1/query").QueryDenomTraceResponse>;
                            denomTrace(request: import("./ibc/applications/transfer/v1/query").QueryDenomTraceRequest): import("./mobx").MobxResponse<import("./ibc/applications/transfer/v1/query").QueryDenomTraceResponse>;
                        };
                    };
                    QueryDenomTracesStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/applications/transfer/v1/query").QueryDenomTracesRequest, import("./ibc/applications/transfer/v1/query").QueryDenomTracesResponse>;
                            denomTraces(request: import("./ibc/applications/transfer/v1/query").QueryDenomTracesRequest): import("./mobx").MobxResponse<import("./ibc/applications/transfer/v1/query").QueryDenomTracesResponse>;
                        };
                    };
                    QueryParamsStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/applications/transfer/v1/query").QueryParamsRequest, import("./ibc/applications/transfer/v1/query").QueryParamsResponse>;
                            params(request: import("./ibc/applications/transfer/v1/query").QueryParamsRequest): import("./mobx").MobxResponse<import("./ibc/applications/transfer/v1/query").QueryParamsResponse>;
                        };
                    };
                };
            };
        };
        core: {
            channel: {
                v1: {
                    QueryChannelStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/core/channel/v1/query").QueryChannelRequest, import("./ibc/core/channel/v1/query").QueryChannelResponse>;
                            channel(request: import("./ibc/core/channel/v1/query").QueryChannelRequest): import("./mobx").MobxResponse<import("./ibc/core/channel/v1/query").QueryChannelResponse>;
                        };
                    };
                    QueryChannelsStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/core/channel/v1/query").QueryChannelsRequest, import("./ibc/core/channel/v1/query").QueryChannelsResponse>;
                            channels(request: import("./ibc/core/channel/v1/query").QueryChannelsRequest): import("./mobx").MobxResponse<import("./ibc/core/channel/v1/query").QueryChannelsResponse>;
                        };
                    };
                    QueryConnectionChannelsStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/core/channel/v1/query").QueryConnectionChannelsRequest, import("./ibc/core/channel/v1/query").QueryConnectionChannelsResponse>;
                            connectionChannels(request: import("./ibc/core/channel/v1/query").QueryConnectionChannelsRequest): import("./mobx").MobxResponse<import("./ibc/core/channel/v1/query").QueryConnectionChannelsResponse>;
                        };
                    };
                    QueryChannelClientStateStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/core/channel/v1/query").QueryChannelClientStateRequest, import("./ibc/core/channel/v1/query").QueryChannelClientStateResponse>;
                            channelClientState(request: import("./ibc/core/channel/v1/query").QueryChannelClientStateRequest): import("./mobx").MobxResponse<import("./ibc/core/channel/v1/query").QueryChannelClientStateResponse>;
                        };
                    };
                    QueryChannelConsensusStateStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/core/channel/v1/query").QueryChannelConsensusStateRequest, import("./ibc/core/channel/v1/query").QueryChannelConsensusStateResponse>;
                            channelConsensusState(request: import("./ibc/core/channel/v1/query").QueryChannelConsensusStateRequest): import("./mobx").MobxResponse<import("./ibc/core/channel/v1/query").QueryChannelConsensusStateResponse>;
                        };
                    };
                    QueryPacketCommitmentStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/core/channel/v1/query").QueryPacketCommitmentRequest, import("./ibc/core/channel/v1/query").QueryPacketCommitmentResponse>;
                            packetCommitment(request: import("./ibc/core/channel/v1/query").QueryPacketCommitmentRequest): import("./mobx").MobxResponse<import("./ibc/core/channel/v1/query").QueryPacketCommitmentResponse>;
                        };
                    };
                    QueryPacketCommitmentsStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/core/channel/v1/query").QueryPacketCommitmentsRequest, import("./ibc/core/channel/v1/query").QueryPacketCommitmentsResponse>;
                            packetCommitments(request: import("./ibc/core/channel/v1/query").QueryPacketCommitmentsRequest): import("./mobx").MobxResponse<import("./ibc/core/channel/v1/query").QueryPacketCommitmentsResponse>;
                        };
                    };
                    QueryPacketReceiptStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/core/channel/v1/query").QueryPacketReceiptRequest, import("./ibc/core/channel/v1/query").QueryPacketReceiptResponse>;
                            packetReceipt(request: import("./ibc/core/channel/v1/query").QueryPacketReceiptRequest): import("./mobx").MobxResponse<import("./ibc/core/channel/v1/query").QueryPacketReceiptResponse>;
                        };
                    };
                    QueryPacketAcknowledgementStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/core/channel/v1/query").QueryPacketAcknowledgementRequest, import("./ibc/core/channel/v1/query").QueryPacketAcknowledgementResponse>;
                            packetAcknowledgement(request: import("./ibc/core/channel/v1/query").QueryPacketAcknowledgementRequest): import("./mobx").MobxResponse<import("./ibc/core/channel/v1/query").QueryPacketAcknowledgementResponse>;
                        };
                    };
                    QueryPacketAcknowledgementsStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/core/channel/v1/query").QueryPacketAcknowledgementsRequest, import("./ibc/core/channel/v1/query").QueryPacketAcknowledgementsResponse>;
                            packetAcknowledgements(request: import("./ibc/core/channel/v1/query").QueryPacketAcknowledgementsRequest): import("./mobx").MobxResponse<import("./ibc/core/channel/v1/query").QueryPacketAcknowledgementsResponse>;
                        };
                    };
                    QueryUnreceivedPacketsStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/core/channel/v1/query").QueryUnreceivedPacketsRequest, import("./ibc/core/channel/v1/query").QueryUnreceivedPacketsResponse>;
                            unreceivedPackets(request: import("./ibc/core/channel/v1/query").QueryUnreceivedPacketsRequest): import("./mobx").MobxResponse<import("./ibc/core/channel/v1/query").QueryUnreceivedPacketsResponse>;
                        };
                    };
                    QueryUnreceivedAcksStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/core/channel/v1/query").QueryUnreceivedAcksRequest, import("./ibc/core/channel/v1/query").QueryUnreceivedAcksResponse>;
                            unreceivedAcks(request: import("./ibc/core/channel/v1/query").QueryUnreceivedAcksRequest): import("./mobx").MobxResponse<import("./ibc/core/channel/v1/query").QueryUnreceivedAcksResponse>;
                        };
                    };
                    QueryNextSequenceReceiveStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/core/channel/v1/query").QueryNextSequenceReceiveRequest, import("./ibc/core/channel/v1/query").QueryNextSequenceReceiveResponse>;
                            nextSequenceReceive(request: import("./ibc/core/channel/v1/query").QueryNextSequenceReceiveRequest): import("./mobx").MobxResponse<import("./ibc/core/channel/v1/query").QueryNextSequenceReceiveResponse>;
                        };
                    };
                };
            };
            client: {
                v1: {
                    QueryClientStateStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/core/client/v1/query").QueryClientStateRequest, import("./ibc/core/client/v1/query").QueryClientStateResponse>;
                            clientState(request: import("./ibc/core/client/v1/query").QueryClientStateRequest): import("./mobx").MobxResponse<import("./ibc/core/client/v1/query").QueryClientStateResponse>;
                        };
                    };
                    QueryClientStatesStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/core/client/v1/query").QueryClientStatesRequest, import("./ibc/core/client/v1/query").QueryClientStatesResponse>;
                            clientStates(request: import("./ibc/core/client/v1/query").QueryClientStatesRequest): import("./mobx").MobxResponse<import("./ibc/core/client/v1/query").QueryClientStatesResponse>;
                        };
                    };
                    QueryConsensusStateStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/core/client/v1/query").QueryConsensusStateRequest, import("./ibc/core/client/v1/query").QueryConsensusStateResponse>;
                            consensusState(request: import("./ibc/core/client/v1/query").QueryConsensusStateRequest): import("./mobx").MobxResponse<import("./ibc/core/client/v1/query").QueryConsensusStateResponse>;
                        };
                    };
                    QueryConsensusStatesStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/core/client/v1/query").QueryConsensusStatesRequest, import("./ibc/core/client/v1/query").QueryConsensusStatesResponse>;
                            consensusStates(request: import("./ibc/core/client/v1/query").QueryConsensusStatesRequest): import("./mobx").MobxResponse<import("./ibc/core/client/v1/query").QueryConsensusStatesResponse>;
                        };
                    };
                    QueryClientStatusStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/core/client/v1/query").QueryClientStatusRequest, import("./ibc/core/client/v1/query").QueryClientStatusResponse>;
                            clientStatus(request: import("./ibc/core/client/v1/query").QueryClientStatusRequest): import("./mobx").MobxResponse<import("./ibc/core/client/v1/query").QueryClientStatusResponse>;
                        };
                    };
                    QueryClientParamsStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/core/client/v1/query").QueryClientParamsRequest, import("./ibc/core/client/v1/query").QueryClientParamsResponse>;
                            clientParams(request: import("./ibc/core/client/v1/query").QueryClientParamsRequest): import("./mobx").MobxResponse<import("./ibc/core/client/v1/query").QueryClientParamsResponse>;
                        };
                    };
                    QueryUpgradedClientStateStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/core/client/v1/query").QueryUpgradedClientStateRequest, import("./ibc/core/client/v1/query").QueryUpgradedClientStateResponse>;
                            upgradedClientState(request: import("./ibc/core/client/v1/query").QueryUpgradedClientStateRequest): import("./mobx").MobxResponse<import("./ibc/core/client/v1/query").QueryUpgradedClientStateResponse>;
                        };
                    };
                    QueryUpgradedConsensusStateStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/core/client/v1/query").QueryUpgradedConsensusStateRequest, import("./ibc/core/client/v1/query").QueryUpgradedConsensusStateResponse>;
                            upgradedConsensusState(request: import("./ibc/core/client/v1/query").QueryUpgradedConsensusStateRequest): import("./mobx").MobxResponse<import("./ibc/core/client/v1/query").QueryUpgradedConsensusStateResponse>;
                        };
                    };
                };
            };
            connection: {
                v1: {
                    QueryConnectionStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/core/connection/v1/query").QueryConnectionRequest, import("./ibc/core/connection/v1/query").QueryConnectionResponse>;
                            connection(request: import("./ibc/core/connection/v1/query").QueryConnectionRequest): import("./mobx").MobxResponse<import("./ibc/core/connection/v1/query").QueryConnectionResponse>;
                        };
                    };
                    QueryConnectionsStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/core/connection/v1/query").QueryConnectionsRequest, import("./ibc/core/connection/v1/query").QueryConnectionsResponse>;
                            connections(request: import("./ibc/core/connection/v1/query").QueryConnectionsRequest): import("./mobx").MobxResponse<import("./ibc/core/connection/v1/query").QueryConnectionsResponse>;
                        };
                    };
                    QueryClientConnectionsStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/core/connection/v1/query").QueryClientConnectionsRequest, import("./ibc/core/connection/v1/query").QueryClientConnectionsResponse>;
                            clientConnections(request: import("./ibc/core/connection/v1/query").QueryClientConnectionsRequest): import("./mobx").MobxResponse<import("./ibc/core/connection/v1/query").QueryClientConnectionsResponse>;
                        };
                    };
                    QueryConnectionClientStateStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/core/connection/v1/query").QueryConnectionClientStateRequest, import("./ibc/core/connection/v1/query").QueryConnectionClientStateResponse>;
                            connectionClientState(request: import("./ibc/core/connection/v1/query").QueryConnectionClientStateRequest): import("./mobx").MobxResponse<import("./ibc/core/connection/v1/query").QueryConnectionClientStateResponse>;
                        };
                    };
                    QueryConnectionConsensusStateStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/core/connection/v1/query").QueryConnectionConsensusStateRequest, import("./ibc/core/connection/v1/query").QueryConnectionConsensusStateResponse>;
                            connectionConsensusState(request: import("./ibc/core/connection/v1/query").QueryConnectionConsensusStateRequest): import("./mobx").MobxResponse<import("./ibc/core/connection/v1/query").QueryConnectionConsensusStateResponse>;
                        };
                    };
                };
            };
            port: {
                v1: {
                    QueryAppVersionStore: {
                        new (): {
                            store: import("./mobx").QueryStore<import("./ibc/core/port/v1/query").QueryAppVersionRequest, import("./ibc/core/port/v1/query").QueryAppVersionResponse>;
                            appVersion(request: import("./ibc/core/port/v1/query").QueryAppVersionRequest): import("./mobx").MobxResponse<import("./ibc/core/port/v1/query").QueryAppVersionResponse>;
                        };
                    };
                };
            };
        };
    };
    osmosis: {
        claim: {
            v1beta1: {
                QueryModuleAccountBalanceStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./osmosis/claim/v1beta1/query").QueryModuleAccountBalanceRequest, import("./osmosis/claim/v1beta1/query").QueryModuleAccountBalanceResponse>;
                        moduleAccountBalance(request: import("./osmosis/claim/v1beta1/query").QueryModuleAccountBalanceRequest): import("./mobx").MobxResponse<import("./osmosis/claim/v1beta1/query").QueryModuleAccountBalanceResponse>;
                    };
                };
                QueryParamsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./osmosis/claim/v1beta1/query").QueryParamsRequest, import("./osmosis/claim/v1beta1/query").QueryParamsResponse>;
                        params(request: import("./osmosis/claim/v1beta1/query").QueryParamsRequest): import("./mobx").MobxResponse<import("./osmosis/claim/v1beta1/query").QueryParamsResponse>;
                    };
                };
                QueryClaimRecordStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./osmosis/claim/v1beta1/query").QueryClaimRecordRequest, import("./osmosis/claim/v1beta1/query").QueryClaimRecordResponse>;
                        claimRecord(request: import("./osmosis/claim/v1beta1/query").QueryClaimRecordRequest): import("./mobx").MobxResponse<import("./osmosis/claim/v1beta1/query").QueryClaimRecordResponse>;
                    };
                };
                QueryClaimableForActionStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./osmosis/claim/v1beta1/query").QueryClaimableForActionRequest, import("./osmosis/claim/v1beta1/query").QueryClaimableForActionResponse>;
                        claimableForAction(request: import("./osmosis/claim/v1beta1/query").QueryClaimableForActionRequest): import("./mobx").MobxResponse<import("./osmosis/claim/v1beta1/query").QueryClaimableForActionResponse>;
                    };
                };
                QueryTotalClaimableStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./osmosis/claim/v1beta1/query").QueryTotalClaimableRequest, import("./osmosis/claim/v1beta1/query").QueryTotalClaimableResponse>;
                        totalClaimable(request: import("./osmosis/claim/v1beta1/query").QueryTotalClaimableRequest): import("./mobx").MobxResponse<import("./osmosis/claim/v1beta1/query").QueryTotalClaimableResponse>;
                    };
                };
            };
        };
        epochs: {
            v1beta1: {
                QueryEpochInfosStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./osmosis/epochs/query").QueryEpochsInfoRequest, import("./osmosis/epochs/query").QueryEpochsInfoResponse>;
                        epochInfos(request: import("./osmosis/epochs/query").QueryEpochsInfoRequest): import("./mobx").MobxResponse<import("./osmosis/epochs/query").QueryEpochsInfoResponse>;
                    };
                };
                QueryCurrentEpochStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./osmosis/epochs/query").QueryCurrentEpochRequest, import("./osmosis/epochs/query").QueryCurrentEpochResponse>;
                        currentEpoch(request: import("./osmosis/epochs/query").QueryCurrentEpochRequest): import("./mobx").MobxResponse<import("./osmosis/epochs/query").QueryCurrentEpochResponse>;
                    };
                };
            };
        };
        gamm: {
            v2: {
                QuerySpotPriceStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./osmosis/gamm/v2/query").QuerySpotPriceRequest, import("./osmosis/gamm/v2/query").QuerySpotPriceResponse>;
                        spotPrice(request: import("./osmosis/gamm/v2/query").QuerySpotPriceRequest): import("./mobx").MobxResponse<import("./osmosis/gamm/v2/query").QuerySpotPriceResponse>;
                    };
                };
            };
        };
        ibcratelimit: {
            v1beta1: {
                QueryParamsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./osmosis/ibc-rate-limit/v1beta1/query").QueryParamsRequest, import("./osmosis/ibc-rate-limit/v1beta1/query").QueryParamsResponse>;
                        params(request: import("./osmosis/ibc-rate-limit/v1beta1/query").QueryParamsRequest): import("./mobx").MobxResponse<import("./osmosis/ibc-rate-limit/v1beta1/query").QueryParamsResponse>;
                    };
                };
            };
        };
        incentives: {
            QueryModuleToDistributeCoinsStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/incentives/query").ModuleToDistributeCoinsRequest, import("./osmosis/incentives/query").ModuleToDistributeCoinsResponse>;
                    moduleToDistributeCoins(request: import("./osmosis/incentives/query").ModuleToDistributeCoinsRequest): import("./mobx").MobxResponse<import("./osmosis/incentives/query").ModuleToDistributeCoinsResponse>;
                };
            };
            QueryGaugeByIDStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/incentives/query").GaugeByIDRequest, import("./osmosis/incentives/query").GaugeByIDResponse>;
                    gaugeByID(request: import("./osmosis/incentives/query").GaugeByIDRequest): import("./mobx").MobxResponse<import("./osmosis/incentives/query").GaugeByIDResponse>;
                };
            };
            QueryGaugesStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/incentives/query").GaugesRequest, import("./osmosis/incentives/query").GaugesResponse>;
                    gauges(request: import("./osmosis/incentives/query").GaugesRequest): import("./mobx").MobxResponse<import("./osmosis/incentives/query").GaugesResponse>;
                };
            };
            QueryActiveGaugesStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/incentives/query").ActiveGaugesRequest, import("./osmosis/incentives/query").ActiveGaugesResponse>;
                    activeGauges(request: import("./osmosis/incentives/query").ActiveGaugesRequest): import("./mobx").MobxResponse<import("./osmosis/incentives/query").ActiveGaugesResponse>;
                };
            };
            QueryActiveGaugesPerDenomStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/incentives/query").ActiveGaugesPerDenomRequest, import("./osmosis/incentives/query").ActiveGaugesPerDenomResponse>;
                    activeGaugesPerDenom(request: import("./osmosis/incentives/query").ActiveGaugesPerDenomRequest): import("./mobx").MobxResponse<import("./osmosis/incentives/query").ActiveGaugesPerDenomResponse>;
                };
            };
            QueryUpcomingGaugesStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/incentives/query").UpcomingGaugesRequest, import("./osmosis/incentives/query").UpcomingGaugesResponse>;
                    upcomingGauges(request: import("./osmosis/incentives/query").UpcomingGaugesRequest): import("./mobx").MobxResponse<import("./osmosis/incentives/query").UpcomingGaugesResponse>;
                };
            };
            QueryUpcomingGaugesPerDenomStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/incentives/query").UpcomingGaugesPerDenomRequest, import("./osmosis/incentives/query").UpcomingGaugesPerDenomResponse>;
                    upcomingGaugesPerDenom(request: import("./osmosis/incentives/query").UpcomingGaugesPerDenomRequest): import("./mobx").MobxResponse<import("./osmosis/incentives/query").UpcomingGaugesPerDenomResponse>;
                };
            };
            QueryRewardsEstStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/incentives/query").RewardsEstRequest, import("./osmosis/incentives/query").RewardsEstResponse>;
                    rewardsEst(request: import("./osmosis/incentives/query").RewardsEstRequest): import("./mobx").MobxResponse<import("./osmosis/incentives/query").RewardsEstResponse>;
                };
            };
            QueryLockableDurationsStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/incentives/query").QueryLockableDurationsRequest, import("./osmosis/incentives/query").QueryLockableDurationsResponse>;
                    lockableDurations(request: import("./osmosis/incentives/query").QueryLockableDurationsRequest): import("./mobx").MobxResponse<import("./osmosis/incentives/query").QueryLockableDurationsResponse>;
                };
            };
        };
        lockup: {
            QueryModuleBalanceStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/lockup/query").ModuleBalanceRequest, import("./osmosis/lockup/query").ModuleBalanceResponse>;
                    moduleBalance(request: import("./osmosis/lockup/query").ModuleBalanceRequest): import("./mobx").MobxResponse<import("./osmosis/lockup/query").ModuleBalanceResponse>;
                };
            };
            QueryModuleLockedAmountStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/lockup/query").ModuleLockedAmountRequest, import("./osmosis/lockup/query").ModuleLockedAmountResponse>;
                    moduleLockedAmount(request: import("./osmosis/lockup/query").ModuleLockedAmountRequest): import("./mobx").MobxResponse<import("./osmosis/lockup/query").ModuleLockedAmountResponse>;
                };
            };
            QueryAccountUnlockableCoinsStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/lockup/query").AccountUnlockableCoinsRequest, import("./osmosis/lockup/query").AccountUnlockableCoinsResponse>;
                    accountUnlockableCoins(request: import("./osmosis/lockup/query").AccountUnlockableCoinsRequest): import("./mobx").MobxResponse<import("./osmosis/lockup/query").AccountUnlockableCoinsResponse>;
                };
            };
            QueryAccountUnlockingCoinsStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/lockup/query").AccountUnlockingCoinsRequest, import("./osmosis/lockup/query").AccountUnlockingCoinsResponse>;
                    accountUnlockingCoins(request: import("./osmosis/lockup/query").AccountUnlockingCoinsRequest): import("./mobx").MobxResponse<import("./osmosis/lockup/query").AccountUnlockingCoinsResponse>;
                };
            };
            QueryAccountLockedCoinsStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/lockup/query").AccountLockedCoinsRequest, import("./osmosis/lockup/query").AccountLockedCoinsResponse>;
                    accountLockedCoins(request: import("./osmosis/lockup/query").AccountLockedCoinsRequest): import("./mobx").MobxResponse<import("./osmosis/lockup/query").AccountLockedCoinsResponse>;
                };
            };
            QueryAccountLockedPastTimeStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/lockup/query").AccountLockedPastTimeRequest, import("./osmosis/lockup/query").AccountLockedPastTimeResponse>;
                    accountLockedPastTime(request: import("./osmosis/lockup/query").AccountLockedPastTimeRequest): import("./mobx").MobxResponse<import("./osmosis/lockup/query").AccountLockedPastTimeResponse>;
                };
            };
            QueryAccountLockedPastTimeNotUnlockingOnlyStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/lockup/query").AccountLockedPastTimeNotUnlockingOnlyRequest, import("./osmosis/lockup/query").AccountLockedPastTimeNotUnlockingOnlyResponse>;
                    accountLockedPastTimeNotUnlockingOnly(request: import("./osmosis/lockup/query").AccountLockedPastTimeNotUnlockingOnlyRequest): import("./mobx").MobxResponse<import("./osmosis/lockup/query").AccountLockedPastTimeNotUnlockingOnlyResponse>;
                };
            };
            QueryAccountUnlockedBeforeTimeStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/lockup/query").AccountUnlockedBeforeTimeRequest, import("./osmosis/lockup/query").AccountUnlockedBeforeTimeResponse>;
                    accountUnlockedBeforeTime(request: import("./osmosis/lockup/query").AccountUnlockedBeforeTimeRequest): import("./mobx").MobxResponse<import("./osmosis/lockup/query").AccountUnlockedBeforeTimeResponse>;
                };
            };
            QueryAccountLockedPastTimeDenomStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/lockup/query").AccountLockedPastTimeDenomRequest, import("./osmosis/lockup/query").AccountLockedPastTimeDenomResponse>;
                    accountLockedPastTimeDenom(request: import("./osmosis/lockup/query").AccountLockedPastTimeDenomRequest): import("./mobx").MobxResponse<import("./osmosis/lockup/query").AccountLockedPastTimeDenomResponse>;
                };
            };
            QueryLockedDenomStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/lockup/query").LockedDenomRequest, import("./osmosis/lockup/query").LockedDenomResponse>;
                    lockedDenom(request: import("./osmosis/lockup/query").LockedDenomRequest): import("./mobx").MobxResponse<import("./osmosis/lockup/query").LockedDenomResponse>;
                };
            };
            QueryLockedByIDStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/lockup/query").LockedRequest, import("./osmosis/lockup/query").LockedResponse>;
                    lockedByID(request: import("./osmosis/lockup/query").LockedRequest): import("./mobx").MobxResponse<import("./osmosis/lockup/query").LockedResponse>;
                };
            };
            QuerySyntheticLockupsByLockupIDStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/lockup/query").SyntheticLockupsByLockupIDRequest, import("./osmosis/lockup/query").SyntheticLockupsByLockupIDResponse>;
                    syntheticLockupsByLockupID(request: import("./osmosis/lockup/query").SyntheticLockupsByLockupIDRequest): import("./mobx").MobxResponse<import("./osmosis/lockup/query").SyntheticLockupsByLockupIDResponse>;
                };
            };
            QueryAccountLockedLongerDurationStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/lockup/query").AccountLockedLongerDurationRequest, import("./osmosis/lockup/query").AccountLockedLongerDurationResponse>;
                    accountLockedLongerDuration(request: import("./osmosis/lockup/query").AccountLockedLongerDurationRequest): import("./mobx").MobxResponse<import("./osmosis/lockup/query").AccountLockedLongerDurationResponse>;
                };
            };
            QueryAccountLockedDurationStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/lockup/query").AccountLockedDurationRequest, import("./osmosis/lockup/query").AccountLockedDurationResponse>;
                    accountLockedDuration(request: import("./osmosis/lockup/query").AccountLockedDurationRequest): import("./mobx").MobxResponse<import("./osmosis/lockup/query").AccountLockedDurationResponse>;
                };
            };
            QueryAccountLockedLongerDurationNotUnlockingOnlyStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/lockup/query").AccountLockedLongerDurationNotUnlockingOnlyRequest, import("./osmosis/lockup/query").AccountLockedLongerDurationNotUnlockingOnlyResponse>;
                    accountLockedLongerDurationNotUnlockingOnly(request: import("./osmosis/lockup/query").AccountLockedLongerDurationNotUnlockingOnlyRequest): import("./mobx").MobxResponse<import("./osmosis/lockup/query").AccountLockedLongerDurationNotUnlockingOnlyResponse>;
                };
            };
            QueryAccountLockedLongerDurationDenomStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/lockup/query").AccountLockedLongerDurationDenomRequest, import("./osmosis/lockup/query").AccountLockedLongerDurationDenomResponse>;
                    accountLockedLongerDurationDenom(request: import("./osmosis/lockup/query").AccountLockedLongerDurationDenomRequest): import("./mobx").MobxResponse<import("./osmosis/lockup/query").AccountLockedLongerDurationDenomResponse>;
                };
            };
            QueryParamsStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/lockup/query").QueryParamsRequest, import("./osmosis/lockup/query").QueryParamsResponse>;
                    params(request: import("./osmosis/lockup/query").QueryParamsRequest): import("./mobx").MobxResponse<import("./osmosis/lockup/query").QueryParamsResponse>;
                };
            };
        };
        mint: {
            v1beta1: {
                QueryParamsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./osmosis/mint/v1beta1/query").QueryParamsRequest, import("./osmosis/mint/v1beta1/query").QueryParamsResponse>;
                        params(request: import("./osmosis/mint/v1beta1/query").QueryParamsRequest): import("./mobx").MobxResponse<import("./osmosis/mint/v1beta1/query").QueryParamsResponse>;
                    };
                };
                QueryEpochProvisionsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./osmosis/mint/v1beta1/query").QueryEpochProvisionsRequest, import("./osmosis/mint/v1beta1/query").QueryEpochProvisionsResponse>;
                        epochProvisions(request: import("./osmosis/mint/v1beta1/query").QueryEpochProvisionsRequest): import("./mobx").MobxResponse<import("./osmosis/mint/v1beta1/query").QueryEpochProvisionsResponse>;
                    };
                };
            };
        };
        poolincentives: {
            v1beta1: {
                QueryGaugeIdsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./osmosis/pool-incentives/v1beta1/query").QueryGaugeIdsRequest, import("./osmosis/pool-incentives/v1beta1/query").QueryGaugeIdsResponse>;
                        gaugeIds(request: import("./osmosis/pool-incentives/v1beta1/query").QueryGaugeIdsRequest): import("./mobx").MobxResponse<import("./osmosis/pool-incentives/v1beta1/query").QueryGaugeIdsResponse>;
                    };
                };
                QueryDistrInfoStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./osmosis/pool-incentives/v1beta1/query").QueryDistrInfoRequest, import("./osmosis/pool-incentives/v1beta1/query").QueryDistrInfoResponse>;
                        distrInfo(request: import("./osmosis/pool-incentives/v1beta1/query").QueryDistrInfoRequest): import("./mobx").MobxResponse<import("./osmosis/pool-incentives/v1beta1/query").QueryDistrInfoResponse>;
                    };
                };
                QueryParamsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./osmosis/pool-incentives/v1beta1/query").QueryParamsRequest, import("./osmosis/pool-incentives/v1beta1/query").QueryParamsResponse>;
                        params(request: import("./osmosis/pool-incentives/v1beta1/query").QueryParamsRequest): import("./mobx").MobxResponse<import("./osmosis/pool-incentives/v1beta1/query").QueryParamsResponse>;
                    };
                };
                QueryLockableDurationsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./osmosis/pool-incentives/v1beta1/query").QueryLockableDurationsRequest, import("./osmosis/pool-incentives/v1beta1/query").QueryLockableDurationsResponse>;
                        lockableDurations(request: import("./osmosis/pool-incentives/v1beta1/query").QueryLockableDurationsRequest): import("./mobx").MobxResponse<import("./osmosis/pool-incentives/v1beta1/query").QueryLockableDurationsResponse>;
                    };
                };
                QueryIncentivizedPoolsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./osmosis/pool-incentives/v1beta1/query").QueryIncentivizedPoolsRequest, import("./osmosis/pool-incentives/v1beta1/query").QueryIncentivizedPoolsResponse>;
                        incentivizedPools(request: import("./osmosis/pool-incentives/v1beta1/query").QueryIncentivizedPoolsRequest): import("./mobx").MobxResponse<import("./osmosis/pool-incentives/v1beta1/query").QueryIncentivizedPoolsResponse>;
                    };
                };
                QueryExternalIncentiveGaugesStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./osmosis/pool-incentives/v1beta1/query").QueryExternalIncentiveGaugesRequest, import("./osmosis/pool-incentives/v1beta1/query").QueryExternalIncentiveGaugesResponse>;
                        externalIncentiveGauges(request: import("./osmosis/pool-incentives/v1beta1/query").QueryExternalIncentiveGaugesRequest): import("./mobx").MobxResponse<import("./osmosis/pool-incentives/v1beta1/query").QueryExternalIncentiveGaugesResponse>;
                    };
                };
            };
        };
        superfluid: {
            QueryParamsStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/superfluid/query").QueryParamsRequest, import("./osmosis/superfluid/query").QueryParamsResponse>;
                    params(request: import("./osmosis/superfluid/query").QueryParamsRequest): import("./mobx").MobxResponse<import("./osmosis/superfluid/query").QueryParamsResponse>;
                };
            };
            QueryAssetTypeStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/superfluid/query").AssetTypeRequest, import("./osmosis/superfluid/query").AssetTypeResponse>;
                    assetType(request: import("./osmosis/superfluid/query").AssetTypeRequest): import("./mobx").MobxResponse<import("./osmosis/superfluid/query").AssetTypeResponse>;
                };
            };
            QueryAllAssetsStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/superfluid/query").AllAssetsRequest, import("./osmosis/superfluid/query").AllAssetsResponse>;
                    allAssets(request: import("./osmosis/superfluid/query").AllAssetsRequest): import("./mobx").MobxResponse<import("./osmosis/superfluid/query").AllAssetsResponse>;
                };
            };
            QueryAssetMultiplierStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/superfluid/query").AssetMultiplierRequest, import("./osmosis/superfluid/query").AssetMultiplierResponse>;
                    assetMultiplier(request: import("./osmosis/superfluid/query").AssetMultiplierRequest): import("./mobx").MobxResponse<import("./osmosis/superfluid/query").AssetMultiplierResponse>;
                };
            };
            QueryAllIntermediaryAccountsStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/superfluid/query").AllIntermediaryAccountsRequest, import("./osmosis/superfluid/query").AllIntermediaryAccountsResponse>;
                    allIntermediaryAccounts(request: import("./osmosis/superfluid/query").AllIntermediaryAccountsRequest): import("./mobx").MobxResponse<import("./osmosis/superfluid/query").AllIntermediaryAccountsResponse>;
                };
            };
            QueryConnectedIntermediaryAccountStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/superfluid/query").ConnectedIntermediaryAccountRequest, import("./osmosis/superfluid/query").ConnectedIntermediaryAccountResponse>;
                    connectedIntermediaryAccount(request: import("./osmosis/superfluid/query").ConnectedIntermediaryAccountRequest): import("./mobx").MobxResponse<import("./osmosis/superfluid/query").ConnectedIntermediaryAccountResponse>;
                };
            };
            QueryTotalDelegationByValidatorForDenomStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/superfluid/query").QueryTotalDelegationByValidatorForDenomRequest, import("./osmosis/superfluid/query").QueryTotalDelegationByValidatorForDenomResponse>;
                    totalDelegationByValidatorForDenom(request: import("./osmosis/superfluid/query").QueryTotalDelegationByValidatorForDenomRequest): import("./mobx").MobxResponse<import("./osmosis/superfluid/query").QueryTotalDelegationByValidatorForDenomResponse>;
                };
            };
            QueryTotalSuperfluidDelegationsStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/superfluid/query").TotalSuperfluidDelegationsRequest, import("./osmosis/superfluid/query").TotalSuperfluidDelegationsResponse>;
                    totalSuperfluidDelegations(request: import("./osmosis/superfluid/query").TotalSuperfluidDelegationsRequest): import("./mobx").MobxResponse<import("./osmosis/superfluid/query").TotalSuperfluidDelegationsResponse>;
                };
            };
            QuerySuperfluidDelegationAmountStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/superfluid/query").SuperfluidDelegationAmountRequest, import("./osmosis/superfluid/query").SuperfluidDelegationAmountResponse>;
                    superfluidDelegationAmount(request: import("./osmosis/superfluid/query").SuperfluidDelegationAmountRequest): import("./mobx").MobxResponse<import("./osmosis/superfluid/query").SuperfluidDelegationAmountResponse>;
                };
            };
            QuerySuperfluidDelegationsByDelegatorStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/superfluid/query").SuperfluidDelegationsByDelegatorRequest, import("./osmosis/superfluid/query").SuperfluidDelegationsByDelegatorResponse>;
                    superfluidDelegationsByDelegator(request: import("./osmosis/superfluid/query").SuperfluidDelegationsByDelegatorRequest): import("./mobx").MobxResponse<import("./osmosis/superfluid/query").SuperfluidDelegationsByDelegatorResponse>;
                };
            };
            QuerySuperfluidUndelegationsByDelegatorStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/superfluid/query").SuperfluidUndelegationsByDelegatorRequest, import("./osmosis/superfluid/query").SuperfluidUndelegationsByDelegatorResponse>;
                    superfluidUndelegationsByDelegator(request: import("./osmosis/superfluid/query").SuperfluidUndelegationsByDelegatorRequest): import("./mobx").MobxResponse<import("./osmosis/superfluid/query").SuperfluidUndelegationsByDelegatorResponse>;
                };
            };
            QuerySuperfluidDelegationsByValidatorDenomStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/superfluid/query").SuperfluidDelegationsByValidatorDenomRequest, import("./osmosis/superfluid/query").SuperfluidDelegationsByValidatorDenomResponse>;
                    superfluidDelegationsByValidatorDenom(request: import("./osmosis/superfluid/query").SuperfluidDelegationsByValidatorDenomRequest): import("./mobx").MobxResponse<import("./osmosis/superfluid/query").SuperfluidDelegationsByValidatorDenomResponse>;
                };
            };
            QueryEstimateSuperfluidDelegatedAmountByValidatorDenomStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/superfluid/query").EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, import("./osmosis/superfluid/query").EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
                    estimateSuperfluidDelegatedAmountByValidatorDenom(request: import("./osmosis/superfluid/query").EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): import("./mobx").MobxResponse<import("./osmosis/superfluid/query").EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
                };
            };
            QueryTotalDelegationByDelegatorStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/superfluid/query").QueryTotalDelegationByDelegatorRequest, import("./osmosis/superfluid/query").QueryTotalDelegationByDelegatorResponse>;
                    totalDelegationByDelegator(request: import("./osmosis/superfluid/query").QueryTotalDelegationByDelegatorRequest): import("./mobx").MobxResponse<import("./osmosis/superfluid/query").QueryTotalDelegationByDelegatorResponse>;
                };
            };
            QueryUnpoolWhitelistStore: {
                new (): {
                    store: import("./mobx").QueryStore<import("./osmosis/superfluid/query").QueryUnpoolWhitelistRequest, import("./osmosis/superfluid/query").QueryUnpoolWhitelistResponse>;
                    unpoolWhitelist(request: import("./osmosis/superfluid/query").QueryUnpoolWhitelistRequest): import("./mobx").MobxResponse<import("./osmosis/superfluid/query").QueryUnpoolWhitelistResponse>;
                };
            };
        };
        tokenfactory: {
            v1beta1: {
                QueryParamsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./osmosis/tokenfactory/v1beta1/query").QueryParamsRequest, import("./osmosis/tokenfactory/v1beta1/query").QueryParamsResponse>;
                        params(request: import("./osmosis/tokenfactory/v1beta1/query").QueryParamsRequest): import("./mobx").MobxResponse<import("./osmosis/tokenfactory/v1beta1/query").QueryParamsResponse>;
                    };
                };
                QueryDenomAuthorityMetadataStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./osmosis/tokenfactory/v1beta1/query").QueryDenomAuthorityMetadataRequest, import("./osmosis/tokenfactory/v1beta1/query").QueryDenomAuthorityMetadataResponse>;
                        denomAuthorityMetadata(request: import("./osmosis/tokenfactory/v1beta1/query").QueryDenomAuthorityMetadataRequest): import("./mobx").MobxResponse<import("./osmosis/tokenfactory/v1beta1/query").QueryDenomAuthorityMetadataResponse>;
                    };
                };
                QueryDenomsFromCreatorStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./osmosis/tokenfactory/v1beta1/query").QueryDenomsFromCreatorRequest, import("./osmosis/tokenfactory/v1beta1/query").QueryDenomsFromCreatorResponse>;
                        denomsFromCreator(request: import("./osmosis/tokenfactory/v1beta1/query").QueryDenomsFromCreatorRequest): import("./mobx").MobxResponse<import("./osmosis/tokenfactory/v1beta1/query").QueryDenomsFromCreatorResponse>;
                    };
                };
            };
        };
        twap: {
            v1beta1: {
                QueryParamsStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./osmosis/twap/v1beta1/query").ParamsRequest, import("./osmosis/twap/v1beta1/query").ParamsResponse>;
                        params(request: import("./osmosis/twap/v1beta1/query").ParamsRequest): import("./mobx").MobxResponse<import("./osmosis/twap/v1beta1/query").ParamsResponse>;
                    };
                };
                QueryArithmeticTwapStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./osmosis/twap/v1beta1/query").ArithmeticTwapRequest, import("./osmosis/twap/v1beta1/query").ArithmeticTwapResponse>;
                        arithmeticTwap(request: import("./osmosis/twap/v1beta1/query").ArithmeticTwapRequest): import("./mobx").MobxResponse<import("./osmosis/twap/v1beta1/query").ArithmeticTwapResponse>;
                    };
                };
                QueryArithmeticTwapToNowStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./osmosis/twap/v1beta1/query").ArithmeticTwapToNowRequest, import("./osmosis/twap/v1beta1/query").ArithmeticTwapToNowResponse>;
                        arithmeticTwapToNow(request: import("./osmosis/twap/v1beta1/query").ArithmeticTwapToNowRequest): import("./mobx").MobxResponse<import("./osmosis/twap/v1beta1/query").ArithmeticTwapToNowResponse>;
                    };
                };
            };
        };
        txfees: {
            v1beta1: {
                QueryFeeTokensStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./osmosis/txfees/v1beta1/query").QueryFeeTokensRequest, import("./osmosis/txfees/v1beta1/query").QueryFeeTokensResponse>;
                        feeTokens(request: import("./osmosis/txfees/v1beta1/query").QueryFeeTokensRequest): import("./mobx").MobxResponse<import("./osmosis/txfees/v1beta1/query").QueryFeeTokensResponse>;
                    };
                };
                QueryDenomSpotPriceStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./osmosis/txfees/v1beta1/query").QueryDenomSpotPriceRequest, import("./osmosis/txfees/v1beta1/query").QueryDenomSpotPriceResponse>;
                        denomSpotPrice(request: import("./osmosis/txfees/v1beta1/query").QueryDenomSpotPriceRequest): import("./mobx").MobxResponse<import("./osmosis/txfees/v1beta1/query").QueryDenomSpotPriceResponse>;
                    };
                };
                QueryDenomPoolIdStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./osmosis/txfees/v1beta1/query").QueryDenomPoolIdRequest, import("./osmosis/txfees/v1beta1/query").QueryDenomPoolIdResponse>;
                        denomPoolId(request: import("./osmosis/txfees/v1beta1/query").QueryDenomPoolIdRequest): import("./mobx").MobxResponse<import("./osmosis/txfees/v1beta1/query").QueryDenomPoolIdResponse>;
                    };
                };
                QueryBaseDenomStore: {
                    new (): {
                        store: import("./mobx").QueryStore<import("./osmosis/txfees/v1beta1/query").QueryBaseDenomRequest, import("./osmosis/txfees/v1beta1/query").QueryBaseDenomResponse>;
                        baseDenom(request: import("./osmosis/txfees/v1beta1/query").QueryBaseDenomRequest): import("./mobx").MobxResponse<import("./osmosis/txfees/v1beta1/query").QueryBaseDenomResponse>;
                    };
                };
            };
        };
    };
};
