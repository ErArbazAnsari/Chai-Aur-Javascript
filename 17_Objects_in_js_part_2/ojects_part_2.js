// const tinderUser = {}
// tinderUser.name = "Arbaz Ansari"
// tinderUser.email = "abc@gmail.com"
// tinderUser.address = "New Delhi"

// console.log(tinderUser)
// console.log(typeof tinderUser)

// const newDB = {
//     userMail: "abc@gmail.com",
//     details: {
//         name: {
//             fname: "Arbaz",
//             lnmae: "Ansari"
//         }
//     }
// }

// console.log(newDB)

// console.log(newDB.details.name)

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}

// const returnedTarget = Object.assign({},obj1,obj2)

// console.log(obj1, obj2)
// console.log("\n",returnedTarget)

//Another Way
// const returnedTarget = {...obj1, ...obj2}
// console.log(returnedTarget)


//From Server we got the data like this
const data = [
    {
        uname: "abc",
        uemail: "abc@gmail.com"
    },
    {
        uname: "abc",
        uemail: "abc@gmail.com"
    },
    {
        uname: "abc",
        uemail: "abc@gmail.com"
    },
    {
        uname: "abc",
        uemail: "abc@gmail.com"
    }
]
console.log(data[1].uemail, "and", data[1].uname)

console.log(Object.keys(data))
console.log(Object.values(data))
console.log("\n\n", Object.entries(data))