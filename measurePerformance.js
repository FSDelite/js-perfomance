export const measurePerformance = (func, description, ...args) => {
  const initialMemUsage = process.memoryUsage().heapUsed;
  const start = performance.now();
  const result = func(...args);
  const end = performance.now();
  const finalMemUsage = process.memoryUsage().heapUsed;

  console.log(`${description}:`);
  console.log(`Execution Time: ${(end - start).toFixed(2)} ms`);
  console.log(
    `Memory Usage: ${((finalMemUsage - initialMemUsage) / 1024 / 1024).toFixed(
      2
    )} MB`
  );
  console.log("---");
  return result;
};
