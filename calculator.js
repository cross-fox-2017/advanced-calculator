"use strict";

export class Calculator {
  constructor (nums){
    this.nums= nums

  }
  tambah(num){
    this.nums = this.nums+num
    return this
  }
  kurang(num){
    this.nums = this.nums-num
    return this
  }
  bagi(num){
    this.nums = this.nums/num
    return this
  }
  kali(num){
    this.nums = this.nums*num
    return this
  }
  akar(){
    this.nums = Math.sqrt(this.nums)
    return this
  }
  pangkat(num){
    this.nums= Math.pow(this.nums,num)
    return this
  }
  result(){
    return this.nums
  }
}


/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
