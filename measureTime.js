export const measureTime = (func, ...args) => {
  console.time("Execution Time");
  const result = func(...args);
  console.timeEnd("Execution Time");
  return result;
};
