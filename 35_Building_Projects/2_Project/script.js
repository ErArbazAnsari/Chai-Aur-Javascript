console.log("JavaScript is working...")

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    // console.log(height,weight)
    const result = document.querySelector('#result-area')

    if (height == "" || height <= 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`
    }
    else if (weight == "" || weight <= 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        //Result Showing
        result.innerHTML = `<span>BMI -> ${bmi}</span>`
    }
})
const reset = document.querySelector('svg')
reset.addEventListener('click', (e) => {
    location.reload()
})