"use strict";

import {Calculator} from "./calculator.js";

// execute function on calculator.js in here
let calculator = new Calculator(2)

calculator.tambah(2).hasil().kali(6).hasil().kurang(4).hasil().bagi(2).hasil();

let calculator2 = new Calculator(10)

calculator2.pangkat(2).bagi(10).lingkaran().hasil()
