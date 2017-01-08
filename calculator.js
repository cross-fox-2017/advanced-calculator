"use strict";

// export class Calculator {
class Calculator {
  constructor(x=1){
    this.hasil=x;
  }
  kali(x){
    this.hasil = this.hasil*=x;
    return this
  }
  bagi(x){
    this.hasil = this.hasil/=x;
    return this
  }
  tambah(x){
    this.hasil = this.hasil+=x;
    return this
  }
  kurang(x){
    this.hasil = this.hasil-=x;
    return this
  }
  pangkat(x){
    this.hasil = Math.pow(this.hasil,x)
    return this
  }
  akar(x){
    this.hasil = Math.sqrt(this.hasil)
    return this
  }
  phi(){
    this.hasil = this.hasil*=3.14
    return this
  }
}
var kalkulator = new Calculator(10);
console.log(kalkulator.pangkat(2).akar(2).kali(10).phi().tambah(10).kurang(10).bagi(2));
/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
