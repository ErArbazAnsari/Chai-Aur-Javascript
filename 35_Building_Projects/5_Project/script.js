document.querySelector('#generateBtn').addEventListener('click', generateNewOTP);

function generateNewOTP() {
    let otpsize = 6;
    let character = '1234567890';
    var myOTP = '';
    for (let i = 0; i < otpsize; i++) {
        myOTP += character.charAt(Math.floor(Math.random() * character.length));
    }
    document.querySelector('#showOtp').innerHTML = myOTP;
    // console.log(myOTP);
}

document.querySelector('#reload').addEventListener('click', pageReload);

function pageReload() {
    location.reload()
}