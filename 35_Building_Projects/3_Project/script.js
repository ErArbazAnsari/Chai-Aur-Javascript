const timer = document.getElementById('timer')

setInterval(function () {
    let date = new Date()
    timer.innerHTML = date.toLocaleTimeString()
}, 1000)