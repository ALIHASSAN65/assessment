console.time("executionTime");
function generateFibonacci(limit) {
  let fib = [1, 2];
  let i = 2;

  while (true) {
    let next = fib[i - 1] + fib[i - 2];
    if (next <= limit) {
      fib.push(next);
      i++;
    } else {
      break;
    }
  }

  return fib;
}

function sumEvenFibonacci(fibonacciArray) {
  let sum = 0;
  for (let num of fibonacciArray) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
}

const limit = 4000000;
const fibonacciSequence = generateFibonacci(limit);
const evenSum = sumEvenFibonacci(fibonacciSequence);

console.log(
  "The sum of even-valued Fibonacci terms not exceeding 4 million:",
  evenSum
);

console.timeEnd("executionTime");
