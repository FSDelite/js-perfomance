//@ts-check
// const { measurePerformance } = require('./performanceUtils');
import { measurePerformance } from "./measurePerformance.js";

function withAuthorization(func) {
  return function (...args) {
    if (!checkAuthorization()) {
      throw new Error("Unauthorized");
    }
    return func(...args);
  };
}

function withLogging(func) {
  return function (...args) {
    console.log(`Calling ${func.name}`);
    return func(...args);
  };
}

function processData(data) {
  console.log("Processing data...");
  if (!checkAuthorization()) {
    throw new Error("Unauthorized");
  }
  return data;
}

const processDataWithDecorators = withLogging(withAuthorization(processData));

function checkAuthorization() {
  return true;
} // Simples verificação de autorização

measurePerformance(
  processDataWithDecorators,
  "Process Data with Decorators",
  "data"
);
measurePerformance(processData, "Direct Process Data", "data");
