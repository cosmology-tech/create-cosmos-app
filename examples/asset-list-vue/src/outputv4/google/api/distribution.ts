import { Timestamp, TimestampSDKType } from "../protobuf/timestamp";
import { Any, AnySDKType } from "../protobuf/any";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, toTimestamp, fromTimestamp } from "../../helpers";
import { JsonSafe } from "../../json-safe";
import { ComputedRef } from "vue";
export const protobufPackage = "google.api";
/**
 * `Distribution` contains summary statistics for a population of values. It
 * optionally contains a histogram representing the distribution of those values
 * across a set of buckets.
 * 
 * The summary statistics are the count, mean, sum of the squared deviation from
 * the mean, the minimum, and the maximum of the set of population of values.
 * The histogram is based on a sequence of buckets and gives a count of values
 * that fall into each bucket. The boundaries of the buckets are given either
 * explicitly or by formulas for buckets of fixed or exponentially increasing
 * widths.
 * 
 * Although it is not forbidden, it is generally a bad idea to include
 * non-finite values (infinities or NaNs) in the population of values, as this
 * will render the `mean` and `sum_of_squared_deviation` fields meaningless.
 */
export interface Distribution {
  /**
   * The number of values in the population. Must be non-negative. This value
   * must equal the sum of the values in `bucket_counts` if a histogram is
   * provided.
   */
  count: bigint;
  /**
   * The arithmetic mean of the values in the population. If `count` is zero
   * then this field must be zero.
   */
  mean: number;
  /**
   * The sum of squared deviations from the mean of the values in the
   * population. For values x_i this is:
   * 
   *     Sum[i=1..n]((x_i - mean)^2)
   * 
   * Knuth, "The Art of Computer Programming", Vol. 2, page 232, 3rd edition
   * describes Welford's method for accumulating this sum in one pass.
   * 
   * If `count` is zero then this field must be zero.
   */
  sumOfSquaredDeviation: number;
  /**
   * If specified, contains the range of the population values. The field
   * must not be present if the `count` is zero.
   */
  range?: Distribution_Range;
  /**
   * Defines the histogram bucket boundaries. If the distribution does not
   * contain a histogram, then omit this field.
   */
  bucketOptions?: Distribution_BucketOptions;
  /**
   * The number of values in each bucket of the histogram, as described in
   * `bucket_options`. If the distribution does not have a histogram, then omit
   * this field. If there is a histogram, then the sum of the values in
   * `bucket_counts` must equal the value in the `count` field of the
   * distribution.
   * 
   * If present, `bucket_counts` should contain N values, where N is the number
   * of buckets specified in `bucket_options`. If you supply fewer than N
   * values, the remaining values are assumed to be 0.
   * 
   * The order of the values in `bucket_counts` follows the bucket numbering
   * schemes described for the three bucket types. The first value must be the
   * count for the underflow bucket (number 0). The next N-2 values are the
   * counts for the finite buckets (number 1 through N-2). The N'th value in
   * `bucket_counts` is the count for the overflow bucket (number N-1).
   */
  bucketCounts: bigint[];
  /** Must be in increasing order of `value` field. */
  exemplars: Distribution_Exemplar[];
}
export interface ReactiveDistribution {
  count: ComputedRef<bigint>;
  mean: ComputedRef<number>;
  sumOfSquaredDeviation: ComputedRef<number>;
  range?: ComputedRef<Distribution_Range>;
  bucketOptions?: ComputedRef<Distribution_BucketOptions>;
  bucketCounts: ComputedRef<bigint[]>;
  exemplars: ComputedRef<Distribution_Exemplar[]>;
}
export interface DistributionProtoMsg {
  typeUrl: "/google.api.Distribution";
  value: Uint8Array;
}
/**
 * `Distribution` contains summary statistics for a population of values. It
 * optionally contains a histogram representing the distribution of those values
 * across a set of buckets.
 * 
 * The summary statistics are the count, mean, sum of the squared deviation from
 * the mean, the minimum, and the maximum of the set of population of values.
 * The histogram is based on a sequence of buckets and gives a count of values
 * that fall into each bucket. The boundaries of the buckets are given either
 * explicitly or by formulas for buckets of fixed or exponentially increasing
 * widths.
 * 
 * Although it is not forbidden, it is generally a bad idea to include
 * non-finite values (infinities or NaNs) in the population of values, as this
 * will render the `mean` and `sum_of_squared_deviation` fields meaningless.
 */
export interface DistributionSDKType {
  count: bigint;
  mean: number;
  sum_of_squared_deviation: number;
  range?: Distribution_RangeSDKType;
  bucket_options?: Distribution_BucketOptionsSDKType;
  bucket_counts: bigint[];
  exemplars: Distribution_ExemplarSDKType[];
}
/** The range of the population values. */
export interface Distribution_Range {
  /** The minimum of the population values. */
  min: number;
  /** The maximum of the population values. */
  max: number;
}
export interface ReactiveDistribution_Range {
  min: ComputedRef<number>;
  max: ComputedRef<number>;
}
export interface Distribution_RangeProtoMsg {
  typeUrl: "/google.api.Range";
  value: Uint8Array;
}
/** The range of the population values. */
export interface Distribution_RangeSDKType {
  min: number;
  max: number;
}
/**
 * `BucketOptions` describes the bucket boundaries used to create a histogram
 * for the distribution. The buckets can be in a linear sequence, an
 * exponential sequence, or each bucket can be specified explicitly.
 * `BucketOptions` does not include the number of values in each bucket.
 * 
 * A bucket has an inclusive lower bound and exclusive upper bound for the
 * values that are counted for that bucket. The upper bound of a bucket must
 * be strictly greater than the lower bound. The sequence of N buckets for a
 * distribution consists of an underflow bucket (number 0), zero or more
 * finite buckets (number 1 through N - 2) and an overflow bucket (number N -
 * 1). The buckets are contiguous: the lower bound of bucket i (i > 0) is the
 * same as the upper bound of bucket i - 1. The buckets span the whole range
 * of finite values: lower bound of the underflow bucket is -infinity and the
 * upper bound of the overflow bucket is +infinity. The finite buckets are
 * so-called because both bounds are finite.
 */
export interface Distribution_BucketOptions {
  /** The linear bucket. */
  linearBuckets?: Distribution_BucketOptions_Linear;
  /** The exponential buckets. */
  exponentialBuckets?: Distribution_BucketOptions_Exponential;
  /** The explicit buckets. */
  explicitBuckets?: Distribution_BucketOptions_Explicit;
}
export interface ReactiveDistribution_BucketOptions {
  linearBuckets?: ComputedRef<Distribution_BucketOptions_Linear>;
  exponentialBuckets?: ComputedRef<Distribution_BucketOptions_Exponential>;
  explicitBuckets?: ComputedRef<Distribution_BucketOptions_Explicit>;
}
export interface Distribution_BucketOptionsProtoMsg {
  typeUrl: "/google.api.BucketOptions";
  value: Uint8Array;
}
/**
 * `BucketOptions` describes the bucket boundaries used to create a histogram
 * for the distribution. The buckets can be in a linear sequence, an
 * exponential sequence, or each bucket can be specified explicitly.
 * `BucketOptions` does not include the number of values in each bucket.
 * 
 * A bucket has an inclusive lower bound and exclusive upper bound for the
 * values that are counted for that bucket. The upper bound of a bucket must
 * be strictly greater than the lower bound. The sequence of N buckets for a
 * distribution consists of an underflow bucket (number 0), zero or more
 * finite buckets (number 1 through N - 2) and an overflow bucket (number N -
 * 1). The buckets are contiguous: the lower bound of bucket i (i > 0) is the
 * same as the upper bound of bucket i - 1. The buckets span the whole range
 * of finite values: lower bound of the underflow bucket is -infinity and the
 * upper bound of the overflow bucket is +infinity. The finite buckets are
 * so-called because both bounds are finite.
 */
export interface Distribution_BucketOptionsSDKType {
  linear_buckets?: Distribution_BucketOptions_LinearSDKType;
  exponential_buckets?: Distribution_BucketOptions_ExponentialSDKType;
  explicit_buckets?: Distribution_BucketOptions_ExplicitSDKType;
}
/**
 * Specifies a linear sequence of buckets that all have the same width
 * (except overflow and underflow). Each bucket represents a constant
 * absolute uncertainty on the specific value in the bucket.
 * 
 * There are `num_finite_buckets + 2` (= N) buckets. Bucket `i` has the
 * following boundaries:
 * 
 *    Upper bound (0 <= i < N-1):     offset + (width * i).
 *    Lower bound (1 <= i < N):       offset + (width * (i - 1)).
 */
export interface Distribution_BucketOptions_Linear {
  /** Must be greater than 0. */
  numFiniteBuckets: number;
  /** Must be greater than 0. */
  width: number;
  /** Lower bound of the first bucket. */
  offset: number;
}
export interface ReactiveDistribution_BucketOptions_Linear {
  numFiniteBuckets: ComputedRef<number>;
  width: ComputedRef<number>;
  offset: ComputedRef<number>;
}
export interface Distribution_BucketOptions_LinearProtoMsg {
  typeUrl: "/google.api.Linear";
  value: Uint8Array;
}
/**
 * Specifies a linear sequence of buckets that all have the same width
 * (except overflow and underflow). Each bucket represents a constant
 * absolute uncertainty on the specific value in the bucket.
 * 
 * There are `num_finite_buckets + 2` (= N) buckets. Bucket `i` has the
 * following boundaries:
 * 
 *    Upper bound (0 <= i < N-1):     offset + (width * i).
 *    Lower bound (1 <= i < N):       offset + (width * (i - 1)).
 */
export interface Distribution_BucketOptions_LinearSDKType {
  num_finite_buckets: number;
  width: number;
  offset: number;
}
/**
 * Specifies an exponential sequence of buckets that have a width that is
 * proportional to the value of the lower bound. Each bucket represents a
 * constant relative uncertainty on a specific value in the bucket.
 * 
 * There are `num_finite_buckets + 2` (= N) buckets. Bucket `i` has the
 * following boundaries:
 * 
 *    Upper bound (0 <= i < N-1):     scale * (growth_factor ^ i).
 *    Lower bound (1 <= i < N):       scale * (growth_factor ^ (i - 1)).
 */
export interface Distribution_BucketOptions_Exponential {
  /** Must be greater than 0. */
  numFiniteBuckets: number;
  /** Must be greater than 1. */
  growthFactor: number;
  /** Must be greater than 0. */
  scale: number;
}
export interface ReactiveDistribution_BucketOptions_Exponential {
  numFiniteBuckets: ComputedRef<number>;
  growthFactor: ComputedRef<number>;
  scale: ComputedRef<number>;
}
export interface Distribution_BucketOptions_ExponentialProtoMsg {
  typeUrl: "/google.api.Exponential";
  value: Uint8Array;
}
/**
 * Specifies an exponential sequence of buckets that have a width that is
 * proportional to the value of the lower bound. Each bucket represents a
 * constant relative uncertainty on a specific value in the bucket.
 * 
 * There are `num_finite_buckets + 2` (= N) buckets. Bucket `i` has the
 * following boundaries:
 * 
 *    Upper bound (0 <= i < N-1):     scale * (growth_factor ^ i).
 *    Lower bound (1 <= i < N):       scale * (growth_factor ^ (i - 1)).
 */
export interface Distribution_BucketOptions_ExponentialSDKType {
  num_finite_buckets: number;
  growth_factor: number;
  scale: number;
}
/**
 * Specifies a set of buckets with arbitrary widths.
 * 
 * There are `size(bounds) + 1` (= N) buckets. Bucket `i` has the following
 * boundaries:
 * 
 *    Upper bound (0 <= i < N-1):     bounds[i]
 *    Lower bound (1 <= i < N);       bounds[i - 1]
 * 
 * The `bounds` field must contain at least one element. If `bounds` has
 * only one element, then there are no finite buckets, and that single
 * element is the common boundary of the overflow and underflow buckets.
 */
export interface Distribution_BucketOptions_Explicit {
  /** The values must be monotonically increasing. */
  bounds: number[];
}
export interface ReactiveDistribution_BucketOptions_Explicit {
  bounds: ComputedRef<number[]>;
}
export interface Distribution_BucketOptions_ExplicitProtoMsg {
  typeUrl: "/google.api.Explicit";
  value: Uint8Array;
}
/**
 * Specifies a set of buckets with arbitrary widths.
 * 
 * There are `size(bounds) + 1` (= N) buckets. Bucket `i` has the following
 * boundaries:
 * 
 *    Upper bound (0 <= i < N-1):     bounds[i]
 *    Lower bound (1 <= i < N);       bounds[i - 1]
 * 
 * The `bounds` field must contain at least one element. If `bounds` has
 * only one element, then there are no finite buckets, and that single
 * element is the common boundary of the overflow and underflow buckets.
 */
export interface Distribution_BucketOptions_ExplicitSDKType {
  bounds: number[];
}
/**
 * Exemplars are example points that may be used to annotate aggregated
 * distribution values. They are metadata that gives information about a
 * particular value added to a Distribution bucket, such as a trace ID that
 * was active when a value was added. They may contain further information,
 * such as a example values and timestamps, origin, etc.
 */
export interface Distribution_Exemplar {
  /**
   * Value of the exemplar point. This value determines to which bucket the
   * exemplar belongs.
   */
  value: number;
  /** The observation (sampling) time of the above value. */
  timestamp?: Date;
  /**
   * Contextual information about the example value. Examples are:
   * 
   *   Trace: type.googleapis.com/google.monitoring.v3.SpanContext
   * 
   *   Literal string: type.googleapis.com/google.protobuf.StringValue
   * 
   *   Labels dropped during aggregation:
   *     type.googleapis.com/google.monitoring.v3.DroppedLabels
   * 
   * There may be only a single attachment of any given message type in a
   * single exemplar, and this is enforced by the system.
   */
  attachments: Any[];
}
export interface ReactiveDistribution_Exemplar {
  value: ComputedRef<number>;
  timestamp?: ComputedRef<Date>;
  attachments: ComputedRef<Any[]>;
}
export interface Distribution_ExemplarProtoMsg {
  typeUrl: "/google.api.Exemplar";
  value: Uint8Array;
}
/**
 * Exemplars are example points that may be used to annotate aggregated
 * distribution values. They are metadata that gives information about a
 * particular value added to a Distribution bucket, such as a trace ID that
 * was active when a value was added. They may contain further information,
 * such as a example values and timestamps, origin, etc.
 */
export interface Distribution_ExemplarSDKType {
  value: number;
  timestamp?: Date;
  attachments: AnySDKType[];
}
function createBaseDistribution(): Distribution {
  return {
    count: BigInt(0),
    mean: 0,
    sumOfSquaredDeviation: 0,
    range: undefined,
    bucketOptions: undefined,
    bucketCounts: [],
    exemplars: []
  };
}
export const Distribution = {
  typeUrl: "/google.api.Distribution",
  encode(message: Distribution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.count !== BigInt(0)) {
      writer.uint32(8).int64(message.count);
    }
    if (message.mean !== 0) {
      writer.uint32(17).double(message.mean);
    }
    if (message.sumOfSquaredDeviation !== 0) {
      writer.uint32(25).double(message.sumOfSquaredDeviation);
    }
    if (message.range !== undefined) {
      Distribution_Range.encode(message.range, writer.uint32(34).fork()).ldelim();
    }
    if (message.bucketOptions !== undefined) {
      Distribution_BucketOptions.encode(message.bucketOptions, writer.uint32(50).fork()).ldelim();
    }
    writer.uint32(58).fork();
    for (const v of message.bucketCounts) {
      writer.int64(v);
    }
    writer.ldelim();
    for (const v of message.exemplars) {
      Distribution_Exemplar.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Distribution {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistribution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = reader.int64();
          break;
        case 2:
          message.mean = reader.double();
          break;
        case 3:
          message.sumOfSquaredDeviation = reader.double();
          break;
        case 4:
          message.range = Distribution_Range.decode(reader, reader.uint32());
          break;
        case 6:
          message.bucketOptions = Distribution_BucketOptions.decode(reader, reader.uint32());
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.bucketCounts.push(reader.int64());
            }
          } else {
            message.bucketCounts.push(reader.int64());
          }
          break;
        case 10:
          message.exemplars.push(Distribution_Exemplar.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Distribution {
    return {
      count: isSet(object.count) ? BigInt(object.count.toString()) : BigInt(0),
      mean: isSet(object.mean) ? Number(object.mean) : 0,
      sumOfSquaredDeviation: isSet(object.sumOfSquaredDeviation) ? Number(object.sumOfSquaredDeviation) : 0,
      range: isSet(object.range) ? Distribution_Range.fromJSON(object.range) : undefined,
      bucketOptions: isSet(object.bucketOptions) ? Distribution_BucketOptions.fromJSON(object.bucketOptions) : undefined,
      bucketCounts: Array.isArray(object?.bucketCounts) ? object.bucketCounts.map((e: any) => BigInt(e.toString())) : [],
      exemplars: Array.isArray(object?.exemplars) ? object.exemplars.map((e: any) => Distribution_Exemplar.fromJSON(e)) : []
    };
  },
  toJSON(message: Distribution): JsonSafe<Distribution> {
    const obj: any = {};
    message.count !== undefined && (obj.count = (message.count || BigInt(0)).toString());
    message.mean !== undefined && (obj.mean = message.mean);
    message.sumOfSquaredDeviation !== undefined && (obj.sumOfSquaredDeviation = message.sumOfSquaredDeviation);
    message.range !== undefined && (obj.range = message.range ? Distribution_Range.toJSON(message.range) : undefined);
    message.bucketOptions !== undefined && (obj.bucketOptions = message.bucketOptions ? Distribution_BucketOptions.toJSON(message.bucketOptions) : undefined);
    if (message.bucketCounts) {
      obj.bucketCounts = message.bucketCounts.map(e => (e || BigInt(0)).toString());
    } else {
      obj.bucketCounts = [];
    }
    if (message.exemplars) {
      obj.exemplars = message.exemplars.map(e => e ? Distribution_Exemplar.toJSON(e) : undefined);
    } else {
      obj.exemplars = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Distribution>): Distribution {
    const message = createBaseDistribution();
    message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
    message.mean = object.mean ?? 0;
    message.sumOfSquaredDeviation = object.sumOfSquaredDeviation ?? 0;
    message.range = object.range !== undefined && object.range !== null ? Distribution_Range.fromPartial(object.range) : undefined;
    message.bucketOptions = object.bucketOptions !== undefined && object.bucketOptions !== null ? Distribution_BucketOptions.fromPartial(object.bucketOptions) : undefined;
    message.bucketCounts = object.bucketCounts?.map(e => BigInt(e.toString())) || [];
    message.exemplars = object.exemplars?.map(e => Distribution_Exemplar.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: DistributionSDKType): Distribution {
    return {
      count: object?.count,
      mean: object?.mean,
      sumOfSquaredDeviation: object?.sum_of_squared_deviation,
      range: object.range ? Distribution_Range.fromSDK(object.range) : undefined,
      bucketOptions: object.bucket_options ? Distribution_BucketOptions.fromSDK(object.bucket_options) : undefined,
      bucketCounts: Array.isArray(object?.bucket_counts) ? object.bucket_counts.map((e: any) => e) : [],
      exemplars: Array.isArray(object?.exemplars) ? object.exemplars.map((e: any) => Distribution_Exemplar.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): DistributionSDKType {
    return {
      count: isSet(object.count) ? BigInt(object.count.toString()) : BigInt(0),
      mean: isSet(object.mean) ? Number(object.mean) : 0,
      sum_of_squared_deviation: isSet(object.sum_of_squared_deviation) ? Number(object.sum_of_squared_deviation) : 0,
      range: isSet(object.range) ? Distribution_Range.fromSDKJSON(object.range) : undefined,
      bucket_options: isSet(object.bucket_options) ? Distribution_BucketOptions.fromSDKJSON(object.bucket_options) : undefined,
      bucket_counts: Array.isArray(object?.bucket_counts) ? object.bucket_counts.map((e: any) => BigInt(e.toString())) : [],
      exemplars: Array.isArray(object?.exemplars) ? object.exemplars.map((e: any) => Distribution_Exemplar.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: Distribution): DistributionSDKType {
    const obj: any = {};
    obj.count = message.count;
    obj.mean = message.mean;
    obj.sum_of_squared_deviation = message.sumOfSquaredDeviation;
    message.range !== undefined && (obj.range = message.range ? Distribution_Range.toSDK(message.range) : undefined);
    message.bucketOptions !== undefined && (obj.bucket_options = message.bucketOptions ? Distribution_BucketOptions.toSDK(message.bucketOptions) : undefined);
    if (message.bucketCounts) {
      obj.bucket_counts = message.bucketCounts.map(e => e);
    } else {
      obj.bucket_counts = [];
    }
    if (message.exemplars) {
      obj.exemplars = message.exemplars.map(e => e ? Distribution_Exemplar.toSDK(e) : undefined);
    } else {
      obj.exemplars = [];
    }
    return obj;
  },
  fromAmino(object: DistributionAmino): Distribution {
    const message = createBaseDistribution();
    if (object.count !== undefined && object.count !== null) {
      message.count = BigInt(object.count);
    }
    if (object.mean !== undefined && object.mean !== null) {
      message.mean = object.mean;
    }
    if (object.sum_of_squared_deviation !== undefined && object.sum_of_squared_deviation !== null) {
      message.sumOfSquaredDeviation = object.sum_of_squared_deviation;
    }
    if (object.range !== undefined && object.range !== null) {
      message.range = Distribution_Range.fromAmino(object.range);
    }
    if (object.bucket_options !== undefined && object.bucket_options !== null) {
      message.bucketOptions = Distribution_BucketOptions.fromAmino(object.bucket_options);
    }
    message.bucketCounts = object.bucket_counts?.map(e => BigInt(e)) || [];
    message.exemplars = object.exemplars?.map(e => Distribution_Exemplar.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Distribution): DistributionAmino {
    const obj: any = {};
    obj.count = message.count !== BigInt(0) ? message.count?.toString() : undefined;
    obj.mean = message.mean === 0 ? undefined : message.mean;
    obj.sum_of_squared_deviation = message.sumOfSquaredDeviation === 0 ? undefined : message.sumOfSquaredDeviation;
    obj.range = message.range ? Distribution_Range.toAmino(message.range) : undefined;
    obj.bucket_options = message.bucketOptions ? Distribution_BucketOptions.toAmino(message.bucketOptions) : undefined;
    if (message.bucketCounts) {
      obj.bucket_counts = message.bucketCounts.map(e => e.toString());
    } else {
      obj.bucket_counts = message.bucketCounts;
    }
    if (message.exemplars) {
      obj.exemplars = message.exemplars.map(e => e ? Distribution_Exemplar.toAmino(e) : undefined);
    } else {
      obj.exemplars = message.exemplars;
    }
    return obj;
  },
  fromAminoMsg(object: DistributionAminoMsg): Distribution {
    return Distribution.fromAmino(object.value);
  },
  fromProtoMsg(message: DistributionProtoMsg): Distribution {
    return Distribution.decode(message.value);
  },
  toProto(message: Distribution): Uint8Array {
    return Distribution.encode(message).finish();
  },
  toProtoMsg(message: Distribution): DistributionProtoMsg {
    return {
      typeUrl: "/google.api.Distribution",
      value: Distribution.encode(message).finish()
    };
  }
};
function createBaseDistribution_Range(): Distribution_Range {
  return {
    min: 0,
    max: 0
  };
}
export const Distribution_Range = {
  typeUrl: "/google.api.Range",
  encode(message: Distribution_Range, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.min !== 0) {
      writer.uint32(9).double(message.min);
    }
    if (message.max !== 0) {
      writer.uint32(17).double(message.max);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Distribution_Range {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistribution_Range();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.min = reader.double();
          break;
        case 2:
          message.max = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Distribution_Range {
    return {
      min: isSet(object.min) ? Number(object.min) : 0,
      max: isSet(object.max) ? Number(object.max) : 0
    };
  },
  toJSON(message: Distribution_Range): JsonSafe<Distribution_Range> {
    const obj: any = {};
    message.min !== undefined && (obj.min = message.min);
    message.max !== undefined && (obj.max = message.max);
    return obj;
  },
  fromPartial(object: DeepPartial<Distribution_Range>): Distribution_Range {
    const message = createBaseDistribution_Range();
    message.min = object.min ?? 0;
    message.max = object.max ?? 0;
    return message;
  },
  fromSDK(object: Distribution_RangeSDKType): Distribution_Range {
    return {
      min: object?.min,
      max: object?.max
    };
  },
  fromSDKJSON(object: any): Distribution_RangeSDKType {
    return {
      min: isSet(object.min) ? Number(object.min) : 0,
      max: isSet(object.max) ? Number(object.max) : 0
    };
  },
  toSDK(message: Distribution_Range): Distribution_RangeSDKType {
    const obj: any = {};
    obj.min = message.min;
    obj.max = message.max;
    return obj;
  },
  fromAmino(object: Distribution_RangeAmino): Distribution_Range {
    const message = createBaseDistribution_Range();
    if (object.min !== undefined && object.min !== null) {
      message.min = object.min;
    }
    if (object.max !== undefined && object.max !== null) {
      message.max = object.max;
    }
    return message;
  },
  toAmino(message: Distribution_Range): Distribution_RangeAmino {
    const obj: any = {};
    obj.min = message.min === 0 ? undefined : message.min;
    obj.max = message.max === 0 ? undefined : message.max;
    return obj;
  },
  fromAminoMsg(object: Distribution_RangeAminoMsg): Distribution_Range {
    return Distribution_Range.fromAmino(object.value);
  },
  fromProtoMsg(message: Distribution_RangeProtoMsg): Distribution_Range {
    return Distribution_Range.decode(message.value);
  },
  toProto(message: Distribution_Range): Uint8Array {
    return Distribution_Range.encode(message).finish();
  },
  toProtoMsg(message: Distribution_Range): Distribution_RangeProtoMsg {
    return {
      typeUrl: "/google.api.Range",
      value: Distribution_Range.encode(message).finish()
    };
  }
};
function createBaseDistribution_BucketOptions(): Distribution_BucketOptions {
  return {
    linearBuckets: undefined,
    exponentialBuckets: undefined,
    explicitBuckets: undefined
  };
}
export const Distribution_BucketOptions = {
  typeUrl: "/google.api.BucketOptions",
  encode(message: Distribution_BucketOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.linearBuckets !== undefined) {
      Distribution_BucketOptions_Linear.encode(message.linearBuckets, writer.uint32(10).fork()).ldelim();
    }
    if (message.exponentialBuckets !== undefined) {
      Distribution_BucketOptions_Exponential.encode(message.exponentialBuckets, writer.uint32(18).fork()).ldelim();
    }
    if (message.explicitBuckets !== undefined) {
      Distribution_BucketOptions_Explicit.encode(message.explicitBuckets, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Distribution_BucketOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistribution_BucketOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.linearBuckets = Distribution_BucketOptions_Linear.decode(reader, reader.uint32());
          break;
        case 2:
          message.exponentialBuckets = Distribution_BucketOptions_Exponential.decode(reader, reader.uint32());
          break;
        case 3:
          message.explicitBuckets = Distribution_BucketOptions_Explicit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Distribution_BucketOptions {
    return {
      linearBuckets: isSet(object.linearBuckets) ? Distribution_BucketOptions_Linear.fromJSON(object.linearBuckets) : undefined,
      exponentialBuckets: isSet(object.exponentialBuckets) ? Distribution_BucketOptions_Exponential.fromJSON(object.exponentialBuckets) : undefined,
      explicitBuckets: isSet(object.explicitBuckets) ? Distribution_BucketOptions_Explicit.fromJSON(object.explicitBuckets) : undefined
    };
  },
  toJSON(message: Distribution_BucketOptions): JsonSafe<Distribution_BucketOptions> {
    const obj: any = {};
    message.linearBuckets !== undefined && (obj.linearBuckets = message.linearBuckets ? Distribution_BucketOptions_Linear.toJSON(message.linearBuckets) : undefined);
    message.exponentialBuckets !== undefined && (obj.exponentialBuckets = message.exponentialBuckets ? Distribution_BucketOptions_Exponential.toJSON(message.exponentialBuckets) : undefined);
    message.explicitBuckets !== undefined && (obj.explicitBuckets = message.explicitBuckets ? Distribution_BucketOptions_Explicit.toJSON(message.explicitBuckets) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Distribution_BucketOptions>): Distribution_BucketOptions {
    const message = createBaseDistribution_BucketOptions();
    message.linearBuckets = object.linearBuckets !== undefined && object.linearBuckets !== null ? Distribution_BucketOptions_Linear.fromPartial(object.linearBuckets) : undefined;
    message.exponentialBuckets = object.exponentialBuckets !== undefined && object.exponentialBuckets !== null ? Distribution_BucketOptions_Exponential.fromPartial(object.exponentialBuckets) : undefined;
    message.explicitBuckets = object.explicitBuckets !== undefined && object.explicitBuckets !== null ? Distribution_BucketOptions_Explicit.fromPartial(object.explicitBuckets) : undefined;
    return message;
  },
  fromSDK(object: Distribution_BucketOptionsSDKType): Distribution_BucketOptions {
    return {
      linearBuckets: object.linear_buckets ? Distribution_BucketOptions_Linear.fromSDK(object.linear_buckets) : undefined,
      exponentialBuckets: object.exponential_buckets ? Distribution_BucketOptions_Exponential.fromSDK(object.exponential_buckets) : undefined,
      explicitBuckets: object.explicit_buckets ? Distribution_BucketOptions_Explicit.fromSDK(object.explicit_buckets) : undefined
    };
  },
  fromSDKJSON(object: any): Distribution_BucketOptionsSDKType {
    return {
      linear_buckets: isSet(object.linear_buckets) ? Distribution_BucketOptions_Linear.fromSDKJSON(object.linear_buckets) : undefined,
      exponential_buckets: isSet(object.exponential_buckets) ? Distribution_BucketOptions_Exponential.fromSDKJSON(object.exponential_buckets) : undefined,
      explicit_buckets: isSet(object.explicit_buckets) ? Distribution_BucketOptions_Explicit.fromSDKJSON(object.explicit_buckets) : undefined
    };
  },
  toSDK(message: Distribution_BucketOptions): Distribution_BucketOptionsSDKType {
    const obj: any = {};
    message.linearBuckets !== undefined && (obj.linear_buckets = message.linearBuckets ? Distribution_BucketOptions_Linear.toSDK(message.linearBuckets) : undefined);
    message.exponentialBuckets !== undefined && (obj.exponential_buckets = message.exponentialBuckets ? Distribution_BucketOptions_Exponential.toSDK(message.exponentialBuckets) : undefined);
    message.explicitBuckets !== undefined && (obj.explicit_buckets = message.explicitBuckets ? Distribution_BucketOptions_Explicit.toSDK(message.explicitBuckets) : undefined);
    return obj;
  },
  fromAmino(object: Distribution_BucketOptionsAmino): Distribution_BucketOptions {
    const message = createBaseDistribution_BucketOptions();
    if (object.linear_buckets !== undefined && object.linear_buckets !== null) {
      message.linearBuckets = Distribution_BucketOptions_Linear.fromAmino(object.linear_buckets);
    }
    if (object.exponential_buckets !== undefined && object.exponential_buckets !== null) {
      message.exponentialBuckets = Distribution_BucketOptions_Exponential.fromAmino(object.exponential_buckets);
    }
    if (object.explicit_buckets !== undefined && object.explicit_buckets !== null) {
      message.explicitBuckets = Distribution_BucketOptions_Explicit.fromAmino(object.explicit_buckets);
    }
    return message;
  },
  toAmino(message: Distribution_BucketOptions): Distribution_BucketOptionsAmino {
    const obj: any = {};
    obj.linear_buckets = message.linearBuckets ? Distribution_BucketOptions_Linear.toAmino(message.linearBuckets) : undefined;
    obj.exponential_buckets = message.exponentialBuckets ? Distribution_BucketOptions_Exponential.toAmino(message.exponentialBuckets) : undefined;
    obj.explicit_buckets = message.explicitBuckets ? Distribution_BucketOptions_Explicit.toAmino(message.explicitBuckets) : undefined;
    return obj;
  },
  fromAminoMsg(object: Distribution_BucketOptionsAminoMsg): Distribution_BucketOptions {
    return Distribution_BucketOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: Distribution_BucketOptionsProtoMsg): Distribution_BucketOptions {
    return Distribution_BucketOptions.decode(message.value);
  },
  toProto(message: Distribution_BucketOptions): Uint8Array {
    return Distribution_BucketOptions.encode(message).finish();
  },
  toProtoMsg(message: Distribution_BucketOptions): Distribution_BucketOptionsProtoMsg {
    return {
      typeUrl: "/google.api.BucketOptions",
      value: Distribution_BucketOptions.encode(message).finish()
    };
  }
};
function createBaseDistribution_BucketOptions_Linear(): Distribution_BucketOptions_Linear {
  return {
    numFiniteBuckets: 0,
    width: 0,
    offset: 0
  };
}
export const Distribution_BucketOptions_Linear = {
  typeUrl: "/google.api.Linear",
  encode(message: Distribution_BucketOptions_Linear, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numFiniteBuckets !== 0) {
      writer.uint32(8).int32(message.numFiniteBuckets);
    }
    if (message.width !== 0) {
      writer.uint32(17).double(message.width);
    }
    if (message.offset !== 0) {
      writer.uint32(25).double(message.offset);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Distribution_BucketOptions_Linear {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistribution_BucketOptions_Linear();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numFiniteBuckets = reader.int32();
          break;
        case 2:
          message.width = reader.double();
          break;
        case 3:
          message.offset = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Distribution_BucketOptions_Linear {
    return {
      numFiniteBuckets: isSet(object.numFiniteBuckets) ? Number(object.numFiniteBuckets) : 0,
      width: isSet(object.width) ? Number(object.width) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0
    };
  },
  toJSON(message: Distribution_BucketOptions_Linear): JsonSafe<Distribution_BucketOptions_Linear> {
    const obj: any = {};
    message.numFiniteBuckets !== undefined && (obj.numFiniteBuckets = Math.round(message.numFiniteBuckets));
    message.width !== undefined && (obj.width = message.width);
    message.offset !== undefined && (obj.offset = message.offset);
    return obj;
  },
  fromPartial(object: DeepPartial<Distribution_BucketOptions_Linear>): Distribution_BucketOptions_Linear {
    const message = createBaseDistribution_BucketOptions_Linear();
    message.numFiniteBuckets = object.numFiniteBuckets ?? 0;
    message.width = object.width ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  },
  fromSDK(object: Distribution_BucketOptions_LinearSDKType): Distribution_BucketOptions_Linear {
    return {
      numFiniteBuckets: object?.num_finite_buckets,
      width: object?.width,
      offset: object?.offset
    };
  },
  fromSDKJSON(object: any): Distribution_BucketOptions_LinearSDKType {
    return {
      num_finite_buckets: isSet(object.num_finite_buckets) ? Number(object.num_finite_buckets) : 0,
      width: isSet(object.width) ? Number(object.width) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0
    };
  },
  toSDK(message: Distribution_BucketOptions_Linear): Distribution_BucketOptions_LinearSDKType {
    const obj: any = {};
    obj.num_finite_buckets = message.numFiniteBuckets;
    obj.width = message.width;
    obj.offset = message.offset;
    return obj;
  },
  fromAmino(object: Distribution_BucketOptions_LinearAmino): Distribution_BucketOptions_Linear {
    const message = createBaseDistribution_BucketOptions_Linear();
    if (object.num_finite_buckets !== undefined && object.num_finite_buckets !== null) {
      message.numFiniteBuckets = object.num_finite_buckets;
    }
    if (object.width !== undefined && object.width !== null) {
      message.width = object.width;
    }
    if (object.offset !== undefined && object.offset !== null) {
      message.offset = object.offset;
    }
    return message;
  },
  toAmino(message: Distribution_BucketOptions_Linear): Distribution_BucketOptions_LinearAmino {
    const obj: any = {};
    obj.num_finite_buckets = message.numFiniteBuckets === 0 ? undefined : message.numFiniteBuckets;
    obj.width = message.width === 0 ? undefined : message.width;
    obj.offset = message.offset === 0 ? undefined : message.offset;
    return obj;
  },
  fromAminoMsg(object: Distribution_BucketOptions_LinearAminoMsg): Distribution_BucketOptions_Linear {
    return Distribution_BucketOptions_Linear.fromAmino(object.value);
  },
  fromProtoMsg(message: Distribution_BucketOptions_LinearProtoMsg): Distribution_BucketOptions_Linear {
    return Distribution_BucketOptions_Linear.decode(message.value);
  },
  toProto(message: Distribution_BucketOptions_Linear): Uint8Array {
    return Distribution_BucketOptions_Linear.encode(message).finish();
  },
  toProtoMsg(message: Distribution_BucketOptions_Linear): Distribution_BucketOptions_LinearProtoMsg {
    return {
      typeUrl: "/google.api.Linear",
      value: Distribution_BucketOptions_Linear.encode(message).finish()
    };
  }
};
function createBaseDistribution_BucketOptions_Exponential(): Distribution_BucketOptions_Exponential {
  return {
    numFiniteBuckets: 0,
    growthFactor: 0,
    scale: 0
  };
}
export const Distribution_BucketOptions_Exponential = {
  typeUrl: "/google.api.Exponential",
  encode(message: Distribution_BucketOptions_Exponential, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numFiniteBuckets !== 0) {
      writer.uint32(8).int32(message.numFiniteBuckets);
    }
    if (message.growthFactor !== 0) {
      writer.uint32(17).double(message.growthFactor);
    }
    if (message.scale !== 0) {
      writer.uint32(25).double(message.scale);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Distribution_BucketOptions_Exponential {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistribution_BucketOptions_Exponential();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numFiniteBuckets = reader.int32();
          break;
        case 2:
          message.growthFactor = reader.double();
          break;
        case 3:
          message.scale = reader.double();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Distribution_BucketOptions_Exponential {
    return {
      numFiniteBuckets: isSet(object.numFiniteBuckets) ? Number(object.numFiniteBuckets) : 0,
      growthFactor: isSet(object.growthFactor) ? Number(object.growthFactor) : 0,
      scale: isSet(object.scale) ? Number(object.scale) : 0
    };
  },
  toJSON(message: Distribution_BucketOptions_Exponential): JsonSafe<Distribution_BucketOptions_Exponential> {
    const obj: any = {};
    message.numFiniteBuckets !== undefined && (obj.numFiniteBuckets = Math.round(message.numFiniteBuckets));
    message.growthFactor !== undefined && (obj.growthFactor = message.growthFactor);
    message.scale !== undefined && (obj.scale = message.scale);
    return obj;
  },
  fromPartial(object: DeepPartial<Distribution_BucketOptions_Exponential>): Distribution_BucketOptions_Exponential {
    const message = createBaseDistribution_BucketOptions_Exponential();
    message.numFiniteBuckets = object.numFiniteBuckets ?? 0;
    message.growthFactor = object.growthFactor ?? 0;
    message.scale = object.scale ?? 0;
    return message;
  },
  fromSDK(object: Distribution_BucketOptions_ExponentialSDKType): Distribution_BucketOptions_Exponential {
    return {
      numFiniteBuckets: object?.num_finite_buckets,
      growthFactor: object?.growth_factor,
      scale: object?.scale
    };
  },
  fromSDKJSON(object: any): Distribution_BucketOptions_ExponentialSDKType {
    return {
      num_finite_buckets: isSet(object.num_finite_buckets) ? Number(object.num_finite_buckets) : 0,
      growth_factor: isSet(object.growth_factor) ? Number(object.growth_factor) : 0,
      scale: isSet(object.scale) ? Number(object.scale) : 0
    };
  },
  toSDK(message: Distribution_BucketOptions_Exponential): Distribution_BucketOptions_ExponentialSDKType {
    const obj: any = {};
    obj.num_finite_buckets = message.numFiniteBuckets;
    obj.growth_factor = message.growthFactor;
    obj.scale = message.scale;
    return obj;
  },
  fromAmino(object: Distribution_BucketOptions_ExponentialAmino): Distribution_BucketOptions_Exponential {
    const message = createBaseDistribution_BucketOptions_Exponential();
    if (object.num_finite_buckets !== undefined && object.num_finite_buckets !== null) {
      message.numFiniteBuckets = object.num_finite_buckets;
    }
    if (object.growth_factor !== undefined && object.growth_factor !== null) {
      message.growthFactor = object.growth_factor;
    }
    if (object.scale !== undefined && object.scale !== null) {
      message.scale = object.scale;
    }
    return message;
  },
  toAmino(message: Distribution_BucketOptions_Exponential): Distribution_BucketOptions_ExponentialAmino {
    const obj: any = {};
    obj.num_finite_buckets = message.numFiniteBuckets === 0 ? undefined : message.numFiniteBuckets;
    obj.growth_factor = message.growthFactor === 0 ? undefined : message.growthFactor;
    obj.scale = message.scale === 0 ? undefined : message.scale;
    return obj;
  },
  fromAminoMsg(object: Distribution_BucketOptions_ExponentialAminoMsg): Distribution_BucketOptions_Exponential {
    return Distribution_BucketOptions_Exponential.fromAmino(object.value);
  },
  fromProtoMsg(message: Distribution_BucketOptions_ExponentialProtoMsg): Distribution_BucketOptions_Exponential {
    return Distribution_BucketOptions_Exponential.decode(message.value);
  },
  toProto(message: Distribution_BucketOptions_Exponential): Uint8Array {
    return Distribution_BucketOptions_Exponential.encode(message).finish();
  },
  toProtoMsg(message: Distribution_BucketOptions_Exponential): Distribution_BucketOptions_ExponentialProtoMsg {
    return {
      typeUrl: "/google.api.Exponential",
      value: Distribution_BucketOptions_Exponential.encode(message).finish()
    };
  }
};
function createBaseDistribution_BucketOptions_Explicit(): Distribution_BucketOptions_Explicit {
  return {
    bounds: []
  };
}
export const Distribution_BucketOptions_Explicit = {
  typeUrl: "/google.api.Explicit",
  encode(message: Distribution_BucketOptions_Explicit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.bounds) {
      writer.double(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Distribution_BucketOptions_Explicit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistribution_BucketOptions_Explicit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.bounds.push(reader.double());
            }
          } else {
            message.bounds.push(reader.double());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Distribution_BucketOptions_Explicit {
    return {
      bounds: Array.isArray(object?.bounds) ? object.bounds.map((e: any) => Number(e)) : []
    };
  },
  toJSON(message: Distribution_BucketOptions_Explicit): JsonSafe<Distribution_BucketOptions_Explicit> {
    const obj: any = {};
    if (message.bounds) {
      obj.bounds = message.bounds.map(e => e);
    } else {
      obj.bounds = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Distribution_BucketOptions_Explicit>): Distribution_BucketOptions_Explicit {
    const message = createBaseDistribution_BucketOptions_Explicit();
    message.bounds = object.bounds?.map(e => e) || [];
    return message;
  },
  fromSDK(object: Distribution_BucketOptions_ExplicitSDKType): Distribution_BucketOptions_Explicit {
    return {
      bounds: Array.isArray(object?.bounds) ? object.bounds.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): Distribution_BucketOptions_ExplicitSDKType {
    return {
      bounds: Array.isArray(object?.bounds) ? object.bounds.map((e: any) => Number(e)) : []
    };
  },
  toSDK(message: Distribution_BucketOptions_Explicit): Distribution_BucketOptions_ExplicitSDKType {
    const obj: any = {};
    if (message.bounds) {
      obj.bounds = message.bounds.map(e => e);
    } else {
      obj.bounds = [];
    }
    return obj;
  },
  fromAmino(object: Distribution_BucketOptions_ExplicitAmino): Distribution_BucketOptions_Explicit {
    const message = createBaseDistribution_BucketOptions_Explicit();
    message.bounds = object.bounds?.map(e => e) || [];
    return message;
  },
  toAmino(message: Distribution_BucketOptions_Explicit): Distribution_BucketOptions_ExplicitAmino {
    const obj: any = {};
    if (message.bounds) {
      obj.bounds = message.bounds.map(e => e);
    } else {
      obj.bounds = message.bounds;
    }
    return obj;
  },
  fromAminoMsg(object: Distribution_BucketOptions_ExplicitAminoMsg): Distribution_BucketOptions_Explicit {
    return Distribution_BucketOptions_Explicit.fromAmino(object.value);
  },
  fromProtoMsg(message: Distribution_BucketOptions_ExplicitProtoMsg): Distribution_BucketOptions_Explicit {
    return Distribution_BucketOptions_Explicit.decode(message.value);
  },
  toProto(message: Distribution_BucketOptions_Explicit): Uint8Array {
    return Distribution_BucketOptions_Explicit.encode(message).finish();
  },
  toProtoMsg(message: Distribution_BucketOptions_Explicit): Distribution_BucketOptions_ExplicitProtoMsg {
    return {
      typeUrl: "/google.api.Explicit",
      value: Distribution_BucketOptions_Explicit.encode(message).finish()
    };
  }
};
function createBaseDistribution_Exemplar(): Distribution_Exemplar {
  return {
    value: 0,
    timestamp: undefined,
    attachments: []
  };
}
export const Distribution_Exemplar = {
  typeUrl: "/google.api.Exemplar",
  encode(message: Distribution_Exemplar, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.value !== 0) {
      writer.uint32(9).double(message.value);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.attachments) {
      Any.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Distribution_Exemplar {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistribution_Exemplar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.double();
          break;
        case 2:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.attachments.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Distribution_Exemplar {
    return {
      value: isSet(object.value) ? Number(object.value) : 0,
      timestamp: isSet(object.timestamp) ? new Date(object.timestamp) : undefined,
      attachments: Array.isArray(object?.attachments) ? object.attachments.map((e: any) => Any.fromJSON(e)) : []
    };
  },
  toJSON(message: Distribution_Exemplar): JsonSafe<Distribution_Exemplar> {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
    if (message.attachments) {
      obj.attachments = message.attachments.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.attachments = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Distribution_Exemplar>): Distribution_Exemplar {
    const message = createBaseDistribution_Exemplar();
    message.value = object.value ?? 0;
    message.timestamp = object.timestamp ?? undefined;
    message.attachments = object.attachments?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: Distribution_ExemplarSDKType): Distribution_Exemplar {
    return {
      value: object?.value,
      timestamp: object.timestamp ?? undefined,
      attachments: Array.isArray(object?.attachments) ? object.attachments.map((e: any) => Any.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): Distribution_ExemplarSDKType {
    return {
      value: isSet(object.value) ? Number(object.value) : 0,
      timestamp: isSet(object.timestamp) ? new Date(object.timestamp) : undefined,
      attachments: Array.isArray(object?.attachments) ? object.attachments.map((e: any) => Any.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: Distribution_Exemplar): Distribution_ExemplarSDKType {
    const obj: any = {};
    obj.value = message.value;
    message.timestamp !== undefined && (obj.timestamp = message.timestamp ?? undefined);
    if (message.attachments) {
      obj.attachments = message.attachments.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.attachments = [];
    }
    return obj;
  },
  fromAmino(object: Distribution_ExemplarAmino): Distribution_Exemplar {
    const message = createBaseDistribution_Exemplar();
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = fromTimestamp(Timestamp.fromAmino(object.timestamp));
    }
    message.attachments = object.attachments?.map(e => Any.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Distribution_Exemplar): Distribution_ExemplarAmino {
    const obj: any = {};
    obj.value = message.value === 0 ? undefined : message.value;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(toTimestamp(message.timestamp)) : undefined;
    if (message.attachments) {
      obj.attachments = message.attachments.map(e => e ? Any.toAmino(e) : undefined);
    } else {
      obj.attachments = message.attachments;
    }
    return obj;
  },
  fromAminoMsg(object: Distribution_ExemplarAminoMsg): Distribution_Exemplar {
    return Distribution_Exemplar.fromAmino(object.value);
  },
  fromProtoMsg(message: Distribution_ExemplarProtoMsg): Distribution_Exemplar {
    return Distribution_Exemplar.decode(message.value);
  },
  toProto(message: Distribution_Exemplar): Uint8Array {
    return Distribution_Exemplar.encode(message).finish();
  },
  toProtoMsg(message: Distribution_Exemplar): Distribution_ExemplarProtoMsg {
    return {
      typeUrl: "/google.api.Exemplar",
      value: Distribution_Exemplar.encode(message).finish()
    };
  }
};