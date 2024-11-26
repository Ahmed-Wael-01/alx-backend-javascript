export const weakMap = new WeakMap();

export function queryAPI(endp) {
  if (!weakMap.has(endp)) {
    weakMap.set(endp, 0);
  }
  weakMap.set(endp, weakMap.get(endp) + 1);
  if (weakMap.get(endp) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
