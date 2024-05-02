// const userEmail = "abc@gmail.com"
// const userEmail = ""
const userEmail = []
// const userEmail = {}

if (userEmail) {
    console.log("We got you email");
}

else {
    console.log("email not received")
}


// Falsy value:
// false, 0, -0, BigInt 0n, "", null, undefined, NAN

// Truthy Value:
// "0", 'false', " ", [], {}, function(){}, true


const newMail = []
if (newMail.length === 0) {
    console.log("Array is empty");
}


const newobj = {}
if (Object.keys(newobj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??) : null undefined
let vall;
// vall =
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1);



// Ternary Operator
const iceTea = 100;
iceTea > 199 ? console.log("True") : console.log("False")