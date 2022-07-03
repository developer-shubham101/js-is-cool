/* function getTotalX(a, b) {
  let maxFactor = Math.max(b[0], b[1], a[0], a[1]);
  let maxFactor2 = Math.max(a[0], a[1]);

  const factors1 = [];
  const factors2 = [];
  const common = [];

  const table1 = [];
  const table2 = [];

  for (let i = 1; i <= maxFactor2; i++) {
    table1.push(i * a[0]);
    table2.push(i * a[1]);
  }
  // looping through 1 to num
  for (let i = 1; i <= maxFactor; i++) {
    if (b[0] % i == 0) {
      factors1.push(i);
    }
    if (b[1] % i == 0) {
      factors2.push(i);
    }
  }

  

  return [factors1, factors2, table1, table2];
}

console.log(getTotalX([2, 6], [24, 36])); */


function getTuple() {
  return ["John", "Doe", 24];
}
var [userName, userLastName, userAge] = getTuple();

console.log(`Name is: ${userName} ${userLastName} and his age is: ${userAge}`);