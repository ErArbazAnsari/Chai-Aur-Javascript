const myobj = {
    name: "Arbaz Ansari",
    rollno: "123",
    welcomeMessage: function () {
        console.log(`Welcome ${this.name}, in this website.`);
        console.log(this)
    }
}

// myobj.welcomeMessage()
// myobj.name = "Vishal"
// myobj.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Arbaz"
//     console.log(this.username);
//     console.log(this);
// }


// Arrow Funcition
const chai = () => {
    let username = "Arbaz"
    console.log(this.username);
    console.log(this);
}

chai()