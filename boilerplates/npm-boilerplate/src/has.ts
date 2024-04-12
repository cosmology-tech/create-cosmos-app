export function has(obj: Record<string, any>, path: string): boolean {
  const keys = path.replace(/\[(\w+)\]/g, '.$1').split('.');
  let current = obj;
  for (const key of keys) {
    if (current == null || !(key in current)) {
      return false;
    }
    current = current[key];
  }
  return true;
};
