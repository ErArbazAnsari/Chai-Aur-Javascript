let number1 = 100
console.log(number1)
console.log(typeof number1)

// Another Way
let number2 = new Number(100)
console.log(number2)

console.log(number2.toString().length, typeof number2)
console.log(number2.toFixed(5))

const newNumber = 110.9983
console.log(number2.toPrecision(2))


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))


// ++++++++++++++++++Maths+++++++++++++++++++++
// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.3))
// console.log(Math.floor(4.3))
// console.log(Math.sqrt(81))
// console.log(Math.min(1, 2, 3, 4, 0))
// console.log(Math.max(1, 2, 3, 4, 0))

// for (let index = 0; index < 10000000; index++) {
//     console.log(Math.random() * 10,)
// }

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min))

