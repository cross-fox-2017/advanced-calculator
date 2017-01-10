"use strict";

export class Calculator {
  //write your code here
  constructor(num) {
    this.num = num
  }

  penjumlahan(num) {
    this.num += num
    return this
  }

  perkalian(num) {
    this.num *= num
    return this
  }

  pengurangan(num) {
    this.num -= num
    return this
  }

  pembagian(num) {
    this.num /= num
    return this
  }

  pangkat(num) {
    this.num = Math.pow(this.num, num)
    return this
  }

  akarPangkat(){
    this.num = Math.sqrt(this.num)
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
