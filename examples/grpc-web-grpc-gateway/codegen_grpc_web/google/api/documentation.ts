import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../helpers";
export const protobufPackage = "google.api";
/**
 * `Documentation` provides the information for describing a service.
 * 
 * Example:
 * <pre><code>documentation:
 *   summary: >
 *     The Google Calendar API gives access
 *     to most calendar features.
 *   pages:
 *   - name: Overview
 *     content: &#40;== include google/foo/overview.md ==&#41;
 *   - name: Tutorial
 *     content: &#40;== include google/foo/tutorial.md ==&#41;
 *     subpages;
 *     - name: Java
 *       content: &#40;== include google/foo/tutorial_java.md ==&#41;
 *   rules:
 *   - selector: google.calendar.Calendar.Get
 *     description: >
 *       ...
 *   - selector: google.calendar.Calendar.Put
 *     description: >
 *       ...
 * </code></pre>
 * Documentation is provided in markdown syntax. In addition to
 * standard markdown features, definition lists, tables and fenced
 * code blocks are supported. Section headers can be provided and are
 * interpreted relative to the section nesting of the context where
 * a documentation fragment is embedded.
 * 
 * Documentation from the IDL is merged with documentation defined
 * via the config at normalization time, where documentation provided
 * by config rules overrides IDL provided.
 * 
 * A number of constructs specific to the API platform are supported
 * in documentation text.
 * 
 * In order to reference a proto element, the following
 * notation can be used:
 * <pre><code>&#91;fully.qualified.proto.name]&#91;]</code></pre>
 * To override the display text used for the link, this can be used:
 * <pre><code>&#91;display text]&#91;fully.qualified.proto.name]</code></pre>
 * Text can be excluded from doc using the following notation:
 * <pre><code>&#40;-- internal comment --&#41;</code></pre>
 * 
 * A few directives are available in documentation. Note that
 * directives must appear on a single line to be properly
 * identified. The `include` directive includes a markdown file from
 * an external source:
 * <pre><code>&#40;== include path/to/file ==&#41;</code></pre>
 * The `resource_for` directive marks a message to be the resource of
 * a collection in REST view. If it is not specified, tools attempt
 * to infer the resource from the operations in a collection:
 * <pre><code>&#40;== resource_for v1.shelves.books ==&#41;</code></pre>
 * The directive `suppress_warning` does not directly affect documentation
 * and is documented together with service config validation.
 */
export interface Documentation {
  /**
   * A short summary of what the service does. Can only be provided by
   * plain text.
   */
  summary: string;
  /** The top level pages for the documentation set. */
  pages: Page[];
  /**
   * A list of documentation rules that apply to individual API elements.
   * 
   * **NOTE:** All service configuration rules follow "last one wins" order.
   */
  rules: DocumentationRule[];
  /** The URL to the root of documentation. */
  documentationRootUrl: string;
  /**
   * Specifies the service root url if the default one (the service name
   * from the yaml file) is not suitable. This can be seen in any fully
   * specified service urls as well as sections that show a base that other
   * urls are relative to.
   */
  serviceRootUrl: string;
  /**
   * Declares a single overview page. For example:
   * <pre><code>documentation:
   *   summary: ...
   *   overview: &#40;== include overview.md ==&#41;
   * </code></pre>
   * This is a shortcut for the following declaration (using pages style):
   * <pre><code>documentation:
   *   summary: ...
   *   pages:
   *   - name: Overview
   *     content: &#40;== include overview.md ==&#41;
   * </code></pre>
   * Note: you cannot specify both `overview` field and `pages` field.
   */
  overview: string;
}
export interface DocumentationProtoMsg {
  typeUrl: "/google.api.Documentation";
  value: Uint8Array;
}
/**
 * `Documentation` provides the information for describing a service.
 * 
 * Example:
 * <pre><code>documentation:
 *   summary: >
 *     The Google Calendar API gives access
 *     to most calendar features.
 *   pages:
 *   - name: Overview
 *     content: &#40;== include google/foo/overview.md ==&#41;
 *   - name: Tutorial
 *     content: &#40;== include google/foo/tutorial.md ==&#41;
 *     subpages;
 *     - name: Java
 *       content: &#40;== include google/foo/tutorial_java.md ==&#41;
 *   rules:
 *   - selector: google.calendar.Calendar.Get
 *     description: >
 *       ...
 *   - selector: google.calendar.Calendar.Put
 *     description: >
 *       ...
 * </code></pre>
 * Documentation is provided in markdown syntax. In addition to
 * standard markdown features, definition lists, tables and fenced
 * code blocks are supported. Section headers can be provided and are
 * interpreted relative to the section nesting of the context where
 * a documentation fragment is embedded.
 * 
 * Documentation from the IDL is merged with documentation defined
 * via the config at normalization time, where documentation provided
 * by config rules overrides IDL provided.
 * 
 * A number of constructs specific to the API platform are supported
 * in documentation text.
 * 
 * In order to reference a proto element, the following
 * notation can be used:
 * <pre><code>&#91;fully.qualified.proto.name]&#91;]</code></pre>
 * To override the display text used for the link, this can be used:
 * <pre><code>&#91;display text]&#91;fully.qualified.proto.name]</code></pre>
 * Text can be excluded from doc using the following notation:
 * <pre><code>&#40;-- internal comment --&#41;</code></pre>
 * 
 * A few directives are available in documentation. Note that
 * directives must appear on a single line to be properly
 * identified. The `include` directive includes a markdown file from
 * an external source:
 * <pre><code>&#40;== include path/to/file ==&#41;</code></pre>
 * The `resource_for` directive marks a message to be the resource of
 * a collection in REST view. If it is not specified, tools attempt
 * to infer the resource from the operations in a collection:
 * <pre><code>&#40;== resource_for v1.shelves.books ==&#41;</code></pre>
 * The directive `suppress_warning` does not directly affect documentation
 * and is documented together with service config validation.
 */
export interface DocumentationAmino {
  /**
   * A short summary of what the service does. Can only be provided by
   * plain text.
   */
  summary: string;
  /** The top level pages for the documentation set. */
  pages: PageAmino[];
  /**
   * A list of documentation rules that apply to individual API elements.
   * 
   * **NOTE:** All service configuration rules follow "last one wins" order.
   */
  rules: DocumentationRuleAmino[];
  /** The URL to the root of documentation. */
  documentation_root_url: string;
  /**
   * Specifies the service root url if the default one (the service name
   * from the yaml file) is not suitable. This can be seen in any fully
   * specified service urls as well as sections that show a base that other
   * urls are relative to.
   */
  service_root_url: string;
  /**
   * Declares a single overview page. For example:
   * <pre><code>documentation:
   *   summary: ...
   *   overview: &#40;== include overview.md ==&#41;
   * </code></pre>
   * This is a shortcut for the following declaration (using pages style):
   * <pre><code>documentation:
   *   summary: ...
   *   pages:
   *   - name: Overview
   *     content: &#40;== include overview.md ==&#41;
   * </code></pre>
   * Note: you cannot specify both `overview` field and `pages` field.
   */
  overview: string;
}
export interface DocumentationAminoMsg {
  type: "/google.api.Documentation";
  value: DocumentationAmino;
}
/**
 * `Documentation` provides the information for describing a service.
 * 
 * Example:
 * <pre><code>documentation:
 *   summary: >
 *     The Google Calendar API gives access
 *     to most calendar features.
 *   pages:
 *   - name: Overview
 *     content: &#40;== include google/foo/overview.md ==&#41;
 *   - name: Tutorial
 *     content: &#40;== include google/foo/tutorial.md ==&#41;
 *     subpages;
 *     - name: Java
 *       content: &#40;== include google/foo/tutorial_java.md ==&#41;
 *   rules:
 *   - selector: google.calendar.Calendar.Get
 *     description: >
 *       ...
 *   - selector: google.calendar.Calendar.Put
 *     description: >
 *       ...
 * </code></pre>
 * Documentation is provided in markdown syntax. In addition to
 * standard markdown features, definition lists, tables and fenced
 * code blocks are supported. Section headers can be provided and are
 * interpreted relative to the section nesting of the context where
 * a documentation fragment is embedded.
 * 
 * Documentation from the IDL is merged with documentation defined
 * via the config at normalization time, where documentation provided
 * by config rules overrides IDL provided.
 * 
 * A number of constructs specific to the API platform are supported
 * in documentation text.
 * 
 * In order to reference a proto element, the following
 * notation can be used:
 * <pre><code>&#91;fully.qualified.proto.name]&#91;]</code></pre>
 * To override the display text used for the link, this can be used:
 * <pre><code>&#91;display text]&#91;fully.qualified.proto.name]</code></pre>
 * Text can be excluded from doc using the following notation:
 * <pre><code>&#40;-- internal comment --&#41;</code></pre>
 * 
 * A few directives are available in documentation. Note that
 * directives must appear on a single line to be properly
 * identified. The `include` directive includes a markdown file from
 * an external source:
 * <pre><code>&#40;== include path/to/file ==&#41;</code></pre>
 * The `resource_for` directive marks a message to be the resource of
 * a collection in REST view. If it is not specified, tools attempt
 * to infer the resource from the operations in a collection:
 * <pre><code>&#40;== resource_for v1.shelves.books ==&#41;</code></pre>
 * The directive `suppress_warning` does not directly affect documentation
 * and is documented together with service config validation.
 */
export interface DocumentationSDKType {
  summary: string;
  pages: PageSDKType[];
  rules: DocumentationRuleSDKType[];
  documentation_root_url: string;
  service_root_url: string;
  overview: string;
}
/** A documentation rule provides information about individual API elements. */
export interface DocumentationRule {
  /**
   * The selector is a comma-separated list of patterns. Each pattern is a
   * qualified name of the element which may end in "*", indicating a wildcard.
   * Wildcards are only allowed at the end and for a whole component of the
   * qualified name, i.e. "foo.*" is ok, but not "foo.b*" or "foo.*.bar". A
   * wildcard will match one or more components. To specify a default for all
   * applicable elements, the whole pattern "*" is used.
   */
  selector: string;
  /** Description of the selected API(s). */
  description: string;
  /**
   * Deprecation description of the selected element(s). It can be provided if
   * an element is marked as `deprecated`.
   */
  deprecationDescription: string;
}
export interface DocumentationRuleProtoMsg {
  typeUrl: "/google.api.DocumentationRule";
  value: Uint8Array;
}
/** A documentation rule provides information about individual API elements. */
export interface DocumentationRuleAmino {
  /**
   * The selector is a comma-separated list of patterns. Each pattern is a
   * qualified name of the element which may end in "*", indicating a wildcard.
   * Wildcards are only allowed at the end and for a whole component of the
   * qualified name, i.e. "foo.*" is ok, but not "foo.b*" or "foo.*.bar". A
   * wildcard will match one or more components. To specify a default for all
   * applicable elements, the whole pattern "*" is used.
   */
  selector: string;
  /** Description of the selected API(s). */
  description: string;
  /**
   * Deprecation description of the selected element(s). It can be provided if
   * an element is marked as `deprecated`.
   */
  deprecation_description: string;
}
export interface DocumentationRuleAminoMsg {
  type: "/google.api.DocumentationRule";
  value: DocumentationRuleAmino;
}
/** A documentation rule provides information about individual API elements. */
export interface DocumentationRuleSDKType {
  selector: string;
  description: string;
  deprecation_description: string;
}
/**
 * Represents a documentation page. A page can contain subpages to represent
 * nested documentation set structure.
 */
export interface Page {
  /**
   * The name of the page. It will be used as an identity of the page to
   * generate URI of the page, text of the link to this page in navigation,
   * etc. The full page name (start from the root page name to this page
   * concatenated with `.`) can be used as reference to the page in your
   * documentation. For example:
   * <pre><code>pages:
   * - name: Tutorial
   *   content: &#40;== include tutorial.md ==&#41;
   *   subpages:
   *   - name: Java
   *     content: &#40;== include tutorial_java.md ==&#41;
   * </code></pre>
   * You can reference `Java` page using Markdown reference link syntax:
   * `[Java][Tutorial.Java]`.
   */
  name: string;
  /**
   * The Markdown content of the page. You can use <code>&#40;== include {path}
   * ==&#41;</code> to include content from a Markdown file.
   */
  content: string;
  /**
   * Subpages of this page. The order of subpages specified here will be
   * honored in the generated docset.
   */
  subpages: Page[];
}
export interface PageProtoMsg {
  typeUrl: "/google.api.Page";
  value: Uint8Array;
}
/**
 * Represents a documentation page. A page can contain subpages to represent
 * nested documentation set structure.
 */
export interface PageAmino {
  /**
   * The name of the page. It will be used as an identity of the page to
   * generate URI of the page, text of the link to this page in navigation,
   * etc. The full page name (start from the root page name to this page
   * concatenated with `.`) can be used as reference to the page in your
   * documentation. For example:
   * <pre><code>pages:
   * - name: Tutorial
   *   content: &#40;== include tutorial.md ==&#41;
   *   subpages:
   *   - name: Java
   *     content: &#40;== include tutorial_java.md ==&#41;
   * </code></pre>
   * You can reference `Java` page using Markdown reference link syntax:
   * `[Java][Tutorial.Java]`.
   */
  name: string;
  /**
   * The Markdown content of the page. You can use <code>&#40;== include {path}
   * ==&#41;</code> to include content from a Markdown file.
   */
  content: string;
  /**
   * Subpages of this page. The order of subpages specified here will be
   * honored in the generated docset.
   */
  subpages: PageAmino[];
}
export interface PageAminoMsg {
  type: "/google.api.Page";
  value: PageAmino;
}
/**
 * Represents a documentation page. A page can contain subpages to represent
 * nested documentation set structure.
 */
export interface PageSDKType {
  name: string;
  content: string;
  subpages: PageSDKType[];
}
function createBaseDocumentation(): Documentation {
  return {
    summary: "",
    pages: [],
    rules: [],
    documentationRootUrl: "",
    serviceRootUrl: "",
    overview: ""
  };
}
export const Documentation = {
  typeUrl: "/google.api.Documentation",
  encode(message: Documentation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.summary !== "") {
      writer.uint32(10).string(message.summary);
    }
    for (const v of message.pages) {
      Page.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.rules) {
      DocumentationRule.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.documentationRootUrl !== "") {
      writer.uint32(34).string(message.documentationRootUrl);
    }
    if (message.serviceRootUrl !== "") {
      writer.uint32(50).string(message.serviceRootUrl);
    }
    if (message.overview !== "") {
      writer.uint32(18).string(message.overview);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Documentation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDocumentation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.summary = reader.string();
          break;
        case 5:
          message.pages.push(Page.decode(reader, reader.uint32()));
          break;
        case 3:
          message.rules.push(DocumentationRule.decode(reader, reader.uint32()));
          break;
        case 4:
          message.documentationRootUrl = reader.string();
          break;
        case 6:
          message.serviceRootUrl = reader.string();
          break;
        case 2:
          message.overview = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Documentation {
    return {
      summary: isSet(object.summary) ? String(object.summary) : "",
      pages: Array.isArray(object?.pages) ? object.pages.map((e: any) => Page.fromJSON(e)) : [],
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => DocumentationRule.fromJSON(e)) : [],
      documentationRootUrl: isSet(object.documentationRootUrl) ? String(object.documentationRootUrl) : "",
      serviceRootUrl: isSet(object.serviceRootUrl) ? String(object.serviceRootUrl) : "",
      overview: isSet(object.overview) ? String(object.overview) : ""
    };
  },
  toJSON(message: Documentation): unknown {
    const obj: any = {};
    message.summary !== undefined && (obj.summary = message.summary);
    if (message.pages) {
      obj.pages = message.pages.map(e => e ? Page.toJSON(e) : undefined);
    } else {
      obj.pages = [];
    }
    if (message.rules) {
      obj.rules = message.rules.map(e => e ? DocumentationRule.toJSON(e) : undefined);
    } else {
      obj.rules = [];
    }
    message.documentationRootUrl !== undefined && (obj.documentationRootUrl = message.documentationRootUrl);
    message.serviceRootUrl !== undefined && (obj.serviceRootUrl = message.serviceRootUrl);
    message.overview !== undefined && (obj.overview = message.overview);
    return obj;
  },
  fromPartial(object: DeepPartial<Documentation>): Documentation {
    const message = createBaseDocumentation();
    message.summary = object.summary ?? "";
    message.pages = object.pages?.map(e => Page.fromPartial(e)) || [];
    message.rules = object.rules?.map(e => DocumentationRule.fromPartial(e)) || [];
    message.documentationRootUrl = object.documentationRootUrl ?? "";
    message.serviceRootUrl = object.serviceRootUrl ?? "";
    message.overview = object.overview ?? "";
    return message;
  },
  fromSDK(object: DocumentationSDKType): Documentation {
    return {
      summary: object?.summary,
      pages: Array.isArray(object?.pages) ? object.pages.map((e: any) => Page.fromSDK(e)) : [],
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => DocumentationRule.fromSDK(e)) : [],
      documentationRootUrl: object?.documentation_root_url,
      serviceRootUrl: object?.service_root_url,
      overview: object?.overview
    };
  },
  toSDK(message: Documentation): DocumentationSDKType {
    const obj: any = {};
    obj.summary = message.summary;
    if (message.pages) {
      obj.pages = message.pages.map(e => e ? Page.toSDK(e) : undefined);
    } else {
      obj.pages = [];
    }
    if (message.rules) {
      obj.rules = message.rules.map(e => e ? DocumentationRule.toSDK(e) : undefined);
    } else {
      obj.rules = [];
    }
    obj.documentation_root_url = message.documentationRootUrl;
    obj.service_root_url = message.serviceRootUrl;
    obj.overview = message.overview;
    return obj;
  },
  fromAmino(object: DocumentationAmino): Documentation {
    return {
      summary: object.summary,
      pages: Array.isArray(object?.pages) ? object.pages.map((e: any) => Page.fromAmino(e)) : [],
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => DocumentationRule.fromAmino(e)) : [],
      documentationRootUrl: object.documentation_root_url,
      serviceRootUrl: object.service_root_url,
      overview: object.overview
    };
  },
  toAmino(message: Documentation): DocumentationAmino {
    const obj: any = {};
    obj.summary = message.summary;
    if (message.pages) {
      obj.pages = message.pages.map(e => e ? Page.toAmino(e) : undefined);
    } else {
      obj.pages = [];
    }
    if (message.rules) {
      obj.rules = message.rules.map(e => e ? DocumentationRule.toAmino(e) : undefined);
    } else {
      obj.rules = [];
    }
    obj.documentation_root_url = message.documentationRootUrl;
    obj.service_root_url = message.serviceRootUrl;
    obj.overview = message.overview;
    return obj;
  },
  fromAminoMsg(object: DocumentationAminoMsg): Documentation {
    return Documentation.fromAmino(object.value);
  },
  fromProtoMsg(message: DocumentationProtoMsg): Documentation {
    return Documentation.decode(message.value);
  },
  toProto(message: Documentation): Uint8Array {
    return Documentation.encode(message).finish();
  },
  toProtoMsg(message: Documentation): DocumentationProtoMsg {
    return {
      typeUrl: "/google.api.Documentation",
      value: Documentation.encode(message).finish()
    };
  }
};
function createBaseDocumentationRule(): DocumentationRule {
  return {
    selector: "",
    description: "",
    deprecationDescription: ""
  };
}
export const DocumentationRule = {
  typeUrl: "/google.api.DocumentationRule",
  encode(message: DocumentationRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.deprecationDescription !== "") {
      writer.uint32(26).string(message.deprecationDescription);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DocumentationRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDocumentationRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.deprecationDescription = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DocumentationRule {
    return {
      selector: isSet(object.selector) ? String(object.selector) : "",
      description: isSet(object.description) ? String(object.description) : "",
      deprecationDescription: isSet(object.deprecationDescription) ? String(object.deprecationDescription) : ""
    };
  },
  toJSON(message: DocumentationRule): unknown {
    const obj: any = {};
    message.selector !== undefined && (obj.selector = message.selector);
    message.description !== undefined && (obj.description = message.description);
    message.deprecationDescription !== undefined && (obj.deprecationDescription = message.deprecationDescription);
    return obj;
  },
  fromPartial(object: DeepPartial<DocumentationRule>): DocumentationRule {
    const message = createBaseDocumentationRule();
    message.selector = object.selector ?? "";
    message.description = object.description ?? "";
    message.deprecationDescription = object.deprecationDescription ?? "";
    return message;
  },
  fromSDK(object: DocumentationRuleSDKType): DocumentationRule {
    return {
      selector: object?.selector,
      description: object?.description,
      deprecationDescription: object?.deprecation_description
    };
  },
  toSDK(message: DocumentationRule): DocumentationRuleSDKType {
    const obj: any = {};
    obj.selector = message.selector;
    obj.description = message.description;
    obj.deprecation_description = message.deprecationDescription;
    return obj;
  },
  fromAmino(object: DocumentationRuleAmino): DocumentationRule {
    return {
      selector: object.selector,
      description: object.description,
      deprecationDescription: object.deprecation_description
    };
  },
  toAmino(message: DocumentationRule): DocumentationRuleAmino {
    const obj: any = {};
    obj.selector = message.selector;
    obj.description = message.description;
    obj.deprecation_description = message.deprecationDescription;
    return obj;
  },
  fromAminoMsg(object: DocumentationRuleAminoMsg): DocumentationRule {
    return DocumentationRule.fromAmino(object.value);
  },
  fromProtoMsg(message: DocumentationRuleProtoMsg): DocumentationRule {
    return DocumentationRule.decode(message.value);
  },
  toProto(message: DocumentationRule): Uint8Array {
    return DocumentationRule.encode(message).finish();
  },
  toProtoMsg(message: DocumentationRule): DocumentationRuleProtoMsg {
    return {
      typeUrl: "/google.api.DocumentationRule",
      value: DocumentationRule.encode(message).finish()
    };
  }
};
function createBasePage(): Page {
  return {
    name: "",
    content: "",
    subpages: []
  };
}
export const Page = {
  typeUrl: "/google.api.Page",
  encode(message: Page, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.content !== "") {
      writer.uint32(18).string(message.content);
    }
    for (const v of message.subpages) {
      Page.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Page {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.content = reader.string();
          break;
        case 3:
          message.subpages.push(Page.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Page {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      content: isSet(object.content) ? String(object.content) : "",
      subpages: Array.isArray(object?.subpages) ? object.subpages.map((e: any) => Page.fromJSON(e)) : []
    };
  },
  toJSON(message: Page): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.content !== undefined && (obj.content = message.content);
    if (message.subpages) {
      obj.subpages = message.subpages.map(e => e ? Page.toJSON(e) : undefined);
    } else {
      obj.subpages = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Page>): Page {
    const message = createBasePage();
    message.name = object.name ?? "";
    message.content = object.content ?? "";
    message.subpages = object.subpages?.map(e => Page.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: PageSDKType): Page {
    return {
      name: object?.name,
      content: object?.content,
      subpages: Array.isArray(object?.subpages) ? object.subpages.map((e: any) => Page.fromSDK(e)) : []
    };
  },
  toSDK(message: Page): PageSDKType {
    const obj: any = {};
    obj.name = message.name;
    obj.content = message.content;
    if (message.subpages) {
      obj.subpages = message.subpages.map(e => e ? Page.toSDK(e) : undefined);
    } else {
      obj.subpages = [];
    }
    return obj;
  },
  fromAmino(object: PageAmino): Page {
    return {
      name: object.name,
      content: object.content,
      subpages: Array.isArray(object?.subpages) ? object.subpages.map((e: any) => Page.fromAmino(e)) : []
    };
  },
  toAmino(message: Page): PageAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.content = message.content;
    if (message.subpages) {
      obj.subpages = message.subpages.map(e => e ? Page.toAmino(e) : undefined);
    } else {
      obj.subpages = [];
    }
    return obj;
  },
  fromAminoMsg(object: PageAminoMsg): Page {
    return Page.fromAmino(object.value);
  },
  fromProtoMsg(message: PageProtoMsg): Page {
    return Page.decode(message.value);
  },
  toProto(message: Page): Uint8Array {
    return Page.encode(message).finish();
  },
  toProtoMsg(message: Page): PageProtoMsg {
    return {
      typeUrl: "/google.api.Page",
      value: Page.encode(message).finish()
    };
  }
};