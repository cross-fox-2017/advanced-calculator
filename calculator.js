"use strict";

export class Calculator {
  constructor(angka1){
    this.nilai = angka1 || 0;
  }

  jumlah(angka2){
    this.nilai += angka2
    return this;
  }
  kurang(angka3){
    this.nilai -= angka3
    return this;
  }
  kali(angka4){
    this.nilai *= angka4
    return this;
  }
  bagi(angka5){
    this.nilai /= angka5
    return this;
  }
  pangkat(angka6){
    this.nilai = Math.pow(this.nilai, angka6);
    return this;
  }
  akar(){
    this.nilai = Math.sqrt(this.result);
    return this;
  }
  lingkaran(){
    this.nilai = Math.pow(this.result, 2) * 3.14;
    return this;
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
