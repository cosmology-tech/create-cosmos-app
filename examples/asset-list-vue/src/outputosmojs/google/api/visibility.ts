import { BinaryReader, BinaryWriter } from "../../binary";
import { JsonSafe } from "../../json-safe";
import { DeepPartial, isSet } from "../../helpers";
import { ComputedRef } from "vue";
export const protobufPackage = "google.api";
/**
 * `Visibility` defines restrictions for the visibility of service
 * elements.  Restrictions are specified using visibility labels
 * (e.g., PREVIEW) that are elsewhere linked to users and projects.
 * 
 * Users and projects can have access to more than one visibility label. The
 * effective visibility for multiple labels is the union of each label's
 * elements, plus any unrestricted elements.
 * 
 * If an element and its parents have no restrictions, visibility is
 * unconditionally granted.
 * 
 * Example:
 * 
 *     visibility:
 *       rules:
 *       - selector: google.calendar.Calendar.EnhancedSearch
 *         restriction: PREVIEW
 *       - selector: google.calendar.Calendar.Delegate
 *         restriction: INTERNAL
 * 
 * Here, all methods are publicly visible except for the restricted methods
 * EnhancedSearch and Delegate.
 */
export interface Visibility {
  /**
   * A list of visibility rules that apply to individual API elements.
   * 
   * **NOTE:** All service configuration rules follow "last one wins" order.
   */
  rules: VisibilityRule[];
}
export interface ReactiveVisibility {
  rules: ComputedRef<VisibilityRule[]>;
}
export interface VisibilityProtoMsg {
  typeUrl: "/google.api.Visibility";
  value: Uint8Array;
}
/**
 * `Visibility` defines restrictions for the visibility of service
 * elements.  Restrictions are specified using visibility labels
 * (e.g., PREVIEW) that are elsewhere linked to users and projects.
 * 
 * Users and projects can have access to more than one visibility label. The
 * effective visibility for multiple labels is the union of each label's
 * elements, plus any unrestricted elements.
 * 
 * If an element and its parents have no restrictions, visibility is
 * unconditionally granted.
 * 
 * Example:
 * 
 *     visibility:
 *       rules:
 *       - selector: google.calendar.Calendar.EnhancedSearch
 *         restriction: PREVIEW
 *       - selector: google.calendar.Calendar.Delegate
 *         restriction: INTERNAL
 * 
 * Here, all methods are publicly visible except for the restricted methods
 * EnhancedSearch and Delegate.
 */
export interface VisibilitySDKType {
  rules: VisibilityRuleSDKType[];
}
/**
 * A visibility rule provides visibility configuration for an individual API
 * element.
 */
export interface VisibilityRule {
  /**
   * Selects methods, messages, fields, enums, etc. to which this rule applies.
   * 
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
   */
  selector: string;
  /**
   * A comma-separated list of visibility labels that apply to the `selector`.
   * Any of the listed labels can be used to grant the visibility.
   * 
   * If a rule has multiple labels, removing one of the labels but not all of
   * them can break clients.
   * 
   * Example:
   * 
   *     visibility:
   *       rules:
   *       - selector: google.calendar.Calendar.EnhancedSearch
   *         restriction: INTERNAL, PREVIEW
   * 
   * Removing INTERNAL from this restriction will break clients that rely on
   * this method and only had access to it through INTERNAL.
   */
  restriction: string;
}
export interface ReactiveVisibilityRule {
  selector: ComputedRef<string>;
  restriction: ComputedRef<string>;
}
export interface VisibilityRuleProtoMsg {
  typeUrl: "/google.api.VisibilityRule";
  value: Uint8Array;
}
/**
 * A visibility rule provides visibility configuration for an individual API
 * element.
 */
export interface VisibilityRuleSDKType {
  selector: string;
  restriction: string;
}
function createBaseVisibility(): Visibility {
  return {
    rules: []
  };
}
export const Visibility = {
  typeUrl: "/google.api.Visibility",
  encode(message: Visibility, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.rules) {
      VisibilityRule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Visibility {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVisibility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rules.push(VisibilityRule.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Visibility {
    return {
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => VisibilityRule.fromJSON(e)) : []
    };
  },
  toJSON(message: Visibility): JsonSafe<Visibility> {
    const obj: any = {};
    if (message.rules) {
      obj.rules = message.rules.map(e => e ? VisibilityRule.toJSON(e) : undefined);
    } else {
      obj.rules = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Visibility>): Visibility {
    const message = createBaseVisibility();
    message.rules = object.rules?.map(e => VisibilityRule.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: VisibilitySDKType): Visibility {
    return {
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => VisibilityRule.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): VisibilitySDKType {
    return {
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => VisibilityRule.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: Visibility): VisibilitySDKType {
    const obj: any = {};
    if (message.rules) {
      obj.rules = message.rules.map(e => e ? VisibilityRule.toSDK(e) : undefined);
    } else {
      obj.rules = [];
    }
    return obj;
  },
  fromAmino(object: VisibilityAmino): Visibility {
    const message = createBaseVisibility();
    message.rules = object.rules?.map(e => VisibilityRule.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Visibility): VisibilityAmino {
    const obj: any = {};
    if (message.rules) {
      obj.rules = message.rules.map(e => e ? VisibilityRule.toAmino(e) : undefined);
    } else {
      obj.rules = message.rules;
    }
    return obj;
  },
  fromAminoMsg(object: VisibilityAminoMsg): Visibility {
    return Visibility.fromAmino(object.value);
  },
  fromProtoMsg(message: VisibilityProtoMsg): Visibility {
    return Visibility.decode(message.value);
  },
  toProto(message: Visibility): Uint8Array {
    return Visibility.encode(message).finish();
  },
  toProtoMsg(message: Visibility): VisibilityProtoMsg {
    return {
      typeUrl: "/google.api.Visibility",
      value: Visibility.encode(message).finish()
    };
  }
};
function createBaseVisibilityRule(): VisibilityRule {
  return {
    selector: "",
    restriction: ""
  };
}
export const VisibilityRule = {
  typeUrl: "/google.api.VisibilityRule",
  encode(message: VisibilityRule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    if (message.restriction !== "") {
      writer.uint32(18).string(message.restriction);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VisibilityRule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVisibilityRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;
        case 2:
          message.restriction = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VisibilityRule {
    return {
      selector: isSet(object.selector) ? String(object.selector) : "",
      restriction: isSet(object.restriction) ? String(object.restriction) : ""
    };
  },
  toJSON(message: VisibilityRule): JsonSafe<VisibilityRule> {
    const obj: any = {};
    message.selector !== undefined && (obj.selector = message.selector);
    message.restriction !== undefined && (obj.restriction = message.restriction);
    return obj;
  },
  fromPartial(object: DeepPartial<VisibilityRule>): VisibilityRule {
    const message = createBaseVisibilityRule();
    message.selector = object.selector ?? "";
    message.restriction = object.restriction ?? "";
    return message;
  },
  fromSDK(object: VisibilityRuleSDKType): VisibilityRule {
    return {
      selector: object?.selector,
      restriction: object?.restriction
    };
  },
  fromSDKJSON(object: any): VisibilityRuleSDKType {
    return {
      selector: isSet(object.selector) ? String(object.selector) : "",
      restriction: isSet(object.restriction) ? String(object.restriction) : ""
    };
  },
  toSDK(message: VisibilityRule): VisibilityRuleSDKType {
    const obj: any = {};
    obj.selector = message.selector;
    obj.restriction = message.restriction;
    return obj;
  },
  fromAmino(object: VisibilityRuleAmino): VisibilityRule {
    const message = createBaseVisibilityRule();
    if (object.selector !== undefined && object.selector !== null) {
      message.selector = object.selector;
    }
    if (object.restriction !== undefined && object.restriction !== null) {
      message.restriction = object.restriction;
    }
    return message;
  },
  toAmino(message: VisibilityRule): VisibilityRuleAmino {
    const obj: any = {};
    obj.selector = message.selector === "" ? undefined : message.selector;
    obj.restriction = message.restriction === "" ? undefined : message.restriction;
    return obj;
  },
  fromAminoMsg(object: VisibilityRuleAminoMsg): VisibilityRule {
    return VisibilityRule.fromAmino(object.value);
  },
  fromProtoMsg(message: VisibilityRuleProtoMsg): VisibilityRule {
    return VisibilityRule.decode(message.value);
  },
  toProto(message: VisibilityRule): Uint8Array {
    return VisibilityRule.encode(message).finish();
  },
  toProtoMsg(message: VisibilityRule): VisibilityRuleProtoMsg {
    return {
      typeUrl: "/google.api.VisibilityRule",
      value: VisibilityRule.encode(message).finish()
    };
  }
};