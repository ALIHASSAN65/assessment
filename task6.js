console.time("executionTime");

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function centralBinomialCoefficient(n, k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}

const gridSize = 20;
const routes = centralBinomialCoefficient(gridSize * 2, gridSize);
console.log(
  `The number of routes through a ${gridSize}x${gridSize} grid is:`,
  routes
);

console.timeEnd("executionTime");
