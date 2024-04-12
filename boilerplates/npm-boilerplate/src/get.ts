export function get<T>(obj: Record<string, any>, path: string): T | undefined {
  const keys = path.replace(/\[(\w+)\]/g, '.$1').split('.');
  let result: any = obj;
  for (const key of keys) {
    if (result == null) {
      return undefined;
    }
    result = result[key];
  }
  return result as T;
};