"use strict";

export class Calculator {
  //write your code here
  constructor(value){
    this.value = value
  }

  addition(a) {
    this.value += a
  }

  subtraction(b) {
    this.value -= b
  }

  multiplication(c) {
    this.value *= c
  }

  division(d) {
    this.value /= d
  }

  perpangkatan(e) {
    this.value = Math.pow(this.value, e)
  }

  akarPangkat(f) {
    this.value = Math.sqrt(this.value, f)
  }

  konstantaPi() {
    this.value = 3.14 * Math.pow(this.value, 2)
  }

  hasil() {
    console.log(this.value);
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
