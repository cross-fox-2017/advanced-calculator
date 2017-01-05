"use strict";
export class Calculator {
  constructor(x) {
    this.result = x;
  }
  jumlah(x) {
    this.result += x;
    return this;
  }

  kurang(x) {
    this.result -= x;
    return this;
  }
  kali(x) {
    this.result *= x;
    return this;
  }
  bagi(x) {
    this.result /= x;
    return this;
  }
  pangkat(x = 2) {
    this.result = Math.pow(this.result, x)
    return this;
  }
  lingkaran(x = 3.14) {
    this.result = this.result * x;
    return this;
  }

  hasil() {
    console.log(this.result);
    return this
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
