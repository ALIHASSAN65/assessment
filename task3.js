console.time("executionTime");

function isPalindrome(number) {
  const numStr = number.toString();
  const reversedStr = numStr.split("").reverse().join("");
  return numStr === reversedStr;
}

function findLargestPalindrome() {
  let largestPalindrome = 0;

  for (let i = 999; i >= 100; i--) {
    for (let j = i; j >= 100; j--) {
      const product = i * j;
      if (product < largestPalindrome) {
        // Since the products are decreasing, there's no need to continue this inner loop
        break;
      }
      if (isPalindrome(product)) {
        largestPalindrome = product;
      }
    }
  }

  return largestPalindrome;
}

const result = findLargestPalindrome();
console.log(
  "The largest palindrome made from the product of two 3-digit numbers is:",
  result
);

console.timeEnd("executionTime");
