// Basic systax of arrow function

// () => {}
// example of arrow function

//Basic Way
const myfunction = (a, b) => {
    return a + b
}

//Implesit way
const myfunction2 = (a, b) => a + b;

//Implesit way Another way
const myfunction3 = (a, b) => (a + b);


console.log(myfunction(10, 20))
console.log(myfunction2(10, 20))
console.log(myfunction3(10, 20))


const myfunction4 = () => { username: "Arbaz" } // In that way we can't return object
console.log(myfunction4())

const myfunction5 = () => ({ username: "Arbaz" }) // In that way we can return object. rap in () 
console.log(myfunction5())