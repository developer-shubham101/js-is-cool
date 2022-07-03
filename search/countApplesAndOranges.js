function countApplesAndOranges(s, t, a, b, apples, oranges) {
  var applesCount = 0;
  var orangeCount = 0;
  for (const apple of apples) {
    let finalPoint = apple + a;
    if (finalPoint >= s && finalPoint <= t) {
      applesCount++;
    }

  }
  for (const orange of oranges) {
    let finalPoint = orange + b;
    if (finalPoint >= s && finalPoint <= t) {
      orangeCount++;
    }
  }

  console.log(`${applesCount}\n${orangeCount}`);

}





(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]));
