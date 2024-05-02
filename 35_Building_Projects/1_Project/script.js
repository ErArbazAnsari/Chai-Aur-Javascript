console.log("JavaScript Working...")

const buttons = document.querySelectorAll('.box')
const body = document.querySelector('body')

buttons.forEach(function (button) {
    button.addEventListener('click', (e) => {
        console.log(e)
        console.log(e.target)
        switch (e.target.id) {
            case 'blue':
                document.body.style.backgroundColor = e.target.id;
            case 'red':
                document.body.style.backgroundColor = e.target.id;
            case 'grey':
                document.body.style.backgroundColor = e.target.id;
            case 'yellow':
                document.body.style.backgroundColor = e.target.id;
        }
    })
    const buttonReset = document.querySelector('button')
    // console.log(buttonReset.innerHTML)
    buttonReset.addEventListener('click', () => {
        location.reload()
    })
})