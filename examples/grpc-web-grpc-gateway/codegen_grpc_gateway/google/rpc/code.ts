export const protobufPackage = "google.rpc";
/**
 * The canonical error codes for gRPC APIs.
 * 
 * 
 * Sometimes multiple error codes may apply.  Services should return
 * the most specific error code that applies.  For example, prefer
 * `OUT_OF_RANGE` over `FAILED_PRECONDITION` if both codes apply.
 * Similarly prefer `NOT_FOUND` or `ALREADY_EXISTS` over `FAILED_PRECONDITION`.
 */
export enum Code {
  /**
   * OK - Not an error; returned on success
   * 
   * HTTP Mapping: 200 OK
   */
  OK = 0,
  /**
   * CANCELLED - The operation was cancelled, typically by the caller.
   * 
   * HTTP Mapping: 499 Client Closed Request
   */
  CANCELLED = 1,
  /**
   * UNKNOWN - Unknown error.  For example, this error may be returned when
   * a `Status` value received from another address space belongs to
   * an error space that is not known in this address space.  Also
   * errors raised by APIs that do not return enough error information
   * may be converted to this error.
   * 
   * HTTP Mapping: 500 Internal Server Error
   */
  UNKNOWN = 2,
  /**
   * INVALID_ARGUMENT - The client specified an invalid argument.  Note that this differs
   * from `FAILED_PRECONDITION`.  `INVALID_ARGUMENT` indicates arguments
   * that are problematic regardless of the state of the system
   * (e.g., a malformed file name).
   * 
   * HTTP Mapping: 400 Bad Request
   */
  INVALID_ARGUMENT = 3,
  /**
   * DEADLINE_EXCEEDED - The deadline expired before the operation could complete. For operations
   * that change the state of the system, this error may be returned
   * even if the operation has completed successfully.  For example, a
   * successful response from a server could have been delayed long
   * enough for the deadline to expire.
   * 
   * HTTP Mapping: 504 Gateway Timeout
   */
  DEADLINE_EXCEEDED = 4,
  /**
   * NOT_FOUND - Some requested entity (e.g., file or directory) was not found.
   * 
   * Note to server developers: if a request is denied for an entire class
   * of users, such as gradual feature rollout or undocumented whitelist,
   * `NOT_FOUND` may be used. If a request is denied for some users within
   * a class of users, such as user-based access control, `PERMISSION_DENIED`
   * must be used.
   * 
   * HTTP Mapping: 404 Not Found
   */
  NOT_FOUND = 5,
  /**
   * ALREADY_EXISTS - The entity that a client attempted to create (e.g., file or directory)
   * already exists.
   * 
   * HTTP Mapping: 409 Conflict
   */
  ALREADY_EXISTS = 6,
  /**
   * PERMISSION_DENIED - The caller does not have permission to execute the specified
   * operation. `PERMISSION_DENIED` must not be used for rejections
   * caused by exhausting some resource (use `RESOURCE_EXHAUSTED`
   * instead for those errors). `PERMISSION_DENIED` must not be
   * used if the caller can not be identified (use `UNAUTHENTICATED`
   * instead for those errors). This error code does not imply the
   * request is valid or the requested entity exists or satisfies
   * other pre-conditions.
   * 
   * HTTP Mapping: 403 Forbidden
   */
  PERMISSION_DENIED = 7,
  /**
   * UNAUTHENTICATED - The request does not have valid authentication credentials for the
   * operation.
   * 
   * HTTP Mapping: 401 Unauthorized
   */
  UNAUTHENTICATED = 16,
  /**
   * RESOURCE_EXHAUSTED - Some resource has been exhausted, perhaps a per-user quota, or
   * perhaps the entire file system is out of space.
   * 
   * HTTP Mapping: 429 Too Many Requests
   */
  RESOURCE_EXHAUSTED = 8,
  /**
   * FAILED_PRECONDITION - The operation was rejected because the system is not in a state
   * required for the operation's execution.  For example, the directory
   * to be deleted is non-empty, an rmdir operation is applied to
   * a non-directory, etc.
   * 
   * Service implementors can use the following guidelines to decide
   * between `FAILED_PRECONDITION`, `ABORTED`, and `UNAVAILABLE`:
   *  (a) Use `UNAVAILABLE` if the client can retry just the failing call.
   *  (b) Use `ABORTED` if the client should retry at a higher level
   *      (e.g., when a client-specified test-and-set fails, indicating the
   *      client should restart a read-modify-write sequence).
   *  (c) Use `FAILED_PRECONDITION` if the client should not retry until
   *      the system state has been explicitly fixed.  E.g., if an "rmdir"
   *      fails because the directory is non-empty, `FAILED_PRECONDITION`
   *      should be returned since the client should not retry unless
   *      the files are deleted from the directory.
   * 
   * HTTP Mapping: 400 Bad Request
   */
  FAILED_PRECONDITION = 9,
  /**
   * ABORTED - The operation was aborted, typically due to a concurrency issue such as
   * a sequencer check failure or transaction abort.
   * 
   * See the guidelines above for deciding between `FAILED_PRECONDITION`,
   * `ABORTED`, and `UNAVAILABLE`.
   * 
   * HTTP Mapping: 409 Conflict
   */
  ABORTED = 10,
  /**
   * OUT_OF_RANGE - The operation was attempted past the valid range.  E.g., seeking or
   * reading past end-of-file.
   * 
   * Unlike `INVALID_ARGUMENT`, this error indicates a problem that may
   * be fixed if the system state changes. For example, a 32-bit file
   * system will generate `INVALID_ARGUMENT` if asked to read at an
   * offset that is not in the range [0,2^32-1], but it will generate
   * `OUT_OF_RANGE` if asked to read from an offset past the current
   * file size.
   * 
   * There is a fair bit of overlap between `FAILED_PRECONDITION` and
   * `OUT_OF_RANGE`.  We recommend using `OUT_OF_RANGE` (the more specific
   * error) when it applies so that callers who are iterating through
   * a space can easily look for an `OUT_OF_RANGE` error to detect when
   * they are done.
   * 
   * HTTP Mapping: 400 Bad Request
   */
  OUT_OF_RANGE = 11,
  /**
   * UNIMPLEMENTED - The operation is not implemented or is not supported/enabled in this
   * service.
   * 
   * HTTP Mapping: 501 Not Implemented
   */
  UNIMPLEMENTED = 12,
  /**
   * INTERNAL - Internal errors.  This means that some invariants expected by the
   * underlying system have been broken.  This error code is reserved
   * for serious errors.
   * 
   * HTTP Mapping: 500 Internal Server Error
   */
  INTERNAL = 13,
  /**
   * UNAVAILABLE - The service is currently unavailable.  This is most likely a
   * transient condition, which can be corrected by retrying with
   * a backoff. Note that it is not always safe to retry
   * non-idempotent operations.
   * 
   * See the guidelines above for deciding between `FAILED_PRECONDITION`,
   * `ABORTED`, and `UNAVAILABLE`.
   * 
   * HTTP Mapping: 503 Service Unavailable
   */
  UNAVAILABLE = 14,
  /**
   * DATA_LOSS - Unrecoverable data loss or corruption.
   * 
   * HTTP Mapping: 500 Internal Server Error
   */
  DATA_LOSS = 15,
  UNRECOGNIZED = -1,
}
export const CodeSDKType = Code;
export const CodeAmino = Code;
export function codeFromJSON(object: any): Code {
  switch (object) {
    case 0:
    case "OK":
      return Code.OK;
    case 1:
    case "CANCELLED":
      return Code.CANCELLED;
    case 2:
    case "UNKNOWN":
      return Code.UNKNOWN;
    case 3:
    case "INVALID_ARGUMENT":
      return Code.INVALID_ARGUMENT;
    case 4:
    case "DEADLINE_EXCEEDED":
      return Code.DEADLINE_EXCEEDED;
    case 5:
    case "NOT_FOUND":
      return Code.NOT_FOUND;
    case 6:
    case "ALREADY_EXISTS":
      return Code.ALREADY_EXISTS;
    case 7:
    case "PERMISSION_DENIED":
      return Code.PERMISSION_DENIED;
    case 16:
    case "UNAUTHENTICATED":
      return Code.UNAUTHENTICATED;
    case 8:
    case "RESOURCE_EXHAUSTED":
      return Code.RESOURCE_EXHAUSTED;
    case 9:
    case "FAILED_PRECONDITION":
      return Code.FAILED_PRECONDITION;
    case 10:
    case "ABORTED":
      return Code.ABORTED;
    case 11:
    case "OUT_OF_RANGE":
      return Code.OUT_OF_RANGE;
    case 12:
    case "UNIMPLEMENTED":
      return Code.UNIMPLEMENTED;
    case 13:
    case "INTERNAL":
      return Code.INTERNAL;
    case 14:
    case "UNAVAILABLE":
      return Code.UNAVAILABLE;
    case 15:
    case "DATA_LOSS":
      return Code.DATA_LOSS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Code.UNRECOGNIZED;
  }
}
export function codeToJSON(object: Code): string {
  switch (object) {
    case Code.OK:
      return "OK";
    case Code.CANCELLED:
      return "CANCELLED";
    case Code.UNKNOWN:
      return "UNKNOWN";
    case Code.INVALID_ARGUMENT:
      return "INVALID_ARGUMENT";
    case Code.DEADLINE_EXCEEDED:
      return "DEADLINE_EXCEEDED";
    case Code.NOT_FOUND:
      return "NOT_FOUND";
    case Code.ALREADY_EXISTS:
      return "ALREADY_EXISTS";
    case Code.PERMISSION_DENIED:
      return "PERMISSION_DENIED";
    case Code.UNAUTHENTICATED:
      return "UNAUTHENTICATED";
    case Code.RESOURCE_EXHAUSTED:
      return "RESOURCE_EXHAUSTED";
    case Code.FAILED_PRECONDITION:
      return "FAILED_PRECONDITION";
    case Code.ABORTED:
      return "ABORTED";
    case Code.OUT_OF_RANGE:
      return "OUT_OF_RANGE";
    case Code.UNIMPLEMENTED:
      return "UNIMPLEMENTED";
    case Code.INTERNAL:
      return "INTERNAL";
    case Code.UNAVAILABLE:
      return "UNAVAILABLE";
    case Code.DATA_LOSS:
      return "DATA_LOSS";
    case Code.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}