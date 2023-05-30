import * as _m0 from "protobufjs/minimal";
import { DeepPartial, isSet } from "../../helpers";
export const protobufPackage = "google.api";
/**
 * Specifies the routing information that should be sent along with the request
 * in the form of routing header.
 * **NOTE:** All service configuration rules follow the "last one wins" order.
 * 
 * The examples below will apply to an RPC which has the following request type:
 * 
 * Message Definition:
 * 
 *     message Request {
 *       // The name of the Table
 *       // Values can be of the following formats:
 *       // - `projects/<project>/tables/<table>`
 *       // - `projects/<project>/instances/<instance>/tables/<table>`
 *       // - `region/<region>/zones/<zone>/tables/<table>`
 *       string table_name = 1;
 * 
 *       // This value specifies routing for replication.
 *       // It can be in the following formats:
 *       // - `profiles/<profile_id>`
 *       // - a legacy `profile_id` that can be any string
 *       string app_profile_id = 2;
 *     }
 * 
 * Example message:
 * 
 *     {
 *       table_name: projects/proj_foo/instances/instance_bar/table/table_baz,
 *       app_profile_id: profiles/prof_qux
 *     }
 * 
 * The routing header consists of one or multiple key-value pairs. Every key
 * and value must be percent-encoded, and joined together in the format of
 * `key1=value1&key2=value2`.
 * In the examples below I am skipping the percent-encoding for readablity.
 * 
 * Example 1
 * 
 * Extracting a field from the request to put into the routing header
 * unchanged, with the key equal to the field name.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // Take the `app_profile_id`.
 *       routing_parameters {
 *         field: "app_profile_id"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params: app_profile_id=profiles/prof_qux
 * 
 * Example 2
 * 
 * Extracting a field from the request to put into the routing header
 * unchanged, with the key different from the field name.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // Take the `app_profile_id`, but name it `routing_id` in the header.
 *       routing_parameters {
 *         field: "app_profile_id"
 *         path_template: "{routing_id=**}"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params: routing_id=profiles/prof_qux
 * 
 * Example 3
 * 
 * Extracting a field from the request to put into the routing
 * header, while matching a path template syntax on the field's value.
 * 
 * NB: it is more useful to send nothing than to send garbage for the purpose
 * of dynamic routing, since garbage pollutes cache. Thus the matching.
 * 
 * Sub-example 3a
 * 
 * The field matches the template.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // Take the `table_name`, if it's well-formed (with project-based
 *       // syntax).
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{table_name=projects/*\/instances/*\/**}"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params:
 *     table_name=projects/proj_foo/instances/instance_bar/table/table_baz
 * 
 * Sub-example 3b
 * 
 * The field does not match the template.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // Take the `table_name`, if it's well-formed (with region-based
 *       // syntax).
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{table_name=regions/*\/zones/*\/**}"
 *       }
 *     };
 * 
 * result:
 * 
 *     <no routing header will be sent>
 * 
 * Sub-example 3c
 * 
 * Multiple alternative conflictingly named path templates are
 * specified. The one that matches is used to construct the header.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // Take the `table_name`, if it's well-formed, whether
 *       // using the region- or projects-based syntax.
 * 
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{table_name=regions/*\/zones/*\/**}"
 *       }
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{table_name=projects/*\/instances/*\/**}"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params:
 *     table_name=projects/proj_foo/instances/instance_bar/table/table_baz
 * 
 * Example 4
 * 
 * Extracting a single routing header key-value pair by matching a
 * template syntax on (a part of) a single request field.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // Take just the project id from the `table_name` field.
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{routing_id=projects/*}/**"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params: routing_id=projects/proj_foo
 * 
 * Example 5
 * 
 * Extracting a single routing header key-value pair by matching
 * several conflictingly named path templates on (parts of) a single request
 * field. The last template to match "wins" the conflict.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // If the `table_name` does not have instances information,
 *       // take just the project id for routing.
 *       // Otherwise take project + instance.
 * 
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{routing_id=projects/*}/**"
 *       }
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{routing_id=projects/*\/instances/*}/**"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params:
 *     routing_id=projects/proj_foo/instances/instance_bar
 * 
 * Example 6
 * 
 * Extracting multiple routing header key-value pairs by matching
 * several non-conflicting path templates on (parts of) a single request field.
 * 
 * Sub-example 6a
 * 
 * Make the templates strict, so that if the `table_name` does not
 * have an instance information, nothing is sent.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // The routing code needs two keys instead of one composite
 *       // but works only for the tables with the "project-instance" name
 *       // syntax.
 * 
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{project_id=projects/*}/instances/*\/**"
 *       }
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "projects/*\/{instance_id=instances/*}/**"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params:
 *     project_id=projects/proj_foo&instance_id=instances/instance_bar
 * 
 * Sub-example 6b
 * 
 * Make the templates loose, so that if the `table_name` does not
 * have an instance information, just the project id part is sent.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // The routing code wants two keys instead of one composite
 *       // but will work with just the `project_id` for tables without
 *       // an instance in the `table_name`.
 * 
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{project_id=projects/*}/**"
 *       }
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "projects/*\/{instance_id=instances/*}/**"
 *       }
 *     };
 * 
 * result (is the same as 6a for our example message because it has the instance
 * information):
 * 
 *     x-goog-request-params:
 *     project_id=projects/proj_foo&instance_id=instances/instance_bar
 * 
 * Example 7
 * 
 * Extracting multiple routing header key-value pairs by matching
 * several path templates on multiple request fields.
 * 
 * NB: note that here there is no way to specify sending nothing if one of the
 * fields does not match its template. E.g. if the `table_name` is in the wrong
 * format, the `project_id` will not be sent, but the `routing_id` will be.
 * The backend routing code has to be aware of that and be prepared to not
 * receive a full complement of keys if it expects multiple.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // The routing needs both `project_id` and `routing_id`
 *       // (from the `app_profile_id` field) for routing.
 * 
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{project_id=projects/*}/**"
 *       }
 *       routing_parameters {
 *         field: "app_profile_id"
 *         path_template: "{routing_id=**}"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params:
 *     project_id=projects/proj_foo&routing_id=profiles/prof_qux
 * 
 * Example 8
 * 
 * Extracting a single routing header key-value pair by matching
 * several conflictingly named path templates on several request fields. The
 * last template to match "wins" the conflict.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // The `routing_id` can be a project id or a region id depending on
 *       // the table name format, but only if the `app_profile_id` is not set.
 *       // If `app_profile_id` is set it should be used instead.
 * 
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{routing_id=projects/*}/**"
 *       }
 *       routing_parameters {
 *          field: "table_name"
 *          path_template: "{routing_id=regions/*}/**"
 *       }
 *       routing_parameters {
 *         field: "app_profile_id"
 *         path_template: "{routing_id=**}"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params: routing_id=profiles/prof_qux
 * 
 * Example 9
 * 
 * Bringing it all together.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // For routing both `table_location` and a `routing_id` are needed.
 *       //
 *       // table_location can be either an instance id or a region+zone id.
 *       //
 *       // For `routing_id`, take the value of `app_profile_id`
 *       // - If it's in the format `profiles/<profile_id>`, send
 *       // just the `<profile_id>` part.
 *       // - If it's any other literal, send it as is.
 *       // If the `app_profile_id` is empty, and the `table_name` starts with
 *       // the project_id, send that instead.
 * 
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "projects/*\/{table_location=instances/*}/tables/*"
 *       }
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{table_location=regions/*\/zones/*}/tables/*"
 *       }
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{routing_id=projects/*}/**"
 *       }
 *       routing_parameters {
 *         field: "app_profile_id"
 *         path_template: "{routing_id=**}"
 *       }
 *       routing_parameters {
 *         field: "app_profile_id"
 *         path_template: "profiles/{routing_id=*}"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params:
 *     table_location=instances/instance_bar&routing_id=prof_qux
 */
export interface RoutingRule {
  /**
   * A collection of Routing Parameter specifications.
   * **NOTE:** If multiple Routing Parameters describe the same key
   * (via the `path_template` field or via the `field` field when
   * `path_template` is not provided), "last one wins" rule
   * determines which Parameter gets used.
   * See the examples for more details.
   */
  routingParameters: RoutingParameter[];
}
export interface RoutingRuleProtoMsg {
  typeUrl: "/google.api.RoutingRule";
  value: Uint8Array;
}
/**
 * Specifies the routing information that should be sent along with the request
 * in the form of routing header.
 * **NOTE:** All service configuration rules follow the "last one wins" order.
 * 
 * The examples below will apply to an RPC which has the following request type:
 * 
 * Message Definition:
 * 
 *     message Request {
 *       // The name of the Table
 *       // Values can be of the following formats:
 *       // - `projects/<project>/tables/<table>`
 *       // - `projects/<project>/instances/<instance>/tables/<table>`
 *       // - `region/<region>/zones/<zone>/tables/<table>`
 *       string table_name = 1;
 * 
 *       // This value specifies routing for replication.
 *       // It can be in the following formats:
 *       // - `profiles/<profile_id>`
 *       // - a legacy `profile_id` that can be any string
 *       string app_profile_id = 2;
 *     }
 * 
 * Example message:
 * 
 *     {
 *       table_name: projects/proj_foo/instances/instance_bar/table/table_baz,
 *       app_profile_id: profiles/prof_qux
 *     }
 * 
 * The routing header consists of one or multiple key-value pairs. Every key
 * and value must be percent-encoded, and joined together in the format of
 * `key1=value1&key2=value2`.
 * In the examples below I am skipping the percent-encoding for readablity.
 * 
 * Example 1
 * 
 * Extracting a field from the request to put into the routing header
 * unchanged, with the key equal to the field name.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // Take the `app_profile_id`.
 *       routing_parameters {
 *         field: "app_profile_id"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params: app_profile_id=profiles/prof_qux
 * 
 * Example 2
 * 
 * Extracting a field from the request to put into the routing header
 * unchanged, with the key different from the field name.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // Take the `app_profile_id`, but name it `routing_id` in the header.
 *       routing_parameters {
 *         field: "app_profile_id"
 *         path_template: "{routing_id=**}"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params: routing_id=profiles/prof_qux
 * 
 * Example 3
 * 
 * Extracting a field from the request to put into the routing
 * header, while matching a path template syntax on the field's value.
 * 
 * NB: it is more useful to send nothing than to send garbage for the purpose
 * of dynamic routing, since garbage pollutes cache. Thus the matching.
 * 
 * Sub-example 3a
 * 
 * The field matches the template.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // Take the `table_name`, if it's well-formed (with project-based
 *       // syntax).
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{table_name=projects/*\/instances/*\/**}"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params:
 *     table_name=projects/proj_foo/instances/instance_bar/table/table_baz
 * 
 * Sub-example 3b
 * 
 * The field does not match the template.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // Take the `table_name`, if it's well-formed (with region-based
 *       // syntax).
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{table_name=regions/*\/zones/*\/**}"
 *       }
 *     };
 * 
 * result:
 * 
 *     <no routing header will be sent>
 * 
 * Sub-example 3c
 * 
 * Multiple alternative conflictingly named path templates are
 * specified. The one that matches is used to construct the header.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // Take the `table_name`, if it's well-formed, whether
 *       // using the region- or projects-based syntax.
 * 
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{table_name=regions/*\/zones/*\/**}"
 *       }
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{table_name=projects/*\/instances/*\/**}"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params:
 *     table_name=projects/proj_foo/instances/instance_bar/table/table_baz
 * 
 * Example 4
 * 
 * Extracting a single routing header key-value pair by matching a
 * template syntax on (a part of) a single request field.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // Take just the project id from the `table_name` field.
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{routing_id=projects/*}/**"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params: routing_id=projects/proj_foo
 * 
 * Example 5
 * 
 * Extracting a single routing header key-value pair by matching
 * several conflictingly named path templates on (parts of) a single request
 * field. The last template to match "wins" the conflict.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // If the `table_name` does not have instances information,
 *       // take just the project id for routing.
 *       // Otherwise take project + instance.
 * 
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{routing_id=projects/*}/**"
 *       }
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{routing_id=projects/*\/instances/*}/**"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params:
 *     routing_id=projects/proj_foo/instances/instance_bar
 * 
 * Example 6
 * 
 * Extracting multiple routing header key-value pairs by matching
 * several non-conflicting path templates on (parts of) a single request field.
 * 
 * Sub-example 6a
 * 
 * Make the templates strict, so that if the `table_name` does not
 * have an instance information, nothing is sent.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // The routing code needs two keys instead of one composite
 *       // but works only for the tables with the "project-instance" name
 *       // syntax.
 * 
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{project_id=projects/*}/instances/*\/**"
 *       }
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "projects/*\/{instance_id=instances/*}/**"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params:
 *     project_id=projects/proj_foo&instance_id=instances/instance_bar
 * 
 * Sub-example 6b
 * 
 * Make the templates loose, so that if the `table_name` does not
 * have an instance information, just the project id part is sent.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // The routing code wants two keys instead of one composite
 *       // but will work with just the `project_id` for tables without
 *       // an instance in the `table_name`.
 * 
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{project_id=projects/*}/**"
 *       }
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "projects/*\/{instance_id=instances/*}/**"
 *       }
 *     };
 * 
 * result (is the same as 6a for our example message because it has the instance
 * information):
 * 
 *     x-goog-request-params:
 *     project_id=projects/proj_foo&instance_id=instances/instance_bar
 * 
 * Example 7
 * 
 * Extracting multiple routing header key-value pairs by matching
 * several path templates on multiple request fields.
 * 
 * NB: note that here there is no way to specify sending nothing if one of the
 * fields does not match its template. E.g. if the `table_name` is in the wrong
 * format, the `project_id` will not be sent, but the `routing_id` will be.
 * The backend routing code has to be aware of that and be prepared to not
 * receive a full complement of keys if it expects multiple.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // The routing needs both `project_id` and `routing_id`
 *       // (from the `app_profile_id` field) for routing.
 * 
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{project_id=projects/*}/**"
 *       }
 *       routing_parameters {
 *         field: "app_profile_id"
 *         path_template: "{routing_id=**}"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params:
 *     project_id=projects/proj_foo&routing_id=profiles/prof_qux
 * 
 * Example 8
 * 
 * Extracting a single routing header key-value pair by matching
 * several conflictingly named path templates on several request fields. The
 * last template to match "wins" the conflict.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // The `routing_id` can be a project id or a region id depending on
 *       // the table name format, but only if the `app_profile_id` is not set.
 *       // If `app_profile_id` is set it should be used instead.
 * 
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{routing_id=projects/*}/**"
 *       }
 *       routing_parameters {
 *          field: "table_name"
 *          path_template: "{routing_id=regions/*}/**"
 *       }
 *       routing_parameters {
 *         field: "app_profile_id"
 *         path_template: "{routing_id=**}"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params: routing_id=profiles/prof_qux
 * 
 * Example 9
 * 
 * Bringing it all together.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // For routing both `table_location` and a `routing_id` are needed.
 *       //
 *       // table_location can be either an instance id or a region+zone id.
 *       //
 *       // For `routing_id`, take the value of `app_profile_id`
 *       // - If it's in the format `profiles/<profile_id>`, send
 *       // just the `<profile_id>` part.
 *       // - If it's any other literal, send it as is.
 *       // If the `app_profile_id` is empty, and the `table_name` starts with
 *       // the project_id, send that instead.
 * 
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "projects/*\/{table_location=instances/*}/tables/*"
 *       }
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{table_location=regions/*\/zones/*}/tables/*"
 *       }
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{routing_id=projects/*}/**"
 *       }
 *       routing_parameters {
 *         field: "app_profile_id"
 *         path_template: "{routing_id=**}"
 *       }
 *       routing_parameters {
 *         field: "app_profile_id"
 *         path_template: "profiles/{routing_id=*}"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params:
 *     table_location=instances/instance_bar&routing_id=prof_qux
 */
export interface RoutingRuleAmino {
  /**
   * A collection of Routing Parameter specifications.
   * **NOTE:** If multiple Routing Parameters describe the same key
   * (via the `path_template` field or via the `field` field when
   * `path_template` is not provided), "last one wins" rule
   * determines which Parameter gets used.
   * See the examples for more details.
   */
  routing_parameters: RoutingParameterAmino[];
}
export interface RoutingRuleAminoMsg {
  type: "/google.api.RoutingRule";
  value: RoutingRuleAmino;
}
/**
 * Specifies the routing information that should be sent along with the request
 * in the form of routing header.
 * **NOTE:** All service configuration rules follow the "last one wins" order.
 * 
 * The examples below will apply to an RPC which has the following request type:
 * 
 * Message Definition:
 * 
 *     message Request {
 *       // The name of the Table
 *       // Values can be of the following formats:
 *       // - `projects/<project>/tables/<table>`
 *       // - `projects/<project>/instances/<instance>/tables/<table>`
 *       // - `region/<region>/zones/<zone>/tables/<table>`
 *       string table_name = 1;
 * 
 *       // This value specifies routing for replication.
 *       // It can be in the following formats:
 *       // - `profiles/<profile_id>`
 *       // - a legacy `profile_id` that can be any string
 *       string app_profile_id = 2;
 *     }
 * 
 * Example message:
 * 
 *     {
 *       table_name: projects/proj_foo/instances/instance_bar/table/table_baz,
 *       app_profile_id: profiles/prof_qux
 *     }
 * 
 * The routing header consists of one or multiple key-value pairs. Every key
 * and value must be percent-encoded, and joined together in the format of
 * `key1=value1&key2=value2`.
 * In the examples below I am skipping the percent-encoding for readablity.
 * 
 * Example 1
 * 
 * Extracting a field from the request to put into the routing header
 * unchanged, with the key equal to the field name.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // Take the `app_profile_id`.
 *       routing_parameters {
 *         field: "app_profile_id"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params: app_profile_id=profiles/prof_qux
 * 
 * Example 2
 * 
 * Extracting a field from the request to put into the routing header
 * unchanged, with the key different from the field name.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // Take the `app_profile_id`, but name it `routing_id` in the header.
 *       routing_parameters {
 *         field: "app_profile_id"
 *         path_template: "{routing_id=**}"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params: routing_id=profiles/prof_qux
 * 
 * Example 3
 * 
 * Extracting a field from the request to put into the routing
 * header, while matching a path template syntax on the field's value.
 * 
 * NB: it is more useful to send nothing than to send garbage for the purpose
 * of dynamic routing, since garbage pollutes cache. Thus the matching.
 * 
 * Sub-example 3a
 * 
 * The field matches the template.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // Take the `table_name`, if it's well-formed (with project-based
 *       // syntax).
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{table_name=projects/*\/instances/*\/**}"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params:
 *     table_name=projects/proj_foo/instances/instance_bar/table/table_baz
 * 
 * Sub-example 3b
 * 
 * The field does not match the template.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // Take the `table_name`, if it's well-formed (with region-based
 *       // syntax).
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{table_name=regions/*\/zones/*\/**}"
 *       }
 *     };
 * 
 * result:
 * 
 *     <no routing header will be sent>
 * 
 * Sub-example 3c
 * 
 * Multiple alternative conflictingly named path templates are
 * specified. The one that matches is used to construct the header.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // Take the `table_name`, if it's well-formed, whether
 *       // using the region- or projects-based syntax.
 * 
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{table_name=regions/*\/zones/*\/**}"
 *       }
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{table_name=projects/*\/instances/*\/**}"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params:
 *     table_name=projects/proj_foo/instances/instance_bar/table/table_baz
 * 
 * Example 4
 * 
 * Extracting a single routing header key-value pair by matching a
 * template syntax on (a part of) a single request field.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // Take just the project id from the `table_name` field.
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{routing_id=projects/*}/**"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params: routing_id=projects/proj_foo
 * 
 * Example 5
 * 
 * Extracting a single routing header key-value pair by matching
 * several conflictingly named path templates on (parts of) a single request
 * field. The last template to match "wins" the conflict.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // If the `table_name` does not have instances information,
 *       // take just the project id for routing.
 *       // Otherwise take project + instance.
 * 
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{routing_id=projects/*}/**"
 *       }
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{routing_id=projects/*\/instances/*}/**"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params:
 *     routing_id=projects/proj_foo/instances/instance_bar
 * 
 * Example 6
 * 
 * Extracting multiple routing header key-value pairs by matching
 * several non-conflicting path templates on (parts of) a single request field.
 * 
 * Sub-example 6a
 * 
 * Make the templates strict, so that if the `table_name` does not
 * have an instance information, nothing is sent.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // The routing code needs two keys instead of one composite
 *       // but works only for the tables with the "project-instance" name
 *       // syntax.
 * 
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{project_id=projects/*}/instances/*\/**"
 *       }
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "projects/*\/{instance_id=instances/*}/**"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params:
 *     project_id=projects/proj_foo&instance_id=instances/instance_bar
 * 
 * Sub-example 6b
 * 
 * Make the templates loose, so that if the `table_name` does not
 * have an instance information, just the project id part is sent.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // The routing code wants two keys instead of one composite
 *       // but will work with just the `project_id` for tables without
 *       // an instance in the `table_name`.
 * 
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{project_id=projects/*}/**"
 *       }
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "projects/*\/{instance_id=instances/*}/**"
 *       }
 *     };
 * 
 * result (is the same as 6a for our example message because it has the instance
 * information):
 * 
 *     x-goog-request-params:
 *     project_id=projects/proj_foo&instance_id=instances/instance_bar
 * 
 * Example 7
 * 
 * Extracting multiple routing header key-value pairs by matching
 * several path templates on multiple request fields.
 * 
 * NB: note that here there is no way to specify sending nothing if one of the
 * fields does not match its template. E.g. if the `table_name` is in the wrong
 * format, the `project_id` will not be sent, but the `routing_id` will be.
 * The backend routing code has to be aware of that and be prepared to not
 * receive a full complement of keys if it expects multiple.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // The routing needs both `project_id` and `routing_id`
 *       // (from the `app_profile_id` field) for routing.
 * 
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{project_id=projects/*}/**"
 *       }
 *       routing_parameters {
 *         field: "app_profile_id"
 *         path_template: "{routing_id=**}"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params:
 *     project_id=projects/proj_foo&routing_id=profiles/prof_qux
 * 
 * Example 8
 * 
 * Extracting a single routing header key-value pair by matching
 * several conflictingly named path templates on several request fields. The
 * last template to match "wins" the conflict.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // The `routing_id` can be a project id or a region id depending on
 *       // the table name format, but only if the `app_profile_id` is not set.
 *       // If `app_profile_id` is set it should be used instead.
 * 
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{routing_id=projects/*}/**"
 *       }
 *       routing_parameters {
 *          field: "table_name"
 *          path_template: "{routing_id=regions/*}/**"
 *       }
 *       routing_parameters {
 *         field: "app_profile_id"
 *         path_template: "{routing_id=**}"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params: routing_id=profiles/prof_qux
 * 
 * Example 9
 * 
 * Bringing it all together.
 * 
 * annotation:
 * 
 *     option (google.api.routing) = {
 *       // For routing both `table_location` and a `routing_id` are needed.
 *       //
 *       // table_location can be either an instance id or a region+zone id.
 *       //
 *       // For `routing_id`, take the value of `app_profile_id`
 *       // - If it's in the format `profiles/<profile_id>`, send
 *       // just the `<profile_id>` part.
 *       // - If it's any other literal, send it as is.
 *       // If the `app_profile_id` is empty, and the `table_name` starts with
 *       // the project_id, send that instead.
 * 
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "projects/*\/{table_location=instances/*}/tables/*"
 *       }
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{table_location=regions/*\/zones/*}/tables/*"
 *       }
 *       routing_parameters {
 *         field: "table_name"
 *         path_template: "{routing_id=projects/*}/**"
 *       }
 *       routing_parameters {
 *         field: "app_profile_id"
 *         path_template: "{routing_id=**}"
 *       }
 *       routing_parameters {
 *         field: "app_profile_id"
 *         path_template: "profiles/{routing_id=*}"
 *       }
 *     };
 * 
 * result:
 * 
 *     x-goog-request-params:
 *     table_location=instances/instance_bar&routing_id=prof_qux
 */
export interface RoutingRuleSDKType {
  routing_parameters: RoutingParameterSDKType[];
}
/** A projection from an input message to the GRPC or REST header. */
export interface RoutingParameter {
  /** A request field to extract the header key-value pair from. */
  field: string;
  /**
   * A pattern matching the key-value field. Optional.
   * If not specified, the whole field specified in the `field` field will be
   * taken as value, and its name used as key. If specified, it MUST contain
   * exactly one named segment (along with any number of unnamed segments) The
   * pattern will be matched over the field specified in the `field` field, then
   * if the match is successful:
   * - the name of the single named segment will be used as a header name,
   * - the match value of the segment will be used as a header value;
   * if the match is NOT successful, nothing will be sent.
   * 
   * Example:
   * 
   *               -- This is a field in the request message
   *              |   that the header value will be extracted from.
   *              |
   *              |                     -- This is the key name in the
   *              |                    |   routing header.
   *              V                    |
   *     field: "table_name"           v
   *     path_template: "projects/*\/{table_location=instances/*}/tables/*"
   *                                                ^            ^
   *                                                |            |
   *       In the {} brackets is the pattern that --             |
   *       specifies what to extract from the                    |
   *       field as a value to be sent.                          |
   *                                                             |
   *      The string in the field must match the whole pattern --
   *      before brackets, inside brackets, after brackets.
   * 
   * When looking at this specific example, we can see that:
   * - A key-value pair with the key `table_location`
   *   and the value matching `instances/*` should be added
   *   to the x-goog-request-params routing header.
   * - The value is extracted from the request message's `table_name` field
   *   if it matches the full pattern specified:
   *   `projects/*\/instances/*\/tables/*`.
   * 
   * **NB:** If the `path_template` field is not provided, the key name is
   * equal to the field name, and the whole field should be sent as a value.
   * This makes the pattern for the field and the value functionally equivalent
   * to `**`, and the configuration
   * 
   *     {
   *       field: "table_name"
   *     }
   * 
   * is a functionally equivalent shorthand to:
   * 
   *     {
   *       field: "table_name"
   *       path_template: "{table_name=**}"
   *     }
   * 
   * See Example 1 for more details.
   */
  pathTemplate: string;
}
export interface RoutingParameterProtoMsg {
  typeUrl: "/google.api.RoutingParameter";
  value: Uint8Array;
}
/** A projection from an input message to the GRPC or REST header. */
export interface RoutingParameterAmino {
  /** A request field to extract the header key-value pair from. */
  field: string;
  /**
   * A pattern matching the key-value field. Optional.
   * If not specified, the whole field specified in the `field` field will be
   * taken as value, and its name used as key. If specified, it MUST contain
   * exactly one named segment (along with any number of unnamed segments) The
   * pattern will be matched over the field specified in the `field` field, then
   * if the match is successful:
   * - the name of the single named segment will be used as a header name,
   * - the match value of the segment will be used as a header value;
   * if the match is NOT successful, nothing will be sent.
   * 
   * Example:
   * 
   *               -- This is a field in the request message
   *              |   that the header value will be extracted from.
   *              |
   *              |                     -- This is the key name in the
   *              |                    |   routing header.
   *              V                    |
   *     field: "table_name"           v
   *     path_template: "projects/*\/{table_location=instances/*}/tables/*"
   *                                                ^            ^
   *                                                |            |
   *       In the {} brackets is the pattern that --             |
   *       specifies what to extract from the                    |
   *       field as a value to be sent.                          |
   *                                                             |
   *      The string in the field must match the whole pattern --
   *      before brackets, inside brackets, after brackets.
   * 
   * When looking at this specific example, we can see that:
   * - A key-value pair with the key `table_location`
   *   and the value matching `instances/*` should be added
   *   to the x-goog-request-params routing header.
   * - The value is extracted from the request message's `table_name` field
   *   if it matches the full pattern specified:
   *   `projects/*\/instances/*\/tables/*`.
   * 
   * **NB:** If the `path_template` field is not provided, the key name is
   * equal to the field name, and the whole field should be sent as a value.
   * This makes the pattern for the field and the value functionally equivalent
   * to `**`, and the configuration
   * 
   *     {
   *       field: "table_name"
   *     }
   * 
   * is a functionally equivalent shorthand to:
   * 
   *     {
   *       field: "table_name"
   *       path_template: "{table_name=**}"
   *     }
   * 
   * See Example 1 for more details.
   */
  path_template: string;
}
export interface RoutingParameterAminoMsg {
  type: "/google.api.RoutingParameter";
  value: RoutingParameterAmino;
}
/** A projection from an input message to the GRPC or REST header. */
export interface RoutingParameterSDKType {
  field: string;
  path_template: string;
}
function createBaseRoutingRule(): RoutingRule {
  return {
    routingParameters: []
  };
}
export const RoutingRule = {
  typeUrl: "/google.api.RoutingRule",
  encode(message: RoutingRule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.routingParameters) {
      RoutingParameter.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RoutingRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoutingRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.routingParameters.push(RoutingParameter.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RoutingRule {
    return {
      routingParameters: Array.isArray(object?.routingParameters) ? object.routingParameters.map((e: any) => RoutingParameter.fromJSON(e)) : []
    };
  },
  toJSON(message: RoutingRule): unknown {
    const obj: any = {};
    if (message.routingParameters) {
      obj.routingParameters = message.routingParameters.map(e => e ? RoutingParameter.toJSON(e) : undefined);
    } else {
      obj.routingParameters = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<RoutingRule>): RoutingRule {
    const message = createBaseRoutingRule();
    message.routingParameters = object.routingParameters?.map(e => RoutingParameter.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: RoutingRuleSDKType): RoutingRule {
    return {
      routingParameters: Array.isArray(object?.routing_parameters) ? object.routing_parameters.map((e: any) => RoutingParameter.fromSDK(e)) : []
    };
  },
  toSDK(message: RoutingRule): RoutingRuleSDKType {
    const obj: any = {};
    if (message.routingParameters) {
      obj.routing_parameters = message.routingParameters.map(e => e ? RoutingParameter.toSDK(e) : undefined);
    } else {
      obj.routing_parameters = [];
    }
    return obj;
  },
  fromAmino(object: RoutingRuleAmino): RoutingRule {
    return {
      routingParameters: Array.isArray(object?.routing_parameters) ? object.routing_parameters.map((e: any) => RoutingParameter.fromAmino(e)) : []
    };
  },
  toAmino(message: RoutingRule): RoutingRuleAmino {
    const obj: any = {};
    if (message.routingParameters) {
      obj.routing_parameters = message.routingParameters.map(e => e ? RoutingParameter.toAmino(e) : undefined);
    } else {
      obj.routing_parameters = [];
    }
    return obj;
  },
  fromAminoMsg(object: RoutingRuleAminoMsg): RoutingRule {
    return RoutingRule.fromAmino(object.value);
  },
  fromProtoMsg(message: RoutingRuleProtoMsg): RoutingRule {
    return RoutingRule.decode(message.value);
  },
  toProto(message: RoutingRule): Uint8Array {
    return RoutingRule.encode(message).finish();
  },
  toProtoMsg(message: RoutingRule): RoutingRuleProtoMsg {
    return {
      typeUrl: "/google.api.RoutingRule",
      value: RoutingRule.encode(message).finish()
    };
  }
};
function createBaseRoutingParameter(): RoutingParameter {
  return {
    field: "",
    pathTemplate: ""
  };
}
export const RoutingParameter = {
  typeUrl: "/google.api.RoutingParameter",
  encode(message: RoutingParameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.field !== "") {
      writer.uint32(10).string(message.field);
    }
    if (message.pathTemplate !== "") {
      writer.uint32(18).string(message.pathTemplate);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): RoutingParameter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoutingParameter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.field = reader.string();
          break;
        case 2:
          message.pathTemplate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RoutingParameter {
    return {
      field: isSet(object.field) ? String(object.field) : "",
      pathTemplate: isSet(object.pathTemplate) ? String(object.pathTemplate) : ""
    };
  },
  toJSON(message: RoutingParameter): unknown {
    const obj: any = {};
    message.field !== undefined && (obj.field = message.field);
    message.pathTemplate !== undefined && (obj.pathTemplate = message.pathTemplate);
    return obj;
  },
  fromPartial(object: DeepPartial<RoutingParameter>): RoutingParameter {
    const message = createBaseRoutingParameter();
    message.field = object.field ?? "";
    message.pathTemplate = object.pathTemplate ?? "";
    return message;
  },
  fromSDK(object: RoutingParameterSDKType): RoutingParameter {
    return {
      field: object?.field,
      pathTemplate: object?.path_template
    };
  },
  toSDK(message: RoutingParameter): RoutingParameterSDKType {
    const obj: any = {};
    obj.field = message.field;
    obj.path_template = message.pathTemplate;
    return obj;
  },
  fromAmino(object: RoutingParameterAmino): RoutingParameter {
    return {
      field: object.field,
      pathTemplate: object.path_template
    };
  },
  toAmino(message: RoutingParameter): RoutingParameterAmino {
    const obj: any = {};
    obj.field = message.field;
    obj.path_template = message.pathTemplate;
    return obj;
  },
  fromAminoMsg(object: RoutingParameterAminoMsg): RoutingParameter {
    return RoutingParameter.fromAmino(object.value);
  },
  fromProtoMsg(message: RoutingParameterProtoMsg): RoutingParameter {
    return RoutingParameter.decode(message.value);
  },
  toProto(message: RoutingParameter): Uint8Array {
    return RoutingParameter.encode(message).finish();
  },
  toProtoMsg(message: RoutingParameter): RoutingParameterProtoMsg {
    return {
      typeUrl: "/google.api.RoutingParameter",
      value: RoutingParameter.encode(message).finish()
    };
  }
};