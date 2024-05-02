const coding = ['cpp', 'java', 'javascript']

let data = coding.forEach((item) => {
    return item
})

// console.log(data)



const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 0]
// const newNums = numbers.filter((num) => { return num > 4})
const newNums = numbers.filter((num) => num > 4)

// console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === 'History')

userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})
// console.log(userBooks);




// +++++++++++++++++++++++++++++++++++++++++++++
let new1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let data1 = new1.map((item) => {
    return item + 10
})

// console.log(data1)

// ++++++++++++++++++++++++++++++++++++++++++++++
// chanining

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let data2 = numbers1
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num < 50)
    .map((num) => num * num * num * num * num * num)
// console.log(data2)


// ++++++++++++++++++++++++++++++++++++++++++++++
// reduce()
// let numbers2 = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// let myTotal = numbers2.reduce((previous, current) => {
//     console.log(`Previous: ${previous} and Current: ${current} = ${previous * current}`)
//     return previous * current
// }, 1)

// console.log(myTotal)


// Another Example --> Shoping Cart
let myShoppingCart = [
    {
        courseName: "pyhton course",
        coursePrice: 100
    },
    {
        courseName: "cpp course",
        coursePrice: 200
    },
    {
        courseName: "java course",
        coursePrice: 100
    },
    {
        courseName: "data science course",
        coursePrice: 100
    },
]

let totalBill = myShoppingCart.reduce((acc, item) => {
    return acc + item.coursePrice;
}, 0)

console.log("Your Payable Amount:", totalBill)
// ++++++++++++++++++++++++++++++++++++++++++++++
