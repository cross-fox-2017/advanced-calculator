"use strict";

export class Calculator {
    //write your code here
    constructor(input) {
        this._input = input;
    }

    set input(value) {
        this._input = value;
    }

    get input() {
        return this._input;
    }

    perkalian(input2) {
        this._input *= input2;
        return this;
    }
    pengurangan(input2) {
        this._input -= input2;
        return this;
    }
    penjumlahan(input2) {
        this._input += input2;
        return this;
    }
    pembagian(input2) {
        this._input /= input2;
        return this;
    }
    pangkat(input2) {
        this._input = Math.pow(this._input, input2);
        return this;
    }
    akar() {
        this._input = Math.sqrt(this._input);
        return this;
    }
    lingkaran() {
        this._input = Math.PI * Math.pow(this._input, 2);
        return this;
    }
    hasil() {
        return this._input.toFixed(2)
    }




}

/** note : you can use several features from ecmascript, such as:
 * - Classes
 * - Default Parameters
 * - Destructured Assignment
 * - Template Literals
 * - Method Chaining
 */
