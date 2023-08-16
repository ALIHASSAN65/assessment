console.time("executionTime");
let totalSum = 0;

for (let num = 1; num < 1000; num++) {
  if (num % 3 === 0 || num % 5 === 0) {
    totalSum += num;
  }
}

console.log("The sum of all multiples of 3 or 5 below 1000 is:", totalSum);

console.timeEnd("executionTime");
