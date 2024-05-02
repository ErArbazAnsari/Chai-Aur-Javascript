const name1 = "Arbaz"
let varCount = 10

console.log(name1 + varCount + "Value") //Not good way to write

// In todays world we use like this
console.log(`Hello everyone, my name is ${name1.toUpperCase()} and my varCount is ${varCount}`)

const gameName = new String('GTA-V')
console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toLocaleLowerCase())
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf("T"))

const newString = gameName.substring(0, 2)
console.log(newString)

const str1 = gameName.split(" ")
console.log(str1)


const str2 = gameName.slice(-5, -2)
console.log(str2)

const str3 = "   Arbaz Ansari   "
console.log(str3)
console.log(str3.trim())

let url = "https://www.youtube.com/zyadkr%20dljlff%20sd"
const newurl = url.replace('%20', '-')
console.log(newurl)

console.log(newurl.includes('www'))