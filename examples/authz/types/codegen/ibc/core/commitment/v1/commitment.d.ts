import { CommitmentProof, CommitmentProofAmino, CommitmentProofSDKType } from "../../../../confio/proofs";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/**
 * MerkleRoot defines a merkle root hash.
 * In the Cosmos SDK, the AppHash of a block header becomes the root.
 */
export interface MerkleRoot {
    hash: Uint8Array;
}
export interface MerkleRootProtoMsg {
    typeUrl: "/ibc.core.commitment.v1.MerkleRoot";
    value: Uint8Array;
}
/**
 * MerkleRoot defines a merkle root hash.
 * In the Cosmos SDK, the AppHash of a block header becomes the root.
 */
export interface MerkleRootAmino {
    hash?: string;
}
export interface MerkleRootAminoMsg {
    type: "cosmos-sdk/MerkleRoot";
    value: MerkleRootAmino;
}
/**
 * MerkleRoot defines a merkle root hash.
 * In the Cosmos SDK, the AppHash of a block header becomes the root.
 */
export interface MerkleRootSDKType {
    hash: Uint8Array;
}
/**
 * MerklePrefix is merkle path prefixed to the key.
 * The constructed key from the Path and the key will be append(Path.KeyPath,
 * append(Path.KeyPrefix, key...))
 */
export interface MerklePrefix {
    keyPrefix: Uint8Array;
}
export interface MerklePrefixProtoMsg {
    typeUrl: "/ibc.core.commitment.v1.MerklePrefix";
    value: Uint8Array;
}
/**
 * MerklePrefix is merkle path prefixed to the key.
 * The constructed key from the Path and the key will be append(Path.KeyPath,
 * append(Path.KeyPrefix, key...))
 */
export interface MerklePrefixAmino {
    key_prefix?: string;
}
export interface MerklePrefixAminoMsg {
    type: "cosmos-sdk/MerklePrefix";
    value: MerklePrefixAmino;
}
/**
 * MerklePrefix is merkle path prefixed to the key.
 * The constructed key from the Path and the key will be append(Path.KeyPath,
 * append(Path.KeyPrefix, key...))
 */
export interface MerklePrefixSDKType {
    key_prefix: Uint8Array;
}
/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * MerklePath is represented from root-to-leaf
 */
export interface MerklePath {
    keyPath: string[];
}
export interface MerklePathProtoMsg {
    typeUrl: "/ibc.core.commitment.v1.MerklePath";
    value: Uint8Array;
}
/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * MerklePath is represented from root-to-leaf
 */
export interface MerklePathAmino {
    key_path?: string[];
}
export interface MerklePathAminoMsg {
    type: "cosmos-sdk/MerklePath";
    value: MerklePathAmino;
}
/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * MerklePath is represented from root-to-leaf
 */
export interface MerklePathSDKType {
    key_path: string[];
}
/**
 * MerkleProof is a wrapper type over a chain of CommitmentProofs.
 * It demonstrates membership or non-membership for an element or set of
 * elements, verifiable in conjunction with a known commitment root. Proofs
 * should be succinct.
 * MerkleProofs are ordered from leaf-to-root
 */
export interface MerkleProof {
    proofs: CommitmentProof[];
}
export interface MerkleProofProtoMsg {
    typeUrl: "/ibc.core.commitment.v1.MerkleProof";
    value: Uint8Array;
}
/**
 * MerkleProof is a wrapper type over a chain of CommitmentProofs.
 * It demonstrates membership or non-membership for an element or set of
 * elements, verifiable in conjunction with a known commitment root. Proofs
 * should be succinct.
 * MerkleProofs are ordered from leaf-to-root
 */
export interface MerkleProofAmino {
    proofs?: CommitmentProofAmino[];
}
export interface MerkleProofAminoMsg {
    type: "cosmos-sdk/MerkleProof";
    value: MerkleProofAmino;
}
/**
 * MerkleProof is a wrapper type over a chain of CommitmentProofs.
 * It demonstrates membership or non-membership for an element or set of
 * elements, verifiable in conjunction with a known commitment root. Proofs
 * should be succinct.
 * MerkleProofs are ordered from leaf-to-root
 */
export interface MerkleProofSDKType {
    proofs: CommitmentProofSDKType[];
}
export declare const MerkleRoot: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MerkleRoot;
    isSDK(o: any): o is MerkleRootSDKType;
    isAmino(o: any): o is MerkleRootAmino;
    encode(message: MerkleRoot, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MerkleRoot;
    fromJSON(object: any): MerkleRoot;
    toJSON(message: MerkleRoot): unknown;
    fromPartial(object: DeepPartial<MerkleRoot>): MerkleRoot;
    fromSDK(object: MerkleRootSDKType): MerkleRoot;
    toSDK(message: MerkleRoot): MerkleRootSDKType;
    fromAmino(object: MerkleRootAmino): MerkleRoot;
    toAmino(message: MerkleRoot): MerkleRootAmino;
    fromAminoMsg(object: MerkleRootAminoMsg): MerkleRoot;
    toAminoMsg(message: MerkleRoot): MerkleRootAminoMsg;
    fromProtoMsg(message: MerkleRootProtoMsg): MerkleRoot;
    toProto(message: MerkleRoot): Uint8Array;
    toProtoMsg(message: MerkleRoot): MerkleRootProtoMsg;
};
export declare const MerklePrefix: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MerklePrefix;
    isSDK(o: any): o is MerklePrefixSDKType;
    isAmino(o: any): o is MerklePrefixAmino;
    encode(message: MerklePrefix, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MerklePrefix;
    fromJSON(object: any): MerklePrefix;
    toJSON(message: MerklePrefix): unknown;
    fromPartial(object: DeepPartial<MerklePrefix>): MerklePrefix;
    fromSDK(object: MerklePrefixSDKType): MerklePrefix;
    toSDK(message: MerklePrefix): MerklePrefixSDKType;
    fromAmino(object: MerklePrefixAmino): MerklePrefix;
    toAmino(message: MerklePrefix): MerklePrefixAmino;
    fromAminoMsg(object: MerklePrefixAminoMsg): MerklePrefix;
    toAminoMsg(message: MerklePrefix): MerklePrefixAminoMsg;
    fromProtoMsg(message: MerklePrefixProtoMsg): MerklePrefix;
    toProto(message: MerklePrefix): Uint8Array;
    toProtoMsg(message: MerklePrefix): MerklePrefixProtoMsg;
};
export declare const MerklePath: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MerklePath;
    isSDK(o: any): o is MerklePathSDKType;
    isAmino(o: any): o is MerklePathAmino;
    encode(message: MerklePath, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MerklePath;
    fromJSON(object: any): MerklePath;
    toJSON(message: MerklePath): unknown;
    fromPartial(object: DeepPartial<MerklePath>): MerklePath;
    fromSDK(object: MerklePathSDKType): MerklePath;
    toSDK(message: MerklePath): MerklePathSDKType;
    fromAmino(object: MerklePathAmino): MerklePath;
    toAmino(message: MerklePath): MerklePathAmino;
    fromAminoMsg(object: MerklePathAminoMsg): MerklePath;
    toAminoMsg(message: MerklePath): MerklePathAminoMsg;
    fromProtoMsg(message: MerklePathProtoMsg): MerklePath;
    toProto(message: MerklePath): Uint8Array;
    toProtoMsg(message: MerklePath): MerklePathProtoMsg;
};
export declare const MerkleProof: {
    typeUrl: string;
    aminoType: string;
    is(o: any): o is MerkleProof;
    isSDK(o: any): o is MerkleProofSDKType;
    isAmino(o: any): o is MerkleProofAmino;
    encode(message: MerkleProof, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): MerkleProof;
    fromJSON(object: any): MerkleProof;
    toJSON(message: MerkleProof): unknown;
    fromPartial(object: DeepPartial<MerkleProof>): MerkleProof;
    fromSDK(object: MerkleProofSDKType): MerkleProof;
    toSDK(message: MerkleProof): MerkleProofSDKType;
    fromAmino(object: MerkleProofAmino): MerkleProof;
    toAmino(message: MerkleProof): MerkleProofAmino;
    fromAminoMsg(object: MerkleProofAminoMsg): MerkleProof;
    toAminoMsg(message: MerkleProof): MerkleProofAminoMsg;
    fromProtoMsg(message: MerkleProofProtoMsg): MerkleProof;
    toProto(message: MerkleProof): Uint8Array;
    toProtoMsg(message: MerkleProof): MerkleProofProtoMsg;
};
