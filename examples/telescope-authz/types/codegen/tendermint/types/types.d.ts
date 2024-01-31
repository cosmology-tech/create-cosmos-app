import { Proof, ProofAmino, ProofSDKType } from "../crypto/proof";
import { Consensus, ConsensusAmino, ConsensusSDKType } from "../version/types";
import { ValidatorSet, ValidatorSetAmino, ValidatorSetSDKType } from "./validator";
import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/** BlockIdFlag indicates which BlcokID the signature is for */
export declare enum BlockIDFlag {
    BLOCK_ID_FLAG_UNKNOWN = 0,
    BLOCK_ID_FLAG_ABSENT = 1,
    BLOCK_ID_FLAG_COMMIT = 2,
    BLOCK_ID_FLAG_NIL = 3,
    UNRECOGNIZED = -1
}
export declare const BlockIDFlagSDKType: typeof BlockIDFlag;
export declare const BlockIDFlagAmino: typeof BlockIDFlag;
export declare function blockIDFlagFromJSON(object: any): BlockIDFlag;
export declare function blockIDFlagToJSON(object: BlockIDFlag): string;
/** SignedMsgType is a type of signed message in the consensus. */
export declare enum SignedMsgType {
    SIGNED_MSG_TYPE_UNKNOWN = 0,
    /** SIGNED_MSG_TYPE_PREVOTE - Votes */
    SIGNED_MSG_TYPE_PREVOTE = 1,
    SIGNED_MSG_TYPE_PRECOMMIT = 2,
    /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
    SIGNED_MSG_TYPE_PROPOSAL = 32,
    UNRECOGNIZED = -1
}
export declare const SignedMsgTypeSDKType: typeof SignedMsgType;
export declare const SignedMsgTypeAmino: typeof SignedMsgType;
export declare function signedMsgTypeFromJSON(object: any): SignedMsgType;
export declare function signedMsgTypeToJSON(object: SignedMsgType): string;
/** PartsetHeader */
export interface PartSetHeader {
    total: number;
    hash: Uint8Array;
}
export interface PartSetHeaderProtoMsg {
    typeUrl: "/tendermint.types.PartSetHeader";
    value: Uint8Array;
}
/** PartsetHeader */
export interface PartSetHeaderAmino {
    total?: number;
    hash?: string;
}
export interface PartSetHeaderAminoMsg {
    type: "/tendermint.types.PartSetHeader";
    value: PartSetHeaderAmino;
}
/** PartsetHeader */
export interface PartSetHeaderSDKType {
    total: number;
    hash: Uint8Array;
}
export interface Part {
    index: number;
    bytes: Uint8Array;
    proof: Proof | undefined;
}
export interface PartProtoMsg {
    typeUrl: "/tendermint.types.Part";
    value: Uint8Array;
}
export interface PartAmino {
    index?: number;
    bytes?: string;
    proof?: ProofAmino | undefined;
}
export interface PartAminoMsg {
    type: "/tendermint.types.Part";
    value: PartAmino;
}
export interface PartSDKType {
    index: number;
    bytes: Uint8Array;
    proof: ProofSDKType | undefined;
}
/** BlockID */
export interface BlockID {
    hash: Uint8Array;
    partSetHeader: PartSetHeader | undefined;
}
export interface BlockIDProtoMsg {
    typeUrl: "/tendermint.types.BlockID";
    value: Uint8Array;
}
/** BlockID */
export interface BlockIDAmino {
    hash?: string;
    part_set_header?: PartSetHeaderAmino | undefined;
}
export interface BlockIDAminoMsg {
    type: "/tendermint.types.BlockID";
    value: BlockIDAmino;
}
/** BlockID */
export interface BlockIDSDKType {
    hash: Uint8Array;
    part_set_header: PartSetHeaderSDKType | undefined;
}
/** Header defines the structure of a Tendermint block header. */
export interface Header {
    /** basic block info */
    version: Consensus | undefined;
    chainId: string;
    height: bigint;
    time: Date | undefined;
    /** prev block info */
    lastBlockId: BlockID | undefined;
    /** hashes of block data */
    lastCommitHash: Uint8Array;
    dataHash: Uint8Array;
    /** hashes from the app output from the prev block */
    validatorsHash: Uint8Array;
    /** validators for the next block */
    nextValidatorsHash: Uint8Array;
    /** consensus params for current block */
    consensusHash: Uint8Array;
    /** state after txs from the previous block */
    appHash: Uint8Array;
    lastResultsHash: Uint8Array;
    /** consensus info */
    evidenceHash: Uint8Array;
    /** original proposer of the block */
    proposerAddress: Uint8Array;
}
export interface HeaderProtoMsg {
    typeUrl: "/tendermint.types.Header";
    value: Uint8Array;
}
/** Header defines the structure of a Tendermint block header. */
export interface HeaderAmino {
    /** basic block info */
    version?: ConsensusAmino | undefined;
    chain_id?: string;
    height?: string;
    time?: string | undefined;
    /** prev block info */
    last_block_id?: BlockIDAmino | undefined;
    /** hashes of block data */
    last_commit_hash?: string;
    data_hash?: string;
    /** hashes from the app output from the prev block */
    validators_hash?: string;
    /** validators for the next block */
    next_validators_hash?: string;
    /** consensus params for current block */
    consensus_hash?: string;
    /** state after txs from the previous block */
    app_hash?: string;
    last_results_hash?: string;
    /** consensus info */
    evidence_hash?: string;
    /** original proposer of the block */
    proposer_address?: string;
}
export interface HeaderAminoMsg {
    type: "/tendermint.types.Header";
    value: HeaderAmino;
}
/** Header defines the structure of a Tendermint block header. */
export interface HeaderSDKType {
    version: ConsensusSDKType | undefined;
    chain_id: string;
    height: bigint;
    time: Date | undefined;
    last_block_id: BlockIDSDKType | undefined;
    last_commit_hash: Uint8Array;
    data_hash: Uint8Array;
    validators_hash: Uint8Array;
    next_validators_hash: Uint8Array;
    consensus_hash: Uint8Array;
    app_hash: Uint8Array;
    last_results_hash: Uint8Array;
    evidence_hash: Uint8Array;
    proposer_address: Uint8Array;
}
/** Data contains the set of transactions included in the block */
export interface Data {
    /**
     * Txs that will be applied by state @ block.Height+1.
     * NOTE: not all txs here are valid.  We're just agreeing on the order first.
     * This means that block.AppHash does not include these txs.
     */
    txs: Uint8Array[];
}
export interface DataProtoMsg {
    typeUrl: "/tendermint.types.Data";
    value: Uint8Array;
}
/** Data contains the set of transactions included in the block */
export interface DataAmino {
    /**
     * Txs that will be applied by state @ block.Height+1.
     * NOTE: not all txs here are valid.  We're just agreeing on the order first.
     * This means that block.AppHash does not include these txs.
     */
    txs?: string[];
}
export interface DataAminoMsg {
    type: "/tendermint.types.Data";
    value: DataAmino;
}
/** Data contains the set of transactions included in the block */
export interface DataSDKType {
    txs: Uint8Array[];
}
/**
 * Vote represents a prevote, precommit, or commit vote from validators for
 * consensus.
 */
export interface Vote {
    type: SignedMsgType;
    height: bigint;
    round: number;
    /** zero if vote is nil. */
    blockId: BlockID | undefined;
    timestamp: Date | undefined;
    validatorAddress: Uint8Array;
    validatorIndex: number;
    signature: Uint8Array;
}
export interface VoteProtoMsg {
    typeUrl: "/tendermint.types.Vote";
    value: Uint8Array;
}
/**
 * Vote represents a prevote, precommit, or commit vote from validators for
 * consensus.
 */
export interface VoteAmino {
    type?: SignedMsgType;
    height?: string;
    round?: number;
    /** zero if vote is nil. */
    block_id?: BlockIDAmino | undefined;
    timestamp?: string | undefined;
    validator_address?: string;
    validator_index?: number;
    signature?: string;
}
export interface VoteAminoMsg {
    type: "/tendermint.types.Vote";
    value: VoteAmino;
}
/**
 * Vote represents a prevote, precommit, or commit vote from validators for
 * consensus.
 */
export interface VoteSDKType {
    type: SignedMsgType;
    height: bigint;
    round: number;
    block_id: BlockIDSDKType | undefined;
    timestamp: Date | undefined;
    validator_address: Uint8Array;
    validator_index: number;
    signature: Uint8Array;
}
/** Commit contains the evidence that a block was committed by a set of validators. */
export interface Commit {
    height: bigint;
    round: number;
    blockId: BlockID | undefined;
    signatures: CommitSig[];
}
export interface CommitProtoMsg {
    typeUrl: "/tendermint.types.Commit";
    value: Uint8Array;
}
/** Commit contains the evidence that a block was committed by a set of validators. */
export interface CommitAmino {
    height?: string;
    round?: number;
    block_id?: BlockIDAmino | undefined;
    signatures?: CommitSigAmino[];
}
export interface CommitAminoMsg {
    type: "/tendermint.types.Commit";
    value: CommitAmino;
}
/** Commit contains the evidence that a block was committed by a set of validators. */
export interface CommitSDKType {
    height: bigint;
    round: number;
    block_id: BlockIDSDKType | undefined;
    signatures: CommitSigSDKType[];
}
/** CommitSig is a part of the Vote included in a Commit. */
export interface CommitSig {
    blockIdFlag: BlockIDFlag;
    validatorAddress: Uint8Array;
    timestamp: Date | undefined;
    signature: Uint8Array;
}
export interface CommitSigProtoMsg {
    typeUrl: "/tendermint.types.CommitSig";
    value: Uint8Array;
}
/** CommitSig is a part of the Vote included in a Commit. */
export interface CommitSigAmino {
    block_id_flag?: BlockIDFlag;
    validator_address?: string;
    timestamp?: string | undefined;
    signature?: string;
}
export interface CommitSigAminoMsg {
    type: "/tendermint.types.CommitSig";
    value: CommitSigAmino;
}
/** CommitSig is a part of the Vote included in a Commit. */
export interface CommitSigSDKType {
    block_id_flag: BlockIDFlag;
    validator_address: Uint8Array;
    timestamp: Date | undefined;
    signature: Uint8Array;
}
export interface Proposal {
    type: SignedMsgType;
    height: bigint;
    round: number;
    polRound: number;
    blockId: BlockID | undefined;
    timestamp: Date | undefined;
    signature: Uint8Array;
}
export interface ProposalProtoMsg {
    typeUrl: "/tendermint.types.Proposal";
    value: Uint8Array;
}
export interface ProposalAmino {
    type?: SignedMsgType;
    height?: string;
    round?: number;
    pol_round?: number;
    block_id?: BlockIDAmino | undefined;
    timestamp?: string | undefined;
    signature?: string;
}
export interface ProposalAminoMsg {
    type: "/tendermint.types.Proposal";
    value: ProposalAmino;
}
export interface ProposalSDKType {
    type: SignedMsgType;
    height: bigint;
    round: number;
    pol_round: number;
    block_id: BlockIDSDKType | undefined;
    timestamp: Date | undefined;
    signature: Uint8Array;
}
export interface SignedHeader {
    header?: Header | undefined;
    commit?: Commit | undefined;
}
export interface SignedHeaderProtoMsg {
    typeUrl: "/tendermint.types.SignedHeader";
    value: Uint8Array;
}
export interface SignedHeaderAmino {
    header?: HeaderAmino | undefined;
    commit?: CommitAmino | undefined;
}
export interface SignedHeaderAminoMsg {
    type: "/tendermint.types.SignedHeader";
    value: SignedHeaderAmino;
}
export interface SignedHeaderSDKType {
    header?: HeaderSDKType | undefined;
    commit?: CommitSDKType | undefined;
}
export interface LightBlock {
    signedHeader?: SignedHeader | undefined;
    validatorSet?: ValidatorSet | undefined;
}
export interface LightBlockProtoMsg {
    typeUrl: "/tendermint.types.LightBlock";
    value: Uint8Array;
}
export interface LightBlockAmino {
    signed_header?: SignedHeaderAmino | undefined;
    validator_set?: ValidatorSetAmino | undefined;
}
export interface LightBlockAminoMsg {
    type: "/tendermint.types.LightBlock";
    value: LightBlockAmino;
}
export interface LightBlockSDKType {
    signed_header?: SignedHeaderSDKType | undefined;
    validator_set?: ValidatorSetSDKType | undefined;
}
export interface BlockMeta {
    blockId: BlockID | undefined;
    blockSize: bigint;
    header: Header | undefined;
    numTxs: bigint;
}
export interface BlockMetaProtoMsg {
    typeUrl: "/tendermint.types.BlockMeta";
    value: Uint8Array;
}
export interface BlockMetaAmino {
    block_id?: BlockIDAmino | undefined;
    block_size?: string;
    header?: HeaderAmino | undefined;
    num_txs?: string;
}
export interface BlockMetaAminoMsg {
    type: "/tendermint.types.BlockMeta";
    value: BlockMetaAmino;
}
export interface BlockMetaSDKType {
    block_id: BlockIDSDKType | undefined;
    block_size: bigint;
    header: HeaderSDKType | undefined;
    num_txs: bigint;
}
/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */
export interface TxProof {
    rootHash: Uint8Array;
    data: Uint8Array;
    proof?: Proof | undefined;
}
export interface TxProofProtoMsg {
    typeUrl: "/tendermint.types.TxProof";
    value: Uint8Array;
}
/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */
export interface TxProofAmino {
    root_hash?: string;
    data?: string;
    proof?: ProofAmino | undefined;
}
export interface TxProofAminoMsg {
    type: "/tendermint.types.TxProof";
    value: TxProofAmino;
}
/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */
export interface TxProofSDKType {
    root_hash: Uint8Array;
    data: Uint8Array;
    proof?: ProofSDKType | undefined;
}
export declare const PartSetHeader: {
    typeUrl: string;
    is(o: any): o is PartSetHeader;
    isSDK(o: any): o is PartSetHeaderSDKType;
    isAmino(o: any): o is PartSetHeaderAmino;
    encode(message: PartSetHeader, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): PartSetHeader;
    fromJSON(object: any): PartSetHeader;
    toJSON(message: PartSetHeader): unknown;
    fromPartial(object: DeepPartial<PartSetHeader>): PartSetHeader;
    fromSDK(object: PartSetHeaderSDKType): PartSetHeader;
    toSDK(message: PartSetHeader): PartSetHeaderSDKType;
    fromAmino(object: PartSetHeaderAmino): PartSetHeader;
    toAmino(message: PartSetHeader): PartSetHeaderAmino;
    fromAminoMsg(object: PartSetHeaderAminoMsg): PartSetHeader;
    fromProtoMsg(message: PartSetHeaderProtoMsg): PartSetHeader;
    toProto(message: PartSetHeader): Uint8Array;
    toProtoMsg(message: PartSetHeader): PartSetHeaderProtoMsg;
};
export declare const Part: {
    typeUrl: string;
    is(o: any): o is Part;
    isSDK(o: any): o is PartSDKType;
    isAmino(o: any): o is PartAmino;
    encode(message: Part, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Part;
    fromJSON(object: any): Part;
    toJSON(message: Part): unknown;
    fromPartial(object: DeepPartial<Part>): Part;
    fromSDK(object: PartSDKType): Part;
    toSDK(message: Part): PartSDKType;
    fromAmino(object: PartAmino): Part;
    toAmino(message: Part): PartAmino;
    fromAminoMsg(object: PartAminoMsg): Part;
    fromProtoMsg(message: PartProtoMsg): Part;
    toProto(message: Part): Uint8Array;
    toProtoMsg(message: Part): PartProtoMsg;
};
export declare const BlockID: {
    typeUrl: string;
    is(o: any): o is BlockID;
    isSDK(o: any): o is BlockIDSDKType;
    isAmino(o: any): o is BlockIDAmino;
    encode(message: BlockID, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BlockID;
    fromJSON(object: any): BlockID;
    toJSON(message: BlockID): unknown;
    fromPartial(object: DeepPartial<BlockID>): BlockID;
    fromSDK(object: BlockIDSDKType): BlockID;
    toSDK(message: BlockID): BlockIDSDKType;
    fromAmino(object: BlockIDAmino): BlockID;
    toAmino(message: BlockID): BlockIDAmino;
    fromAminoMsg(object: BlockIDAminoMsg): BlockID;
    fromProtoMsg(message: BlockIDProtoMsg): BlockID;
    toProto(message: BlockID): Uint8Array;
    toProtoMsg(message: BlockID): BlockIDProtoMsg;
};
export declare const Header: {
    typeUrl: string;
    is(o: any): o is Header;
    isSDK(o: any): o is HeaderSDKType;
    isAmino(o: any): o is HeaderAmino;
    encode(message: Header, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Header;
    fromJSON(object: any): Header;
    toJSON(message: Header): unknown;
    fromPartial(object: DeepPartial<Header>): Header;
    fromSDK(object: HeaderSDKType): Header;
    toSDK(message: Header): HeaderSDKType;
    fromAmino(object: HeaderAmino): Header;
    toAmino(message: Header): HeaderAmino;
    fromAminoMsg(object: HeaderAminoMsg): Header;
    fromProtoMsg(message: HeaderProtoMsg): Header;
    toProto(message: Header): Uint8Array;
    toProtoMsg(message: Header): HeaderProtoMsg;
};
export declare const Data: {
    typeUrl: string;
    is(o: any): o is Data;
    isSDK(o: any): o is DataSDKType;
    isAmino(o: any): o is DataAmino;
    encode(message: Data, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Data;
    fromJSON(object: any): Data;
    toJSON(message: Data): unknown;
    fromPartial(object: DeepPartial<Data>): Data;
    fromSDK(object: DataSDKType): Data;
    toSDK(message: Data): DataSDKType;
    fromAmino(object: DataAmino): Data;
    toAmino(message: Data): DataAmino;
    fromAminoMsg(object: DataAminoMsg): Data;
    fromProtoMsg(message: DataProtoMsg): Data;
    toProto(message: Data): Uint8Array;
    toProtoMsg(message: Data): DataProtoMsg;
};
export declare const Vote: {
    typeUrl: string;
    is(o: any): o is Vote;
    isSDK(o: any): o is VoteSDKType;
    isAmino(o: any): o is VoteAmino;
    encode(message: Vote, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Vote;
    fromJSON(object: any): Vote;
    toJSON(message: Vote): unknown;
    fromPartial(object: DeepPartial<Vote>): Vote;
    fromSDK(object: VoteSDKType): Vote;
    toSDK(message: Vote): VoteSDKType;
    fromAmino(object: VoteAmino): Vote;
    toAmino(message: Vote): VoteAmino;
    fromAminoMsg(object: VoteAminoMsg): Vote;
    fromProtoMsg(message: VoteProtoMsg): Vote;
    toProto(message: Vote): Uint8Array;
    toProtoMsg(message: Vote): VoteProtoMsg;
};
export declare const Commit: {
    typeUrl: string;
    is(o: any): o is Commit;
    isSDK(o: any): o is CommitSDKType;
    isAmino(o: any): o is CommitAmino;
    encode(message: Commit, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Commit;
    fromJSON(object: any): Commit;
    toJSON(message: Commit): unknown;
    fromPartial(object: DeepPartial<Commit>): Commit;
    fromSDK(object: CommitSDKType): Commit;
    toSDK(message: Commit): CommitSDKType;
    fromAmino(object: CommitAmino): Commit;
    toAmino(message: Commit): CommitAmino;
    fromAminoMsg(object: CommitAminoMsg): Commit;
    fromProtoMsg(message: CommitProtoMsg): Commit;
    toProto(message: Commit): Uint8Array;
    toProtoMsg(message: Commit): CommitProtoMsg;
};
export declare const CommitSig: {
    typeUrl: string;
    is(o: any): o is CommitSig;
    isSDK(o: any): o is CommitSigSDKType;
    isAmino(o: any): o is CommitSigAmino;
    encode(message: CommitSig, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CommitSig;
    fromJSON(object: any): CommitSig;
    toJSON(message: CommitSig): unknown;
    fromPartial(object: DeepPartial<CommitSig>): CommitSig;
    fromSDK(object: CommitSigSDKType): CommitSig;
    toSDK(message: CommitSig): CommitSigSDKType;
    fromAmino(object: CommitSigAmino): CommitSig;
    toAmino(message: CommitSig): CommitSigAmino;
    fromAminoMsg(object: CommitSigAminoMsg): CommitSig;
    fromProtoMsg(message: CommitSigProtoMsg): CommitSig;
    toProto(message: CommitSig): Uint8Array;
    toProtoMsg(message: CommitSig): CommitSigProtoMsg;
};
export declare const Proposal: {
    typeUrl: string;
    is(o: any): o is Proposal;
    isSDK(o: any): o is ProposalSDKType;
    isAmino(o: any): o is ProposalAmino;
    encode(message: Proposal, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): Proposal;
    fromJSON(object: any): Proposal;
    toJSON(message: Proposal): unknown;
    fromPartial(object: DeepPartial<Proposal>): Proposal;
    fromSDK(object: ProposalSDKType): Proposal;
    toSDK(message: Proposal): ProposalSDKType;
    fromAmino(object: ProposalAmino): Proposal;
    toAmino(message: Proposal): ProposalAmino;
    fromAminoMsg(object: ProposalAminoMsg): Proposal;
    fromProtoMsg(message: ProposalProtoMsg): Proposal;
    toProto(message: Proposal): Uint8Array;
    toProtoMsg(message: Proposal): ProposalProtoMsg;
};
export declare const SignedHeader: {
    typeUrl: string;
    is(o: any): o is SignedHeader;
    isSDK(o: any): o is SignedHeaderSDKType;
    isAmino(o: any): o is SignedHeaderAmino;
    encode(message: SignedHeader, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): SignedHeader;
    fromJSON(object: any): SignedHeader;
    toJSON(message: SignedHeader): unknown;
    fromPartial(object: DeepPartial<SignedHeader>): SignedHeader;
    fromSDK(object: SignedHeaderSDKType): SignedHeader;
    toSDK(message: SignedHeader): SignedHeaderSDKType;
    fromAmino(object: SignedHeaderAmino): SignedHeader;
    toAmino(message: SignedHeader): SignedHeaderAmino;
    fromAminoMsg(object: SignedHeaderAminoMsg): SignedHeader;
    fromProtoMsg(message: SignedHeaderProtoMsg): SignedHeader;
    toProto(message: SignedHeader): Uint8Array;
    toProtoMsg(message: SignedHeader): SignedHeaderProtoMsg;
};
export declare const LightBlock: {
    typeUrl: string;
    is(o: any): o is LightBlock;
    isSDK(o: any): o is LightBlockSDKType;
    isAmino(o: any): o is LightBlockAmino;
    encode(message: LightBlock, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LightBlock;
    fromJSON(object: any): LightBlock;
    toJSON(message: LightBlock): unknown;
    fromPartial(object: DeepPartial<LightBlock>): LightBlock;
    fromSDK(object: LightBlockSDKType): LightBlock;
    toSDK(message: LightBlock): LightBlockSDKType;
    fromAmino(object: LightBlockAmino): LightBlock;
    toAmino(message: LightBlock): LightBlockAmino;
    fromAminoMsg(object: LightBlockAminoMsg): LightBlock;
    fromProtoMsg(message: LightBlockProtoMsg): LightBlock;
    toProto(message: LightBlock): Uint8Array;
    toProtoMsg(message: LightBlock): LightBlockProtoMsg;
};
export declare const BlockMeta: {
    typeUrl: string;
    is(o: any): o is BlockMeta;
    isSDK(o: any): o is BlockMetaSDKType;
    isAmino(o: any): o is BlockMetaAmino;
    encode(message: BlockMeta, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BlockMeta;
    fromJSON(object: any): BlockMeta;
    toJSON(message: BlockMeta): unknown;
    fromPartial(object: DeepPartial<BlockMeta>): BlockMeta;
    fromSDK(object: BlockMetaSDKType): BlockMeta;
    toSDK(message: BlockMeta): BlockMetaSDKType;
    fromAmino(object: BlockMetaAmino): BlockMeta;
    toAmino(message: BlockMeta): BlockMetaAmino;
    fromAminoMsg(object: BlockMetaAminoMsg): BlockMeta;
    fromProtoMsg(message: BlockMetaProtoMsg): BlockMeta;
    toProto(message: BlockMeta): Uint8Array;
    toProtoMsg(message: BlockMeta): BlockMetaProtoMsg;
};
export declare const TxProof: {
    typeUrl: string;
    is(o: any): o is TxProof;
    isSDK(o: any): o is TxProofSDKType;
    isAmino(o: any): o is TxProofAmino;
    encode(message: TxProof, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): TxProof;
    fromJSON(object: any): TxProof;
    toJSON(message: TxProof): unknown;
    fromPartial(object: DeepPartial<TxProof>): TxProof;
    fromSDK(object: TxProofSDKType): TxProof;
    toSDK(message: TxProof): TxProofSDKType;
    fromAmino(object: TxProofAmino): TxProof;
    toAmino(message: TxProof): TxProofAmino;
    fromAminoMsg(object: TxProofAminoMsg): TxProof;
    fromProtoMsg(message: TxProofProtoMsg): TxProof;
    toProto(message: TxProof): Uint8Array;
    toProtoMsg(message: TxProof): TxProofProtoMsg;
};
