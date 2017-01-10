"use strict";

export class Calculator {
  constructor(number) {
    this.number = number; // 5
    this.hasil = 0;
  }

  penjumlahan (angka) { // angka = 8
    this.hasil = this.number + angka
    return this
    //`Hasil penjumlahan ${this.number} dengan ${angka} adalah angka # ${hasil}`;
  }

  pengurangan(angka) {
    this.hasil -= angka
    return this
    //`Hasil pengurangan ${this.number} dengan ${angka} adalah angka # ${hasil}`;
  }

  perkalian (angka) {
    this.hasil *= angka
    return this
    // `Hasil perkalian ${this.number} dengan ${angka} adalah angka # ${hasil}`;
  }

  pembagian (angka) {
    this.hasil /= angka
    return this
    // `Hasil pembagian ${this.number} dengan ${angka} adalah angka # ${hasil}`;
  }

  pangkat (angka) {
    this.hasil = Math.pow(this.hasil, angka)
    return this
    // `Hasil pangkat ${this.number} dengan ${angka} adalah angka # ${hasil}`;
  }

  akar () {
    this.hasil = Math.sqrt(this.hasil)
    return this
    // `Hasil akar pangkat dari angka ${this.number} adalah angka # ${hasil}`;
  }

  lingkaran() {
    const pi = 3.14
    let jari2 = Math.pow(this.hasil, 2);
    this.hasil = pi * jari2
    return this
    // `Hasil luas lingkaran dari angka ${this.number} adalah angka # ${hasil}`;
  }
}
