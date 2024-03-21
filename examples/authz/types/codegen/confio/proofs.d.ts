import { BinaryReader, BinaryWriter } from "../binary";
import { DeepPartial } from "../helpers";
export declare enum HashOp {
    /** NO_HASH - NO_HASH is the default if no data passed. Note this is an illegal argument some places. */
    NO_HASH = 0,
    SHA256 = 1,
    SHA512 = 2,
    KECCAK = 3,
    RIPEMD160 = 4,
    /** BITCOIN - ripemd160(sha256(x)) */
    BITCOIN = 5,
    UNRECOGNIZED = -1
}
export declare const HashOpSDKType: typeof HashOp;
export declare const HashOpAmino: typeof HashOp;
export declare function hashOpFromJSON(object: any): HashOp;
export declare function hashOpToJSON(object: HashOp): string;
/**
 * LengthOp defines how to process the key and value of the LeafOp
 * to include length information. After encoding the length with the given
 * algorithm, the length will be prepended to the key and value bytes.
 * (Each one with it's own encoded length)
 */
export declare enum LengthOp {
    /** NO_PREFIX - NO_PREFIX don't include any length info */
    NO_PREFIX = 0,
    /** VAR_PROTO - VAR_PROTO uses protobuf (and go-amino) varint encoding of the length */
    VAR_PROTO = 1,
    /** VAR_RLP - VAR_RLP uses rlp int encoding of the length */
    VAR_RLP = 2,
    /** FIXED32_BIG - FIXED32_BIG uses big-endian encoding of the length as a 32 bit integer */
    FIXED32_BIG = 3,
    /** FIXED32_LITTLE - FIXED32_LITTLE uses little-endian encoding of the length as a 32 bit integer */
    FIXED32_LITTLE = 4,
    /** FIXED64_BIG - FIXED64_BIG uses big-endian encoding of the length as a 64 bit integer */
    FIXED64_BIG = 5,
    /** FIXED64_LITTLE - FIXED64_LITTLE uses little-endian encoding of the length as a 64 bit integer */
    FIXED64_LITTLE = 6,
    /** REQUIRE_32_BYTES - REQUIRE_32_BYTES is like NONE, but will fail if the input is not exactly 32 bytes (sha256 output) */
    REQUIRE_32_BYTES = 7,
    /** REQUIRE_64_BYTES - REQUIRE_64_BYTES is like NONE, but will fail if the input is not exactly 64 bytes (sha512 output) */
    REQUIRE_64_BYTES = 8,
    UNRECOGNIZED = -1
}
export declare const LengthOpSDKType: typeof LengthOp;
export declare const LengthOpAmino: typeof LengthOp;
export declare function lengthOpFromJSON(object: any): LengthOp;
export declare function lengthOpToJSON(object: LengthOp): string;
/**
 * ExistenceProof takes a key and a value and a set of steps to perform on it.
 * The result of peforming all these steps will provide a "root hash", which can
 * be compared to the value in a header.
 *
 * Since it is computationally infeasible to produce a hash collission for any of the used
 * cryptographic hash functions, if someone can provide a series of operations to transform
 * a given key and value into a root hash that matches some trusted root, these key and values
 * must be in the referenced merkle tree.
 *
 * The only possible issue is maliablity in LeafOp, such as providing extra prefix data,
 * which should be controlled by a spec. Eg. with lengthOp as NONE,
 * prefix = FOO, key = BAR, value = CHOICE
 * and
 * prefix = F, key = OOBAR, value = CHOICE
 * would produce the same value.
 *
 * With LengthOp this is tricker but not impossible. Which is why the "leafPrefixEqual" field
 * in the ProofSpec is valuable to prevent this mutability. And why all trees should
 * length-prefix the data before hashing it.
 */
export interface ExistenceProof {
    key: Uint8Array;
    value: Uint8Array;
    leaf?: LeafOp | undefined;
    path: InnerOp[];
}
export interface ExistenceProofProtoMsg {
    typeUrl: "/ics23.ExistenceProof";
    value: Uint8Array;
}
/**
 * ExistenceProof takes a key and a value and a set of steps to perform on it.
 * The result of peforming all these steps will provide a "root hash", which can
 * be compared to the value in a header.
 *
 * Since it is computationally infeasible to produce a hash collission for any of the used
 * cryptographic hash functions, if someone can provide a series of operations to transform
 * a given key and value into a root hash that matches some trusted root, these key and values
 * must be in the referenced merkle tree.
 *
 * The only possible issue is maliablity in LeafOp, such as providing extra prefix data,
 * which should be controlled by a spec. Eg. with lengthOp as NONE,
 * prefix = FOO, key = BAR, value = CHOICE
 * and
 * prefix = F, key = OOBAR, value = CHOICE
 * would produce the same value.
 *
 * With LengthOp this is tricker but not impossible. Which is why the "leafPrefixEqual" field
 * in the ProofSpec is valuable to prevent this mutability. And why all trees should
 * length-prefix the data before hashing it.
 */
export interface ExistenceProofAmino {
    key?: string;
    value?: string;
    leaf?: LeafOpAmino | undefined;
    path?: InnerOpAmino[];
}
export interface ExistenceProofAminoMsg {
    type: "/ics23.ExistenceProof";
    value: ExistenceProofAmino;
}
/**
 * ExistenceProof takes a key and a value and a set of steps to perform on it.
 * The result of peforming all these steps will provide a "root hash", which can
 * be compared to the value in a header.
 *
 * Since it is computationally infeasible to produce a hash collission for any of the used
 * cryptographic hash functions, if someone can provide a series of operations to transform
 * a given key and value into a root hash that matches some trusted root, these key and values
 * must be in the referenced merkle tree.
 *
 * The only possible issue is maliablity in LeafOp, such as providing extra prefix data,
 * which should be controlled by a spec. Eg. with lengthOp as NONE,
 * prefix = FOO, key = BAR, value = CHOICE
 * and
 * prefix = F, key = OOBAR, value = CHOICE
 * would produce the same value.
 *
 * With LengthOp this is tricker but not impossible. Which is why the "leafPrefixEqual" field
 * in the ProofSpec is valuable to prevent this mutability. And why all trees should
 * length-prefix the data before hashing it.
 */
export interface ExistenceProofSDKType {
    key: Uint8Array;
    value: Uint8Array;
    leaf?: LeafOpSDKType | undefined;
    path: InnerOpSDKType[];
}
/**
 * NonExistenceProof takes a proof of two neighbors, one left of the desired key,
 * one right of the desired key. If both proofs are valid AND they are neighbors,
 * then there is no valid proof for the given key.
 */
export interface NonExistenceProof {
    /** TODO: remove this as unnecessary??? we prove a range */
    key: Uint8Array;
    left?: ExistenceProof | undefined;
    right?: ExistenceProof | undefined;
}
export interface NonExistenceProofProtoMsg {
    typeUrl: "/ics23.NonExistenceProof";
    value: Uint8Array;
}
/**
 * NonExistenceProof takes a proof of two neighbors, one left of the desired key,
 * one right of the desired key. If both proofs are valid AND they are neighbors,
 * then there is no valid proof for the given key.
 */
export interface NonExistenceProofAmino {
    /** TODO: remove this as unnecessary??? we prove a range */
    key?: string;
    left?: ExistenceProofAmino | undefined;
    right?: ExistenceProofAmino | undefined;
}
export interface NonExistenceProofAminoMsg {
    type: "/ics23.NonExistenceProof";
    value: NonExistenceProofAmino;
}
/**
 * NonExistenceProof takes a proof of two neighbors, one left of the desired key,
 * one right of the desired key. If both proofs are valid AND they are neighbors,
 * then there is no valid proof for the given key.
 */
export interface NonExistenceProofSDKType {
    key: Uint8Array;
    left?: ExistenceProofSDKType | undefined;
    right?: ExistenceProofSDKType | undefined;
}
/** CommitmentProof is either an ExistenceProof or a NonExistenceProof, or a Batch of such messages */
export interface CommitmentProof {
    exist?: ExistenceProof | undefined;
    nonexist?: NonExistenceProof | undefined;
    batch?: BatchProof | undefined;
    compressed?: CompressedBatchProof | undefined;
}
export interface CommitmentProofProtoMsg {
    typeUrl: "/ics23.CommitmentProof";
    value: Uint8Array;
}
/** CommitmentProof is either an ExistenceProof or a NonExistenceProof, or a Batch of such messages */
export interface CommitmentProofAmino {
    exist?: ExistenceProofAmino | undefined;
    nonexist?: NonExistenceProofAmino | undefined;
    batch?: BatchProofAmino | undefined;
    compressed?: CompressedBatchProofAmino | undefined;
}
export interface CommitmentProofAminoMsg {
    type: "/ics23.CommitmentProof";
    value: CommitmentProofAmino;
}
/** CommitmentProof is either an ExistenceProof or a NonExistenceProof, or a Batch of such messages */
export interface CommitmentProofSDKType {
    exist?: ExistenceProofSDKType | undefined;
    nonexist?: NonExistenceProofSDKType | undefined;
    batch?: BatchProofSDKType | undefined;
    compressed?: CompressedBatchProofSDKType | undefined;
}
/**
 * LeafOp represents the raw key-value data we wish to prove, and
 * must be flexible to represent the internal transformation from
 * the original key-value pairs into the basis hash, for many existing
 * merkle trees.
 *
 * key and value are passed in. So that the signature of this operation is:
 * leafOp(key, value) -> output
 *
 * To process this, first prehash the keys and values if needed (ANY means no hash in this case):
 * hkey = prehashKey(key)
 * hvalue = prehashValue(value)
 *
 * Then combine the bytes, and hash it
 * output = hash(prefix || length(hkey) || hkey || length(hvalue) || hvalue)
 */
export interface LeafOp {
    hash: HashOp;
    prehashKey: HashOp;
    prehashValue: HashOp;
    length: LengthOp;
    /**
     * prefix is a fixed bytes that may optionally be included at the beginning to differentiate
     * a leaf node from an inner node.
     */
    prefix: Uint8Array;
}
export interface LeafOpProtoMsg {
    typeUrl: "/ics23.LeafOp";
    value: Uint8Array;
}
/**
 * LeafOp represents the raw key-value data we wish to prove, and
 * must be flexible to represent the internal transformation from
 * the original key-value pairs into the basis hash, for many existing
 * merkle trees.
 *
 * key and value are passed in. So that the signature of this operation is:
 * leafOp(key, value) -> output
 *
 * To process this, first prehash the keys and values if needed (ANY means no hash in this case):
 * hkey = prehashKey(key)
 * hvalue = prehashValue(value)
 *
 * Then combine the bytes, and hash it
 * output = hash(prefix || length(hkey) || hkey || length(hvalue) || hvalue)
 */
export interface LeafOpAmino {
    hash?: HashOp;
    prehash_key?: HashOp;
    prehash_value?: HashOp;
    length?: LengthOp;
    /**
     * prefix is a fixed bytes that may optionally be included at the beginning to differentiate
     * a leaf node from an inner node.
     */
    prefix?: string;
}
export interface LeafOpAminoMsg {
    type: "/ics23.LeafOp";
    value: LeafOpAmino;
}
/**
 * LeafOp represents the raw key-value data we wish to prove, and
 * must be flexible to represent the internal transformation from
 * the original key-value pairs into the basis hash, for many existing
 * merkle trees.
 *
 * key and value are passed in. So that the signature of this operation is:
 * leafOp(key, value) -> output
 *
 * To process this, first prehash the keys and values if needed (ANY means no hash in this case):
 * hkey = prehashKey(key)
 * hvalue = prehashValue(value)
 *
 * Then combine the bytes, and hash it
 * output = hash(prefix || length(hkey) || hkey || length(hvalue) || hvalue)
 */
export interface LeafOpSDKType {
    hash: HashOp;
    prehash_key: HashOp;
    prehash_value: HashOp;
    length: LengthOp;
    prefix: Uint8Array;
}
/**
 * InnerOp represents a merkle-proof step that is not a leaf.
 * It represents concatenating two children and hashing them to provide the next result.
 *
 * The result of the previous step is passed in, so the signature of this op is:
 * innerOp(child) -> output
 *
 * The result of applying InnerOp should be:
 * output = op.hash(op.prefix || child || op.suffix)
 *
 * where the || operator is concatenation of binary data,
 * and child is the result of hashing all the tree below this step.
 *
 * Any special data, like prepending child with the length, or prepending the entire operation with
 * some value to differentiate from leaf nodes, should be included in prefix and suffix.
 * If either of prefix or suffix is empty, we just treat it as an empty string
 */
export interface InnerOp {
    hash: HashOp;
    prefix: Uint8Array;
    suffix: Uint8Array;
}
export interface InnerOpProtoMsg {
    typeUrl: "/ics23.InnerOp";
    value: Uint8Array;
}
/**
 * InnerOp represents a merkle-proof step that is not a leaf.
 * It represents concatenating two children and hashing them to provide the next result.
 *
 * The result of the previous step is passed in, so the signature of this op is:
 * innerOp(child) -> output
 *
 * The result of applying InnerOp should be:
 * output = op.hash(op.prefix || child || op.suffix)
 *
 * where the || operator is concatenation of binary data,
 * and child is the result of hashing all the tree below this step.
 *
 * Any special data, like prepending child with the length, or prepending the entire operation with
 * some value to differentiate from leaf nodes, should be included in prefix and suffix.
 * If either of prefix or suffix is empty, we just treat it as an empty string
 */
export interface InnerOpAmino {
    hash?: HashOp;
    prefix?: string;
    suffix?: string;
}
export interface InnerOpAminoMsg {
    type: "/ics23.InnerOp";
    value: InnerOpAmino;
}
/**
 * InnerOp represents a merkle-proof step that is not a leaf.
 * It represents concatenating two children and hashing them to provide the next result.
 *
 * The result of the previous step is passed in, so the signature of this op is:
 * innerOp(child) -> output
 *
 * The result of applying InnerOp should be:
 * output = op.hash(op.prefix || child || op.suffix)
 *
 * where the || operator is concatenation of binary data,
 * and child is the result of hashing all the tree below this step.
 *
 * Any special data, like prepending child with the length, or prepending the entire operation with
 * some value to differentiate from leaf nodes, should be included in prefix and suffix.
 * If either of prefix or suffix is empty, we just treat it as an empty string
 */
export interface InnerOpSDKType {
    hash: HashOp;
    prefix: Uint8Array;
    suffix: Uint8Array;
}
/**
 * ProofSpec defines what the expected parameters are for a given proof type.
 * This can be stored in the client and used to validate any incoming proofs.
 *
 * verify(ProofSpec, Proof) -> Proof | Error
 *
 * As demonstrated in tests, if we don't fix the algorithm used to calculate the
 * LeafHash for a given tree, there are many possible key-value pairs that can
 * generate a given hash (by interpretting the preimage differently).
 * We need this for proper security, requires client knows a priori what
 * tree format server uses. But not in code, rather a configuration object.
 */
export interface ProofSpec {
    /**
     * any field in the ExistenceProof must be the same as in this spec.
     * except Prefix, which is just the first bytes of prefix (spec can be longer)
     */
    leafSpec?: LeafOp | undefined;
    innerSpec?: InnerSpec | undefined;
    /** max_depth (if > 0) is the maximum number of InnerOps allowed (mainly for fixed-depth tries) */
    maxDepth: number;
    /** min_depth (if > 0) is the minimum number of InnerOps allowed (mainly for fixed-depth tries) */
    minDepth: number;
}
export interface ProofSpecProtoMsg {
    typeUrl: "/ics23.ProofSpec";
    value: Uint8Array;
}
/**
 * ProofSpec defines what the expected parameters are for a given proof type.
 * This can be stored in the client and used to validate any incoming proofs.
 *
 * verify(ProofSpec, Proof) -> Proof | Error
 *
 * As demonstrated in tests, if we don't fix the algorithm used to calculate the
 * LeafHash for a given tree, there are many possible key-value pairs that can
 * generate a given hash (by interpretting the preimage differently).
 * We need this for proper security, requires client knows a priori what
 * tree format server uses. But not in code, rather a configuration object.
 */
export interface ProofSpecAmino {
    /**
     * any field in the ExistenceProof must be the same as in this spec.
     * except Prefix, which is just the first bytes of prefix (spec can be longer)
     */
    leaf_spec?: LeafOpAmino | undefined;
    inner_spec?: InnerSpecAmino | undefined;
    /** max_depth (if > 0) is the maximum number of InnerOps allowed (mainly for fixed-depth tries) */
    max_depth?: number;
    /** min_depth (if > 0) is the minimum number of InnerOps allowed (mainly for fixed-depth tries) */
    min_depth?: number;
}
export interface ProofSpecAminoMsg {
    type: "/ics23.ProofSpec";
    value: ProofSpecAmino;
}
/**
 * ProofSpec defines what the expected parameters are for a given proof type.
 * This can be stored in the client and used to validate any incoming proofs.
 *
 * verify(ProofSpec, Proof) -> Proof | Error
 *
 * As demonstrated in tests, if we don't fix the algorithm used to calculate the
 * LeafHash for a given tree, there are many possible key-value pairs that can
 * generate a given hash (by interpretting the preimage differently).
 * We need this for proper security, requires client knows a priori what
 * tree format server uses. But not in code, rather a configuration object.
 */
export interface ProofSpecSDKType {
    leaf_spec?: LeafOpSDKType | undefined;
    inner_spec?: InnerSpecSDKType | undefined;
    max_depth: number;
    min_depth: number;
}
/**
 * InnerSpec contains all store-specific structure info to determine if two proofs from a
 * given store are neighbors.
 *
 * This enables:
 *
 * isLeftMost(spec: InnerSpec, op: InnerOp)
 * isRightMost(spec: InnerSpec, op: InnerOp)
 * isLeftNeighbor(spec: InnerSpec, left: InnerOp, right: InnerOp)
 */
export interface InnerSpec {
    /**
     * Child order is the ordering of the children node, must count from 0
     * iavl tree is [0, 1] (left then right)
     * merk is [0, 2, 1] (left, right, here)
     */
    childOrder: number[];
    childSize: number;
    minPrefixLength: number;
    maxPrefixLength: number;
    /** empty child is the prehash image that is used when one child is nil (eg. 20 bytes of 0) */
    emptyChild: Uint8Array;
    /** hash is the algorithm that must be used for each InnerOp */
    hash: HashOp;
}
export interface InnerSpecProtoMsg {
    typeUrl: "/ics23.InnerSpec";
    value: Uint8Array;
}
/**
 * InnerSpec contains all store-specific structure info to determine if two proofs from a
 * given store are neighbors.
 *
 * This enables:
 *
 * isLeftMost(spec: InnerSpec, op: InnerOp)
 * isRightMost(spec: InnerSpec, op: InnerOp)
 * isLeftNeighbor(spec: InnerSpec, left: InnerOp, right: InnerOp)
 */
export interface InnerSpecAmino {
    /**
     * Child order is the ordering of the children node, must count from 0
     * iavl tree is [0, 1] (left then right)
     * merk is [0, 2, 1] (left, right, here)
     */
    child_order?: number[];
    child_size?: number;
    min_prefix_length?: number;
    max_prefix_length?: number;
    /** empty child is the prehash image that is used when one child is nil (eg. 20 bytes of 0) */
    empty_child?: string;
    /** hash is the algorithm that must be used for each InnerOp */
    hash?: HashOp;
}
export interface InnerSpecAminoMsg {
    type: "/ics23.InnerSpec";
    value: InnerSpecAmino;
}
/**
 * InnerSpec contains all store-specific structure info to determine if two proofs from a
 * given store are neighbors.
 *
 * This enables:
 *
 * isLeftMost(spec: InnerSpec, op: InnerOp)
 * isRightMost(spec: InnerSpec, op: InnerOp)
 * isLeftNeighbor(spec: InnerSpec, left: InnerOp, right: InnerOp)
 */
export interface InnerSpecSDKType {
    child_order: number[];
    child_size: number;
    min_prefix_length: number;
    max_prefix_length: number;
    empty_child: Uint8Array;
    hash: HashOp;
}
/** BatchProof is a group of multiple proof types than can be compressed */
export interface BatchProof {
    entries: BatchEntry[];
}
export interface BatchProofProtoMsg {
    typeUrl: "/ics23.BatchProof";
    value: Uint8Array;
}
/** BatchProof is a group of multiple proof types than can be compressed */
export interface BatchProofAmino {
    entries?: BatchEntryAmino[];
}
export interface BatchProofAminoMsg {
    type: "/ics23.BatchProof";
    value: BatchProofAmino;
}
/** BatchProof is a group of multiple proof types than can be compressed */
export interface BatchProofSDKType {
    entries: BatchEntrySDKType[];
}
/** Use BatchEntry not CommitmentProof, to avoid recursion */
export interface BatchEntry {
    exist?: ExistenceProof | undefined;
    nonexist?: NonExistenceProof | undefined;
}
export interface BatchEntryProtoMsg {
    typeUrl: "/ics23.BatchEntry";
    value: Uint8Array;
}
/** Use BatchEntry not CommitmentProof, to avoid recursion */
export interface BatchEntryAmino {
    exist?: ExistenceProofAmino | undefined;
    nonexist?: NonExistenceProofAmino | undefined;
}
export interface BatchEntryAminoMsg {
    type: "/ics23.BatchEntry";
    value: BatchEntryAmino;
}
/** Use BatchEntry not CommitmentProof, to avoid recursion */
export interface BatchEntrySDKType {
    exist?: ExistenceProofSDKType | undefined;
    nonexist?: NonExistenceProofSDKType | undefined;
}
export interface CompressedBatchProof {
    entries: CompressedBatchEntry[];
    lookupInners: InnerOp[];
}
export interface CompressedBatchProofProtoMsg {
    typeUrl: "/ics23.CompressedBatchProof";
    value: Uint8Array;
}
export interface CompressedBatchProofAmino {
    entries?: CompressedBatchEntryAmino[];
    lookup_inners?: InnerOpAmino[];
}
export interface CompressedBatchProofAminoMsg {
    type: "/ics23.CompressedBatchProof";
    value: CompressedBatchProofAmino;
}
export interface CompressedBatchProofSDKType {
    entries: CompressedBatchEntrySDKType[];
    lookup_inners: InnerOpSDKType[];
}
/** Use BatchEntry not CommitmentProof, to avoid recursion */
export interface CompressedBatchEntry {
    exist?: CompressedExistenceProof | undefined;
    nonexist?: CompressedNonExistenceProof | undefined;
}
export interface CompressedBatchEntryProtoMsg {
    typeUrl: "/ics23.CompressedBatchEntry";
    value: Uint8Array;
}
/** Use BatchEntry not CommitmentProof, to avoid recursion */
export interface CompressedBatchEntryAmino {
    exist?: CompressedExistenceProofAmino | undefined;
    nonexist?: CompressedNonExistenceProofAmino | undefined;
}
export interface CompressedBatchEntryAminoMsg {
    type: "/ics23.CompressedBatchEntry";
    value: CompressedBatchEntryAmino;
}
/** Use BatchEntry not CommitmentProof, to avoid recursion */
export interface CompressedBatchEntrySDKType {
    exist?: CompressedExistenceProofSDKType | undefined;
    nonexist?: CompressedNonExistenceProofSDKType | undefined;
}
export interface CompressedExistenceProof {
    key: Uint8Array;
    value: Uint8Array;
    leaf?: LeafOp | undefined;
    /** these are indexes into the lookup_inners table in CompressedBatchProof */
    path: number[];
}
export interface CompressedExistenceProofProtoMsg {
    typeUrl: "/ics23.CompressedExistenceProof";
    value: Uint8Array;
}
export interface CompressedExistenceProofAmino {
    key?: string;
    value?: string;
    leaf?: LeafOpAmino | undefined;
    /** these are indexes into the lookup_inners table in CompressedBatchProof */
    path?: number[];
}
export interface CompressedExistenceProofAminoMsg {
    type: "/ics23.CompressedExistenceProof";
    value: CompressedExistenceProofAmino;
}
export interface CompressedExistenceProofSDKType {
    key: Uint8Array;
    value: Uint8Array;
    leaf?: LeafOpSDKType | undefined;
    path: number[];
}
export interface CompressedNonExistenceProof {
    /** TODO: remove this as unnecessary??? we prove a range */
    key: Uint8Array;
    left?: CompressedExistenceProof | undefined;
    right?: CompressedExistenceProof | undefined;
}
export interface CompressedNonExistenceProofProtoMsg {
    typeUrl: "/ics23.CompressedNonExistenceProof";
    value: Uint8Array;
}
export interface CompressedNonExistenceProofAmino {
    /** TODO: remove this as unnecessary??? we prove a range */
    key?: string;
    left?: CompressedExistenceProofAmino | undefined;
    right?: CompressedExistenceProofAmino | undefined;
}
export interface CompressedNonExistenceProofAminoMsg {
    type: "/ics23.CompressedNonExistenceProof";
    value: CompressedNonExistenceProofAmino;
}
export interface CompressedNonExistenceProofSDKType {
    key: Uint8Array;
    left?: CompressedExistenceProofSDKType | undefined;
    right?: CompressedExistenceProofSDKType | undefined;
}
export declare const ExistenceProof: {
    typeUrl: string;
    is(o: any): o is ExistenceProof;
    isSDK(o: any): o is ExistenceProofSDKType;
    isAmino(o: any): o is ExistenceProofAmino;
    encode(message: ExistenceProof, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ExistenceProof;
    fromJSON(object: any): ExistenceProof;
    toJSON(message: ExistenceProof): unknown;
    fromPartial(object: DeepPartial<ExistenceProof>): ExistenceProof;
    fromSDK(object: ExistenceProofSDKType): ExistenceProof;
    toSDK(message: ExistenceProof): ExistenceProofSDKType;
    fromAmino(object: ExistenceProofAmino): ExistenceProof;
    toAmino(message: ExistenceProof): ExistenceProofAmino;
    fromAminoMsg(object: ExistenceProofAminoMsg): ExistenceProof;
    fromProtoMsg(message: ExistenceProofProtoMsg): ExistenceProof;
    toProto(message: ExistenceProof): Uint8Array;
    toProtoMsg(message: ExistenceProof): ExistenceProofProtoMsg;
};
export declare const NonExistenceProof: {
    typeUrl: string;
    is(o: any): o is NonExistenceProof;
    isSDK(o: any): o is NonExistenceProofSDKType;
    isAmino(o: any): o is NonExistenceProofAmino;
    encode(message: NonExistenceProof, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): NonExistenceProof;
    fromJSON(object: any): NonExistenceProof;
    toJSON(message: NonExistenceProof): unknown;
    fromPartial(object: DeepPartial<NonExistenceProof>): NonExistenceProof;
    fromSDK(object: NonExistenceProofSDKType): NonExistenceProof;
    toSDK(message: NonExistenceProof): NonExistenceProofSDKType;
    fromAmino(object: NonExistenceProofAmino): NonExistenceProof;
    toAmino(message: NonExistenceProof): NonExistenceProofAmino;
    fromAminoMsg(object: NonExistenceProofAminoMsg): NonExistenceProof;
    fromProtoMsg(message: NonExistenceProofProtoMsg): NonExistenceProof;
    toProto(message: NonExistenceProof): Uint8Array;
    toProtoMsg(message: NonExistenceProof): NonExistenceProofProtoMsg;
};
export declare const CommitmentProof: {
    typeUrl: string;
    is(o: any): o is CommitmentProof;
    isSDK(o: any): o is CommitmentProofSDKType;
    isAmino(o: any): o is CommitmentProofAmino;
    encode(message: CommitmentProof, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CommitmentProof;
    fromJSON(object: any): CommitmentProof;
    toJSON(message: CommitmentProof): unknown;
    fromPartial(object: DeepPartial<CommitmentProof>): CommitmentProof;
    fromSDK(object: CommitmentProofSDKType): CommitmentProof;
    toSDK(message: CommitmentProof): CommitmentProofSDKType;
    fromAmino(object: CommitmentProofAmino): CommitmentProof;
    toAmino(message: CommitmentProof): CommitmentProofAmino;
    fromAminoMsg(object: CommitmentProofAminoMsg): CommitmentProof;
    fromProtoMsg(message: CommitmentProofProtoMsg): CommitmentProof;
    toProto(message: CommitmentProof): Uint8Array;
    toProtoMsg(message: CommitmentProof): CommitmentProofProtoMsg;
};
export declare const LeafOp: {
    typeUrl: string;
    is(o: any): o is LeafOp;
    isSDK(o: any): o is LeafOpSDKType;
    isAmino(o: any): o is LeafOpAmino;
    encode(message: LeafOp, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): LeafOp;
    fromJSON(object: any): LeafOp;
    toJSON(message: LeafOp): unknown;
    fromPartial(object: DeepPartial<LeafOp>): LeafOp;
    fromSDK(object: LeafOpSDKType): LeafOp;
    toSDK(message: LeafOp): LeafOpSDKType;
    fromAmino(object: LeafOpAmino): LeafOp;
    toAmino(message: LeafOp): LeafOpAmino;
    fromAminoMsg(object: LeafOpAminoMsg): LeafOp;
    fromProtoMsg(message: LeafOpProtoMsg): LeafOp;
    toProto(message: LeafOp): Uint8Array;
    toProtoMsg(message: LeafOp): LeafOpProtoMsg;
};
export declare const InnerOp: {
    typeUrl: string;
    is(o: any): o is InnerOp;
    isSDK(o: any): o is InnerOpSDKType;
    isAmino(o: any): o is InnerOpAmino;
    encode(message: InnerOp, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): InnerOp;
    fromJSON(object: any): InnerOp;
    toJSON(message: InnerOp): unknown;
    fromPartial(object: DeepPartial<InnerOp>): InnerOp;
    fromSDK(object: InnerOpSDKType): InnerOp;
    toSDK(message: InnerOp): InnerOpSDKType;
    fromAmino(object: InnerOpAmino): InnerOp;
    toAmino(message: InnerOp): InnerOpAmino;
    fromAminoMsg(object: InnerOpAminoMsg): InnerOp;
    fromProtoMsg(message: InnerOpProtoMsg): InnerOp;
    toProto(message: InnerOp): Uint8Array;
    toProtoMsg(message: InnerOp): InnerOpProtoMsg;
};
export declare const ProofSpec: {
    typeUrl: string;
    is(o: any): o is ProofSpec;
    isSDK(o: any): o is ProofSpecSDKType;
    isAmino(o: any): o is ProofSpecAmino;
    encode(message: ProofSpec, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): ProofSpec;
    fromJSON(object: any): ProofSpec;
    toJSON(message: ProofSpec): unknown;
    fromPartial(object: DeepPartial<ProofSpec>): ProofSpec;
    fromSDK(object: ProofSpecSDKType): ProofSpec;
    toSDK(message: ProofSpec): ProofSpecSDKType;
    fromAmino(object: ProofSpecAmino): ProofSpec;
    toAmino(message: ProofSpec): ProofSpecAmino;
    fromAminoMsg(object: ProofSpecAminoMsg): ProofSpec;
    fromProtoMsg(message: ProofSpecProtoMsg): ProofSpec;
    toProto(message: ProofSpec): Uint8Array;
    toProtoMsg(message: ProofSpec): ProofSpecProtoMsg;
};
export declare const InnerSpec: {
    typeUrl: string;
    is(o: any): o is InnerSpec;
    isSDK(o: any): o is InnerSpecSDKType;
    isAmino(o: any): o is InnerSpecAmino;
    encode(message: InnerSpec, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): InnerSpec;
    fromJSON(object: any): InnerSpec;
    toJSON(message: InnerSpec): unknown;
    fromPartial(object: DeepPartial<InnerSpec>): InnerSpec;
    fromSDK(object: InnerSpecSDKType): InnerSpec;
    toSDK(message: InnerSpec): InnerSpecSDKType;
    fromAmino(object: InnerSpecAmino): InnerSpec;
    toAmino(message: InnerSpec): InnerSpecAmino;
    fromAminoMsg(object: InnerSpecAminoMsg): InnerSpec;
    fromProtoMsg(message: InnerSpecProtoMsg): InnerSpec;
    toProto(message: InnerSpec): Uint8Array;
    toProtoMsg(message: InnerSpec): InnerSpecProtoMsg;
};
export declare const BatchProof: {
    typeUrl: string;
    is(o: any): o is BatchProof;
    isSDK(o: any): o is BatchProofSDKType;
    isAmino(o: any): o is BatchProofAmino;
    encode(message: BatchProof, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BatchProof;
    fromJSON(object: any): BatchProof;
    toJSON(message: BatchProof): unknown;
    fromPartial(object: DeepPartial<BatchProof>): BatchProof;
    fromSDK(object: BatchProofSDKType): BatchProof;
    toSDK(message: BatchProof): BatchProofSDKType;
    fromAmino(object: BatchProofAmino): BatchProof;
    toAmino(message: BatchProof): BatchProofAmino;
    fromAminoMsg(object: BatchProofAminoMsg): BatchProof;
    fromProtoMsg(message: BatchProofProtoMsg): BatchProof;
    toProto(message: BatchProof): Uint8Array;
    toProtoMsg(message: BatchProof): BatchProofProtoMsg;
};
export declare const BatchEntry: {
    typeUrl: string;
    is(o: any): o is BatchEntry;
    isSDK(o: any): o is BatchEntrySDKType;
    isAmino(o: any): o is BatchEntryAmino;
    encode(message: BatchEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): BatchEntry;
    fromJSON(object: any): BatchEntry;
    toJSON(message: BatchEntry): unknown;
    fromPartial(object: DeepPartial<BatchEntry>): BatchEntry;
    fromSDK(object: BatchEntrySDKType): BatchEntry;
    toSDK(message: BatchEntry): BatchEntrySDKType;
    fromAmino(object: BatchEntryAmino): BatchEntry;
    toAmino(message: BatchEntry): BatchEntryAmino;
    fromAminoMsg(object: BatchEntryAminoMsg): BatchEntry;
    fromProtoMsg(message: BatchEntryProtoMsg): BatchEntry;
    toProto(message: BatchEntry): Uint8Array;
    toProtoMsg(message: BatchEntry): BatchEntryProtoMsg;
};
export declare const CompressedBatchProof: {
    typeUrl: string;
    is(o: any): o is CompressedBatchProof;
    isSDK(o: any): o is CompressedBatchProofSDKType;
    isAmino(o: any): o is CompressedBatchProofAmino;
    encode(message: CompressedBatchProof, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CompressedBatchProof;
    fromJSON(object: any): CompressedBatchProof;
    toJSON(message: CompressedBatchProof): unknown;
    fromPartial(object: DeepPartial<CompressedBatchProof>): CompressedBatchProof;
    fromSDK(object: CompressedBatchProofSDKType): CompressedBatchProof;
    toSDK(message: CompressedBatchProof): CompressedBatchProofSDKType;
    fromAmino(object: CompressedBatchProofAmino): CompressedBatchProof;
    toAmino(message: CompressedBatchProof): CompressedBatchProofAmino;
    fromAminoMsg(object: CompressedBatchProofAminoMsg): CompressedBatchProof;
    fromProtoMsg(message: CompressedBatchProofProtoMsg): CompressedBatchProof;
    toProto(message: CompressedBatchProof): Uint8Array;
    toProtoMsg(message: CompressedBatchProof): CompressedBatchProofProtoMsg;
};
export declare const CompressedBatchEntry: {
    typeUrl: string;
    is(o: any): o is CompressedBatchEntry;
    isSDK(o: any): o is CompressedBatchEntrySDKType;
    isAmino(o: any): o is CompressedBatchEntryAmino;
    encode(message: CompressedBatchEntry, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CompressedBatchEntry;
    fromJSON(object: any): CompressedBatchEntry;
    toJSON(message: CompressedBatchEntry): unknown;
    fromPartial(object: DeepPartial<CompressedBatchEntry>): CompressedBatchEntry;
    fromSDK(object: CompressedBatchEntrySDKType): CompressedBatchEntry;
    toSDK(message: CompressedBatchEntry): CompressedBatchEntrySDKType;
    fromAmino(object: CompressedBatchEntryAmino): CompressedBatchEntry;
    toAmino(message: CompressedBatchEntry): CompressedBatchEntryAmino;
    fromAminoMsg(object: CompressedBatchEntryAminoMsg): CompressedBatchEntry;
    fromProtoMsg(message: CompressedBatchEntryProtoMsg): CompressedBatchEntry;
    toProto(message: CompressedBatchEntry): Uint8Array;
    toProtoMsg(message: CompressedBatchEntry): CompressedBatchEntryProtoMsg;
};
export declare const CompressedExistenceProof: {
    typeUrl: string;
    is(o: any): o is CompressedExistenceProof;
    isSDK(o: any): o is CompressedExistenceProofSDKType;
    isAmino(o: any): o is CompressedExistenceProofAmino;
    encode(message: CompressedExistenceProof, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CompressedExistenceProof;
    fromJSON(object: any): CompressedExistenceProof;
    toJSON(message: CompressedExistenceProof): unknown;
    fromPartial(object: DeepPartial<CompressedExistenceProof>): CompressedExistenceProof;
    fromSDK(object: CompressedExistenceProofSDKType): CompressedExistenceProof;
    toSDK(message: CompressedExistenceProof): CompressedExistenceProofSDKType;
    fromAmino(object: CompressedExistenceProofAmino): CompressedExistenceProof;
    toAmino(message: CompressedExistenceProof): CompressedExistenceProofAmino;
    fromAminoMsg(object: CompressedExistenceProofAminoMsg): CompressedExistenceProof;
    fromProtoMsg(message: CompressedExistenceProofProtoMsg): CompressedExistenceProof;
    toProto(message: CompressedExistenceProof): Uint8Array;
    toProtoMsg(message: CompressedExistenceProof): CompressedExistenceProofProtoMsg;
};
export declare const CompressedNonExistenceProof: {
    typeUrl: string;
    is(o: any): o is CompressedNonExistenceProof;
    isSDK(o: any): o is CompressedNonExistenceProofSDKType;
    isAmino(o: any): o is CompressedNonExistenceProofAmino;
    encode(message: CompressedNonExistenceProof, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): CompressedNonExistenceProof;
    fromJSON(object: any): CompressedNonExistenceProof;
    toJSON(message: CompressedNonExistenceProof): unknown;
    fromPartial(object: DeepPartial<CompressedNonExistenceProof>): CompressedNonExistenceProof;
    fromSDK(object: CompressedNonExistenceProofSDKType): CompressedNonExistenceProof;
    toSDK(message: CompressedNonExistenceProof): CompressedNonExistenceProofSDKType;
    fromAmino(object: CompressedNonExistenceProofAmino): CompressedNonExistenceProof;
    toAmino(message: CompressedNonExistenceProof): CompressedNonExistenceProofAmino;
    fromAminoMsg(object: CompressedNonExistenceProofAminoMsg): CompressedNonExistenceProof;
    fromProtoMsg(message: CompressedNonExistenceProofProtoMsg): CompressedNonExistenceProof;
    toProto(message: CompressedNonExistenceProof): Uint8Array;
    toProtoMsg(message: CompressedNonExistenceProof): CompressedNonExistenceProofProtoMsg;
};
