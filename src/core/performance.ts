export function measurePerformance(label: string, fn: () => unknown) {
  const start = performance.now();
  const result = fn();
  const end = performance.now();

  console.log(`${label}: ${end - start}ms`);
  return result;
}
