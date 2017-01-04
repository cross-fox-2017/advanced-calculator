"use strict";

class Calculator {
  constructor(hasil=5){
    this.hasil = hasil
  }
  //write your code here
  penjumlahan(a=0){
    this.hasil = this.hasil += a
    return this
  }
  pengurangan(a=0){
    this.hasil = this.hasil -= a
    return this
  }
  perkalian(a=1){
    this.hasil = this.hasil *= a
    return this
  }
  pembagian(a=1){
    this.hasil = this.hasil /= a
    return this
  }
  pangkat(a=2){
    this.hasil = this.hasil ^= a
    return this
  }
  akarPangkat(){
    this.hasil = Math.sqrt(this.hasil)
    return this
  }
  pi(){
    return 3,14
  }
}

var cal = new Calculator(10)
console.log(cal.penjumlahan(5).pengurangan(7).perkalian(4).pembagian(3).pangkat(2).akarPangkat());
/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
