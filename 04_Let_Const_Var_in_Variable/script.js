console.log("Let, Const and Var in Javascript.")

const accoutId = 123455
let custEmail = "abc@gmail.com"
var passwd = "abc@123"
accoutCity = "Gurgaon"
let accoutState;

/*
Preferred Not Use Var in your program
Because of block scope
*/

// accoutId = 12 // Not Allowed
custEmail = "bca@gmail.com"
passwd = "cba@gmail.com"
accoutCity = "India"

console.log(accoutId);
console.log(custEmail);
console.log(passwd);
console.log(accoutCity)
console.log(accoutState)


// Another way to print the data;
console.table([accoutId, custEmail, passwd, accoutCity, accoutState])

accoutState = "Active"

console.table([accoutId, custEmail, passwd, accoutCity, accoutState])
