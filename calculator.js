"use strict";

export class Calculator {
  //write your code here
  constructor (input){
    this.result = input;
  }

  fungsiPenjumlahan(val){
    this.result += val;
    return this
  }

  fungsiPengurangan(val){
    this.result -= val;
    return this
  }

  fungsiPerkalian (val){
    this.result *= val;
    return this
  }

  fungsiPembagian(val){
    this.result /= val;
    return this
  }

  fungsiPangkat(val){
    this.result = Math.pow(this.result, val);
    return this
  }

  fungsiAkar(){
    this.result = Math.sqrt(this.result);
  }

  fungsiKonstanta(){
    this.result = Math.pow(this.result, 2) * 3.14 ;
    return this
  }

  resultCalculate(){
    return `Result : ${this.result}`
  }
}

var hitung = new Calculator(1);
    console.log(hitung.fungsiPenjumlahan(4).resultCalculate())

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
