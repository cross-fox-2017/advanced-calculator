"use strict";

class Calculator {
  constructor(num){
    this.number = num
  }
  kali(num){
    this.number *= num
    return this
  }

  tambah(num){
    this.number += num
    return this
  }

  kurang(num){
    this.number -= num
    return this
  }

  bagi(num){
    this.number /= num
    return this
  }

  pangkat(num){
    this.number = Math.pow(this.number,num)
    return this
  }

  pi(){
    return Math.PI
  }

  akar(){
    this.number = Math.pow(this.number,0.5)
    return this
  }

  lingkaran(){
    this.number = this.pi()*Math.pow(this.number,2)
    return this
  }

  hasil(){
    return this.number
  }
}

var hitung = new Calculator(10)

console.log(hitung.tambah(10).kurang(12).kali(3).bagi(4).pangkat(2).akar().lingkaran().hasil())

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
