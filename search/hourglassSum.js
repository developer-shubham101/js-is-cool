function hourglassSum(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[i].length - 2; j++) {
      let sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
      max = Math.max(max, sum);
    }
  }
  return max;
}





console.log(hourglassSum([
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]));
