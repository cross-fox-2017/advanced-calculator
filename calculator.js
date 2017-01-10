"use strict";

class Calculator {
  constructor (input){
  	this.input = input
  }
Ditambah(input){
  this.input += input
  return this
	}
Dikali(input){
  this.input *= input
  return this
	}
Dibagi(input){
  this.input /= input
  return this
	}
Dikurang(input){
  this.input -= input
  return this
	}
Ditambah(input){
  this.input += input
  return this
	}
Perpangkatan(input){
  this.input = Math.pow(this.input, inputan);
  return this
	}
Akar(){
	this.input = Math.sqrt(this.input);
	return this
	}
Lingkaran(input){
	this.input = Math.pow(this.input, 2) * 3,14
	return this
	}
hasil(){
	return `Hasil : ${this.input}`
	}
}
var calculatorHasil = new Calculator(4)
console.log(calculatorHasil.Ditambah(5).hasil())

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
