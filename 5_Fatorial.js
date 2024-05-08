// const { measurePerformance } = require('./performanceUtils');
import { measurePerformance } from "./measurePerformance.js";

// Fatorial Recursivo
function factorialRecursive(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorialRecursive(n - 1);
}

// Fatorial Iterativo
function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

const number = 2000; // Um número relativamente grande para cálculo de fatorial

measurePerformance(factorialRecursive, "Factorial Recursive", number);

measurePerformance(factorialIterative, "Factorial Iterative", number);
