"use strict";

export class Calculator {
  //write your code here
  constructor (num) {
    this.num = num;
    this.hasil = 0;
  }

  pertambahan(angka) {
    this.hasil = this.num + angka;
    return this
  }

  pengurangan(angka) {
    this.hasil -= angka;
    return this
  }

  perkalian(angka) {
    this.hasil *= angka;
    return this
  }

  pembagian(angka) {
    this.hasil /= angka;
    return this
  }

  pangkat(angka) {
    this.hasil = Math.pow(this.hasil, angka);
    return this
  }

  akar() {
    this.hasil = Math.sqrt(this.hasil);
    return this
  }

  lingkaran() {
    const phi = 3.14
    this.hasil = Math.pow(this.hasil, 2) * phi;
    return this
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
