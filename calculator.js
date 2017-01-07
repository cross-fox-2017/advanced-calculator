"use strict";

class Calculator {
  //write your code here
  constructor(value = 1){
    this._value = value
  }
  add(input){
    this._value += input
    return this
  }
  reduce(input){
    this._value -= input
    return this
  }
  result(){
    return this._value
  }

}

let execute = new Calculator()

console.log(execute.add(8).divide(3).result());

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
