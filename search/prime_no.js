class PrimeNo {
  constructor(upto) {
    this.upto = upto;
  }

  getPrimeNo() {
    console.log('Hello Here is prime no.');
    for (let i = 2; i <= this.upto; i++) {
      if (this.isPrime(i)) {
        console.log(i);
      }
    }
  }

  isPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}


new PrimeNo(100).getPrimeNo();