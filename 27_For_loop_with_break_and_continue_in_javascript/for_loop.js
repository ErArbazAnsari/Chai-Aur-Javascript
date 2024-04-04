// For Loop in Javascript

// for (let i = 1; i <= 10; i++) {
//     const element = i;

//     if (element == 5) {
//         console.log("5 is best number.")
//     }

//     console.log(element)
// }


// for (let i = 1; i <= 3; i++) {
//     console.log(i)
//     for (let j = 1; j <= 5; j++) {
//         const element = j;
//         console.log("\t", element)
//     }
// }


// Loop on array
const myArray = [1, 2, 3, 4, 5]
for (let i = 0; i < myArray.length; i++) {
    // console.log(`${myArray[i] = (i + 50000)}`)
}



// break and continue
for (let index = 1; index <= 20; index++) {
    const element = index;
    if (element === 5) {
        console.log("5 is detected")
        break;
    }
    console.log(element);
}

// continue
for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log("5 is detected")
        continue
    }
    console.log(index);
}

