// Function with objects and array

//Rest Operator
function countCart(...num) {
    return num
}
console.log(countCart(1, 2, 3, 4, 5))


// objects
const myObj = {
    name: "Arbaz",
    age: 20
}

function myFunction(anyObject) {
    return `Name is: ${myObj.name} and age: ${myObj.age}`
}

console.log(myFunction(myObj))
console.log({
    name: "Arbaz Ansari",
    age: 100
})


const myArray = [1, 2, 3, 4, 5,]
function myArrayFunction(getArray, index) {
    return getArray[index]
}

console.log(myArrayFunction(myArray, 1))
console.log(myArrayFunction([
    10, 20, 30, 40, 100
], 1))
