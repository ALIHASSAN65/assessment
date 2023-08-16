console.time("executionTime");

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  if (number <= 3) {
    return true;
  }
  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i * i <= number) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

function findNthPrime(n) {
  if (n === 1) {
    return 2; // The first prime number is 2
  }

  let count = 1; // Count of prime numbers found
  let number = 3; // Start checking from 3

  while (count < n) {
    if (isPrime(number)) {
      count++;
    }
    if (count === n) {
      return number;
    }
    number += 2; // Move to the next odd number (even numbers greater than 2 are not prime)
  }
}

const n = 10001;
const nthPrime = findNthPrime(n);
console.log(`The ${n}st prime number is:`, nthPrime);

console.timeEnd("executionTime");
