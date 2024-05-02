// We have to types of memory
// 1. stack
// 2. heap

let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google. com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "hitesh@google. com"
console.log(userOne.email)
console.log(userTwo.email)