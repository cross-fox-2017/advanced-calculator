"use strict";

export class Calculator {
  //write your code here
  constructor(input){
    this.input = input
  }

  tambah(input){
    this.input += input
    return this
  }

  kurang(input){
    this.input -= input
    return this
  }

  kali(input){
    this.input *= input
    return this
  }

  bagi(input){
    this.input /= input
    return this
  }

  pangkat(input){
    this.input = Math.pow(this.input, input)
    return this
  }

  akar(input){
    this.input = Math.sqrt(this.input, input)
    return this
  }

  lingkaran(){
    this.input = 3.14 * Math.pow(this.input, 2)
    return this
  }

  hasil(){
    console.log(this.input);
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
