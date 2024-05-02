// higher order array loop

// ["","",""]
// [{},{},{}]


//Forof loop --> automatically check starting and ending and length
const myArray = [1, 2, 3, 4, 5, 6]
for (const i of myArray) {
    // console.log(`value is: ${i}`)
}


const greetings = "Hello, World!"
for (const iterator of greetings) {
    // console.log(`char is: ${iterator}`);
}



// Maps in javascript --> always containes unique values, and stored in ordered way
const map = new Map()
map.set("IN", "India")
map.set("USA", "United State of America")
map.set("CND", "Canada")
map.set("IN", "India")


// console.log(map)
// console.log("\n\niterating map")
for (const iterator of map) {
    // console.log(iterator)
}


for (const [key, value] of map) {
    // console.log(key, "-->",value)
}


// let check on object
const myObj = {
    game1: "NFS",
    game2: "GTA"
}

// myObj is not iterable
// for (const [key,value] of myObj) {
//     console.log(key, "-->",value)
// }



const languages = {
    js: "javascript",
    py: "python",
    cpp: "c++",
}

for (const key in languages) {
    // console.log(`${key} stands for: ${languages[key]}`)
}



//for in loop in array
// let array1 = ['py', 'js', 'java', 'cpp']
// for (const key in array1) {
// console.log(`${key} stand for: ${array1[key]}`)
// }


// let array1 = ['py', 'js', 'java', 'cpp']
// array1.forEach(function (item) { console.log(item) })

// let array1 = ['py', 'js', 'java', 'cpp']
// array1.forEach(function (item, index, array1) { console.log(item, index, array1) })


const myCoding = [
    {
        langName: "Javascript",
        fileName: ".js"
    },
    {
        langName: "python",
        fileName: ".py"
    },
    {
        langName: "cpp",
        fileName: ".cpp"
    }
]

myCoding.forEach((item) => { console.log(item.langName, "::", item.fileName) })