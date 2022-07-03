function birthdayCakeCandles(candles) {
  var largeNo = 0;
  var totalCount = 1;
  for (const element of candles) {
    if (element > largeNo) {
      largeNo = element;
      totalCount = 1;
    } else if (element == largeNo) {
      totalCount++;
    }
  }
  return totalCount;
}





console.log(birthdayCakeCandles([3, 3, 1, 3, 34]));
