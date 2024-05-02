// Objects in Javascript.

//singleton
//object.create

const mysymbl = Symbol('key1')
//object literals
const jsUser = {
    name: "Arbaz Ansari",
    [mysymbl]: "key1symbol",
    rollno: 1,
    nationality: "Indian",
    email: "abc@gmail.com",
    location: "Delhi",
    "human": true,
    lastLogin: ["mon", "sun"]
}

console.log(jsUser)
console.log(typeof jsUser)
console.log(jsUser.name)
console.log(jsUser["name"])
console.log(jsUser["human"]);
console.log(jsUser[mysymbl], " --->Data type is:", typeof mysymbl);

//overwriting data 
// jsUser.rollno = 241111
// console.log(jsUser.rollno)

// console.log("\n\nFreezing jsUser") // if change any value from jsUser error not occurs but update also not happens note it.

// Object.freeze(jsUser)
// jsUser.rollno = 0
// console.log(jsUser)


jsUser.greetings = function () {
    console.log("Hello JS User...")
}

jsUser.greetings2 = function () {
    console.log(`Hello JS User...${this.name}`)
}

console.log(jsUser.greetings())
console.log(jsUser.greetings2())
