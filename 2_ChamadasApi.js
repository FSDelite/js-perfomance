//@ts-check
// const fetch = require('node-fetch');
// const { measurePerformance } = require('./measurePerformance.js');
import { measurePerformance } from "./measurePerformance.js";
import fetch from "node-fetch";

async function fetchDataUsingPromiseAll(urls) {
  const fetchPromises = urls.map((url) =>
    fetch(url).then((response) => response.json())
  );
  return Promise.all(fetchPromises);
}

async function fetchDataUsingLoop(urls) {
  let results = [];
  for (const url of urls) {
    const response = await fetch(url);
    results.push(await response.json());
  }
  return results;
}

const urls = [
  "https://viacep.com.br/ws/79600120/json/",
  "https://viacep.com.br/ws/79645060/json/",
  "https://viacep.com.br/ws/79640060/json/",
  "https://viacep.com.br/ws/79600120/json/",
  "https://viacep.com.br/ws/79600120/json/",
  "https://viacep.com.br/ws/79600120/json/",
  "https://viacep.com.br/ws/79600120/json/",
];
measurePerformance(
  fetchDataUsingPromiseAll,
  "Fetch Data Using Promise.all",
  urls
);
measurePerformance(fetchDataUsingLoop, "Fetch Data Using Loop", urls);
