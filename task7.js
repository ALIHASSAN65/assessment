console.time("executionTime");

const fs = require("fs");

fs.readFile("triangle.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const triangle = data
    .trim()
    .split("\n")
    .map((row) => row.split(" ").map(Number));
  const maxPathSum = findMaxPathSum(triangle);

  console.log("The maximum total from top to bottom is:", maxPathSum);
});

function findMaxPathSum(triangle) {
  const numRows = triangle.length;

  for (let row = numRows - 2; row >= 0; row--) {
    for (let col = 0; col <= row; col++) {
      triangle[row][col] += Math.max(
        triangle[row + 1][col],
        triangle[row + 1][col + 1]
      );
    }
  }

  return triangle[0][0];
}

console.timeEnd("executionTime");
