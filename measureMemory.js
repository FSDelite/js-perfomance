export const measureMemory = (func, ...args) => {
  if (typeof process !== "undefined") {
    const initialMemUsage = process.memoryUsage().heapUsed;
    const result = func(...args);
    const finalMemUsage = process.memoryUsage().heapUsed;
    console.log(
      `Memory Usage: ${(
        (finalMemUsage - initialMemUsage) /
        1024 /
        1024
      ).toFixed(2)} MB`
    );
    return result;
  } else {
    console.warn(
      "Memory measurement is supported only in Node.js environment."
    );
    return func(...args);
  }
};
