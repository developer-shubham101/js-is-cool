function miniMaxSum(arr) {
  arr = arr.sort((a, b) => a - b);

  let min = 0;
  let max = 0;
  for (var i = 0; i < arr.length; i++) {
    if (i == 0) {
      min += arr[i];
    } else if (i == arr.length - 1) {
      max += arr[i];
    } else {
      min += arr[i];
      max += arr[i];
    } 
  }
  console.log(`${min} ${max}`);

}




// miniMaxSum([1, 3, 5, 7, 9]);

miniMaxSum([1,2,3,4,5]);