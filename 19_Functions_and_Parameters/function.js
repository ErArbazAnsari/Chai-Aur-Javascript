//Function in javascript

function sayMyName() {
    console.log("\nArbaz Ansari")
    console.log("Arbaz Ansari")
    console.log("Arbaz Ansari")
}

// sayMyName --> Function Reference
// sayMyName() --> Function Execution

// sayMyName()
// sayMyName()


// WAP to add to numbers
function addTwoNumber(num1, num2) {
    return console.log(num1 + num2)
}

// addTwoNumber() --> NaN
// addTwoNumber(10, 20) // 30


function loginUserMsg(name) {
    if (!name) {
        console.log("Enter Valid Name...")
        return
    }
    return (`${name} just logined, Now...`)
}

console.log(loginUserMsg("Arbaz"))
console.log(loginUserMsg())

