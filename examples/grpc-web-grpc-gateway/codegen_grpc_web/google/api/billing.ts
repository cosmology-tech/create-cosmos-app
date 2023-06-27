import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet } from "../../helpers";
export const protobufPackage = "google.api";
/**
 * Billing related configuration of the service.
 * 
 * The following example shows how to configure monitored resources and metrics
 * for billing, `consumer_destinations` is the only supported destination and
 * the monitored resources need at least one label key
 * `cloud.googleapis.com/location` to indicate the location of the billing
 * usage, using different monitored resources between monitoring and billing is
 * recommended so they can be evolved independently:
 * 
 * 
 *     monitored_resources:
 *     - type: library.googleapis.com/billing_branch
 *       labels:
 *       - key: cloud.googleapis.com/location
 *         description: |
 *           Predefined label to support billing location restriction.
 *       - key: city
 *         description: |
 *           Custom label to define the city where the library branch is located
 *           in.
 *       - key: name
 *         description: Custom label to define the name of the library branch.
 *     metrics:
 *     - name: library.googleapis.com/book/borrowed_count
 *       metric_kind: DELTA
 *       value_type: INT64
 *       unit: "1"
 *     billing:
 *       consumer_destinations:
 *       - monitored_resource: library.googleapis.com/billing_branch
 *         metrics:
 *         - library.googleapis.com/book/borrowed_count
 */
export interface Billing {
  /**
   * Billing configurations for sending metrics to the consumer project.
   * There can be multiple consumer destinations per service, each one must have
   * a different monitored resource type. A metric can be used in at most
   * one consumer destination.
   */
  consumerDestinations: Billing_BillingDestination[];
}
export interface BillingProtoMsg {
  typeUrl: "/google.api.Billing";
  value: Uint8Array;
}
/**
 * Billing related configuration of the service.
 * 
 * The following example shows how to configure monitored resources and metrics
 * for billing, `consumer_destinations` is the only supported destination and
 * the monitored resources need at least one label key
 * `cloud.googleapis.com/location` to indicate the location of the billing
 * usage, using different monitored resources between monitoring and billing is
 * recommended so they can be evolved independently:
 * 
 * 
 *     monitored_resources:
 *     - type: library.googleapis.com/billing_branch
 *       labels:
 *       - key: cloud.googleapis.com/location
 *         description: |
 *           Predefined label to support billing location restriction.
 *       - key: city
 *         description: |
 *           Custom label to define the city where the library branch is located
 *           in.
 *       - key: name
 *         description: Custom label to define the name of the library branch.
 *     metrics:
 *     - name: library.googleapis.com/book/borrowed_count
 *       metric_kind: DELTA
 *       value_type: INT64
 *       unit: "1"
 *     billing:
 *       consumer_destinations:
 *       - monitored_resource: library.googleapis.com/billing_branch
 *         metrics:
 *         - library.googleapis.com/book/borrowed_count
 */
export interface BillingAmino {
  /**
   * Billing configurations for sending metrics to the consumer project.
   * There can be multiple consumer destinations per service, each one must have
   * a different monitored resource type. A metric can be used in at most
   * one consumer destination.
   */
  consumer_destinations: Billing_BillingDestinationAmino[];
}
export interface BillingAminoMsg {
  type: "/google.api.Billing";
  value: BillingAmino;
}
/**
 * Billing related configuration of the service.
 * 
 * The following example shows how to configure monitored resources and metrics
 * for billing, `consumer_destinations` is the only supported destination and
 * the monitored resources need at least one label key
 * `cloud.googleapis.com/location` to indicate the location of the billing
 * usage, using different monitored resources between monitoring and billing is
 * recommended so they can be evolved independently:
 * 
 * 
 *     monitored_resources:
 *     - type: library.googleapis.com/billing_branch
 *       labels:
 *       - key: cloud.googleapis.com/location
 *         description: |
 *           Predefined label to support billing location restriction.
 *       - key: city
 *         description: |
 *           Custom label to define the city where the library branch is located
 *           in.
 *       - key: name
 *         description: Custom label to define the name of the library branch.
 *     metrics:
 *     - name: library.googleapis.com/book/borrowed_count
 *       metric_kind: DELTA
 *       value_type: INT64
 *       unit: "1"
 *     billing:
 *       consumer_destinations:
 *       - monitored_resource: library.googleapis.com/billing_branch
 *         metrics:
 *         - library.googleapis.com/book/borrowed_count
 */
export interface BillingSDKType {
  consumer_destinations: Billing_BillingDestinationSDKType[];
}
/**
 * Configuration of a specific billing destination (Currently only support
 * bill against consumer project).
 */
export interface Billing_BillingDestination {
  /**
   * The monitored resource type. The type must be defined in
   * [Service.monitored_resources][google.api.Service.monitored_resources] section.
   */
  monitoredResource: string;
  /**
   * Names of the metrics to report to this billing destination.
   * Each name must be defined in [Service.metrics][google.api.Service.metrics] section.
   */
  metrics: string[];
}
export interface Billing_BillingDestinationProtoMsg {
  typeUrl: "/google.api.BillingDestination";
  value: Uint8Array;
}
/**
 * Configuration of a specific billing destination (Currently only support
 * bill against consumer project).
 */
export interface Billing_BillingDestinationAmino {
  /**
   * The monitored resource type. The type must be defined in
   * [Service.monitored_resources][google.api.Service.monitored_resources] section.
   */
  monitored_resource: string;
  /**
   * Names of the metrics to report to this billing destination.
   * Each name must be defined in [Service.metrics][google.api.Service.metrics] section.
   */
  metrics: string[];
}
export interface Billing_BillingDestinationAminoMsg {
  type: "/google.api.BillingDestination";
  value: Billing_BillingDestinationAmino;
}
/**
 * Configuration of a specific billing destination (Currently only support
 * bill against consumer project).
 */
export interface Billing_BillingDestinationSDKType {
  monitored_resource: string;
  metrics: string[];
}
function createBaseBilling(): Billing {
  return {
    consumerDestinations: []
  };
}
export const Billing = {
  typeUrl: "/google.api.Billing",
  encode(message: Billing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.consumerDestinations) {
      Billing_BillingDestination.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Billing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBilling();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 8:
          message.consumerDestinations.push(Billing_BillingDestination.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Billing {
    return {
      consumerDestinations: Array.isArray(object?.consumerDestinations) ? object.consumerDestinations.map((e: any) => Billing_BillingDestination.fromJSON(e)) : []
    };
  },
  toJSON(message: Billing): unknown {
    const obj: any = {};
    if (message.consumerDestinations) {
      obj.consumerDestinations = message.consumerDestinations.map(e => e ? Billing_BillingDestination.toJSON(e) : undefined);
    } else {
      obj.consumerDestinations = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Billing>): Billing {
    const message = createBaseBilling();
    message.consumerDestinations = object.consumerDestinations?.map(e => Billing_BillingDestination.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: BillingSDKType): Billing {
    return {
      consumerDestinations: Array.isArray(object?.consumer_destinations) ? object.consumer_destinations.map((e: any) => Billing_BillingDestination.fromSDK(e)) : []
    };
  },
  toSDK(message: Billing): BillingSDKType {
    const obj: any = {};
    if (message.consumerDestinations) {
      obj.consumer_destinations = message.consumerDestinations.map(e => e ? Billing_BillingDestination.toSDK(e) : undefined);
    } else {
      obj.consumer_destinations = [];
    }
    return obj;
  },
  fromAmino(object: BillingAmino): Billing {
    return {
      consumerDestinations: Array.isArray(object?.consumer_destinations) ? object.consumer_destinations.map((e: any) => Billing_BillingDestination.fromAmino(e)) : []
    };
  },
  toAmino(message: Billing): BillingAmino {
    const obj: any = {};
    if (message.consumerDestinations) {
      obj.consumer_destinations = message.consumerDestinations.map(e => e ? Billing_BillingDestination.toAmino(e) : undefined);
    } else {
      obj.consumer_destinations = [];
    }
    return obj;
  },
  fromAminoMsg(object: BillingAminoMsg): Billing {
    return Billing.fromAmino(object.value);
  },
  fromProtoMsg(message: BillingProtoMsg): Billing {
    return Billing.decode(message.value);
  },
  toProto(message: Billing): Uint8Array {
    return Billing.encode(message).finish();
  },
  toProtoMsg(message: Billing): BillingProtoMsg {
    return {
      typeUrl: "/google.api.Billing",
      value: Billing.encode(message).finish()
    };
  }
};
function createBaseBilling_BillingDestination(): Billing_BillingDestination {
  return {
    monitoredResource: "",
    metrics: []
  };
}
export const Billing_BillingDestination = {
  typeUrl: "/google.api.BillingDestination",
  encode(message: Billing_BillingDestination, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.monitoredResource !== "") {
      writer.uint32(10).string(message.monitoredResource);
    }
    for (const v of message.metrics) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Billing_BillingDestination {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBilling_BillingDestination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.monitoredResource = reader.string();
          break;
        case 2:
          message.metrics.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Billing_BillingDestination {
    return {
      monitoredResource: isSet(object.monitoredResource) ? String(object.monitoredResource) : "",
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: Billing_BillingDestination): unknown {
    const obj: any = {};
    message.monitoredResource !== undefined && (obj.monitoredResource = message.monitoredResource);
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e);
    } else {
      obj.metrics = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Billing_BillingDestination>): Billing_BillingDestination {
    const message = createBaseBilling_BillingDestination();
    message.monitoredResource = object.monitoredResource ?? "";
    message.metrics = object.metrics?.map(e => e) || [];
    return message;
  },
  fromSDK(object: Billing_BillingDestinationSDKType): Billing_BillingDestination {
    return {
      monitoredResource: object?.monitored_resource,
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => e) : []
    };
  },
  toSDK(message: Billing_BillingDestination): Billing_BillingDestinationSDKType {
    const obj: any = {};
    obj.monitored_resource = message.monitoredResource;
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e);
    } else {
      obj.metrics = [];
    }
    return obj;
  },
  fromAmino(object: Billing_BillingDestinationAmino): Billing_BillingDestination {
    return {
      monitoredResource: object.monitored_resource,
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => e) : []
    };
  },
  toAmino(message: Billing_BillingDestination): Billing_BillingDestinationAmino {
    const obj: any = {};
    obj.monitored_resource = message.monitoredResource;
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e);
    } else {
      obj.metrics = [];
    }
    return obj;
  },
  fromAminoMsg(object: Billing_BillingDestinationAminoMsg): Billing_BillingDestination {
    return Billing_BillingDestination.fromAmino(object.value);
  },
  fromProtoMsg(message: Billing_BillingDestinationProtoMsg): Billing_BillingDestination {
    return Billing_BillingDestination.decode(message.value);
  },
  toProto(message: Billing_BillingDestination): Uint8Array {
    return Billing_BillingDestination.encode(message).finish();
  },
  toProtoMsg(message: Billing_BillingDestination): Billing_BillingDestinationProtoMsg {
    return {
      typeUrl: "/google.api.BillingDestination",
      value: Billing_BillingDestination.encode(message).finish()
    };
  }
};