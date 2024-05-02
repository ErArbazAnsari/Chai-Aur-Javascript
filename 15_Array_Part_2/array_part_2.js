// Array Part 2 
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [6, 7, 8, 8, 0]

// arr1.push(arr2)
// console.log("Array: ", arr1)
// console.log(arr1[0])
// console.log(arr1[1])
// console.log(arr1[2])
// console.log(arr1[3])
// console.log(arr1[4])
// console.log(arr1[5])

//concatenation
// const allArray = arr1.concat(arr2)
// console.log("Array: ", allArray)


//Spread Operator ((Commonly Used by peoples))
// const newArrayData = [...arr1, ...arr2]
// console.log(newArrayData)

//Flat
// const conjustedData = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11, 12]]]
// const read_way = conjustedData.flat(Infinity)
// console.log("\nConjusted Array:", conjustedData)
// console.log("\nReal Array:", read_way)
// console.log(read_way[11])


// console.log(Array.isArray("Arbaz Ansari"))
// console.log(Array.from("Arbaz Ansari"))

// console.log(Array.from({ roll_no: 24018 }))//Interesting

let marks1 = 80
let marks2 = 98
let marks3 = 18
console.log(Array.of(marks1, marks2, marks3))