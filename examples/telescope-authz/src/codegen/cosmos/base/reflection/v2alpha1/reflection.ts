import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "cosmos.base.reflection.v2alpha1";
/** AppDescriptor describes a cosmos-sdk based application */
export interface AppDescriptor {
  /**
   * AuthnDescriptor provides information on how to authenticate transactions on the application
   * NOTE: experimental and subject to change in future releases.
   */
  authn?: AuthnDescriptor;
  /** chain provides the chain descriptor */
  chain?: ChainDescriptor;
  /** codec provides metadata information regarding codec related types */
  codec?: CodecDescriptor;
  /** configuration provides metadata information regarding the sdk.Config type */
  configuration?: ConfigurationDescriptor;
  /** query_services provides metadata information regarding the available queriable endpoints */
  queryServices?: QueryServicesDescriptor;
  /** tx provides metadata information regarding how to send transactions to the given application */
  tx?: TxDescriptor;
}
export interface AppDescriptorProtoMsg {
  typeUrl: "/cosmos.base.reflection.v2alpha1.AppDescriptor";
  value: Uint8Array;
}
/** AppDescriptor describes a cosmos-sdk based application */
export interface AppDescriptorAmino {
  /**
   * AuthnDescriptor provides information on how to authenticate transactions on the application
   * NOTE: experimental and subject to change in future releases.
   */
  authn?: AuthnDescriptorAmino;
  /** chain provides the chain descriptor */
  chain?: ChainDescriptorAmino;
  /** codec provides metadata information regarding codec related types */
  codec?: CodecDescriptorAmino;
  /** configuration provides metadata information regarding the sdk.Config type */
  configuration?: ConfigurationDescriptorAmino;
  /** query_services provides metadata information regarding the available queriable endpoints */
  query_services?: QueryServicesDescriptorAmino;
  /** tx provides metadata information regarding how to send transactions to the given application */
  tx?: TxDescriptorAmino;
}
export interface AppDescriptorAminoMsg {
  type: "cosmos-sdk/AppDescriptor";
  value: AppDescriptorAmino;
}
/** AppDescriptor describes a cosmos-sdk based application */
export interface AppDescriptorSDKType {
  authn?: AuthnDescriptorSDKType;
  chain?: ChainDescriptorSDKType;
  codec?: CodecDescriptorSDKType;
  configuration?: ConfigurationDescriptorSDKType;
  query_services?: QueryServicesDescriptorSDKType;
  tx?: TxDescriptorSDKType;
}
/** TxDescriptor describes the accepted transaction type */
export interface TxDescriptor {
  /**
   * fullname is the protobuf fullname of the raw transaction type (for instance the tx.Tx type)
   * it is not meant to support polymorphism of transaction types, it is supposed to be used by
   * reflection clients to understand if they can handle a specific transaction type in an application.
   */
  fullname: string;
  /** msgs lists the accepted application messages (sdk.Msg) */
  msgs: MsgDescriptor[];
}
export interface TxDescriptorProtoMsg {
  typeUrl: "/cosmos.base.reflection.v2alpha1.TxDescriptor";
  value: Uint8Array;
}
/** TxDescriptor describes the accepted transaction type */
export interface TxDescriptorAmino {
  /**
   * fullname is the protobuf fullname of the raw transaction type (for instance the tx.Tx type)
   * it is not meant to support polymorphism of transaction types, it is supposed to be used by
   * reflection clients to understand if they can handle a specific transaction type in an application.
   */
  fullname?: string;
  /** msgs lists the accepted application messages (sdk.Msg) */
  msgs?: MsgDescriptorAmino[];
}
export interface TxDescriptorAminoMsg {
  type: "cosmos-sdk/TxDescriptor";
  value: TxDescriptorAmino;
}
/** TxDescriptor describes the accepted transaction type */
export interface TxDescriptorSDKType {
  fullname: string;
  msgs: MsgDescriptorSDKType[];
}
/**
 * AuthnDescriptor provides information on how to sign transactions without relying
 * on the online RPCs GetTxMetadata and CombineUnsignedTxAndSignatures
 */
export interface AuthnDescriptor {
  /** sign_modes defines the supported signature algorithm */
  signModes: SigningModeDescriptor[];
}
export interface AuthnDescriptorProtoMsg {
  typeUrl: "/cosmos.base.reflection.v2alpha1.AuthnDescriptor";
  value: Uint8Array;
}
/**
 * AuthnDescriptor provides information on how to sign transactions without relying
 * on the online RPCs GetTxMetadata and CombineUnsignedTxAndSignatures
 */
export interface AuthnDescriptorAmino {
  /** sign_modes defines the supported signature algorithm */
  sign_modes?: SigningModeDescriptorAmino[];
}
export interface AuthnDescriptorAminoMsg {
  type: "cosmos-sdk/AuthnDescriptor";
  value: AuthnDescriptorAmino;
}
/**
 * AuthnDescriptor provides information on how to sign transactions without relying
 * on the online RPCs GetTxMetadata and CombineUnsignedTxAndSignatures
 */
export interface AuthnDescriptorSDKType {
  sign_modes: SigningModeDescriptorSDKType[];
}
/**
 * SigningModeDescriptor provides information on a signing flow of the application
 * NOTE(fdymylja): here we could go as far as providing an entire flow on how
 * to sign a message given a SigningModeDescriptor, but it's better to think about
 * this another time
 */
export interface SigningModeDescriptor {
  /** name defines the unique name of the signing mode */
  name: string;
  /** number is the unique int32 identifier for the sign_mode enum */
  number: number;
  /**
   * authn_info_provider_method_fullname defines the fullname of the method to call to get
   * the metadata required to authenticate using the provided sign_modes
   */
  authnInfoProviderMethodFullname: string;
}
export interface SigningModeDescriptorProtoMsg {
  typeUrl: "/cosmos.base.reflection.v2alpha1.SigningModeDescriptor";
  value: Uint8Array;
}
/**
 * SigningModeDescriptor provides information on a signing flow of the application
 * NOTE(fdymylja): here we could go as far as providing an entire flow on how
 * to sign a message given a SigningModeDescriptor, but it's better to think about
 * this another time
 */
export interface SigningModeDescriptorAmino {
  /** name defines the unique name of the signing mode */
  name?: string;
  /** number is the unique int32 identifier for the sign_mode enum */
  number?: number;
  /**
   * authn_info_provider_method_fullname defines the fullname of the method to call to get
   * the metadata required to authenticate using the provided sign_modes
   */
  authn_info_provider_method_fullname?: string;
}
export interface SigningModeDescriptorAminoMsg {
  type: "cosmos-sdk/SigningModeDescriptor";
  value: SigningModeDescriptorAmino;
}
/**
 * SigningModeDescriptor provides information on a signing flow of the application
 * NOTE(fdymylja): here we could go as far as providing an entire flow on how
 * to sign a message given a SigningModeDescriptor, but it's better to think about
 * this another time
 */
export interface SigningModeDescriptorSDKType {
  name: string;
  number: number;
  authn_info_provider_method_fullname: string;
}
/** ChainDescriptor describes chain information of the application */
export interface ChainDescriptor {
  /** id is the chain id */
  id: string;
}
export interface ChainDescriptorProtoMsg {
  typeUrl: "/cosmos.base.reflection.v2alpha1.ChainDescriptor";
  value: Uint8Array;
}
/** ChainDescriptor describes chain information of the application */
export interface ChainDescriptorAmino {
  /** id is the chain id */
  id?: string;
}
export interface ChainDescriptorAminoMsg {
  type: "cosmos-sdk/ChainDescriptor";
  value: ChainDescriptorAmino;
}
/** ChainDescriptor describes chain information of the application */
export interface ChainDescriptorSDKType {
  id: string;
}
/** CodecDescriptor describes the registered interfaces and provides metadata information on the types */
export interface CodecDescriptor {
  /** interfaces is a list of the registerted interfaces descriptors */
  interfaces: InterfaceDescriptor[];
}
export interface CodecDescriptorProtoMsg {
  typeUrl: "/cosmos.base.reflection.v2alpha1.CodecDescriptor";
  value: Uint8Array;
}
/** CodecDescriptor describes the registered interfaces and provides metadata information on the types */
export interface CodecDescriptorAmino {
  /** interfaces is a list of the registerted interfaces descriptors */
  interfaces?: InterfaceDescriptorAmino[];
}
export interface CodecDescriptorAminoMsg {
  type: "cosmos-sdk/CodecDescriptor";
  value: CodecDescriptorAmino;
}
/** CodecDescriptor describes the registered interfaces and provides metadata information on the types */
export interface CodecDescriptorSDKType {
  interfaces: InterfaceDescriptorSDKType[];
}
/** InterfaceDescriptor describes the implementation of an interface */
export interface InterfaceDescriptor {
  /** fullname is the name of the interface */
  fullname: string;
  /**
   * interface_accepting_messages contains information regarding the proto messages which contain the interface as
   * google.protobuf.Any field
   */
  interfaceAcceptingMessages: InterfaceAcceptingMessageDescriptor[];
  /** interface_implementers is a list of the descriptors of the interface implementers */
  interfaceImplementers: InterfaceImplementerDescriptor[];
}
export interface InterfaceDescriptorProtoMsg {
  typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceDescriptor";
  value: Uint8Array;
}
/** InterfaceDescriptor describes the implementation of an interface */
export interface InterfaceDescriptorAmino {
  /** fullname is the name of the interface */
  fullname?: string;
  /**
   * interface_accepting_messages contains information regarding the proto messages which contain the interface as
   * google.protobuf.Any field
   */
  interface_accepting_messages?: InterfaceAcceptingMessageDescriptorAmino[];
  /** interface_implementers is a list of the descriptors of the interface implementers */
  interface_implementers?: InterfaceImplementerDescriptorAmino[];
}
export interface InterfaceDescriptorAminoMsg {
  type: "cosmos-sdk/InterfaceDescriptor";
  value: InterfaceDescriptorAmino;
}
/** InterfaceDescriptor describes the implementation of an interface */
export interface InterfaceDescriptorSDKType {
  fullname: string;
  interface_accepting_messages: InterfaceAcceptingMessageDescriptorSDKType[];
  interface_implementers: InterfaceImplementerDescriptorSDKType[];
}
/** InterfaceImplementerDescriptor describes an interface implementer */
export interface InterfaceImplementerDescriptor {
  /** fullname is the protobuf queryable name of the interface implementer */
  fullname: string;
  /**
   * type_url defines the type URL used when marshalling the type as any
   * this is required so we can provide type safe google.protobuf.Any marshalling and
   * unmarshalling, making sure that we don't accept just 'any' type
   * in our interface fields
   */
  typeUrl: string;
}
export interface InterfaceImplementerDescriptorProtoMsg {
  typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor";
  value: Uint8Array;
}
/** InterfaceImplementerDescriptor describes an interface implementer */
export interface InterfaceImplementerDescriptorAmino {
  /** fullname is the protobuf queryable name of the interface implementer */
  fullname?: string;
  /**
   * type_url defines the type URL used when marshalling the type as any
   * this is required so we can provide type safe google.protobuf.Any marshalling and
   * unmarshalling, making sure that we don't accept just 'any' type
   * in our interface fields
   */
  type_url?: string;
}
export interface InterfaceImplementerDescriptorAminoMsg {
  type: "cosmos-sdk/InterfaceImplementerDescriptor";
  value: InterfaceImplementerDescriptorAmino;
}
/** InterfaceImplementerDescriptor describes an interface implementer */
export interface InterfaceImplementerDescriptorSDKType {
  fullname: string;
  type_url: string;
}
/**
 * InterfaceAcceptingMessageDescriptor describes a protobuf message which contains
 * an interface represented as a google.protobuf.Any
 */
export interface InterfaceAcceptingMessageDescriptor {
  /** fullname is the protobuf fullname of the type containing the interface */
  fullname: string;
  /**
   * field_descriptor_names is a list of the protobuf name (not fullname) of the field
   * which contains the interface as google.protobuf.Any (the interface is the same, but
   * it can be in multiple fields of the same proto message)
   */
  fieldDescriptorNames: string[];
}
export interface InterfaceAcceptingMessageDescriptorProtoMsg {
  typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor";
  value: Uint8Array;
}
/**
 * InterfaceAcceptingMessageDescriptor describes a protobuf message which contains
 * an interface represented as a google.protobuf.Any
 */
export interface InterfaceAcceptingMessageDescriptorAmino {
  /** fullname is the protobuf fullname of the type containing the interface */
  fullname?: string;
  /**
   * field_descriptor_names is a list of the protobuf name (not fullname) of the field
   * which contains the interface as google.protobuf.Any (the interface is the same, but
   * it can be in multiple fields of the same proto message)
   */
  field_descriptor_names?: string[];
}
export interface InterfaceAcceptingMessageDescriptorAminoMsg {
  type: "cosmos-sdk/InterfaceAcceptingMessageDescriptor";
  value: InterfaceAcceptingMessageDescriptorAmino;
}
/**
 * InterfaceAcceptingMessageDescriptor describes a protobuf message which contains
 * an interface represented as a google.protobuf.Any
 */
export interface InterfaceAcceptingMessageDescriptorSDKType {
  fullname: string;
  field_descriptor_names: string[];
}
/** ConfigurationDescriptor contains metadata information on the sdk.Config */
export interface ConfigurationDescriptor {
  /** bech32_account_address_prefix is the account address prefix */
  bech32AccountAddressPrefix: string;
}
export interface ConfigurationDescriptorProtoMsg {
  typeUrl: "/cosmos.base.reflection.v2alpha1.ConfigurationDescriptor";
  value: Uint8Array;
}
/** ConfigurationDescriptor contains metadata information on the sdk.Config */
export interface ConfigurationDescriptorAmino {
  /** bech32_account_address_prefix is the account address prefix */
  bech32_account_address_prefix?: string;
}
export interface ConfigurationDescriptorAminoMsg {
  type: "cosmos-sdk/ConfigurationDescriptor";
  value: ConfigurationDescriptorAmino;
}
/** ConfigurationDescriptor contains metadata information on the sdk.Config */
export interface ConfigurationDescriptorSDKType {
  bech32_account_address_prefix: string;
}
/** MsgDescriptor describes a cosmos-sdk message that can be delivered with a transaction */
export interface MsgDescriptor {
  /** msg_type_url contains the TypeURL of a sdk.Msg. */
  msgTypeUrl: string;
}
export interface MsgDescriptorProtoMsg {
  typeUrl: "/cosmos.base.reflection.v2alpha1.MsgDescriptor";
  value: Uint8Array;
}
/** MsgDescriptor describes a cosmos-sdk message that can be delivered with a transaction */
export interface MsgDescriptorAmino {
  /** msg_type_url contains the TypeURL of a sdk.Msg. */
  msg_type_url?: string;
}
export interface MsgDescriptorAminoMsg {
  type: "cosmos-sdk/MsgDescriptor";
  value: MsgDescriptorAmino;
}
/** MsgDescriptor describes a cosmos-sdk message that can be delivered with a transaction */
export interface MsgDescriptorSDKType {
  msg_type_url: string;
}
/** GetAuthnDescriptorRequest is the request used for the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorRequest {}
export interface GetAuthnDescriptorRequestProtoMsg {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest";
  value: Uint8Array;
}
/** GetAuthnDescriptorRequest is the request used for the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorRequestAmino {}
export interface GetAuthnDescriptorRequestAminoMsg {
  type: "cosmos-sdk/GetAuthnDescriptorRequest";
  value: GetAuthnDescriptorRequestAmino;
}
/** GetAuthnDescriptorRequest is the request used for the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorRequestSDKType {}
/** GetAuthnDescriptorResponse is the response returned by the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorResponse {
  /** authn describes how to authenticate to the application when sending transactions */
  authn?: AuthnDescriptor;
}
export interface GetAuthnDescriptorResponseProtoMsg {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse";
  value: Uint8Array;
}
/** GetAuthnDescriptorResponse is the response returned by the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorResponseAmino {
  /** authn describes how to authenticate to the application when sending transactions */
  authn?: AuthnDescriptorAmino;
}
export interface GetAuthnDescriptorResponseAminoMsg {
  type: "cosmos-sdk/GetAuthnDescriptorResponse";
  value: GetAuthnDescriptorResponseAmino;
}
/** GetAuthnDescriptorResponse is the response returned by the GetAuthnDescriptor RPC */
export interface GetAuthnDescriptorResponseSDKType {
  authn?: AuthnDescriptorSDKType;
}
/** GetChainDescriptorRequest is the request used for the GetChainDescriptor RPC */
export interface GetChainDescriptorRequest {}
export interface GetChainDescriptorRequestProtoMsg {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest";
  value: Uint8Array;
}
/** GetChainDescriptorRequest is the request used for the GetChainDescriptor RPC */
export interface GetChainDescriptorRequestAmino {}
export interface GetChainDescriptorRequestAminoMsg {
  type: "cosmos-sdk/GetChainDescriptorRequest";
  value: GetChainDescriptorRequestAmino;
}
/** GetChainDescriptorRequest is the request used for the GetChainDescriptor RPC */
export interface GetChainDescriptorRequestSDKType {}
/** GetChainDescriptorResponse is the response returned by the GetChainDescriptor RPC */
export interface GetChainDescriptorResponse {
  /** chain describes application chain information */
  chain?: ChainDescriptor;
}
export interface GetChainDescriptorResponseProtoMsg {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse";
  value: Uint8Array;
}
/** GetChainDescriptorResponse is the response returned by the GetChainDescriptor RPC */
export interface GetChainDescriptorResponseAmino {
  /** chain describes application chain information */
  chain?: ChainDescriptorAmino;
}
export interface GetChainDescriptorResponseAminoMsg {
  type: "cosmos-sdk/GetChainDescriptorResponse";
  value: GetChainDescriptorResponseAmino;
}
/** GetChainDescriptorResponse is the response returned by the GetChainDescriptor RPC */
export interface GetChainDescriptorResponseSDKType {
  chain?: ChainDescriptorSDKType;
}
/** GetCodecDescriptorRequest is the request used for the GetCodecDescriptor RPC */
export interface GetCodecDescriptorRequest {}
export interface GetCodecDescriptorRequestProtoMsg {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest";
  value: Uint8Array;
}
/** GetCodecDescriptorRequest is the request used for the GetCodecDescriptor RPC */
export interface GetCodecDescriptorRequestAmino {}
export interface GetCodecDescriptorRequestAminoMsg {
  type: "cosmos-sdk/GetCodecDescriptorRequest";
  value: GetCodecDescriptorRequestAmino;
}
/** GetCodecDescriptorRequest is the request used for the GetCodecDescriptor RPC */
export interface GetCodecDescriptorRequestSDKType {}
/** GetCodecDescriptorResponse is the response returned by the GetCodecDescriptor RPC */
export interface GetCodecDescriptorResponse {
  /** codec describes the application codec such as registered interfaces and implementations */
  codec?: CodecDescriptor;
}
export interface GetCodecDescriptorResponseProtoMsg {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse";
  value: Uint8Array;
}
/** GetCodecDescriptorResponse is the response returned by the GetCodecDescriptor RPC */
export interface GetCodecDescriptorResponseAmino {
  /** codec describes the application codec such as registered interfaces and implementations */
  codec?: CodecDescriptorAmino;
}
export interface GetCodecDescriptorResponseAminoMsg {
  type: "cosmos-sdk/GetCodecDescriptorResponse";
  value: GetCodecDescriptorResponseAmino;
}
/** GetCodecDescriptorResponse is the response returned by the GetCodecDescriptor RPC */
export interface GetCodecDescriptorResponseSDKType {
  codec?: CodecDescriptorSDKType;
}
/** GetConfigurationDescriptorRequest is the request used for the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorRequest {}
export interface GetConfigurationDescriptorRequestProtoMsg {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest";
  value: Uint8Array;
}
/** GetConfigurationDescriptorRequest is the request used for the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorRequestAmino {}
export interface GetConfigurationDescriptorRequestAminoMsg {
  type: "cosmos-sdk/GetConfigurationDescriptorRequest";
  value: GetConfigurationDescriptorRequestAmino;
}
/** GetConfigurationDescriptorRequest is the request used for the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorRequestSDKType {}
/** GetConfigurationDescriptorResponse is the response returned by the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorResponse {
  /** config describes the application's sdk.Config */
  config?: ConfigurationDescriptor;
}
export interface GetConfigurationDescriptorResponseProtoMsg {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse";
  value: Uint8Array;
}
/** GetConfigurationDescriptorResponse is the response returned by the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorResponseAmino {
  /** config describes the application's sdk.Config */
  config?: ConfigurationDescriptorAmino;
}
export interface GetConfigurationDescriptorResponseAminoMsg {
  type: "cosmos-sdk/GetConfigurationDescriptorResponse";
  value: GetConfigurationDescriptorResponseAmino;
}
/** GetConfigurationDescriptorResponse is the response returned by the GetConfigurationDescriptor RPC */
export interface GetConfigurationDescriptorResponseSDKType {
  config?: ConfigurationDescriptorSDKType;
}
/** GetQueryServicesDescriptorRequest is the request used for the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorRequest {}
export interface GetQueryServicesDescriptorRequestProtoMsg {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest";
  value: Uint8Array;
}
/** GetQueryServicesDescriptorRequest is the request used for the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorRequestAmino {}
export interface GetQueryServicesDescriptorRequestAminoMsg {
  type: "cosmos-sdk/GetQueryServicesDescriptorRequest";
  value: GetQueryServicesDescriptorRequestAmino;
}
/** GetQueryServicesDescriptorRequest is the request used for the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorRequestSDKType {}
/** GetQueryServicesDescriptorResponse is the response returned by the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorResponse {
  /** queries provides information on the available queryable services */
  queries?: QueryServicesDescriptor;
}
export interface GetQueryServicesDescriptorResponseProtoMsg {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse";
  value: Uint8Array;
}
/** GetQueryServicesDescriptorResponse is the response returned by the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorResponseAmino {
  /** queries provides information on the available queryable services */
  queries?: QueryServicesDescriptorAmino;
}
export interface GetQueryServicesDescriptorResponseAminoMsg {
  type: "cosmos-sdk/GetQueryServicesDescriptorResponse";
  value: GetQueryServicesDescriptorResponseAmino;
}
/** GetQueryServicesDescriptorResponse is the response returned by the GetQueryServicesDescriptor RPC */
export interface GetQueryServicesDescriptorResponseSDKType {
  queries?: QueryServicesDescriptorSDKType;
}
/** GetTxDescriptorRequest is the request used for the GetTxDescriptor RPC */
export interface GetTxDescriptorRequest {}
export interface GetTxDescriptorRequestProtoMsg {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest";
  value: Uint8Array;
}
/** GetTxDescriptorRequest is the request used for the GetTxDescriptor RPC */
export interface GetTxDescriptorRequestAmino {}
export interface GetTxDescriptorRequestAminoMsg {
  type: "cosmos-sdk/GetTxDescriptorRequest";
  value: GetTxDescriptorRequestAmino;
}
/** GetTxDescriptorRequest is the request used for the GetTxDescriptor RPC */
export interface GetTxDescriptorRequestSDKType {}
/** GetTxDescriptorResponse is the response returned by the GetTxDescriptor RPC */
export interface GetTxDescriptorResponse {
  /**
   * tx provides information on msgs that can be forwarded to the application
   * alongside the accepted transaction protobuf type
   */
  tx?: TxDescriptor;
}
export interface GetTxDescriptorResponseProtoMsg {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse";
  value: Uint8Array;
}
/** GetTxDescriptorResponse is the response returned by the GetTxDescriptor RPC */
export interface GetTxDescriptorResponseAmino {
  /**
   * tx provides information on msgs that can be forwarded to the application
   * alongside the accepted transaction protobuf type
   */
  tx?: TxDescriptorAmino;
}
export interface GetTxDescriptorResponseAminoMsg {
  type: "cosmos-sdk/GetTxDescriptorResponse";
  value: GetTxDescriptorResponseAmino;
}
/** GetTxDescriptorResponse is the response returned by the GetTxDescriptor RPC */
export interface GetTxDescriptorResponseSDKType {
  tx?: TxDescriptorSDKType;
}
/** QueryServicesDescriptor contains the list of cosmos-sdk queriable services */
export interface QueryServicesDescriptor {
  /** query_services is a list of cosmos-sdk QueryServiceDescriptor */
  queryServices: QueryServiceDescriptor[];
}
export interface QueryServicesDescriptorProtoMsg {
  typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServicesDescriptor";
  value: Uint8Array;
}
/** QueryServicesDescriptor contains the list of cosmos-sdk queriable services */
export interface QueryServicesDescriptorAmino {
  /** query_services is a list of cosmos-sdk QueryServiceDescriptor */
  query_services?: QueryServiceDescriptorAmino[];
}
export interface QueryServicesDescriptorAminoMsg {
  type: "cosmos-sdk/QueryServicesDescriptor";
  value: QueryServicesDescriptorAmino;
}
/** QueryServicesDescriptor contains the list of cosmos-sdk queriable services */
export interface QueryServicesDescriptorSDKType {
  query_services: QueryServiceDescriptorSDKType[];
}
/** QueryServiceDescriptor describes a cosmos-sdk queryable service */
export interface QueryServiceDescriptor {
  /** fullname is the protobuf fullname of the service descriptor */
  fullname: string;
  /** is_module describes if this service is actually exposed by an application's module */
  isModule: boolean;
  /** methods provides a list of query service methods */
  methods: QueryMethodDescriptor[];
}
export interface QueryServiceDescriptorProtoMsg {
  typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServiceDescriptor";
  value: Uint8Array;
}
/** QueryServiceDescriptor describes a cosmos-sdk queryable service */
export interface QueryServiceDescriptorAmino {
  /** fullname is the protobuf fullname of the service descriptor */
  fullname?: string;
  /** is_module describes if this service is actually exposed by an application's module */
  is_module?: boolean;
  /** methods provides a list of query service methods */
  methods?: QueryMethodDescriptorAmino[];
}
export interface QueryServiceDescriptorAminoMsg {
  type: "cosmos-sdk/QueryServiceDescriptor";
  value: QueryServiceDescriptorAmino;
}
/** QueryServiceDescriptor describes a cosmos-sdk queryable service */
export interface QueryServiceDescriptorSDKType {
  fullname: string;
  is_module: boolean;
  methods: QueryMethodDescriptorSDKType[];
}
/**
 * QueryMethodDescriptor describes a queryable method of a query service
 * no other info is provided beside method name and tendermint queryable path
 * because it would be redundant with the grpc reflection service
 */
export interface QueryMethodDescriptor {
  /** name is the protobuf name (not fullname) of the method */
  name: string;
  /**
   * full_query_path is the path that can be used to query
   * this method via tendermint abci.Query
   */
  fullQueryPath: string;
}
export interface QueryMethodDescriptorProtoMsg {
  typeUrl: "/cosmos.base.reflection.v2alpha1.QueryMethodDescriptor";
  value: Uint8Array;
}
/**
 * QueryMethodDescriptor describes a queryable method of a query service
 * no other info is provided beside method name and tendermint queryable path
 * because it would be redundant with the grpc reflection service
 */
export interface QueryMethodDescriptorAmino {
  /** name is the protobuf name (not fullname) of the method */
  name?: string;
  /**
   * full_query_path is the path that can be used to query
   * this method via tendermint abci.Query
   */
  full_query_path?: string;
}
export interface QueryMethodDescriptorAminoMsg {
  type: "cosmos-sdk/QueryMethodDescriptor";
  value: QueryMethodDescriptorAmino;
}
/**
 * QueryMethodDescriptor describes a queryable method of a query service
 * no other info is provided beside method name and tendermint queryable path
 * because it would be redundant with the grpc reflection service
 */
export interface QueryMethodDescriptorSDKType {
  name: string;
  full_query_path: string;
}
function createBaseAppDescriptor(): AppDescriptor {
  return {
    authn: undefined,
    chain: undefined,
    codec: undefined,
    configuration: undefined,
    queryServices: undefined,
    tx: undefined
  };
}
export const AppDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.AppDescriptor",
  aminoType: "cosmos-sdk/AppDescriptor",
  is(o: any): o is AppDescriptor {
    return o && o.$typeUrl === AppDescriptor.typeUrl;
  },
  isSDK(o: any): o is AppDescriptorSDKType {
    return o && o.$typeUrl === AppDescriptor.typeUrl;
  },
  isAmino(o: any): o is AppDescriptorAmino {
    return o && o.$typeUrl === AppDescriptor.typeUrl;
  },
  encode(message: AppDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authn !== undefined) {
      AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
    }
    if (message.chain !== undefined) {
      ChainDescriptor.encode(message.chain, writer.uint32(18).fork()).ldelim();
    }
    if (message.codec !== undefined) {
      CodecDescriptor.encode(message.codec, writer.uint32(26).fork()).ldelim();
    }
    if (message.configuration !== undefined) {
      ConfigurationDescriptor.encode(message.configuration, writer.uint32(34).fork()).ldelim();
    }
    if (message.queryServices !== undefined) {
      QueryServicesDescriptor.encode(message.queryServices, writer.uint32(42).fork()).ldelim();
    }
    if (message.tx !== undefined) {
      TxDescriptor.encode(message.tx, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AppDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAppDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authn = AuthnDescriptor.decode(reader, reader.uint32());
          break;
        case 2:
          message.chain = ChainDescriptor.decode(reader, reader.uint32());
          break;
        case 3:
          message.codec = CodecDescriptor.decode(reader, reader.uint32());
          break;
        case 4:
          message.configuration = ConfigurationDescriptor.decode(reader, reader.uint32());
          break;
        case 5:
          message.queryServices = QueryServicesDescriptor.decode(reader, reader.uint32());
          break;
        case 6:
          message.tx = TxDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AppDescriptor {
    const obj = createBaseAppDescriptor();
    if (isSet(object.authn)) obj.authn = AuthnDescriptor.fromJSON(object.authn);
    if (isSet(object.chain)) obj.chain = ChainDescriptor.fromJSON(object.chain);
    if (isSet(object.codec)) obj.codec = CodecDescriptor.fromJSON(object.codec);
    if (isSet(object.configuration)) obj.configuration = ConfigurationDescriptor.fromJSON(object.configuration);
    if (isSet(object.queryServices)) obj.queryServices = QueryServicesDescriptor.fromJSON(object.queryServices);
    if (isSet(object.tx)) obj.tx = TxDescriptor.fromJSON(object.tx);
    return obj;
  },
  toJSON(message: AppDescriptor): unknown {
    const obj: any = {};
    message.authn !== undefined && (obj.authn = message.authn ? AuthnDescriptor.toJSON(message.authn) : undefined);
    message.chain !== undefined && (obj.chain = message.chain ? ChainDescriptor.toJSON(message.chain) : undefined);
    message.codec !== undefined && (obj.codec = message.codec ? CodecDescriptor.toJSON(message.codec) : undefined);
    message.configuration !== undefined && (obj.configuration = message.configuration ? ConfigurationDescriptor.toJSON(message.configuration) : undefined);
    message.queryServices !== undefined && (obj.queryServices = message.queryServices ? QueryServicesDescriptor.toJSON(message.queryServices) : undefined);
    message.tx !== undefined && (obj.tx = message.tx ? TxDescriptor.toJSON(message.tx) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<AppDescriptor>): AppDescriptor {
    const message = createBaseAppDescriptor();
    if (object.authn !== undefined && object.authn !== null) {
      message.authn = AuthnDescriptor.fromPartial(object.authn);
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = ChainDescriptor.fromPartial(object.chain);
    }
    if (object.codec !== undefined && object.codec !== null) {
      message.codec = CodecDescriptor.fromPartial(object.codec);
    }
    if (object.configuration !== undefined && object.configuration !== null) {
      message.configuration = ConfigurationDescriptor.fromPartial(object.configuration);
    }
    if (object.queryServices !== undefined && object.queryServices !== null) {
      message.queryServices = QueryServicesDescriptor.fromPartial(object.queryServices);
    }
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = TxDescriptor.fromPartial(object.tx);
    }
    return message;
  },
  fromSDK(object: AppDescriptorSDKType): AppDescriptor {
    return {
      authn: object.authn ? AuthnDescriptor.fromSDK(object.authn) : undefined,
      chain: object.chain ? ChainDescriptor.fromSDK(object.chain) : undefined,
      codec: object.codec ? CodecDescriptor.fromSDK(object.codec) : undefined,
      configuration: object.configuration ? ConfigurationDescriptor.fromSDK(object.configuration) : undefined,
      queryServices: object.query_services ? QueryServicesDescriptor.fromSDK(object.query_services) : undefined,
      tx: object.tx ? TxDescriptor.fromSDK(object.tx) : undefined
    };
  },
  toSDK(message: AppDescriptor): AppDescriptorSDKType {
    const obj: any = {};
    message.authn !== undefined && (obj.authn = message.authn ? AuthnDescriptor.toSDK(message.authn) : undefined);
    message.chain !== undefined && (obj.chain = message.chain ? ChainDescriptor.toSDK(message.chain) : undefined);
    message.codec !== undefined && (obj.codec = message.codec ? CodecDescriptor.toSDK(message.codec) : undefined);
    message.configuration !== undefined && (obj.configuration = message.configuration ? ConfigurationDescriptor.toSDK(message.configuration) : undefined);
    message.queryServices !== undefined && (obj.query_services = message.queryServices ? QueryServicesDescriptor.toSDK(message.queryServices) : undefined);
    message.tx !== undefined && (obj.tx = message.tx ? TxDescriptor.toSDK(message.tx) : undefined);
    return obj;
  },
  fromAmino(object: AppDescriptorAmino): AppDescriptor {
    const message = createBaseAppDescriptor();
    if (object.authn !== undefined && object.authn !== null) {
      message.authn = AuthnDescriptor.fromAmino(object.authn);
    }
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = ChainDescriptor.fromAmino(object.chain);
    }
    if (object.codec !== undefined && object.codec !== null) {
      message.codec = CodecDescriptor.fromAmino(object.codec);
    }
    if (object.configuration !== undefined && object.configuration !== null) {
      message.configuration = ConfigurationDescriptor.fromAmino(object.configuration);
    }
    if (object.query_services !== undefined && object.query_services !== null) {
      message.queryServices = QueryServicesDescriptor.fromAmino(object.query_services);
    }
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = TxDescriptor.fromAmino(object.tx);
    }
    return message;
  },
  toAmino(message: AppDescriptor): AppDescriptorAmino {
    const obj: any = {};
    obj.authn = message.authn ? AuthnDescriptor.toAmino(message.authn) : undefined;
    obj.chain = message.chain ? ChainDescriptor.toAmino(message.chain) : undefined;
    obj.codec = message.codec ? CodecDescriptor.toAmino(message.codec) : undefined;
    obj.configuration = message.configuration ? ConfigurationDescriptor.toAmino(message.configuration) : undefined;
    obj.query_services = message.queryServices ? QueryServicesDescriptor.toAmino(message.queryServices) : undefined;
    obj.tx = message.tx ? TxDescriptor.toAmino(message.tx) : undefined;
    return obj;
  },
  fromAminoMsg(object: AppDescriptorAminoMsg): AppDescriptor {
    return AppDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message: AppDescriptor): AppDescriptorAminoMsg {
    return {
      type: "cosmos-sdk/AppDescriptor",
      value: AppDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message: AppDescriptorProtoMsg): AppDescriptor {
    return AppDescriptor.decode(message.value);
  },
  toProto(message: AppDescriptor): Uint8Array {
    return AppDescriptor.encode(message).finish();
  },
  toProtoMsg(message: AppDescriptor): AppDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.AppDescriptor",
      value: AppDescriptor.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AppDescriptor.typeUrl, AppDescriptor);
GlobalDecoderRegistry.registerAminoProtoMapping(AppDescriptor.aminoType, AppDescriptor.typeUrl);
function createBaseTxDescriptor(): TxDescriptor {
  return {
    fullname: "",
    msgs: []
  };
}
export const TxDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.TxDescriptor",
  aminoType: "cosmos-sdk/TxDescriptor",
  is(o: any): o is TxDescriptor {
    return o && (o.$typeUrl === TxDescriptor.typeUrl || typeof o.fullname === "string" && Array.isArray(o.msgs) && (!o.msgs.length || MsgDescriptor.is(o.msgs[0])));
  },
  isSDK(o: any): o is TxDescriptorSDKType {
    return o && (o.$typeUrl === TxDescriptor.typeUrl || typeof o.fullname === "string" && Array.isArray(o.msgs) && (!o.msgs.length || MsgDescriptor.isSDK(o.msgs[0])));
  },
  isAmino(o: any): o is TxDescriptorAmino {
    return o && (o.$typeUrl === TxDescriptor.typeUrl || typeof o.fullname === "string" && Array.isArray(o.msgs) && (!o.msgs.length || MsgDescriptor.isAmino(o.msgs[0])));
  },
  encode(message: TxDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fullname !== undefined) {
      writer.uint32(10).string(message.fullname);
    }
    for (const v of message.msgs) {
      MsgDescriptor.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TxDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTxDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.msgs.push(MsgDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TxDescriptor {
    const obj = createBaseTxDescriptor();
    if (isSet(object.fullname)) obj.fullname = String(object.fullname);
    if (Array.isArray(object?.msgs)) obj.msgs = object.msgs.map((e: any) => MsgDescriptor.fromJSON(e));
    return obj;
  },
  toJSON(message: TxDescriptor): unknown {
    const obj: any = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? MsgDescriptor.toJSON(e) : undefined);
    } else {
      obj.msgs = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<TxDescriptor>): TxDescriptor {
    const message = createBaseTxDescriptor();
    message.fullname = object.fullname ?? "";
    message.msgs = object.msgs?.map(e => MsgDescriptor.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: TxDescriptorSDKType): TxDescriptor {
    return {
      fullname: object?.fullname,
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => MsgDescriptor.fromSDK(e)) : []
    };
  },
  toSDK(message: TxDescriptor): TxDescriptorSDKType {
    const obj: any = {};
    obj.fullname = message.fullname;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? MsgDescriptor.toSDK(e) : undefined);
    } else {
      obj.msgs = [];
    }
    return obj;
  },
  fromAmino(object: TxDescriptorAmino): TxDescriptor {
    const message = createBaseTxDescriptor();
    if (object.fullname !== undefined && object.fullname !== null) {
      message.fullname = object.fullname;
    }
    message.msgs = object.msgs?.map(e => MsgDescriptor.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: TxDescriptor): TxDescriptorAmino {
    const obj: any = {};
    obj.fullname = message.fullname;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? MsgDescriptor.toAmino(e) : undefined);
    } else {
      obj.msgs = [];
    }
    return obj;
  },
  fromAminoMsg(object: TxDescriptorAminoMsg): TxDescriptor {
    return TxDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message: TxDescriptor): TxDescriptorAminoMsg {
    return {
      type: "cosmos-sdk/TxDescriptor",
      value: TxDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message: TxDescriptorProtoMsg): TxDescriptor {
    return TxDescriptor.decode(message.value);
  },
  toProto(message: TxDescriptor): Uint8Array {
    return TxDescriptor.encode(message).finish();
  },
  toProtoMsg(message: TxDescriptor): TxDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.TxDescriptor",
      value: TxDescriptor.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TxDescriptor.typeUrl, TxDescriptor);
GlobalDecoderRegistry.registerAminoProtoMapping(TxDescriptor.aminoType, TxDescriptor.typeUrl);
function createBaseAuthnDescriptor(): AuthnDescriptor {
  return {
    signModes: []
  };
}
export const AuthnDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.AuthnDescriptor",
  aminoType: "cosmos-sdk/AuthnDescriptor",
  is(o: any): o is AuthnDescriptor {
    return o && (o.$typeUrl === AuthnDescriptor.typeUrl || Array.isArray(o.signModes) && (!o.signModes.length || SigningModeDescriptor.is(o.signModes[0])));
  },
  isSDK(o: any): o is AuthnDescriptorSDKType {
    return o && (o.$typeUrl === AuthnDescriptor.typeUrl || Array.isArray(o.sign_modes) && (!o.sign_modes.length || SigningModeDescriptor.isSDK(o.sign_modes[0])));
  },
  isAmino(o: any): o is AuthnDescriptorAmino {
    return o && (o.$typeUrl === AuthnDescriptor.typeUrl || Array.isArray(o.sign_modes) && (!o.sign_modes.length || SigningModeDescriptor.isAmino(o.sign_modes[0])));
  },
  encode(message: AuthnDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.signModes) {
      SigningModeDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AuthnDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthnDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signModes.push(SigningModeDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AuthnDescriptor {
    const obj = createBaseAuthnDescriptor();
    if (Array.isArray(object?.signModes)) obj.signModes = object.signModes.map((e: any) => SigningModeDescriptor.fromJSON(e));
    return obj;
  },
  toJSON(message: AuthnDescriptor): unknown {
    const obj: any = {};
    if (message.signModes) {
      obj.signModes = message.signModes.map(e => e ? SigningModeDescriptor.toJSON(e) : undefined);
    } else {
      obj.signModes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<AuthnDescriptor>): AuthnDescriptor {
    const message = createBaseAuthnDescriptor();
    message.signModes = object.signModes?.map(e => SigningModeDescriptor.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: AuthnDescriptorSDKType): AuthnDescriptor {
    return {
      signModes: Array.isArray(object?.sign_modes) ? object.sign_modes.map((e: any) => SigningModeDescriptor.fromSDK(e)) : []
    };
  },
  toSDK(message: AuthnDescriptor): AuthnDescriptorSDKType {
    const obj: any = {};
    if (message.signModes) {
      obj.sign_modes = message.signModes.map(e => e ? SigningModeDescriptor.toSDK(e) : undefined);
    } else {
      obj.sign_modes = [];
    }
    return obj;
  },
  fromAmino(object: AuthnDescriptorAmino): AuthnDescriptor {
    const message = createBaseAuthnDescriptor();
    message.signModes = object.sign_modes?.map(e => SigningModeDescriptor.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: AuthnDescriptor): AuthnDescriptorAmino {
    const obj: any = {};
    if (message.signModes) {
      obj.sign_modes = message.signModes.map(e => e ? SigningModeDescriptor.toAmino(e) : undefined);
    } else {
      obj.sign_modes = [];
    }
    return obj;
  },
  fromAminoMsg(object: AuthnDescriptorAminoMsg): AuthnDescriptor {
    return AuthnDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message: AuthnDescriptor): AuthnDescriptorAminoMsg {
    return {
      type: "cosmos-sdk/AuthnDescriptor",
      value: AuthnDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message: AuthnDescriptorProtoMsg): AuthnDescriptor {
    return AuthnDescriptor.decode(message.value);
  },
  toProto(message: AuthnDescriptor): Uint8Array {
    return AuthnDescriptor.encode(message).finish();
  },
  toProtoMsg(message: AuthnDescriptor): AuthnDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.AuthnDescriptor",
      value: AuthnDescriptor.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(AuthnDescriptor.typeUrl, AuthnDescriptor);
GlobalDecoderRegistry.registerAminoProtoMapping(AuthnDescriptor.aminoType, AuthnDescriptor.typeUrl);
function createBaseSigningModeDescriptor(): SigningModeDescriptor {
  return {
    name: "",
    number: 0,
    authnInfoProviderMethodFullname: ""
  };
}
export const SigningModeDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.SigningModeDescriptor",
  aminoType: "cosmos-sdk/SigningModeDescriptor",
  is(o: any): o is SigningModeDescriptor {
    return o && (o.$typeUrl === SigningModeDescriptor.typeUrl || typeof o.name === "string" && typeof o.number === "number" && typeof o.authnInfoProviderMethodFullname === "string");
  },
  isSDK(o: any): o is SigningModeDescriptorSDKType {
    return o && (o.$typeUrl === SigningModeDescriptor.typeUrl || typeof o.name === "string" && typeof o.number === "number" && typeof o.authn_info_provider_method_fullname === "string");
  },
  isAmino(o: any): o is SigningModeDescriptorAmino {
    return o && (o.$typeUrl === SigningModeDescriptor.typeUrl || typeof o.name === "string" && typeof o.number === "number" && typeof o.authn_info_provider_method_fullname === "string");
  },
  encode(message: SigningModeDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.number !== undefined) {
      writer.uint32(16).int32(message.number);
    }
    if (message.authnInfoProviderMethodFullname !== undefined) {
      writer.uint32(26).string(message.authnInfoProviderMethodFullname);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SigningModeDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSigningModeDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.number = reader.int32();
          break;
        case 3:
          message.authnInfoProviderMethodFullname = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SigningModeDescriptor {
    const obj = createBaseSigningModeDescriptor();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.number)) obj.number = Number(object.number);
    if (isSet(object.authnInfoProviderMethodFullname)) obj.authnInfoProviderMethodFullname = String(object.authnInfoProviderMethodFullname);
    return obj;
  },
  toJSON(message: SigningModeDescriptor): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.number !== undefined && (obj.number = Math.round(message.number));
    message.authnInfoProviderMethodFullname !== undefined && (obj.authnInfoProviderMethodFullname = message.authnInfoProviderMethodFullname);
    return obj;
  },
  fromPartial(object: DeepPartial<SigningModeDescriptor>): SigningModeDescriptor {
    const message = createBaseSigningModeDescriptor();
    message.name = object.name ?? "";
    message.number = object.number ?? 0;
    message.authnInfoProviderMethodFullname = object.authnInfoProviderMethodFullname ?? "";
    return message;
  },
  fromSDK(object: SigningModeDescriptorSDKType): SigningModeDescriptor {
    return {
      name: object?.name,
      number: object?.number,
      authnInfoProviderMethodFullname: object?.authn_info_provider_method_fullname
    };
  },
  toSDK(message: SigningModeDescriptor): SigningModeDescriptorSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.number = message.number;
    obj.authn_info_provider_method_fullname = message.authnInfoProviderMethodFullname;
    return obj;
  },
  fromAmino(object: SigningModeDescriptorAmino): SigningModeDescriptor {
    const message = createBaseSigningModeDescriptor();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.number !== undefined && object.number !== null) {
      message.number = object.number;
    }
    if (object.authn_info_provider_method_fullname !== undefined && object.authn_info_provider_method_fullname !== null) {
      message.authnInfoProviderMethodFullname = object.authn_info_provider_method_fullname;
    }
    return message;
  },
  toAmino(message: SigningModeDescriptor): SigningModeDescriptorAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.number = message.number;
    obj.authn_info_provider_method_fullname = message.authnInfoProviderMethodFullname;
    return obj;
  },
  fromAminoMsg(object: SigningModeDescriptorAminoMsg): SigningModeDescriptor {
    return SigningModeDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message: SigningModeDescriptor): SigningModeDescriptorAminoMsg {
    return {
      type: "cosmos-sdk/SigningModeDescriptor",
      value: SigningModeDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message: SigningModeDescriptorProtoMsg): SigningModeDescriptor {
    return SigningModeDescriptor.decode(message.value);
  },
  toProto(message: SigningModeDescriptor): Uint8Array {
    return SigningModeDescriptor.encode(message).finish();
  },
  toProtoMsg(message: SigningModeDescriptor): SigningModeDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.SigningModeDescriptor",
      value: SigningModeDescriptor.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SigningModeDescriptor.typeUrl, SigningModeDescriptor);
GlobalDecoderRegistry.registerAminoProtoMapping(SigningModeDescriptor.aminoType, SigningModeDescriptor.typeUrl);
function createBaseChainDescriptor(): ChainDescriptor {
  return {
    id: ""
  };
}
export const ChainDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.ChainDescriptor",
  aminoType: "cosmos-sdk/ChainDescriptor",
  is(o: any): o is ChainDescriptor {
    return o && (o.$typeUrl === ChainDescriptor.typeUrl || typeof o.id === "string");
  },
  isSDK(o: any): o is ChainDescriptorSDKType {
    return o && (o.$typeUrl === ChainDescriptor.typeUrl || typeof o.id === "string");
  },
  isAmino(o: any): o is ChainDescriptorAmino {
    return o && (o.$typeUrl === ChainDescriptor.typeUrl || typeof o.id === "string");
  },
  encode(message: ChainDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ChainDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChainDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ChainDescriptor {
    const obj = createBaseChainDescriptor();
    if (isSet(object.id)) obj.id = String(object.id);
    return obj;
  },
  toJSON(message: ChainDescriptor): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
  fromPartial(object: DeepPartial<ChainDescriptor>): ChainDescriptor {
    const message = createBaseChainDescriptor();
    message.id = object.id ?? "";
    return message;
  },
  fromSDK(object: ChainDescriptorSDKType): ChainDescriptor {
    return {
      id: object?.id
    };
  },
  toSDK(message: ChainDescriptor): ChainDescriptorSDKType {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAmino(object: ChainDescriptorAmino): ChainDescriptor {
    const message = createBaseChainDescriptor();
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toAmino(message: ChainDescriptor): ChainDescriptorAmino {
    const obj: any = {};
    obj.id = message.id;
    return obj;
  },
  fromAminoMsg(object: ChainDescriptorAminoMsg): ChainDescriptor {
    return ChainDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message: ChainDescriptor): ChainDescriptorAminoMsg {
    return {
      type: "cosmos-sdk/ChainDescriptor",
      value: ChainDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message: ChainDescriptorProtoMsg): ChainDescriptor {
    return ChainDescriptor.decode(message.value);
  },
  toProto(message: ChainDescriptor): Uint8Array {
    return ChainDescriptor.encode(message).finish();
  },
  toProtoMsg(message: ChainDescriptor): ChainDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.ChainDescriptor",
      value: ChainDescriptor.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ChainDescriptor.typeUrl, ChainDescriptor);
GlobalDecoderRegistry.registerAminoProtoMapping(ChainDescriptor.aminoType, ChainDescriptor.typeUrl);
function createBaseCodecDescriptor(): CodecDescriptor {
  return {
    interfaces: []
  };
}
export const CodecDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.CodecDescriptor",
  aminoType: "cosmos-sdk/CodecDescriptor",
  is(o: any): o is CodecDescriptor {
    return o && (o.$typeUrl === CodecDescriptor.typeUrl || Array.isArray(o.interfaces) && (!o.interfaces.length || InterfaceDescriptor.is(o.interfaces[0])));
  },
  isSDK(o: any): o is CodecDescriptorSDKType {
    return o && (o.$typeUrl === CodecDescriptor.typeUrl || Array.isArray(o.interfaces) && (!o.interfaces.length || InterfaceDescriptor.isSDK(o.interfaces[0])));
  },
  isAmino(o: any): o is CodecDescriptorAmino {
    return o && (o.$typeUrl === CodecDescriptor.typeUrl || Array.isArray(o.interfaces) && (!o.interfaces.length || InterfaceDescriptor.isAmino(o.interfaces[0])));
  },
  encode(message: CodecDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.interfaces) {
      InterfaceDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CodecDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodecDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.interfaces.push(InterfaceDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CodecDescriptor {
    const obj = createBaseCodecDescriptor();
    if (Array.isArray(object?.interfaces)) obj.interfaces = object.interfaces.map((e: any) => InterfaceDescriptor.fromJSON(e));
    return obj;
  },
  toJSON(message: CodecDescriptor): unknown {
    const obj: any = {};
    if (message.interfaces) {
      obj.interfaces = message.interfaces.map(e => e ? InterfaceDescriptor.toJSON(e) : undefined);
    } else {
      obj.interfaces = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<CodecDescriptor>): CodecDescriptor {
    const message = createBaseCodecDescriptor();
    message.interfaces = object.interfaces?.map(e => InterfaceDescriptor.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: CodecDescriptorSDKType): CodecDescriptor {
    return {
      interfaces: Array.isArray(object?.interfaces) ? object.interfaces.map((e: any) => InterfaceDescriptor.fromSDK(e)) : []
    };
  },
  toSDK(message: CodecDescriptor): CodecDescriptorSDKType {
    const obj: any = {};
    if (message.interfaces) {
      obj.interfaces = message.interfaces.map(e => e ? InterfaceDescriptor.toSDK(e) : undefined);
    } else {
      obj.interfaces = [];
    }
    return obj;
  },
  fromAmino(object: CodecDescriptorAmino): CodecDescriptor {
    const message = createBaseCodecDescriptor();
    message.interfaces = object.interfaces?.map(e => InterfaceDescriptor.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CodecDescriptor): CodecDescriptorAmino {
    const obj: any = {};
    if (message.interfaces) {
      obj.interfaces = message.interfaces.map(e => e ? InterfaceDescriptor.toAmino(e) : undefined);
    } else {
      obj.interfaces = [];
    }
    return obj;
  },
  fromAminoMsg(object: CodecDescriptorAminoMsg): CodecDescriptor {
    return CodecDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message: CodecDescriptor): CodecDescriptorAminoMsg {
    return {
      type: "cosmos-sdk/CodecDescriptor",
      value: CodecDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message: CodecDescriptorProtoMsg): CodecDescriptor {
    return CodecDescriptor.decode(message.value);
  },
  toProto(message: CodecDescriptor): Uint8Array {
    return CodecDescriptor.encode(message).finish();
  },
  toProtoMsg(message: CodecDescriptor): CodecDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.CodecDescriptor",
      value: CodecDescriptor.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CodecDescriptor.typeUrl, CodecDescriptor);
GlobalDecoderRegistry.registerAminoProtoMapping(CodecDescriptor.aminoType, CodecDescriptor.typeUrl);
function createBaseInterfaceDescriptor(): InterfaceDescriptor {
  return {
    fullname: "",
    interfaceAcceptingMessages: [],
    interfaceImplementers: []
  };
}
export const InterfaceDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceDescriptor",
  aminoType: "cosmos-sdk/InterfaceDescriptor",
  is(o: any): o is InterfaceDescriptor {
    return o && (o.$typeUrl === InterfaceDescriptor.typeUrl || typeof o.fullname === "string" && Array.isArray(o.interfaceAcceptingMessages) && (!o.interfaceAcceptingMessages.length || InterfaceAcceptingMessageDescriptor.is(o.interfaceAcceptingMessages[0])) && Array.isArray(o.interfaceImplementers) && (!o.interfaceImplementers.length || InterfaceImplementerDescriptor.is(o.interfaceImplementers[0])));
  },
  isSDK(o: any): o is InterfaceDescriptorSDKType {
    return o && (o.$typeUrl === InterfaceDescriptor.typeUrl || typeof o.fullname === "string" && Array.isArray(o.interface_accepting_messages) && (!o.interface_accepting_messages.length || InterfaceAcceptingMessageDescriptor.isSDK(o.interface_accepting_messages[0])) && Array.isArray(o.interface_implementers) && (!o.interface_implementers.length || InterfaceImplementerDescriptor.isSDK(o.interface_implementers[0])));
  },
  isAmino(o: any): o is InterfaceDescriptorAmino {
    return o && (o.$typeUrl === InterfaceDescriptor.typeUrl || typeof o.fullname === "string" && Array.isArray(o.interface_accepting_messages) && (!o.interface_accepting_messages.length || InterfaceAcceptingMessageDescriptor.isAmino(o.interface_accepting_messages[0])) && Array.isArray(o.interface_implementers) && (!o.interface_implementers.length || InterfaceImplementerDescriptor.isAmino(o.interface_implementers[0])));
  },
  encode(message: InterfaceDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fullname !== undefined) {
      writer.uint32(10).string(message.fullname);
    }
    for (const v of message.interfaceAcceptingMessages) {
      InterfaceAcceptingMessageDescriptor.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.interfaceImplementers) {
      InterfaceImplementerDescriptor.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InterfaceDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterfaceDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.interfaceAcceptingMessages.push(InterfaceAcceptingMessageDescriptor.decode(reader, reader.uint32()));
          break;
        case 3:
          message.interfaceImplementers.push(InterfaceImplementerDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InterfaceDescriptor {
    const obj = createBaseInterfaceDescriptor();
    if (isSet(object.fullname)) obj.fullname = String(object.fullname);
    if (Array.isArray(object?.interfaceAcceptingMessages)) obj.interfaceAcceptingMessages = object.interfaceAcceptingMessages.map((e: any) => InterfaceAcceptingMessageDescriptor.fromJSON(e));
    if (Array.isArray(object?.interfaceImplementers)) obj.interfaceImplementers = object.interfaceImplementers.map((e: any) => InterfaceImplementerDescriptor.fromJSON(e));
    return obj;
  },
  toJSON(message: InterfaceDescriptor): unknown {
    const obj: any = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);
    if (message.interfaceAcceptingMessages) {
      obj.interfaceAcceptingMessages = message.interfaceAcceptingMessages.map(e => e ? InterfaceAcceptingMessageDescriptor.toJSON(e) : undefined);
    } else {
      obj.interfaceAcceptingMessages = [];
    }
    if (message.interfaceImplementers) {
      obj.interfaceImplementers = message.interfaceImplementers.map(e => e ? InterfaceImplementerDescriptor.toJSON(e) : undefined);
    } else {
      obj.interfaceImplementers = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<InterfaceDescriptor>): InterfaceDescriptor {
    const message = createBaseInterfaceDescriptor();
    message.fullname = object.fullname ?? "";
    message.interfaceAcceptingMessages = object.interfaceAcceptingMessages?.map(e => InterfaceAcceptingMessageDescriptor.fromPartial(e)) || [];
    message.interfaceImplementers = object.interfaceImplementers?.map(e => InterfaceImplementerDescriptor.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: InterfaceDescriptorSDKType): InterfaceDescriptor {
    return {
      fullname: object?.fullname,
      interfaceAcceptingMessages: Array.isArray(object?.interface_accepting_messages) ? object.interface_accepting_messages.map((e: any) => InterfaceAcceptingMessageDescriptor.fromSDK(e)) : [],
      interfaceImplementers: Array.isArray(object?.interface_implementers) ? object.interface_implementers.map((e: any) => InterfaceImplementerDescriptor.fromSDK(e)) : []
    };
  },
  toSDK(message: InterfaceDescriptor): InterfaceDescriptorSDKType {
    const obj: any = {};
    obj.fullname = message.fullname;
    if (message.interfaceAcceptingMessages) {
      obj.interface_accepting_messages = message.interfaceAcceptingMessages.map(e => e ? InterfaceAcceptingMessageDescriptor.toSDK(e) : undefined);
    } else {
      obj.interface_accepting_messages = [];
    }
    if (message.interfaceImplementers) {
      obj.interface_implementers = message.interfaceImplementers.map(e => e ? InterfaceImplementerDescriptor.toSDK(e) : undefined);
    } else {
      obj.interface_implementers = [];
    }
    return obj;
  },
  fromAmino(object: InterfaceDescriptorAmino): InterfaceDescriptor {
    const message = createBaseInterfaceDescriptor();
    if (object.fullname !== undefined && object.fullname !== null) {
      message.fullname = object.fullname;
    }
    message.interfaceAcceptingMessages = object.interface_accepting_messages?.map(e => InterfaceAcceptingMessageDescriptor.fromAmino(e)) || [];
    message.interfaceImplementers = object.interface_implementers?.map(e => InterfaceImplementerDescriptor.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: InterfaceDescriptor): InterfaceDescriptorAmino {
    const obj: any = {};
    obj.fullname = message.fullname;
    if (message.interfaceAcceptingMessages) {
      obj.interface_accepting_messages = message.interfaceAcceptingMessages.map(e => e ? InterfaceAcceptingMessageDescriptor.toAmino(e) : undefined);
    } else {
      obj.interface_accepting_messages = [];
    }
    if (message.interfaceImplementers) {
      obj.interface_implementers = message.interfaceImplementers.map(e => e ? InterfaceImplementerDescriptor.toAmino(e) : undefined);
    } else {
      obj.interface_implementers = [];
    }
    return obj;
  },
  fromAminoMsg(object: InterfaceDescriptorAminoMsg): InterfaceDescriptor {
    return InterfaceDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message: InterfaceDescriptor): InterfaceDescriptorAminoMsg {
    return {
      type: "cosmos-sdk/InterfaceDescriptor",
      value: InterfaceDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message: InterfaceDescriptorProtoMsg): InterfaceDescriptor {
    return InterfaceDescriptor.decode(message.value);
  },
  toProto(message: InterfaceDescriptor): Uint8Array {
    return InterfaceDescriptor.encode(message).finish();
  },
  toProtoMsg(message: InterfaceDescriptor): InterfaceDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceDescriptor",
      value: InterfaceDescriptor.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(InterfaceDescriptor.typeUrl, InterfaceDescriptor);
GlobalDecoderRegistry.registerAminoProtoMapping(InterfaceDescriptor.aminoType, InterfaceDescriptor.typeUrl);
function createBaseInterfaceImplementerDescriptor(): InterfaceImplementerDescriptor {
  return {
    fullname: "",
    typeUrl: ""
  };
}
export const InterfaceImplementerDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor",
  aminoType: "cosmos-sdk/InterfaceImplementerDescriptor",
  is(o: any): o is InterfaceImplementerDescriptor {
    return o && (o.$typeUrl === InterfaceImplementerDescriptor.typeUrl || typeof o.fullname === "string" && typeof o.typeUrl === "string");
  },
  isSDK(o: any): o is InterfaceImplementerDescriptorSDKType {
    return o && (o.$typeUrl === InterfaceImplementerDescriptor.typeUrl || typeof o.fullname === "string" && typeof o.type_url === "string");
  },
  isAmino(o: any): o is InterfaceImplementerDescriptorAmino {
    return o && (o.$typeUrl === InterfaceImplementerDescriptor.typeUrl || typeof o.fullname === "string" && typeof o.type_url === "string");
  },
  encode(message: InterfaceImplementerDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fullname !== undefined) {
      writer.uint32(10).string(message.fullname);
    }
    if (message.typeUrl !== undefined) {
      writer.uint32(18).string(message.typeUrl);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InterfaceImplementerDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterfaceImplementerDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.typeUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InterfaceImplementerDescriptor {
    const obj = createBaseInterfaceImplementerDescriptor();
    if (isSet(object.fullname)) obj.fullname = String(object.fullname);
    if (isSet(object.typeUrl)) obj.typeUrl = String(object.typeUrl);
    return obj;
  },
  toJSON(message: InterfaceImplementerDescriptor): unknown {
    const obj: any = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);
    message.typeUrl !== undefined && (obj.typeUrl = message.typeUrl);
    return obj;
  },
  fromPartial(object: DeepPartial<InterfaceImplementerDescriptor>): InterfaceImplementerDescriptor {
    const message = createBaseInterfaceImplementerDescriptor();
    message.fullname = object.fullname ?? "";
    message.typeUrl = object.typeUrl ?? "";
    return message;
  },
  fromSDK(object: InterfaceImplementerDescriptorSDKType): InterfaceImplementerDescriptor {
    return {
      fullname: object?.fullname,
      typeUrl: object?.type_url
    };
  },
  toSDK(message: InterfaceImplementerDescriptor): InterfaceImplementerDescriptorSDKType {
    const obj: any = {};
    obj.fullname = message.fullname;
    obj.type_url = message.typeUrl;
    return obj;
  },
  fromAmino(object: InterfaceImplementerDescriptorAmino): InterfaceImplementerDescriptor {
    const message = createBaseInterfaceImplementerDescriptor();
    if (object.fullname !== undefined && object.fullname !== null) {
      message.fullname = object.fullname;
    }
    if (object.type_url !== undefined && object.type_url !== null) {
      message.typeUrl = object.type_url;
    }
    return message;
  },
  toAmino(message: InterfaceImplementerDescriptor): InterfaceImplementerDescriptorAmino {
    const obj: any = {};
    obj.fullname = message.fullname;
    obj.type_url = message.typeUrl;
    return obj;
  },
  fromAminoMsg(object: InterfaceImplementerDescriptorAminoMsg): InterfaceImplementerDescriptor {
    return InterfaceImplementerDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message: InterfaceImplementerDescriptor): InterfaceImplementerDescriptorAminoMsg {
    return {
      type: "cosmos-sdk/InterfaceImplementerDescriptor",
      value: InterfaceImplementerDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message: InterfaceImplementerDescriptorProtoMsg): InterfaceImplementerDescriptor {
    return InterfaceImplementerDescriptor.decode(message.value);
  },
  toProto(message: InterfaceImplementerDescriptor): Uint8Array {
    return InterfaceImplementerDescriptor.encode(message).finish();
  },
  toProtoMsg(message: InterfaceImplementerDescriptor): InterfaceImplementerDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor",
      value: InterfaceImplementerDescriptor.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(InterfaceImplementerDescriptor.typeUrl, InterfaceImplementerDescriptor);
GlobalDecoderRegistry.registerAminoProtoMapping(InterfaceImplementerDescriptor.aminoType, InterfaceImplementerDescriptor.typeUrl);
function createBaseInterfaceAcceptingMessageDescriptor(): InterfaceAcceptingMessageDescriptor {
  return {
    fullname: "",
    fieldDescriptorNames: []
  };
}
export const InterfaceAcceptingMessageDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor",
  aminoType: "cosmos-sdk/InterfaceAcceptingMessageDescriptor",
  is(o: any): o is InterfaceAcceptingMessageDescriptor {
    return o && (o.$typeUrl === InterfaceAcceptingMessageDescriptor.typeUrl || typeof o.fullname === "string" && Array.isArray(o.fieldDescriptorNames) && (!o.fieldDescriptorNames.length || typeof o.fieldDescriptorNames[0] === "string"));
  },
  isSDK(o: any): o is InterfaceAcceptingMessageDescriptorSDKType {
    return o && (o.$typeUrl === InterfaceAcceptingMessageDescriptor.typeUrl || typeof o.fullname === "string" && Array.isArray(o.field_descriptor_names) && (!o.field_descriptor_names.length || typeof o.field_descriptor_names[0] === "string"));
  },
  isAmino(o: any): o is InterfaceAcceptingMessageDescriptorAmino {
    return o && (o.$typeUrl === InterfaceAcceptingMessageDescriptor.typeUrl || typeof o.fullname === "string" && Array.isArray(o.field_descriptor_names) && (!o.field_descriptor_names.length || typeof o.field_descriptor_names[0] === "string"));
  },
  encode(message: InterfaceAcceptingMessageDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fullname !== undefined) {
      writer.uint32(10).string(message.fullname);
    }
    for (const v of message.fieldDescriptorNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InterfaceAcceptingMessageDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterfaceAcceptingMessageDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.fieldDescriptorNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): InterfaceAcceptingMessageDescriptor {
    const obj = createBaseInterfaceAcceptingMessageDescriptor();
    if (isSet(object.fullname)) obj.fullname = String(object.fullname);
    if (Array.isArray(object?.fieldDescriptorNames)) obj.fieldDescriptorNames = object.fieldDescriptorNames.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: InterfaceAcceptingMessageDescriptor): unknown {
    const obj: any = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);
    if (message.fieldDescriptorNames) {
      obj.fieldDescriptorNames = message.fieldDescriptorNames.map(e => e);
    } else {
      obj.fieldDescriptorNames = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<InterfaceAcceptingMessageDescriptor>): InterfaceAcceptingMessageDescriptor {
    const message = createBaseInterfaceAcceptingMessageDescriptor();
    message.fullname = object.fullname ?? "";
    message.fieldDescriptorNames = object.fieldDescriptorNames?.map(e => e) || [];
    return message;
  },
  fromSDK(object: InterfaceAcceptingMessageDescriptorSDKType): InterfaceAcceptingMessageDescriptor {
    return {
      fullname: object?.fullname,
      fieldDescriptorNames: Array.isArray(object?.field_descriptor_names) ? object.field_descriptor_names.map((e: any) => e) : []
    };
  },
  toSDK(message: InterfaceAcceptingMessageDescriptor): InterfaceAcceptingMessageDescriptorSDKType {
    const obj: any = {};
    obj.fullname = message.fullname;
    if (message.fieldDescriptorNames) {
      obj.field_descriptor_names = message.fieldDescriptorNames.map(e => e);
    } else {
      obj.field_descriptor_names = [];
    }
    return obj;
  },
  fromAmino(object: InterfaceAcceptingMessageDescriptorAmino): InterfaceAcceptingMessageDescriptor {
    const message = createBaseInterfaceAcceptingMessageDescriptor();
    if (object.fullname !== undefined && object.fullname !== null) {
      message.fullname = object.fullname;
    }
    message.fieldDescriptorNames = object.field_descriptor_names?.map(e => e) || [];
    return message;
  },
  toAmino(message: InterfaceAcceptingMessageDescriptor): InterfaceAcceptingMessageDescriptorAmino {
    const obj: any = {};
    obj.fullname = message.fullname;
    if (message.fieldDescriptorNames) {
      obj.field_descriptor_names = message.fieldDescriptorNames.map(e => e);
    } else {
      obj.field_descriptor_names = [];
    }
    return obj;
  },
  fromAminoMsg(object: InterfaceAcceptingMessageDescriptorAminoMsg): InterfaceAcceptingMessageDescriptor {
    return InterfaceAcceptingMessageDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message: InterfaceAcceptingMessageDescriptor): InterfaceAcceptingMessageDescriptorAminoMsg {
    return {
      type: "cosmos-sdk/InterfaceAcceptingMessageDescriptor",
      value: InterfaceAcceptingMessageDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message: InterfaceAcceptingMessageDescriptorProtoMsg): InterfaceAcceptingMessageDescriptor {
    return InterfaceAcceptingMessageDescriptor.decode(message.value);
  },
  toProto(message: InterfaceAcceptingMessageDescriptor): Uint8Array {
    return InterfaceAcceptingMessageDescriptor.encode(message).finish();
  },
  toProtoMsg(message: InterfaceAcceptingMessageDescriptor): InterfaceAcceptingMessageDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor",
      value: InterfaceAcceptingMessageDescriptor.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(InterfaceAcceptingMessageDescriptor.typeUrl, InterfaceAcceptingMessageDescriptor);
GlobalDecoderRegistry.registerAminoProtoMapping(InterfaceAcceptingMessageDescriptor.aminoType, InterfaceAcceptingMessageDescriptor.typeUrl);
function createBaseConfigurationDescriptor(): ConfigurationDescriptor {
  return {
    bech32AccountAddressPrefix: ""
  };
}
export const ConfigurationDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.ConfigurationDescriptor",
  aminoType: "cosmos-sdk/ConfigurationDescriptor",
  is(o: any): o is ConfigurationDescriptor {
    return o && (o.$typeUrl === ConfigurationDescriptor.typeUrl || typeof o.bech32AccountAddressPrefix === "string");
  },
  isSDK(o: any): o is ConfigurationDescriptorSDKType {
    return o && (o.$typeUrl === ConfigurationDescriptor.typeUrl || typeof o.bech32_account_address_prefix === "string");
  },
  isAmino(o: any): o is ConfigurationDescriptorAmino {
    return o && (o.$typeUrl === ConfigurationDescriptor.typeUrl || typeof o.bech32_account_address_prefix === "string");
  },
  encode(message: ConfigurationDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bech32AccountAddressPrefix !== undefined) {
      writer.uint32(10).string(message.bech32AccountAddressPrefix);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConfigurationDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigurationDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bech32AccountAddressPrefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConfigurationDescriptor {
    const obj = createBaseConfigurationDescriptor();
    if (isSet(object.bech32AccountAddressPrefix)) obj.bech32AccountAddressPrefix = String(object.bech32AccountAddressPrefix);
    return obj;
  },
  toJSON(message: ConfigurationDescriptor): unknown {
    const obj: any = {};
    message.bech32AccountAddressPrefix !== undefined && (obj.bech32AccountAddressPrefix = message.bech32AccountAddressPrefix);
    return obj;
  },
  fromPartial(object: DeepPartial<ConfigurationDescriptor>): ConfigurationDescriptor {
    const message = createBaseConfigurationDescriptor();
    message.bech32AccountAddressPrefix = object.bech32AccountAddressPrefix ?? "";
    return message;
  },
  fromSDK(object: ConfigurationDescriptorSDKType): ConfigurationDescriptor {
    return {
      bech32AccountAddressPrefix: object?.bech32_account_address_prefix
    };
  },
  toSDK(message: ConfigurationDescriptor): ConfigurationDescriptorSDKType {
    const obj: any = {};
    obj.bech32_account_address_prefix = message.bech32AccountAddressPrefix;
    return obj;
  },
  fromAmino(object: ConfigurationDescriptorAmino): ConfigurationDescriptor {
    const message = createBaseConfigurationDescriptor();
    if (object.bech32_account_address_prefix !== undefined && object.bech32_account_address_prefix !== null) {
      message.bech32AccountAddressPrefix = object.bech32_account_address_prefix;
    }
    return message;
  },
  toAmino(message: ConfigurationDescriptor): ConfigurationDescriptorAmino {
    const obj: any = {};
    obj.bech32_account_address_prefix = message.bech32AccountAddressPrefix;
    return obj;
  },
  fromAminoMsg(object: ConfigurationDescriptorAminoMsg): ConfigurationDescriptor {
    return ConfigurationDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message: ConfigurationDescriptor): ConfigurationDescriptorAminoMsg {
    return {
      type: "cosmos-sdk/ConfigurationDescriptor",
      value: ConfigurationDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message: ConfigurationDescriptorProtoMsg): ConfigurationDescriptor {
    return ConfigurationDescriptor.decode(message.value);
  },
  toProto(message: ConfigurationDescriptor): Uint8Array {
    return ConfigurationDescriptor.encode(message).finish();
  },
  toProtoMsg(message: ConfigurationDescriptor): ConfigurationDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.ConfigurationDescriptor",
      value: ConfigurationDescriptor.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ConfigurationDescriptor.typeUrl, ConfigurationDescriptor);
GlobalDecoderRegistry.registerAminoProtoMapping(ConfigurationDescriptor.aminoType, ConfigurationDescriptor.typeUrl);
function createBaseMsgDescriptor(): MsgDescriptor {
  return {
    msgTypeUrl: ""
  };
}
export const MsgDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.MsgDescriptor",
  aminoType: "cosmos-sdk/MsgDescriptor",
  is(o: any): o is MsgDescriptor {
    return o && (o.$typeUrl === MsgDescriptor.typeUrl || typeof o.msgTypeUrl === "string");
  },
  isSDK(o: any): o is MsgDescriptorSDKType {
    return o && (o.$typeUrl === MsgDescriptor.typeUrl || typeof o.msg_type_url === "string");
  },
  isAmino(o: any): o is MsgDescriptorAmino {
    return o && (o.$typeUrl === MsgDescriptor.typeUrl || typeof o.msg_type_url === "string");
  },
  encode(message: MsgDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.msgTypeUrl !== undefined) {
      writer.uint32(10).string(message.msgTypeUrl);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.msgTypeUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDescriptor {
    const obj = createBaseMsgDescriptor();
    if (isSet(object.msgTypeUrl)) obj.msgTypeUrl = String(object.msgTypeUrl);
    return obj;
  },
  toJSON(message: MsgDescriptor): unknown {
    const obj: any = {};
    message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgDescriptor>): MsgDescriptor {
    const message = createBaseMsgDescriptor();
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    return message;
  },
  fromSDK(object: MsgDescriptorSDKType): MsgDescriptor {
    return {
      msgTypeUrl: object?.msg_type_url
    };
  },
  toSDK(message: MsgDescriptor): MsgDescriptorSDKType {
    const obj: any = {};
    obj.msg_type_url = message.msgTypeUrl;
    return obj;
  },
  fromAmino(object: MsgDescriptorAmino): MsgDescriptor {
    const message = createBaseMsgDescriptor();
    if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
      message.msgTypeUrl = object.msg_type_url;
    }
    return message;
  },
  toAmino(message: MsgDescriptor): MsgDescriptorAmino {
    const obj: any = {};
    obj.msg_type_url = message.msgTypeUrl;
    return obj;
  },
  fromAminoMsg(object: MsgDescriptorAminoMsg): MsgDescriptor {
    return MsgDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDescriptor): MsgDescriptorAminoMsg {
    return {
      type: "cosmos-sdk/MsgDescriptor",
      value: MsgDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDescriptorProtoMsg): MsgDescriptor {
    return MsgDescriptor.decode(message.value);
  },
  toProto(message: MsgDescriptor): Uint8Array {
    return MsgDescriptor.encode(message).finish();
  },
  toProtoMsg(message: MsgDescriptor): MsgDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.MsgDescriptor",
      value: MsgDescriptor.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDescriptor.typeUrl, MsgDescriptor);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgDescriptor.aminoType, MsgDescriptor.typeUrl);
function createBaseGetAuthnDescriptorRequest(): GetAuthnDescriptorRequest {
  return {};
}
export const GetAuthnDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest",
  aminoType: "cosmos-sdk/GetAuthnDescriptorRequest",
  is(o: any): o is GetAuthnDescriptorRequest {
    return o && o.$typeUrl === GetAuthnDescriptorRequest.typeUrl;
  },
  isSDK(o: any): o is GetAuthnDescriptorRequestSDKType {
    return o && o.$typeUrl === GetAuthnDescriptorRequest.typeUrl;
  },
  isAmino(o: any): o is GetAuthnDescriptorRequestAmino {
    return o && o.$typeUrl === GetAuthnDescriptorRequest.typeUrl;
  },
  encode(_: GetAuthnDescriptorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetAuthnDescriptorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthnDescriptorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): GetAuthnDescriptorRequest {
    const obj = createBaseGetAuthnDescriptorRequest();
    return obj;
  },
  toJSON(_: GetAuthnDescriptorRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<GetAuthnDescriptorRequest>): GetAuthnDescriptorRequest {
    const message = createBaseGetAuthnDescriptorRequest();
    return message;
  },
  fromSDK(_: GetAuthnDescriptorRequestSDKType): GetAuthnDescriptorRequest {
    return {};
  },
  toSDK(_: GetAuthnDescriptorRequest): GetAuthnDescriptorRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: GetAuthnDescriptorRequestAmino): GetAuthnDescriptorRequest {
    const message = createBaseGetAuthnDescriptorRequest();
    return message;
  },
  toAmino(_: GetAuthnDescriptorRequest): GetAuthnDescriptorRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: GetAuthnDescriptorRequestAminoMsg): GetAuthnDescriptorRequest {
    return GetAuthnDescriptorRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetAuthnDescriptorRequest): GetAuthnDescriptorRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetAuthnDescriptorRequest",
      value: GetAuthnDescriptorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetAuthnDescriptorRequestProtoMsg): GetAuthnDescriptorRequest {
    return GetAuthnDescriptorRequest.decode(message.value);
  },
  toProto(message: GetAuthnDescriptorRequest): Uint8Array {
    return GetAuthnDescriptorRequest.encode(message).finish();
  },
  toProtoMsg(message: GetAuthnDescriptorRequest): GetAuthnDescriptorRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest",
      value: GetAuthnDescriptorRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetAuthnDescriptorRequest.typeUrl, GetAuthnDescriptorRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GetAuthnDescriptorRequest.aminoType, GetAuthnDescriptorRequest.typeUrl);
function createBaseGetAuthnDescriptorResponse(): GetAuthnDescriptorResponse {
  return {
    authn: undefined
  };
}
export const GetAuthnDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse",
  aminoType: "cosmos-sdk/GetAuthnDescriptorResponse",
  is(o: any): o is GetAuthnDescriptorResponse {
    return o && o.$typeUrl === GetAuthnDescriptorResponse.typeUrl;
  },
  isSDK(o: any): o is GetAuthnDescriptorResponseSDKType {
    return o && o.$typeUrl === GetAuthnDescriptorResponse.typeUrl;
  },
  isAmino(o: any): o is GetAuthnDescriptorResponseAmino {
    return o && o.$typeUrl === GetAuthnDescriptorResponse.typeUrl;
  },
  encode(message: GetAuthnDescriptorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authn !== undefined) {
      AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetAuthnDescriptorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAuthnDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authn = AuthnDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetAuthnDescriptorResponse {
    const obj = createBaseGetAuthnDescriptorResponse();
    if (isSet(object.authn)) obj.authn = AuthnDescriptor.fromJSON(object.authn);
    return obj;
  },
  toJSON(message: GetAuthnDescriptorResponse): unknown {
    const obj: any = {};
    message.authn !== undefined && (obj.authn = message.authn ? AuthnDescriptor.toJSON(message.authn) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GetAuthnDescriptorResponse>): GetAuthnDescriptorResponse {
    const message = createBaseGetAuthnDescriptorResponse();
    if (object.authn !== undefined && object.authn !== null) {
      message.authn = AuthnDescriptor.fromPartial(object.authn);
    }
    return message;
  },
  fromSDK(object: GetAuthnDescriptorResponseSDKType): GetAuthnDescriptorResponse {
    return {
      authn: object.authn ? AuthnDescriptor.fromSDK(object.authn) : undefined
    };
  },
  toSDK(message: GetAuthnDescriptorResponse): GetAuthnDescriptorResponseSDKType {
    const obj: any = {};
    message.authn !== undefined && (obj.authn = message.authn ? AuthnDescriptor.toSDK(message.authn) : undefined);
    return obj;
  },
  fromAmino(object: GetAuthnDescriptorResponseAmino): GetAuthnDescriptorResponse {
    const message = createBaseGetAuthnDescriptorResponse();
    if (object.authn !== undefined && object.authn !== null) {
      message.authn = AuthnDescriptor.fromAmino(object.authn);
    }
    return message;
  },
  toAmino(message: GetAuthnDescriptorResponse): GetAuthnDescriptorResponseAmino {
    const obj: any = {};
    obj.authn = message.authn ? AuthnDescriptor.toAmino(message.authn) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetAuthnDescriptorResponseAminoMsg): GetAuthnDescriptorResponse {
    return GetAuthnDescriptorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetAuthnDescriptorResponse): GetAuthnDescriptorResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetAuthnDescriptorResponse",
      value: GetAuthnDescriptorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetAuthnDescriptorResponseProtoMsg): GetAuthnDescriptorResponse {
    return GetAuthnDescriptorResponse.decode(message.value);
  },
  toProto(message: GetAuthnDescriptorResponse): Uint8Array {
    return GetAuthnDescriptorResponse.encode(message).finish();
  },
  toProtoMsg(message: GetAuthnDescriptorResponse): GetAuthnDescriptorResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse",
      value: GetAuthnDescriptorResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetAuthnDescriptorResponse.typeUrl, GetAuthnDescriptorResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GetAuthnDescriptorResponse.aminoType, GetAuthnDescriptorResponse.typeUrl);
function createBaseGetChainDescriptorRequest(): GetChainDescriptorRequest {
  return {};
}
export const GetChainDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest",
  aminoType: "cosmos-sdk/GetChainDescriptorRequest",
  is(o: any): o is GetChainDescriptorRequest {
    return o && o.$typeUrl === GetChainDescriptorRequest.typeUrl;
  },
  isSDK(o: any): o is GetChainDescriptorRequestSDKType {
    return o && o.$typeUrl === GetChainDescriptorRequest.typeUrl;
  },
  isAmino(o: any): o is GetChainDescriptorRequestAmino {
    return o && o.$typeUrl === GetChainDescriptorRequest.typeUrl;
  },
  encode(_: GetChainDescriptorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetChainDescriptorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetChainDescriptorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): GetChainDescriptorRequest {
    const obj = createBaseGetChainDescriptorRequest();
    return obj;
  },
  toJSON(_: GetChainDescriptorRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<GetChainDescriptorRequest>): GetChainDescriptorRequest {
    const message = createBaseGetChainDescriptorRequest();
    return message;
  },
  fromSDK(_: GetChainDescriptorRequestSDKType): GetChainDescriptorRequest {
    return {};
  },
  toSDK(_: GetChainDescriptorRequest): GetChainDescriptorRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: GetChainDescriptorRequestAmino): GetChainDescriptorRequest {
    const message = createBaseGetChainDescriptorRequest();
    return message;
  },
  toAmino(_: GetChainDescriptorRequest): GetChainDescriptorRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: GetChainDescriptorRequestAminoMsg): GetChainDescriptorRequest {
    return GetChainDescriptorRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetChainDescriptorRequest): GetChainDescriptorRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetChainDescriptorRequest",
      value: GetChainDescriptorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetChainDescriptorRequestProtoMsg): GetChainDescriptorRequest {
    return GetChainDescriptorRequest.decode(message.value);
  },
  toProto(message: GetChainDescriptorRequest): Uint8Array {
    return GetChainDescriptorRequest.encode(message).finish();
  },
  toProtoMsg(message: GetChainDescriptorRequest): GetChainDescriptorRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest",
      value: GetChainDescriptorRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetChainDescriptorRequest.typeUrl, GetChainDescriptorRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GetChainDescriptorRequest.aminoType, GetChainDescriptorRequest.typeUrl);
function createBaseGetChainDescriptorResponse(): GetChainDescriptorResponse {
  return {
    chain: undefined
  };
}
export const GetChainDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse",
  aminoType: "cosmos-sdk/GetChainDescriptorResponse",
  is(o: any): o is GetChainDescriptorResponse {
    return o && o.$typeUrl === GetChainDescriptorResponse.typeUrl;
  },
  isSDK(o: any): o is GetChainDescriptorResponseSDKType {
    return o && o.$typeUrl === GetChainDescriptorResponse.typeUrl;
  },
  isAmino(o: any): o is GetChainDescriptorResponseAmino {
    return o && o.$typeUrl === GetChainDescriptorResponse.typeUrl;
  },
  encode(message: GetChainDescriptorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chain !== undefined) {
      ChainDescriptor.encode(message.chain, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetChainDescriptorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetChainDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain = ChainDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetChainDescriptorResponse {
    const obj = createBaseGetChainDescriptorResponse();
    if (isSet(object.chain)) obj.chain = ChainDescriptor.fromJSON(object.chain);
    return obj;
  },
  toJSON(message: GetChainDescriptorResponse): unknown {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain ? ChainDescriptor.toJSON(message.chain) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GetChainDescriptorResponse>): GetChainDescriptorResponse {
    const message = createBaseGetChainDescriptorResponse();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = ChainDescriptor.fromPartial(object.chain);
    }
    return message;
  },
  fromSDK(object: GetChainDescriptorResponseSDKType): GetChainDescriptorResponse {
    return {
      chain: object.chain ? ChainDescriptor.fromSDK(object.chain) : undefined
    };
  },
  toSDK(message: GetChainDescriptorResponse): GetChainDescriptorResponseSDKType {
    const obj: any = {};
    message.chain !== undefined && (obj.chain = message.chain ? ChainDescriptor.toSDK(message.chain) : undefined);
    return obj;
  },
  fromAmino(object: GetChainDescriptorResponseAmino): GetChainDescriptorResponse {
    const message = createBaseGetChainDescriptorResponse();
    if (object.chain !== undefined && object.chain !== null) {
      message.chain = ChainDescriptor.fromAmino(object.chain);
    }
    return message;
  },
  toAmino(message: GetChainDescriptorResponse): GetChainDescriptorResponseAmino {
    const obj: any = {};
    obj.chain = message.chain ? ChainDescriptor.toAmino(message.chain) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetChainDescriptorResponseAminoMsg): GetChainDescriptorResponse {
    return GetChainDescriptorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetChainDescriptorResponse): GetChainDescriptorResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetChainDescriptorResponse",
      value: GetChainDescriptorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetChainDescriptorResponseProtoMsg): GetChainDescriptorResponse {
    return GetChainDescriptorResponse.decode(message.value);
  },
  toProto(message: GetChainDescriptorResponse): Uint8Array {
    return GetChainDescriptorResponse.encode(message).finish();
  },
  toProtoMsg(message: GetChainDescriptorResponse): GetChainDescriptorResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse",
      value: GetChainDescriptorResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetChainDescriptorResponse.typeUrl, GetChainDescriptorResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GetChainDescriptorResponse.aminoType, GetChainDescriptorResponse.typeUrl);
function createBaseGetCodecDescriptorRequest(): GetCodecDescriptorRequest {
  return {};
}
export const GetCodecDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest",
  aminoType: "cosmos-sdk/GetCodecDescriptorRequest",
  is(o: any): o is GetCodecDescriptorRequest {
    return o && o.$typeUrl === GetCodecDescriptorRequest.typeUrl;
  },
  isSDK(o: any): o is GetCodecDescriptorRequestSDKType {
    return o && o.$typeUrl === GetCodecDescriptorRequest.typeUrl;
  },
  isAmino(o: any): o is GetCodecDescriptorRequestAmino {
    return o && o.$typeUrl === GetCodecDescriptorRequest.typeUrl;
  },
  encode(_: GetCodecDescriptorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetCodecDescriptorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCodecDescriptorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): GetCodecDescriptorRequest {
    const obj = createBaseGetCodecDescriptorRequest();
    return obj;
  },
  toJSON(_: GetCodecDescriptorRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<GetCodecDescriptorRequest>): GetCodecDescriptorRequest {
    const message = createBaseGetCodecDescriptorRequest();
    return message;
  },
  fromSDK(_: GetCodecDescriptorRequestSDKType): GetCodecDescriptorRequest {
    return {};
  },
  toSDK(_: GetCodecDescriptorRequest): GetCodecDescriptorRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: GetCodecDescriptorRequestAmino): GetCodecDescriptorRequest {
    const message = createBaseGetCodecDescriptorRequest();
    return message;
  },
  toAmino(_: GetCodecDescriptorRequest): GetCodecDescriptorRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: GetCodecDescriptorRequestAminoMsg): GetCodecDescriptorRequest {
    return GetCodecDescriptorRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetCodecDescriptorRequest): GetCodecDescriptorRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetCodecDescriptorRequest",
      value: GetCodecDescriptorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetCodecDescriptorRequestProtoMsg): GetCodecDescriptorRequest {
    return GetCodecDescriptorRequest.decode(message.value);
  },
  toProto(message: GetCodecDescriptorRequest): Uint8Array {
    return GetCodecDescriptorRequest.encode(message).finish();
  },
  toProtoMsg(message: GetCodecDescriptorRequest): GetCodecDescriptorRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest",
      value: GetCodecDescriptorRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetCodecDescriptorRequest.typeUrl, GetCodecDescriptorRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GetCodecDescriptorRequest.aminoType, GetCodecDescriptorRequest.typeUrl);
function createBaseGetCodecDescriptorResponse(): GetCodecDescriptorResponse {
  return {
    codec: undefined
  };
}
export const GetCodecDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse",
  aminoType: "cosmos-sdk/GetCodecDescriptorResponse",
  is(o: any): o is GetCodecDescriptorResponse {
    return o && o.$typeUrl === GetCodecDescriptorResponse.typeUrl;
  },
  isSDK(o: any): o is GetCodecDescriptorResponseSDKType {
    return o && o.$typeUrl === GetCodecDescriptorResponse.typeUrl;
  },
  isAmino(o: any): o is GetCodecDescriptorResponseAmino {
    return o && o.$typeUrl === GetCodecDescriptorResponse.typeUrl;
  },
  encode(message: GetCodecDescriptorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codec !== undefined) {
      CodecDescriptor.encode(message.codec, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetCodecDescriptorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCodecDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codec = CodecDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetCodecDescriptorResponse {
    const obj = createBaseGetCodecDescriptorResponse();
    if (isSet(object.codec)) obj.codec = CodecDescriptor.fromJSON(object.codec);
    return obj;
  },
  toJSON(message: GetCodecDescriptorResponse): unknown {
    const obj: any = {};
    message.codec !== undefined && (obj.codec = message.codec ? CodecDescriptor.toJSON(message.codec) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GetCodecDescriptorResponse>): GetCodecDescriptorResponse {
    const message = createBaseGetCodecDescriptorResponse();
    if (object.codec !== undefined && object.codec !== null) {
      message.codec = CodecDescriptor.fromPartial(object.codec);
    }
    return message;
  },
  fromSDK(object: GetCodecDescriptorResponseSDKType): GetCodecDescriptorResponse {
    return {
      codec: object.codec ? CodecDescriptor.fromSDK(object.codec) : undefined
    };
  },
  toSDK(message: GetCodecDescriptorResponse): GetCodecDescriptorResponseSDKType {
    const obj: any = {};
    message.codec !== undefined && (obj.codec = message.codec ? CodecDescriptor.toSDK(message.codec) : undefined);
    return obj;
  },
  fromAmino(object: GetCodecDescriptorResponseAmino): GetCodecDescriptorResponse {
    const message = createBaseGetCodecDescriptorResponse();
    if (object.codec !== undefined && object.codec !== null) {
      message.codec = CodecDescriptor.fromAmino(object.codec);
    }
    return message;
  },
  toAmino(message: GetCodecDescriptorResponse): GetCodecDescriptorResponseAmino {
    const obj: any = {};
    obj.codec = message.codec ? CodecDescriptor.toAmino(message.codec) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetCodecDescriptorResponseAminoMsg): GetCodecDescriptorResponse {
    return GetCodecDescriptorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetCodecDescriptorResponse): GetCodecDescriptorResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetCodecDescriptorResponse",
      value: GetCodecDescriptorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetCodecDescriptorResponseProtoMsg): GetCodecDescriptorResponse {
    return GetCodecDescriptorResponse.decode(message.value);
  },
  toProto(message: GetCodecDescriptorResponse): Uint8Array {
    return GetCodecDescriptorResponse.encode(message).finish();
  },
  toProtoMsg(message: GetCodecDescriptorResponse): GetCodecDescriptorResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse",
      value: GetCodecDescriptorResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetCodecDescriptorResponse.typeUrl, GetCodecDescriptorResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GetCodecDescriptorResponse.aminoType, GetCodecDescriptorResponse.typeUrl);
function createBaseGetConfigurationDescriptorRequest(): GetConfigurationDescriptorRequest {
  return {};
}
export const GetConfigurationDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest",
  aminoType: "cosmos-sdk/GetConfigurationDescriptorRequest",
  is(o: any): o is GetConfigurationDescriptorRequest {
    return o && o.$typeUrl === GetConfigurationDescriptorRequest.typeUrl;
  },
  isSDK(o: any): o is GetConfigurationDescriptorRequestSDKType {
    return o && o.$typeUrl === GetConfigurationDescriptorRequest.typeUrl;
  },
  isAmino(o: any): o is GetConfigurationDescriptorRequestAmino {
    return o && o.$typeUrl === GetConfigurationDescriptorRequest.typeUrl;
  },
  encode(_: GetConfigurationDescriptorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetConfigurationDescriptorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetConfigurationDescriptorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): GetConfigurationDescriptorRequest {
    const obj = createBaseGetConfigurationDescriptorRequest();
    return obj;
  },
  toJSON(_: GetConfigurationDescriptorRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<GetConfigurationDescriptorRequest>): GetConfigurationDescriptorRequest {
    const message = createBaseGetConfigurationDescriptorRequest();
    return message;
  },
  fromSDK(_: GetConfigurationDescriptorRequestSDKType): GetConfigurationDescriptorRequest {
    return {};
  },
  toSDK(_: GetConfigurationDescriptorRequest): GetConfigurationDescriptorRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: GetConfigurationDescriptorRequestAmino): GetConfigurationDescriptorRequest {
    const message = createBaseGetConfigurationDescriptorRequest();
    return message;
  },
  toAmino(_: GetConfigurationDescriptorRequest): GetConfigurationDescriptorRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: GetConfigurationDescriptorRequestAminoMsg): GetConfigurationDescriptorRequest {
    return GetConfigurationDescriptorRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetConfigurationDescriptorRequest): GetConfigurationDescriptorRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetConfigurationDescriptorRequest",
      value: GetConfigurationDescriptorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetConfigurationDescriptorRequestProtoMsg): GetConfigurationDescriptorRequest {
    return GetConfigurationDescriptorRequest.decode(message.value);
  },
  toProto(message: GetConfigurationDescriptorRequest): Uint8Array {
    return GetConfigurationDescriptorRequest.encode(message).finish();
  },
  toProtoMsg(message: GetConfigurationDescriptorRequest): GetConfigurationDescriptorRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest",
      value: GetConfigurationDescriptorRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetConfigurationDescriptorRequest.typeUrl, GetConfigurationDescriptorRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GetConfigurationDescriptorRequest.aminoType, GetConfigurationDescriptorRequest.typeUrl);
function createBaseGetConfigurationDescriptorResponse(): GetConfigurationDescriptorResponse {
  return {
    config: undefined
  };
}
export const GetConfigurationDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse",
  aminoType: "cosmos-sdk/GetConfigurationDescriptorResponse",
  is(o: any): o is GetConfigurationDescriptorResponse {
    return o && o.$typeUrl === GetConfigurationDescriptorResponse.typeUrl;
  },
  isSDK(o: any): o is GetConfigurationDescriptorResponseSDKType {
    return o && o.$typeUrl === GetConfigurationDescriptorResponse.typeUrl;
  },
  isAmino(o: any): o is GetConfigurationDescriptorResponseAmino {
    return o && o.$typeUrl === GetConfigurationDescriptorResponse.typeUrl;
  },
  encode(message: GetConfigurationDescriptorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.config !== undefined) {
      ConfigurationDescriptor.encode(message.config, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetConfigurationDescriptorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetConfigurationDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.config = ConfigurationDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetConfigurationDescriptorResponse {
    const obj = createBaseGetConfigurationDescriptorResponse();
    if (isSet(object.config)) obj.config = ConfigurationDescriptor.fromJSON(object.config);
    return obj;
  },
  toJSON(message: GetConfigurationDescriptorResponse): unknown {
    const obj: any = {};
    message.config !== undefined && (obj.config = message.config ? ConfigurationDescriptor.toJSON(message.config) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GetConfigurationDescriptorResponse>): GetConfigurationDescriptorResponse {
    const message = createBaseGetConfigurationDescriptorResponse();
    if (object.config !== undefined && object.config !== null) {
      message.config = ConfigurationDescriptor.fromPartial(object.config);
    }
    return message;
  },
  fromSDK(object: GetConfigurationDescriptorResponseSDKType): GetConfigurationDescriptorResponse {
    return {
      config: object.config ? ConfigurationDescriptor.fromSDK(object.config) : undefined
    };
  },
  toSDK(message: GetConfigurationDescriptorResponse): GetConfigurationDescriptorResponseSDKType {
    const obj: any = {};
    message.config !== undefined && (obj.config = message.config ? ConfigurationDescriptor.toSDK(message.config) : undefined);
    return obj;
  },
  fromAmino(object: GetConfigurationDescriptorResponseAmino): GetConfigurationDescriptorResponse {
    const message = createBaseGetConfigurationDescriptorResponse();
    if (object.config !== undefined && object.config !== null) {
      message.config = ConfigurationDescriptor.fromAmino(object.config);
    }
    return message;
  },
  toAmino(message: GetConfigurationDescriptorResponse): GetConfigurationDescriptorResponseAmino {
    const obj: any = {};
    obj.config = message.config ? ConfigurationDescriptor.toAmino(message.config) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetConfigurationDescriptorResponseAminoMsg): GetConfigurationDescriptorResponse {
    return GetConfigurationDescriptorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetConfigurationDescriptorResponse): GetConfigurationDescriptorResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetConfigurationDescriptorResponse",
      value: GetConfigurationDescriptorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetConfigurationDescriptorResponseProtoMsg): GetConfigurationDescriptorResponse {
    return GetConfigurationDescriptorResponse.decode(message.value);
  },
  toProto(message: GetConfigurationDescriptorResponse): Uint8Array {
    return GetConfigurationDescriptorResponse.encode(message).finish();
  },
  toProtoMsg(message: GetConfigurationDescriptorResponse): GetConfigurationDescriptorResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse",
      value: GetConfigurationDescriptorResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetConfigurationDescriptorResponse.typeUrl, GetConfigurationDescriptorResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GetConfigurationDescriptorResponse.aminoType, GetConfigurationDescriptorResponse.typeUrl);
function createBaseGetQueryServicesDescriptorRequest(): GetQueryServicesDescriptorRequest {
  return {};
}
export const GetQueryServicesDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest",
  aminoType: "cosmos-sdk/GetQueryServicesDescriptorRequest",
  is(o: any): o is GetQueryServicesDescriptorRequest {
    return o && o.$typeUrl === GetQueryServicesDescriptorRequest.typeUrl;
  },
  isSDK(o: any): o is GetQueryServicesDescriptorRequestSDKType {
    return o && o.$typeUrl === GetQueryServicesDescriptorRequest.typeUrl;
  },
  isAmino(o: any): o is GetQueryServicesDescriptorRequestAmino {
    return o && o.$typeUrl === GetQueryServicesDescriptorRequest.typeUrl;
  },
  encode(_: GetQueryServicesDescriptorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetQueryServicesDescriptorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetQueryServicesDescriptorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): GetQueryServicesDescriptorRequest {
    const obj = createBaseGetQueryServicesDescriptorRequest();
    return obj;
  },
  toJSON(_: GetQueryServicesDescriptorRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<GetQueryServicesDescriptorRequest>): GetQueryServicesDescriptorRequest {
    const message = createBaseGetQueryServicesDescriptorRequest();
    return message;
  },
  fromSDK(_: GetQueryServicesDescriptorRequestSDKType): GetQueryServicesDescriptorRequest {
    return {};
  },
  toSDK(_: GetQueryServicesDescriptorRequest): GetQueryServicesDescriptorRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: GetQueryServicesDescriptorRequestAmino): GetQueryServicesDescriptorRequest {
    const message = createBaseGetQueryServicesDescriptorRequest();
    return message;
  },
  toAmino(_: GetQueryServicesDescriptorRequest): GetQueryServicesDescriptorRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: GetQueryServicesDescriptorRequestAminoMsg): GetQueryServicesDescriptorRequest {
    return GetQueryServicesDescriptorRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetQueryServicesDescriptorRequest): GetQueryServicesDescriptorRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetQueryServicesDescriptorRequest",
      value: GetQueryServicesDescriptorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetQueryServicesDescriptorRequestProtoMsg): GetQueryServicesDescriptorRequest {
    return GetQueryServicesDescriptorRequest.decode(message.value);
  },
  toProto(message: GetQueryServicesDescriptorRequest): Uint8Array {
    return GetQueryServicesDescriptorRequest.encode(message).finish();
  },
  toProtoMsg(message: GetQueryServicesDescriptorRequest): GetQueryServicesDescriptorRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest",
      value: GetQueryServicesDescriptorRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetQueryServicesDescriptorRequest.typeUrl, GetQueryServicesDescriptorRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GetQueryServicesDescriptorRequest.aminoType, GetQueryServicesDescriptorRequest.typeUrl);
function createBaseGetQueryServicesDescriptorResponse(): GetQueryServicesDescriptorResponse {
  return {
    queries: undefined
  };
}
export const GetQueryServicesDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse",
  aminoType: "cosmos-sdk/GetQueryServicesDescriptorResponse",
  is(o: any): o is GetQueryServicesDescriptorResponse {
    return o && o.$typeUrl === GetQueryServicesDescriptorResponse.typeUrl;
  },
  isSDK(o: any): o is GetQueryServicesDescriptorResponseSDKType {
    return o && o.$typeUrl === GetQueryServicesDescriptorResponse.typeUrl;
  },
  isAmino(o: any): o is GetQueryServicesDescriptorResponseAmino {
    return o && o.$typeUrl === GetQueryServicesDescriptorResponse.typeUrl;
  },
  encode(message: GetQueryServicesDescriptorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.queries !== undefined) {
      QueryServicesDescriptor.encode(message.queries, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetQueryServicesDescriptorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetQueryServicesDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queries = QueryServicesDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetQueryServicesDescriptorResponse {
    const obj = createBaseGetQueryServicesDescriptorResponse();
    if (isSet(object.queries)) obj.queries = QueryServicesDescriptor.fromJSON(object.queries);
    return obj;
  },
  toJSON(message: GetQueryServicesDescriptorResponse): unknown {
    const obj: any = {};
    message.queries !== undefined && (obj.queries = message.queries ? QueryServicesDescriptor.toJSON(message.queries) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GetQueryServicesDescriptorResponse>): GetQueryServicesDescriptorResponse {
    const message = createBaseGetQueryServicesDescriptorResponse();
    if (object.queries !== undefined && object.queries !== null) {
      message.queries = QueryServicesDescriptor.fromPartial(object.queries);
    }
    return message;
  },
  fromSDK(object: GetQueryServicesDescriptorResponseSDKType): GetQueryServicesDescriptorResponse {
    return {
      queries: object.queries ? QueryServicesDescriptor.fromSDK(object.queries) : undefined
    };
  },
  toSDK(message: GetQueryServicesDescriptorResponse): GetQueryServicesDescriptorResponseSDKType {
    const obj: any = {};
    message.queries !== undefined && (obj.queries = message.queries ? QueryServicesDescriptor.toSDK(message.queries) : undefined);
    return obj;
  },
  fromAmino(object: GetQueryServicesDescriptorResponseAmino): GetQueryServicesDescriptorResponse {
    const message = createBaseGetQueryServicesDescriptorResponse();
    if (object.queries !== undefined && object.queries !== null) {
      message.queries = QueryServicesDescriptor.fromAmino(object.queries);
    }
    return message;
  },
  toAmino(message: GetQueryServicesDescriptorResponse): GetQueryServicesDescriptorResponseAmino {
    const obj: any = {};
    obj.queries = message.queries ? QueryServicesDescriptor.toAmino(message.queries) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetQueryServicesDescriptorResponseAminoMsg): GetQueryServicesDescriptorResponse {
    return GetQueryServicesDescriptorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetQueryServicesDescriptorResponse): GetQueryServicesDescriptorResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetQueryServicesDescriptorResponse",
      value: GetQueryServicesDescriptorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetQueryServicesDescriptorResponseProtoMsg): GetQueryServicesDescriptorResponse {
    return GetQueryServicesDescriptorResponse.decode(message.value);
  },
  toProto(message: GetQueryServicesDescriptorResponse): Uint8Array {
    return GetQueryServicesDescriptorResponse.encode(message).finish();
  },
  toProtoMsg(message: GetQueryServicesDescriptorResponse): GetQueryServicesDescriptorResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse",
      value: GetQueryServicesDescriptorResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetQueryServicesDescriptorResponse.typeUrl, GetQueryServicesDescriptorResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GetQueryServicesDescriptorResponse.aminoType, GetQueryServicesDescriptorResponse.typeUrl);
function createBaseGetTxDescriptorRequest(): GetTxDescriptorRequest {
  return {};
}
export const GetTxDescriptorRequest = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest",
  aminoType: "cosmos-sdk/GetTxDescriptorRequest",
  is(o: any): o is GetTxDescriptorRequest {
    return o && o.$typeUrl === GetTxDescriptorRequest.typeUrl;
  },
  isSDK(o: any): o is GetTxDescriptorRequestSDKType {
    return o && o.$typeUrl === GetTxDescriptorRequest.typeUrl;
  },
  isAmino(o: any): o is GetTxDescriptorRequestAmino {
    return o && o.$typeUrl === GetTxDescriptorRequest.typeUrl;
  },
  encode(_: GetTxDescriptorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetTxDescriptorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxDescriptorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): GetTxDescriptorRequest {
    const obj = createBaseGetTxDescriptorRequest();
    return obj;
  },
  toJSON(_: GetTxDescriptorRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<GetTxDescriptorRequest>): GetTxDescriptorRequest {
    const message = createBaseGetTxDescriptorRequest();
    return message;
  },
  fromSDK(_: GetTxDescriptorRequestSDKType): GetTxDescriptorRequest {
    return {};
  },
  toSDK(_: GetTxDescriptorRequest): GetTxDescriptorRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: GetTxDescriptorRequestAmino): GetTxDescriptorRequest {
    const message = createBaseGetTxDescriptorRequest();
    return message;
  },
  toAmino(_: GetTxDescriptorRequest): GetTxDescriptorRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: GetTxDescriptorRequestAminoMsg): GetTxDescriptorRequest {
    return GetTxDescriptorRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GetTxDescriptorRequest): GetTxDescriptorRequestAminoMsg {
    return {
      type: "cosmos-sdk/GetTxDescriptorRequest",
      value: GetTxDescriptorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GetTxDescriptorRequestProtoMsg): GetTxDescriptorRequest {
    return GetTxDescriptorRequest.decode(message.value);
  },
  toProto(message: GetTxDescriptorRequest): Uint8Array {
    return GetTxDescriptorRequest.encode(message).finish();
  },
  toProtoMsg(message: GetTxDescriptorRequest): GetTxDescriptorRequestProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest",
      value: GetTxDescriptorRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetTxDescriptorRequest.typeUrl, GetTxDescriptorRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GetTxDescriptorRequest.aminoType, GetTxDescriptorRequest.typeUrl);
function createBaseGetTxDescriptorResponse(): GetTxDescriptorResponse {
  return {
    tx: undefined
  };
}
export const GetTxDescriptorResponse = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse",
  aminoType: "cosmos-sdk/GetTxDescriptorResponse",
  is(o: any): o is GetTxDescriptorResponse {
    return o && o.$typeUrl === GetTxDescriptorResponse.typeUrl;
  },
  isSDK(o: any): o is GetTxDescriptorResponseSDKType {
    return o && o.$typeUrl === GetTxDescriptorResponse.typeUrl;
  },
  isAmino(o: any): o is GetTxDescriptorResponseAmino {
    return o && o.$typeUrl === GetTxDescriptorResponse.typeUrl;
  },
  encode(message: GetTxDescriptorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tx !== undefined) {
      TxDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GetTxDescriptorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTxDescriptorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = TxDescriptor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetTxDescriptorResponse {
    const obj = createBaseGetTxDescriptorResponse();
    if (isSet(object.tx)) obj.tx = TxDescriptor.fromJSON(object.tx);
    return obj;
  },
  toJSON(message: GetTxDescriptorResponse): unknown {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? TxDescriptor.toJSON(message.tx) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<GetTxDescriptorResponse>): GetTxDescriptorResponse {
    const message = createBaseGetTxDescriptorResponse();
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = TxDescriptor.fromPartial(object.tx);
    }
    return message;
  },
  fromSDK(object: GetTxDescriptorResponseSDKType): GetTxDescriptorResponse {
    return {
      tx: object.tx ? TxDescriptor.fromSDK(object.tx) : undefined
    };
  },
  toSDK(message: GetTxDescriptorResponse): GetTxDescriptorResponseSDKType {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? TxDescriptor.toSDK(message.tx) : undefined);
    return obj;
  },
  fromAmino(object: GetTxDescriptorResponseAmino): GetTxDescriptorResponse {
    const message = createBaseGetTxDescriptorResponse();
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = TxDescriptor.fromAmino(object.tx);
    }
    return message;
  },
  toAmino(message: GetTxDescriptorResponse): GetTxDescriptorResponseAmino {
    const obj: any = {};
    obj.tx = message.tx ? TxDescriptor.toAmino(message.tx) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetTxDescriptorResponseAminoMsg): GetTxDescriptorResponse {
    return GetTxDescriptorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GetTxDescriptorResponse): GetTxDescriptorResponseAminoMsg {
    return {
      type: "cosmos-sdk/GetTxDescriptorResponse",
      value: GetTxDescriptorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GetTxDescriptorResponseProtoMsg): GetTxDescriptorResponse {
    return GetTxDescriptorResponse.decode(message.value);
  },
  toProto(message: GetTxDescriptorResponse): Uint8Array {
    return GetTxDescriptorResponse.encode(message).finish();
  },
  toProtoMsg(message: GetTxDescriptorResponse): GetTxDescriptorResponseProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse",
      value: GetTxDescriptorResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GetTxDescriptorResponse.typeUrl, GetTxDescriptorResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GetTxDescriptorResponse.aminoType, GetTxDescriptorResponse.typeUrl);
function createBaseQueryServicesDescriptor(): QueryServicesDescriptor {
  return {
    queryServices: []
  };
}
export const QueryServicesDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServicesDescriptor",
  aminoType: "cosmos-sdk/QueryServicesDescriptor",
  is(o: any): o is QueryServicesDescriptor {
    return o && (o.$typeUrl === QueryServicesDescriptor.typeUrl || Array.isArray(o.queryServices) && (!o.queryServices.length || QueryServiceDescriptor.is(o.queryServices[0])));
  },
  isSDK(o: any): o is QueryServicesDescriptorSDKType {
    return o && (o.$typeUrl === QueryServicesDescriptor.typeUrl || Array.isArray(o.query_services) && (!o.query_services.length || QueryServiceDescriptor.isSDK(o.query_services[0])));
  },
  isAmino(o: any): o is QueryServicesDescriptorAmino {
    return o && (o.$typeUrl === QueryServicesDescriptor.typeUrl || Array.isArray(o.query_services) && (!o.query_services.length || QueryServiceDescriptor.isAmino(o.query_services[0])));
  },
  encode(message: QueryServicesDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.queryServices) {
      QueryServiceDescriptor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServicesDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServicesDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.queryServices.push(QueryServiceDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryServicesDescriptor {
    const obj = createBaseQueryServicesDescriptor();
    if (Array.isArray(object?.queryServices)) obj.queryServices = object.queryServices.map((e: any) => QueryServiceDescriptor.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryServicesDescriptor): unknown {
    const obj: any = {};
    if (message.queryServices) {
      obj.queryServices = message.queryServices.map(e => e ? QueryServiceDescriptor.toJSON(e) : undefined);
    } else {
      obj.queryServices = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryServicesDescriptor>): QueryServicesDescriptor {
    const message = createBaseQueryServicesDescriptor();
    message.queryServices = object.queryServices?.map(e => QueryServiceDescriptor.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryServicesDescriptorSDKType): QueryServicesDescriptor {
    return {
      queryServices: Array.isArray(object?.query_services) ? object.query_services.map((e: any) => QueryServiceDescriptor.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryServicesDescriptor): QueryServicesDescriptorSDKType {
    const obj: any = {};
    if (message.queryServices) {
      obj.query_services = message.queryServices.map(e => e ? QueryServiceDescriptor.toSDK(e) : undefined);
    } else {
      obj.query_services = [];
    }
    return obj;
  },
  fromAmino(object: QueryServicesDescriptorAmino): QueryServicesDescriptor {
    const message = createBaseQueryServicesDescriptor();
    message.queryServices = object.query_services?.map(e => QueryServiceDescriptor.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryServicesDescriptor): QueryServicesDescriptorAmino {
    const obj: any = {};
    if (message.queryServices) {
      obj.query_services = message.queryServices.map(e => e ? QueryServiceDescriptor.toAmino(e) : undefined);
    } else {
      obj.query_services = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryServicesDescriptorAminoMsg): QueryServicesDescriptor {
    return QueryServicesDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message: QueryServicesDescriptor): QueryServicesDescriptorAminoMsg {
    return {
      type: "cosmos-sdk/QueryServicesDescriptor",
      value: QueryServicesDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryServicesDescriptorProtoMsg): QueryServicesDescriptor {
    return QueryServicesDescriptor.decode(message.value);
  },
  toProto(message: QueryServicesDescriptor): Uint8Array {
    return QueryServicesDescriptor.encode(message).finish();
  },
  toProtoMsg(message: QueryServicesDescriptor): QueryServicesDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServicesDescriptor",
      value: QueryServicesDescriptor.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryServicesDescriptor.typeUrl, QueryServicesDescriptor);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryServicesDescriptor.aminoType, QueryServicesDescriptor.typeUrl);
function createBaseQueryServiceDescriptor(): QueryServiceDescriptor {
  return {
    fullname: "",
    isModule: false,
    methods: []
  };
}
export const QueryServiceDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServiceDescriptor",
  aminoType: "cosmos-sdk/QueryServiceDescriptor",
  is(o: any): o is QueryServiceDescriptor {
    return o && (o.$typeUrl === QueryServiceDescriptor.typeUrl || typeof o.fullname === "string" && typeof o.isModule === "boolean" && Array.isArray(o.methods) && (!o.methods.length || QueryMethodDescriptor.is(o.methods[0])));
  },
  isSDK(o: any): o is QueryServiceDescriptorSDKType {
    return o && (o.$typeUrl === QueryServiceDescriptor.typeUrl || typeof o.fullname === "string" && typeof o.is_module === "boolean" && Array.isArray(o.methods) && (!o.methods.length || QueryMethodDescriptor.isSDK(o.methods[0])));
  },
  isAmino(o: any): o is QueryServiceDescriptorAmino {
    return o && (o.$typeUrl === QueryServiceDescriptor.typeUrl || typeof o.fullname === "string" && typeof o.is_module === "boolean" && Array.isArray(o.methods) && (!o.methods.length || QueryMethodDescriptor.isAmino(o.methods[0])));
  },
  encode(message: QueryServiceDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.fullname !== undefined) {
      writer.uint32(10).string(message.fullname);
    }
    if (message.isModule !== undefined) {
      writer.uint32(16).bool(message.isModule);
    }
    for (const v of message.methods) {
      QueryMethodDescriptor.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryServiceDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryServiceDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fullname = reader.string();
          break;
        case 2:
          message.isModule = reader.bool();
          break;
        case 3:
          message.methods.push(QueryMethodDescriptor.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryServiceDescriptor {
    const obj = createBaseQueryServiceDescriptor();
    if (isSet(object.fullname)) obj.fullname = String(object.fullname);
    if (isSet(object.isModule)) obj.isModule = Boolean(object.isModule);
    if (Array.isArray(object?.methods)) obj.methods = object.methods.map((e: any) => QueryMethodDescriptor.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryServiceDescriptor): unknown {
    const obj: any = {};
    message.fullname !== undefined && (obj.fullname = message.fullname);
    message.isModule !== undefined && (obj.isModule = message.isModule);
    if (message.methods) {
      obj.methods = message.methods.map(e => e ? QueryMethodDescriptor.toJSON(e) : undefined);
    } else {
      obj.methods = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryServiceDescriptor>): QueryServiceDescriptor {
    const message = createBaseQueryServiceDescriptor();
    message.fullname = object.fullname ?? "";
    message.isModule = object.isModule ?? false;
    message.methods = object.methods?.map(e => QueryMethodDescriptor.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryServiceDescriptorSDKType): QueryServiceDescriptor {
    return {
      fullname: object?.fullname,
      isModule: object?.is_module,
      methods: Array.isArray(object?.methods) ? object.methods.map((e: any) => QueryMethodDescriptor.fromSDK(e)) : []
    };
  },
  toSDK(message: QueryServiceDescriptor): QueryServiceDescriptorSDKType {
    const obj: any = {};
    obj.fullname = message.fullname;
    obj.is_module = message.isModule;
    if (message.methods) {
      obj.methods = message.methods.map(e => e ? QueryMethodDescriptor.toSDK(e) : undefined);
    } else {
      obj.methods = [];
    }
    return obj;
  },
  fromAmino(object: QueryServiceDescriptorAmino): QueryServiceDescriptor {
    const message = createBaseQueryServiceDescriptor();
    if (object.fullname !== undefined && object.fullname !== null) {
      message.fullname = object.fullname;
    }
    if (object.is_module !== undefined && object.is_module !== null) {
      message.isModule = object.is_module;
    }
    message.methods = object.methods?.map(e => QueryMethodDescriptor.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryServiceDescriptor): QueryServiceDescriptorAmino {
    const obj: any = {};
    obj.fullname = message.fullname;
    obj.is_module = message.isModule;
    if (message.methods) {
      obj.methods = message.methods.map(e => e ? QueryMethodDescriptor.toAmino(e) : undefined);
    } else {
      obj.methods = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryServiceDescriptorAminoMsg): QueryServiceDescriptor {
    return QueryServiceDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message: QueryServiceDescriptor): QueryServiceDescriptorAminoMsg {
    return {
      type: "cosmos-sdk/QueryServiceDescriptor",
      value: QueryServiceDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryServiceDescriptorProtoMsg): QueryServiceDescriptor {
    return QueryServiceDescriptor.decode(message.value);
  },
  toProto(message: QueryServiceDescriptor): Uint8Array {
    return QueryServiceDescriptor.encode(message).finish();
  },
  toProtoMsg(message: QueryServiceDescriptor): QueryServiceDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServiceDescriptor",
      value: QueryServiceDescriptor.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryServiceDescriptor.typeUrl, QueryServiceDescriptor);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryServiceDescriptor.aminoType, QueryServiceDescriptor.typeUrl);
function createBaseQueryMethodDescriptor(): QueryMethodDescriptor {
  return {
    name: "",
    fullQueryPath: ""
  };
}
export const QueryMethodDescriptor = {
  typeUrl: "/cosmos.base.reflection.v2alpha1.QueryMethodDescriptor",
  aminoType: "cosmos-sdk/QueryMethodDescriptor",
  is(o: any): o is QueryMethodDescriptor {
    return o && (o.$typeUrl === QueryMethodDescriptor.typeUrl || typeof o.name === "string" && typeof o.fullQueryPath === "string");
  },
  isSDK(o: any): o is QueryMethodDescriptorSDKType {
    return o && (o.$typeUrl === QueryMethodDescriptor.typeUrl || typeof o.name === "string" && typeof o.full_query_path === "string");
  },
  isAmino(o: any): o is QueryMethodDescriptorAmino {
    return o && (o.$typeUrl === QueryMethodDescriptor.typeUrl || typeof o.name === "string" && typeof o.full_query_path === "string");
  },
  encode(message: QueryMethodDescriptor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    if (message.fullQueryPath !== undefined) {
      writer.uint32(18).string(message.fullQueryPath);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMethodDescriptor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMethodDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.fullQueryPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMethodDescriptor {
    const obj = createBaseQueryMethodDescriptor();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.fullQueryPath)) obj.fullQueryPath = String(object.fullQueryPath);
    return obj;
  },
  toJSON(message: QueryMethodDescriptor): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.fullQueryPath !== undefined && (obj.fullQueryPath = message.fullQueryPath);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryMethodDescriptor>): QueryMethodDescriptor {
    const message = createBaseQueryMethodDescriptor();
    message.name = object.name ?? "";
    message.fullQueryPath = object.fullQueryPath ?? "";
    return message;
  },
  fromSDK(object: QueryMethodDescriptorSDKType): QueryMethodDescriptor {
    return {
      name: object?.name,
      fullQueryPath: object?.full_query_path
    };
  },
  toSDK(message: QueryMethodDescriptor): QueryMethodDescriptorSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.full_query_path = message.fullQueryPath;
    return obj;
  },
  fromAmino(object: QueryMethodDescriptorAmino): QueryMethodDescriptor {
    const message = createBaseQueryMethodDescriptor();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.full_query_path !== undefined && object.full_query_path !== null) {
      message.fullQueryPath = object.full_query_path;
    }
    return message;
  },
  toAmino(message: QueryMethodDescriptor): QueryMethodDescriptorAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.full_query_path = message.fullQueryPath;
    return obj;
  },
  fromAminoMsg(object: QueryMethodDescriptorAminoMsg): QueryMethodDescriptor {
    return QueryMethodDescriptor.fromAmino(object.value);
  },
  toAminoMsg(message: QueryMethodDescriptor): QueryMethodDescriptorAminoMsg {
    return {
      type: "cosmos-sdk/QueryMethodDescriptor",
      value: QueryMethodDescriptor.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryMethodDescriptorProtoMsg): QueryMethodDescriptor {
    return QueryMethodDescriptor.decode(message.value);
  },
  toProto(message: QueryMethodDescriptor): Uint8Array {
    return QueryMethodDescriptor.encode(message).finish();
  },
  toProtoMsg(message: QueryMethodDescriptor): QueryMethodDescriptorProtoMsg {
    return {
      typeUrl: "/cosmos.base.reflection.v2alpha1.QueryMethodDescriptor",
      value: QueryMethodDescriptor.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryMethodDescriptor.typeUrl, QueryMethodDescriptor);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryMethodDescriptor.aminoType, QueryMethodDescriptor.typeUrl);