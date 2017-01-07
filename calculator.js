"use strict";

export class Calculator {
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
  multiplication(input){
    this._value *= input
    return this
  }
  divide(input){
    this._value /= input
    return this
  }
  pow(input){
    this._value = Math.pow(this._value,b)
    return this
  }
  result(){
    return this._value
  }

}


/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
