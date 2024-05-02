// Arrays

const myArray = [1, 2, 3, 4, 5, 6]
console.log(myArray, typeof myArray)
console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[5])

const myArra1 = [1, true, "Arbaz", null, undefined]
console.log(myArra1)

// Methods in Array
// myArra1.push(19)
// console.log(myArra1)

// myArra1.pop()
// console.log(myArra1)

myArra1.unshift(100)
console.log(myArra1)

// for (let index = 0; index < 1000000; index++) {
//     myArra1.unshift(index)
//     console.log(myArra1)
// }

myArra1.shift(100)
console.log(myArra1)


console.log(myArra1.includes(1))
console.log(myArra1.indexOf('Arbaz'))

console.log(myArra1)
const newArray = myArra1.join()
console.log(newArray, "--> typeof", typeof newArray, "with length", newArray.length)


// slice, splice
const arr1 = [1, 2, 3, 4, 5]
const arr2 = arr1.slice(0, 3)

console.log(arr1)
console.log(arr2)

// splice
const arr3 = [1, 2, 3, 4, 5]
const arr4 = arr3.splice(0, 3)

console.log(arr3)
console.log(arr4)
