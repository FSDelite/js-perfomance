// const { measurePerformance } = require('./performanceUtils');
import { measurePerformance } from "./measurePerformance.js";

const numbers = Array.from({length: 5}, (_, i) => i)

function sumUsingReduce(array) {
  return array.reduce((acc, cur) => acc + cur, 0);
}

function sumUsingLoop(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

measurePerformance(sumUsingReduce, "Sum Using Reduce", numbers);
measurePerformance(sumUsingLoop, "Sum Using Loop", numbers);
