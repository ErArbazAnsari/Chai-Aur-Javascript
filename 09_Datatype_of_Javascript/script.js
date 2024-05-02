// Javascript datatypes.

// Different types of datatypes.
// 1. primitive datatypes
// 2. non-primitive datatypes (Reference Type)

// 1. Primitive Datatypes (Use as a Call by value)
// String, Number, Boolean, null, Symbol, undefined, Bigint
const number = 3.14
let loggined = true
let nothing = null
let nothing1 = undefined
let name1 = "Arbaz"
const sml1 = Symbol('123')
let sml2 = Symbol('123')

console.log(sml1 == sml2)
console.log(sml1 === sml2)

let bigNumber = 1398340980098039480237n
console.log(bigNumber)
console.log(typeof bigNumber)


console.log(sml1)
console.log(sml2)
console.log("Type of sml1 and sml2: ", typeof (sml1), typeof sml2)

// 2. Reference Datatypes or Non-primitive datatypes
// Array, Object, Function


//Arrays
// let myArray = [1, 2, 3, "A", true, false, 'A', 34234n]
// console.log(myArray)
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(myArray[element], "Type of:", typeof (myArray[element]))
// }

//Objects
let myObj = {
    name: "Arbaz Ansari",
    age: 20,
    salary: 100
}

console.log(myObj)
console.log(myObj.name)

//Functions
const myFunction = function () {
    console.log("This is my Funciton")
}

console.log(myFunction())


// function checktpe(data){
//     return typeof(data)
// }
// checktype(number)