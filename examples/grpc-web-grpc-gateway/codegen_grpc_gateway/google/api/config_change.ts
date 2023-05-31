import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../helpers";
export const protobufPackage = "google.api";
/**
 * Classifies set of possible modifications to an object in the service
 * configuration.
 */
export enum ChangeType {
  /** CHANGE_TYPE_UNSPECIFIED - No value was provided. */
  CHANGE_TYPE_UNSPECIFIED = 0,
  /**
   * ADDED - The changed object exists in the 'new' service configuration, but not
   * in the 'old' service configuration.
   */
  ADDED = 1,
  /**
   * REMOVED - The changed object exists in the 'old' service configuration, but not
   * in the 'new' service configuration.
   */
  REMOVED = 2,
  /**
   * MODIFIED - The changed object exists in both service configurations, but its value
   * is different.
   */
  MODIFIED = 3,
  UNRECOGNIZED = -1,
}
export const ChangeTypeSDKType = ChangeType;
export const ChangeTypeAmino = ChangeType;
export function changeTypeFromJSON(object: any): ChangeType {
  switch (object) {
    case 0:
    case "CHANGE_TYPE_UNSPECIFIED":
      return ChangeType.CHANGE_TYPE_UNSPECIFIED;
    case 1:
    case "ADDED":
      return ChangeType.ADDED;
    case 2:
    case "REMOVED":
      return ChangeType.REMOVED;
    case 3:
    case "MODIFIED":
      return ChangeType.MODIFIED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ChangeType.UNRECOGNIZED;
  }
}
export function changeTypeToJSON(object: ChangeType): string {
  switch (object) {
    case ChangeType.CHANGE_TYPE_UNSPECIFIED:
      return "CHANGE_TYPE_UNSPECIFIED";
    case ChangeType.ADDED:
      return "ADDED";
    case ChangeType.REMOVED:
      return "REMOVED";
    case ChangeType.MODIFIED:
      return "MODIFIED";
    case ChangeType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Output generated from semantically comparing two versions of a service
 * configuration.
 * 
 * Includes detailed information about a field that have changed with
 * applicable advice about potential consequences for the change, such as
 * backwards-incompatibility.
 */
export interface ConfigChange {
  /**
   * Object hierarchy path to the change, with levels separated by a '.'
   * character. For repeated fields, an applicable unique identifier field is
   * used for the index (usually selector, name, or id). For maps, the term
   * 'key' is used. If the field has no unique identifier, the numeric index
   * is used.
   * Examples:
   * - visibility.rules[selector=="google.LibraryService.ListBooks"].restriction
   * - quota.metric_rules[selector=="google"].metric_costs[key=="reads"].value
   * - logging.producer_destinations[0]
   */
  element: string;
  /**
   * Value of the changed object in the old Service configuration,
   * in JSON format. This field will not be populated if ChangeType == ADDED.
   */
  oldValue: string;
  /**
   * Value of the changed object in the new Service configuration,
   * in JSON format. This field will not be populated if ChangeType == REMOVED.
   */
  newValue: string;
  /** The type for this change, either ADDED, REMOVED, or MODIFIED. */
  changeType: ChangeType;
  /**
   * Collection of advice provided for this change, useful for determining the
   * possible impact of this change.
   */
  advices: Advice[];
}
export interface ConfigChangeProtoMsg {
  typeUrl: "/google.api.ConfigChange";
  value: Uint8Array;
}
/**
 * Output generated from semantically comparing two versions of a service
 * configuration.
 * 
 * Includes detailed information about a field that have changed with
 * applicable advice about potential consequences for the change, such as
 * backwards-incompatibility.
 */
export interface ConfigChangeAmino {
  /**
   * Object hierarchy path to the change, with levels separated by a '.'
   * character. For repeated fields, an applicable unique identifier field is
   * used for the index (usually selector, name, or id). For maps, the term
   * 'key' is used. If the field has no unique identifier, the numeric index
   * is used.
   * Examples:
   * - visibility.rules[selector=="google.LibraryService.ListBooks"].restriction
   * - quota.metric_rules[selector=="google"].metric_costs[key=="reads"].value
   * - logging.producer_destinations[0]
   */
  element: string;
  /**
   * Value of the changed object in the old Service configuration,
   * in JSON format. This field will not be populated if ChangeType == ADDED.
   */
  old_value: string;
  /**
   * Value of the changed object in the new Service configuration,
   * in JSON format. This field will not be populated if ChangeType == REMOVED.
   */
  new_value: string;
  /** The type for this change, either ADDED, REMOVED, or MODIFIED. */
  change_type: ChangeType;
  /**
   * Collection of advice provided for this change, useful for determining the
   * possible impact of this change.
   */
  advices: AdviceAmino[];
}
export interface ConfigChangeAminoMsg {
  type: "/google.api.ConfigChange";
  value: ConfigChangeAmino;
}
/**
 * Output generated from semantically comparing two versions of a service
 * configuration.
 * 
 * Includes detailed information about a field that have changed with
 * applicable advice about potential consequences for the change, such as
 * backwards-incompatibility.
 */
export interface ConfigChangeSDKType {
  element: string;
  old_value: string;
  new_value: string;
  change_type: ChangeType;
  advices: AdviceSDKType[];
}
/**
 * Generated advice about this change, used for providing more
 * information about how a change will affect the existing service.
 */
export interface Advice {
  /**
   * Useful description for why this advice was applied and what actions should
   * be taken to mitigate any implied risks.
   */
  description: string;
}
export interface AdviceProtoMsg {
  typeUrl: "/google.api.Advice";
  value: Uint8Array;
}
/**
 * Generated advice about this change, used for providing more
 * information about how a change will affect the existing service.
 */
export interface AdviceAmino {
  /**
   * Useful description for why this advice was applied and what actions should
   * be taken to mitigate any implied risks.
   */
  description: string;
}
export interface AdviceAminoMsg {
  type: "/google.api.Advice";
  value: AdviceAmino;
}
/**
 * Generated advice about this change, used for providing more
 * information about how a change will affect the existing service.
 */
export interface AdviceSDKType {
  description: string;
}
function createBaseConfigChange(): ConfigChange {
  return {
    element: "",
    oldValue: "",
    newValue: "",
    changeType: 0,
    advices: []
  };
}
export const ConfigChange = {
  typeUrl: "/google.api.ConfigChange",
  encode(message: ConfigChange, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.element !== "") {
      writer.uint32(10).string(message.element);
    }
    if (message.oldValue !== "") {
      writer.uint32(18).string(message.oldValue);
    }
    if (message.newValue !== "") {
      writer.uint32(26).string(message.newValue);
    }
    if (message.changeType !== 0) {
      writer.uint32(32).int32(message.changeType);
    }
    for (const v of message.advices) {
      Advice.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ConfigChange {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigChange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.element = reader.string();
          break;
        case 2:
          message.oldValue = reader.string();
          break;
        case 3:
          message.newValue = reader.string();
          break;
        case 4:
          message.changeType = (reader.int32() as any);
          break;
        case 5:
          message.advices.push(Advice.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConfigChange {
    return {
      element: isSet(object.element) ? String(object.element) : "",
      oldValue: isSet(object.oldValue) ? String(object.oldValue) : "",
      newValue: isSet(object.newValue) ? String(object.newValue) : "",
      changeType: isSet(object.changeType) ? changeTypeFromJSON(object.changeType) : 0,
      advices: Array.isArray(object?.advices) ? object.advices.map((e: any) => Advice.fromJSON(e)) : []
    };
  },
  toJSON(message: ConfigChange): unknown {
    const obj: any = {};
    message.element !== undefined && (obj.element = message.element);
    message.oldValue !== undefined && (obj.oldValue = message.oldValue);
    message.newValue !== undefined && (obj.newValue = message.newValue);
    message.changeType !== undefined && (obj.changeType = changeTypeToJSON(message.changeType));
    if (message.advices) {
      obj.advices = message.advices.map(e => e ? Advice.toJSON(e) : undefined);
    } else {
      obj.advices = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ConfigChange>): ConfigChange {
    const message = createBaseConfigChange();
    message.element = object.element ?? "";
    message.oldValue = object.oldValue ?? "";
    message.newValue = object.newValue ?? "";
    message.changeType = object.changeType ?? 0;
    message.advices = object.advices?.map(e => Advice.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ConfigChangeSDKType): ConfigChange {
    return {
      element: object?.element,
      oldValue: object?.old_value,
      newValue: object?.new_value,
      changeType: isSet(object.change_type) ? changeTypeFromJSON(object.change_type) : 0,
      advices: Array.isArray(object?.advices) ? object.advices.map((e: any) => Advice.fromSDK(e)) : []
    };
  },
  toSDK(message: ConfigChange): ConfigChangeSDKType {
    const obj: any = {};
    obj.element = message.element;
    obj.old_value = message.oldValue;
    obj.new_value = message.newValue;
    message.changeType !== undefined && (obj.change_type = changeTypeToJSON(message.changeType));
    if (message.advices) {
      obj.advices = message.advices.map(e => e ? Advice.toSDK(e) : undefined);
    } else {
      obj.advices = [];
    }
    return obj;
  },
  fromAmino(object: ConfigChangeAmino): ConfigChange {
    return {
      element: object.element,
      oldValue: object.old_value,
      newValue: object.new_value,
      changeType: isSet(object.change_type) ? changeTypeFromJSON(object.change_type) : 0,
      advices: Array.isArray(object?.advices) ? object.advices.map((e: any) => Advice.fromAmino(e)) : []
    };
  },
  toAmino(message: ConfigChange): ConfigChangeAmino {
    const obj: any = {};
    obj.element = message.element;
    obj.old_value = message.oldValue;
    obj.new_value = message.newValue;
    obj.change_type = message.changeType;
    if (message.advices) {
      obj.advices = message.advices.map(e => e ? Advice.toAmino(e) : undefined);
    } else {
      obj.advices = [];
    }
    return obj;
  },
  fromAminoMsg(object: ConfigChangeAminoMsg): ConfigChange {
    return ConfigChange.fromAmino(object.value);
  },
  fromProtoMsg(message: ConfigChangeProtoMsg): ConfigChange {
    return ConfigChange.decode(message.value);
  },
  toProto(message: ConfigChange): Uint8Array {
    return ConfigChange.encode(message).finish();
  },
  toProtoMsg(message: ConfigChange): ConfigChangeProtoMsg {
    return {
      typeUrl: "/google.api.ConfigChange",
      value: ConfigChange.encode(message).finish()
    };
  }
};
function createBaseAdvice(): Advice {
  return {
    description: ""
  };
}
export const Advice = {
  typeUrl: "/google.api.Advice",
  encode(message: Advice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Advice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdvice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Advice {
    return {
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  toJSON(message: Advice): unknown {
    const obj: any = {};
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },
  fromPartial(object: DeepPartial<Advice>): Advice {
    const message = createBaseAdvice();
    message.description = object.description ?? "";
    return message;
  },
  fromSDK(object: AdviceSDKType): Advice {
    return {
      description: object?.description
    };
  },
  toSDK(message: Advice): AdviceSDKType {
    const obj: any = {};
    obj.description = message.description;
    return obj;
  },
  fromAmino(object: AdviceAmino): Advice {
    return {
      description: object.description
    };
  },
  toAmino(message: Advice): AdviceAmino {
    const obj: any = {};
    obj.description = message.description;
    return obj;
  },
  fromAminoMsg(object: AdviceAminoMsg): Advice {
    return Advice.fromAmino(object.value);
  },
  fromProtoMsg(message: AdviceProtoMsg): Advice {
    return Advice.decode(message.value);
  },
  toProto(message: Advice): Uint8Array {
    return Advice.encode(message).finish();
  },
  toProtoMsg(message: Advice): AdviceProtoMsg {
    return {
      typeUrl: "/google.api.Advice",
      value: Advice.encode(message).finish()
    };
  }
};