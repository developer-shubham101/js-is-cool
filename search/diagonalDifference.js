function diagonalDifference(arr) {
  var totalLTR = 0;
  var totalRTL = 0;
  for (let i = 0; i < arr.length; i++) {
    totalLTR += arr[i][i];
    totalRTL += arr[i][arr.length -1 -i];
  }
   
  return Math.abs(totalLTR - totalRTL);
}






console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));