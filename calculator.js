"use strict";

 export default class Calculator {
  //write your code here
  constructor(num1,num2,sqr = 2,result){
    this.num1 =num1;
    this.num2 =num2;
    this.result =result;
    this.sqr = sqr;

  }
  setPenjumlahan(jumlahNum1,jumlahNum2){
    // this.num1= jumlah;
    // this.num2= jumlah;
    this.result = jumlahNum1 + jumlahNum2;
    return this.result;
  }
  setPengurangan(minNum1,minNum2){
    this.result = minNum1 - minNum2;
    return this.result;
  }
  setPerkalian(multiNum1,multiNum2){
    this.result = multiNum1 * multiNum2;
    return this.result;
  }
  setPembagian(divNum1,divNum2){
    this.result = divNum1 / divNum2;
    return this.result;
  }
  setPangkat(num1,sqr){
    this.result = Math.pow(num1,sqr);
    return this.result;
  }
  setAkarPangkat(num1){
    this.result = Math.sqrt(num1);
    return this.result;
  }
  getPi(num1){
    const Pi = 3.14;
    return this.result = Pi;
  }

  // getJumlah(){
  //   return this.result;
  // }
}


//console.log(bill.getJumlah());

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
