//@ts-check
import { measurePerformance } from "./measurePerformance.js";

// Function to calculate square of a number
function square(num) {
  return num * num;
}

// Function to sum up squares from 1 to N using multiple function calls
function sumOfSquaresWithFunctions(N) {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    sum += square(i);
  }
  return sum;
}

// Direct calculation of sum of squares from 1 to N without multiple function calls
function sumOfSquaresDirect(N) {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    sum += i * i; // Directly calculating square and adding it
  }
  return sum;
}

const N = 100000; // Example: Sum of squares from 1 to 10000

measurePerformance(
  sumOfSquaresWithFunctions,
  "Sum of Squares with Functions",
  N
);

measurePerformance(sumOfSquaresDirect, "Sum of Squares Direct", N);
