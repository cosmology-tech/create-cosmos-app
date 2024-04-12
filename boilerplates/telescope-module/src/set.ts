export function set(obj: Record<string, any>, path: string, value: any): void {
  if (value === undefined) {
    return;
  }

  const keys = path.replace(/\[(\w+)\]/g, '.$1').split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (typeof current[key] !== 'object') {
      current[key] = {};
    }
    current = current[key];
  }
  current[keys[keys.length - 1]] = value;
};