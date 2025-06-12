// import {sum, multiply} from "./calc.js"
// import * as calc from "./calc.js"
// import sum, {multiply} from "./calc.js"
// import {sumTwoNumbers, multiplyTwoNumbers} from "./calc.js"
import {sum as s, multiply as m} from "./calc.js"
import { Calc } from "./calc.js"

// console.log("4 + 6 =", sum(4, 6))
// console.log("4 + 6 =", /*calc.*/sumTwoNumbers(4, 6))
console.log("4 + 6 =", s(4, 6))
// console.log("4 * 6 =", multiply(4, 6))
// console.log("4 * 6 =", /*calc.*/multiplyTwoNumbers(4, 6))
console.log("4 * 6 =", m(4, 6))

const calc = new Calc()

console.log("4 + 6 =", calc.suma(4, 6))
console.log("4 * 6 =", calc.multiplicacao(4, 6))
console.log(calc.name)