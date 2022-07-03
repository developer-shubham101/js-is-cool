class Factorial {

  factorialWithLoop(num) {
    var result = 1;
    for (let index = num; index >= 1; index--) {
      console.log(`${result} * ${index} = ${result * index}`);
      result = result * index;
    }
    return result;
  }
  factorialWithoutLoop(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorial(num - 1);
  }
}


var factorial = new Factorial();
console.log(factorial.factorialWithLoop(5));
console.log(factorial.factorialWithLoop(5));