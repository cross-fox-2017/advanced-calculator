"use strict";

export class Calculator {
  constructor(angka1 = 0){
    this.nilai = angka1;
  }

  jumlah(angka2){
    return this.nilai += angka2
  }
  kurang(angka3){
    return this.nilai -= angka3
  }
  kali(angka4){
    return this.nilai *= angka4
  }
  bagi(angka5){
    return this.nilai /= angka5
  }
  pangkat(angka6){
    return this.nilai = Math.pow(this.nilai, angka6);
  }
  akar(angka8){
    return this.nilai = Math.sqrt(this.result);
  }
  lingkaran(angka9){
    return this.nilai = Math.pow(this.result, 2) * 3.14
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
