import { BinaryReader, BinaryWriter } from "../binary";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../helpers";
import { GlobalDecoderRegistry } from "../registry";
export const protobufPackage = "ics23";
export enum HashOp {
  /** NO_HASH - NO_HASH is the default if no data passed. Note this is an illegal argument some places. */
  NO_HASH = 0,
  SHA256 = 1,
  SHA512 = 2,
  KECCAK = 3,
  RIPEMD160 = 4,
  /** BITCOIN - ripemd160(sha256(x)) */
  BITCOIN = 5,
  UNRECOGNIZED = -1,
}
export const HashOpSDKType = HashOp;
export const HashOpAmino = HashOp;
export function hashOpFromJSON(object: any): HashOp {
  switch (object) {
    case 0:
    case "NO_HASH":
      return HashOp.NO_HASH;
    case 1:
    case "SHA256":
      return HashOp.SHA256;
    case 2:
    case "SHA512":
      return HashOp.SHA512;
    case 3:
    case "KECCAK":
      return HashOp.KECCAK;
    case 4:
    case "RIPEMD160":
      return HashOp.RIPEMD160;
    case 5:
    case "BITCOIN":
      return HashOp.BITCOIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return HashOp.UNRECOGNIZED;
  }
}
export function hashOpToJSON(object: HashOp): string {
  switch (object) {
    case HashOp.NO_HASH:
      return "NO_HASH";
    case HashOp.SHA256:
      return "SHA256";
    case HashOp.SHA512:
      return "SHA512";
    case HashOp.KECCAK:
      return "KECCAK";
    case HashOp.RIPEMD160:
      return "RIPEMD160";
    case HashOp.BITCOIN:
      return "BITCOIN";
    case HashOp.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * LengthOp defines how to process the key and value of the LeafOp
 * to include length information. After encoding the length with the given
 * algorithm, the length will be prepended to the key and value bytes.
 * (Each one with it's own encoded length)
 */
export enum LengthOp {
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
  UNRECOGNIZED = -1,
}
export const LengthOpSDKType = LengthOp;
export const LengthOpAmino = LengthOp;
export function lengthOpFromJSON(object: any): LengthOp {
  switch (object) {
    case 0:
    case "NO_PREFIX":
      return LengthOp.NO_PREFIX;
    case 1:
    case "VAR_PROTO":
      return LengthOp.VAR_PROTO;
    case 2:
    case "VAR_RLP":
      return LengthOp.VAR_RLP;
    case 3:
    case "FIXED32_BIG":
      return LengthOp.FIXED32_BIG;
    case 4:
    case "FIXED32_LITTLE":
      return LengthOp.FIXED32_LITTLE;
    case 5:
    case "FIXED64_BIG":
      return LengthOp.FIXED64_BIG;
    case 6:
    case "FIXED64_LITTLE":
      return LengthOp.FIXED64_LITTLE;
    case 7:
    case "REQUIRE_32_BYTES":
      return LengthOp.REQUIRE_32_BYTES;
    case 8:
    case "REQUIRE_64_BYTES":
      return LengthOp.REQUIRE_64_BYTES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LengthOp.UNRECOGNIZED;
  }
}
export function lengthOpToJSON(object: LengthOp): string {
  switch (object) {
    case LengthOp.NO_PREFIX:
      return "NO_PREFIX";
    case LengthOp.VAR_PROTO:
      return "VAR_PROTO";
    case LengthOp.VAR_RLP:
      return "VAR_RLP";
    case LengthOp.FIXED32_BIG:
      return "FIXED32_BIG";
    case LengthOp.FIXED32_LITTLE:
      return "FIXED32_LITTLE";
    case LengthOp.FIXED64_BIG:
      return "FIXED64_BIG";
    case LengthOp.FIXED64_LITTLE:
      return "FIXED64_LITTLE";
    case LengthOp.REQUIRE_32_BYTES:
      return "REQUIRE_32_BYTES";
    case LengthOp.REQUIRE_64_BYTES:
      return "REQUIRE_64_BYTES";
    case LengthOp.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
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
export interface ExistenceProof {
  key: Uint8Array;
  value: Uint8Array;
  leaf?: LeafOp;
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
  leaf?: LeafOpAmino;
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
  leaf?: LeafOpSDKType;
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
  left?: ExistenceProof;
  right?: ExistenceProof;
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
  left?: ExistenceProofAmino;
  right?: ExistenceProofAmino;
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
  left?: ExistenceProofSDKType;
  right?: ExistenceProofSDKType;
}
/** CommitmentProof is either an ExistenceProof or a NonExistenceProof, or a Batch of such messages */
export interface CommitmentProof {
  exist?: ExistenceProof;
  nonexist?: NonExistenceProof;
  batch?: BatchProof;
  compressed?: CompressedBatchProof;
}
export interface CommitmentProofProtoMsg {
  typeUrl: "/ics23.CommitmentProof";
  value: Uint8Array;
}
/** CommitmentProof is either an ExistenceProof or a NonExistenceProof, or a Batch of such messages */
export interface CommitmentProofAmino {
  exist?: ExistenceProofAmino;
  nonexist?: NonExistenceProofAmino;
  batch?: BatchProofAmino;
  compressed?: CompressedBatchProofAmino;
}
export interface CommitmentProofAminoMsg {
  type: "/ics23.CommitmentProof";
  value: CommitmentProofAmino;
}
/** CommitmentProof is either an ExistenceProof or a NonExistenceProof, or a Batch of such messages */
export interface CommitmentProofSDKType {
  exist?: ExistenceProofSDKType;
  nonexist?: NonExistenceProofSDKType;
  batch?: BatchProofSDKType;
  compressed?: CompressedBatchProofSDKType;
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
  leafSpec?: LeafOp;
  innerSpec?: InnerSpec;
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
  leaf_spec?: LeafOpAmino;
  inner_spec?: InnerSpecAmino;
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
  leaf_spec?: LeafOpSDKType;
  inner_spec?: InnerSpecSDKType;
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
  exist?: ExistenceProof;
  nonexist?: NonExistenceProof;
}
export interface BatchEntryProtoMsg {
  typeUrl: "/ics23.BatchEntry";
  value: Uint8Array;
}
/** Use BatchEntry not CommitmentProof, to avoid recursion */
export interface BatchEntryAmino {
  exist?: ExistenceProofAmino;
  nonexist?: NonExistenceProofAmino;
}
export interface BatchEntryAminoMsg {
  type: "/ics23.BatchEntry";
  value: BatchEntryAmino;
}
/** Use BatchEntry not CommitmentProof, to avoid recursion */
export interface BatchEntrySDKType {
  exist?: ExistenceProofSDKType;
  nonexist?: NonExistenceProofSDKType;
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
  exist?: CompressedExistenceProof;
  nonexist?: CompressedNonExistenceProof;
}
export interface CompressedBatchEntryProtoMsg {
  typeUrl: "/ics23.CompressedBatchEntry";
  value: Uint8Array;
}
/** Use BatchEntry not CommitmentProof, to avoid recursion */
export interface CompressedBatchEntryAmino {
  exist?: CompressedExistenceProofAmino;
  nonexist?: CompressedNonExistenceProofAmino;
}
export interface CompressedBatchEntryAminoMsg {
  type: "/ics23.CompressedBatchEntry";
  value: CompressedBatchEntryAmino;
}
/** Use BatchEntry not CommitmentProof, to avoid recursion */
export interface CompressedBatchEntrySDKType {
  exist?: CompressedExistenceProofSDKType;
  nonexist?: CompressedNonExistenceProofSDKType;
}
export interface CompressedExistenceProof {
  key: Uint8Array;
  value: Uint8Array;
  leaf?: LeafOp;
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
  leaf?: LeafOpAmino;
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
  leaf?: LeafOpSDKType;
  path: number[];
}
export interface CompressedNonExistenceProof {
  /** TODO: remove this as unnecessary??? we prove a range */
  key: Uint8Array;
  left?: CompressedExistenceProof;
  right?: CompressedExistenceProof;
}
export interface CompressedNonExistenceProofProtoMsg {
  typeUrl: "/ics23.CompressedNonExistenceProof";
  value: Uint8Array;
}
export interface CompressedNonExistenceProofAmino {
  /** TODO: remove this as unnecessary??? we prove a range */
  key?: string;
  left?: CompressedExistenceProofAmino;
  right?: CompressedExistenceProofAmino;
}
export interface CompressedNonExistenceProofAminoMsg {
  type: "/ics23.CompressedNonExistenceProof";
  value: CompressedNonExistenceProofAmino;
}
export interface CompressedNonExistenceProofSDKType {
  key: Uint8Array;
  left?: CompressedExistenceProofSDKType;
  right?: CompressedExistenceProofSDKType;
}
function createBaseExistenceProof(): ExistenceProof {
  return {
    key: new Uint8Array(),
    value: new Uint8Array(),
    leaf: undefined,
    path: []
  };
}
export const ExistenceProof = {
  typeUrl: "/ics23.ExistenceProof",
  is(o: any): o is ExistenceProof {
    return o && (o.$typeUrl === ExistenceProof.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && Array.isArray(o.path) && (!o.path.length || InnerOp.is(o.path[0])));
  },
  isSDK(o: any): o is ExistenceProofSDKType {
    return o && (o.$typeUrl === ExistenceProof.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && Array.isArray(o.path) && (!o.path.length || InnerOp.isSDK(o.path[0])));
  },
  isAmino(o: any): o is ExistenceProofAmino {
    return o && (o.$typeUrl === ExistenceProof.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && Array.isArray(o.path) && (!o.path.length || InnerOp.isAmino(o.path[0])));
  },
  encode(message: ExistenceProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    if (message.leaf !== undefined) {
      LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.path) {
      InnerOp.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExistenceProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExistenceProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        case 3:
          message.leaf = LeafOp.decode(reader, reader.uint32());
          break;
        case 4:
          message.path.push(InnerOp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExistenceProof {
    const obj = createBaseExistenceProof();
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    if (isSet(object.value)) obj.value = bytesFromBase64(object.value);
    if (isSet(object.leaf)) obj.leaf = LeafOp.fromJSON(object.leaf);
    if (Array.isArray(object?.path)) obj.path = object.path.map((e: any) => InnerOp.fromJSON(e));
    return obj;
  },
  toJSON(message: ExistenceProof): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    message.leaf !== undefined && (obj.leaf = message.leaf ? LeafOp.toJSON(message.leaf) : undefined);
    if (message.path) {
      obj.path = message.path.map(e => e ? InnerOp.toJSON(e) : undefined);
    } else {
      obj.path = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ExistenceProof>): ExistenceProof {
    const message = createBaseExistenceProof();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    if (object.leaf !== undefined && object.leaf !== null) {
      message.leaf = LeafOp.fromPartial(object.leaf);
    }
    message.path = object.path?.map(e => InnerOp.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ExistenceProofSDKType): ExistenceProof {
    return {
      key: object?.key,
      value: object?.value,
      leaf: object.leaf ? LeafOp.fromSDK(object.leaf) : undefined,
      path: Array.isArray(object?.path) ? object.path.map((e: any) => InnerOp.fromSDK(e)) : []
    };
  },
  toSDK(message: ExistenceProof): ExistenceProofSDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    message.leaf !== undefined && (obj.leaf = message.leaf ? LeafOp.toSDK(message.leaf) : undefined);
    if (message.path) {
      obj.path = message.path.map(e => e ? InnerOp.toSDK(e) : undefined);
    } else {
      obj.path = [];
    }
    return obj;
  },
  fromAmino(object: ExistenceProofAmino): ExistenceProof {
    const message = createBaseExistenceProof();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    if (object.leaf !== undefined && object.leaf !== null) {
      message.leaf = LeafOp.fromAmino(object.leaf);
    }
    message.path = object.path?.map(e => InnerOp.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ExistenceProof): ExistenceProofAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    obj.leaf = message.leaf ? LeafOp.toAmino(message.leaf) : undefined;
    if (message.path) {
      obj.path = message.path.map(e => e ? InnerOp.toAmino(e) : undefined);
    } else {
      obj.path = [];
    }
    return obj;
  },
  fromAminoMsg(object: ExistenceProofAminoMsg): ExistenceProof {
    return ExistenceProof.fromAmino(object.value);
  },
  fromProtoMsg(message: ExistenceProofProtoMsg): ExistenceProof {
    return ExistenceProof.decode(message.value);
  },
  toProto(message: ExistenceProof): Uint8Array {
    return ExistenceProof.encode(message).finish();
  },
  toProtoMsg(message: ExistenceProof): ExistenceProofProtoMsg {
    return {
      typeUrl: "/ics23.ExistenceProof",
      value: ExistenceProof.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ExistenceProof.typeUrl, ExistenceProof);
function createBaseNonExistenceProof(): NonExistenceProof {
  return {
    key: new Uint8Array(),
    left: undefined,
    right: undefined
  };
}
export const NonExistenceProof = {
  typeUrl: "/ics23.NonExistenceProof",
  is(o: any): o is NonExistenceProof {
    return o && (o.$typeUrl === NonExistenceProof.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
  },
  isSDK(o: any): o is NonExistenceProofSDKType {
    return o && (o.$typeUrl === NonExistenceProof.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
  },
  isAmino(o: any): o is NonExistenceProofAmino {
    return o && (o.$typeUrl === NonExistenceProof.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
  },
  encode(message: NonExistenceProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.left !== undefined) {
      ExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
    }
    if (message.right !== undefined) {
      ExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NonExistenceProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNonExistenceProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.left = ExistenceProof.decode(reader, reader.uint32());
          break;
        case 3:
          message.right = ExistenceProof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NonExistenceProof {
    const obj = createBaseNonExistenceProof();
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    if (isSet(object.left)) obj.left = ExistenceProof.fromJSON(object.left);
    if (isSet(object.right)) obj.right = ExistenceProof.fromJSON(object.right);
    return obj;
  },
  toJSON(message: NonExistenceProof): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.left !== undefined && (obj.left = message.left ? ExistenceProof.toJSON(message.left) : undefined);
    message.right !== undefined && (obj.right = message.right ? ExistenceProof.toJSON(message.right) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<NonExistenceProof>): NonExistenceProof {
    const message = createBaseNonExistenceProof();
    message.key = object.key ?? new Uint8Array();
    if (object.left !== undefined && object.left !== null) {
      message.left = ExistenceProof.fromPartial(object.left);
    }
    if (object.right !== undefined && object.right !== null) {
      message.right = ExistenceProof.fromPartial(object.right);
    }
    return message;
  },
  fromSDK(object: NonExistenceProofSDKType): NonExistenceProof {
    return {
      key: object?.key,
      left: object.left ? ExistenceProof.fromSDK(object.left) : undefined,
      right: object.right ? ExistenceProof.fromSDK(object.right) : undefined
    };
  },
  toSDK(message: NonExistenceProof): NonExistenceProofSDKType {
    const obj: any = {};
    obj.key = message.key;
    message.left !== undefined && (obj.left = message.left ? ExistenceProof.toSDK(message.left) : undefined);
    message.right !== undefined && (obj.right = message.right ? ExistenceProof.toSDK(message.right) : undefined);
    return obj;
  },
  fromAmino(object: NonExistenceProofAmino): NonExistenceProof {
    const message = createBaseNonExistenceProof();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.left !== undefined && object.left !== null) {
      message.left = ExistenceProof.fromAmino(object.left);
    }
    if (object.right !== undefined && object.right !== null) {
      message.right = ExistenceProof.fromAmino(object.right);
    }
    return message;
  },
  toAmino(message: NonExistenceProof): NonExistenceProofAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.left = message.left ? ExistenceProof.toAmino(message.left) : undefined;
    obj.right = message.right ? ExistenceProof.toAmino(message.right) : undefined;
    return obj;
  },
  fromAminoMsg(object: NonExistenceProofAminoMsg): NonExistenceProof {
    return NonExistenceProof.fromAmino(object.value);
  },
  fromProtoMsg(message: NonExistenceProofProtoMsg): NonExistenceProof {
    return NonExistenceProof.decode(message.value);
  },
  toProto(message: NonExistenceProof): Uint8Array {
    return NonExistenceProof.encode(message).finish();
  },
  toProtoMsg(message: NonExistenceProof): NonExistenceProofProtoMsg {
    return {
      typeUrl: "/ics23.NonExistenceProof",
      value: NonExistenceProof.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(NonExistenceProof.typeUrl, NonExistenceProof);
function createBaseCommitmentProof(): CommitmentProof {
  return {
    exist: undefined,
    nonexist: undefined,
    batch: undefined,
    compressed: undefined
  };
}
export const CommitmentProof = {
  typeUrl: "/ics23.CommitmentProof",
  is(o: any): o is CommitmentProof {
    return o && o.$typeUrl === CommitmentProof.typeUrl;
  },
  isSDK(o: any): o is CommitmentProofSDKType {
    return o && o.$typeUrl === CommitmentProof.typeUrl;
  },
  isAmino(o: any): o is CommitmentProofAmino {
    return o && o.$typeUrl === CommitmentProof.typeUrl;
  },
  encode(message: CommitmentProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.exist !== undefined) {
      ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }
    if (message.nonexist !== undefined) {
      NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }
    if (message.batch !== undefined) {
      BatchProof.encode(message.batch, writer.uint32(26).fork()).ldelim();
    }
    if (message.compressed !== undefined) {
      CompressedBatchProof.encode(message.compressed, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CommitmentProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitmentProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exist = ExistenceProof.decode(reader, reader.uint32());
          break;
        case 2:
          message.nonexist = NonExistenceProof.decode(reader, reader.uint32());
          break;
        case 3:
          message.batch = BatchProof.decode(reader, reader.uint32());
          break;
        case 4:
          message.compressed = CompressedBatchProof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommitmentProof {
    const obj = createBaseCommitmentProof();
    if (isSet(object.exist)) obj.exist = ExistenceProof.fromJSON(object.exist);
    if (isSet(object.nonexist)) obj.nonexist = NonExistenceProof.fromJSON(object.nonexist);
    if (isSet(object.batch)) obj.batch = BatchProof.fromJSON(object.batch);
    if (isSet(object.compressed)) obj.compressed = CompressedBatchProof.fromJSON(object.compressed);
    return obj;
  },
  toJSON(message: CommitmentProof): unknown {
    const obj: any = {};
    message.exist !== undefined && (obj.exist = message.exist ? ExistenceProof.toJSON(message.exist) : undefined);
    message.nonexist !== undefined && (obj.nonexist = message.nonexist ? NonExistenceProof.toJSON(message.nonexist) : undefined);
    message.batch !== undefined && (obj.batch = message.batch ? BatchProof.toJSON(message.batch) : undefined);
    message.compressed !== undefined && (obj.compressed = message.compressed ? CompressedBatchProof.toJSON(message.compressed) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<CommitmentProof>): CommitmentProof {
    const message = createBaseCommitmentProof();
    if (object.exist !== undefined && object.exist !== null) {
      message.exist = ExistenceProof.fromPartial(object.exist);
    }
    if (object.nonexist !== undefined && object.nonexist !== null) {
      message.nonexist = NonExistenceProof.fromPartial(object.nonexist);
    }
    if (object.batch !== undefined && object.batch !== null) {
      message.batch = BatchProof.fromPartial(object.batch);
    }
    if (object.compressed !== undefined && object.compressed !== null) {
      message.compressed = CompressedBatchProof.fromPartial(object.compressed);
    }
    return message;
  },
  fromSDK(object: CommitmentProofSDKType): CommitmentProof {
    return {
      exist: object.exist ? ExistenceProof.fromSDK(object.exist) : undefined,
      nonexist: object.nonexist ? NonExistenceProof.fromSDK(object.nonexist) : undefined,
      batch: object.batch ? BatchProof.fromSDK(object.batch) : undefined,
      compressed: object.compressed ? CompressedBatchProof.fromSDK(object.compressed) : undefined
    };
  },
  toSDK(message: CommitmentProof): CommitmentProofSDKType {
    const obj: any = {};
    message.exist !== undefined && (obj.exist = message.exist ? ExistenceProof.toSDK(message.exist) : undefined);
    message.nonexist !== undefined && (obj.nonexist = message.nonexist ? NonExistenceProof.toSDK(message.nonexist) : undefined);
    message.batch !== undefined && (obj.batch = message.batch ? BatchProof.toSDK(message.batch) : undefined);
    message.compressed !== undefined && (obj.compressed = message.compressed ? CompressedBatchProof.toSDK(message.compressed) : undefined);
    return obj;
  },
  fromAmino(object: CommitmentProofAmino): CommitmentProof {
    const message = createBaseCommitmentProof();
    if (object.exist !== undefined && object.exist !== null) {
      message.exist = ExistenceProof.fromAmino(object.exist);
    }
    if (object.nonexist !== undefined && object.nonexist !== null) {
      message.nonexist = NonExistenceProof.fromAmino(object.nonexist);
    }
    if (object.batch !== undefined && object.batch !== null) {
      message.batch = BatchProof.fromAmino(object.batch);
    }
    if (object.compressed !== undefined && object.compressed !== null) {
      message.compressed = CompressedBatchProof.fromAmino(object.compressed);
    }
    return message;
  },
  toAmino(message: CommitmentProof): CommitmentProofAmino {
    const obj: any = {};
    obj.exist = message.exist ? ExistenceProof.toAmino(message.exist) : undefined;
    obj.nonexist = message.nonexist ? NonExistenceProof.toAmino(message.nonexist) : undefined;
    obj.batch = message.batch ? BatchProof.toAmino(message.batch) : undefined;
    obj.compressed = message.compressed ? CompressedBatchProof.toAmino(message.compressed) : undefined;
    return obj;
  },
  fromAminoMsg(object: CommitmentProofAminoMsg): CommitmentProof {
    return CommitmentProof.fromAmino(object.value);
  },
  fromProtoMsg(message: CommitmentProofProtoMsg): CommitmentProof {
    return CommitmentProof.decode(message.value);
  },
  toProto(message: CommitmentProof): Uint8Array {
    return CommitmentProof.encode(message).finish();
  },
  toProtoMsg(message: CommitmentProof): CommitmentProofProtoMsg {
    return {
      typeUrl: "/ics23.CommitmentProof",
      value: CommitmentProof.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CommitmentProof.typeUrl, CommitmentProof);
function createBaseLeafOp(): LeafOp {
  return {
    hash: 0,
    prehashKey: 0,
    prehashValue: 0,
    length: 0,
    prefix: new Uint8Array()
  };
}
export const LeafOp = {
  typeUrl: "/ics23.LeafOp",
  is(o: any): o is LeafOp {
    return o && (o.$typeUrl === LeafOp.typeUrl || isSet(o.hash) && isSet(o.prehashKey) && isSet(o.prehashValue) && isSet(o.length) && (o.prefix instanceof Uint8Array || typeof o.prefix === "string"));
  },
  isSDK(o: any): o is LeafOpSDKType {
    return o && (o.$typeUrl === LeafOp.typeUrl || isSet(o.hash) && isSet(o.prehash_key) && isSet(o.prehash_value) && isSet(o.length) && (o.prefix instanceof Uint8Array || typeof o.prefix === "string"));
  },
  isAmino(o: any): o is LeafOpAmino {
    return o && (o.$typeUrl === LeafOp.typeUrl || isSet(o.hash) && isSet(o.prehash_key) && isSet(o.prehash_value) && isSet(o.length) && (o.prefix instanceof Uint8Array || typeof o.prefix === "string"));
  },
  encode(message: LeafOp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== 0) {
      writer.uint32(8).int32(message.hash);
    }
    if (message.prehashKey !== 0) {
      writer.uint32(16).int32(message.prehashKey);
    }
    if (message.prehashValue !== 0) {
      writer.uint32(24).int32(message.prehashValue);
    }
    if (message.length !== 0) {
      writer.uint32(32).int32(message.length);
    }
    if (message.prefix.length !== 0) {
      writer.uint32(42).bytes(message.prefix);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LeafOp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeafOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = (reader.int32() as any);
          break;
        case 2:
          message.prehashKey = (reader.int32() as any);
          break;
        case 3:
          message.prehashValue = (reader.int32() as any);
          break;
        case 4:
          message.length = (reader.int32() as any);
          break;
        case 5:
          message.prefix = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LeafOp {
    const obj = createBaseLeafOp();
    if (isSet(object.hash)) obj.hash = hashOpFromJSON(object.hash);
    if (isSet(object.prehashKey)) obj.prehashKey = hashOpFromJSON(object.prehashKey);
    if (isSet(object.prehashValue)) obj.prehashValue = hashOpFromJSON(object.prehashValue);
    if (isSet(object.length)) obj.length = lengthOpFromJSON(object.length);
    if (isSet(object.prefix)) obj.prefix = bytesFromBase64(object.prefix);
    return obj;
  },
  toJSON(message: LeafOp): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = hashOpToJSON(message.hash));
    message.prehashKey !== undefined && (obj.prehashKey = hashOpToJSON(message.prehashKey));
    message.prehashValue !== undefined && (obj.prehashValue = hashOpToJSON(message.prehashValue));
    message.length !== undefined && (obj.length = lengthOpToJSON(message.length));
    message.prefix !== undefined && (obj.prefix = base64FromBytes(message.prefix !== undefined ? message.prefix : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<LeafOp>): LeafOp {
    const message = createBaseLeafOp();
    message.hash = object.hash ?? 0;
    message.prehashKey = object.prehashKey ?? 0;
    message.prehashValue = object.prehashValue ?? 0;
    message.length = object.length ?? 0;
    message.prefix = object.prefix ?? new Uint8Array();
    return message;
  },
  fromSDK(object: LeafOpSDKType): LeafOp {
    return {
      hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : -1,
      prehashKey: isSet(object.prehash_key) ? hashOpFromJSON(object.prehash_key) : -1,
      prehashValue: isSet(object.prehash_value) ? hashOpFromJSON(object.prehash_value) : -1,
      length: isSet(object.length) ? lengthOpFromJSON(object.length) : -1,
      prefix: object?.prefix
    };
  },
  toSDK(message: LeafOp): LeafOpSDKType {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = hashOpToJSON(message.hash));
    message.prehashKey !== undefined && (obj.prehash_key = hashOpToJSON(message.prehashKey));
    message.prehashValue !== undefined && (obj.prehash_value = hashOpToJSON(message.prehashValue));
    message.length !== undefined && (obj.length = lengthOpToJSON(message.length));
    obj.prefix = message.prefix;
    return obj;
  },
  fromAmino(object: LeafOpAmino): LeafOp {
    const message = createBaseLeafOp();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = hashOpFromJSON(object.hash);
    }
    if (object.prehash_key !== undefined && object.prehash_key !== null) {
      message.prehashKey = hashOpFromJSON(object.prehash_key);
    }
    if (object.prehash_value !== undefined && object.prehash_value !== null) {
      message.prehashValue = hashOpFromJSON(object.prehash_value);
    }
    if (object.length !== undefined && object.length !== null) {
      message.length = lengthOpFromJSON(object.length);
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = bytesFromBase64(object.prefix);
    }
    return message;
  },
  toAmino(message: LeafOp): LeafOpAmino {
    const obj: any = {};
    obj.hash = hashOpToJSON(message.hash);
    obj.prehash_key = hashOpToJSON(message.prehashKey);
    obj.prehash_value = hashOpToJSON(message.prehashValue);
    obj.length = lengthOpToJSON(message.length);
    obj.prefix = message.prefix ? base64FromBytes(message.prefix) : undefined;
    return obj;
  },
  fromAminoMsg(object: LeafOpAminoMsg): LeafOp {
    return LeafOp.fromAmino(object.value);
  },
  fromProtoMsg(message: LeafOpProtoMsg): LeafOp {
    return LeafOp.decode(message.value);
  },
  toProto(message: LeafOp): Uint8Array {
    return LeafOp.encode(message).finish();
  },
  toProtoMsg(message: LeafOp): LeafOpProtoMsg {
    return {
      typeUrl: "/ics23.LeafOp",
      value: LeafOp.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LeafOp.typeUrl, LeafOp);
function createBaseInnerOp(): InnerOp {
  return {
    hash: 0,
    prefix: new Uint8Array(),
    suffix: new Uint8Array()
  };
}
export const InnerOp = {
  typeUrl: "/ics23.InnerOp",
  is(o: any): o is InnerOp {
    return o && (o.$typeUrl === InnerOp.typeUrl || isSet(o.hash) && (o.prefix instanceof Uint8Array || typeof o.prefix === "string") && (o.suffix instanceof Uint8Array || typeof o.suffix === "string"));
  },
  isSDK(o: any): o is InnerOpSDKType {
    return o && (o.$typeUrl === InnerOp.typeUrl || isSet(o.hash) && (o.prefix instanceof Uint8Array || typeof o.prefix === "string") && (o.suffix instanceof Uint8Array || typeof o.suffix === "string"));
  },
  isAmino(o: any): o is InnerOpAmino {
    return o && (o.$typeUrl === InnerOp.typeUrl || isSet(o.hash) && (o.prefix instanceof Uint8Array || typeof o.prefix === "string") && (o.suffix instanceof Uint8Array || typeof o.suffix === "string"));
  },
  encode(message: InnerOp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash !== 0) {
      writer.uint32(8).int32(message.hash);
    }
    if (message.prefix.length !== 0) {
      writer.uint32(18).bytes(message.prefix);
    }
    if (message.suffix.length !== 0) {
      writer.uint32(26).bytes(message.suffix);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InnerOp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInnerOp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = (reader.int32() as any);
          break;
        case 2:
          message.prefix = reader.bytes();
          break;
        case 3:
          message.suffix = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InnerOp {
    const obj = createBaseInnerOp();
    if (isSet(object.hash)) obj.hash = hashOpFromJSON(object.hash);
    if (isSet(object.prefix)) obj.prefix = bytesFromBase64(object.prefix);
    if (isSet(object.suffix)) obj.suffix = bytesFromBase64(object.suffix);
    return obj;
  },
  toJSON(message: InnerOp): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = hashOpToJSON(message.hash));
    message.prefix !== undefined && (obj.prefix = base64FromBytes(message.prefix !== undefined ? message.prefix : new Uint8Array()));
    message.suffix !== undefined && (obj.suffix = base64FromBytes(message.suffix !== undefined ? message.suffix : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<InnerOp>): InnerOp {
    const message = createBaseInnerOp();
    message.hash = object.hash ?? 0;
    message.prefix = object.prefix ?? new Uint8Array();
    message.suffix = object.suffix ?? new Uint8Array();
    return message;
  },
  fromSDK(object: InnerOpSDKType): InnerOp {
    return {
      hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : -1,
      prefix: object?.prefix,
      suffix: object?.suffix
    };
  },
  toSDK(message: InnerOp): InnerOpSDKType {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = hashOpToJSON(message.hash));
    obj.prefix = message.prefix;
    obj.suffix = message.suffix;
    return obj;
  },
  fromAmino(object: InnerOpAmino): InnerOp {
    const message = createBaseInnerOp();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = hashOpFromJSON(object.hash);
    }
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = bytesFromBase64(object.prefix);
    }
    if (object.suffix !== undefined && object.suffix !== null) {
      message.suffix = bytesFromBase64(object.suffix);
    }
    return message;
  },
  toAmino(message: InnerOp): InnerOpAmino {
    const obj: any = {};
    obj.hash = hashOpToJSON(message.hash);
    obj.prefix = message.prefix ? base64FromBytes(message.prefix) : undefined;
    obj.suffix = message.suffix ? base64FromBytes(message.suffix) : undefined;
    return obj;
  },
  fromAminoMsg(object: InnerOpAminoMsg): InnerOp {
    return InnerOp.fromAmino(object.value);
  },
  fromProtoMsg(message: InnerOpProtoMsg): InnerOp {
    return InnerOp.decode(message.value);
  },
  toProto(message: InnerOp): Uint8Array {
    return InnerOp.encode(message).finish();
  },
  toProtoMsg(message: InnerOp): InnerOpProtoMsg {
    return {
      typeUrl: "/ics23.InnerOp",
      value: InnerOp.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(InnerOp.typeUrl, InnerOp);
function createBaseProofSpec(): ProofSpec {
  return {
    leafSpec: undefined,
    innerSpec: undefined,
    maxDepth: 0,
    minDepth: 0
  };
}
export const ProofSpec = {
  typeUrl: "/ics23.ProofSpec",
  is(o: any): o is ProofSpec {
    return o && (o.$typeUrl === ProofSpec.typeUrl || typeof o.maxDepth === "number" && typeof o.minDepth === "number");
  },
  isSDK(o: any): o is ProofSpecSDKType {
    return o && (o.$typeUrl === ProofSpec.typeUrl || typeof o.max_depth === "number" && typeof o.min_depth === "number");
  },
  isAmino(o: any): o is ProofSpecAmino {
    return o && (o.$typeUrl === ProofSpec.typeUrl || typeof o.max_depth === "number" && typeof o.min_depth === "number");
  },
  encode(message: ProofSpec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.leafSpec !== undefined) {
      LeafOp.encode(message.leafSpec, writer.uint32(10).fork()).ldelim();
    }
    if (message.innerSpec !== undefined) {
      InnerSpec.encode(message.innerSpec, writer.uint32(18).fork()).ldelim();
    }
    if (message.maxDepth !== undefined) {
      writer.uint32(24).int32(message.maxDepth);
    }
    if (message.minDepth !== undefined) {
      writer.uint32(32).int32(message.minDepth);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProofSpec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProofSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leafSpec = LeafOp.decode(reader, reader.uint32());
          break;
        case 2:
          message.innerSpec = InnerSpec.decode(reader, reader.uint32());
          break;
        case 3:
          message.maxDepth = reader.int32();
          break;
        case 4:
          message.minDepth = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ProofSpec {
    const obj = createBaseProofSpec();
    if (isSet(object.leafSpec)) obj.leafSpec = LeafOp.fromJSON(object.leafSpec);
    if (isSet(object.innerSpec)) obj.innerSpec = InnerSpec.fromJSON(object.innerSpec);
    if (isSet(object.maxDepth)) obj.maxDepth = Number(object.maxDepth);
    if (isSet(object.minDepth)) obj.minDepth = Number(object.minDepth);
    return obj;
  },
  toJSON(message: ProofSpec): unknown {
    const obj: any = {};
    message.leafSpec !== undefined && (obj.leafSpec = message.leafSpec ? LeafOp.toJSON(message.leafSpec) : undefined);
    message.innerSpec !== undefined && (obj.innerSpec = message.innerSpec ? InnerSpec.toJSON(message.innerSpec) : undefined);
    message.maxDepth !== undefined && (obj.maxDepth = Math.round(message.maxDepth));
    message.minDepth !== undefined && (obj.minDepth = Math.round(message.minDepth));
    return obj;
  },
  fromPartial(object: DeepPartial<ProofSpec>): ProofSpec {
    const message = createBaseProofSpec();
    if (object.leafSpec !== undefined && object.leafSpec !== null) {
      message.leafSpec = LeafOp.fromPartial(object.leafSpec);
    }
    if (object.innerSpec !== undefined && object.innerSpec !== null) {
      message.innerSpec = InnerSpec.fromPartial(object.innerSpec);
    }
    message.maxDepth = object.maxDepth ?? 0;
    message.minDepth = object.minDepth ?? 0;
    return message;
  },
  fromSDK(object: ProofSpecSDKType): ProofSpec {
    return {
      leafSpec: object.leaf_spec ? LeafOp.fromSDK(object.leaf_spec) : undefined,
      innerSpec: object.inner_spec ? InnerSpec.fromSDK(object.inner_spec) : undefined,
      maxDepth: object?.max_depth,
      minDepth: object?.min_depth
    };
  },
  toSDK(message: ProofSpec): ProofSpecSDKType {
    const obj: any = {};
    message.leafSpec !== undefined && (obj.leaf_spec = message.leafSpec ? LeafOp.toSDK(message.leafSpec) : undefined);
    message.innerSpec !== undefined && (obj.inner_spec = message.innerSpec ? InnerSpec.toSDK(message.innerSpec) : undefined);
    obj.max_depth = message.maxDepth;
    obj.min_depth = message.minDepth;
    return obj;
  },
  fromAmino(object: ProofSpecAmino): ProofSpec {
    const message = createBaseProofSpec();
    if (object.leaf_spec !== undefined && object.leaf_spec !== null) {
      message.leafSpec = LeafOp.fromAmino(object.leaf_spec);
    }
    if (object.inner_spec !== undefined && object.inner_spec !== null) {
      message.innerSpec = InnerSpec.fromAmino(object.inner_spec);
    }
    if (object.max_depth !== undefined && object.max_depth !== null) {
      message.maxDepth = object.max_depth;
    }
    if (object.min_depth !== undefined && object.min_depth !== null) {
      message.minDepth = object.min_depth;
    }
    return message;
  },
  toAmino(message: ProofSpec): ProofSpecAmino {
    const obj: any = {};
    obj.leaf_spec = message.leafSpec ? LeafOp.toAmino(message.leafSpec) : undefined;
    obj.inner_spec = message.innerSpec ? InnerSpec.toAmino(message.innerSpec) : undefined;
    obj.max_depth = message.maxDepth;
    obj.min_depth = message.minDepth;
    return obj;
  },
  fromAminoMsg(object: ProofSpecAminoMsg): ProofSpec {
    return ProofSpec.fromAmino(object.value);
  },
  fromProtoMsg(message: ProofSpecProtoMsg): ProofSpec {
    return ProofSpec.decode(message.value);
  },
  toProto(message: ProofSpec): Uint8Array {
    return ProofSpec.encode(message).finish();
  },
  toProtoMsg(message: ProofSpec): ProofSpecProtoMsg {
    return {
      typeUrl: "/ics23.ProofSpec",
      value: ProofSpec.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProofSpec.typeUrl, ProofSpec);
function createBaseInnerSpec(): InnerSpec {
  return {
    childOrder: [],
    childSize: 0,
    minPrefixLength: 0,
    maxPrefixLength: 0,
    emptyChild: new Uint8Array(),
    hash: 0
  };
}
export const InnerSpec = {
  typeUrl: "/ics23.InnerSpec",
  is(o: any): o is InnerSpec {
    return o && (o.$typeUrl === InnerSpec.typeUrl || Array.isArray(o.childOrder) && (!o.childOrder.length || typeof o.childOrder[0] === "number") && typeof o.childSize === "number" && typeof o.minPrefixLength === "number" && typeof o.maxPrefixLength === "number" && (o.emptyChild instanceof Uint8Array || typeof o.emptyChild === "string") && isSet(o.hash));
  },
  isSDK(o: any): o is InnerSpecSDKType {
    return o && (o.$typeUrl === InnerSpec.typeUrl || Array.isArray(o.child_order) && (!o.child_order.length || typeof o.child_order[0] === "number") && typeof o.child_size === "number" && typeof o.min_prefix_length === "number" && typeof o.max_prefix_length === "number" && (o.empty_child instanceof Uint8Array || typeof o.empty_child === "string") && isSet(o.hash));
  },
  isAmino(o: any): o is InnerSpecAmino {
    return o && (o.$typeUrl === InnerSpec.typeUrl || Array.isArray(o.child_order) && (!o.child_order.length || typeof o.child_order[0] === "number") && typeof o.child_size === "number" && typeof o.min_prefix_length === "number" && typeof o.max_prefix_length === "number" && (o.empty_child instanceof Uint8Array || typeof o.empty_child === "string") && isSet(o.hash));
  },
  encode(message: InnerSpec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.childOrder) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.childSize !== undefined) {
      writer.uint32(16).int32(message.childSize);
    }
    if (message.minPrefixLength !== undefined) {
      writer.uint32(24).int32(message.minPrefixLength);
    }
    if (message.maxPrefixLength !== undefined) {
      writer.uint32(32).int32(message.maxPrefixLength);
    }
    if (message.emptyChild.length !== 0) {
      writer.uint32(42).bytes(message.emptyChild);
    }
    if (message.hash !== 0) {
      writer.uint32(48).int32(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InnerSpec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInnerSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.childOrder.push(reader.int32());
            }
          } else {
            message.childOrder.push(reader.int32());
          }
          break;
        case 2:
          message.childSize = reader.int32();
          break;
        case 3:
          message.minPrefixLength = reader.int32();
          break;
        case 4:
          message.maxPrefixLength = reader.int32();
          break;
        case 5:
          message.emptyChild = reader.bytes();
          break;
        case 6:
          message.hash = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InnerSpec {
    const obj = createBaseInnerSpec();
    if (Array.isArray(object?.childOrder)) obj.childOrder = object.childOrder.map((e: any) => Number(e));
    if (isSet(object.childSize)) obj.childSize = Number(object.childSize);
    if (isSet(object.minPrefixLength)) obj.minPrefixLength = Number(object.minPrefixLength);
    if (isSet(object.maxPrefixLength)) obj.maxPrefixLength = Number(object.maxPrefixLength);
    if (isSet(object.emptyChild)) obj.emptyChild = bytesFromBase64(object.emptyChild);
    if (isSet(object.hash)) obj.hash = hashOpFromJSON(object.hash);
    return obj;
  },
  toJSON(message: InnerSpec): unknown {
    const obj: any = {};
    if (message.childOrder) {
      obj.childOrder = message.childOrder.map(e => Math.round(e));
    } else {
      obj.childOrder = [];
    }
    message.childSize !== undefined && (obj.childSize = Math.round(message.childSize));
    message.minPrefixLength !== undefined && (obj.minPrefixLength = Math.round(message.minPrefixLength));
    message.maxPrefixLength !== undefined && (obj.maxPrefixLength = Math.round(message.maxPrefixLength));
    message.emptyChild !== undefined && (obj.emptyChild = base64FromBytes(message.emptyChild !== undefined ? message.emptyChild : new Uint8Array()));
    message.hash !== undefined && (obj.hash = hashOpToJSON(message.hash));
    return obj;
  },
  fromPartial(object: DeepPartial<InnerSpec>): InnerSpec {
    const message = createBaseInnerSpec();
    message.childOrder = object.childOrder?.map(e => e) || [];
    message.childSize = object.childSize ?? 0;
    message.minPrefixLength = object.minPrefixLength ?? 0;
    message.maxPrefixLength = object.maxPrefixLength ?? 0;
    message.emptyChild = object.emptyChild ?? new Uint8Array();
    message.hash = object.hash ?? 0;
    return message;
  },
  fromSDK(object: InnerSpecSDKType): InnerSpec {
    return {
      childOrder: Array.isArray(object?.child_order) ? object.child_order.map((e: any) => e) : [],
      childSize: object?.child_size,
      minPrefixLength: object?.min_prefix_length,
      maxPrefixLength: object?.max_prefix_length,
      emptyChild: object?.empty_child,
      hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : -1
    };
  },
  toSDK(message: InnerSpec): InnerSpecSDKType {
    const obj: any = {};
    if (message.childOrder) {
      obj.child_order = message.childOrder.map(e => e);
    } else {
      obj.child_order = [];
    }
    obj.child_size = message.childSize;
    obj.min_prefix_length = message.minPrefixLength;
    obj.max_prefix_length = message.maxPrefixLength;
    obj.empty_child = message.emptyChild;
    message.hash !== undefined && (obj.hash = hashOpToJSON(message.hash));
    return obj;
  },
  fromAmino(object: InnerSpecAmino): InnerSpec {
    const message = createBaseInnerSpec();
    message.childOrder = object.child_order?.map(e => e) || [];
    if (object.child_size !== undefined && object.child_size !== null) {
      message.childSize = object.child_size;
    }
    if (object.min_prefix_length !== undefined && object.min_prefix_length !== null) {
      message.minPrefixLength = object.min_prefix_length;
    }
    if (object.max_prefix_length !== undefined && object.max_prefix_length !== null) {
      message.maxPrefixLength = object.max_prefix_length;
    }
    if (object.empty_child !== undefined && object.empty_child !== null) {
      message.emptyChild = bytesFromBase64(object.empty_child);
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = hashOpFromJSON(object.hash);
    }
    return message;
  },
  toAmino(message: InnerSpec): InnerSpecAmino {
    const obj: any = {};
    if (message.childOrder) {
      obj.child_order = message.childOrder.map(e => e);
    } else {
      obj.child_order = [];
    }
    obj.child_size = message.childSize;
    obj.min_prefix_length = message.minPrefixLength;
    obj.max_prefix_length = message.maxPrefixLength;
    obj.empty_child = message.emptyChild ? base64FromBytes(message.emptyChild) : undefined;
    obj.hash = hashOpToJSON(message.hash);
    return obj;
  },
  fromAminoMsg(object: InnerSpecAminoMsg): InnerSpec {
    return InnerSpec.fromAmino(object.value);
  },
  fromProtoMsg(message: InnerSpecProtoMsg): InnerSpec {
    return InnerSpec.decode(message.value);
  },
  toProto(message: InnerSpec): Uint8Array {
    return InnerSpec.encode(message).finish();
  },
  toProtoMsg(message: InnerSpec): InnerSpecProtoMsg {
    return {
      typeUrl: "/ics23.InnerSpec",
      value: InnerSpec.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(InnerSpec.typeUrl, InnerSpec);
function createBaseBatchProof(): BatchProof {
  return {
    entries: []
  };
}
export const BatchProof = {
  typeUrl: "/ics23.BatchProof",
  is(o: any): o is BatchProof {
    return o && (o.$typeUrl === BatchProof.typeUrl || Array.isArray(o.entries) && (!o.entries.length || BatchEntry.is(o.entries[0])));
  },
  isSDK(o: any): o is BatchProofSDKType {
    return o && (o.$typeUrl === BatchProof.typeUrl || Array.isArray(o.entries) && (!o.entries.length || BatchEntry.isSDK(o.entries[0])));
  },
  isAmino(o: any): o is BatchProofAmino {
    return o && (o.$typeUrl === BatchProof.typeUrl || Array.isArray(o.entries) && (!o.entries.length || BatchEntry.isAmino(o.entries[0])));
  },
  encode(message: BatchProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.entries) {
      BatchEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BatchProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(BatchEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchProof {
    const obj = createBaseBatchProof();
    if (Array.isArray(object?.entries)) obj.entries = object.entries.map((e: any) => BatchEntry.fromJSON(e));
    return obj;
  },
  toJSON(message: BatchProof): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? BatchEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<BatchProof>): BatchProof {
    const message = createBaseBatchProof();
    message.entries = object.entries?.map(e => BatchEntry.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: BatchProofSDKType): BatchProof {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => BatchEntry.fromSDK(e)) : []
    };
  },
  toSDK(message: BatchProof): BatchProofSDKType {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? BatchEntry.toSDK(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromAmino(object: BatchProofAmino): BatchProof {
    const message = createBaseBatchProof();
    message.entries = object.entries?.map(e => BatchEntry.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: BatchProof): BatchProofAmino {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? BatchEntry.toAmino(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },
  fromAminoMsg(object: BatchProofAminoMsg): BatchProof {
    return BatchProof.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchProofProtoMsg): BatchProof {
    return BatchProof.decode(message.value);
  },
  toProto(message: BatchProof): Uint8Array {
    return BatchProof.encode(message).finish();
  },
  toProtoMsg(message: BatchProof): BatchProofProtoMsg {
    return {
      typeUrl: "/ics23.BatchProof",
      value: BatchProof.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BatchProof.typeUrl, BatchProof);
function createBaseBatchEntry(): BatchEntry {
  return {
    exist: undefined,
    nonexist: undefined
  };
}
export const BatchEntry = {
  typeUrl: "/ics23.BatchEntry",
  is(o: any): o is BatchEntry {
    return o && o.$typeUrl === BatchEntry.typeUrl;
  },
  isSDK(o: any): o is BatchEntrySDKType {
    return o && o.$typeUrl === BatchEntry.typeUrl;
  },
  isAmino(o: any): o is BatchEntryAmino {
    return o && o.$typeUrl === BatchEntry.typeUrl;
  },
  encode(message: BatchEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.exist !== undefined) {
      ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }
    if (message.nonexist !== undefined) {
      NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BatchEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exist = ExistenceProof.decode(reader, reader.uint32());
          break;
        case 2:
          message.nonexist = NonExistenceProof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BatchEntry {
    const obj = createBaseBatchEntry();
    if (isSet(object.exist)) obj.exist = ExistenceProof.fromJSON(object.exist);
    if (isSet(object.nonexist)) obj.nonexist = NonExistenceProof.fromJSON(object.nonexist);
    return obj;
  },
  toJSON(message: BatchEntry): unknown {
    const obj: any = {};
    message.exist !== undefined && (obj.exist = message.exist ? ExistenceProof.toJSON(message.exist) : undefined);
    message.nonexist !== undefined && (obj.nonexist = message.nonexist ? NonExistenceProof.toJSON(message.nonexist) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<BatchEntry>): BatchEntry {
    const message = createBaseBatchEntry();
    if (object.exist !== undefined && object.exist !== null) {
      message.exist = ExistenceProof.fromPartial(object.exist);
    }
    if (object.nonexist !== undefined && object.nonexist !== null) {
      message.nonexist = NonExistenceProof.fromPartial(object.nonexist);
    }
    return message;
  },
  fromSDK(object: BatchEntrySDKType): BatchEntry {
    return {
      exist: object.exist ? ExistenceProof.fromSDK(object.exist) : undefined,
      nonexist: object.nonexist ? NonExistenceProof.fromSDK(object.nonexist) : undefined
    };
  },
  toSDK(message: BatchEntry): BatchEntrySDKType {
    const obj: any = {};
    message.exist !== undefined && (obj.exist = message.exist ? ExistenceProof.toSDK(message.exist) : undefined);
    message.nonexist !== undefined && (obj.nonexist = message.nonexist ? NonExistenceProof.toSDK(message.nonexist) : undefined);
    return obj;
  },
  fromAmino(object: BatchEntryAmino): BatchEntry {
    const message = createBaseBatchEntry();
    if (object.exist !== undefined && object.exist !== null) {
      message.exist = ExistenceProof.fromAmino(object.exist);
    }
    if (object.nonexist !== undefined && object.nonexist !== null) {
      message.nonexist = NonExistenceProof.fromAmino(object.nonexist);
    }
    return message;
  },
  toAmino(message: BatchEntry): BatchEntryAmino {
    const obj: any = {};
    obj.exist = message.exist ? ExistenceProof.toAmino(message.exist) : undefined;
    obj.nonexist = message.nonexist ? NonExistenceProof.toAmino(message.nonexist) : undefined;
    return obj;
  },
  fromAminoMsg(object: BatchEntryAminoMsg): BatchEntry {
    return BatchEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: BatchEntryProtoMsg): BatchEntry {
    return BatchEntry.decode(message.value);
  },
  toProto(message: BatchEntry): Uint8Array {
    return BatchEntry.encode(message).finish();
  },
  toProtoMsg(message: BatchEntry): BatchEntryProtoMsg {
    return {
      typeUrl: "/ics23.BatchEntry",
      value: BatchEntry.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BatchEntry.typeUrl, BatchEntry);
function createBaseCompressedBatchProof(): CompressedBatchProof {
  return {
    entries: [],
    lookupInners: []
  };
}
export const CompressedBatchProof = {
  typeUrl: "/ics23.CompressedBatchProof",
  is(o: any): o is CompressedBatchProof {
    return o && (o.$typeUrl === CompressedBatchProof.typeUrl || Array.isArray(o.entries) && (!o.entries.length || CompressedBatchEntry.is(o.entries[0])) && Array.isArray(o.lookupInners) && (!o.lookupInners.length || InnerOp.is(o.lookupInners[0])));
  },
  isSDK(o: any): o is CompressedBatchProofSDKType {
    return o && (o.$typeUrl === CompressedBatchProof.typeUrl || Array.isArray(o.entries) && (!o.entries.length || CompressedBatchEntry.isSDK(o.entries[0])) && Array.isArray(o.lookup_inners) && (!o.lookup_inners.length || InnerOp.isSDK(o.lookup_inners[0])));
  },
  isAmino(o: any): o is CompressedBatchProofAmino {
    return o && (o.$typeUrl === CompressedBatchProof.typeUrl || Array.isArray(o.entries) && (!o.entries.length || CompressedBatchEntry.isAmino(o.entries[0])) && Array.isArray(o.lookup_inners) && (!o.lookup_inners.length || InnerOp.isAmino(o.lookup_inners[0])));
  },
  encode(message: CompressedBatchProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.entries) {
      CompressedBatchEntry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.lookupInners) {
      InnerOp.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CompressedBatchProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompressedBatchProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entries.push(CompressedBatchEntry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.lookupInners.push(InnerOp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CompressedBatchProof {
    const obj = createBaseCompressedBatchProof();
    if (Array.isArray(object?.entries)) obj.entries = object.entries.map((e: any) => CompressedBatchEntry.fromJSON(e));
    if (Array.isArray(object?.lookupInners)) obj.lookupInners = object.lookupInners.map((e: any) => InnerOp.fromJSON(e));
    return obj;
  },
  toJSON(message: CompressedBatchProof): unknown {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? CompressedBatchEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    if (message.lookupInners) {
      obj.lookupInners = message.lookupInners.map(e => e ? InnerOp.toJSON(e) : undefined);
    } else {
      obj.lookupInners = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<CompressedBatchProof>): CompressedBatchProof {
    const message = createBaseCompressedBatchProof();
    message.entries = object.entries?.map(e => CompressedBatchEntry.fromPartial(e)) || [];
    message.lookupInners = object.lookupInners?.map(e => InnerOp.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: CompressedBatchProofSDKType): CompressedBatchProof {
    return {
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => CompressedBatchEntry.fromSDK(e)) : [],
      lookupInners: Array.isArray(object?.lookup_inners) ? object.lookup_inners.map((e: any) => InnerOp.fromSDK(e)) : []
    };
  },
  toSDK(message: CompressedBatchProof): CompressedBatchProofSDKType {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? CompressedBatchEntry.toSDK(e) : undefined);
    } else {
      obj.entries = [];
    }
    if (message.lookupInners) {
      obj.lookup_inners = message.lookupInners.map(e => e ? InnerOp.toSDK(e) : undefined);
    } else {
      obj.lookup_inners = [];
    }
    return obj;
  },
  fromAmino(object: CompressedBatchProofAmino): CompressedBatchProof {
    const message = createBaseCompressedBatchProof();
    message.entries = object.entries?.map(e => CompressedBatchEntry.fromAmino(e)) || [];
    message.lookupInners = object.lookup_inners?.map(e => InnerOp.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CompressedBatchProof): CompressedBatchProofAmino {
    const obj: any = {};
    if (message.entries) {
      obj.entries = message.entries.map(e => e ? CompressedBatchEntry.toAmino(e) : undefined);
    } else {
      obj.entries = [];
    }
    if (message.lookupInners) {
      obj.lookup_inners = message.lookupInners.map(e => e ? InnerOp.toAmino(e) : undefined);
    } else {
      obj.lookup_inners = [];
    }
    return obj;
  },
  fromAminoMsg(object: CompressedBatchProofAminoMsg): CompressedBatchProof {
    return CompressedBatchProof.fromAmino(object.value);
  },
  fromProtoMsg(message: CompressedBatchProofProtoMsg): CompressedBatchProof {
    return CompressedBatchProof.decode(message.value);
  },
  toProto(message: CompressedBatchProof): Uint8Array {
    return CompressedBatchProof.encode(message).finish();
  },
  toProtoMsg(message: CompressedBatchProof): CompressedBatchProofProtoMsg {
    return {
      typeUrl: "/ics23.CompressedBatchProof",
      value: CompressedBatchProof.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CompressedBatchProof.typeUrl, CompressedBatchProof);
function createBaseCompressedBatchEntry(): CompressedBatchEntry {
  return {
    exist: undefined,
    nonexist: undefined
  };
}
export const CompressedBatchEntry = {
  typeUrl: "/ics23.CompressedBatchEntry",
  is(o: any): o is CompressedBatchEntry {
    return o && o.$typeUrl === CompressedBatchEntry.typeUrl;
  },
  isSDK(o: any): o is CompressedBatchEntrySDKType {
    return o && o.$typeUrl === CompressedBatchEntry.typeUrl;
  },
  isAmino(o: any): o is CompressedBatchEntryAmino {
    return o && o.$typeUrl === CompressedBatchEntry.typeUrl;
  },
  encode(message: CompressedBatchEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.exist !== undefined) {
      CompressedExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
    }
    if (message.nonexist !== undefined) {
      CompressedNonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CompressedBatchEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompressedBatchEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exist = CompressedExistenceProof.decode(reader, reader.uint32());
          break;
        case 2:
          message.nonexist = CompressedNonExistenceProof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CompressedBatchEntry {
    const obj = createBaseCompressedBatchEntry();
    if (isSet(object.exist)) obj.exist = CompressedExistenceProof.fromJSON(object.exist);
    if (isSet(object.nonexist)) obj.nonexist = CompressedNonExistenceProof.fromJSON(object.nonexist);
    return obj;
  },
  toJSON(message: CompressedBatchEntry): unknown {
    const obj: any = {};
    message.exist !== undefined && (obj.exist = message.exist ? CompressedExistenceProof.toJSON(message.exist) : undefined);
    message.nonexist !== undefined && (obj.nonexist = message.nonexist ? CompressedNonExistenceProof.toJSON(message.nonexist) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<CompressedBatchEntry>): CompressedBatchEntry {
    const message = createBaseCompressedBatchEntry();
    if (object.exist !== undefined && object.exist !== null) {
      message.exist = CompressedExistenceProof.fromPartial(object.exist);
    }
    if (object.nonexist !== undefined && object.nonexist !== null) {
      message.nonexist = CompressedNonExistenceProof.fromPartial(object.nonexist);
    }
    return message;
  },
  fromSDK(object: CompressedBatchEntrySDKType): CompressedBatchEntry {
    return {
      exist: object.exist ? CompressedExistenceProof.fromSDK(object.exist) : undefined,
      nonexist: object.nonexist ? CompressedNonExistenceProof.fromSDK(object.nonexist) : undefined
    };
  },
  toSDK(message: CompressedBatchEntry): CompressedBatchEntrySDKType {
    const obj: any = {};
    message.exist !== undefined && (obj.exist = message.exist ? CompressedExistenceProof.toSDK(message.exist) : undefined);
    message.nonexist !== undefined && (obj.nonexist = message.nonexist ? CompressedNonExistenceProof.toSDK(message.nonexist) : undefined);
    return obj;
  },
  fromAmino(object: CompressedBatchEntryAmino): CompressedBatchEntry {
    const message = createBaseCompressedBatchEntry();
    if (object.exist !== undefined && object.exist !== null) {
      message.exist = CompressedExistenceProof.fromAmino(object.exist);
    }
    if (object.nonexist !== undefined && object.nonexist !== null) {
      message.nonexist = CompressedNonExistenceProof.fromAmino(object.nonexist);
    }
    return message;
  },
  toAmino(message: CompressedBatchEntry): CompressedBatchEntryAmino {
    const obj: any = {};
    obj.exist = message.exist ? CompressedExistenceProof.toAmino(message.exist) : undefined;
    obj.nonexist = message.nonexist ? CompressedNonExistenceProof.toAmino(message.nonexist) : undefined;
    return obj;
  },
  fromAminoMsg(object: CompressedBatchEntryAminoMsg): CompressedBatchEntry {
    return CompressedBatchEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: CompressedBatchEntryProtoMsg): CompressedBatchEntry {
    return CompressedBatchEntry.decode(message.value);
  },
  toProto(message: CompressedBatchEntry): Uint8Array {
    return CompressedBatchEntry.encode(message).finish();
  },
  toProtoMsg(message: CompressedBatchEntry): CompressedBatchEntryProtoMsg {
    return {
      typeUrl: "/ics23.CompressedBatchEntry",
      value: CompressedBatchEntry.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CompressedBatchEntry.typeUrl, CompressedBatchEntry);
function createBaseCompressedExistenceProof(): CompressedExistenceProof {
  return {
    key: new Uint8Array(),
    value: new Uint8Array(),
    leaf: undefined,
    path: []
  };
}
export const CompressedExistenceProof = {
  typeUrl: "/ics23.CompressedExistenceProof",
  is(o: any): o is CompressedExistenceProof {
    return o && (o.$typeUrl === CompressedExistenceProof.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && Array.isArray(o.path) && (!o.path.length || typeof o.path[0] === "number"));
  },
  isSDK(o: any): o is CompressedExistenceProofSDKType {
    return o && (o.$typeUrl === CompressedExistenceProof.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && Array.isArray(o.path) && (!o.path.length || typeof o.path[0] === "number"));
  },
  isAmino(o: any): o is CompressedExistenceProofAmino {
    return o && (o.$typeUrl === CompressedExistenceProof.typeUrl || (o.key instanceof Uint8Array || typeof o.key === "string") && (o.value instanceof Uint8Array || typeof o.value === "string") && Array.isArray(o.path) && (!o.path.length || typeof o.path[0] === "number"));
  },
  encode(message: CompressedExistenceProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    if (message.leaf !== undefined) {
      LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.path) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CompressedExistenceProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompressedExistenceProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        case 3:
          message.leaf = LeafOp.decode(reader, reader.uint32());
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.path.push(reader.int32());
            }
          } else {
            message.path.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CompressedExistenceProof {
    const obj = createBaseCompressedExistenceProof();
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    if (isSet(object.value)) obj.value = bytesFromBase64(object.value);
    if (isSet(object.leaf)) obj.leaf = LeafOp.fromJSON(object.leaf);
    if (Array.isArray(object?.path)) obj.path = object.path.map((e: any) => Number(e));
    return obj;
  },
  toJSON(message: CompressedExistenceProof): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    message.leaf !== undefined && (obj.leaf = message.leaf ? LeafOp.toJSON(message.leaf) : undefined);
    if (message.path) {
      obj.path = message.path.map(e => Math.round(e));
    } else {
      obj.path = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<CompressedExistenceProof>): CompressedExistenceProof {
    const message = createBaseCompressedExistenceProof();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    if (object.leaf !== undefined && object.leaf !== null) {
      message.leaf = LeafOp.fromPartial(object.leaf);
    }
    message.path = object.path?.map(e => e) || [];
    return message;
  },
  fromSDK(object: CompressedExistenceProofSDKType): CompressedExistenceProof {
    return {
      key: object?.key,
      value: object?.value,
      leaf: object.leaf ? LeafOp.fromSDK(object.leaf) : undefined,
      path: Array.isArray(object?.path) ? object.path.map((e: any) => e) : []
    };
  },
  toSDK(message: CompressedExistenceProof): CompressedExistenceProofSDKType {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    message.leaf !== undefined && (obj.leaf = message.leaf ? LeafOp.toSDK(message.leaf) : undefined);
    if (message.path) {
      obj.path = message.path.map(e => e);
    } else {
      obj.path = [];
    }
    return obj;
  },
  fromAmino(object: CompressedExistenceProofAmino): CompressedExistenceProof {
    const message = createBaseCompressedExistenceProof();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    if (object.leaf !== undefined && object.leaf !== null) {
      message.leaf = LeafOp.fromAmino(object.leaf);
    }
    message.path = object.path?.map(e => e) || [];
    return message;
  },
  toAmino(message: CompressedExistenceProof): CompressedExistenceProofAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    obj.leaf = message.leaf ? LeafOp.toAmino(message.leaf) : undefined;
    if (message.path) {
      obj.path = message.path.map(e => e);
    } else {
      obj.path = [];
    }
    return obj;
  },
  fromAminoMsg(object: CompressedExistenceProofAminoMsg): CompressedExistenceProof {
    return CompressedExistenceProof.fromAmino(object.value);
  },
  fromProtoMsg(message: CompressedExistenceProofProtoMsg): CompressedExistenceProof {
    return CompressedExistenceProof.decode(message.value);
  },
  toProto(message: CompressedExistenceProof): Uint8Array {
    return CompressedExistenceProof.encode(message).finish();
  },
  toProtoMsg(message: CompressedExistenceProof): CompressedExistenceProofProtoMsg {
    return {
      typeUrl: "/ics23.CompressedExistenceProof",
      value: CompressedExistenceProof.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CompressedExistenceProof.typeUrl, CompressedExistenceProof);
function createBaseCompressedNonExistenceProof(): CompressedNonExistenceProof {
  return {
    key: new Uint8Array(),
    left: undefined,
    right: undefined
  };
}
export const CompressedNonExistenceProof = {
  typeUrl: "/ics23.CompressedNonExistenceProof",
  is(o: any): o is CompressedNonExistenceProof {
    return o && (o.$typeUrl === CompressedNonExistenceProof.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
  },
  isSDK(o: any): o is CompressedNonExistenceProofSDKType {
    return o && (o.$typeUrl === CompressedNonExistenceProof.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
  },
  isAmino(o: any): o is CompressedNonExistenceProofAmino {
    return o && (o.$typeUrl === CompressedNonExistenceProof.typeUrl || o.key instanceof Uint8Array || typeof o.key === "string");
  },
  encode(message: CompressedNonExistenceProof, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.left !== undefined) {
      CompressedExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
    }
    if (message.right !== undefined) {
      CompressedExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CompressedNonExistenceProof {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCompressedNonExistenceProof();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.left = CompressedExistenceProof.decode(reader, reader.uint32());
          break;
        case 3:
          message.right = CompressedExistenceProof.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CompressedNonExistenceProof {
    const obj = createBaseCompressedNonExistenceProof();
    if (isSet(object.key)) obj.key = bytesFromBase64(object.key);
    if (isSet(object.left)) obj.left = CompressedExistenceProof.fromJSON(object.left);
    if (isSet(object.right)) obj.right = CompressedExistenceProof.fromJSON(object.right);
    return obj;
  },
  toJSON(message: CompressedNonExistenceProof): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.left !== undefined && (obj.left = message.left ? CompressedExistenceProof.toJSON(message.left) : undefined);
    message.right !== undefined && (obj.right = message.right ? CompressedExistenceProof.toJSON(message.right) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<CompressedNonExistenceProof>): CompressedNonExistenceProof {
    const message = createBaseCompressedNonExistenceProof();
    message.key = object.key ?? new Uint8Array();
    if (object.left !== undefined && object.left !== null) {
      message.left = CompressedExistenceProof.fromPartial(object.left);
    }
    if (object.right !== undefined && object.right !== null) {
      message.right = CompressedExistenceProof.fromPartial(object.right);
    }
    return message;
  },
  fromSDK(object: CompressedNonExistenceProofSDKType): CompressedNonExistenceProof {
    return {
      key: object?.key,
      left: object.left ? CompressedExistenceProof.fromSDK(object.left) : undefined,
      right: object.right ? CompressedExistenceProof.fromSDK(object.right) : undefined
    };
  },
  toSDK(message: CompressedNonExistenceProof): CompressedNonExistenceProofSDKType {
    const obj: any = {};
    obj.key = message.key;
    message.left !== undefined && (obj.left = message.left ? CompressedExistenceProof.toSDK(message.left) : undefined);
    message.right !== undefined && (obj.right = message.right ? CompressedExistenceProof.toSDK(message.right) : undefined);
    return obj;
  },
  fromAmino(object: CompressedNonExistenceProofAmino): CompressedNonExistenceProof {
    const message = createBaseCompressedNonExistenceProof();
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key);
    }
    if (object.left !== undefined && object.left !== null) {
      message.left = CompressedExistenceProof.fromAmino(object.left);
    }
    if (object.right !== undefined && object.right !== null) {
      message.right = CompressedExistenceProof.fromAmino(object.right);
    }
    return message;
  },
  toAmino(message: CompressedNonExistenceProof): CompressedNonExistenceProofAmino {
    const obj: any = {};
    obj.key = message.key ? base64FromBytes(message.key) : undefined;
    obj.left = message.left ? CompressedExistenceProof.toAmino(message.left) : undefined;
    obj.right = message.right ? CompressedExistenceProof.toAmino(message.right) : undefined;
    return obj;
  },
  fromAminoMsg(object: CompressedNonExistenceProofAminoMsg): CompressedNonExistenceProof {
    return CompressedNonExistenceProof.fromAmino(object.value);
  },
  fromProtoMsg(message: CompressedNonExistenceProofProtoMsg): CompressedNonExistenceProof {
    return CompressedNonExistenceProof.decode(message.value);
  },
  toProto(message: CompressedNonExistenceProof): Uint8Array {
    return CompressedNonExistenceProof.encode(message).finish();
  },
  toProtoMsg(message: CompressedNonExistenceProof): CompressedNonExistenceProofProtoMsg {
    return {
      typeUrl: "/ics23.CompressedNonExistenceProof",
      value: CompressedNonExistenceProof.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CompressedNonExistenceProof.typeUrl, CompressedNonExistenceProof);