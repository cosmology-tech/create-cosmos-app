import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet } from "../../helpers";
export const protobufPackage = "google.api";
/**
 * Monitoring configuration of the service.
 * 
 * The example below shows how to configure monitored resources and metrics
 * for monitoring. In the example, a monitored resource and two metrics are
 * defined. The `library.googleapis.com/book/returned_count` metric is sent
 * to both producer and consumer projects, whereas the
 * `library.googleapis.com/book/num_overdue` metric is only sent to the
 * consumer project.
 * 
 *     monitored_resources:
 *     - type: library.googleapis.com/Branch
 *       display_name: "Library Branch"
 *       description: "A branch of a library."
 *       launch_stage: GA
 *       labels:
 *       - key: resource_container
 *         description: "The Cloud container (ie. project id) for the Branch."
 *       - key: location
 *         description: "The location of the library branch."
 *       - key: branch_id
 *         description: "The id of the branch."
 *     metrics:
 *     - name: library.googleapis.com/book/returned_count
 *       display_name: "Books Returned"
 *       description: "The count of books that have been returned."
 *       launch_stage: GA
 *       metric_kind: DELTA
 *       value_type: INT64
 *       unit: "1"
 *       labels:
 *       - key: customer_id
 *         description: "The id of the customer."
 *     - name: library.googleapis.com/book/num_overdue
 *       display_name: "Books Overdue"
 *       description: "The current number of overdue books."
 *       launch_stage: GA
 *       metric_kind: GAUGE
 *       value_type: INT64
 *       unit: "1"
 *       labels:
 *       - key: customer_id
 *         description: "The id of the customer."
 *     monitoring:
 *       producer_destinations:
 *       - monitored_resource: library.googleapis.com/Branch
 *         metrics:
 *         - library.googleapis.com/book/returned_count
 *       consumer_destinations:
 *       - monitored_resource: library.googleapis.com/Branch
 *         metrics:
 *         - library.googleapis.com/book/returned_count
 *         - library.googleapis.com/book/num_overdue
 */
export interface Monitoring {
  /**
   * Monitoring configurations for sending metrics to the producer project.
   * There can be multiple producer destinations. A monitored resource type may
   * appear in multiple monitoring destinations if different aggregations are
   * needed for different sets of metrics associated with that monitored
   * resource type. A monitored resource and metric pair may only be used once
   * in the Monitoring configuration.
   */
  producerDestinations: Monitoring_MonitoringDestination[];
  /**
   * Monitoring configurations for sending metrics to the consumer project.
   * There can be multiple consumer destinations. A monitored resource type may
   * appear in multiple monitoring destinations if different aggregations are
   * needed for different sets of metrics associated with that monitored
   * resource type. A monitored resource and metric pair may only be used once
   * in the Monitoring configuration.
   */
  consumerDestinations: Monitoring_MonitoringDestination[];
}
export interface MonitoringProtoMsg {
  typeUrl: "/google.api.Monitoring";
  value: Uint8Array;
}
/**
 * Monitoring configuration of the service.
 * 
 * The example below shows how to configure monitored resources and metrics
 * for monitoring. In the example, a monitored resource and two metrics are
 * defined. The `library.googleapis.com/book/returned_count` metric is sent
 * to both producer and consumer projects, whereas the
 * `library.googleapis.com/book/num_overdue` metric is only sent to the
 * consumer project.
 * 
 *     monitored_resources:
 *     - type: library.googleapis.com/Branch
 *       display_name: "Library Branch"
 *       description: "A branch of a library."
 *       launch_stage: GA
 *       labels:
 *       - key: resource_container
 *         description: "The Cloud container (ie. project id) for the Branch."
 *       - key: location
 *         description: "The location of the library branch."
 *       - key: branch_id
 *         description: "The id of the branch."
 *     metrics:
 *     - name: library.googleapis.com/book/returned_count
 *       display_name: "Books Returned"
 *       description: "The count of books that have been returned."
 *       launch_stage: GA
 *       metric_kind: DELTA
 *       value_type: INT64
 *       unit: "1"
 *       labels:
 *       - key: customer_id
 *         description: "The id of the customer."
 *     - name: library.googleapis.com/book/num_overdue
 *       display_name: "Books Overdue"
 *       description: "The current number of overdue books."
 *       launch_stage: GA
 *       metric_kind: GAUGE
 *       value_type: INT64
 *       unit: "1"
 *       labels:
 *       - key: customer_id
 *         description: "The id of the customer."
 *     monitoring:
 *       producer_destinations:
 *       - monitored_resource: library.googleapis.com/Branch
 *         metrics:
 *         - library.googleapis.com/book/returned_count
 *       consumer_destinations:
 *       - monitored_resource: library.googleapis.com/Branch
 *         metrics:
 *         - library.googleapis.com/book/returned_count
 *         - library.googleapis.com/book/num_overdue
 */
export interface MonitoringAmino {
  /**
   * Monitoring configurations for sending metrics to the producer project.
   * There can be multiple producer destinations. A monitored resource type may
   * appear in multiple monitoring destinations if different aggregations are
   * needed for different sets of metrics associated with that monitored
   * resource type. A monitored resource and metric pair may only be used once
   * in the Monitoring configuration.
   */
  producer_destinations: Monitoring_MonitoringDestinationAmino[];
  /**
   * Monitoring configurations for sending metrics to the consumer project.
   * There can be multiple consumer destinations. A monitored resource type may
   * appear in multiple monitoring destinations if different aggregations are
   * needed for different sets of metrics associated with that monitored
   * resource type. A monitored resource and metric pair may only be used once
   * in the Monitoring configuration.
   */
  consumer_destinations: Monitoring_MonitoringDestinationAmino[];
}
export interface MonitoringAminoMsg {
  type: "/google.api.Monitoring";
  value: MonitoringAmino;
}
/**
 * Monitoring configuration of the service.
 * 
 * The example below shows how to configure monitored resources and metrics
 * for monitoring. In the example, a monitored resource and two metrics are
 * defined. The `library.googleapis.com/book/returned_count` metric is sent
 * to both producer and consumer projects, whereas the
 * `library.googleapis.com/book/num_overdue` metric is only sent to the
 * consumer project.
 * 
 *     monitored_resources:
 *     - type: library.googleapis.com/Branch
 *       display_name: "Library Branch"
 *       description: "A branch of a library."
 *       launch_stage: GA
 *       labels:
 *       - key: resource_container
 *         description: "The Cloud container (ie. project id) for the Branch."
 *       - key: location
 *         description: "The location of the library branch."
 *       - key: branch_id
 *         description: "The id of the branch."
 *     metrics:
 *     - name: library.googleapis.com/book/returned_count
 *       display_name: "Books Returned"
 *       description: "The count of books that have been returned."
 *       launch_stage: GA
 *       metric_kind: DELTA
 *       value_type: INT64
 *       unit: "1"
 *       labels:
 *       - key: customer_id
 *         description: "The id of the customer."
 *     - name: library.googleapis.com/book/num_overdue
 *       display_name: "Books Overdue"
 *       description: "The current number of overdue books."
 *       launch_stage: GA
 *       metric_kind: GAUGE
 *       value_type: INT64
 *       unit: "1"
 *       labels:
 *       - key: customer_id
 *         description: "The id of the customer."
 *     monitoring:
 *       producer_destinations:
 *       - monitored_resource: library.googleapis.com/Branch
 *         metrics:
 *         - library.googleapis.com/book/returned_count
 *       consumer_destinations:
 *       - monitored_resource: library.googleapis.com/Branch
 *         metrics:
 *         - library.googleapis.com/book/returned_count
 *         - library.googleapis.com/book/num_overdue
 */
export interface MonitoringSDKType {
  producer_destinations: Monitoring_MonitoringDestinationSDKType[];
  consumer_destinations: Monitoring_MonitoringDestinationSDKType[];
}
/**
 * Configuration of a specific monitoring destination (the producer project
 * or the consumer project).
 */
export interface Monitoring_MonitoringDestination {
  /**
   * The monitored resource type. The type must be defined in
   * [Service.monitored_resources][google.api.Service.monitored_resources] section.
   */
  monitoredResource: string;
  /**
   * Types of the metrics to report to this monitoring destination.
   * Each type must be defined in [Service.metrics][google.api.Service.metrics] section.
   */
  metrics: string[];
}
export interface Monitoring_MonitoringDestinationProtoMsg {
  typeUrl: "/google.api.MonitoringDestination";
  value: Uint8Array;
}
/**
 * Configuration of a specific monitoring destination (the producer project
 * or the consumer project).
 */
export interface Monitoring_MonitoringDestinationAmino {
  /**
   * The monitored resource type. The type must be defined in
   * [Service.monitored_resources][google.api.Service.monitored_resources] section.
   */
  monitored_resource: string;
  /**
   * Types of the metrics to report to this monitoring destination.
   * Each type must be defined in [Service.metrics][google.api.Service.metrics] section.
   */
  metrics: string[];
}
export interface Monitoring_MonitoringDestinationAminoMsg {
  type: "/google.api.MonitoringDestination";
  value: Monitoring_MonitoringDestinationAmino;
}
/**
 * Configuration of a specific monitoring destination (the producer project
 * or the consumer project).
 */
export interface Monitoring_MonitoringDestinationSDKType {
  monitored_resource: string;
  metrics: string[];
}
function createBaseMonitoring(): Monitoring {
  return {
    producerDestinations: [],
    consumerDestinations: []
  };
}
export const Monitoring = {
  typeUrl: "/google.api.Monitoring",
  encode(message: Monitoring, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.producerDestinations) {
      Monitoring_MonitoringDestination.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.consumerDestinations) {
      Monitoring_MonitoringDestination.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Monitoring {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoring();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.producerDestinations.push(Monitoring_MonitoringDestination.decode(reader, reader.uint32()));
          break;
        case 2:
          message.consumerDestinations.push(Monitoring_MonitoringDestination.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Monitoring {
    return {
      producerDestinations: Array.isArray(object?.producerDestinations) ? object.producerDestinations.map((e: any) => Monitoring_MonitoringDestination.fromJSON(e)) : [],
      consumerDestinations: Array.isArray(object?.consumerDestinations) ? object.consumerDestinations.map((e: any) => Monitoring_MonitoringDestination.fromJSON(e)) : []
    };
  },
  toJSON(message: Monitoring): unknown {
    const obj: any = {};
    if (message.producerDestinations) {
      obj.producerDestinations = message.producerDestinations.map(e => e ? Monitoring_MonitoringDestination.toJSON(e) : undefined);
    } else {
      obj.producerDestinations = [];
    }
    if (message.consumerDestinations) {
      obj.consumerDestinations = message.consumerDestinations.map(e => e ? Monitoring_MonitoringDestination.toJSON(e) : undefined);
    } else {
      obj.consumerDestinations = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Monitoring>): Monitoring {
    const message = createBaseMonitoring();
    message.producerDestinations = object.producerDestinations?.map(e => Monitoring_MonitoringDestination.fromPartial(e)) || [];
    message.consumerDestinations = object.consumerDestinations?.map(e => Monitoring_MonitoringDestination.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MonitoringSDKType): Monitoring {
    return {
      producerDestinations: Array.isArray(object?.producer_destinations) ? object.producer_destinations.map((e: any) => Monitoring_MonitoringDestination.fromSDK(e)) : [],
      consumerDestinations: Array.isArray(object?.consumer_destinations) ? object.consumer_destinations.map((e: any) => Monitoring_MonitoringDestination.fromSDK(e)) : []
    };
  },
  toSDK(message: Monitoring): MonitoringSDKType {
    const obj: any = {};
    if (message.producerDestinations) {
      obj.producer_destinations = message.producerDestinations.map(e => e ? Monitoring_MonitoringDestination.toSDK(e) : undefined);
    } else {
      obj.producer_destinations = [];
    }
    if (message.consumerDestinations) {
      obj.consumer_destinations = message.consumerDestinations.map(e => e ? Monitoring_MonitoringDestination.toSDK(e) : undefined);
    } else {
      obj.consumer_destinations = [];
    }
    return obj;
  },
  fromAmino(object: MonitoringAmino): Monitoring {
    return {
      producerDestinations: Array.isArray(object?.producer_destinations) ? object.producer_destinations.map((e: any) => Monitoring_MonitoringDestination.fromAmino(e)) : [],
      consumerDestinations: Array.isArray(object?.consumer_destinations) ? object.consumer_destinations.map((e: any) => Monitoring_MonitoringDestination.fromAmino(e)) : []
    };
  },
  toAmino(message: Monitoring): MonitoringAmino {
    const obj: any = {};
    if (message.producerDestinations) {
      obj.producer_destinations = message.producerDestinations.map(e => e ? Monitoring_MonitoringDestination.toAmino(e) : undefined);
    } else {
      obj.producer_destinations = [];
    }
    if (message.consumerDestinations) {
      obj.consumer_destinations = message.consumerDestinations.map(e => e ? Monitoring_MonitoringDestination.toAmino(e) : undefined);
    } else {
      obj.consumer_destinations = [];
    }
    return obj;
  },
  fromAminoMsg(object: MonitoringAminoMsg): Monitoring {
    return Monitoring.fromAmino(object.value);
  },
  fromProtoMsg(message: MonitoringProtoMsg): Monitoring {
    return Monitoring.decode(message.value);
  },
  toProto(message: Monitoring): Uint8Array {
    return Monitoring.encode(message).finish();
  },
  toProtoMsg(message: Monitoring): MonitoringProtoMsg {
    return {
      typeUrl: "/google.api.Monitoring",
      value: Monitoring.encode(message).finish()
    };
  }
};
function createBaseMonitoring_MonitoringDestination(): Monitoring_MonitoringDestination {
  return {
    monitoredResource: "",
    metrics: []
  };
}
export const Monitoring_MonitoringDestination = {
  typeUrl: "/google.api.MonitoringDestination",
  encode(message: Monitoring_MonitoringDestination, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.monitoredResource !== "") {
      writer.uint32(10).string(message.monitoredResource);
    }
    for (const v of message.metrics) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Monitoring_MonitoringDestination {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoring_MonitoringDestination();
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
  fromJSON(object: any): Monitoring_MonitoringDestination {
    return {
      monitoredResource: isSet(object.monitoredResource) ? String(object.monitoredResource) : "",
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: Monitoring_MonitoringDestination): unknown {
    const obj: any = {};
    message.monitoredResource !== undefined && (obj.monitoredResource = message.monitoredResource);
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e);
    } else {
      obj.metrics = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Monitoring_MonitoringDestination>): Monitoring_MonitoringDestination {
    const message = createBaseMonitoring_MonitoringDestination();
    message.monitoredResource = object.monitoredResource ?? "";
    message.metrics = object.metrics?.map(e => e) || [];
    return message;
  },
  fromSDK(object: Monitoring_MonitoringDestinationSDKType): Monitoring_MonitoringDestination {
    return {
      monitoredResource: object?.monitored_resource,
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => e) : []
    };
  },
  toSDK(message: Monitoring_MonitoringDestination): Monitoring_MonitoringDestinationSDKType {
    const obj: any = {};
    obj.monitored_resource = message.monitoredResource;
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e);
    } else {
      obj.metrics = [];
    }
    return obj;
  },
  fromAmino(object: Monitoring_MonitoringDestinationAmino): Monitoring_MonitoringDestination {
    return {
      monitoredResource: object.monitored_resource,
      metrics: Array.isArray(object?.metrics) ? object.metrics.map((e: any) => e) : []
    };
  },
  toAmino(message: Monitoring_MonitoringDestination): Monitoring_MonitoringDestinationAmino {
    const obj: any = {};
    obj.monitored_resource = message.monitoredResource;
    if (message.metrics) {
      obj.metrics = message.metrics.map(e => e);
    } else {
      obj.metrics = [];
    }
    return obj;
  },
  fromAminoMsg(object: Monitoring_MonitoringDestinationAminoMsg): Monitoring_MonitoringDestination {
    return Monitoring_MonitoringDestination.fromAmino(object.value);
  },
  fromProtoMsg(message: Monitoring_MonitoringDestinationProtoMsg): Monitoring_MonitoringDestination {
    return Monitoring_MonitoringDestination.decode(message.value);
  },
  toProto(message: Monitoring_MonitoringDestination): Uint8Array {
    return Monitoring_MonitoringDestination.encode(message).finish();
  },
  toProtoMsg(message: Monitoring_MonitoringDestination): Monitoring_MonitoringDestinationProtoMsg {
    return {
      typeUrl: "/google.api.MonitoringDestination",
      value: Monitoring_MonitoringDestination.encode(message).finish()
    };
  }
};