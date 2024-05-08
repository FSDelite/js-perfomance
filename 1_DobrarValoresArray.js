//@ts-check

import { measurePerformance } from "./measurePerformance.js";

// Função usando métodos de ordem superior
function doubleUsingMap(array) {
  return array.map((n) => n * 2);
}

// Função usando loop for tradicional
function doubleUsingForLoop(array) {
  const doubled = [];
  for (let i = 0; i < array.length; i++) {
    doubled.push(array[i] * 2);
  }
  return doubled;
}

// Gerar um grande array
const largeArray = Array.from({ length: 50 }, (_, i) => i);

// Comparação do consumo de memória e tempo de processamento
measurePerformance(doubleUsingMap, "Using map()", largeArray);
measurePerformance(doubleUsingForLoop, "Using for loop", largeArray);

