// if statements

// if(true){
//     // statements
//     console.log("JavaScript")
// }

// if(false){
//     // statements
//     console.log("JavaScript")
// }


let isUserLonggined = false

if (isUserLonggined) {
    // console.log("Yes, User is Loggined.")
}

// <, >, <=, >=, ==, !=, ===, !==
if (3 != 2) {
    // console.log("3 is not equal to 2");
}

if (3 === '3') {
    // console.log("Exactly Equal")
}


if (2 !== '2') {
    // console.log("Not Equal Value");
}


let temperature = 141;
if (temperature < 50) {
    // console.log("Temperature is Less than 50")
}
else {
    // console.log("Temperature is Higher than 50")
}



// let score = 100;
// if (score > 150) {
//     let newScore = 200;
//     console.log("Old score:", score);
//     console.log("New score:", newScore);
// }
// console.log(newScore)// newScore is not defined
// console.log(score)


let score = 2010;
if (score > 400) console.log("Score is high"), console.log("highest score now") // Implicit scope. Not Recommended

else console.log("Less Score")

