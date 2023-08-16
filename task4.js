console.time("executionTime");

function gcd(a, b) {
  // Calculate the greatest common divisor (GCD) using Euclidean algorithm
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  // Calculate the least common multiple (LCM) using GCD
  return (a * b) / gcd(a, b);
}

function smallestMultiple(limit) {
  let result = 1;

  for (let i = 2; i <= limit; i++) {
    result = lcm(result, i);
  }

  return result;
}

const limit = 20;
const smallest = smallestMultiple(limit);
console.log(
  "The smallest positive number divisible by all numbers from 1 to 20 is:",
  smallest
);

console.timeEnd("executionTime");
